# -*- coding: utf-8 -*-
"""
COMPILADOR E SINCRONIZADOR DO CÉREBRO GEOGRÁFICO (CEREBROGEO) — VITALEGEO
Sincroniza o banco de dados mestre entre Obsidian e VitaleGeo:
- 198 países e territórios oficiais da Terra (100% soberania, capitais, pegadinhas, coordenadas)
- 105 locais estratégicos, chokepoints e enclaves para jogos e ferramentas
- 100 perguntas de elite de inteligência geopolítica sem clichês
"""

import json
import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

# Importa as bases de dados mestres
try:
    from dados_paises import PAISES
    from dados_locais import LOCAIS
    from dados_perguntas import PERGUNTAS
except ImportError:
    # Se rodar a partir da raiz do vitale-geo
    sys.path.append(os.path.join(os.path.dirname(__file__)))
    from dados_paises import PAISES
    from dados_locais import LOCAIS
    from dados_perguntas import PERGUNTAS

def validar_dados(paises, locais, perguntas):
    print("🔍 [Validação] Verificando integridade estrutural das coleções...")
    
    # 1. Validação de Países
    for p in paises:
        assert p.get("nome"), f"País sem nome: {p}"
        assert p.get("capital"), f"País sem capital: {p['nome']}"
        assert p.get("iso2"), f"País sem iso2: {p['nome']}"
        assert len(p.get("pegadinhas", [])) >= 2, f"País sem pegadinhas suficientes: {p['nome']}"
        assert isinstance(p.get("lat"), (int, float)), f"Lat inválida: {p['nome']}"
        assert isinstance(p.get("lng"), (int, float)), f"Lng inválida: {p['nome']}"

    # 2. Validação de Locais
    for l in locais:
        assert l.get("nome"), f"Local sem nome: {l}"
        assert l.get("categoria"), f"Local sem categoria: {l['nome']}"
        assert isinstance(l.get("lat"), (int, float)), f"Lat inválida: {l['nome']}"
        assert isinstance(l.get("lng"), (int, float)), f"Lng inválida: {l['nome']}"
        assert l.get("dica"), f"Local sem dica: {l['nome']}"
        assert l.get("fato"), f"Local sem fato: {l['nome']}"

    # 3. Validação de Perguntas
    for q in perguntas:
        assert q.get("pergunta"), f"Pergunta sem texto: {q}"
        assert len(q.get("opcoes", [])) == 4, f"Pergunta {q.get('id')} não possui 4 opções"
        assert 0 <= q.get("resposta", -1) <= 3, f"Pergunta {q.get('id')} com resposta inválida"
        assert q.get("explicacao"), f"Pergunta {q.get('id')} sem explicação"

    print("✅ [Validação] 100% dos registros foram aprovados com sucesso!")

def main():
    print("🧠 [CerebroGeo] Compilando e Sincronizando Banco de Dados Geográfico Mestre...")

    validar_dados(PAISES, LOCAIS, PERGUNTAS)

    # =========================================================================
    # 1. SALVANDO PAISES.JSON
    # =========================================================================
    caminhos_paises = [
        "d:\\Obsidian\\Vida nova\\Segundo cérebro\\05 Conhecimento\\CerebroGeo\\paises.json",
        "D:\\Dev\\vitale-geo\\src\\data\\cerebro-geo\\paises.json",
        "D:\\Dev\\vitale-geo\\public\\data\\cerebro-geo\\paises.json"
    ]
    for p in caminhos_paises:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(PAISES, f, ensure_ascii=False, indent=2)

    # =========================================================================
    # 2. SALVANDO LOCAIS.JSON
    # =========================================================================
    caminhos_locais = [
        "d:\\Obsidian\\Vida nova\\Segundo cérebro\\05 Conhecimento\\CerebroGeo\\locais.json",
        "D:\\Dev\\vitale-geo\\src\\data\\cerebro-geo\\locais.json",
        "D:\\Dev\\vitale-geo\\public\\data\\cerebro-geo\\locais.json"
    ]
    for p in caminhos_locais:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(LOCAIS, f, ensure_ascii=False, indent=2)

    # Sincroniza também com o formato JS direto em locais-onde-fica.js para jogos existentes
    js_locais_onde_fica = f"""/**
 * BANCO DE DADOS COMPLETO DE LOCAIS GEOPOLÍTICOS — VITALEGEO
 * Compilado automaticamente a partir do CerebroGeo Mestre.
 * Total de locais catalogados: {len(LOCAIS)}
 */
const LOCAIS_ONDE_FICA = {json.dumps(LOCAIS, ensure_ascii=False, indent=4)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = LOCAIS_ONDE_FICA;
}}
"""
    caminhos_locais_onde_fica = [
        "D:\\Dev\\vitale-geo\\public\\assets\\js\\locais-onde-fica.js",
        "D:\\Dev\\vitale-geo\\assets\\js\\locais-onde-fica.js"
    ]
    for p in caminhos_locais_onde_fica:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            f.write(js_locais_onde_fica)

    # =========================================================================
    # 3. SALVANDO PERGUNTAS.JSON
    # =========================================================================
    caminhos_perguntas = [
        "d:\\Obsidian\\Vida nova\\Segundo cérebro\\05 Conhecimento\\CerebroGeo\\perguntas.json",
        "D:\\Dev\\vitale-geo\\src\\data\\cerebro-geo\\perguntas.json",
        "D:\\Dev\\vitale-geo\\public\\data\\cerebro-geo\\perguntas.json"
    ]
    for p in caminhos_perguntas:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(PERGUNTAS, f, ensure_ascii=False, indent=2)

    # =========================================================================
    # 4. BUNDLE CLIENTE UNIFICADO DO NAVEGADOR (cerebro-geo.js)
    # =========================================================================
    js_template = """/**
 * CÉREBRO GEOGRÁFICO DO VITALEGEO — BUNDLE CLIENTE GLOBAL
 * Disponível globalmente no navegador em window.CerebroGeo
 * - __PAISES_COUNT__ Nações Soberanas e Territórios
 * - __LOCAIS_COUNT__ Locais Estratégicos e Chokepoints
 * - __PERGUNTAS_COUNT__ Perguntas de Quiz Geopolítico de Alto Nível
 */
(function() {
    const PAISES = __PAISES__;
    const LOCAIS = __LOCAIS__;
    const PERGUNTAS = __PERGUNTAS__;

    window.CerebroGeo = {
        paises: PAISES,
        locais: LOCAIS,
        perguntas: PERGUNTAS,
        
        // MÉTODOS DE BUSCA E CONSULTA
        obterPaisPorIso2: function(iso2) {
            if (!iso2) return null;
            return PAISES.find(p => p.iso2.toLowerCase() === iso2.toLowerCase());
        },
        obterPaisPorNome: function(nome) {
            if (!nome) return null;
            const termo = nome.toLowerCase().trim();
            return PAISES.find(p => p.nome.toLowerCase() === termo || p.nome_oficial.toLowerCase().includes(termo));
        },
        obterLocaisPorCategoria: function(cat) {
            if (!cat) return [...LOCAIS];
            return LOCAIS.filter(l => l.categoria.toLowerCase().includes(cat.toLowerCase()));
        },
        obterPerguntasPorCategoria: function(cat) {
            if (!cat) return [...PERGUNTAS];
            return PERGUNTAS.filter(q => q.categoria.toLowerCase().includes(cat.toLowerCase()));
        },
        // ALGORITMO FISHER-YATES (SEM VIÉS ESTATÍSTICO)
        embaralhar: function(array) {
            const arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        },

        // MOTOR ANTI-REPETIÇÃO COM MEMÓRIA NO LOCALSTORAGE
        obterLocaisSemRepeticao: function(qtd = 5, storageKey = 'vitalegeo_locais_vistos') {
            let vistos = [];
            let ciclo = 1;
            try {
                vistos = JSON.parse(localStorage.getItem(storageKey) || '[]');
                if (!Array.isArray(vistos)) vistos = [];
                ciclo = parseInt(localStorage.getItem(storageKey + '_ciclo') || '1', 10);
            } catch (e) {
                vistos = [];
            }
            let naoVistos = LOCAIS.filter(l => !vistos.includes(l.nome));
            let cicloRenovado = false;
            if (naoVistos.length < qtd) {
                ciclo += 1;
                vistos = [];
                naoVistos = [...LOCAIS];
                cicloRenovado = true;
                try { localStorage.setItem(storageKey + '_ciclo', ciclo.toString()); } catch(e) {}
            }
            const selecionados = this.embaralhar(naoVistos).slice(0, qtd);
            selecionados.forEach(s => {
                if (!vistos.includes(s.nome)) vistos.push(s.nome);
            });
            try { localStorage.setItem(storageKey, JSON.stringify(vistos)); } catch(e) {}
            return {
                locais: selecionados,
                vistosTotal: vistos.length,
                acervoTotal: LOCAIS.length,
                ciclo: ciclo,
                cicloRenovado: cicloRenovado
            };
        },

        obterPerguntasSemRepeticao: function(qtd = 10, storageKey = 'vitalegeo_perguntas_vistas') {
            let vistas = [];
            let ciclo = 1;
            try {
                vistas = JSON.parse(localStorage.getItem(storageKey) || '[]');
                if (!Array.isArray(vistas)) vistas = [];
                ciclo = parseInt(localStorage.getItem(storageKey + '_ciclo') || '1', 10);
            } catch (e) {
                vistas = [];
            }
            let naoVistas = PERGUNTAS.filter(q => !vistas.includes(q.id));
            let cicloRenovado = false;
            if (naoVistas.length < qtd) {
                ciclo += 1;
                vistas = [];
                naoVistas = [...PERGUNTAS];
                cicloRenovado = true;
                try { localStorage.setItem(storageKey + '_ciclo', ciclo.toString()); } catch(e) {}
            }
            const selecionadas = this.embaralhar(naoVistas).slice(0, qtd);
            selecionadas.forEach(s => {
                if (!vistas.includes(s.id)) vistas.push(s.id);
            });
            try { localStorage.setItem(storageKey, JSON.stringify(vistas)); } catch(e) {}
            return {
                perguntas: selecionadas,
                vistosTotal: vistas.length,
                acervoTotal: PERGUNTAS.length,
                ciclo: ciclo,
                cicloRenovado: cicloRenovado
            };
        },

        obterPerguntasAleatorias: function(qtd = 10, categoria = null) {
            let base = categoria ? this.obterPerguntasPorCategoria(categoria) : [...PERGUNTAS];
            return this.embaralhar(base).slice(0, qtd);
        },
        obterLocaisAleatorios: function(qtd = 5, categoria = null) {
            let base = categoria ? this.obterLocaisPorCategoria(categoria) : [...LOCAIS];
            return this.embaralhar(base).slice(0, qtd);
        },
        obterPaisesAleatorios: function(qtd = 5, continente = null) {
            let base = continente ? PAISES.filter(p => p.continente.toLowerCase() === continente.toLowerCase()) : [...PAISES];
            return this.embaralhar(base).slice(0, qtd);
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = window.CerebroGeo;
    }
})();
"""
    js_bundle = (
        js_template
        .replace("__PAISES_COUNT__", str(len(PAISES)))
        .replace("__LOCAIS_COUNT__", str(len(LOCAIS)))
        .replace("__PERGUNTAS_COUNT__", str(len(PERGUNTAS)))
        .replace("__PAISES__", json.dumps(PAISES, ensure_ascii=False))
        .replace("__LOCAIS__", json.dumps(LOCAIS, ensure_ascii=False))
        .replace("__PERGUNTAS__", json.dumps(PERGUNTAS, ensure_ascii=False))
    )
    caminhos_bundle = [
        "D:\\Dev\\vitale-geo\\public\\assets\\js\\cerebro-geo.js",
        "D:\\Dev\\vitale-geo\\assets\\js\\cerebro-geo.js"
    ]
    for p in caminhos_bundle:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            f.write(js_bundle)

    # =========================================================================
    # 5. ARQUIVO TYPESCRIPT PARA O ASTRO (src/data/cerebro-geo/index.ts)
    # =========================================================================
    ts_content = """import paisesData from './paises.json';
import locaisData from './locais.json';
import perguntasData from './perguntas.json';

export interface Pais {
  nome: string;
  nome_oficial: string;
  iso2: string;
  iso3: string;
  capital: string;
  pegadinhas: string[];
  continente: string;
  subregiao: string;
  lat: number;
  lng: number;
  area_km2: number;
  populacao: number;
  fronteiras: string[];
  fato: string;
}

export interface LocalEstrategico {
  nome: string;
  categoria: string;
  lat: number;
  lng: number;
  dica: string;
  fato: string;
}

export interface PerguntaTrivia {
  id: number;
  pergunta: string;
  categoria: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
  dificuldade: string;
}

export const paises = paisesData as Pais[];
export const locais = locaisData as LocalEstrategico[];
export const perguntas = perguntasData as PerguntaTrivia[];

export const CerebroGeo = {
  paises,
  locais,
  perguntas,
  obterPaisPorIso2(iso2: string) {
    return paises.find(p => p.iso2.toLowerCase() === iso2.toLowerCase());
  },
  obterLocaisPorCategoria(cat: string) {
    return locais.filter(l => l.categoria.toLowerCase().includes(cat.toLowerCase()));
  },
  obterPerguntasPorCategoria(cat: string) {
    return perguntas.filter(q => q.categoria.toLowerCase().includes(cat.toLowerCase()));
  }
};

export default CerebroGeo;
"""
    with open("D:\\Dev\\vitale-geo\\src\\data\\cerebro-geo\\index.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)

    # =========================================================================
    # 6. DOCUMENTAÇÃO NO SEGUNDO CÉREBRO (Obsidian)
    # =========================================================================
    nota_obsidian = f"""---
tipo: conhecimento-mestre
tema: Geografia e Geopolitica
projeto: VitaleGeo
data_atualizacao: 2026-10-12
tags:
  - conhecimento/geografia
  - geopolitica
  - cerebro-geo
  - banco-de-dados
---

# 🧠 Cérebro Geográfico Mestre (CerebroGeo) — VitaleGeo

Este é o **banco de dados mestre de inteligência geográfica e geopolítica** do VitaleGeo, alimentando ferramentas cartográficas, calculadoras, quizzes e jogos interativos do site e do canal.

---

## 📊 Estatísticas do Acervo Consolidado

| Coleção | Volume Mestre | Destino Web | Destino Local Obsidian |
| :--- | :---: | :--- | :--- |
| **Países & Capitais Oficiais** | **{len(PAISES)} nações** | `/data/cerebro-geo/paises.json` | `Segundo cérebro/05 Conhecimento/CerebroGeo/paises.json` |
| **Locais Estratégicos & Pinpoints** | **{len(LOCAIS)} marcos** | `/data/cerebro-geo/locais.json` | `Segundo cérebro/05 Conhecimento/CerebroGeo/locais.json` |
| **Perguntas de Quiz Geopolítico** | **{len(PERGUNTAS)} questões** | `/data/cerebro-geo/perguntas.json` | `Segundo cérebro/05 Conhecimento/CerebroGeo/perguntas.json` |
| **Bundle Web Unificado** | **1 arquivo JS** | `/assets/js/cerebro-geo.js` | Disponível via `window.CerebroGeo` |

---

## 🧭 Estrutura dos Dados

### 1. Países (`paises.json`)
Cada país contém dados completos e validados:
- `nome`, `nome_oficial`: Nomenclatura em português.
- `iso2`, `iso3`: Códigos padronizados internacionais (ex: `br`, `bra`).
- `capital`: Capital oficial correta.
- `pegadinhas`: Array com 3 opções verossímeis de cidades conhecidas que não são a capital (ideal para quizzes de múltipla escolha sem respostas óbvias).
- `continente`, `subregiao`: Classificação regional.
- `lat`, `lng`: Coordenadas do centróide geográfico.
- `area_km2`, `populacao`: Métricas territoriais e demográficas.
- `fronteiras`: Lista de códigos ISO2 dos países com fronteira terrestre contígua.
- `fato`: Curiosidade geopolítica/geográfica de alto valor cultural.

### 2. Locais Estratégicos (`locais.json`)
Abrange chokepoints vitais (Ormuz, Malaca, Bab el-Mandeb, Suez), enclaves fascinantes (Baarle, Kaliningrado, Ceuta, Llívia, Nahwa), zonas de litígio (Essequibo, Caxemira, Ilhas Spratly, Golã), extremos físicos (Ponto Nemo, Chimborazo, Mar Morto, Baikal) e megaprojetos (Três Gargantas, NEOM, Grande Muralha Verde).

### 3. Perguntas de Trivia (`perguntas.json`)
100 perguntas aprofundadas com 4 alternativas, índice da resposta certa (0 a 3), categoria e justificativa explicativa detalhada.

---

## 🛠️ Como Sincronizar e Expandir o Banco

Sempre que novas perguntas, locais ou países forem adicionados ou editados:

```bash
# No terminal do projeto VitaleGeo (D:\\Dev\\vitale-geo):
npm run cerebro
```

O comando executa a suíte de validação:
1. Valida todos os esquemas, arrays de opções e respostas corretas.
2. Atualiza os arquivos em `src/data/cerebro-geo/` e `public/data/cerebro-geo/`.
3. Sincroniza o cofre do Obsidian (`Segundo cérebro/05 Conhecimento/CerebroGeo/`).
4. Reconstrói o bundle do cliente `public/assets/js/cerebro-geo.js`.
"""
    with open("d:\\Obsidian\\Vida nova\\Segundo cérebro\\05 Conhecimento\\CerebroGeo\\00 Indice do Cerebro Geografico.md", "w", encoding="utf-8") as f:
        f.write(nota_obsidian)

    print("🎉 [CerebroGeo] Compilação e Sincronização concluídas com sucesso!")
    print(f"   • Países e Territórios: {len(PAISES)}")
    print(f"   • Locais e Marcos Estratégicos: {len(LOCAIS)}")
    print(f"   • Perguntas de Trivia Geopolítica: {len(PERGUNTAS)}")
    print(f"   • Destinos sincronizados: Obsidian, Astro src, VitaleGeo public e browser bundles.")

if __name__ == "__main__":
    main()
