import urllib.request
import json
import urllib.parse
import sys

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

def search_commons(query, limit=10):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrnamespace=6&gsrlimit={limit}&prop=imageinfo&iiprop=url|thumburl|dimensions&iiurlwidth=1280&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'VitaleGeoIndexer/1.0 (https://www.vitalegeo.com.br; contact@vitalegeo.com.br)'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for p in pages.values():
                title = p.get('title', '')
                # Ignora PDFs, djvu e documentos
                if any(title.lower().endswith(ext) for ext in ['.pdf', '.djvu', '.svg', '.tif', '.tiff']):
                    continue
                ii = p.get('imageinfo', [{}])[0]
                url = ii.get('thumburl') or ii.get('url')
                orig = ii.get('url')
                w = ii.get('width')
                h = ii.get('height')
                if w and h:
                    aspect = w / h
                    # Queremos imagens de boa resolução e aspecto paisagem (aprox 16:9 ou 4:3)
                    results.append({
                        'title': title,
                        'url': url,
                        'orig': orig,
                        'w': w,
                        'h': h,
                        'aspect': round(aspect, 2)
                    })
            return results
    except Exception as e:
        print(f"Error searching '{query}': {e}")
        return []

if __name__ == '__main__':
    q = sys.argv[1] if len(sys.argv) > 1 else 'nuclear icebreaker'
    for r in search_commons(q):
        print(f"{r['title']} | {r['w']}x{r['h']} (aspect: {r['aspect']})")
        print(f"  {r['url']}")
