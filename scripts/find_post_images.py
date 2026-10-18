from search_commons import search_commons
import json

queries = {
    "urbanismo_barcelona": "Eixample Barcelona aerial",
    "urbanismo_brasilia": "Brasilia Congresso Nacional",
    "cartografia_greenwich": "Royal Observatory Greenwich",
    "rankings_lapaz": "La Paz Bolivia city view",
    "rankings_cazaquistao": "Astana skyline Kazakhstan",
    "historia_tordesilhas": "Tratado de Tordesillas",
    "historia_constantinopla": "Siege of Constantinople 1453",
    "cartografia_globo": "World map projections",
    "curiosidades_equador": "Marco Zero Macapa Equador"
}

output = {}
for key, q in queries.items():
    res = search_commons(q, limit=5)
    if res:
        output[key] = res[0]['url']
        print(f"FOUND {key}: {res[0]['url']}")
    else:
        print(f"NOT FOUND: {key}")

with open("scripts/found_images.json", "w", encoding="utf-8") as f:
    json.dump(output, f, indent=2)
