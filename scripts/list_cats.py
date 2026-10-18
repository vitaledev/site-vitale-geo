import os
import glob
import re

posts_dir = r"D:\Dev\vitale-geo\src\content\blog"
files = glob.glob(os.path.join(posts_dir, "*.md"))
cats = {}

for f in files:
    content = open(f, encoding="utf-8", errors="ignore").read()
    cat_match = re.search(r'categoria:\s*["\']?([^"\'\r\n]+)', content)
    title_match = re.search(r'titulo:\s*["\']?([^"\'\r\n]+)', content)
    cat = cat_match.group(1).strip() if cat_match else "Sem Categoria"
    title = title_match.group(1).strip() if title_match else os.path.basename(f)
    cats.setdefault(cat, []).append((os.path.basename(f), title))

print(f"Total de posts em src/content/blog: {len(files)}")
for cat, items in sorted(cats.items(), key=lambda x: len(x[1]), reverse=True):
    print(f"\n=== {cat} ({len(items)}) ===")
    for fname, title in items:
        print(f"  {fname} -> {title}")
