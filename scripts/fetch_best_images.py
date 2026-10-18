import sys
sys.path.append('scripts')
from search_commons import search_commons

searches = {
    "toquio": "Shinjuku skyline Tokyo night",
    "barcelona": "Barcelona Eixample grid",
    "brasilia": "Brasilia Plano Piloto Esplanada",
    "projecoes": "Gall-Peters projection world map",
    "greenwich": "Royal Observatory Greenwich Prime Meridian line",
    "vaticano": "Vatican City St Peter square aerial",
    "lapaz": "La Paz Illimani skyline",
    "cazaquistao": "Astana skyline Baiterek",
    "tordesilhas": "Tratado de Tordesillas 1494",
    "constantinopla": "The Siege of Constantinople 1453",
    "equador": "Marco Zero Macapa Equador"
}

results = {}
for k, q in searches.items():
    res = search_commons(q, limit=5)
    for item in res:
        # Avoid maps if looking for cities, avoid bombing, etc.
        t = item['title'].lower()
        if 'bombing' in t or 'war' in t:
            continue
        # Use first clean image
        clean_url = item['url'].split('?')[0] # remove utm params
        results[k] = clean_url
        print(f"[{k}] {item['title']}\n  -> {clean_url}")
        break

import json
with open('scripts/verified_post_images.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)
