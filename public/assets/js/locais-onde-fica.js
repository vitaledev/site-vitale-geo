/**
 * BANCO DE DADOS COMPLETO DE LOCAIS GEOPOLÍTICOS — VITALEGEO
 * Compilado automaticamente a partir do CerebroGeo Mestre.
 * Total de locais catalogados: 204
 */
const LOCAIS_ONDE_FICA = [
    {
        "nome": "Estreito de Ormuz",
        "categoria": "Chokepoint do Petróleo",
        "lat": 26.5667,
        "lng": 56.25,
        "dica": "Gargalo marítimo estratégico entre o Irã e Omã por onde escoa 20% do petróleo mundial.",
        "fato": "Com apenas 33 km de largura no seu ponto mais estreito, o Estreito de Ormuz é a artéria energética mais vigiada do Golfo Pérsico."
    },
    {
        "nome": "Canal de Suez",
        "categoria": "Chokepoint Comercial",
        "lat": 30.705,
        "lng": 32.3442,
        "dica": "Corta o Egito conectando o Mar Mediterrâneo ao Mar Vermelho sem contornar a África.",
        "fato": "Inaugurado em 1869, o canal movimenta 12% do comércio global e economiza cerca de 7.000 km de viagem aos navios mercantes."
    },
    {
        "nome": "Canal do Panamá",
        "categoria": "Chokepoint Interoceânico",
        "lat": 9.08,
        "lng": -79.68,
        "dica": "Conecta os Oceanos Atlântico e Pacífico através do istmo da América Central.",
        "fato": "Utiliza um lendário sistema de eclusas que ergue os cargueiros a 26 metros de altitude no Lago Gatún para atravessar o relevo."
    },
    {
        "nome": "Estreito de Malaca",
        "categoria": "Chokepoint Asiático",
        "lat": 2.5,
        "lng": 101.5,
        "dica": "Entre a Malásia e a ilha de Sumatra, é a rota marítima mais movimentada de navios do Extremo Oriente.",
        "fato": "Mais de 100 mil navios cruzam Malaca todo ano, abastecendo China, Japão e Coreia com matérias-primas e energia."
    },
    {
        "nome": "Estreito de Gibraltar",
        "categoria": "Porta do Mediterrâneo",
        "lat": 35.9667,
        "lng": -5.6,
        "dica": "Separa a Europa (Espanha) da África (Marrocos) por apenas 14 km de água marítima.",
        "fato": "Na antiguidade clássica, era conhecido como as lendárias 'Colunas de Hércules', marcando o limite ocidental do mundo conhecido."
    },
    {
        "nome": "Estreito de Bósforo",
        "categoria": "Divisor Continental",
        "lat": 41.1167,
        "lng": 29.0833,
        "dica": "Corta a cidade de Istambul dividindo a Europa da Ásia e ligando o Mar Negro ao Mar de Mármara.",
        "fato": "Regulado pela Convenção de Montreux de 1936, é a única saída marítima para navios de países como Ucrânia, Romênia e Geórgia."
    },
    {
        "nome": "Estreito de Bab el-Mandeb",
        "categoria": "Gargalo do Mar Vermelho",
        "lat": 12.5833,
        "lng": 43.3333,
        "dica": "Separa o Iêmen na Península Arábica do Djibuti e Eritreia no Chifre da África.",
        "fato": "Conhecido em árabe como 'A Porta das Lágrimas', é a entrada meridional do Canal de Suez e rota vital de petroleiros."
    },
    {
        "nome": "Estreito de Taiwan",
        "categoria": "Zona de Tensão Geopolítica",
        "lat": 24,
        "lng": 119.5,
        "dica": "Braço de mar de 160 km de largura que separa a China continental da ilha de Taiwan.",
        "fato": "Por ele navega cerca de metade da frota global de navios porta-contêineres e 88% dos maiores cargueiros do planeta."
    },
    {
        "nome": "Estreito de Kerch",
        "categoria": "Ponte e Chokepoint do Mar Negro",
        "lat": 45.3,
        "lng": 36.5,
        "dica": "Canal que conecta o Mar Negro ao raso Mar de Azov, sob a colossal Ponte da Crimeia.",
        "fato": "Ponto nevrálgico disputado militarmente entre a Rússia e a Ucrânia para controle da navegação e acesso ao Donbass."
    },
    {
        "nome": "Estreito de Dardanelos",
        "categoria": "Gargalo Histórico de Galípoli",
        "lat": 40.2,
        "lng": 26.4,
        "dica": "Estreito turco que liga o Mar Egeu ao Mar de Mármara, caminho obrigatório até Istambul.",
        "fato": "Palco da célebre Batalha de Galípoli na 1ª Guerra Mundial, onde as forças aliadas tentaram forçar a passagem para a Rússia czarista."
    },
    {
        "nome": "Canal de Kiel",
        "categoria": "Atalho Báltico-Mar do Norte",
        "lat": 54.3333,
        "lng": 9.8333,
        "dica": "Canal artificial de 98 km que corta a península da Jutlândia no norte da Alemanha.",
        "fato": "Evita que cargueiros contornem toda a Dinamarca, economizando 460 km de navegação turbulenta em mar aberto."
    },
    {
        "nome": "Canal de Corinto",
        "categoria": "Cânion Artificial Histórico",
        "lat": 37.9344,
        "lng": 22.9839,
        "dica": "Corta o istmo de Corinto na Grécia com paredes verticais de calcário de 63 metros de altura.",
        "fato": "Com apenas 21 metros de largura, foi idealizado pelo imperador romano Nero em 67 d.C., mas só foi concluído em 1893."
    },
    {
        "nome": "Estreito de Magalhães",
        "categoria": "Passagem Austral",
        "lat": -53.5,
        "lng": -70.5,
        "dica": "Caminho natural navegável no extremo sul do Chile entre o continente e a Terra do Fogo.",
        "fato": "Descoberto por Fernão de Magalhães em 1520 na primeira viagem de circum-navegação da história humana."
    },
    {
        "nome": "Estreito de Bering",
        "categoria": "Fronteira Ásia-América",
        "lat": 65.8,
        "lng": -168.9,
        "dica": "Separa a Sibéria russa do Alasca norte-americano por apenas 82 km de água gelada.",
        "fato": "Durante as glaciações pré-históricas, formou uma ponte de terra seca (Beríngia) por onde os humanos povoaram as Américas."
    },
    {
        "nome": "Estreito de Dover (Passo de Calais)",
        "categoria": "Gargalo da Mancha",
        "lat": 51,
        "lng": 1.45,
        "dica": "O ponto mais estreito do Canal da Mancha, separando a Inglaterra da França por 33 km.",
        "fato": "Abaixo do seu leito marítimo passa o Eurotúnel, com 50 km de extensão ferroviária submarina."
    },
    {
        "nome": "Estreito de Oresund",
        "categoria": "Ponte Escandinava",
        "lat": 55.6,
        "lng": 12.75,
        "dica": "Separa a Dinamarca da Suécia, cruzado pela icônica Ponte-Túnel de Oresund.",
        "fato": "A ponte se transforma em uma ilha artificial e mergulha em um túnel submarino para permitir a passagem livre de navios e aviões."
    },
    {
        "nome": "Kaliningrado",
        "categoria": "Enclave Russo na Europa",
        "lat": 54.7104,
        "lng": 20.4522,
        "dica": "Território militar russo separado do resto da Rússia, prensado entre Polônia e Lituânia.",
        "fato": "Antiga cidade prussiana de Königsberg, abriga a frota russa do Mar Báltico e mísseis estratégicos de longo alcance."
    },
    {
        "nome": "Baarle",
        "categoria": "Labirinto de Enclaves",
        "lat": 51.4433,
        "lng": 4.9317,
        "dica": "Cidade fronteiriça entre Bélgica e Holanda com 30 enclaves interligados cortando casas e ruas.",
        "fato": "A linha de fronteira é desenhada no chão com cruzes brancas; se ela corta sua porta de entrada, define qual país você obedece."
    },
    {
        "nome": "Bir Tawil",
        "categoria": "Terra Nullius (De Ninguém)",
        "lat": 21.8683,
        "lng": 33.7431,
        "dica": "Território de 2.060 km² no deserto entre o Egito e o Sudão que nenhum país quer reivindicar.",
        "fato": "Devido a tratados divergentes de 1899 e 1902, aceitar Bir Tawil faria qualquer um dos países perder o valioso Triângulo de Hala'ib."
    },
    {
        "nome": "Llívia",
        "categoria": "Enclave Espanhol na França",
        "lat": 42.4636,
        "lng": 1.9806,
        "dica": "Pedaço de território da Espanha totalmente cercado pelo território francês nos Pirenéus.",
        "fato": "Pelo Tratado dos Pirenéus de 1659, a Espanha cedeu vilas à França, mas Llívia continuou espanhola porque detinha o título honorífico de 'cidade'."
    },
    {
        "nome": "Büsingen am Hochrhein",
        "categoria": "Enclave Alemão na Suíça",
        "lat": 47.6972,
        "lng": 8.6892,
        "dica": "Município alemão situado inteiramente dentro do cantão suíço de Schaffhausen.",
        "fato": "Utiliza duas moedas (Euro e Franco Suíço), dois códigos postais e dois prefixos telefônicos internacionais."
    },
    {
        "nome": "Campione d'Italia",
        "categoria": "Enclave Italiano na Suíça",
        "lat": 45.9692,
        "lng": 8.9711,
        "dica": "Comuna italiana nas margens do Lago de Lugano, totalmente cercada pelo cantão suíço de Ticino.",
        "fato": "Famosa pelo seu cassino municipal e por operar na prática com infraestrutura, telecomunicações e moeda suíças."
    },
    {
        "nome": "Ceuta",
        "categoria": "Enclave Espanhol na África",
        "lat": 35.8894,
        "lng": -5.3213,
        "dica": "Cidade autônoma espanhola situada na ponta norte do território do Marrocos.",
        "fato": "Faz parte do território aduaneiro da União Europeia em pleno continente africano, protegida por cercas de alta segurança."
    },
    {
        "nome": "Melilla",
        "categoria": "Enclave Espanhol na África",
        "lat": 35.2922,
        "lng": -2.9381,
        "dica": "Cidade autônoma espanhola na costa do Marrocos, a leste de Ceuta.",
        "fato": "Soberania espanhola mantida desde 1497, é um dos dois únicos pontos de fronteira terrestre da União Europeia com a África."
    },
    {
        "nome": "Point Roberts",
        "categoria": "Enclave dos EUA no Canadá",
        "lat": 48.9883,
        "lng": -123.0567,
        "dica": "Península no sul de Vancouver que pertence aos EUA devido ao traçado reto do Paralelo 49.",
        "fato": "As crianças locais precisam cruzar quatro postos de imigração internacional todos os dias de ônibus para estudar em escolas dos EUA."
    },
    {
        "nome": "Enclave de Cabinda",
        "categoria": "Exclave Petrolífero Africano",
        "lat": -5.55,
        "lng": 12.2,
        "dica": "Província ultramarina de Angola separada do resto do país por uma faixa de terra da RD do Congo.",
        "fato": "Embora isolada geograficamente de Luanda, suas jazidas offshore respondem por mais de metade de todo o petróleo produzido em Angola."
    },
    {
        "nome": "Nakhchivan",
        "categoria": "Exclave do Azerbaijão",
        "lat": 39.2,
        "lng": 45.4,
        "dica": "República autônoma azeri separada do Azerbaijão continental pelo território da Armênia.",
        "fato": "O estratégico Corredor de Zangezur é disputado para ligar Nakhchivan diretamente a Baku sem controle aduaneiro armênio."
    },
    {
        "nome": "Madha e Nahwa",
        "categoria": "Enclave Dentro de Enclave",
        "lat": 25.2667,
        "lng": 56.3333,
        "dica": "Madha pertence a Omã dentro dos Emirados; no centro de Madha fica Nahwa, que pertence aos Emirados!",
        "fato": "Um dos raríssimos contra-enclaves de segunda ordem do planeta, nas montanhas áridas da Península de Musandam."
    },
    {
        "nome": "San Marino",
        "categoria": "República Enclavada",
        "lat": 43.9333,
        "lng": 12.45,
        "dica": "Microestado soberano no topo do Monte Titano, inteiramente cercado pela Itália.",
        "fato": "Fundada em 301 d.C., é a república constitucional mais antiga em atividade contínua no planeta Terra."
    },
    {
        "nome": "Vaticano",
        "categoria": "Cidade-Estado Enclavada",
        "lat": 41.9029,
        "lng": 12.4534,
        "dica": "O menor país soberano do mundo com 0,49 km², totalmente cercado pela cidade de Roma.",
        "fato": "Sua soberania temporal independente foi formalizada em 1929 através do Tratado de Latrão firmado com a Itália."
    },
    {
        "nome": "Lesoto",
        "categoria": "Reino Enclavado nas Montanhas",
        "lat": -29.6,
        "lng": 28.2333,
        "dica": "Nação montanhosa independente inteiramente cercada pelo território da África do Sul.",
        "fato": "É o único país independente do mundo cujo território inteiro fica acima de 1.000 metros de altitude acima do mar."
    },
    {
        "nome": "Corredor de Suwalki",
        "categoria": "Gargalo Militar da OTAN",
        "lat": 54.2667,
        "lng": 23.3333,
        "dica": "Faixa estreita de 65 km de fronteira entre Polônia e Lituânia, ligando Belarus a Kaliningrado.",
        "fato": "Considerado pelos generais da OTAN o calcanhar de Aquiles da Europa em uma hipótese de cerco militar aos Países Bálticos."
    },
    {
        "nome": "Zona Desmilitarizada da Coreia (DMZ)",
        "categoria": "Fronteira Mais Armada do Mundo",
        "lat": 37.95,
        "lng": 126.68,
        "dica": "Faixa de 4 km de largura ao longo do Paralelo 38 dividindo Coreia do Norte e Coreia do Sul.",
        "fato": "Sem presença humana civil há mais de 70 anos, a faixa militarizada se transformou em um santuário ecológico involuntário."
    },
    {
        "nome": "Linha de Controle na Caxemira (LoC)",
        "categoria": "Fronteira Nuclear Disputada",
        "lat": 34.2,
        "lng": 74.3,
        "dica": "Linha militar de demarcação entre a Índia e o Paquistão nos vales e glaciares do Himalaia.",
        "fato": "No Glaciar de Siachen (a 6.000 metros de altitude), soldados dos dois países enfrentam o campo de batalha mais alto do planeta."
    },
    {
        "nome": "Linha Verde de Nicósia",
        "categoria": "Última Capital Dividida da Europa",
        "lat": 35.1744,
        "lng": 33.3606,
        "dica": "Zona tampão da ONU que corta a capital de Chipre dividindo a parte grega da parte turca.",
        "fato": "Patrulhada por capacetes azuis da ONU desde 1974, separa a República de Chipre do Estado autoproclamado de Chipre do Norte."
    },
    {
        "nome": "Região do Essequibo",
        "categoria": "Litígio Territorial Sul-Americano",
        "lat": 6,
        "lng": -59.5,
        "dica": "Vasta região rica em petróleo correspondente a dois terços do território da Guiana, reivindicada pela Venezuela.",
        "fato": "A disputa remonta à Sentença Arbitral de Paris de 1899 e ganhou tensão máxima com a descoberta de bilhões de barris de petróleo offshore."
    },
    {
        "nome": "Ilhas Spratly",
        "categoria": "Conflito Marítimo Asiático",
        "lat": 9.8,
        "lng": 114.2,
        "dica": "Centenas de ilhotas e recifes no Mar do Sul da China reivindicados por 6 países simultaneamente.",
        "fato": "A China construiu bases militares avançadas e pistas de pouso em cima de recifes de coral aterrados artificialmente."
    },
    {
        "nome": "Colinas de Golã",
        "categoria": "Planalto Estratégico do Oriente Médio",
        "lat": 32.9667,
        "lng": 35.75,
        "dica": "Planalto montanhoso capturado por Israel da Síria na Guerra dos Seis Dias em 1967.",
        "fato": "Além do valor militar por dominar o Vale do Jordão, fornece cerca de um terço da água doce consumida em Israel."
    },
    {
        "nome": "Transnístria",
        "categoria": "Estado Não Reconhecido Pró-Rússia",
        "lat": 46.85,
        "lng": 29.6333,
        "dica": "Faixa estreita de terra ao longo do Rio Dniester, formalmente parte da Moldávia mas sob controle separatista.",
        "fato": "Mantém símbolos soviéticos, moeda própria, forças armadas locais e guarnições de tropas pacificadoras russas desde 1992."
    },
    {
        "nome": "Somalilândia",
        "categoria": "Estado de Facto Não Reconhecido",
        "lat": 9.56,
        "lng": 44.06,
        "dica": "Região autoproclamada independente no norte da Somália, com governo e moeda estáveis.",
        "fato": "Embora funcione como uma democracia pacífica desde 1991, nenhum país do mundo concede reconhecimento diplomático oficial pleno."
    },
    {
        "nome": "The Slash (Fronteira EUA-Canadá)",
        "categoria": "A Linha Reta Desmatada",
        "lat": 49,
        "lng": -115,
        "dica": "Faixa desmatada de 6 metros de largura ao longo de milhares de km do Paralelo 49.",
        "fato": "A maior fronteira desmilitarizada do planeta (8.891 km) é podada a cada 6 anos para demarcar visualmente onde termina um país."
    },
    {
        "nome": "Ponto Nemo",
        "categoria": "Pólo da Inacessibilidade Oceânica",
        "lat": -48.8767,
        "lng": -123.3933,
        "dica": "O lugar mais isolado de terra firme em todos os oceanos, no Pacífico Sul.",
        "fato": "Os seres humanos mais próximos do Ponto Nemo são frequentemente os astronautas da Estação Espacial Internacional (a 400 km acima)."
    },
    {
        "nome": "Fossa das Marianas (Challenger Deep)",
        "categoria": "Ponto Mais Profundo da Terra",
        "lat": 11.35,
        "lng": 142.2,
        "dica": "A fenda abissal mais profunda dos oceanos, no oeste do Oceano Pacífico.",
        "fato": "Atinge quase 11.000 metros de profundidade sob uma pressão esmagadora de mais de 1.000 vezes a pressão atmosférica do nível do mar."
    },
    {
        "nome": "Monte Everest",
        "categoria": "Teto do Mundo",
        "lat": 27.9881,
        "lng": 86.925,
        "dica": "A montanha mais alta acima do nível do mar, na fronteira do Nepal com o Tibete chinês.",
        "fato": "Com 8.848,86 metros de altitude, sua crista culminante marca exatamente a fronteira política entre duas nações."
    },
    {
        "nome": "Vulcão Chimborazo",
        "categoria": "Ponto Mais Perto do Espaço",
        "lat": -1.4692,
        "lng": -78.8169,
        "dica": "Pico nos Andes equatorianos que é o ponto da superfície mais distante do centro da Terra.",
        "fato": "Pelo formato achatado da Terra na Linha do Equador, seu cume fica a 6.384 km do núcleo, superando o Everest em distância espacial."
    },
    {
        "nome": "Salar de Uyuni",
        "categoria": "O Maior Espelho da Terra",
        "lat": -20.1338,
        "lng": -67.4891,
        "dica": "Deserto de sal colossal no sudoeste da Bolívia, visível do espaço como uma mancha branca pura.",
        "fato": "Com mais de 10.000 km², abriga gigantescas reservas globais de lítio e é tão plano que a NASA o usa para calibrar satélites."
    },
    {
        "nome": "Mar Morto",
        "categoria": "Depressão Mais Baixa em Terra Firme",
        "lat": 31.5,
        "lng": 35.5,
        "dica": "Lago hipersalino entre Israel e Jordânia cujas margens ficam a 430 metros abaixo do nível do mar.",
        "fato": "Sua salinidade chega a 34%, quase 10 vezes maior que a dos oceanos, impedindo que peixes ou plantas sobrevivam em suas águas."
    },
    {
        "nome": "Depressão de Danakil",
        "categoria": "A Fornalha da Terra",
        "lat": 14.24,
        "lng": 40.3,
        "dica": "Região geológica hiper-árida no norte da Etiópia, com lagos de ácido e vulcões ativos.",
        "fato": "Considerado um dos locais habitados mais quentes do planeta Terra, com temperaturas médias anuais que superam os 35°C."
    },
    {
        "nome": "Lago Baikal",
        "categoria": "Maior Reserva de Água Doce",
        "lat": 53.5,
        "lng": 108,
        "dica": "Lago gigantesco na Sibéria russa, o mais profundo (1.642m) e antigo da Terra.",
        "fato": "Guarda cerca de 20% de toda a água doce líquida não congelada da superfície do planeta, superando os 5 Grandes Lagos da América juntos."
    },
    {
        "nome": "Oymyakon",
        "categoria": "Pólo do Frio Permanente",
        "lat": 63.46,
        "lng": 142.78,
        "dica": "Povoado na República de Sakha (Sibéria) reconhecido como o lugar habitado mais frio da Terra.",
        "fato": "Em 1933 registrou a marca brutal de -67,7°C; o solo permanece permanentemente congelado (permafrost) por centenas de metros."
    },
    {
        "nome": "Ilha Bouvet",
        "categoria": "A Ilha Mais Remota do Planeta",
        "lat": -54.4208,
        "lng": 3.3564,
        "dica": "Ilha vulcânica desabitada sob controle norueguês no Atlântico Sul, a 1.700 km da Antártida.",
        "fato": "A terra habitada mais próxima fica a mais de 2.200 km de distância (Tristão da Cunha); 93% da sua superfície é coberta por geleiras."
    },
    {
        "nome": "Cabo Horn",
        "categoria": "Extremo Sul das Américas",
        "lat": -55.9833,
        "lng": -67.2667,
        "dica": "Península no arquipélago da Terra do Fogo chilena onde Atlântico e Pacífico se chocam.",
        "fato": "Famoso pelas ondas gigantes e tempestades da Passagem de Drake, considerado o Everest dos marinheiros à vela."
    },
    {
        "nome": "Cabo da Boa Esperança",
        "categoria": "Marco Náutico Sul-Africano",
        "lat": -34.3569,
        "lng": 18.4728,
        "dica": "Península rochosa ao sul da Cidade do Cabo dobrada por Bartolomeu Dias em 1488.",
        "fato": "Originalmente batizado de 'Cabo das Tormentas', foi renomeado por D. João II pela esperança portuguesa de abrir a rota às Índias."
    },
    {
        "nome": "Porto de Chancay",
        "categoria": "Megaprojeto da Rota da Seda",
        "lat": -11.5833,
        "lng": -77.2667,
        "dica": "Megaporto financiado pela China na costa do Peru para conectar a América do Sul diretamente à Ásia.",
        "fato": "Projetado para encurtar a rota marítima até Xangai em até 15 dias, transformando o Peru no principal hub do Pacífico Sul."
    },
    {
        "nome": "Represa das Três Gargantas",
        "categoria": "Maior Hidrelétrica do Planeta",
        "lat": 30.8267,
        "lng": 111.0078,
        "dica": "Colossal barragem no Rio Yangtzé na China central com mais de 2 km de extensão.",
        "fato": "Seu reservatório retém mais de 39 bilhões de m³ de água, peso suficiente para desacelerar a rotação da Terra em 0,06 microssegundos."
    },
    {
        "nome": "The Line (Neom)",
        "categoria": "Cidade Linear Futurista",
        "lat": 28,
        "lng": 35.3,
        "dica": "Megaprojeto urbano na Arábia Saudita planejado como um arranha-céu espelhado de 170 km no deserto.",
        "fato": "Projetada para abrigar 9 milhões de pessoas sem carros ou estradas, utilizando energia 100% renovável às margens do Mar Vermelho."
    },
    {
        "nome": "Ponte Hong Kong-Zhuhai-Macau",
        "categoria": "Maior Ponte Marítima do Mundo",
        "lat": 22.28,
        "lng": 113.78,
        "dica": "Complexo de 55 km de pontes e túneis ligando Hong Kong a Macau e à China continental pelo Delta das Pérolas.",
        "fato": "Construída com aço suficiente para erguer 60 Torres Eiffel, inclui ilhas artificiais para transição ao túnel subaquático."
    },
    {
        "nome": "Grande Rio Artificial da Líbia",
        "categoria": "Maior Rede de Irrigação do Mundo",
        "lat": 25,
        "lng": 17,
        "dica": "Rede subterrânea de tubulações de 4.000 km que bombeia água fóssil do Saara para a costa líbia.",
        "fato": "Construída sob o governo de Muammar Gaddafi, extrai água de aquíferos não renováveis depositados na última era glacial."
    },
    {
        "nome": "Eurotúnel (Túnel da Mancha)",
        "categoria": "Túnel Ferroviário Submarino",
        "lat": 51.0167,
        "lng": 1.45,
        "dica": "Túnel sob o Estreito de Dover que conecta Folkestone na Inglaterra a Coquelles na França.",
        "fato": "Com 37,9 km de trecho inteiramente debaixo d'água, é o túnel submarino com a maior extensão subaquática do planeta."
    },
    {
        "nome": "Palm Jumeirah",
        "categoria": "Arquipélago Artificial",
        "lat": 25.1167,
        "lng": 55.1333,
        "dica": "Ilha artificial em formato de palmeira construída na costa de Dubai com aterros de areia marítima.",
        "fato": "Adicionou mais de 78 km à linha costeira de Dubai, exigindo mais de 94 milhões de m³ de areia dragada do Golfo Pérsico."
    },
    {
        "nome": "Whittier",
        "categoria": "Cidade em um Prédio",
        "lat": 60.7731,
        "lng": -148.6839,
        "dica": "Pequena cidade portuária no Alasca onde quase todos os habitantes vivem dentro do mesmo edifício de 14 andares.",
        "fato": "O edifício Begich Towers reúne delegacia, correio, mercado, igreja e escola sob o mesmo teto para abrigar a população das nevascas."
    },
    {
        "nome": "Longyearbyen (Svalbard)",
        "categoria": "Cofre Global de Sementes",
        "lat": 78.2232,
        "lng": 15.6267,
        "dica": "A cidade mais setentrional do mundo, no arquipélago ártico de Svalbard sob soberania norueguesa.",
        "fato": "Abriga o Banco Mundial de Sementes, escavado no permafrost de uma montanha congelada para proteger a agricultura contra o apocalipse."
    },
    {
        "nome": "Coober Pedy",
        "categoria": "Cidade Subterrânea de Opala",
        "lat": -29.0142,
        "lng": 134.7544,
        "dica": "Cidade no deserto da Austrália Meridional onde cerca de metade dos habitantes vive em cavernas subterrâneas.",
        "fato": "Conhecida como a capital mundial da opala, suas casas escavadas na rocha (dugouts) mantêm 23°C constantes contra o calor exterior de 45°C."
    },
    {
        "nome": "La Rinconada",
        "categoria": "Cidade Mais Alta do Mundo",
        "lat": -14.6311,
        "lng": -69.4467,
        "dica": "Assentamento minerador de ouro nos Andes peruanos localizado a 5.100 metros de altitude.",
        "fato": "Seus mais de 30 mil habitantes vivem sob condições extremas de ar rarefeito (hipóxia) e sem rede de saneamento básico formal."
    },
    {
        "nome": "Naypyidaw",
        "categoria": "Capital Fantasma",
        "lat": 19.7633,
        "lng": 96.0785,
        "dica": "A colossal e isolada capital de Mianmar, construída do zero pela junta militar em 2005.",
        "fato": "Possui avenidas imensas de até 20 pistas projetadas para desfiles militares ou pouso de caças, mas quase vazias de tráfego comum."
    },
    {
        "nome": "Principado de Sealand",
        "categoria": "Micronação em Plataforma",
        "lat": 51.895,
        "lng": 1.48,
        "dica": "Antiga fortaleza marítima militar da 2ª Guerra Mundial a 12 km da costa da Inglaterra proclamada como país independente.",
        "fato": "Fundada em 1967 pelo major Roy Bates, emite passaportes, selos e moedas próprias, embora não possua reconhecimento da ONU."
    },
    {
        "nome": "Ilha da Queimada Grande",
        "categoria": "Ilha das Cobras",
        "lat": -24.4833,
        "lng": -46.675,
        "dica": "Ilha no litoral de São Paulo onde o desembarque humano é proibido devido a milhares de serpentes venenosas.",
        "fato": "É o único habitat no planeta da jararaca-ilhoa, cuja peçonha evoluiu para ser até 5 vezes mais potente do que a das jararacas do continente."
    },
    {
        "nome": "Usina de Chernobil",
        "categoria": "Zona de Exclusão Nuclear",
        "lat": 51.3892,
        "lng": 30.0997,
        "dica": "Complexo atômico no norte da Ucrânia palco do pior desastre nuclear civil da história em 1986.",
        "fato": "O reator 4 está sepultado sob um gigantesco sarcófago de aço de 36 mil toneladas projetado para durar 100 anos."
    },
    {
        "nome": "Ilha de Páscoa (Rapa Nui)",
        "categoria": "Os Moais do Pacífico",
        "lat": -27.1127,
        "lng": -109.3497,
        "dica": "Ilha polinésia sob soberania chilena famosa pelas quase mil estátuas monolíticas de pedra (moais).",
        "fato": "Uma das terras habitadas mais isoladas da Terra, fica a 3.700 km da costa do Chile e a 2.075 km da Ilha Pitcairn."
    },
    {
        "nome": "Ilha North Sentinel",
        "categoria": "O Povo Mais Isolado da Terra",
        "lat": 11.5572,
        "lng": 92.2428,
        "dica": "Ilha no arquipélago de Andaman (Índia) habitada pelos sentineleses, que rejeitam qualquer contato com o mundo externo.",
        "fato": "O governo da Índia proíbe estritamente a aproximação de qualquer barco a menos de 5 km para proteger a tribo contra doenças externas."
    },
    {
        "nome": "Tristão da Cunha",
        "categoria": "Arquipélago Mais Remoto do Mundo",
        "lat": -37.1052,
        "lng": -12.2777,
        "dica": "Território britânico no Atlântico Sul habitado por cerca de 250 pessoas, a 2.800 km da África do Sul.",
        "fato": "Não possui aeroporto; o único acesso ao mundo exterior é por navios de pesca ou expedições que demoram 6 dias para chegar."
    },
    {
        "nome": "Ilha Pitcairn",
        "categoria": "Refúgio do HMS Bounty",
        "lat": -25.0667,
        "lng": -130.1,
        "dica": "Pequena ilha vulcânica no Pacífico Sul habitada por menos de 50 descendentes dos marinheiros rebeldes do HMS Bounty.",
        "fato": "Os amotinados do Bounty queimaram seu próprio navio em 1790 para não serem encontrados pela Marinha Real Britânica."
    },
    {
        "nome": "Atol de Bikini",
        "categoria": "Campo de Testes Nucleares",
        "lat": 11.5833,
        "lng": 165.3833,
        "dica": "Atol nas Ilhas Marshall onde os EUA realizaram 23 detonações de bombas atômicas e de hidrogênio entre 1946 e 1958.",
        "fato": "Em 1954 foi detonada ali a bomba Castle Bravo (15 megatons), que vaporizou ilhotas e gerou radioatividade que impede o retorno dos nativos."
    },
    {
        "nome": "Ilha Socotra",
        "categoria": "Ilha Alienígena do Iêmen",
        "lat": 12.4634,
        "lng": 53.8237,
        "dica": "Ilha no Mar Arábico famosa por suas árvores de sangue de dragão com formato de cogumelo invertido.",
        "fato": "Mais de um terço de toda a flora de Socotra não existe em nenhum outro lugar da Terra devido ao isolamento de milhões de anos."
    },
    {
        "nome": "Ilha de Santa Helena",
        "categoria": "O Exílio Final de Napoleão",
        "lat": -15.965,
        "lng": -5.7089,
        "dica": "Ilha vulcânica isolada no meio do Oceano Atlântico Sul administrada pelo Reino Unido.",
        "fato": "Foi a prisão no oceano escolhida pelos britânicos para exilar Napoleão Bonaparte após a Batalha de Waterloo em 1815 até sua morte em 1821."
    },
    {
        "nome": "Ilhas Malvinas (Falklands)",
        "categoria": "Território em Litígio no Atlântico",
        "lat": -51.7963,
        "lng": -59.5236,
        "dica": "Arquipélago no Atlântico Sul sob administração do Reino Unido e reivindicado pela Argentina.",
        "fato": "Em 1982 foi palco de uma guerra naval e terrestre de 74 dias que marcou profundamente a geopolítica da América do Sul."
    },
    {
        "nome": "Ilhas Galápagos",
        "categoria": "Laboratório Natural de Darwin",
        "lat": -0.9538,
        "lng": -90.9656,
        "dica": "Arquipélago vulcânico no Oceano Pacífico pertencente ao Equador, lar de tartarugas gigantes.",
        "fato": "A observação das diferenças anatômicas entre pássaros e tartarugas das ilhas inspirou Charles Darwin a formular a Teoria da Evolução."
    },
    {
        "nome": "Checkpoint Charlie",
        "categoria": "O Portão da Guerra Fria",
        "lat": 52.5075,
        "lng": 13.3904,
        "dica": "O posto de controle militar mais famoso do Muro de Berlim que dividia os setores americano e soviético.",
        "fato": "Em outubro de 1961, tanques americanos e soviéticos ficaram apontados cano a cano a poucos metros de distância em um impasse tenso."
    },
    {
        "nome": "Meridiano de Greenwich",
        "categoria": "O Meridiano Zero (Longitude 0°)",
        "lat": 51.4769,
        "lng": 0,
        "dica": "Observatório Real em Londres por onde passa o meridiano de referência de todos os fusos horários da Terra.",
        "fato": "Adotado internacionalmente na Conferência de Washington de 1884 para padronizar a navegação marítima e a contagem de tempo mundial."
    },
    {
        "nome": "Cataratas do Iguaçu",
        "categoria": "Tríplice Fronteira Sul-Americana",
        "lat": -25.6953,
        "lng": -54.4367,
        "dica": "Cataratas espetaculares no encontro dos rios Iguaçu e Paraná, unindo Brasil, Argentina e Paraguai.",
        "fato": "Reúne 275 quedas d'água e é o ponto de encontro de três soberanias políticas em uma das regiões comerciais mais dinâmicas do continente."
    },
    {
        "nome": "Monumento Mitad del Mundo",
        "categoria": "A Linha do Equador (Latitude 0°)",
        "lat": -0.0022,
        "lng": -78.4558,
        "dica": "Monumento histórico próximo a Quito no Equador construído para marcar a divisão entre os hemisférios Norte e Sul.",
        "fato": "Medições modernas de GPS revelaram que a Linha Equatorial real passa a cerca de 240 metros ao norte do monumento histórico de 1979."
    },
    {
        "nome": "Tordesilhas",
        "categoria": "A Cidade do Tratado de 1494",
        "lat": 41.5,
        "lng": -5,
        "dica": "Cidade na Espanha onde Portugal e Castela assinaram o tratado que dividiu o Novo Mundo por um meridiano.",
        "fato": "A linha imaginária a 370 léguas a oeste de Cabo Verde garantiu a Portugal a posse das terras do litoral leste do que se tornaria o Brasil."
    },
    {
        "nome": "Yalta (Palácio de Livadia)",
        "categoria": "A Conferência da Divisão do Mundo",
        "lat": 44.4678,
        "lng": 34.1433,
        "dica": "Balneário na Península da Crimeia onde Roosevelt, Churchill e Stalin se reuniram em fevereiro de 1945.",
        "fato": "A Conferência de Yalta estabeleceu a divisão das zonas de influência da Europa pós-guerra e moldou a ordem da Guerra Fria."
    },
    {
        "nome": "Canal Beagle",
        "categoria": "Disputa Territorial do Fim do Mundo",
        "lat": -54.8833,
        "lng": -68.25,
        "dica": "Estreito navegável no sul da Terra do Fogo disputado quase até a guerra entre Chile e Argentina em 1978.",
        "fato": "A guerra iminente pelas ilhas Picton, Lennox e Nueva foi evitada no último instante pela mediação do Papa João Paulo II."
    },
    {
        "nome": "Ilha dos Faisões",
        "categoria": "Condomínio Binacional",
        "lat": 43.3422,
        "lng": -1.7761,
        "dica": "Ilhota fluvial no Rio Bidasoa que troca de país a cada 6 meses entre a França e a Espanha.",
        "fato": "Governada pela França de agosto a janeiro e pela Espanha de fevereiro a julho, conforme o Tratado dos Pirenéus de 1659."
    },
    {
        "nome": "Canal de Kiel",
        "categoria": "Atalho Báltico-Mar do Norte",
        "lat": 54.3317,
        "lng": 9.8333,
        "dica": "Canal artificial alemão que conecta o Mar Báltico ao Mar do Norte cortando a península da Jutlândia.",
        "fato": "É a hidrovia artificial mais movimentada do mundo em número de embarcações, economizando centenas de quilômetros ao evitar o contorno da Dinamarca."
    },
    {
        "nome": "Passagem do Noroeste",
        "categoria": "Rota Ártica Histórica",
        "lat": 74,
        "lng": -95,
        "dica": "Rota marítima que liga o Oceano Atlântico ao Pacífico através do arquipélago ártico canadense.",
        "fato": "Buscada por séculos com expedições trágicas como a de John Franklin (1845), hoje o recuo do gelo polar ameaça torná-la navegável comercialmente."
    },
    {
        "nome": "Estreito de Sunda",
        "categoria": "Gargalo Indonésio",
        "lat": -5.95,
        "lng": 105.75,
        "dica": "Estreito entre as ilhas de Java e Sumatra que conecta o Mar de Java ao Oceano Índico.",
        "fato": "Abriga o lendário vulcão Krakatoa, cuja erupção apocalíptica em 1883 explodiu a ilha original e foi ouvida a quase 5.000 km de distância."
    },
    {
        "nome": "Estreito de Lombok",
        "categoria": "Linha Biogeográfica de Wallace",
        "lat": -8.5,
        "lng": 115.75,
        "dica": "Estreito profundo entre as ilhas de Bali e Lombok, usado por superpetroleiros pesados demais para Malaca.",
        "fato": "Marca a Linha de Wallace, fronteira biogeográfica invisível onde a fauna asiática cessa abruptamente e começa a fauna australásia."
    },
    {
        "nome": "Passagem de Drake",
        "categoria": "O Mar Mais Bravo do Planeta",
        "lat": -58.5833,
        "lng": -65,
        "dica": "Extensão de mar tempestuoso entre o Cabo Horn (Chile) e as Ilhas Shetland do Sul (Antártida).",
        "fato": "Sem massas de terra para frear os ventos, as ondas na Passagem de Drake atingem frequentemente mais de 12 metros de altura em águas antárticas."
    },
    {
        "nome": "Corredor de Zangezur",
        "categoria": "Gargalo Geopolítico do Cáucaso",
        "lat": 39.15,
        "lng": 46.3,
        "dica": "Faixa territorial no sul da Armênia que separa o Azerbaijão de seu exclave de Nakhchivan.",
        "fato": "A rota estratégica é o ponto central de tensões geopolíticas envolvendo Armênia, Azerbaijão, Turquia, Irã e Rússia."
    },
    {
        "nome": "Ilhas Paracel",
        "categoria": "Disputa no Mar do Sul da China",
        "lat": 16.5,
        "lng": 112,
        "dica": "Arquipélago de atóis e recifes reivindicado pela China, Taiwan e Vietnã no Mar do Sul da China.",
        "fato": "Controladas de facto pela China desde a batalha de 1974 contra o Vietnã do Sul, contam com bases militares e pistas de pouso fortificadas."
    },
    {
        "nome": "Ilhas Curilas do Sul",
        "categoria": "Disputa Rússia-Japão",
        "lat": 44.5,
        "lng": 147,
        "dica": "Cadeia de quatro ilhas ao norte de Hokkaido ocupadas pela URSS em 1945 e reivindicadas pelo Japão.",
        "fato": "Devido à disputa pelos chamados Territórios do Norte, Rússia e Japão formalmente nunca assinaram um tratado de paz da Segunda Guerra Mundial."
    },
    {
        "nome": "Abyei",
        "categoria": "Disputa Petrolífera Sudanesa",
        "lat": 9.6,
        "lng": 28.4333,
        "dica": "Região rica em petróleo na fronteira indefinida entre o Sudão e o Sudão do Sul.",
        "fato": "Com população dividida entre os Ngok Dinka e pastores nômades Misseriya, o referendo de autodeterminação está paralisado há mais de uma década."
    },
    {
        "nome": "Linha McMahon",
        "categoria": "Fronteira Disputada no Himalaia",
        "lat": 27.8,
        "lng": 92.5,
        "dica": "Linha de demarcação traçada em 1914 entre o Tibete e a Índia Britânica, rejeitada pela China.",
        "fato": "A China considera o estado indiano de Arunachal Pradesh como Tibete do Sul, motivo de confronto bélico em 1962."
    },
    {
        "nome": "Lago Titicaca",
        "categoria": "Lago Navegável Mais Alto",
        "lat": -15.8,
        "lng": -69.4,
        "dica": "Maior lago da América do Sul por volume, a 3.812 metros de altitude entre o Peru e a Bolívia.",
        "fato": "A Marinha da Bolívia realiza treinos militares constantes nas águas do Titicaca, mantendo vivo o sonho de recuperar o acesso ao mar."
    },
    {
        "nome": "Mar Cáspio",
        "categoria": "O Maior Lago da Terra",
        "lat": 42,
        "lng": 50.5,
        "dica": "Maior corpo d água interior do planeta, cercado por Rússia, Cazaquistão, Turcomenistão, Irã e Azerbaijão.",
        "fato": "Com água salobra e nível de -28m abaixo do nível do mar global, seu status jurídico (mar ou lago) demorou 27 anos para ser pactuado em 2018."
    },
    {
        "nome": "Kaffeklubben",
        "categoria": "Extremo Norte da Terra Firme",
        "lat": 83.6644,
        "lng": -29.8333,
        "dica": "Pequena ilha na costa norte da Groenlândia, o ponto fixo de terra mais setentrional comprovado do planeta.",
        "fato": "Fica a apenas 713 km do Polo Norte geográfico, resistindo aos bancos de cascalho e gelo movediço da calota polar."
    },
    {
        "nome": "Cabo Froward",
        "categoria": "Extremo Sul Continental das Américas",
        "lat": -53.8967,
        "lng": -71.3056,
        "dica": "Ponto mais ao sul de terra continental contínua das Américas, na Península de Brunswick, Chile.",
        "fato": "Ao contrário do Cabo Horn (que fica em uma ilha), o Cabo Froward é onde a massa continental ininterrupta das Américas termina."
    },
    {
        "nome": "Ponta do Seixas",
        "categoria": "Extremo Oriental das Américas",
        "lat": -7.155,
        "lng": -34.7933,
        "dica": "Localizada em João Pessoa, Paraíba, é o ponto continental mais a leste de todo o continente americano.",
        "fato": "É o local onde o sol nasce primeiro nas Américas continentais, a apenas 2.800 km da costa oeste da África."
    },
    {
        "nome": "Monte Roraima",
        "categoria": "Tríplice Fronteira Mística",
        "lat": 5.2,
        "lng": -60.7333,
        "dica": "Imponente tepui com topo em platô onde se encontram as fronteiras de Brasil, Venezuela e Guiana.",
        "fato": "Com paredões verticais de 400 metros de altura, inspirou a clássica obra O Mundo Perdido de Arthur Conan Doyle."
    },
    {
        "nome": "Atol de Bikini",
        "categoria": "Campo de Testes Nucleares do Pacífico",
        "lat": 11.6,
        "lng": 165.4,
        "dica": "Atol das Ilhas Marshall onde os Estados Unidos detonaram 23 bombas atômicas entre 1946 e 1958.",
        "fato": "Foi o palco do teste Castle Bravo (1954), a maior bomba nuclear já detonada pelos EUA (15 megatons), criando uma cratera de 2 km."
    },
    {
        "nome": "Neft Daslari",
        "categoria": "Cidade Petrolífera no Mar",
        "lat": 40.25,
        "lng": 50.8333,
        "dica": "Complexo urbano de palafitas construído pela URSS sobre o Mar Cáspio, a 45 km da costa do Azerbaijão.",
        "fato": "Possui mais de 300 km de ruas construídas sobre plataformas metálicas erguidas em cima de navios afundados propositalmente."
    },
    {
        "nome": "Norilsk",
        "categoria": "Cidade Mais ao Norte do Mundo",
        "lat": 69.35,
        "lng": 88.2,
        "dica": "Cidade mineradora na Sibéria russa, a cidade de grande porte mais setentrional e isolada da Terra.",
        "fato": "Não possui estradas que a liguem ao resto da Rússia; tudo entra e sai por via aérea ou pelo porto ártico de Dudinka no Rio Yenisei."
    },
    {
        "nome": "Grande Muralha Verde da África",
        "categoria": "Megaprojeto Ecológico do Sahel",
        "lat": 14.5,
        "lng": 14,
        "dica": "Cinturão vegetal de 8.000 km que cruza 11 países africanos do Senegal ao Djibuti para frear o Saara.",
        "fato": "Projeto épico para restaurar 100 milhões de hectares de solo degradado e criar uma barreira viva contra a desertificação do Sahel."
    },
    {
        "nome": "Camberra",
        "categoria": "Capital Planejada de Compromisso",
        "lat": -35.2809,
        "lng": 149.13,
        "dica": "Capital da Austrália criada no interior para encerrar a rivalidade ferrenha entre Sydney e Melbourne.",
        "fato": "Projetada do zero pelos arquitetos americanos Walter Burley Griffin e Marion Mahony Griffin, com lago artificial central e traçado geométrico."
    },
    {
        "nome": "Ottawa",
        "categoria": "Capital Estratégica Bicultural",
        "lat": 45.4215,
        "lng": -75.6972,
        "dica": "Capital do Canadá escolhida pela Rainha Vitória na divisa entre as províncias anglófona e francófona.",
        "fato": "Localizada no interior para proteção contra eventuais invasões americanas no século XIX e equidistante de Montreal e Toronto."
    },
    {
        "nome": "Astana",
        "categoria": "Capital Futurista das Estepes",
        "lat": 51.1694,
        "lng": 71.4491,
        "dica": "Capital do Cazaquistão no centro do país com arquitetura futurista assinada por Norman Foster.",
        "fato": "A segunda capital nacional mais fria do planeta (atrás apenas de Ulan Bator), substituiu a cidade fronteiriça de Almaty em 1997."
    },
    {
        "nome": "Ulan Bator",
        "categoria": "Capital Mais Fria do Planeta",
        "lat": 47.9212,
        "lng": 106.9186,
        "dica": "Capital da Mongólia nas estepes da Ásia Central com temperatura média anual abaixo de zero.",
        "fato": "Concentra quase metade da população de todo o país; muitos moradores vivem em 'yurts' (tendas nômades tradicionais) nos subúrbios."
    },
    {
        "nome": "Reiquiavique",
        "categoria": "Capital Mais Setentrional da Terra",
        "lat": 64.1466,
        "lng": -21.9426,
        "dica": "Capital da Islândia localizada a apenas dois graus abaixo do Círculo Polar Ártico.",
        "fato": "Funciona quase inteiramente com energia geotérmica vulcânica limpa que aquece casas, piscinas públicas e calçadas na neve."
    },
    {
        "nome": "La Paz",
        "categoria": "Sede de Governo Mais Alta do Mundo",
        "lat": -16.4897,
        "lng": -68.1193,
        "dica": "Metrópole boliviana encravada em um desfiladeiro andino entre 3.200 e 4.100 metros de altitude.",
        "fato": "Possui a maior e mais alta rede de teleféricos urbanos do mundo ('Mi Teleférico'), que funciona como o metrô aéreo da cidade."
    },
    {
        "nome": "Sucre",
        "categoria": "Capital Constitucional da Bolívia",
        "lat": -19.0196,
        "lng": -65.2619,
        "dica": "Cidade histórica colonial onde foi declarada a independência da Bolívia em 1825 e sede da Suprema Corte.",
        "fato": "Conhecida como 'A Cidade Branca' devido ao conjunto de edifícios coloniais caiados preservados no centro histórico."
    },
    {
        "nome": "Wellington",
        "categoria": "Capital Mais ao Sul do Planeta",
        "lat": -41.2865,
        "lng": 174.7762,
        "dica": "Capital da Nova Zelândia no estreito entre as Ilhas Norte e Sul, famosa por ventos costeiros intensos.",
        "fato": "Apelidada de 'Windy Wellington', fica na latitude 41° Sul e é a sede política soberana mais próxima da Antártida."
    },
    {
        "nome": "Asgabate",
        "categoria": "Cidade do Mármore Branco",
        "lat": 37.9601,
        "lng": 58.3261,
        "dica": "Capital do Turcomenistão famosa no livro dos recordes pela maior densidade de edifícios revestidos em mármore branco.",
        "fato": "Possui mais de 540 prédios monumentais cobertos por 4,5 milhões de m² de mármore italiano importado às margens do Deserto de Karakum."
    },
    {
        "nome": "Thimphu",
        "categoria": "Capital Sem Semáforos",
        "lat": 27.4728,
        "lng": 89.6393,
        "dica": "Capital do Reino do Butão nas montanhas do Himalaia onde o trânsito é coordenado por policiais com luvas brancas.",
        "fato": "Quando um semáforo moderno foi instalado como teste na praça central, a população protestou alegando que era feio e impessoal, fazendo o rei removê-lo."
    },
    {
        "nome": "Ngerulmud",
        "categoria": "Capital Menos Populada do Mundo",
        "lat": 7.5006,
        "lng": 134.6242,
        "dica": "Capital da República de Palau na ilha de Babeldaob, com um imponente capitólio no meio da vegetação tropical.",
        "fato": "Com apenas cerca de 300 residentes e funcionários nos prédios governamentais, é a menor capital nacional em população da Terra."
    },
    {
        "nome": "Yaren",
        "categoria": "Distrito Sede Sem Capital de Jure",
        "lat": -0.5477,
        "lng": 166.9167,
        "dica": "Sede governamental da micro-república insular de Nauru no Pacífico, que não possui capital formal oficial.",
        "fato": "Nauru tem apenas 21 km²; toda a ilha funciona como uma comunidade integrada onde Yaren abriga o Parlamento e o aeroporto."
    },
    {
        "nome": "Dodoma",
        "categoria": "Capital Planejada Africana",
        "lat": -6.163,
        "lng": 35.7516,
        "dica": "Capital oficial da Tanzânia escolhida por Julius Nyerere no centro do país para integrar as regiões interiores.",
        "fato": "Embora seja a sede legislativa oficial desde os anos 1970, a metrópole portuária de Dar es Salaam ainda concentra grande parte dos ministérios."
    },
    {
        "nome": "Yamoussoukro",
        "categoria": "Capital da Basílica Monumental",
        "lat": 6.8276,
        "lng": -5.2893,
        "dica": "Capital política da Costa do Marfim construída pelo presidente Félix Houphouët-Boigny em sua aldeia natal.",
        "fato": "Abriga a Basílica de Nossa Senhora da Paz, inspirada na Basílica de São Pedro no Vaticano e maior templo cristão do mundo em área construída."
    },
    {
        "nome": "Abuja",
        "categoria": "Capital Neutra da Nigéria",
        "lat": 9.0765,
        "lng": 7.3986,
        "dica": "Capital planejada no centro da Nigéria criada em 1991 para substituir o caos urbano da cidade costeira de Lagos.",
        "fato": "Construída com a Rocha de Zuma e a Rocha de Aso como molduras geológicas monumentais para representar unidade entre o norte muçulmano e o sul cristão."
    },
    {
        "nome": "Gitega",
        "categoria": "Nova Capital do Burundi",
        "lat": -3.4272,
        "lng": 29.9246,
        "dica": "Capital montanhosa do Burundi estabelecida em 2019 para substituir Bujumbura na margem do Lago Tanganica.",
        "fato": "Antiga capital do Reino do Burundi histórico antes do período colonial europeu, restaurada como símbolo de identidade nacional."
    },
    {
        "nome": "Vaduz",
        "categoria": "Capital do Vale do Reno",
        "lat": 47.141,
        "lng": 9.5209,
        "dica": "Capital do Principado de Liechtenstein dominada pelo Castelo medieval onde a família principesca ainda reside.",
        "fato": "Uma das capitais mais pacíficas do mundo: não possui aeroporto nem forças armadas, integrando sua defesa e aduanas com a Suíça."
    },
    {
        "nome": "Andorra-a-Velha",
        "categoria": "Capital Mais Alta da Europa",
        "lat": 42.5063,
        "lng": 1.5218,
        "dica": "Capital do Principado de Andorra nos Pireneus, situada a mais de 1.020 metros de altitude entre Espanha e França.",
        "fato": "Capital nacional de maior altitude da Europa, polo internacional de turismo de esqui e compras com isenção fiscal."
    },
    {
        "nome": "Valletta",
        "categoria": "A Menor Capital da União Europeia",
        "lat": 35.8989,
        "lng": 14.5146,
        "dica": "Fortaleza barroca murada dos Cavaleiros Hospitalários que serve de capital da República de Malta.",
        "fato": "Possui apenas 0,8 km² de área, sendo inteiramente tombada como Patrimônio Mundial da UNESCO por sua concentração incomparável de monumentos."
    },
    {
        "nome": "Canal de Beagle",
        "categoria": "Estreito da Terra do Fogo",
        "lat": -54.85,
        "lng": -68.3,
        "dica": "Canal marítimo no extremo sul que separa a Ilha Grande da Terra do Fogo das ilhas chilenas ao sul.",
        "fato": "Recebeu o nome do navio HMS Beagle de Charles Darwin em 1830; foi o epicentro do Conflito de Beagle entre Argentina e Chile que quase gerou guerra em 1978."
    },
    {
        "nome": "Estreito de Cook",
        "categoria": "Divisor da Nova Zelândia",
        "lat": -41.23,
        "lng": 174.5,
        "dica": "Estreito tempestuoso de 22 km que separa a Ilha Norte da Ilha Sul da Nova Zelândia conectando o Mar da Tasmânia ao Pacífico.",
        "fato": "Notório por correntes marítimas violentas em formato de funil; é atravessado diariamente por balsas inter-ilhas conectando Wellington a Picton."
    },
    {
        "nome": "Estreito de Torres",
        "categoria": "Gargalo Austrália-Nova Guiné",
        "lat": -10.25,
        "lng": 142.15,
        "dica": "Estreito raso e perigoso com recifes de coral que separa o norte da Austrália do sul da Papua-Nova Guiné.",
        "fato": "Conecta o Mar de Coral ao Mar de Arafura; é povoado pelos nativos do Estreito de Torres, etnia indígena distinta dos aborígenes da Austrália continental."
    },
    {
        "nome": "Estreito de Bass",
        "categoria": "Canal da Tasmânia",
        "lat": -39.9,
        "lng": 146.0,
        "dica": "Estreito que separa a ilha australiana da Tasmânia do estado de Victoria na Austrália continental.",
        "fato": "Embora tenha apenas cerca de 240 km de largura, suas águas rasas combinadas com ventos do Oceano Antártico criam condições de naufrágio lendárias."
    },
    {
        "nome": "Estreito de Messina",
        "categoria": "Gargalo Histórico de Cila e Caríbdis",
        "lat": 38.2,
        "lng": 15.6,
        "dica": "Estreito de apenas 3,1 km que separa a ponta da bota da Península Itálica (Calábria) da ilha da Sicília.",
        "fato": "Famoso na Odisséia de Homero pelos monstros mitológicos marinhos; é alvo do projeto secular da maior ponte suspensa do mundo ligando a Sicília à Itália."
    },
    {
        "nome": "Estreito de Otranto",
        "categoria": "Porta do Mar Adriático",
        "lat": 40.15,
        "lng": 18.9,
        "dica": "Estreito de 72 km de largura que separa o calcanhar da Itália da costa montanhosa da Albânia.",
        "fato": "Conecta o Mar Adriático ao Mar Jônico; durante a Primeira Guerra Mundial foi palco do bloqueio naval da 'Barragem de Otranto' contra os submarinos austro-húngaros."
    },
    {
        "nome": "Estreito de Davis",
        "categoria": "Porta de Entrada Ártica",
        "lat": 67.0,
        "lng": -62.0,
        "dica": "Estreito ártico que separa o oeste da Groenlândia da Ilha de Baffin no Canadá.",
        "fato": "Conecta o Mar de Labrador à Baía de Baffin; é a rota por onde descem milhares de icebergs desprendidos das geleiras da Groenlândia rumo ao Atlântico Norte."
    },
    {
        "nome": "Estreito da Dinamarca",
        "categoria": "Maior Cachoeira Submarina da Terra",
        "lat": 66.5,
        "lng": -26.0,
        "dica": "Estreito oceânico que separa a Groenlândia da Islândia conectando o Oceano Ártico ao Atlântico Norte.",
        "fato": "Abriga no leito submarino a maior cachoeira do planeta: a água polar densa e gelada despenca 3.500 metros sob o mar em um abismo com fluxo de 5 milhões de m³/s."
    },
    {
        "nome": "Canal Meno-Danúbio",
        "categoria": "Hidrovia Transcontinental Europeia",
        "lat": 49.2,
        "lng": 11.2,
        "dica": "Canal artificial alemão de 171 km que conecta a bacia do Rio Reno à bacia do Rio Danúbio cruzando a Linha Divisória de Águas Europeia.",
        "fato": "Inaugurado em 1992, permite que uma barcaça mercante navegue ininterruptamente desde Roterdã no Mar do Norte até o Mar Negro na Romênia."
    },
    {
        "nome": "Canal de São Lourenço",
        "categoria": "Portão dos Grandes Lagos",
        "lat": 44.9,
        "lng": -74.9,
        "dica": "Sistema épico de canais e eclusas conjunto entre EUA e Canadá que permite a navios cargueiros subir do Atlântico até os Grandes Lagos.",
        "fato": "Ergue os navios cargueiros por mais de 180 metros de altitude desde o nível do oceano até a superfície do Lago Superior no interior do continente."
    },
    {
        "nome": "Madha",
        "categoria": "Enclave de Omã nos Emirados",
        "lat": 25.2833,
        "lng": 56.3333,
        "dica": "Território de Omã totalmente cercado pelo Emirado de Sharjah (EAU) a meio caminho da Península de Musandam.",
        "fato": "Na década de 1930 os líderes de Madha decidiram jurar lealdade ao Sultão de Omã em vez dos xeques vizinhos; dentro dele fica o enclave de Nahwa dos EAU."
    },
    {
        "nome": "Jungholz",
        "categoria": "Quase-Enclave nos Alpes",
        "lat": 47.5736,
        "lng": 10.4464,
        "dica": "Aldeia austríaca ligada ao restante da Áustria apenas por um ponto geométrico único no cume da montanha Sorgschrofen.",
        "fato": "Para chegar a Jungholz por qualquer estrada você é obrigado a entrar na Alemanha; possui dois códigos postais oficiais (um austríaco e um alemão)."
    },
    {
        "nome": "Kleinwalsertal",
        "categoria": "Vale Sem Saída Austríaco",
        "lat": 47.345,
        "lng": 10.16,
        "dica": "Vale alpino no estado austríaco de Vorarlberg cercado por montanhas intransponíveis para veículos rumo à Áustria.",
        "fato": "Seu único acesso rodoviário é feito a partir da cidade alemã de Oberstdorf; operava historicamente sob o regime da alfândega e moeda da Alemanha."
    },
    {
        "nome": "Peñón de Vélez de la Gomera",
        "categoria": "Menor Fronteira Terrestre da Terra",
        "lat": 35.1725,
        "lng": -4.2989,
        "dica": "Rocha fortificada da Espanha ligada ao litoral do Marrocos por um istmo de areia de apenas 85 metros de largura.",
        "fato": "Era originalmente uma ilha até que uma tempestade colossal em 1934 acumulou sedimentos e criou o istmo arenoso que hoje é a menor fronteira terrestre do mundo."
    },
    {
        "nome": "Peñón de Alhucemas",
        "categoria": "Fortaleza Espanhola no Norte da África",
        "lat": 35.2133,
        "lng": -3.8894,
        "dica": "Ilhote rochoso espanhol militarizado situado a apenas 300 metros da costa da cidade marroquina de Al Hoceima.",
        "fato": "Cedida à coroa espanhola em 1560 pelo sultão saadiano em troca de proteção contra os otomanos; guarnecida permanentemente pelo exército espanhol."
    },
    {
        "nome": "Oecusse-Ambeno",
        "categoria": "Exclave Histórico no Mar de Savu",
        "lat": -9.2,
        "lng": 124.35,
        "dica": "Enclave costeiro pertencente a Timor-Leste cercado em todo o seu perímetro terrestre pela província indonésia de Timor Ocidental.",
        "fato": "Foi o ponto onde os frades portugueses desembarcaram pela primeira vez na ilha de Timor em 1515, fundando o primeiro assentamento europeu no território."
    },
    {
        "nome": "San'kovo-Medvezh'e",
        "categoria": "Enclave Russo na Bielorrússia",
        "lat": 52.4789,
        "lng": 31.5514,
        "dica": "Pequeno enclave de 4,5 km² pertencente à Rússia situado inteiramente dentro do distrito de Dobrush na Bielorrússia.",
        "fato": "Criado no início do século XX quando camponeses russos compraram as terras; foi completamente abandonado após a contaminação radioativa de Chernobyl em 1986."
    },
    {
        "nome": "Sokh",
        "categoria": "Enclave Uzbeque no Quirguistão",
        "lat": 39.95,
        "lng": 71.1333,
        "dica": "Enclave do Uzbequistão de 350 km² com cerca de 80.000 habitantes situado inteiramente dentro da região de Batken no Quirguistão.",
        "fato": "Apesar de pertencer politicamente ao Uzbequistão, mais de 99% da sua população é de etnia tadjique e fala a língua tadjique no Vale de Fergana."
    },
    {
        "nome": "Vorukh",
        "categoria": "Enclave Tadjique no Vale de Fergana",
        "lat": 39.85,
        "lng": 70.5833,
        "dica": "Enclave do Tadjiquistão de 130 km² situado dentro do território do Quirguistão, cercado por rios e canais disputados.",
        "fato": "Ponto de frequentes atritos fronteiriços armados e bloqueios de estradas entre as populações vizinhas devido à escassez de água para agricultura."
    },
    {
        "nome": "Northwest Angle",
        "categoria": "O Chifre dos EUA no Canadá",
        "lat": 49.27,
        "lng": -95.05,
        "dica": "Península no Lago dos Bosques pertencente a Minnesota (EUA) que fica ao norte do Paralelo 49° Norte.",
        "fato": "O ponto mais setentrional dos 48 estados contíguos dos EUA, resultante de um mapa impreciso (o Mitchell Map de 1755) usado no Tratado de Paris de 1783."
    },
    {
        "nome": "Hyder",
        "categoria": "A Cidade do Alasca que Usa Dólar Canadense",
        "lat": 55.9167,
        "lng": -130.0167,
        "dica": "Localidade isolada no sudeste do Alasca (EUA) acessível apenas por estrada através de Stewart, na Colúmbia Britânica (Canadá).",
        "fato": "Não tem polícia, usa a eletricidade e código de área telefônico canadense, consome moeda canadense e é a única cidade do Alasca sem fuso do Alasca (usa o horário do Pacífico)."
    },
    {
        "nome": "Triângulo de Hala'ib",
        "categoria": "Disputa do Mar Vermelho",
        "lat": 22.4667,
        "lng": 36.0,
        "dica": "Área de 20.580 km² no Mar Vermelho reivindicada simultaneamente pelo Egito e pelo Sudão.",
        "fato": "O Egito administra a área com base na fronteira reta do Paralelo 22° de 1899; o Sudão reivindica a linha administrativa tribal de 1902. Aceitar Bir Tawil faria qualquer um perder Hala'ib."
    },
    {
        "nome": "Triângulo de Ilemi",
        "categoria": "Disputa do Chifre Africano",
        "lat": 4.8,
        "lng": 35.0,
        "dica": "Território de até 14.000 km² disputado de facto entre Quênia, Sudão do Sul e Etiópia.",
        "fato": "O Quênia mantém postos policiais e controle administrativo na área desde a era colonial britânica para proteger as rotas de pastoreio dos nômades Turkana."
    },
    {
        "nome": "Vale de Galwan",
        "categoria": "Ponto de Atrito Nuclear no Himalaia",
        "lat": 34.75,
        "lng": 78.25,
        "dica": "Vale fluvial desolado na divisa de Ladakh e Aksai Chin onde tropas indianas e chinesas se enfrentaram em 2020.",
        "fato": "Devido a acordos de desmilitarização que proibiam armas de fogo, o confronto de 2020 envolveu combate corpo a corpo com bastões e pedras em temperaturas de congelamento."
    },
    {
        "nome": "Rochedo de Scarborough",
        "categoria": "Atol em Litígio no Mar da China",
        "lat": 15.15,
        "lng": 117.75,
        "dica": "Atol de recifes a 220 km da ilha de Luzon (Filipinas) ocupado pela Guarda Costeira da China desde 2012.",
        "fato": "Conhecido nas Filipinas como Panatag Shoal e na China como Huangyan Dao, é um dos nós centrais de atrito marítimo na Zona Econômica Exclusiva filipina."
    },
    {
        "nome": "Ilhas Senkaku (Diaoyu)",
        "categoria": "Litígio Marítimo Japão-China",
        "lat": 25.75,
        "lng": 123.5,
        "dica": "Grupo de oito ilhas desabitadas no Mar da China Oriental administradas pelo Japão e reivindicadas pela China e Taiwan.",
        "fato": "Tornaram-se alvo de grande tensão estratégica após pesquisas geológicas em 1968 revelarem possíveis reservas colossais de petróleo submarino na plataforma continental."
    },
    {
        "nome": "Fazendas de Shebaa",
        "categoria": "Tríplice Tensão no Levante",
        "lat": 33.2833,
        "lng": 35.7,
        "dica": "Pequena faixa de terra de 22 km² na encosta do Monte Hermon disputada entre Líbano, Síria e Israel.",
        "fato": "Capturada por Israel da Síria na Guerra dos Seis Dias em 1967; o Líbano afirma que o território pertence historicamente ao seu território soberano."
    },
    {
        "nome": "Ilhas Geórgia do Sul",
        "categoria": "Território Subantártico Britânico",
        "lat": -54.25,
        "lng": -36.75,
        "dica": "Arquipélago montanhoso coberto por geleiras no Atlântico Sul reivindicado pela Argentina como parte da disputa das Malvinas.",
        "fato": "Foi a base da épica expedição transantártica de Ernest Shackleton em 1916 e abriga milhões de pinguins-rei e elefantes-marinhos protegidos."
    },
    {
        "nome": "K2",
        "categoria": "A Montanha Selvagem",
        "lat": 35.8814,
        "lng": 76.5133,
        "dica": "Segunda montanha mais alta do mundo (8.611m) na cordilheira do Karakoram entre o Paquistão e a China.",
        "fato": "Considerada a montanha mais perigosa e tecnicamente exigente do planeta: para cada quatro alpinistas que alcançam o cume, um morre na tentativa."
    },
    {
        "nome": "Monte Aconcágua",
        "categoria": "Teto das Américas",
        "lat": -32.6532,
        "lng": -70.0109,
        "dica": "Ponto culminante da Cordilheira dos Andes e de todo o Hemisfério Ocidental e Sul, com 6.961 metros de altitude.",
        "fato": "Localizado na província argentina de Mendoza, é a montanha mais alta do mundo fora da cordilheira do Himalaia e Karakoram asiáticos."
    },
    {
        "nome": "Monte Elbrus",
        "categoria": "Ponto Culminante da Europa",
        "lat": 43.3499,
        "lng": 42.4453,
        "dica": "Vulcão adormecido com cume duplo de 5.642 metros de altitude na cordilheira do Cáucaso, Rússia.",
        "fato": "Supera o Monte Branco (4.808m nos Alpes) como a montanha mais alta de todo o continente europeu segundo a demarcação geográfica padrão dos montes Cáucaso."
    },
    {
        "nome": "Maciço Vinson",
        "categoria": "Cume da Antártida",
        "lat": -78.5256,
        "lng": -85.6172,
        "dica": "Ponto culminante do continente antártico, elevando-se a 4.892 metros de altitude na cordilheira Sentinel.",
        "fato": "Fica a cerca de 1.200 km do Polo Sul geográfico em uma das regiões mais frias e inóspitas da Terra, escalado pela primeira vez apenas em 1966."
    },
    {
        "nome": "Puncak Jaya (Pirâmide Carstensz)",
        "categoria": "Teto da Oceania",
        "lat": -4.0833,
        "lng": 137.1833,
        "dica": "Ponto mais alto da ilha de Nova Guiné e de toda a Oceania com 4.884 metros de altitude na província de Papua, Indonésia.",
        "fato": "A montanha insular mais alta do mundo; abriga as raras geleiras equatoriais remanescentes do Pacífico, que estão recuando rapidamente com as mudanças climáticas."
    },
    {
        "nome": "Depressão Danakil",
        "categoria": "A Fornalha da Terra",
        "lat": 14.2417,
        "lng": 40.3,
        "dica": "Depressão geológica a -125 metros abaixo do mar no nordeste da Etiópia, na junção tripla de placas tectônicas do Rift de Afar.",
        "fato": "Considerado o local mais quente da Terra em temperatura média contínua de superfície durante todo o ano, com fontes geotérmicas de ácido sulfúrico e lagos de lava."
    },
    {
        "nome": "Vulcão Dallol",
        "categoria": "Paisagem Alienígena Terrestre",
        "lat": 14.2419,
        "lng": 40.2989,
        "dica": "Cratera vulcânica hidrotermal na Depressão de Danakil com lagoas ferventes verde-limão, depósitos de sal amarelo e geiseres de enxofre.",
        "fato": "O relevo vulcânico em terra mais baixo do mundo (cerca de -48 metros abaixo do nível do mar); suas piscinas ácidas têm pH próximo de zero."
    },
    {
        "nome": "Deserto do Atacama",
        "categoria": "Deserto Não-Polar Mais Árido da Terra",
        "lat": -23.8634,
        "lng": -69.1328,
        "dica": "Planalto desértico no norte do Chile prensado entre a Cordilheira da Costa e os Andes onde há locais sem registro de chuva há séculos.",
        "fato": "Devido à secura absoluta do ar e altitude, abriga os observatórios astronômicos terrestres mais avançados do mundo como o ALMA e o futuro ELT."
    },
    {
        "nome": "Vale da Morte (Furnace Creek)",
        "categoria": "Ponto Mais Quente Já Registrado",
        "lat": 36.4619,
        "lng": -116.8656,
        "dica": "Depressão a -86 metros abaixo do mar na Califórnia (EUA) onde foi aferida a temperatura oficial de 56,7°C em 1913.",
        "fato": "Ponto mais baixo da América do Norte (Badwater Basin); as paredes rochosas do cânion aprisionam a massa de ar quente como um forno por convecção."
    },
    {
        "nome": "Verkhoyansk",
        "categoria": "A Maior Amplitude Térmica do Mundo",
        "lat": 67.55,
        "lng": 133.3833,
        "dica": "Povoado na Sibéria russa com amplitude térmica de 105°C entre o inverno recorde de -67,8°C e o verão de +38°C.",
        "fato": "Figura no Guinness Book com a maior variação extrema de temperatura do planeta Terra em uma mesma localidade."
    },
    {
        "nome": "Cabo Agulhas",
        "categoria": "Divisor Oficial dos Oceanos",
        "lat": -34.8292,
        "lng": 20.0097,
        "dica": "Ponto mais ao sul de todo o continente africano onde as águas do Oceano Atlântico encontram oficialmente as do Oceano Índico.",
        "fato": "Muitas pessoas confundem achando que o Cabo da Boa Esperança é o ponto mais ao sul da África, mas o Cabo Agulhas fica 150 km mais a sudeste na latitude 34° 50' Sul."
    },
    {
        "nome": "Cabo da Roca",
        "categoria": "Fim da Terra Firme Europeia",
        "lat": 38.7804,
        "lng": -9.4989,
        "dica": "Frente marítima de falésias em Sintra (Portugal), o ponto mais ocidental de todo o continente europeu continental.",
        "fato": "Eternizado por Luís de Camões em 'Os Lusíadas' com a célebre frase gravada no padrão de pedra do local: 'Onde a terra se acaba e o mar começa'."
    },
    {
        "nome": "Cabo Dezhnev",
        "categoria": "Extremo Oriental da Ásia",
        "lat": 66.0833,
        "lng": -169.65,
        "dica": "Promontório rochoso na Península de Chukotka (Rússia), o ponto continental mais a leste de toda a massa eurasiática.",
        "fato": "Fica a apenas 82 km do Cabo Príncipe de Gales no Alasca; batizado em honra a Semyon Dezhnev, o primeiro cossaco a navegar por ali em 1648."
    },
    {
        "nome": "Cabo Nordkapp (Cabo Norte)",
        "categoria": "Extremo Norte Continental Europeu",
        "lat": 71.1708,
        "lng": 25.7831,
        "dica": "Falésia de 307 metros na ilha de Magerøya (Noruega) com vista para o Oceano Ártico sob o sol da meia-noite.",
        "fato": "Com seu famoso monumento de globo de ferro, é considerado o ponto turístico mais ao norte da Europa acessível por rodovia convencional."
    },
    {
        "nome": "Fossa de Porto Rico",
        "categoria": "Ponto Mais Profundo do Oceano Atlântico",
        "lat": 19.84,
        "lng": -66.5,
        "dica": "Fossa oceânica na fronteira entre a Placa do Caribe e a Placa Norte-Americana que atinge 8.376 metros de profundidade máxima.",
        "fato": "O 'Milwaukee Deep' é o ponto abissal mais fundo de todo o Oceano Atlântico, associado a terremotos submarinos e risco de tsunamis no Caribe."
    },
    {
        "nome": "Fossa de Java",
        "categoria": "Ponto Mais Profundo do Oceano Índico",
        "lat": -10.3167,
        "lng": 109.9667,
        "dica": "Fossa de subducção ao sul da costa de Sumatra e Java (Indonésia) que atinge 7.290 metros de profundidade máxima.",
        "fato": "Zona de subducção ativa da placa Indo-Australiana que gerou o devastador terremoto e tsunami do Boxing Day em 26 de dezembro de 2004."
    },
    {
        "nome": "Ilhas Pitcairn",
        "categoria": "Refúgio do HMS Bounty",
        "lat": -25.0667,
        "lng": -130.1,
        "dica": "Ilha minúscula no sul do Oceano Pacífico povoada por cerca de 45 descendentes diretos dos marinheiros amotinados do HMS Bounty.",
        "fato": "Os amotinados queimaram o navio em 1790 para não serem encontrados pela Marinha Real Britânica, permanecendo isolados por quase duas décadas."
    },
    {
        "nome": "Ilhas Kerguelen",
        "categoria": "As Ilhas da Desolação",
        "lat": -49.35,
        "lng": 70.2167,
        "dica": "Arquipélago subantártico francês de relevo vulcânico e ventos polares furiosos a mais de 3.300 km de qualquer continente.",
        "fato": "Habitada apenas por cientistas e meteorologistas na estação Port-aux-Français; abriga o repolho-de-kerguelen, planta rica em vitamina C que salvou marinheiros do escorbuto."
    },
    {
        "nome": "Null Island",
        "categoria": "Marco Zero dos Mapas Digitais",
        "lat": 0.0,
        "lng": 0.0,
        "dica": "Interseção teórica da Linha do Equador com o Meridiano de Greenwich nas águas do Golfo da Guiné.",
        "fato": "Conhecida por desenvolvedores de software e cartógrafos como o local onde vão parar coordenadas corrompidas (0, 0); marcada no mar pela boia meteorológica 'Soul'."
    },
    {
        "nome": "Observatório Real de Greenwich",
        "categoria": "A Origem da Longitude Zero",
        "lat": 51.4769,
        "lng": 0.0,
        "dica": "Observatório histórico em Londres onde uma linha de latão gravada no chão marca a Longitude 0° e divide os hemisférios leste e oeste.",
        "fato": "Fundado em 1675 pelo rei Carlos II para aperfeiçoar a navegação marítima e resolver o clássico enigma da determinação da longitude no mar."
    },
    {
        "nome": "Marco Zero do Equador (Macapá)",
        "categoria": "Monumento do Meio do Mundo",
        "lat": 0.0,
        "lng": -51.0783,
        "dica": "Monumento com obelisco no estado do Amapá (Brasil) onde uma faixa de concreto divide os hemisférios Norte e Sul.",
        "fato": "Possui uma abertura no topo do monumento que projeta o feixe de sombra solar exatamente no centro da linha durante os equinócios de março e setembro."
    },
    {
        "nome": "Mitad del Mundo",
        "categoria": "Monumento Equatorial Histórico",
        "lat": -0.0022,
        "lng": -78.4558,
        "dica": "Monumento turístico a 26 km de Quito (Equador) erguido para celebrar a Missão Geodésica Francesa de 1736 que mediu a curvatura da Terra.",
        "fato": "Medições modernas de satélite com GPS revelaram que a Linha do Equador verdadeira passa a cerca de 240 metros ao norte do monumento histórico construído."
    },
    {
        "nome": "Marco das Três Fronteiras",
        "categoria": "Obelisco da Confluência Binacional",
        "lat": -25.59,
        "lng": -54.5944,
        "dica": "Ponto de encontro onde o Rio Iguaçu deságua no Rio Paraná, unindo as fronteiras de Brasil, Argentina e Paraguai.",
        "fato": "Inaugurado simultaneamente em 1903 pelo Brasil e pela Argentina, cada país possui seu próprio obelisco pintado com suas cores nacionais voltado para os rios."
    },
    {
        "nome": "Linha Maginot",
        "categoria": "Fortaleza Subterrânea Histórica",
        "lat": 49.35,
        "lng": 6.15,
        "dica": "Linha colossal de casamatas de concreto, túneis subterrâneos e torres blindadas construída pela França na década de 1930 ao longo da fronteira com a Alemanha.",
        "fato": "Considerada intransponível frontalmente, foi contornada pelas divisões blindadas da Wehrmacht alemã através das florestas das Ardenas na Bélgica em 1940."
    },
    {
        "nome": "Represa de Kariba",
        "categoria": "Maior Reservatório de Água da Terra",
        "lat": -16.5236,
        "lng": 28.7617,
        "dica": "Barragem hidrelétrica na Garganta de Kariba no Rio Zambeze na fronteira entre a Zâmbia e o Zimbábue.",
        "fato": "O Lago Kariba represa mais de 180 bilhões de metros cúbicos de água doce, o maior reservatório artificial de água em volume de todo o planeta Terra."
    },
    {
        "nome": "Represa de Assuã",
        "categoria": "Domínio do Rio Nilo",
        "lat": 23.97,
        "lng": 32.88,
        "dica": "Megabarragem no sul do Egito que represou o Nilo e criou o Lago Nasser para controlar inundações e gerar energia elétrica.",
        "fato": "Sua construção obrigou o resgate arqueológico épico da UNESCO para desmontar e realocar o templo monumental de Abu Simbel pedra por pedra acima da água."
    },
    {
        "nome": "Túnel de Base de São Gotardo",
        "categoria": "O Túnel Ferroviário Mais Longo do Mundo",
        "lat": 46.5333,
        "lng": 8.7167,
        "dica": "Túnel ferroviário duplo de 57 km de extensão que atravessa a base dos Alpes Suíços conectando Zurique a Milão.",
        "fato": "Com profundidade máxima de até 2.300 metros sob as montanhas alpinas de rocha sólida, reduziu viagens transalpinas em horas sem enfrentar neve nas passagens."
    },
    {
        "nome": "Túnel Seikan",
        "categoria": "Túnel Submarino Mais Profundo",
        "lat": 41.25,
        "lng": 140.35,
        "dica": "Túnel ferroviário japonês de 53,8 km que conecta a ilha principal de Honshu à ilha norte de Hokkaido sob o Estreito de Tsugaru.",
        "fato": "Conta com 23,3 km de extensão escavados a 100 metros abaixo do leito marinho, permitindo a passagem dos trens de alta velocidade Shinkansen."
    },
    {
        "nome": "Ponte do Bósforo",
        "categoria": "A Ponte Intercontinental de Istambul",
        "lat": 41.0456,
        "lng": 29.0344,
        "dica": "Ponte pênsil monumental de 1.560 metros que conecta o lado europeu ao lado asiático da cidade de Istambul sobre o Estreito de Bósforo.",
        "fato": "Inaugurada em 1973 no 50º aniversário da República da Turquia, foi a primeira ponte permanente erguida sobre o Bósforo desde pontes de barcos da antiguidade persa."
    },
    {
        "nome": "Cataratas do Niágara",
        "categoria": "Quedas d Água dos Grandes Lagos",
        "lat": 43.08,
        "lng": -79.071,
        "dica": "Grupo de três imponentes cachoeiras no Rio Niágara na fronteira entre os EUA (Nova York) e Canadá (Ontário).",
        "fato": "Drenam as águas do Lago Erie para o Lago Ontário; movimentam milhões de turistas e geram energia hidrelétrica abundante."
    },
    {
        "nome": "Arquipélago de São Pedro e São Paulo",
        "categoria": "Ponto Oceânico Remoto Brasileiro",
        "lat": 0.9175,
        "lng": -29.3458,
        "dica": "Conjunto de ilhotas rochosas brasileiras desoladas no meio do Atlântico Equatorial a 1.000 km de Natal.",
        "fato": "Formadas por manto superior da Terra erguido por falha transformante tectônica; a Marinha do Brasil mantém estação científica permanente."
    },
    {
        "nome": "Ilha de Trindade",
        "categoria": "Sentinela do Atlântico Sul",
        "lat": -20.5147,
        "lng": -29.3178,
        "dica": "Ilha vulcânica oceânica pertencente ao Espírito Santo (Brasil) situada a 1.160 km a leste da costa continental.",
        "fato": "Abriga um posto oceanográfico permanente da Marinha do Brasil e a maior colônia de desova da tartaruga-verde no Atlântico Sul."
    },
    {
        "nome": "Centro Espacial de Kourou",
        "categoria": "Porto Espacial Europeu",
        "lat": 5.239,
        "lng": -52.768,
        "dica": "Base de lançamentos da Agência Espacial Europeia (ESA) localizada na Guiana Francesa, colada à Linha do Equador.",
        "fato": "A proximidade de 5° da Linha do Equador aproveita ao máximo o impulso da velocidade de rotação da Terra para lançar satélites e foguetes Ariane."
    },
    {
        "nome": "Cosmódromo de Baikonur",
        "categoria": "Berço da Exploração Espacial",
        "lat": 45.9647,
        "lng": 63.3052,
        "dica": "Base espacial no Cazaquistão de onde foram lançados o satélite Sputnik 1 (1957) e Yuri Gagarin (1961), o primeiro homem no espaço.",
        "fato": "Operado pela Rússia sob contrato de arrendamento; é o cosmódromo mais antigo e com maior número de lançamentos tripulados da história humana."
    },
    {
        "nome": "Cabo Canaveral (Kennedy Space Center)",
        "categoria": "Portão da Lua",
        "lat": 28.5729,
        "lng": -80.649,
        "dica": "Península arenosa na Flórida (EUA) de onde partiram os foguetes Saturno V do Programa Apollo que levaram astronautas à Lua em 1969.",
        "fato": "Local escolhido pela NASA porque qualquer falha de lançamento faria os destroços caírem em águas abertas do Oceano Atlântico."
    },
    {
        "nome": "Monte Fuji",
        "categoria": "Símbolo Vulcânico Sagrado",
        "lat": 35.3606,
        "lng": 138.7274,
        "dica": "Vulcão adormecido perfeitamente cônico com cume nevado de 3.776 metros de altitude, o ponto mais alto do Japão.",
        "fato": "Situado a apenas 100 km a sudoeste de Tóquio, na junção tripla das placas do Pacífico, Euroasiática e das Filipinas."
    },
    {
        "nome": "Monte Branco (Mont Blanc)",
        "categoria": "Teto dos Alpes",
        "lat": 45.8326,
        "lng": 6.8652,
        "dica": "Montanha imponente de 4.808 metros de altitude na fronteira entre a França e a Itália.",
        "fato": "A linha de fronteira exata sobre o cume coberto de gelo perpétuo é motivo de disputa cartográfica centenária entre franceses e italianos."
    },
    {
        "nome": "Matterhorn (Cervino)",
        "categoria": "A Pirâmide Alpina",
        "lat": 45.9764,
        "lng": 7.6586,
        "dica": "Pico rochoso piramidal de 4.478 metros na divisa entre Zermatt (Suíça) e Breuil-Cervinia (Itália).",
        "fato": "Sua silhueta geométrica inconfundível inspirou o logotipo do famoso chocolate suíço Toblerone."
    },
    {
        "nome": "Vulcão Krakatoa",
        "categoria": "A Maior Explosão Sonora da História",
        "lat": -6.1025,
        "lng": 105.423,
        "dica": "Caldeira vulcânica no Estreito de Sunda (Indonésia) cuja erupção colossal em 1883 explodiu a ilha original.",
        "fato": "A explosão foi ouvida a quase 5.000 km de distância e fez ondas de choque atmosférico darem três voltas completas ao redor do globo terrestre."
    },
    {
        "nome": "Vulcão Vesúvio",
        "categoria": "A Ameaça Sobre o Golfo de Nápoles",
        "lat": 40.8224,
        "lng": 14.4289,
        "dica": "Estratovulcão ativo na Itália cuja erupção pliniana em 79 d.C. soterrou as cidades romanas de Pompeia e Herculano sob cinzas.",
        "fato": "Considerado um dos vulcões mais perigosos do planeta devido aos mais de 3 milhões de habitantes que residem em seu raio de erupção imediata."
    },
    {
        "nome": "Monte Etna",
        "categoria": "O Vulcão Mais Ativo da Europa",
        "lat": 37.751,
        "lng": 14.9934,
        "dica": "Vulcão imponente de 3.357 metros de altitude na ilha da Sicília (Itália) em atividade eruptiva quase contínua.",
        "fato": "Possui um dos registros documentados de erupções mais longos da civilização humana, remontando a mais de 2.700 anos na antiguidade greco-romana."
    },
    {
        "nome": "Machu Picchu",
        "categoria": "A Cidade Sagrada nos Andes",
        "lat": -13.1631,
        "lng": -72.545,
        "dica": "Cidadela inca do século XV empoleirada em uma crista montanhosa a 2.430 metros de altitude no Vale Sagrado do Peru.",
        "fato": "Construída sem uso de argamassa pelo método de encaixe perfeito de blocos de granito sísmico; permaneceu oculta até 1911."
    },
    {
        "nome": "Petra",
        "categoria": "A Capital dos Nabateus na Rocha",
        "lat": 30.3285,
        "lng": 35.4444,
        "dica": "Cidade histórica na Jordânia escavada diretamente em paredões de rocha arenosa rosa-avermelhada no deserto.",
        "fato": "Controlava as rotas caravaneiras de incenso e mirra entre a Arábia, Egito e Mediterrâneo; acessada pelo estreito desfiladeiro do Siq."
    },
    {
        "nome": "Pirâmides de Gizé",
        "categoria": "A Única Maravilha Antiga Remanescente",
        "lat": 29.9792,
        "lng": 31.1342,
        "dica": "Complexo monumental de pirâmides e Esfinge nos arredores do Cairo (Egito) erguido há mais de 4.500 anos.",
        "fato": "A Grande Pirâmide de Quéops foi a estrutura mais alta construída pelo ser humano por mais de 3.800 anos, até a Catedral de Lincoln em 1311."
    },
    {
        "nome": "Taj Mahal",
        "categoria": "Joia de Mármore do Rio Yamuna",
        "lat": 27.1751,
        "lng": 78.0421,
        "dica": "Mausoléu de mármore branco em Agra (Índia) construído pelo imperador mogol Shah Jahan em memória de sua esposa Mumtaz Mahal.",
        "fato": "Apresenta simetria arquitetônica absoluta em todos os eixos, com quatro minaretes levemente inclinados para fora para não cair sobre o domo em terremotos."
    },
    {
        "nome": "Panmunjom (JSA)",
        "categoria": "A Mesa de Negociação na DMZ",
        "lat": 37.956,
        "lng": 126.677,
        "dica": "Aldeia na Zona Desmilitarizada da Coreia onde soldados do Norte e do Sul ficam frente a frente separados por uma linha de concreto.",
        "fato": "Dentro dos pavilhões azuis da ONU, a linha divisória do Paralelo 38 corta exatamente o centro da mesa de conferência."
    },
    {
        "nome": "Estação Vostok",
        "categoria": "Pólo do Frio Absoluto da Terra",
        "lat": -78.4644,
        "lng": 106.8372,
        "dica": "Estação de pesquisa russa no platô continental da Antártida a 3.488 metros de altitude.",
        "fato": "Registrou a temperatura natural mais baixa da história humana em 21 de julho de 1983: estarrecedores -89,2°C."
    },
    {
        "nome": "Estação Amundsen-Scott",
        "categoria": "O Polo Sul Geográfico",
        "lat": -90.0,
        "lng": 0.0,
        "dica": "Base científica dos Estados Unidos situada exatamente no Polo Sul geográfico a 2.835 metros sobre a calota de gelo da Antártida.",
        "fato": "Como todas as linhas de longitude convergem no Polo Sul, a estação adota convenientemente o fuso horário da Nova Zelândia (base de apoio logístico)."
    },
    {
        "nome": "Polo Norte da Inacessibilidade",
        "categoria": "O Ponto Mais Remoto do Oceano Ártico",
        "lat": 85.8,
        "lng": 175.0,
        "dica": "Ponto do Oceano Ártico situado à máxima distância possível de qualquer costa terrestre de ilhas ou continentes.",
        "fato": "Fica a mais de 1.000 km de distância de Kaffeklubben (Groenlândia), Ilha de Ellesmere (Canadá) e Ilha Henrietta (Rússia)."
    },
    {
        "nome": "Deserto de Danakil (Erta Ale)",
        "categoria": "O Vulcão do Lago de Lava Perpétuo",
        "lat": 13.6033,
        "lng": 40.6628,
        "dica": "Vulcão em escudo na Etiópia que abriga um dos mais duradouros lagos de lava basáltica incandescente contínua do mundo.",
        "fato": "Conhecido pelos nômades Afar como 'Montanha de Fumaça' e 'Portão do Inferno'; a lava borbulha a mais de 1.100°C dia e noite."
    },
    {
        "nome": "Forte Boyard",
        "categoria": "A Fortaleza Marítima no Oceano",
        "lat": 45.9996,
        "lng": -1.2139,
        "dica": "Fortaleza oval de pedra construída no século XIX sobre um banco de areia no Atlântico entre as ilhas de Aix e Oléron (França).",
        "fato": "Encomendada por Napoleão para proteger o arsenal militar de Rochefort de frotas britânicas; tornou-se célebre cenário mundial de programas de TV."
    },
    {
        "nome": "Delta do Okavango",
        "categoria": "O Rio que Morre no Deserto",
        "lat": -19.3,
        "lng": 22.9,
        "dica": "Maior delta interior do planeta em Botsuana onde um rio caudaloso deságua nas areias do Kalahari em vez do oceano.",
        "fato": "As inundações anuais transformam o deserto árido em um oásis pulsante que atrai uma das maiores concentrações de fauna selvagem da África."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOCAIS_ONDE_FICA;
}
