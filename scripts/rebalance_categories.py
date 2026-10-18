import os
import glob
import re

# Mapeamento de reclassificacao para equilibrar o acervo
reclassifications = {
    # Urbanismo
    "nusantara-nova-capital-indonesia.md": "Urbanismo",
    "hipercidades-2100.md": "Urbanismo",
    "nicosia-cidade-dividida.md": "Urbanismo",
    "porto-chancay.md": "Urbanismo",
    
    # Cartografia
    "circulo-valeriepieris.md": "Cartografia",
    "ponto-nemo.md": "Cartografia",
    "fronteira-egito-libia-meridiano-25.md": "Cartografia",
    "kiribati-fuso-horario.md": "Cartografia",
    "estreito-de-bering-tunel.md": "Cartografia",
    
    # Historia
    "couto-misto-microestado.md": "História",
    "guerra-uisque.md": "História",
    "ilha-faisoes.md": "História",
    "svalbard-tratado-artico.md": "História",
    "ceuta-e-melilla.md": "História",
    "gibraltar-reino-unido.md": "História",
    "cooch-behar-enclaves.md": "História",
    "faixa-de-caprivi-namibia.md": "História",
    "corredor-de-wakhan.md": "História",
    "enclave-de-cabinda-angola.md": "História",
    "desaparecimento-mar-de-aral.md": "História",
    
    # Rankings
    "canada-pais-dos-lagos.md": "Rankings",
    "mongolia-vazio-demografico.md": "Rankings",
    "lago-tanganica-fronteiras.md": "Rankings",
    
    # Curiosidades
    "area-51.md": "Curiosidades",
    "bir-tawil.md": "Curiosidades",
    "bolivia-marinha-sem-mar.md": "Curiosidades",
    "busingen-enclave-alemao.md": "Curiosidades",
    "campione-d-italia.md": "Curiosidades",
    "llivia-enclave-espanhol.md": "Curiosidades",
    "nahwa-madha.md": "Curiosidades",
    "point-roberts.md": "Curiosidades",
    "vennbahn-enclaves-belgas.md": "Curiosidades",
    "ilha-market-fronteira-ziguezague.md": "Curiosidades",
    "fronteira-mais-curta.md": "Curiosidades",
    "fronteira-mais-louca.md": "Curiosidades",
    "baarle-fronteira.md": "Curiosidades"
}

# 1. Atualizar src/content/blog/*.md
blog_dir = r"D:\Dev\vitale-geo\src\content\blog"
count_updated_md = 0

for filename, new_cat in reclassifications.items():
    filepath = os.path.join(blog_dir, filename)
    if os.path.exists(filepath):
        content = open(filepath, "r", encoding="utf-8").read()
        # Substituir categoria no frontmatter
        new_content = re.sub(
            r'categoria:\s*["\']?[^"\'\r\n]+["\']?',
            f'categoria: "{new_cat}"',
            content,
            count=1
        )
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            count_updated_md += 1

print(f"Atualizados {count_updated_md} arquivos markdown em src/content/blog/")

# 2. Atualizar posts.js em public/assets/js/posts.js e assets/js/posts.js
slug_to_cat = {os.path.splitext(k)[0]: v for k, v in reclassifications.items()}

for js_path in [r"D:\Dev\vitale-geo\public\assets\js\posts.js", r"D:\Dev\vitale-geo\assets\js\posts.js"]:
    if os.path.exists(js_path):
        js_content = open(js_path, "r", encoding="utf-8").read()
        # Para cada item em posts.js, encontrar link correspondente e atualizar categoria
        for slug, new_cat in slug_to_cat.items():
            # Padrao: categoria: "...", link: "...slug..."
            # Ou link logo apos categoria
            pattern = re.compile(
                r'(categoria:\s*["\'][^"\']+["\'],\s*(?:data:[^,]+,)?\s*(?:img:[^,]+,)?\s*link:\s*["\'](?:/blog/|blog/)?' + re.escape(slug) + r'/?["\'])',
                re.DOTALL
            )
            # Vamos usar uma abordagem por bloco de objeto
        
        # Abordagem regex mais robusta por objeto { ... }
        def replace_cat(match):
            block = match.group(0)
            for slug, new_cat in slug_to_cat.items():
                if f'"{slug}/"' in block or f"'{slug}/'" in block or f'"{slug}"' in block or f"'{slug}'" in block:
                    block = re.sub(r'categoria:\s*["\'][^"\']+["\']', f'categoria: "{new_cat}"', block)
                    break
            return block

        new_js = re.sub(r'\{[^{}]*link:[^{}]*\}', replace_cat, js_content)
        with open(js_path, "w", encoding="utf-8") as f:
            f.write(new_js)
        print(f"Atualizado {js_path}")
