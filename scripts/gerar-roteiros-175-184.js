import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';
const indicePath = path.join(roteirosDir, 'Índice.md');

const videos = [
  // 175: HISTÓRIA DO JAPÃO
  {
    num: 175,
    titulo: 'Como a Restauração Meiji, a Expansão Imperial e o Tratado de Paz de 1951 Desenharam as Fronteiras do Japão Moderno?',
    roteiro: `Como a Restauração Meiji, a expansão imperial e o Tratado de Paz de 1951 desenharam as fronteiras do Japão moderno? Por dois séculos e meio, o Japão feudal viveu no isolamento absoluto do Sakoku, proibindo cidadãos de saírem do país sob pena de morte. A chegada dos Navios Negros americanos em 1853 implodiu o xogunato e deu início à Restauração Meiji em 1868. Em poucas décadas, Tóquio anexou a ilha indígena de Hokkaido, extinguiu o Reino de Ryukyu transformando-o em Okinawa e venceu as guerras contra a China e a Rússia, anexando Taiwan, o sul de Sacalina e toda a península da Coreia. No verão de 1942, o império atingiu seu ápice com a Esfera de Coprosperidade ocupando mais de sete milhões de quilômetros quadrados do sudeste asiático ao Pacífico. Após a derrota na Segunda Guerra, o Tratado de Paz de São Francisco de 1951 confinou o Japão às suas quatro ilhas principais modernas, deixando aberta até hoje a disputa das Ilhas Curilas com a Rússia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Japanese archipelago and East Asian rim.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FORJA DO ARQUIPÉLAGO"
Line 2 (intense crimson red #C8102E): "COMO AS FRONTEIRAS DO JAPÃO FORAM DESENHADAS?"
Line 3 (pure white #F5F2EB): "DO SAKOKU AO TRATADO DE 1951"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Edo Bay and Honshu.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Isolamento do Sakoku e os Navios Negros (1853)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical nautical map of Japan showing the isolated port of Nagasaki and Dejima island under Tokugawa rule.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Four black ship icons approaching Uraga Harbor with glowing tactical firing arcs.
Text on screen: "SAKOKU (1633-1853) // 250 ANOS DE ISOLAMENTO" in uppercase white Orbitron Bold.
Badge: "OS NAVIOS NEGROS DE PERRY E O FIM DO XOGUNATO" in intense crimson red (#C8102E).
Camera: slow linear flyover into Tokyo Bay.
NO voice, NO speech, NO music. ONLY ship bell toll and coastal cannon boom SFX.` },
      { t: 'A Restauração Meiji e a Anexação de Hokkaido e Okinawa (1869-1879)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map showing northern and southern expansion vectors: colonization of Ezo (renamed Hokkaido in 1869) and the incorporation of the Ryukyu Kingdom into Okinawa prefecture in 1879.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territory highlights in radiant gold (#F59E0B) and amber vectors over the Kuril Islands.
Text on screen: "RESTAURAÇÃO MEIJI (1868) // FRONTEIRAS NACIONAIS" in uppercase white Montserrat Bold.
Badge: "COLONIZAÇÃO DE HOKKAIDO E EXTINÇÃO DO REINO RYUKYU" in intense crimson red (#C8102E).
Camera: dynamic linear satellite sweep from Sapporo down to Naha.
NO voice, NO speech, NO music. ONLY telemetry lock and orchestral march chime SFX.` },
      { t: 'A Primeira Guerra Sino-Japonesa e a Conquista de Taiwan (1895)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical naval campaign map of the Yellow Sea and Taiwan Strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval vector in crimson (#C8102E) encircling Taiwan, the Pescadores, and Port Arthur.
Text on screen: "TRATADO DE SHIMONOSEKI (1895) // ANEXAÇÃO DE TAIWAN" in uppercase white Orbitron Bold.
Badge: "PRIMEIRA COLÔNIA ULTRAMARINA DO IMPÉRIO JAPONÊS" in gold (#F59E0B).
Camera: technical orthographic push-in toward Taipei and Penghu.
NO voice, NO speech, NO music. ONLY artillery echo and ocean surf SFX.` },
      { t: 'A Guerra Russo-Japonesa e a Anexação da Coreia (1905-1910)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of Northeast Asia highlighting the Battle of Tsushima Strait and the partitioning of Sakhalin at the 50th parallel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Korean Peninsula transitioning into Japanese colonial color (#F59E0B) alongside Karafuto.
Text on screen: "TRATADO DE ANEXAÇÃO (1910) // COREIA COLONIAL" in uppercase white Montserrat Bold.
Badge: "VITÓRIA CONTRA A RÚSSIA CZARISTA EM TSUSHIMA" in sage green (#A8C3A6).
Camera: slow cinematic flyover from Vladivostok down to Seoul.
NO voice, NO speech, NO music. ONLY naval radar pulse and Morse telegraph chime SFX.` },
      { t: 'A Invasão da Manchúria e o Estado de Manchukuo (1931)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic map of Manchuria with the Kwantung Army railway sabotage at Mukden glowing in red.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Massive imperial territory expansion outlined in intense crimson (#C8102E).
Text on screen: "INCIDENTE DE MUKDEN (1931) // CRIAÇÃO DE MANCHUKUO" in uppercase white Orbitron Bold.
Badge: "EXPANSÃO CONTINENTAL SOBRE O NORDESTE DA CHINA" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over Harbin and Shenyang.
NO voice, NO speech, NO music. ONLY train whistle and military drum rattle SFX.` },
      { t: 'O Apogeu da Esfera de Coprosperidade (1942)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude continental map of the Pacific and Southeast Asia showing the maximum expansion of the Japanese Empire in 1942.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Immense highlighted zone from Burma and Indonesia to the Aleutian Islands: "7,4 MILHÕES DE KM²".
Text on screen: "APOGEU TERRITORIAL (1942) // 450 MILHÕES DE HABITANTES" in uppercase white Montserrat Bold.
Badge: "DAS SELVAS DA NOVA GUINÉ ÀS ILHAS DO PACÍFICO" in gold (#F59E0B).
Camera: grand orthographic zoom out over the Western Pacific.
NO voice, NO speech, NO music. ONLY radial wave surge and fighter aircraft roar SFX.` },
      { t: 'O Tratado de São Francisco e as Quatro Ilhas (1951)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cartographic reduction map showing imperial territories receding and locking onto the four modern home islands: Honshu, Hokkaido, Kyushu, and Shikoku.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders outlined in Bege Cartográfico (#F5F2EB): "377.975 KM²".
Text on screen: "TRATADO DE SÃO FRANCISCO (1951) // O JAPÃO MODERNO" in uppercase white Orbitron Bold.
Badge: "RENÚNCIA TOTAL A TAIWAN, COREIA E ILHAS CURILAS" in white (#F5F2EB).
Camera: orthographic focus on the Japanese archipelago.
NO voice, NO speech, NO music. ONLY clean digital lock-on click and wind gust SFX.` },
      { t: 'A Disputa das Ilhas Curilas / Territórios do Norte', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical close-up of the southern Kuril Islands (Etorofu, Kunashiri, Shikotan, Habomai) off the coast of Hokkaido.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Contested islands flashing in amber and crimson hazard striping.
Text on screen: "DISPUTA DAS CURILAS // 5.000 KM² EM LITÍGIO COM MOSCOU" in uppercase white Montserrat Bold.
Badge: "A PENDÊNCIA QUE IMPEDE O TRATADO DE PAZ COM A RÚSSIA" in intense crimson red (#C8102E).
Camera: technical diagonal tracking shot across the Nemuro Strait.
NO voice, NO speech, NO music. ONLY arctic wind howl and radio radar beep SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete Japanese archipelago glowing in gold amidst the Pacific Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 176: GEOPOLÍTICA DA POLÔNIA
  {
    num: 176,
    titulo: 'Por Que a Geografia Plana da Polônia e o Corredor de Suwalki Fazem de Varsóvia a Maior Fortaleza Militar da Europa?',
    roteiro: `Por que a geografia plana da Polônia e o Corredor de Suwalki fazem de Varsóvia a maior fortaleza militar da Europa? Sem montanhas protetoras na Grande Planície Europeia, a Polônia foi invadida e dividida três vezes na história e quase aniquilada na Segunda Guerra Mundial. Hoje, ao custodiar o Corredor de Suwalki — uma faixa de apenas sessenta e cinco quilômetros entre o enclave militar russo de Kaliningrado e Belarus —, os poloneses decidiram que nunca mais dependerão apenas de promessas estrangeiras. Investindo quase cinco por cento do Produto Interno Bruto na defesa, a Polônia encomendou mais de mil tanques de combate modernos da Coreia do Sul e dos Estados Unidos, centenas de lançadores de foguetes e ergueu o Escudo Oriental com fossos antitanque e campos minados. A maior força blindada da Europa moderna pronta para blindar o flanco oriental da OTAN. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the North European Plain and the Polish borderlands.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FORTALEZA DO LESTE"
Line 2 (intense crimson red #C8102E): "POR QUE A POLÔNIA SE TORNOU O MAIOR EXÉRCITO DA EUROPA?"
Line 3 (pure white #F5F2EB): "A PLANÍCIE E O CORREDOR DE SUWALKI"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Warsaw and the Vistula River.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Maldição da Grande Planície Europeia', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic relief map of Europe showing the flat corridor from the Netherlands through Germany and Poland to the Russian steppes.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Green lowlands highlighted with tactical arrows: "91% DO TERRITÓRIO ABAIXO DE 300M".
Text on screen: "A MALDIÇÃO GEOGRÁFICA // NENHUMA MONTANHA DEFENSIVA" in uppercase white Orbitron Bold.
Badge: "O CORREDOR HISTÓRICO DE TODAS AS GRANDES INVASÕES" in intense crimson red (#C8102E).
Camera: slow cinematic flyover from Berlin to Warsaw.
NO voice, NO speech, NO music. ONLY low tank tread rumble and wind gust SFX.` },
      { t: 'O Corredor de Suwalki: O Ponto Mais Crítico da OTAN', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite zoom into the 65-kilometer border gap between Poland and Lithuania.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pincer threat vectors in glowing crimson (#C8102E) from Kaliningrado and Grodno (Belarus).
Text on screen: "CORREDOR DE SUWALKI // 65 KM ENTRE KALININGRADO E BELARUS" in uppercase white Montserrat Bold.
Badge: "O ÚNICO ACESSO TERRESTRE DA OTAN AOS PAÍSES BÁLTICOS" in gold (#F59E0B).
Camera: technical orthographic push-in over the border line.
NO voice, NO speech, NO music. ONLY radar sweep chime and tactical radio burst SFX.` },
      { t: 'O Enclave Militarizado de Kaliningrado', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the Russian exclave of Kaliningrad and its naval base at Baltiysk.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A2/AD missile defense dome in translucent glowing red over the southern Baltic Sea.
Text on screen: "KALININGRADO // BATERIAS ISKANDER E NEGAÇÃO DE ACESSO" in uppercase white Orbitron Bold.
Badge: "BASE NAVAL DA FROTA DO BÁLTICO NO CORAÇÃO DA EUROPA" in intense crimson red (#C8102E).
Camera: low-altitude tracking shot over the Vistula Spit.
NO voice, NO speech, NO music. ONLY sonar ping and missile silo hydraulic hiss SFX.` },
      { t: 'O Orçamento Recorde de Defesa: 4,7% do PIB', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infographic map displaying defense expenditure across NATO member states.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Poland glowing brightly in gold (#F59E0B): "4,7% DO PIB // LÍDER ABSOLUTO NA OTAN".
Text on screen: "ORÇAMENTO DE GUERRA // SUPERANDO OS ESTADOS UNIDOS" in uppercase white Montserrat Bold.
Badge: "MAIS QUE O DOBRO DA META OFICIAL DE 2% DA ALIANÇA" in sage green (#A8C3A6).
Camera: dynamic linear sweep across Central Europe.
NO voice, NO speech, NO music. ONLY digital counter tallying and cash register chime SFX.` },
      { t: 'A Armada Blindada: K2 Black Panther e Abrams M1A2', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Military deployment map showing military bases in Drawsko Pomorskie, Żagań, and Siedlce.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical armored icons multiplying across eastern Poland: "1.250+ TANQUES MODERNOS".
Text on screen: "PODER DE CHOQUE // MIL TANQUES K2 E ABRAMS M1A2" in uppercase white Orbitron Bold.
Badge: "MAIS BLINDADOS QUE ALEMANHA, FRANÇA E REINO UNIDO JUNTOS" in gold (#F59E0B).
Camera: technical orthographic push-in over tank firing ranges.
NO voice, NO speech, NO music. ONLY heavy diesel engine roar and cannon blast echo SFX.` },
      { t: 'O Projeto Tarcza Wschód (Escudo Oriental)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Fortification line blueprint superimposed along the 400-kilometer border with Belarus and Kaliningrad.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Engineered obstacles: concrete dragon teeth, anti-tank ditches, and sensor posts glowing in amber.
Text on screen: "ESCUDO ORIENTAL (2,5 BILHÕES DE DÓLARES) // FORTIFICAÇÕES" in uppercase white Montserrat Bold.
Badge: "FOSSOS ANTITANQUE, CAMPOS MINADOS E RADARES DE BAIXA ALTITUDE" in intense crimson red (#C8102E).
Camera: linear tracking shot skimming low along the border trench.
NO voice, NO speech, NO music. ONLY excavator hydraulic hum and barbed wire tension SFX.` },
      { t: 'O Aeroporto de Rzeszów-Jasionka: Hub Logístico Ocidental', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of Rzeszów-Jasionka Airport in southeastern Poland.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Patriot missile defense rings in bright cyan (#38BDF8) surrounding cargo aircraft runways.
Text on screen: "RZESZÓW-JASIONKA // O TERMINAL MAIS VIGILADO DA EUROPA" in uppercase white Orbitron Bold.
Badge: "80% DO SUPRIMENTO MILITAR DA OTAN PASSA POR ESTA PISTA" in white (#F5F2EB).
Camera: slow cinematic descent toward military transport hangars.
NO voice, NO speech, NO music. ONLY jet engine whine and radar beacon ping SFX.` },
      { t: 'A Iniciativa dos Três Mares e a Liderança do Leste', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geopolitical map illustrating the Twelve Seas Initiative connecting the Baltic, Black, and Adriatic Seas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
North-south transit corridors and LNG pipelines glowing in gold (#F59E0B) through Poland.
Text on screen: "INICIATIVA DOS TRÊS MARES // INTEGRAÇÃO NORTE-SUL" in uppercase white Montserrat Bold.
Badge: "VARSÓVIA COMO A NOVA POTÊNCIA LÍDER DA EUROPA CENTRAL" in sage green (#A8C3A6).
Camera: high-altitude continental sweep across Central Europe.
NO voice, NO speech, NO music. ONLY telemetry lock and orchestral chord SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the European continent with the Polish shield illuminated at its center.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 177: GEOECONOMIA DA AUSTRÁLIA
  {
    num: 177,
    titulo: 'Como as Minas de Ferro de Pilbara e o Lítio Fazem da Austrália o Motor Mineral da Economia Global?',
    roteiro: `Como as minas de ferro de Pilbara e o lítio fazem da Austrália o motor mineral da economia global? No deserto vermelho da Austrália Ocidental, uma província geológica de 500 mil quilômetros quadrados guarda as maiores jazidas de minério de ferro de alta pureza do planeta. Todos os dias, trens autônomos de três quilômetros de comprimento sem condutor cruzam o deserto até os portos de Port Hedland e Dampier, exportando quase novecentos milhões de toneladas por ano. Mais de setenta e cinco por cento desse ferro vai direto para os altos-fornos da China para erguer arranha-céus, ferrovias e navios. Ao mesmo tempo, na mina de Greenbushes, os australianos extraem de rocha dura quase metade de todo o lítio do mundo para abastecer as gigafábricas de baterias de veículos elétricos. Um continente-ilha isolado que sustenta silenciosamente a indústria mundial e a transição verde. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning toward the Australian continent and the red desert of Western Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O IMPÉRIO MINERAL"
Line 2 (intense crimson red #C8102E): "COMO PILBARA E O LÍTIO ALIMENTAM A INDÚSTRIA MUNDIAL?"
Line 3 (pure white #F5F2EB): "O MONOPÓLIO DAS ROCHAS DA AUSTRÁLIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Hamersley Range.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Craton de Pilbara e as Formações Ferríferas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological satellite view of the Pilbara region in Western Australia showing ancient banded iron formations.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
500.000 km² province outlined in intense rust-red (#C8102E) and gold highlights: "TEOR DE FERRO > 62%".
Text on screen: "PILBARA (500.000 KM²) // A MAIOR RESERVA DE FERRO DA TERRA" in uppercase white Orbitron Bold.
Badge: "FORMAÇÕES GEOLÓGICAS DE MAIS DE 2,5 BILHÕES DE ANOS" in gold (#F59E0B).
Camera: low-altitude technical flyover across red rocky canyons.
NO voice, NO speech, NO music. ONLY dry desert wind and rock crumble SFX.` },
      { t: 'As Minas Gigantes a Céu Aberto', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming onto open-pit megamines: Mount Whaleback, Jimblebar, and Solomon Hub.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Excavation terrace benches glowing in technical amber: "890 MILHÕES DE TONELADAS/ANO".
Text on screen: "MINERAÇÃO EM ESCALA // 53% DO COMÉRCIO MARÍTIMO GLOBAL" in uppercase white Montserrat Bold.
Badge: "BHP, RIO TINTO E FORTESCUE EM OPERAÇÃO CONTÍNUA" in white (#F5F2EB).
Camera: orthographic push-in toward massive stepped mining pits.
NO voice, NO speech, NO music. ONLY heavy excavator clatter and haul truck engine rumble SFX.` },
      { t: 'A Ferrovia Autônoma AutoHaul: Trens Sem Condutor', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tracking shot following heavy-haul railway tracks through the Pilbara outback.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
3-kilometer train icons moving along tracks with digital telemetry: "AUTÔNOMO POR IA".
Text on screen: "REDE AUTOHAUL // TRENS DE 3 KM SEM CONDUTOR" in uppercase white Orbitron Bold.
Badge: "CENTRAL DE COMANDO EM PERTH A 1.500 KM DE DISTÂNCIA" in cyan (#38BDF8).
Camera: dynamic linear satellite sweep parallel to the desert rail lines.
NO voice, NO speech, NO music. ONLY heavy train wheel squeal on steel rails SFX.` },
      { t: 'Port Hedland: O Maior Porto Graneleiro do Mundo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Aerial satellite view of Port Hedland loading terminals with Capesize bulk carriers lined up at berths.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tidal shipping channel highlighted in radiant gold (#F59E0B): "US$ 150 MI EXPORTADOS POR DIA".
Text on screen: "PORT HEDLAND // O PORTO GRANELEIRO NÚMERO UM DO PLANETA" in uppercase white Montserrat Bold.
Badge: "NAVIOS DE 300 METROS DESPACHADOS EM RITMO DE MARÉ" in intense crimson red (#C8102E).
Camera: slow cinematic descent over iron ore conveyor ship-loaders.
NO voice, NO speech, NO music. ONLY bulk ore conveyor rumble and ship horn chime SFX.` },
      { t: 'A Dependência Cruzada com a China', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Nautical trade route map across the Pacific and Indian oceans connecting Port Hedland to Qingdao and Shanghai.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Massive golden trade vector connecting Australia and China: "75% DAS EXPORTAÇÕES".
Text on screen: "A SIMBIOSE DO AÇO // A CHINA PRODUZ 1 BILHÃO DE TONELADAS" in uppercase white Orbitron Bold.
Badge: "SE A AUSTRÁLIA PARAR, AS SIDERÚRGICAS CHINESAS FECHAM" in gold (#F59E0B).
Camera: high-altitude intercontinental zoom across East Asia and Oceania.
NO voice, NO speech, NO music. ONLY ocean swell and digital trade pulse SFX.` },
      { t: 'A Mina de Greenbushes e o Monopólio do Lítio', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the Greenbushes hard-rock spodumene mine south of Perth.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-grade lithium deposits highlighted in vibrant electric blue (#38BDF8): "47% DO LÍTIO GLOBAL".
Text on screen: "GREENBUSHES // O IMPÉRIO DO LÍTIO EM ROCHA DURA" in uppercase white Montserrat Bold.
Badge: "A BASE DAS BATERIAS ELÉTRICAS DA TRANSIÇÃO ENERGÉTICA" in sage green (#A8C3A6).
Camera: technical orthographic push-in over spodumene crushing plants.
NO voice, NO speech, NO music. ONLY rock crusher grinding and battery spark chime SFX.` },
      { t: 'Urânio, Gás Liquefeito e Terras Raras', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Resource map of Australia displaying Olympic Dam (uranium/copper), Gorgon LNG offshore platforms, and Mount Weld (rare earths).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing resource nodes in green, cyan, and gold across the continent.
Text on screen: "TESOUROS ESTRATÉGICOS // 30% DO URÂNIO DO PLANETA" in uppercase white Orbitron Bold.
Badge: "SEGUNDO MAIOR EXPORTADOR DE GNL E TERRAS RARAS PESADAS" in white (#F5F2EB).
Camera: smooth linear flyover from the North West Shelf to South Australia.
NO voice, NO speech, NO music. ONLY offshore gas flare hiss and Geiger counter tick SFX.` },
      { t: 'O Calcanhar de Aquiles: Os Chokepoints Marítimos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic maritime choke-point map showing the Indonesian straits of Lombok, Sunda, and Malacca.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vulnerable shipping corridors marked with red telemetry beacons: "ROTAS OBRIGATÓRIAS".
Text on screen: "A TIRANIA DA DISTÂNCIA // A DEPENDÊNCIA DOS MARES ABERTOS" in uppercase white Montserrat Bold.
Badge: "QUALQUER BLOQUEIO NAVAL PARALISA A ECONOMIA AUSTRALIANA" in intense crimson red (#C8102E).
Camera: slow cinematic drift across the Indonesian archipelago.
NO voice, NO speech, NO music. ONLY naval radar pulse and distant ocean storm SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete Australian island-continent glowing under the southern stars.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 178: TRÍPLICE FRONTEIRA BRASIL-ARGENTINA-PARAGUAI
  {
    num: 178,
    titulo: 'Como a Confluência dos Rios Paraná e Iguaçu Criou a Tríplice Fronteira Mais Movimentada da América do Sul?',
    roteiro: `Como a confluência dos rios Paraná e Iguaçu criou a tríplice fronteira mais movimentada da América do Sul? No ponto de encontro onde as águas barrentas do Iguaçu deságuam no leito monumental do Paraná, três países soberanos dividem um raio de apenas quinze quilômetros. De um lado, Foz do Iguaçu com suas cataratas e turismo ecológico; do outro, Puerto Iguazú na Argentina; e cruzando a Ponte da Amizade, a zona franca de Ciudad del Este no Paraguai, onde mais de cem mil pessoas e quarenta mil veículos circulam diariamente entre shoppings de importados. Ao lado desse formigueiro humano repousa a monumental usina hidrelétrica de Itaipu, gerando quatorze mil megawatts de eletricidade que abastecem as indústrias brasileiras e paraguaias. O maior cruzamento comercial, turístico e energético da América Latina. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the confluence of the Paraná and Iguaçu rivers.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O NÓ DA AMÉRICA DO SUL"
Line 2 (intense crimson red #C8102E): "COMO FUNCIONA A TRÍPLICE FRONTEIRA MAIS VIVA DO PLANETA?"
Line 3 (pure white #F5F2EB): "BRASIL, ARGENTINA E PARAGUAI"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Marco das Três Fronteiras.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Encontro Fluvial dos Rios Paraná e Iguaçu', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Aerial satellite view showing the T-junction confluence of the brown silt waters of the Iguaçu River meeting the Paraná River.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Three national territory polygons outlined: Brazil (green #A8C3A6), Argentina (cyan #38BDF8), Paraguay (red #C8102E).
Text on screen: "CONFLUÊNCIA HISTÓRICA // TRÊS NAÇÕES EM 15 KM" in uppercase white Orbitron Bold.
Badge: "OS TRÊS MARCOS DE FRONTEIRA ERGUIDOS EM 1903" in gold (#F59E0B).
Camera: slow linear descent directly above the river intersection.
NO voice, NO speech, NO music. ONLY rushing river water current and tropical bird cry SFX.` },
      { t: 'A Ponte da Amizade e o Tráfego de Ciudad del Este', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Friendship Bridge (Ponte da Amizade) connecting Foz do Iguaçu and Ciudad del Este.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Traffic flow vectors in glowing gold (#F59E0B): "100 MIL PESSOAS / 40 MIL VEÍCULOS POR DIA".
Text on screen: "PONTE DA AMIZADE // A ARTÉRIA MAIS CONGESTIONADA DO INTERIOR" in uppercase white Montserrat Bold.
Badge: "CIUDAD DEL ESTE: A 3ª MAIOR ZONA FRANCA DO MUNDO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over the bridge customs checkpoints.
NO voice, NO speech, NO music. ONLY vehicle traffic hum and motorcycle acceleration SFX.` },
      { t: 'A Monumental Usina Hidrelétrica de Itaipu', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming onto the Itaipu Dam spanning the Paraná River, with the spillway discharging white water.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
1.350 km² reservoir highlighted in electric blue (#38BDF8): "14.000 MW DE POTÊNCIA".
Text on screen: "ITAIPU BINACIONAL // O GIGANTE ENERGÉTICO" in uppercase white Orbitron Bold.
Badge: "ABASTECE 10% DA ENERGIA DO BRASIL E 80% DO PARAGUAI" in gold (#F59E0B).
Camera: low-altitude technical flyover along the 7-kilometer concrete dam wall.
NO voice, NO speech, NO music. ONLY massive hydroelectric water roar and high-voltage hum SFX.` },
      { t: 'Puerto Iguazú e a Ponte Tancredo Neves', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Tancredo Neves Bridge over the Iguaçu River connecting Foz do Iguaçu to Puerto Iguazú in Argentina.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Argentine territory in light cyan (#38BDF8): "HOTELARIA, GASTRONOMIA E PARQUES".
Text on screen: "PONTE DA FRATERNIDADE // O ELO COM A ARGENTINA" in uppercase white Montserrat Bold.
Badge: "ECOTURISMO INTERNACIONAL DAS CATARATAS DO IGUAÇU" in sage green (#A8C3A6).
Camera: smooth linear zoom into Puerto Iguazú avenues.
NO voice, NO speech, NO music. ONLY acoustic guitar chord and waterfall rumble echo SFX.` },
      { t: 'O Mosaico Multicultural da Tríplice Fronteira', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Urban overlay map of Foz do Iguaçu and Ciudad del Este displaying cultural hubs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Icons marking the Omar Ibn Al-Khattab Mosque, Buddhist Temple, and Catholic Cathedrals.
Text on screen: "MOSAICO GLOBAL // MAIS DE 80 ETNIAS CONVIVENDO" in uppercase white Orbitron Bold.
Badge: "A MAIOR COMUNIDADE ÁRABE DO INTERIOR DA AMÉRICA DO SUL" in white (#F5F2EB).
Camera: dynamic linear flyover across urban neighborhoods.
NO voice, NO speech, NO music. ONLY mosque call-to-prayer echo and city market ambiance SFX.` },
      { t: 'Segurança Integrada e o Comando Tripartite', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical security map highlighting river patrol routes and surveillance zones along the Paraná.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Surveillance camera grids and infrared radar sweeps in cyan (#38BDF8).
Text on screen: "COMANDO TRIPARTITE // COOPERAÇÃO POLICIAL INTEGRADA" in uppercase white Montserrat Bold.
Badge: "VIGILÂNCIA DE FRONTEIRA CONTRA O CRIME TRANSNACIONAL" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on the river banks.
NO voice, NO speech, NO music. ONLY patrol boat outboard motor and tactical radio beep SFX.` },
      { t: 'A Nova Ponte da Integração', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the new cable-stayed Integration Bridge connecting Foz do Iguaçu to Presidente Franco.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cable-stayed bridge model glowing in gold (#F59E0B): "MAIOR VÃO LIVRE DA AMÉRICA DO SUL (470M)".
Text on screen: "PONTE DA INTEGRAÇÃO (760M) // DESVIO DO TRÁFEGO PESADO" in uppercase white Orbitron Bold.
Badge: "NOVA INFRAESTRUTURA PARA DESAFOGAR A PONTE DA AMIZADE" in gold (#F59E0B).
Camera: slow cinematic flyover across the modern bridge pylons.
NO voice, NO speech, NO music. ONLY heavy truck rumble and steel cable chime SFX.` },
      { t: 'O Corredor Rodoviário Bioceânico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental highway map tracing the Bioceanic Corridor from Santos/Paranaguá (Atlantic) through the Triple Frontier and Chaco to the ports of northern Chile (Pacific).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing transcontinental highway vector in bright amber (#F59E0B).
Text on screen: "CORREDOR BIOCEÂNICO // DO ATLÂNTICO AO PACÍFICO" in uppercase white Montserrat Bold.
Badge: "ENVIANDO A SAFRA SUL-AMERICANA PARA A ÁSIA EM 14 DIAS MENOS" in sage green (#A8C3A6).
Camera: grand orthographic zoom out over South America.
NO voice, NO speech, NO music. ONLY high-speed highway whoosh and logistics telemetry SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying South America with the confluence of the rivers glowing like an illuminated golden star.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 179: CANAL DE KIEL
  {
    num: 179,
    titulo: 'Por Que o Canal de Kiel Movimenta Mais Navios Que Suez e Panamá Sem Chamar a Atenção do Mundo?',
    roteiro: `Por que o Canal de Kiel movimenta mais navios que Suez e Panamá sem chamar a atenção do mundo? Cortando o norte da Alemanha por noventa e oito quilômetros entre o Mar do Norte e o Mar Báltico, o Canal de Kiel registra mais de trinta mil travessias de navios por ano, superando com folga o tráfego dos canais mais famosos do planeta. Inaugurado em 1895 pelo imperador Guilherme Segundo para permitir que a Marinha Imperial manobrasse encouraçados sem contornar a Dinamarca, a hidrovia economiza quatrocentos e sessenta quilômetros de navegação perigosa em mar aberto. Internacionalizado pelo Tratado de Versalhes após a Primeira Guerra Mundial, o canal é hoje a artéria que alimenta a Escandinávia e os países bálticos com matérias-primas e produtos industriais, operando como o chokepoint pacífico mais eficiente da Europa. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into Northern Europe, the Jutland Peninsula, and the Baltic Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O GIGANTE SILENCIOSO"
Line 2 (intense crimson red #C8102E): "POR QUE O CANAL DE KIEL SUPERA SUEZ E PANAMÁ EM TRÁFEGO?"
Line 3 (pure white #F5F2EB): "30.000 NAVIOS CORTANDO A ALEMANHA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the German state of Schleswig-Holstein.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Circunavegação da Dinamarca vs. O Atalho de 98 km', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map comparison showing the long, stormy nautical route around Cape Skagen (Denmark) in red dashed line versus the direct blue vector cutting through the Kiel Canal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance saved highlighted: "POUPA 250 MILHAS NÁUTICAS (460 KM)".
Text on screen: "O ATALHO DE KIEL // 15 HORAS DE NAVEGAÇÃO POUPADAS" in uppercase white Orbitron Bold.
Badge: "EVITA AS TEMPESTADES VIOLENTAS DO SKAGERRAK E KATTEGAT" in intense crimson red (#C8102E).
Camera: slow linear flyover around the Danish peninsula.
NO voice, NO speech, NO music. ONLY ocean gale wind and compass chime SFX.` },
      { t: 'A Gênese Militar Imperial de 1895', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical sepia map overlay of the German Empire showing the construction under Kaiser Wilhelm II.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Kaiserliche Marine warships navigating the canal route outlined in gold.
Text on screen: "KAISER-WILHELM-KANAL (1895) // ESTRATÉGIA MILITAR" in uppercase white Montserrat Bold.
Badge: "UNINDO AS FROTAS DO BÁLTICO E DO MAR DO NORTE SEM DEPENDER DE COPENHAGUE" in gold (#F59E0B).
Camera: technical orthographic push-in over Holtenau locks.
NO voice, NO speech, NO music. ONLY historical steam whistle and brass fanfare echo SFX.` },
      { t: 'As Eclusas Monumentais de Brunsbüttel', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Brunsbüttel locks where the canal meets the Elbe River estuary.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
310-meter lock chambers with container feeder ships entering.
Text on screen: "ECLUSAS DE BRUNSBÜTTEL // CONTROLE DE MARÉS DE 3 METROS" in uppercase white Orbitron Bold.
Badge: "ISOLA A HIDROVIA DAS ONDAS DO MAR DO NORTE" in cyan (#38BDF8).
Camera: slow cinematic descent over the massive sliding lock gates.
NO voice, NO speech, NO music. ONLY hydraulic gate groan and water turbulence SFX.` },
      { t: 'O Volume Imbatível: 30.000 Navios por Ano', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparison bar graph infographic of annual vessel transits: Kiel Canal (30.000+) vs. Suez (22.000) vs. Panama (13.000).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing golden bars illustrating Kiel's numerical supremacy.
Text on screen: "NÚMERO 1 EM TRAVESSIA // MAIS MOVIMENTADO QUE SUEZ E PANAMÁ" in uppercase white Montserrat Bold.
Badge: "80 A 100 MILHÕES DE TONELADAS DE CARGA ANUAIS" in sage green (#A8C3A6).
Camera: dynamic linear sweep across northern Germany.
NO voice, NO speech, NO music. ONLY digital telemetry chime and ship bell SFX.` },
      { t: 'A Internacionalização no Tratado de Versalhes (1919)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical legal document overlay displaying Article 380 of the Treaty of Versailles and the S.S. Wimbledon case.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vessels from multiple nations navigating the channel under freedom of transit.
Text on screen: "TRATADO DE VERSALHES (1919) // HIDROVIA INTERNACIONALIZADA" in uppercase white Orbitron Bold.
Badge: "LIVRE ACESSO PARA TODAS AS NAÇÕES EM PAZ COM A ALEMANHA" in white (#F5F2EB).
Camera: technical orthographic push-in along the water corridor.
NO voice, NO speech, NO music. ONLY gavel strike and legal parchment rustle SFX.` },
      { t: 'A Ponte Alta de Rendsburg e o Loop Circular', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution 3D aerial view of the historic steel Rendsburg High Bridge with its 360-degree railway loop.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cargo train climbing the spiral loop while a container ship passes beneath the 42-meter clearance.
Text on screen: "PONTE ALTA DE RENDSBURG (1913) // ENGENHARIA CENTENÁRIA" in uppercase white Montserrat Bold.
Badge: "ESPIRAL DE 4 KM PARA ELEVAR TRENS A 42 METROS DE ALTURA" in gold (#F59E0B).
Camera: low-altitude cinematic tracking shot circling the railway viaduct.
NO voice, NO speech, NO music. ONLY train wheel click-clack and ship foghorn SFX.` },
      { t: 'O "Lago da OTAN" e o Valor Militar Moderno', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geopolitical map of the Baltic Sea showing Sweden and Finland as NATO members, enclosing the sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
German Navy (Deutsche Marine) corvettes and NATO minehunters sailing through the canal.
Text on screen: "O BÁLTICO COMO LAGO DA OTAN // LOGÍSTICA DE REFORÇO RÁPIDO" in uppercase white Orbitron Bold.
Badge: "DESLOCAMENTO DE TROPAS SEM EXPOSIÇÃO AOS RADARES RUSSOS" in intense crimson red (#C8102E).
Camera: smooth linear zoom into the Baltic entrance at Holtenau.
NO voice, NO speech, NO music. ONLY naval radar sweep and naval turbine hum SFX.` },
      { t: 'A Modernização de 2 Bilhões de Euros', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Engineering schematic showing the excavation of the 5th lock chamber at Brunsbüttel and widening of Eastern curves.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Expanded channel cross-section highlighted in bright cyan (#38BDF8).
Text on screen: "MODERNIZAÇÃO HISTÓRICA // ADAPTAÇÃO PARA MEGACARGUEIROS" in uppercase white Montserrat Bold.
Badge: "GARANTINDO O FLUXO PELO PRÓXIMO SÉCULO" in sage green (#A8C3A6).
Camera: technical orthographic push-in over the excavation sites.
NO voice, NO speech, NO music. ONLY heavy construction machinery hum and water pump hiss SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying Northern Europe with the glowing line of the Kiel Canal connecting two great seas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 180: ILHA DOS FAISÕES
  {
    num: 180,
    titulo: 'Por Que a Ilha dos Faisões Muda de País a Cada Seis Meses Entre a França e a Espanha?',
    roteiro: `Por que a Ilha dos Faisões muda de país a cada seis meses entre a França e a Espanha? No meio do rio Bidasoa, entre a cidade espanhola de Irún e a francesa Hendaye, repousa uma ilhota arborizada de apenas seis mil e oitocentos metros quadrados onde ninguém pode morar ou visitar. De primeiro de fevereiro a trinta e um de julho, ela é território soberano da Espanha; de primeiro de agosto a trinta e um de janeiro, transforma-se em território da França. Esse condomínio alternado foi criado em 1659 pelo Tratado dos Pirenéus para selar a paz entre Luís XIV e Filipe IV, servindo de palco para o casamento do Rei Sol com a infanta Maria Teresa sem que nenhum soberano precisasse pisar em solo alheio. Duas vezes por ano, comandantes navais realizam uma cerimônia militar oficial de transferência de soberania do condomínio ativo mais antigo do planeta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Pyrenees mountains and the Bidasoa River between France and Spain.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ILHA DAS DUAS BANDEIRAS"
Line 2 (intense crimson red #C8102E): "POR QUE A ILHA DOS FAISÕES TROCA DE PAÍS A CADA SEIS MESES?"
Line 3 (pure white #F5F2EB): "O CONDOMÍNIO MAIS ANTIGO DO MUNDO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the green islet in the river.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'Localização no Rio Bidasoa: Entre Irún e Hendaye', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming onto the 200-meter long islet in the tidal Bidasoa river channel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Left riverbank labeled "IRÚN // ESPANHA", right riverbank labeled "HENDAYE // FRANÇA".
Text on screen: "ÁREA: 6.820 M² // 200 METROS DE COMPRIMENTO" in uppercase white Orbitron Bold.
Badge: "ZERO HABITANTES E ACESSO CIVIL TERMINANTEMENTE PROIBIDO" in intense crimson red (#C8102E).
Camera: slow linear descent directly above the riverbanks.
NO voice, NO speech, NO music. ONLY gentle river current and tidal bird chirp SFX.` },
      { t: 'O Tratado dos Pirenéus de 1659 e as 24 Conferências', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map rendering of the Pyrenean border established in 1659 between the French and Spanish crowns.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Portraits of Cardinal Mazarin and Don Luis de Haro flanking the islet.
Text on screen: "TRATADO DOS PIRENÉUS (1659) // FIM DE DÉCADAS DE GUERRA" in uppercase white Montserrat Bold.
Badge: "TERRITÓRIO NEUTRO ESCOLHIDO PARA NENHUM REI PISAR EM SOLO ALHEIO" in gold (#F59E0B).
Camera: technical orthographic push-in toward the historic conference pavilion.
NO voice, NO speech, NO music. ONLY royal trumpets and quill pen signing parchment SFX.` },
      { t: 'O Encontro de Reis e o Casamento de Luís XIV', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Vintage painting projection showing King Louis XIV meeting King Philip IV of Spain on the island.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border line dividing the ceremonial table exactly down the middle.
Text on screen: "O CASAMENTO DO REI SOL // MARIA TERESA DA ÁUSTRIA" in uppercase white Orbitron Bold.
Badge: "A ALIANÇA DINÁSTICA MAIS PODEROSA DO SÉCULO XVII" in intense crimson red (#C8102E).
Camera: slow cinematic flyover across the island monument.
NO voice, NO speech, NO music. ONLY baroque harpsichord chord and royal fanfare SFX.` },
      { t: 'O Tratado de Bayonne (1856): A Fórmula dos Seis Meses', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Calendar graphic splitting the year into two equal 6-month sovereign periods.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
1 Feb - 31 Jul highlighted under Spanish flag colors; 1 Aug - 31 Jan under French tricolor.
Text on screen: "TRATADO DE BAYONNE (1856) // SOBERANIA ROTATIVA" in uppercase white Montserrat Bold.
Badge: "O ÚNICO CONDOMÍNIO TERRITORIAL ATIVO COM ALTERNÂNCIA TEMPORAL" in sage green (#A8C3A6).
Camera: dynamic linear sweep across the Franco-Spanish border.
NO voice, NO speech, NO music. ONLY ticking clock pendulum and mechanical lock click SFX.` },
      { t: 'A Cerimônia Militar Semestral de Transmissão de Poder', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Naval patrol boats of the Spanish Armada and the French Marine Nationale mooring at the island pontoon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval commanders saluting before the stone obelisk monument.
Text on screen: "VICE-REIS DA ILHA // COMANDANTES NAVAIS DE SAN SEBASTIÁN E BAYONNE" in uppercase white Orbitron Bold.
Badge: "TRANSFERÊNCIA SOLENE EM FEVEREIRO E AGOSTO" in white (#F5F2EB).
Camera: technical orthographic push-in on the ceremonial flagpole.
NO voice, NO speech, NO music. ONLY military salute command and boat engine idle SFX.` },
      { t: 'O Refúgio Ecológico no Espaço Schengen', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up drone-style view of the lush canopy, poplars, and river shoreline.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Migratory bird flight paths and river otter habitat highlighted in green.
Text on screen: "SANTUÁRIO INTOCADO // ZERO TURISMO E PRESERVAÇÃO" in uppercase white Montserrat Bold.
Badge: "PROTEÇÃO CONTRA A EROSÃO FLUVIAL PELAS PREFEITURAS DE IRÚN E HENDAYE" in sage green (#A8C3A6).
Camera: low-altitude smooth drift above the treetops.
NO voice, NO speech, NO music. ONLY rustling leaves and water rippling SFX.` },
      { t: 'O Mistério do Nome: Onde Estão os Faisões?', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Toponymic text graphic comparing historical spellings: Pausans, Konpantzia, Faisans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Historical maps from the 16th and 17th centuries showing the river crossing toll.
Text on screen: "ERRO DE TRADUÇÃO HISTÓRICA // NUNCA HOUVE FAISÕES NA ILHA" in uppercase white Orbitron Bold.
Badge: "ORIGEM NO TERMO 'PAUSANOS' (PASSAGEIROS DO PEDÁGIO MEDIEVAL)" in gold (#F59E0B).
Camera: slow cinematic push-in on ancient cartographic cartouche.
NO voice, NO speech, NO music. ONLY antique parchment flutter and feather pen scratch SFX.` },
      { t: 'Símbolo Secular de Paz e Fronteira Aberta', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming out to show the Santiago international bridge and the Schengen border with high-speed TGV trains passing.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The islet resting peacefully between two friendly nations.
Text on screen: "DA GUERRA IMPERIAL À PAZ PERPÉTUA // O SÍMBOLO DO BIDASOA" in uppercase white Montserrat Bold.
Badge: "367 ANOS DE CONVIVÊNCIA DIPLOMÁTICA PACÍFICA" in cyan (#38BDF8).
Camera: high-altitude aerial ascent above the Basque coast and Atlantic ocean.
NO voice, NO speech, NO music. ONLY train horn echo and ocean wave swell SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the Iberian Peninsula and France with the Pyrenees frontier glowing softly.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 181: ESTREITO DE BERING
  {
    num: 181,
    titulo: 'Por Que Apenas Quatro Quilômetros de Mar Separam os Estados Unidos e a Rússia no Estreito de Bering?',
    roteiro: `Por que apenas quatro quilômetros de mar separam os Estados Unidos e a Rússia no Estreito de Bering? Longe de ficarem em lados opostos do globo, as duas maiores potências nucleares do planeta quase se tocam no topo congelado da Terra. No centro do estreito de oitenta e dois quilômetros que divide a Ásia da América do Norte, encontram-se duas ilhas de rocha: a Grande Diomede, pertencente à Rússia com uma base militar de radares, e a Pequena Diomede, dos Estados Unidos, onde vivem cerca de oitenta nativos inuit. A distância entre as duas é de exatos três mil e oitocentos metros de água. Mas a verdadeira loucura é temporal: por ali passa a Linha Internacional de Data, criando uma diferença de vinte e uma horas no relógio entre as margens. Quem está na ilha americana olha para a ilha russa e enxerga literalmente o dia de amanhã. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Arctic Circle, the Bering Strait, and the frozen Chukchi Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O FIM DO MUNDO POLAR"
Line 2 (intense crimson red #C8102E): "POR QUE APENAS 3,8 KM SEPARAM OS EUA E A RÚSSIA?"
Line 3 (pure white #F5F2EB): "AS ILHAS DIOMEDES E A LINHA DE DATA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the narrow marine gap between Chukotka and Alaska.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Ponte de Beríngia e a Separação dos Continentes', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Paleogeographic satellite map animation showing the sea level rising 120 meters and submerging the ancient Beringia land bridge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
82,5 km strait outlined between Cape Dezhnev (Siberia) and Cape Prince of Wales (Alaska).
Text on screen: "ESTREITO DE BERING // 82,5 KM DIVIDINDO ÁSIA E AMÉRICA" in uppercase white Orbitron Bold.
Badge: "PROFUNDIDADE RASA DE APENAS 30 A 50 METROS" in cyan (#38BDF8).
Camera: slow linear flyover above the grey subpolar waters.
NO voice, NO speech, NO music. ONLY howling subzero wind and glacial creaking SFX.` },
      { t: 'A Venda do Alasca em 1867 e a Linha no Meio das Ilhas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical treaty map of the 1867 Alaska Purchase signed by Seward and Stoeckl for 7.2 million dollars.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Straight vertical international border vector drawn through the middle of the Diomede Islands.
Text on screen: "COMPRA DO ALASCA (1867) // 7,2 MILHÕES DE DÓLARES" in uppercase white Montserrat Bold.
Badge: "A FRONTEIRA MARÍTIMA FIXADA NO CENTRO DAS DUAS ILHAS" in gold (#F59E0B).
Camera: technical orthographic push-in toward the island pair.
NO voice, NO speech, NO music. ONLY historical parchment rustle and compass needle lock SFX.` },
      { t: 'Grande Diomede (Rússia) vs. Pequena Diomede (EUA)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the two rocky basalt islands with tactical labels.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Left: Grande Diomede (29 km², Rússia, militar). Right: Pequena Diomede (7,3 km², EUA, aldeia inuit).
Distance caliper overlay: "EXATOS 3.800 METROS DE ÁGUA".
Text on screen: "APENAS 3,8 KM // SUPERPOTÊNCIAS OLHO NO OLHO" in uppercase white Orbitron Bold.
Badge: "A MAIS PRÓXIMA FRONTEIRA ENTRE WASHINGTON E MOSCOU" in intense crimson red (#C8102E).
Camera: slow linear tracking shot between the two rocky cliffs.
NO voice, NO speech, NO music. ONLY arctic ocean swell and radar pulse chime SFX.` },
      { t: 'O Paradoxo Temporal: 21 Horas de Diferença', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split-screen visual displaying the International Date Line running between the two islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Left (Grande Diomede): UTC+12 ("ILHA DO AMANHÃ // QUARTA-FEIRA").
Right (Pequena Diomede): UTC-9 ("ILHA DO ONTEM // TERÇA-FEIRA").
Text on screen: "ABISMO TEMPORAL // 21 HORAS DE DIFERENÇA NO RELÓGIO" in uppercase white Montserrat Bold.
Badge: "VOCÊ OLHA PELA JANELA E ENXERGA O FUTURO A 4 KM" in gold (#F59E0B).
Camera: dynamic linear sweep across the date line meridian.
NO voice, NO speech, NO music. ONLY ticking clock echo and time warp chime SFX.` },
      { t: 'A Cortina de Gelo e a Separação Inuit', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical winter archive photo projection showing sea ice frozen solid between the islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The Cold War "Ice Curtain" boundary glowing in crimson barbed-wire graphics.
Text on screen: "A CORTINA DE GELO (1948) // FRONTEIRA MILITARIZADA" in uppercase white Orbitron Bold.
Badge: "A POPULAÇÃO NATIVA RUSSA FOI EXPULSA PELA KGB" in intense crimson red (#C8102E).
Camera: technical push-in on the abandoned Soviet observation towers.
NO voice, NO speech, NO music. ONLY frozen snow footsteps and military radio static SFX.` },
      { t: 'A Travessia a Nado Histórica de Lynne Cox (1987)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking line tracing Lynne Cox's 3.8-kilometer swim in August 1987 in 4°C freezing water.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Blue glowing swim vector bridging the gap between Little Diomede and Big Diomede.
Text on screen: "LYNNE COX (1987) // O NADO QUE DEGELOU A GUERRA FRIA" in uppercase white Montserrat Bold.
Badge: "SAUDADA POR REAGAN E GORBACHEV EM WASHINGTON" in cyan (#38BDF8).
Camera: slow cinematic flyover above the cold marine passage.
NO voice, NO speech, NO music. ONLY ocean splash and deep atmospheric synth chord SFX.` },
      { t: 'A Rota do Mar do Norte e o Chokepoint do Ártico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Arctic shipping route map showing LNG tankers escorted by nuclear icebreakers from Yamal through the Bering Strait to China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bering Strait highlighted as the compulsory arctic funnel: "O NOVO SUEZ POLAR".
Text on screen: "CHOKEPOINT POLAR // ROTA DO MAR DO NORTE RUSSA" in uppercase white Orbitron Bold.
Badge: "ENVIANDO GÁS E PETRÓLEO PARA A ÁSIA EM METADE DO TEMPO" in gold (#F59E0B).
Camera: technical orthographic push-in on commercial cargo vectors.
NO voice, NO speech, NO music. ONLY icebreaker bow crushing sea ice and ship diesel rumble SFX.` },
      { t: 'O Projeto do Megatúnel Submarino Intercontinental', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Engineering 3D cutaway showing the proposed 103-kilometer subsea railway tunnel passing through the Diomede islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-speed rail line connecting Alaska rail network to the Trans-Siberian railway.
Text on screen: "MEGATÚNEL DE BERING (103 KM) // LIGAÇÃO AMÉRICA-ÁSIA" in uppercase white Montserrat Bold.
Badge: "TRENS DE CARGA DE NOVA YORK A PEQUIM PELO FUNDO DO MAR" in white (#F5F2EB).
Camera: low-altitude cross-section glide beneath the seabed.
NO voice, NO speech, NO music. ONLY underground drill hum and high-speed train whoosh SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the polar cap view of the Earth with the Bering Strait shining like a portal between two worlds.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 182: RANKING MAIORES PRODUTORES DE ALIMENTOS
  {
    num: 182,
    titulo: 'Quais São os Dez Maiores Produtores de Alimentos do Mundo Onde a Terra Alimenta Oito Bilhões de Pessoas?',
    roteiro: `Quais são os dez maiores produtores de alimentos do mundo onde a terra alimenta oito bilhões de pessoas? Quase dois terços de toda a comida produzida no planeta saem do solo de apenas dez países soberanos. No topo absoluto está a China, colhendo mais de seiscentos e cinquenta milhões de toneladas de arroz, trigo, carne suína e batatas para alimentar seu um vírgula quatro bilhão de habitantes. A Índia brilha na segunda posição liderando o leite, legumes e especiarias, enquanto os Estados Unidos ocupam o terceiro lugar dominando a tecnologia do milho e da soja no Meio-Oeste. O Brasil é o quarto maior produtor do globo e o líder mundial absoluto em exportação de soja, carne bovina, aves e café, alimentando quase um bilhão de pessoas fora de suas fronteiras. A lista segue com a Rússia dominando o trigo, a Indonésia com o óleo de palma, além de Nigéria, Argentina, Ucrânia e Paquistão. Os verdadeiros celeiros da civilização moderna. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning with green agricultural vegetation belts illuminated across continents.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O CELEIRO DA TERRA"
Line 2 (intense crimson red #C8102E): "OS DEZ MAIORES PRODUTORES DE ALIMENTOS DO PLANETA"
Line 3 (pure white #F5F2EB): "COMO 8 BILHÕES DE PESSOAS SÃO ALIMENTADAS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the fertile plains of East Asia and North America.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: China (650+ Milhões de Toneladas / Ano)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the Yangtze and Yellow River agricultural basins in China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chinese agricultural territory outlined in glowing gold (#F59E0B): "1º LUGAR // 650 MI TON".
Text on screen: "CHINA // O MAIOR COLHEDOR DE CALORIAS DO MUNDO" in uppercase white Orbitron Bold.
Badge: "LÍDER ABSOLUTO EM ARROZ, TRIGO, CARNE SUÍNA E BATATAS" in intense crimson red (#C8102E).
Camera: slow cinematic descent toward the North China Plain.
NO voice, NO speech, NO music. ONLY rice field breeze and grain auger whir SFX.` },
      { t: '2º Lugar: Índia (330+ Milhões de Toneladas / Ano)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of the Indian subcontinent tracing the Ganges basin and Punjab.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indian borders outlined in bright amber (#F59E0B): "2º LUGAR // 330 MI TON".
Text on screen: "ÍNDIA // O GIGANTE DO LEITE E LEGUMINOSAS" in uppercase white Montserrat Bold.
Badge: "METADE DA POPULAÇÃO TRABALHA NA AGRICULTURA FAMILIAR" in gold (#F59E0B).
Camera: dynamic linear flyover above the irrigated green patchwork of Punjab.
NO voice, NO speech, NO music. ONLY monsoon rain thunder and farm bell SFX.` },
      { t: '3º Lugar: Estados Unidos (450+ Milhões de Toneladas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the North American Corn Belt (Iowa, Illinois, Nebraska) and the Mississippi River basin.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
US heartland in Bege Cartográfico (#F5F2EB): "3º LUGAR // LÍDER EM MILHO".
Text on screen: "ESTADOS UNIDOS // O IMPÉRIO DA BIOTECNOLOGIA AGRÍCOLA" in uppercase white Orbitron Bold.
Badge: "MAIOR EXPORTADOR GLOBAL DE MILHO E GRÃOS PROCESSADOS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over rectangular crop fields.
NO voice, NO speech, NO music. ONLY combine harvester diesel roar and grain silo blower SFX.` },
      { t: '4º Lugar: Brasil (320+ Milhões de Toneladas - Maior Exportador Líquido)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming onto the Brazilian Center-West (Mato Grosso, Goiás) and Western Bahia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Brazilian agricultural frontier glowing in radiant sage green (#A8C3A6): "4º LUGAR // CELEIRO GLOBAL".
Text on screen: "BRASIL // O MAIOR EXPORTADOR DE PROTEÍNA E SOJA DA TERRA" in uppercase white Montserrat Bold.
Badge: "LÍDER MUNDIAL EM SOJA, CARNE BOVINA, AVES, CAFÉ E AÇÚCAR" in gold (#F59E0B).
Camera: slow cinematic flyover across immense mechanized soybean fields.
NO voice, NO speech, NO music. ONLY heavy tractor engine rumble and flock of birds SFX.` },
      { t: '5º Lugar: Rússia (140+ Milhões de Toneladas - O Trigo do Chernozem)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map tracing the black soil belt (Chernozem) from the Kuban region to Western Siberia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Russian grain belt outlined in amber: "5º LUGAR // 90 MI TON DE TRIGO".
Text on screen: "RÚSSIA // O MAIOR EXPORTADOR DE TRIGO DO MUNDO" in uppercase white Orbitron Bold.
Badge: "ALIMENTANDO O NORTE DA ÁFRICA E O ORIENTE MÉDIO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in toward the Black Sea grain terminals in Novorossiysk.
NO voice, NO speech, NO music. ONLY wind sweeping steppe wheat and ship crane clank SFX.` },
      { t: '6º Lugar: Indonésia (115+ Mi Ton - O Monopólio do Óleo de Palma)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Sumatra and Kalimantan showing oil palm plantation canopies and rice terraces.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indonesian archipelago in bright sage green (#A8C3A6): "6º LUGAR // 60% DO ÓLEO DE PALMA".
Text on screen: "INDONÉSIA // A GORDURA VEGETAL QUE MOVE A INDÚSTRIA" in uppercase white Montserrat Bold.
Badge: "BASE OBRIGATÓRIA DE ALIMENTOS PROCESSADOS E COSMÉTICOS" in white (#F5F2EB).
Camera: dynamic linear flyover above tropical palm plantations.
NO voice, NO speech, NO music. ONLY tropical rainforest rainfall and oil press hum SFX.` },
      { t: '7º e 8º Lugares: Nigéria (100 mi) e Argentina (95 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split map showing Nigeria (Niger River basin) and Argentina (Pampas and the Paraná river ports).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders highlighted in gold (#F59E0B) and Bege Cartográfico.
Text on screen: "NIGÉRIA E ARGENTINA // MANDIOCA AFRICANA E OS PAMPAS" in uppercase white Orbitron Bold.
Badge: "NIGÉRIA: MAIOR PRODUTOR DE MANDIOCA // ARGENTINA: LÍDER EM FARELO DE SOJA" in intense crimson red (#C8102E).
Camera: diagonal flyover from West Africa to the Rio de la Plata.
NO voice, NO speech, NO music. ONLY river barge engine chug and grain loader chute SFX.` },
      { t: '9º e 10º Lugares: Ucrânia (65 mi) e Paquistão (60 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map showing Ukraine's Dnieper river plains (sunflower/wheat) and Pakistan's Indus River irrigation grid.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territories outlined in radiant cyan (#38BDF8) and amber.
Text on screen: "UCRÂNIA E PAQUISTÃO // GIRASSOL E O VALE DO INDO" in uppercase white Montserrat Bold.
Badge: "UCRÂNIA: LÍDER EM ÓLEO DE GIRASSOL // PAQUISTÃO: ARROZ BASMATI" in gold (#F59E0B).
Camera: slow cinematic sweep across irrigated green valleys.
NO voice, NO speech, NO music. ONLY canal irrigation gate splash and gentle wind chime SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete illuminated Earth with agricultural supply lines radiating across continents.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 183: RANKING MAIORES PORTOS DE CONTÊINERES
  {
    num: 183,
    titulo: 'Quais São os Dez Maiores Portos de Contêineres do Mundo Onde Milhões de Navios Movem o Comércio Global?',
    roteiro: `Quais são os dez maiores portos de contêineres do mundo onde milhões de navios movem o comércio global? Mais de noventa por cento de tudo o que consumimos no mundo moderno viajou dentro de um contêiner metálico. No topo absoluto do planeta está o Porto de Xangai na China, movimentando inacreditáveis quarenta e nove milhões de contêineres por ano com seu megaterminal automatizado de Yangshan construído em ilhas no meio do mar. Singapura ocupa o segundo lugar com trinta e nove milhões como o maior hub de transbordo do globo no Estreito de Malaca, seguido de perto por Ningbo-Zhoushan, Shenzhen e Qingdao. Impressionantes nove dos dez maiores portos do planeta ficam na Ásia, refletindo a força da manufatura do Oriente, enquanto no Ocidente apenas o complexo de Los Angeles e Long Beach e o porto holandês de Roterdã conseguem competir. As verdadeiras catedrais do comércio marítimo da Terra. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning with marine shipping container lanes glowing like golden spiderwebs across the oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "AS ARTÉRIAS DA GLOBALIZAÇÃO"
Line 2 (intense crimson red #C8102E): "OS DEZ MAIORES PORTOS DE CONTÊINERES DO MUNDO"
Line 3 (pure white #F5F2EB): "ONDE 90% DO COMÉRCIO GLOBAL É MOVIMENTADO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the East China Sea and the Strait of Malacca.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Porto de Xangai (49,15 Milhões de TEUs)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the Yangtze River estuary and the offshore deep-water port of Yangshan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Donghai Bridge spanning 32 km with automated AGV vehicle routes glowing in gold (#F59E0B): "1º LUGAR // 49,15 MI TEUS".
Text on screen: "XANGAI (CHINA) // O MAIOR PORTO DE CONTÊINERES DA TERRA" in uppercase white Orbitron Bold.
Badge: "TERMINAL DE YANGSHAN TOTALMENTE AUTOMATIZADO COM 5G E IA" in intense crimson red (#C8102E).
Camera: slow cinematic descent toward massive Ship-to-Shore cranes.
NO voice, NO speech, NO music. ONLY container twist-lock metallic clank and ship horn SFX.` },
      { t: '2º Lugar: Porto de Singapura (39,01 Milhões de TEUs)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Singapore Strait and the new Tuas Mega Port under construction.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Hundreds of anchored container vessels illuminated in amber: "2º LUGAR // 39,01 MI TEUS".
Text on screen: "SINGAPURA // O MAIOR HUB DE TRANSBORDO DO GLOBO" in uppercase white Montserrat Bold.
Badge: "NO CHOKEPOINT DO ESTREITO DE MALACA LIGANDO ÁSIA E EUROPA" in gold (#F59E0B).
Camera: dynamic linear flyover above Singapore container terminals.
NO voice, NO speech, NO music. ONLY radar scan sweep and marine engine rumble SFX.` },
      { t: '3º Lugar: Ningbo-Zhoushan (35,30 Milhões de TEUs)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Hangzhou Bay and the deep-water archipelago of Zhoushan south of Shanghai.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Berthing docks in vibrant electric blue (#38BDF8): "3º LUGAR // 35,30 MI TEUS".
Text on screen: "NINGBO-ZHOUSHAN (CHINA) // CALADO PROFUNDO DE 20+ METROS" in uppercase white Orbitron Bold.
Badge: "MAIOR PORTO DO MUNDO EM TONELAGEM BRUTA TOTAL TRANSPORTADA" in sage green (#A8C3A6).
Camera: technical orthographic push-in over container berths.
NO voice, NO speech, NO music. ONLY container gantry crane electric whine SFX.` },
      { t: '4º e 5º Lugares: Shenzhen (30,0 mi) e Qingdao (28,7 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of Chinese coast highlighting Shenzhen (Pearl River Delta) and Qingdao (Shandong Peninsula).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ports outlined in Bege Cartográfico (#F5F2EB) and gold.
Text on screen: "SHENZHEN E QINGDAO // O CORAÇÃO DA MANUFATURA CHINESA" in uppercase white Montserrat Bold.
Badge: "SHENZHEN ESCOA ELETRÔNICOS // QINGDAO CONECTA JAPÃO E COREIA" in intense crimson red (#C8102E).
Camera: linear tracking sweep up the Chinese coastline.
NO voice, NO speech, NO music. ONLY factory hum and container terminal alarm chime SFX.` },
      { t: '6º e 7º Lugares: Guangzhou (25,4 mi) e Busan (23,2 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Pearl River estuary (Guangzhou) and the southeastern coast of South Korea (Busan).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Busan highlighted as the top non-Chinese East Asian port: "7º LUGAR // 23,2 MI TEUS".
Text on screen: "GUANGZHOU E BUSAN // POTÊNCIA INDUSTRIAL E ALTA TECNOLOGIA" in uppercase white Orbitron Bold.
Badge: "BUSAN É A PORTA DE EXPORTAÇÃO DE CARROS E CHIPS SUL-COREANOS" in gold (#F59E0B).
Camera: technical orthographic push-in toward Busan New Port.
NO voice, NO speech, NO music. ONLY ship bow cutting waves and gantry crane buzzer SFX.` },
      { t: '8º e 9º Lugares: Tianjin (22,1 mi) e Jebel Ali / Dubai (14,5 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split map showing Tianjin in the Bohai Gulf (maritime gate of Beijing) and Jebel Ali in the United Arab Emirates.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Port of Jebel Ali outlined in desert gold: "9º LUGAR // MAIOR PORTO ARTIFICIAL".
Text on screen: "TIANJIN E JEBEL ALI // A PORTA DE PEQUIM E O HUB DO ORIENTE MÉDIO" in uppercase white Montserrat Bold.
Badge: "JEBEL ALI É O MAIOR PORTO CONSTRUÍDO PELO HOMEM NA HISTÓRIA" in white (#F5F2EB).
Camera: dynamic linear flyover from Northern China to the Persian Gulf.
NO voice, NO speech, NO music. ONLY desert wind and container stacking clang SFX.` },
      { t: '10º Lugar: Complexo Los Angeles / Long Beach e Roterdã (14+ mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map showing San Pedro Bay in California (LA/Long Beach: 19 mi TEUs) and the Maasvlakte in Rotterdam (14,1 mi TEUs).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The two top Western import terminals highlighted in cyan (#38BDF8).
Text on screen: "LOS ANGELES E ROTERDÃ // OS GIGANTES DO MUNDO OCIDENTAL" in uppercase white Orbitron Bold.
Badge: "LA: ENTRADA DE 40% DAS IMPORTAÇÕES DOS EUA // ROTERDÃ: PORTA DA EUROPA" in intense crimson red (#C8102E).
Camera: slow cinematic sweep across container terminals and rail yards.
NO voice, NO speech, NO music. ONLY diesel freight train horn and harbor tugboat whistle SFX.` },
      { t: 'O Domínio Asiático: 9 dos 10 Maiores Portos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infographic world map highlighting the 10 ports, with 9 bright beacons flashing across Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "A HEGEMONIA DO PACÍFICO // 9 DOS 10 MAIORES PORTOS NA ÁSIA" in uppercase white Montserrat Bold.
Badge: "A TRANSFERÊNCIA DA PRODUÇÃO MUNDIAL PARA O ORIENTE" in gold (#F59E0B).
Camera: high-altitude continental zoom out over Eurasia and the Pacific.
NO voice, NO speech, NO music. ONLY digital telemetry chime and orchestral pulse SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete blue Earth with container ship tracks glowing across the oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 184: RANKING PAÍSES MAIS DENSAMENTE POVOADOS
  {
    num: 184,
    titulo: 'Quais São os Dez Países Mais Densamente Povoados do Mundo Onde Milhares de Pessoas Disputam Cada Quilômetro Quadrado?',
    roteiro: `Quais são os dez países mais densamente povoados do mundo onde milhares de pessoas disputam cada quilômetro quadrado? Se a população mundial fosse espalhada igualmente pela Terra, haveria cerca de sessenta pessoas por quilômetro quadrado. Mas em alguns territórios, a falta de espaço levou a humanidade ao limite. Mônaco é o país soberano mais denso do planeta, abrigando mais de vinte e seis mil habitantes por quilômetro quadrado empilhados em arranha-céus na Riviera Francesa. Singapura ocupa o segundo lugar com mais de oito mil pessoas por quilômetro quadrado graças ao seu planejamento urbano futurista, seguido por ilhas como Bahrein, Maldivas e Malta. Mas a verdadeira anomalia demográfica é Bangladesh: um país de cento e setenta e três milhões de habitantes onde treze mil pessoas vivem em cada dez quilômetros quadrados espremidas no delta do rio Ganges. O mapa das nações onde cada metro de chão é disputado a peso de ouro. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into world population density heatmaps with glowing clusters.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O LIMITE DO ESPAÇO HUMANO"
Line 2 (intense crimson red #C8102E): "OS DEZ PAÍSES MAIS DENSAMENTE POVOADOS DO PLANETA"
Line 3 (pure white #F5F2EB): "ONDE MILHARES DISPUTAM CADA KM²"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Mediterranean coast and South Asia.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Mônaco (26.337 Habitantes por km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the 2,08 km² microstate of Monaco surrounded by the French Riviera.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territory outlined in radiant gold (#F59E0B): "1º LUGAR // 26.337 HAB/KM²".
Text on screen: "MÔNACO // O PAÍS MAIS ADENSADO DA TERRA" in uppercase white Orbitron Bold.
Badge: "39 MIL HABITANTES EM UMA ÁREA MENOR QUE O CENTRAL PARK" in intense crimson red (#C8102E).
Camera: slow cinematic descent toward dense cliffside skyscrapers and mega-yacht marinas.
NO voice, NO speech, NO music. ONLY Mediterranean breeze and luxury car engine rev SFX.` },
      { t: '2º Lugar: Singapura (8.358 Habitantes por km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the island-state of Singapore showing high-rise HDB housing blocks and green urban corridors.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island borders in bright electric blue (#38BDF8): "2º LUGAR // 8.358 HAB/KM²".
Text on screen: "SINGAPURA // VANGUARDA DO PLANEJAMENTO VERTICAL" in uppercase white Montserrat Bold.
Badge: "6 MILHÕES DE HABITANTES EM 734 KM² COM PARQUES SUSPENSOS" in sage green (#A8C3A6).
Camera: dynamic linear flyover above Marina Bay and Gardens by the Bay.
NO voice, NO speech, NO music. ONLY subway chime and futuristic city hum SFX.` },
      { t: '3º Lugar: Bahrein (2.239 Habitantes por km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the archipelago of Bahrain in the Persian Gulf with artificial island reclamation projects.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island coastline in Bege Cartográfico (#F5F2EB): "3º LUGAR // 2.239 HAB/KM²".
Text on screen: "BAHREIN // A CIDADE-ILHA DO GOLFO PÉRSICO" in uppercase white Orbitron Bold.
Badge: "1,5 MILHÃO DE HABITANTES EM 786 KM² DE ILHAS ARTIFICIAIS" in gold (#F59E0B).
Camera: technical orthographic push-in over Manama financial towers.
NO voice, NO speech, NO music. ONLY gulf coastal wind and construction crane clank SFX.` },
      { t: '4º e 5º Lugares: Maldivas (1.802 hab/km²) e Malta (1.672 hab/km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Malé island in the Maldives (packed solid with concrete buildings) and Malta in the Mediterranean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Islands outlined in cyan and gold.
Text on screen: "MALDIVAS E MALTA // A PRESSÃO DEMOGRÁFICA NAS ILHAS" in uppercase white Montserrat Bold.
Badge: "MALÉ É UMA DAS CIDADES MAIS CONGESTIONADAS DO PLANETA" in intense crimson red (#C8102E).
Camera: slow cinematic flyover across Malé's island edge and Valletta fortress walls.
NO voice, NO speech, NO music. ONLY ocean surf surge and church bell chime SFX.` },
      { t: '6º Lugar: O Gigante Bangladesh (1.328 Habitantes por km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of Bangladesh showing the immense green alluvial Ganges-Brahmaputra Delta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders highlighted in vibrant amber (#F59E0B): "6º LUGAR // 173 MILHÕES".
Text on screen: "BANGLADESH // A ANOMALIA DEMOGRÁFICA GLOBAL" in uppercase white Orbitron Bold.
Badge: "O ÚNICO PAÍS POPULOSO COM DENSIDADE DE MICROESTADO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over the river braided channels.
NO voice, NO speech, NO music. ONLY river delta water flow and distant bustling city roar SFX.` },
      { t: '7º e 8º Lugares: Vaticano (1.000 hab/km²) e Palestina (892 hab/km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Urban map of the 0,44 km² Vatican walled city inside Rome and the densely populated coastal strip of the Gaza Strip and West Bank.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vatican and Palestinian territories highlighted with density metrics.
Text on screen: "VATICANO E PALESTINA // O MENOR ESTADO E A CRISE DE ESPAÇO" in uppercase white Montserrat Bold.
Badge: "EM GAZA, A DENSIDADE URBANA SUPERA 5.500 HABITANTES POR KM²" in white (#F5F2EB).
Camera: low-altitude tracking shot over St. Peter's Square and coastal refugee blocks.
NO voice, NO speech, NO music. ONLY church bells tolling and urban drone hum SFX.` },
      { t: '9º e 10º Lugares: Barbados (668 hab/km²) e Maurício (626 hab/km²)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the coral island of Barbados in the Caribbean and volcanic Mauritius in the Indian Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tropical coastlines outlined in bright sage green (#A8C3A6).
Text on screen: "BARBADOS E MAURÍCIO // PARAÍSOS TROPICAIS ADENSADOS" in uppercase white Orbitron Bold.
Badge: "MAIS DE 600 PESSOAS POR KM² VIVENDO EM ILHAS ISOLADAS" in gold (#F59E0B).
Camera: dynamic linear flyover above turquoise coral lagoons.
NO voice, NO speech, NO music. ONLY tropical wave wash and palm frond rustle SFX.` },
      { t: 'Polderização e Megaprojetos no Mar: O Futuro Urbano', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Architectural 3D model of Monaco's Mareterra offshore district and Singapore's coastal reclamation caissons.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Artificial land expanding over the ocean highlighted in cyan (#38BDF8).
Text on screen: "CONQUISTANDO O OCEANO // ILHAS ARTIFICIAIS E ATERROS" in uppercase white Montserrat Bold.
Badge: "QUANDO A TERRA ACABA, AS CIDADES AVANÇAM SOBRE AS ÁGUAS" in sage green (#A8C3A6).
Camera: slow cinematic descent toward modern seaside pedestrian plazas.
NO voice, NO speech, NO music. ONLY construction pile driver and sea foam splash SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete night Earth with city lights blazing intensely in dense population clusters.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  }
];

// 1. Criar os 10 arquivos de roteiro
console.log(`Gerando ${videos.length} roteiros de vídeo em ${roteirosDir}...`);
for (const v of videos) {
  const fileName = `Video ${v.num}.md`;
  const filePath = path.join(roteirosDir, fileName);

  let content = `# Video ${v.num} — ${v.titulo}\n\n`;
  content += `### 1. Roteiro\n\n`;
  content += `${v.roteiro}\n\n`;
  content += `---\n\n`;
  content += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  let pCount = 0;
  for (const p of v.prompts) {
    pCount++;
    content += `#### Prompt ${pCount} — ${p.t} (4s)\n`;
    content += `\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }

  content += `---\n\n`;
  content += `### 3. Legenda\n\n`;
  content += `${v.titulo}\n\n`;
  content += `#geografia #geopolitica #mapas\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Gerado: ${fileName} (${content.length} caracteres)`);
}

// 2. Atualizar Índice.md
console.log('Atualizando Índice.md...');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

const newTableRows = videos.map(v => {
  return `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`;
}).join('\n');

const targetLine = '| 174 | [[Projetos/VitaleGeo/Roteiros/Video 174|Video 174]] | Quais São os Dez Países Mais Visitados do Mundo Onde Centenas de Milhões de Turistas Redefinem as Fronteiras das Viagens? |';

if (indiceContent.includes(targetLine)) {
  indiceContent = indiceContent.replace(targetLine, `${targetLine}\n${newTableRows}`);
  indiceContent = indiceContent.replace(/Acervo oficial de \*\*(\d+) roteiros de vídeo\*\*/, (match, p1) => {
    const novoTotal = parseInt(p1, 10) + videos.length;
    return `Acervo oficial de **${novoTotal} roteiros de vídeo**`;
  });
  fs.writeFileSync(indicePath, indiceContent, 'utf8');
  console.log(`✓ Índice.md atualizado com sucesso com os vídeos 175 a 184!`);
} else {
  console.warn('⚠️ Linha alvo não encontrada em Índice.md para injeção automática.');
}
