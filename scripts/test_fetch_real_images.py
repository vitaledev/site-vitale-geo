import urllib.request
import io
from PIL import Image

HEADERS = {'User-Agent': 'VitaleGeo/1.0 (contact@vitalegeo.com)'}

urls = {
    'ranking-maiores-fronteiras-do-mundo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg/1280px-Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg',
    'rio-danubio-arteria-europa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg/1280px-View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg',
    'represa-tres-gargantas-impacto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ThreeGorgesDam-China2009.jpg/1280px-ThreeGorgesDam-China2009.jpg',
    'lago-tanganica-fronteiras': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lake_Tanganyika.jpg/1280px-Lake_Tanganyika.jpg',
    'gibraltar-reino-unido': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rock_of_Gibraltar_from_Spain.jpg/1280px-Rock_of_Gibraltar_from_Spain.jpg',
    'canal-de-corinto-grecia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Corinth_Canal_in_Greece.jpg/1280px-Corinth_Canal_in_Greece.jpg',
    'crise-mar-vermelho-rotas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Suez_Canal_and_Cape_Route.png/1280px-Suez_Canal_and_Cape_Route.png'
}

for slug, url in urls.items():
    print(f"Fetching {slug}...")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
        im = Image.open(io.BytesIO(data))
        print(f"  OK: {im.size} {im.format} ({len(data)} bytes)")
    except Exception as e:
        print(f"  FAILED: {e}")
