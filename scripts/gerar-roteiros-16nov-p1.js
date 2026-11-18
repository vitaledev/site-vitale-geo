// Gerador de Roteiros de Vídeo (Videos 225 a 234)
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s cada)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 225,
    titulo: 'Como Três Séculos da Dinastia Qing e os Tratados Desiguais Desenharam as Fronteiras da China Moderna?',
    roteiro: 'Como Três Séculos da Dinastia Qing e os Tratados Desiguais Desenharam as Fronteiras da China Moderna? A China atual não herdou as fronteiras históricas da Grande Muralha, mas o gigantesco império dos conquistadores manchus da Dinastia Qing. A partir de 1644, os guerreiros Qing quase triplicaram o território do país, anexando a bacia de Xinjiang, o planalto do Tibete, a Mongólia e Taiwan. Em 1689, assinaram com os czares russos o Tratado de Nerchinsk, o primeiro acordo de fronteira demarcada da história chinesa. Contudo, as Guerras do Ópio e o chamado Século da Humilhação custaram caro: pelos tratados de Aigun e Pequim, o Império Russo tomou mais de um milhão de quilômetros quadrados na Sibéria e fundou Vladivostok. Após 1949, Mao Tsé-Tung restabeleceu as fronteiras imperiais e Pequim demarcou divisas com doze vizinhos, mantendo até hoje a tensão congelada no Himalaia com a Índia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O IMPÉRIO DOS CONQUISTADORES MANCHUS',
      l2: 'COMO A DINASTIA QING DESENHOU A CHINA',
      l3: 'DE NERCHINSK AO SÉCULO DA HUMILHAÇÃO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Formação Imperial Chinesa',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward East Asia, highlighting China's massive continental landmass illuminated in sharp geometric red and gold vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O IMPÉRIO DOS CONQUISTADORES MANCHUS"
Line 2 (intense crimson red #C8102E): "COMO A DINASTIA QING DESENHOU A CHINA"
Line 3 (pure white #F5F2EB): "DE NERCHINSK AO SÉCULO DA HUMILHAÇÃO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward Beijing and the Manchurian plains.
NO voice, NO speech, NO music. ONLY deep cinematic bass rumble and tactical radar ping SFX.`
      },
      {
        titulo: 'A Muralha Ming e a Conquista Manchu de 1644',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map focusing on the Great Wall of China and the Shanhai Pass.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ming Dynasty border shown in faded white, then expanding rapidly in crimson red as Qing horsemen cross Shanhai Pass and capture Beijing.
Text on screen: "1644 // A DINASTIA QING TRIPLICA O TERRITÓRIO CHINÊS" in uppercase white Orbitron Bold.
Badge: "CONQUISTA DE XINJIANG, TIBETE E MONGÓLIA" in intense crimson red (#C8102E).
Camera: high-altitude pull-back showing the empire expanding across 12 million km².
NO voice, NO speech, NO music. ONLY galloping cavalry wind and military drum cadence SFX.`
      },
      {
        titulo: 'O Tratado de Nerchinsk de 1689 no Rio Amur',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the Amur and Shilka river basins between China and Siberia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A glowing border line igniting along the Stanovoy Mountains following the Treaty of Nerchinsk signed by Emperor Kangxi.
Text on screen: "1689 // TRATADO DE NERCHINSK: A 1ª FRONTEIRA DEMARCADA" in uppercase white Montserrat Bold.
Badge: "COSSACOS RUSSOS CONTIDOS PELO IMPÉRIO QING" in sage green (#A8C3A6).
Camera: linear tracking shot flying over the frozen bend of the Amur River.
NO voice, NO speech, NO music. ONLY howling Siberian wind and quill signing parchment paper SFX.`
      },
      {
        titulo: 'As Dez Grandes Campanhas Militares de Qianlong',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite perspective of Central Asia focusing on the Tarim Basin and Dzungaria (Xinjiang).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red military campaign arrows pushing westward from Gansu into the Taklamakan Desert and Tianshan mountains.
Text on screen: "XINJIANG // 1,6 MILHÃO DE KM² ANEXADOS NA ÁSIA CENTRAL" in uppercase white Orbitron Bold.
Badge: "AS CAMPANHAS EXPANSIONISTAS DE QIANLONG" in gold (#F59E0B).
Camera: dynamic tilt shot over the snow-capped Pamir and Tianshan ranges.
NO voice, NO speech, NO music. ONLY mountain wind gusts and distant cannon fire echo SFX.`
      },
      {
        titulo: 'O Século da Humilhação e a Perda de Hong Kong',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Pearl River Delta and Hong Kong Island in 1842.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
British naval fleet silhouette in Victoria Harbour and Hong Kong Island highlighted in British colonial blue.
Text on screen: "1842 // TRATADO DE NANQUIM: O INÍCIO DOS TRATADOS DESIGUAIS" in uppercase white Montserrat Bold.
Badge: "CESSÃO PERPÉTUA DA ILHA DE HONG KONG" in intense crimson red (#C8102E).
Camera: smooth lateral pan from Guangzhou down to Victoria Peak.
NO voice, NO speech, NO music. ONLY ocean surf surge and naval artillery cannon roar SFX.`
      },
      {
        titulo: 'Tratado de Aigun e Convenção de Pequim (1858-1860)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of the Russian Far East, Amur River, and Primorsky Krai.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive slice of 1 million km² turning from Qing red to Russian green north of the Amur and east of the Ussuri.
Text on screen: "1860 // A RÚSSIA ANEXA 1.000.000 KM² E FUNDA VLADIVOSTOK" in uppercase white Orbitron Bold.
Badge: "PERDA HISTÓRICA DO ACESSO CHINÊS AO MAR DO JAPÃO" in intense crimson red (#C8102E).
Camera: linear tracking shot flying over Vladivostok Golden Horn bay.
NO voice, NO speech, NO music. ONLY heavy naval foghorn and ice cracking SFX.`
      },
      {
        titulo: 'A Queda Imperial de 1912 e a República Popular em 1949',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical split satellite transition: Forbidden City in Beijing in 1912 transitioning to Tiananmen Square in 1949.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders of the People's Republic of China solidifying in bold crimson vectors across 9,6 million km².
Text on screen: "1949 // MAO RESTAURA AS FRONTEIRAS IMPERIAIS QING" in uppercase white Montserrat Bold.
Badge: "9.596.960 KM² REUNIFICADOS SOB PEQUIM" in gold (#F59E0B).
Camera: slow cinematic pull-back revealing the modern continental borders.
NO voice, NO speech, NO music. ONLY radio static hum and massive flag flutter SFX.`
      },
      {
        titulo: 'A Pacificação com Doze Vizinhos Terrestres',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite overview of China's 22.457 km land perimeter highlighting borders with Russia, Mongolia, Kazakhstan, and Myanmar.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Twelve boundary segments lighting up in stable sage green (#A8C3A6) signifying ratified border treaties.
Text on screen: "12 DE 14 FRONTEIRAS TERRESTRES RESOLVIDAS POR TRATADOS" in uppercase white Orbitron Bold.
Badge: "ACORDO FINAL SINO-RUSSO NAS ILHAS DO AMUR EM 2004" in sage green (#A8C3A6).
Camera: clockwise orbital sweep around China's northern and western perimeter.
NO voice, NO speech, NO music. ONLY electronic scanner blip and border telemetry data chirp SFX.`
      },
      {
        titulo: 'O Impasse Congelado da Linha de Controle no Himalaia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on the Karakoram and Himalayan ridgeline: Aksai Chin and Arunachal Pradesh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A flashing red dotted line marking the 3.488 km Line of Actual Control (LAC) between Chinese and Indian army posts.
Text on screen: "A LINHA DE CONTROLE REAL // 3.488 KM DE TENSÃO NO HIMALAIA" in uppercase white Montserrat Bold.
Badge: "DISPUTA COM A ÍNDIA EM ARUNACHAL PRADESH E AKSAI CHIN" in intense crimson red (#C8102E).
Camera: low-altitude flyover cutting through glacial gorges at 5.000m altitude.
NO voice, NO speech, NO music. ONLY high-altitude glacial wind howl and military radio static SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of the Asian landmass and the curvature of planet Earth rising into space.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Subtle glowing national boundary lines of China and its 14 sovereign neighbors fading into the night curvature.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Como Três Séculos da Dinastia Qing e os Tratados Desiguais Desenharam as Fronteiras da China Moderna?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 226,
    titulo: 'Por Que a França Possui a Segunda Maior Zona Econômica Exclusiva do Mundo Espalhada por Três Oceanos?',
    roteiro: 'Por Que a França Possui a Segunda Maior Zona Econômica Exclusiva do Mundo Espalhada por Três Oceanos? Nos atlas escolares, a França é apenas um hexágono europeu cercado pelo Atlântico e pelos Alpes. Na realidade do direito marítimo internacional, Paris comanda a segunda maior potência naval do planeta, superada apenas pelos Estados Unidos. Graças aos seus territórios ultramarinos espalhados pelo Caribe, Oceano Índico e Pacífico, a França projeta sua soberania sobre dez vírgula dois milhões de quilômetros quadrados de Zona Econômica Exclusiva — uma área marinha vinte vezes maior que seu território metropolitano. Apenas a Polinésia Francesa garante cinco milhões de quilômetros quadrados de oceano. Na América do Sul, a maior fronteira terrestre contínua da França fica com o Brasil, ao longo de setecentos e trinta quilômetros no Rio Oiapoque, onde o Centro Espacial de Kourou lança foguetes para a Europa. Quatro submarinos nucleares garantem que esse império oceânico permaneça protegido. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O IMPÉRIO OCEÂNICO SILENCIOSO DE PARIS',
      l2: 'POR QUE A FRANÇA DOMINA TRÊS OCEANOS',
      l3: 'DEZ MILHÕES DE KM² DE LEITO MARINHO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Império Oceânico Francês',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D rotating globe showing the French metropolitan Hexagon glowing in dark blue, then zooming out to reveal glowing oceanic territories across the Atlantic, Indian, and Pacific oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O IMPÉRIO OCEÂNICO SILENCIOSO DE PARIS"
Line 2 (intense crimson red #C8102E): "POR QUE A FRANÇA DOMINA TRÊS OCEANOS"
Line 3 (pure white #F5F2EB): "DEZ MILHÕES DE KM² DE LEITO MARINHO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Atlantic and French Polynesia.
NO voice, NO speech, NO music. ONLY deep sonar ping and satellite whoosh SFX.`
      },
      {
        titulo: 'O Hexágono Europeu vs. A Realidade Marítima',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view centered on France in Western Europe.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector outline of mainland France (551.695 km²) highlighted in pure white, then flashing a comparison badge: "ZEE METROPOLITANA: APENAS 3,3% DO TOTAL".
Text on screen: "O HEXÁGONO // 96,7% DAS ÁGUAS FRANCESAS ESTÃO FORA DA EUROPA" in uppercase white Orbitron Bold.
Badge: "10.186.000 KM² DE ZEE GLOBAL" in gold (#F59E0B).
Camera: dramatic pull-back rapidly rising into orbit.
NO voice, NO speech, NO music. ONLY coastal wave surge and electronic radar sweep SFX.`
      },
      {
        titulo: 'Polinésia Francesa: 5 Milhões de km² no Pacífico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the South Pacific: Tahiti, Bora Bora, and the Tuamotu atolls.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A colossal circular 200-nautical-mile EEZ border glowing in French tricolor vectors covering 4.767.242 km² of turquoise and deep blue ocean.
Text on screen: "POLINÉSIA FRANCESA // UMA ZEE DO TAMANHO DA EUROPA" in uppercase white Montserrat Bold.
Badge: "4,7 MILHÕES DE KM² NO CORAÇÃO DO PACÍFICO" in sage green (#A8C3A6).
Camera: linear tracking shot flying over coral atoll lagoons.
NO voice, NO speech, NO music. ONLY tropical ocean wave crest and sonar ping echo SFX.`
      },
      {
        titulo: 'Nova Caledônia e as Reservas Mundiais de Níquel',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of New Caledonia and the Loyalty Islands in the Coral Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
EEZ perimeter of 1.422.543 km² highlighted with tactical mining icons marking 10% of global nickel reserves.
Text on screen: "NOVA CALEDÔNIA // 1,4 MILHÃO DE KM² DE PLATAFORMA MARÍTIMA" in uppercase white Orbitron Bold.
Badge: "10% DAS RESERVAS GLOBAIS DE NÍQUEL" in intense crimson red (#C8102E).
Camera: smooth circular orbit around Grande Terre barrier reef.
NO voice, NO speech, NO music. ONLY trade wind gust and marine acoustic pulse SFX.`
      },
      {
        titulo: 'A Fronteira do Oiapoque com o Brasil',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus on South America: the border between French Guiana and the Brazilian state of Amapá.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 730 km border along the Oyapock River glowing in intense yellow vectors.
Text on screen: "GUIANA FRANCESA // A MAIOR FRONTEIRA DA FRANÇA FICA NO BRASIL" in uppercase white Montserrat Bold.
Badge: "730 KM DE SELVA AMAZÔNICA E O RIO OIAPOQUE" in gold (#F59E0B).
Camera: linear tracking shot descending toward the Oyapock River bridge.
NO voice, NO speech, NO music. ONLY Amazon rainforest canopy wind and tropical river flow SFX.`
      },
      {
        titulo: 'Kourou: O Porto Espacial da Europa na Selva',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Guiana Space Centre (CSG) launch pads in Kourou.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ariane 6 launch complex illuminated by launch telemetry vector grids at 5° North latitude.
Text on screen: "CENTRO ESPACIAL DE KOUROU // O PORTO ESPACIAL DA EUROPA" in uppercase white Orbitron Bold.
Badge: "LANÇAMENTOS ORBITAIS 15% MAIS EFICIENTES NA LINHA DO EQUADOR" in pure white (#F5F2EB).
Camera: dynamic linear push-in toward the orbital launch gantries.
NO voice, NO speech, NO music. ONLY countdown radio squelch and distant rocket engine ignite rumble SFX.`
      },
      {
        titulo: 'Oceano Índico: Ilhas Kerguelen e o Canal de Moçambique',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view scanning from Reunion and Mayotte in the Mozambique Channel down to the sub-Antarctic Kerguelen Islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
EEZ boundaries encompassing 2.548.841 km² across the Southern Ocean glowing in icy blue.
Text on screen: "TERRAS AUSTRAIS FRANCESAS // 2,5 MILHÕES DE KM² NO MAR ANTÁRTICO" in uppercase white Montserrat Bold.
Badge: "SENTINELAS VIGILANTES NO CANAL DE MOÇAMBIQUE" in sage green (#A8C3A6).
Camera: fast orbital flyover crossing turbulent sub-polar seas.
NO voice, NO speech, NO music. ONLY polar Antarctic gale howling and ocean spray SFX.`
      },
      {
        titulo: 'A Dissuasão Nuclear Naval: Submarinos Triomphant',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Undersea satellite perspective off the coast of Brittany (Île Longue submarine base).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
3D hull silhouette of a Le Triomphant class SSBN nuclear ballistic missile submarine patrolling deep oceanic trenches.
Text on screen: "FORCE DE FRAPPE // 4 SUBMARINOS NUCLEARES LANÇADORES DE MÍSSEIS" in uppercase white Orbitron Bold.
Badge: "16 MÍSSEIS M51 EM PATRULHA PERMANENTE NO ATLÂNTICO" in intense crimson red (#C8102E).
Camera: slow cinematic glide through dark deep ocean thermocline.
NO voice, NO speech, NO music. ONLY deep nuclear submarine reactor hum and active sonar ping SFX.`
      },
      {
        titulo: 'O Porta-Aviões Charles de Gaulle no Mediterrâneo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view tracking the nuclear-powered aircraft carrier Charles de Gaulle (R91) underway with its battle group.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Rafale Marine fighter jets launching from catapult tracks leaving white steam plumes.
Text on screen: "CHARLES DE GAULLE // O ÚNICO PORTA-AVIÕES NUCLEAR FORA DOS EUA" in uppercase white Montserrat Bold.
Badge: "PROJEÇÃO AERONAVAL SOBERANA EM TRÊS CONTINENTES" in pure white (#F5F2EB).
Camera: high-speed flyover tracking parallel to the flight deck.
NO voice, NO speech, NO music. ONLY jet catapult steam hiss and twin turbofan afterburner roar SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of planet Earth showing all French EEZ zones illuminated simultaneously across three oceans like planetary stepping stones.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Por Que a França Possui a Segunda Maior Zona Econômica Exclusiva do Mundo Espalhada por Três Oceanos?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 227,
    titulo: 'Como o Monopólio Global do Níquel e o Banning de Minério Bruto Transformaram a Indonésia na Capital dos Carros Elétricos?',
    roteiro: 'Como o Monopólio Global do Níquel e o Banning de Minério Bruto Transformaram a Indonésia na Capital dos Carros Elétricos? Em 2020, a Indonésia tomou uma decisão econômica radical: proibiu totalmente a exportação de minério de níquel in natura para o exterior. A tese de Jacarta era simples: como dona das maiores reservas do mundo, a nação não aceitaria mais vender terra vermelha barata. Quem quisesse níquel para as baterias de carros elétricos teria que construir refinarias de alta tecnologia dentro do país. O resultado foi histórico: mineradoras da China e do Ocidente investiram mais de trinta bilhões de dólares em megaparques industriais nas selvas de Sulawesi e Halmahera. Hoje, a Indonésia produz mais de cinquenta e cinco por cento de todo o níquel do planeta, controlando o insumo indispensável da mobilidade verde. Mas esse milagre tem um preço amargo: dezenas de usinas a carvão e devastação florestal no paraíso tropical. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A CARTADA BILIONÁRIA DO NÍQUEL',
      l2: 'COMO A INDONÉSIA DOMINA OS CARROS ELÉTRICOS',
      l3: 'O EMBARGO MINERAL DE SULAWESI'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Monopólio de Níquel',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending rapidly toward the Indonesian archipelago, highlighting the distinct orchid-shaped island of Sulawesi glowing in bright fiery orange and golden vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A CARTADA BILIONÁRIA DO NÍQUEL"
Line 2 (intense crimson red #C8102E): "COMO A INDONÉSIA DOMINA OS CARROS ELÉTRICOS"
Line 3 (pure white #F5F2EB): "O EMBARGO MINERAL DE SULAWESI"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward Sulawesi and Halmahera.
NO voice, NO speech, NO music. ONLY deep industrial turbine hum and electrical surge SFX.`
      },
      {
        titulo: 'A Geologia de Sulawesi: 21 Milhões de Toneladas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic satellite map of Sulawesi showing red laterite soil layers in Central and Southeast Sulawesi.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing metallic polygon overlays indicating lateritic nickel deposits.
Text on screen: "21 MILHÕES DE TONELADAS // AS MAIORES RESERVAS DE NÍQUEL DA TERRA" in uppercase white Orbitron Bold.
Badge: "QUASE O DOBRO DE AUSTRÁLIA OU BRASIL" in gold (#F59E0B).
Camera: slow cinematic descent showing open-pit red-soil mine benches.
NO voice, NO speech, NO music. ONLY heavy excavator diesel engine rumble and rock tumbler SFX.`
      },
      {
        titulo: 'O Embargo de 2020: Proibição de Exportar Minério Bruto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over the Java Sea and export ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red "STOP" barrier icons locking bulk ore carrier ships in harbour.
Text on screen: "JANEIRO DE 2020 // PROIBIÇÃO TOTAL DE EXPORTAÇÃO DE MINÉRIO BRUTO" in uppercase white Montserrat Bold.
Badge: "A POLÍTICA NACIONALISTA DE HILIRISASI" in intense crimson red (#C8102E).
Camera: dynamic linear flyover above bulk carrier ships anchored in roadstead.
NO voice, NO speech, NO music. ONLY metal cargo hatch slam and ship foghorn echo SFX.`
      },
      {
        titulo: 'O Salto das Exportações: De US$ 3 Bi para US$ 34 Bi',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic data overlay on satellite map of Indonesia showing trade revenue arrows surging to East Asia and North America.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
3D vertical bar graph rising from Sulawesi from $3B (2019) to $34B (2024).
Text on screen: "DE US$ 3 BILHÕES PARA US$ 34 BILHÕES EM 4 ANOS" in uppercase white Orbitron Bold.
Badge: "SALTO DE VALOR AGREGADO NA BALANÇA COMERCIAL" in sage green (#A8C3A6).
Camera: smooth lateral pan along the Equator.
NO voice, NO speech, NO music. ONLY digital data ticker beep and financial chime SFX.`
      },
      {
        titulo: 'O Parque Industrial de Morowali (IMIP) na Selva',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view descending onto the colossal Indonesia Morowali Industrial Park (IMIP) in Central Sulawesi.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Smelter smokestacks, dedicated seaport docks, and workers' township covering 3.000 hectares.
Text on screen: "IMIP MOROWALI // UMA MEGACIDADE INDUSTRIAL NO MEIO DA SELVA" in uppercase white Montserrat Bold.
Badge: "100.000 TRABALHADORES E FUNDIÇÕES 24 HORAS" in gold (#F59E0B).
Camera: sweeping circular orbital shot above the molten slag ladles.
NO voice, NO speech, NO music. ONLY blast furnace roar and molten metal hiss SFX.`
      },
      {
        titulo: 'A Tecnologia HPAL e as Baterias de Carros Elétricos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the high-pressure acid leach (HPAL) chemical autoclaves in Weda Bay, Halmahera.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
3D blueprint overlay of an EV battery cell (NCM cathode) highlighting nickel atoms in glowing neon blue.
Text on screen: "REFINO HPAL // PRECIPITADO MISTO (MHP) PARA BATERIAS NCM" in uppercase white Orbitron Bold.
Badge: "O CORAÇÃO QUÍMICO DOS VEÍCULOS ELÉTRICOS" in pure white (#F5F2EB).
Camera: linear push-in toward chemical processing columns.
NO voice, NO speech, NO music. ONLY high-pressure steam valve release and electronic hum SFX.`
      },
      {
        titulo: 'A Participação Global: 55% do Níquel da Terra',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global satellite pie-chart projection centered over Southeast Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indonesia expanding to cover 55,2% of the global supply circle, while Philippines, Russia, and Australia shrink to minor slices.
Text on screen: "55,2% DE TODO O NÍQUEL DO MUNDO VEM DA INDONÉSIA" in uppercase white Orbitron Bold.
Badge: "MONOPÓLIO INCONTESTÁVEL NA CADEIA DE SUPRIMENTOS" in intense crimson red (#C8102E).
Camera: slow cinematic pull-back showing the entire Pacific rim.
NO voice, NO speech, NO music. ONLY digital telemetry click and map border pulse SFX.`
      },
      {
        titulo: 'O Custo Ambiental: Carvão e Desmatamento',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite split-screen: lush tropical rainforest on the left contrasted with red cleared laterite mining scars and coal power plants on the right.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Smoke plumes from captive coal power plants drifting over the coast.
Text on screen: "O CUSTO AMBIENTAL // TERMELÉTRICAS A CARVÃO ALIMENTAM AS USINAS" in uppercase white Montserrat Bold.
Badge: "DESAFIOS CRÍTICOS DE ESG E REJEITOS DE MINERAÇÃO" in intense crimson red (#C8102E).
Camera: slow linear tracking shot moving from forest canopy to industrial quarry.
NO voice, NO speech, NO music. ONLY chainsaw buzz echo and industrial coal belt clatter SFX.`
      },
      {
        titulo: 'A Batalha Geopolítica: Washington vs. Pequim',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of the South China Sea and Java Sea with geopolitical influence vectors from Beijing and Washington converging on Jakarta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
US IRA trade restriction alert icon vs. Chinese Tsingshan capital flow lines.
Text on screen: "O DILEMA DE JACARTA // NO CENTRO DA DISPUTA EUA-CHINA" in uppercase white Orbitron Bold.
Badge: "NEGOCIAÇÃO DE ACORDOS CRÍTICOS COM O OCIDENTE" in gold (#F59E0B).
Camera: dynamic tilt shot connecting Washington, Beijing, and Jakarta.
NO voice, NO speech, NO music. ONLY radio intercept chirp and radar grid pulse SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of the Indonesian archipelago spanning 5.000 kilometers along the Equator from Sumatra to Papua.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Como o Monopólio Global do Níquel e o Banning de Minério Bruto Transformaram a Indonésia na Capital dos Carros Elétricos?\n\n#geografia #geopolitica #mapas'
  },
  {
    num: 228,
    titulo: 'Como a Convenção de Montreux de 1936 Dá à Turquia a Chave Militar dos Estreitos do Bósforo e Dardanelos?',
    roteiro: 'Como a Convenção de Montreux de 1936 Dá à Turquia a Chave Militar dos Estreitos do Bósforo e Dardanelos? Com apenas setecentos e cinquenta metros em seu ponto mais estreito, o Estreito do Bósforo corta a cidade de Istambul e separa a Europa da Ásia. Essa passagem sinuosa é a única saída do Mar Negro para o Mediterrâneo e para os oceanos do mundo. Desde 1936, a Convenção de Montreux confere à Turquia um poder geopolítico extraordinário: o controle legal absoluto sobre quem pode cruzar os estreitos. Em tempos de paz, quarenta mil cargueiros passam livremente todos os anos levando trigo e petróleo. Mas em tempos de guerra, o Artigo 19 dá a Ancara o direito de trancar a passagem para navios militares. Foi exatamente isso que a Turquia fez em 2022, impedindo que a Rússia enviasse reforços navais para o Mar Negro durante a invasão da Ucrânia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A GARGANTA QUE DIVIDE DOIS CONTINENTES',
      l2: 'COMO A TURQUIA TRANCOU O BÓSFORO',
      l3: 'A CONVENÇÃO DE MONTREUX DE 1936'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho dos Estreitos Turcos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe descending toward the junction of Europe and Asia at the Sea of Marmara, highlighting the razor-thin blue channel of the Bosphorus Strait illuminated in intense crimson vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGANTA QUE DIVIDE DOIS CONTINENTES"
Line 2 (intense crimson red #C8102E): "COMO A TURQUIA TRANCOU O BÓSFORO"
Line 3 (pure white #F5F2EB): "A CONVENÇÃO DE MONTREUX DE 1936"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward Istanbul and the Black Sea entrance.
NO voice, NO speech, NO music. ONLY deep naval foghorn blast and tactical radar blip SFX.`
      },
      {
        titulo: 'Apenas 750 Metros entre Europa e Ásia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up centered on the narrowest point of the Bosphorus at Kandilli and Rumeli Fortress.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A vector measurement caliper line spanning the strait displaying "750 METROS" in JetBrains Mono.
Text on screen: "LARGURA MÍNIMA: 750 METROS // A CURVA CEGA DE KANDILLI" in uppercase white Orbitron Bold.
Badge: "DIVISÓRIA FÍSICA ENTRE A EUROPA E A ÁSIA" in gold (#F59E0B).
Camera: slow cinematic descent showing massive container ships maneuvering through the channel.
NO voice, NO speech, NO music. ONLY ship engine thrum and turbulent water swirl SFX.`
      },
      {
        titulo: 'Os Dois Estreitos: Bósforo e Dardanelos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map tracing the complete waterway system: Dardanelles (61 km), Sea of Marmara, and Bosphorus (31 km).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing yellow navigational track connecting the Aegean Sea to the Black Sea.
Text on screen: "O CORREDOR TURCO // 300 KM DO MAR EGEU AO MAR NEGRO" in uppercase white Montserrat Bold.
Badge: "A ÚNICA SAÍDA NAVAL DE RÚSSIA, UCRÂNIA E GEÓRGIA" in sage green (#A8C3A6).
Camera: fast linear tracking shot following the waterway southwest to northeast.
NO voice, NO speech, NO music. ONLY rushing wind and marine navigation radar chime SFX.`
      },
      {
        titulo: 'A Convenção de Montreux Assinada em 1936',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical treaty document visual overlay on map of Montreux, Switzerland (1936).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders of Turkey solidifying in bold red vectors around Istanbul and the Gallipoli peninsula.
Text on screen: "20 DE JULHO DE 1936 // A CONVENÇÃO DE MONTREUX" in uppercase white Orbitron Bold.
Badge: "DEVOLUÇÃO DA SOBERANIA MILITAR TOTAL À TURQUIA" in pure white (#F5F2EB).
Camera: smooth tilt from the Swiss Alps down to the Golden Horn in Istanbul.
NO voice, NO speech, NO music. ONLY vintage fountain pen writing and wax seal stamp thump SFX.`
      },
      {
        titulo: '40.000 Navios por Ano: O Tráfego Mercante',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-density satellite traffic simulation showing hundreds of cargo ship icons queued in the Sea of Marmara.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Animated ship flow lines navigating under the three suspension bridges of Istanbul.
Text on screen: "40.000 NAVIOS POR ANO // 3X MAIS TRÁFEGO QUE O CANAL DE SUEZ" in uppercase white Montserrat Bold.
Badge: "PETRÓLEO, GÁS E GRÃOS AGRÍCOLAS DO MAR NEGRO" in gold (#F59E0B).
Camera: aerial tracking shot passing over the 15 July Martyrs Bridge.
NO voice, NO speech, NO music. ONLY heavy marine diesel rumble and harbor wave lap SFX.`
      },
      {
        titulo: 'O Artigo 19 em Ação na Guerra da Ucrânia (2022)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Black Sea and the Bosphorus entrance in February 2022.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive red lock graphic snapping shut over the mouth of the Bosphorus with warning text: "ARTIGO 19 ATIVADO".
Text on screen: "FEVEREIRO DE 2022 // A TURQUIA TRANCA OS ESTREITOS PARA NAVIOS DE GUERRA" in uppercase white Orbitron Bold.
Badge: "BLOQUEIO DE REFORÇOS DA MARINHA RUSSA" in intense crimson red (#C8102E).
Camera: dynamic linear push-in toward the naval checkpoint at Poyrazköy.
NO voice, NO speech, NO music. ONLY heavy metallic vault door slam and alarm klaxon pulse SFX.`
      },
      {
        titulo: 'A Frota Russa do Mar Negro Isolada de Reforços',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tactical overview of the Black Sea showing Sevastopol and Novorossiysk.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Russian Baltic and Pacific fleet warships halted outside the Aegean Sea unable to enter.
Text on screen: "A FROTA DO MAR NEGRO ISOLADA SEM PODER RECEBER REFORÇOS" in uppercase white Montserrat Bold.
Badge: "O IMPACTO DECISIVO NO CONFLITO DA UCRÂNIA" in pure white (#F5F2EB).
Camera: orbital perspective over Crimea and the Black Sea basin.
NO voice, NO speech, NO music. ONLY military radar sweep and low naval drone hum SFX.`
      },
      {
        titulo: 'O Projeto Controversial do Canal Istambul',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map showing the proposed route of "Kanal İstanbul", a 45 km bypass canal west of the natural Bosphorus.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A glowing cyan bypass route cutting through Thracian hills from the Black Sea to Lake Küçükçekmece.
Text on screen: "KANAL İSTANBUL // A HIDROVIA ARTIFICIAL DE US$ 20 BILHÕES" in uppercase white Orbitron Bold.
Badge: "O DEBATE JURÍDICO SOBRE A APLICAÇÃO DE MONTREUX" in gold (#F59E0B).
Camera: low-altitude linear flyover along the planned canal corridor.
NO voice, NO speech, NO music. ONLY heavy construction bulldozer rumble and GPS beacon ping SFX.`
      },
      {
        titulo: 'A Custódia do Trigo e do Petróleo Global',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective linking Odesa and Novorossiysk through the Bosphorus to the Mediterranean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trade flow arrows indicating wheat and petroleum exports nourishing Africa and the Middle East.
Text on screen: "A ARTÉRIA ALIMENTAR // 1/3 DOS GRÃOS DO MUNDO PASSAM PELO BÓSFORO" in uppercase white Montserrat Bold.
Badge: "A IMPORTÂNCIA EXISTENCIAL DA SEGURANÇA TURCA" in sage green (#A8C3A6).
Camera: smooth lateral pan following a bulk carrier loaded with Ukrainian wheat.
NO voice, NO speech, NO music. ONLY grain conveyor hum and cargo ship propeller wash SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of Istanbul, the Turkish Straits, and the curvature of planet Earth rising into the dark horizon of space.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant of the screen, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) accompanied by the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow, majestic retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low-frequency atmospheric rumble and celestial chime SFX.`
      }
    ],
    legenda: 'Como a Convenção de Montreux de 1936 Dá à Turquia a Chave Militar dos Estreitos do Bósforo e Dardanelos?\n\n#geografia #geopolitica #mapas'
  }
];

// Continuação dos vídeos 229 a 234...
console.log('Criando primeiros 4 roteiros (225-228)...');
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
