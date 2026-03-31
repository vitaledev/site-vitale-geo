from pathlib import Path

root = Path(r"d:\estudos\programação\desenvolvimento web\html\Projetos com  IA\vitale-geo")
snippet = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6879770260785828" crossorigin="anonymous"></script>'
modified = []

for p in sorted(root.rglob('*.html')):
    text = p.read_text(encoding='utf-8', errors='replace')
    if 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6879770260785828' in text:
        continue
    idx = text.lower().rfind('</body>')
    if idx != -1:
        text = text[:idx] + snippet + '\n' + text[idx:]
    else:
        text = text + '\n' + snippet + '\n'
    p.write_text(text, encoding='utf-8')
    modified.append(str(p))

print('modified', len(modified))
for m in modified:
    print(m)
