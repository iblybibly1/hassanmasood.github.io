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
      'services-page-lede': 'Kahdeksan palvelualuetta: ESG-vaatimustenmukaisuus, verkkokehitys, markkinointi, myynti ja kansainvälinen liiketoiminta. Kaikki saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi ja urduksi.',
      /* index — service preview card names & descriptions */
      'svc-1-name': 'Verkkosuunnittelu &amp;<br/><span class="em">Kehitys</span>',
      'svc-1-desc': 'Puhtaat, nopeat, mobiiliystävälliset verkkosivut — konseptista julkaisuun.',
      'svc-2-name': 'ESG &amp; <span class="em">Kestävyys</span>',
      'svc-2-desc': 'CBAM, CSRD, toimittajadata, LCA — rakennettu käytännön toteutuskokemuksesta.',
      'svc-3-name': 'Digitaalinen <span class="em">Markkinointi</span>',
      'svc-3-desc': 'Kohderyhmätutkimus, kanavamix, KPI-koontinäytöt — dataohjattu alusta alkaen.',
      'svc-4-name': 'Myynti &amp; <span class="em">CRM</span>',
      'svc-4-desc': 'Asiakashankintajärjestelmät, putkiliiketoiminta, HubSpot tai Salesforce B2B- ja verkkokaupalle.',
      'svc-5-name': 'Kansainvälinen <span class="em">Laajeneminen</span>',
      'svc-5-desc': 'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus, lokalisointi 6 kielellä.',
      'svc-6-name': 'Brändi, Sosiaalinen &amp;<br/><span class="em">Liiketoimintakehitys</span>',
      'svc-6-desc': 'Brändisisältö, sosiaalinen + maksettu mainonta, markkinoille pääsy ja kumppanuudet.',
      /* about — bio paragraphs */
      'about-bio-1': 'Olen <span class="em">kestävä liiketoimintakehittäjä</span> — käytännössä se tarkoittaa, että toimin säätelyn, operaatioiden ja kaupallisen strategian risteyksessä. Autan yrityksiä ymmärtämään, mitä EU-viitekehykset kuten CBAM ja CSRD todella vaativat, rakennan sisäiset järjestelmät vaatimusten täyttämiseksi ja varmistan, että vaatimustenmukaisuus ei vain vähennä riskiä vaan tuottaa todellista liiketoiminta-arvoa.',
      'about-bio-2': 'Taustani kattaa viisi erilaista roolia — rajat ylittävän toimitusketjun hallinnasta 2 400 jätekuljetuskeskuksessa Punjabissa CSRD-kehysten käyttöönottoon suomalaisen kuluttajatuotteiden brändin hyväksi EU:n tullialueilla. Tämä laajuus on tarkoituksellinen. Uskon, että terävimmät kaupalliset päätökset tulevat ihmisiltä, jotka ovat nähneet sekä johdon strategian että operatiivisen työn.',
      'about-bio-3': 'Perinteisen liikkeenjohdon konsultoinnin ulkopuolella olen <span class="em">teknologiaihminen sydämeltäni</span>. Olen opiskellut finanssimarkkinoita itsenäisesti vuodesta 2012, rakentanut algoritmisia kaupankäyntityökaluja, mukautettuja KPI-indikaattoreita ja backtesting-kehyksiä Pythonilla. Osallistuin Huawei Tech Arena Finland 2025 -kilpailuun — rakensin täydellisen UI/UX-rajapinnan HarmonyOS:lle — ja sijoituin 3. sijalle kansallisesti ainoana ei-tietotekniikan ehdokkaana podiumilla.',
      'about-bio-4': 'Kieli on yksi käytännöllisimmistä ammatillisista vahvuuksistani. Työskentelen sujuvasti <span class="em">englanniksi ja urduksi</span>, puhun suomea ja arabiaa sujuvasti ja hallitsen ruotsin ja turkin työkielellä. Tämä tarkoittaa, että voin suorittaa toimittaja-auditoinnin Etelä-Aasiassa, neuvotella vaatimustenmukaisuuden laajuudesta Helsingissä ja kommunikoida suoraan MENA-alueen kumppanien kanssa ilman lisäkäännöstasoa.',
      'about-bio-5': 'Valmistuin BBA:ksi kansainvälisestä liiketoiminnasta TAMK:sta joulukuussa 2024 CGPA:lla <span class="em">4,29 / 5,0</span>. Opintojeni aikana suoritin vaihtovaiheen Ondokuz Mayısin yliopistossa Turkissa, edusti Tampereen yliopistoa kansainvälisissä liiketoimintacase- ja myyntikilpailuissa eri puolilla Eurooppaa ja pyöritti kannattavaa kansainvälistä verkkokauppaa opintojen ohella.',
      'about-bio-6': 'Minua ajaa mahdollisuus ottaa jokin <span class="em">aidosti monimutkainen</span> asia — sääntelykehys, markkinoille pääsyn haaste, rikkinäinen myyntiputki — ja muuttaa se toimivaksi järjestelmäksi. Siinä olen hyvä, ja sellainen ongelma on se, jonka haluan seuraavaksi ratkaista.',
      /* about — value cards */
      'val-1-title': 'Sääntelystä <span class="em">Operatiiviseksi</span>',
      'val-1-body': 'En vain lue EU-kehyksiä — rakennan sisäiset työnkulut, toimittajaviestintäketjut ja raportointijärjestelmät, jotka tekevät vaatimustenmukaisuudesta operatiivista. ESG ja CBAM muuttuvat toimiviksi prosesseiksi, ei arkistointiharjoituksiksi.',
      'val-2-title': 'Strategiasta <span class="em">Toteutukseen</span>',
      'val-2-body': 'Olen toiminut sekä strategiakonsulttina neuvoen globaaleja yrityksiä että operatiivisena johtajana. Osaan muotoilla oikean ongelman strategisella tasolla ja jäädä sitten toteuttamaan vastauksen.',
      'val-3-title': 'Teknologia <span class="em">Kertoimena</span>',
      'val-3-body': 'Rakennan mukautettuja datatyökaluja — Power BI -koontinäyttöjä, Python-kaupankäyntibotteja, KPI-malleja — jotka muuttavat tiedon päätöksiksi. Tekninen työ on luonnollinen osa kaupallisten ongelmien ratkaisemistani.',
      'val-4-title': 'Rajat ylittävä <span class="em">Sujuvuus</span>',
      'val-4-body': 'Kuusi kieltä ja suora kokemus suomalaisista, EU:n, Etelä-Aasian ja turkkilaisista liiketoimintaympäristöistä. Vähennän kitkaa kansainvälisissä toiminnoissa sen sijaan, että lisäisin käännöstasoja.'
    };

    var SVC_FI = {
      'web-design': {
        heroTitle: 'Verkkosuunnittelu &amp; <span class="em">Kehitys</span>',
        heroLede: 'Puhtaat, nopeat, mobiiliystävälliset verkkosivut — konseptista julkaisuun. Ilman bloattia, ilman templatea, ilman viivästyksiä.',
        sidebarLabels: ['Teknologiapino', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '2–6 viikkoa',
        sidebarItems: ['Responsiivinen HTML/CSS/JS-sivusto', 'React-komponentit (tarvittaessa)', 'Figma-wirefraimit ja prototyyppi', 'Suorituskykyoptimoitu sisältö', 'SEO-perusteet', 'Vercel-käyttöönotto tai mukautettu hosting'],
        sidebarCta: 'Aloita projekti →',
        bodyH2s: ['Mitä rakennan', 'Miten se toimii', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Olen rakentanut verkkosivuja, -työkaluja ja verkkokauppasivustoja alusta alkaen — ei sivustogeneraattoreilla eikä templeteilla. Jokainen projekti on suunniteltu sen tavoitteen mukaan eikä puristettu olemassa olevaan muottiin.',
          'Olen rakentanut myös mukautettuja kaupankäynti-indikaattoreita, KPI-koontinäyttöjä ja datatauluja Python- ja React-projekteilla. Jos tarvitset verkkosivuston, jolla on mukautettua logiikkaa tai integraatioita, ymmärrän tarvittavan teknisen syvyyden.'
        ],
        psTitles: ['Löytö', 'Muotoilu', 'Rakentaminen', 'Julkaisu ja luovutus'],
        psDescs: [
          'Projektin laajuus, yleisö, sisältörakenne ja tekniset vaatimukset — miksi sivusto, miten sitä käytetään ja miten menestys mitataan.',
          'Wirefraimit Figmassa, värit, typografia, asettelu — ennen koodin kirjoittamista. Muutokset ovat helppoja tässä vaiheessa, kalliita myöhemmin.',
          'Responsiivinen HTML/CSS, JavaScript tarpeen mukaan, React monimutkaisiin komponentteihin. Nopea, saavutettava, SEO-valmis.',
          'Käyttöönotto, domain-asetukset, suorituskykytestaus ja täydellinen dokumentaatio tai koulutus, jotta sivustoa voi hallinnoida itsenäisesti.'
        ],
        bodyLangP: 'Kaikki verkkosivustoprojektit toimitettavissa englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi — natiivisti kirjoitettuna, ei konekäännettynä.',
        ctaTitle: 'Valmis <span class="em">rakentamaan?</span>',
        ctaP: 'Kerro, mitä tarvitset — laskeutumissivusta täydelliseen verkkokauppaan. Arvioin laajuuden rehellisesti ja annan selkeän aikataulun.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'esg': {
        heroTitle: 'ESG &amp; <span class="em">Kestävyyskonsultointi</span>',
        heroLede: 'CBAM, CSRD, toimittajadata, LCA — rakennettu käytännön toteutuskokemuksesta, ei teoreettisista viitekehyksistä.',
        sidebarLabels: ['Alueet', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '4–12 viikkoa',
        sidebarItems: ['CBAM-vaatimustenmukaisuusasiakirjat', 'CSRD-valmiusarviointi', 'Toimittajatietojen keräys ja hallinta', 'Hiilijalan jäljen laskenta (Scope 1, 2, 3)', 'CN-koodiluokittelu EU-tuonnille', 'Power BI -kestävyyskoontinäyttö'],
        sidebarCta: 'Keskustele tarpeistasi →',
        bodyH2s: ['Miksi tämä on erilainen', 'Mitä kattaa', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'CBAM-vaatimustenmukaisuus ei ole vain lomakkeiden täyttämistä — se vaatii tarkkoja päästölaskelmia, toimittajaviestintää usealla kielellä ja CN-koodiluokittelua, joka kestää tulliviranomaisten tarkastelun. Olen rakentanut nämä järjestelmät käytännön toteutuksessa, en pelkästään neuvonut niistä.',
          'CSRD on erilainen haaste: laajat tiedonhankintavaatimukset, kaksinkertaisen olennaisuuden arviointiprosessi ja tarkastettavissa oleva raportointi. Olen kehittänyt kehyksiä, joita yritykset voivat ylläpitää sisäisesti ensimmäisen käyttöönoton jälkeen.'
        ],
        psTitles: ['CBAM-vaatimustenmukaisuus', 'CSRD-valmius', 'Toimittajien ESG-data', 'Raportointi ja koontinäytöt'],
        psDescs: [
          'CN-koodiluokittelu, sulautettujen päästöjen laskenta, toimittajatietojen keräys ja CBAM-ilmoituksen valmistelu EU-tullilomakevaatimusten mukaisesti.',
          'Kaksinkertainen olennaisuusarviointi, tietoaukkoanalyysi, sidosryhmäkartoitus ja ESRS-standardien noudattamistiekartta.',
          'Kyselymallien suunnittelu, toimittajakoulutus (saatavilla englanniksi, arabiaksi ja urduksi), tietojen validointi ja laaturaportointi.',
          'Power BI -kestävyyspaneelit KPI-seurannalla, suoritustrendiraportointi ja sääntelyaikataululkalenteri.'
        ],
        bodyLangP: 'Kaikki ESG-työ — toimittajaviestintä, viranomaisyhteistyö, raportointi — englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi.',
        ctaTitle: 'Onko <span class="em">määräaika tulossa?</span>',
        ctaP: 'CBAM-siirtymäaika on ohi. CSRD-velvoitteet laajenevat. Kerro, mihin olet juuttunut, niin katsotaan mitä voidaan tehdä nopeasti.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'digital-marketing': {
        heroTitle: 'Digitaalinen <span class="em">Markkinointi</span>',
        heroLede: 'Kohderyhmätutkimus, kanavamix, KPI-koontināytöt — dataohjattu alusta alkaen.',
        sidebarLabels: ['Työkalut', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '3–6 kuukautta',
        sidebarItems: ['Kohderyhmä- ja markkinatutkimusraportti', 'Kanavastrategiasuunnitelma', 'SEO-sisältörakenne', 'Power BI -markkinointikoontinäyttö', 'GA4-asetukset ja tapahtumanseuranta', 'Sähköpostisekvenssitekstit'],
        sidebarCta: 'Aloita keskustelu →',
        bodyH2s: ['Mitattavaa alusta asti', 'Mitä teen', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Useimmat markkinointiohjelmat epäonnistuvat, koska niitä ei koskaan kytketä liiketoimintatavoitteisiin. Aloitan yhdistämällä markkinointitoiminnot mitattaviin tuloksiin — liidien laatu, konversioaste, hankintakustannus — ennen kanavien valintaa tai sisällön luomista.',
          'Olen rakentanut markkinointikokonaisuuksia B2B-palveluyrityksille, kuluttajatuotteiden brändeille ja kansainvälisille verkkokauppasivustoille. Jokainen projekti alkaa kohderyhmädatalla, ei oletuksilla.'
        ],
        psTitles: ['Kohderyhmä- ja markkinatutkimus', 'Kanavastrategia', 'KPI-koontinäytöt', 'Kuukausikatsaus ja optimointi'],
        psDescs: [
          'Ostajaprofiilit, kilpailija-analyysi, hakuaikomuskartoitus ja markkinoille pääsyn segmentointi — tutkimus, joka tekee muusta markkinointityöstä tehokkaampaa.',
          'Kanavavalinta (haku, sosiaalinen, sähköposti, maksettu) resurssitason ja liiketoimintatavoitteiden perusteella — ei universaalia lähestymistapaa.',
          'Mukautetut Power BI tai Looker Studio -koontinäytöt, jotka yhdistävät GA4:n, mainosplatformit ja CRM-tiedot yhteen hallintanäkymään.',
          'Kuukausittainen suorituskykykatselmus, kanavien budjettijako ja testaussykli korkean prioriteetin parannuksille.'
        ],
        bodyLangP: 'Kaikki markkinointisisältö — mainokset, sähköpostit, sivustotekstit — saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi.',
        ctaTitle: 'Haluatko markkinointia joka <span class="em">mittaa?</span>',
        ctaP: 'Kerro nykyisestä tilanteestasi ja mitä yrität saavuttaa. Kerron rehellisesti, missä näen mahdollisuuden.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'sales-crm': {
        heroTitle: 'Myynti &amp; <span class="em">CRM</span>',
        heroLede: 'Asiakashankintajärjestelmät, putkiliiketoiminta, HubSpot tai Salesforce B2B- ja verkkokauppamyynnille.',
        sidebarLabels: ['Alustat', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '4–10 viikkoa käyttöönotto + valinnainen ylläpito',
        sidebarItems: ['CRM-konfiguraatio (HubSpot tai Salesforce)', 'Liidien pisteytyslogiikka', 'Sähköpostijaksot automatisoituina', 'Putken seurantakoontinäyttö', 'Kylmäkontaktoinnin viestintämallit', 'Verkkokaupan CRO-auditointi'],
        sidebarCta: 'Keskustele putkestasi →',
        bodyH2s: ['Rakennettu sisältä käsin', 'Mitä kattaa', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Olen rakentanut ja käyttänyt myyntiputkia B2B-palveluyritykselle Suomessa ja verkkokauppabrändille Pakistanissa — en vain ottanut käyttöön CRM:ää, vaan kirjoittanut viestintämallit, rakentanut seurantarutiinit ja asettanut koontinäytöt, joita tiimi oikeasti seuraa.',
          'Useimmilla yrityksillä on CRM. Harvoilla on prosessi, joka tekee siitä arvokkaan. Rakennan puuttuvan sillan: puhtaan tietomääritelmän, selkeät putkivaiheet ja automaatiot, jotka poistavat manuaalisen työn.'
        ],
        psTitles: ['CRM-asetukset ja konfiguraatio', 'Kontaktointijärjestelmät', 'Putken toiminnot', 'Verkkokauppa ja CRO'],
        psDescs: [
          'HubSpot tai Salesforce -asennus: tietomalli, putkivaiheet, ominaisuusmääritelmät, integraatiot (sähköposti, lomakkeet, analytics) ja käyttäjäroolit.',
          'Kylmäkontaktoinnin jaksojen rakentaminen, sähköpostimallien kirjoittaminen, LinkedIn-tavoittaminen ja tehtäväautomaatioon perustuva seurantajärjestelmä.',
          'Viikoittaiset tarkastusrutiinit, putken terveysraportointi, kauppojen etenemisanalyysi ja hälytykset pitkäkestoisille kaupoille.',
          'Shopify- tai WooCommerce-integraatio, ostoskorin hylkäämisvirrat, ristimyynti- ja lisämyyntilogiikka sekä konversioauditointi.'
        ],
        bodyLangP: 'Myyntimateriaalit, CRM-viestintämallit ja kontaktointijaksot englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi.',
        ctaTitle: 'Onko <span class="em">putkessa vuoto?</span>',
        ctaP: 'Kerro nykyisestä CRM-asetuksestasi ja missä myynti katkeaa. Kerron rehellisesti, onko se prosessi-, tiimi- vai teknologiaongelma.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'international-expansion': {
        heroTitle: 'Kansainvälinen <span class="em">Laajeneminen</span>',
        heroLede: 'Rajat yliitävä verkkokauppa, toimittaja-auditointi, EU-tuontivaatimustenmukaisuus, lokalisointi kuudella kielellä. Olitpa menossa Suomeen, EU:hun tai Etelä-Aasian markkinoille — tiedän polun.',
        sidebarLabels: ['Markkinat', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '6–16 viikkoa',
        sidebarItems: ['Markkinoille pääsyn raportti', 'Toimittajatarkistuksen viitekehys', 'EU-tuontivaatimustenmukaisuuden tarkistuslista', 'Lokalisointistrategia (6 kieltä)', 'Rajat yliittävien logistiikkapalvelujen käyttöönotto', 'Sääntelymaiseman kartoitus'],
        sidebarCta: 'Keskustele laajenemisestasi →',
        bodyH2s: ['Siltoja oikeista ylityksistä', 'Mitä kattaa', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Kasvoin Pakistanissa, opiskelin Suomessa, suoritin vaihtovaiheen Turkissa ja rakensin rajat yliittävän toimitusketjun Kiinasta ja Arabiemiirikunnista ennen kuin täytin 23 vuotta. Kansainvälinen liiketoiminta ei ole minulle konsultointikehys — se on tapa, jolla olen aina toiminut.',
          'Olen hallinnoinut EU-tulliasiakirjoja, tarkastanut kansainvälisiä toimittajia, navigoinut Etelä-Aasian markkinadynamiikkaa ja rakentanut vaatimustenmukaisuusinfrastruktuurin, jonka avulla suomalainen yritys voi tuoda tavaraa kuudesta maasta ilman sääntelyyllätyksiä. Tiedän käytännön yksityiskohdat, jotka useimmat markkinoille pääsyn raportit ohittavat.'
        ],
        psTitles: ['Markkinoille pääsyn tutkimus', 'Toimittaja-auditointi ja hankinta', 'EU-tuontivaatimustenmukaisuus', 'Lokalisointi'],
        psDescs: [
          'Sääntelymaisema, kilpailija-analyysi, hinnoitteluvertailut, asiakasprofiilitutkimus ja riskisopeutettu markkinoille pääsyn strategia — olitpa menossa EU:hun, Pohjoismaihin tai Etelä-Aasian markkinoille.',
          'Toimittajan tunnistaminen, due diligence -kehykset, neuvottelutuki, sopimusehtojen tarkistus ja laadunvalvontaprosessin suunnittelu. Rakennettu todellisten hankintaketjujen pyörittämiskokemuksesta.',
          'Tulliasiakirjat, tariffien luokittelu, CBAM-velvoitteet EU:hun tuleville tavaroille, intrastat-raportointi ja yhteistyö tulliviranomaisten kanssa monimutkaisissa tilanteissa.',
          'Verkkosivujen teksti, markkinointimateriaalit ja asiakasviestintä mukautettuna kohdemarkkinalleen — englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi, ilman käännöskuluja.'
        ],
        bodyLangP: 'Kaikki kansainvälinen työ — tutkimus, toimittajaviestintä, sääntelyyhteistyö ja lokalisointi — toimitetaan englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi. Ei välikäsiä tarvita.',
        ctaTitle: 'Valmis <span class="em">ylittämään rajat?</span>',
        ctaP: 'Kerro, mitä markkinaa tavoittelet, mitä jo tiedät ja mikä pidättää sinua. Selvitetään oikea ensimmäinen askel.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'brand-content': {
        heroTitle: 'Brändi &amp; <span class="em">Sisältö</span>',
        heroLede: 'Brändiääni, verkkosivuteksti, sähköpostikampanjat ja pitchdeckit — laadittu useilla kielillä kansainvälisille yleisöille.',
        sidebarLabels: ['Formaatit', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '2–6 viikkoa',
        sidebarItems: ['Brändiäänen opas', 'Verkkosivuteksti (kaikki sivut)', 'Sähköpostisekvenssiteksti', 'Sijoittaja- tai myyntipitchdeck', 'Monikieliset versiot', 'Toimituskalenteripohja'],
        sidebarCta: 'Aloita projekti →',
        bodyH2s: ['Sanat, jotka matkustavat', 'Mitä toimitan', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Useimmat bränditekstit kirjoitetaan yhdelle kielelle ja yhdelle markkinalle. Jos toimit rajojen yli — tai haluat toimia — se on ongelma. Kirjoitan tekstiä, joka toimii englanniksi ja voidaan mukauttaa suomeksi, ruotsiksi, arabiaksi, turkiksi ja urduksi menettämättä terävyyttään.',
          'Olen kirjoittanut markkinointitekstejä, tuotekuvauksia, pitchdeckejä ja sähköpostijaksoja B2B- ja kuluttajayleisöille. Tavoite on aina sama: selkeää, uskottavaa kirjoittamista, joka kuulostaa oikealta ihmiseltä ja ohjaa lukijan toimintaan.'
        ],
        psTitles: ['Brändiääni ja viestintä', 'Verkkosivuteksti', 'Sähköpostikampanjat', 'Pitchdeckit'],
        psDescs: [
          'Äänisävyn opas, avainviestit, positiointilausuma ja konkreettiset esimerkit siitä, mitä tehdä ja mitä välttää — antaa tiimillesi toistettavan viittauksen kaikkeen, mitä he kirjoittavat.',
          'Koko sivuston teksti rakennettu konversioon — etusivu, tietoa, palvelut ja yhteystietosivut kirjoitettu SEO-rakenteella ja selkeällä hierarkialla otsikosta CTA:han.',
          'Tervetulosekvenssit, hoitovirrat, kampanjat — kirjoitettu avattavaksi, luettavaksi ja toimittavaksi. Rakennettu suppilovaiheen ja yleisön lämpötilan mukaan.',
          'Sijoittajaesitykset ja myyntideckit — rakenteellinen argumentti, tiivis narratiivi, selkeät diat. Kirjoitan sisällön ja neuvon asettelussa; sinä hallitset lopullista muotoilua.'
        ],
        bodyLangP: 'Kaikki brändi- ja sisältötyö natiivisti saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi — kulttuuriseen kontekstiin mukautettuna, ei konekäännettynä.',
        ctaTitle: 'Tarvitsetko tekstiä joka <span class="em">konvertoi?</span>',
        ctaP: 'Kerro, mitä teet — uusi sivusto, kampanja, deck — ja kerron, miten voin auttaa.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'social-paid': {
        heroTitle: 'Sosiaalinen &amp; <span class="em">Maksetut Mainokset</span>',
        heroLede: 'Instagram ja Facebook orgaaninen sisältö sekä maksettujen mainosten hallinta. Luovuus, kohdentaminen, optimointi ja läpinäkyvä raportointi.',
        sidebarLabels: ['Alustat', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: 'Kuukausittainen ylläpitosopimus',
        sidebarItems: ['Sisältökalenteri (kuukausittain)', 'Orgaaniset julkaisut (teksti + brief)', 'Mainoskampanjoiden asetus ja kohdentaminen', 'Luovuuden testauksen viitekehys', 'Viikoittainen suoritusraportti', 'Kuukausittainen optimointikatsaus'],
        sidebarCta: 'Keskustele mainoksistasi →',
        bodyH2s: ['Ansaittu pyörittämällä', 'Mitä hallinnoin', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Pyöritin Facebook- ja Instagram-kampanjoita Vapemall PK:lle 18 kuukauden ajan — hallinnoin PKR 150 000:n kuukausittaista mainosbudjettia ylläpitäen 3,8× ROAS:n läpi koko kauden. En vain asettanut kampanjoita; kirjoitin luovuudet, hioin kohdentamista ja tarkistin tiedot viikoittain budjettien uudelleenkohdentamiseksi sinne, missä ne toimivat.',
          'Sosiaalinen mainonta toimii, kun luovuus, yleisö ja tarjous kohtaavat. Hallinnoin kaikkia kolmea — ja raportoin tuloksista selkokielellä, ei turhamaisilla mittareilla.'
        ],
        psTitles: ['Orgaaninen sisältö', 'Maksettujen kampanjoiden asetus', 'Luovuuden testaus', 'Raportointi ja optimointi'],
        psDescs: [
          'Kuukausittainen sisältökalenteri, julkaisuteksti ja luovuuden briefit Instagramille ja Facebookille. Johdonmukainen julkaisutahti, joka rakentaa yleisöä uuvuttamatta tiimiäsi.',
          'Kampanjarakenne, yleisömäärittely, sijoittelun valinta, budjettijako mainosjoukoissa ja pikselin konfigurointi — rakennettu tavoitteen, ei alustan oletusarvojen mukaan.',
          'Järjestelmällinen A/B-testaus otsikoilla, visuaaleilla ja CTA:illa selkeällä hypoteesilla jokaiselle testille. Voittajat skaalataan, häviäjät poistetaan, oppiminen dokumentoidaan.',
          'Viikoittainen tulostiivistelmä ja kuukausikatsaus kattaen ROAS:n, CPM:n, CTR:n, konversioasteen ja hankintakulun — selkeiden suositusten kera seuraavalle kaudelle.'
        ],
        bodyLangP: 'Mainosteksti ja orgaaninen sisältö saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi — jolloin voit ajaa kampanjoita kielellä, jota yleisösi oikeasti käyttää.',
        ctaTitle: 'Eivät mainokset <span class="em">toimi?</span>',
        ctaP: 'Kerro nykyisestä asetuksestasi, budjetistasi ja mikä ei toimi. Kerron, mitä muuttaisin ensin.',
        ctaBtn: 'Ota yhteyttä →'
      },
      'business-development': {
        heroTitle: 'Liiketoiminnan <span class="em">Kehitys</span>',
        heroLede: 'Markkinoille pääsyn strategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen — rakennettu todellisesta operatiivisesta kokemuksesta kolmella mantereella.',
        sidebarLabels: ['Fokusalueet', 'Tyypillinen toimeksianto', 'Toimituskohteet'],
        sidebarVal: '8–20 viikkoa',
        sidebarItems: ['Markkinamahdollisuuksien arviointi', 'Go-to-market-strategia', 'Kumppanien tunnistaminen ja yhteydenotto', 'Tulomallin analyysi', 'Kilpailupositiointi', '90 päivän toimintasuunnitelma'],
        sidebarCta: 'Keskustele kasvustasi →',
        bodyH2s: ['Operatiivinen, ei teoreettinen', 'Mitä teen', 'Saatavilla kuudella kielellä'],
        bodyPs: [
          'Olen ollut perustamassa yritystä, hallinnoinut asiakassuhteita kolmella mantereella, hankkinut yrityssponsoreja tapahtumille ja auttanut kirjoittamaan markkinoille pääsyn raportteja, joihin asiakkaat oikeasti reagoivat. Liiketoiminnan kehittämisneuvot ovat hyödyllisiä vain, jos ne kytkeytyvät toteutukseen — ja olen tehnyt sen toteutuksen.',
          'Toimin parhaiten yritysten kanssa, joilla on tuote tai palvelu, joka toimii yhdellä markkinalla ja jotka haluavat laajentua — maantieteellisesti, uusiin asiakassegmentteihin tai kumppanuuskanaviin, joita ei ole vielä tutkittu.'
        ],
        psTitles: ['Markkinoille pääsyn strategia', 'Kumppanuuksien kehittäminen', 'Tulojen monipuolistaminen', 'Toteutuksen suunnittelu'],
        psDescs: [
          'Mahdollisuuksien kartoitus, kilpailumaisema, sääntelyynäkökohdat, hinnoittelustrategia ja vaiheistettu markkinoille pääsyn suunnitelma realistisilla välitavoitteilla ja resurssitarpeilla.',
          'Oikeiden kumppanien tunnistaminen, vastauksiin johtavan yhteydenoton rakentaminen, alkukeskustelun jäsentäminen ja kumppanuusehtojen luonnostelu, joka suojaa molempia osapuolia.',
          'Viereinäisten tulovirtojen kartoitus — uudet tuotteet, uudet segmentit, uudet kanavat — suhteessa nykyisiin valmiuksiisi ja päättäminen, mitä kannattaa tavoitella ensin.',
          'Konkreettinen 90 päivän toimintasuunnitelma omistajuuksilla, aikatauluilla ja riippuvuuksilla — muuntaa strategiset päätökset operatiivisiksi askeleiksi, joita tiimisi voi toteuttaa.'
        ],
        bodyLangP: 'Liiketoiminnan kehitystyö — kumppaniyhteydenotto, markkinatutkimus, asiakasehdotukset ja neuvottelut — toimitetaan englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi tai urduksi.',
        ctaTitle: 'Valmis <span class="em">kasvamaan?</span>',
        ctaP: 'Kerro, missä olet, minne haluat menndä ja mikä on tähän mennessä estänyt sinua. Selvitetään oikea polku.',
        ctaBtn: 'Ota yhteyttä →'
      }
    };

    function applyServicePage(isFi) {
      var pathMatch = (window.location.pathname || '').match(/services\/([^\/]+)\.html/);
      if (!pathMatch) return;
      var slug = pathMatch[1];
      var data = SVC_FI[slug];
      if (!data) return;

      function setEl(el, htmlVal) {
        if (!el) return;
        if (isFi) {
          if (!el.hasAttribute('data-i18n-orig')) el.setAttribute('data-i18n-orig', el.innerHTML);
          el.innerHTML = htmlVal;
        } else {
          var orig = el.getAttribute('data-i18n-orig');
          if (orig !== null) { el.innerHTML = orig; el.removeAttribute('data-i18n-orig'); }
        }
      }

      var heroTagLink = document.querySelector('.page-hero-tag a');
      if (heroTagLink) setEl(heroTagLink, '02 — Palvelut');

      setEl(document.querySelector('.page-hero-title'), data.heroTitle);
      setEl(document.querySelector('.page-hero-lede'), data.heroLede);

      document.querySelectorAll('.svc-sidebar-label').forEach(function (el, i) {
        if (data.sidebarLabels[i] !== undefined) setEl(el, data.sidebarLabels[i]);
      });

      setEl(document.querySelector('.svc-sidebar-val'), data.sidebarVal);

      document.querySelectorAll('.includes-list li').forEach(function (el, i) {
        if (data.sidebarItems[i] !== undefined) setEl(el, data.sidebarItems[i]);
      });

      setEl(document.querySelector('.svc-sidebar .btn-primary'), data.sidebarCta);

      document.querySelectorAll('.svc-body h2').forEach(function (el, i) {
        if (data.bodyH2s[i] !== undefined) setEl(el, data.bodyH2s[i]);
      });

      var bodyPs = document.querySelectorAll('.svc-body p');
      if (bodyPs[0]) setEl(bodyPs[0], data.bodyPs[0]);
      if (bodyPs[1]) setEl(bodyPs[1], data.bodyPs[1]);
      if (bodyPs[2]) setEl(bodyPs[2], data.bodyLangP);

      document.querySelectorAll('.ps-title').forEach(function (el, i) {
        if (data.psTitles[i] !== undefined) setEl(el, data.psTitles[i]);
      });

      document.querySelectorAll('.ps-desc').forEach(function (el, i) {
        if (data.psDescs[i] !== undefined) setEl(el, data.psDescs[i]);
      });

      var secs = document.querySelectorAll('section.sec');
      var ctaSec = secs[secs.length - 1];
      if (ctaSec) {
        setEl(ctaSec.querySelector('.sec-title'), data.ctaTitle);
        setEl(ctaSec.querySelector('p'), data.ctaP);
        setEl(ctaSec.querySelector('.btn-primary'), data.ctaBtn);
      }
    }

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
      applyServicePage(isFi);
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
