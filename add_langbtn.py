import glob

DESKTOP_BTN = '<button id="lang-btn" onclick="window.__toggleLang&&window.__toggleLang()" class="font-label-sm text-label-sm border border-primary text-primary px-3 py-1 uppercase tracking-widest transition-colors hover:bg-primary hover:text-void-black" aria-label="Toggle language">EN</button>'
MOBILE_BTN  = '<button id="lang-btn-mobile" onclick="window.__toggleLang&&window.__toggleLang()" class="font-label-sm text-label-sm border border-primary text-primary px-4 py-2 uppercase tracking-widest transition-colors hover:bg-primary hover:text-void-black w-full text-center mt-2" aria-label="Toggle language">EN</button>'

CTA_ROOT = '<a class="hidden md:inline-flex bg-primary text-void-black px-6 py-2 font-label-sm text-label-sm uppercase hover:bg-white transition-colors items-center justify-center font-bold btn-pulse" href="contact.html">Ota yhteyttä</a>'
CTA_SUB  = '<a class="hidden md:inline-flex bg-primary text-void-black px-6 py-2 font-label-sm text-label-sm uppercase hover:bg-white transition-colors items-center justify-center font-bold btn-pulse" href="../contact.html">Ota yhteyttä</a>'
MOB_ROOT = '<a class="bg-primary text-void-black px-6 py-3 font-label-sm text-label-sm uppercase font-bold text-center mt-2" href="contact.html">Ota yhteyttä</a>'
MOB_SUB  = '<a class="bg-primary text-void-black px-6 py-3 font-label-sm text-label-sm uppercase font-bold text-center mt-2" href="../contact.html">Ota yhteyttä</a>'

files = sorted(glob.glob('*.html') + glob.glob('services/*.html'))
updated = 0
for path in files:
    c = open(path, encoding='utf-8').read()
    if 'id="lang-btn"' in c:
        print('Skip (already has btn): ' + path)
        continue
    orig = c
    norm = path.replace('\\', '/')
    in_sub = norm.startswith('services/')
    cta = CTA_SUB if in_sub else CTA_ROOT
    mob = MOB_SUB if in_sub else MOB_ROOT
    c = c.replace(cta, DESKTOP_BTN + '\n' + cta)
    c = c.replace(mob, mob + '\n' + MOBILE_BTN)
    if c != orig:
        open(path, 'w', encoding='utf-8').write(c)
        print('Updated: ' + path)
        updated += 1
    else:
        print('No match: ' + path)

print('Total updated: ' + str(updated))
