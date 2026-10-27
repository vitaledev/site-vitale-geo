const fs = require('fs');
const path = require('path');

const roteirosDir = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

if (!fs.existsSync(roteirosDir)) {
    fs.mkdirSync(roteirosDir, { recursive: true });
}

const videosData = [
    {
        num: 98,
        titulo: "Como Nove Séculos de Guerras e Tratados Fizeram de Portugal o País com as Fronteiras Mais Antigas da Europa?",
        roteiro: "Como nove séculos de guerras, diplomacia papal e tratados ultramarinos fizeram de Portugal o país com as fronteiras mais antigas e estáveis de toda a Europa? Enquanto a maior parte das fronteiras do continente europeu foi fragmentada, redesenhada e movida dezenas de vezes ao longo do último milênio, a linha terrestre entre Portugal e a Espanha — conhecida como A Raia — permanece praticamente inalterada há mais de setecentos anos. A independência começou no granito de Guimarães em 1128 com Afonso Henriques e foi reconhecida no Tratado de Zamora em 1143. Em 1297, o rei Dom Dinis e Fernando IV de Castela assinaram o histórico Tratado de Alcanizes, fixando com precisão os 1.214 quilômetros da Raia. Confinado pelo mar, Portugal dividiu o planeta no Tratado de Tordesilhas em 1494 e resistiu à Guerra da Restauração em 1640. Uma história territorial contínua gravada na pedra de castelos medievais.",
        line1: "NOVE SÉCULOS",
        line2: "A FRONTEIRA MAIS ANTIGA",
        line3: "DE TODA A EUROPA",
        emoji: "🏰",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Iberian Peninsula, highlighting the Atlantic silhouette of Portugal.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"NOVE SÉCULOS\"\nLine 2 (intense crimson red #E50914): \"A FRONTEIRA MAIS ANTIGA\"\nLine 3 (pure white): \"DE TODA A EUROPA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🏰.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "A Península Ibérica e a Linha da Raia",
                desc: "Satellite flyover over the 1,214 km border line separating Portugal from Spain, illuminated with glowing golden vector telemetry.\nText on screen: \"A RAIA // 1.214 KM DE FRONTEIRA TERRESTRE CONTÍNUA\" in uppercase white Tahoma Bold.\nBadge: \"A MAIS LONGEVA E ESTÁVEL LINHA DE FRONTEIRA DA EUROPA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Condado Portucalense e Guimarães (1128)",
                desc: "High-resolution 3D topography of northern Portugal between the Minho and Douro rivers, focusing on the Castle of Guimarães.\nText on screen: \"BATALHA DE SÃO MAMEDE (1128) // BERÇO DE PORTUGAL\" in uppercase white Tahoma Bold.\nBadge: \"AFONSO HENRIQUES ASSUME O COMANDO DO CONDADO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tratado de Zamora e a Bula Papal (1143–1179)",
                desc: "Diplomatic historical cartography recreating the medieval border of Zamora, showing papal seal Manifestis Probatum radiating from Rome.\nText on screen: \"TRATADO DE ZAMORA (1143) // NASCE O REINO DE PORTUGAL\" in uppercase white Tahoma Bold.\nBadge: \"PAPA ALEXANDRE III RECONHECE A SOBERANIA LUSITANA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Conquista do Algarve (1249)",
                desc: "Satellite tactical sweep descending into the southern coast of Algarve, showing the expansion of Christian borders to Faro and Sagres.\nText on screen: \"RECONQUISTA DO ALGARVE // DOM AFONSO III (1249)\" in uppercase white Tahoma Bold.\nBadge: \"PORTUGAL ALCANÇA SEUS LIMITES ATLÂNTICOS CONTINENTAIS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tratado de Alcanizes (1297)",
                desc: "Crisp vector border animation sealing the line of castles along Riba-Côa, Almeida, Sabugal and Campo Maior.\nText on screen: \"TRATADO DE ALCANIZES (1297) // DOM DINIS E CASTELA\" in uppercase white Tahoma Bold.\nBadge: \"A FRONTEIRA MODERNA DEFINIDA COM CIRURGIA CARTOGRÁFICA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tratado de Tordesilhas e o Oceano (1494)",
                desc: "Global 3D orbital perspective showing the Atlantic meridian slicing the Atlantic Ocean at 370 leagues west of Cape Verde.\nText on screen: \"TRATADO DE TORDESILHAS (1494) // A PARTILHA DO MUNDO\" in uppercase white Tahoma Bold.\nBadge: \"PORTUGAL PROJETA SUA FRONTEIRA DO ATLÂNTICO À ÁSIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Guerra da Restauração (1640–1668)",
                desc: "Tactical map of the fortified frontier at Elvas and Montes Claros, showing seventeenth-century bastion artillery fortresses.\nText on screen: \"RESTAURAÇÃO DA INDEPENDÊNCIA (1640) // DOM JOÃO IV\" in uppercase white Tahoma Bold.\nBadge: \"28 ANOS DE GUERRA PARA PRESERVAR A SOBERANIA NACIONAL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Anomalia Histórica de Olivença",
                desc: "Close-up satellite view on the Guadiana river bend around Olivenza, highlighting the border line without boundary stones.\nText on screen: \"QUESTÃO DE OLIVENÇA // O LITÍGIO DESDE A GUERRA DE 1801\" in uppercase white Tahoma Bold.\nBadge: \"ARTIGO 105 DO CONGRESSO DE VIENA DE 1815\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e Resumo Territorial",
                desc: "Panoramic orbital ascent pulling back from Lisbon and Madrid, showing the intact 1,214 km border line shining steadily on the European atlas.\nText on screen: \"PORTUGAL // SETE SÉCULOS DA MESMA SILHUETA NO MAPA\" in uppercase white Tahoma Bold.\nBadge: \"O ESTADO-NAÇÃO MAIS ANTIGO E COESO DA EUROPA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 99,
        titulo: "Por Que a Primeira Cadeia de Ilhas e o Escudo de Silício Transformaram Taiwan no Ponto Mais Disputado do Mundo?",
        roteiro: "Por que a Primeira Cadeia de Ilhas e o Escudo de Silício transformaram Taiwan no ponto mais perigoso e disputado do planeta? A apenas cento e sessenta quilômetros da costa da China continental, esta ilha montanhosa de trinta e seis mil quilômetros quadrados é o pivô onde colidem as duas maiores superpotências militares da Terra. Para a marinha de Pequim, Taiwan é a barreira física que bloqueia a saída de seus submarinos nucleares para o Pacífico aberto. Mas além de sua geografia de fortaleza natural com picos de quase quatro mil metros, a ilha construiu o ativo mais valioso da era moderna: o monopólio de noventa por cento dos microchips mais avançados do mundo através da TSMC. Com metade dos navios porta-contêineres globais cruzando seu estreito e postos avançados a dois quilômetros do continente, uma crise em Taiwan congelaria dez trilhões de dólares na economia mundial.",
        line1: "O ESCUDO DE SILÍCIO",
        line2: "A ILHA FORTALEZA",
        line3: "DE TAIWAN",
        emoji: "🛡️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Taiwan Strait between mainland China and Taiwan Island.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"O ESCUDO DE SILÍCIO\"\nLine 2 (intense crimson red #E50914): \"A ILHA FORTALEZA\"\nLine 3 (pure white): \"DE TAIWAN\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🛡️.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "A Primeira Cadeia de Ilhas no Pacífico",
                desc: "Strategic tactical map showing the arc connecting Japan, Okinawa, Taiwan, and the Philippines, forming the First Island Chain.\nText on screen: \"PRIMEIRA CADEIA DE ILHAS // A BARREIRA NAVAL DO PACÍFICO\" in uppercase white Tahoma Bold.\nBadge: \"O CORDÃO QUE CONTÉM A EXPANSÃO MARÍTIMA DE PEQUIM\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Cordilheira Central e a Fortaleza Natural",
                desc: "High-resolution 3D topography highlighting the Central Mountain Range and Mount Yu Shan rising to 3,952 meters.\nText on screen: \"MONTE YU SHAN (3.952 M) // A MURALHA NATURAL DE TAIWAN\" in uppercase white Tahoma Bold.\nBadge: \"DOIS TERÇOS DO TERRITÓRIO COBERTOS POR PICOS INTRANSPONÍVEIS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Escudo de Silício da TSMC em Hsinchu",
                desc: "Orbital flyover over the Hsinchu Science Park, revealing high-tech semiconductor fabs with digital silicon circuit graphic overlays.\nText on screen: \"TSMC // MONOPÓLIO DE 90% DOS CHIPS DE PONTA (<7NM)\" in uppercase white Tahoma Bold.\nBadge: \"O ESCUDO TECNOLÓGICO QUE PROTEGE A ILHA DE UMA GUERRA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tráfego Naval do Estreito de Taiwan",
                desc: "Maritime density heat map tracking thousands of container ships traversing the 160 km strait between Taiwan and Fujian.\nText on screen: \"ESTREITO DE TAIWAN // 50% DOS CONTÊINERES DO PLANETA\" in uppercase white Tahoma Bold.\nBadge: \"A ROTA COMERCIAL MAIS MOVIMENTADA E VULNERÁVEL DO MUNDO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Kinmen e Matsu: A 2 km do Continente",
                desc: "Ultra-close satellite zoom on Kinmen Island, showing its concrete bunkers just across the bay from the skyscrapers of Xiamen.\nText on screen: \"ILHAS KINMEN // APENAS 2 KM DA COSTA DA CHINA\" in uppercase white Tahoma Bold.\nBadge: \"POSTOS AVANÇADOS FORTIFICADOS SOB ALCANCE DE ARTILHARIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Doutrina Militar do Porco-Espinho",
                desc: "3D tactical animation displaying coastal mobile anti-ship missile launchers, naval minefields, and air defense interceptors.\nText on screen: \"ESTRATÉGIA DO PORCO-ESPINHO // DEFESA ASSIMÉTRICA\" in uppercase white Tahoma Bold.\nBadge: \"MILHARES DE MÍSSEIS E MINAS PARA NEGAR O DESEMBARQUE ANFÍBIO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Risco Global de 10 Trilhões de Dólares",
                desc: "Financial data visualization map showing supply chain freeze connecting Taiwan to Silicon Valley, Tokyo, and Frankfurt.\nText on screen: \"CUSTO DE UM CONFLITO // US$ 10 TRILHÕES EM PREJUÍZO GLOBAL\" in uppercase white Tahoma Bold.\nBadge: \"COLAPSO IMEDIATO DAS CADEIAS DE ELETRÔNICA, SAÚDE E DEFESA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Pressão Aeronaval no Espaço Aéreo",
                desc: "Radar tracking visualization displaying Taiwan's Air Defense Identification Zone (ADIZ) with simulated patrol vectors.\nText on screen: \"ZONA ADIZ // EXERCÍCIOS MILITARES CONTÍNUOS DE CERCO\" in uppercase white Tahoma Bold.\nBadge: \"A GUERRA DE ATRITO PSICOLÓGICA E LOGÍSTICA DIÁRIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e Equilíbrio Geopolítico",
                desc: "Wide orbital ascent over the Western Pacific showing the delicate geopolitical fault line centered directly on Taiwan.\nText on screen: \"TAIWAN // O EQUILÍBRIO DE PODER NO SÉCULO XXI\" in uppercase white Tahoma Bold.\nBadge: \"A ILHA QUE DECIDIRÁ A HEGEMONIA DO INDO-PACÍFICO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 100,
        titulo: "Como Mais de Setenta Por Cento do Fosfato do Planeta Transformou o Marrocos no Guardião da Agricultura Global?",
        roteiro: "Como mais de setenta por cento de todo o fosfato do planeta transformou o Marrocos no guardião silencioso da agricultura e da alimentação humana? O mundo pode encontrar substitutos para o petróleo, mas não existe agricultura moderna sem fósforo. Essencial na fórmula NPK de adubos que alimentam solos em todos os continentes, o elemento químico não pode ser sintetizado em laboratório. O Serviço Geológico dos Estados Unidos calcula que a Terra possua setenta bilhões de toneladas de reservas, das quais cinquenta bilhões estão sob o solo marroquino. Das bacias colossais de Khouribga à esteira transportadora de cem quilômetros de Bou Craa no Saara Ocidental, visível do espaço, o conglomerado estatal OCP transformou esse recurso na diplomacia dos fertilizantes, garantindo a segurança alimentar de bilhões de pessoas.",
        line1: "O ELEMENTO DA VIDA",
        line2: "O MONOPÓLIO DO FOSFATO",
        line3: "NO MARROCOS",
        emoji: "🌾",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the desert plateaus of Morocco in North Africa.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"O ELEMENTO DA VIDA\"\nLine 2 (intense crimson red #E50914): \"O MONOPÓLIO DO FOSFATO\"\nLine 3 (pure white): \"NO MARROCOS\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌾.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "O Fósforo e a Tríade NPK da Agricultura",
                desc: "Graphic visualization of global agricultural fields showing the chemical necessity of phosphorus for DNA and plant growth.\nText on screen: \"FÓSFORO // O NUTRIENTE INSUBSTITUÍVEL DA VIDA\" in uppercase white Tahoma Bold.\nBadge: \"SEM FERTILIZANTE FOSFATADO A COLHEITA MUNDIAL DESPÊNCA 50%\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Mapa das Reservas Globais de Fosfato",
                desc: "Global pie chart and territorial highlights demonstrating Morocco's 72% share against China, Egypt, and the USA.\nText on screen: \"50 BILHÕES DE TONELADAS // 72% DAS RESERVAS DA TERRA\" in uppercase white Tahoma Bold.\nBadge: \"DADOS OFICIAIS DO SERVIÇO GEOLÓGICO DOS EUA (USGS)\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "As Minas a Céu Aberto de Khouribga",
                desc: "High-resolution satellite view of the Ouled Abdoun Basin around Khouribga, showing massive open-pit phosphate mining terraces.\nText on screen: \"BACIA DE KHOURIBGA // O MAIOR DEPÓSITO MINERAL ABERTO\" in uppercase white Tahoma Bold.\nBadge: \"CAMADAS SEDIMENTARES FORMADAS HÁ 70 MILHÕES DE ANOS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Esteira de Bou Craa no Saara Ocidental",
                desc: "Satellite flyover following the 98 km straight white line of the phosphate conveyor belt crossing the Sahara to El Aaiún port.\nText on screen: \"BOU CRAA // ESTEIRA TRANSPORTADORA DE 98 KM\" in uppercase white Tahoma Bold.\nBadge: \"A MAIOR INFRAESTRUTURA MECÂNICA VISÍVEL DA ÓRBITA DA TERRA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Complexo Químico de Jorf Lasfar",
                desc: "Aerial view over the Jorf Lasfar industrial and chemical processing platform on Morocco's Atlantic coast.\nText on screen: \"JORF LASFAR // O MAIOR POLO DE FERTILIZANTES DO MUNDO\" in uppercase white Tahoma Bold.\nBadge: \"TRANSFORMAÇÃO QUÍMICA DE ROCHA EM FERTILIZANTES DAP E MAP\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Mineroduto Subterrâneo de Slurry (187 km)",
                desc: "3D geological cross-section demonstrating the gravity-fed underground slurry pipeline linking Khouribga to the coast.\nText on screen: \"MINERODUTO DE SLURRY // 187 KM DE POLPA DE MINÉRIO\" in uppercase white Tahoma Bold.\nBadge: \"CORTE DE 90% NOS CUSTOS LOGÍSTICOS E NAS EMISSÕES\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Dependência do Brasil e da Índia",
                desc: "Global trade routes originating from Morocco and docking in Santos and Mumbai, illustrating food security dependency.\nText on screen: \"EXPORTAÇÃO ESTRATÉGICA // BRASIL, ÍNDIA E ÁFRICA\" in uppercase white Tahoma Bold.\nBadge: \"O BRASIL IMPORTA MAIS DE 70% DOS FERTILIZANTES QUE UTILIZA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Diplomacia dos Fertilizantes na África",
                desc: "Map of the African continent illuminating partnership deals between the OCP Group and Nigeria, Ethiopia, and Rwanda.\nText on screen: \"DIPLOMACIA DOS FERTILIZANTES // A INFLUÊNCIA DE RABAT\" in uppercase white Tahoma Bold.\nBadge: \"CONQUISTA DE APOIO POLÍTICO E ALIANÇAS SOBERANAS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e o Futuro Alimentar",
                desc: "Wide orbital ascent over the Mediterranean and Africa, highlighting Morocco as the agricultural anchor of the 21st century.\nText on screen: \"MARROCOS // O ÁRBITRO DA SEGURANÇA ALIMENTAR MUNDIAL\" in uppercase white Tahoma Bold.\nBadge: \"O PODER INVISÍVEL QUE SUSTENTA O PRATO DA HUMANIDADE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 101,
        titulo: "Por Que a Passagem de Vinte e Seis Quilômetros em Bab el-Mandeb Forçou Navios a Contornar Todo o Continente Africano?",
        roteiro: "Por que um estrangulamento marítimo de apenas vinte e seis quilômetros forçou os maiores navios do planeta a contornar todo o continente africano? Conhecido historicamente como a Porta das Lágrimas, o Estreito de Bab el-Mandeb separa a ponta do Iêmen do Djibuti e da Eritreia no Chifre da África. Ele é a entrada sul obrigatória para qualquer cargueiro que deseje cruzar o Canal de Suez em direção à Europa, canalizando doze por cento de todo o comércio mundial. Mas com o canal profundo dividido pela ilha de Perim em uma passagem útil de poucos quilômetros e a erupção de ataques com mísseis balísticos e drones kamikazes a partir da costa iemenita, as maiores empresas de navegação desviaram suas frotas pelo Cabo da Boa Esperança. Uma manobra épica que adiciona catorze dias de viagem e dez mil quilômetros a cada navio.",
        line1: "A PORTA DAS LÁGRIMAS",
        line2: "BAB EL-MANDEB",
        line3: "E O DESVIO DA ÁFRICA",
        emoji: "🚢",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Bab el-Mandeb Strait connecting the Red Sea to the Gulf of Aden.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"A PORTA DAS LÁGRIMAS\"\nLine 2 (intense crimson red #E50914): \"BAB EL-MANDEB\"\nLine 3 (pure white): \"E O DESVIO DA ÁFRICA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🚢.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "O Estreito de 26 km Entre Continentes",
                desc: "Satellite flyover across the 26 km sea gap separating Yemen on the Arabian Peninsula from Djibouti in Africa.\nText on screen: \"BAB EL-MANDEB // 26 KM DE LARGURA TOTAL\" in uppercase white Tahoma Bold.\nBadge: \"O PONTO DE ESTRANGULAMENTO ENTRE A ÁSIA E A EUROPA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Ilha de Perim e os Canais de Navegação",
                desc: "High-resolution 3D topography of Perim Island splitting the strait into the narrow Bab Iskender and deep Dact-el-Mayun channel.\nText on screen: \"ILHA DE PERIM // DIVISÃO DOS CANAIS NÁUTICOS\" in uppercase white Tahoma Bold.\nBadge: \"CANAL ÚTIL PROFUNDO DE APENAS 16 A 20 KM DE LARGURA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Artéria Sul do Canal de Suez",
                desc: "Corridor trajectory map tracking container and tanker traffic flowing from the Indian Ocean up into Suez and the Mediterranean.\nText on screen: \"12% DO COMÉRCIO MUNDIAL // 6 MILHÕES DE BARRIS/DIA\" in uppercase white Tahoma Bold.\nBadge: \"A PORTARIA OBRIGATÓRIA PARA A ROTA MAIS CURTA DO GLOBO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Os Ataques de Mísseis e Drones",
                desc: "Tactical radar simulation showing anti-ship ballistic missile trajectories and drone launch vectors originating from Yemen's coast.\nText on screen: \"AMEAÇA ASSIMÉTRICA // MÍSSEIS E DRONES KAMIKAZES\" in uppercase white Tahoma Bold.\nBadge: \"SEGUROS DE GUERRA TORNAM A TRAVESSIA ECONOMICAMENTE INVIÁVEL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Desvio pelo Cabo da Boa Esperança",
                desc: "Full continental map of Africa tracing the massive southern detour route around South Africa and Cape Town.\nText on screen: \"CABO DA BOA ESPERANÇA // +10.000 A 14.000 KM EXTRAS\" in uppercase white Tahoma Bold.\nBadge: \"MAIS DE 10 A 14 DIAS ADICIONAIS DE NAVEGAÇÃO POR VIAGEM\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Impacto nos Fretes e no Combustível",
                desc: "Data telemetry screen highlighting bunker fuel spikes, supply chain bottlenecks, and container rate surges across European ports.\nText on screen: \"INFLAÇÃO LOGÍSTICA // ALTA DE 300% NAS TARIFAS DE FRETE\" in uppercase white Tahoma Bold.\nBadge: \"CONSUMO DE MILHÕES DE TONELADAS EXTRAS DE ÓLEO COMBUSTÍVEL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Djibuti: A Fortaleza Militar Internacional",
                desc: "Satellite flyover over Djibouti harbor, highlighting military installations of the US, China, France, and Japan side by side.\nText on screen: \"DJIBUTI // O COCKTAIL DE BASES MILITARES RIVAIS\" in uppercase white Tahoma Bold.\nBadge: \"O ÚNICO LUGAR DA TERRA COM TROPAS DE EUA E CHINA NA MESMA BAÍA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "As Operações Navais de Patrulha",
                desc: "Naval warship tracking graphic showing Western task forces intercepting drone swarms over the southern Red Sea.\nText on screen: \"OPERAÇÃO PROSPERITY GUARDIAN & ASPIDES\" in uppercase white Tahoma Bold.\nBadge: \"MÍSSEIS DE US$ 2 MILHÕES CONTRA DRONES DE US$ 2 MIL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e o Futuro das Rotas Náuticas",
                desc: "Orbital ascent displaying the entire Indian Ocean and African coastline with the critical chokepoint flashing at the center.\nText on screen: \"BAB EL-MANDEB // A FRAGILIDADE DO COMÉRCIO GLOBAL\" in uppercase white Tahoma Bold.\nBadge: \"UM CHOKEPOINT DE 26 KM QUE PODE PARAR A ECONOMIA DO MUNDO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 102,
        titulo: "Como um Erro de Cartografia de 1783 Deixou Uma Fatia dos Estados Unidos Isolada Dentro do Território Canadense?",
        roteiro: "Como um erro cometido por diplomatas e um mapa imperfeito em 1783 deixou uma fatia dos Estados Unidos completamente isolada dentro do Canadá? No Lago dos Bosques, acima do famoso paralelo 49° norte, repousa o Ângulo Noroeste de Minnesota. Conhecido como The Angle, este território de trezentos quilômetros quadrados e cento e vinte moradores é a única parte dos Estados Unidos contíguos situada ao norte da linha divisória continental. Durante o Tratado de Paris de 1783, os negociadores usaram o Mapa de Mitchell, que desenhava a nascente do Rio Mississipi muito mais ao norte do que a realidade física. Ao descobrirem que o rio nascia duzentos quilômetros ao sul, a Convenção de 1818 traçou uma linha reta rumo ao sul a partir da ponta do lago até atingir o paralelo 49. Hoje, para ir à escola ou ao mercado, os moradores precisam cruzar o Canadá duas vezes ou declarar alfândega em um videofone na floresta.",
        line1: "O ERRO DE 1783",
        line2: "O ÂNGULO NOROESTE",
        line3: "DE MINNESOTA",
        emoji: "🌲",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into Lake of the Woods on the US-Canada border.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"O ERRO DE 1783\"\nLine 2 (intense crimson red #E50914): \"O ÂNGULO NOROESTE\"\nLine 3 (pure white): \"DE MINNESOTA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌲.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "A Linha Reta do Paralelo 49° Norte",
                desc: "Satellite flyover across the thousands of kilometers of the straight 49th parallel border, suddenly encountering the vertical jog upwards into Lake of the Woods.\nText on screen: \"PARALELO 49° // A FRONTEIRA RETA QUE TEM UMA ANOMALIA\" in uppercase white Tahoma Bold.\nBadge: \"O ÂNGULO NOROESTE PROJETA-SE DENTRO DE MANITOBA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tratado de Paris de 1783 e o Mapa de Mitchell",
                desc: "Historical cartographic overlay showing John Mitchell's 1755 map with erroneous Mississippi headwaters drawn northwest of Lake of the Woods.\nText on screen: \"TRATADO DE PARIS (1783) // BENJAMIN FRANKLIN E O MAPA\" in uppercase white Tahoma Bold.\nBadge: \"A ILUSÃO CARTOGRÁFICA DE UMA NASCENTE QUE NUNCA EXISTIU\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Verdadeira Nascente no Lago Itasca",
                desc: "Topographic map comparison showing Lake Itasca 200 km to the south, proving the line westward could never touch the Mississippi.\nText on screen: \"LAGO ITASCA // A VERDADEIRA CABECEIRA DO MISSISSIPI\" in uppercase white Tahoma Bold.\nBadge: \"A LINHA RETA PARA OESTE SEGUIRIA PELO VAZIO SEM TOCAR O RIO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Convenção de 1818 e o Ângulo Reto",
                desc: "Vector animation drawing the vertical border dropping 42 km south from Angle Inlet down to intersect the 49th parallel at 90 degrees.\nText on screen: \"CONVENÇÃO DE 1818 // O ÂNGULO RETO NO MAPA\" in uppercase white Tahoma Bold.\nBadge: \"CRIAÇÃO GEOMÉTRICA DO EXCLAVE DO NORTHWEST ANGLE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Ponto Mais Setentrional dos EUA Contíguos",
                desc: "High-resolution satellite view of Angle Inlet at latitude 49°23'04\"N, marking the northernmost tip of the Lower 48 states.\nText on screen: \"LATITUDE 49°23'04\"N // O PONTO MAIS AO NORTE DOS EUA\" in uppercase white Tahoma Bold.\nBadge: \"MAIS AO NORTE DO QUE QUALQUER CIDADE PRINCIPAL DO CANADÁ\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Cruzando Duas Fronteiras para Ir à Escola",
                desc: "Tracking shot along the rural gravel road crossing the Manitoba border, following a yellow school bus route through Canadian territory.\nText on screen: \"ROTINA DE EXCLAVE // DUAS ALFÂNDEGAS TODOS OS DIAS\" in uppercase white Tahoma Bold.\nBadge: \"ESTUDANTES ACUMULAM CARIMBOS DE PASSAPORTE NO ENSINO MÉDIO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Cabine de Videofone Jim's Corner",
                desc: "Close-up 3D visualization of the unmanned wooden customs shack at Jim's Corner with its remote satellite camera and videophone.\nText on screen: \"JIM'S CORNER // ALFÂNDEGA POR VIDEOFONE NA FLORESTA\" in uppercase white Tahoma Bold.\nBadge: \"DECLARAÇÃO REMOTA VIA SATÉLITE PARA AGENTES A 100 KM DE DISTÂNCIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Estrada de Gelo no Inverno Congelado",
                desc: "Satellite winter imagery showing Lake of the Woods frozen solid with an ice road carved across the expanse connecting the Angle to Minnesota.\nText on screen: \"INVERNO ÁRTICO // ESTRADA DE GELO SOBRE O LAGO\" in uppercase white Tahoma Bold.\nBadge: \"A ÚNICA CONEXÃO DIRETA COM O ESTADO DE MINNESOTA SEM ENTRAR NO CANADÁ\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e o Testemunho Cartográfico",
                desc: "Orbital ascent over North America showing the peculiar northern blip on the otherwise straight border.\nText on screen: \"NORTHWEST ANGLE // O MONUMENTO A UM ERRO DE MAPA\" in uppercase white Tahoma Bold.\nBadge: \"QUANDO UM TRAÇO DE PENA EM 1783 CRIA UM DESTINO ETERNO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 103,
        titulo: "Como Uma Cidade na Áustria Ficou Conectada ao Resto do País por Um Ponto de Rocha de Apenas Um Milímetro?",
        roteiro: "Como uma cidade na Áustria ficou conectada ao resto do país por um ponto de rocha de apenas um milímetro de espessura? No coração dos Alpes de Allgäu, o vilarejo de Jungholz abriga cerca de trezentos habitantes em sete quilômetros quadrados. Rodeado inteiramente pela Baviera alemã, Jungholz é um território soberano austríaco que só toca o restante da Áustria no cume escarpado do Monte Sorgschrofen. Ali, a mais de mil e seiscentos metros de altitude, o Marco de Fronteira 110 marca um raro quadripoint geométrico onde quatro linhas de fronteira se tocam em formato de cruz. Como a montanha rochosa é intransponível para veículos, não existe nenhuma estrada direta ligando a cidade à Áustria: todo o tráfego depende da Alemanha. Com dois códigos postais, prefixos telefônicos duplos e união aduaneira histórica, Jungholz é o quase-enclave mais fascinante do mapa europeu.",
        line1: "A ROCHA DE 1 MILÍMETRO",
        line2: "O ENCLAVE DE JUNGHOLZ",
        line3: "ENTRE ÁUSTRIA E ALEMANHA",
        emoji: "🏔️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Allgäu Alps between Bavaria and the Austrian Tyrol.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"A ROCHA DE 1 MILÍMETRO\"\nLine 2 (intense crimson red #E50914): \"O ENCLAVE DE JUNGHOLZ\"\nLine 3 (pure white): \"ENTRE ÁUSTRIA E ALEMANHA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🏔️.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "O Vale Alpino Cercado pela Baviera",
                desc: "Satellite flyover around the perimeter of Jungholz, highlighting how Bavarian territory surrounds the village on virtually all compass bearings.\nText on screen: \"JUNGHOLZ // 7 KM² DE ÁUSTRIA CERCADOS PELA ALEMANHA\" in uppercase white Tahoma Bold.\nBadge: \"UM PENE-ENCLAVE ALPINO COM 300 MORADORES\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Cume do Monte Sorgschrofen (1.636 m)",
                desc: "3D alpine terrain rendering rising to the sharp knife-edge ridge of Sorgschrofen peak, where the mountain spine narrows dramatically.\nText on screen: \"MONTE SORGSCHROFEN (1.636 M) // O PONTO DE CONTATO ÚNICO\" in uppercase white Tahoma Bold.\nBadge: \"A ÚNICA LIGAÇÃO FÍSICA ENTRE JUNGHOLZ E O TIROL AUSTRÍACO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Marco de Fronteira 110: O Quadripoint",
                desc: "Close-up animation on the historic Boundary Stone 110, showing four boundary lines crossing in a cross formation on the rock.\nText on screen: \"MARCO 110 // O QUADRIPOINT MATEMÁTICO PERFEITO\" in uppercase white Tahoma Bold.\nBadge: \"QUATRO TERRITÓRIOS SE TOCANDO EM UM ÚNICO PONTO DE PEDRA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Tratado de Limites de Munique de 1844",
                desc: "Archival treaty graphic between the Kingdom of Bavaria and Austrian Empire defining the border convergence on the mountaintop.\nText on screen: \"TRATADO DE MUNIQUE (1844) // A GEOMETRIA DOS IMPÉRIOS\" in uppercase white Tahoma Bold.\nBadge: \"DIPLOMACIA RESOLVE DISPUTA MEDIEVAL DE PASTAGENS DE 1342\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Impossibilidade de Estrada pela Áustria",
                desc: "Topographic elevation section showing sheer cliffs separating Jungholz from Tannheim Valley, rendering road construction unfeasible.\nText on screen: \"PAREDÕES ROCHOSOS // ZERO ESTRADAS DIRETAS PELA ÁUSTRIA\" in uppercase white Tahoma Bold.\nBadge: \"O ACESSO RODOVIÁRIO SÓ EXISTE VINDO DA BAVIERA ALEMÃ\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Vida com Dois Códigos Postais e Telefones",
                desc: "Split-screen visual graphic showing Austrian postal code A-6691 and German postal code D-87491 alongside dual phone area codes.\nText on screen: \"DOIS CÓDIGOS POSTAIS // A-6691 E D-87491\" in uppercase white Tahoma Bold.\nBadge: \"SERVIÇOS DE CORREIOS E BOMBEIROS OPERAM EM DUPLA NACIONALIDADE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Marco Alemão e a União Aduaneira de 1868",
                desc: "Historical currency visualization showing German Deutsche Marks used exclusively in Austrian Jungholz prior to the Euro.\nText on screen: \"UNIÃO ADUANEIRA DE 1868 // MOEDA ALEMÃ EM SOLO AUSTRÍACO\" in uppercase white Tahoma Bold.\nBadge: \"INTEGRAÇÃO ECONÔMICA PRÁTICA ANTECIPANDO A UNIÃO EUROPEIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Via Ferrata dos Moradores",
                desc: "High-angle view of the steel cable climbing trail traversing the precipitous ridge between Sorgschrofen and Jungholz.\nText on screen: \"VIA FERRATA // A TRILHA PARA PISAR NA PÁTRIA SEM CARRO\" in uppercase white Tahoma Bold.\nBadge: \"TRÊS HORAS DE ESCALADA ALPINA ENTRE DESPENHADEIROS E NEVE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e o Charme do Pene-Enclave",
                desc: "Orbital panorama pulling back to show the sweeping Alps, highlighting Jungholz cradled peacefully between the two nations.\nText on screen: \"JUNGHOLZ // A GEOMETRIA MAIS FASCINANTE DOS ALPES\" in uppercase white Tahoma Bold.\nBadge: \"ONDE UMA ROCHA DE UM MILÍMETRO SEGURA A SOBERANIA DE UMA VILA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 104,
        titulo: "Como a Engenharia Territorial Soviética Criou o Labirinto de Oito Enclaves no Vale de Fergana?",
        roteiro: "Como a engenharia territorial soviética desenhada por Joseph Stalin criou o labirinto de oito enclaves internacionais no Vale de Fergana? No coração montanhoso da Ásia Central, encravada entre o Tian Shan e o Pamir, a depressão fértil de Fergana reúne mais de catorze milhões de pessoas divididas entre Quirguistão, Tajiquistão e Uzbequistão. Durante a Delimitação Nacional de 1924, Moscou traçou fronteiras deliberadamente ziguezagueantes sob o lema de dividir para governar, misturando comunidades que compartilhavam água e pastos há milênios. O resultado foi um quebra-cabeça explosivo: bolsões como Sokh, um enclave uzbeque com setenta mil moradores onde noventa e nove por cento da população é de etnia tadjique cercada por terras quirguizes, e Vorukh, palco de tiroteios por estradas e canais. Com os acordos históricos recentes de 2023, as fronteiras finalmente caminham para a pacificação.",
        line1: "A HERANÇA DE STALIN",
        line2: "O LABIRINTO DE ENCLAVES",
        line3: "DO VALE DE FERGANA",
        emoji: "🗺️",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the enclosed Fergana Valley depression surrounded by Central Asian mountain ranges.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"A HERANÇA DE STALIN\"\nLine 2 (intense crimson red #E50914): \"O LABIRINTO DE ENCLAVES\"\nLine 3 (pure white): \"DO VALE DE FERGANA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🗺️.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "O Oásis Fértil Cercado por Montanhas",
                desc: "Topographic flyover displaying the lush green valley floor of Fergana irrigated by the Syr Darya River basin amidst rugged arid peaks.\nText on screen: \"VALE DE FERGANA // 14 MILHÕES DE HABITANTES NO OÁSIS\" in uppercase white Tahoma Bold.\nBadge: \"A MAIOR DENSIDADE DEMOGRÁFICA DE TODA A ÁSIA CENTRAL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Delimitação Soviética de 1924",
                desc: "Archival cartographic animation showing Soviet pencils drawing fractured, zigzagging republican borders across ethnic communities.\nText on screen: \"DELIMITAÇÃO NACIONAL (1924) // A ENGENHARIA DE STALIN\" in uppercase white Tahoma Bold.\nBadge: \"FRONTEIRAS PROPOSITADAMENTE DESENHADAS PARA DIVIDIR E GOVERNAR\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Enclave de Sokh e o Paradoxo Étnico",
                desc: "Satellite zoom into Sokh enclave, highlighting its 325 km² area enclosed inside Kyrgyzstan's Batken province.\nText on screen: \"SOKH // ENCLAVE DO UZBEQUISTÃO COM 75 MIL PESSOAS\" in uppercase white Tahoma Bold.\nBadge: \"99% DA POPULAÇÃO É ETNICAMENTE TADJIQUE SOB SOBERANIA UZBEQUE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Vorukh e a Disputa pelos Canais de Água",
                desc: "High-resolution view over the Vorukh enclave nestled in mountain defiles, showing irrigation ditches and narrow road corridors.\nText on screen: \"VORUKH // ENCLAVE DO TAJIQUISTÃO NO QUIRGUISTÃO\" in uppercase white Tahoma Bold.\nBadge: \"CONFLITOS CRÔNICOS POR CANAIS DE ÁGUA E PASTAGENS ALPINAS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Shakhimardan e os Microenclaves",
                desc: "Satellite flyover identifying Shakhimardan, Sarvan, Chong-Kara, and Jany-Ayil popping up across border lines.\nText on screen: \"OITO ENCLAVES // O LABIRINTO CARTOGRÁFICO DA REGIÃO\" in uppercase white Tahoma Bold.\nBadge: \"BOLSÕES ISOLADOS DEPENDENTES DE POSTOS ALFANDEGÁRIOS VIZINHOS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Fim da URSS em 1991 e as Fronteiras Armadas",
                desc: "Visual transition showing open Soviet internal roads abruptly closing with barbed wire, military checkpoints, and minefields.\nText on screen: \"COLAPSO DE 1991 // LINHAS NO MAPA VIRAM FRONTEIRAS REAIS\" in uppercase white Tahoma Bold.\nBadge: \"FAMÍLIAS SEPARADAS E BAZARES HISTÓRICOS CORTADOS AO MEIO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Os Confrontos Armados de Batken (2021–2022)",
                desc: "Tactical map showing military flashpoints along the un-demarcated border sectors around Batken and Vorukh.\nText on screen: \"ESCALADAS DE FRONTEIRA // O CUSTO HUMANO DAS AMBIGUIDADES\" in uppercase white Tahoma Bold.\nBadge: \"DEZENAS DE MORTOS E CENTENAS DE MILHARES DE EVACUADOS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Os Acordos Históricos de Demarcação (2023–2026)",
                desc: "Diplomatic cartographic overlay showing finalized border lines glowing green between Uzbekistan and Kyrgyzstan.\nText on screen: \"ACORDOS DE DEMARCAÇÃO // TROCAS DE TERRAS EQUITATIVAS\" in uppercase white Tahoma Bold.\nBadge: \"1.400 KM DE FRONTEIRAS PACIFICADOS COM CORREDORES LIVRES\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e a Lição Cartográfica",
                desc: "Orbital ascent over the Tian Shan and Pamir mountains, looking down at the fertile bowl of Fergana peaceful under sunset.\nText on screen: \"VALE DE FERGANA // A COEXISTÊNCIA VENCE O LABIRINTO\" in uppercase white Tahoma Bold.\nBadge: \"QUANDO A DIPLOMACIA DESFAZ AS ARMADILHAS DO PASSADO IMPERIAL\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 105,
        titulo: "Como Nove Mil Quilômetros de Trilhos Pela Taiga e Montanhas Conectaram Dois Continentes na Maior Ferrovia da Terra?",
        roteiro: "Como nove mil quilômetros de trilhos rasgando a taiga e o gelo conectaram dois continentes na maior linha ferroviária da Terra? Partindo da estação Yaroslavsky em Moscou e cruzando os Montes Urais que dividem a Europa da Ásia, a Ferrovia Transiberiana estende-se por impressionantes 9.289 quilômetros até alcançar o Oceano Pacífico em Vladivostok. Idealizada pelo Tsar Alexandre III em 1891 para blindar o Extremo Oriente contra impérios rivais, a obra foi uma epopeia de engenharia manual sobre solos de permafrost, pântanos e rios colossais. Ao contornar o Lago Baikal, operários escavaram quase quarenta túneis em precipícios de rocha pura. Na Segunda Guerra Mundial, foi ela quem salvou a União Soviética ao transportar mais de mil e quinhentas fábricas inteiras para além dos Urais. Hoje, cruzando oito fusos horários em seis dias ininterruptos de viagem, a Transiberiana permanece a espinha dorsal de aço da Eurásia.",
        line1: "A ESPINHA DE AÇO",
        line2: "A FERROVIA TRANSIBERIANA",
        line3: "DE 9.289 QUILÔMETROS",
        emoji: "🚂",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the vast Eurasian landmass tracing the railway from Moscow across Siberia to the Pacific.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"A ESPINHA DE AÇO\"\nLine 2 (intense crimson red #E50914): \"A FERROVIA TRANSIBERIANA\"\nLine 3 (pure white): \"DE 9.289 QUILÔMETROS\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🚂.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "O Decreto Imperial do Tsar em 1891",
                desc: "Historical archival visualization displaying Tsar Alexander III's imperial edict and Tsarevich Nicholas laying the first shovel of ballast in Vladivostok.\nText on screen: \"31 DE MAIO DE 1891 // A PEDRA FUNDAMENTAL IMPERIAL\" in uppercase white Tahoma Bold.\nBadge: \"O DESAFIO GEOPOLÍTICO DE UNIR MOSCOU AO OCEANO PACÍFICO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Marco do Km 1.777 nos Montes Urais",
                desc: "High-resolution satellite view of the Ural Mountains ridge at Pervouralsk, focusing on the white stone obelisk dividing Europe from Asia.\nText on screen: \"QUILÔMETRO 1.777 // A DIVISÓRIA ENTRE EUROPA E ÁSIA\" in uppercase white Tahoma Bold.\nBadge: \"O PONTO EXATO ONDE O TREM CRUZA DE UM CONTINENTE PARA OUTRO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Engenharia Extrema no Permafrost Siberiano",
                desc: "Terrain visualization of the endless Siberian taiga, depicting workers laying ballasted ties over thawing permafrost and peat bogs.\nText on screen: \"PERMAFROST E TAIGA // TRABALHO A 50 GRAUS NEGATIVOS\" in uppercase white Tahoma Bold.\nBadge: \"DEZENAS DE MILHARES DE OPERÁRIOS SOB CONDIÇÕES SUBÁRTICAS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "As Pontes Colossais sobre os Rios Siberianos",
                desc: "Flyover over the Ob, Yenisei, and Amur rivers, showcasing the massive steel truss bridge of Khabarovsk spanning 2.6 km.\nText on screen: \"PONTE DE KHABAROVSK // 2.600 METROS SOBRE O RIO AMUR\" in uppercase white Tahoma Bold.\nBadge: \"MAIS DE 3.900 PONTES FERROVIÁRIAS ERGUIDAS AO LONGO DA LINHA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Ferrovia Circumbaikal: A Fivela Dourada",
                desc: "Dramatic cliffside satellite tracking shot along the rocky precipices of southern Lake Baikal, revealing 39 stone-lined tunnels.\nText on screen: \"LINHA CIRCUMBAIKAL // A FIVELA DE OURO DO CINTO SIBERIANO\" in uppercase white Tahoma Bold.\nBadge: \"39 TÚNEIS ESCAVADOS NA ROCHA PURA À BEIRA DO ABISMO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Evacuação Industrial de 1941 na Segunda Guerra",
                desc: "Historical movement vector graphics tracking 1,500 entire industrial plants moved eastward from European Russia beyond the Urals.\nText on screen: \"OPERAÇÃO BARBAROSSA (1941) // O RESGATE INDUSTRIAL\" in uppercase white Tahoma Bold.\nBadge: \"A TRANSIBERIANA SALVOU A UNIÃO SOVIÉTICA DA DERROTA MILITAR\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Viagem de 6 Dias no Trem Rossiya",
                desc: "Speed-lapse satellite animation tracking the Rossiya express train cruising across 8 time zones through snow and forests.\nText on screen: \"TREM ROSSIYA // 146 HORAS ININTERRUPTAS DE VIAGEM\" in uppercase white Tahoma Bold.\nBadge: \"8 FUSOS HORÁRIOS E 87 CIDADES CONECTADAS DE MOSCOU AO PACÍFICO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Ponte Terrestre Eurasiática de Cargas",
                desc: "Intermodal container freight telemetry mapping container trains connecting Chinese and Russian ports to European rail networks.\nText on screen: \"CORREDOR EURASIÁTICO // O FRETE FERROVIÁRIO INTERCONTINENTAL\" in uppercase white Tahoma Bold.\nBadge: \"TRANSPORTE EM UM TERÇO DO TEMPO DE UMA VIAGEM MARÍTIMA DE NAVIO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento no Porto de Vladivostok",
                desc: "Orbital ascent from the Golden Horn Bay of Vladivostok, sweeping across the entire 9,289 km line spanning the planet.\nText on screen: \"9.289 QUILÔMETROS // O MAIOR MONUMENTO FERROVIÁRIO DA TERRA\" in uppercase white Tahoma Bold.\nBadge: \"A LINHA QUE MANTEVE UNIFICADO O MAIOR PAÍS DO PLANETA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 106,
        titulo: "Por Que o Lago Baikal na Sibéria Guarda Vinte Por Cento de Toda a Água Doce Não Congelada da Terra?",
        roteiro: "Por que o Lago Baikal na Sibéria guarda vinte por cento de toda a água doce não congelada do planeta Terra? Encravado no coração da Sibéria Oriental em uma fenda tectônica ativa de vinte e cinco milhões de anos, o Baikal é um oceano fóssil em miniatura. Com uma profundidade vertiginosa de 1.642 metros, seu fundo rochoso atinge a criptodepressão mais profunda da crosta terrestre, a mais de mil metros abaixo do nível do mar. Embora ocupe apenas a sétima posição mundial em área superficial, o volume de água acumulado no abismo chega a vinte e três mil quilômetros cúbicos — superando a soma de todos os cinco Grandes Lagos da América do Norte combinados. Alimentado por mais de trezentos rios e escoando por um único emissário, o caudaloso Rio Angara, o Baikal abriga águas tão límpidas que um disco pode ser visto a quarenta metros de profundidade, além da única foca de água doce do planeta.",
        line1: "O ABISMO AZUL",
        line2: "O LAGO BAIKAL",
        line3: "E 20% DA ÁGUA DOCE",
        emoji: "🌊",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the long crescent rift of Lake Baikal in Eastern Siberia.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"O ABISMO AZUL\"\nLine 2 (intense crimson red #E50914): \"O LAGO BAIKAL\"\nLine 3 (pure white): \"E 20% DA ÁGUA DOCE\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌊.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "A Fenda Tectônica Continental Ativa",
                desc: "3D geological cross-section animation showing the divergence of the Baikal Rift Zone splitting the Eurasian plate at 2 cm per year.\nText on screen: \"FISTURA DO BAIKAL // UMA PLACA CONTINENTAL SE PARTINDO\" in uppercase white Tahoma Bold.\nBadge: \"O LAGO MAIS ANTIGO DA TERRA: 25 A 30 MILHÕES DE ANOS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Profundidade Recorde de 1.642 Metros",
                desc: "Bathymetric descent animation dipping below the surface near Olkhon Island down into the abyss at 1,642 meters depth.\nText on screen: \"1.642 METROS // A MAIOR PROFUNDIDADE LACUSTRE DO MUNDO\" in uppercase white Tahoma Bold.\nBadge: \"CRIPTODEPRESSÃO ROCHOSA A 1.186 METROS ABAIXO DO NÍVEL DO MAR\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Volume de 23.615 km³ Comparado aos Grandes Lagos",
                desc: "Volumetric comparison visual showing all 5 North American Great Lakes combined pouring into the deep trench of Baikal.\nText on screen: \"23.615 KM³ DE ÁGUA // SUPERA OS 5 GRANDES LAGOS JUNTOS\" in uppercase white Tahoma Bold.\nBadge: \"ARMAZENA 20% DE TODA A ÁGUA DOCE LÍQUIDA SUPERFICIAL DA TERRA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Os 336 Rios Tributários e o Único Rio Angara",
                desc: "Hydrological flow animation highlighting 336 incoming rivers (Selenga, Barguzin) and the sole river exiting the lake: the Angara.\nText on screen: \"336 RIOS ENTRANDO // APENAS O RIO ANGARA SAINDO\" in uppercase white Tahoma Bold.\nBadge: \"UMA DAS MAIORES BACIAS HIDROGRÁFICAS DA SIBÉRIA E MONGÓLIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Pureza Transparente e os Crustáceos Epischura",
                desc: "Microscopic to macro underwater transition showing crystal clear water with 40-meter visibility filtered by Epischura baikalensis.\nText on screen: \"TRANSPARÊNCIA ÓPTICA // VISIBILIDADE DE 40 METROS\" in uppercase white Tahoma Bold.\nBadge: \"TRILHÕES DE COPEPODES FILTRAM A ÁGUA DO LAGO CONTINUAMENTE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "A Foca de Nerpa: A Única em Água Doce",
                desc: "Wildlife documentary footage integration of the Baikal seal (Pusa sibirica) basking on white ice floes under cold northern sun.\nText on screen: \"FOCA-DO-BAIKAL (NERPA) // A ÚNICA FOCA DE ÁGUA DOCE\" in uppercase white Tahoma Bold.\nBadge: \"MAIS DE 80% DAS ESPÉCIES DO LAGO NÃO EXISTEM EM NENHUM OUTRO LUGAR\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "As Bolhas de Metano e as Pedras Zen no Gelo",
                desc: "Winter photography flyover displaying methane bubbles trapped in turquoise ice layers and Zen stones resting on slender ice pedestals.\nText on screen: \"GELO METANO // AS ESCULTURAS NATURAIS DO INVERNO\" in uppercase white Tahoma Bold.\nBadge: \"UMA PLACA DE GELO DE ATÉ 2 METROS DE ESPESSURA NO INVERNO SIBERIANO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "O Escudo Estratégico de Água da Humanidade",
                desc: "Global demographic infographic calculating that Baikal's water could sustain the entire 8 billion world population for 50 years.\nText on screen: \"SEGURANÇA HÍDRICA GLOBAL // 3 MILHÕES DE LITROS POR HABITANTE\" in uppercase white Tahoma Bold.\nBadge: \"O RECURSO MAIS ESTRATÉGICO E PRECIOSO DO SÉCULO XXI\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e o Mistério do Mar Sagrado",
                desc: "Panoramic orbital ascent pulling back from the crescent of Lake Baikal, shining like a sapphire blade embedded in Siberia.\nText on screen: \"LAGO BAIKAL // O MONUMENTO HIDROLÓGICO DO PLANETA\" in uppercase white Tahoma Bold.\nBadge: \"O OCEANO DO FUTURO GUARDADO NO CORAÇÃO DA EURÁSIA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    },
    {
        num: 107,
        titulo: "Quais São os Dez Maiores Lagos do Planeta Que Concentram a Maior Parte da Água Doce e Salgada da Terra?",
        roteiro: "Quais são os dez maiores lagos do planeta que concentram a maior parte da água doce e salgada da Terra? No topo do ranking mundial por área de superfície reina o Mar Cáspio, um colosso salobro de 371 mil quilômetros quadrados cercado por cinco países, maior que a Alemanha inteira. Em segundo lugar surge o Lago Superior, líder absoluto entre as massas de água doce com 82 mil quilômetros quadrados entre Estados Unidos e Canadá. O Lago Vitória na África ocupa a terceira posição com 68 mil quilômetros quadrados como nascente perene do Nilo Branco. A lista segue com os gigantes norte-americanos Huron e Michigan, o abissal Tanganica na África Oriental, o fóssil Lago Baikal na Sibéria com seu volume astronômico, e os colossos subárticos do Canadá: Grande Lago do Urso, Lago Malawi e Grande Lago do Escravo. Um ranking de bacias vitais que sustentam a vida continental no planeta.",
        line1: "RANKING MUNDIAL",
        line2: "OS 10 MAIORES LAGOS",
        line3: "DO PLANETA TERRA",
        emoji: "🌊",
        prompts: [
            {
                titulo: "Abertura e Gancho Cartográfico",
                desc: "GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and presenting the giant blue expanses of the world's greatest continental lakes.\nGeographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\nFrom the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\nLine 1 (pure white): \"RANKING MUNDIAL\"\nLine 2 (intense crimson red #E50914): \"OS 10 MAIORES LAGOS\"\nLine 3 (pure white): \"DO PLANETA TERRA\"\nFont Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\nCentered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji 🌊.\nCamera motion: smooth, slow, linear orthographic push-in toward the focal region.\nNO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX."
            },
            {
                titulo: "1º Lugar: Mar Cáspio (371.000 km²)",
                desc: "Orbital flyover over the Caspian Sea enclosed between Russia, Kazakhstan, Turkmenistan, Iran, and Azerbaijan.\nText on screen: \"1º MAR CÁSPIO // 371.000 KM² (BACIA ENDORREICA)\" in uppercase white Tahoma Bold.\nBadge: \"O MAIOR CORPO DE ÁGUA FECHADO DA TERRA, MAIOR QUE A ALEMANHA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "2º Lugar: Lago Superior (82.100 km²)",
                desc: "High-resolution satellite view of Lake Superior between the US and Canada, with crisp shorelines and deep blue water.\nText on screen: \"2º LAGO SUPERIOR // 82.100 KM² (ÁGUA DOCE)\" in uppercase white Tahoma Bold.\nBadge: \"O MAIOR LAGO DE ÁGUA DOCE EM ÁREA DE SUPERFÍCIE DO MUNDO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "3º Lugar: Lago Vitória (68.800 km²)",
                desc: "Satellite sweep over the tropical waters of Lake Victoria bordered by Tanzania, Uganda, and Kenya.\nText on screen: \"3º LAGO VITÓRIA // 68.800 KM² (ÁFRICA ORIENTAL)\" in uppercase white Tahoma Bold.\nBadge: \"A PRINCIPAL NASCENTE PERENE QUE ALIMENTA O RIO NILO BRANCO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "4º Lugar: Lago Huron (59.600 km²)",
                desc: "Satellite view of Lake Huron highlighting Manitoulin Island, the largest freshwater island in the world.\nText on screen: \"4º LAGO HURON // 59.600 KM² (EUA / CANADÁ)\" in uppercase white Tahoma Bold.\nBadge: \"ABRIGA A ILHA MANITOULIN COM MAIS DE 100 LAGOS INTERIORES\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "5º Lugar: Lago Michigan (58.000 km²)",
                desc: "Satellite flyover over Lake Michigan with Chicago's skyline visible on its southwestern shore, entirely within US territory.\nText on screen: \"5º LAGO MICHIGAN // 58.000 KM² (EUA EXCLUSIVO)\" in uppercase white Tahoma Bold.\nBadge: \"O MAIOR LAGO LOCALIZADO INTEIRAMENTE DENTRO DE UM ÚNICO PAÍS\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "6º Lugar: Lago Tanganica (32.900 km²)",
                desc: "Rift valley satellite perspective of Lake Tanganyika bordered by DR Congo, Tanzania, Burundi, and Zambia.\nText on screen: \"6º LAGO TANGANICA // 32.900 KM² (1.470 M DE PROFUNDIDADE)\" in uppercase white Tahoma Bold.\nBadge: \"O SEGUNDO MAIS PROFUNDO E O MAIS LONGO LAGO DE ÁGUA DOCE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "7º Lugar: Lago Baikal (31.722 km²)",
                desc: "Orbital view over Lake Baikal in Siberia, highlighting its incredible depth and record water volume.\nText on screen: \"7º LAGO BAIKAL // 31.722 KM² (1.642 M DE PROFUNDIDADE)\" in uppercase white Tahoma Bold.\nBadge: \"LÍDER ABSOLUTO EM VOLUME: 23.615 KM³ DE ÁGUA DOCE\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "8º, 9º e 10º Lugares: O Top 10 Completo",
                desc: "Comparative 3D graphic cycling through Great Bear Lake (31.153 km²), Lake Malawi (29.600 km²), and Great Slave Lake (27.200 km²).\nText on screen: \"8º GRANDE URSO // 9º MALAWI // 10º GRANDE ESCRAVO\" in uppercase white Tahoma Bold.\nBadge: \"OS GIGANTES SUBÁRTICOS DO CANADÁ E O BERÇO BIOLÓGICO AFRICANO\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            },
            {
                titulo: "Fechamento e Resumo do Ranking",
                desc: "Global orbital pullback showing all 10 lakes illuminated across the world map with gold numerical badges.\nText on screen: \"OS 10 MAIORES LAGOS // AS RESERVAS VITAIS DO PLANETA\" in uppercase white Tahoma Bold.\nBadge: \"A GEOGRAFIA DAS ÁGUAS CONTINENTAIS QUE ALIMENTAM A TERRA\" in intense amber or crimson red (#E50914).\nCamera: dynamic linear satellite tracking shot along the geographic feature.\nNO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime."
            }
        ]
    }
];

console.log("=================================================");
console.log("INICIANDO GERAÇÃO DOS 10 ROTEIROS DE VÍDEO");
console.log("=================================================");

for (const v of videosData) {
    const filename = `Video ${v.num}.md`;
    const filepath = path.join(roteirosDir, filename);

    let content = `# Video ${v.num} — ${v.titulo}\n\n`;
    content += `### 1. Roteiro\n\n${v.roteiro}\n\n---\n\n`;
    content += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

    v.prompts.forEach((p, idx) => {
        content += `#### Prompt ${idx + 1} — ${p.titulo} (4s)\n\`\`\`text\nVertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.\n${p.desc}\n\`\`\`\n\n`;
    });

    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`[ROTEIRO OK] ${filename} -> ${v.titulo} (${content.length} chars)`);
}

console.log("\nTodos os 10 roteiros de vídeo foram criados com sucesso em:");
console.log(roteirosDir);
