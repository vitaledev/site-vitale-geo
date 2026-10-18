import urllib.request
import time

urls = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/26/Barcelona_aerial_view_%28Pla%C3%A7a_de_les_Gl%C3%B2ries_Catalanes%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Congresso_Nacional_em_Bras%C3%ADlia.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/Mercator_projection_SW.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9e/Royal_Observatory_Greenwich_London.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/La_Paz_from_Killi_Killi.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/df/Charyn_Canyon%2C_Kazakhstan_%282019%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/Tratado_de_Tordesillas.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/The_Siege_of_Constantinople_%281453%29.jpg'
]

headers = {'User-Agent': 'VitaleGeoBot/1.0 (https://www.vitalegeo.com.br; contato@vitalegeo.com.br)'}
for u in urls:
    req = urllib.request.Request(u, headers=headers)
    try:
        res = urllib.request.urlopen(req, timeout=8)
        print(f"200 OK: {u}")
    except Exception as e:
        print(f"FAIL: {u} -> {e}")
    time.sleep(0.3)
