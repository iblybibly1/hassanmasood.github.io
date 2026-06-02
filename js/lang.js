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
    footBottom: '© 2026 M. Hassan Masood · Kaikki oikeudet pidätetään · Y-tunnus 3573040-9 · Inkoo, Suomi',
  };

  /* Page content translations — keyed by data-t attribute value */
  var PAGE_FI = {
    /* index.html — hero */
    'hero-tagline': 'Kestävä liiketoimintakehittäjä, joka erikoistuu ESG- ja CBAM-vaatimustenmukaisuuteen sekä kansainväliseen kaupalliseen strategiaan.',
    'hero-cta1': 'Koko tarina <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    'hero-cta2': 'Ota yhteyttä',
    /* index.html — story section */
    'story-h2': 'Tarina',
    'story-p1': 'Olen Suomessa toimiva kestävä liiketoimintakehittäjä, joka erikoistuu <strong class="text-inverse-primary font-bold">ESG- ja CBAM-vaatimustenmukaisuuteen</strong>, myyntijärjestelmiin ja rajat ylittävään kaupalliseen strategiaan. Muunnan monimutkaiset EU-viitekehykset — CBAM, CSRD, toimittajatietojen kerääminen, CN-koodiuudelleenluokittelu — käytännön järjestelmiksi, joita organisaatiot voivat operoida päivittäin.',
    'story-p2': 'Viiden vuoden ja kolmen mantereen aikana olen hallinnoinut rajat ylittäviä toimitusketjuja 2 400 keräyspisteessä Pakistanissa, ottanut käyttöön CSRD-vaatimustenmukaisuuskehyksiä suomalaisille viejille ja rakentanut dataohjattuja myyntiputkia sekä B2B- että verkkokauppaliketoiminnalle.',
    'story-p3': 'Vaatimustenmukaisuustyön ohella tarjoan <strong class="text-inverse-primary font-bold">verkkosuunnittelua ja -kehitystä</strong>, digitaalista markkinointistrategiaa, CRM-käyttöönottoa HubSpotissa ja Salesforcessa sekä kansainvälistä markkinoille pääsyn tukea. Saatavilla kuudella kielellä: englanti, suomi, ruotsi, arabia, turkki ja urdu.',
    'story-quote': '&ldquo;Minulla on BBA TAMK:lta CGPA:lla 4,29/5,0 ja sijoituin 3. sijalle Huawei Tech Arena Finland 2025:ssa — ainoana ei-CS-kilpailijana podiumilla.&rdquo;',
    'story-cta1': 'Koko tarina <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — services section */
    'svc-h2': 'Palvelut',
    'svc-lede': 'Käytännön työtä kaupallisella fokuksella. Saatavilla kuudella kielellä.',
    'svc-esg-h3': 'ESG &amp; Kestävyys',
    'svc-esg-p': 'CBAM, CSRD, toimittajatiedot, elinkaariarviointi — rakennettu käytännön toteutuskokemuksesta.',
    'svc-intl-h3': 'Kansainvälinen Laajeneminen',
    'svc-intl-p': 'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus, lokalisointi 6 kielellä.',
    'svc-crm-h3': 'Myynti &amp; CRM',
    'svc-crm-p': 'Asiakashankintajärjestelmät, putkiliiketoiminta, HubSpot tai Salesforce B2B- ja verkkokaupalle.',
    'svc-web-h3': 'Verkkosuunnittelu &amp; Kehitys',
    'svc-web-p': 'Puhtaat, nopeat, mobiiliensijaiset verkkosivut — konseptista julkaisuun.',
    'svc-view-all': 'Näytä kaikki 8 palvelua <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — capabilities section */
    'cap-h2': 'Osaaminen',
    'cap-esg-h4': 'ESG &amp; Vaatimustenmukaisuus',
    'cap-crm-h4': 'Myynti &amp; CRM',
    'cap-web-h4': 'Verkko &amp; Teknologia',
    'cap-lang-h4': 'Kielet',
    'cap-view-all': 'Täydellinen taitoerittely <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* about.html */
    'about-breadcrumb': 'Tietoa',
    'about-h1': 'Kuka<br/><span class="text-primary">Olen.</span>',
    'about-hero-lede': 'Suomessa toimiva kansainvälisen liiketoiminnan ammattilainen, joka muuttaa sääntelyn kaupalliseksi eduksi, yhdistää operatiivisen kokemuksen teknologiaan ja työskentelee kuudella kielellä.',
    'about-p1': 'Olen <strong class="text-primary">kestävä liiketoimintakehittäjä</strong> — käytännössä se tarkoittaa, että istun siinä risteyksessä, jossa regulaatio, operatiivinen arki ja kaupallinen strategia kohtaavat. Autan yrityksiä ymmärtämään, mitä EU-viitekehykset — CBAM, CSRD, toimittaja-auditoinnit — tarkoittavat käytännössä, ja rakennan sitten järjestelmät niiden toteuttamiseen.',
    'about-p2': 'Taustani kattaa viisi erilaista roolia — rajat ylittävän toimitusketjun hallinnasta 2 400 jätekuljetuskeskuksessa Punjabissa CSRD-kehysten käyttöönottoon suomalaisen kuluttajatuotteiden brändin hyväksi EU:n tullialueilla. Tämä laajuus on tarkoituksellinen. Terävimmät kaupalliset päätökset tulevat ihmisiltä, jotka ovat nähneet sekä johdon strategian että operatiivisen työn.',
    'about-p3': 'Perinteisen liikkeenjohdon konsultoinnin ulkopuolella olen <strong class="text-primary">teknologiaihminen sydämeltäni</strong>. Olen opiskellut finanssimarkkinoita itsenäisesti vuodesta 2012, rakentanut algoritmisia kaupankäyntityökaluja, mukautettuja KPI-indikaattoreita ja backtesting-kehyksiä Pythonilla. Osallistuin Huawei Tech Arena Finland 2025 -kilpailuun ja sijoituin 3. sijalle kansallisesti ainoana ei-tietotekniikan ehdokkaana podiumilla.',
    'about-p4': 'Kieli on yksi käytännöllisimmistä ammatillisista vahvuuksistani. Työskentelen sujuvasti <strong class="text-primary">englanniksi ja urduksi</strong>, suomea ja arabiaa sujuvasti ja hallitsen ruotsin ja turkin työkielellä. Voin suorittaa toimittaja-auditoinnin Etelä-Aasiassa, neuvotella vaatimustenmukaisuuden laajuudesta Helsingissä ja kommunikoida suoraan MENA-alueen kumppanien kanssa ilman lisäkäännöstasoa.',
    'about-p5': 'Valmistuin BBA:ksi kansainvälisestä liiketoiminnasta TAMK:sta joulukuussa 2024 CGPA:lla <strong class="text-primary">4,29 / 5,0</strong>. Opintojeni aikana suoritin vaihtovaiheen Ondokuz Mayıs\'n yliopistossa Turkissa, edusti Tampereen yliopistoa kansainvälisissä liiketoimintacase- ja myyntikilpailuissa eri puolilla Eurooppaa ja pyöritti kannattavaa kansainvälistä verkkokauppaa opintojen ohella.',
    'about-p6': 'Minua ajaa mahdollisuus ottaa jokin <strong class="text-primary">aidosti monimutkainen</strong> asia — sääntelykehys, markkinoille pääsyn haaste, rikkinäinen myyntiputki — ja muuttaa se toimivaksi järjestelmäksi. Siinä olen hyvä, ja sellainen ongelma on se, jonka haluan seuraavaksi ratkaista.',
    'about-edu-label': 'Koulutus',
    'about-edu-h': 'Akateeminen <span class="text-primary">Tausta.</span>',
    'about-edu-lede': 'Käytännönläheinen kansainvälinen koulutus vahvalla akateemisella tuloksella ja tosielämän sovelluksilla.',
    'about-value-label': 'Mitä tarjoan',
    'about-value-h': 'Ydinarvoa.',
    'about-value-lede': 'Kolme osaamista, jotka harvoin löytyvät samalta henkilöltä — ja jotka toimivat parhaiten yhdessä.',
    'val-01-title': 'Sääntelystä <span class="text-primary">Operatiiviseksi</span>',
    'val-01-body': 'En vain lue EU-viitekehyksiä — rakennan sisäiset työnkulut, toimittajaviestintäketjut ja raportointijärjestelmät, jotka tekevät vaatimustenmukaisuudesta operatiivista. ESG ja CBAM muuttuvat toimiviksi prosesseiksi, ei pelkiksi arkistointiharjoituksiksi.',
    'val-02-title': 'Strategiasta <span class="text-primary">Toteutukseen</span>',
    'val-02-body': 'Olen työskennellyt sekä strategiakonsulttina globaaleja yrityksiä neuvoen että operatiivisena johtajana. Pystyn kehystämään oikean ongelman strategisella tasolla ja jäämään sitten toteuttamaan vastausta.',
    'val-03-title': 'Teknologia <span class="text-primary">Kertojana</span>',
    'val-03-body': 'Rakennan mukautettuja datatyökaluja — Power BI -kojelautoja, Python-kaupankäyntibotteja, KPI-malleja — jotka muuttavat informaation päätöksiksi. Tekninen työ on luonteva osa tapaa, jolla ratkaisen kaupallisia ongelmia.',
    'val-04-title': 'Rajat ylittävä <span class="text-primary">Sujuvuus</span>',
    'val-04-body': 'Kuusi kieltä ja suora kokemus suomalaisista, EU-, Etelä-Aasian ja turkkilaisista liiketoimintaympäristöistä. Vähennän kitkaa kansainvälisissä operaatioissa sen sijaan, että lisäisin käännöstasoja.',
    /* work.html */
    'work-breadcrumb': 'Kokemus',
    'work-h1': 'Viimeaikaiset<br/><span class="text-primary">Tehtävät.</span>',
    'work-lede': 'Viisi roolia myynnin, ESG-vaatimustenmukaisuuden, verkkokauppaoperaatioiden ja liiketoimintakehityksen parissa — Suomessa, Pakistanissa ja Arabiemiraateissa.',
    'work-exp-h': 'Kokemus',
    'work-edu-label': 'Koulutus',
    'work-edu-h': 'Akateeminen <span class="text-primary">Tausta.</span>',
    /* skills.html */
    'skills-lang-label': 'Kielet',
    'skills-lang-h': 'Kuusi <span class="text-primary">Kieltä.</span>',
    'skills-lang-p': 'Kaikki ammatilliset palvelut toimitetaan millä tahansa seuraavista kielistä — ei välittäjiä, ei käännöskustannuksia.',
    /* services.html */
    'svc-page-h1': 'Mitä<br/><span class="text-primary">Tarjoan.</span>',
    'svc-page-lede': 'Kahdeksan palvelualuetta kattaen ESG-vaatimustenmukaisuuden, verkkokehityksen, markkinoinnin, myynnin ja kansainvälisen liiketoiminnan. Kaikki saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi ja urduksi.',
    'svc-page-p1': 'Jokainen toimeksianto on käytännöllinen, ei teoreettinen. Olen toteuttanut nämä järjestelmät omin käsin — CBAM-ilmoittajatilien rekisteröinnistä ja toimittajien hiilijalanjälkitietojen keräämisestä satojen toimipisteiden kautta täysien CRM-putkilinjojen rakentamiseen ja verkkokauppakanavien avaamiseen rajojen yli.',
    'svc-page-p2': 'Tarvitsetpa yksittäisen toimituksen tai jatkuvan kumppanin, teen työtä suoraan — ei välikäsiä, ei juniorien sijaisia. Useimmat toimeksiannot alkavat lyhyellä keskustelulla sen selvittämiseksi, mitä tarkalleen tarvitset.',
    /* contact.html */
    'contact-h1': 'Otetaan<br/><span class="text-primary">Yhteyttä.</span>',
    'contact-lede': 'Useimmat hyvät toimeksiannot alkavat lyhyellä keskustelulla. Kerro mitä olet tekemässä — kerron rehellisesti pystynkö auttamaan ja miten.',
    'contact-label-fn': 'Etunimi',
    'contact-label-ln': 'Sukunimi',
    'contact-label-email': 'Sähköposti',
    'contact-label-org': 'Yritys / Organisaatio <span class="text-surface-container-highest">(valinnainen)</span>',
    'contact-label-typ': 'Mitä etsit?',
    'contact-label-msg': 'Viesti',
    'contact-submit': 'Lähetä viesti →',
    'contact-status': 'Saatavilla nyt',
    'contact-sidebar-email': 'Sähköposti',
    'contact-sidebar-phone': 'Puhelin',
    'contact-sidebar-location': 'Sijainti',
    'contact-sidebar-status': 'Tila',
    'contact-sidebar-services': 'Palvelut',
    'contact-svc-web': 'Verkkosuunnittelu &amp; Kehitys',
    'contact-svc-esg': 'ESG &amp; CBAM',
    'contact-svc-digital': 'Digitaalinen Markkinointi',
    'contact-svc-sales': 'Sales &amp; CRM',
    'contact-svc-intl': 'Kansainvälinen Laajeneminen',
    'contact-svc-brand': 'Brändi &amp; Sisältö',
    'contact-opt-default': 'Valitse palvelualue',
    'contact-opt-web': 'Verkkosuunnittelu &amp; Kehitys',
    'contact-opt-esg': 'ESG &amp; Kestävyyskonsultointi',
    'contact-opt-digital': 'Digitaalinen Markkinointi',
    'contact-opt-sales': 'Myynti &amp; CRM',
    'contact-opt-intl': 'Kansainvälinen Laajeneminen',
    'contact-opt-brand': 'Brändi &amp; Sisältö',
    'contact-opt-social': 'Sosiaalinen &amp; Mainokset',
    'contact-opt-biz': 'Liiketoimintakehitys',
    'contact-opt-other': 'Jotain muuta',
    'contact-ph-msg': 'Kerro mitä olet tekemässä, missä olet jumissa, tai mitä haluat rakentaa. Mitä enemmän kontekstia, sen parempi.',
    /* about.html CTA buttons */
    'about-cta-services': 'Näytä kaikki palvelut &rarr;',
    'about-cta-collab': 'Tehdään yhteistyötä',
    /* services.html cards */
    'svc-card-01-h3': 'Verkkosuunnittelu &amp;<br/><span class="text-primary">Kehitys</span>',
    'svc-card-01-p': 'Puhtaat, nopeat, mobiiliensijaiset verkkosivut, jotka on rakennettu konvertoimaan. Konseptista käyttöönottoon täydellä luovutuksella ja dokumentaatiolla.',
    'svc-card-02-h3': 'ESG &amp; <span class="text-primary">Kestävyys</span>konsultointi',
    'svc-card-02-p': 'CBAM, CSRD, toimittajatietojen keruu, CN-koodiuudelleenluokittelu, LCA — rakennettu käytännön kokemuksesta näiden järjestelmien toteuttamisesta alusta alkaen.',
    'svc-card-03-h3': 'Digitaalinen <span class="text-primary">Markkinointi</span>',
    'svc-card-03-p': 'Yleisötutkimus, kanavayhdistelmästrategia, KPI-kojelaudat, kuukausittaiset arviointikehykset — dataohjattu alusta asti.',
    'svc-card-04-h3': 'Myynti &amp; <span class="text-primary">CRM</span>',
    'svc-card-04-p': 'Hankintajärjestelmät, putkiliiketoiminta, B2B ja DTC-verkkokauppa. CRM-suunnittelu ja -käyttöönotto HubSpotissa tai Salesforcessa.',
    'svc-card-05-h3': 'Kansainvälinen <span class="text-primary">Laajeneminen</span>',
    'svc-card-05-p': 'Rajat ylittävä verkkokauppa, toimittajan tarkastus, EU:n tuontivaatimustenmukaisuus, lokalisointi kuudella kielellä.',
    'svc-card-06-h3': 'Brändi &amp; <span class="text-primary">Sisältö</span>',
    'svc-card-06-p': 'Brändiääni, verkkosivutekstit, sähköpostikampanjat ja pitch-esitykset — laadittu useilla kielillä kansainvälisille yleisöille.',
    'svc-card-07-h3': 'Sosiaalinen &amp; <span class="text-primary">Mainokset</span>',
    'svc-card-07-p': 'Instagram- ja Facebook-orgaaninen sisältö sekä maksullinen mainosten hallinta. Luovuus, kohdentaminen, optimointi ja läpinäkyvä raportointi.',
    'svc-card-08-h3': 'Liiketoiminta<span class="text-primary">kehitys</span>',
    'svc-card-08-p': 'Markkinoilletulostrategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen — rakennettu todelliseen operatiiviseen kokemukseen kolmella mantereella.',
    'svc-lang-label': '&mdash; Tuki 6 kielellä',
    'svc-cta-label': 'Epävarma mikä sopii?',
    'svc-cta-h2': 'Jutellaan <span class="text-primary">ensin.</span>',
    'svc-cta-p': 'Useimmat toimeksiannot alkavat lyhyellä keskustelulla. Kerro mitä olet tekemässä ja kerron rehellisesti pystynkö auttamaan ja miten.',
    'svc-cta-btn': 'Aloita keskustelu &rarr;',
    /* work.html */
    'work-comp-label': 'Kilpailut &amp; Palkinnot',
    'work-cta-btn': 'Aloita keskustelu &rarr;',
    'work-cta-about': 'Tietoa minusta',
    'work-cta-skills': 'Taidot &amp; työkalut',
    /* skills.html */
    'skills-how-label': 'Miten työskentelen',
    'skills-cta-btn': 'Aloita keskustelu &rarr;',
    'skills-cta-services': 'Näytä palvelut',
  };

  var PAGE_EN = {
    /* index.html — hero */
    'hero-tagline': 'Sustainable business developer specialising in ESG & CBAM compliance and international commercial strategy.',
    'hero-cta1': 'Full Story <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    'hero-cta2': 'Get in Touch',
    /* index.html — story section */
    'story-h2': 'The Story',
    'story-p1': 'I\'m a Finland-based sustainable business developer specialising in <strong class="text-inverse-primary font-bold">ESG and CBAM compliance</strong>, sales systems, and cross-border commercial strategy. I translate complex EU frameworks — CBAM, CSRD, supplier data collection, CN-code reclassification — into practical systems that organisations can actually operate day to day.',
    'story-p2': 'Over five years and three continents, I\'ve managed cross-border supply chains across 2,400 collection sites in Pakistan, deployed CSRD compliance frameworks for Finnish exporters, and built data-driven sales pipelines for both B2B and e-commerce businesses.',
    'story-p3': 'Alongside compliance work, I offer <strong class="text-inverse-primary font-bold">web design and development</strong>, digital marketing strategy, CRM implementation on HubSpot and Salesforce, and international market entry support. Available in six languages: English, Finnish, Swedish, Arabic, Turkish, and Urdu.',
    'story-quote': '&ldquo;I hold a BBA from TAMK with a CGPA of 4.29/5.0 and placed 3rd at Huawei Tech Arena Finland 2025 — the only non-CS competitor on the podium.&rdquo;',
    'story-cta1': 'Full Story <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — services section */
    'svc-h2': 'Services',
    'svc-lede': 'Practical work with commercial focus. Available in six languages.',
    'svc-esg-h3': 'ESG &amp; Sustainability',
    'svc-esg-p': 'CBAM, CSRD, supplier data, LCA — built from hands-on implementation experience.',
    'svc-intl-h3': 'International Expansion',
    'svc-intl-p': 'Cross-border e-commerce, supplier vetting, EU compliance, localisation in 6 languages.',
    'svc-crm-h3': 'Sales &amp; CRM',
    'svc-crm-p': 'Outreach systems, pipeline ops, HubSpot or Salesforce for B2B and e-commerce.',
    'svc-web-h3': 'Web Design &amp; Development',
    'svc-web-p': 'Clean, fast, mobile-first websites built to convert — concept to go-live.',
    'svc-view-all': 'View All 8 Services <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — capabilities section */
    'cap-h2': 'Capabilities',
    'cap-esg-h4': 'ESG &amp; Compliance',
    'cap-crm-h4': 'Sales &amp; CRM',
    'cap-web-h4': 'Web &amp; Tech',
    'cap-lang-h4': 'Languages',
    'cap-view-all': 'Full Skills Breakdown <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* about.html */
    'about-breadcrumb': 'About',
    'about-h1': 'Who I<br/><span class="text-primary">Am.</span>',
    'about-hero-lede': 'A Finland-based International Business professional who turns regulation into commercial advantage, blends operational experience with technology, and works across six languages.',
    'about-p1': 'I am a <strong class="text-primary">sustainable business developer</strong> — which in practice means I sit where regulation, operations, and commercial strategy intersect. I help companies understand what EU frameworks like CBAM and CSRD actually require of them, build the internal systems to meet those requirements, and ensure that compliance doesn\'t just reduce risk but generates real business value.',
    'about-p2': 'My background spans five distinct roles — from managing a cross-border supply chain of 2,400 waste collection centres in Punjab to implementing CSRD frameworks for a Finnish consumer goods brand operating across EU customs jurisdictions. That range is deliberate. I believe the sharpest commercial decisions come from people who have seen both the boardroom strategy and the operational floor.',
    'about-p3': 'Outside of traditional business consulting, I am a <strong class="text-primary">technologist at heart</strong>. I have been self-studying financial markets since 2012, building algorithmic trading tools, custom KPI indicators, and backtesting frameworks in Python. I competed at Huawei Tech Arena Finland 2025 and placed 3rd nationally as the only non-computer science candidate on the podium.',
    'about-p4': 'Language is one of my most practical professional assets. I work fluently in <strong class="text-primary">English and Urdu</strong>, am conversational in Finnish and Arabic, and have working knowledge of Swedish and Turkish. This means I can run a supplier audit in South Asia, negotiate a compliance scope in Helsinki, and communicate directly with MENA-region partners without a layer of translation or cultural friction.',
    'about-p5': 'I graduated with a BBA in International Business from TAMK in December 2024 with a CGPA of <strong class="text-primary">4.29 / 5.0</strong>. During my studies I completed an exchange semester at Ondokuz Mayıs University in Turkey, represented Tampere University at international business case and sales competitions across Europe, and ran a profitable international e-commerce store alongside my studies.',
    'about-p6': 'What drives me is the opportunity to take something <strong class="text-primary">genuinely complex</strong> — a regulatory framework, a market entry challenge, a broken sales pipeline — and turn it into a system that runs. That\'s what I\'m good at, and that\'s the kind of problem I\'m looking for my next opportunity to solve.',
    'about-edu-label': 'Education',
    'about-edu-h': 'Academic <span class="text-primary">Background.</span>',
    'about-edu-lede': 'Practical international education with a strong academic record and real-world application throughout.',
    'about-value-label': 'What I offer',
    'about-value-h': 'Core Value.',
    'about-value-lede': 'Three capabilities that are rarely found in the same person — and work best together.',
    'val-01-title': 'Regulatory to <span class="text-primary">Operational</span>',
    'val-01-body': 'I don\'t just read EU frameworks — I build the internal workflows, supplier communication chains, and reporting systems that make compliance operational. ESG and CBAM become working processes, not filing exercises.',
    'val-02-title': 'Strategy to <span class="text-primary">Execution</span>',
    'val-02-body': 'I have worked as both a strategy consultant advising global companies and as an operational manager. I can frame the right problem at the strategic level and then stay to implement the answer.',
    'val-03-title': 'Technology as a <span class="text-primary">Multiplier</span>',
    'val-03-body': 'I build custom data tools — Power BI dashboards, Python trading bots, KPI models — that turn information into decisions. Technical work is a natural part of how I solve commercial problems.',
    'val-04-title': 'Cross-border <span class="text-primary">Fluency</span>',
    'val-04-body': 'Six languages and direct experience across Finnish, EU, South Asian, and Turkish business contexts. I reduce friction in international operations rather than adding translation layers.',
    /* work.html */
    'work-breadcrumb': 'Work',
    'work-h1': 'Recent<br/><span class="text-primary">Positions.</span>',
    'work-lede': 'Five roles across sales, ESG compliance, e-commerce operations, and business development — spanning Finland, Pakistan, and the UAE.',
    'work-exp-h': 'Experience',
    'work-edu-label': 'Education',
    'work-edu-h': 'Academic <span class="text-primary">Background.</span>',
    /* skills.html */
    'skills-lang-label': 'Languages',
    'skills-lang-h': 'Six <span class="text-primary">Languages.</span>',
    'skills-lang-p': 'All professional services delivered in any of the following — no intermediaries, no translation overhead.',
    /* services.html */
    'svc-page-h1': 'What I<br/><span class="text-primary">Offer.</span>',
    'svc-page-lede': 'Eight service areas covering ESG compliance, web development, marketing, sales, and international business. All available in English, Finnish, Swedish, Arabic, Turkish, and Urdu.',
    'svc-page-p1': 'Every engagement is practical, not theoretical. I\'ve implemented these systems first-hand — from registering CBAM declarant accounts and running supplier carbon footprint data collection across hundreds of sites, to building full CRM pipelines and launching e-commerce channels across borders.',
    'svc-page-p2': 'Whether you need a single deliverable or an ongoing partner, I work directly — no hand-offs, no junior substitutes. Most engagements start with a short conversation to understand exactly what you need.',
    /* contact.html */
    'contact-h1': 'Let\'s<br/><span class="text-primary">Talk.</span>',
    'contact-lede': 'Most good engagements start with a short conversation. Tell me what you\'re working on — I\'ll tell you honestly whether and how I can help.',
    'contact-label-fn': 'First name',
    'contact-label-ln': 'Last name',
    'contact-label-email': 'Email',
    'contact-label-org': 'Company / Organisation <span class="text-surface-container-highest">(optional)</span>',
    'contact-label-typ': 'What are you looking for?',
    'contact-label-msg': 'Message',
    'contact-submit': 'Send message →',
    'contact-status': 'Available now',
    'contact-sidebar-email': 'Email',
    'contact-sidebar-phone': 'Phone',
    'contact-sidebar-location': 'Location',
    'contact-sidebar-status': 'Status',
    'contact-sidebar-services': 'Services',
    'contact-svc-web': 'Web Design &amp; Dev',
    'contact-svc-esg': 'ESG &amp; CBAM',
    'contact-svc-digital': 'Digital Marketing',
    'contact-svc-sales': 'Sales &amp; CRM',
    'contact-svc-intl': 'International Expansion',
    'contact-svc-brand': 'Brand &amp; Content',
    'contact-opt-default': 'Select service area',
    'contact-opt-web': 'Web Design &amp; Development',
    'contact-opt-esg': 'ESG &amp; Sustainability Consulting',
    'contact-opt-digital': 'Digital Marketing',
    'contact-opt-sales': 'Sales &amp; CRM',
    'contact-opt-intl': 'International Expansion',
    'contact-opt-brand': 'Brand &amp; Content',
    'contact-opt-social': 'Social &amp; Paid Ads',
    'contact-opt-biz': 'Business Development',
    'contact-opt-other': 'Something else',
    'contact-ph-msg': 'Tell me what you\'re working on, where you\'re stuck, or what you\'d like to build. The more context, the better.',
    /* about.html CTA buttons */
    'about-cta-services': 'View All Services &rarr;',
    'about-cta-collab': 'Let\'s Collaborate',
    /* services.html cards */
    'svc-card-01-h3': 'Web Design &amp;<br/><span class="text-primary">Development</span>',
    'svc-card-01-p': 'Clean, fast, mobile-first websites built to convert. Concept to go-live with full handover and documentation.',
    'svc-card-02-h3': 'ESG &amp; <span class="text-primary">Sustainability</span> Consulting',
    'svc-card-02-p': 'CBAM, CSRD, supplier data collection, CN-code reclassification, LCA — built from hands-on experience implementing these systems from scratch.',
    'svc-card-03-h3': 'Digital <span class="text-primary">Marketing</span>',
    'svc-card-03-p': 'Audience research, channel mix strategy, KPI dashboards, monthly review frameworks — data-driven from the start.',
    'svc-card-04-h3': 'Sales &amp; <span class="text-primary">CRM</span>',
    'svc-card-04-p': 'Outreach systems, pipeline operations, B2B and DTC e-commerce. CRM design and implementation on HubSpot or Salesforce.',
    'svc-card-05-h3': 'International <span class="text-primary">Expansion</span>',
    'svc-card-05-p': 'Cross-border e-commerce, supplier vetting, EU import compliance, localisation in six languages.',
    'svc-card-06-h3': 'Brand &amp; <span class="text-primary">Content</span>',
    'svc-card-06-p': 'Brand voice, web copy, email campaigns, and pitch presentations — crafted in multiple languages for international audiences.',
    'svc-card-07-h3': 'Social &amp; <span class="text-primary">Paid Ads</span>',
    'svc-card-07-p': 'Instagram and Facebook organic content plus paid ad management. Creative, targeting, optimisation, and transparent reporting.',
    'svc-card-08-h3': 'Business <span class="text-primary">Development</span>',
    'svc-card-08-p': 'Market entry strategy, partnership development, revenue diversification — built on real operational experience across three continents.',
    'svc-lang-label': '&mdash; Supported in 6 languages',
    'svc-cta-label': 'Not sure which fits?',
    'svc-cta-h2': 'Let\'s talk <span class="text-primary">first.</span>',
    'svc-cta-p': 'Most engagements start with a short conversation. Tell me what you\'re working on and I\'ll tell you honestly whether and how I can help.',
    'svc-cta-btn': 'Start a conversation &rarr;',
    /* work.html */
    'work-comp-label': 'Competitions &amp; Awards',
    'work-cta-btn': 'Start a conversation &rarr;',
    'work-cta-about': 'About Me',
    'work-cta-skills': 'Skills &amp; Tools',
    /* skills.html */
    'skills-how-label': 'How I Work',
    'skills-cta-btn': 'Start a conversation &rarr;',
    'skills-cta-services': 'View Services',
  };

  function applyNav(t) {
    document.querySelectorAll('nav a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      var hasIcon = !!a.querySelector('span.material-symbols-outlined');
      if (hasIcon) return; // skip logo and links with icons
      var txt = a.textContent.trim();
      if (href.endsWith('about.html') && (txt === 'Tietoa' || txt === 'About')) a.textContent = t.about;
      else if (href.endsWith('work.html') && (txt === 'Kokemus' || txt === 'Work')) a.textContent = t.work;
      else if (href.endsWith('projects.html') && (txt === 'Projektit' || txt === 'Projects')) a.textContent = t.projects;
      else if (href.endsWith('skills.html') && (txt === 'Taidot' || txt === 'Skills')) a.textContent = t.skills;
    });
    // Services dropdown trigger (has chevron icon)
    document.querySelectorAll('nav a[href$="services.html"]').forEach(function(a) {
      var icon = a.querySelector('span');
      if (icon) { a.textContent = t.services; a.appendChild(icon); }
    });
    // CTA hire me button
    document.querySelectorAll('a.bg-primary[href$="contact.html"], a.font-bold[href$="contact.html"]').forEach(function(a) {
      a.textContent = t.hireMeBtn;
    });
    // Dropdown items
    document.querySelectorAll('nav .absolute a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href.includes('web-design'))       a.textContent = t.ddWebDesign;
      else if (href.includes('esg'))         a.textContent = t.ddESG;
      else if (href.includes('digital'))     a.textContent = t.ddDigital;
      else if (href.includes('sales-crm'))   a.textContent = t.ddSales;
      else if (href.includes('international')) a.textContent = t.ddIntl;
      else if (href.includes('brand'))       a.textContent = t.ddBrand;
      else if (href.includes('social'))      a.textContent = t.ddSocial;
      else if (href.includes('business'))    a.textContent = t.ddBiz;
    });
  }

  function applyFooter(t) {
    document.querySelectorAll('footer h5').forEach(function(h) {
      var txt = h.textContent.trim();
      if (txt === 'Sivusto' || txt === 'Site')             h.textContent = t.footSiteH;
      else if (txt === 'Palvelut' || txt === 'Services')   h.textContent = t.footSvcH;
      else if (txt === 'Yhteystiedot' || txt === 'Contact') h.textContent = t.footContactH;
    });
    document.querySelectorAll('footer ul a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      var txt = a.textContent.trim();
      if (href.includes('index'))              a.textContent = t.footHome;
      else if (href.includes('about'))         a.textContent = t.footAbout;
      else if (href.includes('work'))          a.textContent = t.footWork;
      else if (href.includes('projects'))      a.textContent = t.footProjects;
      else if (href.includes('skills'))        a.textContent = t.footSkills;
      else if (href.includes('web-design'))    a.textContent = t.footWebDesign;
      else if (href.includes('esg'))           a.textContent = t.footESG;
      else if (href.includes('sales-crm'))     a.textContent = t.footSales;
      else if (href.includes('services') && !href.includes('/services/')) a.textContent = t.footAll;
      else if (href.includes('contact'))       a.textContent = t.footContactPage;
    });
    var brandP = document.querySelector('footer .flex-col > div > p');
    if (brandP) brandP.textContent = t.footBrand;
    var bottomP = document.querySelector('footer .border-t p');
    if (bottomP) bottomP.textContent = t.footBottom;
  }

  function applyPageContent(lang) {
    var PAGE = lang === 'fi' ? PAGE_FI : PAGE_EN;
    document.querySelectorAll('[data-t]').forEach(function(el) {
      var key = el.getAttribute('data-t');
      if (PAGE[key] !== undefined) {
        el.innerHTML = PAGE[key];
      }
    });
    document.querySelectorAll('[data-tp]').forEach(function(el) {
      var key = el.getAttribute('data-tp');
      if (PAGE[key] !== undefined) {
        el.placeholder = PAGE[key];
      }
    });
  }

  var currentLang = localStorage.getItem(KEY) || 'fi';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(KEY, lang);
    var t = lang === 'fi' ? FI : EN;
    applyNav(t);
    applyFooter(t);
    applyPageContent(lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('#lang-btn, #lang-btn-mobile, #lang-btn-mobile-nav').forEach(function(b) {
      b.textContent = lang === 'fi' ? 'EN' : 'FI';
    });
  }

  function addToggleBtn(container, id, extraClass) {
    var btn = document.createElement('button');
    btn.id = id;
    btn.className = 'font-label-sm text-label-sm border border-smoke-gray px-3 py-1 uppercase tracking-widest transition-colors hover:border-primary hover:text-primary text-on-surface-variant ' + (extraClass || '');
    btn.textContent = currentLang === 'fi' ? 'EN' : 'FI';
    btn.setAttribute('aria-label', 'Toggle language');
    btn.addEventListener('click', function() {
      applyLang(currentLang === 'fi' ? 'en' : 'fi');
    });
    container.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add desktop toggle between nav links and CTA button
    var desktopNav = document.querySelector('nav .hidden.md\\:flex');
    if (desktopNav) addToggleBtn(desktopNav, 'lang-btn', '');

    // Add mobile toggle at bottom of mobile menu
    var mobileInner = document.querySelector('#mobileMenu > div');
    if (mobileInner) addToggleBtn(mobileInner, 'lang-btn-mobile', 'w-full text-center');

    // Add always-visible mobile toggle next to hamburger button in nav bar
    var hamburger = document.getElementById('mobileMenuBtn');
    if (hamburger) {
      var mobileNavBtn = document.createElement('button');
      mobileNavBtn.id = 'lang-btn-mobile-nav';
      mobileNavBtn.className = 'md:hidden font-label-sm text-label-sm border border-smoke-gray px-3 py-1 uppercase tracking-widest transition-colors hover:border-primary hover:text-primary text-on-surface-variant';
      mobileNavBtn.textContent = currentLang === 'fi' ? 'EN' : 'FI';
      mobileNavBtn.setAttribute('aria-label', 'Toggle language');
      mobileNavBtn.addEventListener('click', function() {
        applyLang(currentLang === 'fi' ? 'en' : 'fi');
      });
      hamburger.parentNode.insertBefore(mobileNavBtn, hamburger);
    }

    // Apply saved language on load
    if (currentLang === 'en') {
      applyLang('en');
    }

    // On mobile, remove scale/blur from bg-vid — they worsen quality on small screens
    var mobileStyle = document.createElement('style');
    mobileStyle.textContent = '@media (max-width:767px){.bg-vid{transform:none!important;filter:brightness(0.5)!important;}}';
    document.head.appendChild(mobileStyle);

    // Background pause button
    if (document.querySelector('.bg-vid')) {
      var pauseBtn = document.createElement('button');
      pauseBtn.id = 'bg-pause-btn';
      pauseBtn.title = 'Pause / resume background';
      pauseBtn.setAttribute('aria-label', 'Pause background animation');
      pauseBtn.style.cssText = [
        'position:fixed',
        'bottom:1.25rem',
        'right:1.25rem',
        'z-index:9999',
        'width:2rem',
        'height:2rem',
        'background:rgba(5,5,5,0.75)',
        'border:1px solid rgba(200,66,28,0.45)',
        'border-radius:50%',
        'color:#c6c6c7',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'cursor:pointer',
        'transition:border-color 0.2s,color 0.2s',
      ].join(';');
      pauseBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:13px;line-height:1;user-select:none;">pause</span>';
      document.body.appendChild(pauseBtn);

      var bgPaused = false;
      pauseBtn.addEventListener('click', function() {
        bgPaused = !bgPaused;
        document.querySelectorAll('.bg-vid').forEach(function(v) {
          bgPaused ? v.pause() : v.play();
        });
        var icon = pauseBtn.querySelector('.material-symbols-outlined');
        icon.textContent = bgPaused ? 'play_arrow' : 'pause';
        pauseBtn.style.borderColor = bgPaused ? 'rgba(200,66,28,0.9)' : 'rgba(200,66,28,0.45)';
        pauseBtn.style.color = bgPaused ? '#C8421C' : '#c6c6c7';
      });
    }
  });
})();
