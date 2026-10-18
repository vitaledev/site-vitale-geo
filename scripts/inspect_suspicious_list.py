import os
from PIL import Image

files = [
    'ranking-maiores-fronteiras-do-mundo.jpg',
    'rio-danubio-arteria-europa.jpg',
    'corredor-de-lobito-ferrovia.jpg',
    'canal-de-corinto-grecia.jpg',
    'faixa-de-caprivi-namibia.jpg',
    'passagem-de-drake-maritima.jpg',
    'geopolitica-do-ira.jpg',
    'historia-do-vietna.jpg',
    'derby-line-biblioteca-fronteira.jpg',
    'fronteira-egito-libia-meridiano-25.jpg',
    'fronteira-franca-brasil-oiapoque.jpg',
    'gibraltar-reino-unido.jpg',
    'lago-tanganica-fronteiras.jpg',
    'represa-tres-gargantas-impacto.jpg',
    'canal-de-kra.jpg',
    'cooch-behar-enclaves.jpg'
]

for fname in files:
    p = os.path.join('public/assets/img/blog', fname)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{fname:<40} | {im.size} | {im.format}")
    else:
        print(f"{fname:<40} | MISSING")
