// Gerador de Roteiros de Vídeo (Videos 229 a 231)
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s cada)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 229,
    titulo: 'Por Que a Finlândia Fechou os Mais de Mil e Trezentos Quilômetros da Maior Fronteira da OTAN com a Rússia?',
    roteiro: 'Por Que a Finlândia Fechou os Mais de Mil e Trezentos Quilômetros da Maior Fronteira da OTAN com a Rússia? Cortando mil trezentos e quarenta quilômetros de florestas boreais e lagos congelados, a fronteira entre Finlândia e Rússia é a mais longa divisa da OTAN com o território de Moscou. Esse limite carrega marcas profundas: na Guerra de Inverno de 1939, a Finlândia resistiu bravamente à invasão soviética, mas perdeu dez por cento de suas terras, incluindo a província da Carélia e sua saída para o Oceano Ártico em Petsamo. Durante décadas, os dois vizinhos mantiveram uma neutralidade pacífica. Porém, a invasão da Ucrânia mudou tudo: a Finlândia abandonou o não-alinhamento e ingressou na OTAN em 2023. Em retaliação, a Rússia começou a empurrar centenas de migrantes sem visto em bicicletas para os postos de controle. Helsinque reagiu fechando todas as passagens rodoviárias e construindo uma muralha de aço de duzentos quilômetros na floresta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A MAIOR FRONTEIRA DA OTAN COM A RÚSSIA',
      l2: 'POR QUE A FINLÂNDIA TRANCOU 1.340 KM',
      l3: 'DO TRAUMA DA CARÉLIA À CERCA DE AÇO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Fronteira Boreal',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the Scandinavian and Finnish taiga forests, highlighting the 1.340 km border line between Finland and Russia glowing in intense crimson and neon cyan vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A MAIOR FRONTEIRA DA OTAN COM A RÚSSIA"
Line 2 (intense crimson red #C8102E): "POR QUE A FINLÂNDIA TRANCOU 1.340 KM"
Line 3 (pure white #F5F2EB): "DO TRAUMA DA CARÉLIA À CERCA DE AÇO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Karelian Istmus and Gulf of Finland.
NO voice, NO speech, NO music. ONLY deep sub-bass cinematic rumble and arctic wind whoosh SFX.`
      },
      {
        titulo: 'A Guerra de Inverno de 1939 e a Perda da Carélia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite map of the Karelian Isthmus in November 1939.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Original Finnish pre-war border retracting under red Soviet military push arrows, amputating Viipuri (Vyborg) and the Ladoga lake shore.
Text on screen: "1939 // A GUERRA DE INVERNO: PERDA DE 10% DO TERRITÓRIO" in uppercase white Orbitron Bold.
Badge: "420.000 FINLANDESES EVACUADOS DA CARÉLIA" in intense crimson red (#C8102E).
Camera: slow cinematic glide over snow-covered pine forests.
NO voice, NO speech, NO music. ONLY howling blizzard wind and distant artillery thunder SFX.`
      },
      {
        titulo: 'O Tratado de Paris de 1947: A Perda do Acesso ao Ártico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map focusing on the Petsamo corridor in northern Lapland.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A slice of northern Finnish land turning red as Soviet borders annex the port of Liinakhamari, cutting Finland off from the Barents Sea.
Text on screen: "1947 // TRATADO DE PARIS: A PERDA DA SAÍDA PARA O ÁRTICO" in uppercase white Montserrat Bold.
Badge: "PETSAMO E SUAS MINAS DE NÍQUEL CEDIDAS A MOSCOU" in gold (#F59E0B).
Camera: high-altitude push-in toward the icy coast of the Barents Sea.
NO voice, NO speech, NO music. ONLY Arctic ice cracking and cold wind gust SFX.`
      },
      {
        titulo: 'Setenta Anos de Coexistência Pragmática (Finlandização)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of southern Finland and Saint Petersburg during the Cold War.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Rail lines and border crossing checkpoints (Vaalimaa and Nuijamaa) illuminated in peaceful green trade routes.
Text on screen: "1948–2022 // A DIPLOMACIA DA FINLANDIZAÇÃO" in uppercase white Montserrat Bold.
Badge: "NEUTRALIDADE MILITAR E COMÉRCIO DE FRONTEIRA" in sage green (#A8C3A6).
Camera: linear tracking shot following the Helsinki-Saint Petersburg rail corridor.
NO voice, NO speech, NO music. ONLY passenger train wheel click and station bell chime SFX.`
      },
      {
        titulo: 'Abril de 2023: A Adesão Histórica à OTAN',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of Northern Europe highlighting Finland in bright NATO blue.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 1.340 km boundary with Russia igniting in vibrant electric blue NATO vector borders.
Text on screen: "04 DE ABRIL DE 2023 // A FINLÂNDIA ENTRA NA OTAN" in uppercase white Orbitron Bold.
Badge: "A FRONTEIRA DA ALIANÇA COM A RÚSSIA MAIS QUE DOBRA" in pure white (#F5F2EB).
Camera: fast dynamic pull-back showing the entire Baltic-Nordic defense line.
NO voice, NO speech, NO music. ONLY electronic radar hum and military tactical alert chime SFX.`
      },
      {
        titulo: 'A Guerra Híbrida: Imigrantes de Bicicleta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the Vaalimaa and Salla border checkpoints in the snow.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Thermal infrared surveillance overlay displaying groups of bicycles approaching the barrier in sub-zero temperatures.
Text on screen: "NOVEMBRO DE 2023 // A INSTRUMENTALIZAÇÃO DA MIGRAÇÃO" in uppercase white Montserrat Bold.
Badge: "TÁTICA HÍBRIDA DA RÚSSIA NAS PASSAGENS DA TAIGA" in intense crimson red (#C8102E).
Camera: slow linear descent towards thermal camera sensor monitors.
NO voice, NO speech, NO music. ONLY crunching snow footsteps and tactical radio static chirp SFX.`
      },
      {
        titulo: 'O Fechamento Total de Todos os 8 Postos Rodoviários',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map showing all eight major border stations between Finland and Russia (Vaalimaa, Nuijamaa, Imatra, Niirala, Vartius, Kuusamo, Salla, Raja-Jooseppi).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red "CLOSED" barricades slamming shut on each of the eight highway crossing points simultaneously.
Text on screen: "FECHAMENTO TOTAL // 1.340 KM DE FRONTEIRA BLOQUEADA" in uppercase white Orbitron Bold.
Badge: "TRÂNSITO RODOVIÁRIO CIVIL COMPLETAMENTE SUSPENSO" in intense crimson red (#C8102E).
Camera: sequential scan jumping northwards from the Gulf of Finland to Lapland.
NO voice, NO speech, NO music. ONLY heavy steel gate slam and boundary lock click SFX.`
      },
      {
        titulo: 'A Construção da Cerca de Aço e Sensores Termais',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close satellite and drone view of the Pelkola barrier in Imatra.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A 4.5-meter-high razor-wire-topped steel fence cutting through pine trees with thermal night-vision camera towers active.
Text on screen: "A CERCA DE IMATRA // 200 KM DE BARREIRA DE AÇO FORTIFICADA" in uppercase white Montserrat Bold.
Badge: "CÂMERAS TÉRMICAS E SENSORES SUBTERRÂNEOS DE VIBRAÇÃO" in gold (#F59E0B).
Camera: tracking shot flying inches above the steel mesh barrier.
NO voice, NO speech, NO music. ONLY construction drill buzz and electronic camera zoom servo SFX.`
      },
      {
        titulo: 'A Vulnerabilidade Estratégica da Ferrovia de Murmansk',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic satellite map showing the distance between the Finnish border and the Russian Kola Peninsula (Severomorsk nuclear submarine base).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A vector caliper line measuring "150 KM" between the border and Russia's vital railway artery to Murmansk.
Text on screen: "A 150 KM DE SEVEROMORSK // A BASE NUCLEAR DA FROTA DO NORTE" in uppercase white Orbitron Bold.
Badge: "O CALCANHAR DE AQUILES LOGÍSTICO DE MOSCOU" in intense crimson red (#C8102E).
Camera: rapid lateral tracking shot following the Kirov railway line.
NO voice, NO speech, NO music. ONLY heavy freight train diesel horn and radar scan beep SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of Northern Europe, the Baltic Sea, and the dark arctic horizon of the Russian federation under the northern lights (Aurora Borealis).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Por Que a Finlândia Fechou os Mais de Mil e Trezentos Quilômetros da Maior Fronteira da OTAN com a Rússia?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 230,
    titulo: 'Como Três Mil Quilômetros de Linha Reta e o Tratado de 1825 Desenharam a Fronteira Entre o Alasca e o Canadá?',
    roteiro: 'Como Três Mil Quilômetros de Linha Reta e o Tratado de 1825 Desenharam a Fronteira Entre o Alasca e o Canadá? No extremo norte da América, uma linha perfeitamente reta corta mais de mil quilômetros de geleiras, rios e florestas boreais. É o Meridiano cento e quarenta e um Oeste, a espinha dorsal da fronteira entre o Alasca e o território canadense de Yukon. Essa divisão matemática não foi traçada por americanos nem por canadenses, mas por diplomatas da Rússia czarista e do Império Britânico em 1825 para partilhar o comércio de peles. Quando os Estados Unidos compraram o Alasca em 1867, herdaram uma descrição vaga que quase causou uma guerra armada durante a Febre do Ouro de Klondike em 1898. Para evitar o conflito, um tribunal em Londres deu ganho de causa a Washington em 1903. Hoje, uma clareira de seis metros de largura chamada Border Vista é cortada a cada cinco anos através da taiga, mantendo visível a linha reta mais isolada do continente. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A LINHA RETA QUE CORTA O ÁRTICO',
      l2: 'A FRONTEIRA DO ALASCA COM O CANADÁ',
      l3: 'DO TRATADO CZARISTA À CORRIDA DO OURO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Meridiano 141° Oeste',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the vast glacial expanse of northwestern North America, highlighting the stark 1.041 km straight boundary line along 141° West longitude illuminated in sharp golden and neon green vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A LINHA RETA QUE CORTA O ÁRTICO"
Line 2 (intense crimson red #C8102E): "A FRONTEIRA DO ALASCA COM O CANADÁ"
Line 3 (pure white #F5F2EB): "DO TRATADO CZARISTA À CORRIDA DO OURO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward Mount Saint Elias and the Yukon River basin.
NO voice, NO speech, NO music. ONLY deep arctic wind howl and geodetic laser ping SFX.`
      },
      {
        titulo: 'O Tratado de São Petersburgo de 1825',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map visualization of Russian America and British North America in 1825.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomats\' ruler drawing a straight boundary line on the 141st meridian from Mount Saint Elias north to the Beaufort Sea.
Text on screen: "1825 // CONVENÇÃO ANGLO-RUSSA DE SÃO PETERSBURGO" in uppercase white Orbitron Bold.
Badge: "DIPLOMATAS IMPERIAIS DIVIDINDO O COMÉRCIO DE PELES" in gold (#F59E0B).
Camera: slow cinematic tilt from the Pacific coast to the Arctic Ocean.
NO voice, NO speech, NO music. ONLY quill pen scratching parchment and cold gust SFX.`
      },
      {
        titulo: 'A Compra do Alasca em 1867 por US$ 7,2 Milhões',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Alaska turning from Russian imperial double-headed eagle banner to the Stars and Stripes of the United States.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cheque overlay of $7.2 million signed by Secretary of State William Seward.
Text on screen: "1867 // A COMPRA DO ALASCA POR US$ 7,2 MILHÕES" in uppercase white Montserrat Bold.
Badge: "1,7 MILHÃO DE KM² ADQUIRIDOS PELOS ESTADOS UNIDOS" in sage green (#A8C3A6).
Camera: dramatic wide-angle pull-back showing the continental scale of Alaska.
NO voice, NO speech, NO music. ONLY cash register bell ring and flag flap SFX.`
      },
      {
        titulo: 'A Febre do Ouro de Klondike em 1898',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Lynn Canal, Skagway, and the Chilkoot Pass mountain trail.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Golden vector arrows showing 100.000 prospectors marching up snowbound mountain passes toward Dawson City.
Text on screen: "1898 // A CORRIDA DO OURO DE KLONDIKE" in uppercase white Orbitron Bold.
Badge: "A DISPUTA EXPLOSIVA PELOS PORTOS DE ACESSO AO MAR" in gold (#F59E0B).
Camera: low-altitude tracking shot following the steep mountain pass trail.
NO voice, NO speech, NO music. ONLY pickaxe clinking rock and mountaineers trudging through snow SFX.`
      },
      {
        titulo: 'A Tensão Militar e a Polícia Montada de Yukon',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the mountain passes on the border between Alaska and British Columbia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical military icons marking North-West Mounted Police Maxim gun posts atop the summit of White Pass.
Text on screen: "TENSÃO ARMADA // O CANADÁ FORTIFICA OS PASSOS MONTANHOSOS" in uppercase white Montserrat Bold.
Badge: "AMEAÇA DE GUERRA ENTRE ESTADOS UNIDOS E GRÃ-BRETANHA" in intense crimson red (#C8102E).
Camera: dynamic linear flyover above the rugged razor-sharp peaks.
NO voice, NO speech, NO music. ONLY machine gun cocking metal click and howling ridge wind SFX.`
      },
      {
        titulo: 'A Arbitragem de Londres de 1903 e Theodore Roosevelt',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical tribunal map visualization in London (1903) deciding the Alaska Panhandle border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Lord Alverstone\'s casting vote locking the entire coastal strip under US sovereignty, cutting Canada off from deep-water fjords.
Text on screen: "1903 // O LAUDO ARBITRAL DE LONDRES" in uppercase white Orbitron Bold.
Badge: "THEODORE ROOSEVELT GARANTE O CONTROLE DO PANHANDLE" in pure white (#F5F2EB).
Camera: smooth lateral pan along the complex fjord coastline of the Inside Passage.
NO voice, NO speech, NO music. ONLY judge gavel strike on wood block and telegraph click SFX.`
      },
      {
        titulo: 'O Meridiano 141°: 1.041 km em Linha Reta Absoluta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite view following the 141st meridian cutting across the Yukon River and tundra.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A laser-straight golden boundary line extending from Mount Saint Elias (5.489m) to the Arctic shoreline.
Text on screen: "MERIDIANO 141° OESTE // 1.041 KM DE LINHA RETA ABSOLUTA" in uppercase white Montserrat Bold.
Badge: "UMA DAS MAIORES RETAS GEODÉSICAS DA TERRA" in gold (#F59E0B).
Camera: fast forward tracking shot flying at 3.000m along the meridian.
NO voice, NO speech, NO music. ONLY rushing aircraft wind and GPS satellite tracking telemetry SFX.`
      },
      {
        titulo: 'A Border Vista: A Clareira de 6 Metros na Taiga',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ultra-high resolution satellite and drone view showing the "Border Vista" cutting through dense spruce forests.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A sharp 6-meter-wide clearing in the trees with white boundary monuments placed at regular intervals.
Text on screen: "A BORDER VISTA // UMA FAIXA DE 6 METROS DESMATADA NA FLORESTA" in uppercase white Orbitron Bold.
Badge: "MANUTENÇÃO CONTÍNUA A CADA CINCO ANOS PELA COMISSÃO" in sage green (#A8C3A6).
Camera: low-altitude linear tracking shot flying inside the clearcut tree corridor.
NO voice, NO speech, NO music. ONLY chainsaw buzzing in the distance and birds chirping in boreal trees SFX.`
      },
      {
        titulo: 'Hyder e Stewart: A Curiosidade Urbana Isolada',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the twin settlements of Hyder (Alaska) and Stewart (British Columbia) at the head of Portland Canal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dotted open border line connecting the two towns without an active US customs checkpoint.
Text on screen: "HYDER // A CIDADE DO ALASCA QUE USA O DÓLAR CANADENSE" in uppercase white Montserrat Bold.
Badge: "ISOLAMENTO TOTAL DO RESTANTE DOS ESTADOS UNIDOS" in pure white (#F5F2EB).
Camera: slow circular orbital shot around the mountain valley fjord.
NO voice, NO speech, NO music. ONLY pickup truck tire rolling on gravel and mountain river stream SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of the North American continent showing the Alaska-Canada border glowing brilliantly against the white Arctic ice cap and polar night.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Como Três Mil Quilômetros de Linha Reta e o Tratado de 1825 Desenharam a Fronteira Entre o Alasca e o Canadá?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 231,
    titulo: 'Por Que a Norueguesa Ilha Bouvet É o Ponto de Terra Mais Isolado e Inóspito do Planeta Terra?',
    roteiro: 'Por Que a Norueguesa Ilha Bouvet É o Ponto de Terra Mais Isolado e Inóspito do Planeta Terra? Se você traçar um círculo de mil e seiscentos quilômetros ao redor da Ilha Bouvet no Atlântico Sul, não encontrará um único pedaço de terra seca habitado por seres humanos. Descoberta em 1739 por navegadores franceses, Bouvet é oficialmente a ilha mais isolada do planeta Terra. Com quarenta e nove quilômetros quadrados, noventa e três por cento de sua superfície é soterrada por uma geleira eterna que termina em penhascos verticais de gelo caindo no mar tempestuoso. Anexada pela Noruega em 1928, o local é tão inacessível que quase todas as expedições científicas falharam em desembarcar. Em 1964, marinheiros encontraram um mistério inexplicável: um bote salva-vidas abandonado em uma praia de pedras negras, sem tripulantes, motores ou registros de naufrágio. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A TERRA MAIS SOLITÁRIA DO PLANETA',
      l2: 'O MISTÉRIO GLACIAL DA ILHA BOUVET',
      l3: 'DOIS MIL QUILÔMETROS DE VAZIO OCEÂNICO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Isolamento Extremo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the vast stormy expanse of the South Atlantic Ocean between South Africa and Antarctica, highlighting a tiny solitary volcanic island encircled by concentric 1.600 km distance range rings.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A TERRA MAIS SOLITÁRIA DO PLANETA"
Line 2 (intense crimson red #C8102E): "O MISTÉRIO GLACIAL DA ILHA BOUVET"
Line 3 (pure white #F5F2EB): "DOIS MIL QUILÔMETROS DE VAZIO OCEÂNICO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the icy volcanic summit of Olavtoppen.
NO voice, NO speech, NO music. ONLY deep oceanic sub-bass rumble and howling antarctic gale SFX.`
      },
      {
        titulo: 'A Descoberta em 1739: A Ilha Fantasma no Nevoeiro',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical marine chart view of the South Atlantic in January 1739.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
French frigate Aigle navigating through icebergs in dense fog, discovering "Cap de la Circoncision".
Text on screen: "1739 // JEAN-BAPTISTE BOUVET DESCOBRE A ILHA NO NEVOEIRO" in uppercase white Orbitron Bold.
Badge: "CONFUNDIDA POR DÉCADAS COM UM ENORME ICEBERG" in gold (#F59E0B).
Camera: slow cinematic tracking shot above choppy storm-tossed grey waves.
NO voice, NO speech, NO music. ONLY wooden ship hull creaking and ocean swell crash SFX.`
      },
      {
        titulo: '49 km² e 93% Coberta por Geleira Eterna',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view descending directly onto Bouvet Island.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A pure white glacier dome covering 93% of the 49 km² volcanic island, terminating in 500-meter sheer ice cliffs.
Text on screen: "49 KM² DE GELO // O CUME VULCÂNICO DE OLAVTOPPEN (▲ 780M)" in uppercase white Orbitron Bold.
Badge: "FALÉSIAS VERTICAIS DE GELO MERGULHANDO NO OCEANO" in intense crimson red (#C8102E).
Camera: dynamic linear push-in toward the summit caldera.
NO voice, NO speech, NO music. ONLY freezing mountain blizzard wind and ice sheet calving crack SFX.`
      },
      {
        titulo: 'O Raio de 1.600 km de Vazio Absoluto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite map drawing an animated radius circle of 1.600 km around Bouvet.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Zero landmasses inside the circle: Queen Maud Land in Antarctica is 1.600 km south; Tristan da Cunha is 2.260 km northwest; South Africa is 2.600 km northeast.
Text on screen: "A TERRA MAIS ISOLADA // 2.200 KM DE QUALQUER HUMANO HABITANTE" in uppercase white Montserrat Bold.
Badge: "O PONTO DE TERRA MAIS DISTANTE DO PLANETA" in pure white (#F5F2EB).
Camera: slow orbital pull-back expanding the circular distance scale.
NO voice, NO speech, NO music. ONLY radar range sweep chirp and deep oceanic sonar ping SFX.`
      },
      {
        titulo: 'A Anexação Norueguesa de 1928 para a Caça às Baleias',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite perspective of the Norwegian whaling ship Norvegia anchoring in December 1927.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Norwegian national flag vector pinning onto the ice dome, recognized by King George V of Britain in 1928.
Text on screen: "1928 // ANEXAÇÃO FORMAL PELO REINO DA NORUEGA" in uppercase white Orbitron Bold.
Badge: "BASE ESTRATÉGICA PARA AS FROTAS BALEEIRAS AUSTRAIS" in sage green (#A8C3A6).
Camera: linear tracking shot flying over volcanic black gravel beaches.
NO voice, NO speech, NO music. ONLY steam whistle blast and ocean foam wash SFX.`
      },
      {
        titulo: 'Os Cinquenta Uivantes: Ventos de 160 km/h',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite meteorological wind field simulation of the Furious Fifties (latitude 54° South).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Violent cyclone cloud swirls rotating around the island with wind telemetry arrows exceeding 160 km/h.
Text on screen: "OS CINQUENTA UIVANTES // VENTOS POLARES DE 160 KM/H" in uppercase white Montserrat Bold.
Badge: "MAIS DE 300 DIAS POR ANO SOB NEVOEIRO IMPENETRÁVEL" in gold (#F59E0B).
Camera: dynamic tilt shot cutting through turbulent storm clouds.
NO voice, NO speech, NO music. ONLY deafening gale wind roar and atmospheric pressure drop hum SFX.`
      },
      {
        titulo: 'O Mistério do Bote Salva-Vidas de 1964 em Nyrøysa',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming onto the volcanic shelf beach of Nyrøysa on Bouvet\'s west coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
An icon of a wooden lifeboat in a black gravel lagoon with question marks.
Text on screen: "ABRIL DE 1964 // O ENIGMA DO BOTE SALVA-VIDAS ABANDONADO" in uppercase white Orbitron Bold.
Badge: "REMOS E BOIA ENCONTRADOS SEM RASTROS DE TRIPULANTES" in intense crimson red (#C8102E).
Camera: low-altitude glide across the rocky volcanic terrace.
NO voice, NO speech, NO music. ONLY hollow wind whistle across empty wood and distant sea bird cry SFX.`
      },
      {
        titulo: 'O Incidente Vela de 1979: O Flash Nuclear Secreto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dark night satellite view of the ocean near Bouvet Island on September 22, 1979.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A sudden blinding double-flash of white light illuminating storm clouds detected by the Vela satellite.
Text on screen: "22 DE SETEMBRO DE 1979 // O MISTERIOSO INCIDENTE VELA" in uppercase white Montserrat Bold.
Badge: "SUSPEITA DE TESTE NUCLEAR SECRETO NO ATLÂNTICO SUL" in intense crimson red (#C8102E).
Camera: high orbital perspective capturing the nuclear optical pulse.
NO voice, NO speech, NO music. ONLY electronic radiation counter crackle and deep low boom SFX.`
      },
      {
        titulo: 'O Refúgio da Vida Selvagem e a Estação Meteorológica',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of penguin colonies and the automated Norwegian weather station at Nyrøysa.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Data transmission telemetry pulse beaming upward from the scientific weather container toward orbital satellites.
Text on screen: "RESERVA NATURAL NORUEGUESA // CENTENAS DE MILHARES DE PINGUINS" in uppercase white Orbitron Bold.
Badge: "ESTAÇÃO METEOROLÓGICA AUTOMATIZADA EM TEMPO REAL" in sage green (#A8C3A6).
Camera: slow circular orbit around the automated scientific mast.
NO voice, NO speech, NO music. ONLY penguin colony squawk chorus and digital satellite uplink chirp SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view showing planet Earth with the endless blue and white southern oceans, Bouvet Island glistening like a lone drop of ice on the globe.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Por Que a Norueguesa Ilha Bouvet É o Ponto de Terra Mais Isolado e Inóspito do Planeta Terra?\n\n#geografia #geopolitica #mapas'
  }
];

console.log('Criando vídeos 229 a 231...');
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
