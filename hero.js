(function () {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Respect the user's motion preference: no fade, banner just scrolls away normally.
    return;
  }

  let ticking = false;

  function updateHero() {
    const heroHeight = hero.offsetHeight || 1;
    const scrollY = window.scrollY || window.pageYOffset;
    // Fully faded by the time you've scrolled ~75% of the banner's height.
    const fadeDistance = heroHeight * 0.75;
    const progress = Math.min(Math.max(scrollY / fadeDistance, 0), 1);

    hero.style.opacity = String(1 - progress);
    hero.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHero);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateHero();
})();
