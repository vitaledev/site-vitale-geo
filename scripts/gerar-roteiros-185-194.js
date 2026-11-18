import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';
const indicePath = path.join(roteirosDir, 'Índice.md');

const videos = [
  // 185: HISTÓRIA DA SUÍÇA
  {
    num: 185,
    titulo: 'Como o Relevo Alpino, o Juramento de Rütli e o Congresso de Viena Desenharam as Fronteiras Intactas da Suíça Moderna?',
    roteiro: `Como o relevo alpino, o Juramento de Rütli e o Congresso de Viena desenharam as fronteiras intactas da Suíça moderna? Encravada no coração da Europa e cercada por impérios que se destruíram em guerras continentais, a Suíça não tem suas fronteiras violadas há mais de duzentos anos. O segredo dessa fortaleza começou em agosto de mil duzentos e noventa e um, quando três cantões camponeses juraram defesa mútua no prado de Rütli para expulsar os Habsburgos dos desfiladeiros de São Gotardo. Na Paz de Vestfália de mil seiscentos e quarenta e oito, a confederação arrancou sua independência soberana do Sacro Império. Após a invasão napoleônica, o Congresso de Viena de mil oitocentos e quinze consagrou a neutralidade armada perpétua e as fronteiras definitivas dos vinte e seis cantões. Na Segunda Guerra, o general Guisan aplicou o Reduto Nacional, entrincheirando o exército nos Alpes com pontes e túneis dinamitados que desestimularam a invasão nazista. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Alpine arc of Central Europe.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FORTALEZA DOS ALPES"
Line 2 (intense crimson red #C8102E): "COMO AS FRONTEIRAS DA SUÍÇA FICARAM INTACTAS?"
Line 3 (pure white #F5F2EB): "DO PACTO DE 1291 AO CONGRESSO DE 1815"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Lake Lucerne and the Saint Gotthard massif.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Juramento de Rütli e o Passo de São Gotardo (1291)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical topographic relief map of Lake Lucerne and the Gotthard Pass.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Three forest cantons (Uri, Schwyz, Unterwalden) glowing in radiant gold (#F59E0B) with tactical mountain pass vectors.
Text on screen: "JURAMENTO DE RÜTLI (1291) // O PACTO FEDERAL" in uppercase white Orbitron Bold.
Badge: "DEFESA COLETIVA CONTRA A TIRANIA DOS HABSBURGOS" in intense crimson red (#C8102E).
Camera: slow cinematic flyover through deep Alpine gorges.
NO voice, NO speech, NO music. ONLY mountain wind howl and ancient horn echo SFX.` },
      { t: 'A Paz de Vestfália e a Soberania Formal (1648)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental map of 17th century Europe highlighting the Swiss Confederacy breaking away from the Holy Roman Empire.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Confederacy territory outlined in crisp 2D vector border in Bege Cartográfico (#F5F2EB).
Text on screen: "PAZ DE VESTFÁLIA (1648) // INDEPENDÊNCIA SOBERANA" in uppercase white Montserrat Bold.
Badge: "ISENÇÃO JURÍDICA TOTAL DO SACRO IMPÉRIO GERMÂNICO" in gold (#F59E0B).
Camera: technical orthographic push-in over Basel and Zurich.
NO voice, NO speech, NO music. ONLY quill pen scratch and antique treaty seal click SFX.` },
      { t: 'A Invasão Napoleônica e a República Helvética (1798)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map showing French revolutionary army invasion vectors into Bern and central Switzerland.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red invasion arrows converging across the Jura Mountains into Swiss valleys.
Text on screen: "INVASÃO FRANCESA (1798) // REPÚBLICA HELVÉTICA" in uppercase white Orbitron Bold.
Badge: "A ÚNICA OCUPAÇÃO ESTRANGEIRA DAS FRONTEIRAS" in intense crimson red (#C8102E).
Camera: dynamic linear flyover across the Swiss plateau.
NO voice, NO speech, NO music. ONLY distant cannon rumble and cavalry drum rattle SFX.` },
      { t: 'O Congresso de Viena e a Neutralidade Perpétua (1815)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic partition map of Europe in 1815 focusing on the neutral Swiss buffer state.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Swiss borders expanding with Geneva, Valais, and Neuchâtel glowing in sage green (#A8C3A6).
Text on screen: "CONGRESSO DE VIENA (1815) // NEUTRALIDADE PERPÉTUA" in uppercase white Montserrat Bold.
Badge: "FRONTEIRAS BLINDADAS POR TRATADO INTERNACIONAL" in Bege Cartográfico (#F5F2EB).
Camera: smooth orthographic zoom out centering on Switzerland's 41.285 km² footprint.
NO voice, NO speech, NO music. ONLY clockwork mechanism chime and diplomatic gavel strike SFX.` },
      { t: 'A Guerra de Sonderbund e a Constituição de 1848', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic map of Switzerland dividing Catholic and Protestant cantons in November 1847.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
General Dufour's federal campaign lines pacifying Catholic cantons in 27 days.
Text on screen: "CONSTITUIÇÃO DE 1848 // NASCIMENTO DO ESTADO FEDERAL" in uppercase white Orbitron Bold.
Badge: "BERNA ESCOLHIDA COMO CIDADE FEDERAL E MOEDA ÚNICA" in gold (#F59E0B).
Camera: slow cinematic descent toward the federal palace (Bundeshaus) in Bern.
NO voice, NO speech, NO music. ONLY church bell toll and marching boots cadence SFX.` },
      { t: 'A Doutrina do Reduto Nacional na Segunda Guerra (1940)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-contrast 3D cutaway terrain map of the Swiss Alps showing the Schweizer Réduit military fortress system.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Underground tunnels, artillery caverns inside mountain peaks, and dinamited pass bridges glowing red.
Text on screen: "REDUTO NACIONAL (1940) // O PLANO GUISAN" in uppercase white Orbitron Bold.
Badge: "FORTALEZAS SUBTERRÂNEAS E PONTES DINAMITADAS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in inside alpine mountain massif.
NO voice, NO speech, NO music. ONLY deep subterranean echo and metallic blast door lock SFX.` },
      { t: 'Dissuasão Armada e a Operação Tannenbaum Cancelada', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic map of Europe in 1941 showing Switzerland completely surrounded by Nazi Germany, Vichy France, and Fascist Italy.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Nazi invasion arrows of Operation Tannenbaum halted at the Swiss alpine perimeter.
Text on screen: "OPERAÇÃO TANNENBAUM // O RECUO DO EIXO" in uppercase white Montserrat Bold.
Badge: "430 MIL SOLDADOS MOBILIZADOS E PASSO GOTARDO INTRANSPONÍVEL" in sage green (#A8C3A6).
Camera: high-altitude satellite flyover over Saint Gotthard and Simplon passes.
NO voice, NO speech, NO music. ONLY aircraft engine drone fading into alpine breeze SFX.` },
      { t: 'Bunkers Nucleares e a Defesa Moderna Total', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Modern GIS map of Switzerland with glowing dots representing over 360.000 civil defense fallout bunkers across all 26 cantons.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Data metric overlay: "COBERTURA CIVIL: 100% DA POPULAÇÃO EM ABRIGOS".
Text on screen: "NEUTRALIDADE ARMADA // DEFESA INTEGRAL DO SÉCULO XXI" in uppercase white Orbitron Bold.
Badge: "SERVIÇO MILITAR OBRIGATÓRIO E FORÇA AÉREA ALERTA" in white (#F5F2EB).
Camera: rapid data zoom into an underground bunker entrance near Lucerne.
NO voice, NO speech, NO music. ONLY digital telemetry beep and hydraulic door hiss SFX.` },
      { t: 'Encerramento e Fronteira Centenária Intacta', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Switzerland's permanent national border surrounded by Germany, France, Italy, Austria, and Liechtenstein.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders glowing in radiant Bege Cartográfico (#F5F2EB) and official national flag texture masked inside.
Text on screen: "211 ANOS DE FRONTEIRAS INTACTAS // O CASO ÚNICO DA SUÍÇA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 186: GEOPOLÍTICA DA INDONÉSIA
  {
    num: 186,
    titulo: 'Por Que o Domínio de Três Estreitos Estratégicos e a Mudança da Capital Fazem da Indonésia o Pivô Naval do Indo-Pacífico?',
    roteiro: `Por que o domínio de três estreitos estratégicos e a mudança da capital fazem da Indonésia o pivô naval do Indo-Pacífico? Com mais de dezessete mil ilhas estendendo-se por cinco mil quilômetros entre a Ásia e a Oceania, a Indonésia controla os corredores navais mais cobiçados do mundo. Por Malaca, Sunda e Lombok transitam mais de trinta por cento de todo o comércio marítimo da Terra e oitenta por cento do petróleo importado pela China. Enquanto Malaca é rasa e vulnerável a bloqueios, o Estreito de Lombok atinge profundidades abissais superiores a duzentos e cinquenta metros, sendo a rota secreta preferida por submarinos nucleares que cruzam submersos entre o Pacífico e o Oceano Índico. Ao mesmo tempo, com Jacarta afundando até vinte e cinco centímetros por ano, a construção da megacapital Nusantara na selva de Bornéu posiciona o poder político indonésio no centro geográfico do arquipélago, equilibrando a pressão naval entre Washington e Pequim. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Naval Global', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Indo-Pacific crossroads and the Indonesian archipelago.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O GIGANTE DOS ESTREITOS"
Line 2 (intense crimson red #C8102E): "O PIVÔ NAVAL DO INDO-PACÍFICO"
Line 3 (pure white #F5F2EB): "DE MALACA À NOVA CAPITAL NUSANTARA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Java Sea and Malacca Strait.
NO voice, NO speech, NO music. ONLY deep oceanic rumble and clean satellite whoosh SFX.` },
      { t: 'O Arquipélago das 17 Mil Ilhas e Dimensão Continental', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map displaying Indonesia's 5.100 km span from Sabang (Sumatra) to Merauke (Papua).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Comparative distance overlay showing Indonesia wider than the European continent (Lisbon to Moscow).
Text on screen: "INDONÉSIA // 17.508 ILHAS E 280 MILHÕES DE HABITANTES" in uppercase white Orbitron Bold.
Badge: "4º PAÍS MAIS POPULOSO E MAIOR ESTADO ARQUIPELÁGICO" in gold (#F59E0B).
Camera: smooth linear tracking sweep from west to east across the equator.
NO voice, NO speech, NO music. ONLY tropical wind surge and sonar ping SFX.` },
      { t: 'O Estreito de Malaca e o Dilema de Energia da China', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Technical satellite view zooming into the 800 km Malacca Strait between Sumatra and Malaysia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dense glowing traffic lanes of oil tankers converging on the 2,8 km Phillips Channel chokepoint.
Text on screen: "ESTREITO DE MALACA // 90 MIL NAVIOS / ANO" in uppercase white Montserrat Bold.
Badge: "80% DO PETRÓLEO DA CHINA E ÁSIA PASSA POR ESTE GARGALO" in intense crimson red (#C8102E).
Camera: slow orthographic descent toward Singapore and Batam Island.
NO voice, NO speech, NO music. ONLY ship horn blast and heavy maritime engine rumble SFX.` },
      { t: 'O Estreito de Sunda e o Vulcão Krakatoa', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map locking onto Sunda Strait separating Java and Sumatra with Krakatoa volcano caldera in the center.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Alternative naval bypass vector glowing in vibrant amber (#F59E0B).
Text on screen: "ESTREITO DE SUNDA // A ROTA DE CONTINGÊNCIA" in uppercase white Orbitron Bold.
Badge: "CHOKEPOINT CRÍTICO ENTRE O MAR DE JAVA E O ÍNDICO" in white (#F5F2EB).
Camera: dynamic linear flyover across Anak Krakatau smoking crater.
NO voice, NO speech, NO music. ONLY volcanic wind hiss and ocean swell crash SFX.` },
      { t: 'O Estreito de Lombok e a Rota dos Submarinos Nucleares', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D bathymetric underwater relief map of the Lombok Strait between Bali and Lombok island.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Abyssal trench highlighted in deep navy blue: "PROFUNDIDADE > 250 METROS".
Text on screen: "ESTREITO DE LOMBOK // CANAL ABISSAL SEM RADAR" in uppercase white Montserrat Bold.
Badge: "ROTA SUBMERSA DE SUBMARINOS NUCLEARES EUA E CHINA" in electric blue (#38BDF8).
Camera: technical orthographic push-in through deep ocean canyon.
NO voice, NO speech, NO music. ONLY low-frequency submarine sonar ping and water pressure hum SFX.` },
      { t: 'A Disputa do Mar de Natuna do Norte e a Linha de Nove Raias', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map of the South China Sea showing the 9-Dash Line overlapping Natuna Islands EEZ.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indonesian maritime boundary outlined in Bege Cartográfico (#F5F2EB) vs. Chinese dashed lines in red.
Text on screen: "ILHAS NATUNA // O MAR DE NATUNA DO NORTE" in uppercase white Orbitron Bold.
Badge: "MEGACAMPO DE GÁS NATURAL E BASE MILITAR INTEGRADA" in intense crimson red (#C8102E).
Camera: rapid tactical pan from Natuna Besar toward Hainan.
NO voice, NO speech, NO music. ONLY radar sweep chime and jet fighter flyby SFX.` },
      { t: 'O Afundamento de Jacarta: O Colapso da Megalópole', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite radar interferometry (InSAR) heatmap showing land subsidence in northern Jakarta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Sinking coastal districts pulsing in bright magenta: "-25 CM POR ANO".
Text on screen: "JACARTA AFUNDANDO // A CAPITAL SOB AMEAÇA DAS ÁGUAS" in uppercase white Montserrat Bold.
Badge: "32 MILHÕES DE HABITANTES E 1/3 DA CIDADE SUBMERSA ATÉ 2050" in intense crimson red (#C8102E).
Camera: slow cinematic flyover over Jakarta sea wall and flooded canals.
NO voice, NO speech, NO music. ONLY distant city traffic roar and water splashing SFX.` },
      { t: 'A Construção de Nusantara na Selva de Bornéu', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of East Kalimantan in Borneo island showing the planned city grid of Nusantara.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Green smart capital master plan glowing in sage green (#A8C3A6) along the Makassar Strait.
Text on screen: "NUSANTARA // A NOVA CAPITAL DE US$ 35 BILHÕES" in uppercase white Orbitron Bold.
Badge: "CENTRO GEOGRÁFICO DO ARQUIPÉLAGO LIVRE DE TSUNAMIS" in gold (#F59E0B).
Camera: dynamic linear flyover above presidential palace construction site.
NO voice, NO speech, NO music. ONLY tropical rainforest birds and construction crane clank SFX.` },
      { t: 'A Diplomacia do "Remar Entre Dois Recifes"', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geopolitical diagram map of the Indo-Pacific with Jakarta balanced between Washington and Beijing.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bilateral trade vectors: China (nickel and high-speed rail) vs. US (Super Garuda Shield military drills).
Text on screen: "DIPLOMACIA ATIVA // O EQUILÍBRIO ENTRE POTÊNCIAS" in uppercase white Montserrat Bold.
Badge: "NEM BASE CHINESA, NEM ALIANÇA FORMAL COM EUA" in white (#F5F2EB).
Camera: wide orthographic zoom centering on the Indonesian maritime crossroads.
NO voice, NO speech, NO music. ONLY digital telemetry lock-on click SFX.` },
      { t: 'Encerramento e o Guardião dos Oceanos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Indonesia's island chain connecting the Pacific and Indian oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territory borders illuminated in Bege Cartográfico (#F5F2EB) with red-and-white national flag texture.
Text on screen: "A POTÊNCIA QUE COMANDA AS ROTAS DO SÉCULO XXI" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: majestic slow ascent into high planetary orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 187: GEOECONOMIA DO MÉXICO
  {
    num: 187,
    titulo: 'Como o Nearshoring, a Fronteira Norte e o Corredor Interoceânico Transformaram o México no Gigante Industrial da América?',
    roteiro: `Como o nearshoring, a fronteira norte e o Corredor Interoceânico transformaram o México no gigante industrial da América? Em uma virada histórica do comércio global, o México ultrapassou oficialmente a China para se tornar o maior parceiro comercial dos Estados Unidos. Esse salto industrial é movido pelo nearshoring: a transferência em massa de fábricas e linhas de montagem da Ásia para o território vizinho ao mercado norte-americano. Com mais de três mil e cem quilômetros de fronteira contínua, postos alfandegários como Laredo movimentam sozinhos mais de quatrocentos bilhões de dólares por ano com entregas expressas de caminhão em vinte e quatro horas. No sul, o trem do Corredor Interoceânico de Tehuantepec une o Oceano Pacífico ao Golfo do México por trilhos em menos de dez horas, criando uma rota alternativa sem eclusas para driblar a seca crônica no Canal do Panamá. O mapa da nova fábrica do continente. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Industrial Global', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into North America and the US-Mexico borderlands.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A NOVA FÁBRICA DA AMÉRICA"
Line 2 (intense crimson red #C8102E): "COMO O MÉXICO DESBANCOU A CHINA?"
Line 3 (pure white #F5F2EB): "DO NEARSHORING AO TREM INTEROCEÂNICO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Rio Grande / Rio Bravo border.
NO voice, NO speech, NO music. ONLY deep industrial hum and clean satellite whoosh SFX.` },
      { t: 'A Ultrapassagem Histórica Sobre a China', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global trade flow map comparing transpacific shipping routes from Shanghai vs. overland freight from Monterrey to Texas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Data overlay: "MÉXICO: 1º PARCEIRO COMERCIAL DOS EUA // > US$ 475 BILHÕES".
Text on screen: "A REVOLUÇÃO DO NEARSHORING // FIM DO MONOPÓLIO ASIÁTICO" in uppercase white Orbitron Bold.
Badge: "MULTINACIONAIS MIGRANDO DA ÁSIA PARA O BLOCO T-MEC" in gold (#F59E0B).
Camera: dynamic linear flyover from Mexico City to the northern industrial corridor.
NO voice, NO speech, NO music. ONLY industrial machine beat and digital counter tick SFX.` },
      { t: 'A Espinha Dorsal da Fronteira Norte (3.145 km)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the continuous 3.145 km border between Mexico and the United States.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
48 border crossing points highlighted with pulsing golden pins from Tijuana to Matamoros.
Text on screen: "3.145 KM DE FRONTEIRA // 35 MIL CAMINHÕES DE CARGA / DIA" in uppercase white Montserrat Bold.
Badge: "INTEGRAÇÃO JUST-IN-TIME AUTOMOTIVA E ELETRÔNICA" in intense crimson red (#C8102E).
Camera: high-speed linear tracking shot along the Rio Grande border fence.
NO voice, NO speech, NO music. ONLY heavy truck diesel engine hum and border gate clank SFX.` },
      { t: 'O Porto Mundial de Laredo: O Coração Logístico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite orthographic view of the World Trade International Bridge at Laredo (Texas) and Nuevo Laredo (Tamaulipas).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Massive glowing streams of freight trucks crossing the Rio Grande customs checkpoints.
Text on screen: "PORTO DE LAREDO // US$ 400 BILHÕES MOVIMENTADOS / ANO" in uppercase white Orbitron Bold.
Badge: "ENTREGAS EXPRESSAS DE MONTERREY A DALLAS EM 24 HORAS" in Bege Cartográfico (#F5F2EB).
Camera: slow technical push-in over intermodal logistics yards.
NO voice, NO speech, NO music. ONLY pneumatic air brake hiss and barcode scanner beep SFX.` },
      { t: 'O Istmo de Tehuantepec: A Menor Distância Entre Oceanos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic relief map of southern Mexico focusing on the narrow 300 km Isthmus of Tehuantepec.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Railway line Z glowing brightly in intense crimson (#C8102E) connecting Salina Cruz to Coatzacoalcos.
Text on screen: "ISTMO DE TEHUANTEPEC // 300 KM ENTRE PACÍFICO E ATLÂNTICO" in uppercase white Montserrat Bold.
Badge: "A MENOR DISTÂNCIA TERRESTRE INTEROCEÂNICA DO MÉXICO" in gold (#F59E0B).
Camera: smooth linear flyover across the Sierra Madre mountain saddle.
NO voice, NO speech, NO music. ONLY distant ocean breeze and train horn blast SFX.` },
      { t: 'O Trem Interoceânico e a Alternativa ao Panamá', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split screen map comparing the drought-stricken Panama Canal locks vs. the high-speed Tehuantepec rail landbridge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Container freight train moving at 80 km/h across the isthmus in 10 hours.
Text on screen: "CORREDOR INTEROCEÂNICO // A PONTE SECA SEM ECLUSA" in uppercase white Orbitron Bold.
Badge: "TRANSFERÊNCIA DE CONTÊINERES ENTRE OCEANOS EM 10 HORAS" in sage green (#A8C3A6).
Camera: dynamic tracking shot alongside the modernized double-stack train line.
NO voice, NO speech, NO music. ONLY locomotive steel wheel click-clack and track rumble SFX.` },
      { t: 'Os 10 Polos de Desenvolvimento Industrial no Sul', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map displaying the 10 industrial development clusters (PODEs) along the Tehuantepec corridor.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Industrial zones illuminated in amber (#F59E0B) with tax-free trade badges.
Text on screen: "10 POLOS INDUSTRIAIS // PETROQUÍMICA, CHIPS E FERTILIZANTES" in uppercase white Montserrat Bold.
Badge: "INCENTIVOS FISCAIS TOTAIS E LIGAÇÃO DIRETA COM A COSTA LESTE DOS EUA" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over Coatzacoalcos deepwater port.
NO voice, NO speech, NO music. ONLY industrial fan roar and construction welder spark SFX.` },
      { t: 'O Monopólio da Prata e o Lítio de Sonora', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological resource map of Mexico highlighting the Fresnillo silver mines in Zacatecas and the Sonora lithium deposits.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Silver extraction metric: "6.300 TONELADAS / ANO (1º LUGAR MUNDIAL)".
Text on screen: "PRATA E LÍTIO // OS MINERAIS DA TRANSIÇÃO ENERGÉTICA" in uppercase white Orbitron Bold.
Badge: "INSUMOS INDISPENSÁVEIS PARA PAINÉIS SOLARES E BATERIAS" in gold (#F59E0B).
Camera: dramatic flyover over the massive open-pit mine of Cananea.
NO voice, NO speech, NO music. ONLY rock drill rumble and heavy haul truck engine SFX.` },
      { t: 'O Dilema da Dependência de 80% e os Desafios Estruturais', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infographic map showing Mexico's high export concentration: 80% destined to the US market.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Water scarcity alerts in the northern deserts and power grid transmission bottlenecks highlighted in yellow.
Text on screen: "DESAFIOS ESTRUTURAIS // ENERGIA, ÁGUA E SEGURANÇA" in uppercase white Montserrat Bold.
Badge: "O CUSTO LOGÍSTICO DAS ESCOLTAS ARMADAS NAS RODOVIAS" in intense crimson red (#C8102E).
Camera: slow cinematic ascent over Monterrey manufacturing valley.
NO voice, NO speech, NO music. ONLY high-voltage power hum and wind gust SFX.` },
      { t: 'Encerramento e o Futuro da Manufatura Continental', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Mexico's 1,96 million km² territory integrated into the North American supply chain.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders outlined in Bege Cartográfico (#F5F2EB) with green, white, and red national flag texture.
Text on screen: "O NOVO GIGANTE INDUSTRIAL DA AMÉRICA DO NORTE" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: majestic slow ascent into planetary orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 188: ESTREITO DE MESSINA
  {
    num: 188,
    titulo: 'Por Que a Itália Levou Mais de Um Século Para Tentar Construir a Maior Ponte Pênsil do Mundo no Estreito de Messina?',
    roteiro: `Por que a Itália levou mais de um século para tentar construir a maior ponte pênsil do mundo no Estreito de Messina? Separando a Calábria da ilha da Sicília por pouco mais de três quilômetros, o Estreito de Messina abriga correntes marinhas violentas de nove nós que inspiraram os mitos clássicos de Cila e Caríbdis. Desde a unificação italiana em mil oitocentos e sessenta e um, Roma debate a construção de uma ponte monumental. O projeto atual prevê um vão pênsil suspenso de três mil e trezentos metros sem nenhum pilar na água, superando em mais de um quilômetro o recorde mundial da Ponte Canakkale na Turquia. Mas o maior desafio não é o vento ou o mar: o estreito repousa sobre uma falha tectônica ativa onde um terremoto catastrófico de sete vírgula um graus matou mais de cem mil pessoas em mil novecentos e oito, exigindo torres de quatrocentos metros capazes de resistir a choques tectônicos extremos. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Mitológico do Estreito', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the central Mediterranean and the toe of Italy's boot.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O DESAFIO DE CILA E CARÍBDIS"
Line 2 (intense crimson red #C8102E): "A MAIOR PONTE PÊNSIL DO MUNDO"
Line 3 (pure white #F5F2EB): "POR QUE MESSINA ESPEROU MAIS DE UM SÉCULO?"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Strait of Messina.
NO voice, NO speech, NO music. ONLY deep oceanic rumble and clean satellite whoosh SFX.` },
      { t: 'A Fúria das Marés e os Redemoinhos de Messina', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Oceanographic hydrodynamics simulation map showing the colliding tidal currents of the Tyrrhenian and Ionian seas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Violent marine currents accelerated to 9 knots (17 km/h) swirling between Scilla cliffs and Punta del Faro.
Text on screen: "CORRENTES DE 9 NÓS // O ENCONTRO DE DOIS MARES" in uppercase white Orbitron Bold.
Badge: "OS TEMIDOS MONSTROS MARINHOS DA ODISSEIA DE HOMERO" in intense crimson red (#C8102E).
Camera: dynamic linear flyover above churning marine whirlpools.
NO voice, NO speech, NO music. ONLY sea spray roar and wind howling SFX.` },
      { t: 'O Gargalo das Balsas Ferroviárias (Traghetti)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of passenger ferries and Trenitalia train-ferries crossing between Villa San Giovanni and Messina port.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crossing distance metric: "3,1 KM // TEMPO DE TRAVESSIA: ATÉ 2 HORAS".
Text on screen: "O ISOLAMENTO DA SICÍLIA // 5 MILHÕES DE HABITANTES" in uppercase white Montserrat Bold.
Badge: "TRENS DESMONTADOS EM VAGÕES PARA EMBARQUE EM BALSAS" in gold (#F59E0B).
Camera: technical orthographic push-in over the ferry terminal slips.
NO voice, NO speech, NO music. ONLY ship bell chime and train metal coupler clank SFX.` },
      { t: 'Cem Anos de Promessas Políticas na Itália', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical archive montage map showing engineering drawings from 1866, Mussolini's 1930s plans, and Berlusconi's 2000s models.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Canceled project markers turning into the approved 2024 executive project.
Text on screen: "160 ANOS DE DEBATES // DE GARIBALDI AO GOVERNO MELONI" in uppercase white Orbitron Bold.
Badge: "PROJETO REATIVADO COM ORÇAMENTO DE 13,5 BILHÕES DE EUROS" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic flyover across the 3 km strait.
NO voice, NO speech, NO music. ONLY typewriter keys clatter and parliamentary gavel tap SFX.` },
      { t: 'O Vão Suspenso Recorde de 3.300 Metros', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Architectural 3D wireframe render of the Messina suspension bridge superimposed on satellite topography.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Central span dimension: "3.300 METROS SEM NENHUM PILAR NA ÁGUA".
Text on screen: "VÃO LIVRE DE 3,3 KM // RECORDE MUNDIAL ABSOLUTO" in uppercase white Montserrat Bold.
Badge: "60% MAIOR QUE A PONTE CANAKKALE DA TURQUIA" in gold (#F59E0B).
Camera: dramatic low-angle flight alongside the suspended roadway.
NO voice, NO speech, NO music. ONLY bridge cable tension creak and wind gust SFX.` },
      { t: 'As Torres Gigantescas de 399 Metros de Altura', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D vertical perspective comparison showing the bridge's 399-meter steel towers next to the Eiffel Tower (330m).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Twin towers anchored on bedrock in Calabria and Sicily.
Text on screen: "TORRES DE 399 METROS // MAIS ALTAS QUE A TORRE EIFFEL" in uppercase white Orbitron Bold.
Badge: "TABULEIRO AERODINÂMICO RESISTENTE A VENTOS DE 300 KM/H" in intense crimson red (#C8102E).
Camera: rapid vertical crane shot rising from sea level to the tower top.
NO voice, NO speech, NO music. ONLY high-altitude wind whistle and digital telemetry click SFX.` },
      { t: 'A Ameaça Tectônica: O Terremoto de 1908', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical seismological heatmap showing the fault lines beneath the Strait of Messina.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Epicenter marker pulsing in intense crimson red: "TERREMOTO DE 1908 // MAGNITUDE 7.1 // 100 MIL MORTOS".
Text on screen: "A FALHA SÍSMICA DE MESSINA // O FANTASMA DE 1908" in uppercase white Montserrat Bold.
Badge: "DERIVA TECTÔNICA: SICÍLIA SE AFASTA 1,2 MM POR ANO DA CALÁBRIA" in intense crimson red (#C8102E).
Camera: dramatic ground-level shake effect fading into structural engineering grid.
NO voice, NO speech, NO music. ONLY deep subterranean seismic rumble and stone rumble SFX.` },
      { t: 'Engenharia Antissísmica de 7,5 Graus Richter', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Technical simulation of the bridge's flexible expansion joints and hydraulic dampers absorbing ground motion.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Seismic buffer capacity metric: "DESLOCAMENTO ABSORVIDO: ATÉ 5 METROS".
Text on screen: "ENGENHARIA EXTREMA // RESISTÊNCIA A SISMOS DE 7.5 GRAUS" in uppercase white Orbitron Bold.
Badge: "TRILHOS DE ALTA VELOCIDADE COM JUNTAS TELESCÓPICAS" in sage green (#A8C3A6).
Camera: technical orthographic push-in on the massive concrete anchor block.
NO voice, NO speech, NO music. ONLY hydraulic piston hiss and metallic lock click SFX.` },
      { t: 'Integração Europeia vs. Riscos da Máfia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Transportation corridor map of the TEN-T Scandinavian-Mediterranean Corridor linking Palermo to Berlin.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Frecciarossa high-speed rail line connecting Sicily to Rome in 4 hours.
Text on screen: "CORREDOR TRANSEUROPEU // PALERMO-ROMA-BERLIM" in uppercase white Montserrat Bold.
Badge: "VIGILÂNCIA RIGOROSA CONTRA A 'NDRANGHETA E COSA NOSTRA" in white (#F5F2EB).
Camera: smooth orbital tracking shot over the whole strait.
NO voice, NO speech, NO music. ONLY high-speed train whoosh and modern transit chime SFX.` },
      { t: 'Encerramento e o Marco da Engenharia Europeia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic sunset 4K satellite view of the Strait of Messina with the illuminated 3.300-meter bridge span.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Roadway and railway illuminated in radiant gold (#F59E0B) uniting Sicily and Calabria.
Text on screen: "A MAIOR OBRA DE ENGENHARIA DO SÉCULO XXI NA EUROPA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow cinematic pull-back into planetary orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 189: RIO AMUR
  {
    num: 189,
    titulo: 'Como a Fronteira Fluvial do Rio Amur Separa Duas Cidades Gêmeas da Rússia e da China a Menos de Um Quilômetro?',
    roteiro: `Como a fronteira fluvial do rio Amur separa duas cidades gêmeas da Rússia e da China a menos de um quilômetro? No extremo leste da Sibéria russa, a cidade de Blagoveshchensk encara os arranha-céus iluminados da metrópole chinesa de Heihe através de apenas oitocentos metros de correnteza. O rio Amur foi fixado como fronteira pelo Tratado de Aigun de mil oitocentos e cinquenta e oito, quando a Rússia czarista forçou a dinastia Qing a ceder seiscentos mil quilômetros quadrados de terras. Durante a Guerra Fria, em mil novecentos e sessenta e nove, tropas soviéticas e chinesas travaram combates mortais com tanques e artilharia na ilha de Zhenbao, quase deflagrando uma guerra nuclear. Hoje, o cenário inverteu-se: a nova ponte internacional de Kanikurgan e o primeiro teleférico transfronteiriço do mundo unem as duas margens, transformando o rio congelado na principal rota de sobrevivência e escoamento de recursos da Rússia para a Ásia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Fluvial Transfronteiriço', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into Northeast Asia and the frozen Amur River basin.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FRONTEIRA DO DRAGÃO NEGRO"
Line 2 (intense crimson red #C8102E): "DUAS CIDADES A 800 METROS DE DISTÂNCIA"
Line 3 (pure white #F5F2EB): "ONDE A RÚSSIA E A CHINA SE ENCARAM"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the confluence of the Amur and Zeya rivers.
NO voice, NO speech, NO music. ONLY deep icy wind rumble and clean satellite whoosh SFX.` },
      { t: 'Duas Margens, Dois Mundos: Blagoveshchensk vs. Heihe', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming down to 800 meters distance showing Blagoveshchensk (north bank, Russia) and Heihe (south bank, China).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Visual contrast: Russian low-rise classical architecture vs. Chinese futuristic high-rise neon skyline.
Text on screen: "BLAGOVESHCHENSK E HEIHE // 800 METROS DE ÁGUA" in uppercase white Orbitron Bold.
Badge: "220 MIL RUSSOS ENCARANDO O GIGANTE INDUSTRIAL DA MANCHÚRIA" in intense crimson red (#C8102E).
Camera: slow cinematic flyover tracking across the river borderline.
NO voice, NO speech, NO music. ONLY river current flow and distant city bells echo SFX.` },
      { t: 'O Tratado de Aigun e a Expansão Czarista (1858)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map of 1858 displaying the territory surrendered by the Qing Dynasty to the Russian Empire.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
600.000 km² territory north of the Amur River transitioning into imperial Russian green.
Text on screen: "TRATADO DE AIGUN (1858) // O CONDE MURAVYOV" in uppercase white Montserrat Bold.
Badge: "CESSÃO DE 600 MIL KM² NO PERÍODO DAS GUERRAS DO ÓPIO" in gold (#F59E0B).
Camera: technical orthographic push-in over Aigun historic fortress.
NO voice, NO speech, NO music. ONLY quill pen scratch and antique cannon blast echo SFX.` },
      { t: 'A Convenção de Pequim e a Fundação de Vladivostok (1860)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cartographic expansion showing Russia acquiring the coastal Primorsky region and founding Vladivostok on the Sea of Japan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ussuri river border line drawn in crisp Bege Cartográfico (#F5F2EB).
Text on screen: "CONVENÇÃO DE PEQUIM (1860) // SAÍDA PARA O PACÍFICO" in uppercase white Orbitron Bold.
Badge: "A PERDA CHINESA DA COSTA DO MAR DO JAPÃO" in intense crimson red (#C8102E).
Camera: dynamic linear flyover from the Amur mouth down to Golden Horn Bay in Vladivostok.
NO voice, NO speech, NO music. ONLY naval foghorn and ocean wave surge SFX.` },
      { t: 'O Conflito de Zhenbao de 1969 e a Beira da Guerra Nuclear', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Declassified military map of Zhenbao (Damansky) Island on the Ussuri river with artillery strike zones.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Combat positions glowing red with Soviet T-62 tanks and Chinese infantry vectors.
Text on screen: "BATALHA DE ZHENBAO (1969) // À BEIRA DA GUERRA NUCLEAR" in uppercase white Montserrat Bold.
Badge: "CENTENAS DE MORTOS E AMEÇA ATÔMICA PREVENTIVA DE MOSCOU" in intense crimson red (#C8102E).
Camera: rapid tactical zoom into the frozen river island.
NO voice, NO speech, NO music. ONLY machine gun bursts, artillery explosions, and military radio static SFX.` },
      { t: 'O Inverno Siberiano e a Fronteira Sobre o Gelo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Amur River completely frozen white between November and April at -40°C.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Temporary ice highway with heavy trucks driving over 2-meter thick river ice.
Text on screen: "INVERNO A -40°C // A FRONTEIRA CONGELADA" in uppercase white Orbitron Bold.
Badge: "CAMINHÕES DE 40 TONELADAS CRUZANDO SOBRE O RIO DE GELO" in white (#F5F2EB).
Camera: low-altitude tracking shot skimming the frozen snowdrifts.
NO voice, NO speech, NO music. ONLY biting blizzard howling and ice cracking groan SFX.` },
      { t: 'A Nova Ponte Internacional de Kanikurgan (2022)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution 4K satellite view of the newly built 1.080-meter Amur River cable-stayed international road bridge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Continuous streams of cargo trucks passing customs terminals: "1.000 CAMINHÕES POR DIA".
Text on screen: "PONTE KANIKURGAN-HEIHE // A PRIMEIRA CONEXÃO FIXA" in uppercase white Montserrat Bold.
Badge: "FIM DE 160 ANOS DE DEPENDÊNCIA DE BALSAS E AEROBARCOS" in sage green (#A8C3A6).
Camera: slow cinematic flyover along the bridge pylons.
NO voice, NO speech, NO music. ONLY bridge expansion joint thud and heavy transport engine hum SFX.` },
      { t: 'O Primeiro Teleférico Internacional do Mundo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Architectural render of the cross-border passenger cableway suspended over the Amur river.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Large modern cabins gliding between Blagoveshchensk terminal and Heihe terminal.
Text on screen: "TELEFÉRICO INTERNACIONAL // RÚSSIA-CHINA EM 2,5 MINUTOS" in uppercase white Orbitron Bold.
Badge: "CABINES PARA 110 PASSAGEIROS VOANDO SOBRE A FRONTEIRA" in gold (#F59E0B).
Camera: technical orthographic push-in tracking a moving aerial cabin.
NO voice, NO speech, NO music. ONLY cable pulley mechanical hum and wind chime SFX.` },
      { t: 'A Geoeconomia da Virada para a Ásia: Gás e Recursos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Energy and trade corridor map showing the Power of Siberia pipeline crossing under the Amur river into China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Flow vectors of Russian gas, timber, and soy heading south vs. Chinese electronics and cars heading north.
Text on screen: "VIRADA PARA O ORIENTE // A ARTÉRIA DE SOBREVIVÊNCIA DE MOSCOU" in uppercase white Montserrat Bold.
Badge: "GASODUTO FORÇA DA SIBÉRIA BOMBEANDO 100 MILHÕES M³/DIA" in intense crimson red (#C8102E).
Camera: high-altitude satellite flyover tracing pipeline route.
NO voice, NO speech, NO music. ONLY high-pressure gas pipeline hiss and industrial hum SFX.` },
      { t: 'Encerramento e a Aliança Sem Limites', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the Amur River reflecting the sunset between Russia and China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borderline glowing softly with national flags of Russia and China bound cleanly inside each territory.
Text on screen: "A FRONTEIRA QUE UNIU DOIS IMPÉRIOS NA EURÁSIA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 190: ATOL DE SCARBOROUGH
  {
    num: 190,
    titulo: 'Por Que o Atol de Scarborough no Mar da China Meridional Tornou-se o Ponto de Atrito Mais Perigoso do Sudeste Asiático?',
    roteiro: `Por que o Atol de Scarborough no Mar da China Meridional tornou-se o ponto de atrito mais perigoso do Sudeste Asiático? Apenas duzentos e vinte quilômetros separam esse anel de recifes da ilha filipina de Luzon, posicionando-o bem dentro da Zona Econômica Exclusiva de Manila e a quase novecentos quilômetros da costa da China. Em dois mil e doze, navios da Guarda Costeira de Pequim ocuparam fisicamente o atol, bloqueando a entrada da lagoa com barreiras flutuantes e expulsando pescadores locais com jatos de água em alta pressão. Em dois mil e dezesseis, o Tribunal de Arbitragem de Haia declarou por unanimidade que a Linha das Nove Raias chinesa é ilegal sob o direito internacional. Para Pequim, Scarborough é a peça final do triângulo estratégico para dominar o espaço aeronaval do sudeste asiático; para Washington e Manila, qualquer ataque armado contra navios filipinos aciona o tratado de defesa mútua. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho do Ponto de Ignição Global', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the South China Sea and the Philippine Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O PONTO DE IGNIÇÃO GLOBAL"
Line 2 (intense crimson red #C8102E): "O ATOL DE SCARBOROUGH"
Line 3 (pure white #F5F2EB): "ONDE EUA E CHINA PODEM COLIDIR"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Scarborough Shoal coordinates (15°09'N, 117°45'E).
NO voice, NO speech, NO music. ONLY deep oceanic rumble and clean satellite whoosh SFX.` },
      { t: 'A Geografia do Atol Triangular e a Lagoa Rasa', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite Landsat view of the turquoise triangular coral atoll of Scarborough Shoal surrounded by 3.000-meter deep abyss.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coral rim perimeter: "46 KM DE EXTENSÃO // 150 KM² DE LAGOA INTERNA".
Text on screen: "ATOL DE SCARBOROUGH // BAJO DE MASINLOC" in uppercase white Orbitron Bold.
Badge: "REFÚGIO HISTÓRICO DE PESCADORES CONTRA TUFÕES" in gold (#F59E0B).
Camera: slow cinematic descent toward the lagoon entrance in the southeast.
NO voice, NO speech, NO music. ONLY ocean surf surge and tropical breeze SFX.` },
      { t: 'A Discrepância das Distâncias: 220 km vs. 900 km', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparative geodesic distance measurement map on satellite globe.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Green geodesic line to Zambales (Luzon, Philippines): "220 KM (DENTRO DA ZEE DE 200 NM)".
Red geodesic line to Hainan Island (China): "870 KM DE DISTÂNCIA".
Text on screen: "DENTRO DA ZEE FILIPINA // A 220 KM DE LUZON" in uppercase white Montserrat Bold.
Badge: "CHINA REIVINDICA ÁGUAS A QUASE MIL KM DE SUA COSTA" in intense crimson red (#C8102E).
Camera: technical orthographic pan from Manila to Hainan.
NO voice, NO speech, NO music. ONLY digital measurement beep and radar pulse SFX.` },
      { t: 'O Impasse Naval de 2012 e a Ocupação de Fato', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical naval map of the 2012 standoff between Philippine Navy frigate BRP Gregorio del Pilar and Chinese surveillance vessels.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chinese Coast Guard ships encircling the lagoon entrance with floating barriers.
Text on screen: "O IMPASSE DE 2012 // A OCUPAÇÃO CHINESA SEM TIROS" in uppercase white Orbitron Bold.
Badge: "PEQUIM VIOLA ACORDO DE RETIRADA E ASSUME CONTROLE FÍSICO" in intense crimson red (#C8102E).
Camera: rapid tactical zoom into the lagoon mouth.
NO voice, NO speech, NO music. ONLY naval radio chatter static and ship engine rumble SFX.` },
      { t: 'A Sentença Histórica da Corte de Haia (2016)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic animation map displaying the Permanent Court of Arbitration verdict in The Hague.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chinese 9-Dash Line fading away with a red "ILEGAL" cross, while Philippine EEZ lights up in green.
Text on screen: "CORTE DE HAIA (2016) // VITÓRIA HISTÓRICA DAS FILIPINAS" in uppercase white Montserrat Bold.
Badge: "LINHA DAS NOVE RAIAS DECLARADA SEM BASE JURÍDICA PELA ONU" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic flyover across the Spratly and Scarborough waters.
NO voice, NO speech, NO music. ONLY courtroom gavel strike and digital lock-on chime SFX.` },
      { t: 'O "Triângulo Estratégico" Militar de Pequim', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic military triangle diagram linking the Paracel Islands (Woody Island), the Spratly fortress islands (Fiery Cross), and Scarborough Shoal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Missile engagement radiuses and radar coverage envelopes overlapping the entire South China Sea.
Text on screen: "O TRIÂNGULO ESTRATÉGICO // DOMÍNIO AERONAVAL TOTAL" in uppercase white Orbitron Bold.
Badge: "UMA BASE MILITAR EM SCARBOROUGH FECHARIA O CERCO A MANILA" in intense crimson red (#C8102E).
Camera: grand orthographic zoom out showing the whole sea enclosed by the triangle.
NO voice, NO speech, NO music. ONLY tactical sonar ping and radar sweep hum SFX.` },
      { t: 'A Tática da Zona Cinzenta: Canhões de Água e Barreiras', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up operational map of Chinese Coast Guard vessel 3302 firing high-pressure water cannons against a Philippine wooden supply boat.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Floating barrier buoys blocking the shallow lagoon entrance.
Text on screen: "GUERRA DA ZONA CINZENTA // CANHÕES DE ÁGUA E BLOQUEIOS" in uppercase white Montserrat Bold.
Badge: "MILÍCIA MARÍTIMA DE PEQUIM EXPULSANDO PESCADORES CIVIS" in intense crimson red (#C8102E).
Camera: dynamic linear flyover above churning wake of patrol boats.
NO voice, NO speech, NO music. ONLY high-pressure water jet hiss and boat hull collision groan SFX.` },
      { t: 'A Estratégia de Transparência de Ferdinand Marcos Jr.', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map showing Philippine Coast Guard vessels escorted by international media camera crews.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Live broadcast icons beaming footage globally to expose illegal Chinese blockades.
Text on screen: "TRANSPARÊNCIA COMBATIVA // FILMAGENS AO VIVO NO MAR" in uppercase white Orbitron Bold.
Badge: "MANILA MOBILIZA A OPINIÃO PÚBLICA INTERNACIONAL" in gold (#F59E0B).
Camera: technical orthographic push-in on BRP Teresa Magbanua patrol ship.
NO voice, NO speech, NO music. ONLY camera shutter clicks and satellite data uplink telemetry SFX.` },
      { t: 'O Tratado de Defesa EUA-Filipinas e as 9 Bases EDCA', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Defense map of the Philippines highlighting the 9 military bases accessible to US forces under the EDCA pact.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Basa Air Base and Subic Bay highlighted facing Scarborough Shoal directly.
Text on screen: "TRATADO DE DEFESA DE 1951 // A LINHA VERMELHA DE WASHINGTON" in uppercase white Montserrat Bold.
Badge: "ATAQUE ARMADO A NAVIOS FILIPINOS ACIONA O EXÉRCITO DOS EUA" in intense crimson red (#C8102E).
Camera: fast satellite sweep from Subic Bay to Scarborough Shoal.
NO voice, NO speech, NO music. ONLY jet engine roar and military alert chime SFX.` },
      { t: 'Encerramento e o Ponto Mais Perigoso do Mundo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the isolated turquoise Scarborough Shoal glowing in the vast dark blue Pacific.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "O RECIFE ONDE A TERCEIRA GUERRA PODE COMEÇAR" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 191: MONT BLANC
  {
    num: 191,
    titulo: 'Por Que a França e a Itália Disputam o Cume Exato do Mont Blanc a Mais de Quatro Mil e Oitocentos Metros de Altitude?',
    roteiro: `Por que a França e a Itália disputam o cume exato do Mont Blanc a mais de quatro mil e oitocentos metros de altitude? No teto da Europa Ocidental, uma divergência cartográfica de mais de cento e sessenta anos divide duas potências da União Europeia. Nos mapas oficiais da França, o cume de quatro mil e oitocentos e oito metros pertence cem por cento ao departamento francês de Haute-Savoie. Já nos mapas militares da Itália, a linha de fronteira corta o cume exatamente ao meio, atribuindo a face sul à comuna de Courmayeur no Vale de Aosta. O litígio começou em mil oitocentos e sessenta e cinco, quando um capitão cartógrafo francês desenhou unilateralmente uma linha que absorveu todo o pico, contrariando o Tratado de Turim de mil oitocentos e sessenta que previa a divisão pela crista de águas. Hoje, com o aquecimento global derretendo a calota de gelo em mais de dois metros, a própria fronteira alpina está mudando de lugar no mapa. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho no Teto da Europa', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the snow-capped Alpine peaks of Western Europe.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A BATALHA DO TETO DA EUROPA"
Line 2 (intense crimson red #C8102E): "DE QUEM É O CUME DO MONT BLANC?"
Line 3 (pure white #F5F2EB): "FRANÇA E ITÁLIA EM DISPUTA A 4.808 METROS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the icy summit of Mont Blanc (45°49'57"N, 6°51'52"E).
NO voice, NO speech, NO music. ONLY deep glacial wind howl and clean satellite whoosh SFX.` },
      { t: 'A Divergência dos Mapas Oficiais: IGN vs. IGM', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split screen comparative cartography map showing the French IGN map vs. the Italian IGM military map.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Left: French border detouring south, leaving summit 100% in France.
Right: Italian border cutting cleanly through the summit dividing it 50/50.
Text on screen: "MAPAS DIVERGENTES // IGN FRANCÊS VS. IGM ITALIANO" in uppercase white Orbitron Bold.
Badge: "85 HECTARES DE GELO E ROCHA EM DISPUTA SECULAR" in gold (#F59E0B).
Camera: slow cinematic flyover over the icy knife-edge ridge of Bosses.
NO voice, NO speech, NO music. ONLY ice axe crunching snow and wind whistle SFX.` },
      { t: 'O Tratado de Turim de 1860 e a Cessão da Saboia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map of 1860 showing the Kingdom of Sardinia-Piedmont ceding Nice and Savoy to Napoleon III of France.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Savoy territory transitioning into French imperial blue with treaty seal.
Text on screen: "TRATADO DE TURIM (1860) // A CESSÃO DA SABOIA" in uppercase white Montserrat Bold.
Badge: "NAPOLEÃO III E O CONDE DE CAVOUR DESENHAM A FRONTEIRA" in Bege Cartográfico (#F5F2EB).
Camera: technical orthographic push-in over Turin and Chambery.
NO voice, NO speech, NO music. ONLY antique treaty seal click and quill pen write SFX.` },
      { t: 'A Convenção de 1861 e a Divisória de Águas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Hydrographic 3D terrain simulation showing meltwater pathways from the Mont Blanc summit.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
North slope runoff flowing into French Rhone basin vs. South slope runoff flowing into Italian Po basin.
Text on screen: "CONVENÇÃO DE 1861 // O PRINCÍPIO DA CRISTA DE ÁGUAS" in uppercase white Orbitron Bold.
Badge: "A REGRA DE OURO QUE DIVIDE O CUME ENTRE DUAS BACIAS" in sage green (#A8C3A6).
Camera: dynamic linear flyover tracing water flow down both glaciated valleys.
NO voice, NO speech, NO music. ONLY glacier water trickle and mountain echo SFX.` },
      { t: 'A Canetada Unilateral do Capitão Mieulet (1865)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Archival overlay of Captain Jean-Joseph Mieulet's 1865 military topographic map.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A hand-drawn pen line bending around the summit and absorbing Dôme du Goûter into France.
Text on screen: "CAPITÃO MIEULET (1865) // A CANETADA UNILATERAL" in uppercase white Montserrat Bold.
Badge: "MAPA DO EXÉRCITO FRANCÊS NUNCA RATIFICADO PELA ITÁLIA" in intense crimson red (#C8102E).
Camera: slow macro zoom on the disputed summit contour lines.
NO voice, NO speech, NO music. ONLY drafting compass scratch and paper rustle SFX.` },
      { t: 'O Incidente do Refúgio Torino na Punta Helbronner (2015)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map locking onto Punta Helbronner (3.462m) and the Torino mountain refuge terminal of the Skyway cable car.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing red dispute zone where Chamonix officials padlocked the glacier access gates.
Text on screen: "INCIDENTE DE 2015 // A CRISE DO REFÚGIO TORINO" in uppercase white Orbitron Bold.
Badge: "PREFEITURA DE CHAMONIX TRANCANDO O ACESSO DOS ITALIANOS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on the Skyway Monte Bianco glass platform.
NO voice, NO speech, NO music. ONLY padlock click and high-altitude cable car hum SFX.` },
      { t: 'O Decreto Ambiental Francês e o Protesto de Roma (2020)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic map showing the French environmental protection zone (APHN) overlapping territory claimed by Valle d'Aosta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomatic protest note vector sent from Rome (Farnesina) to Paris (Quai d'Orsay).
Text on screen: "NOTA DIPLOMÁTICA (2020) // ROMA REJEITA O DECRETO FRANCÊS" in uppercase white Montserrat Bold.
Badge: "ITÁLIA AFIRMA QUE A FRANÇA NÃO PODE LEGISLAR SOBRE SOLO ITALIANO" in intense crimson red (#C8102E).
Camera: fast satellite sweep between Paris and Rome.
NO voice, NO speech, NO music. ONLY diplomatic teletype clack and alert tone SFX.` },
      { t: 'O Aquecimento Global e o Encolhimento do Cume de Gelo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Time-lapse 3D geodetic elevation scan of Mont Blanc's ice cap from 2021 to 2023.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Summit elevation drop: "4.807,81 M (2021) -> 4.805,59 M (2023) // -2,22 METROS".
Text on screen: "O CUME ENCOLHEU // PERDA DE 2 METROS EM 24 MESES" in uppercase white Orbitron Bold.
Badge: "A CALOTA DE GELO ESTÁ DERRETENDO E MUDANDO DE FORMA" in gold (#F59E0B).
Camera: rotating 360-degree drone flyaround of the summit ice dome.
NO voice, NO speech, NO music. ONLY high wind gusts and cracking serac ice SFX.` },
      { t: 'O Conceito de Fronteira Móvel nos Alpes', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Visual diagram showing the moving alpine border line shifting dynamically as glaciers melt.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Proposed international peace park condominium zone glowing in sage green (#A8C3A6).
Text on screen: "FRONTEIRA MÓVEL // A DIPLOMACIA ADAPTATIVA DO CLIMA" in uppercase white Montserrat Bold.
Badge: "PROPOSTA DE PARQUE DE PAZ TRANSFRONTEIRIÇO COMPARTILHADO" in white (#F5F2EB).
Camera: slow cinematic flyover over the Bossons and Miage glaciers.
NO voice, NO speech, NO music. ONLY digital line morph chime and glacier melt water flow SFX.` },
      { t: 'Encerramento e a Majestade do Pico Disputado', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite sunset view of the Mont Blanc / Monte Bianco massif towering over Chamonix and Courmayeur.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Twin national flags of France and Italy gracefully bordering each flank of the peak.
Text on screen: "O CUME MAIS ALTO DA EUROPA DIVIDIDO PELA HISTÓRIA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: majestic slow ascent into high planetary orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 192: RANKING MAIORES LINHAS DE COSTA
  {
    num: 192,
    titulo: 'Quais São os Dez Países com as Maiores Linhas de Costa do Planeta Onde Mares Gigantescos Contornam Continentes e Ilhas?',
    roteiro: `Quais são os dez países com as maiores linhas de costa do planeta onde mares gigantescos contornam continentes e ilhas? Medir o litoral de um país esbarra no Paradoxo de Mandelbrot: quanto menor a régua do cartógrafo, mais a costa se expande rumo ao infinito. Sob métricas oficiais internacionais, o Canadá lidera com folga absoluta, somando duzentos e quarenta e três mil quilômetros de costa recortada por dezenas de milhares de ilhas árticas. A Noruega ocupa o segundo lugar com mais de cem mil quilômetros impulsionados por seus fiordes profundos e arquipélagos, seguida pelas praias tropicais das dezessete mil ilhas da Indonésia. A lista dos dez gigantes costeiros reúne ainda a Groenlândia, a Rússia banhada por doze mares, as Filipinas com seus milhares de recifes vulcânicos, o Japão, a Austrália, os Estados Unidos com o litoral recortado do Alasca e a Nova Zelândia. O mapa das nações que comandam os oceanos da Terra. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico do Litoral', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into world coastlines with glowing blue tidal edges.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O PARADOXO DOS MARES"
Line 2 (intense crimson red #C8102E): "AS DEZ MAIORES LINHAS DE COSTA DA TERRA"
Line 3 (pure white #F5F2EB): "ONDE OCEANOS CONTORNAM CONTINENTES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Canadian Arctic archipelago.
NO voice, NO speech, NO music. ONLY deep oceanic rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Canadá (243.042 km de Litoral)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto Canada's immense coastline across the Atlantic, Pacific, and Arctic oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastline outlined in radiant gold (#F59E0B): "1º LUGAR // 243.042 KM".
Text on screen: "CANADÁ // O MAIOR LITORAL DO PLANETA" in uppercase white Orbitron Bold.
Badge: "SUFICIENTE PARA DAR 6 VOLTAS COMPLETAS NA LINHA DO EQUADOR" in intense crimson red (#C8102E).
Camera: slow cinematic descent over Baffin Island and Ellesmere fjords.
NO voice, NO speech, NO music. ONLY arctic ocean wind and iceberg calving crack SFX.` },
      { t: '2º Lugar: Noruega (100.915 km de Fiordes)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of Norway's jagged coastline and the Svalbard archipelago.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastline in electric blue (#38BDF8): "2º LUGAR // 100.915 KM".
Text on screen: "NORUEGA // O IMPÉRIO DOS FIORDES E ILHOTAS" in uppercase white Montserrat Bold.
Badge: "MAIS DE 239 MIL ILHAS E FIORDES PROFUNDOS ESCULPIDOS PELO GELO" in sage green (#A8C3A6).
Camera: dynamic linear flyover above Geirangerfjord and Lofoten islands.
NO voice, NO speech, NO music. ONLY seabird cry and deep ocean surf boom SFX.` },
      { t: '3º Lugar: Indonésia (54.716 km Tropicais)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Indonesia's equatorial island chain between the Indian and Pacific oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island shores in Bege Cartográfico (#F5F2EB): "3º LUGAR // 54.716 KM".
Text on screen: "INDONÉSIA // O MAIOR ARQUIPÉLAGO DO MUNDO" in uppercase white Orbitron Bold.
Badge: "17.508 ILHAS COM A MAIOR BIODIVERSIDADE MARINHA DA TERRA" in gold (#F59E0B).
Camera: technical orthographic push-in over Raja Ampat coral atolls.
NO voice, NO speech, NO music. ONLY tropical surf wave lap and coastal wind SFX.` },
      { t: '4º e 5º Lugares: Groenlândia (44.087 km) e Rússia (37.653 km)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Greenland's glacial coastlines and the immense Russian Arctic and Pacific shores.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastlines highlighted with distance metrics.
Text on screen: "GROENLÂNDIA E RÚSSIA // AS COSTAS GELADAS DO NORTE" in uppercase white Montserrat Bold.
Badge: "A RÚSSIA É BANHADA POR 12 MARES E 3 OCEANOS" in intense crimson red (#C8102E).
Camera: slow cinematic flyover across Kamchatka volcanic coastline and Disko Bay.
NO voice, NO speech, NO music. ONLY pack ice groan and arctic blizzard howl SFX.` },
      { t: '6º Lugar: Filipinas (36.289 km de Praias e Recifes)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Philippine archipelago comprising 7.641 islands in the Western Pacific.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastline highlighted in vibrant amber (#F59E0B): "6º LUGAR // 36.289 KM".
Text on screen: "FILIPINAS // O LABIRINTO DE ILHAS VULCÂNICAS" in uppercase white Orbitron Bold.
Badge: "POPULAÇÃO HIPERDEPENDENTE DA PESCA E BALSAS COSTEIRAS" in white (#F5F2EB).
Camera: technical orthographic push-in over Palawan island reef edges.
NO voice, NO speech, NO music. ONLY ocean swell surge and seabird flock call SFX.` },
      { t: '7º e 8º Lugares: Japão (29.751 km) e Austrália (25.760 km)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite map showing Japan's mountain shores and Australia's continent-island perimeter.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastlines outlined in gold and cyan.
Text on screen: "JAPÃO E AUSTRÁLIA // ARCOS VULCÂNICOS E GRANDES BARREIRAS" in uppercase white Montserrat Bold.
Badge: "AUSTRÁLIA CONCENTRA 85% DA POPULAÇÃO A MENOS DE 50 KM DA COSTA" in sage green (#A8C3A6).
Camera: low-altitude tracking shot over Great Barrier Reef and Tokyo Bay.
NO voice, NO speech, NO music. ONLY coral reef water surge and harbor beacon chime SFX.` },
      { t: '9º e 10º Lugares: Estados Unidos (19.924 km) e Nova Zelândia (15.134 km)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the United States (highlighting Alaska's jagged fjords) and New Zealand's North and South islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Alaska coastline highlighted: "RESPONDE POR MAIS DE METADE DA COSTA DOS EUA".
Text on screen: "EUA E NOVA ZELÂNDIA // O ALASCA E OS MARES DO SUL" in uppercase white Orbitron Bold.
Badge: "O BRASIL OCUPA O 16º LUGAR MUNDIAL COM 7.491 KM" in white (#F5F2EB).
Camera: technical orthographic push-in over Kenai Peninsula and Milford Sound.
NO voice, NO speech, NO music. ONLY ocean waves crashing against sea cliffs SFX.` },
      { t: 'O Paradoxo Fractal de Mandelbrot Explicado', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic animation illustrating Mandelbrot's Coastline Paradox with a shrinking measuring ruler on Britain and Norway.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ruler shrinking from 100 km to 1 km while the measured perimeter multiplies toward infinity.
Text on screen: "O PARADOXO DE MANDELBROT // A GEOMETRIA FRACTAL" in uppercase white Montserrat Bold.
Badge: "QUANTO MENOR A RÉGUA, MAIOR É O LITORAL MEDIDO" in gold (#F59E0B).
Camera: rapid progressive zoom into a single rocky cove with breaking waves.
NO voice, NO speech, NO music. ONLY digital measurement tick and mathematical frequency sweep SFX.` },
      { t: 'Encerramento e as Nações que Dominam os Mares', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of planet Earth highlighting the Top 10 coastline nations glowing in radiant blue and gold.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS DEZ POTÊNCIAS QUE COMANDAM OS OCEANOS DA TERRA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 193: RANKING MAIORES MALHAS FERROVIÁRIAS
  {
    num: 193,
    titulo: 'Quais São as Dez Maiores Malhas Ferroviárias do Mundo Onde Centenas de Milhares de Quilômetros de Trilhos Movem Continentes?',
    roteiro: `Quais são as dez maiores malhas ferroviárias do mundo onde centenas de milhares de quilômetros de trilhos movem continentes? Longe de ser coisa do passado, a ferrovia é o meio de transporte mais eficiente e barato para movimentar milhões de toneladas de carga e bilhões de pessoas. Os Estados Unidos lideram o planeta com duzentos e cinquenta mil quilômetros de trilhos dedicados quase exclusivamente a trens de carga pesada com contêineres empilhados em dois andares. A China ocupa o segundo lugar com mais de cento e cinquenta e cinco mil quilômetros, ostentando a maior rede de trens-bala da Terra com mais de quarenta e cinco mil quilômetros de linhas de alta velocidade. A Rússia aparece em terceiro lugar com a mítica Ferrovia Transiberiana de mais de nove mil quilômetros cruzando a Sibéria, seguida pela Índia que transporta vinte e quatro milhões de passageiros por dia, Canadá, Alemanha, Austrália, Argentina, Brasil e França. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho da Revolução dos Trilhos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into continental rail networks glowing like golden arteries across continents.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O IMPÉRIO DOS TRILHOS"
Line 2 (intense crimson red #C8102E): "AS DEZ MAIORES MALHAS FERROVIÁRIAS DO MUNDO"
Line 3 (pure white #F5F2EB): "COMO TRENS GIGANTESCOS MOVEM CONTINENTES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the North American rail heartland in Chicago.
NO voice, NO speech, NO music. ONLY deep steel rail rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Estados Unidos (250.000 km de Cargas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of the United States showing the 250.000 km freight rail network operated by Class 1 giants.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Network outlined in radiant gold (#F59E0B): "1º LUGAR // 250.000 KM".
Text on screen: "ESTADOS UNIDOS // O GIGANTE DAS CARGAS PESADAS" in uppercase white Orbitron Bold.
Badge: "TRENS DE 4 KM COM CONTÊINERES DUPLOS (DOUBLE-STACK)" in intense crimson red (#C8102E).
Camera: slow cinematic descent over Tehachapi Loop or Bailey Yard in Nebraska.
NO voice, NO speech, NO music. ONLY heavy diesel locomotive roar and train horn blast SFX.` },
      { t: '2º Lugar: China (155.000 km e Império dos Trens-Bala)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of China's nationwide rail network with high-speed lines glowing in electric blue (#38BDF8).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-speed metric: "> 45.000 KM DE TREM-BALA (70% DO MUNDO)".
Text on screen: "CHINA // A REVOLUÇÃO DA ALTA VELOCIDADE" in uppercase white Montserrat Bold.
Badge: "TRENS FUXING A 350 KM/H CONECTANDO TODAS AS MEGACIDADES" in gold (#F59E0B).
Camera: dynamic linear flyover above Shanghai-Beijing high-speed viaduct.
NO voice, NO speech, NO music. ONLY bullet train electric whoosh and modern transit chime SFX.` },
      { t: '3º Lugar: Rússia (87.000 km e a Transiberiana)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental map of Russia tracing the Trans-Siberian Railway from Moscow to Vladivostok across 11 time zones.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Continuous rail line in Bege Cartográfico (#F5F2EB): "TRANSIBERIANA // 9.289 KM ININTERRUPTOS".
Text on screen: "RÚSSIA // A ESPINHA DORSAL DA SIBÉRIA" in uppercase white Orbitron Bold.
Badge: "A LINHA FÉRREA MAIS LONGA DA HISTÓRIA DA TERRA" in intense crimson red (#C8102E).
Camera: technical orthographic push-in along Lake Baikal mountain curve.
NO voice, NO speech, NO music. ONLY steel wheel rhythmic click-clack and locomotive whistle SFX.` },
      { t: '4º Lugar: Índia (68.000 km e 24 Milhões de Passageiros/Dia)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Indian Railways network spanning the entire subcontinent from the Himalayas to Kanyakumari.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Daily passenger metric: "24 MILHÕES DE PASSAGEIROS POR DIA".
Text on screen: "ÍNDIA // O FORMIGUEIRO HUMANO SOBRE TRILHOS" in uppercase white Montserrat Bold.
Badge: "UMA DAS MAIORES EMPREGADORAS DO PLANETA COM 1,2 MILHÃO DE TRABALHADORES" in gold (#F59E0B).
Camera: slow cinematic flyover over Chhatrapati Shivaji Terminus in Mumbai.
NO voice, NO speech, NO music. ONLY bustling station crowd hum and train whistle chime SFX.` },
      { t: '5º Lugar: Canadá (48.000 km e a Conexão CPKC)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map showing Canadian transcontinental rail lines crossing the Rocky Mountains and prairies.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trilateral network highlighted: "CPKC // CANADÁ, EUA E MÉXICO INTEGRADOS".
Text on screen: "CANADÁ // O CORREDOR TRANSCONTINENTAL" in uppercase white Orbitron Bold.
Badge: "A PRIMEIRA FERROVIA QUE UNE TRÊS PAÍSES DA AMÉRICA DO NORTE" in sage green (#A8C3A6).
Camera: technical orthographic push-in over Kicking Horse Pass spiral tunnels.
NO voice, NO speech, NO music. ONLY mountain wind echo and heavy freight train rumble SFX.` },
      { t: '6º e 7º Lugares: Alemanha (38.000 km) e Austrália (36.000 km)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Germany's dense ICE network in Central Europe and Australia's Pilbara heavy ore lines.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pilbara metric: "TRENS ROBÓTICOS AUTÔNOMOS DE 40 MIL TONELADAS".
Text on screen: "ALEMANHA E AUSTRÁLIA // PRECISÃO EUROPEIA E MINÉRIO PESADO" in uppercase white Montserrat Bold.
Badge: "A MAIOR DENSIDADE DA EUROPA E OS TRENS MAIS PESADOS DO DESERTO" in intense crimson red (#C8102E).
Camera: dynamic linear flyover above Frankfurt rail hub and Pilbara red dirt tracks.
NO voice, NO speech, NO music. ONLY electric train acceleration whine and ore car clatter SFX.` },
      { t: '8º, 9º e 10º Lugares: Argentina, Brasil e França', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Multi-region map showing Argentina (34.000 km), Brazil (30.000 km), and France (29.000 km).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Brazil highlight: Estrada de Ferro Carajás and Rumo agro-rail corridors.
France highlight: Pioneering TGV network connecting Paris to Lyon.
Text on screen: "ARGENTINA, BRASIL E FRANÇA // PAMPA, SOJA E TGV" in uppercase white Orbitron Bold.
Badge: "BRASIL TRANSPORTA MILHÕES DE TONELADAS DE MINÉRIO E GRÃOS" in white (#F5F2EB).
Camera: technical orthographic push-in over Carajás iron train and French TGV track.
NO voice, NO speech, NO music. ONLY high-speed TGV swoosh and ore train clatter SFX.` },
      { t: 'A Revolução Ecológica: Por Que o Trem Vence o Caminhão', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infographic animation comparing the carbon footprint and energy efficiency of rail vs. highway trucks.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Data metric: "1 TREM DE CARGA = 300 CAMINHÕES FORA DAS ESTRADAS // -75% EMISSÕES".
Text on screen: "O RENASCIMENTO VERDE // A EFICIÊNCIA ENERGÉTICA MÁXIMA" in uppercase white Montserrat Bold.
Badge: "O TRANSPORTE MAIS LIMPO E BARATO PARA A TRANSIÇÃO GLOBAL" in sage green (#A8C3A6).
Camera: rapid progressive zoom tracking a double-stack intermodal train.
NO voice, NO speech, NO music. ONLY digital data graph rise and clean train pass whoosh SFX.` },
      { t: 'Encerramento e as Artérias de Aço do Planeta', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the night globe showing railway networks glowing across North America, Europe, and Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS ARTÉRIAS DE AÇO QUE SUSTENTAM A ECONOMIA DA TERRA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into planetary orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  },

  // 194: RANKING MAIORES PRODUTORES DE ENERGIA RENOVÁVEL
  {
    num: 194,
    titulo: 'Quais São os Dez Maiores Produtores de Energia Renovável do Mundo Onde Ventos, Rios e Sol Redesenham a Matriz Global?',
    roteiro: `Quais são os dez maiores produtores de energia renovável do mundo onde ventos, rios e sol redesenham a matriz global? A transição energética tornou-se a corrida tecnológica e geopolítica mais valiosa do século vinte e um. O planeta já conta com mais de três mil e oitocentos gigawatts de capacidade renovável instalada. A China é o líder indiscutível com mais de mil quatrocentos e cinquenta gigawatts, operando a colossal hidrelétrica de Três Gargantas e cobrindo desertos com oceanos de painéis solares. Os Estados Unidos aparecem em segundo lugar com trezentos e noventa gigawatts impulsionados pelos ventos do Texas. O Brasil ocupa o terceiro lugar mundial e lidera com folga todo o G20 em qualidade: quase noventa por cento de toda a eletricidade consumida no país vem de fontes renováveis como Itaipu e os ventos do Nordeste. O Top 10 é completado por Alemanha, Índia, Espanha, Japão, França, Canadá e Itália. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho da Corrida Verde Global', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into world renewable energy installations glowing with solar, wind, and hydro clusters.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A REVOLUÇÃO VERDE GLOBAL"
Line 2 (intense crimson red #C8102E): "OS DEZ MAIORES PRODUTORES DE ENERGIA RENOVÁVEL"
Line 3 (pure white #F5F2EB): "SOL, VENTO E RIOS REDESENHANDO O MAPA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Three Gorges Dam and Gobi desert solar parks.
NO voice, NO speech, NO music. ONLY deep electrical hum and clean satellite whoosh SFX.` },
      { t: '1º Lugar: China (> 1.450 GW Instalados)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of China showing colossal renewable energy mega-bases in Xinjiang, Inner Mongolia, and the Yangtze River.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Capacity metric overlay in radiant gold (#F59E0B): "1º LUGAR // > 1.450 GW (38% DO MUNDO)".
Text on screen: "CHINA // O COLOSSO VERDE PLANETÁRIO" in uppercase white Orbitron Bold.
Badge: "MONOPÓLIO DE 80% DA CADEIA GLOBAL DE PAINÉIS SOLARES" in intense crimson red (#C8102E).
Camera: slow cinematic descent over Kubuqi desert solar ocean and Three Gorges dam.
NO voice, NO speech, NO music. ONLY water spillway roar and electrical grid resonance SFX.` },
      { t: '2º Lugar: Estados Unidos (~ 390 GW e a Lei IRA)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of the United States highlighting Texas wind turbine corridors and California Mojave desert solar farms.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Capacity metric in electric blue (#38BDF8): "2º LUGAR // ~ 390 GW".
Text on screen: "ESTADOS UNIDOS // O BOOM DOS VENTOS DO TEXAS" in uppercase white Montserrat Bold.
Badge: "INCENTIVOS FISCAIS BILIONÁRIOS DA LEI DE REDUÇÃO DA INFLAÇÃO" in gold (#F59E0B).
Camera: dynamic linear flyover above massive wind farm spinning across Texas plains.
NO voice, NO speech, NO music. ONLY rhythmic wind turbine blade swoosh and prairie breeze SFX.` },
      { t: '3º Lugar: Brasil (~ 195 GW e a Matriz Mais Limpa do G20)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of Brazil highlighting the Parana basin hydro plants and the wind-rich coastline of Northeast Brazil.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Clean energy metric in vibrant green (#A8C3A6): "> 88% DA ELETRICIDADE RENOVÁVEL".
Text on screen: "BRASIL // A MATRIZ MAIS LIMPA DO G20" in uppercase white Orbitron Bold.
Badge: "ITAIPU, BELO MONTE E A EXPLOSÃO EÓLICA E SOLAR NO NORDESTE" in Bege Cartográfico (#F5F2EB).
Camera: technical orthographic push-in over Itaipu Binacional dam spillway.
NO voice, NO speech, NO music. ONLY thunderous water cascade roar and wind chime SFX.` },
      { t: '4º e 5º Lugares: Alemanha (155 GW) e Índia (140 GW)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Germany's North Sea offshore wind farms and India's Bhadla Solar Park in Rajasthan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Capacity metrics highlighted with national flags.
Text on screen: "ALEMANHA E ÍNDIA // O MAR DO NORTE E O DESERTO DE THAR" in uppercase white Montserrat Bold.
Badge: "BHADLA SOLAR PARK COBRE 57 KM² GERANDO 2.245 MW" in gold (#F59E0B).
Camera: slow cinematic flyover over North Sea offshore turbines and Indian solar arrays.
NO voice, NO speech, NO music. ONLY ocean wave surge against turbine pylons and desert wind SFX.` },
      { t: '6º e 7º Lugares: Espanha (78 GW) e Japão (125 GW)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite map showing Spain's sunny Iberian plains and Japan's innovative hillside and floating solar arrays.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Clean capacity metrics in cyan and gold.
Text on screen: "ESPANHA E JAPÃO // O CELEIRO IBÉRICO E A SOLAR EM ENCOSTAS" in uppercase white Orbitron Bold.
Badge: "JAPÃO INSTALA PAINÉIS FLUTUANTES EM REPRESAS E MONTANHAS" in white (#F5F2EB).
Camera: technical orthographic push-in over Spanish solar towers and Japanese lake panels.
NO voice, NO speech, NO music. ONLY solar inverter hum and lake water ripple SFX.` },
      { t: '8º, 9º e 10º Lugares: França, Canadá e Itália', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Multi-region satellite view showing France (72 GW), Canada (105 GW hydro colossus), and Italy (68 GW geothermal pioneer).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Highlights: Hydro-Québec supplying New York; Larderello geothermal steam in Tuscany.
Text on screen: "FRANÇA, CANADÁ E ITÁLIA // HIDRO, GEOTERMIA E SOLAR" in uppercase white Montserrat Bold.
Badge: "CANADÁ É O 2º MAIOR PRODUTOR DE HIDROELETRICIDADE DA TERRA" in sage green (#A8C3A6).
Camera: dynamic linear flyover above Quebec boreal rivers and Tuscan steam towers.
NO voice, NO speech, NO music. ONLY geothermal steam hiss and river torrent roar SFX.` },
      { t: 'A Explosão Solar: O Custo que Despencou 90%', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infographic animation charting the historical cost curve of solar photovoltaic energy from 2010 to 2026.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cost graph line plunging: "-90% NO CUSTO POR WATT GERADO".
Text on screen: "A QUEDA DOS CUSTOS // A ELETRICIDADE MAIS BARATA DA HISTÓRIA" in uppercase white Orbitron Bold.
Badge: "SOLAR RESPONDE POR MAIS DE 70% DE TODA A NOVA ENERGIA DO PLANETA" in gold (#F59E0B).
Camera: rapid progressive zoom tracking sunlight reflecting off photovoltaic silicon cells.
NO voice, NO speech, NO music. ONLY digital data ping and clean energy frequency sweep SFX.` },
      { t: 'O Desafio do Armazenamento e Baterias de Escala', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D visualization map of utility-scale lithium-ion battery energy storage systems (BESS) buffering grids at night.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Storage capacity metric: "BATERIAS DE REDE ARMAZENANDO GIGAWATTS-HORA".
Text on screen: "O DESAFIO DAS BATERIAS // ARMAZENAR O SOL E O VENTO" in uppercase white Montserrat Bold.
Badge: "MINERAIS CRÍTICOS: A CORRIDA POR LÍTIO, COBRE E TERRAS RARAS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on modular battery containers.
NO voice, NO speech, NO music. ONLY cooling fan hum and electric transformer pulse SFX.` },
      { t: 'Encerramento e o Mapa da Nova Geopolítica da Energia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Earth illuminated by clean renewable energy networks across all five continents.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS DEZ POTÊNCIAS QUE LIDERAM O FUTURO ENERGÉTICO DA TERRA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.` }
    ]
  }
];

// 1. Gerar os arquivos de roteiro
console.log(`Gerando ${videos.length} arquivos de roteiro em ${roteirosDir}...`);
for (const v of videos) {
  const fileName = `Video ${v.num}.md`;
  const filePath = path.join(roteirosDir, fileName);

  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n`;
  md += `${v.roteiro}\n\n`;
  md += `---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  v.prompts.forEach((p, idx) => {
    md += `#### Prompt ${idx + 1} — ${p.t} (4s)\n`;
    md += '```text\n';
    md += p.desc.trim() + '\n';
    md += '```\n\n';
  });

  fs.writeFileSync(filePath, md, 'utf8');
  console.log(`✓ Gerado: ${fileName}`);
}

// 2. Atualizar o Índice.md
console.log(`Atualizando ${indicePath}...`);
let indiceContent = fs.readFileSync(indicePath, 'utf8');

// Atualizar a contagem total no texto (de 193 para 203)
indiceContent = indiceContent.replace(/Acervo oficial de \*\*\d+ roteiros de vídeo\*\*/, 'Acervo oficial de **203 roteiros de vídeo**');

// Construir as novas linhas da tabela
const novasLinhasTabela = videos.map(v => {
  return `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`;
}).join('\n');

// Inserir após a linha do Video 184
const video184Target = '| 184 | [[Projetos/VitaleGeo/Roteiros/Video 184|Video 184]] | Quais São os Dez Países Mais Densamente Povoados do Mundo Onde Milhares de Pessoas Disputam Cada Quilômetro Quadrado? |';

if (indiceContent.includes(video184Target)) {
  indiceContent = indiceContent.replace(video184Target, `${video184Target}\n${novasLinhasTabela}`);
  fs.writeFileSync(indicePath, indiceContent, 'utf8');
  console.log('✓ Índice.md atualizado com os vídeos 185 a 194!');
} else {
  console.warn('Aviso: linha do Video 184 não encontrada exatamente como esperado em Índice.md');
}
