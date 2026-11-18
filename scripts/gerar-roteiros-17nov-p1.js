// Gerador de Roteiros de Vídeo (Videos 235 a 239) - Parte 1
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s cada)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 235,
    titulo: 'Como o Tratado de Madri e o Barão do Rio Branco Dobraram o Tamanho do Brasil?',
    roteiro: 'Como o Tratado de Madri e o Barão do Rio Branco Dobraram o Tamanho do Brasil? Em 1494, o Tratado de Tordesilhas traçou uma linha reta no Atlântico que entregava a Portugal menos de um terço do Brasil atual. Tudo a oeste pertencia à Espanha no papel. Mas expedições amazônicas como a de Pedro Teixeira em 1637 e os bandeirantes paulistas avançaram milhares de quilômetros pelo interior continental. Em 13 de janeiro de 1750, o diplomata santista Alexandre de Gusmão garantiu o Tratado de Madri usando o princípio do uti possidetis: quem ocupa de fato possui de direito. Assim nasceram cerca de oitenta e cinco por cento dos contornos brasileiros atuais. Mais de um século depois, entre 1895 e 1909, o Barão do Rio Branco fechou os últimos litígios em Palmas, no Amapá e no Tratado de Petrópolis de 17 de novembro de 1903, que incorporou os 191 mil quilômetros quadrados do Acre e selou os 16.886 quilômetros de fronteira com dez países vizinhos. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'DE TORDESILHAS AOS 8,5 MILHÕES DE KM²',
      l2: 'COMO O BRASIL DOBROU DE TAMANHO',
      l3: 'TRATADO DE MADRI E BARÃO DO RIO BRANCO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Expansão Territorial Brasileira',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending onto South America, showing the historical 1494 Tordesillas meridian cutting Brazil vertically, then glowing gold vectors expanding westward across the Amazon and Pantanal.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center).
Line 1 (pure white #F5F2EB): "DE TORDESILHAS AOS 8,5 MILHÕES DE KM²"
Line 2 (intense crimson red #C8102E): "COMO O BRASIL DOBROU DE TAMANHO"
Line 3 (pure white #F5F2EB): "TRATADO DE MADRI E BARÃO DO RIO BRANCO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, center-aligned line by line with radiant glow bloom.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the South American landmass.
NO voice, NO speech, NO music. ONLY deep atmospheric bass rumble and tactical sonar ping SFX.`
      },
      {
        titulo: 'A Linha Estreita do Tratado de Tordesilhas em 1494',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of South America with a sharp dashed crimson line tracing the 1494 Treaty of Tordesillas meridian from Belém to Laguna.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The eastern coastal strip highlighted in flat Portuguese green while the western interior glows in Spanish amber.
Text on screen: "1494 // TORDESILHAS: MENOS DE 1/3 DO BRASIL ATUAL" in uppercase white Orbitron Bold.
Badge: "370 LÉGUAS A OESTE DE CABO VERDE" in intense crimson red (#C8102E).
Camera: smooth lateral pan along the eastern Brazilian Atlantic coastline.
NO voice, NO speech, NO music. ONLY compass needle click and parchment map rustle SFX.`
      },
      {
        titulo: 'A Marcha Amazônica e os Bandeirantes Cruzando o Meridiano',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite perspective of the Amazon Basin and Paraná River system.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bright glowing expansion arrows pushing west along the Amazon River (Pedro Teixeira 1637) and northwest from São Paulo toward Mato Grosso.
Text on screen: "SÉCULO XVII // EXPEDIÇÕES ROMPEM A LINHA NO TERRENO" in uppercase white Montserrat Bold.
Badge: "OCUPAÇÃO DA AMAZÔNIA E DO CENTRO-OESTE" in sage green (#A8C3A6).
Camera: linear tracking flight moving upstream along the Amazon River basin.
NO voice, NO speech, NO music. ONLY tropical river current and distant expedition drum pulse SFX.`
      },
      {
        titulo: 'O Tratado de Madri de 1750 e o Princípio Uti Possidetis',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of Brazil transforming as the old Tordesillas line dissolves and the bold modern triangular border ignites along rivers and mountain watersheds.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "13 JAN 1750 // TRATADO DE MADRI: UTI POSSIDETIS" in uppercase white Orbitron Bold.
Badge: "ALEXANDRE DE GUSMÃO GARANTE ~85% DO MAPA ATUAL" in gold (#F59E0B).
Camera: smooth pull-back revealing the continental scale of colonial Brazil.
NO voice, NO speech, NO music. ONLY wax seal stamp and glowing vector ignition chime SFX.`
      },
      {
        titulo: 'Sete Povos das Missões e o Sul Consolidado em 1801',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on southern Brazil, Uruguay River, and Rio Grande do Sul.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Western Rio Grande do Sul highlighted in crisp sage green (#A8C3A6) locking into Brazil's southern border after the 1801 Treaty of Badajoz.
Text on screen: "1801 // INCORPORAÇÃO DOS SETE POVOS DAS MISSÕES" in uppercase white Montserrat Bold.
Badge: "CONSOLIDAÇÃO DA FRONTEIRA MERIDIONAL NO SUL" in pure white (#F5F2EB).
Camera: slow linear push-in over the pampas and Uruguay River bend.
NO voice, NO speech, NO music. ONLY subtle steppe wind and radar lock beep SFX.`
      },
      {
        titulo: 'As Vitórias do Barão do Rio Branco em Palmas e no Amapá',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split-focus satellite map highlighting western Santa Catarina/Paraná (1895 Palmas arbitration) and Amapá up to the Oiapoque River (1900 Swiss arbitration).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Target crosshairs (coord-crosshairs.svg) locking on 30.621 km² in Palmas and 260.000 km² in Amapá.
Text on screen: "1895–1900 // ARBITRAGENS DE PALMAS E AMAPÁ" in uppercase white Orbitron Bold.
Badge: "290.000 KM² MANTIDOS PELA DIPLOMACIA DE RIO BRANCO" in gold (#F59E0B).
Camera: smooth north-to-south orbital pan along Brazil's outer borders.
NO voice, NO speech, NO music. ONLY telemetry scan sweep and diplomatic gavel chime SFX.`
      },
      {
        titulo: 'A Revolução Acreana e o Tratado de Petrópolis de 1903',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom onto the western Amazon jungle where Acre meets Bolivia and Peru along the Acre and Purus rivers.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 191.000 km² polygon of Acre lighting up in emerald green and joining Brazil's vector boundary on November 17, 1903.
Text on screen: "17 NOV 1903 // TRATADO DE PETRÓPOLIS: O ACRE É DO BRASIL" in uppercase white Orbitron Bold.
Badge: "191.000 KM² INCORPORADOS · 2 MILHÕES DE LIBRAS" in intense crimson red (#C8102E).
Camera: smooth push-in descending over Rio Branco and the Madeira-Mamoré corridor.
NO voice, NO speech, NO music. ONLY rainforest wind and steam locomotive whistle SFX.`
      },
      {
        titulo: 'Os Últimos Acertos com Peru e Uruguai em 1909',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview tracking the southwestern border along Lagoa Mirim and the western Amazon border with Peru.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Clean 2px Bege Cartográfico (#F5F2EB) border lines illuminating continuously around the entire perimeter.
Text on screen: "1909 // TRATADOS COM PERU E URUGUAI FECHAM O MAPA" in uppercase white Montserrat Bold.
Badge: "ZERO LITÍGIOS TERRITORIAIS ATIVOS COM VIZINHOS" in sage green (#A8C3A6).
Camera: linear tracking sweep along the Lagoa Mirim coastline.
NO voice, NO speech, NO music. ONLY crisp data click and gentle coastal water lap SFX.`
      },
      {
        titulo: '8.515.770 km² e 16.886 km de Fronteiras com Dez Países',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full satellite view of Brazil centered in South America, flat masked Brazilian national flag cleanly bound inside the official borders (no cloth wave, no texture bleeding).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ten border neighbor labels lighting up sequentially around the 16.886 km land perimeter.
Text on screen: "8.515.770 KM² // 16.886 KM DE FRONTEIRAS // 10 VIZINHOS" in uppercase white Orbitron Bold.
Badge: "5º MAIOR PAÍS DO MUNDO EM EXTENSÃO TERRITORIAL" in gold (#F5F2EB).
Camera: steady high-altitude orbital hover centered on Brasília.
NO voice, NO speech, NO music. ONLY deep orbital hum and electronic border lock chime SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of South America and the South Atlantic Blue Amazon EEZ glowing softly against Earth's curvature.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 236,
    titulo: 'Por Que a Noruega Virou a Sentinela da OTAN no Ártico e o Principal Fornecedor de Gás da Europa?',
    roteiro: 'Por Que a Noruega Virou a Sentinela da OTAN no Ártico e o Principal Fornecedor de Gás da Europa? Com apenas cinco milhões e meio de habitantes, a Noruega controla duas chaves capazes de proteger ou paralisar a Europa. Desde o corte do gás russo em 2022, os mais de oito mil e oitocentos quilômetros de gasodutos submarinos noruegueses passaram a entregar cerca de trinta por cento de todo o gás consumido pela União Europeia e pelo Reino Unido, totalizando quase cento e quinze bilhões de metros cúbicos por ano. Ao mesmo tempo, acima do Círculo Polar Ártico, os cento e noventa e oito quilômetros da fronteira norueguesa em Finnmark encostam diretamente na Península de Kola, onde fica a Frota do Norte nuclear da Rússia. Entre a costa continental e o arquipélago de Svalbard abre-se o Estreito do Urso, o gargalo marítimo que submarinos russos precisam cruzar para atingir o Atlântico. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'GÁS SUBMARINO E SUBMARINOS NUCLEARES',
      l2: 'POR QUE A NORUEGA É A SENTINELA DA OTAN',
      l3: 'DO MAR DO NORTE AO ESTREITO DO URSO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Noruega no Ártico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe rotating over Northern Europe and the Arctic Circle, highlighting Norway's jagged fjord coastline and offshore North Sea gas corridors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered in the 9:16 frame (X: 50%, Y: 50% absolute screen center).
Line 1 (pure white #F5F2EB): "GÁS SUBMARINO E SUBMARINOS NUCLEARES"
Line 2 (intense crimson red #C8102E): "POR QUE A NORUEGA É A SENTINELA DA OTAN"
Line 3 (pure white #F5F2EB): "DO MAR DO NORTE AO ESTREITO DO URSO"
Font Orbitron Bold, 1px stroke outline, 3px spacing, luminous radiant bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward the Norwegian Sea.
NO voice, NO speech, NO music. ONLY deep arctic sonar ping and wind rumble SFX.`
      },
      {
        titulo: 'A Noruega no Mapa com Bandeira Vetorial Plana',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite camera centered on Norway from Skagerrak to North Cape, clean 2px Bege Cartográfico (#F5F2EB) border and flat masked Norwegian flag texture bound strictly inside territory (no cloth wave).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "NORUEGA // 5,5 MILHÕES DE HABITANTES NO FLANCO ÁRTICO" in uppercase white Montserrat Bold.
Camera: smooth lateral pan drifting northward along the fjord coastline.
NO voice, NO speech, NO music. ONLY cold North Sea wave surge and radar sweep SFX.`
      },
      {
        titulo: 'A Rede de Gasodutos no Mar do Norte (Gassco)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of the North Sea showing glowing amber/sage underwater pipeline vectors connecting Troll A and Ormen Lange to Germany, Belgium, France, and the UK.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "114,9 BILHÕES M³/ANO // ~30% DO GÁS DA UE E REINO UNIDO" in uppercase white Orbitron Bold.
Badge: "8.800 KM DE GASODUTOS SUBMARINOS ESTRATÉGICOS" in sage green (#A8C3A6).
Camera: linear tracking flight from Troll A platform toward Emden on the German coast.
NO voice, NO speech, NO music. ONLY underwater pressure hum and telemetry data blip SFX.`
      },
      {
        titulo: 'A Fronteira Terrestre de 198 km com a Península de Kola',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on northeastern Finnmark (Kirkenes) and the neighboring Russian Kola Peninsula across the 198 km border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crimson red target markers (coord-crosshairs.svg) illuminating Russian naval bases at Severomorsk and Gadzhievo just east of the border.
Text on screen: "198 KM DE FRONTEIRA COM A FROTA DO NORTE RUSSA" in uppercase white Orbitron Bold.
Badge: "BASES DE SUBMARINOS NUCLEARES NA PENÍNSULA DE KOLA" in intense crimson red (#C8102E).
Camera: slow linear push-in over the frozen Pasvikelva border river.
NO voice, NO speech, NO music. ONLY arctic wind howl and submarine sonar ping SFX.`
      },
      {
        titulo: 'O Radar de Vardø e a Vigilância Eletrônica no Barents',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom on Vardø Island at 70°22'N · 31°07'E overlooking the Barents Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Concentric cyan radar sweep rings pulsing outward across the Barents Sea toward Novaya Zemlya.
Text on screen: "RADAR DE VARDØ // 40 KM DA FRONTEIRA RUSSA" in JetBrains Mono slate/white.
Badge: "ALERTA ANTECIPADO DE MÍSSEIS BALÍSTICOS DA OTAN" in gold (#F59E0B).
Camera: steady downward zoom focusing on Vardø peninsula.
NO voice, NO speech, NO music. ONLY rhythmic radar pulse and cold sea spray SFX.`
      },
      {
        titulo: 'O Bear Gap: Gargalo Entre Continente e Svalbard',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite view spanning North Cape, Bear Island (Bjørnøya), and southern Svalbard.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing crimson dashed chokepoint line bridging North Cape to Svalbard marking the Bear Gap submarine containment zone.
Text on screen: "BEAR GAP // O GARGALO NAVAL DO EXTREMO NORTE" in uppercase white Orbitron Bold.
Badge: "PORTA DE SAÍDA DA RÚSSIA PARA O ATLÂNTICO NORTE" in intense crimson red (#C8102E).
Camera: linear tracking flight scanning from mainland Norway across Bear Island.
NO voice, NO speech, NO music. ONLY deep ocean sonar echo and hydrophone static SFX.`
      },
      {
        titulo: 'Svalbard e o Tratado de 1920',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite shot of snow-covered Svalbard archipelago between 74°N and 81°N.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pin markers showing Longyearbyen (Norway) and Barentsburg (Russian mining settlement) under the 1920 Spitsbergen Treaty.
Text on screen: "TRATADO DE SVALBARD (1920) // SOBERANIA SEM VISTO" in uppercase white Montserrat Bold.
Badge: "ZONA DESMILITARIZADA SOB PRESSÃO GEOPOLÍTICA" in gold (#F59E0B).
Camera: smooth lateral pan across Adventfjorden and Isfjorden.
NO voice, NO speech, NO music. ONLY glacier ice creak and crisp polar wind SFX.`
      },
      {
        titulo: 'Expansão para o Mar de Barents e Terminal de Melkøya',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on Hammerfest and the Snøhvit offshore gas field in the Barents Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Green-sage (#A8C3A6) vector arc linking northern gas basins to European LNG tanker routes.
Text on screen: "EXPANSÃO DE GÁS NO ÁRTICO PARA SUSTENTAR 2030+" in uppercase white Orbitron Bold.
Badge: "SNØHVIT E PROSPECÇÃO NO MAR DE BARENTS" in sage green (#A8C3A6).
Camera: smooth pull-back revealing the maritime corridor off Hammerfest.
NO voice, NO speech, NO music. ONLY LNG ship horn echo and gentle wave lap SFX.`
      },
      {
        titulo: 'A Escandinávia Unida na OTAN (Finlândia e Suécia)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Broad regional satellite view showing Norway, Sweden, and Finland unified under glowing NATO blue vector boundaries from the Baltic to the Barents Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Port of Narvik glowing as an ice-free logistics corridor connecting Sweden's iron-ore railway to Atlantic naval reinforcement.
Text on screen: "FLANCO NÓRDICO INTEGRADO NA OTAN // PORTO DE NARVIK" in uppercase white Orbitron Bold.
Badge: "CONEXÃO DIRETA DO ATLÂNTICO AO BÁLTICO" in pure white (#F5F2EB).
Camera: smooth linear pull-back over northern Scandinavia.
NO voice, NO speech, NO music. ONLY subtle military radio static and radar chime SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view over the North Pole and North Atlantic curvature showing Norway's northern chokepoints in perspective.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep orbital perspective.
NO voice, NO speech, NO music. ONLY atmospheric sub-bass rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 237,
    titulo: 'Como os Emirados Árabes Transformaram Petróleo, Fundos Soberanos e o Porto de Fujairah em Poder Global?',
    roteiro: 'Como os Emirados Árabes Transformaram Petróleo, Fundos Soberanos e o Porto de Fujairah em Poder Global? Com área menor que o estado de Pernambuco, os Emirados Árabes Unidos construíram uma blindagem geográfica rara no Golfo Pérsico. Enquanto quase todos os produtores vizinhos ficam presos atrás dos trinta e nove quilômetros do Estreito de Ormuz, Abu Dhabi escavou um atalho de quase quatrocentos quilômetros pelo deserto: o oleoduto Habshan–Fujairah, que leva até um milhão e oitocentos mil barris diários diretamente para o Golfo de Omã, já no Oceano Índico. Ao mesmo tempo, o país converteu suas reservas de cento e treze bilhões de barris em fundos soberanos que superam um trilhão e setecentos bilhões de dólares, como ADIA e Mubadala, além de transformar Jebel Ali e a operadora DP World em donos de dezenas de portos pelo mundo. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'OLEODUTO ANTI-ORMUZ E TRILHÕES EM FUNDOS',
      l2: 'COMO OS EMIRADOS VIRARAM POTÊNCIA GLOBAL',
      l3: 'DE ABU DHABI AO PORTO DE FUJAIRAH'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho dos Emirados Árabes',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe zooming onto the Arabian Peninsula and Persian Gulf, illuminating the UAE coastline, Strait of Hormuz, and Gulf of Oman.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered in the 9:16 frame (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "OLEODUTO ANTI-ORMUZ E TRILHÕES EM FUNDOS"
Line 2 (intense crimson red #C8102E): "COMO OS EMIRADOS VIRARAM POTÊNCIA GLOBAL"
Line 3 (pure white #F5F2EB): "DE ABU DHABI AO PORTO DE FUJAIRAH"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, luminous glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward Abu Dhabi and Dubai.
NO voice, NO speech, NO music. ONLY deep desert wind bass and radar ping SFX.`
      },
      {
        titulo: 'Os Sete Emirados e a Concentração de Petróleo em Abu Dhabi',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the UAE highlighting Abu Dhabi's massive 87% land share and flat masked UAE flag texture bound strictly inside borders (no wave, no bleeding).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "ABU DHABI // 96% DAS RESERVAS DE PETRÓLEO (~113 BI BARRIS)" in uppercase white Orbitron Bold.
Badge: "83.600 KM² MENOR QUE PERNAMBUCO" in gold (#F5F2EB).
Camera: smooth lateral pan across the desert oilfields toward the coast.
NO voice, NO speech, NO music. ONLY subtle turbine hum and telemetry click SFX.`
      },
      {
        titulo: 'A Armadilha Geográfica do Estreito de Ormuz',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view hovering over the 39 km-wide Strait of Hormuz separating Iran from Musandam and the Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crimson red chokepoint pulse blocking tanker paths inside the Strait of Hormuz.
Text on screen: "ESTREITO DE ORMUZ // 20% DO PETRÓLEO MUNDIAL" in uppercase white Orbitron Bold.
Badge: "GARGALO MARÍTIMO CONTROLADO PELO IRÃ AO NORTE" in intense crimson red (#C8102E).
Camera: slow linear zoom over the Musandam peninsula bend.
NO voice, NO speech, NO music. ONLY naval radar sweep and low tension drone SFX.`
      },
      {
        titulo: 'O Oleoduto Habshan–Fujairah Contornando Ormuz',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-res satellite tracking over the Hajar Mountains following a glowing sage-green pipeline vector from Habshan in Abu Dhabi across to Fujairah on the Gulf of Oman.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "OLEODUTO HABSHAN–FUJAIRAH // 380–400 KM" in uppercase white Orbitron Bold.
Badge: "ATÉ 1,8 MILHÃO BPD DIRETO NO OCEANO ÍNDICO" in sage green (#A8C3A6).
Camera: linear tracking flight moving east across the Hajar mountain ridge to the coast.
NO voice, NO speech, NO music. ONLY flowing pipeline pulse and desert wind gust SFX.`
      },
      {
        titulo: 'As Cavernas Subterrâneas e o Bunkering de Fujairah',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on the Port of Fujairah oil tank farms and offshore tanker anchorage outside the Strait of Hormuz.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Metrics in JetBrains Mono: "42 MILHÕES DE BARRIS EM CAVERNAS SUBTERRÂNEAS".
Badge: "SAÍDA AUTÔNOMA SEM DEPENDER DE ORMUZ" in gold (#F59E0B).
Camera: smooth downward push-in over Fujairah terminals.
NO voice, NO speech, NO music. ONLY distant cargo ship horn and ocean surf SFX.`
      },
      {
        titulo: 'Os Fundos Soberanos ADIA e Mubadala (> US$ 1,7 Trilhão)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite shot centered over Abu Dhabi island and Al Maryah financial district, with clean gold capital arcs radiating outward to Europe, Americas, and Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "ADIA + MUBADALA + ADQ // > US$ 1,7 TRILHÃO" in uppercase white Orbitron Bold.
Badge: "RECICLAGEM DO PETRÓLEO EM IA, ENERGIA E CHIPS" in gold (#F59E0B).
Camera: slow pull-back revealing global financial vector links.
NO voice, NO speech, NO music. ONLY crisp digital data chime and subtle whoosh SFX.`
      },
      {
        titulo: 'Jebel Ali e a Rede Portuária Global da DP World',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up of the colossal artificial harbor basins of Jebel Ali Port and Palm Jebel Ali in Dubai.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Network lines extending from Dubai across the Red Sea, East Africa, Europe, and South America (Santos).
Text on screen: "JEBEL ALI // MAIOR PORTO ARTIFICIAL DO MUNDO" in uppercase white Montserrat Bold.
Badge: "DP WORLD OPERA 80+ TERMINAIS EM 40+ PAÍSES" in pure white (#F5F2EB).
Camera: smooth lateral pan across Jebel Ali container piers.
NO voice, NO speech, NO music. ONLY gantry crane hum and harbor bell chime SFX.`
      },
      {
        titulo: 'A Usina Nuclear de Barakah e Energia Solar no Deserto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of western Abu Dhabi highlighting the Barakah Nuclear Power Plant on the Persian Gulf coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "USINA DE BARAKAH // 5,6 GW NUCLEARES NO DESERTO" in uppercase white Orbitron Bold.
Badge: "ENERGIA LIMPA PARA ALUMÍNIO E DATA CENTERS DE IA" in sage green (#A8C3A6).
Camera: smooth linear push-in over Barakah four reactor domes.
NO voice, NO speech, NO music. ONLY clean electric turbine hum SFX.`
      },
      {
        titulo: 'Tabuleiro Regional do Oriente Médio ao Oceano Índico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite perspective showing UAE as a central logistics bridge between Suez, Hormuz, India, and East Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing dual-color trade arcs converging at Dubai and Fujairah.
Text on screen: "PONTE LOGÍSTICA ENTRE ÁSIA, ÁFRICA E EUROPA" in uppercase white Montserrat Bold.
Camera: slow pull-back over the Arabian Sea.
NO voice, NO speech, NO music. ONLY maritime beacon ping and soft wind SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of the Indian Ocean, Arabian Peninsula, and Earth's horizon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow orbital retreat into space.
NO voice, NO speech, NO music. ONLY atmospheric bass rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 238,
    titulo: 'Por Que o Estreito de Luzón Entre Taiwan e as Filipinas Concentra Cabos Submarinos e Submarinos Nucleares?',
    roteiro: 'Por Que o Estreito de Luzón Entre Taiwan e as Filipinas Concentra Cabos Submarinos e Submarinos Nucleares? Entre a ponta sul de Taiwan e o norte das Filipinas estende-se um corredor oceânico de duzentos e cinquenta quilômetros que sustenta duas batalhas silenciosas ao mesmo tempo. Diferente do raso Estreito de Taiwan, o Canal de Bashi dentro do Estreito de Luzón mergulha a mais de dois mil metros de profundidade. No leito desse abismo passam dezenas de cabos submarinos de fibra óptica que transportam dados financeiros e tráfego de internet entre Japão, Taiwan, Hong Kong e Estados Unidos. Em 2006, um único terremoto ali rompeu oito cabos e desconectou bolsas asiáticas inteiras. Ao mesmo tempo, essa fossa profunda é a única porta aberta para porta-aviões e submarinos nucleares chineses romperem a Primeira Cadeia de Ilhas rumo ao Pacífico sem serem detectados em águas rasas, explicando a nova corrida militar nas Ilhas Batanes. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'FIBRA ÓPTICA E SUBMARINOS NUCLEARES',
      l2: 'O GARGALO SECRETO DO ESTREITO DE LUZÓN',
      l3: 'ENTRE TAIWAN E AS FILIPINAS'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Estreito de Luzón',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D globe descending onto the Western Pacific between Taiwan and Luzon Island in the Philippines, glowing cyan subsea cable lines and deep bathymetry shading.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "FIBRA ÓPTICA E SUBMARINOS NUCLEARES"
Line 2 (intense crimson red #C8102E): "O GARGALO SECRETO DO ESTREITO DE LUZÓN"
Line 3 (pure white #F5F2EB): "ENTRE TAIWAN E AS FILIPINAS"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, radiant bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward the Bashi Channel.
NO voice, NO speech, NO music. ONLY deep underwater sonar ping and fiber pulse SFX.`
      },
      {
        titulo: 'Os Três Canais: Bashi, Balintang e Babuyan',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view spanning southern Taiwan, the Batanes islands, Babuyan islands, and northern Luzon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp vector labels marking "CANAL DE BASHI", "CANAL DE BALINTANG", and "CANAL DE BABUYAN" across the 250 km corridor.
Text on screen: "250 KM DE LARGURA · TRÊS PASSAGENS OCEÂNICAS" in uppercase white Orbitron Bold.
Camera: linear tracking flight moving south from Taiwan's southern tip toward Luzon.
NO voice, NO speech, NO music. ONLY ocean swell surge and radar tick SFX.`
      },
      {
        titulo: 'Águas Rasas em Taiwan vs Abismo de 2.000m em Bashi',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetric satellite contrast showing shallow light-blue Taiwan Strait (~60 m) versus dark deep-navy trenches (> 2.000 m) in the Bashi Channel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Depth readouts in JetBrains Mono: "ESTREITO DE TAIWAN: ~60 M // CANAL DE BASHI: > 2.000 M".
Badge: "CORREDOR SUBMERSO IDEAL PARA SUBMARINOS" in intense crimson red (#C8102E).
Camera: slow linear zoom over the dark underwater canyon south of Taiwan.
NO voice, NO speech, NO music. ONLY deep submarine hydrophone rumble SFX.`
      },
      {
        titulo: 'A Autoestrada de Cabos Submarinos da Internet Asiática',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective over the Luzon Strait with bright glowing fiber-optic cable bundles converging from Hong Kong, Taipei, Tokyo, and Singapore through Bashi toward Guam and US West Coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: ">99% DOS DADOS INTERCONTINENTAIS PASSAM POR CABOS" in uppercase white Montserrat Bold.
Badge: "FEIXE CRÍTICO DE FIBRA ÓPTICA ÁSIA–PACÍFICO" in sage green (#A8C3A6).
Camera: smooth lateral pan following the glowing subsea cable trunk eastward.
NO voice, NO speech, NO music. ONLY high-speed fiber data chirp and underwater current SFX.`
      },
      {
        titulo: 'O Terremoto de Hengchun de 2006 e o Risco de Sabotagem',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up off Hengchun (22°00'N · 120°44'E) with concentric seismic shockwave rings and broken red cable indicators.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "26 DEZ 2006 // SISMO ROMPEU 8 CABOS INTERNACIONAIS" in uppercase white Orbitron Bold.
Badge: "HOJE SOB ALERTA DE SABOTAGEM EM ZONA CINZENTA" in intense crimson red (#C8102E).
Camera: subtle downward push-in on Hengchun submarine landing station.
NO voice, NO speech, NO music. ONLY seismic bass tremor and static disconnect buzz SFX.`
      },
      {
        titulo: 'A Primeira Cadeia de Ilhas e a Saída Naval Chinesa',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite map tracing the First Island Chain arc from Japan through Okinawa, Taiwan, and the Philippines in crisp Bege Cartográfico (#F5F2EB) vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Animated crimson naval breakout arrows pushing from Hainan through Luzon Strait into the open Philippine Sea.
Text on screen: "ROMPENDO A PRIMEIRA CADEIA DE ILHAS RUMO AO PACÍFICO" in uppercase white Orbitron Bold.
Camera: smooth pull-back revealing the Western Pacific strategic arc.
NO voice, NO speech, NO music. ONLY naval sonar ping and jet flyby whoosh SFX.`
      },
      {
        titulo: 'Ilhas Batanes: Mais Perto de Taiwan do Que de Manila',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom onto Batanes (Itbayat and Mavulis islands) with distance calipers in JetBrains Mono: "ITBAYAT → TAIWAN: 140 KM // ITBAYAT → MANILA: 750 KM".
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "BATANES // POSTO AVANÇADO DAS FILIPINAS NO BASHI" in uppercase white Montserrat Bold.
Badge: "RADAES COSTEIROS E MÍSSEIS ANTINAVIO BRAHMOS" in gold (#F59E0B).
Camera: linear tracking sweep from Mavulis Island north toward Taiwan.
NO voice, NO speech, NO music. ONLY coastal trade wind and radar lock chime SFX.`
      },
      {
        titulo: 'Novas Bases EDCA em Cagayan e Cooperação Prática',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus on northern Luzon (Santa Ana and Lal-lo in Cagayan) with target crosshairs lighting up dual-use airfields and naval facilities.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "ACORDO EDCA EUA–FILIPINAS // BASES A 400 KM DE TAIWAN" in uppercase white Orbitron Bold.
Badge: "VIGILÂNCIA CONJUNTA CONTRA NAVIOS DE PESQUISA" in pure white (#F5F2EB).
Camera: smooth push-in over Cagayan river mouth and port.
NO voice, NO speech, NO music. ONLY helicopter rotor wash and radio beep SFX.`
      },
      {
        titulo: 'Novas Rotas de Cabos Contornando o Sul das Filipinas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide Pacific satellite view showing new alternative sage-green (#A8C3A6) submarine cables routing south of the Philippines directly toward Guam and Hawaii to bypass Bashi.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "DESVIO DIGITAL // NOVOS CABOS EVITAM O ESTREITO DE LUZÓN" in uppercase white Montserrat Bold.
Camera: smooth eastward pan across the Philippine Sea toward Guam.
NO voice, NO speech, NO music. ONLY clean digital signal sweep SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of the Western Pacific rim from Japan to Indonesia under natural solar relief lighting.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 239,
    titulo: 'Como o Corredor Transcaspiano Virou a Rota Terrestre Entre China e Europa Que Contorna a Rússia?',
    roteiro: 'Como o Corredor Transcaspiano Virou a Rota Terrestre Entre China e Europa Que Contorna a Rússia? Durante décadas, quase todo trem de carga entre a China e a Alemanha cruzava a Ferrovia Transiberiana por território russo. Mas as sanções de 2022 e os ataques no Mar Vermelho forçaram o comércio euroasiático a ativar um atalho antigo pelo coração da Ásia Central: o Corredor Transcaspiano, conhecido como Corredor do Meio. Saindo de Khorgos na fronteira chinesa, os contêineres atravessam três mil quilômetros no Cazaquistão até os portos de Aktau e Kuryk, embarcam em balsas sobre o Mar Cáspio rumo a Baku no Azerbaijão e seguem de trem pela Geórgia e pela Turquia até a União Europeia. Em 2026, o tráfego na rota cresceu mais de vinte por cento e o tempo médio de viagem caiu para treze a vinte dias, desafiando a queda do nível de água do próprio Mar Cáspio. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'DA CHINA À EUROPA SEM TOCAR A RÚSSIA',
      l2: 'O NOVO CORREDOR TRANSCASPIANO',
      l3: 'TREZE A VINTE DIAS PELO MAR CÁSPIO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Corredor Transcaspiano',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D globe descending onto Central Asia and the Caspian Sea, illuminating the glowing sage-green Middle Corridor linking China to Europe while bypassing Russia to the north.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "DA CHINA À EUROPA SEM TOCAR A RÚSSIA"
Line 2 (intense crimson red #C8102E): "O NOVO CORREDOR TRANSCASPIANO"
Line 3 (pure white #F5F2EB): "TREZE A VINTE DIAS PELO MAR CÁSPIO"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, radiant glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward the Caspian basin.
NO voice, NO speech, NO music. ONLY deep train rumble and tactical radar ping SFX.`
      },
      {
        titulo: 'O Bloqueio do Corredor Norte e do Mar Vermelho',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide Eurasian satellite view showing crimson warning zones along the northern Russian Trans-Siberian line and southern Red Sea Bab el-Mandeb chokepoint.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Between both red zones, a bright sage-green corridor ignites straight through Central Asia and the Caucasus.
Text on screen: "DUPLO CHOQUE // RÚSSIA SANCIONADA E MAR VERMELHO SOB ATAQUE" in uppercase white Orbitron Bold.
Camera: smooth pull-back revealing all of Eurasia.
NO voice, NO speech, NO music. ONLY warning sonar beep and clean vector lock SFX.`
      },
      {
        titulo: 'Khorgos: A Fronteira China–Cazaquistão e Troca de Bitola',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on the Khorgos Dry Port straddling the China–Kazakhstan border in the Ili Valley.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Technical gauge labels in JetBrains Mono: "1.435 MM (CHINA) → 1.520 MM (CAZAQUISTÃO)".
Badge: "419 TRENS DE CONTÊINERES EM 8 MESES DE 2026 (+84%)" in gold (#F59E0B).
Camera: linear tracking shot crossing from Xinjiang into Kazakhstan.
NO voice, NO speech, NO music. ONLY freight train horn and rail coupling clank SFX.`
      },
      {
        titulo: 'As Estepes Cazaques até os Portos de Aktau e Kuryk',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking flight moving westward across the Kazakh steppe to the Caspian Sea ports of Aktau and Kuryk.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing 3.000 km rail line ending at pier cranes on the Caspian shore.
Text on screen: "3.000 KM DE FERROVIA ATÉ AKTAU E KURYK" in uppercase white Montserrat Bold.
Badge: "TRANSBORDO PARA BALSAS FERROVIÁRIAS NO CÁSPIO" in sage green (#A8C3A6).
Camera: smooth lateral pan along the eastern Caspian coastline.
NO voice, NO speech, NO music. ONLY steppe wind and port gantry crane hum SFX.`
      },
      {
        titulo: 'A Travessia do Mar Cáspio e o Porto de Alat em Baku',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view spanning the Caspian Sea from Kuryk directly west to the Port of Alat south of Baku, Azerbaijan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ferry routes tracing ~500 km across dark blue Caspian water.
Text on screen: "PORTO DE ALAT (BAKU) // +82% DE CARGA SECA EM 2026" in uppercase white Orbitron Bold.
Badge: "RISCO FÍSICO: RECENSEAMENTO DE NÍVEL BAIXO NO CÁSPIO" in intense crimson red (#C8102E).
Camera: linear flight westward across the Caspian Sea surface.
NO voice, NO speech, NO music. ONLY ferry foghorn and gentle wave splash SFX.`
      },
      {
        titulo: 'A Ferrovia Baku–Tbilisi–Kars Pelo Cáucaso',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view over the Caucasus mountains following the Baku–Tbilisi–Kars rail corridor through Azerbaijan, Georgia, and eastern Turkey.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Target crosshair on Akhalkalaki marking the second gauge change back to 1.435 mm European standard.
Text on screen: "FERROVIA BTK // DO CÁSPIO À TURQUIA SEM BALSAS" in uppercase white Montserrat Bold.
Camera: linear tracking flight climbing over Georgian mountain passes.
NO voice, NO speech, NO music. ONLY mountain wind and steel wheel on track clatter SFX.`
      },
      {
        titulo: 'A Entrada na Europa via Bósforo e Mar Negro',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite split corridor showing southern rail traffic crossing Istanbul's Marmaray rail tunnel under the Bosphorus and northern sea ferries from Poti/Batumi to Constanța, Romania.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "13 A 20 DIAS DA CHINA À UNIÃO EUROPEIA" in uppercase white Orbitron Bold.
Badge: "METADE DO TEMPO DA ROTA PELO CABO DA BOA ESPERANÇA" in sage green (#A8C3A6).
Camera: smooth zoom over the Bosphorus and western Black Sea.
NO voice, NO speech, NO music. ONLY maritime bell and distant train chime SFX.`
      },
      {
        titulo: 'O Desequilíbrio 4:1 e os €10 Bilhões da União Europeia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite overview of the entire 9-country corridor with thick westbound arrows (80% cargo) versus thin eastbound return arrows (20% backhaul).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "80% OESTE vs 20% LESTE // DESAFIO DE CONTÊINERES VAZIOS" in JetBrains Mono white/gold.
Badge: "€10 BILHÕES EM INVESTIMENTOS GLOBAL GATEWAY DA UE" in gold (#F59E0B).
Camera: slow steady hover over Central Asia and Caucasus.
NO voice, NO speech, NO music. ONLY electronic telemetry blip SFX.`
      },
      {
        titulo: 'Projeção do Banco Mundial Até 2040',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map illuminating Uzbekistan, Kazakhstan, Azerbaijan, and Georgia glowing in unified trade corridor lines.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "BANCO MUNDIAL 2026 // TRIPLICAR VOLUME ATÉ 2040" in uppercase white Orbitron Bold.
Camera: smooth pull-back revealing the full Eurasian landmass.
NO voice, NO speech, NO music. ONLY subtle atmospheric whoosh SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of Eurasia showing the Middle Corridor linking the Pacific to the Atlantic coastline.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY atmospheric sub-bass rumble and celestial chime SFX.`
      }
    ]
  }
];

for (const v of videos) {
  const len = v.roteiro.length;
  console.log(`Video ${v.num}: roteiro=${len} chars | prompts=${v.prompts.length}`);
  if (len < 850 || len > 1150) {
    console.warn(`⚠️ Atenção tamanho do roteiro ${v.num}: ${len} chars`);
  }
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n${v.roteiro}\n\n---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;
  v.prompts.forEach((p, idx) => {
    md += `#### Prompt ${idx + 1} — ${p.titulo} (4s)\n\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  });
  md += `---\n\n### 3. Legenda\n\n\`\`\`text\n${v.titulo}\n\n#geografia #geopolitica #mapas\n\`\`\`\n`;

  const outPath = path.join(roteirosDir, `Video ${v.num}.md`);
  fs.writeFileSync(outPath, md, 'utf8');
}
console.log('✅ Roteiros 235 a 239 gravados com sucesso.');
