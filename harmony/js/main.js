// Nav scroll
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile drawer
const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('navDrawer');
if (toggle && drawer) {
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// Active link
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
  const h = a.getAttribute('href') || '';
  if (h && (page === h || (page === '' || page === 'index.html') && h.includes('index'))) {
    a.classList.add('active');
  }
});

// Scroll reveal
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
