(function () {
  const logEl = document.getElementById('log');
  const controlsEl = document.getElementById('controls');
  const metaLinksEl = document.getElementById('meta-links');
  const emptyStateEl = document.getElementById('empty-state');
  const sortEl = document.getElementById('sort');

  let activeTag = null;
  let sortOrder = 'newest';

  // ---- Date parsing (understands "2026 Dec", "Dec 2026", "2026-12-05", "2026 Sept") ----
  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  function dateValue(str) {
    if (!str) return null;
    str = String(str);
    const iso = str.match(/(\d{4})-(\d{2})/);
    if (iso) return parseInt(iso[1], 10) * 12 + (parseInt(iso[2], 10) - 1);
    const yearMatch = str.match(/\b(19|20)\d{2}\b/);
    if (!yearMatch) return null;
    const lower = str.toLowerCase();
    const idx = MONTHS.findIndex(function (m) { return lower.indexOf(m) !== -1; });
    return parseInt(yearMatch[0], 10) * 12 + (idx === -1 ? 0 : idx);
  }

  function renderSort() {
    sortEl.innerHTML = '';
    const label = document.createElement('label');
    label.htmlFor = 'sort-select';
    label.textContent = 'Sort by date';
    const select = document.createElement('select');
    select.id = 'sort-select';
    [['newest', 'Newest first'], ['oldest', 'Oldest first']].forEach(function (opt) {
      const o = document.createElement('option');
      o.value = opt[0];
      o.textContent = opt[1];
      select.appendChild(o);
    });
    select.value = sortOrder;
    select.addEventListener('change', function () {
      sortOrder = select.value;
      renderEntries();
    });
    sortEl.appendChild(label);
    sortEl.appendChild(select);
  }

  // ---- Render site links ----
  (siteLinks || []).forEach(function (link) {
    if (!link.href) return;
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (!link.href.startsWith('mailto:')) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    metaLinksEl.appendChild(a);
  });

  // ---- Collect unique tags ----
  const allTags = Array.from(
    new Set(projects.flatMap(function (p) { return p.tags || []; }))
  );

  function renderControls() {
    controlsEl.innerHTML = '';
    if (allTags.length <= 1) return;

    const allBtn = document.createElement('button');
    allBtn.className = 'tag-pill' + (activeTag === null ? ' active' : '');
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', function () {
      activeTag = null;
      renderControls();
      renderEntries();
    });
    controlsEl.appendChild(allBtn);

    allTags.forEach(function (tag) {
      const btn = document.createElement('button');
      btn.className = 'tag-pill' + (activeTag === tag ? ' active' : '');
      btn.textContent = tag;
      btn.addEventListener('click', function () {
        activeTag = (activeTag === tag) ? null : tag;
        renderControls();
        renderEntries();
      });
      controlsEl.appendChild(btn);
    });
  }

  function renderEntries() {
    logEl.innerHTML = '';
    const filtered = activeTag
      ? projects.filter(function (p) { return (p.tags || []).includes(activeTag); })
      : projects;

    emptyStateEl.hidden = filtered.length !== 0;

    // Sort by date; entries without a usable date always go to the bottom.
    const sorted = filtered.slice().sort(function (a, b) {
      const da = dateValue(a.date);
      const db = dateValue(b.date);
      if (da === null && db === null) return 0;
      if (da === null) return 1;
      if (db === null) return -1;
      return sortOrder === 'newest' ? db - da : da - db;
    });

    sorted.forEach(function (p) {
      const entry = document.createElement('article');
      entry.className = 'entry';

      const date = document.createElement('span');
      date.className = 'entry-date';
      date.textContent = p.date || '';
      entry.appendChild(date);

      const title = document.createElement('h2');
      title.className = 'entry-title';
      if (p.link) {
        const a = document.createElement('a');
        a.href = p.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = p.title;
        title.appendChild(a);
      } else {
        title.textContent = p.title;
      }
      entry.appendChild(title);

      if (p.description) {
        const desc = document.createElement('p');
        desc.className = 'entry-desc';
        desc.textContent = p.description;
        entry.appendChild(desc);
      }

      if (p.image) {
        const figure = document.createElement('figure');
        figure.className = 'entry-figure';
        const img = document.createElement('img');
        img.src = p.image;
        img.alt = p.title;
        img.loading = 'lazy';
        figure.appendChild(img);
        entry.appendChild(figure);
      }

      if (p.details && p.details.length) {
        const details = document.createElement('details');
        details.className = 'entry-details';

        const summary = document.createElement('summary');
        summary.textContent = 'Full project details';
        details.appendChild(summary);

        const body = document.createElement('div');
        body.className = 'entry-details-body';

        p.details.forEach(function (section) {
          if (section.heading) {
            const h3 = document.createElement('h3');
            h3.textContent = section.heading;
            body.appendChild(h3);
          }
          if (section.points && section.points.length) {
            const ul = document.createElement('ul');
            section.points.forEach(function (point) {
              const li = document.createElement('li');
              li.textContent = point;
              ul.appendChild(li);
            });
            body.appendChild(ul);
          }
        });

        details.appendChild(body);
        entry.appendChild(details);
      }

      const footer = document.createElement('div');
      footer.className = 'entry-footer';

      if (p.tags && p.tags.length) {
        const tagList = document.createElement('ul');
        tagList.className = 'entry-tags';
        p.tags.forEach(function (tag) {
          const li = document.createElement('li');
          li.textContent = tag;
          tagList.appendChild(li);
        });
        footer.appendChild(tagList);
      }

      if (p.link) {
        const linkEl = document.createElement('a');
        linkEl.className = 'entry-link';
        linkEl.href = p.link;
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
        linkEl.textContent = 'View →';
        footer.appendChild(linkEl);
      }

      entry.appendChild(footer);
      logEl.appendChild(entry);
    });
  }

  renderSort();
  renderControls();
  renderEntries();
})();
