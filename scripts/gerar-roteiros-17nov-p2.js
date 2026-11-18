// Gerador de Roteiros de Vídeo (Videos 240 a 244) - Parte 2
// VitaleGeo - Estilo GeoLayers 9:16 Anti-Slop (10 Prompts de 4s cada)

import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const videos = [
  {
    num: 240,
    titulo: 'Por Que a Entrega do Arquipélago de Chagos e da Base de Diego Garcia Travou Entre Londres, Maurício e Washington?',
    roteiro: 'Por Que a Entrega do Arquipélago de Chagos e da Base de Diego Garcia Travou Entre Londres, Maurício e Washington? No centro do Oceano Índico, um atol de apenas vinte e sete quilômetros quadrados de terra seca guarda bombardeiros furtivos e submarinos nucleares americanos. Diego Garcia pertence ao Arquipélago de Chagos, separado das Ilhas Maurício pelo Reino Unido em 1965 antes da independência, com cerca de dois mil moradores expulsos para abrir espaço à base militar. Em 2019, a Corte Internacional de Justiça declarou que a descolonização mauriciana nunca foi concluída e mandou Londres devolver as ilhas. Em maio de 2025, o Reino Unido assinou um tratado entregando a soberania a Maurício enquanto arrendava Diego Garcia por noventa e nove anos. Porém, em 2026, a ratificação travou entre parlamentares britânicos preocupados com os custos e objeções estratégicas dos Estados Unidos sobre a segurança do Índico. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompts: [
      {
        titulo: 'Abertura e Gancho de Chagos e Diego Garcia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe descending onto the central Indian Ocean, highlighting the Chagos Archipelago and the horseshoe-shaped atoll of Diego Garcia surrounded by a 639.000 km² EEZ boundary.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "O PORTA-AVIÕES DO OCEANO ÍNDICO"
Line 2 (intense crimson red #C8102E): "POR QUE CHAGOS E DIEGO GARCIA TRAVARAM"
Line 3 (pure white #F5F2EB): "ENTRE LONDRES, MAURÍCIO E WASHINGTON"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, radiant glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward Diego Garcia atoll.
NO voice, NO speech, NO music. ONLY deep oceanic sonar ping and atmospheric rumble SFX.`
      },
      {
        titulo: 'Diego Garcia no Centro Geodésico do Índico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing radial geodesic distance rings radiating from Diego Garcia (07°18'S · 72°24'E) toward Hormuz, Bab el-Mandeb, and the Strait of Malacca.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "07°18'S · 72°24'E // CENTRO ESTRATÉGICO DO ÍNDICO" in JetBrains Mono.
Badge: "A 2.000+ KM DA ÍNDIA E 3.000 KM DA ÁFRICA" in gold (#F59E0B).
Camera: smooth pull-back showing the Indian Ocean distances.
NO voice, NO speech, NO music. ONLY radar beacon pulse and tropical surf SFX.`
      },
      {
        titulo: 'A Separação Colonial de 1965 e Criação do BIOT',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite map splitting Mauritius and the Chagos Archipelago with a sharp crimson severance line dated 1965.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "NOV 1965 // LONDRES SEPARA CHAGOS DE MAURÍCIO" in uppercase white Orbitron Bold.
Badge: "3 MILHÕES DE LIBRAS · CRIAÇÃO DO BIOT ANTES DE 1968" in intense crimson red (#C8102E).
Camera: linear pan northeast from Mauritius to the Chagos Bank.
NO voice, NO speech, NO music. ONLY archival typewriter clack and wind whoosh SFX.`
      },
      {
        titulo: 'A Expulsão dos Moradores Chagossianos (1968–1973)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom onto the outer Chagos atolls (Peros Banhos and Salomon Islands) with arrows pointing southwest toward Mauritius and Seychelles.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "1968–1973 // ~2.000 CHAGOSSIANOS REMOVIDOS À FORÇA" in uppercase white Montserrat Bold.
Badge: "ILHAS EXTERNAS ESVAZIADAS PARA SEGURANÇA DA BASE" in pure white (#F5F2EB).
Camera: slow linear tracking pass over Peros Banhos lagoon.
NO voice, NO speech, NO music. ONLY lonely ocean breeze and distant bell chime SFX.`
      },
      {
        titulo: 'A Pista de 3.659 Metros e Porto de Submarinos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite close-up on the western arm of Diego Garcia atoll showing the 3.659-meter bomber runway and deep lagoon anchorages.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Target crosshair (coord-crosshairs.svg) locking onto the runway and naval pier.
Text on screen: "PISTA DE 3.659 M // BOMBARDEIROS B-2 E SUBMARINOS NUCLEARES" in uppercase white Orbitron Bold.
Camera: smooth downward zoom over the horseshoe lagoon.
NO voice, NO speech, NO music. ONLY distant jet turbine roar and sonar ping SFX.`
      },
      {
        titulo: 'A Condenação da Corte Internacional de Justiça em 2019',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective shifting over the Chagos Bank turning its EEZ boundary from British blue to Mauritian sage-gold vectors after the 2019 ICJ ruling.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "25 FEV 2019 // CORTE DE HAIA (13–1): DEVOLVER A MAURÍCIO" in uppercase white Orbitron Bold.
Badge: "ASSEMBLEIA DA ONU APROVA POR 116 A 6 VOTOS" in sage green (#A8C3A6).
Camera: smooth orbital tilt over the entire Chagos coral bank.
NO voice, NO speech, NO music. ONLY formal court gavel strike and telemetry tone SFX.`
      },
      {
        titulo: 'O Tratado de 22 de Maio de 2025 e Arrendamento de 99 Anos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite graphic linking London and Port Louis over Chagos with a dual sovereign/lease overlay on Diego Garcia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "22 MAI 2025 // TRATADO DE TRANSFERÊNCIA + ARRENDAMENTO 99 ANOS" in uppercase white Montserrat Bold.
Badge: "~£165 MILHÕES/ANO INICIAIS PELA BASE MILITAR" in gold (#F59E0B).
Camera: steady zoom centered on the southern Diego Garcia lagoon.
NO voice, NO speech, NO music. ONLY crisp document stamp and data blip SFX.`
      },
      {
        titulo: 'O Bloqueio em Londres e as Objeções de Washington em 2026',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tri-point geopolitical vector map linking London, Washington D.C., and Port Louis converging on Diego Garcia with flashing crimson hold markers.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "2026 // RATIFICAÇÃO TRAVADA NO PARLAMENTO E PENTÁGONO" in uppercase white Orbitron Bold.
Badge: "EUA COBRAM GARANTIAS ESTRATÉGICAS E MODELO GROENLÂNDIA" in intense crimson red (#C8102E).
Camera: smooth pull-back showing diplomatic tension vectors across oceans.
NO voice, NO speech, NO music. ONLY urgent radar lock beep and static hum SFX.`
      },
      {
        titulo: '639 Mil km² de ZEE no Meio das Rotas de Energia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide Indian Ocean view highlighting the 639.000 km² Chagos maritime zone sitting along global oil and container shipping lanes.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "56 KM² DE TERRA · 639.000 KM² DE SOBERANIA MARÍTIMA" in uppercase white Orbitron Bold.
Camera: slow pan across the central Indian Ocean basin.
NO voice, NO speech, NO music. ONLY ocean wave swell and distant ship horn SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view over the Indian Ocean between Africa, India, and Australia under crisp daylight relief.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep space.
NO voice, NO speech, NO music. ONLY low atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 241,
    titulo: 'Como o Acordo de Hadda Criou o Zigue-Zague Desértico Apelidado de Soluço de Churchill Entre Jordânia e Arábia Saudita?',
    roteiro: 'Como o Acordo de Hadda Criou o Zigue-Zague Desértico Apelidado de Soluço de Churchill Entre Jordânia e Arábia Saudita? Olhando para o mapa da Jordânia, chama atenção uma ponta triangular afiada que parece um erro de régua no meio do deserto. A lenda popular garante que Winston Churchill desenhou o ângulo após um almoço regado a bebidas no Cairo em 1921, batizando o trecho de Soluço de Churchill. Mas os arquivos britânicos revelam outra história: quando a fronteira nasceu em 2 de novembro de 1925 pelo Acordo de Hadda, Churchill já nem comandava o Departamento Colonial. Quem negociou o zigue-zague foi o diplomata Sir Gilbert Clayton com o sultão Abdulaziz Ibn Saud para resolver a disputa pelos poços de água e salinas de Wadi Sirhan e do oásis de Kaf. A linha recuou para entregar o vale aos sauditas mantendo um corredor ligando a Jordânia ao Iraque. Em 1965, uma troca de terras ainda deu dezoito quilômetros extras de costa à Jordânia em Aqaba. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompts: [
      {
        titulo: 'Abertura e Gancho do Soluço de Churchill',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe zooming onto the Arabian Desert between Jordan and Saudi Arabia, illuminating the sharp triangular border indentation near Azraq and Wadi Sirhan in crisp crimson vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "O ZIGUE-ZAGUE MAIS FAMOSO DO DESERTO"
Line 2 (intense crimson red #C8102E): "A VERDADE SOBRE O SOLUÇO DE CHURCHILL"
Line 3 (pure white #F5F2EB): "ENTRE JORDÂNIA E ARÁBIA SAUDITA"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, luminous glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward eastern Jordan.
NO voice, NO speech, NO music. ONLY desert wind sweep and tactical radar ping SFX.`
      },
      {
        titulo: 'A Cunhagem Geométrica no Mapa da Jordânia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view centered on Jordan and northern Saudi Arabia with flat masked national flags cleanly bound inside both territories (no wave, no bleeding).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Sharp 2px Bege Cartográfico (#F5F2EB) border highlighting the 744 km desert frontier and its acute triangle pointing toward Azraq.
Text on screen: "744 KM DE FRONTEIRA NO DESERTO DA SÍRIA" in uppercase white Montserrat Bold.
Camera: steady overhead push-in onto the geometric wedge.
NO voice, NO speech, NO music. ONLY dry desert breeze and vector lock click SFX.`
      },
      {
        titulo: 'O Mito da Caneta em 1921 vs os Fatos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite focus on the desert tri-junction zone with coordinate grid lines overlaid in Cinza Ardósia (#53647C).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "MITO DE 1921: TRAÇO ACIDENTAL APÓS ALMOÇO NO CAIRO" in uppercase white Orbitron Bold, then stamped with "FATO: NEGOCIAÇÃO DE 1925" in crimson red (#C8102E).
Camera: smooth lateral pan along the straight western desert line.
NO voice, NO speech, NO music. ONLY archival parchment rustle and stamp thud SFX.`
      },
      {
        titulo: 'A Depressão de Wadi Sirhan e o Oásis de Kaf',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution topographic satellite zoom onto the 300 km Wadi Sirhan depression and the oasis settlement of Kaf / Al-Qurayyat inside northern Saudi Arabia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "WADI SIRHAN E AL-KAF // POÇOS DE ÁGUA E SALINAS" in uppercase white Montserrat Bold.
Badge: "DISPUTA ENTRE TRIBOS E O SULTANATO DE NEJD" in gold (#F59E0B).
Camera: linear tracking flight moving southeast along the Wadi Sirhan valley.
NO voice, NO speech, NO music. ONLY arid canyon wind and camel bell echo SFX.`
      },
      {
        titulo: 'O Acordo de Hadda de 2 de Novembro de 1925',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing the 1925 boundary line snapping precisely onto meridian 37°E and parallel 31°30'N to enclose Wadi Sirhan on the Saudi side.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "02 NOV 1925 // ACORDO DE HADDA (CLAYTON E IBN SAUD)" in uppercase white Orbitron Bold.
Badge: "LINHA DELIBERADA PARA ENVOLVER WADI SIRHAN" in intense crimson red (#C8102E).
Camera: slow pull-back revealing the full triangular turn.
NO voice, NO speech, NO music. ONLY compass caliper click and glowing line ignition SFX.`
      },
      {
        titulo: 'O Corredor Aéreo e Terrestre Até o Iraque',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite view showing the narrow desert panhandle of eastern Jordan connecting Transjordan directly to Iraq above the Saudi wedge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Sage green (#A8C3A6) flight and pipeline corridor bridging Suez–Amman–Baghdad north of the triangle.
Text on screen: "CORREDOR ESTRATÉGICO PARA UNIR JORDÂNIA E IRAQUE" in uppercase white Montserrat Bold.
Camera: smooth eastward tracking shot toward the Iraqi border.
NO voice, NO speech, NO music. ONLY vintage propeller plane hum and wind SFX.`
      },
      {
        titulo: 'A Troca Territorial de 1965 Entre Hussein e Faisal',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite camera sliding southwest to the Gulf of Aqaba on the Red Sea coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Before-and-after coastal vector showing Jordan's port strip expanding southward by 18–19 km in exchange for 7.000 km² of inland desert.
Text on screen: "1965 // TROCA DE TERRAS DÁ +19 KM DE MAR À JORDÂNIA" in uppercase white Orbitron Bold.
Badge: "AMPLIAÇÃO DO PORTO DE AQABA NO MAR VERMELHO" in sage green (#A8C3A6).
Camera: smooth linear zoom into the Aqaba coastline.
NO voice, NO speech, NO music. ONLY Red Sea coastal surf and harbor horn SFX.`
      },
      {
        titulo: 'O Posto Aduaneiro de Al-Umari na Ponta do Triângulo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up on the Al-Umari / Al-Haditha border crossing highway sitting at the exact apex of the wedge.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Target crosshair (coord-crosshairs.svg) centered on the highway border gates.
Text on screen: "AL-UMARI // FRONTEIRA VIVA NO ÁPICE DA CUNHA" in JetBrains Mono.
Camera: steady overhead descent over the desert highway.
NO voice, NO speech, NO music. ONLY distant highway rumble and scanner beep SFX.`
      },
      {
        titulo: 'As Fronteiras a Régua do Oriente Médio Pós-1918',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Broad satellite view of Jordan, Saudi Arabia, Iraq, and Syria revealing straight Sykes-Picot and post-WWI ruler borders across the desert.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "LINHAS RETAS QUE ESCONDEM DISPUTAS POR ÁGUA E ROTAS" in uppercase white Montserrat Bold.
Camera: slow pull-back across the Levant and Northern Arabia.
NO voice, NO speech, NO music. ONLY deep desert wind tone SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of the Middle East between the Mediterranean, Red Sea, and Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep space.
NO voice, NO speech, NO music. ONLY low atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 242,
    titulo: 'Por Que Estados Unidos e México Cimentaram o Rio Grande Para Encerrar Cem Anos de Disputa Pelo Chamizal?',
    roteiro: 'Por Que Estados Unidos e México Cimentaram o Rio Grande Para Encerrar Cem Anos de Disputa Pelo Chamizal? Em 1848, o Tratado de Guadalupe Hidalgo escolheu o leito do Rio Grande como fronteira oficial entre Estados Unidos e México. O problema é que rios de planície não ficam parados no lugar. Em 1864, uma grande enchente escavou um novo curso para o sul entre El Paso e Ciudad Juárez, deixando duzentos e cinquenta e cinco hectares do bairro mexicano do Chamizal presos na margem norte, sob domínio texano. Em 1911, uma arbitragem internacional deu razão ao México, mas Washington rejeitou o laudo e manteve a área por mais cinquenta anos. O impasse só terminou em 29 de agosto de 1963, quando os presidentes John Kennedy e Adolfo López Mateos assinaram a Convenção do Chamizal. Para impedir que o rio voltasse a mudar a fronteira, engenheiros dos dois países construíram e concretaram um canal artificial de sete quilômetros, cimentando literalmente o mapa. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompts: [
      {
        titulo: 'Abertura e Gancho da Disputa do Chamizal',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe descending onto the US–Mexico border at El Paso and Ciudad Juárez, highlighting the straight concrete-lined channel of the Rio Grande cutting between both cities.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "CEM ANOS DE BRIGA POR UM RIO QUE MUDOU"
Line 2 (intense crimson red #C8102E): "POR QUE CIMENTARAM O RIO GRANDE"
Line 3 (pure white #F5F2EB): "A DISPUTA DO CHAMIZAL (EUA × MÉXICO)"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, luminous glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward El Paso–Ciudad Juárez.
NO voice, NO speech, NO music. ONLY rushing river water and radar ping SFX.`
      },
      {
        titulo: 'O Tratado de 1848 e um Rio Instável na Planície',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view along the Rio Grande valley between New Mexico, Texas, and Chihuahua.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "1848 // TRATADO DE GUADALUPE HIDALGO FIXA O RIO COMO DIVISA" in uppercase white Orbitron Bold.
Badge: "MEANDROS ARENOSOS MUDAVAM DE CURSO TODO VERÃO" in gold (#F59E0B).
Camera: linear tracking flight along the Rio Grande valley.
NO voice, NO speech, NO music. ONLY river flood rush and wind SFX.`
      },
      {
        titulo: 'A Cheia de 1864 e o Bairro Preso no Texas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite historical overlay over central El Paso and Ciudad Juárez showing the 1852 northern river channel in dashed white versus the sudden 1864 southern channel in crimson.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
The trapped 255-hectare Chamizal polygon glowing in red inside US territory.
Text on screen: "1864 // ENCHENTE ISOLA 255 HECTARES MEXICANOS NO TEXAS" in uppercase white Montserrat Bold.
Camera: smooth downward push-in onto the Chamizal tract.
NO voice, NO speech, NO music. ONLY thunder rumble and surging water SFX.`
      },
      {
        titulo: 'Acreção vs Avulsão e a Arbitragem de 1911',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Clean cartographic diagram overlaid on the satellite map contrasting slow river drift (accretion) against violent flood cut (avulsion).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "1911 // ARBITRAGEM DÁ RAZÃO AO MÉXICO · EUA REJEITAM" in uppercase white Orbitron Bold.
Badge: "52 ANOS DE IMPASSE DIPLOMÁTICO NA FRONTEIRA" in intense crimson red (#C8102E).
Camera: steady overhead hover over the river bend.
NO voice, NO speech, NO music. ONLY court gavel strike and telemetry beep SFX.`
      },
      {
        titulo: 'A Convenção de 1963 Entre Kennedy e López Mateos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up highlighting both the Chamizal zone (630 acres) returning to Mexico in sage green and Córdoba Island (193 acres) transferring to the US.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "29 AGO 1963 // CONVENÇÃO DO CHAMIZAL SELA A TROCA" in uppercase white Orbitron Bold.
Badge: "630 ACRES PARA O MÉXICO · 193 ACRES PARA OS EUA" in sage green (#A8C3A6).
Camera: smooth lateral pan bridging Chamizal to Córdoba Island.
NO voice, NO speech, NO music. ONLY crisp paper stamp and harmonic chime SFX.`
      },
      {
        titulo: 'A Engenharia Radical: Canal de Concreto de 7,1 km',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite tracking along the concrete-lined straight channel cutting cleanly between El Paso and Juárez.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Technical caliper label in JetBrains Mono: "ATA Nº 214 IBWC // 7,1 KM DE CANAL REVESTIDO EM CONCRETO".
Badge: "5.600 MORADORES REASSENTADOS ANTES DA ENTREGA" in gold (#F59E0B).
Camera: linear tracking flight flying straight down the concrete riverbed.
NO voice, NO speech, NO music. ONLY heavy construction rumble and concrete lock click SFX.`
      },
      {
        titulo: 'Novas Pontes e a Entrega Oficial de 1967',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom over the Bridge of the Americas and Paso del Norte Bridge crossing the cemented international channel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "28 OUT 1967 // TRANSFERÊNCIA FORMAL EM EL PASO–JUÁREZ" in uppercase white Montserrat Bold.
Badge: "PARQUE EL CHAMIZAL E CHAMIZAL NATIONAL MEMORIAL" in sage green (#A8C3A6).
Camera: smooth overhead pull-back over the twin border cities.
NO voice, NO speech, NO music. ONLY distant city traffic hum and bridge bell chime SFX.`
      },
      {
        titulo: 'O Tratado de 1970 para Evitar Novos Litígios Fluviais',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide satellite view tracking the entire 2.000+ km Rio Grande frontier from El Paso down to the Gulf of Mexico.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "1970 // TRATADO DE LIMITES CRIA REGRAS AUTOMÁTICAS" in uppercase white Orbitron Bold.
Camera: linear pan following the river toward Presidio and Laredo.
NO voice, NO speech, NO music. ONLY subtle river stream and radar sweep SFX.`
      },
      {
        titulo: 'Uma Fita de Cimento Travando Dois Países no Deserto',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Crisp vertical satellite shot centered directly above the cemented Rio Grande channel dividing the two urban grids of El Paso and Juárez.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "O ÚNICO TRECHO ONDE O RIO GRANDE NÃO SAI DO LUGAR" in uppercase white Montserrat Bold.
Camera: slow vertical pull-back into regional view.
NO voice, NO speech, NO music. ONLY steady wind tone and sonar lock SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of North America showing the entire US–Mexico frontier glowing across the continent.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep satellite orbit.
NO voice, NO speech, NO music. ONLY low atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 243,
    titulo: 'Quais São os Dez Países com as Maiores Reservas de Lítio do Mundo Onde Nasce a Corrida Pelas Baterias?',
    roteiro: 'Quais São os Dez Países com as Maiores Reservas de Lítio do Mundo Onde Nasce a Corrida Pelas Baterias? Segundo o Serviço Geológico dos Estados Unidos, o planeta soma cerca de trinta e sete milhões de toneladas em reservas econômicas de lítio, o metal indispensável para carros elétricos e armazenamento de energia. Quase metade desse estoque concentra-se em apenas dois países do Hemisfério Sul. No primeiro lugar está o Chile, com nove vírgula dois milhões de toneladas nas salmouras do Salar de Atacama. Logo atrás vem a Austrália, com oito vírgula quatro milhões de toneladas em rocha dura de espodumênio. Em terceiro aparece a China, com quatro vírgula seis milhões de toneladas, além de dominar cerca de oitenta por cento do refino mundial. Argentina e Estados Unidos empatam em quarto e quinto com quatro vírgula quatro milhões cada, seguidos pelo Canadá em sexto. O Brasil surpreende na sétima posição global com quinhentas e quarenta mil toneladas no Vale do Jequitinhonha, à frente de Zimbábue, Mali e Portugal. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompts: [
      {
        titulo: 'Abertura e Gancho do Ranking Mundial do Lítio',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D rotating globe illuminating the South American Lithium Triangle, Western Australia, China, North America, and Minas Gerais in luminous gold and cyan vectors.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "O PETRÓLEO BRANCO DAS BATERIAS"
Line 2 (intense crimson red #C8102E): "MAIORES RESERVAS DE LÍTIO DO MUNDO"
Line 3 (pure white #F5F2EB): "RANKING OFICIAL DO SUBSOLO (USGS)"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, radiant glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward the Andes.
NO voice, NO speech, NO music. ONLY electric energy hum and tactical sonar ping SFX.`
      },
      {
        titulo: '1º Lugar: Chile com 9,2 Milhões de Toneladas no Atacama',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite close-up of the Salar de Atacama salt flats and turquoise lithium evaporation ponds in northern Chile.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "1º LUGAR // CHILE // 9.200.000 TONELADAS" in uppercase white Orbitron Bold.
Badge: "SALMOURA CONTINENTAL NO DESERTO DO ATACAMA" in gold (#F59E0B).
Camera: smooth downward push-in over the geometric evaporation pools.
NO voice, NO speech, NO music. ONLY Andean desert wind and crystalline chime SFX.`
      },
      {
        titulo: '2º Lugar: Austrália com 8,4 Milhões de Toneladas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Western Australia highlighting the massive Greenbushes hard-rock spodumene mine and shipping corridors north to China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "2º LUGAR // AUSTRÁLIA // 8.400.000 TONELADAS" in uppercase white Orbitron Bold.
Badge: "MAIOR PRODUTORA ANUAL EM ROCHA DURA (ESPODUMÊNIO)" in sage green (#A8C3A6).
Camera: linear tracking sweep over southwestern Australia.
NO voice, NO speech, NO music. ONLY heavy mining rumble and ship horn SFX.`
      },
      {
        titulo: '3º Lugar: China (4,6M t) e o Monopólio de 80% do Refino',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of China showing Qinghai salt lakes and Jiangxi deposits, with converging trade arrows flowing into Chinese battery refineries.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "3º LUGAR // CHINA // 4.600.000 TONELADAS" in uppercase white Orbitron Bold.
Badge: "CONTROLA ~80% DE TODO O REFINO QUÍMICO GLOBAL" in intense crimson red (#C8102E).
Camera: smooth pull-back revealing maritime import arcs into coastal China.
NO voice, NO speech, NO music. ONLY electric arc buzz and telemetry data beep SFX.`
      },
      {
        titulo: '4º e 5º Lugares: Argentina e Estados Unidos (4,4M t Cada)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite perspective showing Jujuy/Salta salt flats in Argentina alongside Thacker Pass volcanic clay reserves in Nevada, USA.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "4º ARGENTINA (4,4M T) // 5º ESTADOS UNIDOS (4,4M T)" in uppercase white Montserrat Bold.
Badge: "EXPANSÃO ANDINA VS CORRIDA INDUSTRIAL EM NEVADA" in gold (#F59E0B).
Camera: smooth tilt bridging the southern Andes to the Great Basin.
NO voice, NO speech, NO music. ONLY mountain wind and radar lock chime SFX.`
      },
      {
        titulo: '6º Lugar: Canadá com 1,6 Milhão de Toneladas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Canadian Shield in Quebec and Ontario highlighting hard-rock lithium belts backed by hydroelectricity.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "6º LUGAR // CANADÁ // 1.600.000 TONELADAS" in uppercase white Orbitron Bold.
Badge: "ENERGIA HIDRELÉTRICA PARA BATERIAS DA AMÉRICA DO NORTE" in sage green (#A8C3A6).
Camera: smooth lateral pan across northern Quebec lakes.
NO voice, NO speech, NO music. ONLY forest wind and flowing water SFX.`
      },
      {
        titulo: '7º Lugar: Brasil (540 Mil t) no Vale do Jequitinhonha',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite zoom onto northeastern Minas Gerais (Araçuaí and Itinga in the Jequitinhonha Valley) with export vectors linking to Ilhéus and Vitória ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "7º LUGAR // BRASIL // 540.000 TONELADAS" in uppercase white Orbitron Bold.
Badge: "LÍTIO VERDE DE ALTO TEOR NO VALE DO JEQUITINHONHA" in sage green (#A8C3A6).
Camera: linear push-in over Minas Gerais toward the Atlantic coast.
NO voice, NO speech, NO music. ONLY crisp data lock and subtle earth rumble SFX.`
      },
      {
        titulo: '8º, 9º e 10º Lugares: Zimbábue, Mali e Portugal',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite triad hopping across Bikita in Zimbabwe (500k t), Goulamina in Mali (370k t), and Barroso in northern Portugal (60k t).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "8º ZIMBÁBUE (500K) · 9º MALI (370K) · 10º PORTUGAL (60K)" in uppercase white Montserrat Bold.
Badge: "ÚNICO REPRESENTANTE DA UNIÃO EUROPEIA NO TOP 10" in pure white (#F5F2EB).
Camera: smooth northward tracking jump from southern Africa to Iberia.
NO voice, NO speech, NO music. ONLY telemetry scan sweep SFX.`
      },
      {
        titulo: 'O Enigma da Bolívia e o Salar de Uyuni Fora da Lista',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up of the vast white mirror of Salar de Uyuni in Bolivia at 3.650 m elevation.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "BOLÍVIA // 23M T EM RECURSOS, MAS FORA DAS RESERVAS PROVADAS" in uppercase white Orbitron Bold.
Badge: "ALTO TEOR DE MAGNÉSIO E FALTA DE ESCALA INDUSTRIAL" in intense crimson red (#C8102E).
Camera: slow pull-back over the Altiplano plateau.
NO voice, NO speech, NO music. ONLY high-altitude Andean wind howl SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide orbital view of planet Earth highlighting the global critical minerals supply chain across all continents.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep space.
NO voice, NO speech, NO music. ONLY low atmospheric rumble and celestial chime SFX.`
      }
    ]
  },
  {
    num: 244,
    titulo: 'Quais São os Dez Menores Países do Mundo Onde Estados Soberanos Cabem Dentro de Um Bairro Urbano?',
    roteiro: 'Quais São os Dez Menores Países do Mundo Onde Estados Soberanos Cabem Dentro de Um Bairro Urbano? Somados todos os dez menores países independentes da Terra, suas áreas juntas somam mil cento e vinte quilômetros quadrados, menos do que a cidade do Rio de Janeiro. No primeiro lugar está o Vaticano, com zero vírgula quarenta e quatro quilômetro quadrado dentro de Roma, cabendo mais de três vezes no Parque Ibirapuera. Em segundo aparece Mônaco, com dois vírgula zero dois quilômetros quadrados na Riviera Francesa e a maior densidade populacional do planeta. Nauru ocupa o terceiro lugar com vinte e um quilômetros quadrados, seguida pelos atóis rasos de Tuvalu com vinte e seis. Na sequência aparecem San Marino na Itália, Liechtenstein nos Alpes e as Ilhas Marshall no Pacífico, que compensam a terra minúscula com quase dois milhões de quilômetros quadrados de oceano. Fecham o Top 10 São Cristóvão e Névis no Caribe, as Maldivas no Índico e Malta no centro do Mediterrâneo. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.',
    prompts: [
      {
        titulo: 'Abertura e Gancho dos 10 Menores Países do Mundo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. High-resolution 3D globe flashing pinpoint gold target rings over Europe, the Caribbean, Indian Ocean, and Central Pacific marking the world's 10 smallest sovereign states.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be mathematically dead-centered (X: 50%, Y: 50%).
Line 1 (pure white #F5F2EB): "MENORES QUE UM BAIRRO URBANO"
Line 2 (intense crimson red #C8102E): "OS DEZ MENORES PAÍSES DO MUNDO"
Line 3 (pure white #F5F2EB): "DO VATICANO À ILHA DE MALTA"
Font Orbitron Bold, 1px stroke outline, 3px vertical spacing, radiant glow bloom.
Subtle map-frame-corner.svg framing the edges.
Camera motion: smooth linear push-in toward the Mediterranean.
NO voice, NO speech, NO music. ONLY deep orbital bass and precision radar ping SFX.`
      },
      {
        titulo: '1º Lugar: Cidade do Vaticano (0,44 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ultra-sharp satellite view zooming straight into St. Peter's Square and the Vatican Gardens surrounded by the streets of Rome.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2px Bege Cartográfico (#F5F2EB) border outlining the 0.44 km² enclave.
Text on screen: "1º LUGAR // CIDADE DO VATICANO // 0,44 KM²" in uppercase white Orbitron Bold.
Badge: "CABE 3,6 VEZES NO PARQUE IBIRAPUERA" in gold (#F5F2EB).
Camera: slow linear descent onto St. Peter's Basilica dome.
NO voice, NO speech, NO music. ONLY distant church bell chime and city hum SFX.`
      },
      {
        titulo: '2º Lugar: Principado de Mônaco (2,02 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite close-up of Monaco squeezed between steep Maritime Alps cliffs and the Mediterranean marina at Port Hercule.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "2º LUGAR // MÔNACO // 2,02 KM²" in uppercase white Orbitron Bold.
Badge: "MAIOR DENSIDADE POPULACIONAL SOBERANA DA TERRA" in intense crimson red (#C8102E).
Camera: smooth lateral pan from Monte Carlo across the harbor.
NO voice, NO speech, NO music. ONLY Mediterranean gentle waves and yacht horn SFX.`
      },
      {
        titulo: '3º e 4º Lugares: Nauru (21 km²) e Tuvalu (26 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view comparing the oval coral island of Nauru with its single 19 km ring road and the thin ribbon atolls of Funafuti in Tuvalu.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "3º NAURU (21 KM²) // 4º TUVALU (26 KM²)" in uppercase white Montserrat Bold.
Badge: "ALTITUDE MÉDIA < 2 METROS ACIMA DO OCEANO" in gold (#F59E0B).
Camera: smooth push-in over Funafuti turquoise lagoon.
NO voice, NO speech, NO music. ONLY Pacific surf swell and trade wind SFX.`
      },
      {
        titulo: '5º Lugar: San Marino (61 km²) nos Apeninos',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite shot of Mount Titano and San Marino enclosed entirely within northern Italy.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "5º LUGAR // SAN MARINO // 61 KM²" in uppercase white Orbitron Bold.
Badge: "REPÚBLICA CONSTITUCIONAL MAIS ANTIGA EM ATIVIDADE" in sage green (#A8C3A6).
Camera: slow pull-back revealing the Appennine ridgeline.
NO voice, NO speech, NO music. ONLY mountain wind breeze and stone bell chime SFX.`
      },
      {
        titulo: '6º Lugar: Liechtenstein (160 km²) Entre Suíça e Áustria',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up of the Upper Rhine Valley framing Liechtenstein wedged between Switzerland and Austria.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Two frontier crossing arrows showing double-landlocked isolation from any sea.
Text on screen: "6º LUGAR // LIECHTENSTEIN // 160 KM²" in uppercase white Orbitron Bold.
Badge: "UM DOS DOIS PAÍSES DUPLAMENTE SEM LITORAL DO MUNDO" in gold (#F59E0B).
Camera: linear tracking flight northward along the Rhine river border.
NO voice, NO speech, NO music. ONLY alpine valley wind and river flow SFX.`
      },
      {
        titulo: '7º Lugar: Ilhas Marshall (181 km² de Terra · 1,99M km² de Mar)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide Pacific satellite perspective contrasting tiny coral atolls of Majuro and Kwajalein against a colossal glowing 1.99 million km² oceanic EEZ circle.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "7º ILHAS MARSHALL // 181 KM² TERRA · 1,99M KM² MAR" in uppercase white Montserrat Bold.
Camera: smooth pull-back revealing the immense maritime ring.
NO voice, NO speech, NO music. ONLY deep oceanic sonar ping SFX.`
      },
      {
        titulo: '8º Lugar: São Cristóvão e Névis (269 km² nas Américas)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the twin volcanic Caribbean islands of Saint Kitts and Nevis separated by the 3 km Narrows channel.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "8º SÃO CRISTÓVÃO E NÉVIS // 269 KM²" in uppercase white Orbitron Bold.
Badge: "MENOR PAÍS SOBERANO DE TODO O CONTINENTE AMERICANO" in sage green (#A8C3A6).
Camera: smooth lateral pan across Mount Liamuiga and Nevis Peak.
NO voice, NO speech, NO music. ONLY Caribbean surf and tropical wind SFX.`
      },
      {
        titulo: '9º e 10º Lugares: Maldivas (300 km²) e Malta (316 km²)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite shot comparing the 1.190 coral islands of the Maldives in the Indian Ocean and the limestone Grand Harbour of Malta in the central Mediterranean.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Text on screen: "9º MALDIVAS (300 KM²) // 10º MALTA (316 KM²)" in uppercase white Orbitron Bold.
Badge: "TOTAL DOS 10 PAÍSES: 1.120 KM² (< RIO DE JANEIRO)" in intense crimson red (#C8102E).
Camera: steady zoom into Valletta's strategic Mediterranean strait.
NO voice, NO speech, NO music. ONLY harbor bell and calm ocean swell SFX.`
      },
      {
        titulo: 'Perspectiva Global e Encerramento Institucional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude orbital view of Earth showing how sovereign microstates span oceans and continents despite minuscule land footprints.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
In the lower-central quadrant, the VitaleGeo Geodesic Globe-G symbol appears in semi-transparent Bege Cartográfico (#F5F2EB, 70% opacity) with the wordmark "VITALEGEO" in Orbitron Bold.
Camera motion: slow retreat into deep space.
NO voice, NO speech, NO music. ONLY low atmospheric rumble and celestial chime SFX.`
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
console.log('✅ Roteiros 240 a 244 gravados com sucesso.');
