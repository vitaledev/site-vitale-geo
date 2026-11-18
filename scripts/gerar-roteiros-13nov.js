// Gerador de Roteiros de Vídeo (Videos 195 a 204)
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 195,
    titulo: 'Como o Tratado de Lausanne e a Queda do Império Otomano Desenharam as Fronteiras da Turquia Moderna Entre Dois Continentes?',
    roteiro: 'Como o Tratado de Lausanne e a Queda do Império Otomano Desenharam as Fronteiras da Turquia Moderna Entre Dois Continentes? Espalhada entre a Europa e a Ásia, a Turquia moderna nasceu de uma dramática reviravolta militar e diplomática. Derrotado na Primeira Guerra Mundial, o outrora colossal Império Otomano foi esquartejado pelo humilhante Tratado de Sèvres de 1920, que reduzia o território turco a um enclave sem litoral no norte da Anatólia, enquanto tropas gregas, britânicas e francesas ocupavam Istambul e Esmirna. Liderada pelo general Mustafa Kemal Atatürk, a Guerra de Independência Turca expulsou as forças de ocupação na lendária Batalha de Sakarya. Assinado em 1923, o Tratado de Lausanne anulou a partilha colonial, recuperou a Trácia Oriental e consagrou a soberania republicana sobre setecentos e oitenta e três mil quilômetros quadrados. Treze anos depois, a Convenção de Montreux devolveu a Ancara o controle militar exclusivo dos vitais Estreitos de Bósforo e Dardanelos. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A QUEDA DO IMPÉRIO OTOMANO',
      l2: 'COMO O TRATADO DE LAUSANNE RECRIOU A TURQUIA',
      l3: 'A FRONTEIRA ENTRE DOIS CONTINENTES'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Colapso Otomano',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Mediterranean and Black Sea, highlighting the Anatolian peninsula and Bosphorus strait.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A QUEDA DO IMPÉRIO OTOMANO"
Line 2 (intense crimson red #C8102E): "COMO O TRATADO DE LAUSANNE RECRIOU A TURQUIA"
Line 3 (pure white #F5F2EB): "A FRONTEIRA ENTRE DOIS CONTINENTES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Sea of Marmara and Istanbul.
NO voice, NO speech, NO music. ONLY deep cinematic rumble and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Império Otomano e a Partilha de Sèvres de 1920',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite map of the partitioned Ottoman Empire under the Treaty of Sèvres (1920).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Partition zones outlined in distinct colors: Greek zone in Aegean, French mandate in Cilicia, British control in straits and Italian zone in Antalya.
Text on screen: "TRATADO DE SÈVRES (1920) // O DESMEMBRAMENTO OTOMANO" in uppercase white Orbitron Bold.
Badge: "TURQUIA REDUZIDA A UM ENCLAVE SEM LITORAL NA ANATÓLIA" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing foreign naval fleets occupying the Golden Horn in Istanbul.
NO voice, NO speech, NO music. ONLY old artillery thunder and military march drum echo SFX.`
      },
      {
        titulo: 'O Desembarque em Samsun e a Resistência em Ancara',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming into Samsun on the Black Sea coast and tracing the mountainous route to Ankara.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical line in radiant gold (#F59E0B) marking Mustafa Kemal's path to declare the Grand National Assembly.
Text on screen: "SAMSUN A ANCARA // A SEDE DA RESISTÊNCIA REPUBLICANA" in uppercase white Montserrat Bold.
Badge: "ANCARA ESCOLHIDA NO CORAÇÃO DA ANATÓLIA FORA DO ALCANCE NAVAL" in sage green (#A8C3A6).
Camera: linear tracking shot moving from Black Sea cliffs into Central Anatolian plateau.
NO voice, NO speech, NO music. ONLY dry steppe wind and telegraph transmission click SFX.`
      },
      {
        titulo: 'A Batalha de Sakarya e a Grande Ofensiva',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite battlefield map around the Sakarya River showing Greek advance lines and Turkish defensive arcs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Frontline pulsing in crimson red (#C8102E) retreating westward toward Izmir (Smyrna).
Text on screen: "BATALHA DE SAKARYA // 22 DIAS DE COMBATE TOTAL" in uppercase white Orbitron Bold.
Badge: "A LINHA DE DEFESA É A SUPERFÍCIE DA PÁTRIA INTEIRA" in gold (#F59E0B).
Camera: dynamic linear flyover following the Sakarya river bend into Western Anatolia.
NO voice, NO speech, NO music. ONLY distant cavalry charge and heavy shell impact SFX.`
      },
      {
        titulo: 'A Conferência de Paz de Lausanne na Suíça',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
European satellite view panning from Geneva Lake in Lausanne across the Balkans to the Turkish borders.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomatic treaty overlay with British, French, Greek, and Turkish delegations.
Text on screen: "TRATADO DE LAUSANNE // 24 DE JULHO DE 1923" in uppercase white Montserrat Bold.
Badge: "ANULAÇÃO TOTAL DE SÈVRES E RECONHECIMENTO DA SOBERANIA" in Bege Cartográfico (#F5F2EB).
Camera: smooth lateral pan along the newly established land border on the Evros River.
NO voice, NO speech, NO music. ONLY diplomat fountain pen scratch and clock chime SFX.`
      },
      {
        titulo: 'A Trácia Oriental e a Fronteira com a Grécia no Rio Evros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed satellite view of Eastern Thrace, Edirne, and the winding course of the Evros (Meriç) River.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2px vector border line in vibrant gold (#F59E0B) separating Greece and Turkey in Europe.
Text on screen: "TRÁCIA ORIENTAL // OS 3% DA TURQUIA NA EUROPA" in uppercase white Orbitron Bold.
Badge: "TROCA COMPULSÓRIA DE MAIS DE 1,5 MILHÃO DE POPULAÇÕES" in slate gray (#53647C).
Camera: slow orthographic push-in above the historic Ottoman mosques of Edirne.
NO voice, NO speech, NO music. ONLY river current whisper and distant train whistle SFX.`
      },
      {
        titulo: 'Os Estreitos Turcos: Bósforo e Dardanelos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ultra high-resolution satellite imagery tracking the narrow Bosphorus strait winding through Istanbul into Black Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Nautical corridors highlighted with tactical shipping lanes in electric blue (#38BDF8).
Text on screen: "BÓSFORO E DARDANELOS // O ESTRANGULAMENTO MARÍTIMO" in uppercase white Montserrat Bold.
Badge: "LARGURA MÍNIMA DE APENAS 700 METROS ENTRE DOIS CONTINENTES" in gold (#F59E0B).
Camera: continuous high-altitude track shot above Bosphorus suspension bridges.
NO voice, NO speech, NO music. ONLY container ship fog horn and maritime current surge SFX.`
      },
      {
        titulo: 'A Convenção de Montreux de 1936',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Naval strategy map illustrating Montreux Convention rules over the Turkish Straits.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Fortress icons glowing at Çanakkale and Istanbul with Turkish sovereignty shield.
Text on screen: "CONVENÇÃO DE MONTREUX (1936) // PODER DE FECHAR O MAR NEGRO" in uppercase white Orbitron Bold.
Badge: "ANCARA TEM AUTORIDADE TOTAL PARA BARRAR NAVIOS DE GUERRA" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on Dardanelles strait forts.
NO voice, NO speech, NO music. ONLY coastal sonar ping and naval radar sweep SFX.`
      },
      {
        titulo: 'A Anexação de Hatay em 1939 e o Mapa Atual',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Southern Mediterranean satellite view focusing on the Gulf of Alexandretta and the province of Hatay.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territorial boundary adjusting dynamically in radiant green (#A8C3A6) as Hatay joins the Republic.
Text on screen: "HATAY (1939) // A ÚLTIMA PEÇA DO MAPA TURCO MODERNO" in uppercase white Montserrat Bold.
Badge: "PLEBISCITO HISTÓRICO SELOU OS 783.562 KM² DEFINITIVOS" in white (#F5F2EB).
Camera: slow pull-back revealing the complete, intact borders of modern Turkey.
NO voice, NO speech, NO music. ONLY warm Mediterranean breeze and soft digital click SFX.`
      },
      {
        titulo: 'Encerramento e o Pivô Geopolítico Euro-Asiático',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the entire Republic of Turkey bridging Europe, Asia, and Middle East.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector national border glowing in Bege Cartográfico (#F5F2EB) with subtle terrain relief shading.
Text on screen: "A FORJA TERRITORIAL DA PONTE ENTRE DOIS MUNDOS" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into planetary space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 196,
    titulo: 'Por Que o Relevo Acidentado e o Estreito de Cento e Sessenta Quilômetros Fazem de Taiwan a Ilha Mais Cobiçada e Perigosa do Planeta?',
    roteiro: 'Por Que o Relevo Acidentado e o Estreito de Cento e Sessenta Quilômetros Fazem de Taiwan a Ilha Mais Cobiçada e Perigosa do Planeta? A apenas cento e sessenta quilômetros da costa da China, a ilha de Taiwan concentra a maior tensão militar e tecnológica da Terra. Muito além das declarações políticas, sua defesa repousa sobre uma geografia impiedosa: o Estreito de Taiwan é assolado por tufões e monções na maior parte do ano, e sua costa oeste é cercada por lamaçais e apenas catorze pequenas praias aptas para desembarque anfíbio. Logo atrás, a Cordilheira Central ergue mais de duzentos picos acima de três mil metros, transformando a ilha em uma fortaleza natural inexpugnável. Além disso, Taiwan é o coração da Primeira Cadeia de Ilhas que bloqueia o acesso naval da China ao Pacífico aberto, e abriga a TSMC, responsável por mais de noventa por cento dos microchips de vanguarda do planeta no chamado Escudo de Silício. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A ILHA MAIS COBIÇADA DO PLANETA',
      l2: 'POR QUE TAIWAN É UMA FORTALEZA NATURAL E TECNOLÓGICA',
      l3: 'O ESTREITO DE 160 KM E O ESCUDO DE SILÍCIO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Ponto Mais Tenso da Terra',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into East Asia, highlighting the island of Taiwan and the narrow strait separating it from mainland China.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ILHA MAIS COBIÇADA DO PLANETA"
Line 2 (intense crimson red #C8102E): "POR QUE TAIWAN É UMA FORTALEZA NATURAL E TECNOLÓGICA"
Line 3 (pure white #F5F2EB): "O ESTREITO DE 160 KM E O ESCUDO DE SILÍCIO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Taiwan Strait.
NO voice, NO speech, NO music. ONLY deep electronic hum and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Estreito de Taiwan: 160 km de Pesadelo Naval',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view measuring the Taiwan Strait between Fujian province and Taiwan's western coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in radiant gold (#F59E0B): "130 KM A 180 KM // MÉDIA DE 160 KM".
Text on screen: "ESTREITO DE TAIWAN // ÁGUAS TEMPESTUOSAS E MONÇÕES" in uppercase white Orbitron Bold.
Badge: "JANELA DE TRAVESSIA SEGURA RESTRITA A APENAS 4 MESES POR ANO" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing sea swells and ocean current vectors.
NO voice, NO speech, NO music. ONLY violent ocean surf roar and wind gust SFX.`
      },
      {
        titulo: 'As 14 Praias Vermelhas e o Litoral de Lamaçais',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up topographic satellite analysis of Taiwan's western coastline highlighting shallow tidal mudflats.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical markers in crimson red (#C8102E) pinpointing the only 14 viable landing beaches.
Text on screen: "PRAIAS VERMELHAS // O FUNIL DE UM DESEMBARQUE ANFÍBIO" in uppercase white Montserrat Bold.
Badge: "ÁGUAS RASAS E LODO IMPEDEM APROXIMAÇÃO DE MEGANAVIOS" in Bege Cartográfico (#F5F2EB).
Camera: dynamic linear flyover above Taoyuan and Hsinchu coastal flats.
NO voice, NO speech, NO music. ONLY tide wash and tactical sonar beep SFX.`
      },
      {
        titulo: 'A Cordilheira Central: Muralha de Quase 4.000 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D perspective satellite map of Taiwan's Central Mountain Range (Zhongyang Shanmo).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Elevation callout in radiant green (#A8C3A6): "MONTE YU SHAN // ▲ 3.952 METROS".
Text on screen: "CORDILHEIRA CENTRAL // MAIS DE 200 PICOS ACIMA DE 3.000 M" in uppercase white Orbitron Bold.
Badge: "BARREIRA TOPOGRÁFICA NATURAL QUE DIVIDE A ILHA" in gold (#F59E0B).
Camera: sweeping cinematic flyover along sharp forested peaks and narrow mountain passes.
NO voice, NO speech, NO music. ONLY high-altitude mountain wind howl SFX.`
      },
      {
        titulo: 'A Primeira Cadeia de Ilhas e o Confinamento Naval',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic broad view of the Western Pacific illustrating the First Island Chain from Japan to the Philippines.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical chain line glowing in intense crimson red (#C8102E) with Taiwan at the dead center.
Text on screen: "PRIMEIRA CADEIA DE ILHAS // O PIVÔ DO INDO-PACÍFICO" in uppercase white Montserrat Bold.
Badge: "BLOQUEIA A SAÍDA DISCRETA DE SUBMARINOS CHINESES PARA O PACÍFICO" in Bege Cartográfico (#F5F2EB).
Camera: slow orthographic push-in centering directly on Taiwan's eastern deep-water drop-off.
NO voice, NO speech, NO music. ONLY submarine sonar ping and ocean deep resonance SFX.`
      },
      {
        titulo: 'O Escudo de Silício da TSMC em Hsinchu',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into Hsinchu Science Park in northwestern Taiwan overlaid with microchip circuitry graphics.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Market share graphic in electric blue (#38BDF8): "> 90% DOS CHIPS DE VANGUARDA (< 3NM)".
Text on screen: "TSMC // O ESCUDO DE SILÍCIO PLANETÁRIO" in uppercase white Orbitron Bold.
Badge: "UMA GUERRA PARALISARIA A INDÚSTRIA MUNDIAL EM DIAS" in gold (#F59E0B).
Camera: technical orthographic push-in on modular fab cleanroom complexes.
NO voice, NO speech, NO music. ONLY digital data processing hum and cleanroom air flow SFX.`
      },
      {
        titulo: 'As Sentinelas Avançadas: Ilhas Kinmen e Matsu',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme close-up satellite map of Kinmen Island located inside Xiamen Bay, mainland China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance callout: "APENAS 3,2 KM DOS ARRANHA-CÉUS DE XIAMEN".
Text on screen: "ILHAS KINMEN // A FORTALEZA SUBTERRÂNEA DENTRO DA CHINA" in uppercase white Montserrat Bold.
Badge: "KM DE TÚNEIS MILITARES E DEFESAS DE ARTILHARIA NO GRANITO" in Bege Cartográfico (#F5F2EB).
Camera: slow pan from mainland Chinese shoreline across narrow water to Kinmen bunkers.
NO voice, NO speech, NO music. ONLY distant city ambiance and coastal wave lap SFX.`
      },
      {
        titulo: 'A Doutrina do Porco-Espinho e Mísseis Móveis',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Military tactical map overlay of Taiwan showing asymmetric defense deployments.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Radar coverage rings and mobile anti-ship missile launcher zones in neon cyan (#38BDF8).
Text on screen: "DOUTRINA DO PORCO-ESPINHO // GUERRA ASSIMÉTRICA" in uppercase white Orbitron Bold.
Badge: "MILHARES DE MÍSSEIS E DRONES MÓVEIS EM VEÍCULOS CIVIS" in intense crimson red (#C8102E).
Camera: technical orthographic scan across Taiwan's coastal defense highways.
NO voice, NO speech, NO music. ONLY missile radar lock-on tone and digital telemetry SFX.`
      },
      {
        titulo: 'O Impacto no Comércio Marítimo Global',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional satellite animation showing global container ship flows passing through the Taiwan Strait and Luzon Strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Shipping density density heat map in radiant amber (#F59E0B): "> 20% DO COMÉRCIO GLOBAL".
Text on screen: "ROTAS DO MAR DA CHINA // A ARTÉRIA VITAL DO JAPÃO E COREIA" in uppercase white Montserrat Bold.
Badge: "INTERRUPÇÃO DO ESTREITO AFETARIA US$ 2,5 TRILHÕES EM CARGAS" in white (#F5F2EB).
Camera: dynamic linear flyover above dense cargo ship traffic east and west of Taiwan.
NO voice, NO speech, NO music. ONLY ship engine thrum and radio static chirp SFX.`
      },
      {
        titulo: 'Encerramento e o Equilíbrio Frágil da Paz',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Taiwan illuminated at night surrounded by dark deep ocean trenches.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "A FORTALEZA GEOGRÁFICA QUE SUSTENTA A TECNOLOGIA GLOBAL" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above East Asia.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 197,
    titulo: 'Como as Maiores Minas de Cobre do Planeta e o Deserto de Atacama Transformaram o Chile na Potência Mineral da Eletrificação Global?',
    roteiro: 'Como as Maiores Minas de Cobre do Planeta e o Deserto de Atacama Transformaram o Chile na Potência Mineral da Eletrificação Global? Espremido entre a Cordilheira dos Andes e o Pacífico por mais de quatro mil e trezentos quilômetros, o Chile possui apenas cento e setenta e cinco quilômetros de largura média, mas domina o subsolo mineral da Terra. A colisão de placas tectônicas depositou no norte do país as maiores jazidas de cobre do planeta: minas monumentais como Chuquicamata e Escondida respondem por quase trinta por cento de todo o metal vermelho consumido pelo mundo, insubstituível para motores elétricos, redes inteligentes e turbinas eólicas. Além disso, as salmouras do Deserto de Atacama guardam quase metade das reservas viáveis de lítio da Terra, evaporadas pelo sol mais intenso do planeta para alimentar a revolução das baterias. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O GIGANTE MINERAL DOS ANDES',
      l2: 'COMO O CHILE DOMINA O COBRE E O LÍTIO GLOBAL',
      l3: 'DO ATACAMA À REVOLUÇÃO VERDE'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Fita Continental Chilena',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into South America, highlighting the dramatic narrow ribbon of Chile stretching 4.300 km along the Pacific.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O GIGANTE MINERAL DOS ANDES"
Line 2 (intense crimson red #C8102E): "COMO O CHILE DOMINA O COBRE E O LÍTIO GLOBAL"
Line 3 (pure white #F5F2EB): "DO ATACAMA À REVOLUÇÃO VERDE"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Atacama Desert.
NO voice, NO speech, NO music. ONLY deep tectonic rumble and clean satellite whoosh SFX.`
      },
      {
        titulo: 'A Geometria Territorial Extrema: 4.300 km por 175 km',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view highlighting Chile's extreme dimensions between the Andes and the Pacific Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector dimensions in radiant gold (#F59E0B): "4.300 KM DE EXTENSÃO // 175 KM DE LARGURA MÉDIA".
Text on screen: "CHILE // UMA FAIXA DE TERRA COMPRIMIDA CONTRA O MAR" in uppercase white Orbitron Bold.
Badge: "ISOLADO POR DESERTO, GELO, OCEANO E MONTANHAS DE 6.000 M" in Bege Cartográfico (#F5F2EB).
Camera: rapid progressive zoom from Cape Horn up to the Peruvian border.
NO voice, NO speech, NO music. ONLY howling mountain gale and ocean surf surge SFX.`
      },
      {
        titulo: 'A Mina de Chuquicamata: O Maior Buraco da Terra',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed high-resolution satellite imagery descending into Chuquicamata open-pit copper mine near Calama.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mine pit dimensions: "4,5 KM DE EXTENSÃO // 1.250 METROS DE PROFUNDIDADE".
Text on screen: "CHUQUICAMATA // A MAIOR MINA A CÉU ABERTO DO PLANETA" in uppercase white Montserrat Bold.
Badge: "MAIS DE CINCO BILHÕES DE TONELADAS DE ROCHA ESCAVADAS" in intense crimson red (#C8102E).
Camera: slow technical spiral descent into the stepped terraces of the colossal pit.
NO voice, NO speech, NO music. ONLY heavy diesel haul truck engine thrum and rock crushing roar SFX.`
      },
      {
        titulo: 'Minera Escondida e a Liderança Mundial de Cobre',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over Minera Escondida in the high Andes plateau of Antofagasta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Production metric in radiant copper gold (#F59E0B): "~ 28% DA OFERTA MUNDIAL DE COBRE".
Text on screen: "CHILE // 5,3 MILHÕES DE TONELADAS DE COBRE POR ANO" in uppercase white Orbitron Bold.
Badge: "UM CARRO ELÉTRICO CONSOME 4X MAIS COBRE QUE UM A COMBUSTÃO" in sage green (#A8C3A6).
Camera: dynamic linear flyover above Escondida processing plants and tailings dams.
NO voice, NO speech, NO music. ONLY industrial conveyor belt hum and metal resonance SFX.`
      },
      {
        titulo: 'O Salar de Atacama e as Piscinas de Lítio',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Spectacular high-altitude satellite view of the iridescent turquoise, cyan, and yellow evaporation ponds in Salar de Atacama.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pond network outlined in neon cyan (#38BDF8): "48% DAS RESERVAS VIÁVEIS DE LÍTIO DO MUNDO".
Text on screen: "SALAR DE ATACAMA // O CORAÇÃO DO TRIÂNGULO DO LÍTIO" in uppercase white Montserrat Bold.
Badge: "EVAPORAÇÃO NATURAL PELO SOL MAIS INTENSO DO PLANETA" in gold (#F59E0B).
Camera: smooth lateral track across geometric salt flat pools.
NO voice, NO speech, NO music. ONLY dry desert wind and crystalline salt crackle SFX.`
      },
      {
        titulo: 'A Guerra do Pacífico de 1879 e a Conquista do Norte',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite map showing the borders prior to 1879 with Bolivia\'s coastline and Peru\'s Tarapacá.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Animated battle arrows and border shift: Antofagasta and Iquique incorporated into Chile.
Text on screen: "GUERRA DO PACÍFICO (1879-1884) // A CORRIDA DO SALITRE" in uppercase white Orbitron Bold.
Badge: "O CHILE ANEXOU O DESERTO QUE HOJE GUARDA SUAS MAIORES MINAS" in intense crimson red (#C8102E).
Camera: slow cinematic pan along the Pacific coast of Antofagasta.
NO voice, NO speech, NO music. ONLY naval cannon salvo echo and march tempo drum SFX.`
      },
      {
        titulo: 'A Ferrovia do Cobre e os Portos de Exportação',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot following the rail corridors from Calama through the desert down to Antofagasta and Mejillones ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Rail lines glowing in Bege Cartográfico (#F5F2EB) terminating at bulk carrier docks.
Text on screen: "PORTOS DO PACÍFICO // A ROTA DIRETA PARA A ÁSIA" in uppercase white Montserrat Bold.
Badge: "MEJILLONES E ANTOFAGASTA ABASTECEM A INDÚSTRIA DA CHINA" in gold (#F59E0B).
Camera: fast linear descent toward giant ship-loading cranes at Mejillones terminal.
NO voice, NO speech, NO music. ONLY freight train rail clatter and harbor wave lap SFX.`
      },
      {
        titulo: 'O Corredor Bioceânico de Capricórnio',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
South American satellite view charting the Capricorn Bioceanic Corridor from Santos (Brazil) to Chilean ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Highway corridor pulsing in vibrant green (#A8C3A6) crossing Paraguay, Argentina, and the Andes.
Text on screen: "CORREDOR BIOCEÂNICO // A INTEGRAÇÃO ATLÂNTICO-PACÍFICO" in uppercase white Orbitron Bold.
Badge: "REDUÇÃO DE ATÉ 15 DIAS NO FRETE PARA OS MERCADOS ASIÁTICOS" in white (#F5F2EB).
Camera: high-altitude forward flight following the paved Andean mountain pass of Jama.
NO voice, NO speech, NO music. ONLY highway wind rush and truck air brake hiss SFX.`
      },
      {
        titulo: 'Hidrogênio Verde na Patagônia e Estreito de Magalhães',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view shifting to Chile\'s southern tip at Punta Arenas and the Strait of Magellan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Wind energy potential overlay: "FATOR DE CAPACIDADE EÓLICA > 70%".
Text on screen: "PATAGÔNIA EÓLICA // A NOVA CAPITAL DO HIDROGÊNIO VERDE" in uppercase white Montserrat Bold.
Badge: "BILHÕES DE DÓLARES EM COMBUSTÍVEIS SINTÉTICOS LIVRES DE CARBONO" in electric blue (#38BDF8).
Camera: low dynamic flyover above wind turbine towers spinning in sub-antarctic gales.
NO voice, NO speech, NO music. ONLY powerful wind turbine swoosh and subpolar breeze SFX.`
      },
      {
        titulo: 'Encerramento e o Motor da Transição Energética',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the complete South American continent focusing on Chile glowing against the Pacific.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "A POTÊNCIA MINERAL QUE CONECTA O FUTURO DA TERRA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above South America.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 198,
    titulo: 'Por Que Vinte e Nove Quilômetros de Mar no Estreito de Bab el-Mandeb Podem Paralisar Doze Por Cento do Comércio Mundial?',
    roteiro: 'Por Que Vinte e Nove Quilômetros de Mar no Estreito de Bab el-Mandeb Podem Paralisar Doze Por Cento do Comércio Mundial? Conhecido como A Porta das Lamentações, o Estreito de Bab el-Mandeb é um gargalo de apenas vinte e nove quilômetros que liga o Mar Vermelho ao Oceano Índico entre o Iêmen e o Djibuti. Por essa fresta marítima passa doze por cento de todo o comércio mundial e trinta por cento dos contêineres do planeta rumo ao Canal de Suez. Contudo, a Ilha de Perim divide o estreito, empurrando os meganavios para um canal navegável com apenas duas milhas náuticas de largura a poucos quilômetros da costa montanhosa iemenita. Quando mísseis e drones atacaram cargueiros, transportadoras desviaram frotas pelo Cabo da Boa Esperança na África do Sul, adicionando seis mil quilômetros e dez dias de viagem com custos bilionários. Na outra margem, o Djibuti abriga bases de EUA, China e França vigiando o estreito. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A PORTA DAS LAMENTAÇÕES',
      l2: 'POR QUE BAB EL-MANDEB TRAVA O COMÉRCIO GLOBAL',
      l3: 'O GARGALO DE 29 KM ENTRE IÊMEN E DJIBUTI'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Garganta do Mar Vermelho',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Red Sea chokepoint between Arabia and the Horn of Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A PORTA DAS LAMENTAÇÕES"
Line 2 (intense crimson red #C8102E): "POR QUE BAB EL-MANDEB TRAVA O COMÉRCIO GLOBAL"
Line 3 (pure white #F5F2EB): "O GARGALO DE 29 KM ENTRE IÊMEN E DJIBUTI"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Bab-el-Mandeb strait.
NO voice, NO speech, NO music. ONLY deep naval sonar ping and clean satellite whoosh SFX.`
      },
      {
        titulo: 'A Geometria de Bab el-Mandeb e a Ilha de Perim',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view zooming directly into the strait divided by Perim Island.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Measurement line in radiant gold (#F59E0B): "29 KM TOTAL // CANAL ORIENTAL DE APENAS 3 KM".
Text on screen: "BAB EL-MANDEB // A ILHA DE PERIM DIVIDE O ESTREITO" in uppercase white Orbitron Bold.
Badge: "NAVIO CARGUEIRO OBRIGADO A NAVEGAR A 15 KM DA COSTA DO IÊMEN" in intense crimson red (#C8102E).
Camera: slow cinematic descent over Perim Island volcanic plateau.
NO voice, NO speech, NO music. ONLY ocean wave surge against volcanic rocks and wind howl SFX.`
      },
      {
        titulo: 'A Artéria Vital de Suez: 12% do Comércio Mundial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional satellite animation showing the massive maritime shipping highway from the Indian Ocean up into the Red Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trade volume overlay: "12% DO COMÉRCIO GLOBAL // 30% DE TODOS OS CONTÊINERES".
Text on screen: "O CORREDOR DE SUEZ // US$ 1 TRILHÃO EM MERCADORIAS POR ANO" in uppercase white Montserrat Bold.
Badge: "ROTA CRÍTICA PARA O PETRÓLEO DO GOLFO E MANUFATURAS DA ÁSIA" in Bege Cartográfico (#F5F2EB).
Camera: forward tracking shot following lines of container ships and supertankers.
NO voice, NO speech, NO music. ONLY ship diesel engine rumble and naval radar sweep SFX.`
      },
      {
        titulo: 'A Ameaça dos Mísseis e Drones Costeiros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military satellite map showing missile launch arcs emanating from Yemen\'s mountains across shipping lanes.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red threat envelopes and radar crosshairs (#C8102E) locking onto maritime corridors.
Text on screen: "GUERRA ASSIMÉTRICA // DRONES BARATOS VS MÍSSEIS DE MILHÕES" in uppercase white Orbitron Bold.
Badge: "CARGUEIROS SOB MIRA DIRETA DE BATERIAS ANTINAVIO MÓVEIS" in gold (#F59E0B).
Camera: technical orthographic scan of Yemen\'s coastal mountain ridges.
NO voice, NO speech, NO music. ONLY missile booster launch whoosh and tactical alarm chirp SFX.`
      },
      {
        titulo: 'O Desvio pelo Cabo da Boa Esperança',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite map of Africa showing the alternate maritime detour curving around South Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Detour vector in bright orange (#F59E0B): "+ 6.000 KM // + 10 A 14 DIAS DE NAVEGAÇÃO".
Text on screen: "O CABO DA BOA ESPERANÇA // A ROTA DO SÉCULO XVI REATIVADA" in uppercase white Montserrat Bold.
Badge: "FRETE MARÍTIMO SUBIU MAIS DE 200% EM POUCAS SEMANAS" in intense crimson red (#C8102E).
Camera: broad continental pull-back tracing the massive loop around the Cape of Good Hope.
NO voice, NO speech, NO music. ONLY roaring southern ocean breakers and wind blast SFX.`
      },
      {
        titulo: 'O Impacto Financeiro no Egito e no Canal de Suez',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view over the northern entrance of the Suez Canal at Port Said, showing deserted anchorages.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Economic graph overlay: "QUEDA SUPERIOR A 50% NA RECEITA DE SUEZ".
Text on screen: "CANAL DE SUEZ // O COLAPSO DA ARRECADAÇÃO DO EGITO" in uppercase white Orbitron Bold.
Badge: "CAIRO PERDEU CENTENAS DE MILHÕES DE DÓLARES MENSAIS" in Bege Cartográfico (#F5F2EB).
Camera: slow orthographic flyover above the empty bypass channels of the canal.
NO voice, NO speech, NO music. ONLY lonely desert wind and distant buoy bell chime SFX.`
      },
      {
        titulo: 'Djibuti: A Capital das Bases Estrangeiras',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed satellite view of Djibouti city, Camp Lemonnier, and the Chinese naval base at Doraleh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Military base callouts with national flags: EUA, China, França, Japão e Itália.
Text on screen: "DJIBUTI // O PONTO DE MAIOR CONCENTRAÇÃO MILITAR DA TERRA" in uppercase white Montserrat Bold.
Badge: "POTÊNCIAS RIVAIS OPERANDO A POUCOS QUILÔMETROS UMA DA OUTRA" in gold (#F59E0B).
Camera: dynamic linear flyover above Doraleh deep-water pier and naval docks.
NO voice, NO speech, NO music. ONLY military jet engine taxi and helicopter rotor chop SFX.`
      },
      {
        titulo: 'A Operação Prosperity Guardian e Frotas da OTAN',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking view of naval destroyers and carrier strike groups patrolling the southern Red Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Air defense intercept cones in cyan (#38BDF8) shooting down inbound hostile vectors.
Text on screen: "ESQUADRAS INTERNACIONAIS // PATRULHA NO GOLFO DE ÁDEN" in uppercase white Orbitron Bold.
Badge: "MÍSSEIS INTERCEPTADORES DE US$ 2 MILHÕES CONTRA DRONES DE US$ 20 MIL" in intense crimson red (#C8102E).
Camera: technical tracking shot above missile destroyer cutting through turquoise waters.
NO voice, NO speech, NO music. ONLY naval radar sweep tone and bow wave foam hiss SFX.`
      },
      {
        titulo: 'A Vulnerabilidade dos Cabos Submarinos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Underwater bathymetric 3D map of the shallow seabed of Bab-el-Mandeb with subsea fiber optic cables glowing.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cable routes in electric blue (#38BDF8): "A ESPINHA DORSAL DA INTERNET EUROPA-ÁSIA".
Text on screen: "CABOS SUBMARINOS // O RISCO DE APAGÃO DE DADOS GLOBAL" in uppercase white Montserrat Bold.
Badge: "ÂNFORAS DE NAVIOS DERIVANDO CORTARAM CABOS VITAIS DE INTERNET" in gold (#F59E0B).
Camera: deep underwater perspective following fiber optic cables resting on seabed sediments.
NO voice, NO speech, NO music. ONLY deep hydrophone ocean hum and electronic digital pulse SFX.`
      },
      {
        titulo: 'Encerramento e o Mapa da Fragilidade Global',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the Arabian Peninsula, Red Sea, and Horn of Africa illuminated at dusk.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "A FRÁGIL ARTÉRIA QUE SUSTENTA O CONSUMO DO MUNDO" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above the Indian Ocean.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 199,
    titulo: 'Como Vinte e Dois Quilômetros de Terra no Corredor de Siliguri Sustentam a Unidade Territorial de Quarenta e Cinco Milhões de Pessoas?',
    roteiro: 'Como Vinte e Dois Quilômetros de Terra no Corredor de Siliguri Sustentam a Unidade Territorial de Quarenta e Cinco Milhões de Pessoas? Conhecido como Pescoço de Galinha, o Corredor de Siliguri é a anomalia geográfica mais vulnerável da Índia. Em seu ponto mais estrangulado, essa estreita faixa de terra mede apenas vinte e dois quilômetros de largura, espremida entre o Nepal, o Butão e Bangladesh. Sobre esse funil repousam todas as rodovias, ferrovias, cabos de fibra óptica e oleodutos que conectam a Índia continental aos seus oito estados do Nordeste, onde vivem quarenta e cinco milhões de cidadãos. Para complicar, a menos de cem quilômetros projeta-se o Vale de Chumbi, território sob controle militar da China: uma ofensiva descendo da cordilheira poderia cortar o corredor em dois dias, isolando o nordeste indiano. Por isso, Nova Délhi estacionou três corpos de exército e defesas antimísseis na região. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O PESCOÇO DE GALINHA DA ÍNDIA',
      l2: 'COMO 22 KM SUSTENTAM 45 MILHÕES DE PESSOAS',
      l3: 'O CORREDOR DE SILIGURI E A SOMBRA CHINESA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Estrangulamento de Siliguri',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the Indian subcontinent, highlighting the bizarrely narrow land bridge between Nepal, Bhutan, and Bangladesh.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O PESCOÇO DE GALINHA DA ÍNDIA"
Line 2 (intense crimson red #C8102E): "COMO 22 KM SUSTENTAM 45 MILHÕES DE PESSOAS"
Line 3 (pure white #F5F2EB): "O CORREDOR DE SILIGURI E A SOMBRA CHINESA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Siliguri Corridor.
NO voice, NO speech, NO music. ONLY deep military drum rumble and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Ponto Mais Estreito: 22 Quilômetros de Funil',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed satellite view measuring the narrowest pinch point of the Siliguri Corridor in West Bengal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Measurement caliper graphic in radiant gold (#F59E0B): "LARGURA MÍNIMA // APENAS 20 A 22 KM".
Text on screen: "CORREDOR DE SILIGURI // O PESCOÇO DE GALINHA" in uppercase white Orbitron Bold.
Badge: "ESPREMIDO ENTRE NEPAL A OESTE E BANGLADESH AO SUL" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing the flat plains bounded by international border fences.
NO voice, NO speech, NO music. ONLY train horn echo and wind rustling through tea gardens SFX.`
      },
      {
        titulo: 'Os Oito Estados Irmãos do Nordeste',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map zooming out to show the vast Northeast region of India glowing in vibrant green (#A8C3A6).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
State borders outlined: Assam, Arunachal Pradesh, Meghalaya, Manipur, Mizoram, Nagaland, Tripura e Sikkim.
Text on screen: "45 MILHÕES DE PESSOAS // 262 MIL KM² DE TERRITÓRIO" in uppercase white Montserrat Bold.
Badge: "REGIÃO CERCADA EM 98% DE SUAS FRONTEIRAS POR OUTROS PAÍSES" in Bege Cartográfico (#F5F2EB).
Camera: dynamic linear flyover above the Brahmaputra River valley and Himalayan foothills.
NO voice, NO speech, NO music. ONLY river torrent rush and traditional bamboo flute note SFX.`
      },
      {
        titulo: 'A Partilha de 1947 e a Linha Radcliffe',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical animated satellite map showing the Partition of Bengal in August 1947.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Radcliffe Line drawing in bold crimson red (#C8102E) carving East Pakistan (now Bangladesh).
Text on screen: "A PARTILHA DA ÍNDIA (1947) // O TRAÇO DE CYRIL RADCLIFFE" in uppercase white Orbitron Bold.
Badge: "ROTAS NATURAIS DE RIOS E FERROVIAS CORTADAS DO DIA PARA A NOITE" in gold (#F59E0B).
Camera: lateral pan along the barbed-wire border separating West Bengal and Bangladesh.
NO voice, NO speech, NO music. ONLY steam locomotive chug and archival radio broadcast murmur SFX.`
      },
      {
        titulo: 'A Adaga Chinesa: O Vale de Chumbi e Doklam',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic 3D satellite view of the Chumbi Valley projecting between Sikkim and Bhutan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chinese military vector in red (#C8102E): "VALE DE CHUMBI // A MENOS DE 100 KM DE SILIGURI".
Text on screen: "O PLANALTO DE DOKLAM // O RISCO DE CORTE EM 48 HORAS" in uppercase white Montserrat Bold.
Badge: "SE A CHINA DESCER AS CRISTAS, O NORDESTE INDIANO FICA ISOLADO" in intense crimson red (#C8102E).
Camera: sharp perspective flyover along snow-covered Himalayan ridges.
NO voice, NO speech, NO music. ONLY high-altitude mountain blizzard roar and cold wind whistle SFX.`
      },
      {
        titulo: 'A Tríade de Corpos de Exército Indianos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Military tactical satellite overlay of Siliguri, Sukna, and Hashimara air bases.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Corps deployment crests: XXXIII Corpo em Sukna, IV Corpo e baterias de mísseis S-400 Triumf.
Text on screen: "FORTE MILITARIZAÇÃO // TRÊS CORPOS DE EXÉRCITO" in uppercase white Orbitron Bold.
Badge: "TANQUES PESADOS T-90 E CAÇAS SU-30MKI EM PRONTIDÃO MÁXIMA" in Bege Cartográfico (#F5F2EB).
Camera: technical orthographic scan over hardened aircraft shelters and armor garrisons.
NO voice, NO speech, NO music. ONLY jet turbine spool-up and military tank diesel idle SFX.`
      },
      {
        titulo: 'As Artérias de Infraestrutura: Trilhos, Dutos e Fibras',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the rail bridges and national highway NH10 crossing the Teesta River inside the corridor.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Infrastructure layers in glowing neon colors: ferrovias (amarelo), oleodutos (vermelho), fibras ópticas (azul).
Text on screen: "INFRAESTRUTURA VITAL // TODAS AS ARTÉRIAS EM UM SÓ FUNIL" in uppercase white Montserrat Bold.
Badge: "DUPLICAÇÃO DE PONTES FERROVIÁRIAS CONTRA SABOTAGEM" in gold (#F59E0B).
Camera: smooth linear tracking along heavy freight trains crossing Teesta bridge.
NO voice, NO speech, NO music. ONLY heavy steel wheel rhythm on tracks and electric hum SFX.`
      },
      {
        titulo: 'A Rota Alternativa: Acordo de Trânsito com Bangladesh',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional satellite map highlighting transit corridors across Bangladesh territory from Kolkata to Agartala.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Transit route in sage green (#A8C3A6): "DE 1.650 KM PARA APENAS 500 KM EM LINHA RETA".
Text on screen: "ACORDO COM BANGLADESH // O ATALHO DIPLOMÁTICO" in uppercase white Orbitron Bold.
Badge: "INTEGRAÇÃO FLUVIAL E FERROVIÁRIA REDUZ A DEPENDÊNCIA DO GARGALO" in white (#F5F2EB).
Camera: lateral pan across the lush green delta waterways of Bangladesh.
NO voice, NO speech, NO music. ONLY river boat diesel thrum and water ripple SFX.`
      },
      {
        titulo: 'O Projeto Multimodal Kaladan em Mianmar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Maritime and river satellite map connecting Kolkata port to Sittwe in Myanmar, and up into Mizoram state.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Multimodal corridor vector in electric blue (#38BDF8): "PORTO DE SITTWE AO RIO KALADAN".
Text on screen: "PROJETO KALADAN // A ROTA MARÍTIMA PARA O NORDESTE" in uppercase white Montserrat Bold.
Badge: "NOVA DÉLHI INVESTE BILHÕES PARA CRIAR REDUNDÂNCIA ESTRATÉGICA" in gold (#F59E0B).
Camera: high-altitude forward flight from Bay of Bengal into Myanmar jungle hills.
NO voice, NO speech, NO music. ONLY ocean swell and cargo winch mechanical click SFX.`
      },
      {
        titulo: 'Encerramento e o Guardião da Unidade Indiana',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the Indian subcontinent showing the Himalayas in relief and the entire nation connected.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "OS 22 QUILÔMETROS QUE MANTÊM UMA SUPERPOTÊNCIA UNIDA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into space orbit above South Asia.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 200,
    titulo: 'Por Que a Grécia Levou Mais de Dois Mil Anos Para Rasgar Vinte e Quatro Metros de Rocha e Transformar o Peloponeso em Uma Ilha?',
    roteiro: 'Por Que a Grécia Levou Mais de Dois Mil Anos Para Rasgar Vinte e Quatro Metros de Rocha e Transformar o Peloponeso em Uma Ilha? Com paredes de calcário de quase oitenta metros de altura e apenas vinte e quatro metros de largura, o Canal de Corinto é uma das obras de engenharia mais impressionantes da história. Cortando o istmo rochoso que unia o Peloponeso à Grécia continental, o canal evitou a perigosa rota de setecentos quilômetros contornando cabos tempestuosos no mar aberto. Desde 602 antes de Cristo, tiranos gregos e o imperador romano Nero tentaram escavar a passagem com milhares de escravos, mas foram barrados por superstições e mortes. Apenas em 1893 engenheiros concluíram o corte de seis quilômetros com dinamite e pás a vapor, transformando o Peloponeso tecnicamente em uma ilha. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A OBSESSÃO DE DOIS MIL ANOS',
      l2: 'COMO O CANAL DE CORINTO RASGOU A ROCHA',
      l3: 'O CORTE QUE CRIOU UMA ILHA NA GRÉCIA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Desfiladeiro de Corinto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into Greece, highlighting the Isthmus of Corinth bridging the Peloponnese peninsula.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A OBSESSÃO DE DOIS MIL ANOS"
Line 2 (intense crimson red #C8102E): "COMO O CANAL DE CORINTO RASGOU A ROCHA"
Line 3 (pure white #F5F2EB): "O CORTE QUE CRIOU UMA ILHA NA GRÉCIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the turquoise cut of Corinth Canal.
NO voice, NO speech, NO music. ONLY deep stone echo and clean satellite whoosh SFX.`
      },
      {
        titulo: 'A Rota Perigosa do Cabo Maleas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional satellite view showing the southern peninsulas of the Peloponnese and Cape Maleas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Circumnavigation route in crimson red (#C8102E): "700 KM DE VIAGEM EM MAR TEMPESTUOSO".
Text on screen: "CABO MALEAS // SE DOBRAR O CABO, ESQUEÇA SUA CASA" in uppercase white Orbitron Bold.
Badge: "CENTENAS DE NAUFRÁGIOS NA ANTIGUIDADE CLÁSSICA" in gold (#F59E0B).
Camera: sweeping cinematic flyover along jagged southern cliffs.
NO voice, NO speech, NO music. ONLY thunderous sea waves crashing on rocks and wind gust SFX.`
      },
      {
        titulo: 'O Diolkos: A Ferrovia de Pedra de 602 a.C.',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical 3D reconstruction overlay along the ancient stone track across the Isthmus of Corinth.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Paved road with limestone ruts: "O DIOLKOS // 6 KM DE PISTA PAVIMENTADA".
Text on screen: "PERIANDRO DE CORINTO // PUXANDO NAVIOS SOBRE RODAS" in uppercase white Montserrat Bold.
Badge: "EMBARCAÇÕES ARRASTADAS POR ESCRAVOS DE UM GOLFO AO OUTRO" in Bege Cartográfico (#F5F2EB).
Camera: low tracking shot following the ancient stone wheel grooves across the ridge.
NO voice, NO speech, NO music. ONLY creaking timber carts, slave chants, and stone grind SFX.`
      },
      {
        titulo: 'A Picareta de Ouro de Nero em 67 d.C.',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical reenactment map highlighting Roman excavation trenches begun by Emperor Nero.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Roman workforce callout in gold (#F59E0B): "6.000 PRISIONEIROS DA JUDÉIA E LEGIONÁRIOS".
Text on screen: "IMPERADOR NERO // O PRIMEIRO GOLPE COM PICARETA DE OURO" in uppercase white Orbitron Bold.
Badge: "3 KM ESCAVADOS ANTES DO ASSASSINATO DE NERO INTERROMPER A OBRA" in intense crimson red (#C8102E).
Camera: slow descent into ancient rock-cut trenches overgrown with Mediterranean shrubs.
NO voice, NO speech, NO music. ONLY iron pickaxes striking limestone rock and Roman trumpet call SFX.`
      },
      {
        titulo: 'A Engenharia Vitoriana e a Conclusão de 1893',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historic industrial overlay showing 19th-century steam shovels and dynamite explosions slicing the rock.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector cut in brilliant gold (#F59E0B): "6.343 METROS DE COMPRIMENTO".
Text on screen: "INAUGURAÇÃO EM 1893 // 12 ANOS DE ESCAVAÇÕES MODERNAS" in uppercase white Montserrat Bold.
Badge: "MAIS DE 12 MILHÕES DE METROS CÚBICOS DE CALCÁRIO REMOVIDOS" in Bege Cartográfico (#F5F2EB).
Camera: dramatic flight straight through the narrow vertical rock canyon walls.
NO voice, NO speech, NO music. ONLY dynamite blast rumble and steam shovel hiss SFX.`
      },
      {
        titulo: 'As Paredes Verticais de Quase 80 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Drone-perspective 4K satellite view looking straight down into the narrow rock cleft of Corinth Canal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Elevation and width metrics: "ALTURA MÁXIMA: ▲ 79 METROS // LARGURA NA ÁGUA: 24,6 METROS".
Text on screen: "O DESFILADEIRO ARTIFICIAL // 24 METROS DE LARGURA ÚTIL" in uppercase white Orbitron Bold.
Badge: "PAREDES QUASE VERTICAIS COM INCLINAÇÃO DE 71 A 77 GRAUS" in gold (#F59E0B).
Camera: slow vertical crane descent from bridge height down to water surface.
NO voice, NO speech, NO music. ONLY canyon breeze echo and water lap against stone SFX.`
      },
      {
        titulo: 'A Sabotagem Alemã na Segunda Guerra Mundial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical archival satellite map of October 1944 at the canal rail bridge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Detonation markers: "60 MIL M³ DE ROCHAS EXPLODIDAS PELA WEHRMACHT".
Text on screen: "BLOQUEIO DE 1944 // LOCOMOTIVAS AFUNDADAS NO CANAL" in uppercase white Montserrat Bold.
Badge: "ENGENHEIROS DOS EUA LEVARAM QUATRO ANOS PARA DRAGAR E REABRIR" in intense crimson red (#C8102E).
Camera: technical orthographic flyover above the bridge reconstruction zone.
NO voice, NO speech, NO music. ONLY explosion echo and heavy steel beam collapse SFX.`
      },
      {
        titulo: 'O Paradoxo dos Meganavios Modernos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of a modern luxury cruise ship barely squeezing through the canal with inches of clearance.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Clearance metric overlay in radiant cyan (#38BDF8): "APENAS CENTÍMETROS DE FOLGA NAS LATERAIS".
Text on screen: "ESTREITO DEMAIS // PORTA-CONTÊINERES NÃO CABEM NO CANAL" in uppercase white Orbitron Bold.
Badge: "NAVIO EXIGE REBOCADOR OBRIGATÓRIO PARA NÃO COLIDIR NA ROCHA" in gold (#F59E0B).
Camera: dynamic linear flyover tracking the tugboat towing a cruise liner.
NO voice, NO speech, NO music. ONLY tugboat diesel engine chug and horn resonance SFX.`
      },
      {
        titulo: 'O Peloponeso: Uma Ilha Criada Pelo Homem',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing the Peloponnese fully detached from the Greek mainland by the water cut.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island boundary glowing in Bege Cartográfico (#F5F2EB): "ÁREA DO PELOPONESO: 21.549 KM²".
Text on screen: "A ILHA ARTIFICIAL // CINCO PONTES SUSTENTAM A CONEXÃO" in uppercase white Montserrat Bold.
Badge: "O MAIOR CORTE CARTOGRÁFICO DA HISTÓRIA DA GRÉCIA" in sage green (#A8C3A6).
Camera: smooth lateral pan along the submersible bridges at Poseidonia and Isthmia.
NO voice, NO speech, NO music. ONLY bridge mechanism bell and calm gulf water lap SFX.`
      },
      {
        titulo: 'Encerramento e o Monumento da Engenharia Antiga',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the Gulf of Corinth meeting the Saronic Gulf through the razor-thin line of the canal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "A CICATRIZ NA ROCHA QUE DESAFIOU DOIS MIL ANOS DE HISTÓRIA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into planetary space view above the Aegean Sea.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 201,
    titulo: 'Por Que Cidadãos Russos Podem Viver e Minerar Sem Visto Norueguês no Arquipélago Desmilitarizado de Svalbard no Ártico?',
    roteiro: 'Por Que Cidadãos Russos Podem Viver e Minerar Sem Visto Norueguês no Arquipélago Desmilitarizado de Svalbard no Ártico? A meio caminho entre a Noruega e o Polo Norte, o arquipélago de Svalbard abriga uma das anomalias jurídicas mais bizarras do planeta. O território pertence soberanamente à Noruega, país membro da OTAN. Contudo, pelo Tratado de Svalbard assinado em Paris em 1920, o arquipélago é totalmente desmilitarizado e cidadãos de mais de quarenta e cinco nações signatárias têm o direito irrestrito de morar, abrir empresas e minerar sem necessidade de visto. Graças a isso, a Rússia opera até hoje a cidade de Barentsburg, com consulado russo, estátua de Lênin e centenas de mineradores de carvão no meio do território ártico norueguês. Perto dali, fica Pyramiden, a mítica cidade soviética congelada no tempo, e o Banco Global de Sementes. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A ANOMALIA DO ÁRTICO',
      l2: 'POR QUE RUSSOS VIVEM SEM VISTO NA NORUEGA',
      l3: 'O TRATADO DE SVALBARD E BARENTSBURG'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Arquipélago no Teto do Mundo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into the high Arctic ice cap, highlighting the Svalbard archipelago between 74° and 81° North latitude.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ANOMALIA DO ÁRTICO"
Line 2 (intense crimson red #C8102E): "POR QUE RUSSOS VIVEM SEM VISTO NA NORUEGA"
Line 3 (pure white #F5F2EB): "O TRATADO DE SVALBARD E BARENTSBURG"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the frozen fjords of Spitsbergen.
NO voice, NO speech, NO music. ONLY deep glacial ice crackle and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Tratado de Paris de 1920 e o Estatuto Sem Visto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map displaying Svalbard\'s 61.022 km² with Treaty of Svalbard signatory flags floating around it.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Treaty terms in radiant gold (#F59E0B): "SOBERANIA NORUEGUESA // DIREITOS ECONÔMICOS IGUAIS".
Text on screen: "TRATADO DE SVALBARD (1920) // ZERO EXIGÊNCIA DE VISTO" in uppercase white Orbitron Bold.
Badge: "QUALQUER CIDADÃO DE 46 PAÍSES PODE VIVER E TRABALHAR LIVREMENTE" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic descent over Longyearbyen valley.
NO voice, NO speech, NO music. ONLY howling sub-zero blizzard and snow flurry SFX.`
      },
      {
        titulo: 'A Desmilitarização Total (Artigo 9)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing Svalbard\'s strategic location overlooking the Barents Sea and Greenland Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Demilitarized zone shield in electric blue (#38BDF8): "ARTIGO 9 // ZONA DESMILITARIZADA".
Text on screen: "TERRITÓRIO DA OTAN SEM BASES MILITARES" in uppercase white Montserrat Bold.
Badge: "PROIBIÇÃO ABSOLUTA DE FORTIFICAÇÕES, NAVIOS DE GUERRA OU TROPAS" in intense crimson red (#C8102E).
Camera: technical orthographic scan across frozen straits and glacier tongues.
NO voice, NO speech, NO music. ONLY low Arctic wind whistle and digital border beacon ping SFX.`
      },
      {
        titulo: 'Barentsburg: O Enclave de Carvão da Rússia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed high-resolution satellite imagery descending into Barentsburg settlement on Isfjorden.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Settlement markers: "BARENTSBURG // ~ 400 MORADORES RUSSOS E UCRANIANOS".
Text on screen: "ARKTIKUGOL // A MINA ESTATAL DE MOSCOU NO ÁRTICO NORUEGUÊS" in uppercase white Orbitron Bold.
Badge: "CONSULADO-GERAL RUSSO, CANAIS DE MOSCOU E BUSTO DE LÊNIN" in gold (#F59E0B).
Camera: dynamic linear flyover above wooden houses, mine tipple, and harbor pier.
NO voice, NO speech, NO music. ONLY coal mine ventilation fan hum and harbor ice floe scrape SFX.`
      },
      {
        titulo: 'Pyramiden: A Cidade Soviética Congelada no Tempo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view tracking into Billefjorden to the abandoned Soviet coal mining town of Pyramiden.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Abandoned architecture callout: "PYRAMIDEN // ABANDONADA EM 1998".
Text on screen: "A CÁPSULA DO TEMPO SOVIÉTICA NO MEIO DO GELO" in uppercase white Montserrat Bold.
Badge: "O AR SECO PRESERVOU BIBLIOTECAS, PIANOS E CINEMAS INTACTOS" in Bege Cartográfico (#F5F2EB).
Camera: slow descent toward the pyramid-shaped mountain towering over empty residential blocks.
NO voice, NO speech, NO music. ONLY ghostly wind whistling through empty corridors and wooden creak SFX.`
      },
      {
        titulo: 'O Valor Estratégico: O Gap GIUK e a Frota do Norte',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Broad Arctic military strategy map showing the route of Russian nuclear submarines from Kola Peninsula.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval transit corridors in crimson red (#C8102E) flanking Svalbard into the North Atlantic.
Text on screen: "FROTA DO NORTE // A SAÍDA DOS SUBMARINOS NUCLEARES" in uppercase white Orbitron Bold.
Badge: "A PRESENÇA EM BARENTSBURG GARANTE OS OLHOS DE MOSCOU NO ÁRTICO" in gold (#F59E0B).
Camera: high-altitude forward flight following the undersea trench of the Greenland Sea.
NO voice, NO speech, NO music. ONLY deep submarine sonar echo and ocean trench reverberation SFX.`
      },
      {
        titulo: 'O Banco Global de Sementes: O Cofre do Fim do Mundo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the mountainside near Longyearbyen airport showing the illuminated entrance portal of the Seed Vault.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Seed vault graphic: "120 METROS DENTRO DO PERMAFROST // 1,2 MILHÃO DE AMOSTRAS".
Text on screen: "SVALBARD GLOBAL SEED VAULT // O COFRE DA BIODIVERSIDADE" in uppercase white Montserrat Bold.
Badge: "PROJETADO PARA RESISTIR A GUERRAS NUCLEARES E CATÁSTROFES" in vibrant green (#A8C3A6).
Camera: technical push-in on the glowing geometric concrete portal protruding from snow.
NO voice, NO speech, NO music. ONLY subterranean refrigeration hum and metallic vault door lock SFX.`
      },
      {
        titulo: 'A Tensão Geopolítica Pós-2022 no Polo Norte',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing the border checkpoint of Storskog on the Norway-Russia land border and the shipping route to Svalbard.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomatic friction callout in intense crimson (#C8102E): "BLOQUEIO TEMPORÁRIO DE CARGAS EM 2022".
Text on screen: "SANÇÕES DA OTAN VS O TRATADO DE 1920" in uppercase white Orbitron Bold.
Badge: "RÚSSIA REIVINDICA ACESSO IRRESTRITO PARA ABASTECER BARENTSBURG" in Bege Cartográfico (#F5F2EB).
Camera: linear tracking along the snow-covered Arctic border fence at Storskog.
NO voice, NO speech, NO music. ONLY radio static chirp and heavy truck engine rumble on ice SFX.`
      },
      {
        titulo: 'Ciência Polar Global em Ny-Ålesund',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Ny-Ålesund, the northernmost permanent civilian research station on Earth.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
International research flags: Noruega, Alemanha, China, Japão, Índia, Coreia e Reino Unido.
Text on screen: "NY-ÅLESUND // O LABORATÓRIO CLIMÁTICO DO PLANETA" in uppercase white Montserrat Bold.
Badge: "ZERO SINAL DE WI-FI OU CELULAR PARA PROTEGER RADARES E RADIOTELESCÓPIOS" in gold (#F59E0B).
Camera: slow flyover above colorful scientific observatory cabins facing Kongsfjorden glacier.
NO voice, NO speech, NO music. ONLY glacier calving boom and radar dish servo rotation SFX.`
      },
      {
        titulo: 'Encerramento e o Equilíbrio Único de Svalbard',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of the Arctic Ocean with Svalbard illuminated by the midnight sun or aurora borealis.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "O ARQUIPÉLAGO ONDE FRONTEIRAS E TRATADOS CONGELARAM A HISTÓRIA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above the North Pole.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 202,
    titulo: 'Quais São os Dez Países com as Maiores Reservas de Petróleo do Mundo Onde Trilhões de Barris Guardam a Energia do Planeta?',
    roteiro: 'Quais são os dez países com as maiores reservas de petróleo do mundo onde trilhões de barris guardam a energia do planeta? O petróleo continua sendo a mercadoria mais valiosa do xadrez geopolítico. No topo do ranking mundial está a Venezuela, com mais de trezentos e três bilhões de barris de reservas provadas, concentrados no óleo extrapesado da Faixa do Orinoco. Em segundo lugar surge a Arábia Saudita com duzentos e sessenta e sete bilhões de barris de óleo leve de facílima extração no megacampo de Ghawar. O Irã ocupa o terceiro lugar com duzentos e oito bilhões de barris nas montanhas de Zagros, seguido pelo Canadá e suas areias betuminosas de Alberta com cento e sessenta e três bilhões, e pelo Iraque com cento e quarenta e cinco bilhões. O Top 10 é completado por Emirados Árabes Unidos, Kuwait, Rússia, Estados Unidos e Líbia. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O PODER DO OURO NEGRO',
      l2: 'OS DEZ PAÍSES COM AS MAIORES RESERVAS DE PETRÓLEO',
      l3: 'TRILHÕES DE BARRIS QUE DEFINEM O MUNDO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Ranking do Petróleo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into world oil basins glowing in dark gold and crimson energy clusters.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O PODER DO OURO NEGRO"
Line 2 (intense crimson red #C8102E): "OS DEZ PAÍSES COM AS MAIORES RESERVAS DE PETRÓLEO"
Line 3 (pure white #F5F2EB): "TRILHÕES DE BARRIS QUE DEFINEM O MUNDO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Orinoco belt and Persian Gulf.
NO voice, NO speech, NO music. ONLY deep oil pumpjack mechanical thrum and clean satellite whoosh SFX.`
      },
      {
        titulo: '1º Lugar: Venezuela (303,8 Bilhões de Barris)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of Venezuela focusing on the Orinoco River Basin and Lake Maracaibo.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Reserve metric in radiant gold (#F59E0B): "1º LUGAR // 303,8 BILHÕES DE BARRIS (17,5% DO MUNDO)".
Text on screen: "VENEZUELA // A FAIXA PETROLÍFERA DO ORINOCO" in uppercase white Orbitron Bold.
Badge: "ÓLEO EXTRAPESADO QUE EXIGE DILUENTES E CRAQUEAMENTO COMPLEXO" in intense crimson red (#C8102E).
Camera: slow cinematic descent over the winding brown waters of the Orinoco River.
NO voice, NO speech, NO music. ONLY heavy viscous fluid pumping and industrial burner flame roar SFX.`
      },
      {
        titulo: '2º Lugar: Arábia Saudita (267,1 Bilhões de Barris)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of the Arabian Peninsula highlighting the Eastern Province and the gigantic Ghawar field.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Reserve metric in bright amber (#F59E0B): "2º LUGAR // 267,1 BILHÕES DE BARRIS".
Text on screen: "ARÁBIA SAUDITA // O MEGACAMPO DE GHAWAR (280 KM)" in uppercase white Montserrat Bold.
Badge: "CUSTO DE EXTRAÇÃO MÍNIMO: MENOS DE US$ 10 POR BARRIL" in Bege Cartográfico (#F5F2EB).
Camera: technical orthographic push-in on Saudi Aramco desert extraction manifolds.
NO voice, NO speech, NO music. ONLY high-pressure pipeline hiss and desert wind SFX.`
      },
      {
        titulo: '3º Lugar: Irã (208,6 Bilhões de Barris)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of Iran showing the Zagros fold belt and the oil-rich Khuzestan plain.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Reserve metric in electric cyan (#38BDF8): "3º LUGAR // 208,6 BILHÕES DE BARRIS".
Text on screen: "IRÃ // O CONTROLE DA SAÍDA DE ORMUZ" in uppercase white Orbitron Bold.
Badge: "COMBINAÇÃO DE PETRÓLEO COM AS MAIORES RESERVAS DE GÁS DO PLANETA" in gold (#F59E0B).
Camera: dynamic linear flyover above Persian Gulf offshore platforms and Zagros cliffs.
NO voice, NO speech, NO music. ONLY offshore gas flare roar and coastal sea wave lap SFX.`
      },
      {
        titulo: '4º e 5º Lugares: Canadá (163,6 B) e Iraque (145,0 B)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Canada\'s Athabasca oil sands in Alberta and Iraq\'s Basra oilfields.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Capacity metrics highlighted with national flags.
Text on screen: "CANADÁ E IRAQUE // AREIAS BETUMINOSAS E A MESOPOTÂMIA" in uppercase white Montserrat Bold.
Badge: "CANADÁ EXTRAI BETUME COM VAPOR; IRAQUE TEM CAMPOS SUPERPRODUTIVOS" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic flyover over boreal mining pits and desert drilling rigs.
NO voice, NO speech, NO music. ONLY steam injector hiss and drilling rig mechanical clatter SFX.`
      },
      {
        titulo: '6º e 7º Lugares: Emirados Árabes (113 B) e Kuwait (101 B)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming over the Persian Gulf emirates of Abu Dhabi and Kuwait\'s Burgan oilfield.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Reserve metrics in radiant gold: "EAU: 113 BILHÕES // KUWAIT: 101,5 BILHÕES".
Text on screen: "EMIRADOS E KUWAIT // A CONCENTRAÇÃO MÁXIMA DO GOLFO" in uppercase white Orbitron Bold.
Badge: "CAMPO DE BURGAN É A SEGUNDA MAIOR JAZIDA TERRESTRE DO MUNDO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on storage tank farms and export jetties.
NO voice, NO speech, NO music. ONLY oil tanker mooring winch and refinery hum SFX.`
      },
      {
        titulo: '8º Lugar: Rússia (80,0 Bilhões de Barris na Sibéria)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view over Western Siberia, the Volga-Urals, and Arctic offshore fields.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Reserve metric in icy white (#F5F2EB): "8º LUGAR // 80,0 BILHÕES DE BARRIS".
Text on screen: "RÚSSIA // O GIGANTE DA SIBÉRIA OCIDENTAL E DO ÁRTICO" in uppercase white Montserrat Bold.
Badge: "EXTENSA MALHA DE OLEODUTOS ABASTECENDO A CHINA E A ÍNDIA" in gold (#F59E0B).
Camera: forward linear flight above snow-covered taiga oil gathering stations.
NO voice, NO speech, NO music. ONLY sub-zero wind howl and heavy pump station hum SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Estados Unidos (55 B) e Líbia (48 B)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Texas Permian Basin fracking fields and Libya\'s Sirte Basin.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Comparative metrics: "EUA: 55,2 BILHÕES // LÍBIA: 48,4 BILHÕES".
Text on screen: "EUA E LÍBIA // A REVOLUÇÃO DO SHALE E O CRU LEVE DE SIRTE" in uppercase white Orbitron Bold.
Badge: "EUA TORNARAM-SE OS MAIORES PRODUTORES DIÁRIOS (> 13M BPD)" in electric blue (#38BDF8).
Camera: fast dynamic flyover above Permian Basin horizontal drilling pads.
NO voice, NO speech, NO music. ONLY hydraulic fracturing pump thud and desert wind gust SFX.`
      },
      {
        titulo: 'A Geopolítica da OPEP e o Controle das Torneiras',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global thematic map highlighting OPEC and OPEC+ member nations across Africa, Middle East, and Eurasia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cartographic dominance callout in gold (#F59E0B): "> 75% DAS RESERVAS PROVADAS MUNDIAIS".
Text on screen: "O CARTEL DA OPEP // A REGULAÇÃO DOS PREÇOS DA ENERGIA" in uppercase white Montserrat Bold.
Badge: "DECISÕES DE CORTES DE PRODUÇÃO IMPACTAM DIRETAMENTE A INFLAÇÃO GLOBAL" in intense crimson red (#C8102E).
Camera: smooth globe rotation highlighting the oil flow lines to Asia, Europe, and Americas.
NO voice, NO speech, NO music. ONLY stock exchange ticker click and digital graph pulse SFX.`
      },
      {
        titulo: 'Encerramento e o Mapa da Energia Planetária',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Earth with global oil tanker routes illuminated in glowing golden arteries.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS DEZ RESERVAS QUE MOVERAM UM SÉCULO DE HISTÓRIA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into planetary space orbit.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 203,
    titulo: 'Quais São os Dez Países com as Maiores Frotas Mercantes do Mundo Onde Milhares de Navios Movem Noventa Por Cento do Comércio Global?',
    roteiro: 'Quais são os dez países com as maiores frotas mercantes do mundo onde milhares de navios movem noventa por cento do comércio global? Mais de noventa por cento de tudo o que a humanidade consome viaja em cem mil navios comerciais pelos oceanos. O mapa dos mares esconde uma fascinante dualidade: quem é dono dos navios e qual bandeira está na popa. Pela tonelagem proprietária, a Grécia lidera o planeta com folga, controlando dezessete por cento de toda a capacidade de carga da Terra em quase quatrocentos milhões de toneladas de petroleiros e graneleiros. A China surge em segundo lugar impulsionada pela COSCO e estaleiros estatais, seguida pelo Japão com navios de gás e automóveis, Singapura e Coreia do Sul. Já quando olhamos para as bandeiras de registro, nações como Libéria e Panamá dominam os registros abertos com tributação zero. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O IMPÉRIO DOS MARES',
      l2: 'OS DEZ PAÍSES COM AS MAIORES FROTAS MERCANTES',
      l3: 'QUEM REALMENTE CONTROLA O COMÉRCIO GLOBAL'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Rotas Marítimas Globais',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into global oceans illuminated by dense shipping lanes glowing like blue and gold veins.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O IMPÉRIO DOS MARES"
Line 2 (intense crimson red #C8102E): "OS DEZ PAÍSES COM AS MAIORES FROTAS MERCANTES"
Line 3 (pure white #F5F2EB): "QUEM REALMENTE CONTROLA O COMÉRCIO GLOBAL"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Mediterranean and East Asian sea routes.
NO voice, NO speech, NO music. ONLY deep ship engine hum and clean satellite whoosh SFX.`
      },
      {
        titulo: 'A Dualidade: Proprietários vs Bandeiras de Registro',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Conceptual satellite infographic showing an ultra-large container ship with split jurisdiction overlays.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diagrammatic overlays: "DONO (ARMADOR) VS BANDEIRA DE REGISTRO (OPEN REGISTRY)".
Text on screen: "A DUALIDADE MARÍTIMA // QUEM É DONO E ONDE ESTÁ REGISTRADO" in uppercase white Orbitron Bold.
Badge: "> 90% DO VOLUME DE TODAS AS CARGAS DO PLANETA NAVEGAM POR MAR" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic descent toward a megaship passing through Malacca Strait.
NO voice, NO speech, NO music. ONLY sea spray roar and ship foghorn blast SFX.`
      },
      {
        titulo: '1º Lugar por Propriedade: Grécia (~ 393 Milhões DWT)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view centering on Greece, the Aegean Sea, and the port of Piraeus in Athens.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Fleet metric in radiant gold (#F59E0B): "1º LUGAR // ~ 393 MILHÕES DWT (16,9% DO MUNDO)".
Text on screen: "GRÉCIA // O IMPÉRIO HISTÓRICO DOS ARMADORES HELÊNICOS" in uppercase white Orbitron Bold.
Badge: "LIDERANÇA ABSOLUTA EM PETROLEIROS E NAVIOS GRANELEIROS" in intense crimson red (#C8102E).
Camera: sweeping flyover above hundreds of merchant ships anchored in Saronic Gulf.
NO voice, NO speech, NO music. ONLY harbor buoy chime and maritime radio chatter SFX.`
      },
      {
        titulo: '2º Lugar: China (~ 330 Milhões DWT e a COSCO)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map over China\'s eastern seaboard showing Shanghai, Ningbo-Zhoushan, and giant container hubs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Fleet metric in electric cyan (#38BDF8): "2º LUGAR // ~ 330 MILHÕES DWT".
Text on screen: "CHINA // A EXPANSÃO COLOSSAL DA FROTA ESTATAL" in uppercase white Montserrat Bold.
Badge: "ESTALEIROS CHINESES CONSTROEM MAIS DE 50% DOS NOVOS NAVIOS DO MUNDO" in gold (#F59E0B).
Camera: dynamic linear flyover above Yangshan deep-water automated terminal.
NO voice, NO speech, NO music. ONLY automated container crane mechanical whir and ship whistle SFX.`
      },
      {
        titulo: '3º Lugar: Japão (~ 235 Milhões DWT)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of Japan highlighting Tokyo Bay, Osaka, and high-tech shipyard bays.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Fleet metric in radiant green (#A8C3A6): "3º LUGAR // ~ 235 MILHÕES DWT".
Text on screen: "JAPÃO // NYK, MOL E K LINE DOMINAM CARGAS DE VALOR" in uppercase white Orbitron Bold.
Badge: "ESPECIALISTAS EM NAVIOS CEIFEIROS DE CARROS E METANEIROS DE GNL" in Bege Cartográfico (#F5F2EB).
Camera: slow orthographic push-in on car carrier ships loading at Yokohama docks.
NO voice, NO speech, NO music. ONLY dockside vehicle loading rumble and harbor tide lap SFX.`
      },
      {
        titulo: '4º e 5º Lugares: Singapura (140M) e Coreia do Sul (95M)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Singapore Strait transshipment anchorages and South Korea\'s Busan port.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Capacity metrics highlighted with national flags.
Text on screen: "SINGAPURA E COREIA // OS CENTROS NERVOSOS DO ORIENTE" in uppercase white Montserrat Bold.
Badge: "SINGAPURA É O MAIOR HUB DE ABASTECIMENTO DE COMBUSTÍVEL DO MUNDO" in gold (#F59E0B).
Camera: rapid progressive zoom across hundreds of anchored container vessels in Singapore.
NO voice, NO speech, NO music. ONLY dense vessel radar sweep and harbor wave turbulence SFX.`
      },
      {
        titulo: 'As Maiores Bandeiras de Registro: Libéria e Panamá',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Thematic satellite map highlighting Liberia and Panama with open registry network graphics spanning the globe.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Registry metric in intense crimson (#C8102E): "LIBÉRIA E PANAMÁ REGISTRAM > 16.000 NAVIOS".
Text on screen: "BANDEIRAS DE CONVENIÊNCIA // TRIBUTAÇÃO ZERO E FLEXIBILIDADE" in uppercase white Orbitron Bold.
Badge: "A LIBÉRIA TORNOU-SE O MAIOR REGISTRO EM TONELAGEM BRUTA DO PLANETA" in Bege Cartográfico (#F5F2EB).
Camera: slow cinematic flyover over Panama Canal locks and Monrovia coast.
NO voice, NO speech, NO music. ONLY canal lock water rush and tropical coastal wind SFX.`
      },
      {
        titulo: 'Do 6º ao 10º Lugar: Alemanha, EUA, Noruega, Taiwan e Reino Unido',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional multi-satellite view showing Germany (Hapag-Lloyd), Norway\'s offshore fleet, Taiwan (Evergreen), and the UK.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Fleet sizes highlighted: "ALEMANHA: 75M // EUA: 68M // NORUEGA: 62M // TAIWAN: 58M // UK: 48M".
Text on screen: "POTÊNCIAS NACIONAIS // DE PETROLEIROS A NAVIOS DE APOIO" in uppercase white Montserrat Bold.
Badge: "TAIWAN OPERA GIGANTES DO TRANSPORTE DE CONTÊINERES COMO EVERGREEN" in gold (#F59E0B).
Camera: dynamic linear flyover above Hamburg harbor and North Sea offshore supply boats.
NO voice, NO speech, NO music. ONLY North Sea gale wind and heavy steel hull stress groan SFX.`
      },
      {
        titulo: 'A Cadeia de Suprimentos: O Navio que Nunca Para',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite time-lapse animation charting vessel density crossing the Pacific, Indian, and Atlantic oceans simultaneously.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Global fleet metric: "> 2,2 BILHÕES DE TONELADAS DE CAPACIDADE TOTAL".
Text on screen: "A ESPINHA DORSAL DA GLOBALIZAÇÃO // 100 MIL NAVIOS EM OPERAÇÃO" in uppercase white Orbitron Bold.
Badge: "QUALQUER CRISE NAS ROTAS Navais REPERCUTE NA PRATELEIRA DOS SUPERMERCADOS" in white (#F5F2EB).
Camera: continuous high-altitude orbital sweep tracking trans-oceanic vessel clusters.
NO voice, NO speech, NO music. ONLY global data stream hum and maritime radio frequency sweep SFX.`
      },
      {
        titulo: 'Encerramento e o Mapa da Geopolítica Naval Mercante',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Earth with global shipping lanes glowing brilliantly against dark ocean depths.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS FROTAS QUE ALIMENTAM, VESTEM E MOVIMENTAM O PLANETA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above the oceans.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  },
  {
    num: 204,
    titulo: 'Quais São as Dez Maiores Bacias Hidrográficas do Mundo Onde Rios Colossais Drenam Milhões de Quilômetros Quadrados de Continentes?',
    roteiro: 'Quais são as dez maiores bacias hidrográficas do mundo onde rios colossais drenam milhões de quilômetros quadrados de continentes? Rios são as artérias vivas do relevo terrestre. No topo absoluto do planeta está a Bacia Amazônica, um monstro hidrológico de sete milhões de quilômetros quadrados espalhado por oito países sul-americanos, descarregando vinte por cento de toda a água doce fluvial que chega aos oceanos. O segundo lugar pertence à colossal Bacia do Rio Congo na África Central com quatro milhões de quilômetros quadrados e gargantas de duzentos metros de profundidade. A Bacia do Mississippi-Missouri nos Estados Unidos ocupa o terceiro lugar com mais de três milhões e duzentos mil quilômetros quadrados, seguida pela Bacia do Rio da Prata e pelo Rio Ob na Sibéria russa. O Top 10 é completado por Ienissei, Lena, Níger, Amur e Yangtzé. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'AS ARTÉRIAS DOS CONTINENTES',
      l2: 'AS DEZ MAIORES BACIAS HIDROGRÁFICAS DA TERRA',
      l3: 'DE SÃO PAULO À SIBÉRIA E AMAZÔNIA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Grandes Bacias Fluviais',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning into world continental river networks illuminated like glowing neon blue drainage trees.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "AS ARTÉRIAS DOS CONTINENTES"
Line 2 (intense crimson red #C8102E): "AS DEZ MAIORES BACIAS HIDROGRÁFICAS DA TERRA"
Line 3 (pure white #F5F2EB): "DE SÃO PAULO À SIBÉRIA E AMAZÔNIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the South American continent and Amazon basin.
NO voice, NO speech, NO music. ONLY deep water cascade roar and clean satellite whoosh SFX.`
      },
      {
        titulo: '1º Lugar: Bacia Amazônica (~ 7.000.000 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of South America showing the immense drainage basin of the Amazon River in glowing emerald green (#A8C3A6).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in radiant gold (#F59E0B): "1º LUGAR // ~ 7.000.000 KM² (QUASE O TAMANHO DA AUSTRÁLIA)".
Text on screen: "BACIA AMAZÔNICA // 20% DE TODA A ÁGUA DOCE FLUVIAL DA TERRA" in uppercase white Orbitron Bold.
Badge: "DRENA TERRITÓRIOS DE OITO PAÍSES E DA GUIANA FRANCESA" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing the confluence of Rio Negro and Solimões.
NO voice, NO speech, NO music. ONLY colossal river current rush and tropical rainforest wind SFX.`
      },
      {
        titulo: '2º Lugar: Bacia do Rio Congo (~ 4.014.000 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map over Central Africa showing the massive Congo River loop surrounding the Congo Basin rainforest.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in vibrant cyan (#38BDF8): "2º LUGAR // ~ 4.014.000 KM²".
Text on screen: "BACIA DO CONGO // O RIO MAIS PROFUNDO DO PLANETA (> 220 M)" in uppercase white Montserrat Bold.
Badge: "SEGUNDA MAIOR FLORESTA TROPICAL EQUATORIAL DA TERRA" in gold (#F59E0B).
Camera: dynamic linear flyover above Malebo Pool and Livingstone Falls rapids.
NO voice, NO speech, NO music. ONLY thunderous waterfall crash and African jungle night insects SFX.`
      },
      {
        titulo: '3º Lugar: Bacia do Mississippi-Missouri (~ 3.220.000 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of North America highlighting the entire Mississippi-Missouri river network spanning 31 US states.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in bright amber (#F59E0B): "3º LUGAR // ~ 3.220.000 KM² (41% DOS EUA CONTÍGUO)".
Text on screen: "MISSISSIPPI-MISSOURI // O CELEIRO AGRÍCOLA DA AMÉRICA" in uppercase white Orbitron Bold.
Badge: "DRENA O CORN BELT ATÉ O TERMINAL EXPORTADOR DE NOVA ORLEANS" in Bege Cartográfico (#F5F2EB).
Camera: high-altitude forward flight following the muddy meanders into Gulf of Mexico delta.
NO voice, NO speech, NO music. ONLY paddlewheel riverboat thrum and prairie breeze SFX.`
      },
      {
        titulo: '4º Lugar: Bacia do Rio da Prata (~ 3.100.000 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of South America\'s Southern Cone highlighting the Paraná, Paraguay, and Uruguay rivers converging at Buenos Aires.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in vibrant green (#A8C3A6): "4º LUGAR // ~ 3.100.000 KM²".
Text on screen: "BACIA DO RIO DA PRATA // O CORAÇÃO ECONÔMICO DO MERCOSUL" in uppercase white Montserrat Bold.
Badge: "ABRIGA A USINA DE ITAIPU E DRENA SÃO PAULO, BRASÍLIA E BUENOS AIRES" in gold (#F59E0B).
Camera: slow orthographic push-in above Itaipu dam spillway and Iguazu Falls.
NO voice, NO speech, NO music. ONLY roaring hydroelectric spillway torrent and river current hiss SFX.`
      },
      {
        titulo: '5º e 6º Lugares: Rios Ob (2,97M km²) e Ienissei (2,58M km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view over Western and Central Siberia showing the Ob and Yenisey rivers draining northward to the Arctic.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Drainage callout in icy white (#F5F2EB): "OB: 2.972.000 KM² // IENISSEI: 2.580.000 KM²".
Text on screen: "OB E IENISSEI // OS GIGANTES CONGELADOS DA SIBÉRIA" in uppercase white Orbitron Bold.
Badge: "IENISSEI DRENA O LAGO BAIKAL, O MAIS PROFUNDO E ANTIGO DA TERRA" in electric blue (#38BDF8).
Camera: dynamic linear flyover above vast frozen peatlands and taiga river bends.
NO voice, NO speech, NO music. ONLY Arctic ice cracking and subpolar wind roar SFX.`
      },
      {
        titulo: '7º Lugar: Bacia do Rio Lena (~ 2.490.000 km² na Yakútia)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Lena River and its colossal delta flowing into the Laptev Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in bright cyan (#38BDF8): "7º LUGAR // ~ 2.490.000 KM²".
Text on screen: "RIO LENA // O COLOSSO DO PERMAFROST RUSSO" in uppercase white Montserrat Bold.
Badge: "OS PILARES DE LENA: FALÉSIAS ROCHOSAS DE 300 METROS NA MARGEM" in gold (#F59E0B).
Camera: sweeping flyover above the labyrinthine braided channels of the Lena Delta.
NO voice, NO speech, NO music. ONLY tundra silence and Arctic seabird cry SFX.`
      },
      {
        titulo: '8º e 9º Lugares: Rio Níger (2,1M km²) e Rio Amur (1,85M km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing the Niger River\'s crescent through West Africa and the Amur River separating Russia and China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Comparative metrics: "NÍGER: 2.117.000 KM² // AMUR: 1.855.000 KM²".
Text on screen: "NÍGER E AMUR // DO SAHEL AFRICANO À MANCHÚRIA" in uppercase white Orbitron Bold.
Badge: "AMUR DEFINE QUASE TRÊS MIL QUILÔMETROS DE FRONTEIRA RÚSSIA-CHINA" in Bege Cartográfico (#F5F2EB).
Camera: lateral pan along the Niger Inland Delta wetlands and Amur border river bluffs.
NO voice, NO speech, NO music. ONLY dry Sahel wind and border river current ripple SFX.`
      },
      {
        titulo: '10º Lugar: Bacia do Rio Yangtzé (~ 1.800.000 km² na China)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of China charting the Yangtze River from the Tibetan plateau through Three Gorges to Shanghai.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Area metric in radiant gold (#F59E0B): "10º LUGAR // ~ 1.800.000 KM² (LAR DE 450M DE PESSOAS)".
Text on screen: "RIO YANGTZÉ // A MAIOR USINA HIDRELÉTRICA DA TERRA" in uppercase white Montserrat Bold.
Badge: "TRÊS GARGANTAS GERA MAIS DE 100 BILHÕES DE KILOWATTS-HORA/ANO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in on the colossal Three Gorges concrete dam barrier.
NO voice, NO speech, NO music. ONLY hydro turbine deep vibration and water gate spray SFX.`
      },
      {
        titulo: 'Encerramento e o Mapa da Hidrografia Global',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand cinematic 4K satellite view of Earth with all major continental river basins glowing like blue illuminated vascular systems.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "AS DEZ ARTÉRIAS NATURAIS QUE DRENAM UM QUARTO DA TERRA" in uppercase white Orbitron Bold.
Call to Action box: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU // LINK NO PERFIL" in gold (#F59E0B).
Camera: slow majestic pull-back into orbital space view above the oceans.
NO voice, NO speech, NO music. ONLY clean satellite whoosh and final resonant bass hit SFX.`
      }
    ]
  }
];

// Função que formata o arquivo markdown do roteiro
function formatarVideoMarkdown(v) {
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n`;
  md += `${v.roteiro}\n\n`;
  md += `---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  for (let i = 0; i < v.prompts.length; i++) {
    const p = v.prompts[i];
    md += `#### Prompt ${i + 1} — ${p.titulo} (4s)\n`;
    md += `\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }

  md += `---\n\n`;
  md += `### 3. Legenda\n\n`;
  md += `${v.titulo}\n\n`;
  md += `#geografia #geopolitica #mapas\n`;

  return md;
}

// Gravar os 10 roteiros de vídeo
console.log('🎬 Criando os 10 roteiros de vídeo em D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros...');
for (const v of videos) {
  const filePath = path.join(roteirosDir, `Video ${v.num}.md`);
  const content = formatarVideoMarkdown(v);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ [Video ${v.num}] ${v.titulo} (${v.roteiro.length} chars narração / ${content.length} chars total)`);
}

// Atualizar o Índice.md
console.log('\n📑 Atualizando Índice.md com os novos vídeos 195 a 204...');
const indicePath = path.join(roteirosDir, 'Índice.md');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

const novasLinhasTabela = videos.map(v => 
  `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`
).join('\n');

// Inserir após a linha do Video 194
indiceContent = indiceContent.replace(
  '| 194 | [[Projetos/VitaleGeo/Roteiros/Video 194|Video 194]] | Quais São os Dez Maiores Produtores de Energia Renovável do Mundo Onde Ventos, Rios e Sol Redesenham a Matriz Global? |',
  `| 194 | [[Projetos/VitaleGeo/Roteiros/Video 194|Video 194]] | Quais São os Dez Maiores Produtores de Energia Renovável do Mundo Onde Ventos, Rios e Sol Redesenham a Matriz Global? |\n${novasLinhasTabela}`
);

// Atualizar cabeçalho do acervo de vídeos (203 -> 213)
indiceContent = indiceContent.replace(
  /Acervo oficial de \*\*(\d+) roteiros de vídeo\*\*/,
  'Acervo oficial de **213 roteiros de vídeo**'
);

fs.writeFileSync(indicePath, indiceContent, 'utf8');
console.log('✅ Índice.md atualizado com sucesso para 213 roteiros!');
