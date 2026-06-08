/* Language toggle — FI (default) <-> EN */
(function () {
  var KEY = 'hm_lang';

  var EN = {
    about: 'About', services: 'My Services', work: 'Work',
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
    'story-p2': 'Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan, olen hallinnoinut käänteistä toimitusketjua joka kattaa noin 2 400 keräyspistettä Punjabin alueella, ottanut käyttöön CSRD-kehyksiä suomalaisille viejille ja rakentanut dataohjattuja myyntiputkia.',
    'story-p3': 'Vaatimustenmukaisuustyön ohella tarjoan <strong class="text-inverse-primary font-bold">verkkosuunnittelua ja -kehitystä</strong>, digitaalista markkinointistrategiaa, CRM-käyttöönottoa HubSpotissa ja Salesforcessa sekä kansainvälistä markkinoille pääsyn tukea. Saatavilla: englanti, suomi (keskustelutaso, B1), urdu ja punjabi (äidinkieli) sekä alkeet arabiassa ja ruotsissa.',
    'story-quote': '&ldquo;Minulla on BBA TAMK:lta CGPA:lla 4,29/5,0 ja sijoituin 3. sijalle Huawei Tech Arena Finland 2025:ssa — ainoana ei-CS-kilpailijana podiumilla.&rdquo;',
    'story-cta1': 'Koko tarina <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — services section */
    'svc-h2': 'Palvelut',
    'svc-lede': 'Käytännön työtä kaupallisella fokuksella.',
    'svc-esg-h3': 'ESG &amp; Kestävyys',
    'svc-esg-p': 'CBAM, CSRD, toimittajatiedot, elinkaariarviointi — rakennettu käytännön toteutuskokemuksesta.',
    'svc-intl-h3': 'Kansainvälinen Laajeneminen',
    'svc-intl-p': 'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus ja markkinoiden lokalisointi.',
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
    'about-hero-lede': 'Suomessa toimiva kansainvälisen liiketoiminnan ammattilainen, joka muuttaa sääntelyn kaupalliseksi eduksi ja yhdistää operatiivisen kokemuksen teknologiaan.',
    'about-p1': 'Olen <strong class="text-primary">kestävä liiketoimintakehittäjä</strong> — käytännössä se tarkoittaa, että istun siinä risteyksessä, jossa regulaatio, operatiivinen arki ja kaupallinen strategia kohtaavat. Autan yrityksiä ymmärtämään, mitä EU-viitekehykset — CBAM, CSRD, toimittaja-auditoinnit — tarkoittavat käytännössä, ja rakennan sitten järjestelmät niiden toteuttamiseen.',
    'about-p2': 'Taustani kattaa viisi erilaista roolia — käänteisen toimitusketjun hallinnasta joka kattoi noin 2 400 keräyspistettä Punjabin alueella CSRD-kehysten käyttöönottoon suomalaisen kuluttajatuotteiden brändin hyväksi EU:n tullialueilla. Tämä laajuus on tarkoituksellinen. Terävimmät kaupalliset päätökset tulevat ihmisiltä, jotka ovat nähneet sekä johdon strategian että operatiivisen työn.',
    'about-p3': 'Perinteisen liikkeenjohdon konsultoinnin ulkopuolella olen <strong class="text-primary">teknologiaihminen sydämeltäni</strong>. Olen opiskellut finanssimarkkinoita itsenäisesti vuodesta 2012, rakentanut algoritmisia kaupankäyntityökaluja, mukautettuja KPI-indikaattoreita ja backtesting-kehyksiä Pythonilla. Osallistuin Huawei Tech Arena Finland 2025 -kilpailuun ja sijoituin 3. sijalle kansallisesti ainoana ei-tietotekniikan ehdokkaana podiumilla.',
    'about-p4': 'Kielet ovat yksi käytännöllisimmistä vahvuuksistani. Puhun <strong class="text-primary">englantia äidinkielenä</strong>, suomea keskustelutasolla (B1) ja urdu sekä punjabi ovat myös äidinkieleni; minulla on lisäksi alkeet arabiasta ja ruotsista. Tämä kirjo antaa minun hoitaa toimittajakeskustelut Etelä-Aasiassa heidän omalla kielellään ja toimia päivittäin suomalaisessa liiketoimintaympäristössä.',
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
    'val-04-body': 'Suora kokemus suomalaisista, EU-, Etelä-Aasian ja Arabiemiraattien liiketoimintaympäristöistä. Vähennän kitkaa kansainvälisissä operaatioissa sen sijaan, että lisäisin käännöstasoja.',
    /* work.html */
    'work-breadcrumb': 'Kokemus',
    'work-h1': 'Viimeaikaiset<br/><span class="text-primary">Tehtävät.</span>',
    'work-lede': 'Viisi roolia myynnin, ESG-vaatimustenmukaisuuden, verkkokauppaoperaatioiden ja liiketoimintakehityksen parissa — Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan.',
    'work-exp-h': 'Kokemus',
    'work-edu-label': 'Koulutus',
    'work-edu-h': 'Akateeminen <span class="text-primary">Tausta.</span>',
    /* skills.html */
    'skills-lang-label': 'Kielet',
    'skills-lang-h': '<span class="text-primary">Kielet.</span>',
    'skills-lang-p': 'Kielet, joilla työskentelen ammattimaisesti:',
    /* services.html */
    'svc-page-h1': 'Mitä<br/><span class="text-primary">Tarjoan.</span>',
    'svc-page-lede': 'Kahdeksan palvelualuetta kattaen ESG-vaatimustenmukaisuuden, verkkokehityksen, markkinoinnin, myynnin ja kansainvälisen liiketoiminnan. Saatavilla englanniksi, suomeksi, urduksi, punjabin kielellä, arabiaksi ja ruotsiksi.',
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
    'svc-card-05-p': 'Rajat ylittävä verkkokauppa, toimittajan tarkastus, EU:n tuontivaatimustenmukaisuus ja markkinoiden lokalisointi.',
    'svc-card-06-h3': 'Brändi &amp; <span class="text-primary">Sisältö</span>',
    'svc-card-06-p': 'Brändiääni, verkkosivutekstit, sähköpostikampanjat ja pitch-esitykset — laadittu useilla kielillä kansainvälisille yleisöille.',
    'svc-card-07-h3': 'Sosiaalinen &amp; <span class="text-primary">Mainokset</span>',
    'svc-card-07-p': 'Instagram- ja Facebook-orgaaninen sisältö sekä maksullinen mainosten hallinta. Luovuus, kohdentaminen, optimointi ja läpinäkyvä raportointi.',
    'svc-card-08-h3': 'Liiketoiminta<span class="text-primary">kehitys</span>',
    'svc-card-08-p': 'Markkinoilletulostrategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen — rakennettu todelliseen operatiiviseen kokemukseen Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan.',
    'svc-lang-label': '&mdash; Saatavilla EN, FI, urdu, punjabi, AR, SV',
    'svc-cta-label': 'Epävarma mikä sopii?',
    'svc-cta-h2': 'Jutellaan <span class="text-primary">ensin.</span>',
    'svc-cta-p': 'Useimmat toimeksiannot alkavat lyhyellä keskustelulla. Kerro mitä olet tekemässä ja kerron rehellisesti pystynkö auttamaan ja miten.',
    'svc-cta-btn': 'Aloita keskustelu &rarr;',
    /* work.html */
    'work-comp-label': 'Kilpailut &amp; Palkinnot',
    'work-cta-btn': 'Aloita keskustelu &rarr;',
    'work-cta-about': 'Tietoa minusta',
    'work-cta-skills': 'Taidot &amp; työkalut',
    /* work.html — experience bullets */
    'tl-finsell-title': 'Sales Development Representative &amp; Project Lead',
    'tl-finsell-b1': 'Johdin FinSellin kenttävarainhankintaa World Vision Finlandin lukuun — rekrytoin, perehdytin ja koulutin tiimin.',
    'tl-finsell-b2': 'Hallinnoin myyntiputkea ja lahjoittajatietoja Salesforcessa, pidin tiedot ajan tasalla ja raportoin viikoittain johdolle.',
    'tl-finsell-b3': 'Toimin kentän ja pääkonttorin välisenä yhdyshenkilönä, koordinoin aikatauluja ja ratkaisin operatiivisia haasteita päivittäin.',
    'tl-finsell-b4': 'Vastasin kampanjasuunnittelusta ja tiimin suoritusten seurannasta.',
    'tl-tammer-title': 'ESG &amp; CSRD Compliance Specialist',
    'tl-tammer-b1': 'Toteutin CBAM-raportoinnin (hiilirajamekanismi), mukaan lukien EU-portaalin ilmoitukset ja taustadatan keräämisen.',
    'tl-tammer-b2': 'Tein kolmannen osapuolen toimittajien due diligence -arviointeja yli 50 globaalille valmistajalle, mukaan lukien PQB-riskiarvioinnit.',
    'tl-tammer-b3': 'Tunnistin ja vein omasta aloitteestani läpi CN-koodin uudelleenluokittelun, joka pienensi yrityksen tullimaksuja — itse käynnistämäni toimenpide, jolla oli suora kustannus- ja vaatimustenmukaisuusvaikutus.',
    'tl-tammer-b4': 'Koordinoin suoraan Tullin kanssa luokittelusta ja raportoinnista.',
    'tl-tammer-b5': 'Suunnittelin ja toteutin sisäistä vaatimustenmukaisuuden koulutusta henkilöstölle.',
    'tl-bcc-title': 'Strategy Consultant',
    'tl-bcc-b1': 'Konsultoin oikeita asiakasyrityksiä — kuten Lufthansaa, TeamVieweriä ja Sidostetta — strategiassa ja markkinakysymyksissä osana klubin konsultointityötä.',
    'tl-bcc-b2': 'Kilpailin kansainvälisesti Maastricht Business Case Competitionissa ja European Sales Competitionissa.',
    'tl-bcc-b3': 'Tein markkinatutkimusta ja rakensin jäsennellyt suositukset kilpailuaikataulujen puitteissa.',
    'tl-envcon-title': 'Assistant Manager',
    'tl-envcon-b1': 'Hallinnoin käänteisen toimitusketjun ohjelmaa, joka kattoi noin 2 400 keräyspistettä Punjabin alueella.',
    'tl-envcon-b2': 'Hoidin vaarallisten kemikaalien lisensoinnin ja viranomaislupien uusinnat.',
    'tl-envcon-b3': 'Tuin ISO 45001 -työterveys- ja -turvallisuusvaatimusten noudattamista.',
    'tl-envcon-b4': 'Koordinoin tiimejä ja raportointia ohjelman laajuudelta.',
    'tl-vapemall-title': 'Business Development Manager',
    'tl-vapemall-b1': 'Kasvatin FMCG-liiketoiminnan verkkokaupasta useisiin kivijalkamyymälöihin.',
    'tl-vapemall-b2': 'Hallinnoin operatiivista koordinointia, toimittaja-dokumentaatiota, laskutusta ja varastoa useassa toimipisteessä.',
    'tl-vapemall-b3': 'Vastasin toimittajasuhteista ja hankinnasta.',
    /* work.html — awards */
    'award-1-comp': 'Huawei Tech Arena Finland 2025',
    'award-1-badge': '3. sija &mdash; Kansallinen',
    'award-1-detail': 'HarmonyOS-käyttöliittymä &middot; Ainoa ei-CS-kilpailija palkintokorokkeella',
    'award-2-comp': 'Myyntipuhekilpailu',
    'award-2-badge': '1. sija',
    'award-2-detail': 'Platform 6 &middot; helmikuu 2023',
    'award-3-comp': 'Liiketoiminnan startup-kilpailu',
    'award-3-badge': '1. sija',
    'award-3-detail': 'TAMK &middot; maaliskuu 2022',
    /* skills.html */
    'skills-how-label': 'Miten työskentelen',
    'skills-cta-btn': 'Aloita keskustelu &rarr;',
    'skills-cta-services': 'Näytä palvelut',
    /* services/business-development.html */
    'biz-breadcrumb': '02 &mdash; Palvelut',
    'biz-hero-h1': 'Liiketoiminta<br/><span class="text-primary">kehitys</span>',
    'biz-hero-p': 'Markkinoilletulostrategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen &mdash; rakennettu todelliseen operatiiviseen kokemukseen Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan.',
    'biz-focus-label': 'Painopistealueet',
    'biz-tag-entry': 'Markkinoille pääsy',
    'biz-tag-partnerships': 'Kumppanuudet',
    'biz-tag-revenue': 'Tulojen kasvu',
    'biz-tag-strategy': 'Strategia',
    'biz-engagement-label': 'Tyypillinen toimeksianto',
    'biz-deliverables-label': 'Toimitukset',
    'biz-d1': 'Markkinamahdollisuuksien arviointi',
    'biz-d2': 'Markkinoilletulostrategia',
    'biz-d3': 'Kumppaneiden tunnistaminen &amp; kontaktointi',
    'biz-d4': 'Tulomallien analyysi',
    'biz-d5': 'Kilpailupositiointi',
    'biz-d6': '90 päivän toimintasuunnitelma',
    'biz-sidebar-cta': 'Kerro kasvutavoitteistasi &rarr;',
    'biz-h2-operational': 'Operatiivinen, ei teoreettinen',
    'biz-p1': 'Olen ollut mukana perustamassa yrityksen, hallinnoinut asiakassuhteita Suomessa, Pakistanissa, EU:ssa, Arabiemiraateissa ja Kiinassa, hankkinut yrityssponsoreita tapahtumille ja kirjoittanut markkinoilletuloraportteja, joiden pohjalta asiakkaat ovat todella toimineet. Liiketoimintakehitysneuvot ovat hyödyllisiä vain, jos ne yhdistyvät toteutukseen &mdash; ja olen tehnyt sen toteutuksen.',
    'biz-p2': 'Toimin parhaiten yritysten kanssa, joilla on tuote tai palvelu, joka toimii yhdessä markkinassa ja haluaa laajentua &mdash; olipa kyse maantieteellisestä laajentumisesta, uusista asiakassegmenteistä tai kumppanuuskanavista, joita ei ole vielä hyödynnetty.',
    'biz-h2-whatido': 'Mitä teen',
    'biz-01-h': 'Markkinoilletulostrategia',
    'biz-01-p': 'Mahdollisuuksien arviointi, kilpailukenttä, regulatoriset näkökohdat, hinnoittelustrategia ja vaiheistettu markkinoilletulosuunnitelma realistisine virstanpylväineen ja resurssitarpeineen.',
    'biz-02-h': 'Kumppanuuksien kehittäminen',
    'biz-02-p': 'Oikeiden kumppaneiden löytäminen, vastauksiin johtavan kontaktoinnin rakentaminen, ensimmäisen keskustelun jäsentäminen ja kumppanuusehtojen luonnosteleminen molempien osapuolten suojaamiseksi.',
    'biz-03-h': 'Tulojen monipuolistaminen',
    'biz-03-p': 'Vierekkäisten tulovirtojen kartoittaminen &mdash; uudet tuotteet, uudet segmentit, uudet kanavat &mdash; nykyisten kykyjesi pohjalta ja päättäminen, mihin kannattaa panostaa ensin.',
    'biz-04-h': 'Toteutuksen suunnittelu',
    'biz-04-p': 'Konkreettinen 90 päivän toimintasuunnitelma vastuuhenkilöineen, aikatauluineen ja riippuvuuksineen &mdash; muuttaa strategiset päätökset operatiivisiksi askeliksi, joita tiimisi voi todella toteuttaa.',
    'biz-h2-languages': 'Saatavilla useilla kielillä',
    'biz-languages-p': 'Liiketoimintakehitystyö &mdash; kumppaneiden kontaktointi, markkinatutkimus, asiakasehdotukset ja neuvottelut &mdash; toteutettuna englanniksi, suomeksi, urduksi, punjabin kielellä, arabiaksi tai ruotsiksi.',
    'biz-cta-h2': 'Valmis <span class="text-primary">kasvamaan?</span>',
    'biz-cta-p': 'Kerro missä olet, minne haluat mennä ja mikä on tähän asti estänyt sinut. Selvitetään yhdessä oikea polku.',
    'biz-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/esg.html */
    'esg-breadcrumb': '02 &mdash; Palvelut',
    'esg-hero-h1': 'ESG & Kestävyys<br/><span class="text-primary">Konsultointi</span>',
    'esg-hero-p': 'Käytännön CBAM-toteutus, CSRD-raportointi, toimittajien due diligence ja CN-koodien uudelleenluokittelu. Suora kokemus Tullin kanssa ja EU-vaatimustenmukaisuuskehyksistä.',
    'esg-focus-label': 'Painopistealueet',
    'esg-tag-cbam': 'CBAM',
    'esg-tag-csrd': 'CSRD',
    'esg-tag-lca': 'LCA',
    'esg-tag-eu': 'EU-kauppa',
    'esg-tag-supplier': 'Toimittaja-auditoinnit',
    'esg-engagement-label': 'Tyypillinen toimeksianto',
    'esg-deliverables-label': 'Toimitukset',
    'esg-d1': 'CBAM-ilmoittajarekisteröinti',
    'esg-d2': 'Toimittajien hiilipäästötietojen keruu',
    'esg-d3': 'CSRD-olennaisuusarviointi',
    'esg-d4': 'CN-koodiluokittelun tarkistus',
    'esg-d5': 'Sisäinen vaatimustenmukaisuuskoulutus',
    'esg-d6': 'ESG-raportointikehys',
    'esg-sidebar-cta': 'Puhutaan määräajastasi &rarr;',
    'esg-h2-why': 'Miksi tämä on erilaista',
    'esg-p1': 'Olen toteuttanut CBAM-raportoinnin suomalaiselle kuluttajatuotteiden brändille &mdash; rekisteröinyt ilmoittajatilin, pyörittänyt toimittajien hiilipäästötietojen keruun ja koordinoinut suoraan Tullin kanssa luokittelusta. Tämä ei ole koulutussalitieto; se on operatiivinen kokemus.',
    'esg-p2': 'CSRD- ja CBAM-kehykset ovat aidosti monimutkaisia, ja useimmat neuvontapalvelut pysähtyvät strategiselle tasolle. Minä vien toteutuksen loppuun &mdash; rakennan toimittajien viestintätyönkulut, sisäiset tiedonkeruujärjestelmät ja raportointirakenteet, jotka tekevät vaatimustenmukaisuudesta kestävää päivittäisessä toiminnassa.',
    'esg-h2-cover': 'Mitä kataan',
    'esg-01-h': 'CBAM-vaatimustenmukaisuus',
    'esg-01-p': 'Ilmoittajarekisteröinti, neljännesvuosiraportointi, upotettujen päästöjen laskelmat, CN-koodiluokittelu ja suora yhteydenpito Tullin ja EU:n CBAM-portaalin kanssa.',
    'esg-02-h': 'CSRD-valmius',
    'esg-02-p': 'Olennaisuusarvioinnit, kaksoisolennaisuusanalyysi, raportointikehyksen valinta (ESRS) ja puuteanalyysi nykyisiin tiedonantokäytäntöihin nähden.',
    'esg-03-h': 'Toimittajien ESG-tiedot',
    'esg-03-p': 'Toimittajien tiedonkeruukampanjoiden suunnittelu ja toteutus &mdash; kyselylomakkeet, seurantatyönkulut, tietojen validointi ja koostaminen raportointirakenteeseen.',
    'esg-04-h': 'Raportointi & kojelaudat',
    'esg-04-p': 'Kerättyjen tietojen muuntaminen jäsennetyiksi raporteiksi ja sisäisiksi kojelaudoiksi &mdash; ESG-KPI:t, CBAM-vaatimustenmukaisuuden tila, toimittajariskikartat.',
    'esg-h2-languages': 'Saatavilla useilla kielillä',
    'esg-languages-p': 'ESG- ja vaatimustenmukaisuustyö &mdash; toimittajaviestintä, viranomaisilmoitukset, sisäiset raportit ja koulutusmateriaalit &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'esg-cta-h2': 'Onko määräaika lähestymässä?',
    'esg-cta-p': 'Kerro minkä kehyksen kanssa työskentelet, mitä olet tähän mennessä tehnyt ja milloin seuraava raportointivelvoitteesi on. Rakennetaan yhdessä realistinen polku vaatimustenmukaisuuteen.',
    'esg-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/web-design.html */
    'web-breadcrumb': '02 &mdash; Palvelut',
    'web-hero-h1': 'Verkkosuunnittelu<br/><span class="text-primary">& Kehitys</span>',
    'web-hero-p': 'Nopeat, hakukoneoptimoinnit, mobiiliystävälliset verkkosivustot yrityksille Suomessa. Räätälöity suunnittelu, selkeä hinnoittelu, luovutus valmiina.',
    'web-focus-label': 'Painopistealueet',
    'web-tag-design': 'UI/UX',
    'web-tag-dev': 'HTML/CSS/JS',
    'web-tag-seo': 'Tekninen SEO',
    'web-tag-perf': 'Suorituskyky',
    'web-engagement-label': 'Tyypillinen toimeksianto',
    'web-deliverables-label': 'Toimitukset',
    'web-d1': 'Räätälöity suunnittelu (desktop + mobiili)',
    'web-d2': 'Responsiivinen HTML/CSS/JS-rakennus',
    'web-d3': 'On-page SEO (otsikot, meta, schema)',
    'web-d4': 'Suorituskykyoptimointi',
    'web-d5': 'Yhteydenottolomakkeet & integraatiot',
    'web-d6': 'Luovutus dokumentaatiolla',
    'web-sidebar-cta': 'Rakennetaan jotain &rarr;',
    'web-h2-build': 'Mitä rakennan',
    'web-p1': 'Rakennan verkkosivustoja, jotka latautuvat nopeasti, näyttävät teräviltä ja ovat rakennettu hakukoneita varten ensimmäisestä koodirivistä lähtien. Ei ostettuja ja uudelleentyyliteltyjä malleja &mdash; jokainen rakennus alkaa kunnollisesta briefistä ja kirjoitetaan alusta tai mukautetaan hyvästä pohjasta.',
    'web-p2': 'Sivustoni on suunniteltu luovutettaviksi, ei vaatimaan jatkuvaa toimistotukea. Saat täyden lähdekoodin, dokumentaation ja sivuston, jota tiimisi voi päivittää ilman minua.',
    'web-h2-how': 'Miten se toimii',
    'web-01-h': 'Brief & laajuus',
    'web-01-p': 'Yksi puhelu tarpeiden ymmärtämiseen &mdash; sivujen määrä, tärkeimmät käyttäjätoiminnot, integraatiot ja aikataulu. Lähetän kiinteän laajuuden ehdotuksen 48 tunnin sisällä.',
    'web-02-h': 'Suunnittelu',
    'web-02-p': 'Desktop- ja mobiilirautalangat, väri, typografia ja komponenttipäätökset &mdash; kaikki jaetaan katsottavaksi ja hyväksyttäväksi ennen kuin kirjoitetaan yhtään riviä.',
    'web-03-h': 'Rakennus',
    'web-03-p': 'Puhdas HTML/CSS/JS, responsiivinen kaikilla näyttökoilla, optimoitu Core Web Vitals -mittareille, rakennettu tekniselle SEO:lle alusta alkaen.',
    'web-04-h': 'Luovutus',
    'web-04-p': 'Täysi luovutus lähdekoodeineen, dokumentoitu rakenne ja läpikäynti. Omistat kaiken &mdash; ei lukittumista, ei toistuvia maksuja ellei halua.',
    'web-h2-languages': 'Saatavilla useilla kielillä',
    'web-languages-p': 'Web-projektit &mdash; tekstisisältö, käyttöliittymätekstit ja SEO-metatiedot &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'web-cta-h2': 'Valmis rakentamaan?',
    'web-cta-p': 'Kerro minkälainen sivusto sinulla on nyt ja mitä tarvitset. Kerron mikä on realistista aikataulussasi ja budjetissasi.',
    'web-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/digital-marketing.html */
    'dm-breadcrumb': '02 &mdash; Palvelut',
    'dm-hero-h1': 'Digitaalinen<br/><span class="text-primary">Markkinointi</span>',
    'dm-hero-p': 'Digitaalinen markkinointistrategia, SEO, maksetut mainokset ja analytiikka yrityksille Suomessa. Mitattavia tuloksia, ei arvailuja.',
    'dm-focus-label': 'Painopistealueet',
    'dm-tag-seo': 'SEO',
    'dm-tag-paid': 'Maksetut mainokset',
    'dm-tag-analytics': 'Analytiikka',
    'dm-tag-content': 'Sisältömarkkinointi',
    'dm-engagement-label': 'Tyypillinen toimeksianto',
    'dm-deliverables-label': 'Toimitukset',
    'dm-d1': 'Yleisö- & markkinatutkimus',
    'dm-d2': 'Kanavayhdistelmästrategia',
    'dm-d3': 'KPI-kojelaudan asennus',
    'dm-d4': 'Kuukausittainen arviointikehys',
    'dm-d5': 'SEO-auditointi & on-page-korjaukset',
    'dm-d6': 'Maksetun kampanjan rakenne',
    'dm-sidebar-cta': 'Puhutaan strategiasta &rarr;',
    'dm-h2-measured': 'Mitattavissa alusta alkaen',
    'dm-p1': 'Rakennan digitaalisia markkinointistrategioita datan, ei intuitioni, varaan. Jokaisella kanavalla on KPI. Jokaisella kulutuksella on tuottomittari. Jos jokin ei toimi riittävän datan jälkeen, muutetaan sitä &mdash; ei kiinnitytä taktiikoihin, jotka eivät konvertoi.',
    'dm-p2': 'Useimmat digitaaliset markkinoinnit epäonnistuvat joko koska ne ovat liian laajoja (tee kaikki, mittaa ei mitään) tai liian kapeita (pakkomielle yhdestä kanavasta). Lähestymistapani on löytää kaksi tai kolme kanavaa, jotka todella tavoittavat yleisösi, rakentaa tiukat järjestelmät kullekin ja optimoida siitä eteenpäin.',
    'dm-h2-what': 'Mitä teen',
    'dm-01-h': 'Yleisö & markkinatutkimus',
    'dm-01-p': 'Avainsanatutkimus, kilpailija-analyysi, asiakaspersoonan kehittäminen ja markkinan koon arviointi &mdash; jotta jokainen kanavaratkaisu perustuu dataan, ei oletuksiin.',
    'dm-02-h': 'Kanavastrategia',
    'dm-02-p': 'Oikean SEO:n, maksetun haun, maksetun sosiaalisen median, sähköpostin ja sisällön yhdistelmän valitseminen juuri sinun liiketoiminnallesi &mdash; ja toteutuskartan rakentaminen realistisine aikatauluineen.',
    'dm-03-h': 'KPI-kojelaudat',
    'dm-03-p': 'Analytiikkapinon pystyttäminen &mdash; Google Analytics 4, Search Console, mainosplatformien raportointi &mdash; jotta näet mikä toimii ilman kehittäjää.',
    'dm-04-h': 'Kuukausittainen arviointi & optimointi',
    'dm-04-p': 'Kuukausittainen jäsennetty arviointi: mikä toimi, mikä ei, budjetin uudelleenjakosuositukset ja ensi kuun prioriteetit. Päätökset datan, ei suoliston pohjalta.',
    'dm-h2-languages': 'Saatavilla useilla kielillä',
    'dm-languages-p': 'Digitaalinen markkinointi &mdash; tekstisisältö, mainosluovat, laskeutumissivut ja raportit &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'dm-cta-h2': 'Haluatko markkinointia, joka tuottaa?',
    'dm-cta-p': 'Kerro mitä olet kokeillut, miltä nykyiset mittarisi näyttävät ja mitä pyrit saavuttamaan. Kerron miltä realistinen polku näyttää.',
    'dm-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/sales-crm.html */
    'crm-breadcrumb': '02 &mdash; Palvelut',
    'crm-hero-h1': 'Myynti<br/><span class="text-primary">& CRM</span>',
    'crm-hero-p': 'HubSpot- ja Salesforce-käyttöönotto, myyntiputken optimointi ja CRO yrityksille Suomessa. Käytännön CRM-kokemus B2B- ja verkkokauppakonteksteissa.',
    'crm-focus-label': 'Painopistealueet',
    'crm-tag-hubspot': 'HubSpot',
    'crm-tag-salesforce': 'Salesforce',
    'crm-tag-pipeline': 'Myyntiputki',
    'crm-tag-cro': 'CRO',
    'crm-engagement-label': 'Tyypillinen toimeksianto',
    'crm-deliverables-label': 'Toimitukset',
    'crm-d1': 'CRM-auditointi & vaatimusten määrittely',
    'crm-d2': 'HubSpot tai Salesforce -käyttöönotto',
    'crm-d3': 'Putkivaiheet & automaatio',
    'crm-d4': 'Kontaktointisekvenssimallit',
    'crm-d5': 'Tiimin perehdytys & koulutus',
    'crm-d6': 'Raportointikojelaudat',
    'crm-sidebar-cta': 'Korjataan myyntiputkesi &rarr;',
    'crm-h2-inside': 'Rakennettu sisältäpäin',
    'crm-p1': 'Olen hallinnoinut myyntiputkea ja lahjoittajatietoja Salesforcessa kansallisessa varainhankintaoperaatiossa &mdash; ei vain konfiguroinut työkalua, vaan omistanut tietojen laadun, viikkoraportoinnin ja yhteyden kenttätoiminnan ja CRM-tietueiden välillä. Olen myös pyörittänyt täyttä verkkokauppaoperaatiota usean toimipisteen vähittäismyyntiyrityksessä.',
    'crm-p2': 'CRM-käyttöönotot epäonnistuvat, kun ne konfiguroidaan ihanteelliselle prosessille, ei todelliselle. Lähestymistapani on ymmärtää, miten tiimisi todellisuudessa myy, ja sitten rakentaa CRM-rakenne, joka helpottaa heidän työtään &mdash; ei lisää kitkaa teoreettisen täydellisyyden nimissä.',
    'crm-h2-cover': 'Mitä kataan',
    'crm-01-h': 'CRM-käyttöönotto & konfigurointi',
    'crm-01-p': 'Täysi HubSpot tai Salesforce -käyttöönotto &mdash; kontaktirakenne, kauppojen vaiheet, putkiliiketoiminnan automaatio, mukautetut ominaisuudet ja integraatiot olemassa oleviin työkaluihisi.',
    'crm-02-h': 'Kontaktointijärjestelmät',
    'crm-02-p': 'Sähköpostisekvenssit, puhelukadensit, LinkedIn-kontaktointimallit &mdash; suunniteltu juuri sinun myyntiliikkeellesi, olipa se inbound-vetoista, outbound-vetoista tai tilikohtaista.',
    'crm-03-h': 'Myyntiputkioperaatiot',
    'crm-03-p': 'Vaihemäärittelyt, kauppapisteet, ennustemallit ja raportointikojelaudat, jotka auttavat myyntipäälliköitä näkemään, mikä liikkuu ja mikä on pysähdyksissä.',
    'crm-04-h': 'Verkkokauppa & CRO',
    'crm-04-p': 'Konversioprosenttioptimointi verkkokaupalle &mdash; tuotesivut, kassavirrat, ostoskorin hylkäämisen palautus ja analytiikka-asennus asiakkaiden poistumiskohtien tunnistamiseksi.',
    'crm-h2-languages': 'Saatavilla useilla kielillä',
    'crm-languages-p': 'CRM- ja myyntityö &mdash; kontaktointimallit, putken dokumentaatio ja koulutus &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'crm-cta-h2': 'Myyntiputki vuotaako?',
    'crm-cta-p': 'Kerro mitä CRM:ää käytät (tai et käytä), miltä nykyinen putkesi näyttää ja missä kaupat jumiutuvat. Löydetään korjaus.',
    'crm-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/international-expansion.html */
    'intl-breadcrumb': '02 &mdash; Palvelut',
    'intl-hero-h1': 'Kansainvälinen<br/><span class="text-primary">Laajeneminen</span>',
    'intl-hero-p': 'Markkinoilletulostrategia, toimittajien hankinta ja EU:n tuontivaatimustenmukaisuus yrityksille, jotka laajentuvat Suomesta Eurooppaan, Pakistaniin tai UAE:hen.',
    'intl-focus-label': 'Painopistealueet',
    'intl-tag-fi': 'Suomi',
    'intl-tag-eu': 'EU',
    'intl-tag-pk': 'Pakistan',
    'intl-tag-uae': 'UAE',
    'intl-tag-asia': 'Etelä-Aasia',
    'intl-engagement-label': 'Tyypillinen toimeksianto',
    'intl-deliverables-label': 'Toimitukset',
    'intl-d1': 'Markkinoilletulotutkimus',
    'intl-d2': 'Toimittajien tunnistaminen & arviointi',
    'intl-d3': 'EU:n tuontivaatimustenmukaisuuden tarkistus',
    'intl-d4': 'Lokalisointistrategia',
    'intl-d5': 'Rajat ylittävän verkkokaupan käyttöönotto',
    'intl-d6': 'Sääntelyriskien arviointi',
    'intl-sidebar-cta': 'Aloitetaan keskustelu &rarr;',
    'intl-h2-bridges': 'Sillat rakennettu todellisista ylityksistä',
    'intl-p1': 'Olen työskennellyt operatiivisesti Suomessa, Pakistanissa, EU:ssa, UAE:ssa ja Kiinassa &mdash; en neuvonantajana etäältä tarkkaillen, vaan halliten toimittajasuhteita, navigoiden tullien läpi ja pyörittäen rajat ylittävää verkkokauppaa. Tieto on ansaittu, ei teoreettinen.',
    'intl-p2': 'Kansainvälinen laajeneminen epäonnistuu useimmiten ei siksi, että markkinamahdollisuutta ei olisi, vaan koska operatiiviset yksityiskohdat &mdash; vaatimustenmukaisuus, toimittajien luotettavuus, lokalisointi &mdash; aliarvioidaan. Autan yrityksiä näkemään nämä yksityiskohdat selkeästi ennen kuin niistä tulee kalliita yllätyksiä.',
    'intl-h2-cover': 'Mitä kataan',
    'intl-01-h': 'Markkinoilletulotutkimus',
    'intl-01-p': 'Markkinan koon arviointi, kilpailukenttä, regulatoriset olosuhteet, asiakaskäyttäytymisen erot ja realistinen näkemys siitä, mitä kannattava markkinoille pääsy vaatii.',
    'intl-02-h': 'Toimittajien arviointi & hankinta',
    'intl-02-p': 'Toimittajien tunnistaminen ja arviointi Etelä-Aasiassa ja Lähi-idässä &mdash; tehdastarkastukset, dokumentaatiokatsaukset, näytekoordinointi ja jatkuva toimittajasuhteiden hallinta.',
    'intl-03-h': 'EU:n tuontivaatimustenmukaisuus',
    'intl-03-p': 'CE-merkinnän, CBAM:n, tuoteturvallisuusasetusten, CN-koodiluokittelun ja tullidokumentaation navigointi tavaroille, jotka saapuvat EU-markkinoille.',
    'intl-04-h': 'Lokalisointi',
    'intl-04-p': 'Tuotetarjonnan, hinnoittelun, markkinointiviestien ja asiakaspalvelun sovittaminen uudelle markkinalle &mdash; jotta et vain ole käännetty, vaan olet oikeasti paikallinen.',
    'intl-h2-languages': 'Saatavilla useilla kielillä',
    'intl-languages-p': 'Kansainvälistymistyö &mdash; markkinatutkimus, toimittajaviestintä, vaatimustenmukaisuusilmoitukset ja kumppanineuvottelut &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'intl-cta-h2': 'Valmis ylittämään rajoja?',
    'intl-cta-p': 'Kerro mitä markkinoita tavoittelet, mitä tällä hetkellä myyt ja mikä on suurin tuntematon. Selvitetään mitä sinun täytyy tietää ennen liikkumista.',
    'intl-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/brand-content.html */
    'brand-breadcrumb': '02 &mdash; Palvelut',
    'brand-hero-h1': 'Brändi<br/><span class="text-primary">&amp; Sisältö</span>',
    'brand-hero-p': 'Brändiääni, verkkosivutekstit, sähköpostikampanjat ja sijoittajaesitykset &mdash; kirjoitettu ihmisille, optimoitu hakukoneille, toteutettavissa useilla kielillä markkinasi mukaan.',
    'brand-focus-label': 'Painopistealueet',
    'brand-tag-voice': 'Brändiääni',
    'brand-tag-copy': 'Tekstisisältö',
    'brand-tag-email': 'Sähköposti',
    'brand-tag-multilang': 'Monikielinen',
    'brand-engagement-label': 'Tyypillinen toimeksianto',
    'brand-deliverables-label': 'Toimitukset',
    'brand-d1': 'Brändiääni &amp; viestintäohjeisto',
    'brand-d2': 'Verkkosivutekstit (kaikki sivut)',
    'brand-d3': 'Sähköpostisekvenssit &amp; uutiskirjeet',
    'brand-d4': 'Pitch-esitys &amp; sijoittajamateriaali',
    'brand-d5': 'Monikielinen kieliversiointi',
    'brand-d6': 'Sisältökalenteri &amp; julkaisusuunnitelma',
    'brand-sidebar-cta': 'Puhutaan sisällöstä &rarr;',
    'brand-h2-travel': 'Sanat, jotka matkustavat',
    'brand-p1': 'Olen kirjoittanut verkkosivutekstejä, pitch-esityksiä, sähköpostikampanjoita ja markkinointimateriaalia useilla kielillä ja useille toimialoille. Hyvä bränditekstiys ei vain kuulosta hyvältä &mdash; se ohjaa lukijaa kohti toimintaa.',
    'brand-p2': 'Monikielinen taustani tarkoittaa, että kirjoitan natiivitasoisesti englanniksi ja suomeksi, ja pystyn sovittamaan viestin kulttuurisesti muihin markkinoihin &mdash; ei pelkkää kääntämistä, vaan oikean viestin rakentamista uudelleen.',
    'brand-h2-deliver': 'Mitä toimitan',
    'brand-01-h': 'Brändiääni &amp; viestit',
    'brand-01-p': 'Äänentason ohjeisto, joka kertoo tiimillesi miten kirjoitetaan &mdash; sävy, persoona, mitä sanoa ja mitä välttää &mdash; niin, että kaikki kanavat kuulostavat johdonmukaisesti sinulta.',
    'brand-02-h': 'Verkkosivutekstit',
    'brand-02-p': 'Etusivu, palvelusivut, tietoa-sivu, CTA:t &mdash; kirjoitettu käyttäjälle ensin ja hakukoneoptimointia silmällä pitäen. Selkeät viestit, vahvat toimintakehotukset, ei ammattislangia.',
    'brand-03-h': 'Sähköpostikampanjat',
    'brand-03-p': 'Tervetulosekvenssit, ravinnointikampanjat ja promootiokampanjat kirjoitettu avausprosentteja ja klikkauksia varten &mdash; segmentoitu yleisösi ja funnelivaiheesi mukaan.',
    'brand-04-h': 'Pitch-esitykset',
    'brand-04-p': 'Sijoittaja-, kumppani- ja myyntipitch-esitykset &mdash; rakenne, tarinankerronta, datapisteet ja CTA &mdash; kirjoitettu vakuuttamaan, ei vain kertomaan.',
    'brand-h2-languages': 'Saatavilla useilla kielillä',
    'brand-languages-p': 'Brändi- ja sisältötyö &mdash; verkkosivutekstit, sähköpostit, esitykset ja markkinointimateriaalit &mdash; englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi.',
    'brand-cta-h2': 'Tarvitsetko tekstiä, joka konvertoi?',
    'brand-cta-p': 'Kerro mitä kirjoitat tällä hetkellä, kenelle ja mihin tarkoitukseen. Selvitetään yhdessä miten teksti voi toimia paremmin.',
    'brand-cta-btn': 'Ota yhteyttä &rarr;',
    /* services/social-paid.html */
    'social-breadcrumb': '02 &mdash; Palvelut',
    'social-hero-h1': 'Sosiaalinen<br/><span class="text-primary">&amp; Mainokset</span>',
    'social-hero-p': 'LinkedIn-, Meta- ja TikTok-kampanjat sekä orgaaninen sisältö &mdash; rakennettu tavoittamaan oikeat ihmiset, mittaamaan mikä toimii, ja skaalaamaan sitä joka toimii.',
    'social-focus-label': 'Painopistealueet',
    'social-tag-linkedin': 'LinkedIn',
    'social-tag-meta': 'Meta',
    'social-tag-tiktok': 'TikTok',
    'social-tag-ads': 'Mainokset',
    'social-engagement-label': 'Tyypillinen toimeksianto',
    'social-deliverables-label': 'Toimitukset',
    'social-d1': 'Kanavastrategia &amp; sisältösuunnitelma',
    'social-d2': 'Orgaaninen sisältökalenteri (vko/kk)',
    'social-d3': 'Maksettujen kampanjoiden käyttöönotto',
    'social-d4': 'Luovien sisältöjen A/B-testaus',
    'social-d5': 'Kuukausittainen suorituskykyraportti',
    'social-d6': 'Uudelleenmarkkinointi &amp; yleisösegmentointi',
    'social-sidebar-cta': 'Puhutaan mainoksista &rarr;',
    'social-h2-earned': 'Ansaittu pyörittämällä sitä',
    'social-p1': 'Olen rakentanut sosiaalisen median läsnäoloa ja pyörittänyt maksettuja kampanjoita yrityksille useilla toimialoilla &mdash; B2B-palveluista verkkokauppaan. Tiedän mitä toimii Suomessa ja kansainvälisesti.',
    'social-p2': 'En vain julkaise sisältöä. Rakennan järjestelmän: oikea kanava, oikea viesti, oikea yleisö, selkeät KPI:t. Kaikki testataan ja optimoidaan jatkuvasti.',
    'social-h2-manage': 'Mitä hallinnoin',
    'social-01-h': 'Orgaaninen sisältö',
    'social-01-p': 'Viikoittainen sisältökalenteri, kirjoittaminen, kuvien koordinointi ja julkaiseminen LinkedIn-, Meta- ja muille kanaville. Ääni, joka kuulostaa sinulta &mdash; johdonmukaisesti.',
    'social-02-h': 'Maksetun kampanjan käyttöönotto',
    'social-02-p': 'Kampanjarakenne, kohdentaminen, budjetin jako ja pikselien/seurannan asennus Metassa, LinkedInissä ja TikTokissa. Käynnistetään oikein heti alusta.',
    'social-03-h': 'Luovien sisältöjen testaus',
    'social-03-p': 'Otsikko-, kuva- ja CTA-variantit testataan järjestelmällisesti. Voittajia skaalataan, häviäjiä poistetaan. Ei arvailla &mdash; päätetään datan perusteella.',
    'social-04-h': 'Raportointi &amp; optimointi',
    'social-04-p': 'Kuukausittainen raportti: tavoittavuus, sitoutuminen, klikkaukset, konversiot ja ROAS. Kaikki sidottu alkuperäisiin liiketoimintatavoitteisiin &mdash; ei vain tykkäyksiä.',
    'social-h2-languages': 'Saatavilla useilla kielillä',
    'social-languages-p': 'Sosiaalinen media ja mainoskampanjat englanniksi, suomeksi, urduksi, arabiaksi tai ruotsiksi &mdash; natiivitasoinen kirjoittaminen jokaiselle markkinalle.',
    'social-cta-h2': 'Mainokset eivät tuota tulosta?',
    'social-cta-p': 'Kerro mitä olet kokeillut ja millä alustalla. Käydään läpi miksi se ei toimi ja miten se voidaan korjata.',
    'social-cta-btn': 'Ota yhteyttä &rarr;',
  };

  var PAGE_EN = {
    /* index.html — hero */
    'hero-tagline': 'Sustainable business developer specialising in ESG & CBAM compliance and international commercial strategy.',
    'hero-cta1': 'Full Story <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    'hero-cta2': 'Get in Touch',
    /* index.html — story section */
    'story-h2': 'The Story',
    'story-p1': 'I\'m a Finland-based sustainable business developer specialising in <strong class="text-inverse-primary font-bold">ESG and CBAM compliance</strong>, sales systems, and cross-border commercial strategy. I translate complex EU frameworks — CBAM, CSRD, supplier data collection, CN-code reclassification — into practical systems that organisations can actually operate day to day.',
    'story-p2': 'Across Finland and Pakistan, with cross-border work into the EU, UAE and China, I have managed supply chains spanning approximately 2,400 collection centres across the Punjab region, deployed CSRD compliance frameworks for Finnish exporters, and built data-driven sales pipelines for both B2B and e-commerce businesses.',
    'story-p3': 'Alongside compliance work, I offer <strong class="text-inverse-primary font-bold">web design and development</strong>, digital marketing strategy, CRM implementation on HubSpot and Salesforce, and international market entry support. Available in English, Finnish (conversational, B1), Urdu and Punjabi (native), with a basic grounding in Arabic and Swedish.',
    'story-quote': '&ldquo;I hold a BBA from TAMK with a CGPA of 4.29/5.0 and placed 3rd at Huawei Tech Arena Finland 2025 — the only non-CS competitor on the podium.&rdquo;',
    'story-cta1': 'Full Story <span class="material-symbols-outlined text-sm">arrow_forward</span>',
    /* index.html — services section */
    'svc-h2': 'Services',
    'svc-lede': 'Practical work with commercial focus.',
    'svc-esg-h3': 'ESG &amp; Sustainability',
    'svc-esg-p': 'CBAM, CSRD, supplier data, LCA — built from hands-on implementation experience.',
    'svc-intl-h3': 'International Expansion',
    'svc-intl-p': 'Cross-border e-commerce, supplier vetting, EU compliance, and market localisation.',
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
    'about-hero-lede': 'A Finland-based International Business professional who turns regulation into commercial advantage and blends operational experience with technology.',
    'about-p1': 'I am a <strong class="text-primary">sustainable business developer</strong> — which in practice means I sit where regulation, operations, and commercial strategy intersect. I help companies understand what EU frameworks like CBAM and CSRD actually require of them, build the internal systems to meet those requirements, and ensure that compliance doesn\'t just reduce risk but generates real business value.',
    'about-p2': 'My background spans five distinct roles — from managing a reverse supply chain spanning approximately 2,400 collection centres across the Punjab region to implementing CSRD frameworks for a Finnish consumer goods brand operating across EU customs jurisdictions. That range is deliberate. I believe the sharpest commercial decisions come from people who have seen both the boardroom strategy and the operational floor.',
    'about-p3': 'Outside of traditional business consulting, I am a <strong class="text-primary">technologist at heart</strong>. I have been self-studying financial markets since 2012, building algorithmic trading tools, custom KPI indicators, and backtesting frameworks in Python. I competed at Huawei Tech Arena Finland 2025 and placed 3rd nationally as the only non-computer science candidate on the podium.',
    'about-p4': 'Languages are one of my most practical strengths. I work natively in <strong class="text-primary">English</strong>, hold conversational Finnish (B1), and also work natively in Urdu and Punjabi, with a basic grounding in Arabic and Swedish. That range lets me run supplier conversations across South Asia in their own language and operate day-to-day in a Finnish business environment.',
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
    'val-04-body': 'Direct experience across Finnish, EU, South Asian and UAE business contexts. I reduce friction in international operations rather than adding translation layers.',
    /* work.html */
    'work-breadcrumb': 'Work',
    'work-h1': 'Recent<br/><span class="text-primary">Positions.</span>',
    'work-lede': 'Five roles across sales, ESG compliance, e-commerce operations, and business development — spanning Finland and Pakistan, with cross-border work into the EU, UAE and China.',
    'work-exp-h': 'Experience',
    'work-edu-label': 'Education',
    'work-edu-h': 'Academic <span class="text-primary">Background.</span>',
    /* skills.html */
    'skills-lang-label': 'Languages',
    'skills-lang-h': '<span class="text-primary">Languages.</span>',
    'skills-lang-p': 'Languages I work in professionally:',
    /* services.html */
    'svc-page-h1': 'What I<br/><span class="text-primary">Offer.</span>',
    'svc-page-lede': 'Eight service areas covering ESG compliance, web development, marketing, sales, and international business. Available in English, Finnish, Urdu, Punjabi, Arabic and Swedish.',
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
    'svc-card-05-p': 'Cross-border e-commerce, supplier vetting, EU import compliance, and market localisation.',
    'svc-card-06-h3': 'Brand &amp; <span class="text-primary">Content</span>',
    'svc-card-06-p': 'Brand voice, web copy, email campaigns, and pitch presentations — crafted in multiple languages for international audiences.',
    'svc-card-07-h3': 'Social &amp; <span class="text-primary">Paid Ads</span>',
    'svc-card-07-p': 'Instagram and Facebook organic content plus paid ad management. Creative, targeting, optimisation, and transparent reporting.',
    'svc-card-08-h3': 'Business <span class="text-primary">Development</span>',
    'svc-card-08-p': 'Market entry strategy, partnership development, revenue diversification — built on real operational experience across Finland and Pakistan, with cross-border work into the EU, UAE and China.',
    'svc-lang-label': '&mdash; Available in EN, FI, Urdu, Punjabi, AR, SV',
    'svc-cta-label': 'Not sure which fits?',
    'svc-cta-h2': 'Let\'s talk <span class="text-primary">first.</span>',
    'svc-cta-p': 'Most engagements start with a short conversation. Tell me what you\'re working on and I\'ll tell you honestly whether and how I can help.',
    'svc-cta-btn': 'Start a conversation &rarr;',
    /* work.html */
    'work-comp-label': 'Competitions &amp; Awards',
    'work-cta-btn': 'Start a conversation &rarr;',
    'work-cta-about': 'About Me',
    'work-cta-skills': 'Skills &amp; Tools',
    /* work.html — experience bullets */
    'tl-finsell-title': 'Sales Development Representative &amp; Project Lead',
    'tl-finsell-b1': 'Led FinSell\'s field fundraising operation representing World Vision Finland — recruiting, onboarding and training the team.',
    'tl-finsell-b2': 'Managed the sales pipeline and donor data in Salesforce, keeping records accurate and reporting weekly to management.',
    'tl-finsell-b3': 'Acted as the central link between field operations and headquarters, coordinating scheduling and resolving day-to-day operational issues.',
    'tl-finsell-b4': 'Ran campaign planning and team performance reviews.',
    'tl-tammer-title': 'ESG &amp; CSRD Compliance Specialist',
    'tl-tammer-b1': 'Implemented CBAM (Carbon Border Adjustment Mechanism) reporting, including EU portal submissions and the underlying data collection.',
    'tl-tammer-b2': 'Conducted third-party supplier due diligence across 50+ global manufacturers, including PQB risk evaluations.',
    'tl-tammer-b3': 'Proactively identified and carried through a CN-code reclassification that reduced the company\'s customs duties — a self-initiated fix with direct cost and compliance impact.',
    'tl-tammer-b4': 'Coordinated directly with Finnish Customs (Tulli) on classification and reporting.',
    'tl-tammer-b5': 'Designed and delivered internal compliance training for staff.',
    'tl-bcc-title': 'Strategy Consultant',
    'tl-bcc-b1': 'Advised real client companies — including Lufthansa, TeamViewer and Sidoste — on strategy and market problems as part of the club\'s consulting work.',
    'tl-bcc-b2': 'Competed internationally at the Maastricht Business Case Competition and the European Sales Competition.',
    'tl-bcc-b3': 'Conducted market research and built structured recommendations under competition deadlines.',
    'tl-envcon-title': 'Assistant Manager',
    'tl-envcon-b1': 'Managed a reverse supply-chain program spanning approximately 2,400 collection centres across the Punjab region.',
    'tl-envcon-b2': 'Handled hazardous-chemicals licensing and government licensing renewals.',
    'tl-envcon-b3': 'Supported ISO 45001 occupational health &amp; safety compliance.',
    'tl-envcon-b4': 'Coordinated teams and reporting across the program.',
    'tl-vapemall-title': 'Business Development Manager',
    'tl-vapemall-b1': 'Scaled an FMCG business from an online operation into multiple brick-and-mortar locations.',
    'tl-vapemall-b2': 'Managed operational coordination, supplier documentation, invoicing and inventory across multi-location operations.',
    'tl-vapemall-b3': 'Handled supplier relationships and procurement.',
    /* work.html — awards */
    'award-1-comp': 'Huawei Tech Arena Finland 2025',
    'award-1-badge': '3rd Place &mdash; National',
    'award-1-detail': 'UI/UX for HarmonyOS &middot; Only non-CS competitor on the podium',
    'award-2-comp': 'Sales Pitch Competition',
    'award-2-badge': '1st Place',
    'award-2-detail': 'Platform 6 &middot; Feb 2023',
    'award-3-comp': 'Business Startup Competition',
    'award-3-badge': '1st Place',
    'award-3-detail': 'TAMK &middot; Mar 2022',
    /* skills.html */
    'skills-how-label': 'How I Work',
    'skills-cta-btn': 'Start a conversation &rarr;',
    'skills-cta-services': 'View Services',
    /* services/business-development.html */
    'biz-breadcrumb': '02 &mdash; Services',
    'biz-hero-h1': 'Business<br/><span class="text-primary">Development</span>',
    'biz-hero-p': 'Market entry strategy, partnership development, revenue diversification &mdash; built on real operational experience across Finland and Pakistan, with cross-border work into the EU, UAE and China.',
    'biz-focus-label': 'Focus areas',
    'biz-tag-entry': 'Market entry',
    'biz-tag-partnerships': 'Partnerships',
    'biz-tag-revenue': 'Revenue growth',
    'biz-tag-strategy': 'Strategy',
    'biz-engagement-label': 'Typical engagement',
    'biz-deliverables-label': 'Deliverables',
    'biz-d1': 'Market opportunity assessment',
    'biz-d2': 'Go-to-market strategy',
    'biz-d3': 'Partner identification &amp; outreach',
    'biz-d4': 'Revenue model analysis',
    'biz-d5': 'Competitive positioning',
    'biz-d6': '90-day action plan',
    'biz-sidebar-cta': 'Discuss your growth &rarr;',
    'biz-h2-operational': 'Operational, not theoretical',
    'biz-p1': 'I\'ve co-founded a business, managed client relationships across Finland, Pakistan, the EU, UAE and China, secured corporate sponsors for events, and helped write market entry reports that clients actually acted on. Business development advice is only useful if it connects to execution &mdash; and I\'ve done the execution.',
    'biz-p2': 'I work best with companies that have a product or service that\'s working in one market and want to expand &mdash; whether geographically, into new customer segments, or through partnership channels they haven\'t explored yet.',
    'biz-h2-whatido': 'What I do',
    'biz-01-h': 'Market entry strategy',
    'biz-01-p': 'Opportunity sizing, competitive landscape, regulatory considerations, pricing strategy, and a phased entry plan with realistic milestones and resource requirements.',
    'biz-02-h': 'Partnership development',
    'biz-02-p': 'Identifying the right partners, building outreach that gets responses, structuring the initial conversation, and drafting partnership terms that protect both sides.',
    'biz-03-h': 'Revenue diversification',
    'biz-03-p': 'Mapping adjacent revenue streams &mdash; new products, new segments, new channels &mdash; against your current capabilities and deciding which are worth pursuing first.',
    'biz-04-h': 'Execution planning',
    'biz-04-p': 'A concrete 90-day action plan with owners, timelines, and dependencies &mdash; turning strategic decisions into operational steps your team can actually run.',
    'biz-h2-languages': 'Available across languages',
    'biz-languages-p': 'Business development work &mdash; partner outreach, market research, client proposals, and negotiations &mdash; delivered in English, Finnish, Urdu, Punjabi, Arabic, or Swedish.',
    'biz-cta-h2': 'Ready to <span class="text-primary">grow?</span>',
    'biz-cta-p': 'Tell me where you are, where you want to go, and what\'s stopped you so far. We\'ll figure out the right path.',
    'biz-cta-btn': 'Get in touch &rarr;',
    /* services/esg.html */
    'esg-breadcrumb': '02 &mdash; Services',
    'esg-hero-h1': 'ESG &amp; Sustainability<br/><span class="text-primary">Consulting</span>',
    'esg-hero-p': 'Practical CBAM implementation, CSRD reporting, supplier due diligence, and CN-code reclassification. Direct experience working with Finnish Customs and EU compliance frameworks.',
    'esg-focus-label': 'Focus areas',
    'esg-tag-cbam': 'CBAM',
    'esg-tag-csrd': 'CSRD',
    'esg-tag-lca': 'LCA',
    'esg-tag-eu': 'EU Trade',
    'esg-tag-supplier': 'Supplier Audits',
    'esg-engagement-label': 'Typical engagement',
    'esg-deliverables-label': 'Deliverables',
    'esg-d1': 'CBAM declarant registration',
    'esg-d2': 'Supplier carbon data collection',
    'esg-d3': 'CSRD materiality assessment',
    'esg-d4': 'CN-code classification review',
    'esg-d5': 'Internal compliance training',
    'esg-d6': 'ESG reporting framework',
    'esg-sidebar-cta': 'Discuss your deadline &rarr;',
    'esg-h2-why': 'Why this is different',
    'esg-p1': 'I\'ve implemented CBAM reporting for a Finnish consumer goods brand &mdash; registering the declarant account, running the supplier carbon data collection, and coordinating directly with Finnish Customs on classification. That\'s not training-room knowledge; it\'s operational experience.',
    'esg-p2': 'The CSRD and CBAM frameworks are genuinely complex, and most advisory work stops at the strategic level. I work through the implementation &mdash; building the supplier communication workflows, the internal data collection systems, and the reporting structures that make compliance sustainable day-to-day.',
    'esg-h2-cover': 'What I cover',
    'esg-01-h': 'CBAM Compliance',
    'esg-01-p': 'Declarant registration, quarterly reporting, embedded emissions calculations, CN-code classification, and direct liaison with Finnish Customs and the EU CBAM portal.',
    'esg-02-h': 'CSRD Readiness',
    'esg-02-p': 'Materiality assessments, double-materiality analysis, reporting framework selection (ESRS), and gap analysis against your current disclosure practices.',
    'esg-03-h': 'Supplier ESG Data',
    'esg-03-p': 'Designing and running supplier data collection campaigns — questionnaires, follow-up workflows, data validation, and aggregation into your reporting structure.',
    'esg-04-h': 'Reporting &amp; Dashboards',
    'esg-04-p': 'Turning collected data into structured reports and internal dashboards — ESG KPIs, CBAM compliance status, supplier risk heat maps.',
    'esg-h2-languages': 'Available across languages',
    'esg-languages-p': 'ESG and compliance work — supplier correspondence, regulatory submissions, internal reports, and training materials — in English, Finnish, Urdu, Arabic, or Swedish.',
    'esg-cta-h2': 'Is a deadline approaching?',
    'esg-cta-p': 'Tell me which framework you\'re working against, what you\'ve done so far, and when your next reporting obligation falls. We\'ll build a realistic path to compliance.',
    'esg-cta-btn': 'Get in touch &rarr;',
    /* services/web-design.html */
    'web-breadcrumb': '02 &mdash; Services',
    'web-hero-h1': 'Web Design<br/><span class="text-primary">&amp; Development</span>',
    'web-hero-p': 'Fast, SEO-optimised, mobile-friendly websites for businesses in Finland and internationally. Custom design, clear pricing, handed over ready to run.',
    'web-focus-label': 'Focus areas',
    'web-tag-design': 'UI/UX',
    'web-tag-dev': 'HTML/CSS/JS',
    'web-tag-seo': 'Technical SEO',
    'web-tag-perf': 'Performance',
    'web-engagement-label': 'Typical engagement',
    'web-deliverables-label': 'Deliverables',
    'web-d1': 'Custom design (desktop + mobile)',
    'web-d2': 'Responsive HTML/CSS/JS build',
    'web-d3': 'On-page SEO (titles, meta, schema)',
    'web-d4': 'Performance optimisation',
    'web-d5': 'Contact forms &amp; integrations',
    'web-d6': 'Handover with documentation',
    'web-sidebar-cta': 'Let\'s build something &rarr;',
    'web-h2-build': 'What I build',
    'web-p1': 'I build websites that load fast, look sharp, and are structured for search engines from the first line of code. No templates bought and restyled — every build starts from a proper brief and is written from scratch or adapted from a proven base.',
    'web-p2': 'My sites are designed to be handed over, not to require ongoing agency support. You get the full source, documentation, and a site that your team can update without me.',
    'web-h2-how': 'How it works',
    'web-01-h': 'Brief &amp; Scope',
    'web-01-p': 'One call to understand what you need — number of pages, key user actions, integrations, and timeline. I send a fixed-scope proposal within 48 hours.',
    'web-02-h': 'Design',
    'web-02-p': 'Desktop and mobile wireframes, colour, typography, and component decisions — all shared for review and sign-off before a single line is written.',
    'web-03-h': 'Build',
    'web-03-p': 'Clean HTML/CSS/JS, responsive across all screen sizes, optimised for Core Web Vitals, structured for technical SEO from the start.',
    'web-04-h': 'Handover',
    'web-04-p': 'Full handover with source files, documented structure, and a walkthrough. You own everything — no lock-in, no recurring fees unless you want them.',
    'web-h2-languages': 'Available across languages',
    'web-languages-p': 'Web projects — copy, UI text, and SEO metadata — delivered in English, Finnish, Urdu, Arabic, or Swedish.',
    'web-cta-h2': 'Ready to build?',
    'web-cta-p': 'Tell me what kind of site you need, what you currently have, and when you need it. I\'ll tell you what\'s realistic in your timeline and budget.',
    'web-cta-btn': 'Get in touch &rarr;',
    /* services/digital-marketing.html */
    'dm-breadcrumb': '02 &mdash; Services',
    'dm-hero-h1': 'Digital<br/><span class="text-primary">Marketing</span>',
    'dm-hero-p': 'Digital marketing strategy, SEO, paid ads, and analytics for businesses in Finland. Measurable results, not guesswork.',
    'dm-focus-label': 'Focus areas',
    'dm-tag-seo': 'SEO',
    'dm-tag-paid': 'Paid Ads',
    'dm-tag-analytics': 'Analytics',
    'dm-tag-content': 'Content Marketing',
    'dm-engagement-label': 'Typical engagement',
    'dm-deliverables-label': 'Deliverables',
    'dm-d1': 'Audience &amp; market research',
    'dm-d2': 'Channel mix strategy',
    'dm-d3': 'KPI dashboard setup',
    'dm-d4': 'Monthly review framework',
    'dm-d5': 'SEO audit &amp; on-page fixes',
    'dm-d6': 'Paid campaign structure',
    'dm-sidebar-cta': 'Let\'s talk strategy &rarr;',
    'dm-h2-measured': 'Measurable from the start',
    'dm-p1': 'I build digital marketing strategies around data, not instinct. Every channel has a KPI. Every spend has a return metric. If something isn\'t working after enough data, we change it — no attachment to tactics that don\'t convert.',
    'dm-p2': 'Most digital marketing fails because it\'s either too broad (do everything, measure nothing) or too narrow (obsess over one channel). My approach is to find the two or three channels that actually reach your audience, build tight systems for each, and optimise from there.',
    'dm-h2-what': 'What I do',
    'dm-01-h': 'Audience &amp; Market Research',
    'dm-01-p': 'Keyword research, competitor analysis, customer persona development, and market sizing — so every channel decision is grounded in data, not assumption.',
    'dm-02-h': 'Channel Strategy',
    'dm-02-p': 'Choosing the right combination of SEO, paid search, paid social, email, and content for your specific business — and building an execution roadmap with realistic timelines.',
    'dm-03-h': 'KPI Dashboards',
    'dm-03-p': 'Setting up the analytics stack — Google Analytics 4, Search Console, ad platform reporting — so you can see what\'s working without needing a developer.',
    'dm-04-h': 'Monthly Review &amp; Optimisation',
    'dm-04-p': 'A monthly structured review: what performed, what didn\'t, budget reallocation recommendations, and next-month priorities. Decisions based on data, not gut.',
    'dm-h2-languages': 'Available across languages',
    'dm-languages-p': 'Digital marketing — copy, ad creative, landing pages, and reports — in English, Finnish, Urdu, Arabic, or Swedish.',
    'dm-cta-h2': 'Want marketing that actually works?',
    'dm-cta-p': 'Tell me what you\'ve tried, what your current metrics look like, and what you\'re trying to achieve. I\'ll tell you what the realistic path looks like.',
    'dm-cta-btn': 'Get in touch &rarr;',
    /* services/sales-crm.html */
    'crm-breadcrumb': '02 &mdash; Services',
    'crm-hero-h1': 'Sales<br/><span class="text-primary">&amp; CRM</span>',
    'crm-hero-p': 'HubSpot and Salesforce implementation, sales pipeline optimisation, and CRO for businesses in Finland. Hands-on CRM experience in B2B and e-commerce contexts.',
    'crm-focus-label': 'Focus areas',
    'crm-tag-hubspot': 'HubSpot',
    'crm-tag-salesforce': 'Salesforce',
    'crm-tag-pipeline': 'Sales Pipeline',
    'crm-tag-cro': 'CRO',
    'crm-engagement-label': 'Typical engagement',
    'crm-deliverables-label': 'Deliverables',
    'crm-d1': 'CRM audit &amp; requirements',
    'crm-d2': 'HubSpot or Salesforce setup',
    'crm-d3': 'Pipeline stages &amp; automation',
    'crm-d4': 'Outreach sequence templates',
    'crm-d5': 'Team onboarding &amp; training',
    'crm-d6': 'Reporting dashboards',
    'crm-sidebar-cta': 'Fix your pipeline &rarr;',
    'crm-h2-inside': 'Built from the inside',
    'crm-p1': 'I\'ve managed sales pipelines and donor data in Salesforce for a national fundraising operation — not just configured the tool, but owned the data quality, weekly reporting, and the connection between field activity and CRM records. I\'ve also run the full e-commerce operation for a multi-location retail business.',
    'crm-p2': 'CRM implementations fail when they\'re configured for the ideal process, not the real one. My approach is to understand how your team actually sells, then build a CRM structure that makes their work easier — not add friction in exchange for theoretical completeness.',
    'crm-h2-cover': 'What I cover',
    'crm-01-h': 'CRM Setup &amp; Configuration',
    'crm-01-p': 'Full HubSpot or Salesforce implementation — contact schema, deal stages, pipeline automation, custom properties, and integrations with your existing tools.',
    'crm-02-h': 'Outreach Systems',
    'crm-02-p': 'Email sequences, call cadences, LinkedIn outreach templates — designed for your specific sales motion, whether that\'s inbound-led, outbound, or account-based.',
    'crm-03-h': 'Pipeline Operations',
    'crm-03-p': 'Stage definitions, deal scoring, forecasting models, and the reporting dashboards that help sales managers see what\'s moving and what\'s stalled.',
    'crm-04-h': 'E-commerce &amp; CRO',
    'crm-04-p': 'Conversion rate optimisation for e-commerce — product pages, checkout flows, cart abandonment recovery, and the analytics setup to identify where customers are dropping off.',
    'crm-h2-languages': 'Available across languages',
    'crm-languages-p': 'CRM and sales work — outreach templates, pipeline documentation, and training — in English, Finnish, Urdu, Arabic, or Swedish.',
    'crm-cta-h2': 'Is your pipeline leaking?',
    'crm-cta-p': 'Tell me what CRM you\'re using (or not using), what your current pipeline looks like, and where deals are getting stuck. We\'ll find the fix.',
    'crm-cta-btn': 'Get in touch &rarr;',
    /* services/international-expansion.html */
    'intl-breadcrumb': '02 &mdash; Services',
    'intl-hero-h1': 'International<br/><span class="text-primary">Expansion</span>',
    'intl-hero-p': 'Market entry strategy, supplier sourcing, and EU import compliance for businesses expanding from Finland into Europe, Pakistan, or the UAE.',
    'intl-focus-label': 'Focus areas',
    'intl-tag-fi': 'Finland',
    'intl-tag-eu': 'EU',
    'intl-tag-pk': 'Pakistan',
    'intl-tag-uae': 'UAE',
    'intl-tag-asia': 'South Asia',
    'intl-engagement-label': 'Typical engagement',
    'intl-deliverables-label': 'Deliverables',
    'intl-d1': 'Market entry research',
    'intl-d2': 'Supplier identification &amp; vetting',
    'intl-d3': 'EU import compliance review',
    'intl-d4': 'Localisation strategy',
    'intl-d5': 'Cross-border e-commerce setup',
    'intl-d6': 'Regulatory risk assessment',
    'intl-sidebar-cta': 'Start the conversation &rarr;',
    'intl-h2-bridges': 'Bridges built from real crossings',
    'intl-p1': 'I\'ve worked operationally across Finland, Pakistan, the EU, UAE, and China — not as an advisor observing from a distance, but managing supplier relationships, navigating customs, and running cross-border e-commerce. The knowledge is earned, not theoretical.',
    'intl-p2': 'International expansion fails most often not because the market opportunity doesn\'t exist, but because the operational details — compliance, supplier reliability, localisation — are underestimated. I help companies see those details clearly before they become expensive surprises.',
    'intl-h2-cover': 'What I cover',
    'intl-01-h': 'Market Entry Research',
    'intl-01-p': 'Market sizing, competitive landscape, regulatory environment, customer behaviour differences, and a realistic view of what it takes to enter profitably.',
    'intl-02-h': 'Supplier Assessment &amp; Sourcing',
    'intl-02-p': 'Identifying and vetting suppliers in South Asia and the Middle East — factory audits, documentation review, sample coordination, and ongoing supplier relationship management.',
    'intl-03-h': 'EU Import Compliance',
    'intl-03-p': 'Navigating CE marking, CBAM, product safety regulations, CN-code classification, and customs documentation for goods entering EU markets.',
    'intl-04-h': 'Localisation',
    'intl-04-p': 'Adapting your product offering, pricing, marketing messaging, and customer service for a new market — so you\'re not just translated, you\'re actually local.',
    'intl-h2-languages': 'Available across languages',
    'intl-languages-p': 'International expansion work — market research, supplier correspondence, compliance filings, and partner negotiations — in English, Finnish, Urdu, Arabic, or Swedish.',
    'intl-cta-h2': 'Ready to cross borders?',
    'intl-cta-p': 'Tell me which markets you\'re targeting, what you\'re currently selling, and what your biggest unknown is. We\'ll figure out what you need to know before you move.',
    'intl-cta-btn': 'Get in touch &rarr;',
    /* services/brand-content.html */
    'brand-breadcrumb': '02 &mdash; Services',
    'brand-hero-h1': 'Brand<br/><span class="text-primary">&amp; Content</span>',
    'brand-hero-p': 'Brand voice, web copy, email campaigns, and investor presentations — written for humans, optimised for search engines, deliverable in multiple languages for your market.',
    'brand-focus-label': 'Focus areas',
    'brand-tag-voice': 'Brand Voice',
    'brand-tag-copy': 'Web Copy',
    'brand-tag-email': 'Email',
    'brand-tag-multilang': 'Multilingual',
    'brand-engagement-label': 'Typical engagement',
    'brand-deliverables-label': 'Deliverables',
    'brand-d1': 'Brand voice &amp; messaging guide',
    'brand-d2': 'Website copy (all pages)',
    'brand-d3': 'Email sequences &amp; newsletters',
    'brand-d4': 'Pitch deck &amp; investor materials',
    'brand-d5': 'Multilingual adaptation',
    'brand-d6': 'Content calendar &amp; publishing plan',
    'brand-sidebar-cta': 'Let\'s talk content &rarr;',
    'brand-h2-travel': 'Words that travel',
    'brand-p1': 'I\'ve written web copy, pitch decks, email campaigns, and marketing materials in multiple languages for businesses across several industries. Good brand copy doesn\'t just sound right — it moves the reader toward action.',
    'brand-p2': 'My multilingual background means I write at native level in English and Finnish, and can adapt messaging culturally for other markets — not just translating, but rebuilding the right message from scratch.',
    'brand-h2-deliver': 'What I deliver',
    'brand-01-h': 'Brand Voice &amp; Messaging',
    'brand-01-p': 'A voice guidelines document that tells your team how to write — tone, persona, what to say and what to avoid — so every channel sounds consistently like you.',
    'brand-02-h': 'Website Copy',
    'brand-02-p': 'Homepage, service pages, about page, CTAs — written user-first, with SEO in mind. Clear messages, strong calls to action, no jargon.',
    'brand-03-h': 'Email Campaigns',
    'brand-03-p': 'Welcome sequences, nurture campaigns, and promotional emails written for open rates and clicks — segmented for your audience and funnel stage.',
    'brand-04-h': 'Pitch Decks',
    'brand-04-p': 'Investor, partner, and sales pitch presentations — structure, storytelling, data points, and CTA — written to persuade, not just inform.',
    'brand-h2-languages': 'Available across languages',
    'brand-languages-p': 'Brand and content work — web copy, emails, presentations, and marketing materials — in English, Finnish, Urdu, Arabic, or Swedish.',
    'brand-cta-h2': 'Need copy that converts?',
    'brand-cta-p': 'Tell me what you\'re writing, who it\'s for, and what action you want them to take. We\'ll figure out how the words can work harder.',
    'brand-cta-btn': 'Get in touch &rarr;',
    /* services/social-paid.html */
    'social-breadcrumb': '02 &mdash; Services',
    'social-hero-h1': 'Social<br/><span class="text-primary">&amp; Paid Ads</span>',
    'social-hero-p': 'LinkedIn, Meta, and TikTok campaigns plus organic content — built to reach the right people, measure what works, and scale what does.',
    'social-focus-label': 'Focus areas',
    'social-tag-linkedin': 'LinkedIn',
    'social-tag-meta': 'Meta',
    'social-tag-tiktok': 'TikTok',
    'social-tag-ads': 'Paid Ads',
    'social-engagement-label': 'Typical engagement',
    'social-deliverables-label': 'Deliverables',
    'social-d1': 'Channel strategy &amp; content plan',
    'social-d2': 'Organic content calendar (wkly/mthly)',
    'social-d3': 'Paid campaign setup',
    'social-d4': 'Creative A/B testing',
    'social-d5': 'Monthly performance report',
    'social-d6': 'Retargeting &amp; audience segmentation',
    'social-sidebar-cta': 'Let\'s talk ads &rarr;',
    'social-h2-earned': 'Earned by running it',
    'social-p1': 'I\'ve built social media presence and run paid campaigns for businesses across several industries — from B2B services to e-commerce. I know what works in Finland and internationally.',
    'social-p2': 'I don\'t just post content. I build a system: the right channel, the right message, the right audience, clear KPIs. Everything is tested and optimised continuously.',
    'social-h2-manage': 'What I manage',
    'social-01-h': 'Organic Content',
    'social-01-p': 'Weekly content calendar, writing, image coordination, and publishing across LinkedIn, Meta, and other channels. A voice that sounds like you — consistently.',
    'social-02-h': 'Paid Campaign Setup',
    'social-02-p': 'Campaign structure, targeting, budget allocation, and pixel/tracking installation on Meta, LinkedIn, and TikTok. Set up correctly from the start.',
    'social-03-h': 'Creative Testing',
    'social-03-p': 'Headline, image, and CTA variants tested systematically. Winners scaled, losers cut. No guessing — decisions made on data.',
    'social-04-h': 'Reporting &amp; Optimisation',
    'social-04-p': 'Monthly report: reach, engagement, clicks, conversions, and ROAS. All tied back to the original business objectives — not just likes.',
    'social-h2-languages': 'Available across languages',
    'social-languages-p': 'Social media and ad campaigns in English, Finnish, Urdu, Arabic, or Swedish — native-level writing for every market.',
    'social-cta-h2': 'Ads not delivering results?',
    'social-cta-p': 'Tell me what you\'ve tried and on which platform. We\'ll go through why it\'s not working and how to fix it.',
    'social-cta-btn': 'Get in touch &rarr;',
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
    // Services dropdown trigger (desktop = has chevron icon, mobile = no icon)
    document.querySelectorAll('nav a[href$="services.html"]').forEach(function(a) {
      var icon = a.querySelector('span');
      if (icon) { a.textContent = t.services; a.appendChild(icon); }
      else { a.textContent = t.services; }
    });
    // Mobile services accordion toggle label
    var mobileToggleLabel = document.querySelector('[data-mobile-svc-label]');
    if (mobileToggleLabel) mobileToggleLabel.textContent = t.services;
    // CTA hire me button
    document.querySelectorAll('a.bg-primary[href$="contact.html"], a.font-bold[href$="contact.html"]').forEach(function(a) {
      a.textContent = t.hireMeBtn;
    });
    // Dropdown items — desktop and mobile sub-menu (both use data-dd-svc)
    document.querySelectorAll('nav .absolute a, [data-dd-svc]').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      if (href.includes('web-design'))         a.textContent = t.ddWebDesign;
      else if (href.includes('esg'))           a.textContent = t.ddESG;
      else if (href.includes('digital'))       a.textContent = t.ddDigital;
      else if (href.includes('sales-crm'))     a.textContent = t.ddSales;
      else if (href.includes('international')) a.textContent = t.ddIntl;
      else if (href.includes('brand'))         a.textContent = t.ddBrand;
      else if (href.includes('social'))        a.textContent = t.ddSocial;
      else if (href.includes('business'))      a.textContent = t.ddBiz;
    });
    // "All services" link in mobile sub-menu
    var mobileAllSvc = document.querySelector('[data-mobile-svc-all]');
    if (mobileAllSvc) mobileAllSvc.textContent = t.footAll;
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

  function buildMobileServicesDropdown() {
    var mobileInner = document.querySelector('#mobileMenu > div');
    if (!mobileInner) return;
    var servicesLink = mobileInner.querySelector('a[href$="services.html"]');
    if (!servicesLink) return;

    // Grab service sub-links from the desktop dropdown (correct relative paths per page)
    var desktopLinks = Array.from(document.querySelectorAll('nav .absolute a'));

    var wrapper = document.createElement('div');

    // Toggle button replacing the plain services link
    var toggle = document.createElement('button');
    toggle.className = 'w-full text-left bg-transparent border-0 p-0 cursor-pointer font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all uppercase tracking-widest flex items-center justify-between';
    var label = document.createElement('span');
    label.setAttribute('data-mobile-svc-label', '');
    label.textContent = servicesLink.textContent;
    var chevron = document.createElement('span');
    chevron.className = 'material-symbols-outlined';
    chevron.style.cssText = 'font-size:14px;transition:transform 0.25s;';
    chevron.textContent = 'expand_more';
    toggle.appendChild(label);
    toggle.appendChild(chevron);

    // Sub-menu panel
    var panel = document.createElement('div');
    panel.style.display = 'none';
    panel.className = 'flex flex-col gap-3 pl-4 pt-2 pb-1';

    // "All services" link
    var allLink = document.createElement('a');
    allLink.href = servicesLink.getAttribute('href');
    allLink.setAttribute('data-mobile-svc-all', '');
    allLink.className = 'font-label-sm text-label-sm text-primary uppercase tracking-widest';
    allLink.textContent = currentLang === 'fi' ? 'Kaikki palvelut' : 'All Services';
    panel.appendChild(allLink);

    // Individual service links
    desktopLinks.forEach(function(dl) {
      var a = document.createElement('a');
      a.href = dl.getAttribute('href');
      a.setAttribute('data-dd-svc', '');
      a.className = 'font-label-sm text-label-sm text-secondary hover:text-primary transition-colors uppercase tracking-widest';
      a.style.fontSize = '11px';
      a.textContent = dl.textContent;
      panel.appendChild(a);
    });

    toggle.addEventListener('click', function() {
      var open = panel.style.display !== 'none';
      panel.style.display = open ? 'none' : 'flex';
      panel.style.flexDirection = 'column';
      chevron.style.transform = open ? '' : 'rotate(180deg)';
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(panel);
    servicesLink.parentNode.replaceChild(wrapper, servicesLink);
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

    // Build expandable services sub-menu in mobile menu
    buildMobileServicesDropdown();

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

    // Set background video playback speed to 80%
    document.querySelectorAll('.bg-vid').forEach(function(v) {
      function setRate() { v.playbackRate = 0.8; }
      setRate();
      v.addEventListener('loadedmetadata', setRate);
      v.addEventListener('play', setRate);
    });

    // On mobile, remove scale/blur from bg-vid — they worsen quality on small screens
    var mobileStyle = document.createElement('style');
    mobileStyle.textContent = '@media (max-width:767px){.bg-vid{filter:brightness(0.7)!important;}.svc-bg-img{object-position:25% 80%!important;}}';
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
