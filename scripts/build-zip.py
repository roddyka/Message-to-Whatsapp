# Gera o pacote para enviar na Chrome Web Store: python scripts/build-zip.py
import json, os, zipfile

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
os.chdir(ROOT)

version = json.load(open('manifest.json', encoding='utf-8'))['version']
files = [
    'manifest.json', 'sidepanel.html', 'css/sidepanel.css',
    'js/background.js', 'js/i18n.js', 'js/sidepanel.js',
    'images/16.png', 'images/32.png', 'images/48.png', 'images/128.png',
]
files += ['_locales/%s/messages.json' % l for l in sorted(os.listdir('_locales'))]

os.makedirs('dist', exist_ok=True)
out = 'dist/message-to-whats-v%s.zip' % version
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
        z.write(f, f)

print('%s (%d files, %d KB)' % (out, len(files), os.path.getsize(out) // 1024))
