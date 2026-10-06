# Gera as imagens da Chrome Web Store (PNG 24 bits, sem alfa): python store-assets/src/render.py
import functools, http.server, os, subprocess, threading, tempfile
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'store-assets')
CHROME = r'C:/Program Files/Google/Chrome/Application/chrome.exe'
PAGES = [
    ('screenshot-1', 1280, 800), ('screenshot-2', 1280, 800), ('screenshot-3', 1280, 800),
    ('screenshot-4', 1280, 800), ('promo-small', 440, 280), ('marquee', 1400, 560),
]

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
handler.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

profile = tempfile.mkdtemp()
for name, w, h in PAGES:
    raw = os.path.join(profile, name + '.png')
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars',
                    '--force-device-scale-factor=1', '--user-data-dir=' + profile,
                    '--window-size=%d,%d' % (w, h), '--virtual-time-budget=4000',
                    '--screenshot=' + raw,
                    'http://127.0.0.1:%d/store-assets/src/%s.html' % (port, name)],
                   check=True, capture_output=True, timeout=90)
    img = Image.open(raw)
    if img.size != (w, h):
        img = img.crop((0, 0, w, h))
    img.convert('RGB').save(os.path.join(OUT, name + '.png'))
    print(name, img.size, '->', Image.open(os.path.join(OUT, name + '.png')).mode)
srv.shutdown()
