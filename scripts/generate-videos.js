import fs from 'node:fs';
import path from 'node:path';

const ROTEIROS_DIR = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';

const scripts = [
  // VIDEO 148: CHILE
  {
    num: 148,
    titulo: "Como a Guerra do Pacífico e os Tratados Andinos Forjaram o Formato Estreito e Extremo do Chile?",
    titleL1: "A FITA TERRITORIAL",
    titleL2: "O MAPA EXTREMO DO CHILE",
    titleL3: "ANDES E PACÍFICO",
    narration: "Como a Guerra do Pacífico e os Tratados Andinos forjaram o formato estreito e extremo do Chile? Espremido entre a colossal cordilheira dos Andes e a profundeza do Pacífico, o país desenvolveu a geografia mais alongada da Terra, com quatro mil duzentos e setenta quilômetros de extensão norte a sul e largura média de míseros cento e setenta e sete quilômetros. Durante séculos, o Chile colonial limitava-se ao vale central fértil de Santiago. Tudo mudou a partir de 1879, quando a descoberta de salitre e guano no deserto de Atacama deflagrou a Guerra do Pacífico contra a Bolívia e o Peru. Com sua frota naval blindada, o exército chileno marchou sobre o norte, anexou as províncias de Antofagasta e Tarapacá e retirou da Bolívia toda a sua saída soberana para o mar. Em 1881, sob risco de invasão simultânea, negociou com a Argentina a divisa pelas montanhas mais altas dos Andes e garantiu o domínio exclusivo do Estreito de Magalhães. Uma muralha geológica transformada em império marítimo. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into South America and the Andean mountain spine.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FITA TERRITORIAL"
Line 2 (intense crimson red #C8102E): "O MAPA EXTREMO DO CHILE"
Line 3 (pure white #F5F2EB): "ANDES E PACÍFICO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Andes.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Protagonista Geográfico no Mapa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite flyover tracking along the elongated needle-thin shape of Chile.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders (2px line in #F5F2EB), flat masked national flag texture cleanly bound inside the official territory.
Text on screen: "CHILE // 4.270 KM DE EXTENSÃO" in uppercase white Orbitron Bold.
Badge: "LARGURA MÉDIA DE APENAS 177 KM" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot southward along the western coast.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Geografia Crítica e o Isolamento",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme elevation topographic view showcasing the Andean mountain wall towering over 6,000 meters next to Santiago.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical crosshair overlay (coord-crosshairs.svg) on Mount Aconcagua and the central valleys.
Text on screen: "MURALHA ANDINA // BARREIRA OROGRÁFICA" in uppercase white Montserrat Bold.
Badge: "PONTOS MAIS ALTOS ISOLANDO O PACÍFICO" in sage green (#A8C3A6).
Camera: steady diagonal flyover highlighting the steep mountain slope dropping into the sea.
NO voice, NO speech, NO music. ONLY ambient mountain wind rumble SFX.`
      },
      {
        id: 4,
        title: "A Raiz Histórica e o Deserto de Atacama",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite lock moving northward toward the hyper-arid Atacama desert plateau.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in amber lighting up historical 1879 boundary lines.
Text on screen: "DESERTO DE ATACAMA // A DISPUTA DO SALITRE" in uppercase white Orbitron Bold.
Badge: "NITRATO DE SÓDIO E GUANO PARA A EUROPA" in gold (#F59E0B).
Camera: smooth linear zoom into the mining port of Antofagasta.
NO voice, NO speech, NO music. ONLY tactical radar ping SFX.`
      },
      {
        id: 5,
        title: "A Guerra do Pacífico e a Perda do Litoral",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military vector animation depicting the Chilean naval and ground advance of 1879.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bolivian Department of the Litoral highlighted in red pulses transitioning into Chilean sovereign vector boundary.
Text on screen: "GUERRA DO PACÍFICO (1879–1884) // TRATADO DE 1904" in uppercase white Orbitron Bold.
Badge: "BOLÍVIA PERDE 400 KM DE COSTA OCEÂNICA" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in over the captured coastline.
NO voice, NO speech, NO music. ONLY low atmospheric telemetry pulse SFX.`
      },
      {
        id: 6,
        title: "O Tratado de Limites de 1881 com a Argentina",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional cartographic overview of the southern cone dividing Patagonia and the Andes.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing vector demarcation line running along the Andean continental divide (divortium aquarum).
Text on screen: "TRATADO DE LIMITES DE 1881 // BUENOS AIRES" in uppercase white Montserrat Bold.
Badge: "DIVISÃO DE ÁGUAS NAS MONTANHAS MAIS ALTAS" in white (#F5F2EB).
Camera: tracking along the high peaks vector line toward the southern ice fields.
NO voice, NO speech, NO music. ONLY navigational pulse SFX.`
      },
      {
        id: 7,
        title: "O Controle Estratégico do Estreito de Magalhães",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite flyover over the winding waters of the Strait of Magellan and Tierra del Fuego.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chilean sovereignty vector mask cleanly binding both shorelines of the strait in glowing sage green (#A8C3A6).
Text on screen: "ESTREITO DE MAGALHÃES // CONTROLE EXCLUSIVO" in uppercase white Orbitron Bold.
Badge: "NEUTRALIZADO PARA O COMÉRCIO GLOBAL" in gold (#F59E0B).
Camera: dynamic linear satellite sweep along the maritime channel.
NO voice, NO speech, NO music. ONLY ocean wind and naval telemetry chime SFX.`
      },
      {
        id: 8,
        title: "A Pacificação de Araucanía e Colonização do Sul",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic focus on the Biobío river and the temperate rainforests of southern Chile.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector expansion lines bridging the central valley to the fjords of Puerto Montt and Punta Arenas.
Text on screen: "INTEGRAÇÃO TERRITORIAL // SÉCULO XIX" in uppercase white Montserrat Bold.
Badge: "CONTINUIDADE GEOGRÁFICA DO HEXÁGONO ANDINO" in sage green (#A8C3A6).
Camera: steady diagonal flyover at constant orbital altitude.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.`
      },
      {
        id: 9,
        title: "A Projeção Tricontinental e Haia",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital pull-back displaying the South American continent, Easter Island (Rapa Nui) in the Pacific, and the Antarctic claim.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Maritime boundary bisector line in the north off Arica marked with CIJ 2014 coordinates in JetBrains Mono.
Text on screen: "DOUTRINA TRICONTINENTAL // CONTINENTE, PACÍFICO E ANTÁRTICA" in uppercase white Orbitron Bold.
Badge: "756.000 KM² SOBERANOS NA AMÉRICA DO SUL" in crimson red (#C8102E).
Camera: regional overview displaying oceanic and polar projection.
NO voice, NO speech, NO music. ONLY subtle tactical sonar pulse SFX.`
      },
      {
        id: 10,
        title: "Síntese Territorial e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K orthographic satellite perspective showcasing the entire Pacific rim and the Andean ridge against the curvature of the Earth.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Chilean needle contour.
Text on screen: "A FORÇA DA GEOGRAFIA // CHILE" in uppercase white Orbitron Bold.
Badge: "DA ARIDEZ DE ATACAMA AOS GLACIARES DO CABO HORN" in gold (#F59E0B).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 149: PAQUISTÃO / GWADAR
  {
    num: 149,
    titulo: "Por Que o Porto de Gwadar e o Corredor com a China Fazem do Paquistão o Ponto Mais Crítico do Sul da Ásia?",
    titleL1: "A ROTA CHINESA",
    titleL2: "O CORREDOR DE GWADAR",
    titleL3: "O PIVÔ DO SUL DA ÁSIA",
    narration: "Por que o porto de Gwadar e o corredor com a China fazem do Paquistão o ponto mais crítico do Sul da Ásia? Situado a apenas quatrocentos quilômetros da garganta petrolífera do Estreito de Ormuz, o porto de águas profundas de Gwadar é a peça-chave do megaprojeto de sessenta e dois bilhões de dólares do Corredor Econômico China-Paquistão. Para Pequim, a rota terrestre representa a fuga definitiva do dilema de Malaca: o petróleo do Golfo desembarca no Mar da Arábia e sobe por oleodutos paralelos à Rodovia do Karakoram até a província chinesa de Xinjiang, cortando dez mil quilômetros de rota naval vigiada pelos Estados Unidos. Mas a geografia paquistanesa cobra um preço severo: a leste, a rivalidade nuclear com a Índia na caixa-d'água da Caxemira; a oeste, a cerca militarizada da Linha Durand com o Afeganistão; e no solo do Baluquistão, uma insurgência separatista armada que desafia os comboios de engenheiros estrangeiros. Um vulcão estratégico no coração da Eurásia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Arabian Sea and South Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ROTA CHINESA"
Line 2 (intense crimson red #C8102E): "O CORREDOR DE GWADAR"
Line 3 (pure white #F5F2EB): "O PIVÔ DO SUL DA ÁSIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Balochistan coastline.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Protagonista no Mapa: O Porto de Gwadar",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite lock over the hammerhead peninsula and deep-sea container terminal of Gwadar.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) and glowing terminal footprint.
Text on screen: "PORTO DE GWADAR // MAR DA ARÁBIA" in uppercase white Orbitron Bold.
Badge: "A APENAS 400 KM DO ESTREITO DE ORMUZ" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the bay.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Proximidade do Petróleo e o Contorno a Malaca",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide regional perspective showing the proximity of Gwadar to the Persian Gulf compared to the 12,000 km sea route around India to Malacca.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Animated vector line in Vermelho Destaque (#C8102E) marking the vulnerable sea lane vs. glowing green line inland.
Text on screen: "O DILEMA DE MALACA // VULNERABILIDADE NAVAL" in uppercase white Montserrat Bold.
Badge: "ENCOLHENDO A ROTA EM 10.000 KM" in sage green (#A8C3A6).
Camera: linear lateral pan shot across the Indian Ocean toward Malacca.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.`
      },
      {
        id: 4,
        title: "A Artéria do Karakoram e o CPEC",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite sweep tracking the highway and pipeline vector northward from Islamabad across the colossal Karakoram range.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing vector route climbing up to the Khunjerab Pass at 4,693 meters altitude on the China border.
Text on screen: "RODOVIA DO KARAKORAM // 4.693 M DE ALTITUDE" in uppercase white Orbitron Bold.
Badge: "CPEC: US$ 62 BILHÕES CONECTANDO À XINJIANG" in gold (#F59E0B).
Camera: smooth linear zoom into the snow-capped mountain pass.
NO voice, NO speech, NO music. ONLY subtle radar ping SFX.`
      },
      {
        id: 5,
        title: "A Bacia do Rio Indo e a Hidropolítica",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic lock on the Indus River irrigation network flowing through Punjab and Sindh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 6 river tributaries highlighted in blue vectors crossing from the Indian-administered Kashmir.
Text on screen: "BACIA DO RIO INDO // A SOBREVIVÊNCIA DA NAÇÃO" in uppercase white Montserrat Bold.
Badge: "90% DA AGRICULTURA ALIMENTADA PELO DEGELO DO HIMALAIA" in white (#F5F2EB).
Camera: slow cinematic downward push-in over the green agricultural belt in the desert.
NO voice, NO speech, NO music. ONLY water flow and low atmospheric telemetry SFX.`
      },
      {
        id: 6,
        title: "A Linha de Controle na Caxemira (LoC)",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical aerial perspective of the heavily militarized 740 km Line of Control dividing Kashmir.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bunkers, trenches, and electrified fences represented by sharp red telemetry markers (#C8102E).
Text on screen: "LINHA DE CONTROLE (LoC) // CAXEMIRA" in uppercase white Orbitron Bold.
Badge: "FRONTEIRA DE DOIS ARSENAIS NUCLEARES" in intense crimson red (#C8102E).
Camera: tracking along glowing vector line through glaciated valleys.
NO voice, NO speech, NO music. ONLY tactical interface SFX.`
      },
      {
        id: 7,
        title: "A Linha Durand e o Atrito com o Afeganistão",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite sweep along the rugged Hindu Kush mountains marking the 2,670 km Durand Line.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cerca dupla de arame farpado e postos avançados destacados em linhas finas em Bege Cartográfico.
Text on screen: "LINHA DURAND (1893) // DIVIDINDO OS PASHTUNS" in uppercase white Montserrat Bold.
Badge: "JAMAIS RECONHECIDA PELOS GOVERNOS DE CABUL" in gold (#F59E0B).
Camera: linear tracking shot across the Khyber Pass and tribal ridges.
NO voice, NO speech, NO music. ONLY mountain wind and tactical radio static SFX.`
      },
      {
        id: 8,
        title: "A Insurgência do Baluquistão e a Segurança do CPEC",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide topographic overview of the vast, arid Balochistan plateau surrounding Gwadar.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Security corridor zones highlighted in sage green (#A8C3A6) protected by the 30,000 soldiers of the Special Security Division.
Text on screen: "BALUQUISTÃO // 44% DO TERRITÓRIO NACIONAL" in uppercase white Montserrat Bold.
Badge: "DIVISÃO ESPECIAL PROTEGENDO O CORREDOR CHINÊS" in sage green (#A8C3A6).
Camera: steady diagonal flyover at constant orbital altitude.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.`
      },
      {
        id: 9,
        title: "O Tabuleiro Regional: Índia, China e Golfo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional overview pulling back to reveal Iran (Chabahar port), the Persian Gulf, India, and western China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Alliances and trade corridors displayed with clean vector flows in amber and green.
Text on screen: "O TABULEIRO DA EURÁSIA // ALIANÇAS E PRESSÕES" in uppercase white Orbitron Bold.
Badge: "EQUILÍBRIO ENTRE PEQUIM, RIAD E WASHINGTON" in white (#F5F2EB).
Camera: regional overview displaying alliance zones and boundaries.
NO voice, NO speech, NO music. ONLY subtle tactical sonar pulse SFX.`
      },
      {
        id: 10,
        title: "Síntese Geopolítica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K orthographic satellite perspective from the Arabian Sea to the roof of the world in the Himalayas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) binding the sovereign shape of Pakistan.
Text on screen: "A ENCRUZILHADA NUCLEAR // PAQUISTÃO" in uppercase white Orbitron Bold.
Badge: "ONDE SE DECIDE O EQUILÍBRIO DO SUL DA ÁSIA" in intense crimson red (#C8102E).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental satellite horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 150: TAMPÃO DE DARIÉN
  {
    num: 150,
    titulo: "Por Que Uma Selva de Cem Quilômetros Entre a Colômbia e o Panamá É o Único Ponto Onde a Rodovia Pan-Americana Foi Interrompida?",
    titleL1: "O ELO PERDIDO",
    titleL2: "O TAMPÃO DE DARIÉN",
    titleL3: "A SELVA SEM ESTRADAS",
    narration: "Por que uma selva de cem quilômetros entre a Colômbia e o Panamá é o único ponto onde a Rodovia Pan-Americana foi interrompida? Com cerca de trinta mil quilômetros contínuos ligando as tundras do Alasca à ponta sul da Argentina, a maior rodovia da Terra para abruptamente em Yaviza, no Panamá, e só reaparece cento e seis quilômetros adiante, em Turbo, na Colômbia. A causa dessa ruptura intransponível é o Tampão de Darién. Geotecnicamente, o pântano de Atrato é um abismo de turfas e lodo móvel onde sondas descem setenta metros sem encontrar rocha sólida para fundações de viadutos. O clima despeja até dez mil milímetros de chuva por ano, engolindo aterros rodoviários. A barreira ambiental protege uma das maiores reservas da biosfera da UNESCO e o lar dos povos Emberá e Guna. No vácuo do asfalto, o cartel do Clã do Golfo transformou a floresta na rota migratória mais extrema e lucrativa das Américas, onde quinhentas mil pessoas cruzam a lama a pé a cada ano. A selva que derrotou a engenharia do planeta. O próximo mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Central American isthmus connecting to South America.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O ELO PERDIDO"
Line 2 (intense crimson red #C8102E): "O TAMPÃO DE DARIÉN"
Line 3 (pure white #F5F2EB): "A SELVA SEM ESTRADAS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the dense green Darien jungle.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "A Rodovia Pan-Americana de 30.000 km",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic satellite tracking shot following the vector line of the Pan-American Highway from North America down through Central America.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The highway lights up in glowing gold vector line, abruptly terminating in the town of Yaviza, Panama.
Text on screen: "RODOVIA PAN-AMERICANA // 30.000 KM" in uppercase white Orbitron Bold.
Badge: "O FIM DO ASFALTO EM YAVIZA (PANAMÁ)" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot leading to the dead end.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "O Hiato de 106 km no Mapa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite lock showing the gap between Yaviza in Panama and Turbo / Lomas Aisladas in Colombia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dashed red vector line (#C8102E) marking the missing 106 km link across the dense rainforest.
Text on screen: "HIATO DE 106 KM // RUPTURA CONTINENTAL" in uppercase white Montserrat Bold.
Badge: "O ÚNICO TRECHO INTERROMPIDO DA AMÉRICA" in crimson red (#C8102E).
Camera: steady diagonal flyover at constant altitude showing the vast green carpet.
NO voice, NO speech, NO music. ONLY jungle wind and atmospheric rumble SFX.`
      },
      {
        id: 4,
        title: "O Pântano de Atrato e o Desafio Geotécnico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic focus over the flooded wetlands and meandering channels of the lower Atrato river basin.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crosshair overlay displaying soil depth metrics: "SONDAGEM: >70M DE LODO SEM ROCHA" in JetBrains Mono.
Text on screen: "PÂNTANO DE ATRATO // O PESADELO GEOTÉCNICO" in uppercase white Orbitron Bold.
Badge: "TURFAS MÓVEIS ONDE FUNDAÇÕES AFUNDAM" in gold (#F59E0B).
Camera: smooth linear zoom into the waterlogged swamp expanse.
NO voice, NO speech, NO music. ONLY subtle radar ping and bubble SFX.`
      },
      {
        id: 5,
        title: "O Regime de Chuvas e a Força da Natureza",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of cloud banks and torrential rain curtains over Serranía del Darién.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical precipitation gauge graphic in sage green: "5.000 A 10.000 MM DE CHUVA/ANO".
Text on screen: "PRECIPITAÇÃO EXTREMA // CHUVA TROPICAL" in uppercase white Montserrat Bold.
Badge: "ENXURRADAS QUE DESTRUIRAM TÚNEIS E ATERROS" in sage green (#A8C3A6).
Camera: slow cinematic downward push-in over the mist-covered mountain ridges.
NO voice, NO speech, NO music. ONLY thunder rumble and rain atmospheric SFX.`
      },
      {
        id: 6,
        title: "A Reserva da Biosfera e os Povos Originários",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Aerial satellite sweep showcasing the pristine canopy of Darién National Park (UNESCO World Heritage).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector boundary overlay highlighting Emberá-Wounaan and Kuna indigenous territories in emerald green.
Text on screen: "PARQUE NACIONAL DARIÉN // RESERVA DA BIOSFERA" in uppercase white Orbitron Bold.
Badge: "579.000 HECTARES BLINDADOS PELA ECOLOGIA" in sage green (#A8C3A6).
Camera: tracking along the Tuira river course.
NO voice, NO speech, NO music. ONLY ambient jungle data chime SFX.`
      },
      {
        id: 7,
        title: "A Barreira Sanitária da Febre Aftosa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental scale map highlighting North and Central America free of foot-and-mouth disease vs. South America.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical shield vector graphic over Darién representing the biological quarantine barrier.
Text on screen: "BARREIRA SANITÁRIA // PRESSÃO DE WASHINGTON" in uppercase white Montserrat Bold.
Badge: "PROTEGENDO A PECUÁRIA DA AMÉRICA DO NORTE" in white (#F5F2EB).
Camera: dynamic linear satellite sweep from Bogota to Panama City.
NO voice, NO speech, NO music. ONLY tactical interface pulse SFX.`
      },
      {
        id: 8,
        title: "O Domínio do Cartel do Clã do Golfo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map highlighting the clandestine routes from Necoclí and Capurganá through the mountain trails.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red vector routes (#C8102E) pulsing along the jungle paths of Loma de la Muerte.
Text on screen: "CLÃ DO GOLFO // COBRANÇA ARMADA E NARCOTRÁFICO" in uppercase white Orbitron Bold.
Badge: "ROTAS DE COCAÍNA E PEDÁGIO CLANDESTINO" in intense crimson red (#C8102E).
Camera: steady diagonal flyover tracing the foot trail corridors.
NO voice, NO speech, NO music. ONLY low atmospheric hum and radio static SFX.`
      },
      {
        id: 9,
        title: "A Crise Humanitária da Travessia Migratória",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot over the remote reception camps of Lajas Blancas and San Vicente in Panama.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Flow vectors in amber originating from multiple continents converging on the Darien gap.
Text on screen: "MAIS DE 500.000 MIGRANTES POR ANO" in uppercase white Orbitron Bold.
Badge: "A CAMINHADA MAIS PERIGOSA DO HEMISFÉRIO" in gold (#F59E0B).
Camera: regional overview pulling back to reveal the Central American route.
NO voice, NO speech, NO music. ONLY subtle tactical sonar pulse SFX.`
      },
      {
        id: 10,
        title: "Síntese Geográfica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K orthographic satellite perspective from the Caribbean Sea to the Pacific Ocean across the Darien isthmus.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Colombia-Panama border.
Text on screen: "A NATUREZA VENCEU O ASFALTO // DARIÉN" in uppercase white Orbitron Bold.
Badge: "O ÚLTIMO BASTIÃO INTOCADO DAS AMÉRICAS" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 151: BAÍA DE GUANTÁNAMO
  {
    num: 151,
    titulo: "Como os Estados Unidos Mantêm Uma Base Militar Soberana de Cento e Dezessete Quilômetros Quadrados Cravada no Leste de Cuba?",
    titleL1: "O ENCLAVE NAVAL",
    titleL2: "GUANTÁNAMO EM CUBA",
    titleL3: "CENTO E VINTE ANOS DE BASE",
    narration: "Como os Estados Unidos mantêm uma base militar soberana de cento e dezessete quilômetros quadrados cravada no leste de Cuba? No sudeste da ilha caribenha, a Estação Naval da Baía de Guantánamo é a maior anomalia extraterritorial do continente. O enclave nasceu em 1903, quando Washington condicionou a independência cubana à Emenda Platt, arrendando a baía para uma estação de carvão por um aluguel perpétuo de quatro mil e oitenta e cinco dólares anuais. O tratado de 1934 amarrou a armadilha: o arrendamento só pode ser cancelado se ambos os países concordarem ou se as tropas americanas abandonarem voluntariamente o local. Após a Revolução de 1959, Fidel Castro cortou a água e a luz da base e passou a empilhar os cheques de aluguel recusados no Palácio de Havana. Os americanos responderam erguendo sua própria usina de dessalinização de água do mar e fortificando a fronteira de vinte e oito quilômetros com sensores e milhares de minas conhecidas como a Cortina de Cactos. Um bunker militar soberano cravado no coração da ilha socialista. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Caribbean Sea and eastern Cuba.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O ENCLAVE NAVAL"
Line 2 (intense crimson red #C8102E): "GUANTÁNAMO EM CUBA"
Line 3 (pure white #F5F2EB): "CENTO E VINTE ANOS DE BASE"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Guantanamo Bay.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Protagonista no Mapa: A Baía de Guantánamo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the 117.6 km² footprint of the US Naval Station enclosing the bay mouth.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Vermelho Destaque (#C8102E, 2px) tracing the military base boundary.
Text on screen: "BASE NAVAL DE GUANTÁNAMO // 117,6 KM²" in uppercase white Orbitron Bold.
Badge: "JURISDIÇÃO DOS EUA EM TERRITÓRIO CUBANO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot along the naval harbor.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "A Raiz Histórica: A Emenda Platt de 1901",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic overview of Cuba showing the strategic position of Guantanamo commanding the Windward Passage to Panama.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Historical treaty date overlay: "1903 // TRATADO DE ESTAÇÕES NAVAIS".
Text on screen: "EMENDA PLATT // A INDEPENDÊNCIA CONDICIONADA" in uppercase white Montserrat Bold.
Badge: "ARRENDAMENTO PERPÉTUO POR MOEDAS DE OURO" in gold (#F59E0B).
Camera: linear lateral pan shot across eastern Cuba.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.`
      },
      {
        id: 4,
        title: "A Armadilha Jurídica do Tratado de 1934",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite lock on the treaty perimeter demarcation dividing US and Cuban territory.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Document clause callout overlay: "EXTINÇÃO APENAS POR CONSENTIMENTO MÚTUO".
Text on screen: "O IMPASSE DE 1934 // SEM DATA DE TÉRMINO" in uppercase white Orbitron Bold.
Badge: "HAVANA NÃO PODE RESCINDIR UNILATERALMENTE" in crimson red (#C8102E).
Camera: smooth linear zoom into the perimeter gate at Caimanera.
NO voice, NO speech, NO music. ONLY subtle radar ping SFX.`
      },
      {
        id: 5,
        title: "A Revolução de 1959 e os Cheques Recusados",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view moving between Havana and the naval station.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Graphic overlay displaying the annual lease check: "US$ 4.085 ANUAIS // RECUSADOS DESDE 1959".
Text on screen: "FIDEL CASTRO // O CHEQUE GUARDADO NA GAVETA" in uppercase white Montserrat Bold.
Badge: "RECUSA DO ALUGUEL COMO PROTESTO DE SOBERANIA" in white (#F5F2EB).
Camera: slow cinematic downward push-in over the naval base airstrip.
NO voice, NO speech, NO music. ONLY paper rustle and telemetry hum SFX.`
      },
      {
        id: 6,
        title: "A Cortina de Cactos e o Perímetro Minado",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical aerial perspective of the 28.5 km fortified fence line cutting across arid hills.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Perimeter highlighted in red telemetry lines with watchtowers and former minefield sectors.
Text on screen: "THE CACTUS CURTAIN // 28,5 KM DE CERCA" in uppercase white Orbitron Bold.
Badge: "O MAIOR CAMPO MINADO DAS AMÉRICAS NA GUERRA FRIA" in intense crimson red (#C8102E).
Camera: tracking along the razor-wire fence corridor.
NO voice, NO speech, NO music. ONLY tactical interface SFX.`
      },
      {
        id: 7,
        title: "A Autossuficiência Absoluta da Base",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite sweep over the reverse-osmosis water desalination plant and power grid inside the base.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Utility vector flows showing zero dependency on Cuban municipal water and electricity grids.
Text on screen: "AUTOSSUFICIÊNCIA TOTAL // USINA DE DESSALINIZAÇÃO" in uppercase white Montserrat Bold.
Badge: "6.000 HABITANTES ABASTECIDOS PELO OCEANO" in sage green (#A8C3A6).
Camera: dynamic linear satellite sweep along Leeward Point.
NO voice, NO speech, NO music. ONLY turbine hum and ocean telemetry SFX.`
      },
      {
        id: 8,
        title: "O Centro de Detenção e o Limbo Jurídico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Aerial satellite view over Camp Delta and the high-security detention compounds.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Juridical status badge: "EXTRATERRITORIALIDADE PÓS-11/SET // SEM CONSTITUIÇÃO CIVIL".
Text on screen: "CAMP DELTA // O LIMBO JURÍDICO INTERNACIONAL" in uppercase white Orbitron Bold.
Badge: "CUSTOS OPERACIONAIS DE US$ 500 MILHÕES/ANO" in gold (#F59E0B).
Camera: steady diagonal flyover at constant altitude.
NO voice, NO speech, NO music. ONLY ambient data chime SFX.`
      },
      {
        id: 9,
        title: "O Ponto Estratégico no Mar do Caribe",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional perspective pulling back to reveal Cuba, Haiti, Jamaica, and the Windward Passage naval choke.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval patrol vectors monitoring Caribbean shipping lanes.
Text on screen: "PASSAGEM DOS VENTOS // VIGILÂNCIA DO CANAL" in uppercase white Montserrat Bold.
Badge: "BASTIÃO NAVAL PERPÉTUO DOS ESTADOS UNIDOS" in white (#F5F2EB).
Camera: regional overview displaying Caribbean maritime approaches.
NO voice, NO speech, NO music. ONLY subtle tactical sonar pulse SFX.`
      },
      {
        id: 10,
        title: "Síntese Geopolítica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K orthographic satellite perspective showcasing the entire island of Cuba against the deep blue Caribbean horizon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) highlighting the Guantanamo enclave.
Text on screen: "O ENCLAVE INQUEBRÁVEL // GUANTÁNAMO" in uppercase white Orbitron Bold.
Badge: "A MAIOR ANOMALIA CARTOGRÁFICA DO CARIBE" in intense crimson red (#C8102E).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 152: ESTREITO DE DOVER
  {
    num: 152,
    titulo: "Por Que o Estreito de Dover É a Rota Marítima Mais Movimentada do Mundo Onde Mais de Quinhentos Cargueiros Cruzam Diariamente?",
    titleL1: "A ROTA MAIS DENSA",
    titleL2: "O ESTREITO DE DOVER",
    titleL3: "QUINHENTOS NAVIOS POR DIA",
    narration: "Por que o Estreito de Dover é a rota marítima mais movimentada do mundo onde mais de quinhentos cargueiros cruzam diariamente? Com apenas trinta e quatro quilômetros separando as falésias brancas da Inglaterra da costa da França, o Passo de Calais é o funil naval obrigatório que liga o Oceano Atlântico ao Mar do Norte e abastece os gigantes portuários de Roterdã, Antuérpia e Hamburgo. Para evitar que centenas de supercargueiros colidissem sob neblinas densas e marés violentas de sete metros, o estreito tornou-se pioneiro mundial ao criar, em 1967, o primeiro Esquema de Separação de Tráfego náutico da história, com faixas de rodovia marítima vigiadas por radares em tempo real. Sob as ondas, a setenta e cinco metros de profundidade, o Eurotúnel completa a conexão com cinquenta quilômetros de ferrovia submarina transportando milhões de passageiros e caminhões. A hidrovia onde o comércio do norte da Europa não pode parar. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.",
    prompts: [
      {
        id: 1,
        title: "Abertura e Gancho Cartográfico",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the English Channel between the UK and France.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ROTA MAIS DENSA"
Line 2 (intense crimson red #C8102E): "O ESTREITO DE DOVER"
Line 3 (pure white #F5F2EB): "QUINHENTOS NAVIOS POR DIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Dover and Calais.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        id: 2,
        title: "O Ponto Crítico de 34 km entre Dover e Gris-Nez",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the 33.8 km pinch point between Cap Gris-Nez in France and the white cliffs of Dover in the UK.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in Bege Cartográfico (#F5F2EB): "33,8 KM (21 MILHAS NÁUTICAS)".
Text on screen: "PAS-DE-CALAIS // ESTREITO DE DOVER" in uppercase white Orbitron Bold.
Badge: "GARGALTA NAVAL DO NORTE DA EUROPA" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the channel.
NO voice, NO speech, NO music. ONLY telemetry lock chime and ambient documentary SFX.`
      },
      {
        id: 3,
        title: "O Tráfego Colossal: 500 a 600 Navios por Dia",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Animated radar overlay simulating the dense swarm of hundreds of AIS cargo vessel icons navigating through the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cargo density flow graphic in glowing gold: ">400 MILHÕES DE TONELADAS/ANO".
Text on screen: "500 A 600 CARGUEIROS DIÁRIOS" in uppercase white Montserrat Bold.
Badge: "ABASTECENDO ROTERDÃ, ANTUÉRPIA E HAMBURGO" in gold (#F59E0B).
Camera: slow cinematic downward push-in over the shipping density.
NO voice, NO speech, NO music. ONLY ship horn and ambient radar pulse SFX.`
      },
      {
        id: 4,
        title: "O Esquema de Separação de Tráfego (TSS) de 1967",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic layout showing the two one-way maritime highway lanes and the central separation buffer zone.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Northbound lane glowing in sage green (#A8C3A6) and southbound lane in amber, separated by a red exclusion line.
Text on screen: "PRIMEIRO TSS DO MUNDO (1967) // OMI" in uppercase white Orbitron Bold.
Badge: "RODOVIA MARÍTIMA DE MÃO DUPLA VIGIADA" in sage green (#A8C3A6).
Camera: smooth linear zoom into the nautical lanes.
NO voice, NO speech, NO music. ONLY subtle radar ping SFX.`
      },
      {
        id: 5,
        title: "O Tráfego Cruzado das Balsas Ro-Ro",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical aerial view illustrating ferry routes cutting perpendicularly across the main shipping lanes between Dover, Calais, and Dunkirk.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Perpendicular crossing vectors in bright red pulses (#C8102E).
Text on screen: "TRAVESSIA CRUZADA // BALSAS RO-RO" in uppercase white Montserrat Bold.
Badge: "60 A 90 BALSAÇÕES DIÁRIAS CORTANDO EM ÂNGULO RETO" in intense crimson red (#C8102E).
Camera: linear lateral tracking shot across the shipping corridor.
NO voice, NO speech, NO music. ONLY maritime engine hum and telemetry SFX.`
      },
      {
        id: 6,
        title: "As Condições Extremas: Marés e Goodwin Sands",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic bathymetry view highlighting the shallow depths (30 to 45m) and the treacherous sandbank of Goodwin Sands off the English coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Historical wreck marker cluster: ">2.000 NAUFRÁGIOS DOCUMENTADOS".
Text on screen: "GOODWIN SANDS // O CEMITÉRIO DE NAVIOS" in uppercase white Montserrat Bold.
Badge: "MARÉS DE 7 METROS E CORRENTES DE 4 NÓS" in white (#F5F2EB).
Camera: steady diagonal flyover highlighting the underwater shoals.
NO voice, NO speech, NO music. ONLY deep water rumble and wind SFX.`
      },
      {
        id: 7,
        title: "O Eurotúnel: A Ferrovia Submarina de 50 km",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D cutaway visualization of the seabed showing the Channel Tunnel bored 75 meters below the water line through chalk marl.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing rail vector running from Folkestone to Coquelles in 35 minutes.
Text on screen: "EUROTÚNEL (1994) // 50,4 KM DE EXTENSÃO" in uppercase white Orbitron Bold.
Badge: "37,9 KM ESCAVADOS SOB O LEITO DO MAR" in sage green (#A8C3A6).
Camera: dynamic linear satellite sweep along the subsea railway route.
NO voice, NO speech, NO music. ONLY high-speed train chime and mechanical hum SFX.`
      },
      {
        id: 8,
        title: "O Centro de Radar Binacional: Dover e Gris-Nez",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical radar sweeps originating from Dover Coastguard Station and CROSS Gris-Nez in France interlocking across the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Telemetry target locks displaying ship speed, heading, and draft in JetBrains Mono.
Text on screen: "CNIS // VIGILÂNCIA RADAR 24 HORAS" in uppercase white Montserrat Bold.
Badge: "COORDENAÇÃO BINACIONAL REINO UNIDO E FRANÇA" in gold (#F59E0B).
Camera: steady diagonal flyover at constant altitude.
NO voice, NO speech, NO music. ONLY tactical radar sweep and beep SFX.`
      },
      {
        id: 9,
        title: "O Tabuleiro do Brexit e a Fronteira Externa",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional perspective showing Dover and Calais as the customs and immigration frontier between the UK and the European Union.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Port truck terminal logistics queues and maritime patrol drones.
Text on screen: "A FRONTEIRA DO BREXIT // POSTO ALFANDEGÁRIO" in uppercase white Orbitron Bold.
Badge: "A LINHA MAIS POLICIADA CONTRA A MIGRAÇÃO IRREGULAR" in intense crimson red (#C8102E).
Camera: regional overview displaying the Dover Strait in the wider European framework.
NO voice, NO speech, NO music. ONLY subtle tactical sonar pulse SFX.`
      },
      {
        id: 10,
        title: "Síntese Estratégica e Assinatura VitaleGeo",
        text: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K orthographic satellite perspective from the Atlantic approaches to the North Sea coastline of the Low Countries.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the English and French shorelines.
Text on screen: "A GARGALTA DA EUROPA // ESTREITO DE DOVER" in uppercase white Orbitron Bold.
Badge: "A HIDROVIA MAIS MOVIMENTADA DO PLANETA TERRA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  }
];

function generateMarkdown(s) {
  let content = `# Video ${s.num} — ${s.titulo}\n\n`;
  content += `### 1. Roteiro\n\n`;
  content += `${s.narration}\n\n`;
  content += `---\n\n`;
  content += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  for (const p of s.prompts) {
    content += `#### Prompt ${p.id} — ${p.title} (4s)\n`;
    content += `\`\`\`text\n${p.text}\n\`\`\`\n\n`;
  }

  content += `---\n\n`;
  content += `### 3. Legenda\n\n`;
  content += `${s.titulo}\n\n`;
  content += `#geografia #geopolitica #mapas\n`;

  return content;
}

for (const s of scripts) {
  const filePath = path.join(ROTEIROS_DIR, `Video ${s.num}.md`);
  const md = generateMarkdown(s);
  fs.writeFileSync(filePath, md, 'utf8');
  console.log(`[OK] Created Video ${s.num}.md -> Title: ${s.titulo} (${s.narration.length} narration chars, ${md.length} total chars)`);
}
