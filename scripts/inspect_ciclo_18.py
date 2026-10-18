import re

with open('scripts/gerar-ciclo-18-out.cjs', 'r', encoding='utf-8') as f:
    text = f.read()

# match postsData blocks
blocks = re.findall(r'\{\s*slug:\s*"([^"]+)"[\s\S]*?img:\s*"([^"]+)"', text)
print(f"Total posts found in ciclo: {len(blocks)}")
for slug, img in blocks:
    print(f"{slug:<35} | {img}")
