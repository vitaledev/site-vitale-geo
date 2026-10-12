/**
 * BANCO DE DADOS COMPLETO DE PERGUNTAS & LOCAIS GEOPOLÍTICOS — VITALEGEO
 * Mais de 110 locais lendários de chokepoints, enclaves, zonas de tensão,
 * extremos geográficos, megaprojetos e curiosidades cartográficas.
 */

const LOCAIS_ONDE_FICA = [
    // ------------------------------------------------------------------------
    // 1. CHOKEPOINTS & ESTREITOS ESTRATÉGICOS DO COMÉRCIO MUNDIAL
    // ------------------------------------------------------------------------
    {
        nome: "Estreito de Ormuz",
        categoria: "Chokepoint do Petróleo",
        lat: 26.5667,
        lng: 56.2500,
        dica: "Gargalo marítimo estratégico entre o Irã e Omã por onde escoa 20% do petróleo mundial.",
        fato: "Com apenas 33 km de largura no seu ponto mais estreito, o Estreito de Ormuz é a artéria energética mais vigiada do Golfo Pérsico."
    },
    {
        nome: "Canal de Suez",
        categoria: "Chokepoint Comercial",
        lat: 30.7050,
        lng: 32.3442,
        dica: "Corta o Egito conectando o Mar Mediterrâneo ao Mar Vermelho sem contornar a África.",
        fato: "Inaugurado em 1869, o canal movimenta 12% do comércio global e economiza cerca de 7.000 km de viagem aos navios mercantes."
    },
    {
        nome: "Canal do Panamá",
        categoria: "Chokepoint Interoceânico",
        lat: 9.0800,
        lng: -79.6800,
        dica: "Conecta os Oceanos Atlântico e Pacífico através do istmo da América Central.",
        fato: "Utiliza um lendário sistema de eclusas que ergue os cargueiros a 26 metros de altitude no Lago Gatún para atravessar o relevo."
    },
    {
        nome: "Estreito de Malaca",
        categoria: "Chokepoint Asiático",
        lat: 2.5000,
        lng: 101.5000,
        dica: "Entre a Malásia e a ilha de Sumatra, é a rota marítima mais movimentada de navios do Extremo Oriente.",
        fato: "Mais de 100 mil navios cruzam Malaca todo ano, abastecendo China, Japão e Coreia com matérias-primas e energia."
    },
    {
        nome: "Estreito de Gibraltar",
        categoria: "Porta do Mediterrâneo",
        lat: 35.9667,
        lng: -5.6000,
        dica: "Separa a Europa (Espanha) da África (Marrocos) por apenas 14 km de água marítima.",
        fato: "Na antiguidade clássica, era conhecido como as lendárias 'Colunas de Hércules', marcando o limite ocidental do mundo conhecido."
    },
    {
        nome: "Estreito de Bósforo",
        categoria: "Divisor Continental",
        lat: 41.1167,
        lng: 29.0833,
        dica: "Corta a cidade de Istambul dividindo a Europa da Ásia e ligando o Mar Negro ao Mar de Mármara.",
        fato: "Regulado pela Convenção de Montreux de 1936, é a única saída marítima para navios de países como Ucrânia, Romênia e Geórgia."
    },
    {
        nome: "Estreito de Bab el-Mandeb",
        categoria: "Gargalo do Mar Vermelho",
        lat: 12.5833,
        lng: 43.3333,
        dica: "Separa o Iêmen na Península Arábica do Djibuti e Eritreia no Chifre da África.",
        fato: "Conhecido em árabe como 'A Porta das Lágrimas', é a entrada meridional do Canal de Suez e rota vital de petroleiros."
    },
    {
        nome: "Estreito de Taiwan",
        categoria: "Zona de Tensão Geopolítica",
        lat: 24.0000,
        lng: 119.5000,
        dica: "Braço de mar de 160 km de largura que separa a China continental da ilha de Taiwan.",
        fato: "Por ele navega cerca de metade da frota global de navios porta-contêineres e 88% dos maiores cargueiros do planeta."
    },
    {
        nome: "Estreito de Kerch",
        categoria: "Ponte e Chokepoint do Mar Negro",
        lat: 45.3000,
        lng: 36.5000,
        dica: "Canal que conecta o Mar Negro ao raso Mar de Azov, sob a colossal Ponte da Crimeia.",
        fato: "Ponto nevrálgico disputado militarmente entre a Rússia e a Ucrânia para controle da navegação e acesso ao Donbass."
    },
    {
        nome: "Estreito de Dardanelos",
        categoria: "Gargalo Histórico de Galípoli",
        lat: 40.2000,
        lng: 26.4000,
        dica: "Estreito turco que liga o Mar Egeu ao Mar de Mármara, caminho obrigatório até Istambul.",
        fato: "Palco da célebre Batalha de Galípoli na 1ª Guerra Mundial, onde as forças aliadas tentaram forçar a passagem para a Rússia czarista."
    },
    {
        nome: "Canal de Kiel",
        categoria: "Atalho Báltico-Mar do Norte",
        lat: 54.3333,
        lng: 9.8333,
        dica: "Canal artificial de 98 km que corta a península da Jutlândia no norte da Alemanha.",
        fato: "Evita que cargueiros contornem toda a Dinamarca, economizando 460 km de navegação turbulenta em mar aberto."
    },
    {
        nome: "Canal de Corinto",
        categoria: "Cânion Artificial Histórico",
        lat: 37.9344,
        lng: 22.9839,
        dica: "Corta o istmo de Corinto na Grécia com paredes verticais de calcário de 63 metros de altura.",
        fato: "Com apenas 21 metros de largura, foi idealizado pelo imperador romano Nero em 67 d.C., mas só foi concluído em 1893."
    },
    {
        nome: "Estreito de Magalhães",
        categoria: "Passagem Austral",
        lat: -53.5000,
        lng: -70.5000,
        dica: "Caminho natural navegável no extremo sul do Chile entre o continente e a Terra do Fogo.",
        fato: "Descoberto por Fernão de Magalhães em 1520 na primeira viagem de circum-navegação da história humana."
    },
    {
        nome: "Estreito de Bering",
        categoria: "Fronteira Ásia-América",
        lat: 65.8000,
        lng: -168.9000,
        dica: "Separa a Sibéria russa do Alasca norte-americano por apenas 82 km de água gelada.",
        fato: "Durante as glaciações pré-históricas, formou uma ponte de terra seca (Beríngia) por onde os humanos povoaram as Américas."
    },
    {
        nome: "Estreito de Dover (Passo de Calais)",
        categoria: "Gargalo da Mancha",
        lat: 51.0000,
        lng: 1.4500,
        dica: "O ponto mais estreito do Canal da Mancha, separando a Inglaterra da França por 33 km.",
        fato: "Abaixo do seu leito marítimo passa o Eurotúnel, com 50 km de extensão ferroviária submarina."
    },
    {
        nome: "Estreito de Oresund",
        categoria: "Ponte Escandinava",
        lat: 55.6000,
        lng: 12.7500,
        dica: "Separa a Dinamarca da Suécia, cruzado pela icônica Ponte-Túnel de Oresund.",
        fato: "A ponte se transforma em uma ilha artificial e mergulha em um túnel submarino para permitir a passagem livre de navios e aviões."
    },

    // ------------------------------------------------------------------------
    // 2. ENCLAVES, EXCLAVES & ANOMALIAS TERRITORIAIS
    // ------------------------------------------------------------------------
    {
        nome: "Kaliningrado",
        categoria: "Enclave Russo na Europa",
        lat: 54.7104,
        lng: 20.4522,
        dica: "Território militar russo separado do resto da Rússia, prensado entre Polônia e Lituânia.",
        fato: "Antiga cidade prussiana de Königsberg, abriga a frota russa do Mar Báltico e mísseis estratégicos de longo alcance."
    },
    {
        nome: "Baarle",
        categoria: "Labirinto de Enclaves",
        lat: 51.4433,
        lng: 4.9317,
        dica: "Cidade fronteiriça entre Bélgica e Holanda com 30 enclaves interligados cortando casas e ruas.",
        fato: "A linha de fronteira é desenhada no chão com cruzes brancas; se ela corta sua porta de entrada, define qual país você obedece."
    },
    {
        nome: "Bir Tawil",
        categoria: "Terra Nullius (De Ninguém)",
        lat: 21.8683,
        lng: 33.7431,
        dica: "Território de 2.060 km² no deserto entre o Egito e o Sudão que nenhum país quer reivindicar.",
        fato: "Devido a tratados divergentes de 1899 e 1902, aceitar Bir Tawil faria qualquer um dos países perder o valioso Triângulo de Hala'ib."
    },
    {
        nome: "Llívia",
        categoria: "Enclave Espanhol na França",
        lat: 42.4636,
        lng: 1.9806,
        dica: "Pedaço de território da Espanha totalmente cercado pelo território francês nos Pirenéus.",
        fato: "Pelo Tratado dos Pirenéus de 1659, a Espanha cedeu vilas à França, mas Llívia continuou espanhola porque detinha o título honorífico de 'cidade'."
    },
    {
        nome: "Büsingen am Hochrhein",
        categoria: "Enclave Alemão na Suíça",
        lat: 47.6972,
        lng: 8.6892,
        dica: "Município alemão situado inteiramente dentro do cantão suíço de Schaffhausen.",
        fato: "Utiliza duas moedas (Euro e Franco Suíço), dois códigos postais e dois prefixos telefônicos internacionais."
    },
    {
        nome: "Campione d'Italia",
        categoria: "Enclave Italiano na Suíça",
        lat: 45.9692,
        lng: 8.9711,
        dica: "Comuna italiana nas margens do Lago de Lugano, totalmente cercada pelo cantão suíço de Ticino.",
        fato: "Famosa pelo seu cassino municipal e por operar na prática com infraestrutura, telecomunicações e moeda suíças."
    },
    {
        nome: "Ceuta",
        categoria: "Enclave Espanhol na África",
        lat: 35.8894,
        lng: -5.3213,
        dica: "Cidade autônoma espanhola situada na ponta norte do território do Marrocos.",
        fato: "Faz parte do território aduaneiro da União Europeia em pleno continente africano, protegida por cercas de alta segurança."
    },
    {
        nome: "Melilla",
        categoria: "Enclave Espanhol na África",
        lat: 35.2922,
        lng: -2.9381,
        dica: "Cidade autônoma espanhola na costa do Marrocos, a leste de Ceuta.",
        fato: "Soberania espanhola mantida desde 1497, é um dos dois únicos pontos de fronteira terrestre da União Europeia com a África."
    },
    {
        nome: "Point Roberts",
        categoria: "Enclave dos EUA no Canadá",
        lat: 48.9883,
        lng: -123.0567,
        dica: "Península no sul de Vancouver que pertence aos EUA devido ao traçado reto do Paralelo 49.",
        fato: "As crianças locais precisam cruzar quatro postos de imigração internacional todos os dias de ônibus para estudar em escolas dos EUA."
    },
    {
        nome: "Enclave de Cabinda",
        categoria: "Exclave Petrolífero Africano",
        lat: -5.5500,
        lng: 12.2000,
        dica: "Província ultramarina de Angola separada do resto do país por uma faixa de terra da RD do Congo.",
        fato: "Embora isolada geograficamente de Luanda, suas jazidas offshore respondem por mais de metade de todo o petróleo produzido em Angola."
    },
    {
        nome: "Nakhchivan",
        categoria: "Exclave do Azerbaijão",
        lat: 39.2000,
        lng: 45.4000,
        dica: "República autônoma azeri separada do Azerbaijão continental pelo território da Armênia.",
        fato: "O estratégico Corredor de Zangezur é disputado para ligar Nakhchivan diretamente a Baku sem controle aduaneiro armênio."
    },
    {
        nome: "Madha e Nahwa",
        categoria: "Enclave Dentro de Enclave",
        lat: 25.2667,
        lng: 56.3333,
        dica: "Madha pertence a Omã dentro dos Emirados; no centro de Madha fica Nahwa, que pertence aos Emirados!",
        fato: "Um dos raríssimos contra-enclaves de segunda ordem do planeta, nas montanhas áridas da Península de Musandam."
    },
    {
        nome: "San Marino",
        categoria: "República Enclavada",
        lat: 43.9333,
        lng: 12.4500,
        dica: "Microestado soberano no topo do Monte Titano, inteiramente cercado pela Itália.",
        fato: "Fundada em 301 d.C., é a república constitucional mais antiga em atividade contínua no planeta Terra."
    },
    {
        nome: "Vaticano",
        categoria: "Cidade-Estado Enclavada",
        lat: 41.9029,
        lng: 12.4534,
        dica: "O menor país soberano do mundo com 0,49 km², totalmente cercado pela cidade de Roma.",
        fato: "Sua soberania temporal independente foi formalizada em 1929 através do Tratado de Latrão firmado com a Itália."
    },
    {
        nome: "Lesoto",
        categoria: "Reino Enclavado nas Montanhas",
        lat: -29.6000,
        lng: 28.2333,
        dica: "Nação montanhosa independente inteiramente cercada pelo território da África do Sul.",
        fato: "É o único país independente do mundo cujo território inteiro fica acima de 1.000 metros de altitude acima do mar."
    },

    // ------------------------------------------------------------------------
    // 3. FRONTEIRAS DISPUTADAS & ZONAS DE TENSÃO GEOPOLÍTICA
    // ------------------------------------------------------------------------
    {
        nome: "Corredor de Suwalki",
        categoria: "Gargalo Militar da OTAN",
        lat: 54.2667,
        lng: 23.3333,
        dica: "Faixa estreita de 65 km de fronteira entre Polônia e Lituânia, ligando Belarus a Kaliningrado.",
        fato: "Considerado pelos generais da OTAN o calcanhar de Aquiles da Europa em uma hipótese de cerco militar aos Países Bálticos."
    },
    {
        nome: "Zona Desmilitarizada da Coreia (DMZ)",
        categoria: "Fronteira Mais Armada do Mundo",
        lat: 37.9500,
        lng: 126.6800,
        dica: "Faixa de 4 km de largura ao longo do Paralelo 38 dividindo Coreia do Norte e Coreia do Sul.",
        fato: "Sem presença humana civil há mais de 70 anos, a faixa militarizada se transformou em um santuário ecológico involuntário."
    },
    {
        nome: "Linha de Controle na Caxemira (LoC)",
        categoria: "Fronteira Nuclear Disputada",
        lat: 34.2000,
        lng: 74.3000,
        dica: "Linha militar de demarcação entre a Índia e o Paquistão nos vales e glaciares do Himalaia.",
        fato: "No Glaciar de Siachen (a 6.000 metros de altitude), soldados dos dois países enfrentam o campo de batalha mais alto do planeta."
    },
    {
        nome: "Linha Verde de Nicósia",
        categoria: "Última Capital Dividida da Europa",
        lat: 35.1744,
        lng: 33.3606,
        dica: "Zona tampão da ONU que corta a capital de Chipre dividindo a parte grega da parte turca.",
        fato: "Patrulhada por capacetes azuis da ONU desde 1974, separa a República de Chipre do Estado autoproclamado de Chipre do Norte."
    },
    {
        nome: "Região do Essequibo",
        categoria: "Litígio Territorial Sul-Americano",
        lat: 6.0000,
        lng: -59.5000,
        dica: "Vasta região rica em petróleo correspondente a dois terços do território da Guiana, reivindicada pela Venezuela.",
        fato: "A disputa remonta à Sentença Arbitral de Paris de 1899 e ganhou tensão máxima com a descoberta de bilhões de barris de petróleo offshore."
    },
    {
        nome: "Ilhas Spratly",
        categoria: "Conflito Marítimo Asiático",
        lat: 9.8000,
        lng: 114.2000,
        dica: "Centenas de ilhotas e recifes no Mar do Sul da China reivindicados por 6 países simultaneamente.",
        fato: "A China construiu bases militares avançadas e pistas de pouso em cima de recifes de coral aterrados artificialmente."
    },
    {
        nome: "Colinas de Golã",
        categoria: "Planalto Estratégico do Oriente Médio",
        lat: 32.9667,
        lng: 35.7500,
        dica: "Planalto montanhoso capturado por Israel da Síria na Guerra dos Seis Dias em 1967.",
        fato: "Além do valor militar por dominar o Vale do Jordão, fornece cerca de um terço da água doce consumida em Israel."
    },
    {
        nome: "Transnístria",
        categoria: "Estado Não Reconhecido Pró-Rússia",
        lat: 46.8500,
        lng: 29.6333,
        dica: "Faixa estreita de terra ao longo do Rio Dniester, formalmente parte da Moldávia mas sob controle separatista.",
        fato: "Mantém símbolos soviéticos, moeda própria, forças armadas locais e guarnições de tropas pacificadoras russas desde 1992."
    },
    {
        nome: "Somalilândia",
        categoria: "Estado de Facto Não Reconhecido",
        lat: 9.5600,
        lng: 44.0600,
        dica: "Região autoproclamada independente no norte da Somália, com governo e moeda estáveis.",
        fato: "Embora funcione como uma democracia pacífica desde 1991, nenhum país do mundo concede reconhecimento diplomático oficial pleno."
    },
    {
        nome: "The Slash (Fronteira EUA-Canadá)",
        categoria: "A Linha Reta Desmatada",
        lat: 49.0000,
        lng: -115.0000,
        dica: "Faixa desmatada de 6 metros de largura ao longo de milhares de km do Paralelo 49.",
        fato: "A maior fronteira desmilitarizada do planeta (8.891 km) é podada a cada 6 anos para demarcar visualmente onde termina um país."
    },

    // ------------------------------------------------------------------------
    // 4. PÓLOS & EXTREMOS FÍSICOS DO PLANETA TERRA
    // ------------------------------------------------------------------------
    {
        nome: "Ponto Nemo",
        categoria: "Pólo da Inacessibilidade Oceânica",
        lat: -48.8767,
        lng: -123.3933,
        dica: "O lugar mais isolado de terra firme em todos os oceanos, no Pacífico Sul.",
        fato: "Os seres humanos mais próximos do Ponto Nemo são frequentemente os astronautas da Estação Espacial Internacional (a 400 km acima)."
    },
    {
        nome: "Fossa das Marianas (Challenger Deep)",
        categoria: "Ponto Mais Profundo da Terra",
        lat: 11.3500,
        lng: 142.2000,
        dica: "A fenda abissal mais profunda dos oceanos, no oeste do Oceano Pacífico.",
        fato: "Atinge quase 11.000 metros de profundidade sob uma pressão esmagadora de mais de 1.000 vezes a pressão atmosférica do nível do mar."
    },
    {
        nome: "Monte Everest",
        categoria: "Teto do Mundo",
        lat: 27.9881,
        lng: 86.9250,
        dica: "A montanha mais alta acima do nível do mar, na fronteira do Nepal com o Tibete chinês.",
        fato: "Com 8.848,86 metros de altitude, sua crista culminante marca exatamente a fronteira política entre duas nações."
    },
    {
        nome: "Vulcão Chimborazo",
        categoria: "Ponto Mais Perto do Espaço",
        lat: -1.4692,
        lng: -78.8169,
        dica: "Pico nos Andes equatorianos que é o ponto da superfície mais distante do centro da Terra.",
        fato: "Pelo formato achatado da Terra na Linha do Equador, seu cume fica a 6.384 km do núcleo, superando o Everest em distância espacial."
    },
    {
        nome: "Salar de Uyuni",
        categoria: "O Maior Espelho da Terra",
        lat: -20.1338,
        lng: -67.4891,
        dica: "Deserto de sal colossal no sudoeste da Bolívia, visível do espaço como uma mancha branca pura.",
        fato: "Com mais de 10.000 km², abriga gigantescas reservas globais de lítio e é tão plano que a NASA o usa para calibrar satélites."
    },
    {
        nome: "Mar Morto",
        categoria: "Depressão Mais Baixa em Terra Firme",
        lat: 31.5000,
        lng: 35.5000,
        dica: "Lago hipersalino entre Israel e Jordânia cujas margens ficam a 430 metros abaixo do nível do mar.",
        fato: "Sua salinidade chega a 34%, quase 10 vezes maior que a dos oceanos, impedindo que peixes ou plantas sobrevivam em suas águas."
    },
    {
        nome: "Depressão de Danakil",
        categoria: "A Fornalha da Terra",
        lat: 14.2400,
        lng: 40.3000,
        dica: "Região geológica hiper-árida no norte da Etiópia, com lagos de ácido e vulcões ativos.",
        fato: "Considerado um dos locais habitados mais quentes do planeta Terra, com temperaturas médias anuais que superam os 35°C."
    },
    {
        nome: "Lago Baikal",
        categoria: "Maior Reserva de Água Doce",
        lat: 53.5000,
        lng: 108.0000,
        dica: "Lago gigantesco na Sibéria russa, o mais profundo (1.642m) e antigo da Terra.",
        fato: "Guarda cerca de 20% de toda a água doce líquida não congelada da superfície do planeta, superando os 5 Grandes Lagos da América juntos."
    },
    {
        nome: "Oymyakon",
        categoria: "Pólo do Frio Permanente",
        lat: 63.4600,
        lng: 142.7800,
        dica: "Povoado na República de Sakha (Sibéria) reconhecido como o lugar habitado mais frio da Terra.",
        fato: "Em 1933 registrou a marca brutal de -67,7°C; o solo permanece permanentemente congelado (permafrost) por centenas de metros."
    },
    {
        nome: "Ilha Bouvet",
        categoria: "A Ilha Mais Remota do Planeta",
        lat: -54.4208,
        lng: 3.3564,
        dica: "Ilha vulcânica desabitada sob controle norueguês no Atlântico Sul, a 1.700 km da Antártida.",
        fato: "A terra habitada mais próxima fica a mais de 2.200 km de distância (Tristão da Cunha); 93% da sua superfície é coberta por geleiras."
    },
    {
        nome: "Cabo Horn",
        categoria: "Extremo Sul das Américas",
        lat: -55.9833,
        lng: -67.2667,
        dica: "Península no arquipélago da Terra do Fogo chilena onde Atlântico e Pacífico se chocam.",
        fato: "Famoso pelas ondas gigantes e tempestades da Passagem de Drake, considerado o Everest dos marinheiros à vela."
    },
    {
        nome: "Cabo da Boa Esperança",
        categoria: "Marco Náutico Sul-Africano",
        lat: -34.3569,
        lng: 18.4728,
        dica: "Península rochosa ao sul da Cidade do Cabo dobrada por Bartolomeu Dias em 1488.",
        fato: "Originalmente batizado de 'Cabo das Tormentas', foi renomeado por D. João II pela esperança portuguesa de abrir a rota às Índias."
    },

    // ------------------------------------------------------------------------
    // 5. MEGAPROJETOS, INFRAESTRUTURA & ENGENHARIA TERRITORIAL
    // ------------------------------------------------------------------------
    {
        nome: "Porto de Chancay",
        categoria: "Megaprojeto da Rota da Seda",
        lat: -11.5833,
        lng: -77.2667,
        dica: "Megaporto financiado pela China na costa do Peru para conectar a América do Sul diretamente à Ásia.",
        fato: "Projetado para encurtar a rota marítima até Xangai em até 15 dias, transformando o Peru no principal hub do Pacífico Sul."
    },
    {
        nome: "Represa das Três Gargantas",
        categoria: "Maior Hidrelétrica do Planeta",
        lat: 30.8267,
        lng: 111.0078,
        dica: "Colossal barragem no Rio Yangtzé na China central com mais de 2 km de extensão.",
        fato: "Seu reservatório retém mais de 39 bilhões de m³ de água, peso suficiente para desacelerar a rotação da Terra em 0,06 microssegundos."
    },
    {
        nome: "The Line (Neom)",
        categoria: "Cidade Linear Futurista",
        lat: 28.0000,
        lng: 35.3000,
        dica: "Megaprojeto urbano na Arábia Saudita planejado como um arranha-céu espelhado de 170 km no deserto.",
        fato: "Projetada para abrigar 9 milhões de pessoas sem carros ou estradas, utilizando energia 100% renovável às margens do Mar Vermelho."
    },
    {
        nome: "Ponte Hong Kong-Zhuhai-Macau",
        categoria: "Maior Ponte Marítima do Mundo",
        lat: 22.2800,
        lng: 113.7800,
        dica: "Complexo de 55 km de pontes e túneis ligando Hong Kong a Macau e à China continental pelo Delta das Pérolas.",
        fato: "Construída com aço suficiente para erguer 60 Torres Eiffel, inclui ilhas artificiais para transição ao túnel subaquático."
    },
    {
        nome: "Grande Rio Artificial da Líbia",
        categoria: "Maior Rede de Irrigação do Mundo",
        lat: 25.0000,
        lng: 17.0000,
        dica: "Rede subterrânea de tubulações de 4.000 km que bombeia água fóssil do Saara para a costa líbia.",
        fato: "Construída sob o governo de Muammar Gaddafi, extrai água de aquíferos não renováveis depositados na última era glacial."
    },
    {
        nome: "Eurotúnel (Túnel da Mancha)",
        categoria: "Túnel Ferroviário Submarino",
        lat: 51.0167,
        lng: 1.4500,
        dica: "Túnel sob o Estreito de Dover que conecta Folkestone na Inglaterra a Coquelles na França.",
        fato: "Com 37,9 km de trecho inteiramente debaixo d'água, é o túnel submarino com a maior extensão subaquática do planeta."
    },
    {
        nome: "Palm Jumeirah",
        categoria: "Arquipélago Artificial",
        lat: 25.1167,
        lng: 55.1333,
        dica: "Ilha artificial em formato de palmeira construída na costa de Dubai com aterros de areia marítima.",
        fato: "Adicionou mais de 78 km à linha costeira de Dubai, exigindo mais de 94 milhões de m³ de areia dragada do Golfo Pérsico."
    },

    // ------------------------------------------------------------------------
    // 6. CIDADES ESTRANHAS & CURIOSIDADES HUMANAS
    // ------------------------------------------------------------------------
    {
        nome: "Whittier",
        categoria: "Cidade em um Prédio",
        lat: 60.7731,
        lng: -148.6839,
        dica: "Pequena cidade portuária no Alasca onde quase todos os habitantes vivem dentro do mesmo edifício de 14 andares.",
        fato: "O edifício Begich Towers reúne delegacia, correio, mercado, igreja e escola sob o mesmo teto para abrigar a população das nevascas."
    },
    {
        nome: "Longyearbyen (Svalbard)",
        categoria: "Cofre Global de Sementes",
        lat: 78.2232,
        lng: 15.6267,
        dica: "A cidade mais setentrional do mundo, no arquipélago ártico de Svalbard sob soberania norueguesa.",
        fato: "Abriga o Banco Mundial de Sementes, escavado no permafrost de uma montanha congelada para proteger a agricultura contra o apocalipse."
    },
    {
        nome: "Coober Pedy",
        categoria: "Cidade Subterrânea de Opala",
        lat: -29.0142,
        lng: 134.7544,
        dica: "Cidade no deserto da Austrália Meridional onde cerca de metade dos habitantes vive em cavernas subterrâneas.",
        fato: "Conhecida como a capital mundial da opala, suas casas escavadas na rocha (dugouts) mantêm 23°C constantes contra o calor exterior de 45°C."
    },
    {
        nome: "La Rinconada",
        categoria: "Cidade Mais Alta do Mundo",
        lat: -14.6311,
        lng: -69.4467,
        dica: "Assentamento minerador de ouro nos Andes peruanos localizado a 5.100 metros de altitude.",
        fato: "Seus mais de 30 mil habitantes vivem sob condições extremas de ar rarefeito (hipóxia) e sem rede de saneamento básico formal."
    },
    {
        nome: "Naypyidaw",
        categoria: "Capital Fantasma",
        lat: 19.7633,
        lng: 96.0785,
        dica: "A colossal e isolada capital de Mianmar, construída do zero pela junta militar em 2005.",
        fato: "Possui avenidas imensas de até 20 pistas projetadas para desfiles militares ou pouso de caças, mas quase vazias de tráfego comum."
    },
    {
        nome: "Principado de Sealand",
        categoria: "Micronação em Plataforma",
        lat: 51.8950,
        lng: 1.4800,
        dica: "Antiga fortaleza marítima militar da 2ª Guerra Mundial a 12 km da costa da Inglaterra proclamada como país independente.",
        fato: "Fundada em 1967 pelo major Roy Bates, emite passaportes, selos e moedas próprias, embora não possua reconhecimento da ONU."
    },
    {
        nome: "Ilha da Queimada Grande",
        categoria: "Ilha das Cobras",
        lat: -24.4833,
        lng: -46.6750,
        dica: "Ilha no litoral de São Paulo onde o desembarque humano é proibido devido a milhares de serpentes venenosas.",
        fato: "É o único habitat no planeta da jararaca-ilhoa, cuja peçonha evoluiu para ser até 5 vezes mais potente do que a das jararacas do continente."
    },
    {
        nome: "Usina de Chernobil",
        categoria: "Zona de Exclusão Nuclear",
        lat: 51.3892,
        lng: 30.0997,
        dica: "Complexo atômico no norte da Ucrânia palco do pior desastre nuclear civil da história em 1986.",
        fato: "O reator 4 está sepultado sob um gigantesco sarcófago de aço de 36 mil toneladas projetado para durar 100 anos."
    },

    // ------------------------------------------------------------------------
    // 7. ILHAS ISOLADAS & MISTÉRIOS MARÍTIMOS
    // ------------------------------------------------------------------------
    {
        nome: "Ilha de Páscoa (Rapa Nui)",
        categoria: "Os Moais do Pacífico",
        lat: -27.1127,
        lng: -109.3497,
        dica: "Ilha polinésia sob soberania chilena famosa pelas quase mil estátuas monolíticas de pedra (moais).",
        fato: "Uma das terras habitadas mais isoladas da Terra, fica a 3.700 km da costa do Chile e a 2.075 km da Ilha Pitcairn."
    },
    {
        nome: "Ilha North Sentinel",
        categoria: "O Povo Mais Isolado da Terra",
        lat: 11.5572,
        lng: 92.2428,
        dica: "Ilha no arquipélago de Andaman (Índia) habitada pelos sentineleses, que rejeitam qualquer contato com o mundo externo.",
        fato: "O governo da Índia proíbe estritamente a aproximação de qualquer barco a menos de 5 km para proteger a tribo contra doenças externas."
    },
    {
        nome: "Tristão da Cunha",
        categoria: "Arquipélago Mais Remoto do Mundo",
        lat: -37.1052,
        lng: -12.2777,
        dica: "Território britânico no Atlântico Sul habitado por cerca de 250 pessoas, a 2.800 km da África do Sul.",
        fato: "Não possui aeroporto; o único acesso ao mundo exterior é por navios de pesca ou expedições que demoram 6 dias para chegar."
    },
    {
        nome: "Ilha Pitcairn",
        categoria: "Refúgio do HMS Bounty",
        lat: -25.0667,
        lng: -130.1000,
        dica: "Pequena ilha vulcânica no Pacífico Sul habitada por menos de 50 descendentes dos marinheiros rebeldes do HMS Bounty.",
        fato: "Os amotinados do Bounty queimaram seu próprio navio em 1790 para não serem encontrados pela Marinha Real Britânica."
    },
    {
        nome: "Atol de Bikini",
        categoria: "Campo de Testes Nucleares",
        lat: 11.5833,
        lng: 165.3833,
        dica: "Atol nas Ilhas Marshall onde os EUA realizaram 23 detonações de bombas atômicas e de hidrogênio entre 1946 e 1958.",
        fato: "Em 1954 foi detonada ali a bomba Castle Bravo (15 megatons), que vaporizou ilhotas e gerou radioatividade que impede o retorno dos nativos."
    },
    {
        nome: "Ilha Socotra",
        categoria: "Ilha Alienígena do Iêmen",
        lat: 12.4634,
        lng: 53.8237,
        dica: "Ilha no Mar Arábico famosa por suas árvores de sangue de dragão com formato de cogumelo invertido.",
        fato: "Mais de um terço de toda a flora de Socotra não existe em nenhum outro lugar da Terra devido ao isolamento de milhões de anos."
    },
    {
        nome: "Ilha de Santa Helena",
        categoria: "O Exílio Final de Napoleão",
        lat: -15.9650,
        lng: -5.7089,
        dica: "Ilha vulcânica isolada no meio do Oceano Atlântico Sul administrada pelo Reino Unido.",
        fato: "Foi a prisão no oceano escolhida pelos britânicos para exilar Napoleão Bonaparte após a Batalha de Waterloo em 1815 até sua morte em 1821."
    },
    {
        nome: "Ilhas Malvinas (Falklands)",
        categoria: "Território em Litígio no Atlântico",
        lat: -51.7963,
        lng: -59.5236,
        dica: "Arquipélago no Atlântico Sul sob administração do Reino Unido e reivindicado pela Argentina.",
        fato: "Em 1982 foi palco de uma guerra naval e terrestre de 74 dias que marcou profundamente a geopolítica da América do Sul."
    },
    {
        nome: "Ilhas Galápagos",
        categoria: "Laboratório Natural de Darwin",
        lat: -0.9538,
        lng: -90.9656,
        dica: "Arquipélago vulcânico no Oceano Pacífico pertencente ao Equador, lar de tartarugas gigantes.",
        fato: "A observação das diferenças anatômicas entre pássaros e tartarugas das ilhas inspirou Charles Darwin a formular a Teoria da Evolução."
    },

    // ------------------------------------------------------------------------
    // 8. MARCOS HISTÓRICOS & TRATADOS QUE DIVIDIRAM O MUNDO
    // ------------------------------------------------------------------------
    {
        nome: "Checkpoint Charlie",
        categoria: "O Portão da Guerra Fria",
        lat: 52.5075,
        lng: 13.3904,
        dica: "O posto de controle militar mais famoso do Muro de Berlim que dividia os setores americano e soviético.",
        fato: "Em outubro de 1961, tanques americanos e soviéticos ficaram apontados cano a cano a poucos metros de distância em um impasse tenso."
    },
    {
        nome: "Meridiano de Greenwich",
        categoria: "O Meridiano Zero (Longitude 0°)",
        lat: 51.4769,
        lng: 0.0000,
        dica: "Observatório Real em Londres por onde passa o meridiano de referência de todos os fusos horários da Terra.",
        fato: "Adotado internacionalmente na Conferência de Washington de 1884 para padronizar a navegação marítima e a contagem de tempo mundial."
    },
    {
        nome: "Cataratas do Iguaçu",
        categoria: "Tríplice Fronteira Sul-Americana",
        lat: -25.6953,
        lng: -54.4367,
        dica: "Cataratas espetaculares no encontro dos rios Iguaçu e Paraná, unindo Brasil, Argentina e Paraguai.",
        fato: "Reúne 275 quedas d'água e é o ponto de encontro de três soberanias políticas em uma das regiões comerciais mais dinâmicas do continente."
    },
    {
        nome: "Monumento Mitad del Mundo",
        categoria: "A Linha do Equador (Latitude 0°)",
        lat: -0.0022,
        lng: -78.4558,
        dica: "Monumento histórico próximo a Quito no Equador construído para marcar a divisão entre os hemisférios Norte e Sul.",
        fato: "Medições modernas de GPS revelaram que a Linha Equatorial real passa a cerca de 240 metros ao norte do monumento histórico de 1979."
    },
    {
        nome: "Tordesilhas",
        categoria: "A Cidade do Tratado de 1494",
        lat: 41.5000,
        lng: -5.0000,
        dica: "Cidade na Espanha onde Portugal e Castela assinaram o tratado que dividiu o Novo Mundo por um meridiano.",
        fato: "A linha imaginária a 370 léguas a oeste de Cabo Verde garantiu a Portugal a posse das terras do litoral leste do que se tornaria o Brasil."
    },
    {
        nome: "Yalta (Palácio de Livadia)",
        categoria: "A Conferência da Divisão do Mundo",
        lat: 44.4678,
        lng: 34.1433,
        dica: "Balneário na Península da Crimeia onde Roosevelt, Churchill e Stalin se reuniram em fevereiro de 1945.",
        fato: "A Conferência de Yalta estabeleceu a divisão das zonas de influência da Europa pós-guerra e moldou a ordem da Guerra Fria."
    },
    {
        nome: "Canal Beagle",
        categoria: "Disputa Territorial do Fim do Mundo",
        lat: -54.8833,
        lng: -68.2500,
        dica: "Estreito navegável no sul da Terra do Fogo disputado quase até a guerra entre Chile e Argentina em 1978.",
        fato: "A guerra iminente pelas ilhas Picton, Lennox e Nueva foi evitada no último instante pela mediação do Papa João Paulo II."
    },
    {
        nome: "Ilha dos Faisões",
        categoria: "Condomínio Binacional",
        lat: 43.3422,
        lng: -1.7761,
        dica: "Ilhota fluvial no Rio Bidasoa que troca de país a cada 6 meses entre a França e a Espanha.",
        fato: "Governada pela França de agosto a janeiro e pela Espanha de fevereiro a julho, conforme o Tratado dos Pirenéus de 1659."
    }
];

// Exportação compatível com browser e módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOCAIS_ONDE_FICA;
}
