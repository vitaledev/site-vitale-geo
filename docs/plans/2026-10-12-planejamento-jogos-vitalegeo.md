# Planejamento Mestre de Jogos VitaleGeo & Plano de Implementação: "Onde Fica no Mapa?"

> **Contexto:** Guia arquitetural e roadmap de jogos interativos com alta viralidade para vídeos (Shorts, Reels, TikTok) e retenção no portal VitaleGeo (`D:\Dev\vitale-geo`).
> **Padrão de Design:** Atlas escolar / minimalismo educacional, zero cyberpunk, zero neon, mapas abertos gratuitos e responsividade tátil total.

---

## Parte 1: Roadmap & Planejamento Mestre de Todos os Jogos VitaleGeo

Os jogos do VitaleGeo devem ser projetados para **jogabilidade rápida (1 a 3 minutos)**, **alto valor de compartilhamento social** e **fácil gravação de reações em vídeos curtos**.

| Jogo | Mecânica Central | Potencial para Vídeos & Viralidade | Stack Tecnológica |
| :--- | :--- | :--- | :--- |
| **1. Onde Fica no Mapa? (GeoClicker Geopolítico)** | O jogador deve clicar o mais perto possível de um alvo geopolítico misterioso (enclaves, estreitos, ilhas, marcos históricos) em um mapa mundi mudo. | **Máximo.** Vídeos estilo GeoGuessr: suspense do clique, linha animada de erro, distância em km e score de 0 a 5.000 pts. | Leaflet + Esri Gray Canvas (mudo) + Haversine + Canvas Confetti |
| **2. O País Secreto (Termômetro Geodésico / Globle)** | Adivinhe o país misterioso do dia. A cada palpite, o mapa colore o país por gradiente térmico (azul = gelado, vermelho = muito perto) e dá a direção da bússola. | **Muito Alto.** Formato consagrado no TikTok: "Adivinhando o país do dia em 5 tentativas!". | Leaflet / TopoJSON + Turf.js + Bússola Azimute |
| **3. Silhueta Cega (Borderle / Shape Guesser)** | O jogador visualiza apenas o contorno geométrico do território isolado em vetor escuro e tem 4 tentativas para acertar o país, com dicas progressivas. | **Alto.** "90% das pessoas não reconhecem esse país pelo formato!". Dicas visuais dinâmicas. | D3-geo + TopoJSON (`world-atlas`) + SVG |
| **4. Teia de Fronteiras (Border Chain)** | Conecte dois países distantes (ex: Portugal até a China) citando uma cadeia ininterrupta de países vizinhos com fronteiras terrestres contínuas. | **Médio-Alto.** Desafio intelectual fascinante para debates e comentários em vídeos. | Matriz de Adjacência de Fronteiras Terrestres (GeoJSON) |
| **5. Guerra de Escala: Quem é Maior? (Mercator vs Real)** | Dois países aparecem lado a lado. O jogador precisa ignorar a ilusão ótica da projeção de Mercator e escolher qual tem maior área territorial em km². | **Alto.** Quebra mitos populares (Groenlândia vs Brasil, Rússia vs África) com impacto visual imediato. | D3-geo / SVG + Dados de área do Natural Earth |
| **6. Blitz dos Chokepoints (Desafio de 60 Segundos)** | O jogador precisa localizar os 10 estreitos e canais mais estratégicos do comércio mundial antes do cronômetro zerar. | **Alto.** Dinâmica frenética contra o relógio, ideal para lives e shorts cronometrados. | Leaflet + OpenStreetMap + Cronômetro de alta precisão |

---

## Parte 2: Plano de Implementação — Jogo 1: "Onde Fica no Mapa? (GeoClicker Geopolítico)"

**Goal:** Criar um jogo interativo no estilo GeoClicker/Pinpoint onde o jogador recebe desafios geopolíticos (ex: "Onde fica o Estreito de Ormuz?", "Onde fica o Ponto Nemo?", "Onde fica Kaliningrado?"), clica no mapa mundi mudo e recebe pontuação de precisão baseada na distância real em km com animação da linha geodésica.

**Arquitetura:**
- Shell arcade dedicado com modo tela cheia e barra de telemetria minimalista.
- Mapa Leaflet com camada neutra muda (Esri World Gray Canvas sem rótulos de nomes para não dar cola, com opção de satélite).
- Base de dados de 40+ pontos geográficos com coordenadas precisas, categorias e mini-fatos históricos em hovers.
- Sistema de 5 rodadas por partida com pontuação máxima de 25.000 pontos (fórmula de decaimento exponencial de distância).
- Animação de linha geodésica entre o clique e o alvo real, marcador animado e feedback sonoro/visual com confetes em acertos perfeitos (< 50 km).
- Modal de resultado final com mapa comemorativo dos 5 chutes e botão de copiar resultado formatado para redes sociais.

**Tech Stack:**
- HTML5, CSS3, Tailwind CSS.
- Leaflet JS (`1.9.4`) com camadas Esri Gray Canvas e Esri Satellite (100% gratuitas e abertas).
- Phosphor Icons (`@phosphor-icons/web`).
- Canvas Confetti.
- Fórmula de Haversine pura para cálculo de distância e azimute.

**Diretórios e Arquivos:**
- Criar: `jogos/onde-fica/index.html` (código fonte raiz)
- Criar: `public/jogos/onde-fica/index.html` (espelhamento obrigatório Astro)
- Criar: `public/assets/img/jogos/onde-fica.jpg` (capa cartográfica autêntica)
- Modificar: `src/data/games.ts` (registro no banco de dados de jogos)
- Validar: `npx astro build`
- Deploy: `npm run ship`
