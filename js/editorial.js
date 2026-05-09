* editorial.js — shared scripts for hassanmasood.fi */

(function () {
  /* ─── THEME DEFAULTS ─── */
  const TWEAK_DEFAULTS = { pal: 'midnight', voice: 'editorial', energy: 'quiet' };
  const state = Object.assign({}, TWEAK_DEFAULTS);
  const panel = document.getElementById('tweaksPanel');

  function applyTheme() {
    document.body.dataset.pal = state.pal;
    document.body.dataset.voice = state.voice;
    document.body.dataset.energy = state.energy;
    if (!panel) return;
    panel.querySelectorAll('[data-tweak]').forEach(group => {
      const key = group.dataset.tweak;
      group.querySelectorAll('[data-val]').forEach(el => {
        el.classList.toggle('on', el.dataset.val === state[key]);
      });
    });
  }
  applyTheme();

  if (panel) {
    panel.querySelectorAll('[data-tweak]').forEach(group => {
      const key = group.dataset.tweak;
      group.querySelectorAll('[data-val]').forEach(el => {
        el.addEventListener('click', () => {
          state[key] = el.dataset.val;
          applyTheme();
          try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: el.dataset.val } }, '*'); } catch (e) {}
        });
      });
    });

    const tweakBtn = document.getElementById('tweakBtn');
    if (tweakBtn) {
      tweakBtn.addEventListener('click', () => panel.classList.toggle('show'));
    }
    const tweaksClose = panel.querySelector('.tweaks-close');
    if (tweaksClose) {
      tweaksClose.addEventListener('click', () => {
        panel.classList.remove('show');
        try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
      });
    }
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
  }

  /* ─── MOBILE DRAWER ─── */
  const drawer = document.getElementById('drawer');
  const navToggle = document.getElementById('navToggle');
  const drawerClose = document.getElementById('drawerClose');
  if (drawer && navToggle) {
    navToggle.addEventListener('click', () => drawer.classList.add('open'));
  }
  if (drawer && drawerClose) {
    drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
  }

  /* ─── SCROLL REVEAL ─── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        if (e.target.classList.contains('lang-row')) {
          const fill = e.target.querySelector('.lang-fill');
          if (fill) fill.style.width = fill.dataset.w;
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.r').forEach(el => io.observe(el));

  /* ─── SCROLLSPY (homepage only) ─── */
  const sideLinks = document.querySelectorAll('.sidenav a');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionIds = ['top', 'about', 'services', 'work', 'projects', 'skills', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  if (sections.length && (sideLinks.length || navLinks.length)) {
    function updateSpy() {
      const y = window.scrollY + window.innerHeight * 0.32;
      let active = sections[0] ? sections[0].id : '';
      sections.forEach(s => { if (s.offsetTop <= y) active = s.id; });
      sideLinks.forEach(a => a.classList.toggle('active', a.dataset.spy === active));
      navLinks.forEach(a => a.classList.toggle('active', a.dataset.link === active));
    }
    document.addEventListener('scroll', updateSpy, { passive: true });
    updateSpy();
  }

  /* ─── TIMELINE EXPAND ─── */
  document.querySelectorAll('.tl-row').forEach(row => {
    row.addEventListener('click', () => row.classList.toggle('expand'));
  });

  /* ─── CUSTOM CURSOR ─── */
  const cursor = document.getElementById('cursor');
  if (cursor) {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      cursor.style.opacity = 1;
    });
    (function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = 'translate(' + cx + 'px, ' + cy + 'px) translate(-50%, -50%)';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button, .tl-row, .proj, .svc, .svc-preview-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
  }

  /* ─── PROJECT CARD SPOTLIGHT ─── */
  document.querySelectorAll('.proj').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  /* ─── STARFIELD ─── */
  const canvas = document.getElementById('stars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, stars = [];

    function resize() {
      W = canvas.width = innerWidth * DPR;
      H = canvas.height = innerHeight * DPR;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
      const count = Math.round((innerWidth * innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 2.4,
        r: (Math.random() * 1.2 + 0.3) * DPR,
        depth: Math.random() * 0.85 + 0.15,
        tw: Math.random() * Math.PI * 2
      }));
    }
    resize();
    addEventListener('resize', resize, { passive: true });

    let scrollY = 0;
    addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

    (function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var py = (s.y - scrollY * DPR * s.depth * 0.18) % (H + 200 * DPR);
        var yy = py < 0 ? py + H + 200 * DPR : py;
        var a = 0.55 + Math.sin(t * 0.0008 + s.tw) * 0.35;
        ctx.fillStyle = 'rgba(242,237,230,' + (a * (0.35 + s.depth * 0.65)).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(s.x, yy, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    })(0);
  }

  /* ─── CONTACT FORM ─── */
  window.submitForm = function () {
    var btn = document.getElementById('submitBtn');
    var status = document.getElementById('cstatus');
    if (!btn || !status) return;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    var data = {
      firstName: (document.getElementById('fn') || {}).value || '',
      lastName: (document.getElementById('ln') || {}).value || '',
      email: (document.getElementById('em') || {}).value || '',
      company: (document.getElementById('org') || {}).value || '',
      reason: (document.getElementById('typ') || {}).value || '',
      message: (document.getElementById('msg') || {}).value || ''
    };
    fetch('https://formspree.io/f/mreyllyy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (res.ok) {
        status.className = 'cstatus ok';
        status.textContent = "Message sent — I'll be in touch soon.";
        var form = document.querySelector('.cform');
        if (form) form.reset();
      } else {
        throw new Error('Server error');
      }
    }).catch(function () {
      status.className = 'cstatus err';
      status.textContent = 'Something went wrong — please email me directly.';
    }).finally(function () {
      btn.disabled = false;
      btn.innerHTML = 'Send message <span class="arr">→</span>';
    });
  };
})();
                                                                                     
