import os
import glob
import re

files = glob.glob(r"D:\Dev\vitale-geo\src\content\blog\*.md")
with open(r"D:\Dev\vitale-geo\scripts\posts_summary.txt", "w", encoding="utf-8") as out:
    for f in sorted(files):
        content = open(f, encoding="utf-8", errors="ignore").read()
        cat_match = re.search(r'categoria:\s*["\']?([^"\'\r\n]+)', content)
        title_match = re.search(r'titulo:\s*["\']?([^"\'\r\n]+)', content)
        cat = cat_match.group(1).strip() if cat_match else "Sem Categoria"
        title = title_match.group(1).strip() if title_match else ""
        slug = os.path.basename(f)
        out.write(f"{slug} | {cat} | {title}\n")

print("Salvo em posts_summary.txt")
