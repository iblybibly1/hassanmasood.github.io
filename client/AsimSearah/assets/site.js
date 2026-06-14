/* Asim Searah — site interactions */
(function () {
  'use strict';

  /* ---- Config you can edit ---- */
  // Countdown target: 2 days from first load. Replace with a fixed event date
  // for a real show, e.g. new Date('2026-07-01T19:00:00+03:00').
  var LIVE_TARGET = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  // Direct email used as the no-JS / fallback booking destination.
  var CONTACT_EMAIL = 'bookings@asimsearah.com';

  // Featured YouTube video IDs (in display order).
  var VIDEO_IDS = ['z_EqhWLOlNE', 'trysAZoKZvc', '2rDCJxKruLg', '0UJwsW0jRR4', 'rjP1CICoh6o', 'QTIrJakVA4I'];

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Navbar shadow on scroll ---- */
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (!navbar) { return; }
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg', 'shadow-black/40');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-black/40');
    }
  }, { passive: true });

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById('mobile-menu-btn');
  var closeBtn = document.getElementById('close-menu-btn');
  var menu = document.getElementById('mobile-menu');
  function toggleMenu() {
    if (!menu) { return; }
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    document.body.classList.toggle('overflow-hidden');
  }
  if (menuBtn) { menuBtn.addEventListener('click', toggleMenu); }
  if (closeBtn) { closeBtn.addEventListener('click', toggleMenu); }
  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });

  /* ---- Pre-select inquiry type from pricing CTAs ---- */
  var planMap = {
    single: 'Lessons — Guitar or Vocal',
    five: 'Lessons — Guitar or Vocal',
    ten: 'Lessons — Guitar or Vocal'
  };
  document.querySelectorAll('[data-package]').forEach(function (el) {
    el.addEventListener('click', function () {
      var sel = document.getElementById('inquiry');
      var val = planMap[el.getAttribute('data-package')];
      if (sel && val) { sel.value = val; }
    });
  });

  /* ---- Featured videos ---- */
  var grid = document.getElementById('video-grid');
  if (grid) {
    VIDEO_IDS.forEach(function (id) {
      var wrap = document.createElement('div');
      wrap.className = 'video-embed inner-glow';
      var iframe = document.createElement('iframe');
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = 'Asim Searah — featured video';
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0';
      wrap.appendChild(iframe);
      grid.appendChild(wrap);
    });
  }

  /* ---- Countdown ---- */
  var cd = document.getElementById('countdown');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function setField(name, value) {
    var el = cd && cd.querySelector('[data-cd="' + name + '"]');
    if (el) { el.textContent = pad(value); }
  }
  function tickCountdown() {
    if (!cd) { return; }
    var diff = LIVE_TARGET.getTime() - Date.now();
    if (diff < 0) { diff = 0; }
    var s = Math.floor(diff / 1000);
    setField('days', Math.floor(s / 86400));
    setField('hours', Math.floor((s % 86400) / 3600));
    setField('mins', Math.floor((s % 3600) / 60));
    setField('secs', s % 60);
  }
  if (cd) { tickCountdown(); setInterval(tickCountdown, 1000); }

  /* ---- Booking form (Formspree AJAX + mailto fallback) ---- */
  var form = document.getElementById('booking-form');
  var status = document.getElementById('form-status');
  function showStatus(msg, ok) {
    if (!status) { return; }
    status.textContent = msg;
    status.classList.remove('hidden');
    status.style.color = ok ? '#9be59b' : '#ffb4ab';
  }
  function mailtoFallback() {
    var name = (document.getElementById('name') || {}).value || '';
    var email = (document.getElementById('email') || {}).value || '';
    var inquiry = (document.getElementById('inquiry') || {}).value || '';
    var message = (document.getElementById('message') || {}).value || '';
    var body = 'Name: ' + name + '\nEmail: ' + email + '\nInquiry: ' + inquiry + '\n\n' + message;
    window.location.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent('Booking — ' + inquiry) +
      '&body=' + encodeURIComponent(body);
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = form.getAttribute('action') || '';
      // If Formspree isn't configured yet, fall back to email.
      if (action.indexOf('FORM_ID') !== -1) { mailtoFallback(); return; }
      showStatus('Sending…', true);
      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          showStatus('Thanks — your request was sent. I’ll be in touch soon.', true);
        } else {
          showStatus('Something went wrong. Email me directly at ' + CONTACT_EMAIL + '.', false);
        }
      }).catch(function () {
        showStatus('Network error. Email me directly at ' + CONTACT_EMAIL + '.', false);
      });
    });
  }
})();
