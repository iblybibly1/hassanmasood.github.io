import glob

IMG1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOChsInUwqOB6Hp2Bv_L3Uuw7q1nHugsO0rZQtizZF7tK9wU7J3EH8R0he535IRS0407rxiI7dJ4lS_NqlPX5kTdb0PGg_DdrR6V9ZoSYs6oIMqe_1UIBfVCqb6mlV_LDQvYzxrHgSrQLUbD7cXkh6dSFCu58tXY4b0r_KVPkL0GYQiWVEsOzyvnTCieHeu1eAXdsc7tJBBfSq2oHtUQZXVpE0DVyhHlB__hiGQvM2I8f-_9SkyZlJ4sdMyvi2omtRRd2YMoqHQpFN=w3840'
IMG2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8SUwqN4Ci22bJrJm5wRBiadJ7oQ89yAAKzrhixnspz1hxlcIbKakLGIyJvxLVVJhWCzyE0vziGOo1mgvThg7I-gIAHgGHNgMhFQCnEw_W3VLCD2AY4YYoWqNPdmHeE1u3g-7D6oFHPJPL2fgeIXoVhjsUznO5zvblxELRXUV6tfmHOfc9IBOvLhjKFZr9kiCr22e3r70rwsuq3McRNtoR4Q15GRJI19pqeXXvDPWWy5ktpyKwsvhP_jMIiNj7MH5zlpmwcdn9Dcl5=w3840'

BG = ('\n<div class="absolute inset-0 z-0 overflow-hidden">'
      '<img src="' + IMG1 + '" alt="" aria-hidden="true" '
      'class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen animate-drift" style="image-rendering:auto;"/>'
      '</div>'
      '<div class="absolute inset-0 z-0 overflow-hidden">'
      '<img src="' + IMG2 + '" alt="" aria-hidden="true" '
      'class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply animate-drift" style="animation-delay:-10s;image-rendering:auto;"/>'
      '</div>')

DRIFT_CSS = ('\n        @keyframes drift {'
             '\n            0% { transform: scale(1) translate(0, 0); }'
             '\n            50% { transform: scale(1.08) translate(3%, 2%); }'
             '\n            100% { transform: scale(1) translate(0, 0); }'
             '\n        }'
             '\n        .animate-drift {'
             '\n            animation: drift 15s ease-in-out infinite alternate;'
             '\n        }')

HERO = '<section class="relative py-24 md:py-32 px-margin-mobile md:px-gutter bg-void-black overflow-hidden">'

files = sorted(glob.glob('*.html') + glob.glob('services/*.html'))
updated = 0
for path in files:
    c = open(path, encoding='utf-8').read()
    orig = c

    if path == 'index.html':
        c = c.replace('animation: drift 20s ease-in-out infinite alternate;',
                      'animation: drift 15s ease-in-out infinite alternate;')
        c = c.replace('50% { transform: scale(1.05) translate(2%, 2%); }',
                      '50% { transform: scale(1.08) translate(3%, 2%); }')
    else:
        if HERO in c and 'animate-drift' not in c:
            c = c.replace(HERO, HERO + BG, 1)
            c = c.replace('</style>', DRIFT_CSS + '\n    </style>', 1)

    if c != orig:
        open(path, 'w', encoding='utf-8').write(c)
        print('Updated: ' + path)
        updated += 1

print('Total: ' + str(updated))
