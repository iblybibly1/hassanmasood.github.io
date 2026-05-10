/* editorial.js — shared scripts for hassanmasood.fi */

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

  /* ─── NAV DROPDOWN ─── */
  document.querySelectorAll('.nav-drop').forEach(drop => {
    let closeTimer;
    drop.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      drop.classList.add('open');
    });
    drop.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => drop.classList.remove('open'), 200);
    });
  });

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

  /* ─── I18N TOGGLE ─── */
  (function () {
    var LANG_KEY = 'hm_lang';

    var NAV_FI = {
      about: 'Tietoa', services: 'Palvelut', work: 'Kokemus', projects: 'Projektit',
      skills: 'Taidot', contact: 'Yhteystiedot',
      drawerStatus: 'Avoin töihin',
      footSiteH: 'Sivusto', footServicesH: 'Palvelut', footContactH: 'Yhteystiedot',
      footBrand: 'Kestävä liiketoimintakehittäjä. ESG- ja CBAM-vaatimustenmukaisuus, myyntijärjestelmät ja dataohjattu strategia kansainvälisille tiimeille.',
      footHome: 'Etusivu', footAbout: 'Tietoa', footWork: 'Kokemus', footProjects: 'Projektit', footSkills: 'Taidot',
      footWebDesign: 'Verkkosuunnittelu', footESG: 'ESG & CBAM', footMarketing: 'Markkinointi',
      footSalesCRM: 'Myynti & CRM', footAllServices: 'Kaikki palvelut',
      footBottom: '© 2026 M. Hassan Masood · Kaikki oikeudet pidätetään',
      footBuilt: 'Rakennettu Suomessa'
    };
    var NAV_EN = {
      about: 'About', services: 'Services', work: 'Work', projects: 'Projects',
      skills: 'Skills', contact: 'Contact',
      drawerStatus: 'Open to work',
      footSiteH: 'Site', footServicesH: 'Services', footContactH: 'Contact',
      footBrand: 'Sustainable business developer. ESG & CBAM compliance, sales systems, and data-driven strategy for cross-border teams.',
      footHome: 'Home', footAbout: 'About', footWork: 'Experience', footProjects: 'Projects', footSkills: 'Skills',
      footWebDesign: 'Web Design', footESG: 'ESG & CBAM', footMarketing: 'Marketing',
      footSalesCRM: 'Sales & CRM', footAllServices: 'All Services',
      footBottom: '© 2026 M. Hassan Masood · All rights reserved',
      footBuilt: 'Built in Finland'
    };

    var FI = {
      /* index — hero */
      'hero-tag': '<span style="width:6px;height:6px;border-radius:50%;background:#3FAE5F;display:inline-block;"></span> Saatavilla · Inkoo, Suomi · 2026',
      'hero-bio-1': 'Olen Suomessa toimiva kestävä liiketoimintakehittäjä, joka erikoistuu <b>ESG- ja CBAM-vaatimustenmukaisuuteen</b>, myyntijärjestelmiin ja rajat ylittävään kaupalliseen strategiaan. Muunnan monimutkaiset EU-viitekehykset — CBAM, CSRD, toimittajatietojen kerääminen, CN-koodiuudelleenluokittelu — käytännön järjestelmiksi, joita organisaatiot voivat operoida päivittäin.',
      'hero-bio-2': 'Viiden vuoden ja kolmen mantereen aikana olen hallinnoinut rajat ylittäviä toimitusketjuja 2 400 keräyspisteessä Pakistanissa, ottanut käyttöön CSRD-vaatimustenmukaisuuskehyksiä suomalaisille viejille ja rakentanut dataohjattuja myyntiputkia sekä B2B- että verkkokauppaliiketoiminnalle. Minulla on BBA TAMK:lta CGPA:lla 4,29/5,0 ja sijoituin 3. sijalle Huawei Tech Arena Finland 2025:ssa — ainoana ei-CS-kilpailijana podiumilla.',
      'hero-bio-3': 'Vaatimustenmukaisuustyön ohella tarjoan <b>verkkosuunnittelua ja -kehitystä</b>, digitaalista markkinointistrategiaa, CRM-käyttöönottoa HubSpotissa ja Salesforcessa sekä kansainvälistä markkinoille pääsyn tukea. Saatavilla kuudella kielellä: englanti, suomi, ruotsi, arabia, turkki ja urdu.',
      'hero-cta-full': 'Koko tarina →',
      'hero-cta-contact': 'Ota yhteyttä',
      /* index — services section */
      'sec-services-num': '02 — Palvelut',
      'sec-services-title': 'Mitä <span class="em">tarjoan.</span>',
      'sec-services-lede': 'ESG-vaatimustenmukaisuudesta verkkosuunnitteluun — käytännön työtä kaupallisella fokuksella. Saatavilla kuudella kielellä.',
      'svc-view-all': 'Näytä kaikki 8 palvelua →',
      /* index — skills/capabilities section */
      'sec-skills-num': '05 — Osaaminen',
      'sec-skills-title': 'Taidot &amp; <span class="em">työkalut.</span>',
      'sec-skills-lede': 'Toimiva pino vaatimustenmukaisuuden, liiketoimintastrategian, data-analytiikan ja ohjelmistokehityksen aloilla.',
      'lang-strip-eyebrow': '— Tuki 6 kielellä',
      'skills-view-all': 'Täydellinen taitoerittely →',
      /* about page */
      'about-page-num': '01 — Tietoa',
      'about-page-title': 'Kuka <span class="em">olen.</span>',
      'about-page-lede': 'Suomessa toimiva kansainvälisen liiketoiminnan ammattilainen, joka muuttaa regulaation kaupalliseksi eduksi, yhdistää operatiivisen kokemuksen teknologiaan ja työskentelee kuudella kielellä.',
      'about-bio-1': 'Olen kestävä liiketoimintakehittäjä — käytännössä se tarkoittaa, että työskentelen regulaation, operaatioiden ja kaupallisen strategian risteyksessä. Autan yrityksiä ymmärtämään, mitä EU:n viitekehykset — CBAM, CSRD, toimittaja-auditoinnit — tarkoittavat käytännössä, ja rakennan sitten järjestelmät, joita tarvitaan niiden toteuttamiseen.',
      'about-bio-2': 'Ennen Suomea johdin Pakistanissa poikkialaista keruuoperaatiota, jossa koordinoin yli 2 400 toimittajaa 11 eri alueelta, laadin raportteja suoraan toimitusjohtajalle ja rakensin ensimmäisen muodollisen hankintaprosessin. Myöhemmin siirryin kansainväliseen verkkokauppaan — ensin tutkimusroolissa, sitten strategisessa konsultoinnissa yrityksille, jotka laajentavat Eurooppaan ja Lähi-itään.',
      'about-bio-3': 'Suomessa olen työskennellyt suoraan asiakkaiden kanssa CBAM- ja CSRD-vaatimustenmukaisuuden parissa, rakentanut HubSpot-putket ja Salesforce-työnkulut teollisuusmyyntiin, suunnitellut ja toimittanut asiakasverkkosivuja sekä ohjannut digitaalisia markkinointikampanjoita. Useimmissa projekteissa teen useampaa kuin yhtä näistä asioista samanaikaisesti.',
      'about-values-num': 'Mitä tarjoan',
      'about-values-title': 'Ydinarvot.',
      'about-values-lede': 'Kolme osaamista, joita harvoin löytyy samalta henkilöltä — ja jotka toimivat parhaiten yhdessä.',
      'about-edu-num': 'Koulutus',
      'about-edu-title': 'Akateeminen <span class="em">tausta.</span>',
      'about-edu-lede': 'Käytännönläheinen kansainvälinen koulutus vahvalla akateemisella tuloksella ja tosielämän sovelluksilla.',
      'about-cta-services': 'Näytä kaikki palvelut →',
      'about-cta-work-together': 'Tehdään yhteistyötä',
      'about-cta-contact': 'Ota yhteyttä →',
      'about-cta-work': 'Katso kokemus',
      /* work page */
      'work-page-num': '03 — Työ',
      'work-page-title': 'Viimeisimmät <span class="em">tehtävät.</span>',
      'work-page-lede': 'Viisi tehtävää myynnissä, ESG-vaatimustenmukaisuudessa, verkkokauppaoperaatioissa ja liiketoimintakehityksessä — Suomi, Pakistan ja UAE.',
      'work-awards-num': 'Kilpailut &amp; palkinnot',
      'work-awards-title': 'Kilpailujen <span class="em">tulokset.</span>',
      'work-awards-lede': 'Kilpailuja ja palkintoja TAMK:lta, Tampere Business Case Clubilta ja Huawei Finlandilta.',
      /* projects page */
      'proj-page-num': '04 — Projektit',
      'proj-page-title': 'Valittu <span class="em">työ.</span>',
      'proj-page-lede': 'Sekoitus itsenäisiä toteutuksia, akateemisia case-töitä ja ammatillisia työkaluja. Jokainen ratkaisi todellisen ongelman.',
      /* skills page */
      'skills-page-num': '05 — Taidot',
      'skills-page-title': 'Työkalut &amp; <span class="em">osaaminen.</span>',
      'skills-page-lede': 'Tekniset työkalut, toimialaosaaminen ja ammatilliset kyvyt — rakennettu todellisessa työssä ESG-vaatimustenmukaisuuden, myynnin, markkinoinnin ja verkkokaupan parissa.',
      'skills-page-lang-num': 'Kielet',
      'skills-page-lang-title': 'Kuusi <span class="em">kieltä.</span>',
      /* contact page */
      'contact-page-num': '06 — Yhteystiedot',
      'contact-page-title': 'Puhutaan <span class="em">asiaa.</span>',
      'contact-page-lede': 'Hyvät yhteistyöt alkavat lyhyellä keskustelulla. Kerro, mitä teet — minä kerron rehellisesti, voenko ja miten voin auttaa.',
      /* services page */
      'services-page-num': '02 — Palvelut',
      'services-page-title': 'Mitä <span class="em">tarjoan.</span>',
      'services-page-lede': 'Kahdeksan palvelualuetta: ESG-vaatimustenmukaisuus, verkkokehitys, markkinointi, myynti ja kansainvälinen liiketoiminta. Kaikki saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi ja urduksi.'
    };

    function hrefBase(h) {
      return (h || '').replace(/^\.\.\//, '').replace(/^\//, '');
    }

    function applyNav(isFi) {
      var t = isFi ? NAV_FI : NAV_EN;

      document.querySelectorAll('.nav-links > a').forEach(function (a) {
        var h = hrefBase(a.getAttribute('href'));
        if (h === 'about.html') a.textContent = t.about;
        else if (h === 'work.html') a.textContent = t.work;
        else if (h === 'projects.html') a.textContent = t.projects;
        else if (h === 'skills.html') a.textContent = t.skills;
      });

      document.querySelectorAll('.nav-drop-trigger').forEach(function (el) {
        var arrow = el.querySelector('.nav-drop-arrow');
        if (!arrow) return;
        Array.from(el.childNodes).forEach(function (n) { if (n.nodeType === 3) el.removeChild(n); });
        el.insertBefore(document.createTextNode(t.services + ' '), arrow);
      });

      document.querySelectorAll('a.nav-cta').forEach(function (el) {
        var pulse = el.querySelector('.pulse');
        Array.from(el.childNodes).forEach(function (n) { if (n.nodeType === 3) el.removeChild(n); });
        el.appendChild(document.createTextNode(t.contact));
        if (pulse) el.insertBefore(pulse, el.firstChild);
      });

      var drawerMap = { 'about.html': 'about', 'services.html': 'services', 'work.html': 'work', 'projects.html': 'projects', 'skills.html': 'skills', 'contact.html': 'contact' };
      document.querySelectorAll('.drawer > a').forEach(function (a) {
        var key = drawerMap[hrefBase(a.getAttribute('href'))];
        if (key) { var s = a.querySelector('span'); if (s) s.textContent = t[key]; }
      });

      var df = document.querySelector('.drawer-foot');
      if (df) { var sp = df.querySelectorAll('span'); if (sp[1]) sp[1].textContent = t.drawerStatus; }

      var cols = document.querySelectorAll('.foot-col');
      if (cols[0]) {
        var h4a = cols[0].querySelector('h4'); if (h4a) h4a.textContent = t.footSiteH;
        var la = cols[0].querySelectorAll('a');
        ['footHome','footAbout','footWork','footProjects','footSkills'].forEach(function (k, i) { if (la[i]) la[i].textContent = t[k]; });
      }
      if (cols[1]) {
        var h4b = cols[1].querySelector('h4'); if (h4b) h4b.textContent = t.footServicesH;
        var lb = cols[1].querySelectorAll('a');
        ['footWebDesign','footESG','footMarketing','footSalesCRM','footAllServices'].forEach(function (k, i) { if (lb[i]) lb[i].textContent = t[k]; });
      }
      if (cols[2]) { var h4c = cols[2].querySelector('h4'); if (h4c) h4c.textContent = t.footContactH; }

      var fp = document.querySelector('.foot-brand p'); if (fp) fp.textContent = t.footBrand;
      var fb = document.querySelector('.foot-bottom');
      if (fb) {
        var sb = fb.querySelectorAll('span');
        if (sb[0]) sb[0].textContent = t.footBottom;
        if (sb[1]) sb[1].textContent = t.footBuilt;
      }
    }

    function applyI18n(lang) {
      var isFi = lang === 'fi';
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (isFi && FI[key] !== undefined) {
          if (!el.hasAttribute('data-i18n-orig')) el.setAttribute('data-i18n-orig', el.innerHTML);
          el.innerHTML = FI[key];
        } else if (!isFi) {
          var orig = el.getAttribute('data-i18n-orig');
          if (orig !== null) { el.innerHTML = orig; el.removeAttribute('data-i18n-orig'); }
        }
      });
      applyNav(isFi);
      document.documentElement.setAttribute('lang', isFi ? 'fi' : 'en');
    }

    var navInner = document.querySelector('.nav-inner');
    var navToggleEl = document.getElementById('navToggle');
    if (navInner && navToggleEl) {
      var btn = document.createElement('button');
      btn.className = 'lang-toggle';
      btn.id = 'langToggle';
      btn.setAttribute('aria-label', 'Toggle language / Vaihda kieltä');
      var savedLang = localStorage.getItem(LANG_KEY) || 'en';
      btn.textContent = savedLang === 'fi' ? 'EN' : 'FI';
      navInner.insertBefore(btn, navToggleEl);
      applyI18n(savedLang);
      btn.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('lang') || 'en';
        var next = cur === 'fi' ? 'en' : 'fi';
        applyI18n(next);
        localStorage.setItem(LANG_KEY, next);
        btn.textContent = next === 'fi' ? 'EN' : 'FI';
      });
    }
  })();

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
