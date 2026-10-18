import os
from PIL import Image

suspicious_files = [
    'canal-de-kra.jpg',
    'cooch-behar-enclaves.jpg',
    'derby-line-biblioteca-fronteira.jpg',
    'fronteira-egito-libia-meridiano-25.jpg',
    'fronteira-franca-brasil-oiapoque.jpg',
    'gibraltar-reino-unido.jpg',
    'historia-do-vietna.jpg',
    'lago-tanganica-fronteiras.jpg',
    'represa-tres-gargantas-impacto.jpg',
    'canal-de-corinto-grecia.jpg',
    'ranking-maiores-fronteiras-do-mundo.jpg',
    'rio-danubio-arteria-europa.jpg',
    'corredor-de-lobito-ferrovia.jpg',
    'faixa-de-caprivi-namibia.jpg',
    'passagem-de-drake-maritima.jpg',
    'geopolitica-do-ira.jpg',
    'ilha-market-fronteira-ziguezague.jpg',
    'estreitos-sunda-lombok.jpg',
    'mongolia-vazio-demografico.jpg'
]

# Let's inspect where these came from in assets/js/posts.js
import re
with open('assets/js/posts.js', 'r', encoding='utf-8') as f:
    posts_text = f.read()

for sf in suspicious_files:
    slug = sf.rsplit('.', 1)[0]
    # find entry in posts.js
    pattern = r'\{\s*titulo:[^}]+?' + re.escape(slug) + r'/[\s\S]*?\}'
    m = re.search(pattern, posts_text)
    if not m:
        # try search by slug first
        pattern2 = r'\{\s*titulo:[^}]*?link:\s*"' + re.escape(slug) + r'/"[^}]*?\}'
        m = re.search(pattern2, posts_text)
    
    img_in_js = 'NOT_FOUND'
    if m:
        img_m = re.search(r'img:\s*"([^"]+)"', m.group(0))
        if img_m:
            img_in_js = img_m.group(1)
            
    local_p = os.path.join('public/assets/img/blog', sf)
    local_info = 'MISSING'
    if os.path.exists(local_p):
        im = Image.open(local_p)
        local_info = f"{im.size} {im.format}"
        
    print(f"{slug:<35} | local: {local_info:<15} | js_img: {img_in_js}")
