// ── Navigation scroll state ──────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile drawer ─────────────────────────────────────────
const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('navDrawer');
if (toggle && drawer) {
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}

// ── Active nav link ───────────────────────────────────────
(function markActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && (page.includes(href.replace('.html', '')) ||
        (page === '' || page === 'index.html') && href.includes('index'))) {
      a.classList.add('active');
    }
  });
})();

// ── Scroll reveal ─────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Stat counter animation ────────────────────────────────
function runCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dec    = parseInt(el.dataset.dec || '0', 10);
  const dur    = 1200;
  let start = null;
  const ease = t => 1 - Math.pow(1 - t, 3);
  function tick(ts) {
    if (!start) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = (target * ease(p)).toFixed(dec) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { runCounter(e.target); countObs.unobserve(e.target); }
  }),
  { threshold: 0.5 }
);
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));
