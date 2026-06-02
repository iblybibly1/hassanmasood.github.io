/* Language toggle — FI (default) <-> EN */
(function () {
  var KEY = 'hm_lang';

  var EN = {
    about: 'About', services: 'Services', work: 'Work',
    projects: 'Projects', skills: 'Skills', hireMeBtn: 'Contact Me',
    ddWebDesign: 'Web Design & Dev', ddESG: 'ESG & CBAM',
    ddDigital: 'Digital Marketing', ddSales: 'Sales & CRM',
    ddIntl: 'Intl. Expansion', ddBrand: 'Brand & Content',
    ddSocial: 'Social & Paid Ads', ddBiz: 'Business Dev',
    footSiteH: 'Site', footSvcH: 'Services', footContactH: 'Contact',
    footHome: 'Home', footAbout: 'About', footWork: 'Work',
    footProjects: 'Projects', footSkills: 'Skills',
    footWebDesign: 'Web Design', footESG: 'ESG & CBAM',
    footSales: 'Sales & CRM', footAll: 'All Services', footContactPage: 'Contact',
    footBrand: 'Sustainable business developer. ESG & CBAM compliance, sales systems, and data-driven strategy.',
    footBottom: '© 2026 M. Hassan Masood · All rights reserved · Y-tunnus 3573040-9 · Inkoo, Finland',
  };

  var FI = {
    about: 'Tietoa', services: 'Palvelut', work: 'Kokemus',
    projects: 'Projektit', skills: 'Taidot', hireMeBtn: 'Ota yhteyttä',
    ddWebDesign: 'Verkkosuunnittelu & Kehitys', ddESG: 'ESG & CBAM',
    ddDigital: 'Digitaalinen Markkinointi', ddSales: 'Myynti & CRM',
    ddIntl: 'Kansainv. Laajeneminen', ddBrand: 'Brändi & Sisältö',
    ddSocial: 'Sosiaalinen & Mainokset', ddBiz: 'Liiketoimintakehitys',
    footSiteH: 'Sivusto', footSvcH: 'Palvelut', footContactH: 'Yhteystiedot',
    footHome: 'Etusivu', footAbout: 'Tietoa', footWork: 'Kokemus',
    footProjects: 'Projektit', footSkills: 'Taidot',
    footWebDesign: 'Verkkosuunnittelu', footESG: 'ESG & CBAM',
    footSales: 'Myynti & CRM', footAll: 'Kaikki palvelut', footContactPage: 'Yhteystiedot',
    footBrand: 'Kestävä liiketoimintakehittäjä. ESG- ja CBAM-vaatimustenmukaisuus, myynti- ja dataohjattu strategia.',
    footBottom: '© 2026 M. Hassan Masood · Kaikki oikeudet pidätетään · Y-tunnus 3573040-9 · Inkoo, Suomi',
  };

  function applyNav(t) {
    document.querySelectorAll('nav a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (a.querySelector('span.material-symbols-outlined')) return;
      var txt = a.textContent.trim();
      if (href.endsWith('about.html') && (txt === 'Tietoa' || txt === 'About')) a.textContent = t.about;
      else if (href.endsWith('work.html') && (txt === 'Kokemus' || txt === 'Work')) a.textContent = t.work;
      else if (href.endsWith('projects.html') && (txt === 'Projektit' || txt === 'Projects')) a.textContent = t.projects;
      else if (href.endsWith('skills.html') && (txt === 'Taidot' || txt === 'Skills')) a.textContent = t.skills;
    });
    document.querySelectorAll('nav a[href$="services.html"]').forEach(function(a) {
      var icon = a.querySelector('span');
      if (icon) { a.textContent = t.services; a.appendChild(icon); }
    });
    document.querySelectorAll('a.bg-primary[href$="contact.html"], a.font-bold[href$="contact.html"]').forEach(function(a) {
      if (!a.id) a.textContent = t.hireMeBtn;
    });
    document.querySelectorAll('nav .absolute a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href.includes('web-design'))        a.textContent = t.ddWebDesign;
      else if (href.includes('esg'))          a.textContent = t.ddESG;
      else if (href.includes('digital'))      a.textContent = t.ddDigital;
      else if (href.includes('sales-crm'))    a.textContent = t.ddSales;
      else if (href.includes('international')) a.textContent = t.ddIntl;
      else if (href.includes('brand'))        a.textContent = t.ddBrand;
      else if (href.includes('social'))       a.textContent = t.ddSocial;
      else if (href.includes('business'))     a.textContent = t.ddBiz;
    });
  }

  function applyFooter(t) {
    document.querySelectorAll('footer h5').forEach(function(h) {
      var txt = h.textContent.trim();
      if (txt === 'Sivusto' || txt === 'Site')              h.textContent = t.footSiteH;
      else if (txt === 'Palvelut' || txt === 'Services')    h.textContent = t.footSvcH;
      else if (txt === 'Yhteystiedot' || txt === 'Contact') h.textContent = t.footContactH;
    });
    document.querySelectorAll('footer ul a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href.includes('index'))               a.textContent = t.footHome;
      else if (href.includes('about'))          a.textContent = t.footAbout;
      else if (href.includes('work'))           a.textContent = t.footWork;
      else if (href.includes('projects'))       a.textContent = t.footProjects;
      else if (href.includes('skills'))         a.textContent = t.footSkills;
      else if (href.includes('web-design'))     a.textContent = t.footWebDesign;
      else if (href.includes('esg'))            a.textContent = t.footESG;
      else if (href.includes('sales-crm'))      a.textContent = t.footSales;
      else if (href.includes('services') && !href.includes('/services/')) a.textContent = t.footAll;
      else if (href.includes('contact'))        a.textContent = t.footContactPage;
    });
    var brandP = document.querySelector('footer .flex-col > p');
    if (brandP) brandP.textContent = t.footBrand;
    var bottomP = document.querySelector('footer .border-t p');
    if (bottomP) bottomP.textContent = t.footBottom;
  }

  var currentLang = localStorage.getItem(KEY) || 'fi';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(KEY, lang);
    var t = lang === 'fi' ? FI : EN;
    applyNav(t);
    applyFooter(t);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('#lang-btn, #lang-btn-mobile').forEach(function(b) {
      b.textContent = lang === 'fi' ? 'EN' : 'FI';
    });
  }

  /* Expose toggle globally for inline onclick */
  window.__toggleLang = function() {
    applyLang(currentLang === 'fi' ? 'en' : 'fi');
  };

  /* Apply saved preference on load */
  if (currentLang === 'en') {
    applyLang('en');
  }
})();
