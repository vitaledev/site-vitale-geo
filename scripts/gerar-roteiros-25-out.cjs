const fs = require('fs');
const path = require('path');

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

if (!fs.existsSync(roteirosDir)) {
    fs.mkdirSync(roteirosDir, { recursive: true });
}

const videosData = [
    {
        num: 108,
        titulo: "Quais São os Dez Maiores Aglomerados Urbanos do Planeta Onde Vivem Mais de Trezentos Milhões de Pessoas?",
        roteiro: "Quais são os dez maiores aglomerados urbanos do planeta onde vivem mais de trezentos milhões de pessoas? No topo absoluto do ranking mundial reina a colossal Grande Tóquio-Yokohama, um formigueiro humano hiperconectado por trilhos com mais de trinta e sete milhões de habitantes. Em segundo lugar surge a explosiva capital indiana de Deli, com trinta e três milhões de almas em expansão vertiginosa. O pódio fecha com o polo industrial chinês de Xangai, com quase trinta milhões de moradores no estuário do Yangtze. O Brasil marca presença com a Grande São Paulo, quarta maior megacidade da Terra com vinte e dois milhões e meio de habitantes, superando o Cairo, a Cidade do México e a hiperdensa Daca em Bangladesh. A lista é completada por Pequim, Mumbai e a conurbação japonesa de Osaka-Kobe-Kyoto. Um planeta onde a humanidade concentrou suas maiores forças em colossos de concreto.",
        line1: "MEGACIDADES GLOBAIS",
        line2: "OS 10 MAIORES GIGANTES",
        line3: "DO PLANETA TERRA",
        emoji: "🏙️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and presenting the glowing urban night lights of the world's greatest megacities.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "MEGACIDADES GLOBAIS"
Line 2 (intense crimson red #E50914): "OS 10 MAIORES GIGANTES"
Line 3 (pure white): "DO PLANETA TERRA"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🏙️.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "1º Lugar: Grande Tóquio-Yokohama (37,4 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital flyover over the immense illuminated sprawl of Tokyo Bay, Shinjuku, and Yokohama in Kanto Plain.
Text on screen: "1º TÓQUIO-YOKOHAMA // 37.400.000 HABITANTES (JAPÃO)" in uppercase white Tahoma Bold.
Badge: "O MAIOR FOR MIGUEIRO HUMANO DA TERRA CONECTADO POR TRILHOS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "2º Lugar: Deli (Região Capital Nacional) (33,2 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Delhi NCR megacity along the Yamuna River, dense urban texture.
Text on screen: "2º DELI (NCR) // 33.200.000 HABITANTES (ÍNDIA)" in uppercase white Tahoma Bold.
Badge: "CRESCIMENTO DEMOGRÁFICO VERTIGINOSO NO CORAÇÃO DO SUL DA ÁSIA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "3º Lugar: Xangai (29,8 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of Shanghai along the Huangpu River and the Yangtze estuary with Pudong skyline.
Text on screen: "3º XANGAI // 29.800.000 HABITANTES (CHINA)" in uppercase white Tahoma Bold.
Badge: "A CAPITAL INDUSTRIAL E MAIOR PORTO DE CONTÊINERES DO MUNDO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "4º Lugar: Grande São Paulo (22,6 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover of the São Paulo metropolitan continuous grid nestled in the Serra do Mar plateau.
Text on screen: "4º SÃO PAULO (RMSP) // 22.600.000 HABITANTES (BRASIL)" in uppercase white Tahoma Bold.
Badge: "O MAIOR POLO ECONÔMICO E FINANCEIRO DO HEMISFÉRIO SUL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "5º Lugar: Grande Cairo (22,4 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Cairo flanking the green Nile delta ribbon against the arid desert plateau.
Text on screen: "5º CAIRO MAIOR // 22.400.000 HABITANTES (EGITO)" in uppercase white Tahoma Bold.
Badge: "O GIGANTE HISTÓRICO DO MUNDO ÁRABE E DO NORTE DA ÁFRICA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "6º e 7º Lugares: Cidade do México (22,1 Mi) e Daca (23,2 Mi)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite telemetry showcasing Mexico City high valley basin and Dhaka's ultra-dense delta floodplains.
Text on screen: "6º CIDADE DO MÉXICO (22,1 MI) // 7º DACA (23,2 MI)" in uppercase white Tahoma Bold.
Badge: "DACA: RECORDISTA MUNDIAL EM DENSIDADE COM 51 MIL HAB/KM²" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "8º e 9º Lugares: Pequim (21,8 Mi) e Mumbai (21,5 Mi)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite sweep of Beijing's ring roads and Mumbai's coastal peninsula islands.
Text on screen: "8º PEQUIM (21,8 MI) // 9º MUMBAI (21,5 MI)" in uppercase white Tahoma Bold.
Badge: "CENTROS DE PODER POLÍTICO E FINANCEIRO DA ÁSIA CONTEMPORÂNEA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "10º Lugar: Osaka-Kobe-Kyoto (19,2 Milhões)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Keihanshin industrial conurbation wrapped around Osaka Bay in western Japan.
Text on screen: "10º OSAKA-KOBE-KYOTO // 19.200.000 HABITANTES (JAPÃO)" in uppercase white Tahoma Bold.
Badge: "A SEGUNDA MEGAMETRÓPOLE DE ALTA VELOCIDADE NIPÔNICA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo do Ranking",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global orbital pullback illuminating the Top 10 megacity clusters glowing across Earth's continents.
Text on screen: "AS 10 MAIORES MEGACIDADES // 300 MILHÕES DE PESSOAS" in uppercase white Tahoma Bold.
Badge: "A NOVA CARTOGRAFIA DA URBANIZAÇÃO EXTREMA DO PLANETA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 109,
        titulo: "Quais São os Dez Maiores Países do Planeta Que Ocupam Quase Metade de Todas as Terras Emersas?",
        roteiro: "Quais são os dez maiores países do planeta que ocupam quase metade de todas as terras emersas da Terra? No topo inatingível reina a Rússia, com dezessete milhões de quilômetros quadrados cobrindo onze fusos horários da Europa ao Pacífico. Em segundo surge o Canadá, com quase dez milhões de quilômetros quadrados, mais de duzentos mil quilômetros de litoral e a maior reserva de lagos do mundo. O pódio segue com a China em terceiro com nove vírgula seis milhões de quilômetros quadrados e os Estados Unidos em quarto com nove vírgula cinco milhões. O Brasil reina soberano no quinto lugar com oito milhões e meio de quilômetros quadrados, dominando quase metade da América do Sul. A lista segue com a ilha-continente da Austrália, o subcontinente indiano, a Argentina, o gigante sem mar do Cazaquistão e o colosso saariano da Argélia. Dez nações que dividem cinquenta por cento dos continentes.",
        line1: "SUPERLATIVOS GLOBAIS",
        line2: "OS 10 MAIORES PAÍSES",
        line3: "DO PLANETA TERRA",
        emoji: "🌍",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting the colossal boundaries of the world's 10 territorial superpowers.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "SUPERLATIVOS GLOBAIS"
Line 2 (intense crimson red #E50914): "OS 10 MAIORES PAÍSES"
Line 3 (pure white): "DO PLANETA TERRA"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌍.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "1º Lugar: Rússia (17.098.246 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital flyover over the transcontinental expanse of Russia stretching from the Baltic Sea across Siberia to the Pacific.
Text on screen: "1º RÚSSIA // 17.098.246 KM² (11 FUSOS HORÁRIOS)" in uppercase white Tahoma Bold.
Badge: "OCUPA 11,5% DE TODAS AS TERRAS EMERSAS DO PLANETA TERRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "2º Lugar: Canadá (9.984.670 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Canada highlighting its vast arctic archipelago and over two million lakes.
Text on screen: "2º CANADÁ // 9.984.670 KM² (AMÉRICA DO NORTE)" in uppercase white Tahoma Bold.
Badge: "O MAIOR LITORAL DO MUNDO COM 202 MIL KM DE COSTA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "3º e 4º Lugares: China (9,60 Mi km²) e EUA (9,52 Mi km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Comparative 3D terrain animation showing China's plateau and deserts contrasted with the continental US and Alaska.
Text on screen: "3º CHINA (9,60 MI KM²) // 4º ESTADOS UNIDOS (9,52 MI KM²)" in uppercase white Tahoma Bold.
Badge: "O DUELO CARTOGRÁFICO DE MASSA TERRITORIAL CONTINENTAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "5º Lugar: Brasil (8.515.767 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital tracking over Brazil showcasing the Amazon Basin, the Pantanal, and the Atlantic coastline.
Text on screen: "5º BRASIL // 8.515.767 KM² (AMÉRICA DO SUL)" in uppercase white Tahoma Bold.
Badge: "OCUPA 47% DA AMÉRICA DO SUL E É O MAIOR DO HEMISFÉRIO SUL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "6º Lugar: Austrália (7.692.024 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite sweep across the red desert Outback of Australia bordered by coral reefs and two oceans.
Text on screen: "6º AUSTRÁLIA // 7.692.024 KM² (OCEANIA)" in uppercase white Tahoma Bold.
Badge: "A ÚNICA NAÇÃO SOBERANA QUE OCUPA UM CONTINENTE INTEIRO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "7º Lugar: Índia (3.287.263 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of the Indian subcontinent framed by the snow-capped Himalayan wall and the Indian Ocean.
Text on screen: "7º ÍNDIA // 3.287.263 KM² (ÁSIA MERIDIONAL)" in uppercase white Tahoma Bold.
Badge: "O GIGANTE PENINSULAR MAIS POVOADO DA TERRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "8º Lugar: Argentina (2.780.400 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite flyover along the Andes Mountains, the Pampas, and the glacial fjords of Patagonia.
Text on screen: "8º ARGENTINA // 2.780.400 KM² (CONE SUL)" in uppercase white Tahoma Bold.
Badge: "O SEGUNDO MAIOR PAÍS DA AMÉRICA DO SUL DE NORTE A SUL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "9º e 10º Lugares: Cazaquistão (2,72 Mi km²) e Argélia (2,38 Mi km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view of the Kazakh steppes and the Sahara sand dunes across Algeria.
Text on screen: "9º CAZAQUISTÃO (2,72 MI KM²) // 10º ARGÉLIA (2,38 MI KM²)" in uppercase white Tahoma Bold.
Badge: "CAZAQUISTÃO: MAIOR PAÍS SEM MAR // ARGÉLIA: MAIOR DA ÁFRICA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo do Ranking",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global orbital view showing all 10 countries highlighted with gold vector outlines on the World Atlas.
Text on screen: "OS 10 MAIORES PAÍSES // 73,4 MILHÕES DE KM²" in uppercase white Tahoma Bold.
Badge: "DEZ NAÇÕES QUE DIVIDEM 50% DE TODA A TERRA DO PLANETA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 110,
        titulo: "Por Que Cinco Nações Estão Mapeando o Fundo do Oceano Ártico Para Reivindicar o Polo Norte Submarino?",
        roteiro: "Por que cinco nações militares estão mapeando freneticamente o fundo do Oceano Ártico para reivindicar o Polo Norte submarino? Sob a calota de gelo eterno a mais de quatro mil metros de profundidade repousa a Dorsal de Lomonosov, uma cordilheira fóssil de mil e oitocentos quilômetros que corta o teto do mundo. Sob as regras da Convenção do Mar da ONU, qualquer país que comprovar que essa serra submersa é extensão natural de seu continente ganha o monopólio exclusivo do subsolo marinho. A Rússia chocou o planeta em 2007 cravando uma bandeira de titânio no leito polar com um minissubmarino. Em resposta, Canadá e Dinamarca apresentaram dossiês científicos reivindicando exatamente o mesmo Polo Norte. O prêmio em disputa: trinta por cento de todo o gás natural não descoberto do planeta e rotas de navegação que mudam o comércio global.",
        line1: "A GUERRA DO GELO",
        line2: "A DORSAL DE LOMONOSOV",
        line3: "E O POLO NORTE",
        emoji: "🧊",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and tilting down into the white ice cap of the Arctic Ocean centered on 90°N.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "A GUERRA DO GELO"
Line 2 (intense crimson red #E50914): "A DORSAL DE LOMONOSOV"
Line 3 (pure white): "E O POLO NORTE"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🧊.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "A Dorsal de Lomonosov Cortando o Polo Norte",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetric 3D cross-section revealing the submerged Lomonosov Ridge rising 3,000 meters above the abyss floor.
Text on screen: "DORSAL DE LOMONOSOV // 1.800 KM DE CORDILHEIRA SUBMERSA" in uppercase white Tahoma Bold.
Badge: "UMA PONTE GEOLÓGICA ENTRE A SIBÉRIA E A GROENLÂNDIA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Artigo 76 da Convenção do Mar (UNCLOS)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic maritime boundary graphic showing the extension from 200 nautical miles out to 350 nautical miles.
Text on screen: "ARTIGO 76 // EXTENSÃO DA PLATAFORMA CONTINENTAL" in uppercase white Tahoma Bold.
Badge: "DIREITO EXCLUSIVO SOBRE O LEITO MARINHO E MINERAIS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Bandeira Russa de Titânio a 4.261 Metros (2007)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Underwater 3D recreation of the Mir-1 submersible robotic arm planting a titanium Russian flag on the North Pole seabed.
Text on screen: "EXPEDIÇÃO ARKTIKA 2007 // MIR-1 NO FUNDO DO POLO NORTE" in uppercase white Tahoma Bold.
Badge: "BANDEIRA DE TITÂNIO CRAVADA A 4.261 METROS DE PROFUNDIDADE" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Reivindicação da Dinamarca e Groenlândia (2014)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Polar map projection highlighting the Danish claim extending 895,000 km² from northern Greenland to the North Pole.
Text on screen: "REINO DA DINAMARCA // 895.000 KM² REIVINDICADOS" in uppercase white Tahoma Bold.
Badge: "A ALEGAÇÃO DE CONTINUIDADE DA PLATAFORMA GROENLANDESA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Dossiê Canadense e a Ilha Ellesmere (2019)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot from Ellesmere Island in Nunavut projecting the Canadian 1.2 million km² Arctic claim.
Text on screen: "CANADÁ // 1,2 MILHÃO DE KM² SUBMETIDOS À ONU" in uppercase white Tahoma Bold.
Badge: "TRÊS POTÊNCIAS DISPUTANDO O MESMO VÉRTICE POLAR" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "As Riquezas de Petróleo e Gás Natural (USGS)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Subsurface geological heat map showing vast undiscovered hydrocarbon pockets beneath the Arctic shelf.
Text on screen: "RECURSOS ÁRTICOS // 30% DO GÁS NATURAL DO PLANETA" in uppercase white Tahoma Bold.
Badge: "90 BILHÕES DE BARRIS DE PETRÓLEO SOB A CALOTA POLAR" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Rota do Mar do Norte e o Degelo Polar",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Maritime shipping lanes comparison showing the Arctic Northern Sea Route versus the classic Suez Canal route.
Text on screen: "ROTA DO MAR DO NORTE // 40% MAIS RÁPIDA QUE SUEZ" in uppercase white Tahoma Bold.
Badge: "O DEGELO HISTÓRICO REVOLUCIONANDO A LOGÍSTICA MARÍTIMA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Bases Militares e Quebra-Gelos Nucleares",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Arctic military bases (Trevo do Ártico em Franz Josef Land) and nuclear icebreaker patrols.
Text on screen: "MILITARIZAÇÃO DO GELO // BASES E QUEBRA-GELOS ATÔMICOS" in uppercase white Tahoma Bold.
Badge: "A OTAN E A RÚSSIA EM PRONTIDÃO DE ALERTA NO ÁRTICO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Territorial",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global orthographic polar projection showing the overlapping colored claims converging exactly on 90°N.
Text on screen: "A DISPUTA DO ÁRTICO // QUEM É O DONO DO POLO NORTE?" in uppercase white Tahoma Bold.
Badge: "A ÚLTIMA GRANDE FRONTEIRA TERRITORIAL NÃO DELIMITADA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 111,
        titulo: "Por Que Índia e Paquistão Lutam Há Quarenta Anos Pelo Controle de Uma Geleira Congelada a Seis Mil Metros de Altitude?",
        roteiro: "Por que Índia e Paquistão mantêm uma guerra de quarenta anos pelo controle de uma geleira congelada a seis mil metros de altitude? No topo do Himalaia, entre fendas de gelo e ventos de cento e sessenta quilômetros por hora, a Geleira de Siachen é o campo de batalha militar mais alto do planeta. Tudo começou em 1949, quando os negociadores de fronteira pararam de desenhar a linha no marco NJ9842 e escreveram vagamente 'daí para o norte até os glaciares'. Em abril de 1984, a Índia lançou a Operação Meghdoot, pousando soldados de helicóptero no cume de passos de montanha horas antes dos paquistaneses. A seis mil metros, sob temperaturas de cinquenta graus negativos, o oxigênio cai pela metade e mais de oitenta por cento dos soldados morrem por edemas pulmonares e avalanches. Uma batalha onde a geografia física é o inimigo mais implacável.",
        line1: "O TETO DO MUNDO",
        line2: "A GELEIRA DE SIACHEN",
        line3: "A 6.000 METROS",
        emoji: "🏔️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Karakoram Range on the jagged northern border between India and Pakistan.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "O TETO DO MUNDO"
Line 2 (intense crimson red #E50914): "A GELEIRA DE SIACHEN"
Line 3 (pure white): "A 6.000 METROS"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🏔️.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "O Marco NJ9842 e o Vazio Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical military map animation highlighting the Line of Control terminating abruptly at coordinate point NJ9842.
Text on screen: "PONTO NJ9842 // O FIM DA LINHA DEMARCADA EM 1949" in uppercase white Tahoma Bold.
Badge: "O VAZIO CARTOGRÁFICO QUE DEFLAGROU UMA GUERRA NAS NUVENS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Geleira de Siachen (76 km de Gelo)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view tracking along the 76-kilometer icy tongue of Siachen Glacier flanked by Saltoro Ridge.
Text on screen: "GELEIRA DE SIACHEN // 76 KM DE EXTENSÃO GLACIAL" in uppercase white Tahoma Bold.
Badge: "O MAIOR GLACIAR FORA DAS REGIÕES POLARES DA TERRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Operação Meghdoot (13 de Abril de 1984)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D assault animation showing Indian Air Force helicopters landing mountain troops on Sia La and Bilafond La passes.
Text on screen: "OPERAÇÃO MEGHDOOT (1984) // ASSALTO AEROTRANSPORTADO" in uppercase white Tahoma Bold.
Badge: "A ÍNDIA ANTECIPA O EXÉRCITO PAQUISTANÊS E OCUPA OS PASSOS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Altitude Extrema de 6.400 Metros",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Terrain cross-section displaying altitude meters scaling past 5.000m up to 6.450m on Bana Top.
Text on screen: "6.450 METROS // POSTOS MILITARES PERMANENTES" in uppercase white Tahoma Bold.
Badge: "METADE DO OXIGÊNIO DO NÍVEL DO MAR E VENTOS DE 160 KM/H" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Inimigo Invisível: O Clima a -50°C",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Snowstorm satellite overlay showcasing extreme Himalayan weather and ice avalanches tearing down cliffs.
Text on screen: "TEMPERATURAS DE -50°C // O CLIMA É O MAIOR INIMIGO" in uppercase white Tahoma Bold.
Badge: "80% DAS BAIXAS CAUSADAS POR EDEMA PULMONAR E CONGELAMENTO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Tragédia de Gayari (2012)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Gayari military sector where a colossal ice wall collapsed over the Pakistani garrison.
Text on screen: "TRAGÉDIA DE GAYARI (2012) // 140 SOLDADOS SOTERRADOS" in uppercase white Tahoma Bold.
Badge: "AVALANCHE MONUMENTAL DE ROCHA E GELO A 4.000 METROS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Triângulo Estratégico com a China",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical geopolitical map highlighting Siachen as the barrier preventing the linkup of Pakistan with Chinese Aksai Chin.
Text on screen: "CRISTA DE SALTORO // A BARREIRA CONTRA A CHINA" in uppercase white Tahoma Bold.
Badge: "PROTEÇÃO DO VALE DE LADAKH E DA RODOVIA DO KARAKORAM" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Logística Aérea e Custo de US$ 1 Milhão por Dia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical supply line animation tracking helicopter flights carrying kerosene, rations, and oxygen canisters.
Text on screen: "CUSTO DIÁRIO // US$ 1 MILHÃO PARA MANTER A GELEIRA" in uppercase white Tahoma Bold.
Badge: "CADA QUILO DE SUPRIMENTO CUSTA UMA FORTUNA LOGÍSTICA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Territorial",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Panoramic orbital ascent pulling back from the icy summits of Karakoram, showing the frozen standoff enduring since 1984.
Text on screen: "SIACHEN // O CAMPO DE BATALHA MAIS ALTO DO PLANETA" in uppercase white Tahoma Bold.
Badge: "QUATRO DÉCADAS DE DISPUTA CONGELADA NO TETO DO MUNDO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 112,
        titulo: "Como Uma Faixa Estreita de Quatorze Quilômetros de Areia Tornou-se o Ponto Mais Tenso do Oriente Médio?",
        roteiro: "Como uma faixa estreita de apenas quatorze quilômetros de areia tornou-se o ponto mais perigoso e tenso de todo o Oriente Médio? Entre o Mar Mediterrâneo e a tríplice fronteira de Kerem Shalom, o Corredor de Philadelphi separa o deserto egípcio do Sinai do sul da Faixa de Gaza. Criado pelo tratado de paz histórico de Camp David em 1979 entre Egito e Israel, o corredor foi desenhado como uma zona neutra de cem metros de largura para impedir o contrabando de armas. Em 2005, o Protocolo de Filadélfia autorizou o Egito a posicionar setecentos e cinquenta guardas de fronteira leves. Mas sob as dunas de Rafah, uma malha clandestina de túneis subterrâneos transformou este gargalo no epicentro de atritos bélicos e diplomáticos que decidem a paz e a guerra na região.",
        line1: "A FRONTEIRA DE AREIA",
        line2: "CORREDOR DE PHILADELPHI",
        line3: "A DIVISA EGITO-GAZA",
        emoji: "🚧",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the narrow border strip between the Sinai Desert and the Gaza Strip.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "A FRONTEIRA DE AREIA"
Line 2 (intense crimson red #E50914): "CORREDOR DE PHILADELPHI"
Line 3 (pure white): "A DIVISA EGITO-GAZA"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🚧.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "A Extensão de 14 km Entre o Mar e Kerem Shalom",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot tracing the yellow border line along the 14-kilometer Philadelphi Corridor from the Mediterranean coast.
Text on screen: "CORREDOR DE PHILADELPHI // 14 KM DE EXTENSÃO" in uppercase white Tahoma Bold.
Badge: "A FAIXA DE SEGURANÇA QUE SEPARA GAZA DO DESERTO DO SINAI" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Tratado de Paz Egito-Israel (Camp David 1979)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical diplomatic map showing the demilitarized Zones A, B, C, and D established in the 1979 peace treaty.
Text on screen: "ACORDOS DE CAMP DAVID (1979) // ZONA DE AMORTECIMENTO" in uppercase white Tahoma Bold.
Badge: "DEVOLUÇÃO DO SINAI E DESMILITARIZAÇÃO DA LINHA DE FRONTEIRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Divisão da Cidade de Rafah em 1982",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the divided city of Rafah, split in two by concrete border walls and patrol roads.
Text on screen: "RAFAH DIVIDIDA (1982) // UMA CIDADE CORTADA AO MEIO" in uppercase white Tahoma Bold.
Badge: "MUROS E ARAME FARPADO SEPARANDO BAIRROS E FAMÍLIAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Protocolo de Filadélfia de 2005",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map depicting the deployment of 750 Egyptian Border Guards (Haras el-Hodoud) following the Israeli disengagement.
Text on screen: "PROTOCOLO DE 2005 // 750 GUARDAS DE FRONTEIRA EGÍPCIOS" in uppercase white Tahoma Bold.
Badge: "ADITAMENTO MILITAR PARA PATRULHA LEVE E COMBATE AO CONTRABANDO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Terminal Internacional de Rafah",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital zoom into the Rafah border crossing gates, showing inspection lanes and humanitarian supply trucks.
Text on screen: "POSTO DE RAFAH // A ÚNICA PORTA SEM FRONTEIRA COM ISRAEL" in uppercase white Tahoma Bold.
Badge: "O CORDÃO UMBILICAL HUMANITÁRIO PARA DOIS MILHÕES DE CIVIS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Geologia das Areias e os Túneis Clandestinos",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D underground cutaway showing clandestine tunnels crossing 20 meters below the Philadelphi Corridor border line.
Text on screen: "MALHA SUBTERRÂNEA // TÚNEIS DE CONTRABANDO SOB A AREIA" in uppercase white Tahoma Bold.
Badge: "ROTAS SECRETAS DE ARMAS, COMBUSTÍVEL E INSUMOS BÉLICOS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "As Operações Egípcias de Inundação (2015)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking of seawater pipelines pumped from the Mediterranean to collapse underground tunnel shafts.
Text on screen: "INUNDAÇÃO COM ÁGUA DO MAR // EGITO COMBATE TÚNEIS" in uppercase white Tahoma Bold.
Badge: "CRIAÇÃO DE UMA ZONA TAMPÃO EXPANDIDA NA RAFAH EGÍPCIA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Ocupação Militar de 2024 e o Impasse Diplomático",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical satellite animation of armored vehicle columns along the Philadelphi axis, with diplomatic tension vectors to Cairo.
Text on screen: "MAIO DE 2024 // ASSUNÇÃO DO CONTROLE FÍSICO PELAS FDI" in uppercase white Tahoma Bold.
Badge: "O MAIOR PONTO DE ATRITO DIPLOMÁTICO ENTRE EGITO E ISRAEL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Territorial",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Panoramic orbital ascent over the Sinai-Gaza frontier, showing the glowing 14 km line dividing the geopolitical chessboard.
Text on screen: "CORREDOR DE PHILADELPHI // O DESTINO DO ORIENTE MÉDIO" in uppercase white Tahoma Bold.
Badge: "QUATORZE QUILÔMETROS QUE DECIDEM A PAZ E A GUERRA NA REGIÃO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 113,
        titulo: "Como Uma Faixa de Vinte Quilômetros de Litoral Cortou a Croácia em Duas Partes e Isolou Dubrovnik?",
        roteiro: "Como uma faixa estreita de apenas vinte quilômetros de litoral cortou a Croácia em duas partes e isolou a famosa cidade de Dubrovnik por mais de trezentos anos? No século dezessete, a rica República marítima de Ragusa temia ser invadida por sua maior rival, Veneza. Para criar um escudo protetor no Tratado de Karlowitz de 1699, Ragusa cedeu a faixa costeira de Neum ao Império Otomano. Séculos depois, a Iugoslávia de Tito manteve Neum com a Bósnia para dar-lhe saída para o mar. Com o fim do comunismo, a Croácia ficou partida em duas: ir a Dubrovnik exigia cruzar duas alfândegas em menos de dez quilômetros. Em 2022, a Croácia inaugurou a impressionante Ponte de Pelješac, uma obra de quatrocentos milhões de euros sobre o Adriático que unificou o país sem tocar o solo bósnio.",
        line1: "O ENCLAVE COSTEIRO",
        line2: "O CORREDOR DE NEUM",
        line3: "E A PONTE DE PELJEŠAC",
        emoji: "🌉",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Adriatic coastline of Dalmatia, highlighting the Neum wedge.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "O ENCLAVE COSTEIRO"
Line 2 (intense crimson red #E50914): "O CORREDOR DE NEUM"
Line 3 (pure white): "E A PONTE DE PELJEŠAC"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌉.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "A Fenda de Neum Cortando a Croácia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital flyover over the 21.2 km corridor of Neum belonging to Bosnia and Herzegovina, cleanly severing Croatian Dalmatia.
Text on screen: "CORREDOR DE NEUM // 21,2 KM DE LITORAL BÓSNIO" in uppercase white Tahoma Bold.
Badge: "A ANOMALIA CARTOGRÁFICA QUE FATIOU A DALMÁCIA CROATA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A República de Ragusa e o Tratado de Karlowitz (1699)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical diplomatic animation showing the Republic of Ragusa ceding Neum to the Ottoman Empire as a buffer against Venice.
Text on screen: "TRATADO DE KARLOWITZ (1699) // A DIPLOMACIA DE RAGUSA" in uppercase white Tahoma Bold.
Badge: "CESSÃO DE TERRA AO SULTÃO PARA BLOQUEAR O AVANÇO VENEZIANO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Iugoslávia e a Fronteira Interna da Bósnia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cold war cartography of the Yugoslav Federation under Tito, showing Neum assigned to the Bosnian Republic.
Text on screen: "IUGOSLÁVIA DE TITO // A JANELA MARÍTIMA DE SARAJEVO" in uppercase white Tahoma Bold.
Badge: "AS FRONTEIRAS INTERNAS QUE VIRARAM LIMITES INTERNACIONAIS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Dubrovnik Como Exclave Prático da Croácia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the medieval walled fortress city of Dubrovnik isolated at the southern tip.
Text on screen: "DUBROVNIK ISOLADA // A PÉROLA DO ADRIÁTICO EM XEQUE" in uppercase white Tahoma Bold.
Badge: "O EXCLAVE TURÍSTICO SEPARADO DO RESTO DO TERRITÓRIO NACIONAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Pesadelo da Dupla Alfândega de Schengen",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Road telemetry map illustrating the double border checkpoint bottleneck across the 9 km transit highway.
Text on screen: "DUPLA ALFÂNDEGA // SAIR DA CROÁCIA E REENTRAR NA CROÁCIA" in uppercase white Tahoma Bold.
Badge: "FILAS QUILOMÉTRICAS SOB EXIGÊNCIAS BIOMÉTRICAS DA UNIÃO EUROPEIA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Solução: A Monumental Ponte de Pelješac",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D architectural rendering and satellite flyby of the 2,404-meter cable-stayed Pelješac Bridge over Mali Ston Bay.
Text on screen: "PONTE DE PELJEŠAC (2.404 M) // ENGARAVITANDO O MAR" in uppercase white Tahoma Bold.
Badge: "OBRA DE 420 MILHÕES DE EUROS FINANCIADA EM 85% PELA UE" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Gabarito Náutico de 55 Metros de Vão Livre",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Side elevation animation demonstrating the 55-meter vertical clearance allowing large vessels to reach Bosnian waters.
Text on screen: "55 METROS DE ALTURA // LIVRE TRÂNSITO NÁUTICO" in uppercase white Tahoma Bold.
Badge: "GARANTIA DE NAVEGAÇÃO INTERNACIONAL PARA AS ÁGUAS DE NEUM" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Unificação Territorial da Croácia (Julho de 2022)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Traffic flow animation over the illuminated bridge connecting Komarna directly to the Pelješac Peninsula.
Text on screen: "26 DE JULHO DE 2022 // A CROÁCIA UNIFICADA POR TERRA" in uppercase white Tahoma Bold.
Badge: "FIM DE MAIS DE 300 ANOS DE SEPARAÇÃO TERRITORIAL CONTINENTAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Territorial",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital pullback showing the whole Dalmatian coast and Pelješac Bridge glowing on the map, with Neum preserved intact.
Text on screen: "NEUM E PELJEŠAC // COMO A ENGENHARIA VENCEU A FRONTEIRA" in uppercase white Tahoma Bold.
Badge: "O TRIUNFO DA LOGÍSTICA MODERNA SOBRE TRATADOS DO SÉCULO XVII" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 114,
        titulo: "Por Que Mais de Dez Por Cento do Comércio Global Depende de Uma Valeta de Cento e Noventa Quilômetros no Egito?",
        roteiro: "Por que mais de dez por cento de todo o comércio mundial depende de uma valeta artificial de cento e noventa quilômetros escavada no deserto do Egito? Aberto em 1869 por Ferdinand de Lesseps após uma década de obras monumentais, o Canal de Suez revolucionou a navegação ao ligar o Mar Mediterrâneo diretamente ao Mar Vermelho. A rota encurtou em mais de sete mil quilômetros e quinze dias de viagem a ligação entre a Europa e a Ásia, eliminando o perigoso contorno da África. Nacionalizado por Nasser em 1956, o canal provou sua fragilidade física em 2021, quando o porta-contêineres Ever Given encalhou e bloqueou quase dez bilhões de dólares por dia. Uma artéria vital onde qualquer bloqueio dispara o preço do frete, dos alimentos e do combustível em todo o planeta.",
        line1: "A ARTÉRIA DO MUNDO",
        line2: "O CANAL DE SUEZ",
        line3: "E 12% DO COMÉRCIO",
        emoji: "🚢",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Isthmus of Suez between Africa and the Sinai Peninsula.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "A ARTÉRIA DO MUNDO"
Line 2 (intense crimson red #E50914): "O CANAL DE SUEZ"
Line 3 (pure white): "E 12% DO COMÉRCIO"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🚢.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "O Corte no Istmo: 193,3 km de Extensão",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital tracking shot along the straight blue ribbon of the Suez Canal linking Port Said to Port Tewfik in Suez.
Text on screen: "CANAL DE SUEZ // 193,3 KM DE CORTE NO DESERTO" in uppercase white Tahoma Bold.
Badge: "A MAIOR VIA ARTIFICIAL AO NÍVEL DO MAR DO PLANETA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Economia de 7.000 km em Relação à África",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global maritime route comparison animating the route through Suez versus the long detour around the Cape of Good Hope.
Text on screen: "ECONOMIA DE 7.000 KM // 15 DIAS A MENOS DE NAVEGAÇÃO" in uppercase white Tahoma Bold.
Badge: "LONDRES A BOMBAIM SEM CONTORNAR O CONTINENTE AFRICANO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Construção por Lesseps e Inauguração em 1869",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical engineering overlay showing the excavation works of Ferdinand de Lesseps and the royal opening armada.
Text on screen: "17 DE NOVEMBRO DE 1869 // A INAUGURAÇÃO DE SUEZ" in uppercase white Tahoma Bold.
Badge: "UMA DÉCADA DE OBRAS COM MAIS DE UM MILHÃO DE TRABALHADORES" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Nacionalização de Nasser e a Crise de 1956",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical tactical map showing the British, French, and Israeli tripartite invasion and Egypt's sovereign takeover.
Text on screen: "26 DE JULHO DE 1956 // NASSER NACIONALIZA O CANAL" in uppercase white Tahoma Bold.
Badge: "O FIM DA ERA COLONIAL EUROPEIA NO ORIENTE MÉDIO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Encalhe do Ever Given em Março de 2021",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite close-up of the 400-meter container ship Ever Given wedged diagonally across the canal banks.
Text on screen: "EVER GIVEN (MARÇO DE 2021) // O MUNDO EM PARALISIA" in uppercase white Tahoma Bold.
Badge: "BLOQUEIO DE SEIS DIAS RETENDO 400 NAVIOS E BILHÕES DE DÓLARES" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Custo Global de US$ 9,6 Bilhões por Dia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Financial telemetry infographic tracking supply chain disruption and container freight rates spiking globally.
Text on screen: "US$ 400 MILHÕES POR HORA // O CUSTO DA PARALISIA" in uppercase white Tahoma Bold.
Badge: "A EXPOSIÇÃO DA EXTREMA FRAGILIDADE DAS CADEIAS LOGÍSTICAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Crise do Mar Vermelho e o Desvio para o Cabo (2024–2026)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic map showing missile strikes in Bab el-Mandeb diverting giant container ships back to South Africa.
Text on screen: "CRISE DO MAR VERMELHO // FROTAS RETORNAM AO CABO" in uppercase white Tahoma Bold.
Badge: "MAERSK, MSC E GIGANTES NAVAIS EVITANDO SUEZ SOB TENSÃO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Peso Financeiro de US$ 9 Bilhões Para o Egito",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Economic data graphic showing the Suez Canal Authority revenues as the core foreign currency pillar of Cairo.
Text on screen: "US$ 9 BILHÕES/ANO // A RECEITA DO TESOURO EGÍPCIO" in uppercase white Tahoma Bold.
Badge: "O PILAR DE DÓLARES QUE FINANCIA A ECONOMIA NACIONAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Geopolítico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Panoramic orbital ascent over the Sinai Peninsula and Suez Canal illuminated against the twilight curve of the Earth.
Text on screen: "CANAL DE SUEZ // O CHOKEPOINT MAIS VITAL DO MUNDO" in uppercase white Tahoma Bold.
Badge: "A VALETA DE 193 KM QUE FAZ A CIVILIZAÇÃO GLOBAL GIRAR" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 115,
        titulo: "Como o Maior Exportador de Petróleo do Mundo Usa Um Fundo Soberano de Quase Um Trilhão de Dólares Para Sobreviver ao Fim da Era Fóssil?",
        roteiro: "Como o maior exportador de petróleo do planeta está usando um fundo soberano de quase um trilhão de dólares para sobreviver ao fim da era fóssil? No coração do Golfo Pérsico, a Arábia Saudita reina sobre o Campo de Ghawar, a maior reserva terrestre de óleo cru do mundo com custos de extração abaixo de três dólares por barril. Mas ciente de que o avanço dos veículos elétricos e da energia limpa pode sufocar seu modelo econômico, Riad deflagrou o plano Visão 2030. Através do Fundo de Investimento Público, os sauditas já investem mais de novecentos bilhões de dólares em gigantes de tecnologia, inteligência artificial e megaprojetos no deserto como NEOM e a cidade linear The Line. Ao mesmo tempo, mapeiam dois trilhões e meio de dólares em minerais críticos e terras raras no Escudo Árabe. Uma corrida contra o tempo para comprar o futuro com petrodólares.",
        line1: "O REINO DO PETRÓLEO",
        line2: "A ARÁBIA SAUDITA",
        line3: "E O FUNDO DE US$ 1 TRI",
        emoji: "🛢️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Arabian Peninsula, highlighting the golden desert expanse of Saudi Arabia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "O REINO DO PETRÓLEO"
Line 2 (intense crimson red #E50914): "A ARÁBIA SAUDITA"
Line 3 (pure white): "E O FUNDO DE US$ 1 TRI"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🛢️.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "O Colosso de Ghawar: Maior Campo Terrestre do Mundo",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological subsurface 3D map showing the massive Ghawar oil field stretching 280 km along the Eastern Province.
Text on screen: "CAMPO DE GHAWAR // 280 KM DE COMPRIMENTO" in uppercase white Tahoma Bold.
Badge: "A MAIOR RESERVA TERRESTRE DE CRU COM CUSTO DE US$ 3/BARRIL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Saudi Aramco e a Produção de 10 Milhões de Barris/Dia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Ras Tanura marine export terminals loading supertankers on the Persian Gulf.
Text on screen: "SAUDI ARAMCO // US$ 1,8 TRILHÃO EM MARKET CAP" in uppercase white Tahoma Bold.
Badge: "A MAIOR EXPORTADORA DE PETRÓLEO DO PLANETA TERRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Fundo de Investimento Público (PIF) de US$ 925 Bilhões",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Financial data graphic overlaying the Riyadh skyline, tracking global sovereign assets multiplying across tech and industry.
Text on screen: "FUNDO PIF // US$ 925 BILHÕES SOB GESTÃO" in uppercase white Tahoma Bold.
Badge: "A META OFICIAL DE ALCANÇAR DOIS TRILHÕES ATÉ 2030" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Plano Visão 2030 de Mohammed bin Salman",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical transformation map displaying nationwide infrastructure corridors, solar mega-parks, and high-speed rail.
Text on screen: "SAUDI VISION 2030 // TRANSIÇÃO PÓS-PETRÓLEO" in uppercase white Tahoma Bold.
Badge: "US$ 1,3 TRILHÃO EM INVESTIMENTOS PARA DIVERSIFICAR O REINO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "NEOM e The Line: A Megacidade Linear na Selva de Areia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D architectural masterplan sweep over the 170-kilometer mirrored corridor of The Line along the Red Sea.
Text on screen: "NEOM // CIDADE LINEAR DE 170 KM NO MAR VERMELHO" in uppercase white Tahoma Bold.
Badge: "MEGAPROJETO DE US$ 500 BILHÕES ALIMENTADO A ENERGIA RENOVÁVEL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Os Minerais Críticos do Escudo Árabe (US$ 2,5 Tri)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological mineral survey animation illuminating vast deposits of phosphate, gold, copper, and rare earths in western Arabia.
Text on screen: "ESCUDO ÁRABE // US$ 2,5 TRILHÕES EM MINERAIS" in uppercase white Tahoma Bold.
Badge: "A NOVA FRONTEIRA DE FOSFATO, COBRE E TERRAS RARAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Investimentos em IA, Esportes e Poder Brando",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Montage graphic showing investments in artificial intelligence hubs, LIV Golf, global sports franchises, and gaming.
Text on screen: "SOFT POWER // ESPORTES, IA E TECNOLOGIA GLOBAL" in uppercase white Tahoma Bold.
Badge: "A ESTRATÉGIA GLOBAL DE REPUTAÇÃO E INFLUÊNCIA ECONÔMICA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Adesão ao BRICS e a Diplomacia Multipolar",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic alignment map connecting Riyadh to Beijing, Moscow, and New Delhi, balancing relations with Washington.
Text on screen: "ALIANÇA BRICS // VENDA DE PETRÓLEO EM YUAN" in uppercase white Tahoma Bold.
Badge: "O FIM DA HEGEMONIA EXCLUSIVA DO PETRODÓLAR AMERICANO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Geoeconômico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Orbital pullback showing the glittering lights of Riyadh and the mega-developments rising from the Arabian sands.
Text on screen: "ARÁBIA SAUDITA // COMPRANDO O FUTURO PÓS-PETRÓLEO" in uppercase white Tahoma Bold.
Badge: "A MAIOR METAMORFOSE FINANCEIRA DE UM ESTADO DA TERRA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 116,
        titulo: "Por Que a Península Coreana Permanece Dividida no Paralelo 38 com Mais de Um Milhão de Soldados em Alerta Máximo?",
        roteiro: "Por que a Península Coreana permanece fatiada no paralelo 38 com mais de um milhão e meio de soldados em alerta permanente de combate? A apenas quarenta quilômetros ao norte dos arranha-céus de Seul ergue-se a Zona Desmilitarizada, uma cicatriz fortificada de duzentos e quarenta e oito quilômetros cortada por campos de minas e cercas de arame farpado. Como a Guerra da Coreia terminou em 1953 com um simples armistício e nenhum tratado formal de paz, o Norte e o Sul continuam tecnicamente em guerra. Do outro lado da linha, dez mil peças de artilharia norte-coreana miram a capital sul-coreana. Para se proteger, Seul abriga quase trinta mil soldados dos Estados Unidos e converteu seu cerco geográfico em um império bélico que hoje exporta tanques e artilharia pesada para armar todo o flanco leste da OTAN.",
        line1: "A FRONTEIRA EM GUERRA",
        line2: "A DMZ COREANA",
        line3: "NO PARALELO 38",
        emoji: "🎖️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the 38th parallel cutting the Korean Peninsula between Seoul and Pyongyang.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "A FRONTEIRA EM GUERRA"
Line 2 (intense crimson red #E50914): "A DMZ COREANA"
Line 3 (pure white): "NO PARALELO 38"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🎖️.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "A Zona Desmilitarizada (248 km de Trincheiras)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite tracking shot sweeping along the 248 km DMZ strip lined with guard towers, electric fences, and minefields.
Text on screen: "ZONA DESMILITARIZADA (DMZ) // 248 KM DE EXTENSÃO" in uppercase white Tahoma Bold.
Badge: "A FRONTEIRA MAIS MILITARIZADA E VIGIADA DO PLANETA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Armistício de Panmunjom de 1953",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical archive projection over the blue huts of the Joint Security Area (JSA) in Panmunjom.
Text on screen: "ARMISTÍCIO DE 1953 // SETE DÉCADAS SEM TRATADO DE PAZ" in uppercase white Tahoma Bold.
Badge: "AS DUAS COREIAS PERMANECEM EM GUERRA FORMAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Vulnerabilidade de Seul: Apenas 40 km da Linha",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Range ring telemetry measuring the short 40-kilometer distance from the DMZ straight into central Seoul skyscrapers.
Text on screen: "SEUL A 40 KM // 26 MILHÕES DE HABITANTES SOB ALCANCE" in uppercase white Tahoma Bold.
Badge: "A CAPITAL MAIS VULNERÁVEL A SATURAÇÃO DE ARTILHARIA DO MUNDO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "As Dez Mil Peças de Artilharia do Norte",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical mountain cross-section showing fortified North Korean hardened artillery sites (HARTS) dug into granite cliffs.
Text on screen: "10.000 CANHÕES // BATERIAS ENTRENCHEIRADAS NAS MONTANHAS" in uppercase white Tahoma Bold.
Badge: "CAPACIDADE DE DISPARAR 500 MIL SALVAS NAS PRIMEIRAS HORAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "As Forças dos EUA e o Campo Humphreys",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Camp Humphreys in Pyeongtaek, showing hangars, airfields, and command complexes.
Text on screen: "CAMP HUMPHREYS // 28.500 SOLDADOS NORTE-AMERICANOS" in uppercase white Tahoma Bold.
Badge: "A MAIOR BASE MILITAR ULTRAMARINA DOS EUA NO MUNDO" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Linha Limite do Norte (NLL) no Mar Amarelo",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Maritime border map illustrating the jagged Northern Limit Line encircling Baengnyeong and Yeonpyeong islands.
Text on screen: "LINHA NLL // A DISPUTA NAVAL DO MAR AMARELO" in uppercase white Tahoma Bold.
Badge: "ÁREA DE CHOQUES LETAIS E AFUNDAMENTO DE EMBARCAÇÕES" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Indústria K-Defense: O Arsenal da Coreia",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Industrial assembly graphic displaying K2 Black Panther tanks, K9 Thunder howitzers, and FA-50 fighter jets.
Text on screen: "K-DEFENSE // US$ 15+ BILHÕES EM EXPORTAÇÕES BÉLICAS" in uppercase white Tahoma Bold.
Badge: "A TRANSFORMAÇÃO DA VULNERABILIDADE EM INDÚSTRIA DE ARMAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Rearmamento do Flanco Leste da OTAN",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global supply route connecting South Korean ports to Poland and European NATO allies delivering hundreds of tanks.
Text on screen: "POLÔNIA E OTAN // BLINDADOS SUL-COREANOS NA EUROPA" in uppercase white Tahoma Bold.
Badge: "SEUL ARMA O FLANCO LESTE EUROPEU COM VELOCIDADE IMBATÍVEL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Geopolítico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Panoramic orbital ascent over the Korean Peninsula at night, contrasting Seoul's brilliant sea of lights with the dark North.
Text on screen: "A PENÍNSULA COREANA // O EQUILÍBRIO DA DISSUASÃO ARMADA" in uppercase white Tahoma Bold.
Badge: "A DIVISÃO DO PARALELO 38 QUE MANTÉM O MUNDO EM ALERTA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    },
    {
        num: 117,
        titulo: "Como Três Partilhas Apagaram a Polônia do Mapa por Mais de Um Século Antes de Seu Renascimento Territorial?",
        roteiro: "Como três partilhas sucessivas apagaram a Polônia inteira do mapa mundial por mais de um século antes de seu renascimento territorial? No século dezessete, a República das Duas Nações era a maior potência da Europa continental, estendendo-se por quase um milhão de quilômetros quadrados do Mar Báltico até as portas do Mar Negro. Mas sem barreiras de montanhas para defendê-la, o país foi vítima de três conspirações imperialistas entre Rússia, Prússia e Áustria. Em 1795, a Terceira Partilha extinguiu o Estado polonês e proibiu seu próprio nome dos tratados. Foram cento e vinte e três anos sem soberania até o renascimento em Versalhes em 1918. Invadida por Hitler e Stalin em 1939, a Polônia ressurgiu em 1945 na Conferência de Potsdam, quando os aliados literalmente empurraram suas fronteiras duzentos quilômetros para o oeste.",
        line1: "A SAGA DE UMA NAÇÃO",
        line2: "O MAPA DA POLÔNIA",
        line3: "APAGADO POR 123 ANOS",
        emoji: "🦅",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the plains of Central Europe between the Oder and Vistula rivers.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.
Line 1 (pure white): "A SAGA DE UMA NAÇÃO"
Line 2 (intense crimson red #E50914): "O MAPA DA POLÔNIA"
Line 3 (pure white): "APAGADO POR 123 ANOS"
Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🦅.
Camera motion: smooth, slow, linear orthographic push-in toward the focal region.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
            },
            {
                titulo: "A República das Duas Nações em 1619 (990.000 km²)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical cartography recreation showing the immense Polish-Lithuanian Commonwealth stretching from the Baltic Sea to Ukraine.
Text on screen: "UNIÃO DE LUBLIN (1569) // 990.000 KM² DE EXTENSÃO" in uppercase white Tahoma Bold.
Badge: "A MAIOR POTÊNCIA TERRITORIAL DA EUROPA CENTRAL MEDIEVAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Primeira e Segunda Partilhas (1772 e 1793)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Vector border erosion animation showing Russia, Prussia, and Austria tearing away provinces from the Polish Commonwealth.
Text on screen: "1772 E 1793 // AS PRIMEIRAS PARTILHAS IMPERIAIS" in uppercase white Tahoma Bold.
Badge: "O RETALHAMENTO DE UMA NAÇÃO PELAS POTÊNCIAS VIZINHAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Terceira Partilha e o Apagamento de 1795",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map dissolve animation extinguishing the borders and the name of Poland, replaced entirely by Russian, Prussian, and Austrian colors.
Text on screen: "24 DE OUTUBRO DE 1795 // A POLÔNIA APAGADA DO MAPA" in uppercase white Tahoma Bold.
Badge: "123 ANOS SEM UM ESTADO POLONÊS NO ATLAS MUNDIAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Renascimento em Versalhes (1918–1919)",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Post-World War I cartography showing Józef Piłsudski and the rebirth of the Second Polish Republic with the Polish Corridor to Danzig.
Text on screen: "11 DE NOVEMBRO DE 1918 // O RENASCIMENTO EM VERSALHES" in uppercase white Tahoma Bold.
Badge: "A SEGUNDA REPÚBLICA POLONESA RESSURGE DAS CINZAS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "O Pacto Ribbentrop-Molotov e a Invasão de 1939",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map depicting the German blitzkrieg from the west and Soviet invasion from the east slicing Poland along the Bug River.
Text on screen: "SETEMBRO DE 1939 // A QUARTA PARTILHA MILITAR" in uppercase white Tahoma Bold.
Badge: "O PACTO SECRETO QUE DEFLAGROU A SEGUNDA GUERRA MUNDIAL" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Conferência de Potsdam de 1945: O País que Andou",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dynamic cartographic shift animation showing the entire Polish territory moving 200 km to the west.
Text on screen: "POTSDAM (1945) // O PAÍS QUE ANDOU 200 KM NO MAPA" in uppercase white Tahoma Bold.
Badge: "A URSS ANEXA O LESTE E COMPENSA A POLÔNIA COM TERRAS ALEMÃS" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Linha Curzon e a Linha Oder-Neisse",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Glowing vector telemetries fixing the Curzon Line on the east and the Oder-Neisse Line on the west with Germany.
Text on screen: "ODER-NEISSE // A NOVA FRONTEIRA OCIDENTAL POLONESA" in uppercase white Tahoma Bold.
Badge: "RATIFICAÇÃO DE JURE DEFINITIVA FIRMADA EM 1990" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "A Polônia Moderna: 312.696 km² no Centro da Europa",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of contemporary Poland, highlighting modern industrial hubs, motorways, and Baltic ports.
Text on screen: "POLÔNIA MODERNA // 312.696 KM² DE TERRITÓRIO COESO" in uppercase white Tahoma Bold.
Badge: "O 9º MAIOR PAÍS DA EUROPA E PILAR ESTRATÉGICO DA OTAN" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            },
            {
                titulo: "Fechamento e Resumo Histórico",
                desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global orbital pullback showing Poland shining steadily in the heart of Europe against the dark backdrop of history.
Text on screen: "POLÔNIA // A NAÇÃO QUE NUNCA PERECEU NO MAPA" in uppercase white Tahoma Bold.
Badge: "O MAIOR TRIUNFO DE RESILIÊNCIA TERRITORIAL DA EUROPA" in intense amber or crimson red (#E50914).
Camera: dynamic linear satellite tracking shot along the geographic feature.
NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.`
            }
        ]
    }
];

console.log("=================================================");
console.log("INICIANDO GERAÇÃO DOS ROTEIROS DE VÍDEO (108 A 117)");
console.log("=================================================");

for (const v of videosData) {
    const filename = `Video ${v.num}.md`;
    const filepath = path.join(roteirosDir, filename);

    let content = `# Video ${v.num} — ${v.titulo}\n\n`;
    content += `### 1. Roteiro\n\n`;
    content += `${v.roteiro}\n\n`;
    content += `---\n\n`;
    content += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

    v.prompts.forEach((p, idx) => {
        content += `#### Prompt ${idx + 1} — ${p.titulo} (4s)\n`;
        content += `\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
    });

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ [ROTEIRO OK] ${filename} — ${v.titulo}`);
}

console.log("\nTodos os 10 roteiros de vídeo foram gerados com sucesso!");
