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

  // ---- Collect unique tags, per category ----
  function uniqueSorted(key) {
    const set = new Set();
    projects.forEach(function (p) {
      (p[key] || []).forEach(function (t) { set.add(t); });
    });
    return Array.from(set).sort(function (x, y) {
      return x.localeCompare(y, undefined, { sensitivity: 'base' });
    });
  }

  const softwareTags = uniqueSorted('software');
  const hardwareTags = uniqueSorted('hardware');

  function selectTag(tag) {
    activeTag = (activeTag === tag) ? null : tag;
    renderControls();
    renderEntries();
  }

  function buildTagGroup(title, tags, kind) {
    if (!tags.length) return null;

    const group = document.createElement('section');
    group.className = 'tag-group';

    const heading = document.createElement('h2');
    heading.className = 'tag-heading';
    heading.textContent = title;
    group.appendChild(heading);

    const pills = document.createElement('div');
    pills.className = 'tag-pills';
    tags.forEach(function (tag) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tag-pill ' + kind + (activeTag === tag ? ' active' : '');
      btn.setAttribute('aria-pressed', activeTag === tag ? 'true' : 'false');
      btn.textContent = tag;
      btn.addEventListener('click', function () { selectTag(tag); });
      pills.appendChild(btn);
    });
    group.appendChild(pills);
    return group;
  }

  function renderControls() {
    controlsEl.innerHTML = '';

    if (activeTag) {
      const status = document.createElement('div');
      status.className = 'filter-status';
      status.appendChild(document.createTextNode('Showing projects that use '));
      const strong = document.createElement('strong');
      strong.textContent = activeTag;
      status.appendChild(strong);
      const clear = document.createElement('button');
      clear.type = 'button';
      clear.className = 'clear-filter';
      clear.textContent = 'Show all';
      clear.addEventListener('click', function () {
        activeTag = null;
        renderControls();
        renderEntries();
      });
      status.appendChild(clear);
      controlsEl.appendChild(status);
    }

    [
      buildTagGroup('Software', softwareTags, 'sw'),
      buildTagGroup('Hardware', hardwareTags, 'hw')
    ].forEach(function (g) { if (g) controlsEl.appendChild(g); });
  }

  function renderEntries() {
    logEl.innerHTML = '';
    const filtered = activeTag
      ? projects.filter(function (p) {
          return (p.software || []).includes(activeTag) || (p.hardware || []).includes(activeTag);
        })
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

      const tagGroups = document.createElement('div');
      tagGroups.className = 'entry-tag-groups';
      [['Software', p.software, 'sw'], ['Hardware', p.hardware, 'hw']].forEach(function (g) {
        if (!g[1] || !g[1].length) return;
        const row = document.createElement('div');
        row.className = 'entry-tag-row';
        const label = document.createElement('span');
        label.className = 'entry-tag-label';
        label.textContent = g[0];
        row.appendChild(label);
        const list = document.createElement('ul');
        list.className = 'entry-tags ' + g[2];
        g[1].forEach(function (tag) {
          const li = document.createElement('li');
          li.textContent = tag;
          list.appendChild(li);
        });
        row.appendChild(list);
        tagGroups.appendChild(row);
      });
      if (tagGroups.children.length) footer.appendChild(tagGroups);

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
