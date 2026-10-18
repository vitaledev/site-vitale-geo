import urllib.request
import io
import os
from PIL import Image

HEADERS = {'User-Agent': 'VitaleGeo/1.0 (contact@vitalegeo.com)'}

targets = [
    {
        'slug': 'ranking-maiores-fronteiras-do-mundo',
        'url': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Border_between_Canada_and_the_USA_at_the_49th_parallel_%2853023778470%29.jpg/1280px-Border_between_Canada_and_the_USA_at_the_49th_parallel_%2853023778470%29.jpg',
        'file': 'public/assets/img/blog/ranking-maiores-fronteiras-do-mundo.jpg'
    },
    {
        'slug': 'rio-danubio-arteria-europa',
        'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg/1280px-View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg',
        'file': 'public/assets/img/blog/rio-danubio-arteria-europa.jpg'
    },
    {
        'slug': 'represa-tres-gargantas-impacto',
        'url': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/ThreeGorgesDam-China2009.jpg/1280px-ThreeGorgesDam-China2009.jpg',
        'file': 'public/assets/img/blog/represa-tres-gargantas-impacto.jpg'
    },
    {
        'slug': 'lago-tanganica-fronteiras',
        'url': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Lake_Tanganyika.jpg/1280px-Lake_Tanganyika.jpg',
        'file': 'public/assets/img/blog/lago-tanganica-fronteiras.jpg'
    },
    {
        'slug': 'gibraltar-reino-unido',
        'url': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Gibraltar_View_of_the_Rock_from_La_Linea.jpg/1280px-Gibraltar_View_of_the_Rock_from_La_Linea.jpg',
        'file': 'public/assets/img/blog/gibraltar-reino-unido.jpg'
    },
    {
        'slug': 'canal-de-corinto-grecia',
        'url': 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Korinth_Canal_N_2019.jpg/1280px-Korinth_Canal_N_2019.jpg',
        'file': 'public/assets/img/blog/canal-de-corinto-grecia.jpg'
    }
]

for t in targets:
    slug = t['slug']
    url = t['url']
    target_path = t['file']
    print(f"Downloading {slug} from {url[:60]}...")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    
    im = Image.open(io.BytesIO(data))
    if im.mode in ('RGBA', 'P'):
        im = im.convert('RGB')
    
    im.save(target_path, format='JPEG', quality=90)
    print(f"  Saved {target_path}: {im.size} {im.format} ({os.path.getsize(target_path)} bytes)")

print("\nAll 6 files downloaded and saved!")
