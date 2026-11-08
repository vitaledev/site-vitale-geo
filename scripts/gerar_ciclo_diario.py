# -*- coding: utf-8 -*-
"""
Gerador de Conteúdo do Ciclo Diário VitaleGeo - 28 de Outubro de 2026
Gera os 10 posts completos em HTML e Markdown, atualiza posts.js, gera sitemap e cria 10 roteiros de vídeo.
"""

import os
import sys
import json
import re
import subprocess

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from scripts.dados_posts_parte1 import POSTS_PARTE_1
from scripts.dados_posts_parte2 import POSTS_PARTE_2
from scripts.dados_roteiros_videos import ROTEIROS_VIDEOS

BASE_DIR = r"D:\Dev\vitale-geo"
BLOG_DIR = os.path.join(BASE_DIR, "blog")
CONTENT_DIR = os.path.join(BASE_DIR, "src", "content", "blog")
POSTS_JS = os.path.join(BASE_DIR, "assets", "js", "posts.js")
MODELO_HTML = os.path.join(BASE_DIR, "_modelos", "modelo-post.html")
ROTEIROS_DIR = r"D:\Obsidian\Vida nova\Projetos\VitaleGeo\Roteiros"

TODOS_POSTS = POSTS_PARTE_1 + POSTS_PARTE_2

def gerar_conteudo_html(post):
    """Gera o HTML interno do artigo (CONTEUDO)"""
    # 1. Cards da Ficha Técnica
    cards_html = ['<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">']
    for card in post["cards"]:
        cards_html.append(f'''    <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
        <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{card["rotulo"]}</div>
        <div class="text-sm font-bold text-amber-400 mt-1">{card["valor"]}</div>
    </div>''')
    cards_html.append('</div>')
    
    # 2. Lead
    lead_html = f'<p class="lead text-xl text-slate-200">\n    {post["lead"]}\n</p>'
    
    # 3. Seções H2
    secoes_html = []
    for s in post["secoes"]:
        secoes_html.append(f'<h2>{s["h2"]}</h2>')
        for p in s["paragrafos"]:
            secoes_html.append(f'<p>{p}</p>')
            
    # 4. Citação
    cit = post["citacao"]
    cit_html = f'''<blockquote>
    <p>"{cit["texto"]}"</p>
    <footer class="font-mono text-xs text-amber-400 mt-2">— {cit["autor"]}</footer>
</blockquote>'''

    # 5. Tabela
    tab = post["tabela"]
    thead_ths = "".join([f'<th class="p-3 font-semibold">{col}</th>' for col in tab["colunas"]])
    tbody_trs = []
    for row in tab["linhas"]:
        tds = []
        for i, val in enumerate(row):
            if i == 0:
                tds.append(f'<td class="p-3 font-bold text-white">{val}</td>')
            elif i == 1:
                tds.append(f'<td class="p-3 text-amber-400">{val}</td>')
            else:
                tds.append(f'<td class="p-3 text-slate-300">{val}</td>')
        tbody_trs.append(f'<tr>{"".join(tds)}</tr>')
    
    tabela_html = f'''<div class="my-10 overflow-x-auto not-prose">
    <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">
        <i class="ph-bold ph-table text-amber-400"></i> {tab["titulo"]}
    </h3>
    <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
        <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
            <tr>{thead_ths}</tr>
        </thead>
        <tbody class="divide-y divide-white/5 text-slate-300">
            {"".join(tbody_trs)}
        </tbody>
    </table>
</div>'''

    # 6. Destaque Box
    dest = post["destaque_box"]
    destaque_html = f'''<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
        <i class="ph-bold ph-compass"></i> {dest["titulo"]}
    </h4>
    <p class="text-sm text-slate-300 leading-relaxed">
        {dest["texto"]}
    </p>
</div>'''

    # 7. Box de Retenção
    ret = post["retencao"]
    icone = "ph-game-controller" if ret["tipo"] == "jogo" else "ph-compass"
    retencao_html = f'''<div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
    <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
        <i class="ph-fill {icone} text-xl"></i>
    </div>
    <h4 class="text-white font-heading font-bold text-base mb-1">Exploração Interativa VitaleGeo</h4>
    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">{ret["chamada"]}</p>
    <a href="{ret["url"]}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
        <i class="ph-bold ph-arrow-up-right"></i> {ret["texto_botao"]}
    </a>
</div>'''

    # 8. FAQ
    faqs_items = []
    for f in post["faq"]:
        faqs_items.append(f'''    <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
        <h4 class="text-sm font-bold text-white mb-2">{f["pergunta"]}</h4>
        <p class="text-xs text-slate-400 leading-relaxed">{f["resposta"]}</p>
    </div>''')
    
    faq_html = f'''<div class="my-10 not-prose">
    <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes (FAQ)
    </h3>
    <div class="space-y-3">
{"".join(faqs_items)}
    </div>
</div>'''

    partes = [
        "\n".join(cards_html),
        lead_html,
        "\n\n".join(secoes_html),
        cit_html,
        tabela_html,
        destaque_html,
        retencao_html,
        faq_html
    ]
    return "\n\n".join(partes)


def gerar_markdown(post):
    """Gera o arquivo .md com frontmatter tipado para Astro"""
    frontmatter = f'''---
titulo: "{post['titulo']}"
resumo: "{post['resumo']}"
categoria: "{post['categoria']}"
data: "{post['data']}"
img: "{post['img']}"
tempoLeitura: "{post['tempo_leitura']}"
destaque: false
---

{post['lead']}

'''
    corpo = []
    for s in post["secoes"]:
        corpo.append(f"## {s['h2']}\n")
        for p in s["paragrafos"]:
            corpo.append(f"{p}\n")
            
    cit = post["citacao"]
    cit_md = f'''> "{cit['texto']}"
>
> — *{cit['autor']}*
'''
    corpo.append(cit_md)
    
    # Tabela Markdown
    tab = post["tabela"]
    tab_md = [f"### {tab['titulo']}\n"]
    tab_md.append("| " + " | ".join(tab["colunas"]) + " |")
    tab_md.append("| " + " | ".join([":---"] * len(tab["colunas"])) + " |")
    for row in tab["linhas"]:
        tab_md.append("| " + " | ".join(row) + " |")
    corpo.append("\n".join(tab_md) + "\n")
    
    # Destaque
    dest = post["destaque_box"]
    dest_md = f'''<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
        <i class="ph-bold ph-compass"></i> {dest['titulo']}
    </h4>
    <p class="text-sm text-slate-300 leading-relaxed">
        {dest['texto']}
    </p>
</div>'''
    corpo.append(dest_md)
    
    # Retenção
    ret = post["retencao"]
    ret_md = f'''<div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
    <h4 class="text-white font-heading font-bold text-base mb-1">Exploração Interativa VitaleGeo</h4>
    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">{ret['chamada']}</p>
    <a href="{ret['url']}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
        <i class="ph-bold ph-arrow-up-right"></i> {ret['texto_botao']}
    </a>
</div>'''
    corpo.append(ret_md)
    
    # FAQ
    faq_md = ["### Perguntas Frequentes (FAQ)\n"]
    for f in post["faq"]:
        faq_md.append(f"**{f['pergunta']}**\n{f['resposta']}\n")
    corpo.append("\n".join(faq_md))
    
    return frontmatter + "\n".join(corpo)


def gerar_roteiro_markdown(v):
    """Gera o arquivo de roteiro de vídeo para o Obsidian"""
    conteudo = f'''# Video {v["numero"]} — {v["titulo"]}

### 1. Roteiro

{v["roteiro"]}

---

### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)

#### Prompt 1 — Abertura e Gancho Cartográfico (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the target geographic focal region.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "{v["grid_l1"]}"
Line 2 (intense crimson red #C8102E): "{v["grid_l2"]}"
Line 3 (pure white): "{v["grid_l3"]}"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji {v["emoji"]}.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.
```

#### Prompt 2 — O Protagonista Geográfico no Mapa (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite fly-over focusing directly on the primary territory and sovereign borders.
Text on screen: "{v["p2_title"]}" in uppercase white Orbitron Bold.
Badge: "{v["p2_badge"]}" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.
```

#### Prompt 3 — A Geografia Crítica e o Isolamento (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Intricate aerial satellite mapping highlighting the terrain barriers, waterways, or boundary lines.
Text on screen: "{v["p3_title"]}" in uppercase white Montserrat Bold.
Badge: "{v["p3_badge"]}" in intense amber or crimson red (#C8102E).
Camera: linear lateral pan shot across coordinates.
NO voice, NO speech, NO music. ONLY ambient telemetry SFX.
```

#### Prompt 4 — A Raiz Histórica e Geodésica (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite view displaying precise boundaries and historical treaty demarcations.
Text on screen: "{v["p4_title"]}" in uppercase white Orbitron Bold.
Badge: "{v["p4_badge"]}" in intense crimson red (#C8102E).
Camera: smooth linear zoom into the key coordinates.
NO voice, NO speech, NO music. ONLY subtle radar ping SFX.
```

#### Prompt 5 — O Ponto de Estrangulamento ou Divisão (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up orbital imagery illustrating the critical chokepoint, border anomaly, or resource basin.
Text on screen: "{v["p5_title"]}" in uppercase white Montserrat Bold.
Badge: "{v["p5_badge"]}" in intense amber or crimson red (#C8102E).
Camera: slow cinematic downward push-in over terrain relief.
NO voice, NO speech, NO music. ONLY low atmospheric rumble SFX.
```

#### Prompt 6 — O Fluxo de Cargas e Conexões Estratégicas (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Vector tactical map animation displaying shipping lanes, transport corridors, or transit schemes.
Text on screen: "{v["p6_title"]}" in uppercase white Orbitron Bold.
Badge: "{v["p6_badge"]}" in intense crimson red (#C8102E).
Camera: tracking along the glowing vector line across the sea or continent.
NO voice, NO speech, NO music. ONLY navigational telemetry pulse SFX.
```

#### Prompt 7 — Os Custos e Impactos Econômicos (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite inspection showing infrastructure, terminals, or extreme natural limits.
Text on screen: "{v["p7_title"]}" in uppercase white Montserrat Bold.
Badge: "{v["p7_badge"]}" in intense crimson red (#C8102E).
Camera: dynamic linear satellite sweep along the coast or valley.
NO voice, NO speech, NO music. ONLY tactical interface SFX.
```

#### Prompt 8 — Manobras Diplomáticas e Rotas Alternativas (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital perspective revealing alternative transport routes, bypass corridors, or neighbor reactions.
Text on screen: "{v["p8_title"]}" in uppercase white Orbitron Bold.
Badge: "{v["p8_badge"]}" in intense amber or sage green (#A8C3A6).
Camera: steady diagonal flyover at constant altitude.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.
```

#### Prompt 9 — O Equilíbrio Geopolítico e Alianças (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geopolitical regional overview showing military outposts, radar lines, or sovereign maritime zones.
Text on screen: "{v["p9_title"]}" in uppercase white Montserrat Bold.
Badge: "{v["p9_badge"]}" in intense crimson red (#C8102E).
Camera: wide smooth pan revealing the entire regional theater of operations.
NO voice, NO speech, NO music. ONLY deep frequency rumble SFX.
```

#### Prompt 10 — Perspectiva Global e Encerramento Institucional (4s)
```text
Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic orbital pull-back showing Earth's curvature, the vast expanse of ocean and continents, and atmospheric glow.
Text on screen: "{v["p10_title"]}" in uppercase white Orbitron Bold.
Badge: "{v["p10_badge"]}" in intense crimson red (#C8102E).
At the bottom center: official VitaleGeo geodesic globe symbol (monochrome beige #F5F2EB with 70% opacity) and clean wordmark "VITALEGEO" in Orbitron.
Camera: slow cinematic retreat toward high orbital space.
NO voice, NO speech, NO music. ONLY satellite swoosh and soft electronic chime.
```

---

### 3. Legenda

{v["titulo"]}

#geografia #geopolitica #mapas
'''
    return conteudo


def main():
    print("Iniciando processamento das 10 pautas investigativas...")
    
    # 1. Carregar modelo HTML base
    with open(MODELO_HTML, "r", encoding="utf-8") as f:
        template_html = f.read()
        
    # Limpar qualquer fechamento duplo acidental de article no modelo
    if "</article>\n\n            </div>\n        </article>" in template_html:
        template_html = template_html.replace("</article>\n\n            </div>\n        </article>", "</article>")
    elif "</article>\r\n\r\n            </div>\r\n        </article>" in template_html:
        template_html = template_html.replace("</article>\r\n\r\n            </div>\r\n        </article>", "</article>")

    # 2. Gerar HTML e Markdown para cada um dos 10 posts
    for post in TODOS_POSTS:
        slug = post["slug"]
        conteudo_html = gerar_conteudo_html(post)
        
        # Preencher placeholders no HTML
        html_final = template_html
        html_final = html_final.replace("{{TITULO}}", post["titulo"])
        html_final = html_final.replace("{{DESCRICAO}}", post["resumo"])
        html_final = html_final.replace("{{SLUG}}", slug)
        html_final = html_final.replace("{{IMAGEM_DESTAQUE}}", post["img"])
        html_final = html_final.replace("{{LEGENDA_IMAGEM}}", post["legenda_img"])
        html_final = html_final.replace("{{DATA}}", post["data"])
        html_final = html_final.replace("{{DATA_ISO}}", post["data_iso"])
        html_final = html_final.replace("{{CATEGORIA}}", post["categoria"])
        html_final = html_final.replace("{{TEMPO_LEITURA}}", post["tempo_leitura"])
        html_final = html_final.replace("{{CONTEUDO}}", conteudo_html)
        
        # Salvar HTML em blog/<slug>/index.html
        post_dir = os.path.join(BLOG_DIR, slug)
        os.makedirs(post_dir, exist_ok=True)
        html_path = os.path.join(post_dir, "index.html")
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html_final)
        print(f"✅ HTML gerado: blog/{slug}/index.html ({len(html_final)} bytes)")
        
        # Salvar Markdown em src/content/blog/<slug>.md
        md_conteudo = gerar_markdown(post)
        md_path = os.path.join(CONTENT_DIR, f"{slug}.md")
        with open(md_path, "w", encoding="utf-8") as f:
            f.write(md_conteudo)
        print(f"✅ Markdown gerado: src/content/blog/{slug}.md ({len(md_conteudo)} bytes)")

    # 3. Atualizar assets/js/posts.js inserindo os 10 posts no topo
    print("\nAtualizando banco de posts em assets/js/posts.js...")
    with open(POSTS_JS, "r", encoding="utf-8") as f:
        posts_js_content = f.read()
        
    novos_posts_js = []
    # Inserir em ordem cronológica decrescente (22:30 primeiro até 07:30)
    for post in reversed(TODOS_POSTS):
        novos_posts_js.append(f'''    {{
        titulo: "{post['titulo']}",
        categoria: "{post['categoria']}",
        data: "{post['data']}",
        img: "{post['img']}",
        link: "{post['slug']}/",
        resumo: "{post['resumo']}"
    }},''')
        
    bloco_novos = "\n".join(novos_posts_js) + "\n"
    
    # Inserir logo após "const blogPosts = [\n"
    pattern = r'(const\s+blogPosts\s*=\s*\[\s*\r?\n)'
    if re.search(pattern, posts_js_content):
        novo_posts_js_content = re.sub(pattern, r'\1' + bloco_novos, posts_js_content, count=1)
        with open(POSTS_JS, "w", encoding="utf-8") as f:
            f.write(novo_posts_js_content)
        print("✅ assets/js/posts.js atualizado com sucesso no início de blogPosts!")
    else:
        print("❌ Erro ao localizar o início do array blogPosts em posts.js")

    # 4. Gerar Roteiros de Vídeo em D:\Obsidian\Vida nova\Projetos\VitaleGeo\Roteiros\
    print("\nGerando os 10 roteiros de vídeo para o Obsidian...")
    for v in ROTEIROS_VIDEOS:
        nome_arquivo = f"Video {v['numero']}.md"
        caminho_arquivo = os.path.join(ROTEIROS_DIR, nome_arquivo)
        conteudo_roteiro = gerar_roteiro_markdown(v)
        with open(caminho_arquivo, "w", encoding="utf-8") as f:
            f.write(conteudo_roteiro)
        print(f"✅ Roteiro gerado: {nome_arquivo} ({len(v['roteiro'])} caracteres no roteiro narrativo)")

    # 5. Executar npm run sitemap
    print("\nExecutando 'npm run sitemap' em D:\\Dev\\vitale-geo...")
    res = subprocess.run(["npm.cmd", "run", "sitemap"], cwd=BASE_DIR, capture_output=True, text=True)
    print("STDOUT:", res.stdout)
    if res.stderr:
        print("STDERR:", res.stderr)
        
    print("\n🎉 Ciclo diário de conteúdo concluído com 100% de sucesso e autonomia!")

if __name__ == "__main__":
    main()
