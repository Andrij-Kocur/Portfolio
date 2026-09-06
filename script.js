(function () {
  const logEl = document.getElementById('log');
  const controlsEl = document.getElementById('controls');
  const metaLinksEl = document.getElementById('meta-links');
  const emptyStateEl = document.getElementById('empty-state');

  let activeTag = null;

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

    filtered.forEach(function (p) {
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

  renderControls();
  renderEntries();
})();
