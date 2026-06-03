#!/usr/bin/env python3
import glob

def rw(path, old, new):
    with open(path, 'r', encoding='utf-8') as f: c = f.read()
    if old not in c:
        print(f'  MISS {path}: {repr(old[:70])}')
        return False
    with open(path, 'w', encoding='utf-8') as f: f.write(c.replace(old, new))
    print(f'  OK  {path}')
    return True

def rw_all(old, new):
    files = glob.glob('*.html') + glob.glob('services/*.html') + ['js/lang.js']
    for p in files: rw(p, old, new)

L = 'js/lang.js'

print('=== 1. LinkedIn ===')
rw_all('https://www.linkedin.com/in/hassan-masood-fi/', 'https://www.linkedin.com/in/hassan-han/')

print('\n=== 2. story-p2 ===')
rw(L,
   "Over five years and three continents, I've managed cross-border supply chains across 2,400 collection sites in Pakistan, deployed CSRD compliance frameworks for Finnish exporters, and built data-driven sales pipelines for both B2B and e-commerce businesses.",
   "Working across Finland and Pakistan, with cross-border work into the EU, UAE and China, I've managed a reverse supply chain spanning approximately 2,400 collection centres across the Punjab region, deployed CSRD compliance frameworks for Finnish exporters, and built data-driven sales pipelines for both B2B and e-commerce businesses.")
rw(L,
   'Viiden vuoden ja kolmen mantereen aikana olen hallinnoinut rajat ylittäviä toimitusketjuja 2 400 keräyspisteessä Pakistanissa, ottanut käyttöön CSRD-vaatimustenmukaisuuskehyksiä suomalaisille viejille ja rakentanut dataohjattuja myyntiputkia sekä B2B- että verkkokauppaliketoiminnalle.',
   'Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan, olen hallinnoinut käänteistä toimitusketjua joka kattaa noin 2 400 keräyspistettä Punjabin alueella, ottanut käyttöön CSRD-kehyksiä suomalaisille viejille ja rakentanut dataohjattuja myyntiputkia.')

print('\n=== 3. story-p3 language list ===')
rw(L,
   'Available in six languages: English, Finnish, Swedish, Arabic, Turkish, and Urdu.',
   'Available in English, Urdu and Punjabi (native), Finnish (conversational, B1), with a basic grounding in Arabic and Swedish.')
rw(L,
   'Saatavilla kuudella kielellä: englanti, suomi, ruotsi, arabia, turkki ja urdu.',
   'Saatavilla: englanti, urdu ja punjabi (äidinkieli), suomi (keskustelutaso, B1) sekä alkeet arabiassa ja ruotsissa.')

print('\n=== 4. svc-lede ===')
rw(L, "'svc-lede': 'Practical work with commercial focus. Available in six languages.',",
       "'svc-lede': 'Practical work with commercial focus.',")
rw(L, "'svc-lede': 'Käytännön työtä kaupallisella fokuksella. Saatavilla kuudella kielellä.',",
       "'svc-lede': 'Käytännön työtä kaupallisella fokuksella.',")

print('\n=== 5. svc-intl-p ===')
rw(L, "'svc-intl-p': 'Cross-border e-commerce, supplier vetting, EU compliance, localisation in 6 languages.',",
       "'svc-intl-p': 'Cross-border e-commerce, supplier vetting, EU compliance, and market localisation.',")
rw(L, "'svc-intl-p': 'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus, lokalisointi 6 kielellä.',",
       "'svc-intl-p': 'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus ja markkinoiden lokalisointi.',")

print('\n=== 6. svc-page-lede ===')
rw(L,
   'Eight service areas covering ESG compliance, web development, marketing, sales, and international business. All available in English, Finnish, Swedish, Arabic, Turkish, and Urdu.',
   'Eight service areas covering ESG compliance, web development, marketing, sales, and international business. Available in English, Urdu, Punjabi, Finnish, Arabic and Swedish.')
rw(L, "'svc-page-lede': 'Kahdeksan palvelualuetta kattaen ESG-vaatimustenmukaisuuden, verkkokehityksen, markkinoinnin, myynnin ja kansainvälisen liiketoiminnan. Kaikki saatavilla englanniksi, suomeksi, ruotsiksi, arabiaksi, turkiksi ja urduksi.',",
       "'svc-page-lede': 'Kahdeksan palvelualuetta kattaen ESG-vaatimustenmukaisuuden, verkkokehityksen, markkinoinnin, myynnin ja kansainvälisen liiketoiminnan. Saatavilla englanniksi, urduksi, punjabin kielellä, suomeksi, arabiaksi ja ruotsiksi.',")

print('\n=== 7. svc-card-05-p ===')
rw(L, "'svc-card-05-p': 'Cross-border e-commerce, supplier vetting, EU import compliance, localisation in six languages.',",
       "'svc-card-05-p': 'Cross-border e-commerce, supplier vetting, EU import compliance, and market localisation.',")
rw(L, "'svc-card-05-p': 'Rajat ylittävä verkkokauppa, toimittajan tarkastus, EU:n tuontivaatimustenmukaisuus, lokalisointi kuudella kielellä.',",
       "'svc-card-05-p': 'Rajat ylittävä verkkokauppa, toimittajan tarkastus, EU:n tuontivaatimustenmukaisuus ja markkinoiden lokalisointi.',")

print('\n=== 8. svc-card-08-p (three continents) ===')
rw(L,
   'Market entry strategy, partnership development, revenue diversification — built on real operational experience across three continents.',
   'Market entry strategy, partnership development, revenue diversification — built on real operational experience across Finland and Pakistan, with cross-border work into the EU, UAE and China.')
rw(L,
   'Markkinoilletulostrategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen — rakennettu todelliseen operatiiviseen kokemukseen kolmella mantereella.',
   'Markkinoilletulostrategia, kumppanuuksien kehittäminen, tulojen monipuolistaminen — rakennettu todelliseen operatiiviseen kokemukseen Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan.')

print('\n=== 9. svc-lang-label ===')
rw(L, "'svc-lang-label': '&mdash; Supported in 6 languages',",
       "'svc-lang-label': '&mdash; Available in EN, Urdu, Punjabi, FI, AR, SV',")
rw(L, "'svc-lang-label': '&mdash; Tuki 6 kielellä',",
       "'svc-lang-label': '&mdash; Saatavilla EN, urdu, punjabi, FI, AR, SV',")

print('\n=== 10. about-hero-lede ===')
rw(L,
   'A Finland-based International Business professional who turns regulation into commercial advantage, blends operational experience with technology, and works across six languages.',
   'A Finland-based International Business professional who turns regulation into commercial advantage and blends operational experience with technology.')
rw(L,
   'Suomessa toimiva kansainvälisen liiketoiminnan ammattilainen, joka muuttaa sääntelyn kaupalliseksi eduksi, yhdistää operatiivisen kokemuksen teknologiaan ja työskentelee kuudella kielellä.',
   'Suomessa toimiva kansainvälisen liiketoiminnan ammattilainen, joka muuttaa sääntelyn kaupalliseksi eduksi ja yhdistää operatiivisen kokemuksen teknologiaan.')

print('\n=== 11. about-p2 (2400) ===')
rw(L,
   'from managing a cross-border supply chain of 2,400 waste collection centres in Punjab to',
   'from managing a reverse supply chain spanning approximately 2,400 collection centres across the Punjab region to')
rw(L,
   'Taustani kattaa viisi erilaista roolia — rajat ylittävän toimitusketjun hallinnasta 2 400 jätekuljetuskeskuksessa Punjabissa CSRD-kehysten käyttöönottoon',
   'Taustani kattaa viisi erilaista roolia — käänteisen toimitusketjun hallinnasta joka kattoi noin 2 400 keräyspistettä Punjabin alueella CSRD-kehysten käyttöönottoon')

print('\n=== 12. about-p4 (languages paragraph) ===')
rw(L,
   'Language is one of my most practical professional assets. I work fluently in <strong class="text-primary">English and Urdu</strong>, am conversational in Finnish and Arabic, and have working knowledge of Swedish and Turkish. This means I can run a supplier audit in South Asia, negotiate a compliance scope in Helsinki, and communicate directly with MENA-region partners without a layer of translation or cultural friction.',
   'Languages are one of my most practical strengths. I work natively in <strong class="text-primary">English, Urdu and Punjabi</strong>, hold conversational Finnish (B1), and have a basic grounding in Arabic and Swedish. That range lets me run supplier conversations across South Asia in their own language and operate day-to-day in a Finnish business environment.')
rw(L,
   'Kieli on yksi käytännöllisimmistä ammatillisista vahvuuksistani. Työskentelen sujuvasti <strong class="text-primary">englanniksi ja urduksi</strong>, suomea ja arabiaa sujuvasti ja hallitsen ruotsin ja turkin työkielellä. Voin suorittaa toimittaja-auditoinnin Etelä-Aasiassa, neuvotella vaatimustenmukaisuuden laajuudesta Helsingissä ja kommunikoida suoraan MENA-alueen kumppanien kanssa ilman lisäkäännöstasoa.',
   'Kielet ovat yksi käytännöllisimmistä vahvuuksistani. Äidinkieleni ovat <strong class="text-primary">englanti, urdu ja punjabi</strong>, puhun suomea keskustelutasolla (B1) ja minulla on perusteet arabiasta ja ruotsista. Tämä kirjo antaa minun hoitaa toimittajakeskustelut Etelä-Aasiassa heidän omalla kielellään ja toimia päivittäin suomalaisessa liiketoimintaympäristössä.')

print('\n=== 13. val-04-body ===')
rw(L,
   'Six languages and direct experience across Finnish, EU, South Asian, and Turkish business contexts. I reduce friction in international operations rather than adding translation layers.',
   'Direct experience across Finnish, EU, South Asian and UAE business contexts. I reduce friction in international operations rather than adding translation layers.')
rw(L,
   'Kuusi kieltä ja suora kokemus suomalaisista, EU-, Etelä-Aasian ja turkkilaisista liiketoimintaympäristöistä. Vähennän kitkaa kansainvälisissä operaatioissa sen sijaan, että lisäisin käännöstasoja.',
   'Suora kokemus suomalaisista, EU-, Etelä-Aasian ja Arabiemiraattien liiketoimintaympäristöistä. Vähennän kitkaa kansainvälisissä operaatioissa sen sijaan, että lisäisin käännöstasoja.')

print('\n=== 14. work-lede ===')
rw(L,
   "'work-lede': 'Five roles across sales, ESG compliance, e-commerce operations, and business development — spanning Finland, Pakistan, and the UAE.',",
   "'work-lede': 'Five roles across sales, ESG compliance, e-commerce operations, and business development — spanning Finland and Pakistan, with cross-border work into the EU, UAE and China.',")
rw(L,
   "'work-lede': 'Viisi roolia myynnin, ESG-vaatimustenmukaisuuden, verkkokauppaoperaatioiden ja liiketoimintakehityksen parissa — Suomessa, Pakistanissa ja Arabiemiraateissa.',",
   "'work-lede': 'Viisi roolia myynnin, ESG-vaatimustenmukaisuuden, verkkokauppaoperaatioiden ja liiketoimintakehityksen parissa — Suomessa ja Pakistanissa, rajat ylittävää työtä EU:hun, Arabiemiraatteihin ja Kiinaan.',")

print('\n=== 15. skills-lang-h / skills-lang-p ===')
rw(L, "'skills-lang-h': 'Six <span class=\"text-primary\">Languages.</span>',",
       "'skills-lang-h': 'Five <span class=\"text-primary\">Languages.</span>',")
rw(L, "'skills-lang-h': 'Kuusi <span class=\"text-primary\">Kieltä.</span>',",
       "'skills-lang-h': 'Viisi <span class=\"text-primary\">Kieltä.</span>',")
rw(L, "'skills-lang-p': 'All professional services delivered in any of the following — no intermediaries, no translation overhead.',",
       "'skills-lang-p': 'Languages I work in professionally:',")
rw(L, "'skills-lang-p': 'Kaikki ammatilliset palvelut toimitetaan millä tahansa seuraavista kielistä — ei välittäjiä, ei käännöskustannuksia.',",
       "'skills-lang-p': 'Kielet, joilla työskentelen ammattimaisesti:',")

print('\nDone.')
