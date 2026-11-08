import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';

const allVideos = [
  // 153: CHINA TERRAS RARAS
  {
    num: 153,
    titulo: 'Como o Quase Monopólio das Terras Raras Deu à China o Controle da Cadeia Tecnológica Global?',
    roteiro: `Como o quase monopólio das terras raras deu à China o controle da cadeia tecnológica global? Sem dezessete elementos químicos da tabela periódica, como neodímio, disprósio e gálio, é impossível construir motores de carros elétricos, turbinas eólicas, satélites espiões e os caças F-35 mais avançados do planeta. A partir da década de 1980, com a célebre frase de Deng Xiaoping de que o Oriente Médio tem petróleo mas a China tem terras raras, Pequim investiu bilhões na megamina de Bayan Obo e aceitou o pesado custo ambiental de refinamento. Hoje, embora detenha cerca de quarenta por cento das reservas geológicas, a China processa quase setenta por cento de todas as terras raras do mundo e controla noventa e dois por cento da fabricação dos ímãs de alta potência. Uma arma geoeconômica silenciosa que pode paralisar a indústria ocidental em caso de conflito. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Bayan Obo mining district in Inner Mongolia, China.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O CONTROLE SECRETO"
Line 2 (intense crimson red #C8102E): "DAS TERRAS RARAS DA CHINA"
Line 3 (pure white #F5F2EB): "A ARMA QUE PARALISA O MUNDO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the open pit mines of Bayan Obo.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Megamina de Bayan Obo na Mongólia Interior', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the colossal open-pit mine of Bayan Obo in northern China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mine perimeter highlighted in glowing amber (#F59E0B): "O MAIOR DEPÓSITO DE TERRAS RARAS DO MUNDO".
Text on screen: "BAYAN OBO // O CORAÇÃO MINERAL" in uppercase white Orbitron Bold.
Badge: "45% DA PRODUÇÃO GLOBAL DE ELEMENTOS CRÍTICOS" in intense crimson red (#C8102E).
Camera: slow linear satellite descent towards the massive iron and rare-earth excavation terraces.
NO voice, NO speech, NO music. ONLY heavy industrial machinery rumble and rock crush SFX.` },
      { t: 'A Visão Estratégica de Deng Xiaoping (1992)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historic map overlay tracing Chinese industrial growth from the 1990s with the quote of Deng Xiaoping.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Supply chain vectors radiating from Inner Mongolia to coastal refiners in Jiangxi and Baotou.
Text on screen: "DENG XIAOPING (1992) // A VISÃO DE LONGO PRAZO" in uppercase white Montserrat Bold.
Badge: "O ORIENTE MÉDIO TEM PETRÓLEO; A CHINA TEM TERRAS RARAS" in gold (#F59E0B).
Camera: dynamic linear satellite sweep across mainland China.
NO voice, NO speech, NO music. ONLY archival broadcast hum and telemetry beep SFX.` },
      { t: 'O Gargalo Crítico: O Monopólio do Refino e Separação', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic flow diagram showing that while other nations extract ore, China controls nearly 70% of global chemical separation.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chemical plant clusters highlighted in sage green (#A8C3A6).
Text on screen: "70% DO REFINO MUNDIAL // O GARGALO QUÍMICO" in uppercase white Orbitron Bold.
Badge: "SEPARAÇÃO ÁCIDA EM ALTA TEMPERATURA MONOPOLIZADA" in sage green (#A8C3A6).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY chemical bubbling and mechanical pump hum SFX.` },
      { t: 'A Arma dos Ímãs de Neodímio (NdFeB): 92% do Mercado', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D cutaway visualization of an electric vehicle traction motor and wind turbine core powered by sintered NdFeB permanent magnets.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Magnetic field lines in glowing electric blue and red (#C8102E).
Text on screen: "ÍMÃS PERMANENTES (NdFeB) // 92% CHINÊS" in uppercase white Montserrat Bold.
Badge: "INDISPENSÁVEL PARA CARROS ELÉTRICOS E ENERGIA LIMPA" in white (#F5F2EB).
Camera: slow cinematic downward push-in.
NO voice, NO speech, NO music. ONLY electromagnetic pulse and metallic hum SFX.` },
      { t: 'O Caça F-35: 410 kg de Terras Raras por Aeronave', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military diagram of a Lockheed Martin F-35 stealth fighter highlighting components dependent on Chinese rare earths (radar, actuators, engine).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Telemetry target locks in JetBrains Mono.
Text on screen: "CAÇA F-35 STEALTH // 410 KG DE TERRAS RARAS" in uppercase white Orbitron Bold.
Badge: "O PENTÁGONO VULNERÁVEL À CADEIA DE SUPRIMENTOS" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the Pacific theater.
NO voice, NO speech, NO music. ONLY jet cockpit radar alert and supersonic whoosh SFX.` },
      { t: 'As Restrições de Gálio, Germânio e Grafite (2023-2026)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global trade map displaying export control restrictions implemented by the Chinese Ministry of Commerce on gallium, germanium, and antimony.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trade block vectors in red pulses (#C8102E) radiating toward Western semiconductor hubs.
Text on screen: "CONTROLE DE EXPORTAÇÕES // A GUERRA TECNOLÓGICA" in uppercase white Montserrat Bold.
Badge: "RETALIAÇÃO DIRETA ÀS SANÇÕES DE MICROCHIPS AMERICANAS" in gold (#F59E0B).
Camera: steady diagonal flyover from Beijing to Silicon Valley.
NO voice, NO speech, NO music. ONLY digital data barrier chime and radio static SFX.` },
      { t: 'A Corrida Ocidental: Mountain Pass e Lynas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming to Mountain Pass in California (USA) and Mt Weld in Australia attempting to rebuild sovereign processing.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Allied mine icons glowing in sage green (#A8C3A6).
Text on screen: "MOUNTAIN PASS E AUSTRÁLIA // A REAÇÃO" in uppercase white Montserrat Bold.
Badge: "ANOS DE ATRASO PARA CONSTRUIR CADEIAS INDEPENDENTES" in sage green (#A8C3A6).
Camera: linear satellite sweep over the California desert.
NO voice, NO speech, NO music. ONLY desert wind and mining drill chime SFX.` },
      { t: 'O Monopólio da Transição Energética Planetária', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
World map animation showing the clean energy transition infrastructure (solar, wind, batteries) tied to Chinese mineral inputs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Global supply web converging on Chinese refining ports.
Text on screen: "A TRANSIÇÃO VERDE // SOB CONTROLE DE PEQUIM" in uppercase white Orbitron Bold.
Badge: "SEM A CHINA, A DESCARBONIZAÇÃO MUNDIAL É IMPOSSÍVEL" in white (#F5F2EB).
Camera: wide orthographic flyover displaying the Eurasian landmass.
NO voice, NO speech, NO music. ONLY electrical current hum and turbine chime SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Chinese territory and the Indo-Pacific rim.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Chinese landmass.
Text on screen: "O IMPÉRIO DOS ELEMENTOS // CHINA" in uppercase white Orbitron Bold.
Badge: "O MONOPÓLIO INVISÍVEL QUE MOVE O SÉCULO XXI" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 154: MONTE ATHOS
  {
    num: 154,
    titulo: 'Como Uma Fronteira Murada na Grécia Mantém a República Monástica de Monte Athos Proibida Para Mulheres Há Mais de Mil Anos?',
    roteiro: `Como uma fronteira murada na Grécia mantém a república monástica de Monte Athos proibida para mulheres há mais de mil anos? No extremo leste da península de Calcídica, uma língua de terra montanhosa de trezentos e trinta e cinco quilômetros quadrados abriga um estado teocrático autônomo soberano dentro da União Europeia. Governada por vinte grandes mosteiros da Igreja Ortodoxa, a península é regida pela lei bizantina do Avaton, decretada pelo imperador Constantino Nono em 1046, que proíbe terminantemente a entrada de qualquer mulher ou até mesmo de fêmeas de animais domésticos sob pena de até dois anos de prisão. Para cruzar o muro de fronteira fortificado em Ouranoupoli, homens precisam de uma autorização especial chamada Diamonitirion. Uma cápsula do tempo medieval preservada pelo Tratado de Lausanne de 1923 que desafia as leis modernas. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Chalkidiki peninsula in northern Greece focusing on Mount Athos.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FRONTEIRA SAGRADA"
Line 2 (intense crimson red #C8102E): "DA REPÚBLICA DE MONTE ATHOS"
Line 3 (pure white #F5F2EB): "PROIBIDA PARA MULHERES HÁ MIL ANOS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Mount Athos peak.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Península Montanhosa de 335 km²', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the 335 km² finger-like peninsula terminating at the marble peak of Mount Athos (2,033 meters).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peninsula boundary glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "MONTE ATHOS // A MONTANHA SAGRADA" in uppercase white Orbitron Bold.
Badge: "ESTADO TEOCRÁTICO AUTÔNOMO DENTRO DA UNIÃO EUROPEIA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot along the Aegean coast.
NO voice, NO speech, NO music. ONLY Aegean sea surf and monastery church bell chime SFX.` },
      { t: 'O Muro de Fronteira e a Guarda em Ouranoupoli', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close satellite view of the fortified frontier wall and security checkpoints separating secular Greece from Mount Athos near Ouranoupoli.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A solid red line cutting across the narrow neck of the peninsula.
Text on screen: "A FRONTEIRA EM OURANOUPOLI // O POSTO" in uppercase white Montserrat Bold.
Badge: "CONTROLE DE PASSAPORTES E PATRULHA DA GUARDA COSTEIRA" in intense crimson red (#C8102E).
Camera: smooth linear zoom into the land boundary gate.
NO voice, NO speech, NO music. ONLY iron gate latch and police radio check SFX.` },
      { t: 'A Lei Bizantina do Avaton de 1046', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historic parchment overlay displaying the Chrysobull decree of Byzantine Emperor Constantine IX Monomachos from the year 1046.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Imperial seal and text in Greek calligraphy.
Text on screen: "LEI DO AVATON (1046) // DECRETO BIZANTINO" in uppercase white Orbitron Bold.
Badge: "PROIBIÇÃO ABSOLUTA DA ENTRADA DE MULHERES" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over the ancient decree.
NO voice, NO speech, NO music. ONLY wax seal stamp and monastic chant echo SFX.` },
      { t: 'Os Vinte Mosteiros Fortificados Milenares', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view pinpointing the 20 sovereign Orthodox monasteries (including Great Lavra, Vatopedi, Simonopetra) perched on sheer cliffs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Monastery markers in glowing gold (#F59E0B) across both coastlines.
Text on screen: "VINTE MOSTEIROS SOBERANOS // CÁPSULA MEDIEVAL" in uppercase white Montserrat Bold.
Badge: "COMUNIDADE AUTÔNOMA DE DOIS MIL MONGES ORTODOXOS" in sage green (#A8C3A6).
Camera: cinematic 3D flyover around the cliffside towers of Simonopetra.
NO voice, NO speech, NO music. ONLY wind against stone and distant choral chant SFX.` },
      { t: 'O Visto Especial: O Diamonitirion', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of the Diamonitirion — the strictly quota-limited pilgrimage entry permit issued exclusively to male visitors.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Document layout with patriarchal Byzantine double-headed eagle emblem.
Text on screen: "DIAMONITIRION // A PERMISSÃO DE ENTRADA" in uppercase white Montserrat Bold.
Badge: "LIMITE RÍGIDO: APENAS 10 HOMENS NÃO-ORTODOXOS POR DIA" in white (#F5F2EB).
Camera: slow diagonal pan across the entry permit stamps.
NO voice, NO speech, NO music. ONLY passport stamp thud and calligraphic pen SFX.` },
      { t: 'O Estatuto Especial no Tratado de Lausanne (1923)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical treaty map showing the Treaty of Lausanne (1923) and the Treaty of Accession to the European Community (1979) enshrining Athos's legal exemption.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Legal text clauses glowing in gold (#F59E0B).
Text on screen: "TRATADO DE LAUSANNE // PROTEÇÃO INTERNACIONAL" in uppercase white Orbitron Bold.
Badge: "ISENTO DO ACORDO DE SCHENGEN E DAS LEIS DE GÊNERO DA UE" in sage green (#A8C3A6).
Camera: steady diagonal flyover above the Aegean peninsula.
NO voice, NO speech, NO music. ONLY treaty paper rustle and gavel chime SFX.` },
      { t: 'A Proibição de Fêmeas de Animais Domésticos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical inspection visualization showing customs checks enforcing the ban even against female livestock (cows, goats, ewes), with the sole exception of cats for rodent control.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Exclusion boundary lines across the coastal harbor.
Text on screen: "REGRA DOS ANIMAIS // EXCEÇÃO ÚNICA PARA GATOS" in uppercase white Montserrat Bold.
Badge: "PRESERVAÇÃO DO VOTO DE CASTIDADE MONÁSTICO" in white (#F5F2EB).
Camera: low-altitude flyover of the harbor of Dafni.
NO voice, NO speech, NO music. ONLY harbor boat engine and rope creak SFX.` },
      { t: 'A Capital Karyes e a Santa Comunidade', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming to Karyes, the administrative center of Mount Athos where the Holy Community (Iera Koinotita) meets.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Administrative palace marker glowing in sage green (#A8C3A6).
Text on screen: "KARYES // O PARLAMENTO DOS MONGES" in uppercase white Montserrat Bold.
Badge: "GOVERNO DEMOCRÁTICO INTER-MONÁSTICO DESDE O SÉCULO X" in sage green (#A8C3A6).
Camera: slow linear descent towards the mountain village.
NO voice, NO speech, NO music. ONLY brass bell toll and gentle mountain breeze SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the three Chalkidiki peninsulas reaching into the deep blue Aegean Sea with Mount Athos glowing at the eastern tip.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the monastic boundary.
Text on screen: "A REPÚBLICA MONÁSTICA // MONTE ATHOS" in uppercase white Orbitron Bold.
Badge: "A ÚLTIMA FRONTEIRA MEDIEVAL DA EUROPA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Aegean horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 155: PAISES SEM SAIDA PARA O MAR
  {
    num: 155,
    titulo: 'Quais São os Dez Maiores Países Sem Saída Para o Mar e Como Eles Vencem o Isolamento Geográfico?',
    roteiro: `Quais são os dez maiores países sem saída para o mar e como eles vencem o isolamento geográfico? Das cento e noventa e cinco nações soberanas da Terra, quarenta e quatro são completamente encravadas no interior dos continentes, sem qualquer acesso direto aos oceanos. O líder absoluto deste ranking é o gigantesco Cazaquistão, com dois milhões e setecentos e vinte mil quilômetros quadrados, seguido pelas estepes da Mongólia e por gigantes africanos como Chade, Níger e Mali. Para escoar suas colossais riquezas de petróleo, lítio, urânio e minerais, esses países enfrentam custos de transporte até cinquenta por cento mais caros e dependem de acordos ferroviários e portos de vizinhos nem sempre amigáveis. A batalha silenciosa dos países que o mapa trancou longe do mar. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the heart of Eurasia focusing on Kazakhstan and the Central Asian steppe.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O RANKING DOS GIGANTES"
Line 2 (intense crimson red #C8102E): "SEM SAÍDA PARA O OCEANO"
Line 3 (pure white #F5F2EB): "A BATALHA CONTRA O ISOLAMENTO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Central Asia.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Cazaquistão: 2,72 Milhões de km² (1º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view outlining Kazakhstan — the world's largest landlocked country, larger than all of Western Europe combined.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country polygon glowing in Bege Cartográfico (#F5F2EB): "2.724.900 KM²".
Text on screen: "1º LUGAR // CAZAQUISTÃO (2,72 MI KM²)" in uppercase white Orbitron Bold.
Badge: "MAIOR PRODUTOR DE URÂNIO E GIGANTE DO PETRÓLEO" in gold (#F59E0B).
Camera: slow linear satellite tracking shot across the steppe.
NO voice, NO speech, NO music. ONLY steppe wind and digital counter chime SFX.` },
      { t: 'A Mongólia: Entre a Rússia e a China (2º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning east to Mongolia (1.56 million km²), completely sandwiched between the two Eurasian superpowers.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country polygon glowing in amber (#F59E0B): "1.564.116 KM²".
Text on screen: "2º LUGAR // MONGÓLIA (1,56 MI KM²)" in uppercase white Orbitron Bold.
Badge: "A MENOR DENSIDADE DEMOGRÁFICA DO PLANETA" in sage green (#A8C3A6).
Camera: dynamic linear satellite sweep from the Altai Mountains to the Gobi desert.
NO voice, NO speech, NO music. ONLY horse gallop and telemetry lock SFX.` },
      { t: 'O Cinturão do Sahel Africano: Chade, Níger e Mali', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of North-Central Africa highlighting Chad (3º - 1.28 mi km²), Niger (4º - 1.26 mi km²), and Mali (5º - 1.24 mi km²).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Three adjacent Sahara-Sahel nations highlighted in intense crimson red (#C8102E).
Text on screen: "3º, 4º E 5º // CHADE, NÍGER E MALI" in uppercase white Montserrat Bold.
Badge: "O CINTURÃO ENCRAVADO DO DESERTO DO SAARA" in intense crimson red (#C8102E).
Camera: high-altitude satellite flyover panning across West Africa.
NO voice, NO speech, NO music. ONLY desert sandstorm whoosh and radar tone SFX.` },
      { t: 'A Etiópia e a Batalha Pelo Mar Vermelho (6º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map zooming to the Horn of Africa showing Ethiopia (1.10 million km² and 128 million people) paying billions to Djibouti for port access.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Rail line from Addis Ababa to the Port of Djibouti highlighted in glowing gold (#F59E0B).
Text on screen: "6º LUGAR // ETIÓPIA (1,10 MI KM²)" in uppercase white Orbitron Bold.
Badge: "O MAIS POPULOSO PAÍS SEM MAR DO PLANETA" in gold (#F59E0B).
Camera: smooth linear zoom into the Djibouti rail corridor.
NO voice, NO speech, NO music. ONLY train horn and cargo container lock SFX.` },
      { t: 'América do Sul: A Bolívia e a Perda do Litoral (7º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to South America highlighting Bolivia (1.09 million km²) and its historical lost coastline from the War of the Pacific (1879).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Historic lost maritime department of Atacama shown in red striped overlay.
Text on screen: "7º LUGAR // BOLÍVIA (1,09 MI KM²)" in uppercase white Montserrat Bold.
Badge: "A GUERRA DO PACÍFICO E A PERDA DE 400 KM DE MAR" in intense crimson red (#C8102E).
Camera: 3D mountain flyby across the high Altiplano and Lake Titicaca.
NO voice, NO speech, NO music. ONLY Andean pan flute tone and mountain wind SFX.` },
      { t: 'África Central e Austral: Zâmbia e África Central (8º e 9º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map highlighting Zambia (8º - 752.618 km²) and the Central African Republic (9º - 622.984 km²).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Copperbelt rail corridors running to Dar es Salaam and Lobito.
Text on screen: "8º E 9º // ZÂMBIA E REP. CENTRO-AFRICANA" in uppercase white Montserrat Bold.
Badge: "O CORREDOR DE LOBITO E O ESCOAMENTO DE COBRE" in sage green (#A8C3A6).
Camera: steady diagonal flyover above the Zambezi and Congo river basins.
NO voice, NO speech, NO music. ONLY railway clatter and heavy river water SFX.` },
      { t: 'O Afeganistão: A Encruzilhada da Ásia (10º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic satellite perspective of mountainous Afghanistan (652.864 km²) framed by the Hindu Kush mountains.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Historic trade corridors connecting Central Asia to Pakistan and Iran.
Text on screen: "10º LUGAR // AFEGANISTÃO (652.864 KM²)" in uppercase white Orbitron Bold.
Badge: "O CEMITÉRIO DE IMPÉRIOS SEM ACESSO AO MAR" in gold (#F59E0B).
Camera: 3D orbit around rugged mountain passes like the Khyber Pass.
NO voice, NO speech, NO music. ONLY mountain wind gale and radio static SFX.` },
      { t: 'Os Países Duplamente Encravados (Liechtenstein e Uzbequistão)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic highlight of the only two 'doubly landlocked' nations on Earth: Uzbekistan and Liechtenstein (surrounded only by landlocked neighbors).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing dual rings around both countries.
Text on screen: "DUPLAMENTE ENCRAVADOS // CURIOSIDADE" in uppercase white Orbitron Bold.
Badge: "UZBEQUISTÃO E LIECHTENSTEIN: DOIS PAÍSES DE DISTÂNCIA DO MAR" in sage green (#A8C3A6).
Camera: quick split-screen orthographic satellite push-in.
NO voice, NO speech, NO music. ONLY double sonar beep and metric resolve chime SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the global landmass with all 44 landlocked countries illuminated in glowing gold (#F59E0B).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
World trade sea routes tracing around the continents.
Text on screen: "44 NAÇÕES TRANCADAS // O MAPA SEM MAR" in uppercase white Orbitron Bold.
Badge: "O DESAFIO LOGÍSTICO DE 500 MILHÕES DE PESSOAS" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing rotating Earth globe.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 156: RESERVAS DE PETROLEO
  {
    num: 156,
    titulo: 'Quais São os Dez Países com as Maiores Reservas de Petróleo do Mundo Onde Trilhões de Barris Definem a Geopolítica Global?',
    roteiro: `Quais são os dez países com as maiores reservas de petróleo do mundo onde trilhões de barris definem a geopolítica global? Sob a crosta terrestre repousam mais de um trilhão e setecentos e cinquenta bilhões de barris de óleo bruto comprovados. O topo deste ranking reserva uma surpresa para muitos: a Venezuela lidera isolada com trezentos e três bilhões de barris na Faixa Petrolífera do Orinoco, superando a Arábia Saudita, dona do lendário megacampo de Ghawar. Em terceiro surgem as areias betuminosas do Canadá, seguidas por Irã, Iraque, Emirados Árabes, Kuwait, Rússia, Estados Unidos e Líbia. Dez nações que controlam oitenta e seis por cento de todo o combustível líquido do planeta, capazes de definir o preço da energia, financiar guerras e ditar o ritmo da economia mundial. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Persian Gulf and northern South America.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O RANKING DO OURO NEGRO"
Line 2 (intense crimson red #C8102E): "ONDE ESTÁ O PETRÓLEO DO MUNDO?"
Line 3 (pure white #F5F2EB): "TRILHÕES DE BARRIS NO SUBSOLO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Venezuela and the Middle East.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'Venezuela: 303 Bilhões de Barris no Orinoco (1º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view outlining Venezuela and zooming into the 55,000 km² Faja Petrolífera del Orinoco.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Oil basin polygon glowing in gold (#F59E0B): "303 BILHÕES DE BARRIS".
Text on screen: "1º LUGAR // VENEZUELA (303 BI BARRIS)" in uppercase white Orbitron Bold.
Badge: "AS MAIORES RESERVAS COMPROVADAS DO PLANETA TERRA" in intense crimson red (#C8102E).
Camera: slow linear satellite tracking shot along the Orinoco river basin.
NO voice, NO speech, NO music. ONLY heavy crude oil pumpjack thud SFX.` },
      { t: 'Arábia Saudita: 267 Bilhões de Barris e Ghawar (2º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to the Arabian Peninsula focusing on the Ghawar field — the largest conventional onshore oil field in history.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country polygon in Bege Cartográfico (#F5F2EB): "267 BILHÕES DE BARRIS".
Text on screen: "2º LUGAR // ARÁBIA SAUDITA (267 BI BARRIS)" in uppercase white Orbitron Bold.
Badge: "BAIXÍSSIMO CUSTO DE EXTRAÇÃO: MENOS DE US$ 10 POR BARRIL" in gold (#F59E0B).
Camera: dynamic linear satellite sweep across the desert dunes.
NO voice, NO speech, NO music. ONLY desert wind and oil pipeline valve chime SFX.` },
      { t: 'Canadá: 170 Bilhões de Barris em Areias Betuminosas (3º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Athabasca oil sands in Alberta, Canada.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mining basin highlighted in sage green (#A8C3A6): "170 BILHÕES DE BARRIS".
Text on screen: "3º LUGAR // CANADÁ (170 BI BARRIS)" in uppercase white Montserrat Bold.
Badge: "EXTRAÇÃO INDUSTRIAL COMPLEXA A PARTIR DE BETUME E AREIA" in sage green (#A8C3A6).
Camera: high-altitude satellite flyover panning across northern forests.
NO voice, NO speech, NO music. ONLY industrial excavator motor and steam hiss SFX.` },
      { t: 'Irã e Iraque: A Bacia da Mesopotâmia (4º e 5º Lugares)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic map of Iran (4º - 157 bi barris) and Iraq (5º - 145 bi barris) flanking the Persian Gulf and Tigris-Euphrates valleys.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Basin areas pulsing in amber (#F59E0B).
Text on screen: "4º E 5º // IRÃ (157 BI) E IRAQUE (145 BI)" in uppercase white Orbitron Bold.
Badge: "O CORAÇÃO ENERGÉTICO HISTÓRICO DO ORIENTE MÉDIO" in gold (#F59E0B).
Camera: steady diagonal flyover above the Persian Gulf.
NO voice, NO speech, NO music. ONLY refinery flare roar and telemetry sweep SFX.` },
      { t: 'Os Emirados Árabes e Kuwait (6º e 7º Lugares)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up satellite view of the UAE (6º - 113 bi barris) and Kuwait (7º - 101 bi barris, including the Burgan field).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Small territories with outsized oil reserves glowing brightly.
Text on screen: "6º E 7º // EMIRADOS (113 BI) E KUWAIT (101 BI)" in uppercase white Montserrat Bold.
Badge: "MAIS DE 200 BILHÕES DE BARRIS EM MICROTERRITÓRIOS" in white (#F5F2EB).
Camera: smooth linear zoom into Kuwait Bay and Abu Dhabi terminals.
NO voice, NO speech, NO music. ONLY tanker ship horn and ocean wake SFX.` },
      { t: 'Rússia: 80 Bilhões de Barris na Sibéria (8º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning across the vast West Siberian oil basins and Urals (Samotlor field).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country polygon in Bege Cartográfico (#F5F2EB): "80 BILHÕES DE BARRIS".
Text on screen: "8º LUGAR // RÚSSIA (80 BI BARRIS)" in uppercase white Orbitron Bold.
Badge: "A MÁQUINA DE EXPORTAÇÃO QUE ALIMENTA A CHINA E A ÍNDIA" in intense crimson red (#C8102E).
Camera: cold orthographic satellite sweep across snowy taiga.
NO voice, NO speech, NO music. ONLY freezing Siberian gale and metal drill hum SFX.` },
      { t: 'Estados Unidos: 55 Bilhões de Barris e a Bacia Permiana (9º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming to Texas and New Mexico (Permian Basin) showing hydraulic fracturing pad density.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Well sites glowing in gold (#F59E0B).
Text on screen: "9º LUGAR // ESTADOS UNIDOS (55 BI BARRIS)" in uppercase white Montserrat Bold.
Badge: "MAIOR PRODUTOR DIÁRIO DO PLANETA (ÓLEO DE XISTO)" in sage green (#A8C3A6).
Camera: linear satellite sweep over the grid of oil rigs.
NO voice, NO speech, NO music. ONLY fracking pump rhythm and power generator hum SFX.` },
      { t: 'Líbia: O Gigante do Norte da África (10º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map highlighting Libya (10º - 48 bilhões de barris) with the Sirte Basin on the Mediterranean coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Petroleum terminals along the Gulf of Sirte.
Text on screen: "10º LUGAR // LÍBIA (48 BI BARRIS)" in uppercase white Orbitron Bold.
Badge: "AS MAIORES RESERVAS DE ÓLEO LEVE DE TODA A ÁFRICA" in gold (#F59E0B).
Camera: slow descent towards the Mediterranean export jetties.
NO voice, NO speech, NO music. ONLY Mediterranean breeze and sea wave surge SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the rotating Earth with oil extraction hubs and tanker routes illuminated across the oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top 10 nations highlighted in glowing Bege Cartográfico (#F5F2EB).
Text on screen: "O MAPA DA ENERGIA // 1,75 TRILHÃO DE BARRIS" in uppercase white Orbitron Bold.
Badge: "DEZ PAÍSES QUE CONTROLAM O COMBUSTÍVEL DO PLANETA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing dark space horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 157: MAIORES PENINSULAS
  {
    num: 157,
    titulo: 'Quais São as Dez Maiores Penínsulas do Planeta Onde Línguas de Terra Gigantescas Avançam Pelos Oceanos?',
    roteiro: `Quais são as dez maiores penínsulas do planeta onde línguas de terra gigantescas avançam pelos oceanos? Quando massas de terra continentais projetam-se mar adentro cercadas por águas em três lados, a geografia cria penínsulas monumentais que abrigam nações inteiras e controlam rotas navais históricas. O líder absoluto e incontestável do planeta é a gigantesca Península Arábica, com mais de três milhões e duzentos mil quilômetros quadrados, seguida pela gelada Península Antártica, pela exótica Indochina e pelas penínsulas do Labrador no Canadá e da Escandinávia no norte europeu. Em sexto lugar surge a Península Ibérica, seguida pela Península Coreana, Flórida, Iucatã e a Península da Crimeia. Dez projeções continentais que moldaram o clima, os impérios e o comércio marítimo da Terra. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Arabian Peninsula projecting between the Red Sea and the Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "AS LÍNGUAS DE TERRA"
Line 2 (intense crimson red #C8102E): "AS DEZ MAIORES PENÍNSULAS"
Line 3 (pure white #F5F2EB): "GIGANTES AVANÇANDO PELOS MARES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Arabian coastlines.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'Península Arábica: 3,23 Milhões de km² (1º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view outlining the colossal Arabian Peninsula surrounded by the Red Sea, Arabian Sea, and Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peninsula boundary highlighted in glowing Bege Cartográfico (#F5F2EB): "3.237.500 KM²".
Text on screen: "1º LUGAR // PENÍNSULA ARÁBICA (3,23 MI KM²)" in uppercase white Orbitron Bold.
Badge: "MAIOR PENÍNSULA DO PLANETA, MAIOR QUE A ÍNDIA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot across the Rub al-Khali sands.
NO voice, NO speech, NO music. ONLY desert wind and digital metric chime SFX.` },
      { t: 'Península Antártica: 1,30 Milhão de km² (2º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to the frozen finger of the Antarctic Peninsula reaching toward South America across the Drake Passage.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glacial ice shelves highlighted in bright white (#FFFFFF): "1.300.000 KM²".
Text on screen: "2º LUGAR // PENÍNSULA ANTÁRTICA (1,30 MI KM²)" in uppercase white Orbitron Bold.
Badge: "A PONTE CONGELADA EM DIREÇÃO AO CABO HORN" in sage green (#A8C3A6).
Camera: 3D flyover above jagged glacial fjords and tabular icebergs.
NO voice, NO speech, NO music. ONLY polar blizzard howling and ice crack echo SFX.` },
      { t: 'Península da Indochina: 1,26 Milhão de km² (3º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Southeast Asia showing the Indochina Peninsula (Vietnam, Cambodia, Laos, Thailand, and Myanmar) flanked by the South China Sea and Andaman Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Lush tropical river basins (Mekong, Chao Phraya) highlighted in green.
Text on screen: "3º LUGAR // PENÍNSULA DA INDOCHINA (1,26 MI KM²)" in uppercase white Montserrat Bold.
Badge: "A ENCRUZILHADA CULTURAL E COMERCIAL DA ÁSIA" in gold (#F59E0B).
Camera: dynamic linear satellite sweep down the Mekong River.
NO voice, NO speech, NO music. ONLY tropical rainforest ambience and river current SFX.` },
      { t: 'Península do Labrador: 1,40 Milhão de km² no Canadá (4º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to eastern Canada displaying the Labrador Peninsula bounded by Hudson Bay, Hudson Strait, and the Atlantic.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Subarctic tundra and boreal forest polygon in sage green (#A8C3A6).
Text on screen: "4º LUGAR // PENÍNSULA DO LABRADOR (1,40 MI KM²)" in uppercase white Montserrat Bold.
Badge: "O ESCUDO CANADENSE ESCAVADO POR GLACIARES" in sage green (#A8C3A6).
Camera: steady diagonal flyover above thousands of subarctic lakes.
NO voice, NO speech, NO music. ONLY subarctic breeze and water lap SFX.` },
      { t: 'Península da Escandinávia: 750 Mil km² no Báltico (5º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Northern Europe highlighting Norway and Sweden jutting into the North Sea and Baltic Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Scandinavian mountain spine and fjords glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "5º LUGAR // PENÍNSULA ESCANDINAVA (750.000 KM²)" in uppercase white Orbitron Bold.
Badge: "MILHARES DE FIORDES PROFUNDOS E GLACIARES ÁRTICOS" in white (#F5F2EB).
Camera: cinematic flyover along the Norwegian Atlantic coast.
NO voice, NO speech, NO music. ONLY ocean fjord surf and Nordic wind SFX.` },
      { t: 'Península Ibérica: 582 Mil km² (Espanha e Portugal - 6º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Southwestern Europe highlighting the Iberian Peninsula separated from France by the Pyrenees.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pyrenees mountain barrier and Strait of Gibraltar highlighted in gold (#F59E0B).
Text on screen: "6º LUGAR // PENÍNSULA IBÉRICA (582.000 KM²)" in uppercase white Montserrat Bold.
Badge: "A PORTA ENTRE O ATLÂNTICO E O MEDITERRÂNEO" in gold (#F59E0B).
Camera: slow linear satellite descent towards the Meseta Central.
NO voice, NO speech, NO music. ONLY dry Mediterranean wind and ship bell SFX.` },
      { t: 'Península Coreana: 220 Mil km² (7º Lugar)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map zooming to the Korean Peninsula projecting between the Yellow Sea and Sea of Japan, divided at the 38th parallel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peninsula outline in intense crimson red (#C8102E).
Text on screen: "7º LUGAR // PENÍNSULA COREANA (220.000 KM²)" in uppercase white Orbitron Bold.
Badge: "DIVIDIDA ENTRE DUAS NAÇÕES E UM MILHÃO DE SOLDADOS" in intense crimson red (#C8102E).
Camera: linear satellite sweep from the Yalu river to Jeju Island.
NO voice, NO speech, NO music. ONLY radar sweep and military radio tone SFX.` },
      { t: 'Flórida e Iucatã: Os Dedos Tropicais das Américas (8º e 9º)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Gulf of Mexico highlighting the Florida Peninsula (8º - 170.000 km²) and the Yucatan Peninsula (9º - 181.000 km²).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coral reefs and cenotes glowing in turquoise and gold (#F59E0B).
Text on screen: "8º E 9º // FLÓRIDA E IUCATÃ" in uppercase white Montserrat Bold.
Badge: "AS SENTINELAS DO GOLFO DO MÉXICO E CARIBE" in sage green (#A8C3A6).
Camera: smooth lateral tracking shot across the Caribbean waters.
NO voice, NO speech, NO music. ONLY ocean wave surge and tropical breeze SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the global continents with the world's greatest peninsulas highlighted in glowing vector outlines.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px).
Text on screen: "O MAPA DAS PENÍNSULAS // GIGANTES DOS OCEANOS" in uppercase white Orbitron Bold.
Badge: "ONDE A TERRA ENCONTRA O MAR EM TRÊS DIREÇÕES" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing rotating Earth globe.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 158: ARGENTINA (hoje)
  {
    num: 158,
    titulo: 'Como a Conquista do Deserto e os Tratados de Fronteira Forjaram o Gigantesco Território da Argentina?',
    roteiro: `Como a Conquista do Deserto e os tratados de fronteira forjaram o gigantesco território da Argentina? Em 1816, quando declarou sua independência, a Argentina governava menos de um quinto do espaço que possui hoje. O antigo Vice-Reino do Prata havia perdido a Bolívia, o Paraguai e o Uruguai, deixando Buenos Aires cercada por conflitos civis e com uma fronteira sul que terminava a escassos duzentos quilômetros da capital. Para romper esse cerco, o general Julio Argentino Roca comandou a violenta Conquista do Deserto entre 1878 e 1885, empurrando a linha militar até os rios Negro e Neuquén e anexando meio milhão de quilômetros quadrados da Patagônia. Em 1881, aproveitando a Guerra do Pacífico travada pelo Chile, a diplomacia argentina garantiu a meseta oriental e dividiu a Terra do Fogo em linha reta pelo meridiano sessenta e oito oeste. O mapa que transformou um país sitiado no oitavo maior do planeta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Southern Cone of South America focusing on Argentina.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "COMO SURGIU O MAPA"
Line 2 (intense crimson red #C8102E): "DO GIGANTE ARGENTINO?"
Line 3 (pure white #F5F2EB): "DE SÍTIO A OITAVO MAIOR PAÍS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Rio de la Plata estuary.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Fragmentação do Vice-Reino do Prata em 1816', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay showing the vast Viceroyalty of the Rio de la Plata (1776) fracturing into separate nations: Bolivia, Paraguay, and Uruguay.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territory lost highlighted in amber pulses (#F59E0B): Alto Peru, Paraguay, Banda Oriental.
Text on screen: "1816 // A FRAGMENTAÇÃO DO PRATA" in uppercase white Orbitron Bold.
Badge: "BUENOS AIRES GOVERNAVA MENOS DE 20% DO ATUAL TERRITÓRIO" in intense crimson red (#C8102E).
Camera: linear pullback revealing continental South America borders.
NO voice, NO speech, NO music. ONLY tactical document shuffle and map strike SFX.` },
      { t: 'A Fronteira Sul em 1870: O Rio Salado e os Malones', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic map of Buenos Aires province showing the historical southern frontier ending at the Rio Salado, 200 km from the capital.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Frontier line marked in glowing Bege Cartográfico (#F5F2EB): "FRONTEIRA COM O PUELMAPU INDÍGENA".
Text on screen: "O LIMITE HISTÓRICO // RIO SALADO" in uppercase white Montserrat Bold.
Badge: "ALÉM DESTA LINHA: TERRITÓRIO MAPUCHE E TEHUELCHE" in gold (#F59E0B).
Camera: slow diagonal satellite tracking shot across the pampas.
NO voice, NO speech, NO music. ONLY wind over grass and telemetry lock SFX.` },
      { t: 'A Zanja de Alsina de 1876: 374 km de Vala Militar', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective highlighting the historical defensive ditch known as Zanja de Alsina across western Buenos Aires.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Continuous trench line glowing in sage green (#A8C3A6) with fort icons along its 374 km path.
Text on screen: "ZANJA DE ALSINA (1876) // 374 KM" in uppercase white Orbitron Bold.
Badge: "A MURALHA DEFENSIVA CONTRA OS MALONES" in sage green (#A8C3A6).
Camera: smooth linear zoom into the line of forts.
NO voice, NO speech, NO music. ONLY military telegraph beeps and mechanical hum SFX.` },
      { t: 'A Ofensiva da Conquista do Deserto (1878-1885)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Animated tactical map showing five military divisions under General Julio Argentino Roca advancing south toward the Rio Negro and Neuquén.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Five red advance vectors (#C8102E) sweeping across 500,000 square kilometers of territory.
Text on screen: "CONQUISTA DO DESERTO // 1878-1885" in uppercase white Orbitron Bold.
Badge: "+500.000 KM² ANEXADOS PELAS DIVISÕES DE ROCA" in intense crimson red (#C8102E).
Camera: dynamic linear satellite sweep from the pampas into northern Patagonia.
NO voice, NO speech, NO music. ONLY horse gallop and artillery thunder SFX.` },
      { t: 'O Tratado de Limites de 1881 com o Chile', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic layout showing the Andes mountain crest line being traced as the international boundary with Chile.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Andean watershed line (divortium aquarum) glowing in bright amber (#F59E0B).
Text on screen: "TRATADO DE 1881 // ARGENTINA E CHILE" in uppercase white Orbitron Bold.
Badge: "PATAGÔNIA ORIENTAL CONSOLIDADA SOBRE O ATLÂNTICO" in white (#F5F2EB).
Camera: cinematic flyover along the colossal snowy peaks of the Andes.
NO voice, NO speech, NO music. ONLY mountain wind and pen signing treaty SFX.` },
      { t: 'A Partilha Cirúrgica da Terra do Fogo (Meridiano 68°34\' W)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme high-resolution satellite zoom into the Isla Grande de Tierra del Fuego and Beagle Channel at the southern tip of the continent.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Straight vertical meridian line in Bege Cartográfico (#F5F2EB): "MERIDIANO 68°34' W".
Text on screen: "TERRA DO FOGO // A DIVISÃO EM LINHA RETA" in uppercase white Montserrat Bold.
Badge: "USHUAIA E O ATLÂNTICO GARANTIDOS PELA DIPLOMACIA" in intense crimson red (#C8102E).
Camera: slow linear descent towards Ushuaia and the Beagle Channel.
NO voice, NO speech, NO music. ONLY ocean wave surge and GPS coordinate chime SFX.` },
      { t: 'As Fronteiras do Chaco e Misiones (Tratados de 1876 e 1895)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to the northeast borders of Argentina with Paraguay and Brazil across the Chaco and Misiones forests.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pilcomayo River and Iguazu borders glowing with boundary marker pins.
Text on screen: "CHACO E MISIONES // FRONTEIRAS FIXADAS" in uppercase white Montserrat Bold.
Badge: "ARBITRAGEM DE CLEVELAND E TRATADO DE 1876" in gold (#F59E0B).
Camera: steady diagonal flyover over the Parana and Uruguay river basins.
NO voice, NO speech, NO music. ONLY river current and gavel strike SFX.` },
      { t: 'A Dimensão Real dos 2,78 Milhões de km²', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Scale comparison animation superimposing the true outline of Argentina over Western Europe (from Portugal to Poland).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Outlines in glowing 2px stroke in Bege Cartográfico (#F5F2EB).
Text on screen: "2.780.400 KM² // OITAVO MAIOR PAÍS" in uppercase white Orbitron Bold.
Badge: "QUASE O MESMO TAMANHO DA EUROPA OCIDENTAL" in sage green (#A8C3A6).
Camera: wide orthographic view displaying continental scale.
NO voice, NO speech, NO music. ONLY digital data counter chime SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Argentine territory from the subtropical Iguazu Falls to the glacial tip of Cape Horn.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the complete national boundary.
Text on screen: "A FORMAÇÃO DA ARGENTINA // 2,78 MI KM²" in uppercase white Orbitron Bold.
Badge: "DE CAPITANIA SITIADA A IMPÉRIO DO PRATA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Southern Hemisphere globe curvature.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 159: INDIA (hoje)
  {
    num: 159,
    titulo: 'Por Que a Posição Naval da Índia no Oceano Índico Pode Asfixiar as Rotas de Petróleo da China?',
    roteiro: `Por que a posição naval da Índia no Oceano Índico pode asfixiar as rotas de petróleo da China? Projetando-se como uma colossal cunha naval de dois mil quilômetros sobre as águas equatoriais, a Índia domina o oceano por onde passam oitenta por cento do petróleo transportado por mar no mundo. A maior fraqueza de Pequim é o Estreito de Malaca, por onde cruza quase todo o combustível que abastece suas indústrias. E bem na saída desse canal, a apenas cento e cinquenta quilômetros de Sumatra, ergue-se o arquipélago indiano de Andamão e Nicobar. Ali, caças e aviões de patrulha Poseidon vigiam o Canal dos Seis Graus vinte e quatro horas por dia. Para escapar desse estrangulamento, a China construiu portos no Paquistão e Sri Lanka, mas Nova Délhi respondeu com a aliança do QUAD e bases avançadas em Omã e Cingapura. O tabuleiro naval onde o futuro energético da Ásia é decidido todos os dias. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Indian subcontinent jutting into the Indian Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGALTA NAVAL"
Line 2 (intense crimson red #C8102E): "DA ENERGIA DA CHINA"
Line 3 (pure white #F5F2EB): "O PODER DO OCEANO ÍNDICO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the southern tip of India and Sri Lanka.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Cunha Geográfica de 2.000 km no Oceano Índico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional perspective showing India projecting 2,000 km into the equatorial ocean like a colossal fixed aircraft carrier.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastline vector highlighted in sage green (#A8C3A6): "7.516 KM DE LITORAL".
Text on screen: "A CUNHA NAVAL DA ÍNDIA // 7.516 KM" in uppercase white Orbitron Bold.
Badge: "80% DO COMÉRCIO MARÍTIMO DE PETRÓLEO DO MUNDO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the Indian Ocean basin.
NO voice, NO speech, NO music. ONLY ocean rumble and radar lock SFX.` },
      { t: 'O Dilema de Malaca da China: 80% do Petróleo em Risco', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical animation of maritime shipping lanes streaming from the Persian Gulf across the Indian Ocean into the narrow Malacca Strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing cargo density vectors in gold (#F59E0B) funneled into the narrow strait.
Text on screen: "O DILEMA DE MALACA // VULNERABILIDADE DE PEQUIM" in uppercase white Montserrat Bold.
Badge: "80% DO PETRÓLEO IMPORTADO PELA CHINA" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in towards the mouth of the strait.
NO voice, NO speech, NO music. ONLY ship horn and ambient radar pulse SFX.` },
      { t: 'A Fortaleza das Ilhas Andamão e Nicobar a 150 km', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the 572 Indian islands of Andaman and Nicobar guarding the western exit of Malacca.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in Bege Cartográfico (#F5F2EB): "150 KM DE SUMATRA".
Text on screen: "ILHAS ANDAMÃO E NICOBAR // POSTO AVANÇADO" in uppercase white Orbitron Bold.
Badge: "BASE AERONAVAL INS BAAZ E CAÇAS SU-30MKI" in sage green (#A8C3A6).
Camera: smooth linear zoom into Great Nicobar Island and the Six Degree Channel.
NO voice, NO speech, NO music. ONLY jet engine rumble and telemetry beep SFX.` },
      { t: 'O Canal dos Seis Graus: A Chave da Navegação Submarina', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetry and radar layout displaying the deep Six Degree Channel between Great Nicobar and Aceh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Submarine acoustic detection hydrophone array glowing beneath the waves.
Text on screen: "CANAL DOS SEIS GRAUS // CHOKEPOINT EQUATORIAL" in uppercase white Montserrat Bold.
Badge: "PASSAGEM OBRIGATÓRIA PARA SUPERPETROLEIROS E SUBMARINOS" in gold (#F59E0B).
Camera: linear lateral tracking shot across the nautical corridor.
NO voice, NO speech, NO music. ONLY sonar ping and deep water hum SFX.` },
      { t: 'O Colar de Pérolas de Pequim (Gwadar, Hambantota, Djibuti)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional tactical map showing Chinese-funded ports encircling India: Gwadar (Pakistan), Hambantota (Sri Lanka), Kyaukpyu (Myanmar), and Djibouti.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing red harbor markers (#C8102E) connecting along a strategic maritime arc.
Text on screen: "STRING OF PEARLS // A CERCA NAVAL CHINESA" in uppercase white Montserrat Bold.
Badge: "BASES PORTUÁRIAS DE DUPLO USO AO REDOR DA ÍNDIA" in intense crimson red (#C8102E).
Camera: high-altitude satellite overview panning from Pakistan to Myanmar.
NO voice, NO speech, NO music. ONLY warning chime and tactical sweep SFX.` },
      { t: 'O Colar de Diamantes de Nova Délhi (Chabahar, Duqm, Sabang)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Counter-strategy map showing Indian military and logistics access: Chabahar (Iran), Duqm (Oman), Sabang (Indonesia), and Changi (Singapore).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing diamond icons in bright Bege Cartográfico (#F5F2EB) breaking the encirclement.
Text on screen: "NECKLACE OF DIAMONDS // A RESPOSTA INDIANA" in uppercase white Orbitron Bold.
Badge: "BASES AVANÇADAS EM OMÃ, IRÃ E CINGAPURA" in sage green (#A8C3A6).
Camera: dynamic linear satellite sweep connecting the Indian Ocean access points.
NO voice, NO speech, NO music. ONLY radar data lock and military communication SFX.` },
      { t: 'O Front do Himalaia: A Linha de Controle Real (LAC)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic satellite terrain view of the icy peaks of Ladakh, Galwan Valley, and Doklam plateau along the 3,488 km border with China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dashed yellow line: "LINHA DE CONTROLE REAL (LAC) ▲ 4.500M".
Text on screen: "FRONT DO HIMALAIA // 3.488 KM DE TENSÃO" in uppercase white Montserrat Bold.
Badge: "O CONFRONTO TERRESTRE DE DOIS GIGANTES NUCLEARES" in intense crimson red (#C8102E).
Camera: 3D mountain flyby through snow-covered glacial valleys.
NO voice, NO speech, NO music. ONLY freezing mountain gale and radio static SFX.` },
      { t: 'O QUAD e os Exercícios Navais Malabar', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical layout highlighting the Quadrilateral Security Dialogue (QUAD) alliance: India, United States, Japan, and Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Interconnected vector links across the Indo-Pacific theatre.
Text on screen: "ALIANÇA DO QUAD // ÍNDIA, EUA, JAPÃO E AUSTRÁLIA" in uppercase white Orbitron Bold.
Badge: "EXERCÍCIOS MALABAR E INTEROPERABILIDADE NAVAL" in gold (#F59E0B).
Camera: wide orthographic view across the Pacific and Indian oceans.
NO voice, NO speech, NO music. ONLY naval aircraft carrier catapult and telemetry SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Indian Ocean basin framed by Africa, India, and Southeast Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Indian peninsula.
Text on screen: "O SENHOR DO ÍNDICO // A POSIÇÃO DA ÍNDIA" in uppercase white Orbitron Bold.
Badge: "O MAIOR CHOKEPOINT ENERGÉTICO DO PLANETA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 160: CATAR (hoje)
  {
    num: 160,
    titulo: 'Como Uma Península Menor Que Sergipe Tornou-se o Maior Exportador de Gás Liquefeito e Uma Potência Financeira Global?',
    roteiro: `Como uma península menor que Sergipe tornou-se o maior exportador de gás liquefeito e uma potência financeira global? Com apenas onze mil quilômetros quadrados de deserto árido no Golfo Pérsico, o Catar era um arquipélago de vilarejos de pescadores de pérolas até a década de 1970. Tudo mudou com a descoberta do Campo Norte, a maior reserva não associada de gás natural do globo, compartilhada sob as águas com o Irã. Em vez de queimar o gás, o país investiu bilhões no megacomplexo de Ras Laffan e na tecnologia criogênica que resfria o gás a cento e sessenta e dois graus negativos, encolhendo seu volume seiscentas vezes para transporte marítimo. Hoje, sua frota de supermetaneiros Q-Max abastece usinas elétricas de Tóquio a Londres, gerando petrodólares que financiam um fundo soberano de meio trilhão de dólares e compram participações na Volkswagen e no aeroporto de Heathrow. A península onde a energia move a geopolítica. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Persian Gulf focusing on the tiny peninsula of Qatar.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "MENOR QUE SERGIPE"
Line 2 (intense crimson red #C8102E): "O IMPÉRIO DO GÁS DO CATAR"
Line 3 (pure white #F5F2EB): "A POTÊNCIA QUE MANDA NA ENERGIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the desert thumb of Qatar.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Península de 11.581 km² no Golfo Pérsico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the arid 11,581 km² desert peninsula jutting into the turquoise waters of the Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border vector in Bege Cartográfico (#F5F2EB) with Salwa border crossing to Saudi Arabia highlighted.
Text on screen: "O ESTADO DO CATAR // 11.581 KM²" in uppercase white Orbitron Bold.
Badge: "300 MIL CIDADÃOS NATIVOS E O MAIOR PIB PER CAPITA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot along the coastline.
NO voice, NO speech, NO music. ONLY desert wind and telemetry lock chime SFX.` },
      { t: 'O Megacampo Submarino North Field / South Pars', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Offshore cartographic bathymetry map highlighting the massive 9,700 km² gas field sitting in the Gulf waters between Qatar and Iran.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing reservoir in amber (#F59E0B): "900 TRILHÕES DE PÉS CÚBICOS".
Text on screen: "NORTH FIELD // O MAIOR CAMPO DE GÁS DA TERRA" in uppercase white Montserrat Bold.
Badge: "MAIS DE 10% DE TODAS AS RESERVAS GLOBAIS COMPROVADAS" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in over the offshore field.
NO voice, NO speech, NO music. ONLY underwater sonar pulse and gas valve SFX.` },
      { t: 'A Coabitação com o Irã na Fronteira Marítima', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical dividing line splitting the underwater reservoir into North Field (Qatar) and South Pars (Iran).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dashed nautical border in Bege Cartográfico (#F5F2EB) between Doha and Tehran jurisdictions.
Text on screen: "FRONTEIRA SUBAQUÁTICA // CATAR E IRÃ" in uppercase white Orbitron Bold.
Badge: "O MESMO RESERVATÓRIO GEOLÓGICO COMPARTILHADO" in sage green (#A8C3A6).
Camera: linear lateral tracking shot along the median line.
NO voice, NO speech, NO music. ONLY maritime telemetry and radar sweep SFX.` },
      { t: 'Ras Laffan: O Maior Complexo Industrial de GNL do Planeta', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Ras Laffan Industrial City port on the northeastern coast of Qatar with its 14 LNG mega-trains and storage tanks.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
LNG plant boundaries glowing in sage green (#A8C3A6).
Text on screen: "CIDADE INDUSTRIAL DE RAS LAFFAN // GNL" in uppercase white Montserrat Bold.
Badge: "77 MILHÕES DE TONELADAS/ANO (EXPANSÃO A 126 MI)" in gold (#F59E0B).
Camera: smooth linear zoom into the loading jetties.
NO voice, NO speech, NO music. ONLY cryogenic plant hum and flare hiss SFX.` },
      { t: 'A Tecnologia Criogênica: Resfriamento a -162°C', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D animation diagram showing methane gas being chilled to minus 162 degrees Celsius, shrinking in volume by 600 times into liquid.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Molecular compression visual from gas cloud to glowing liquid droplet.
Text on screen: "CRIOGENIA A -162°C // ENCOLHIMENTO DE 600X" in uppercase white Orbitron Bold.
Badge: "O SEGREDO QUE PERMITIU TRANSPORTAR GÁS PELOS OCEANOS" in white (#F5F2EB).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY freeze crackle and cryogenic vapor SFX.` },
      { t: 'Os Supermetaneiros da Frota Q-Max', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of giant 345-meter Q-Max LNG carriers departing Ras Laffan into the Strait of Hormuz.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ship track lines radiating to Japan, South Korea, China, and Western Europe.
Text on screen: "FROTA Q-MAX // 266.000 M³ POR NAVIO" in uppercase white Montserrat Bold.
Badge: "ENERGIA PARA ABASTECER PAÍSES INTEIROS EM UMA ÚNICA VIAGEM" in gold (#F59E0B).
Camera: dynamic linear satellite sweep along the navigation corridor.
NO voice, NO speech, NO music. ONLY ship horn and ocean wake rumble SFX.` },
      { t: 'O Bloqueio de 2017 e o Triunfo Diplomático', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating the June 2017 land, sea, and air blockade imposed by Saudi Arabia, UAE, Bahrain, and Egypt against Qatar.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red exclusion borders around the peninsula with air corridors re-routed via Iran and Turkey.
Text on screen: "O BLOQUEIO DE 2017 // A GUERRA DIPLOMÁTICA" in uppercase white Montserrat Bold.
Badge: "O GÁS NUNCA PAROU: EXPORTAÇÕES MANTIDAS A 100%" in intense crimson red (#C8102E).
Camera: steady diagonal flyover highlighting the Salwa border.
NO voice, NO speech, NO music. ONLY alarm pulse and radio broadcast chatter SFX.` },
      { t: 'O Fundo Soberano QIA: Meio Trilhão de Dólares', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
World map animation highlighting global assets owned by the Qatar Investment Authority (QIA): London (The Shard, Harrods), Germany (Volkswagen), Paris (PSG).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Investment pins in glowing gold (#F59E0B) across global financial capitals.
Text on screen: "FUNDO SOBERANO QIA // >US$ 500 BILHÕES" in uppercase white Orbitron Bold.
Badge: "DE DOHA PARA AS MAIORES EMPRESAS E MONUMENTOS DO MUNDO" in sage green (#A8C3A6).
Camera: wide orthographic flyover from Europe to North America.
NO voice, NO speech, NO music. ONLY financial ledger chime and digital tally SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Arabian Peninsula and Persian Gulf with Qatar glowing at its center.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the peninsula.
Text on screen: "A CAPITAL DO GÁS // O ESTADO DO CATAR" in uppercase white Orbitron Bold.
Badge: "A PENÍNSULA QUE MANDA NO TERMOSTATO DO MUNDO" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Gulf horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 161: TSUSHIMA (hoje)
  {
    num: 161,
    titulo: 'Por Que o Estreito de Tsushima É a Rota Naval Mais Vigiada do Leste Asiático Desde a Batalha de 1905?',
    roteiro: `Por que o Estreito de Tsushima é a rota naval mais vigiada do Leste Asiático desde a batalha de 1905? Com apenas cinquenta quilômetros de largura separando o Japão da costa de Busan na Coreia do Sul, este canal marítimo conecta o Mar da China Oriental ao Mar do Japão. Foi aqui, em maio de 1905, que o almirante japonês Togo destruiu a esquadra do czar russo Nicolau Segundo em vinte e quatro horas, marcando a primeira grande vitória militar asiática contra um império europeu na era moderna. Hoje, as águas de Tsushima são monitoradas por uma teia invisível de hidrofones e radares tridimensionais, rastreando submarinos da Frota Russa de Vladivostok e navios de guerra chineses que tentam cruzar para o Pacífico. Um estreito onde a história militar e a rota dos semicondutores navegam lado a lado. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the narrow waters between Busan (South Korea) and Kyushu (Japan).
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGALTA NAVAL"
Line 2 (intense crimson red #C8102E): "DO ESTREITO DE TSUSHIMA"
Line 3 (pure white #F5F2EB): "A ROTA MAIS VIGIADA DA ÁSIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Tsushima Island.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Garganta Naval de 50 km Entre Busan e Fukuoka', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the 50 km nautical pinch point between the Korean peninsula and the Japanese home islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in Bege Cartográfico (#F5F2EB): "50 KM NAVEGÁVEIS".
Text on screen: "ESTREITO DA COREIA // CANAL DE TSUSHIMA" in uppercase white Orbitron Bold.
Badge: "A PORTA ENTRE O MAR DA CHINA E O MAR DO JAPÃO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the strait.
NO voice, NO speech, NO music. ONLY radar telemetry lock and ocean wind SFX.` },
      { t: 'A Batalha de Tsushima de 1905: O Cruzamento do T', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical tactical diagram overlay showing Admiral Togo's Japanese fleet crossing the T of the Russian Baltic Fleet on May 27, 1905.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Warship vectors in red and gold firing broadsides across the strait.
Text on screen: "BATALHA DE TSUSHIMA // 27 MAIO 1905" in uppercase white Orbitron Bold.
Badge: "21 NAVIOS RUSSOS AFUNDADOS EM 24 HORAS" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in over the tactical engagement.
NO voice, NO speech, NO music. ONLY historic naval cannon thunder and wood splinter SFX.` },
      { t: 'A Viagem de 33.000 km da Frota do Czar', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
World map animation showing the 7-month, 33,000 km voyage of the Russian fleet from the Baltic around Africa to Tsushima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red expedition line tracing across the Atlantic and Indian oceans into the strait.
Text on screen: "A ROTA DA MORTE // 33.000 KM DESDE O BÁLTICO" in uppercase white Montserrat Bold.
Badge: "O DESASTRE MILITAR QUE PRECIPITOU A QUEDA DO CZAR" in gold (#F59E0B).
Camera: high-altitude satellite flyover following the maritime path.
NO voice, NO speech, NO music. ONLY ocean swell and compass creak SFX.` },
      { t: 'O Canal Artificial de Manzeki Escavado em 1900', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme close-up satellite view of the Manzeki canal cutting Tsushima Island into two separate landmasses.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Artificial canal cut highlighted in glowing sage green (#A8C3A6).
Text on screen: "CANAL DE MANZEKI (1900) // CORTE ARTIFICIAL" in uppercase white Orbitron Bold.
Badge: "ESCAVADO PELA MARINHA JAPONESA PARA ATALHO MILITAR" in sage green (#A8C3A6).
Camera: linear descent toward the metallic bridge over the canal.
NO voice, NO speech, NO music. ONLY water rapids and metal bridge chime SFX.` },
      { t: 'A Rede de Hidrofones Submarinos Antissubmarino', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetry view showing the 90-meter shallow seabed wired with submarine acoustic detection cables (SOSUS/OP-3).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing sonar rings tracking submerged submarine silhouettes.
Text on screen: "REDE SOSUS // VIGILÂNCIA ANTISSUBMARINO" in uppercase white Montserrat Bold.
Badge: "MONITORAMENTO DE SUBMARINOS RUSSOS E CHINESES" in gold (#F59E0B).
Camera: steady diagonal flyover at constant nautical altitude.
NO voice, NO speech, NO music. ONLY tactical sonar ping and deep water hum SFX.` },
      { t: 'A Disputa Pelas Ilhas Dokdo/Takeshima', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming north of the strait onto the contested rocky islets of Dokdo / Takeshima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Overlapping maritime boundaries in amber (#F59E0B) and red (#C8102E).
Text on screen: "DOKDO / TAKESHIMA // DISPUTA TERRITORIAL" in uppercase white Montserrat Bold.
Badge: "GUARDA COSTEIRA COREANA OCUPANDO DESDE 1954" in white (#F5F2EB).
Camera: 3D orbit around the sheer volcanic cliffs of the islets.
NO voice, NO speech, NO music. ONLY sea spray and radio surveillance chatter SFX.` },
      { t: 'O Cruzamento de Espaço Aéreo ADIZ', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical radar layout showing overlapping Air Defense Identification Zones (ADIZ) of Japan, South Korea, and China over the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Radar sector sweeps with fighter jet intercept vectors.
Text on screen: "SOBREPOSIÇÃO DE ADIZ // CÉUS EM ALERTA" in uppercase white Orbitron Bold.
Badge: "INTERCEPTAÇÕES SEMANAIS DE CAÇAS F-15 E F-35" in intense crimson red (#C8102E).
Camera: orthographic aerial view looking down at flight corridors.
NO voice, NO speech, NO music. ONLY jet cockpit radar alert beep SFX.` },
      { t: 'A Rota Tecnológica dos Semicondutores e Busan', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing commercial container ship density between Busan (23 million TEUs) and Japanese industrial ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-tech trade vectors glowing in sage green (#A8C3A6).
Text on screen: "CORREDOR DE ALTA TECNOLOGIA // BUSAN E JAPÃO" in uppercase white Montserrat Bold.
Badge: "QUÍMICOS ESSENCIAIS PARA CHIPS DE MEMÓRIA DA SAMSUNG" in sage green (#A8C3A6).
Camera: linear satellite sweep over the bustling container terminals.
NO voice, NO speech, NO music. ONLY harbor crane hum and container lock SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete East Asian maritime crossroads from Shanghai to Vladivostok.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Korean and Japanese coasts.
Text on screen: "A GARGALTA DO ORIENTE // ESTREITO DE TSUSHIMA" in uppercase white Orbitron Bold.
Badge: "ONDE AS MAIORES MARINHAS DO MUNDO SE CRUZAM" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing regional horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 162: TABATINGA-LETICIA (hoje)
  {
    num: 162,
    titulo: 'Como Três Países Sul-Americanos Convivem Sem Fronteiras Físicas no Coração da Floresta Amazônica?',
    roteiro: `Como três países sul-americanos convivem sem fronteiras físicas no coração da floresta amazônica? A mais de mil quilômetros de qualquer capital, na confluência do Solimões com o Javari, as cidades de Tabatinga no Brasil, Letícia na Colômbia e a comunidade insular de Santa Rosa no Peru formam uma das fronteiras mais pacíficas do mundo. Entre o lado brasileiro e colombiano, a divisa é apenas uma avenida urbana comum chamada Avenida Internacional. Não existem muros, cancelas ou guardas aduaneiros: moradores cruzam a rua a pé para ir à padaria ou ao trabalho, pagando indiferentemente em reais, pesos colombianos ou soles peruanos. A soberania que foi disputada em uma guerra fluvial na década de 1930 transformou-se em uma conurbação trilíngue no meio da maior floresta do planeta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the deep Amazon Basin where Brazil, Colombia, and Peru meet.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "SEM MUROS OU CANCELAS"
Line 2 (intense crimson red #C8102E): "A TRÍPLICE FRONTEIRA AMAZÔNICA"
Line 3 (pure white #F5F2EB): "BRASIL, COLÔMBIA E PERU"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the confluence of the Solimões and Javari rivers.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric jungle rumble and clean satellite whoosh SFX.` },
      { t: 'O Ponto Extremo no Meio da Selva Equatorial', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental scale map highlighting the extreme isolation: 1,000 km from Manaus, 1,100 km from Bogota, 2,000 km from Lima with zero highways.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance vectors radiating outward through the endless green canopy.
Text on screen: "A 1.000 KM DE QUALQUER ESTRADA // TABATINGA E LETÍCIA" in uppercase white Orbitron Bold.
Badge: "120.000 MORADORES CONECTADOS APENAS POR RIOS E AVIÕES" in gold (#F59E0B).
Camera: dynamic linear satellite tracking shot along the Amazon River curves.
NO voice, NO speech, NO music. ONLY jungle birds and river water splash SFX.` },
      { t: 'A Avenida da Amizade: A Linha Divisória Invisível', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution urban satellite view zooming down to street level on Avenida da Amizade / Avenida Internacional.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A thin dashed yellow vector tracing the center of the asphalt street: "FRONTEIRA INTERNACIONAL BRASIL-COLÔMBIA".
Text on screen: "AVENIDA INTERNACIONAL // ZERO CANCELAS" in uppercase white Montserrat Bold.
Badge: "LIVRE CIRCULAÇÃO DIÁRIA DE PEDESTRES E MOTOCICLETAS" in sage green (#A8C3A6).
Camera: slow linear descent towards the road between Tabatinga and Leticia.
NO voice, NO speech, NO music. ONLY motorcycle buzz and street market chatter SFX.` },
      { t: 'A Economia Trilíngue: Real, Peso e Sol Peruano', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic animation showing three currency symbols (R$, COP, S/.) circulating side by side across store signs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dual language market signage in Portuguese and Spanish.
Text on screen: "ECONOMIA TRILÍNGUE // TRÊS MOEDAS" in uppercase white Orbitron Bold.
Badge: "COMÉRCIO LOCAL ACEITA REAIS, PESOS E SOLES INDISTINTAMENTE" in white (#F5F2EB).
Camera: smooth technical pan across the border shopping zone.
NO voice, NO speech, NO music. ONLY cash register ring and marketplace murmur SFX.` },
      { t: 'O Trapézio Amazônico e o Tratado Salomón-Lozano de 1922', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the geometric corridor known as the Trapecio Amazonico granted to Colombia in 1922.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Corridor outlined in bright gold (#F59E0B): "ACESSO SOBERANO AO RIO AMAZONAS".
Text on screen: "TRAPÉZIO AMAZÔNICO // TRATADO DE 1922" in uppercase white Montserrat Bold.
Badge: "COLÔMBIA GANHA SAÍDA NAVEGÁVEL PARA O ATLÂNTICO" in sage green (#A8C3A6).
Camera: linear satellite zoom out revealing the trapezoidal border shape.
NO voice, NO speech, NO music. ONLY historic document rustle and seal stamp SFX.` },
      { t: 'A Guerra de Letícia de 1932: O Conflito Peru-Colômbia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating the September 1932 invasion of Leticia by Peruvian forces and the Colombian gunboat flotilla sailing upriver.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Gunboat icons and naval skirmish markers along the river bend.
Text on screen: "GUERRA DE LETÍCIA (1932-1933) // LIGA DAS NAÇÕES" in uppercase white Montserrat Bold.
Badge: "RESOLVIDO PELO PROTOCOLO DO RIO DE JANEIRO DE 1934" in intense crimson red (#C8102E).
Camera: dramatic lateral pan along the riverbank.
NO voice, NO speech, NO music. ONLY steamship whistle and antique artillery echo SFX.` },
      { t: 'A Ilha Fluvial de Santa Rosa de Yavarí (Peru)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the sediment island of Santa Rosa de Yavari in the center of the muddy Amazon River stream.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island boundary glowing with Peruvian naval post marker.
Text on screen: "SANTA ROSA DE YAVARÍ // O VÉRTICE PERUANO" in uppercase white Montserrat Bold.
Badge: "COMUNIDADE PALAFÍTICA A 10 MINUTOS DE LANCHA" in gold (#F59E0B).
Camera: low-altitude flyover above the wooden stilts and riverboats.
NO voice, NO speech, NO music. ONLY outboard motor hum and water wake SFX.` },
      { t: 'O Rio Javari e a Terra Indígena dos Povos Isolados', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning south down the winding Javari River marking the border between Brazil and Peru.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indigenous reservation polygon glowing in deep green: "TERRA INDÍGENA VALE DO JAVARI".
Text on screen: "VALE DO JAVARI // FRONTEIRA SENSÍVEL" in uppercase white Orbitron Bold.
Badge: "A MAIOR CONCENTRAÇÃO DE POVOS ISOLADOS DO PLANETA" in sage green (#A8C3A6).
Camera: steady diagonal flyover through dense jungle canopy.
NO voice, NO speech, NO music. ONLY deep rainforest nature ambience SFX.` },
      { t: 'O Povo Ticuna: Soberania Indígena Além dos Mapas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ethnographic territory map showing ancestral settlements of the Ticuna people spread across Brazilian, Colombian, and Peruvian shores.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Traditional clan migration paths glowing across the river lines.
Text on screen: "NAÇÃO TICUNA // 60.000 INDÍGENAS" in uppercase white Montserrat Bold.
Badge: "FAMÍLIAS ANCESTRAIS COM TRÊS NACIONALIDADES" in white (#F5F2EB).
Camera: wide orthographic flyover displaying the tri-border wetlands.
NO voice, NO speech, NO music. ONLY indigenous wooden flute and paddle splash SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the triple confluence where the Solimões, Javari, and Amazon rivers meet under equatorial clouds.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the three sovereign territories.
Text on screen: "TRÍPLICE FRONTEIRA AMAZÔNICA // BRASIL, COLÔMBIA, PERU" in uppercase white Orbitron Bold.
Badge: "A CIDADE TRIPLA QUE VIVE SEM MUROS NA SELVA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing endless Amazon green horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 163: NOVA GUINE (hoje)
  {
    num: 163,
    titulo: 'Por Que Uma Linha Reta no Meio da Selva Divide a Segunda Maior Ilha do Planeta?',
    roteiro: `Por que uma linha reta no meio da selva divide a segunda maior ilha do planeta? Com quase oitocentos mil quilômetros quadrados, a Nova Guiné é a maior ilha tropical da Terra, abrigando mais de mil tribos e picos nevados com geleiras equatoriais a quase cinco mil metros de altitude. No entanto, o mapa político da ilha é cortado ao meio por uma linha reta artificial de oitocentos e vinte quilômetros ao longo do meridiano cento e quarenta e um leste. Essa cicatriz nasceu em 1828, quando a Holanda proclamou posse sobre a metade ocidental, enquanto britânicos e alemães partilharam o leste. A única curva da fronteira foi negociada em 1895 para contornar a curva do Rio Fly e garantir a navegação britânica. Hoje, a linha divide a soberania da Indonésia da Papua-Nova Guiné em meio a florestas intransponíveis. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the bird-shaped landmass of New Guinea north of Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "UMA LINHA RETA NA SELVA"
Line 2 (intense crimson red #C8102E): "A SEGUNDA MAIOR ILHA DO MUNDO"
Line 3 (pure white #F5F2EB): "INDONÉSIA E PAPUA-NOVA GUINÉ"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the 141st meridian line.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Dimensão Colossal de 785.753 km²', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental scale view showcasing New Guinea's true size: second largest island on Earth, exceeding Turkey or France in land area.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island boundary glowing in Bege Cartográfico (#F5F2EB): "785.753 KM²".
Text on screen: "ILHA DE NOVA GUINÉ // 785.753 KM²" in uppercase white Orbitron Bold.
Badge: "SEGUNDA MAIOR DO PLANETA, ATRÁS APENAS DA GROENLÂNDIA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot along the central mountain spine.
NO voice, NO speech, NO music. ONLY mountain wind and digital metric chime SFX.` },
      { t: 'O Meridiano 141° Leste: A Régua Colonial de 1828', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
A sharp, glowing red 2px vector line cutting 820 km from north to south along the 141° East meridian.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Meridian coordinates labeled in JetBrains Mono: "141°00'00"E".
Text on screen: "MERIDIANO 141° LESTE // A RÉGUA COLONIAL" in uppercase white Montserrat Bold.
Badge: "820 KM DE LINHA RETA TRAÇADA POR BUROCRATAS NA EUROPA" in intense crimson red (#C8102E).
Camera: smooth linear zoom directly along the geometric border.
NO voice, NO speech, NO music. ONLY surveyor laser tone and metallic ruler snap SFX.` },
      { t: 'A Partilha Tripla: Holanda, Grã-Bretanha e Alemanha (1884)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the 1884 division: Dutch New Guinea in the west, British Papua in the southeast, German Kaiser-Wilhelmsland in the northeast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Imperial colonial color blocks labeled with historical crests.
Text on screen: "A PARTILHA DE 1884 // TRÊS IMPÉRIOS" in uppercase white Orbitron Bold.
Badge: "HOLANDESES, BRITÂNICOS E ALEMÃES DIVIDEM A SELVA" in gold (#F59E0B).
Camera: dynamic linear satellite sweep comparing the colonial halves.
NO voice, NO speech, NO music. ONLY historical parchment rustle and military drum SFX.` },
      { t: 'A Curva do Rio Fly e o Tratado de Haia de 1895', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite zoom onto the 'Fly River bulge' — the single curved deviation where the border follows the meandering river.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
River bend highlighted in glowing sage green (#A8C3A6).
Text on screen: "A CURVA DO RIO FLY // TRATADO DE HAIA 1895" in uppercase white Montserrat Bold.
Badge: "A ÚNICA CURVA NEGOCIADA PARA GARANTIR NAVEGAÇÃO BRITÂNICA" in sage green (#A8C3A6).
Camera: slow cinematic downward push-in over the muddy river loops.
NO voice, NO speech, NO music. ONLY river current swirl and pen signing SFX.` },
      { t: 'Puncak Jaya: Geleiras Tropicais a 4.884 Metros de Altitude', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic 3D satellite view of Puncak Jaya (Carstensz Pyramid) with its vanishing equatorial ice caps.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Elevation marker: "▲ 4.884 M // MAIOR PICO DA OCEANIA".
Text on screen: "PUNCAK JAYA // O TETO DA ILHA" in uppercase white Montserrat Bold.
Badge: "GELEIRAS EQUATORIAIS DESAPARECENDO SOB O AQUECIMENTO" in white (#F5F2EB).
Camera: 3D orbit around the sheer limestone pyramid.
NO voice, NO speech, NO music. ONLY high-altitude freezing wind gale SFX.` },
      { t: 'A Megamina de Grasberg: Ouro e Cobre Bilionários', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the colossal open-pit mine of Grasberg, just kilometers from the glacial summits.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mine pit terraces highlighted in glowing gold (#F59E0B).
Text on screen: "MINA DE GRASBERG // A MAIOR DE OURO DO MUNDO" in uppercase white Orbitron Bold.
Badge: "BILHÕES DE DÓLARES EM COBRE E OURO NO MEIO DA FLORESTA" in gold (#F59E0B).
Camera: steep top-down descent into the mining pit.
NO voice, NO speech, NO music. ONLY heavy industrial machinery rumble SFX.` },
      { t: 'O Conflito de Papua Ocidental e a Guerrilha OPM', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating border crossings and dense rainforest patrol zones between Indonesian Papua and PNG.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Refugee movement arrows and military post icons.
Text on screen: "TENSÃO FRONTEIRIÇA // A GUERRILHA DA OPM" in uppercase white Montserrat Bold.
Badge: "DISPUTA PELA AUTONOMIA E DIREITOS INDÍGENAS PAPUAS" in intense crimson red (#C8102E).
Camera: steady diagonal flyover through cloud-shrouded jungle valleys.
NO voice, NO speech, NO music. ONLY radio static and distant helicopter rotor SFX.` },
      { t: 'O Único Posto Rodoviário: Skouw e Wutung na Costa Norte', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close satellite view of the coastal checkpoint of Skouw (Indonesia) and Wutung (PNG), the only paved road crossing on the entire 820 km border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Road crossing vector in Bege Cartográfico (#F5F2EB).
Text on screen: "POSTO SKOUW / WUTUNG // O ÚNICO ASFALTO" in uppercase white Montserrat Bold.
Badge: "OS OUTROS 800 KM SÃO SELVA ABSOLUTAMENTE INTRANSPONÍVEL" in sage green (#A8C3A6).
Camera: slow linear descent towards the border gate.
NO voice, NO speech, NO music. ONLY ocean surf and border gate bell chime SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete New Guinea island floating between the Pacific Ocean and the Coral Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector border in Bege Cartográfico (#F5F2EB, 2px) tracing the 141° meridian line.
Text on screen: "A ILHA DIVIDIDA // NOVA GUINÉ" in uppercase white Orbitron Bold.
Badge: "O MAIOR MOSAICO DE LÍNGUAS E FLORESTAS DO PLANETA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing equatorial Pacific horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  },

  // 164: BAKASSI (hoje)
  {
    num: 164,
    titulo: 'Por Que a Nigéria Entregou Uma Península Petrolífera Bilionária Para Camarões Sem Disparar Um Tiro?',
    roteiro: `Por que a Nigéria entregou uma península petrolífera bilionária para Camarões sem disparar um tiro? No Golfo da Guiné, a Península de Bakassi cobre mil quilômetros quadrados de manguezais ricos em petróleo e pesqueiros estratégicos. Durante décadas, o território foi ocupado militarmente pela Nigéria, e noventa por cento de seus trezentos mil moradores eram cidadãos nigerianos. Em 1994, Camarões decidiu processar a Nigéria na Corte Internacional de Justiça de Haia, resgatando um tratado colonial assinado entre britânicos e alemães em 1913. Em 2002, para surpresa do continente, o tribunal deu ganho de causa a Camarões. Em vez de iniciar uma guerra sangrenta, a Nigéria assinou o Acordo de Greentree em 2006 sob mediação da ONU e retirou todas as suas tropas, em um dos raros exemplos de respeito pacífico ao direito internacional. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Gulf of Guinea where Nigeria meets Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A PENÍNSULA DO PETRÓLEO"
Line 2 (intense crimson red #C8102E): "POR QUE A NIGÉRIA CEDEU BAKASSI?"
Line 3 (pure white #F5F2EB): "A DECISÃO HISTÓRICA DE HAIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Bakassi mangrove delta.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Península de Bakassi: 1.000 km² de Mangues e Petróleo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the 1,000 km² maze of mangrove channels and islands in the Rio del Rey estuary.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peninsula boundary highlighted in glowing amber (#F59E0B): "1.000 KM² // PETRÓLEO E PESCA".
Text on screen: "PENÍNSULA DE BAKASSI // GOLFO DA GUINÉ" in uppercase white Orbitron Bold.
Badge: "300 MIL MORADORES (90% DE ETNIA NIGERIANA)" in intense crimson red (#C8102E).
Camera: slow linear satellite tracking shot across the coastal wetlands.
NO voice, NO speech, NO music. ONLY tidal water surge and telemetry lock chime SFX.` },
      { t: 'O Tratado Anglo-Germânico de 1913', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical colonial map overlay showing the March 1913 treaty boundary placing Bakassi inside the German colony of Kamerun.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Colonial demarcation line glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "TRATADO DE 1913 // REINO UNIDO E ALEMANHA" in uppercase white Montserrat Bold.
Badge: "O DOCUMENTO COLONIAL QUE DECIDIU O DESTINO DA PENÍNSULA" in gold (#F59E0B).
Camera: smooth linear zoom into the Rio del Rey river mouth.
NO voice, NO speech, NO music. ONLY historical quill scratch and wax seal chime SFX.` },
      { t: 'A Ocupação Militar Nigeriana de 1993', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military map showing Nigerian army garrisons landing in force in December 1993 under General Sani Abacha.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Military deployment arrows in bright red (#C8102E) across the peninsula.
Text on screen: "OCUPAÇÃO MILITAR (1993) // GENERAL ABACHA" in uppercase white Orbitron Bold.
Badge: "POSTOS FORTIFICADOS E ADMINISTRAÇÃO CIVIL NIGERIANA" in intense crimson red (#C8102E).
Camera: low-altitude flyover above mangrove channels and barracks.
NO voice, NO speech, NO music. ONLY patrol boat engine and military boots SFX.` },
      { t: 'O Processo em Haia: Camarões Aciona a Corte Internacional', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of the International Court of Justice (ICJ) in The Hague receiving the formal legal case filed by Cameroon in March 1994.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Legal boundary vector radiating from Lake Chad down to the Atlantic Ocean.
Text on screen: "CORTE DE HAIA // CAMARÕES VS. NIGÉRIA" in uppercase white Montserrat Bold.
Badge: "OITO ANOS DE DISPUTA JURÍDICA E MAPAS HISTÓRICOS" in sage green (#A8C3A6).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY courtroom gavel strike and page turn SFX.` },
      { t: 'A Sentença Histórica de 10 de Outubro de 2002', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D animation showing the ICJ verdict: by 13 votes to 3, the court awards complete sovereignty over Bakassi to Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Sovereignty transfer vectors shifting across the peninsula.
Text on screen: "SENTENÇA DA CIJ // 10 OUTUBRO 2002" in uppercase white Orbitron Bold.
Badge: "TRIUNFO DO PRINCÍPIO DO UTI POSSIDETIS JURIS" in gold (#F59E0B).
Camera: steady diagonal satellite sweep over the disputed border.
NO voice, NO speech, NO music. ONLY legal gavel echo and dramatic transition tone SFX.` },
      { t: 'A Mediação de Kofi Annan e o Acordo de Greentree (2006)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic layout showing UN Secretary-General Kofi Annan mediating between Nigerian President Obasanjo and Cameroonian President Biya in New York.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Signature graphic with UN seal glowing in white (#F5F2EB).
Text on screen: "ACORDO DE GREENTREE // 12 JUNHO 2006" in uppercase white Montserrat Bold.
Badge: "COMPROMISSO HISTÓRICO DE DESOCUPAÇÃO PACÍFICA DE TROPAS" in sage green (#A8C3A6).
Camera: smooth linear zoom into the treaty text.
NO voice, NO speech, NO music. ONLY fountain pen signature and camera flash chime SFX.` },
      { t: 'A Transferência Oficial de Soberania em 2008', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ceremonial satellite view of Calabar / Bakassi base where the Nigerian flag was lowered and the Cameroonian flag was raised on August 14, 2008.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Flag transition vectors in green, white, and red.
Text on screen: "14 AGOSTO 2008 // TRANSFERÊNCIA PACÍFICA" in uppercase white Orbitron Bold.
Badge: "A BANDEIRA CAMARONESA HASTEADA SEM DISPARAR UM TIRO" in sage green (#A8C3A6).
Camera: slow linear descent towards the border post.
NO voice, NO speech, NO music. ONLY bugle call echo and crowd applause SFX.` },
      { t: 'O Novo Assentamento de Bakassi em Cross River', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional map panning to Cross River State in Nigeria showing the New Bakassi resettlement area built for returning fishermen.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Resettlement town polygon glowing in amber (#F59E0B).
Text on screen: "NOVO ASSENTAMENTO // REFUGIADOS DE RETORNO" in uppercase white Montserrat Bold.
Badge: "DEZENAS DE MILHARES DE PESCADORES REASSENTADOS" in white (#F5F2EB).
Camera: linear satellite sweep over the coastal towns.
NO voice, NO speech, NO music. ONLY riverboat engine and coastal breeze SFX.` },
      { t: 'Síntese Estratégica e Assinatura VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the Gulf of Guinea showing the peaceful border between Nigeria and Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the coastline.
Text on screen: "A LIÇÃO DE BAKASSI // DIREITO INTERNACIONAL" in uppercase white Orbitron Bold.
Badge: "QUANDO A DIPLOMACIA VENCEU A GUERRA NA ÁFRICA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Atlantic horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.` }
    ]
  }
];

function buildVideoMarkdown(v) {
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n${v.roteiro}\n\n---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  let pCount = 0;
  for (const p of v.prompts) {
    pCount++;
    md += `#### Prompt ${pCount} — ${p.t} (4s)\n\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }

  md += `---\n\n### 3. Legenda\n\n${v.titulo}\n\n#geografia #geopolitica #mapas\n`;
  return md;
}

// 1. Criar arquivos de roteiro
console.log('Gerando roteiros de vídeo 153 a 164...');
for (const v of allVideos) {
  const filePath = path.join(roteirosDir, `Video ${v.num}.md`);
  fs.writeFileSync(filePath, buildVideoMarkdown(v), 'utf8');
  console.log(`✓ Video ${v.num}.md gerado (${fs.statSync(filePath).size} bytes)`);
}

// 2. Atualizar Índice.md perfeitamente
console.log('Atualizando Índice.md com a lista completa e ordenada...');
const indicePath = path.join(roteirosDir, 'Índice.md');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

// Montar tabela limpa de 153 a 164
let novasLinhas = '';
for (const v of allVideos) {
  novasLinhas += `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |\n`;
}

// Substituir qualquer bloco de 153 em diante
const regex153 = /\| 153 \|[\s\S]*?(?=\n---\n\n## 🛠️ 3\.)/;
if (regex153.test(indiceContent)) {
  indiceContent = indiceContent.replace(regex153, novasLinhas.trim());
} else {
  indiceContent = indiceContent.replace('\n---\n\n## 🛠️ 3.', `\n${novasLinhas.trim()}\n\n---\n\n## 🛠️ 3.`);
}

fs.writeFileSync(indicePath, indiceContent, 'utf8');
console.log('✓ Índice.md atualizado perfeitamente!');
