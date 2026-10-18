import urllib.request
import json
import urllib.parse

titles = [
    'File:ThreeGorgesDam-China2009.jpg',
    'File:Lake Tanganyika.jpg',
    'File:Rock of Gibraltar from Spain.jpg',
    'File:Suez Canal and Cape Route.png',
    'File:Peace Arch (Canada–United States border).jpg'
]

headers = {'User-Agent': 'VitaleGeo/1.0 (contact@vitalegeo.com)'}

for t in titles:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url|size&iiurlwidth=1280&format=json"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        for page in data['query']['pages'].values():
            if 'imageinfo' in page:
                info = page['imageinfo'][0]
                print(f"{t}:")
                print(f"  thumburl: {info.get('thumburl')}")
                print(f"  origurl:  {info.get('url')}")
                print(f"  size:     {info.get('width')}x{info.get('height')}")
            else:
                print(f"{t}: NOT FOUND")
