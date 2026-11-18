// Gerador de Roteiros de Vídeo (Videos 232 a 234)
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s cada)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 232,
    titulo: 'Quais São as Dez Maiores Centrais Hidrelétricas do Mundo Onde Paredões de Concreto Represam Rios Titânicos?',
    roteiro: 'Quais São as Dez Maiores Centrais Hidrelétricas do Mundo Onde Paredões de Concreto Represam Rios Titânicos? No topo absoluto do planeta está a colossal Usina de Três Gargantas, na China, capaz de gerar vinte e dois mil e quinhentos megawatts no Rio Yangtzé — uma massa de água tão pesada que desacelerou a rotação da Terra. O segundo lugar também é chinês: Baihetan, com dezesseis gigawatts. Em terceiro lugar ergue-se o orgulho sul-americano: a Usina de Itaipu Binacional, dividida igualmente entre Brasil e Paraguai, com catorze mil megawatts e o recorde histórico de energia acumulada entregue à rede. O quarto lugar é da chinesa Xiluodu, seguida pela brasileira Belo Monte, no Rio Xingu, com mais de onze mil megawatts. A lista das dez maiores usinas do mundo conta ainda com Guri na Venezuela, Wudongde e Xiangjiaba na China, Grand Coulee nos Estados Unidos e Sayano-Shushenskaya na Sibéria russa. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'OS MAIORES COLOSSOS DE CONCRETO',
      l2: 'AS DEZ MAIORES HIDRELÉTRICAS DO MUNDO',
      l3: 'CENTENAS DE GIGAWATTS DE ENERGIA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Megaestruturas Hidrelétricas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the great river systems of East Asia and South America, highlighting monumental hydroelectric dam spillways glowing in bright electric blue and golden vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "OS MAIORES COLOSSOS DE CONCRETO"
Line 2 (intense crimson red #C8102E): "AS DEZ MAIORES HIDRELÉTRICAS DO MUNDO"
Line 3 (pure white #F5F2EB): "CENTENAS DE GIGAWATTS DE ENERGIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Yangtze and Paraná river basins.
NO voice, NO speech, NO music. ONLY deep water turbine hum and electrical transformer buzz SFX.`
      },
      {
        titulo: '1º Lugar: Três Gargantas (China) com 22.500 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the Three Gorges Dam in Hubei, China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive concrete wall spanning 2.335 meters across the Yangtze River with spillway gates discharging thousands of tons of foaming water.
Text on screen: "1º LUGAR // TRÊS GARGANTAS (CHINA) // 22.500 MW" in uppercase white Orbitron Bold.
Badge: "39 BILHÕES DE M³ DE ÁGUA REPRESADOS" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing 32 massive penstock tubes.
NO voice, NO speech, NO music. ONLY colossal water roar and electrical power surge SFX.`
      },
      {
        titulo: '2º Lugar: Baihetan (China) com 16.000 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the narrow gorge of the Jinsha River (Upper Yangtze) where Baihetan Dam is built.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A double-curvature concrete arch dam rising 289 meters between sheer vertical mountain cliffs.
Text on screen: "2º LUGAR // BAIHETAN (CHINA) // 16.000 MW" in uppercase white Orbitron Bold.
Badge: "16 TURBINAS DE 1.000 MW CADA (RECORD MUNDIAL)" in gold (#F59E0B).
Camera: dynamic linear flyover skimming the crest of the arch dam.
NO voice, NO speech, NO music. ONLY mountain canyon wind and high-pressure water hiss SFX.`
      },
      {
        titulo: '3º Lugar: Itaipu Binacional (Brasil/Paraguai) com 14.000 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view descending onto Itaipu Dam on the Paraná River.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Spillway chutes open discharging 62.000 m³/s of water into the Paraná canyon with the international border splitting the powerhouse.
Text on screen: "3º LUGAR // ITAIPU BINACIONAL (BRASIL / PARAGUAI) // 14.000 MW" in uppercase white Orbitron Bold.
Badge: "RECORDE HISTÓRICO MUNDIAL DE ENERGIA ACUMULADA" in sage green (#A8C3A6).
Camera: linear tracking shot flying across the 7-kilometer-long dam crest.
NO voice, NO speech, NO music. ONLY deafening spillway water thunder and hydro generator hum SFX.`
      },
      {
        titulo: '4º Lugar: Xiluodu (China) com 13.860 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of Xiluodu Dam on the Jinsha River in southwestern China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Curved concrete arch dam holding back a turquoise reservoir surrounded by barren rocky karst peaks.
Text on screen: "4º LUGAR // XILUODU (CHINA) // 13.860 MW" in uppercase white Montserrat Bold.
Badge: "18 TURBINAS FRANCIS DE 770 MW CADA" in gold (#F59E0B).
Camera: circular orbital sweep over the underground powerhouse caverns.
NO voice, NO speech, NO music. ONLY deep rock subterranean rumble and water turbine whine SFX.`
      },
      {
        titulo: '5º Lugar: Belo Monte (Brasil) com 11.233 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over the Big Bend (Volta Grande) of the Xingu River in the Brazilian Amazon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Main powerhouse at Sítio Pimental and Sítio Belo Monte connected by intermediate reservoir diversion canals.
Text on screen: "5º LUGAR // BELO MONTE (BRASIL) // 11.233 MW" in uppercase white Orbitron Bold.
Badge: "A MAIOR USINA 100% BRASILEIRA EM CAPACIDADE" in sage green (#A8C3A6).
Camera: wide linear flight over the green rainforest canopy and river channels.
NO voice, NO speech, NO music. ONLY Amazon jungle bird calls and water surging through intake gates SFX.`
      },
      {
        titulo: '6º Lugar: Guri (Venezuela) com 10.235 MW',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Guri Dam (Simón Bolívar) on the Caroni River in Bolívar state, Venezuela.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive reservoir covering 4.250 km² surrounded by savannah and dense tepui jungle.
Text on screen: "6º LUGAR // GURI (VENEZUELA) // 10.235 MW" in uppercase white Montserrat Bold.
Badge: "ABASTECE MAIS DE 70% DE TODA A ELETRICIDADE DA VENEZUELA" in pure white (#F5F2EB).
Camera: smooth lateral pan along the 7.426-meter composite dam wall.
NO voice, NO speech, NO music. ONLY tropical wind gust and high-voltage transmission line buzz SFX.`
      },
      {
        titulo: '7º e 8º Lugares: Wudongde e Xiangjiaba (China)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Wudongde Dam (10.200 MW) and Xiangjiaba Dam (6.448 MW) on the Jinsha River cascade.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Integrated staircase of five Chinese megadams working in coordinated hydro dispatch.
Text on screen: "7º WUDONGDE (10.200 MW) // 8º XIANGJIABA (6.448 MW)" in uppercase white Orbitron Bold.
Badge: "A CASCATA HIDRELÉTRICA MAIS POTENTE DA HISTÓRIA" in gold (#F59E0B).
Camera: fast flight descending down the mountain canyon steps.
NO voice, NO speech, NO music. ONLY turbine governor click and water flume roar SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Grand Coulee (EUA) e Sayano-Shushenskaya (Rússia)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite split comparison: Grand Coulee on the Columbia River (USA, 6.809 MW) and Sayano-Shushenskaya on the Yenisei River (Russia, 6.400 MW).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Massive gravity dam walls repressing two of the coldest and most powerful river flows in North America and Siberia.
Text on screen: "9º GRAND COULEE (EUA, 6.809 MW) // 10º SAYANO (RÚSSIA, 6.400 MW)" in uppercase white Montserrat Bold.
Badge: "OS ÍCONES DA ENGENHARIA PESADA DA GUERRA FRIA" in pure white (#F5F2EB).
Camera: lateral tracking shot crossing the massive spillway faces.
NO voice, NO speech, NO music. ONLY heavy concrete vibration hum and river rapids roar SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of planet Earth highlighting the blue river veins of the continents and the glowing energy grids of the planet at night.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Quais São as Dez Maiores Centrais Hidrelétricas do Mundo Onde Paredões de Concreto Represam Rios Titânicos?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 233,
    titulo: 'Quais São os Dez Maiores Produtores de Petróleo do Mundo Onde Milhões de Barris Diários Sustentam o Transporte Global?',
    roteiro: 'Quais São os Dez Maiores Produtores de Petróleo do Mundo Onde Milhões de Barris Diários Sustentam o Transporte Global? Enquanto as maiores reservas geológicas de petróleo estão na Venezuela, a liderança na extração diária pertence com folga aos Estados Unidos, que bombeiam mais de treze milhões de barris por dia graças à revolução do xisto no Texas. Em segundo lugar está a Arábia Saudita, com nove milhões de barris diários extraídos a um custo de apenas três dólares no gigantesco campo de Ghawar. A Rússia ocupa a terceira posição, sustentando nove milhões de barris na Sibéria e redirecionando seu fluxo para a Ásia. O Canadá é o quarto colocado com as areias betuminosas de Alberta, seguido por Iraque, China e Irã. O Brasil brilha no oitavo lugar mundial: impulsionado pelas plataformas de águas ultraprofundas do Pré-Sal, o país produz quase três milhões e meio de barris diários, à frente dos Emirados Árabes Unidos e do Kuwait. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A SEIVA QUE MOVE O PLANETA TERRA',
      l2: 'OS MAIORES PRODUTORES DE PETRÓLEO DO MUNDO',
      l3: 'CEM MILHÕES DE BARRIS POR DIA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Extração Petrolífera Global',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the major petroleum basins of North America and the Persian Gulf, highlighting drilling fields glowing in deep amber and crimson vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A SEIVA QUE MOVE O PLANETA TERRA"
Line 2 (intense crimson red #C8102E): "OS MAIORES PRODUTORES DE PETRÓLEO DO MUNDO"
Line 3 (pure white #F5F2EB): "CEM MILHÕES DE BARRIS POR DIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward Texas and the Arabian Desert.
NO voice, NO speech, NO music. ONLY deep oil well pumpjack clank and gas flare roar SFX.`
      },
      {
        titulo: '1º Lugar: Estados Unidos com 13,3 Milhões de Barris/Dia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the Permian Basin in Texas and New Mexico.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A dense grid of thousands of illuminated drilling pads and horizontal fracking wells covering West Texas desert.
Text on screen: "1º LUGAR // ESTADOS UNIDOS // 13.300.000 BPD" in uppercase white Orbitron Bold.
Badge: "A REVOLUÇÃO DO SHALE OIL (XISTO) NA BACIA PERMIANA" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing parallel pumpjacks nodding rhythmically.
NO voice, NO speech, NO music. ONLY mechanical pumpjack rhythmic clank and pipeline valve hiss SFX.`
      },
      {
        titulo: '2º Lugar: Arábia Saudita com 9,1 Milhões de BPD',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the Eastern Province of Saudi Arabia and the colossal Ghawar Field.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
280 km long reservoir polygon glowing in dark gold amidst orange sand dunes.
Text on screen: "2º LUGAR // ARÁBIA SAUDITA // 9.100.000 BPD" in uppercase white Orbitron Bold.
Badge: "GHAWAR: O MAIOR CAMPO CONVENCIONAL EM TERRA DO PLANETA" in gold (#F59E0B).
Camera: linear flyover following crude oil pipelines to the Ras Tanura export terminal.
NO voice, NO speech, NO music. ONLY desert wind swirl and oil tanker loading pump hum SFX.`
      },
      {
        titulo: '3º Lugar: Rússia com 9,0 Milhões de BPD na Sibéria',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map over the snow-covered taiga and marshes of Western Siberia (Khanty-Mansiysk and Tyumen).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Gas flares burning bright yellow against the dark frozen sub-Arctic forest.
Text on screen: "3º LUGAR // RÚSSIA // 9.000.000 BPD" in uppercase white Montserrat Bold.
Badge: "REDIRECIONAMENTO TOTAL DO FLUXO PARA ÍNDIA E CHINA" in sage green (#A8C3A6).
Camera: dynamic linear flyover tracking crude pipelines cutting through white snow.
NO voice, NO speech, NO music. ONLY gas flare torch roar and Siberian gale wind howl SFX.`
      },
      {
        titulo: '4º Lugar: Canadá com 4,95 Milhões de BPD',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over the Athabasca oil sands open-pit surface mines in Fort McMurray, Alberta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Enormous terraced bitumen quarries and steam-assisted gravity drainage (SAGD) processing facilities.
Text on screen: "4º LUGAR // CANADÁ // 4.950.000 BPD" in uppercase white Orbitron Bold.
Badge: "EXTRAÇÃO DE AREIAS BETUMINOSAS EM ALBERTA" in pure white (#F5F2EB).
Camera: slow cinematic descent showing 400-ton haul trucks hauling black tar sand.
NO voice, NO speech, NO music. ONLY giant diesel haul truck engine drone and conveyor belt rumble SFX.`
      },
      {
        titulo: '5º, 6º e 7º Lugares: Iraque, China e Irã',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite split comparison between Rumaila in southern Iraq (4,3M bpd), Daqing in China (4,15M bpd), and Khuzestan in Iran (3,9M bpd).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vast industrial refinery and pipeline networks highlighted across the Middle East and Asia.
Text on screen: "5º IRAQUE (4,3M) // 6º CHINA (4,15M) // 7º IRÃ (3,9M BPD)" in uppercase white Montserrat Bold.
Badge: "GIGANTES CONVENCIONAIS DA EURÁSIA E ORIENTE MÉDIO" in gold (#F59E0B).
Camera: fast lateral pan jumping from the Persian Gulf to northeast China.
NO voice, NO speech, NO music. ONLY refinery flare stack rumble and pipeline pressure pulse SFX.`
      },
      {
        titulo: '8º Lugar: Brasil com 3,45 Milhões de BPD no Pré-Sal',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the Santos Basin, 200 km off the coast of Rio de Janeiro.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
FPSO floating production platforms (Búzios and Tupi fields) anchored in deep blue waters.
Text on screen: "8º LUGAR // BRASIL // 3.450.000 BPD" in uppercase white Orbitron Bold.
Badge: "A REVOLUÇÃO DO PRÉ-SAL A MAIS DE 6.000M DE PROFUNDIDADE" in sage green (#A8C3A6).
Camera: circular orbital sweep around a giant red-hulled FPSO with helideck active.
NO voice, NO speech, NO music. ONLY ocean wave surge against ship hull and offshore gas turbine roar SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Emirados Árabes e Kuwait',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Arabian Gulf focusing on Abu Dhabi offshore fields and Kuwait's giant Burgan field.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Offshore artificial oil islands in Abu Dhabi and gleaming export jetties.
Text on screen: "9º EMIRADOS ÁRABES (3,2M) // 10º KUWAIT (2,6M BPD)" in uppercase white Montserrat Bold.
Badge: "OS PILARES HISTÓRICOS DA OPEP NO GOLFO" in gold (#F59E0B).
Camera: low-altitude glide over shallow turquoise waters of the Gulf.
NO voice, NO speech, NO music. ONLY offshore marine diesel and tanker cargo pump whine SFX.`
      },
      {
        titulo: 'O Custo de Extração: De US$ 3 a US$ 50 por Barril',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic comparative bar chart overlay on world satellite map showing lifting costs per barrel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Saudi Arabia lowest at $3/bbl; Brazil offshore at $10/bbl; US shale at $40/bbl; Canada oil sands at $50/bbl.
Text on screen: "O CUSTO DO BARRIL // DE US$ 3 NO DESERTO A US$ 40 NO XISTO" in uppercase white Orbitron Bold.
Badge: "A MARGEM DE SOBREVIVÊNCIA DE CADA POTÊNCIA PETROLÍFERA" in intense crimson red (#C8102E).
Camera: dynamic tilt shot connecting the Gulf of Mexico, North Sea, and Persian Gulf.
NO voice, NO speech, NO music. ONLY digital ticker sound and cash register mechanical ding SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of planet Earth at night with the burning gas flares of the Permian Basin, Persian Gulf, North Sea, and Santos Basin glowing brightly from orbit.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Quais São os Dez Maiores Produtores de Petróleo do Mundo Onde Milhões de Barris Diários Sustentam o Transporte Global?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 234,
    titulo: 'Quais São os Dez Países com as Maiores Zonas Econômicas Exclusivas do Mundo Onde o Domínio Marítimo Supera a Terra Firme?',
    roteiro: 'Quais São os Dez Países com as Maiores Zonas Econômicas Exclusivas do Mundo Onde o Domínio Marítimo Supera a Terra Firme? Quando a Convenção da ONU sobre o Direito do Mar criou a regra das duzentas milhas náuticas em 1982, o mapa da Terra foi completamente redesenhado. No topo global estão os Estados Unidos, com mais de onze milhões de quilômetros quadrados de leito marinho impulsionados pela imensa costa do Alasca e pelas ilhas do Pacífico. Em segundo lugar está a França, controlando dez vírgula dois milhões de quilômetros quadrados graças aos seus territórios ultramarinos como a Polinésia e as Ilhas Kerguelen. A Austrália ocupa o terceiro lugar com oito milhões e meio de quilômetros quadrados, seguida pela Rússia e pelo Reino Unido. A Nova Zelândia impressiona com uma área marítima quinze vezes maior que sua terra firme. O Brasil completa o Top 10 mundial com a Amazônia Azul, que ultrapassa três vírgula seis milhões de quilômetros quadrados guardando o Pré-Sal. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A SOBERANIA QUE VAI ALÉM DA COSTA',
      l2: 'AS MAIORES ZONAS ECONÔMICAS EXCLUSIVAS',
      l3: 'DEZ MILHÕES DE KM² DE OCEANO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Zonas Econômicas Exclusivas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D rotating globe showing national continental landmasses in dark slate, while transparent cyan-blue 200-nautical-mile EEZ oceanic polygons expand across the Pacific, Atlantic, and Indian oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A SOBERANIA QUE VAI ALÉM DA COSTA"
Line 2 (intense crimson red #C8102E): "AS MAIORES ZONAS ECONÔMICAS EXCLUSIVAS"
Line 3 (pure white #F5F2EB): "DEZ MILHÕES DE KM² DE OCEANO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Pacific and Atlantic basins.
NO voice, NO speech, NO music. ONLY deep oceanic sonar ping and coastal surge SFX.`
      },
      {
        titulo: 'A Convenção de Montego Bay de 1982: 200 Milhas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map visualization of the Law of the Sea Treaty in Jamaica (1982).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Caliper scale measuring 200 nautical miles (370.4 km) expanding from national shorelines into open sea.
Text on screen: "1982 // A REGRA DAS 200 MILHAS NÁUTICAS (370 KM)" in uppercase white Orbitron Bold.
Badge: "MONOPÓLIO EXCLUSIVO DE PESCA, PETRÓLEO E MINERAIS" in gold (#F59E0B).
Camera: slow cinematic descent toward the Jamaican coastline.
NO voice, NO speech, NO music. ONLY maritime bell chime and rolling surf sound SFX.`
      },
      {
        titulo: '1º Lugar: Estados Unidos com 11,35 Milhões de km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of North America and the Pacific rim highlighting the US Exclusive Economic Zone.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Colossal oceanic rings covering 11.351.000 km² around Alaska, Hawaii, Guam, Puerto Rico, and the Aleutians.
Text on screen: "1º LUGAR // ESTADOS UNIDOS // 11.351.000 KM² DE ZEE" in uppercase white Orbitron Bold.
Badge: "MAIOR QUE TODA A ÁREA TERRESTRE CONTINENTAL DOS EUA" in intense crimson red (#C8102E).
Camera: high-altitude orbital sweep from the Bering Sea to the Hawaiian archipelago.
NO voice, NO speech, NO music. ONLY sonar beacon pulse and arctic oceanic swell SFX.`
      },
      {
        titulo: '2º Lugar: França com 10,18 Milhões de km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view scanning across France\'s overseas territories: French Polynesia, New Caledonia, Kerguelen, Reunion, and French Guiana.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Oceanic EEZ polygons glowing in French tricolor vectors covering 10.186.000 km².
Text on screen: "2º LUGAR // FRANÇA // 10.186.000 KM² DE ZEE" in uppercase white Orbitron Bold.
Badge: "93% DAS ÁGUAS SOBERANAS DE PARIS FORA DA EUROPA" in pure white (#F5F2EB).
Camera: fast dynamic orbit jumping across three oceans.
NO voice, NO speech, NO music. ONLY radar blip sweep and tropical trade wind gust SFX.`
      },
      {
        titulo: '3º Lugar: Austrália com 8,50 Milhões de km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Australian continent surrounded by vast turquoise and deep navy waters.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
EEZ boundary encircling the mainland, Tasmania, Heard and McDonald islands, and Norfolk Island covering 8.505.348 km².
Text on screen: "3º LUGAR // AUSTRÁLIA // 8.505.348 KM² DE ZEE" in uppercase white Montserrat Bold.
Badge: "A FORTALEZA MARÍTIMA DO INDO-PACÍFICO" in sage green (#A8C3A6).
Camera: smooth lateral pan along the Great Barrier Reef.
NO voice, NO speech, NO music. ONLY ocean breaker crashing on coral reef SFX.`
      },
      {
        titulo: '4º e 5º Lugares: Rússia e Reino Unido',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Russia\'s Arctic and Far East EEZ (7,56M km²) alongside the UK\'s overseas empire (6,80M km² across the Falklands, South Georgia, and Diego Garcia).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "4º RÚSSIA (7,56M KM²) // 5º REINO UNIDO (6,80M KM²)" in uppercase white Orbitron Bold.
Badge: "A ZEE BRITÂNICA É 28 VEZES MAIOR QUE A ILHA DA GRÃ-BRETANHA" in gold (#F59E0B).
Camera: dramatic tilt shot linking the Barents Sea to the South Atlantic Falklands.
NO voice, NO speech, NO music. ONLY sea spray wind and naval telegraph signal SFX.`
      },
      {
        titulo: '6º e 7º Lugares: Indonésia e Canadá',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view comparing the archipelagic waters of Indonesia (6,15M km² across 17.000 islands) and Canada\'s three-ocean coastline (5,59M km²).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "6º INDONÉSIA (6,15M KM²) // 7º CANADÁ (5,59M KM²)" in uppercase white Montserrat Bold.
Badge: "O CONTROLE DAS ROTAS ENTRE DOIS OCEANOS" in pure white (#F5F2EB).
Camera: linear tracking flight crossing the Strait of Malacca and the Canadian Arctic Archipelago.
NO voice, NO speech, NO music. ONLY ship horn echo and Arctic sea ice creak SFX.`
      },
      {
        titulo: '8º e 9º Lugares: Japão e Nova Zelândia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view highlighting Japan (4,47M km² across the Ogasawara and Ryukyu chains) and New Zealand (4,08M km² around the North, South, and sub-Antarctic islands).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "8º JAPÃO (4,47M KM²) // 9º NOVA ZELÂNDIA (4,08M KM²)" in uppercase white Orbitron Bold.
Badge: "A NOVA ZELÂNDIA TEM 15 VEZES MAIS MAR DO QUE TERRA" in gold (#F59E0B).
Camera: circular orbital sweep around Mount Taranaki and the Kermadec Trench.
NO voice, NO speech, NO music. ONLY ocean swell surge and seabird cry SFX.`
      },
      {
        titulo: '10º Lugar: Brasil e a Amazônia Azul (3,66M km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the coastline of Brazil from the Amazon mouth to Rio Grande do Sul.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive cyan-blue oceanic zone glowing across 3.660.955 km² including Fernando de Noronha, Atol das Rocas, and Trindade Island.
Text on screen: "10º LUGAR // BRASIL // 3.660.955 KM² DE AMAZÔNIA AZUL" in uppercase white Orbitron Bold.
Badge: "ONDE SE CONCENTRA MAIS DE 95% DO PETRÓLEO NACIONAL" in sage green (#A8C3A6).
Camera: linear tracking shot moving from Rio de Janeiro offshore to Trindade Island.
NO voice, NO speech, NO music. ONLY Atlantic ocean breaker roar and naval patrol sonar ping SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of planet Earth showing all global Exclusive Economic Zones glowing in unified turquoise network rings over the blue planet.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Quais São os Dez Países com as Maiores Zonas Econômicas Exclusivas do Mundo Onde o Domínio Marítimo Supera a Terra Firme?\n\n#geografia #geopolitica #mapas'
  }
];

console.log('Criando vídeos 232 a 234...');
for (const v of videos) {
  let content = `# Video ${v.num} — ${v.titulo}\n\n### 1. Roteiro\n\n${v.roteiro}\n\n---\n\n### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;
  for (let i = 0; i < v.prompts.length; i++) {
    const p = v.prompts[i];
    content += `#### Prompt ${i + 1} — ${p.titulo} (4s)\n\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }
  content += `---\n\n### 3. Legenda\n\n\`\`\`text\n${v.legenda}\n\`\`\`\n`;

  const filePath = path.join(roteirosDir, `Video ${v.num}.md`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Video ${v.num}.md salvo com sucesso (${content.length} caracteres).`);
}
