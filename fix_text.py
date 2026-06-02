import os

root = r'C:\Users\iblyb\hassanmasood-website'

# Collect HTML files, skip harmony and client-preview
html_files = []
for dirpath, dirnames, filenames in os.walk(root):
    if 'harmony' in dirpath:
        continue
    for fn in filenames:
        if fn.endswith('.html') and fn not in ('client-preview.html', 'harmony-preview.html', 'projects.html'):
            html_files.append(os.path.join(dirpath, fn))

print("Files found:")
for f in html_files:
    print(f)

# The mojibake is caused by UTF-8 bytes being decoded with cp1252 (Windows-1252)
# then stored back to UTF-8. The fix is to re-encode with latin-1 then decode with UTF-8.
# But since the file is already mixed (some content is correct), we need targeted replacements.
#
# The actual byte sequences in the file (as UTF-8):
# Em dash (U+2014) bytes: E2 80 94
#   -> cp1252 decode: â (E2) + euro (80->20AC) + right-dquote (94->201D)
#   -> stored in UTF-8 as: E2 + E2 82 AC + E2 80 9D (3 chars, 7 bytes)
# En dash (U+2013) bytes: E2 80 93
#   -> cp1252: â + € + left-dquote (93->201C)
# Right single quote (U+2019) bytes: E2 80 99
#   -> cp1252: â + € + (99 in cp1252 = U+2122 trademark ™)
#   Actually cp1252 0x99 = U+2122 TM symbol. So it becomes â€™ where ™=U+2122
# Left single quote (U+2018) bytes: E2 80 98
#   -> cp1252 0x98 = U+02DC tilde ~ becomes â€˜
# Left double quote (U+201C) bytes: E2 80 9C
#   -> cp1252 0x9C = U+0153 oe ligature becomes â€œ
# Right double quote (U+201D) bytes: E2 80 9D
#   -> cp1252 0x9D = U+2019 becomes â€ (then nothing visible)
#
# So the approach: read bytes, for each known bad byte sequence, replace with correct bytes.

byte_replacements = [
    # (bad_bytes_in_utf8, correct_bytes_in_utf8, description)
    # em dash E2 80 94 -> wrongly decoded -> E2 + E2 82 AC + E2 80 9D -> re-UTF8 encode
    # Just replace the raw byte patterns:
    (b'\xe2\x80\x94', b'\xe2\x80\x94', 'em dash - already correct'),
]

# Alternative: use string-level replacement after reading as UTF-8
# The file stores these wrong sequences as proper UTF-8 of wrong chars.
# When we read index.html as UTF-8 and check the chars around the mojibake:
# We found: 0xe2 '?' 0x20ac '?' 0x201d '?' (from hex dump)
# So the 3-char sequence is: U+00E2, U+20AC, U+201D = em dash mojibake
# Let's do string replacements using those exact Unicode codepoints:

str_replacements = [
    # (wrong_string, correct_string)
    ('â€”', '—'),  # em dash: â€" -> —
    ('â€–', '–'),  # en dash: â€" -> – (if it appears)
    ('â€™', '’'),  # right single quote: â€™ -> '
    ('â€˜', '‘'),  # left single quote: â€˜ -> '
    ('â€œ', '“'),  # left double quote: â€œ -> "
    ('â€\x9d',   '”'),  # right double quote: â€\x9d -> "
    ('Ã¤',       'ä'),  # ä: Ã¤ -> ä
    ('Ã¶',       'ö'),  # ö: Ã¶ -> ö
    ('Ã¥',       'å'),  # å: Ã¥ -> å
    ('Ã„',       'Ä'),  # Ä: Ã„ -> Ä (0x84=U+201E in cp1252)
    ('Ã–',       'Ö'),  # Ö: Ã– -> Ö (0x96=U+2013)
    ('Â©',       '©'),  # ©: Â© -> ©
    ('Â·',       '·'),  # ·: Â· -> ·
    ('Â ',       ' '),  # nbsp: Â  -> nbsp
]

print("\nFixing mojibake patterns (string-level)...")
total_fixes = 0
for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    fixes_in_file = 0
    for pattern, replacement in str_replacements:
        count = content.count(pattern)
        if count > 0:
            content = content.replace(pattern, replacement)
            fixes_in_file += count
            print("  %s: replaced %d instances of U+%04X%04X -> U+%04X" % (
                os.path.basename(fpath), count,
                ord(pattern[0]) if len(pattern) > 0 else 0,
                ord(pattern[1]) if len(pattern) > 1 else 0,
                ord(replacement[0]) if len(replacement) > 0 else 0
            ))

    if fixes_in_file > 0:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        total_fixes += fixes_in_file

print("\nTotal replacements made: %d" % total_fixes)

# Now fix footer links that are in English across non-index pages
# The lang.js handles this dynamically but the HTML default should be FI
footer_link_fixes = [
    # (English text in footer ul a, Finnish replacement)
    ('>Home<', '>Etusivu<'),
    ('>Web Design<', '>Verkkosuunnittelu<'),
    ('>All Services<', '>Kaikki palvelut<'),
    ('>Contact Page<', '>Yhteystiedot<'),
]

print("\nFixing English footer links...")
footer_fixes = 0
for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False
    for pattern, replacement in footer_link_fixes:
        count = content.count(pattern)
        if count > 0:
            content = content.replace(pattern, replacement)
            footer_fixes += count
            changed = True
            print("  %s: replaced %d x footer link %r" % (os.path.basename(fpath), count, pattern))

    if changed:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Footer link fixes: %d" % footer_fixes)
print("All done!")
