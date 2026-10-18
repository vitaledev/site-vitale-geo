import glob

for f in glob.glob('src/content/blog/*.md'):
    with open(f, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    for i, l in enumerate(lines[:15]):
        if 'tempoLeitura:' in l:
            val = l.split('tempoLeitura:')[1].strip()
            if not (val.startswith('"') or val.startswith("'")):
                print("UNQUOTED:", f, "Line:", i+1, "Val:", val)
