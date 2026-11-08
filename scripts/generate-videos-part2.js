import fs from 'node:fs';
import path from 'node:path';

const ROTEIROS_DIR = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';

const scripts = [
  // VIDEO 153: CHINA TERRAS RARAS
  {
    num: 153,
    titulo: "Como o Quase Monopólio das Terras Raras Deu à China o Controle da Cadeia Tecnológica Global?",
    titleL1: "O ARSENAL CRÍTICO",
    titleL2: "O MONOPÓLIO DAS TERRAS RARAS",
    titleL3: "O IMPÉRIO MINERAL DA CHINA",
    narration: "Como o quase monopólio das terras raras deu à China o controle da cadeia tecnológica global? No coração árido da Mongólia Interior, a colossal mina a céu aberto de Bayan Obo esconde o maior tesouro geoestratégico do século vinte e um. Ali repousam depósitos massivos de dezessete elementos químicos fundamentais, como neodímio, disprósio e térbio, essenciais para a fabricação de ímãs de altíssima potência. Embora outros países possuam jazidas brutas no subsolo, Pequim construiu uma vantagem quase intransponível: controla setenta por cento da mineração global e estarrecedores noventa por cento de todo o refino químico do planeta. Sem esses minerais raros, motores de veículos elétricos, geradores de turbinas eólicas e os radares avançados dos caças americanos F-35 simplesmente não funcionam. Ao impor restrições sobre gálio e germânio, a China demonstrou como uma vantagem geológica pode se transformar na arma de coerção econômica mais temida do comércio mundial. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into East Asia and mainland China.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O ARSENAL CRÍTICO"
Line 2 (intense crimson red #C8102E): "O MONOPÓLIO DAS TERRAS RARAS"
Line 3 (pure white #F5F2EB): "O IMPÉRIO MINERAL DA CHINA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward China.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Protagonista Geográfico no Mapa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite flyover centering over northern China and Inner Mongolia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders (2px line in #F5F2EB), flat masked national flag texture cleanly bound inside the official territory.
Text on screen: "CHINA // 70% DA MINERAÇÃO GLOBAL" in uppercase white Orbitron Bold.
Badge: "90% DO REFINO DE TERRAS RARAS" in intense crimson red (#C8102E).
Camera: linear satellite tracking shot gliding smoothly toward the Baotou mining hub.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Mina de Bayan Obo e o Coração Mineral",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite zoom-in on the giant open-pit mining complex of Bayan Obo in Inner Mongolia.
Geographically locked terrain coordinates, rigidly stable topography, UN compliant borders, absolutely NO landmass morphing.
Tactical crosshair overlay (coord-crosshairs.svg) pinned directly on coordinates 41°47'N 109°58'E.
Text on screen: "BAYAN OBO // O MAIOR DEPÓSITO DO PLANETA" in uppercase white Montserrat Bold.
Telemetry readout: "RESERVAS ESTIMADAS EM 40 MILHÕES DE TONELADAS" in JetBrains Mono (#F5F2EB).
Camera: slow orthographic push-in over the terraced mining terraces.
NO voice, NO speech, NO music. ONLY subtle industrial hum and low-frequency radar beep SFX.`
      },
      {
        id: 4,
        title: "A Tabela dos Dezessete Elementos Estratégicos",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Clean dark cartographic overlay displaying glowing tactical tags for critical rare earth elements: Neodímio (Nd), Disprósio (Dy), Térbio (Tb) e Praseodímio (Pr).
Geographically locked terrain coordinates, rigidly stable borders, zero landmass morphing.
Glowing data badges floating with connecting telemetry lines toward processing hubs in Jiangxi and Baotou.
Text on screen: "17 ELEMENTOS CRÍTICOS // ÍMÃS PERMANENTES" in uppercase white Orbitron Bold.
Camera: subtle horizontal tracking pan across the mining corridors.
NO voice, NO speech, NO music. ONLY digital data readout clicks.`
      },
      {
        id: 5,
        title: "A Vulnerabilidade Ocidental e a Cadeia de Valor",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic split-view showing the flow of raw ore from global deposits toward Chinese smelting furnaces.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Glowing red vector arrows (#C8102E) demonstrating the bottleneck of chemical separation plants located entirely in China.
Text on screen: "O GARGALO DO REFINO QUÍMICO // QUASE MONOPÓLIO" in uppercase white Montserrat Bold.
Camera: steady orbital drift highlighting maritime cargo routes.
NO voice, NO speech, NO music. ONLY low atmospheric drone and tactical sonar pulse.`
      },
      {
        id: 6,
        title: "A Indústria Bélica e os Caças F-35",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical technical schematic overlay superimposed on high-altitude satellite map, illustrating a silhouette of a stealth fighter and radar assembly.
Geographically locked terrain coordinates, zero fictional islands.
Vector badge: "F-35 LIGHTNING II: 417 KG DE TERRAS RARAS POR CAÇA" in intense crimson red (#C8102E).
Text on screen: "DEPENDÊNCIA MILITAR // DEFESA E RADAR AESA" in white JetBrains Mono.
Camera: dynamic linear tracking across the Pacific defense perimeter.
NO voice, NO speech, NO music. ONLY tactical alert chime and cockpit HUD swoosh.`
      },
      {
        id: 7,
        title: "Veículos Elétricos e a Transição Energética",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map over major global industrial centers with animated green and gold energy flow vectors.
Geographically locked terrain coordinates, rigidly stable borders, UN compliant boundaries.
Badge: "MOTORES ELÉTRICOS E TURBINAS EÓLICAS // ÍMÃS DE NEODÍMIO" in bright amber gold (#F59E0B).
Text on screen: "TRANSIÇÃO ENERGÉTICA // O CONTROLE DOS ÍMÃS" in uppercase white Montserrat Bold.
Camera: slow cinematic zoom-out showing global supply lines.
NO voice, NO speech, NO music. ONLY clean digital pulse SFX.`
      },
      {
        id: 8,
        title: "Controles de Exportação e Geopolítica de Coerção",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of China highlighting trade embargo and licensing vector lines branching outwards toward Washington, Tokyo and Brussels.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders.
Glowing red alert perimeter (#C8102E) encircling Chinese ports with lock icons.
Text on screen: "RESTRIÇÕES AO GÁLIO E GERMÂNIO // LICENÇAS ESTRATÉGICAS" in uppercase white Orbitron Bold.
Camera: linear pullback revealing international shipping routes.
NO voice, NO speech, NO music. ONLY telemetry ping and deep resonance impact.`
      },
      {
        id: 9,
        title: "A Corrida Ocidental por Fontes Alternativas",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide Pacific and global satellite overview highlighting Mountain Pass in California, Lynas in Australia and projects in Brazil.
Geographically locked terrain coordinates, rigidly stable continental outlines.
Glowing green dotted lines (#A8C3A6) connecting alternative allied supply chains.
Text on screen: "CORRIDA POR AUTONOMIA // MOUNTAIN PASS E AUSTRÁLIA" in uppercase white Montserrat Bold.
Camera: wide orthographic sweep across the Western Hemisphere.
NO voice, NO speech, NO music. ONLY radar scan sweep SFX.`
      },
      {
        id: 10,
        title: "Síntese Geoeconômica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Majestic high-altitude orbital view of the Eurasian landmass and the curvature of the Earth glowing under dawn light.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Text on screen: "A GEOGRAFIA DO PODER // TERRAS RARAS" in uppercase white Orbitron Bold.
Badge: "QUEM CONTROLA OS ELEMENTOS CONTROLA O SÉCULO XXI" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle orbital glide toward the horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 154: MONTE ATHOS
  {
    num: 154,
    titulo: "Como Uma Fronteira Murada na Grécia Mantém a República Monástica de Monte Athos Proibida Para Mulheres Há Mais de Mil Anos?",
    titleL1: "A ÚLTIMA TEOCRACIA",
    titleL2: "A FRONTEIRA DE MONTE ATHOS",
    titleL3: "MIL ANOS DE ISOLAMENTO",
    narration: "Como uma fronteira murada na Grécia mantém a república monástica de Monte Athos proibida para mulheres há mais de mil anos? Projetando-se por cinquenta quilômetros nas águas azul-turquesa do Mar Egeu, a península oriental da Calcídica abriga o enclave mais singular e restritivo do continente europeu. Trata-se de um território soberano de trezentos e trinta e cinco quilômetros quadrados, governado diretamente por vinte mosteiros ortodoxos históricos. Desde o ano de mil e quarenta e seis, uma lei imperial bizantina chamada Avaton proíbe formalmente a entrada de qualquer mulher e até mesmo de animais fêmeas na região. Apenas homens munidos de um visto clerical especial, o Diamonitirion, podem cruzar os portões fortificados ou desembarcar em seus ancoradouros vigiados. Protegido tanto pela constituição grega quanto pelo Tratado de Adesão à União Europeia, Monte Athos permanece como uma cápsula do tempo medieval intocada pela modernidade ocidental. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Aegean Sea and northern Greece.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ÚLTIMA TEOCRACIA"
Line 2 (intense crimson red #C8102E): "A FRONTEIRA DE MONTE ATHOS"
Line 3 (pure white #F5F2EB): "MIL ANOS DE ISOLAMENTO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Chalkidiki trident peninsulas.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Protagonista Geográfico no Mapa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite tracking shot gliding along the easternmost finger of the Chalkidiki peninsula in Macedonia, Greece.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders (2px line in #F5F2EB) isolating the 335.6 km² monastic republic.
Text on screen: "MONTE ATHOS // REPÚBLICA MONÁSTICA AUTÔNOMA" in uppercase white Orbitron Bold.
Badge: "335 KM² // 20 MOSTEIROS SOBERANOS" in intense crimson red (#C8102E).
Camera: linear satellite glide southward toward the 2,033-meter Mount Athos peak.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Fronteira Murada e o Istmo de Ouranoupoli",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme close-up satellite and orthographic terrain view of the narrow neck of the peninsula near Ouranoupoli.
Geographically locked terrain coordinates, rigidly stable topography, UN compliant boundaries.
Tactical crosshair overlay (coord-crosshairs.svg) pinned on the border fence line dividing secular Greece from the monastic state.
Text on screen: "O ISTMO DE OURANOUPOLI // FRONTEIRA VIGIADA" in uppercase white Montserrat Bold.
Telemetry: "PONTO DE CONTROLE E GUARITA CLERICAL" in JetBrains Mono (#F5F2EB).
Camera: slow orthographic drift along the wooded border ridge.
NO voice, NO speech, NO music. ONLY subtle wind rumble and radar pulse SFX.`
      },
      {
        id: 4,
        title: "O Decreto Imperial do Avaton (1046 d.C.)",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical cartographic view highlighting the border perimeter with Byzantine seal watermark aesthetics.
Geographically locked terrain coordinates, rigidly stable coastlines.
Glowing parchment texture card overlay: "LEI DO AVATON // CRIADA EM 1046 PELO IMPERADOR CONSTANTINO IX".
Text on screen: "PROIBIÇÃO DE MULHERES E ANIMAIS FÊMEAS" in intense crimson red (#C8102E) Orbitron Bold.
Camera: subtle horizontal tracking pan across the northern cliffs.
NO voice, NO speech, NO music. ONLY medieval bell chime and deep low-frequency echo.`
      },
      {
        id: 5,
        title: "O Passaporte Monástico Diamonitirion",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite focus on the ferry route linking Ouranoupoli to the monastic port of Dafni.
Geographically locked terrain coordinates, rigidly stable coastlines.
Vector card graphic illustrating the monastic entry visa: "DIAMONITIRION // LIMITE DIÁRIO DE PEREGRINOS".
Text on screen: "CONTROLE MIGRATÓRIO RIGOROSO // ACESSO EXCLUSIVO POR BARCO" in white Montserrat Bold.
Camera: steady tracking shot following the coastal maritime transit line.
NO voice, NO speech, NO music. ONLY ocean wave swoosh and digital telemetry ping.`
      },
      {
        id: 6,
        title: "A Rede dos Vinte Grandes Mosteiros",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover revealing 3D fortresses perched on sheer coastal cliffs (Simonopetra, Megisti Lavra, Vatopedi).
Geographically locked terrain coordinates, rigidly stable topography.
Glowing gold pins (#F59E0B) marking all 20 sovereign monastic seats across the peninsula.
Text on screen: "20 MOSTEIROS AUTÔNOMOS // AUTORIDADE DE KARYES" in uppercase white Orbitron Bold.
Camera: cinematic low-angle satellite cruise past dramatic ocean precipices.
NO voice, NO speech, NO music. ONLY monastery bell resonance and wind whoosh.`
      },
      {
        id: 7,
        title: "O Estatuto Jurídico no Tratado de Lausanne e na UE",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite map connecting Athens, Brussels and Mount Athos with diplomatic vector corridors.
Geographically locked terrain coordinates, UN compliant borders.
Badge: "ARTIGO 105 DA CONSTITUIÇÃO GREGA // CLÁUSULA ESPECIAL DA UNIÃO EUROPEIA" in bright sage green (#A8C3A6).
Text on screen: "EXCEÇÃO JURÍDICA AO ACORDO DE SCHENGEN" in uppercase white Montserrat Bold.
Camera: wide orthographic pullback showing the Aegean basin.
NO voice, NO speech, NO music. ONLY tactical legal resolve chime.`
      },
      {
        id: 8,
        title: "Isolamento Marítimo e a Patrulha da Guarda Costeira",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite radar view of the 500-meter maritime exclusion perimeter encircling the entire Athos coastline.
Geographically locked terrain coordinates, rigidly stable shores.
Glowing circular tactical radar boundary in red (#C8102E) surrounding the waters.
Text on screen: "PERÍMETRO MARÍTIMO DE 500 METROS // EMBARCAÇÕES PROIBIDAS" in uppercase white Orbitron Bold.
Camera: rotational satellite track over the open sea barrier.
NO voice, NO speech, NO music. ONLY radar sweep pulse and sonar ping SFX.`
      },
      {
        id: 9,
        title: "O Pico Sagrado a Dois Mil Metros de Altitude",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic 3D topographic relief elevation shot rising toward the 2,033-meter marble pyramid of Mount Athos rising straight out of the Aegean Sea.
Geographically locked terrain coordinates, rigidly stable mountain spine.
Altimeter readout in JetBrains Mono: "▲ 2.033 METROS // ELEVAÇÃO VERTICAL PURA".
Text on screen: "A MURALHA DE MÁRMORE NO EGÉU" in white Montserrat Bold.
Camera: dramatic upward satellite tilt along the rocky summit.
NO voice, NO speech, NO music. ONLY high-altitude wind gust and deep drone.`
      },
      {
        id: 10,
        title: "Síntese Territorial e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Majestic high-altitude orthographic view showcasing the entire Chalkidiki peninsula against the blue Mediterranean horizon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) framing Monte Athos.
Text on screen: "O ENCLAVE DO SILÊNCIO // MONTE ATHOS" in uppercase white Orbitron Bold.
Badge: "A MAIS ANTIGA REPÚBLICA SOBREVIVENTE DA EUROPA" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back toward the Greek horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 155: MAIORES PAÍSES SEM SAÍDA PARA O MAR
  {
    num: 155,
    titulo: "Quais São os Dez Maiores Países Sem Saída Para o Mar e Como Eles Vencem o Isolamento Geográfico?",
    titleL1: "GIGANTES TRANCADOS",
    titleL2: "PAÍSES SEM SAÍDA PARA O MAR",
    titleL3: "A BATALHA PELOS PORTOS",
    narration: "Quais são os dez maiores países sem saída para o mar e como eles vencem o isolamento geográfico? Longe de praias e terminais marítimos, quarenta e quatro nações soberanas enfrentam o maior desafio logístico do comércio global. No topo absoluto está o Cazaquistão, com dois vírgula setenta e dois milhões de quilômetros quadrados, tornando-o o nono maior país do planeta e o maior enclave continental sem acesso a águas abertas. Logo atrás vêm a imensidão desértica da Mongólia, cercada por duas superpotências, e os gigantes africanos Chade, Níger e Mali no coração árido do Sahel. Na América do Sul, a Bolívia mantém sua marinha de guerra viva nos lagos andinos, enquanto luta diplomaticamente por um porto no Pacífico. Sem costa soberana, esses países pagam até o dobro pelo frete internacional e dependem de ferrovias transfronteiriças e acordos bilaterais tensos para exportar suas riquezas minerais e agrícolas. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting landlocked nations in glowing amber gold across Central Asia and Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "GIGANTES TRANCADOS"
Line 2 (intense crimson red #C8102E): "PAÍSES SEM SAÍDA PARA O MAR"
Line 3 (pure white #F5F2EB): "A BATALHA PELOS PORTOS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Eurasian landmass.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Líder Absoluto: Cazaquistão no Mapa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite tracking shot centering over the vast territory of Kazakhstan between the Caspian Sea and the Altai Mountains.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Crisp 2D vector borders (2px line in #F5F2EB), flat masked national flag texture cleanly bound inside the official territory.
Text on screen: "1º CAZAQUISTÃO // 2.724.900 KM²" in uppercase white Orbitron Bold.
Badge: "O MAIOR PAÍS SEM COSTA OCEÂNICA DO MUNDO" in intense crimson red (#C8102E).
Camera: linear satellite glide across the steppes toward Astana.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "Mongólia e o Isolamento Entre Superpotências",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of Mongolia sandwiched between the colossal borders of Russia and China.
Geographically locked terrain coordinates, rigidly stable boundaries.
Vector border outline glowing in gold (#F59E0B) around Mongolia's 1.56 million km².
Text on screen: "2º MONGÓLIA // 1.564.116 KM²" in uppercase white Montserrat Bold.
Badge: "ENCLAVADA ENTRE RÚSSIA E CHINA" in JetBrains Mono (#F5F2EB).
Camera: slow orthographic drift across the Gobi Desert.
NO voice, NO speech, NO music. ONLY wind resonance and subtle radar ping.`
      },
      {
        id: 4,
        title: "O Bloco do Sahel: Chade, Níger e Mali",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking sweep over the African continent highlighting Chad (1.28M km²), Niger (1.27M km²) and Mali (1.24M km²).
Geographically locked terrain coordinates, rigidly stable desert topography, UN compliant borders.
Synchronized golden pins (#F59E0B) popping up over N'Djamena, Niamey and Bamako.
Text on screen: "3º CHADE · 4º NÍGER · 5º MALI // O GIGANTE SAHELIANO" in uppercase white Orbitron Bold.
Camera: linear tracking pan westward across West Africa.
NO voice, NO speech, NO music. ONLY low desert drone and telemetry click SFX.`
      },
      {
        id: 5,
        title: "A Etiópia e a Perda da Costa do Mar Vermelho",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite focus on the Horn of Africa, highlighting Ethiopia and the separation line with Eritrea and Djibouti.
Geographically locked terrain coordinates, rigidly stable Red Sea coastlines.
Glowing red vector line (#C8102E) showing the maritime access lost in 1993.
Text on screen: "6º ETIÓPIA // 1.104.300 KM² · 120 MILHÕES DE HABITANTES" in uppercase white Montserrat Bold.
Badge: "DEPENDÊNCIA DE 95% DO PORTO DE DJIBUTI" in intense crimson red.
Camera: steady push-in along the Addis Ababa-Djibouti railway corridor.
NO voice, NO speech, NO music. ONLY train rumble and tactical alert chime.`
      },
      {
        id: 6,
        title: "Bolívia e o Sonho Marítimo Perdido no Pacífico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus over South America, tracing the border between Bolivia, Chile and Peru from Lake Titicaca to Antofagasta.
Geographically locked terrain coordinates, rigidly stable Andean topography.
Dotted vector line in gold (#F59E0B) tracing the historical coastal territory lost in 1879.
Text on screen: "7º BOLÍVIA // 1.098.581 KM²" in uppercase white Montserrat Bold.
Badge: "A MARINHA DE GUERRA DO LAGO TITICACA" in white JetBrains Mono.
Camera: slow satellite glide over the Altiplano.
NO voice, NO speech, NO music. ONLY Andean wind gust and radar pulse.`
      },
      {
        id: 7,
        title: "Zâmbia, Afeganistão e República Centro-Africana",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view cycling rapidly through Zambia (8º), Afghanistan (9º) and the Central African Republic (10º).
Geographically locked terrain coordinates, UN compliant borders.
Rank badges: "8º ZÂMBIA (752.618 KM²) // 9º AFEGANISTÃO (652.864 KM²) // 10º RCA (622.984 KM²)".
Text on screen: "O TOP 10 DOS CONTINENTAIS ISOLADOS" in uppercase white Orbitron Bold.
Camera: smooth dynamic multi-point tracking.
NO voice, NO speech, NO music. ONLY digital data tick SFX.`
      },
      {
        id: 8,
        title: "O Custo Logístico e o Frete Dobrado",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic data animation comparing shipping container transit costs from coastal versus landlocked nations.
Geographically locked terrain coordinates, rigidly stable map boundaries.
Red bar graphic: "+80% DE CUSTO LOGÍSTICO MÉDIO // ATRASOS ALFANDEGÁRIOS".
Text on screen: "A PENALIDADE GEOGRÁFICA DO ISOLAMENTO" in uppercase white Montserrat Bold.
Camera: slow orthographic pullback showing global container corridors.
NO voice, NO speech, NO music. ONLY cargo horn echo and telemetry resolve chime.`
      },
      {
        id: 9,
        title: "Os Corredores Ferroviários e a Rota da Seda",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Eurasia with animated glowing green railway lines (#A8C3A6) cutting across Kazakhstan from China to Europe.
Geographically locked terrain coordinates, rigidly stable borders.
Text on screen: "CORREDOR CENTRAL // FERROVIAS TRANSCONTINENTAIS" in uppercase white Orbitron Bold.
Badge: "DE ENCLAVES A PIVÔS LOGÍSTICOS TERRESTRES" in gold (#F59E0B).
Camera: high-speed linear tracking following the rail line.
NO voice, NO speech, NO music. ONLY high-speed train whoosh and electronic chime.`
      },
      {
        id: 10,
        title: "Síntese Global e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of the rotating globe with all 44 landlocked countries illuminated simultaneously in warm gold.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Text on screen: "A BATALHA PELO OCEANO // VITALEGEO" in uppercase white Orbitron Bold.
Badge: "44 NAÇÕES // O DESTINO CONDICIONADO PELA TERRA" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: majestic orbital pull-back toward deep space horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 156: MAIORES RESERVAS DE PETRÓLEO
  {
    num: 156,
    titulo: "Quais São os Dez Países com as Maiores Reservas de Petróleo do Mundo Onde Trilhões de Barris Definem a Geopolítica Global?",
    titleL1: "O OURO NEGRO GLOBAL",
    titleL2: "AS MAIORES RESERVAS DE PETRÓLEO",
    titleL3: "TRILHÕES NO SUBSOLO",
    narration: "Quais são os dez países com as maiores reservas de petróleo do mundo onde trilhões de barris definem a geopolítica global? No subsolo do planeta repousam mais de um vírgula sete trilhão de barris comprovados de óleo bruto, concentrados de forma quase monopolística em um punhado de nações estratégicas. A Venezuela lidera o ranking mundial com estarrecedores trezentos e três bilhões de barris na Faixa Petrolífera do Orinoco, embora seu petróleo extrapesado exija tecnologia de refino complexa. A Arábia Saudita ocupa a segunda colocação com duzentos e sessenta e sete bilhões de barris convencionais de altíssima rentabilidade, operados a partir do megacampo de Ghawar. Em seguida aparecem o Irã, o Canadá com suas areias betuminosas de Alberta, o Iraque, os Emirados Árabes Unidos, o Kuwait, a Rússia, os Estados Unidos e a Líbia. Juntas, essas dez potências energéticas controlam o pulso da indústria pesada e determinam o equilíbrio bélico global. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting the Persian Gulf, Lake Maracaibo and Alberta in dark glowing obsidian gold.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O OURO NEGRO GLOBAL"
Line 2 (intense crimson red #C8102E): "AS MAIORES RESERVAS DE PETRÓLEO"
Line 3 (pure white #F5F2EB): "TRILHÕES NO SUBSOLO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Middle East and Caribbean basins.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Líder Mundial: Venezuela e a Faixa do Orinoco",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite tracking shot descending over northern South America and the Orinoco River basin in Venezuela.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Crisp 2D vector borders (2px line in #F5F2EB), flat masked national flag texture cleanly bound inside Venezuela.
Text on screen: "1º VENEZUELA // 303,8 BILHÕES DE BARRIS" in uppercase white Orbitron Bold.
Badge: "A MAIOR RESERVA COMPROVADA DO PLANETA" in intense crimson red (#C8102E).
Camera: linear satellite glide along the Orinoco heavy oil belt.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "Arábia Saudita e o Campo Gigante de Ghawar",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Arabian Peninsula focusing on the Eastern Province and the Persian Gulf coastline.
Geographically locked terrain coordinates, rigidly stable desert topography.
Tactical crosshair overlay (coord-crosshairs.svg) pinned on the Ghawar oil field.
Text on screen: "2º ARÁBIA SAUDITA // 267,1 BILHÕES DE BARRIS" in uppercase white Montserrat Bold.
Badge: "GHAWAR: O MAIOR CAMPO CONVENCIONAL DA TERRA" in gold (#F59E0B).
Camera: slow orthographic drift across the desert pipeline corridors.
NO voice, NO speech, NO music. ONLY low pipeline rumble and radar pulse SFX.`
      },
      {
        id: 4,
        title: "Irã e o Estreito Estratégico de Ormuz",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot across the Zagros Mountains and Khuzestan province in southwestern Iran.
Geographically locked terrain coordinates, rigidly stable Persian Gulf shores.
Glowing vector border outline in gold (#F59E0B).
Text on screen: "3º IRÃ // 208,6 BILHÕES DE BARRIS" in uppercase white Orbitron Bold.
Badge: "CONTROLE DO CHOKEPOINT DE ORMUZ" in intense crimson red (#C8102E).
Camera: linear tracking sweep south toward the Strait of Hormuz.
NO voice, NO speech, NO music. ONLY naval sonar pulse and deep sea echo.`
      },
      {
        id: 5,
        title: "Canadá e as Areias Betuminosas de Athabasca",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over western Canada focusing on northern Alberta and the Athabasca oil sands deposits.
Geographically locked terrain coordinates, rigidly stable boreal topography.
Telemetry overlay: "171,0 BILHÕES DE BARRIS // EXTRAÇÃO DE BETUME".
Text on screen: "4º CANADÁ // O GIGANTE ENERGÉTICO DA AMÉRICA DO NORTE" in uppercase white Montserrat Bold.
Camera: slow cinematic zoom-out showing the pipeline network heading south.
NO voice, NO speech, NO music. ONLY arctic wind whoosh and digital telemetry tick.`
      },
      {
        id: 6,
        title: "O Coração do Oriente Médio: Iraque, Emirados e Kuwait",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of the Mesopotamian basin and the Persian Gulf coast highlighting Iraq, UAE and Kuwait.
Geographically locked terrain coordinates, UN compliant borders.
Rank badges: "5º IRAQUE (145,0 B) // 6º EMIRADOS (113,0 B) // 7º KUWAIT (101,5 B)".
Text on screen: "A CONCENTRAÇÃO MÁXIMA DO GOLFO PÉRSICO" in uppercase white Orbitron Bold.
Camera: smooth dynamic multi-point tracking along the coast.
NO voice, NO speech, NO music. ONLY digital data tick SFX and radar ping.`
      },
      {
        id: 7,
        title: "Rússia, Estados Unidos e a Bacia Permiana",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing the Western Siberia basin in Russia (8º com 80,0 B) and the Permian Basin in Texas/USA (9º com 55,2 B).
Geographically locked terrain coordinates, rigidly stable borders.
Text on screen: "8º RÚSSIA · 9º ESTADOS UNIDOS // OS DOIS MAIORES PRODUTORES" in uppercase white Montserrat Bold.
Badge: "SHALE OIL AMERICANO VS. SIBÉRIA RUSSA" in JetBrains Mono (#F5F2EB).
Camera: dynamic intercontinental whip-pan.
NO voice, NO speech, NO music. ONLY data transition swoosh.`
      },
      {
        id: 8,
        title: "A Líbia e o Petróleo Doce do Mediterrâneo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus over North Africa and the Sirte Basin in Libya along the Mediterranean Sea.
Geographically locked terrain coordinates, rigidly stable coastlines.
Text on screen: "10º LÍBIA // 48,3 BILHÕES DE BARRIS" in uppercase white Orbitron Bold.
Badge: "A MAIOR RESERVA DO CONTINENTE AFRICANO" in gold (#F59E0B).
Camera: slow orthographic push-in toward Sirte.
NO voice, NO speech, NO music. ONLY desert wind drone and telemetry chime.`
      },
      {
        id: 9,
        title: "Os Chokepoints e os Petroleiros nos Mares",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global satellite tracking showing illuminated supertanker routes crossing Ormuz, Malaca, Suez e Bab-el-Mandeb.
Geographically locked terrain coordinates, rigidly stable coastlines.
Glowing crimson pulses (#C8102E) at each choke point.
Text on screen: "ROTAS CRÍTICAS // 60% DO PETRÓLEO NAVEGA POR ESTREITOS" in uppercase white Montserrat Bold.
Camera: wide orbital drift across the Indian Ocean.
NO voice, NO speech, NO music. ONLY naval radar pulse and oceanic roar.`
      },
      {
        id: 10,
        title: "Síntese Energética e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Majestic high-altitude orbital view of the darkened Earth with oil-producing hubs glowing like constellations of light.
Geographically locked terrain coordinates, rigidly stable continental outlines, UN compliant borders, absolutely NO landmass morphing.
Text on screen: "O MAPA DA ENERGIA // VITALEGEO" in uppercase white Orbitron Bold.
Badge: "1,7 TRILHÃO DE BARRIS // O COMBUSTÍVEL DA HISTÓRIA" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle orbital pull-back toward space horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 157: MAIORES PENÍNSULAS DO MUNDO
  {
    num: 157,
    titulo: "Quais São as Dez Maiores Penínsulas do Planeta Onde Línguas de Terra Gigantescas Avançam Pelos Oceanos?",
    titleL1: "FRONTEIRAS OCEÂNICAS",
    titleL2: "AS MAIORES PENÍNSULAS DO MUNDO",
    titleL3: "GIGANTES ENTRE MARES",
    narration: "Quais são as dez maiores penínsulas do planeta onde línguas de terra gigantescas avançam pelos oceanos? Cercadas por água em três lados e unidas aos continentes por istmos estratégicos, as penínsulas concentram algumas das rotas marítimas e civilizações mais influentes da história. A campeã indiscutível é a Península Arábica, que se estende por mais de três vírgula dois milhões de quilômetros quadrados entre o Mar Vermelho, o Golfo Pérsico e o Oceano Índico. No extremo sul da Terra, a Península Antártica avança congelada em direção à América do Sul por mais de mil e trezentos quilômetros. Na Ásia, a Península Indochinesa canaliza os rios vitais do Sudeste Asiático, enquanto no Canadá a Península de Labrador abraça o Atlântico Norte com suas tundras glaciais. Da Escandinávia e Península Ibérica à Anatólia e à Coreia, essas projeções monumentais definem o comércio global e abrigam as maiores frotas navais do planeta. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting the Arabian, Antarctic and Indochina peninsulas projecting into ocean depths.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "FRONTEIRAS OCEÂNICAS"
Line 2 (intense crimson red #C8102E): "AS MAIORES PENÍNSULAS DO MUNDO"
Line 3 (pure white #F5F2EB): "GIGANTES ENTRE MARES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Middle East.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "A Campeã Absoluta: Península Arábica",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite tracking shot descending over the vast landmass of the Arabian Peninsula bounded by the Red Sea and Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing.
Crisp 2D vector outline (2px line in #F5F2EB) framing the 3.23 million km² projection.
Text on screen: "1º PENÍNSULA ARÁBICA // 3.237.500 KM²" in uppercase white Orbitron Bold.
Badge: "A MAIOR PROJEÇÃO CONTINENTAL DA TERRA" in intense crimson red (#C8102E).
Camera: linear satellite glide south across the Rub' al Khali desert.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Espinha de Gelo: Península Antártica",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Antarctic Peninsula reaching north toward the Drake Passage and Tierra del Fuego.
Geographically locked terrain coordinates, rigidly stable glacial shelf outlines.
Altimeter and length readout: "1.300 KM DE EXTENSÃO // CORDILHEIRA ANTARCTANDES".
Text on screen: "2º PENÍNSULA ANTÁRTICA // 1.400.000 KM²" in uppercase white Montserrat Bold.
Camera: slow cinematic flight along the spine of ice and frozen fjords.
NO voice, NO speech, NO music. ONLY polar wind gust and glacial cracking echo.`
      },
      {
        id: 4,
        title: "O Sudeste Asiático: Península Indochinesa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking sweep over Southeast Asia highlighting the Indochinese Peninsula (Vietnam, Laos, Cambodia, Thailand and Myanmar).
Geographically locked terrain coordinates, rigidly stable coastlines along the South China Sea and Andaman Sea.
Glowing river line in cyan tracing the Mekong River through the peninsula.
Text on screen: "3º PENÍNSULA INDOCHINESA // 1.938.000 KM²" in uppercase white Orbitron Bold.
Camera: linear tracking pan south toward the Gulf of Thailand.
NO voice, NO speech, NO music. ONLY tropical ambient hum and digital radar ping.`
      },
      {
        id: 5,
        title: "O Escudo Boreal: Península de Labrador no Canadá",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over eastern Canada capturing the rugged Labrador Peninsula between Hudson Bay and the Atlantic Ocean.
Geographically locked terrain coordinates, rigidly stable rocky coastlines.
Badge: "1.400.000 KM² // O ESCUDO CANADENSE ATLÂNTICO" in sage green (#A8C3A6).
Text on screen: "4º PENÍNSULA DE LABRADOR // CANADÁ" in uppercase white Montserrat Bold.
Camera: high-altitude satellite glide over subarctic lakes and tundra.
NO voice, NO speech, NO music. ONLY cold wind rumble and telemetry tick.`
      },
      {
        id: 6,
        title: "O Norte Europeu: Península Escandinava",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of Northern Europe showcasing Norway, Sweden and northern Finland forming the Scandinavian Peninsula.
Geographically locked terrain coordinates, rigidly stable Baltic and Atlantic fjords.
Vector borders in Bege Cartográfico tracing the 750,000 km² landmass.
Text on screen: "5º PENÍNSULA ESCANDINAVA // 750.000 KM²" in uppercase white Orbitron Bold.
Badge: "DO BÁLTICO AO OCEANO ÁRTICO" in gold (#F59E0B).
Camera: slow orthographic drift northward past the Norwegian fjords.
NO voice, NO speech, NO music. ONLY ocean surf roar and telemetry chime.`
      },
      {
        id: 7,
        title: "Península Ibérica: O Istmo dos Pireneus",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus over Southwestern Europe capturing Spain and Portugal bounded by the Atlantic and Mediterranean.
Geographically locked terrain coordinates, rigidly stable Iberian shores.
Tactical crosshair overlay on the Pyrenees mountain barrier.
Text on screen: "6º PENÍNSULA IBÉRICA // 582.000 KM²" in uppercase white Montserrat Bold.
Badge: "O GUARDIÃO DO ESTREITO DE GIBRALTAR" in intense crimson red (#C8102E).
Camera: linear satellite sweep from Lisbon to Madrid and Barcelona.
NO voice, NO speech, NO music. ONLY warm Mediterranean wind and radar sweep SFX.`
      },
      {
        id: 8,
        title: "Península da Anatólia e Chifre da África",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view highlighting the Anatolian Peninsula in Turkey (7º com 500.000 km²) and the Somali Peninsula / Horn of Africa (8º).
Geographically locked terrain coordinates, UN compliant borders.
Rank badges: "7º ANATÓLIA (500.000 KM²) // 8º CHIFRE DA ÁFRICA (Somália / 400.000 KM²)".
Text on screen: "A PONTE ENTRE EUROPA, ÁSIA E ÁFRICA" in uppercase white Orbitron Bold.
Camera: dynamic intercontinental sweep.
NO voice, NO speech, NO music. ONLY data transition swoosh.`
      },
      {
        id: 9,
        title: "Península de Kamchatka e Península Coreana",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking sweep over the volcanic ridge of Kamchatka in the Russian Far East (9º com 270.000 km²) and the Korean Peninsula (10º com 220.000 km²).
Geographically locked terrain coordinates, rigidly stable Pacific shores.
Glowing volcanic cone pins over Kamchatka and the 38th parallel DMZ line.
Text on screen: "9º KAMCHATKA · 10º COREIA // O CÍRCULO DE FOGO DO PACÍFICO" in uppercase white Montserrat Bold.
Camera: dynamic linear satellite track along the East Asian volcanic rim.
NO voice, NO speech, NO music. ONLY volcanic deep rumble and digital radar ping.`
      },
      {
        id: 10,
        title: "Síntese Cartográfica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Majestic high-altitude orbital view of planet Earth highlighting its coastlines and peninsular extensions against the deep blue oceans.
Geographically locked terrain coordinates, rigidly stable continental outlines, UN compliant borders, absolutely NO landmass morphing.
Text on screen: "A FORMA DOS CONTINENTES // VITALEGEO" in uppercase white Orbitron Bold.
Badge: "ONDE A TERRA ENCONTRA A IMENSIDÃO DOS MARES" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle orbital pull-back toward space horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  }
];

function buildMarkdown(script) {
  let md = '# Video ' + script.num + ' — ' + script.titulo + '\n\n';
  md += '### 1. Roteiro\n\n';
  md += script.narration + '\n\n';
  md += '---\n\n';
  md += '### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n';

  script.prompts.forEach((p) => {
    md += '#### Prompt ' + p.id + ' — ' + p.title + ' (4s)\n';
    md += '```text\n' + p.text + '\n```\n\n';
  });

  md += '---\n\n';
  md += '### 3. Legenda\n\n';
  md += script.titulo + '\n\n';
  md += '#geografia #geopolitica #mapas\n';

  return md;
}

scripts.forEach(s => {
  const filePath = path.join(ROTEIROS_DIR, 'Video ' + s.num + '.md');
  const content = buildMarkdown(s);
  fs.writeFileSync(filePath, content, { encoding: 'utf8' });
  console.log('Video ' + s.num + ' criado: ' + filePath + ' (' + content.length + ' bytes)');
});
