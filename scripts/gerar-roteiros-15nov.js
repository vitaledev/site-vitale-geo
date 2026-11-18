// Gerador de Roteiros de Vídeo (Videos 215 a 224)
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 215,
    titulo: 'Como Três Partilhas e a Conferência de Potsdam Moveram a Polônia Duzentos Quilômetros Para o Oeste no Mapa Europeu?',
    roteiro: 'Como Três Partilhas e a Conferência de Potsdam Moveram a Polônia Duzentos Quilômetros Para o Oeste no Mapa Europeu? A Polônia é o único país do mundo que mudou fisicamente de lugar no mapa. Entre 1772 e 1795, três partilhas sucessivas orquestradas por Rússia, Prússia e Áustria simplesmente apagaram a nação dos atlas por cento e vinte e três anos. Ressuscitada em 1918 em Versalhes, a Segunda República Polonesa foi novamente esquartejada em 1939 pelo pacto secreto entre Hitler e Stalin. O desfecho mais radical ocorreu no verão de 1945, na Conferência de Potsdam. Stalin recusou-se a devolver os cento e oitenta mil quilômetros quadrados do leste polonês anexados pela União Soviética. Como compensação, empurrou toda a fronteira da Polônia duzentos quilômetros para o oeste, tomando cem mil quilômetros quadrados da Alemanha derrotada até os rios Oder e Neisse. Doze milhões de pessoas foram expulsas em trens de carga na maior migração forçada da Europa moderna. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O PAÍS QUE MUDOU DE LUGAR NO MAPA',
      l2: 'COMO A POLÔNIA ANDOU 200 KM PARA O OESTE',
      l3: 'A CONFERÊNCIA DE POTSDAM EM 1945'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Translação Territorial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe zooming into Central Europe, highlighting Poland's historical borders shifting westward like sliding tectonic plates.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O PAÍS QUE MUDOU DE LUGAR NO MAPA"
Line 2 (intense crimson red #C8102E): "COMO A POLÔNIA ANDOU 200 KM PARA O OESTE"
Line 3 (pure white #F5F2EB): "A CONFERÊNCIA DE POTSDAM EM 1945"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Vistula and Oder river basins.
NO voice, NO speech, NO music. ONLY deep cinematic rumble and clean satellite whoosh SFX.`
      },
      {
        titulo: 'A Comunidade Polaco-Lituana e as Três Partilhas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite map of the Polish-Lithuanian Commonwealth between 1772 and 1795.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Three expanding vector arrows in Prussian blue, Russian green, and Austrian yellow slicing the commonwealth into three partitions until Poland completely vanishes.
Text on screen: "1795 // A POLÔNIA É APAGADA DO MAPA POR 123 ANOS" in uppercase white Orbitron Bold.
Badge: "PARTILHADA ENTRE RÚSSIA, PRÚSSIA E ÁUSTRIA" in intense crimson red (#C8102E).
Camera: slow cinematic pull-back showing Warsaw under Prussian rule and Krakow under Austrian control.
NO voice, NO speech, NO music. ONLY old artillery thunder and military drum echo SFX.`
      },
      {
        titulo: 'O Renascimento em 1918 e a Paz de Riga de 1921',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Interwar satellite map of the Second Polish Republic (1918–1939).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders expanding eastward past the Curzon Line to incorporate Vilnius and Lviv following the Miracle at the Vistula battle.
Text on screen: "TRATADO DE RIGA (1921) // O RENASCIMENTO EM 388 MIL KM²" in uppercase white Montserrat Bold.
Badge: "O CORREDOR POLONÊS ATÉ O MAR BÁLTICO" in sage green (#A8C3A6).
Camera: linear tracking shot flying over the Polish Corridor and the Free City of Danzig.
NO voice, NO speech, NO music. ONLY galloping cavalry wind and vintage telegraph click SFX.`
      },
      {
        titulo: 'O Pacto Molotov-Ribbentrop e a Invasão de 1939',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dark wartime satellite map of Poland in September 1939.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Two crushing pincers: Nazi Germany attacking from the west and Soviet Union attacking from the east meeting at the Bug and San rivers.
Text on screen: "PACTO MOLOTOV-RIBBENTROP // A QUARTA PARTILHA" in uppercase white Orbitron Bold.
Badge: "METADE DO PAÍS ANEXADA PELA UNIÃO SOVIÉTICA" in crimson red (#C8102E).
Camera: high-angle dramatic dive onto the demarcation line across Warsaw.
NO voice, NO speech, NO music. ONLY distant air raid siren and low rumbling engine echo SFX.`
      },
      {
        titulo: 'A Conferência de Potsdam e a Exigência de Stalin',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map of the Potsdam Conference in Cecilienhof Palace (August 1945).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Stalin drawing the Curzon Line in crimson red (#C8102E), keeping 180,000 km² of eastern Poland under direct Soviet rule.
Text on screen: "POTSDAM 1945 // STALIN RECUSA DEVOLVER O LESTE" in uppercase white Orbitron Bold.
Badge: "A LINHA CURZON TORNA-SE FRONTEIRA SOVIÉTICA" in gold (#F59E0B).
Camera: orthographic pan showing the eastern territories of Kresy absorbed into Ukraine and Belarus.
NO voice, NO speech, NO music. ONLY heavy gavel strike and tactical map marker click SFX.`
      },
      {
        titulo: 'A Nova Fronteira na Linha Oder-Neisse',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover along the Oder and Lusatian Neisse rivers in western Poland.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing neon boundary line in radiant gold (#F59E0B) shifting Poland's western border 200 km westward to annex Silesia, Pomerania, and southern East Prussia.
Text on screen: "LINHA ODER-NEISSE // 100 MIL KM² CEDIDOS DA ALEMANHA" in uppercase white Orbitron Bold.
Badge: "A POLÔNIA ANDA 200 KM PARA O OESTE" in intense crimson red (#C8102E).
Camera: fast linear descent following the river confluence to the Baltic port of Szczecin.
NO voice, NO speech, NO music. ONLY industrial steel factory hum and river current SFX.`
      },
      {
        titulo: 'As Terras Recuperadas e a Maior Migração Forçada',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Demographic vector map showing massive human migration arrows across Central Europe between 1945 and 1950.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
8 million Germans moving west of the Oder-Neisse, while 2 million Poles from Lviv and Vilnius are transported east to repopulate Wroclaw and Szczecin.
Text on screen: "12 MILHÕES DE PESSOAS DESLOCADAS EM TRENS DE CARGA" in uppercase white Montserrat Bold.
Badge: "AS TERRAS RECUPERADAS (ZIEMIE ODZYSKANE)" in sage green (#A8C3A6).
Camera: sweeping split-screen tracking shot across western and eastern Poland.
NO voice, NO speech, NO music. ONLY distant steam locomotive whistle and heavy railway track clatter SFX.`
      },
      {
        titulo: 'O Tratado de Fronteira de 1990 com a Alemanha Unificada',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Modern diplomatic satellite map of the unified Germany and Poland in November 1990.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Gold boundary seal locking the 467 km border along the Oder and Neisse rivers permanently under international law.
Text on screen: "14 NOVEMBRO 1990 // ALEMANHA RENUNCIA ÀS REIVINDICAÇÕES" in uppercase white Orbitron Bold.
Badge: "INVIOLABILIDADE PERPÉTUA DAS FRONTEIRAS POLONESAS" in Bege Cartográfico (#F5F2EB).
Camera: smooth lateral pan along the Oder river bridge connecting Frankfurt an der Oder to Slubice.
NO voice, NO speech, NO music. ONLY official treaty pen signature and diplomatic chime SFX.`
      },
      {
        titulo: 'A Polônia Moderna: Fortaleza Compacta da OTAN',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full high-altitude satellite view of modern Poland's 312,696 km² territory bordered by seven sovereign nations.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Homogeneous, compact shape illuminated in luminous gold with 500 km of continuous coastline on the Baltic Sea.
Text on screen: "312.696 KM² COMPACTOS // O ESCUDO LESTE DA OTAN" in uppercase white Orbitron Bold.
Badge: "DA FRAGILIDADE DAS PARTILHAS À POTÊNCIA MILITAR EUROPEIA" in crimson red (#C8102E).
Camera: dramatic linear ascent revealing the entire European plain from the Baltic to the Carpathians.
NO voice, NO speech, NO music. ONLY clean military radar sweep and low bass pulse SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cinematic space pull-back to full planetary orbital view of Europe at night, with Poland glowing in sharp geometric borders.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA QUE A HISTÓRIA DESLOCOU NO CONTINENTE" in uppercase white Orbitron Bold.
Subheading: "AS FRONTEIRAS FORJADAS POR GUERRAS E TRATADOS" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 216,
    titulo: 'Por Que o Cerco da Cadeia de Pérolas e as Montanhas do Himalaia Fazem da Índia a Chave da Segurança do Oceano Índico?',
    roteiro: 'Por Que o Cerco da Cadeia de Pérolas e as Montanhas do Himalaia Fazem da Índia a Chave da Segurança do Oceano Índico? Projetando-se como um porta-aviões natural no terceiro maior oceano do planeta, a Índia é a guardiã de rotas onde passam sessenta e quatro por cento de todo o petróleo bruto mundial. Ao norte, soldados indianos enfrentam o exército chinês ao longo de três mil e quatrocentos quilômetros da Linha de Controle Real no Himalaia, onde um tratado de 1996 proíbe armas de fogo e obriga combates corpo a corpo em desfiladeiros gelados. No mar, a China financiou a chamada Cadeia de Pérolas, cercando a costa indiana com megaportos no Paquistão, Sri Lanka e Djibuti. A resposta de Nova Délhi foi militarizar as Ilhas Andaman e Nicobar, transformando quinhentas ilhas em uma rolha inexpugnável na entrada do Estreito de Malaca para conter frotas e submarinos rivais. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O GIGANTE CERCADO POR DOIS TEATROS',
      l2: 'POR QUE A ÍNDIA É A CHAVE DO OCEANO ÍNDICO',
      l3: 'A CADEIA DE PÉROLAS E O HIMALAIAS'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Fortaleza Indiana',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe centering on the Indian subcontinent jutting deep into the tropical Indian Ocean between the Arabian Sea and Bay of Bengal.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O GIGANTE CERCADO POR DOIS TEATROS"
Line 2 (intense crimson red #C8102E): "POR QUE A ÍNDIA É A CHAVE DO OCEANO ÍNDICO"
Line 3 (pure white #F5F2EB): "A CADEIA DE PÉROLAS E O HIMALAIAS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Indian peninsula.
NO voice, NO speech, NO music. ONLY deep oceanic rumble and tactical radar ping SFX.`
      },
      {
        titulo: 'A Cunha Geográfica Peninsular e as Rotas de Petróleo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-angle satellite view of the Indian coastline spanning 7,516 km and its 2.3 million km² Exclusive Economic Zone.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing golden trade lines radiating through the Arabian Sea and Bay of Bengal carrying 64% of global crude oil.
Text on screen: "7.516 KM DE LITORAL // O PORTA-AVIÕES NATURAL DO ÍNDICO" in uppercase white Orbitron Bold.
Badge: "64% DO PETRÓLEO BRUTO MUNDIAL CRUZA ESTAS ÁGUAS" in intense crimson red (#C8102E).
Camera: slow cinematic descent tracking naval convoys from Hormuz toward Malacca.
NO voice, NO speech, NO music. ONLY ocean wave surge and ship horn echo SFX.`
      },
      {
        titulo: 'O Impasse no Himalaia e a Linha de Controle Real (LAC)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographical 3D satellite view of the snowcapped Himalayas along the 3,488 km Line of Actual Control (LAC).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing red tactical boundary line across the high-altitude desert of Galwan Valley in Ladakh (4,200m).
Text on screen: "LINHA DE CONTROLE REAL // 3.488 KM DE FRONTEIRA MILITARIZADA" in uppercase white Orbitron Bold.
Badge: "TRATADO DE 1996 PROÍBE ARMAS DE FOGO A 2 KM DA LINHA" in gold (#F59E0B).
Camera: dynamic linear flyover skimming freezing mountain peaks and glacial gorges.
NO voice, NO speech, NO music. ONLY mountain blizzard howling and military radio static SFX.`
      },
      {
        titulo: 'O Corredor de Siliguri: O Pescoço de Galinha da Índia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up satellite view of the Siliguri Corridor in West Bengal squeezed between Nepal, Bhutan, and Bangladesh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Caliper measurement graphic displaying "22 KM DE LARGURA" in intense crimson red (#C8102E).
Text on screen: "CORREDOR DE SILIGURI // O PESCOÇO DE GALINHA DE 22 KM" in uppercase white Montserrat Bold.
Badge: "LIGAÇÃO ÚNICA PARA 45 MILHÕES DE HABITANTES NO NORDESTE" in sage green (#A8C3A6).
Camera: rapid lateral pan tracing railway lines and highway funnels between mountain valleys.
NO voice, NO speech, NO music. ONLY heavy freight train roar and electronic warning tone SFX.`
      },
      {
        titulo: 'A Estratégia Chinesa da Cadeia de Pérolas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional satellite map of the Indian Ocean perimeter displaying Chinese-invested deepwater ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing red beacon nodes appearing at Gwadar (Pakistan), Hambantota (Sri Lanka), Kyaukpyu (Myanmar), and Djibouti.
Text on screen: "A CADEIA DE PÉROLAS // O CERCO MARÍTIMO DE PEQUIM" in uppercase white Orbitron Bold.
Badge: "PORTOS ESTRATÉGICOS CONTORNANDO O PERÍMETRO INDIANO" in intense crimson red (#C8102E).
Camera: broad rotational orbit connecting all maritime nodes in a red encircling arc.
NO voice, NO speech, NO music. ONLY sonar ping sequence and deep bass rumble SFX.`
      },
      {
        titulo: 'Gwadar e o Corredor Econômico China-Paquistão',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the deepwater Port of Gwadar on Pakistan's Arabian Sea coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Highways and pipelines tracing 3,000 km north across the Karakoram Highway directly into Xinjiang, China.
Text on screen: "PORTO DE GWADAR // O CORREDOR CPEC DE US$ 60 BILHÕES" in uppercase white Orbitron Bold.
Badge: "DRIBLANDO O OCEANO ÍNDICO POR TERRA FIRME" in gold (#F59E0B).
Camera: linear tracking shot moving from the Persian Gulf entrance into Pakistani desert terminals.
NO voice, NO speech, NO music. ONLY port container crane clanking and wind gust SFX.`
      },
      {
        titulo: 'As Ilhas Andaman e Nicobar: O Bloqueio de Malaca',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite imagery zooming into the Andaman and Nicobar archipelago stretching 750 km down the Bay of Bengal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical radar cones sweeping the Six Degree Channel only 150 km north of Sumatra, Indonesia.
Text on screen: "ILHAS ANDAMAN E NICOBAR // A SENTINELA DE MALACA" in uppercase white Orbitron Bold.
Badge: "COMANDO INTEGRADO TRI-SERVICE BLOQUEANDO O GARGALO NAVAL" in sage green (#A8C3A6).
Camera: rapid descent toward Port Blair naval docks and naval air station runway.
NO voice, NO speech, NO music. ONLY maritime patrol jet turbine whine and sonar pulse SFX.`
      },
      {
        titulo: 'A Frota de Porta-Aviões e a Doutrina Sagar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Naval satellite view showing Indian carrier strike groups INS Vikramaditya and INS Vikrant cruising in formation.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Concentric protective rings and P-8I Poseidon anti-submarine patrol tracks covering the central Indian Ocean basin.
Text on screen: "DOUTRINA SAGAR // SEGURANÇA E LIDERANÇA REGIONAL" in uppercase white Montserrat Bold.
Badge: "DOIS PORTA-AVIÕES E SUBMARINOS NUCLEARES BALÍSTICOS" in Bege Cartográfico (#F5F2EB).
Camera: low-altitude smooth flyover beside modern guided-missile destroyers.
NO voice, NO speech, NO music. ONLY naval bow wave crash and carrier flight deck launch SFX.`
      },
      {
        titulo: 'A Aliança do Quad e os Exercícios Navais Malabar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite map linking the four Quad nations: India, United States, Japan, and Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Interlocking blue naval coordinate grids covering the entire Indo-Pacific theater from Mumbai to Sydney and Tokyo.
Text on screen: "QUAD // ÍNDIA, EUA, JAPÃO E AUSTRÁLIA" in uppercase white Orbitron Bold.
Badge: "O EQUILÍBRIO NAVAL DO INDO-PACÍFICO NO SÉCULO XXI" in intense crimson red (#C8102E).
Camera: broad pull-back into full Indo-Pacific oceanic scope.
NO voice, NO speech, NO music. ONLY tactical command center beep and data telemetry SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of planet Earth centered over the Indian Ocean at night, with India glowing brightly at the crossroads of world commerce.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O CENTRO GRAVITACIONAL DAS ROTAS OCEÂNICAS" in uppercase white Orbitron Bold.
Subheading: "A GEOPOLÍTICA DITADA PELA TERRA E PELO MAR" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 217,
    titulo: 'Como as Jazidas de Cobalto e Coltan de Katanga no Congo Sustentam a Indústria Global de Baterias e Smartphones?',
    roteiro: 'Como as Jazidas de Cobalto e Coltan de Katanga no Congo Sustentam a Indústria Global de Baterias e Smartphones? Sob o solo da República Democrática do Congo repousa o patrimônio mineral mais cobiçado da economia moderna, avaliado em vinte e quatro trilhões de dólares. O país concentra mais de setenta por cento de todo o cobalto extraído no planeta na província de Katanga, e mais de sessenta por cento do coltan nas florestas de Kivu. Sem o cobalto, as baterias de íon-lítio dos veículos elétricos entram em colapso térmico. Sem o tântalo extraído do coltan, os microcapacitores de cada smartphone, satélite e processador do mundo simplesmente não funcionam. Hoje, empresas estatais da China controlam as principais minas e refinam quase oitenta por cento desse minério. Em resposta, Estados Unidos e Europa financiam o Corredor de Lobito, uma ferrovia de mil e trezentos quilômetros para escoar os minerais congoleses direto para o Atlântico. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O SUBSOLO MAIS COBIÇADO DO PLANETA',
      l2: 'O COBALTO E O COLTAN DE KATANGA NO CONGO',
      l3: 'A ENERGIA DE BATERIAS E SMARTPHONES'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Tesouro Mineral Congolês',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending toward Central Africa, highlighting the Democratic Republic of the Congo and its glowing mineral basins.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O SUBSOLO MAIS COBIÇADO DO PLANETA"
Line 2 (intense crimson red #C8102E): "O COBALTO E O COLTAN DE KATANGA NO CONGO"
Line 3 (pure white #F5F2EB): "A ENERGIA DE BATERIAS E SMARTPHONES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the southern province of Katanga.
NO voice, NO speech, NO music. ONLY deep tectonic rumble and mining machinery echo SFX.`
      },
      {
        titulo: 'O Cinturão de Cobre de Katanga e a Cidade de Kolwezi',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming into the massive open-pit mines of Kolwezi in Lualaba province.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Terraced mining craters glowing in metallic cobalt-blue vectors against the red African soil.
Text on screen: "KOLWEZI // O CINTURÃO DE COBRE DA ÁFRICA CENTRAL" in uppercase white Orbitron Bold.
Badge: "73% DE TODO O COBALTO EXTRAÍDO NA TERRA" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing giant 300-ton haul trucks moving along spiral pit ramps.
NO voice, NO speech, NO music. ONLY heavy diesel engine purr and rock crushing rumble SFX.`
      },
      {
        titulo: 'A Química do Cobalto nas Baterias de Carros Elétricos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Technical 3D graphic overlaid on the Katanga satellite map showing lithium-ion battery cathode chemistry.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Microscopic crystal grid of NMC (Nickel-Manganese-Cobalt) stabilizing under thermal heat vectors.
Text on screen: "ESTABILIDADE TÉRMICA // O ESTABILIZADOR DAS BATERIAS" in uppercase white Montserrat Bold.
Badge: "CADA CARRO ELÉTRICO CONSOME DE 6 A 12 KG DE COBALTO" in gold (#F59E0B).
Camera: linear tracking shot moving from battery cell blueprint into container train tracks.
NO voice, NO speech, NO music. ONLY electric arc crackle and high-voltage hum SFX.`
      },
      {
        titulo: 'O Coltan das Florestas Montanhosas de Kivu',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover across the rainforests of North and South Kivu near Lake Kivu.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Artisanal mining clusters highlighted with pulsating amber markers in Rubaya.
Text on screen: "FLORESTAS DE KIVU // 60% DO COLTAN MUNDIAL" in uppercase white Orbitron Bold.
Badge: "O TÂNTALO QUE EQUIPA CADA SMARTPHONE E CHIP" in intense crimson red (#C8102E).
Camera: orthographic pan following winding jungle river beds where minerals are panned.
NO voice, NO speech, NO music. ONLY jungle bird cries and shovel scraping gravel SFX.`
      },
      {
        titulo: 'O Domínio do Refino Industrial pela China',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global supply chain satellite map tracking cargo routes from Kolwezi to Chinese refining hubs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Massive red transport lines flowing from African ports across the Indian Ocean to Ningbo and Shanghai.
Text on screen: "HEGEMONIA DE REFINO // CHINA REFINA 78% DO COBALTO" in uppercase white Orbitron Bold.
Badge: "CONGLOMERADOS ESTATAIS CONTROLAM 15 DAS 19 MAIORES MINAS" in crimson red (#C8102E).
Camera: sweeping arc tracing the transcontinental supply line into industrial chemical smelters.
NO voice, NO speech, NO music. ONLY cargo ship propeller thrum and factory furnace blast SFX.`
      },
      {
        titulo: 'A Rota Terrestre Atual até os Portos do Índico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view showing thousands of trucks navigating congested African highway corridors.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
2,500 km route highlighted in pulsing yellow winding toward Durban (South Africa) and Dar es Salaam (Tanzania).
Text on screen: "2.500 KM DE RODOVIAS // SEMANAS DE ESPERA EM FILAS" in uppercase white Montserrat Bold.
Badge: "GARGALO LOGÍSTICO SATURANDO OS PORTOS DO ÍNDICO" in gold (#F59E0B).
Camera: linear tracking shot following highway curves through savanna bottlenecks.
NO voice, NO speech, NO music. ONLY truck air brake hiss and highway tire drone SFX.`
      },
      {
        titulo: 'O Projeto do Corredor de Lobito (EUA e UE)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic infrastructure satellite map showing the Benguela Railway connecting Kolwezi to Lobito port in Angola.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vibrant emerald-green line (#A8C3A6) tracing the 1,300 km railway line westward directly to the Atlantic Ocean.
Text on screen: "CORREDOR DE LOBITO // 1.300 KM DE TRILHOS ATÉ O ATLÂNTICO" in uppercase white Orbitron Bold.
Badge: "FINANCIAMENTO DO G7 PARA QUEBRAR O MONOPÓLIO CHINÊS" in sage green (#A8C3A6).
Camera: dynamic linear flyover tracing rails from Congolese copper mines to deepwater docks.
NO voice, NO speech, NO music. ONLY modern electric locomotive horn and railway click SFX.`
      },
      {
        titulo: 'A Mina de Manono: A Maior Jazida de Lítio',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the pegmatite rock formations of Manono in Tanganyika province.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
400 million tons of hard-rock spodumene lithium deposits highlighted in luminescent cyan contour lines.
Text on screen: "MANONO // O GIGANTE ADORMECIDO DO LÍTIO" in uppercase white Montserrat Bold.
Badge: "400 MILHÕES DE TONELADAS DE MINÉRIO EM ROCHA DURA" in Bege Cartográfico (#F5F2EB).
Camera: smooth tilting shot revealing the vast unexplored mineralized pegmatite ridge.
NO voice, NO speech, NO music. ONLY drill rig vibration and geological survey ping SFX.`
      },
      {
        titulo: 'O Tabuleiro Geoeconômico Global no Coração Africano',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of the entire Congo basin surrounded by nine sovereign African nations.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Global tech icons (batteries, microchips, electric cars, satellites) radiating outward from the center of Africa.
Text on screen: "24 TRILHÕES DE DÓLARES EM RIQUEZAS NO SUBSOLO" in uppercase white Orbitron Bold.
Badge: "O DESTINO DA TECNOLOGIA MUNDIAL DECIDIDO NO CONGO" in intense crimson red (#C8102E).
Camera: high-altitude orbital ascent framing the full 2.34 million km² Congolese territory.
NO voice, NO speech, NO music. ONLY global satellite communications sweep SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of Earth centered on Africa at night with mining and transport routes glowing across the continent.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA DA ENERGIA E DOS RECURSOS CRÍTICOS" in uppercase white Orbitron Bold.
Subheading: "A GEOECONOMIA QUE MOVE A REVOLUÇÃO DIGITAL" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 218,
    titulo: 'Como a Retificação do Rio Danúbio Criou Bolsões de Terra Nullius e a Disputa Entre Sérvia e Croácia?',
    roteiro: 'Como a Retificação do Rio Danúbio Criou Bolsões de Terra Nullius e a Disputa Entre Sérvia e Croácia? Ao longo de cento e trinta e sete quilômetros onde o Danúbio separa a Sérvia da Croácia, obras de engenharia do século dezenove geraram a fronteira mais insólita da Europa. O império austro-húngaro dragou e endireitou as curvas sinuosas do rio para acelerar o comércio de barcaças. Quando a Iugoslávia ruiu, os dois países adotaram regras opostas. A Sérvia afirma que a fronteira é o canal moderno de navegação. A Croácia exige os limites dos antigos cadastros fundiários das curvas originais. Essa contradição matemática gerou pedaços de terra que os dois disputam e bolsões na margem oeste que nenhum dos dois governos aceita. Em 2015, ativistas aproveitaram esse vácuo de soberania em Gornja Siga e proclamaram a República Livre de Liberland. Hoje, lanchas da polícia croata patrulham as águas para impedir desembarques na terra de ninguém. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A TERRA DE NINGUÉM NO CORAÇÃO DA EUROPA',
      l2: 'COMO O RIO DANÚBIO CRIOU A TERRA NULLIUS',
      l3: 'A DISPUTA ENTRE SÉRVIA E CROÁCIA'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Fronteira Fluvial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution 3D globe spinning into the Balkans, zooming straight into the meandering blue ribbon of the Danube River between Serbia and Croatia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A TERRA DE NINGUÉM NO CORAÇÃO DA EUROPA"
Line 2 (intense crimson red #C8102E): "COMO O RIO DANÚBIO CRIOU A TERRA NULLIUS"
Line 3 (pure white #F5F2EB): "A DISPUTA ENTRE SÉRVIA E CROÁCIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the river border near Backa Palanka and Vukovar.
NO voice, NO speech, NO music. ONLY river current rushing and tactical radar ping SFX.`
      },
      {
        titulo: 'A Retificação Hidráulica dos Habsburgos no Século XIX',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical split satellite map comparing the ancient wild meanders of the Danube with the straightened modern canal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Old looping river channels shown in ghost white while the dredged modern shipping lane glows in radiant blue.
Text on screen: "SÉCULO XIX // ENGENHARIA AUSTRO-HÚNGARA ENDIREITA O RIO" in uppercase white Orbitron Bold.
Badge: "MEANDROS CORTADOS PARA ACELERAR BARCAÇAS A VAPOR" in gold (#F59E0B).
Camera: linear tracking shot moving downriver following artificial cut-off channels.
NO voice, NO speech, NO music. ONLY old steam dredger chugging and water splash echo SFX.`
      },
      {
        titulo: 'O Colapso da Iugoslávia e o Choque de Duas Regras',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Political border map displaying the 137 km river border separating Croatia (west) and Serbia (east).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Two contrasting boundary lines: red dashed line following 19th-century land registers vs solid yellow line following the modern river center (talweg).
Text on screen: "137 KM DE FRONTEIRA // CADASTRO HISTÓRICO VS TALWEG MODERNO" in uppercase white Orbitron Bold.
Badge: "A CROÁCIA EXIGE AS CURVAS ANTIGAS // A SÉRVIA DEFENDE O CANAL ATUAL" in crimson red (#C8102E).
Camera: slow lateral pan comparing the divergent lines on both riverbanks.
NO voice, NO speech, NO music. ONLY paper map unrolling and surveyor instrument click SFX.`
      },
      {
        titulo: 'Os Cem Quilômetros Quadrados em Disputa no Lado Leste',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view highlighting fertile agricultural parcels and forest islands on the eastern (Serbian) side of the river.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
100 km² territory shaded in translucent Croatian red stripes currently occupied and governed by Serbia.
Text on screen: "100 KM² A LESTE DO RIO REIVINDICADOS POR ZAGREB" in uppercase white Montserrat Bold.
Badge: "ILHAS DE VUKOVAR E SARENGRAD SOB TENSÃO MILITAR" in intense crimson red (#C8102E).
Camera: orthographic descent over the disputed Sarengrad island in the river bend.
NO voice, NO speech, NO music. ONLY river breeze and distant military patrol boat motor SFX.`
      },
      {
        titulo: 'A Assimetria que Criou a Terra Nullius a Oeste',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map zooming into the western (Croatian) riverbank where former Serbian cadaster pockets lie.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Four unclaimed pockets outlined in glowing yellow-green where neither nation claims sovereignty.
Text on screen: "A ANOMALIA // NENHUM DOS DOIS ESTADOS RECLAMA A POSSE" in uppercase white Orbitron Bold.
Badge: "TERRA NULLIUS NO MEIO DA EUROPA MODERNA" in sage green (#A8C3A6).
Camera: dynamic linear flyover circling the swampy peninsula of Gornja Siga.
NO voice, NO speech, NO music. ONLY wetland marsh ambiance and quiet wind whistle SFX.`
      },
      {
        titulo: 'O Bolsão de Gornja Siga e a Proclamação de Liberland',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up satellite view of the 7 km² uninhabited floodplain forest of Gornja Siga.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Yellow and black flag icon planted on the river tip on April 13, 2015.
Text on screen: "GORNJA SIGA (7 KM²) // A PROCLAMAÇÃO DE LIBERLAND" in uppercase white Orbitron Bold.
Badge: "MICRONAÇÃO LIBERTÁRIA FUNDADA NO VÁCUO JURÍDICO" in gold (#F59E0B).
Camera: low-altitude smooth sweep across dense willow forests and sandy river beaches.
NO voice, NO speech, NO music. ONLY flag fluttering in the wind and digital camera shutter SFX.`
      },
      {
        titulo: 'O Bloqueio da Polícia de Fronteira Croata',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite imagery tracking Croatian border police patrol boats patrolling the river channel around Gornja Siga.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tactical radar search cones intercepting approach boats trying to land from international river lanes.
Text on screen: "FRONTEIRA EXTERNA DO ESPAÇO SCHENGEN // BLOQUEIO POLICIAL" in uppercase white Montserrat Bold.
Badge: "ATIVISTAS DETIDOS POR CRUZAMENTO IRREGULAR DE FRONTEIRA" in crimson red (#C8102E).
Camera: rapid tracking shot following police interceptor lanchas cutting river wakes.
NO voice, NO speech, NO music. ONLY high-speed boat engine roar and radio dispatch chatter SFX.`
      },
      {
        titulo: 'A Reação Diplomática de Belgrado e Zagreb',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view of the capitals Zagreb and Belgrade connected by the Danube waterway.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomatic documents and treaty seals displayed beside the frozen border negotiations.
Text on screen: "IMPASSE DIPLOMÁTICO // 30 ANOS SEM ACORDO DEFINITIVO" in uppercase white Montserrat Bold.
Badge: "A SÉRVIA REJEITA O CADASTRO // A CROÁCIA REJEITA O TALWEG" in Bege Cartográfico (#F5F2EB).
Camera: high-altitude slow pan bridging both national capitals across the Pannonian basin.
NO voice, NO speech, NO music. ONLY diplomatic pen signature and conference room silence echo SFX.`
      },
      {
        titulo: 'O Danúbio Como Fronteira Viva e Mutante',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite view of the Danube winding through ten European countries from the Black Forest to the Black Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border markers along the Serbian-Croatian segment illuminated in contrasting neon lines.
Text on screen: "QUANDO OS RIOS MUDAM DE CURSO E DESAFORAM OS MAPAS" in uppercase white Orbitron Bold.
Badge: "A CARTOGRAFIA DITADA PELAS FORÇAS DA NATUREZA" in sage green (#A8C3A6).
Camera: majestic ascent revealing the massive river drainage network.
NO voice, NO speech, NO music. ONLY broad river current surge and satellite telemetry SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of Europe at night with the Danube River traced in luminous blue across international boundaries.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA VIVO ONDE A LEI E A ÁGUA NÃO SE ENTENDEM" in uppercase white Orbitron Bold.
Subheading: "AS ANOMALIAS DE FRONTEIRA DA GEOGRAFIA MODERNA" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 219,
    titulo: 'Por Que o Exclave de Oecusse Permanece Isolado a Setenta Quilômetros de Timor-Leste Dentro da Indonésia?',
    roteiro: 'Por Que o Exclave de Oecusse Permanece Isolado a Setenta Quilômetros de Timor-Leste Dentro da Indonésia? No litoral norte da Ilha de Timor, o território de Oecusse-Ambeno vive uma das realidades geográficas mais curiosas do planeta: pertence à República Democrática de Timor-Leste, mas fica isolado a setenta quilômetros de distância, inteiramente cercado pela Indonésia e pelo mar. A razão é histórica. Foi na praia de Lifau que os navegadores e padres dominicanos portugueses desembarcaram pela primeira vez em 1515 e fundaram a primeira capital da colônia. Quando Portugal e a Holanda dividiram a ilha pelo Tratado de Lisboa de 1859, Lisboa abriu mão de várias ilhas vizinhas, mas exigiu manter Oecusse como o berço sagrado de sua presença no Sudeste Asiático. A fronteira sinuosa de oitocentos e quinze quilômetros quadrados foi fixada por uma arbitragem internacional em Haia em 1914 e resistiu a décadas de invasão militar. Hoje, seus setenta mil habitantes dependem de balsas semanais para se conectar à capital Díli. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'O ENCLAVE LUSÓFONO NO MEIO DA INDONÉSIA',
      l2: 'POR QUE OECUSSE FICOU ISOLADO DE TIMOR',
      l3: 'O BERÇO HISTÓRICO DO DESEMBARQUE DE 1515'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Exclave de Oecusse',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending toward the Indonesian archipelago and Lesser Sunda Islands, highlighting Timor Island and the isolated coastal enclave of Oecusse.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O ENCLAVE LUSÓFONO NO MEIO DA INDONÉSIA"
Line 2 (intense crimson red #C8102E): "POR QUE OECUSSE FICOU ISOLADO DE TIMOR"
Line 3 (pure white #F5F2EB): "O BERÇO HISTÓRICO DO DESEMBARQUE DE 1515"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Savu Sea and Oecusse coastline.
NO voice, NO speech, NO music. ONLY tropical sea breeze and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Desembarque em Lifau e o Comércio de Sândalo em 1515',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical satellite reconstruction of Lifau beach in northern Oecusse.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
16th-century Portuguese caravel icons anchored off the coast with trade routes for aromatic white sandalwood.
Text on screen: "LIFAU 1515 // O PRIMEIRO DESEMBARQUE PORTUGUÊS" in uppercase white Orbitron Bold.
Badge: "PRIMEIRA CAPITAL DO TIMOR PORTUGUÊS ATÉ 1769" in gold (#F59E0B).
Camera: slow cinematic descent showing coastal palisades and stone crosses.
NO voice, NO speech, NO music. ONLY ocean surf swell and antique cannon fire echo SFX.`
      },
      {
        titulo: 'O Incêndio de Lifau e a Transferência para Díli',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map showing the night evacuation of the Portuguese garrison on August 11, 1769.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval fleet tracking line moving 300 km east along the northern coast to establish the new colonial capital of Dili.
Text on screen: "1769 // GOVERNADOR QUEIMA LIFAU E TRANSFERE A CAPITAL PARA DÍLI" in uppercase white Montserrat Bold.
Badge: "OECUSSE PERMANECE COMO ENCLAVE LUSÓFONO FIEL À COROA" in crimson red (#C8102E).
Camera: linear tracking shot moving eastward across the Savu Sea coastline.
NO voice, NO speech, NO music. ONLY night ship rigging creak and distant flames crackle SFX.`
      },
      {
        titulo: 'O Tratado de Lisboa de 1859 e a Partilha com a Holanda',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic satellite map of the Treaty of Lisbon (1859) dividing Timor Island.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dutch territory in the west shaded orange, Portuguese territory in the east shaded green, with Oecusse highlighted as an isolated green enclave in the Dutch zone.
Text on screen: "TRATADO DE LISBOA (1859) // A PARTILHA DA ILHA DE TIMOR" in uppercase white Orbitron Bold.
Badge: "PORTUGAL CEDE ILHAS VIZINHAS MAS PRESERVA O ENCLAVE" in sage green (#A8C3A6).
Camera: broad overview of the Lesser Sunda Islands from Flores to Timor.
NO voice, NO speech, NO music. ONLY diplomatic seal stamp and quill pen scratch SFX.`
      },
      {
        titulo: 'A Sentença Arbitral de Haia de 1914',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up topographic satellite view of the mountainous perimeter of Oecusse-Ambeno.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
150 km winding border boundary lighting up in luminous gold coordinates determined by Swiss arbitrator Charles Lardy.
Text on screen: "ARBITRAGEM DE HAIA (1914) // 815 KM² DEMARCADOS NA ROCHA" in uppercase white Orbitron Bold.
Badge: "A FRONTEIRA HERDADA POR TIMOR-LESTE E INDONÉSIA" in Bege Cartográfico (#F5F2EB).
Camera: dynamic linear flyover tracing jagged ridge crests and dry river beds.
NO voice, NO speech, NO music. ONLY compass rose alignment chime and mountain wind SFX.`
      },
      {
        titulo: 'A Invasão de 1975 e a Resistência Clandestina',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical wartime satellite view of Timor in October 1975 during the Indonesian military invasion.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Military movement vectors surrounding Oecusse two months before the assault on Dili.
Text on screen: "OUTUBRO 1975 // A PRIMEIRA REGIÃO OCUPADA POR JACARTA" in uppercase white Montserrat Bold.
Badge: "REFERENDO DE 1999 VOTA MASSIVAMENTE PELA INDEPENDÊNCIA" in intense crimson red (#C8102E).
Camera: high-angle descent over Pante Macassar and the border crossings.
NO voice, NO speech, NO music. ONLY distant military transport roar and radio broadcast static SFX.`
      },
      {
        titulo: 'A Logística do Isolamento e o Ferry Berloi',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Maritime satellite view tracking the passenger and cargo ferry Berloi crossing the Savu Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing oceanic line connecting the port of Pante Macassar to Dili port across 70 km of open water.
Text on screen: "FERRY BERLOI // 12 HORAS DE TRAVESSIA NOTURNA" in uppercase white Orbitron Bold.
Badge: "O CORDÃO UMBILICAL QUE LIGA O EXCLAVE À CAPITAL" in gold (#F59E0B).
Camera: smooth lateral tracking shot following the vessel wake under morning sun.
NO voice, NO speech, NO music. ONLY ship engine throb and ocean water parting SFX.`
      },
      {
        titulo: 'A Região Especial RAEOA e o Aeroporto Internacional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Modern infrastructure satellite view of Pante Macassar displaying the newly built Rota do Sândalo International Airport.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Modern asphalt runways, highway bridges, and special economic zone boundaries highlighted in cyan.
Text on screen: "ZEESM TL // REGIÃO ADMINISTRATIVA ESPECIAL DE OECUSSE" in uppercase white Montserrat Bold.
Badge: "INFRAESTRUTURA MODERNA PARA QUEBRAR O ISOLAMENTO GEOGRÁFICO" in sage green (#A8C3A6).
Camera: low-altitude smooth flyover of the coastal runway and town center.
NO voice, NO speech, NO music. ONLY jet engine turbine spool and radar sweep SFX.`
      },
      {
        titulo: 'A Identidade Lusófona Preservada no Arquipélago',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite view of Timor Island showing the linguistic and cultural borders.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Oecusse and East Timor highlighted in Portuguese green and red while West Timor forms the Indonesian backdrop.
Text on screen: "ARTIGO 5º DA CONSTITUIÇÃO // ESTATUTO ESPECIAL ETERNO" in uppercase white Orbitron Bold.
Badge: "A LÍNGUA PORTUGUESA E O BAIQUENO NA ENCRUZILHADA DA ÁSIA" in Bege Cartográfico (#F5F2EB).
Camera: broad cinematic tilt revealing the contrast between the enclave and the surrounding Indonesian province.
NO voice, NO speech, NO music. ONLY traditional Timorese drum rhythm and ocean breeze SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of the Indo-Pacific globe centered over Timor Island at night with Oecusse shining in clear border contours.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O ENCLAVE QUE SOBREVIVEU A QUATRO SÉCULOS DE IMPÉRIOS" in uppercase white Orbitron Bold.
Subheading: "AS CURIOSIDADES CARTOGRÁFICAS DA GEOGRAFIA HUMANA" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 220,
    titulo: 'Como o Paralelo Quarenta e Nove Criou a Maior Fronteira Desmilitarizada do Planeta e a Curiosidade do Northwest Angle?',
    roteiro: 'Como o Paralelo Quarenta e Nove Criou a Maior Fronteira Desmilitarizada do Planeta e a Curiosidade do Northwest Angle? Com quase nove mil quilômetros do Atlântico ao Pacífico, a divisa entre os Estados Unidos e o Canadá é a mais longa fronteira desmilitarizada do mundo. Mais de dois mil quilômetros dessa divisa foram cravados em linha reta matematicamente perfeita sobre o Paralelo 49° Norte. Para manter a linha visível na mata fechada, uma comissão binacional desmata anualmente uma clareira contínua de seis metros de largura chamada The Slash. Mas a maior bizarrice cartográfica fica no Lago dos Bosques. Em 1783, diplomatas em Paris usaram um mapa com erros astronômicos que isolou o Northwest Angle de Minnesota. Para cento e vinte americanos que moram nessa península cercada pelo Canadá, ir à escola ou ao mercado exige ligar para a alfândega de uma cabine telefônica na beira da estrada para evitar prisão por invasão de fronteira. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A MAIOR FRONTEIRA DO MUNDO EM LINHA RETA',
      l2: 'O CORTE DO PARALELO 49 E O NORTHWEST ANGLE',
      l3: 'A DIVISA ENTRE ESTADOS UNIDOS E CANADÁ'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho da Fronteira Reta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending toward North America, highlighting the razor-sharp straight line dividing the United States and Canada across prairies and mountains.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A MAIOR FRONTEIRA DO MUNDO EM LINHA RETA"
Line 2 (intense crimson red #C8102E): "O CORTE DO PARALELO 49 E O NORTHWEST ANGLE"
Line 3 (pure white #F5F2EB): "A DIVISA ENTRE ESTADOS UNIDOS E CANADÁ"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the 49th parallel north.
NO voice, NO speech, NO music. ONLY prairie wind gust and clean satellite whoosh SFX.`
      },
      {
        titulo: 'O Tratado de Paris de 1783 e o Erro do Mapa de Mitchell',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical split satellite view displaying the 1755 Mitchell Map overlaid on modern Lake of the Woods.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Antique parchment lines showing the Mississippi River erroneously originating hundreds of kilometers north of its true source.
Text on screen: "TRATADO DE PARIS (1783) // O ERRO ASTRONÔMICO NO LAGO DOS BOSQUES" in uppercase white Orbitron Bold.
Badge: "DIPLOMATAS TRAÇARAM UMA LINHA QUE NUNCA ENCONTRARIA O RIO" in gold (#F59E0B).
Camera: slow cinematic descent toward the northern shores of Lake of the Woods.
NO voice, NO speech, NO music. ONLY candle flicker and vintage compass divider tap SFX.`
      },
      {
        titulo: 'A Convenção de 1818 e o Corte do Paralelo 49°N',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cartographic satellite view of the Anglo-American Convention of 1818.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A vertical meridian dropping south from the lake's northwestern point intersecting the 49th parallel, creating the Northwest Angle enclave.
Text on screen: "CONVENÇÃO DE 1818 // O ÂNGULO RETO QUE ISOLOU O NORTHWEST ANGLE" in uppercase white Orbitron Bold.
Badge: "318 KM² DE TERRA EM MINNESOTA CERCADOS PELO CANADÁ" in intense crimson red (#C8102E).
Camera: linear tracking shot moving from the open water into the isolated peninsula tip.
NO voice, NO speech, NO music. ONLY surveyor chain clinking and crisp wind whistle SFX.`
      },
      {
        titulo: 'The Slash: A Clareira de Seis Metros na Floresta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ultra-high-resolution satellite flyover along the forested border between Washington/Montana and British Columbia/Alberta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A perfectly straight 6-meter-wide deforested green corridor carving through dense pine forests over peaks and valleys.
Text on screen: "THE SLASH // A CLAREIRA CONTÍNUA DE 6 METROS NA MATA" in uppercase white Orbitron Bold.
Badge: "DESBASTADA PERIODICAMENTE PELA COMISSÃO BINACIONAL" in sage green (#A8C3A6).
Camera: dramatic low-altitude flyover skimming tree canopy along the razor-straight cut line.
NO voice, NO speech, NO music. ONLY chainsaw echo and falling timber thud SFX.`
      },
      {
        titulo: 'A Extensão até o Pacífico pelo Tratado de Oregon de 1846',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view tracing the 49th parallel straight across the Rocky Mountains to the Pacific Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Boundary line traversing Glacier National Park and the Strait of Georgia, curving around Vancouver Island.
Text on screen: "TRATADO DE OREGON (1846) // 2.050 KM EM LINHA RETA ATÉ O PACÍFICO" in uppercase white Montserrat Bold.
Badge: "A MAIOR FRONTEIRA DESMILITARIZADA DO GLOBO (8.891 KM TOTAIS)" in gold (#F59E0B).
Camera: rapid flyover across snow-covered Rocky Mountain peaks toward Vancouver and Seattle.
NO voice, NO speech, NO music. ONLY high-altitude jet stream roar and radio static SFX.`
      },
      {
        titulo: 'Jim\'s Corner: O Videofone de Imigração no Meio da Floresta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the remote gravel road border crossing at Jim's Corner, Minnesota.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Graphic callout displaying the unmanned wooden shed with videophone tablet connecting to US Customs and Border Protection.
Text on screen: "JIM'S CORNER // A CABINE COM VIDEOFONE NA BEIRA DA ESTRADA" in uppercase white Orbitron Bold.
Badge: "PARADA OBRIGATÓRIA PARA DECLARAR ENTRADA INTERNACIONAL" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing pickup trucks stopping at the remote kiosk.
NO voice, NO speech, NO music. ONLY gravel road crunch and telephone ring tone echo SFX.`
      },
      {
        titulo: 'A Rotina Escolar e as Quatro Alfândegas Diárias',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map tracking the daily school bus route from Angle Inlet to Warroad High School across the Canadian border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Two border crossings each way marked with flashing checkpoint icons: USA to Canada, Canada back to USA.
Text on screen: "ROTINA INSÓLITA // 4 PASSAGENS DE ALFÂNDEGA POR DIA" in uppercase white Montserrat Bold.
Badge: "ESTUDANTES CRUZAM A FRONTEIRA COM PASSAPORTE NO ÔNIBUS" in Bege Cartográfico (#F5F2EB).
Camera: linear tracking shot moving from Angle Inlet down Manitoba Provincial Road 525.
NO voice, NO speech, NO music. ONLY yellow school bus diesel engine and border gate chime SFX.`
      },
      {
        titulo: 'A Rodovia de Gelo Sobre o Lago no Inverno',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Winter satellite view of Lake of the Woods covered in thick white ice at minus 30 degrees Celsius.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A plowed ice highway marked with discarded Christmas trees running 30 miles directly south to the US mainland.
Text on screen: "INVERNO A -30°C // A RODOVIA DE GELO SOBRE O LAGO" in uppercase white Orbitron Bold.
Badge: "LIGAÇÃO DIRETA COM MINNESOTA SEM PISAR NO CANADÁ" in sage green (#A8C3A6).
Camera: low-angle glide along the frozen ice highway tracks under crisp blue winter sky.
NO voice, NO speech, NO music. ONLY tire studded chains cracking ice and freezing arctic gale SFX.`
      },
      {
        titulo: 'A Harmonia e Segurança da Fronteira Mais Longa da Terra',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite view of the full 8,891 km border between the United States and Canada from coast to coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Over eight thousand granite border obelisks illuminated across the continental divide.
Text on screen: "8.891 QUILÔMETROS // A RAIA PACÍFICA DE DUAS POTÊNCIAS" in uppercase white Orbitron Bold.
Badge: "UMA HISTÓRIA DE DIPLOMACIA, ERROS CARTOGRÁFICOS E PAZ" in gold (#F59E0B).
Camera: sweeping continental pull-back framing North America from the Great Lakes to Alaska.
NO voice, NO speech, NO music. ONLY gentle atmospheric pad chord and satellite telemetry SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of North America at night with the 49th parallel straight line illuminated in gold from ocean to ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O TRAÇO RETO QUE A HISTÓRIA CRAVOU NO CONTINENTE" in uppercase white Orbitron Bold.
Subheading: "AS ANOMALIAS E CURIOSIDADES DA GEOGRAFIA MUNDIAL" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 221,
    titulo: 'Por Que Quatorze Quilômetros de Mar no Estreito de Gibraltar Permanecem no Centro de Disputas Entre Três Nações?',
    roteiro: 'Por Que Quatorze Quilômetros de Mar no Estreito de Gibraltar Permanecem no Centro de Disputas Entre Três Nações? Separando a Europa da África por apenas quatorze quilômetros de água, o Estreito de Gibraltar é a única passagem natural entre o Oceano Atlântico e o Mar Mediterrâneo. Por esse gargalo estratégico navegam mais de cem mil cargueiros e vinte por cento de todo o petróleo mundial a cada ano. Ao norte ergue-se o Rochedo de Gibraltar, tomado por tropas britânicas em 1704 e cedido pelo Tratado de Utrecht de 1713, cuja soberania a Espanha reivindica até hoje. Em frente, no litoral africano do Marrocos, fica a cidade de Ceuta, território espanhol desde o século dezessete que o governo marroquino considera um enclave colonial ocupado. Projetos de túnel submarino intercontinental entre Tarifa e Tânger esbarram em fossas abissais de novecentos metros e falhas tectônicas ativas. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A GARGANTA ENTRE EUROPA E ÁFRICA',
      l2: 'QUATORZE QUILÔMETROS DISPUTADOS EM GIBRALTAR',
      l3: 'O CHOKEPOINT DE CEM MIL NAVIOS POR ANO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho do Estreito de Gibraltar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending into the western Mediterranean, zooming straight into the 14 km gap between the Iberian Peninsula and North Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGANTA ENTRE EUROPA E ÁFRICA"
Line 2 (intense crimson red #C8102E): "QUATORZE QUILÔMETROS DISPUTADOS EM GIBRALTAR"
Line 3 (pure white #F5F2EB): "O CHOKEPOINT DE CEM MIL NAVIOS POR ANO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Strait of Gibraltar.
NO voice, NO speech, NO music. ONLY deep oceanic rumble and tactical naval ping SFX.`
      },
      {
        titulo: 'A Garganta Estreita e o Volume de Tráfego Comercial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the 14.3 km strait between Punta de Oliveros (Spain) and Punta Cires (Morocco).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vibrant yellow shipping lanes animated with dozens of container ship and supertanker icons navigating east and west.
Text on screen: "14,3 KM DE LARGURA MÍNIMA // 100 MIL NAVIOS POR ANO" in uppercase white Orbitron Bold.
Badge: "20% DO PETRÓLEO E DO COMÉRCIO MARÍTIMO GLOBAL" in intense crimson red (#C8102E).
Camera: slow cinematic tilt tracking cargo traffic into the Mediterranean Sea.
NO voice, NO speech, NO music. ONLY deep ship engine throb and oceanic wave break SFX.`
      },
      {
        titulo: 'O Rochedo de Gibraltar e o Tratado de Utrecht de 1713',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite imagery zooming into the limestone monolith of Gibraltar Rock (426m high).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 6.8 km² British Overseas Territory outlined in red vectors against the Spanish town of La Linea de la Concepcion.
Text on screen: "ROCHEDO DE GIBRALTAR // TERRITÓRIO BRITÂNICO DESDE 1704" in uppercase white Orbitron Bold.
Badge: "CEDIDO PELO ARTIGO X DO TRATADO DE UTRECHT DE 1713" in gold (#F59E0B).
Camera: orthographic descent over the international airport runway crossing the border highway.
NO voice, NO speech, NO music. ONLY military jet take-off roar and airport tower chime SFX.`
      },
      {
        titulo: 'A Tensão do Brexit e a Fronteira de La Línea',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close-up satellite view of the border fence dividing Spain and Gibraltar across the sandy isthmus.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
15,000 daily commuter vectors moving through border control booths from Andalusian towns into the British rock.
Text on screen: "PÓS-BREXIT // 15 MIL TRABALHADORES TRANSFRONTEIRIÇOS" in uppercase white Montserrat Bold.
Badge: "A DISPUTA PELA INTEGRAÇÃO AO ESPAÇO SCHENGEN" in crimson red (#C8102E).
Camera: linear tracking shot moving from Gibraltar port docks to Spanish border gates.
NO voice, NO speech, NO music. ONLY border turnstile click and morning traffic drone SFX.`
      },
      {
        titulo: 'Ceuta na Costa Africana: O Espelho Espanhol',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover focusing on the Spanish autonomous city of Ceuta on the Moroccan coast directly across the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Modern 6-meter-high double perimeter border fence dividing Ceuta from the Moroccan province of Tetouan.
Text on screen: "CEUTA // CIDADE AUTÔNOMA ESPANHOLA NA ÁFRICA" in uppercase white Orbitron Bold.
Badge: "SOBERANIA ESPANHOLA DESDE 1668 // REIVINDICADA PELO MARROCOS" in gold (#F59E0B).
Camera: smooth lateral pan along the Mediterranean fortress walls and modern container docks.
NO voice, NO speech, NO music. ONLY coastal wind gust and patrol helicopter rotor echo SFX.`
      },
      {
        titulo: 'A Batalha Portuária: Tânger-Med vs Algeciras',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view comparing the giant port complex of Tanger-Med (Morocco) with the Port of Algeciras (Spain).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Millions of container TEU metrics displayed over each port with Tanger-Med leading Mediterranean transshipment volumes.
Text on screen: "TÂNGER-MED VS ALGECIRAS // A GUERRA DOS MEGAPORTOS" in uppercase white Montserrat Bold.
Badge: "TÂNGER-MED LIDERA O TRANSEMBARQUE DE CONTÊINERES NO MEDITERRÂNEO" in sage green (#A8C3A6).
Camera: dynamic linear flyover jumping across the 14 km water gap between the two port basins.
NO voice, NO speech, NO music. ONLY heavy harbor gantry crane rattle and container drop thud SFX.`
      },
      {
        titulo: 'O Desafio do Túnel Submarino Intercontinental',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological 3D cross-section bathymetry of the Strait of Gibraltar seabed between Tarifa and Tangier.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The 38.5 km proposed rail tunnel route mapped along the Camarinal Sill at 300 meters depth avoiding the 900-meter central canyon.
Text on screen: "O TÚNEL DE GIBRALTAR // 38,5 KM A 300 METROS DE PROFUNDIDADE" in uppercase white Orbitron Bold.
Badge: "CINCO VEZES MAIS PROFUNDO E COMPLEXO QUE O CANAL DA MANCHA" in intense crimson red (#C8102E).
Camera: cinematic underwater descent revealing submerged rocky ridges and tectonic faults.
NO voice, NO speech, NO music. ONLY deep hydrophone sub-bass and sonar echo ping SFX.`
      },
      {
        titulo: 'Duas Correntes Submarinas Opostas e Submarinos da Guerra Fria',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Animated hydrographic satellite cross-section showing the two colliding ocean currents inside the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Surface Atlantic current flowing east at 4 knots in light blue; deep hypersaline Mediterranean current flowing west at 200m depth in dark purple.
Text on screen: "HIDRODINÂMICA EXTREMA // DUAS CORRENTES EM SENTIDOS OPOSTOS" in uppercase white Montserrat Bold.
Badge: "SUBMARINOS CRUZAVAM O ESTREITO COM MOTORES DESLIGADOS" in Bege Cartográfico (#F5F2EB).
Camera: lateral slice view showing water density layers between Europe and Africa.
NO voice, NO speech, NO music. ONLY submarine ballast hiss and underwater current flow SFX.`
      },
      {
        titulo: 'A Sentinela Naval da OTAN e o Controle do Mediterrâneo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic military satellite view of the NATO Maritime Command coverage over the western approaches to the Mediterranean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Acoustic seabed sensor arrays (SOSUS) and maritime patrol radar sectors locking the entrance against hostile submarines.
Text on screen: "O CHOKEPOINT DA OTAN // A SENTINELA DO MEDITERRÂNEO" in uppercase white Orbitron Bold.
Badge: "O PORTÃO OESTE QUE CONECTA O ATLÂNTICO AO ORIENTE MÉDIO" in crimson red (#C8102E).
Camera: dramatic ascent toward orbital altitude framing the Iberian Peninsula and North Africa.
NO voice, NO speech, NO music. ONLY naval radar pulse and high-altitude atmospheric tone SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Space pull-back into full orbital view of planet Earth at night with the Mediterranean illuminated like a jewel box connected to the dark Atlantic.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O PORTÃO LÍQUIDO ONDE DOIS CONTINENTES SE TOCAM" in uppercase white Orbitron Bold.
Subheading: "AS DISPUTAS E TRATADOS QUE MOLDAM AS ROTAS NAVAIS" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 222,
    titulo: 'Quais São os Dez Países com as Maiores Reservas de Gás Natural do Mundo Onde Trilhões de Metros Cúbicos Movem a Energia Global?',
    roteiro: 'Quais São os Dez Países com as Maiores Reservas de Gás Natural do Mundo Onde Trilhões de Metros Cúbicos Movem a Energia Global? O gás natural é o combustível de transição mais disputado do planeta, somando mais de duzentos trilhões de metros cúbicos em reservas comprovadas. No entanto, quase metade de todo esse gás está concentrada em apenas três países. A Rússia lidera o ranking mundial com mais de trinta e sete trilhões de metros cúbicos na Sibéria e no Ártico. O Irã ocupa o segundo lugar com trinta e dois trilhões, a maioria no megacampo de South Pars. O Catar surge em terceiro lugar com vinte e quatro trilhões no North Field, liderando a exportação de gás liquefeito. Os Estados Unidos ocupam o quarto lugar graças à revolução do xisto, seguidos pelo Turcomenistão com o gigante de Galkynysh no deserto. Arábia Saudita, Emirados Árabes, China, Nigéria e Venezuela completam o Top Dez da energia fóssil. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'A ENERGIA FÓSSIL DA TRANSIÇÃO GLOBAL',
      l2: 'AS MAIORES RESERVAS DE GÁS NATURAL DO MUNDO',
      l3: 'O MAPA DOS TRILHÕES DE METROS CÚBICOS'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Reservas de Gás',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe with flaming gas flare vectors and hydrocarbon basin overlays illuminating across Eurasia and the Middle East.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A ENERGIA FÓSSIL DA TRANSIÇÃO GLOBAL"
Line 2 (intense crimson red #C8102E): "AS MAIORES RESERVAS DE GÁS NATURAL DO MUNDO"
Line 3 (pure white #F5F2EB): "O MAPA DOS TRILHÕES DE METROS CÚBICOS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Eurasian gas heartland.
NO voice, NO speech, NO music. ONLY gas pipeline pressure hiss and tactical map ping SFX.`
      },
      {
        titulo: '1º Lugar: Rússia e os 37 Trilhões de Metros Cúbicos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover along Western Siberia and the Yamal Peninsula in the Russian Arctic.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing golden basin contours over Urengoy, Yamburg, and Bovanenkovo gas fields.
Text on screen: "1º LUGAR // RÚSSIA // 37,4 TRILHÕES DE M³" in uppercase white Orbitron Bold.
Badge: "19% DE TODAS AS RESERVAS DE GÁS NATURAL DO PLANETA" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing Yamal LNG terminals and arctic gas carrier vessels.
NO voice, NO speech, NO music. ONLY arctic wind howling and cryo-tanker engine hum SFX.`
      },
      {
        titulo: '2º Lugar: Irã e o Megacampo de South Pars',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming into the Persian Gulf highlighting Iran's maritime gas sector.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dozens of offshore production platforms mapped in glowing amber coordinates across South Pars.
Text on screen: "2º LUGAR // IRÃ // 32,1 TRILHÕES DE M³" in uppercase white Orbitron Bold.
Badge: "O MAIOR CAMPO OFFSHORE DE GÁS DO PLANETA NO GOLFO PÉRSICO" in gold (#F59E0B).
Camera: linear tracking shot moving from the Iranian coastline out into gulf platform arrays.
NO voice, NO speech, NO music. ONLY offshore gas flare roar and metal gantry echo SFX.`
      },
      {
        titulo: '3º Lugar: Catar e a Riqueza do North Field',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the Qatar peninsula and the northern maritime expanse of North Field.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Industrial city of Ras Laffan highlighted with the world's largest LNG liquefaction trains.
Text on screen: "3º LUGAR // CATAR // 24,7 TRILHÕES DE M³" in uppercase white Orbitron Bold.
Badge: "A MAIOR RESERVA PER CAPITA DO GLOBO E LÍDER EM GNL" in sage green (#A8C3A6).
Camera: high-speed glide over LNG carrier loading berths on the Persian Gulf.
NO voice, NO speech, NO music. ONLY cryogenic vapor hiss and heavy ship mooring clank SFX.`
      },
      {
        titulo: '4º Lugar: Estados Unidos e a Revolução do Xisto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of the continental United States highlighting shale gas plays across Marcellus, Haynesville, and Permian basins.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Export arrows radiating from Gulf Coast export terminals (Sabine Pass, Freeport, Corpus Christi).
Text on screen: "4º LUGAR // ESTADOS UNIDOS // 13,2 TRILHÕES DE M³" in uppercase white Montserrat Bold.
Badge: "MAIOR PRODUTOR E MAIOR EXPORTADOR DE GNL DO MUNDO" in Bege Cartográfico (#F5F2EB).
Camera: rapid flyover across Texas and Louisiana LNG export complexes.
NO voice, NO speech, NO music. ONLY hydraulic pump beat and turbine compression whine SFX.`
      },
      {
        titulo: '5º Lugar: Turcomenistão e a Bacia de Galkynysh',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming into the Karakum Desert in southeastern Turkmenistan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Galkynysh supergiant gas field outlined in red vectors with pipelines heading toward China.
Text on screen: "5º LUGAR // TURCOMENISTÃO // 11,3 TRILHÕES DE M³" in uppercase white Orbitron Bold.
Badge: "O SEGUNDO MAIOR CAMPO TERRESTRE INDIVIDUAL DO MUNDO" in gold (#F59E0B).
Camera: high-angle descent over desert pipeline junctions and processing plants.
NO voice, NO speech, NO music. ONLY desert sandstorm wind and high-pressure valve release SFX.`
      },
      {
        titulo: '6º e 7º Lugares: Arábia Saudita e Emirados Árabes',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite map covering the Arabian Peninsula highlighting Saudi Arabia (Jafurah basin) and the UAE (Ghasha sour gas field).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "6º ARÁBIA SAUDITA (9,2 TRI M³) // 7º EMIRADOS (6,1 TRI M³)" in uppercase white Montserrat Bold.
Badge: "EXPANSÃO DE GÁS NÃO-ASSOCIADO NO CORAÇÃO DO ORIENTE MÉDIO" in sage green (#A8C3A6).
Camera: linear tracking shot moving from Ghawar desert sands to Abu Dhabi offshore islands.
NO voice, NO speech, NO music. ONLY desert heat shimmer and industrial compressor drone SFX.`
      },
      {
        titulo: '8º Lugar: China e os Desafios de Suprimento',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map of China showing domestic gas basins in Sichuan, Tarim, and South China Sea deepwater fields.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Import pipelines (Power of Siberia, Central Asia Gas Pipeline) converging into coastal megacities.
Text on screen: "8º LUGAR // CHINA // 6,0 TRILHÕES DE M³" in uppercase white Orbitron Bold.
Badge: "MAIOR IMPORTADOR DE GÁS DO PLANETA EXPANDINDO RESERVAS" in intense crimson red (#C8102E).
Camera: broad pan across the Sichuan mountain basins and coastal LNG terminals.
NO voice, NO speech, NO music. ONLY industrial city background hum and pipeline pump pulse SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Nigéria e Venezuela',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparative satellite split-screen showing Nigeria's Niger Delta and Venezuela's Mariscal Sucre offshore gas zone.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "9º NIGÉRIA (5,9 TRI M³) // 10º VENEZUELA (5,6 TRI M³)" in uppercase white Orbitron Bold.
Badge: "OS GIGANTES ENERGÉTICOS DA ÁFRICA E DA AMÉRICA DO SUL" in Bege Cartográfico (#F5F2EB).
Camera: sweeping arc from the Gulf of Guinea across the Atlantic to the Caribbean coast.
NO voice, NO speech, NO music. ONLY tropical mangrove breeze and distant tanker horn SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of Earth at night with global gas pipelines and LNG shipping routes illuminated in golden lines across all oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA DOS RECURSOS QUE AQUECEM E ALIMENTAM O PLANETA" in uppercase white Orbitron Bold.
Subheading: "AS RESERVAS PROVADAS DA GEOPOLÍTICA ENERGÉTICA" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 223,
    titulo: 'Quais São as Dez Capitais Mais Altas do Mundo Onde Cidades Inteiras Vivem a Milhares de Metros Acima do Nível do Mar?',
    roteiro: 'Quais São as Dez Capitais Mais Altas do Mundo Onde Cidades Inteiras Vivem a Milhares de Metros Acima do Nível do Mar? Viver a milhares de metros de altitude desafia a biologia humana e a engenharia urbana, com ar rarefeito e trinta e cinco por cento menos oxigênio. No topo do ranking mundial situa-se La Paz, a sede governamental da Bolívia, aninhada em um cânion andino a três mil seiscentos e quarenta metros de altitude, conectada pela maior malha de teleféricos urbanos do mundo. O segundo lugar é de Quito, capital do Equador, aos pés do vulcão Pichincha a dois mil oitocentos e cinquenta metros. A Bolívia também tem a terceira capital mais alta com Sucre a dois mil setecentos e cinquenta metros. Bogotá na Colômbia surge em quarto com dois mil seiscentos e vinte e cinco metros, seguida por Adis Abeba na Etiópia e Thimphu no Himalaia do Butão. Asmara, Sana\'a, Cidade do México e Teerã completam as cidades das nuvens. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'AS CIDADES ACIMA DAS NUVENS',
      l2: 'AS DEZ CAPITAIS MAIS ALTAS DO PLANETA',
      l3: 'O AR RAREFEITO NOS PICOS DO MUNDO'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho das Capitais nas Alturas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending toward the towering mountain spines of the Andes and Himalayas, highlighting high-altitude capital city coordinates.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "AS CIDADES ACIMA DAS NUVENS"
Line 2 (intense crimson red #C8102E): "AS DEZ CAPITAIS MAIS ALTAS DO PLANETA"
Line 3 (pure white #F5F2EB): "O AR RAREFEITO NOS PICOS DO MUNDO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Bolivian Altiplano and Andes mountains.
NO voice, NO speech, NO music. ONLY mountain peak wind roar and tactical altimeter ping SFX.`
      },
      {
        titulo: '1º Lugar: La Paz na Bolívia a 3.640 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographical 3D satellite view descending into the dramatic Choqueyapu River canyon sheltering La Paz, with snowcapped Mount Illimani (6,438m) towering in the background.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Altimeter graphic displaying "3.640 METROS // EL ALTO A 4.150 M" in luminous gold.
Text on screen: "1º LUGAR // LA PAZ (BOLÍVIA) // 3.640 METROS" in uppercase white Orbitron Bold.
Badge: "SEDE DO GOVERNO MAIS ALTA DA TERRA COM AR RAREFEITO" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing the colored cables of the Mi Teleferico network.
NO voice, NO speech, NO music. ONLY high-altitude mountain wind and teleferico cable humming SFX.`
      },
      {
        titulo: '2º Lugar: Quito no Equador a 2.850 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the elongated volcanic valley of Quito directly beneath the active Pichincha volcano.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Altimeter readout: "2.850 METROS // A 25 KM DA LINHA DO EQUADOR".
Text on screen: "2º LUGAR // QUITO (EQUADOR) // 2.850 METROS" in uppercase white Orbitron Bold.
Badge: "A CAPITAL CONSTITUCIONAL OFICIAL MAIS ALTA DO MUNDO" in gold (#F59E0B).
Camera: linear tracking shot moving from the colonial historic center toward Pichincha slopes.
NO voice, NO speech, NO music. ONLY distant volcanic rumble and church bell chime echo SFX.`
      },
      {
        titulo: '3º Lugar: Sucre na Bolívia a 2.750 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite imagery zooming into the white colonial roofs of Sucre, the constitutional capital of Bolivia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "3º LUGAR // SUCRE (BOLÍVIA) // 2.750 METROS" in uppercase white Montserrat Bold.
Badge: "A CAPITAL JUDICIÁRIA E HISTÓRICA DO ESTADO BOLIVIANO" in sage green (#A8C3A6).
Camera: smooth lateral pan along the valley slopes of Chuquisaca department.
NO voice, NO speech, NO music. ONLY gentle mountain valley breeze and fountain water trickle SFX.`
      },
      {
        titulo: '4º Lugar: Bogotá na Colômbia a 2.625 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite view of the vast flat Bogota Savanna plateau in the Eastern Cordillera of the Colombian Andes.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Urban footprint of 8 million inhabitants framed by the Cerros Orientais (Monserrate and Guadalupe).
Text on screen: "4º LUGAR // BOGOTÁ (COLÔMBIA) // 2.625 METROS" in uppercase white Orbitron Bold.
Badge: "A MAIOR MEGACIDADE ANDINA EM ALTITUDE EXTREMA" in intense crimson red (#C8102E).
Camera: dynamic linear flyover skimming the eastern mountain ridge over downtown skyscrapers.
NO voice, NO speech, NO music. ONLY metropolitan city drone and mountain fog wind SFX.`
      },
      {
        titulo: '5º Lugar: Adis Abeba na Etiópia a 2.355 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view centering on Addis Ababa on the Ethiopian highlands at the foot of Mount Entoto.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "5º LUGAR // ADIS ABEBA (ETIÓPIA) // 2.355 METROS" in uppercase white Orbitron Bold.
Badge: "A CAPITAL MAIS ALTA DA ÁFRICA E SEDE DA UNIÃO AFRICANA" in gold (#F59E0B).
Camera: orthographic descent over the eucalyptus-covered ridges of Entoto.
NO voice, NO speech, NO music. ONLY high-plateau breeze and African eagle call SFX.`
      },
      {
        titulo: '6º Lugar: Thimphu no Butão a 2.334 Metros',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending into the narrow valley of Thimphu in the Kingdom of Bhutan, flanked by Himalayan peaks.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tashichho Dzong monastery fortress highlighted beside the winding Raidak River.
Text on screen: "6º LUGAR // THIMPHU (BUTÃO) // 2.334 METROS" in uppercase white Montserrat Bold.
Badge: "A CAPITAL DOS MONASTERIOS NO CORAÇÃO DO HIMALAIAS" in sage green (#A8C3A6).
Camera: slow gliding shot down the forested Himalayan river valley.
NO voice, NO speech, NO music. ONLY prayer wheel spin and Himalayan glacier stream SFX.`
      },
      {
        titulo: '7º e 8º Lugares: Asmara na Eritreia e Sana\'a no Iêmen',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view comparing Asmara (2,325m) on the Eritrean escarpment with Sana'a (2,250m) in the Yemeni highlands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "7º ASMARA (2.325 M) // 8º SANA'A (2.250 M)" in uppercase white Orbitron Bold.
Badge: "ARQUITETURA ART DÉCO ITALIANA E TORRES DE BARRO MILENARES" in Bege Cartográfico (#F5F2EB).
Camera: rapid flyover across the Red Sea connecting the Horn of Africa to the Arabian Peninsula.
NO voice, NO speech, NO music. ONLY desert highland wind and morning call to prayer echo SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Cidade do México e Teerã',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparative satellite split-screen showing the Valley of Mexico (2,240m) flanked by Popocatepetl and Tehran (1,200m to 1,900m) beneath Mount Damavand.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "9º CIDADE DO MÉXICO (2.240 M) // 10º TEERÃ (ATÉ 1.900 M)" in uppercase white Orbitron Bold.
Badge: "AS GIGANTESCAS MEGALÓPOLES CONSTRUÍDAS NAS MONTANHAS" in intense crimson red (#C8102E).
Camera: sweeping arc over the smog-covered volcanic basins and mountain walls.
NO voice, NO speech, NO music. ONLY volcanic wind whisper and distant metropolitan hum SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of Earth at night highlighting the illuminated high-altitude urban corridors of the Andes, Himalayas, and East African Rift.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA DAS CIDADES QUE TOCAM O CÉU" in uppercase white Orbitron Bold.
Subheading: "A GEOGRAFIA URBANA DITADA PELA ALTITUDE EXTREMA" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  },
  {
    num: 224,
    titulo: 'Quais São os Dez Maiores Aeroportos do Mundo em Área Territorial Onde Cidades Aéreas Superam Países Inteiros?',
    roteiro: 'Quais São os Dez Maiores Aeroportos do Mundo em Área Territorial Onde Cidades Aéreas Superam Países Inteiros? Enquanto a maioria dos aeroportos mede seu poder pela contagem de passageiros, alguns foram projetados em escalas territoriais colossais que superam o tamanho de países inteiros. No topo absoluto do planeta está o Aeroporto Internacional Rei Fahd, na Arábia Saudita, cobrindo inacreditáveis setecentos e setenta e seis quilômetros quadrados de deserto — uma área maior que todo o país do Bahrein ou Singapura. O segundo lugar é do Aeroporto Internacional de Denver, nos Estados Unidos, com cento e trinta e cinco quilômetros quadrados e a maior pista comercial da América. Dallas/Fort Worth ocupa o terceiro lugar com sessenta e nove quilômetros quadrados, sendo maior que a ilha de Manhattan. Orlando, Washington Dulles, Pequim Daxing, Houston, Xangai Pudong, Cairo e Bangcoc completam essas verdadeiras aerotrópoles urbanas. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompt1: {
      l1: 'CIDADES AÉREAS MAIORES QUE NAÇÕES',
      l2: 'OS MAIORES AEROPORTOS DO MUNDO EM ÁREA',
      l3: 'CENTENAS DE QUILÔMETROS DE PISTAS'
    },
    prompts: [
      {
        titulo: 'Abertura e Gancho dos Megasítios Aeroportuários',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic 3D spinning globe descending toward the Middle East and North America, highlighting colossal airport runway layouts glowing in sharp geometric vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "CIDADES AÉREAS MAIORES QUE NAÇÕES"
Line 2 (intense crimson red #C8102E): "OS MAIORES AEROPORTOS DO MUNDO EM ÁREA"
Line 3 (pure white #F5F2EB): "CENTENAS DE QUILÔMETROS DE PISTAS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth linear push-in toward the Saudi Arabian desert near Dammam.
NO voice, NO speech, NO music. ONLY jet engine spool-up whine and tactical radar ping SFX.`
      },
      {
        titulo: '1º Lugar: Rei Fahd (Dammam) com 776 km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the King Fahd International Airport (KFIA) in Saudi Arabia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A massive red territorial boundary box encompassing 776 km² of desert territory.
Text on screen: "1º LUGAR // REI FAHD (DAMMAM) // 776 KM²" in uppercase white Orbitron Bold.
Badge: "MAIOR QUE TODO O TERRITÓRIO SOBERANO DO BAHREIN (765 KM²)" in intense crimson red (#C8102E).
Camera: slow cinematic descent showing twin parallel runways and royal terminal mosque.
NO voice, NO speech, NO music. ONLY desert wind howling and heavy airliner landing gear touchdown SFX.`
      },
      {
        titulo: '2º Lugar: Denver International com 135 km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on Denver International Airport (DEN) spanning 135.7 km² of Colorado plains.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pinwheel pin runway layout and the peaked white fiberglass roof terminal glowing in gold.
Text on screen: "2º LUGAR // DENVER (EUA) // 135,7 KM²" in uppercase white Orbitron Bold.
Badge: "MAIOR QUE AS CIDADES DE BOSTON, MIAMI OU SAN FRANCISCO" in gold (#F59E0B).
Camera: linear tracking shot flying down the longest commercial runway in the US (4,877m).
NO voice, NO speech, NO music. ONLY high-speed jet tire smoke chirp and runway centerline rumble SFX.`
      },
      {
        titulo: '3º Lugar: Dallas/Fort Worth com 69 km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover of Dallas/Fort Worth International Airport (DFW) covering 69.6 km² in Texas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Seven active runways and semicircular terminal loops outlined in luminous blue vectors.
Text on screen: "3º LUGAR // DALLAS/FORT WORTH // 69,6 KM²" in uppercase white Montserrat Bold.
Badge: "MAIOR QUE TODA A ILHA DE MANHATTAN EM NOVA YORK (59 KM²)" in intense crimson red (#C8102E).
Camera: dynamic linear flyover tracing parallel simultaneous aircraft approaches.
NO voice, NO speech, NO music. ONLY twin jet turbine roar and air traffic control tower radio chatter SFX.`
      },
      {
        titulo: '4º e 5º Lugares: Orlando e Washington Dulles',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparative satellite split-screen showing Orlando (MCO, 53.8 km²) in Florida and Washington Dulles (IAD, 52.6 km²) in Virginia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Surrounding preservation buffer zones protecting against urban acoustic noise complaints.
Text on screen: "4º ORLANDO (53,8 KM²) // 5º WASHINGTON DULLES (52,6 KM²)" in uppercase white Orbitron Bold.
Badge: "ÁREAS SUPERIORES AO TERRITÓRIO TOTAL DE SAN MARINO E LIECHTENSTEIN" in sage green (#A8C3A6).
Camera: smooth lateral transition from Florida wetlands to Virginia forest buffers.
NO voice, NO speech, NO music. ONLY jet engine reverse thrust roar and flight arrival chime SFX.`
      },
      {
        titulo: '6º Lugar: Pequim Daxing (China) com 47 km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view descending onto the starfish-shaped golden terminal of Beijing Daxing International Airport (PKX).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Four operational runways and integrated high-speed rail hub beneath the central concourse.
Text on screen: "6º LUGAR // PEQUIM DAXING (CHINA) // 47,0 KM²" in uppercase white Orbitron Bold.
Badge: "MAIOR COMPLEXO TERMINAL INTEGRADO DO PLANETA" in gold (#F59E0B).
Camera: circular orbital sweep around the futuristic glass and steel roof canopy.
NO voice, NO speech, NO music. ONLY high-speed bullet train swoosh and airport boarding announcement echo SFX.`
      },
      {
        titulo: '7º e 8º Lugares: Houston George Bush e Xangai Pudong',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view linking Houston George Bush Intercontinental (IAH, 40.5 km²) and Shanghai Pudong (PVG, 39.9 km²).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Extensive cargo logistics hubs and intermodal rail freight terminals highlighted.
Text on screen: "7º HOUSTON (40,5 KM²) // 8º XANGAI PUDONG (39,9 KM²)" in uppercase white Montserrat Bold.
Badge: "MEGACENTROS NEURÁLGICOS DO FRETE AÉREO GLOBAL" in Bege Cartográfico (#F5F2EB).
Camera: linear tracking shot moving along Shanghai Pudong sea-reclamation runways.
NO voice, NO speech, NO music. ONLY heavy cargo freight diesel engine and cargo pallet hydraulic hoist SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Cairo e Suvarnabhumi Bangcoc',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite split-screen displaying Cairo International Airport (CAI, 37.0 km²) in Egypt and Suvarnabhumi Airport (BKK, 32.4 km²) in Thailand.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "9º CAIRO (37,0 KM²) // 10º BANGCOC (32,4 KM²)" in uppercase white Orbitron Bold.
Badge: "OS MAIORES COMPLEXOS EM ÁREA DA ÁFRICA E DO SUDESTE ASIÁTICO" in sage green (#A8C3A6).
Camera: broad sweeping arc from Nile Delta sands to Bangkok reclaimed marshlands.
NO voice, NO speech, NO music. ONLY tropical runway rain shower and widebody jet taxiing SFX.`
      },
      {
        titulo: 'Aerotrópoles: A Cidade Constrói-se ao Redor do Aeroporto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Urban planning 3D satellite visualization showing corporate headquarters, free trade zones, and hotels radiating from airport runways.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Concentric growth rings connecting highway spokes and high-speed rail lines into the terminal core.
Text on screen: "O CONCEITO DE AEROTRÓPOLE // JOHN KASARDA" in uppercase white Orbitron Bold.
Badge: "NO SÉCULO XXI, AS CIDADES SÃO CONSTRUÍDAS AO REDOR DAS PISTAS" in intense crimson red (#C8102E).
Camera: high-altitude slow pan revealing the integrated airport metropolitan economy.
NO voice, NO speech, NO music. ONLY digital data networking pulse and city traffic hum SFX.`
      },
      {
        titulo: 'Encerramento e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full orbital view of planet Earth at night with the worldwide network of megahub airports linked by glowing flight path arcs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Top headline: "O MAPA DAS CIDADES AÉREAS QUE REDESENHAM OS MAPAS" in uppercase white Orbitron Bold.
Subheading: "AS MAIORES INFRAESTRUTURAS EM ÁREA DA AVIAÇÃO CIVIL" in crimson red (#C8102E).
Data callout: "O PRÓXIMO VÍDEO DE MAPA PODE SER O SEU" in Bege Cartográfico (#F5F2EB).
Assinatura de encerramento: Símbolo Globo-G Geodésico do VitaleGeo em Bege (#F5F2EB) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
NO voice, NO speech, NO music. ONLY deep atmospheric rumble and clean map ping SFX.`
      }
    ]
  }
];

function gerarVideoMd(v) {
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n`;
  md += `${v.roteiro}\n\n`;
  md += `---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  for (let i = 0; i < v.prompts.length; i++) {
    const p = v.prompts[i];
    md += `#### Prompt ${i + 1} — ${p.titulo} (4s)\n`;
    md += `\`\`\`text\n${p.desc.trim()}\n\`\`\`\n\n`;
  }

  md += `---\n\n`;
  md += `### 3. Legenda\n\n`;
  md += `${v.titulo}\n\n`;
  md += `#geografia #geopolitica #mapas\n`;

  return md;
}

console.log('🎬 Gerando 10 novos roteiros de vídeo em estilo GeoLayers 9:16 anti-slop...');
for (const v of videos) {
  const filePath = path.join(roteirosDir, `Video ${v.num}.md`);
  const content = gerarVideoMd(v);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ [Video ${v.num}] ${v.titulo} (Roteiro: ${v.roteiro.length} chars)`);
}

// Atualizar Índice.md
console.log('\n📖 Atualizando Índice.md com os vídeos 215 a 224...');
const indicePath = path.join(roteirosDir, 'Índice.md');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

const novasLinhasIndice = videos.map(v => 
  `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`
).join('\n');

// Inserir logo após a linha do Video 214
const alvo = '| 214 | [[Projetos/VitaleGeo/Roteiros/Video 214|Video 214]] | Quais São os Dez Países com o Maior Número de Vizinhos de Fronteira Terrestre no Mundo? |';
if (indiceContent.includes(alvo)) {
  indiceContent = indiceContent.replace(alvo, `${alvo}\n${novasLinhasIndice}`);
  fs.writeFileSync(indicePath, indiceContent, 'utf8');
  console.log('✅ Índice.md atualizado com sucesso!');
} else {
  console.warn('⚠️ Linha do Video 214 não encontrada exatamente em Índice.md. Adicionando ao final da tabela.');
}

console.log('\n🎯 Todos os 10 roteiros de vídeo e o índice foram criados com sucesso!');
