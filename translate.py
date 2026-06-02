# -*- coding: utf-8 -*-
import glob

def r(c, old, new):
    return c.replace(old, new)

def apply_global(c, prefix=''):
    p = prefix
    c = r(c, 'href="{}about.html">About</a>'.format(p), 'href="{}about.html">Tietoa</a>'.format(p))
    c = r(c, 'href="{}work.html">Work</a>'.format(p), 'href="{}work.html">Kokemus</a>'.format(p))
    c = r(c, 'href="{}projects.html">Projects</a>'.format(p), 'href="{}projects.html">Projektit</a>'.format(p))
    c = r(c, 'href="{}skills.html">Skills</a>'.format(p), 'href="{}skills.html">Taidot</a>'.format(p))
    c = r(c, 'href="{}services.html">Services<span'.format(p), 'href="{}services.html">Palvelut<span'.format(p))
    c = r(c, 'href="{}services.html">Services</a>'.format(p), 'href="{}services.html">Palvelut</a>'.format(p))
    c = r(c, '>Hire Me</a>', '>Ota yhteyttä</a>')
    c = r(c, '>Web Design &amp; Dev</a>', '>Verkkosuunnittelu &amp; Kehitys</a>')
    c = r(c, '>Digital Marketing</a>', '>Digitaalinen Markkinointi</a>')
    c = r(c, '>Intl. Expansion</a>', '>Kansainv. Laajeneminen</a>')
    c = r(c, '>Brand &amp; Content</a>', '>Brändi &amp; Sisältö</a>')
    c = r(c, '>Social &amp; Paid Ads</a>', '>Sosiaalinen &amp; Mainokset</a>')
    c = r(c, '>Business Dev</a>', '>Liiketoimintakehitys</a>')
    c = r(c, '>Site</h5>', '>Sivusto</h5>')
    c = r(c, '>Services</h5>', '>Palvelut</h5>')
    c = r(c, '>Contact</h5>', '>Yhteystiedot</h5>')
    c = r(c, '> Home</a>', '> Etusivu</a>')
    c = r(c, '> About</a>', '> Tietoa</a>')
    c = r(c, '> Work</a>', '> Kokemus</a>')
    c = r(c, '> Projects</a>', '> Projektit</a>')
    c = r(c, '> Skills</a>', '> Taidot</a>')
    c = r(c, '> Web Design</a>', '> Verkkosuunnittelu</a>')
    c = r(c, '> Sales &amp; CRM</a>', '> Myynti &amp; CRM</a>')
    c = r(c, '> All Services</a>', '> Kaikki palvelut</a>')
    c = r(c, '> Contact Page</a>', '> Yhteystiedot</a>')
    c = r(c, 'Sustainable business developer. ESG &amp; CBAM compliance, sales systems, and data-driven strategy.',
         'Kestävä liiketoimintakehittäjä. ESG- ja CBAM-vaatimustenmukaisuus, myynti- ja dataohjattu strategia.')
    c = r(c, '© 2026 Hassan Masood · All rights reserved · Inkoo, Finland',
         '© 2026 M. Hassan Masood · Kaikki oikeudet pidätetään · Y-tunnus 3573040-9 · Inkoo, Suomi')
    c = r(c, 'lang="en"', 'lang="fi"')
    return c

def translate_index(c):
    c = r(c, 'Available · Inkoo, Finland · 2026', 'Saatavilla · Inkoo, Suomi · 2026')
    c = r(c, 'Sustainable business developer specializing in ESG, CBAM compliance, and cross-border commercial strategy.',
         'Kestävä liiketoimintakehittäjä, joka erikoistuu ESG- ja CBAM-vaatimustenmukaisuuteen sekä kansainväliseen kaupalliseen strategiaan.')
    c = r(c, '>Full Story <span class="material-symbols-outlined text-sm">arrow_forward</span>', '>Koko tarina <span class="material-symbols-outlined text-sm">arrow_forward</span>')
    c = r(c, '>Get in Touch', '>Ota yhteyttä')
    c = r(c, '>The Story</h2>', '>Tarina</h2>')
    c = r(c, '>Services</h2>', '>Palvelut</h2>')
    c = r(c, 'Practical work delivered with commercial focus. Available in six languages.',
         'Käytännön työtä kaupallisella fokuksella. Saatavilla kuudella kielellä.')
    c = r(c, '>ESG &amp; Sustainability</h3>', '>ESG &amp; Kestävyys</h3>')
    c = r(c, 'CBAM, CSRD, supplier data, LCA — built from hands-on implementation experience.',
         'CBAM, CSRD, toimittajadata, LCA — rakennettu käytännön toteutuskokemuksesta.')
    c = r(c, '>International Expansion</h3>', '>Kansainvälinen Laajeneminen</h3>')
    c = r(c, 'Cross-border e-commerce, supplier vetting, EU compliance, localisation in 6 languages.',
         'Rajat ylittävä verkkokauppa, toimittaja-auditointi, EU-vaatimustenmukaisuus, lokalisointi 6 kielellä.')
    c = r(c, '>Sales &amp; CRM</h3>', '>Myynti &amp; CRM</h3>')
    c = r(c, 'Outreach systems, pipeline ops, HubSpot or Salesforce for B2B and e-commerce.',
         'Asiakashankintajärjestelmät, putkiliiketoiminta, HubSpot tai Salesforce B2B- ja verkkokaupalle.')
    c = r(c, '>Web Design &amp; Development</h3>', '>Verkkosuunnittelu &amp; Kehitys</h3>')
    c = r(c, 'Clean, fast, mobile-first websites built to convert — concept to go-live.',
         'Puhtaat, nopeat, mobiiliystävälliset sivut, jotka on tehty myymään — konseptista julkaisuun.')
    c = r(c, 'View All 8 Services', 'Näytä kaikki 8 palvelua')
    c = r(c, '>Capabilities</h2>', '>Osaaminen</h2>')
    c = r(c, '>ESG &amp; Compliance</h4>', '>ESG &amp; Vaatimustenmukaisuus</h4>')
    c = r(c, '>Sales &amp; CRM</h4>', '>Myynti &amp; CRM</h4>')
    c = r(c, '>Web &amp; Tech</h4>', '>Verkko &amp; Teknologia</h4>')
    c = r(c, '>Languages</h4>', '>Kielet</h4>')
    c = r(c, 'Full Skills Breakdown', 'Täydellinen taitoerittely')
    return c

def translate_about(c):
    c = r(c, '01 — About', '01 — Tietoa')
    c = r(c, 'Academic <span class="em">background.</span>', 'Akateeminen <span class="em">tausta.</span>')
    c = r(c, 'Education', 'Koulutus')
    c = r(c, 'What I offer', 'Mitä tarjoan')
    c = r(c, 'Core <span class="em">value.</span>', 'Ydinarvot.')
    c = r(c, 'See all services', 'Näytä kaikki palvelut')
    c = r(c, 'Work together', 'Tehdään yhteistyötä')
    c = r(c, 'Get in touch', 'Ota yhteyttä')
    c = r(c, 'View experience', 'Katso kokemus')
    c = r(c, 'Open to work', 'Avoin töihin')
    return c

def translate_work(c):
    c = r(c, '03 — Work History', '03 — Työhistoria')
    c = r(c, 'Recent <span class="em">positions.</span>', 'Viimeisimmät <span class="em">tehtävät.</span>')
    c = r(c, 'Academic <span class="em">background.</span>', 'Akateeminen <span class="em">tausta.</span>')
    c = r(c, 'Education', 'Koulutus')
    c = r(c, 'Competitions &amp; Awards', 'Kilpailut &amp; Palkinnot')
    c = r(c, 'Case <span class="em">results.</span>', 'Kilpailujen <span class="em">tulokset.</span>')
    c = r(c, 'Start a conversation', 'Aloita keskustelu')
    c = r(c, 'About me', 'Tietoa minusta')
    c = r(c, 'Skills &amp; tools', 'Taidot &amp; työkalut')
    return c

def translate_projects(c):
    c = r(c, '04 — Projects', '04 — Projektit')
    c = r(c, 'Selected <span class="em">work.</span>', 'Valittu <span class="em">työ.</span>')
    c = r(c, 'Client <span class="em">access only.</span>', 'Vain <span class="em">asiakkaille.</span>')
    c = r(c, 'Request access', 'Pyydä pääsyä')
    c = r(c, 'View experience', 'Katso kokemus')
    return c

def translate_skills(c):
    c = r(c, '05 — Skills', '05 — Taidot')
    c = r(c, 'Tools &amp; <span class="em">competencies.</span>', 'Työkalut &amp; <span class="em">osaaminen.</span>')
    c = r(c, '>ESG &amp; <span class="em">Compliance</span>', '>ESG &amp; <span class="em">Vaatimustenmukaisuus</span>')
    c = r(c, '>Sales &amp; <span class="em">CRM</span>', '>Myynti &amp; <span class="em">CRM</span>')
    c = r(c, '>Marketing &amp; <span class="em">Analytics</span>', '>Markkinointi &amp; <span class="em">Analytiikka</span>')
    c = r(c, '>Web &amp; <span class="em">Technology</span>', '>Verkko &amp; <span class="em">Teknologia</span>')
    c = r(c, '>Business &amp; <span class="em">Strategy</span>', '>Liiketoiminta &amp; <span class="em">Strategia</span>')
    c = r(c, '>Finance &amp; <span class="em">Markets</span>', '>Rahoitus &amp; <span class="em">Markkinat</span>')
    c = r(c, 'Six <span class="em">languages.</span>', 'Kuusi <span class="em">kieltä.</span>')
    c = r(c, 'Languages', 'Kielet')
    c = r(c, 'Working <span class="em">style.</span>', 'Työskentelytyyli.')
    c = r(c, 'How I work', 'Miten työskentelen')
    c = r(c, 'Start a conversation', 'Aloita keskustelu')
    c = r(c, 'View services', 'Näytä palvelut')
    return c

def translate_contact(c):
    c = r(c, '06 — Contact', '06 — Yhteystiedot')
    c = r(c, '>Email</div>', '>Sähköposti</div>')
    c = r(c, '>Phone</div>', '>Puhelin</div>')
    c = r(c, '>Location</div>', '>Sijainti</div>')
    c = r(c, '>Status</div>', '>Tila</div>')
    c = r(c, '>Business ID</div>', '>Y-Tunnus</div>')
    c = r(c, '>Services</div>', '>Palvelut</div>')
    c = r(c, '>Available now<', '>Saatavilla nyt<')
    c = r(c, 'Send message <span class="arr">→</span>', 'Lähetä viesti <span class="arr">→</span>')
    return c

def translate_services(c):
    c = r(c, '02 — Services', '02 — Palvelut')
    c = r(c, 'What I <span class="em">offer.</span>', 'Mitä <span class="em">tarjoan.</span>')
    c = r(c, '>Web Design &amp;<br/><span class="em">Development</span>', '>Verkkosuunnittelu &amp;<br/><span class="em">Kehitys</span>')
    c = r(c, '>ESG &amp; <span class="em">Sustainability</span> Consulting', '>ESG &amp; <span class="em">Kestävyys</span>konsultointi')
    c = r(c, '>Digital <span class="em">Marketing</span>', '>Digitaalinen <span class="em">Markkinointi</span>')
    c = r(c, '>Sales &amp; <span class="em">CRM</span>', '>Myynti &amp; <span class="em">CRM</span>')
    c = r(c, '>International <span class="em">Expansion</span>', '>Kansainvälinen <span class="em">Laajeneminen</span>')
    c = r(c, '>Brand &amp; <span class="em">Content</span>', '>Brändi &amp; <span class="em">Sisältö</span>')
    c = r(c, '>Social &amp; <span class="em">Paid Ads</span>', '>Sosiaalinen &amp; <span class="em">Maksetut Mainokset</span>')
    c = r(c, '>Business <span class="em">Development</span>', '>Liiketoiminnan <span class="em">Kehitys</span>')
    c = r(c, '— Support in 6 Languages', '— Tuki 6 kielellä')
    c = r(c, 'Start a conversation', 'Aloita keskustelu')
    return c

files = sorted(glob.glob('*.html') + glob.glob('services/*.html'))
updated = 0
for path in files:
    c = open(path, encoding='utf-8').read()
    orig = c
    in_sub = path.startswith('services\\') or path.startswith('services/')
    prefix = '../' if in_sub else ''
    c = apply_global(c, prefix)
    name = path.replace('\\', '/').split('/')[-1]
    if name == 'index.html':      c = translate_index(c)
    elif name == 'about.html':    c = translate_about(c)
    elif name == 'work.html':     c = translate_work(c)
    elif name == 'projects.html': c = translate_projects(c)
    elif name == 'skills.html':   c = translate_skills(c)
    elif name == 'contact.html':  c = translate_contact(c)
    elif name == 'services.html': c = translate_services(c)
    if c != orig:
        open(path, 'w', encoding='utf-8').write(c)
        print('Updated: ' + path)
        updated += 1

print('Total: ' + str(updated))
