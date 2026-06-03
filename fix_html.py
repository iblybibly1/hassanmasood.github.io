#!/usr/bin/env python3
# fix_html.py — structural HTML text changes (work, about, skills, projects)

def rw(path, old, new):
    with open(path, 'r', encoding='utf-8') as f: c = f.read()
    if old not in c:
        print(f'  MISS {path}: {repr(old[:80])}')
        return False
    with open(path, 'w', encoding='utf-8') as f: f.write(c.replace(old, new))
    print(f'  OK  {path}')
    return True

LI = '<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>{}</span></li>'

def entry(dates, title, company, bullets):
    b = '\n'.join(LI.format(b) for b in bullets)
    return (
        "\n<div class=\"tl-item border-b border-smoke-gray pb-8 mb-8 cursor-pointer\" onclick=\"this.classList.toggle('open')\">\n"
        "<div class=\"flex justify-between items-start\">\n<div>\n"
        f"<div class=\"font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2\">{dates}</div>\n"
        f"<div class=\"font-headline-lg text-xl text-void-black uppercase mb-1\">{title}</div>\n"
        f"<div class=\"font-body-md text-body-md text-surface-container-highest\">{company}</div>\n"
        "</div>\n<span class=\"material-symbols-outlined text-primary tl-icon text-2xl mt-1\">add</span>\n</div>\n"
        "<ul class=\"tl-bullets mt-4 space-y-3\">\n"
        f"{b}\n"
        "</ul>\n</div>"
    )

NEW_EDU = '''<div class="divide-y divide-smoke-gray reveal stagger-1">
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2021 &ndash; 2024</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">BBA, International Business</div>
<div class="font-body-md text-secondary mt-1">Tampere University of Applied Sciences (TAMK) &middot; Tampere, Finland</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">CGPA 4.29 / 5.0 &middot; Graduated December 2024</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2016</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Exchange Studies</div>
<div class="font-body-md text-secondary mt-1">Ondokuz May&#305;s University &middot; Samsun, Turkey</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Economics &middot; Accounting &middot; Regional Development</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2018 &ndash; 2020</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">A-Levels</div>
<div class="font-body-md text-secondary mt-1">University of Cambridge &middot; Lahore Learning Campus</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Business &middot; English Language &middot; Information Technology</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">Since 2012</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Self-directed Study</div>
<div class="font-body-md text-secondary mt-1">Financial markets, algorithmic trading, software development</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Python &middot; WebGL &middot; Android &middot; Generative AI</div>
</div>
</div>
</div>'''

# ─── 1. work.html experience entries ─────────────────────────────────────────
print('=== 1. work.html: FinSell ===')
rw('work.html',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Mar 2025 &mdash; Dec 2025</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Sales &amp; ESG Compliance Manager</div>
<div class="font-body-md text-body-md text-surface-container-highest">FinSell Oy &middot; Tampere, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Led CBAM (Carbon Border Adjustment Mechanism) implementation from scratch &mdash; built the data collection pipeline, reclassified CN codes, and submitted the first quarterly reports on time with zero regulatory penalties.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Designed and managed a B2B outreach system targeting Nordic industrial buyers; grew qualified pipeline by 40% in six months through structured prospecting, CRM discipline, and follow-through cadence.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Coordinated supplier ESG data collection across six international vendors, developing a repeatable questionnaire and scoring framework now used as the company standard.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Built internal dashboards in Power BI to track compliance deadlines, emission data, and sales KPIs &mdash; reducing reporting time from two days per quarter to under four hours.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Served as primary point of contact for EU customs authorities during the transitional CBAM phase, translating regulatory guidance into actionable internal processes.</span></li>
</ul>''',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Mar 2025 &mdash; Dec 2025</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Sales Development Representative &amp; Project Lead</div>
<div class="font-body-md text-body-md text-surface-container-highest">FinSell Oy &middot; Helsinki, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Led FinSell\'s field fundraising operation representing World Vision Finland — recruiting, onboarding and training the team.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Managed the sales pipeline and donor data in Salesforce, keeping records accurate and reporting weekly to management.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Acted as the central link between field operations and headquarters, coordinating scheduling and resolving day-to-day operational issues.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Ran campaign planning and team performance reviews.</span></li>
</ul>''')

print('=== 2. work.html: Tammer ===')
rw('work.html',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Jun 2024 &mdash; Oct 2024</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Marketing &amp; Digital Strategy Intern</div>
<div class="font-body-md text-body-md text-surface-container-highest">Tammer Brands Oy &middot; Tampere, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Conducted full audience segmentation analysis for two product lines, identifying underserved B2B segments in Scandinavian markets that led to a revised 2025 campaign strategy.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Built and maintained a monthly KPI dashboard tracking social reach, email open rates, and web traffic &mdash; first structured performance review framework in the department.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Produced copy and creative briefs for email campaigns and product launches, coordinating with external design freelancers on timelines and brand consistency.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Assisted in planning and executing a product photography shoot and resulting catalogue refresh, improving product page conversion rate by 18% over the following quarter.</span></li>
</ul>''',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Jun 2024 &mdash; Oct 2024</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">ESG &amp; CSRD Compliance Specialist</div>
<div class="font-body-md text-body-md text-surface-container-highest">Tammer Brands Oy &middot; Tampere, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Implemented CBAM (Carbon Border Adjustment Mechanism) reporting, including EU portal submissions and the underlying data collection.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Conducted third-party supplier due diligence across 50+ global manufacturers, including PQB risk evaluations.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Proactively identified and carried through a CN-code reclassification that reduced the company\'s customs duties — a self-initiated fix with direct cost and compliance impact.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Coordinated directly with Finnish Customs (Tulli) on classification and reporting.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Designed and delivered internal compliance training for staff.</span></li>
</ul>''')

print('=== 3. work.html: TBCC ===')
rw('work.html',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">May 2023 &mdash; Dec 2024</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Event Lead &amp; Case Coordinator</div>
<div class="font-body-md text-body-md text-surface-container-highest">Tampere Business Case Club &middot; Tampere, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Organised and facilitated five business case competitions and workshops with 40&ndash;120 participants each, managing venue logistics, sponsor relationships, and cross-team coordination.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Designed case briefs and evaluation rubrics for three industry-sponsored competitions in collaboration with partner companies in finance, logistics, and retail.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Grew club membership from 60 to 110 active members over 18 months through targeted recruitment campaigns and an expanded event calendar.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Secured two new corporate sponsors by writing tailored partnership proposals and presenting to company representatives &mdash; covering full event costs for the 2024 spring series.</span></li>
</ul>''',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">2023 &mdash; 2024</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Strategy Consultant</div>
<div class="font-body-md text-body-md text-surface-container-highest">Tampere Business Case Club &middot; Tampere, Finland</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Advised real client companies — including Lufthansa, TeamViewer and Sidoste — on strategy and market problems as part of the club\'s consulting work.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Competed internationally at the Maastricht Business Case Competition and the European Sales Competition.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Conducted market research and built structured recommendations under competition deadlines.</span></li>
</ul>''')

print('=== 4. work.html: ECO ===')
rw('work.html',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Jun 2020 &mdash; Mar 2021</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Business Development &amp; Client Relations</div>
<div class="font-body-md text-body-md text-surface-container-highest">Environmental Consultancies &amp; Options &middot; Lahore, Pakistan</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Managed a portfolio of 12 corporate clients across manufacturing, textile, and construction sectors &mdash; coordinating environmental compliance reviews and project timelines.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Developed the firm\'s first formal client onboarding process, reducing initial engagement time from three weeks to six days and improving early client satisfaction scores.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Researched and drafted two market entry reports for clients exploring expansion into UAE and Bahrain environmental service markets, covering regulatory landscape, competitor analysis, and positioning recommendations.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Supported proposal writing and bid responses for government-tendered contracts; two bids progressed to final evaluation stage during my tenure.</span></li>
</ul>''',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Jun 2020 &mdash; Mar 2021</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Assistant Manager</div>
<div class="font-body-md text-body-md text-surface-container-highest">Environmental Consultancies &amp; Options &middot; Lahore, Pakistan</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Managed a reverse supply-chain program spanning approximately 2,400 collection centres across the Punjab region.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Handled hazardous-chemicals licensing and government licensing renewals.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Supported ISO 45001 occupational health &amp; safety compliance.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Coordinated teams and reporting across the program.</span></li>
</ul>''')

print('=== 5. work.html: Vapemall ===')
rw('work.html',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Dec 2017 &mdash; Jan 2020</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Co-Founder &amp; Operations Lead</div>
<div class="font-body-md text-body-md text-surface-container-highest">Vapemall PK &middot; Lahore, Pakistan</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Co-founded and scaled an e-commerce business from zero to a monthly revenue run-rate of PKR 1.2M within 14 months &mdash; sourcing product from international suppliers, managing inventory, and running all marketing in-house.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Built a cross-border procurement chain with suppliers in China and UAE, negotiating terms, managing customs documentation, and maintaining delivery reliability above 92%.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Ran all digital marketing: Facebook and Instagram organic content plus paid campaigns; managed a monthly ad budget of PKR 150K and maintained a 3.8&times; ROAS over 18 months.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Oversaw all customer service operations &mdash; introduced a structured ticketing approach that reduced average resolution time from 48 to 11 hours and earned repeat purchase rates above 35%.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Managed a small team of three &mdash; setting targets, reviewing performance, and handling supplier negotiations independently while completing undergraduate coursework.</span></li>
</ul>''',
'''<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">Dec 2017 &mdash; Jan 2020</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-1">Business Development Manager</div>
<div class="font-body-md text-body-md text-surface-container-highest">Vapemall PK &middot; Lahore, Pakistan</div>
</div>
<span class="material-symbols-outlined text-primary tl-icon text-2xl mt-1">add</span>
</div>
<ul class="tl-bullets mt-4 space-y-3">
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Scaled an FMCG business from an online operation into multiple brick-and-mortar locations.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Managed operational coordination, supplier documentation, invoicing and inventory across multi-location operations.</span></li>
<li class="font-body-md text-body-md text-surface-container-highest flex gap-3"><span class="text-primary mt-1 shrink-0">&rarr;</span><span>Handled supplier relationships and procurement.</span></li>
</ul>''')

# ─── 2. work.html education ───────────────────────────────────────────────────
print('\n=== 6. work.html: education ===')
rw('work.html',
'''<div class="divide-y divide-smoke-gray reveal stagger-1">
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2020 &ndash; 2024</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">BBA, International Business</div>
<div class="font-body-md text-secondary mt-1">Tampere University of Applied Sciences (TAMK) &middot; Tampere, Finland</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">CGPA 4.29 / 5.0 &middot; Graduated December 2024</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div></div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Exchange Semester</div>
<div class="font-body-md text-secondary mt-1">Ondokuz May&#305;s University &middot; Samsun, Turkey</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Economics &middot; Accounting &middot; Regional Development</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2020</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">A-Levels</div>
<div class="font-body-md text-secondary mt-1">University of Cambridge &middot; Lahore Learning Campus</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Business &middot; English Language &middot; Information Technology &mdash; Grade B in all subjects</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2009</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">O-Levels</div>
<div class="font-body-md text-secondary mt-1">University of Cambridge &middot; Lahore Learning Campus</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">8 subjects &mdash; English Language (A), Mathematics, Physics, Chemistry, Pakistan Studies, Urdu, Biology, Islamiyat</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">Since 2012</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Self-directed Study</div>
<div class="font-body-md text-secondary mt-1">Financial markets, algorithmic trading, software development</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Python &middot; WebGL &middot; Android &middot; Generative AI</div>
</div>
</div>
</div>''',
NEW_EDU)

# ─── 3. work.html case results ────────────────────────────────────────────────
print('\n=== 7. work.html: case results ===')
rw('work.html',
   '<p class="font-body-md text-body-lg text-surface-container-highest">Competitions and awards from TAMK, the Tampere Business Case Club, and Huawei Finland.</p>',
   '<p class="font-body-md text-body-lg text-surface-container-highest">Selected competition results.</p>')
rw('work.html',
'''<div class="divide-y divide-smoke-gray reveal stagger-1">
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">2025</div>
<div class="font-headline-lg text-base text-void-black uppercase">Huawei Tech Arena Finland</div>
<div class="font-label-sm text-label-sm bg-primary text-white px-3 py-1 uppercase whitespace-nowrap">3rd Place &mdash; National</div>
<div class="font-body-md text-body-md text-surface-container-highest">UI/UX interface for HarmonyOS &middot; Only non-CS competitor on the podium</div>
</div>
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">2024</div>
<div class="font-headline-lg text-base text-void-black uppercase">TAMK International Business Case Competition</div>
<div class="font-label-sm text-label-sm border border-smoke-gray text-void-black px-3 py-1 uppercase whitespace-nowrap">Top 3 Finalist</div>
<div class="font-body-md text-body-md text-surface-container-highest">Market entry strategy &mdash; Nordic retail</div>
</div>
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">2023</div>
<div class="font-headline-lg text-base text-void-black uppercase">Tampere BCC Spring Case Series</div>
<div class="font-label-sm text-label-sm border border-smoke-gray text-void-black px-3 py-1 uppercase whitespace-nowrap">Winner &mdash; Best Presentation</div>
<div class="font-body-md text-body-md text-surface-container-highest">Supply chain resilience</div>
</div>
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">2023</div>
<div class="font-headline-lg text-base text-void-black uppercase">TAMK Sustainability Challenge</div>
<div class="font-label-sm text-label-sm border border-smoke-gray text-void-black px-3 py-1 uppercase whitespace-nowrap">Finalist</div>
<div class="font-body-md text-body-md text-surface-container-highest">Circular economy model for SMEs</div>
</div>
</div>''',
'''<div class="divide-y divide-smoke-gray reveal stagger-1">
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">2025</div>
<div class="font-headline-lg text-base text-void-black uppercase">Huawei Tech Arena Finland</div>
<div class="font-label-sm text-label-sm bg-primary text-white px-3 py-1 uppercase whitespace-nowrap">3rd Place &mdash; National</div>
<div class="font-body-md text-body-md text-surface-container-highest">UI/UX interface for HarmonyOS &middot; Only non-CS competitor on the podium</div>
</div>
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">Feb 2023</div>
<div class="font-headline-lg text-base text-void-black uppercase">Sales Pitch Competition, Platform 6</div>
<div class="font-label-sm text-label-sm bg-primary text-white px-3 py-1 uppercase whitespace-nowrap">1st Place</div>
<div class="font-body-md text-body-md text-surface-container-highest"></div>
</div>
<div class="grid md:grid-cols-[80px_1fr_auto_1fr] gap-6 py-6 items-center">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest">Mar 2022</div>
<div class="font-headline-lg text-base text-void-black uppercase">Business Startup Competition, TAMK</div>
<div class="font-label-sm text-label-sm bg-primary text-white px-3 py-1 uppercase whitespace-nowrap">1st Place</div>
<div class="font-body-md text-body-md text-surface-container-highest"></div>
</div>
</div>''')

# ─── 4. about.html education ─────────────────────────────────────────────────
print('\n=== 8. about.html: education ===')
rw('about.html',
'''<div class="divide-y divide-smoke-gray reveal stagger-1">
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2020 &ndash; 2024</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">BBA, International Business</div>
<div class="font-body-md text-secondary mt-1">Tampere University of Applied Sciences (TAMK) &middot; Tampere, Finland</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">CGPA 4.29 / 5.0 &middot; Graduated December 2024</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1"></div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Exchange Semester</div>
<div class="font-body-md text-secondary mt-1">Ondokuz May&#305;s University &middot; Samsun, Turkey</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Economics &middot; Accounting &middot; Regional Development</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2020</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">A-Levels</div>
<div class="font-body-md text-secondary mt-1">University of Cambridge &middot; Lahore Learning Campus</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Business &middot; English Language &middot; Information Technology &mdash; Grade B in all subjects</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">2009</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">O-Levels</div>
<div class="font-body-md text-secondary mt-1">University of Cambridge &middot; Lahore Learning Campus</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">8 subjects &mdash; English Language (A), Mathematics, Physics, Chemistry, Pakistan Studies, Urdu, Biology, Islamiyat</div>
</div>
</div>
<div class="grid md:grid-cols-[160px_1fr] gap-6 py-8">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest pt-1">Since 2012</div>
<div>
<div class="font-headline-lg text-xl text-white uppercase mb-1">Self-directed Study</div>
<div class="font-body-md text-secondary mt-1">Financial markets, algorithmic trading, software development</div>
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mt-2">Python &middot; WebGL &middot; Android &middot; Generative AI</div>
</div>
</div>''',
NEW_EDU)

# ─── 5. skills.html language chips ───────────────────────────────────────────
print('\n=== 9. skills.html: language chips ===')
rw('skills.html',
'''<div class="flex flex-wrap gap-3 reveal stagger-1">
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">English</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Suomi</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Swedish</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Arabic</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Turkish</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Urdu</span>
</div>''',
'''<div class="flex flex-wrap gap-3 reveal stagger-1">
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">English (native)</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Urdu (native)</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Punjabi (native)</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Finnish — conversational, B1</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Arabic — basic</span>
<span class="font-label-sm text-label-sm bg-paper-white border border-smoke-gray text-void-black px-6 py-3 uppercase hover:bg-primary hover:text-white transition-colors cursor-default">Swedish — basic</span>
</div>''')

# ─── 6. projects.html ────────────────────────────────────────────────────────
print('\n=== 10. projects.html: replace gate ===')
rw('projects.html',
'''<section class="py-24 md:py-32 px-margin-mobile md:px-gutter bg-white">
<div class="max-w-[560px] mx-auto text-center">
<div class="mb-10 reveal flex justify-center">
<span class="material-symbols-outlined text-6xl text-smoke-gray" style="opacity:0.35;">lock</span>
</div>
<h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-void-black uppercase mb-6 reveal stagger-1">Client <span class="text-primary">Access Only.</span></h2>
<p class="font-body-md text-body-lg text-surface-container-highest mb-12 reveal stagger-2">Detailed project work and deliverables are shared directly with clients and prospective collaborators. If you\'re interested in seeing specific case studies relevant to your brief, get in touch and I\'ll share what\'s applicable.</p>
<div class="flex gap-4 justify-center flex-wrap reveal stagger-3">
<a href="contact.html" class="bg-primary text-void-black px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-void-black hover:text-white transition-colors font-bold btn-pulse">Pyydä pääsyä &rarr;</a>
<a href="work.html" class="border border-primary/50 text-primary px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-primary hover:text-void-black transition-colors font-bold">Katso kokemus</a>
</div>
</div>
</section>''',
'''<section class="py-24 md:py-32 px-margin-mobile md:px-gutter bg-white">
<div class="max-w-container-max mx-auto">
<div class="grid md:grid-cols-2 gap-6 mb-10">
<div class="border border-smoke-gray bg-paper-white p-8 reveal">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">&mdash; 01</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-4">This site (hassanmasood.fi)</div>
<div class="font-body-md text-body-md text-surface-container-highest">Designed and built end-to-end. Dark editorial layout, custom navigation, bilingual EN/FI. HTML/CSS/JS.</div>
</div>
<div class="border border-smoke-gray bg-paper-white p-8 reveal stagger-1">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">&mdash; 02</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-4">Harmony Horses</div>
<div class="font-body-md text-body-md text-surface-container-highest">Website for a Finnish luxury equestrian stable, concept to deploy.</div>
</div>
<div class="border border-smoke-gray bg-paper-white p-8 reveal stagger-2">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">&mdash; 03</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-4">Huawei Tech Arena 2025</div>
<div class="font-body-md text-body-md text-surface-container-highest">UI/UX interface for HarmonyOS (Vanilla JS &amp; WebGL). 3rd nationally.</div>
</div>
<div class="border border-smoke-gray bg-paper-white p-8 reveal stagger-3">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">&mdash; 04</div>
<div class="font-headline-lg text-xl text-void-black uppercase mb-4">Arctic Finds</div>
<div class="font-body-md text-body-md text-surface-container-highest">Profitable international e-commerce store, run independently.</div>
</div>
</div>
<div class="border border-primary/30 bg-void-black p-8 reveal">
<div class="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">&mdash; AI-augmented delivery</div>
<div class="font-body-md text-body-lg text-secondary">I build faster by combining business judgment with generative-AI tools — for research, data analysis, content, and full site builds — backed by an Oracle Cloud Infrastructure AI Foundations Associate certification.</div>
</div>
<div class="mt-12 flex gap-4 flex-wrap reveal">
<a href="contact.html" class="bg-primary text-void-black px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-void-black hover:text-white transition-colors font-bold btn-pulse">Get in touch &rarr;</a>
<a href="work.html" class="border border-primary/50 text-primary px-8 py-4 font-label-sm text-label-sm uppercase hover:bg-primary hover:text-void-black transition-colors font-bold">View experience</a>
</div>
</div>
</section>''')

print('\nAll HTML changes done.')
