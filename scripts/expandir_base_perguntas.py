# -*- coding: utf-8 -*-
"""
EXPANSOR DO BANCO DE DADOS DE PERGUNTAS DE TRIVIA GEOPOLÍTICA (CEREBROGEO)
Expande de 100 para 200 perguntas de alto nível sem clichês.
"""

import json
from dados_perguntas import PERGUNTAS

NOVAS_PERGUNTAS = [
    # =========================================================================
    # 1. CHOKEPOINTS & ROTAS MARÍTIMAS (101-115)
    # =========================================================================
    {
        "id": 101,
        "pergunta": "Qual estreito no extremo sul do Chile conecta o Oceano Atlântico ao Pacífico e foi a principal rota antes do Canal do Panamá?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Magalhães", "Canal de Beagle", "Passagem de Drake", "Estreito de Cook"],
        "resposta": 0,
        "explicacao": "Navegado em 1520 por Fernão de Magalhães, oferecia uma travessia protegida de ilhas em comparação às violentas ondas abertas da Passagem de Drake.",
        "dificuldade": "facil"
    },
    {
        "id": 102,
        "pergunta": "Qual estreito raso e perigoso com recifes de coral separa a Península de Cape York (Austrália) da costa sul de Papua-Nova Guiné?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Bass", "Estreito de Torres", "Estreito de Cook", "Estreito de Sunda"],
        "resposta": 1,
        "explicacao": "O Estreito de Torres conecta o Mar de Coral ao Mar de Arafura e é habitado pelos povos indígenas ilhéus do Estreito de Torres.",
        "dificuldade": "medio"
    },
    {
        "id": 103,
        "pergunta": "Qual estreito separa a ilha de Honshu da ilha de Hokkaido no Japão, sob o qual foi escavado o túnel submarino Seikan?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de La Pérouse", "Estreito de Tsugaru", "Estreito da Coreia", "Estreito de Nemuro"],
        "resposta": 1,
        "explicacao": "O Estreito de Tsugaru conecta o Mar do Japão ao Oceano Pacífico e possui águas internacionais em seu centro para permitir a passagem militar.",
        "dificuldade": "dificil"
    },
    {
        "id": 104,
        "pergunta": "Qual canal navegável entre a Sicília e a ponta da Calábria na Itália inspirou a lenda de Cila e Caríbdis na Odisséia de Homero?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Otranto", "Estreito de Messina", "Canal de Malta", "Estreito de Bonifacio"],
        "resposta": 1,
        "explicacao": "O Estreito de Messina tem apenas 3,1 km de largura e fortes correntes de maré que alimentaram mitos clássicos de redemoinhos marinhos monstruosos.",
        "dificuldade": "facil"
    },
    {
        "id": 105,
        "pergunta": "Qual passagem marítima entre a Groenlândia e a Islândia abriga no fundo do mar a maior cachoeira subaquática conhecida da Terra?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Davis", "Estreito da Dinamarca", "Mar de Barents", "Passagem do Noroeste"],
        "resposta": 1,
        "explicacao": "No Estreito da Dinamarca, a água polar fria e densa despenca por um desfiladeiro abissal de 3.500 metros sob o mar em direção ao Atlântico.",
        "dificuldade": "dificil"
    },
    {
        "id": 106,
        "pergunta": "Qual estreito no Mar Báltico separa a ilha dinamarquesa da Zelândia (onde fica Copenhague) da região sueca da Escânia (onde fica Malmö)?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Kattegat", "Estreito de Øresund", "Estreito de Skagerrak", "Grande Belt"],
        "resposta": 1,
        "explicacao": "Øresund é atravessado pela famosa Ponte-Túnel de Øresund inaugurada em 2000, integrando economicamente as duas nações escandinavas.",
        "dificuldade": "medio"
    },
    {
        "id": 107,
        "pergunta": "Qual canal artificial de 160 km inaugurado em 1933 sob o regime de Stalin conectou o Mar Branco ao Mar Báltico com trabalho forçado de prisioneiros do Gulag?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Canal de Kiel", "Canal Mar Branco-Báltico (Belomorkanal)", "Canal Volga-Don", "Canal de Moscou"],
        "resposta": 1,
        "explicacao": "O Belomorkanal foi escavado com ferramentas manuais rudimentares em ritmo acelerado, mas foi construído raso demais para a maioria dos grandes navios de guerra modernos.",
        "dificuldade": "dificil"
    },
    {
        "id": 108,
        "pergunta": "Qual hidrovia russa conecta o Rio Volga ao Rio Don, permitindo o tráfego fluvial de cargueiros entre o Mar Cáspio e o Mar Negro?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Canal Volga-Báltico", "Canal Volga-Don", "Canal de Moscou", "Canal de Ob-Yenisei"],
        "resposta": 1,
        "explicacao": "Inaugurado em 1952 perto de Volgogrado (antiga Stalingrado), o Canal Volga-Don é a artéria chave que conecta o interior fechado do Cáspio aos mares abertos.",
        "dificuldade": "medio"
    },
    {
        "id": 109,
        "pergunta": "Por qual motivo o Estreito de Bab el-Mandeb se tornou o foco de grandes desvios de navios comerciais contornando o Cabo da Boa Esperança desde o final de 2023?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Erupções de vulcões submarinos", "Ataques e bloqueios de drones dos rebeldes Houthi do Iêmen", "Seca severa e redução do nível das águas", "Colisão de um superpetroleiro com um recife"],
        "resposta": 1,
        "explicacao": "A milícia Houthi no Iêmen lançou mísseis contra navios que cruzavam Bab el-Mandeb rumo ao Mar Vermelho, forçando frotas mundiais a desviar 7.000 km ao redor da África.",
        "dificuldade": "facil"
    },
    {
        "id": 110,
        "pergunta": "Qual estreito estratégico entre a Crimeia e a Península de Taman russa conecta o Mar Negro ao raso Mar de Azov?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Bósforo", "Estreito de Kerch", "Estreito dos Dardanelos", "Estreito de Messina"],
        "resposta": 1,
        "explicacao": "O Estreito de Kerch é o único acesso marítimo aos portos de Mariupol e Berdyansk e abriga a disputada Ponte da Crimeia erguida pela Rússia.",
        "dificuldade": "facil"
    },
    {
        "id": 111,
        "pergunta": "Qual estreito entre a ponta sul da Malásia e as ilhas Riau da Indonésia é patrulhado intensamente pela República de Cingapura?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Malaca", "Estreito de Cingapura", "Estreito de Sunda", "Estreito de Johor"],
        "resposta": 1,
        "explicacao": "O Estreito de Cingapura tem 105 km de extensão e conecta o Estreito de Malaca ao Mar da China Meridional, abrigando o segundo porto mais movimentado do mundo.",
        "dificuldade": "medio"
    },
    {
        "id": 112,
        "pergunta": "Qual estreito no Golfo Pérsico dá nome ao histórico bloqueio e fortificações erguidas pelos portugueses liderados por Afonso de Albuquerque em 1507?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Bab el-Mandeb", "Estreito de Ormuz", "Estreito de Mascate", "Estreito de Aden"],
        "resposta": 1,
        "explicacao": "O Império Português controlou o Forte de Nossa Senhora da Conceição na Ilha de Ormuz por mais de um século, cobrando taxas de todas as rotas persas.",
        "dificuldade": "medio"
    },
    {
        "id": 113,
        "pergunta": "Qual canal nos EUA construído na década de 1820 ligou o Rio Hudson ao Lago Erie, transformando a cidade de Nova York na capital financeira do país?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Canal de Chesapeake", "Canal Erie", "Canal de Illinois", "Canal de Ohio"],
        "resposta": 1,
        "explicacao": "O Canal Erie abriu uma rota aquática direta através das montanhas Apalaches, reduzindo em 95% o custo de transporte de mercadorias do Meio-Oeste até o porto de Nova York.",
        "dificuldade": "medio"
    },
    {
        "id": 114,
        "pergunta": "Qual passagem marítima no Oceano Ártico contorna a costa norte do Canadá e do Alasca, conectando o Atlântico ao Pacífico?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Passagem do Nordeste", "Passagem do Noroeste", "Passagem de Drake", "Estreito de Davis"],
        "resposta": 1,
        "explicacao": "Buscada tragicamente por navegadores europeus como John Franklin (1845), a Passagem do Noroeste está tendo seu gelo reduzido pelo aquecimento global.",
        "dificuldade": "facil"
    },
    {
        "id": 115,
        "pergunta": "Qual estreito separa a ilha francesa da Córsega da ilha italiana da Sardenha por apenas 11 km de distância no Mediterrâneo?",
        "categoria": "Chokepoints Estratégicos",
        "opcoes": ["Estreito de Messina", "Estreito de Bonifacio", "Canal de Piombino", "Canal da Sicília"],
        "resposta": 1,
        "explicacao": "O Estreito de Bonifacio é notório por ventos traiçoeiros e bancos de recifes; é classificado como Área Marinha Particularmente Sensível pela IMO.",
        "dificuldade": "dificil"
    },

    # =========================================================================
    # 2. FRONTEIRAS, ENCLAVES & ANOMALIAS (116-130)
    # =========================================================================
    {
        "id": 116,
        "pergunta": "Qual país africano é um enclave geográfico absoluto, situado inteiramente dentro das fronteiras da República da África do Sul?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Essuatíni", "Lesoto", "Botsuana", "Namíbia"],
        "resposta": 1,
        "explicacao": "O Reino do Lesoto é uma nação montanhosa totalmente cercada pela África do Sul, enquanto Essuatíni faz fronteira também com Moçambique.",
        "dificuldade": "facil"
    },
    {
        "id": 117,
        "pergunta": "Qual cidade no norte da Holanda/Bélgica possui fronteiras que cortam o meio de lojas e restaurantes demarcadas por cruzes brancas no piso?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Büsingen", "Baarle (Baarle-Hertog / Baarle-Nassau)", "Campione", "Llívia"],
        "resposta": 1,
        "explicacao": "Se a linha divisória corta uma residência ao meio, a regra histórica determina que a localização da porta principal de entrada define qual país cobra os impostos.",
        "dificuldade": "facil"
    },
    {
        "id": 118,
        "pergunta": "Qual território ultramarino da Austrália fica perto da Indonésia e é famoso pela migração anual em massa de dezenas de milhões de caranguejos-vermelhos?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Ilha Norfolk", "Ilha Christmas (Ilha do Natal)", "Ilhas Cocos (Keeling)", "Ilha Lord Howe"],
        "resposta": 1,
        "explicacao": "A Ilha Christmas fica a 350 km ao sul de Java; durante as primeiras chuvas de monção, milhões de caranguejos cobrem estradas rumo ao mar para desovar.",
        "dificuldade": "medio"
    },
    {
        "id": 119,
        "pergunta": "Qual península canadense faz fronteira terrestre com o enclave americano de Point Roberts através do Paralelo 49° Norte?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Península de Niágara", "Península de Tsawwassen", "Península de Bruce", "Península de Nova Escócia"],
        "resposta": 1,
        "explicacao": "Point Roberts fica no extremo sul da península de Tsawwassen; crianças americanas locais precisam cruzar a fronteira quatro vezes por dia de ônibus para ir à escola.",
        "dificuldade": "dificil"
    },
    {
        "id": 120,
        "pergunta": "Qual república autônoma é um exclave do Azerbaijão separado do restante do território nacional pela província armênia de Syunik?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Nagorno-Karabakh", "Nakhchivan", "Abkházia", "Ajária"],
        "resposta": 1,
        "explicacao": "Nakhchivan faz fronteira com a Armênia, Irã e uma faixa de 15 km com a Turquia, sendo o motivo central da disputa pelo Corredor de Zangezur.",
        "dificuldade": "medio"
    },
    {
        "id": 121,
        "pergunta": "Qual exclave de Angola no litoral da África Central é responsável por grande parte da produção de petróleo do país e fica cercado pelo Congo e pela RDC?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Bioko", "Cabinda", "Walvis Bay", "Caprivi"],
        "resposta": 1,
        "explicacao": "Cabinda foi um protetorado português separado (Tratado de Simulambuco de 1885) anexado administrativamente a Angola antes da independência em 1975.",
        "dificuldade": "facil"
    },
    {
        "id": 122,
        "pergunta": "Qual enclave alemão fica totalmente cercado pelo território suíço do Cantão de Schaffhausen às margens do Rio Reno?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Campione d'Italia", "Büsingen am Hochrhein", "Llívia", "Jungholz"],
        "resposta": 1,
        "explicacao": "Büsingen faz parte do estado alemão de Baden-Württemberg, mas utiliza o franco suíço, tem postos de correio com CEPs de ambos os países e integra a alfândega suíça.",
        "dificuldade": "medio"
    },
    {
        "id": 123,
        "pergunta": "Qual cidade no estado americano do Alasca funciona inteiramente integrada com o Canadá, utilizando dólares canadenses e fuso horário canadense?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Skagway", "Hyder", "Haines", "Ketchikan"],
        "resposta": 1,
        "explicacao": "Hyder é a comunidade mais a leste do Alasca; sem estrada que a ligue ao restante do estado americano, depende da cidade canadense vizinha de Stewart.",
        "dificuldade": "dificil"
    },
    {
        "id": 124,
        "pergunta": "Qual país europeu cedeu pacificamente a cidade histórica de Llívia em 1659 no Tratado dos Pireneus, fazendo-a restar como um enclave cercado pela França?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Portugal", "Espanha", "Itália", "Andorra"],
        "resposta": 1,
        "explicacao": "A Espanha cedeu as aldeias do vale de Cerdanya à França, mas Llívia argumentou que possuía título imperial de 'vila' e não de 'aldeia', permanecendo espanhola.",
        "dificuldade": "medio"
    },
    {
        "id": 125,
        "pergunta": "Qual arquipélago no Mar Báltico é uma região autônoma de língua sueca, mas sob soberania e integridade territorial da Finlândia?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Gotland", "Ilhas Åland", "Bornholm", "Öland"],
        "resposta": 1,
        "explicacao": "As Ilhas Åland são desmilitarizadas e têm status garantido pela Liga das Nações em 1921, possuindo bandeira própria e autonomia legislativa completa.",
        "dificuldade": "medio"
    },
    {
        "id": 126,
        "pergunta": "Qual país da América Central possui o menor território continental e é o único voltado exclusivamente para o Oceano Pacífico?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Belize", "El Salvador", "Honduras", "Costa Rica"],
        "resposta": 1,
        "explicacao": "El Salvador tem 21.041 km² e é o único país da América Central continental sem costa voltada para o Mar do Caribe.",
        "dificuldade": "facil"
    },
    {
        "id": 127,
        "pergunta": "Qual região histórica dividida entre a Índia e o Bangladesh continha até 2015 mais de 160 enclaves e contra-enclaves complexos herdados de marajás?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Caxemira", "Cooch Behar", "Assam", "Bengala Ocidental"],
        "resposta": 1,
        "explicacao": "O Acordo de Fronteira Terrestre de 2015 entre Índia e Bangladesh trocou os territórios amigavelmente, permitindo aos moradores escolher sua cidadania.",
        "dificuldade": "dificil"
    },
    {
        "id": 128,
        "pergunta": "Qual cidade no norte de Marrocos é um território autônomo soberano da Espanha desde 1497, protegida por muralhas e fronteira vigiada?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Tânger", "Melilla", "Casablanca", "Tetouan"],
        "resposta": 1,
        "explicacao": "Melilla fica na costa do Cabo das Três Forcas; junto com Ceuta, constitui uma das duas fronteiras terrestres diretas da União Europeia na África.",
        "dificuldade": "facil"
    },
    {
        "id": 129,
        "pergunta": "Qual enclave no Cáucaso foi dissolvido militarmente em 2023 após uma ofensiva relâmpago do Azerbaijão, forçando mais de 100 mil armênios a migrar?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Abkházia", "Nagorno-Karabakh (Artsakh)", "Ossétia do Sul", "Ajária"],
        "resposta": 1,
        "explicacao": "A autodeclarada República de Nagorno-Karabakh existiu de facto por mais de 30 anos antes de capitular e reintegrar-se sob autoridade de Baku.",
        "dificuldade": "facil"
    },
    {
        "id": 130,
        "pergunta": "Qual país do Sudeste Asiático abriga o exclave de Oecusse, separado de seu território principal por águas indonésias e terra da província de Nusa Tenggara?",
        "categoria": "Fronteiras & Enclaves",
        "opcoes": ["Brunei", "Timor-Leste", "Papua-Nova Guiné", "Malásia"],
        "resposta": 1,
        "explicacao": "Oecusse-Ambeno é o berço histórico da colonização portuguesa em Timor, mantendo laços com a capital Díli por pontes aéreas e balsas marítimas.",
        "dificuldade": "medio"
    },

    # =========================================================================
    # 3. FUSOS, COORDENADAS & GEODÉSIA (131-145)
    # =========================================================================
    {
        "id": 131,
        "pergunta": "Quantos fusos horários oficiais contínuos existem no território continental da Rússia, cobrindo de Kaliningrado a Kamchatka?",
        "categoria": "Fusos Horários",
        "opcoes": ["9 fusos", "11 fusos", "13 fusos", "15 fusos"],
        "resposta": 1,
        "explicacao": "A Rússia abrange 11 fusos horários consecutivos (de UTC+2 a UTC+12), o maior número ininterrupto sobre uma única massa terrestre contígua.",
        "dificuldade": "facil"
    },
    {
        "id": 132,
        "pergunta": "Qual ilha no Oceano Índico sob soberania australiana adota o fuso horário fracionado único de UTC+6:30?",
        "categoria": "Fusos Horários",
        "opcoes": ["Ilha Christmas", "Ilhas Cocos (Keeling)", "Ilha Norfolk", "Ilha Heard"],
        "resposta": 1,
        "explicacao": "As Ilhas Cocos (Keeling) adotam UTC+6:30, compartilhado apenas com Mianmar no Sudeste Asiático.",
        "dificuldade": "dificil"
    },
    {
        "id": 133,
        "pergunta": "O que acontece na Linha Internacional de Mudança de Data quando você viaja cruzando-a no sentido Leste para Oeste (da América para a Ásia)?",
        "categoria": "Fusos Horários",
        "opcoes": ["Você volta um dia no calendário", "Você avança um dia no calendário (+24h)", "O horário do relógio para por 12 horas", "O calendário permanece inalterado"],
        "resposta": 1,
        "explicacao": "Cruzar de leste para oeste faz o relógio pular para o dia seguinte imediatamente (você 'ganha' um dia no futuro).",
        "dificuldade": "facil"
    },
    {
        "id": 134,
        "pergunta": "Qual país insular do Pacífico adota o fuso horário UTC+14:00 (o mais adiantado do planeta), fazendo-o ser o primeiro país a ver o amanhecer do Ano Novo?",
        "categoria": "Fusos Horários",
        "opcoes": ["Fiji", "Kiribati (Ilha Millennium)", "Nova Zelândia", "Tonga"],
        "resposta": 1,
        "explicacao": "Kiribati reajustou a Linha de Data em 1995 para que as Ilhas da Linha operassem no mesmo dia útil da capital Tarawa, criando o fuso pioneiro UTC+14.",
        "dificuldade": "medio"
    },
    {
        "id": 135,
        "pergunta": "Qual é a cidade brasileira cortada exatamente pela Linha do Equador (Latitude 0°), onde o estádio Zerão tem a linha de meio-campo sobre o Equador?",
        "categoria": "Antípodas & Geodésia",
        "opcoes": ["Belém", "Macapá", "Manaus", "Boa Vista"],
        "resposta": 1,
        "explicacao": "Em Macapá (Amapá), cada time defende um hemisfério da Terra (um no Hemisfério Norte e outro no Hemisfério Sul) no Estádio Milton Corrêa (Zerão).",
        "dificuldade": "facil"
    },
    {
        "id": 136,
        "pergunta": "Qual é a antípoda exata de Pequim (China) na superfície terrestre do planeta?",
        "categoria": "Antípodas & Geodésia",
        "opcoes": ["Litoral do Brasil", "Golfo de San Matías / Argentina", "Oceano Atlântico Norte", "África do Sul"],
        "resposta": 1,
        "explicacao": "A antípoda de Pequim fica na região da Patagônia argentina (perto de Carmen de Patagones e Viedma).",
        "dificuldade": "dificil"
    },
    {
        "id": 137,
        "pergunta": "Qual monumento nos arredores de Quito no Equador foi construído no local onde cientistas do século XVIII mediram o arco do meridiano terrestre?",
        "categoria": "Antípodas & Geodésia",
        "opcoes": ["Mitad del Mundo", "Marco Zero das Américas", "Cúpula de Guayaquil", "Torre de Pichincha"],
        "resposta": 0,
        "explicacao": "A 'Ciudad Mitad del Mundo' celebra a Missão Geodésica de La Condamine em 1736; medições com GPS moderno apontam que o Equador exato passa a 240m dali.",
        "dificuldade": "facil"
    },
    {
        "id": 138,
        "pergunta": "O que é o fenômeno da 'Noite Polar' que ocorre em regiões situadas acima dos Círculos Polares?",
        "categoria": "Fusos Horários",
        "opcoes": ["A lua nunca se põe por 6 meses", "O sol permanece abaixo do horizonte por mais de 24 horas consecutivas", "A aurora boreal cobre todo o céu de vermelho", "Os ventos solares bloqueiam toda a luz das estrelas"],
        "resposta": 1,
        "explicacao": "Devido à inclinação de 23,5° do eixo da Terra, no auge do inverno polar o sol não chega a nascer por semanas ou meses seguidos.",
        "dificuldade": "facil"
    },
    {
        "id": 139,
        "pergunta": "Qual país da América do Sul não adota horário de verão e tem seu território contínuo inteiramente situado no fuso horário UTC-4?",
        "categoria": "Fusos Horários",
        "opcoes": ["Equador", "Bolívia", "Colômbia", "Peru"],
        "resposta": 1,
        "explicacao": "A Bolívia utiliza o horário oficial UTC-4 (Horário da Bolívia) sem alterações sazonais em todos os seus nove departamentos.",
        "dificuldade": "medio"
    },
    {
        "id": 140,
        "pergunta": "Qual país da Europa Ocidental adota por decreto o fuso da Europa Central (UTC+1) desde 1940, apesar de sua posição geográfica coincidir com o fuso de Greenwich (UTC+0)?",
        "categoria": "Fusos Horários",
        "opcoes": ["Portugal", "Espanha", "Irlanda", "Reino Unido"],
        "resposta": 1,
        "explicacao": "O ditador Francisco Franco alinhou o relógio da Espanha com o horário da Alemanha nazista de Berlim em 1940, e a medida nunca foi revertida.",
        "dificuldade": "facil"
    },
    {
        "id": 141,
        "pergunta": "Qual é a única capital nacional do mundo por onde passa fisicamente a linha do Paralelo 0° (Linha do Equador)?",
        "categoria": "Antípodas & Geodésia",
        "opcoes": ["Bogotá", "Quito", "Nairóbi", "Campala"],
        "resposta": 1,
        "explicacao": "Quito situa-se a apenas cerca de 25 km ao sul do Equador, estendendo sua região metropolitana diretamente sobre a Linha Equatorial.",
        "dificuldade": "facil"
    },
    {
        "id": 142,
        "pergunta": "Qual território ultramarino francês no Oceano Pacífico adota o fuso horário UTC-10, o mesmo horário do estado americano do Havaí?",
        "categoria": "Fusos Horários",
        "opcoes": ["Nova Caledônia", "Polinésia Francesa (Taiti)", "Wallis e Futuna", "Reunião"],
        "resposta": 1,
        "explicacao": "A ilha do Taiti e a capital Papeete operam no fuso UTC-10:00, alinhadas temporalmente com Honolulu.",
        "dificuldade": "medio"
    },
    {
        "id": 143,
        "pergunta": "Qual é o nome da forma geométrica tridimensional real da Terra que considera as variações gravitacionais e do nível médio do mar?",
        "categoria": "Antípodas & Geodésia",
        "opcoes": ["Esferoide Oblato", "Geoide", "Elipsoide de Bessel", "Topocentro"],
        "resposta": 1,
        "explicacao": "O geoide é a superfície equipotencial do campo de gravidade da Terra que melhor se ajusta ao nível médio dos oceanos em repouso.",
        "dificuldade": "facil"
    },
    {
        "id": 144,
        "pergunta": "Qual país insular da Oceania adotou o horário fracionado de UTC+12:45 nas Ilhas Chatham para refletir o sol nascente local?",
        "categoria": "Fusos Horários",
        "opcoes": ["Austrália", "Nova Zelândia", "Fiji", "Vanuatu"],
        "resposta": 1,
        "explicacao": "As Ilhas Chatham, território neozelandês a 800 km a leste da Ilha Sul, têm seu próprio fuso horário oficial adiantado em 45 minutos.",
        "dificuldade": "dificil"
    },
    {
        "id": 145,
        "pergunta": "Qual é o único ponto da Terra onde todos os 24 fusos horários do planeta convergem teoricamente para uma única coordenada geométrica?",
        "categoria": "Fusos Horários",
        "opcoes": ["Nos Polos Geográficos Norte e Sul (90°N e 90°S)", "No Monte Everest", "No Ponto Nemo", "No Observatório de Greenwich"],
        "resposta": 0,
        "explicacao": "Nos polos Norte e Sul todos os meridianos se encontram; você pode caminhar através de todos os fusos horários do planeta em alguns passos.",
        "dificuldade": "facil"
    },

    # =========================================================================
    # 4. CAPITAIS & CIDADES SINGULARES (146-160)
    # =========================================================================
    {
        "id": 146,
        "pergunta": "Qual é a capital oficial e sede do parlamento da Tanzânia desde a transferência do status da cidade de Dar es Salaam?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Arusha", "Dodoma", "Mwanza", "Zanzibar"],
        "resposta": 1,
        "explicacao": "Dodoma foi escolhida em 1974 para incentivar o desenvolvimento das províncias centrais e rurais do interior tanzaniano.",
        "dificuldade": "facil"
    },
    {
        "id": 147,
        "pergunta": "Qual país transferiu sua capital oficial de Almaty para Akmola (posteriormente rebatizada de Astana e Nur-Sultan)?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Uzbequistão", "Cazaquistão", "Quirguistão", "Turcomenistão"],
        "resposta": 1,
        "explicacao": "O presidente Nursultan Nazarbayev mudou a capital em 1997 para afastar a sede do poder de zonas sísmicas e das fronteiras chinesas.",
        "dificuldade": "facil"
    },
    {
        "id": 148,
        "pergunta": "Qual é a cidade habitada permanente mais fria do planeta com mais de 300.000 habitantes, onde as construções são erguidas sobre estacas no permafrost?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Norilsk", "Yakutsk", "Murmansk", "Arkhangelsk"],
        "resposta": 1,
        "explicacao": "Yakutsk atinge rotineiramente -50°C no inverno; as casas precisam de estacas para o calor dos edifícios não derreter o permafrost e causar desabamentos.",
        "dificuldade": "medio"
    },
    {
        "id": 149,
        "pergunta": "Qual é a maior cidade do mundo situada ao norte do Círculo Polar Ártico, abrigando uma base naval russa que nunca congela graças à Corrente do Golfo?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Tromsø", "Murmansk", "Arkhangelsk", "Reykjavík"],
        "resposta": 1,
        "explicacao": "Murmansk tem mais de 270 mil habitantes na Península de Kola; as águas do seu porto permanecem navegáveis o ano todo graças à Corrente do Atlântico Norte.",
        "dificuldade": "medio"
    },
    {
        "id": 150,
        "pergunta": "Qual cidade no Peru cresceu em torno de uma mina de ouro a 5.100 metros de altitude, onde não há árvores e o oxigênio é 50% menor que ao nível do mar?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Cerro de Pasco", "La Rinconada", "Puno", "Juliaca"],
        "resposta": 1,
        "explicacao": "La Rinconada é o assentamento permanente mais alto da Terra; a economia opera no sistema tradicional do 'cachorreo', onde mineiros ganham minério bruto em dias específicos.",
        "dificuldade": "medio"
    },
    {
        "id": 151,
        "pergunta": "Qual é a capital planejada da Malásia construída na década de 1990 para sediar o gabinete do primeiro-ministro e os ministérios federais?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Cyberjaya", "Putrajaya", "Petaling Jaya", "Shah Alam"],
        "resposta": 1,
        "explicacao": "Putrajaya é a capital administrativa da Malásia, enquanto Kuala Lumpur permanece como capital real e sede do parlamento nacional.",
        "dificuldade": "medio"
    },
    {
        "id": 152,
        "pergunta": "Qual cidade no Marrocos é conhecida internacionalmente como a 'Pérola Azul' por suas casas e ruelas inteiramente pintadas de azul-celeste?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Marraquexe", "Chefchaouen", "Fez", "Essaouira"],
        "resposta": 1,
        "explicacao": "Fundada em 1471 nas montanhas do Rife, a tradição de pintar as paredes de azul foi introduzida por refugiados judeus sefarditas nos anos 1930.",
        "dificuldade": "facil"
    },
    {
        "id": 153,
        "pergunta": "Qual é a capital da Jordânia, construída sobre sete colinas originais e uma das cidades continuamente habitadas mais antigas do mundo?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Aqaba", "Amã", "Zarqa", "Jerash"],
        "resposta": 1,
        "explicacao": "Mencionada na Bíblia como Rabá Amon e rebatizada pelos gregos de Filadélfia, Amã combina ruínas romanas colossais com modernidade no Oriente Médio.",
        "dificuldade": "facil"
    },
    {
        "id": 154,
        "pergunta": "Qual cidade no litoral da Escócia é a capital petrolífera da Europa por ser a principal base de operações dos campos offshore do Mar do Norte?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Glasgow", "Aberdeen", "Dundee", "Inverness"],
        "resposta": 1,
        "explicacao": "Aberdeen é apelidada de 'Cidade de Granito' pelas construções em rocha cinzenta e tornou-se a capital da indústria de gás e petróleo britânica desde os anos 1970.",
        "dificuldade": "medio"
    },
    {
        "id": 155,
        "pergunta": "Qual capital nacional tem o apelido de 'Cidade Branca' pelo fato de quase todos os prédios públicos serem construídos em calcário de mármore branco?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Tashkent", "Asgabate", "Baku", "Dushanbe"],
        "resposta": 1,
        "explicacao": "Asgabate no Turcomenistão tem regras arquitetônicas estritas que proíbem carros escuros no centro e exigem fachadas brancas e douradas.",
        "dificuldade": "facil"
    },
    {
        "id": 156,
        "pergunta": "Qual é a capital do Principado de Liechtenstein, dominada pela residência oficial do Príncipe Soberano no Castelo de Vaduz?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Schaan", "Vaduz", "Balzers", "Triesen"],
        "resposta": 1,
        "explicacao": "Vaduz é a sede dos príncipes de Liechtenstein desde 1938, situada no vale alpino do Rio Reno.",
        "dificuldade": "facil"
    },
    {
        "id": 157,
        "pergunta": "Qual cidade portuária na ponta sul da Argentina disputa com Puerto Williams (Chile) o título de 'cidade mais ao sul do mundo'?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Río Gallegos", "Ushuaia", "Punta Arenas", "Comodoro Rivadavia"],
        "resposta": 1,
        "explicacao": "Ushuaia, na Terra do Fogo argentina, é uma metrópole turística com mais de 80 mil habitantes e porta de entrada clássica para cruzeiros na Antártida.",
        "dificuldade": "facil"
    },
    {
        "id": 158,
        "pergunta": "Qual é a capital do minúsculo estado insular de Tuvalu, famosa pela pista de pouso que vira parque e campo de futebol quando não há voos?",
        "categoria": "Capitais & Cidades",
        "opcoes": ["Tarawa", "Funafuti", "Majuro", "Nuku'alofa"],
        "resposta": 1,
        "explicacao": "O atol de Funafuti tem faixas de terra de apenas 20 a 400 metros de largura; a pista do aeroporto ocupa um terço da ilha principal de Fongafale.",
        "dificuldade": "medio"
    },
    {
        "id": 159,
        "pergunta": "Qual é a cidade histórica na Sicília construída nas encostas do vulcão Etna que foi reconstruída em estilo barroco negro após um terremoto em 1693?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Palermo", "Catânia", "Siracusa", "Messina"],
        "resposta": 1,
        "explicacao": "Catânia utilizou a própria rocha basáltica escura da lava do Etna para erguer suas catedrais, palácios e praças barrocas deslumbrantes.",
        "dificuldade": "medio"
    },
    {
        "id": 160,
        "pergunta": "Qual cidade no deserto de Nevada (EUA) é a sede da famosa base ultrassecreta militar de testes 'Área 51' no leito seco do Lago Groom?",
        "categoria": "Cidades Singulares",
        "opcoes": ["Tonopah", "Rachel", "Beatty", "Caliente"],
        "resposta": 1,
        "explicacao": "Rachel é a localidade mais próxima da Área 51 na Rodovia Extraterrestre (Route 375), servindo de refúgio de entusiastas de aviação militar e OVNIs.",
        "dificuldade": "medio"
    },

    # =========================================================================
    # 5. DISPUTAS & TRATADOS HISTÓRICOS (161-175)
    # =========================================================================
    {
        "id": 161,
        "pergunta": "Qual tratado assinado em 1494 entre os reinos de Portugal e Espanha dividiu as terras descobertas fora da Europa por um meridiano a 370 léguas de Cabo Verde?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado de Madri", "Tratado de Tordesilhas", "Tratado de Utrecht", "Tratado de Saragoça"],
        "resposta": 1,
        "explicacao": "O Tratado de Tordesilhas garantiu a Portugal os direitos sobre o litoral leste da América do Sul (permitindo o reconhecimento formal do Brasil por Cabral em 1500).",
        "dificuldade": "facil"
    },
    {
        "id": 162,
        "pergunta": "Qual tratado de 1750 substituiu o de Tordesilhas na América do Sul adotando o princípio do 'Uti Possidetis' (quem ocupa de fato a terra tem direito à soberania)?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado de Petrópolis", "Tratado de Madri", "Tratado de Badajoz", "Tratado de Santo Ildefonso"],
        "resposta": 1,
        "explicacao": "Negociado por Alexandre de Gusmão, o Tratado de Madri reconheceu a expansão dos bandeirantes e definiu o contorno continental básico do Brasil moderno.",
        "dificuldade": "medio"
    },
    {
        "id": 163,
        "pergunta": "Qual tratado de 1903 comprou formalmente o território do Acre da Bolívia para o Brasil por 2 milhões de libras esterlinas e a promessa da ferrovia Madeira-Mamoré?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado de Ayacucho", "Tratado de Petrópolis", "Tratado de Tordesilhas", "Tratado de Roboré"],
        "resposta": 1,
        "explicacao": "Conduzido com brilhantismo pelo Barão do Rio Branco, o tratado encerrou a Revolução Acreana e incorporou a rica região seringueira ao território nacional.",
        "dificuldade": "facil"
    },
    {
        "id": 164,
        "pergunta": "Qual conferência internacional em 1884-1885 convocada pelo chanceler alemão Otto von Bismarck regulamentou a partilha colonial da África pelas potências europeias?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Conferência de Versalhes", "Conferência de Berlim", "Congresso de Viena", "Pacto de Paris"],
        "resposta": 1,
        "explicacao": "A Conferência de Berlim traçou fronteiras artificiais cortando etnias africanas e reconheceu a posse privada do infame Estado Livre do Congo pelo Rei Leopoldo II.",
        "dificuldade": "facil"
    },
    {
        "id": 165,
        "pergunta": "Qual acordo secreto de 1916 entre diplomatas do Reino Unido e França dividiu as províncias do Império Otomano no Oriente Médio em esferas de influência colonial?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Declaração Balfour", "Acordo Sykes-Picot", "Tratado de Sèvres", "Conferência de San Remo"],
        "resposta": 1,
        "explicacao": "O Acordo Sykes-Picot desenhou com régua as fronteiras de países modernos como Síria, Líbano, Iraque e Jordânia sem levar em conta divisões tribais e religiosas.",
        "dificuldade": "medio"
    },
    {
        "id": 166,
        "pergunta": "Qual tratado de 1959 congelou todas as reivindicações de soberania territorial sobre a Antártida e determinou que o continente deve ser usado exclusivamente para a paz e ciência?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Protocolo de Kyoto", "Tratado da Antártida", "Convenção do Clima", "Tratado de Montego Bay"],
        "resposta": 1,
        "explicacao": "O Tratado da Antártida proíbe atividades militares, testes nucleares e mineração comercial no continente branco abaixo do Paralelo 60° Sul.",
        "dificuldade": "facil"
    },
    {
        "id": 167,
        "pergunta": "Qual tratado assinado em 1929 entre o ditador Benito Mussolini e a Igreja Católica reconheceu a Cidade do Vaticano como um Estado soberano independente?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado de Versalhes", "Pacto de Latrão", "Tratado de Roma", "Concordata de Genebra"],
        "resposta": 1,
        "explicacao": "O Tratado de Latrão encerrou a 'Questão Romana' de seis décadas desde a unificação da Itália em 1870, criando o menor Estado independente do planeta.",
        "dificuldade": "facil"
    },
    {
        "id": 168,
        "pergunta": "Qual linha de fronteira estabelecida em 1893 entre o Império Britânico e o Emirado do Afeganistão divide artificialmente o povo Pashtun até hoje?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Linha McMahon", "Linha Durand", "Linha Radcliffe", "Linha Curzon"],
        "resposta": 1,
        "explicacao": "A Linha Durand estende-se por 2.670 km entre o Afeganistão e o Paquistão; nenhum governo afegão a aceitou formalmente como fronteira internacional de jure.",
        "dificuldade": "dificil"
    },
    {
        "id": 169,
        "pergunta": "Qual advogado britânico traçou em apenas cinco semanas em 1947 a linha que dividiu a Índia Britânica na Índia e no Paquistão, gerando migração em massa de 14 milhões de pessoas?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Lord Mountbatten", "Cyril Radcliffe (Linha Radcliffe)", "Arthur Balfour", "Henry McMahon"],
        "resposta": 1,
        "explicacao": "Sir Cyril Radcliffe nunca havia viajado à Índia antes da missão; usou censos desatualizados e causou uma das maiores tragédias humanitárias do século XX.",
        "dificuldade": "dificil"
    },
    {
        "id": 170,
        "pergunta": "Qual acordo histórico de paz assinado em 1998 encerrou três décadas do conflito violento ('The Troubles') na Irlanda do Norte, mantendo a fronteira desarmada?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Acordo de Dublin", "Acordo de Sexta-Feira Santa (Acordo de Belfast)", "Tratado de Ulster", "Acordo de Stormont"],
        "resposta": 1,
        "explicacao": "O acordo permitiu que os cidadãos da Irlanda do Norte tenham passaporte britânico, irlandês ou ambos, mantendo a livre circulação de mercadorias na ilha.",
        "dificuldade": "medio"
    },
    {
        "id": 171,
        "pergunta": "Qual acordo internacional assinado em 1985 em uma vila luxemburguesa aboliu os controles de fronteira interna entre os países europeus signatários?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado de Maastricht", "Acordo de Schengen", "Tratado de Lisboa", "Tratado de Amsterdã"],
        "resposta": 1,
        "explicacao": "O Espaço Schengen abrange mais de 400 milhões de cidadãos que podem circular livremente entre mais de 25 países sem checagem de passaporte nas fronteiras.",
        "dificuldade": "facil"
    },
    {
        "id": 172,
        "pergunta": "Qual tratado de 1977 entre os presidentes Omar Torrijos e Jimmy Carter transferiu a soberania do Canal do Panamá e sua zona militar dos EUA para o Panamá em 1999?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Tratado Hay-Bunau-Varilla", "Tratado Torrijos-Carter", "Tratado de Balboa", "Tratado de Colón"],
        "resposta": 1,
        "explicacao": "Ao meio-dia de 31 de dezembro de 1999, o Panamá assumiu o controle operacional completo das comportas e instalações estratégicas do canal.",
        "dificuldade": "medio"
    },
    {
        "id": 173,
        "pergunta": "Qual tratado de 1994 assinado pela Ucrânia, Rússia, EUA e Reino Unido ofereceu garantias de soberania à Ucrânia em troca da entrega de seu colossal arsenal nuclear soviético?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Acordo de Minsk", "Memorando de Budapeste", "Tratado de Belavezha", "Protocolo de Kiev"],
        "resposta": 1,
        "explicacao": "A Ucrânia possuía o terceiro maior arsenal nuclear da Terra em 1991 (mais de 1.900 ogivas) e desmantelou todas mediante a promessa de que suas fronteiras seriam respeitadas.",
        "dificuldade": "medio"
    },
    {
        "id": 174,
        "pergunta": "Qual guerra no século XIX (1879-1884) fez a Bolívia perder todo o seu território litorâneo no Deserto do Atacama para o Chile?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Guerra da Tríplice Aliança", "Guerra do Pacífico (Guerra do Guano e Salitre)", "Guerra do Chaco", "Guerra do Acre"],
        "resposta": 1,
        "explicacao": "A perda da província de Antofagasta deixou a Bolívia sem saída soberana para o oceano, ferida geopolítica que é lembrada anualmente no 'Dia do Mar'.",
        "dificuldade": "facil"
    },
    {
        "id": 175,
        "pergunta": "Qual documento emitido pelo governo britânico em 1917 manifestou pela primeira vez o apoio de uma grande potência à criação de um 'lar nacional para o povo judeu' na Palestina?",
        "categoria": "Tratados & Geopolítica",
        "opcoes": ["Acordo Sykes-Picot", "Declaração Balfour", "Livro Branco de Churchill", "Resolução 181 da ONU"],
        "resposta": 1,
        "explicacao": "A carta enviada pelo secretário de relações exteriores Arthur Balfour a Lord Rothschild foi um dos marcos inaugurais da geopolítica moderna do Oriente Médio.",
        "dificuldade": "facil"
    },

    # =========================================================================
    # 6. HIDROGRAFIA & BACIAS ENDORREICAS (176-190)
    # =========================================================================
    {
        "id": 176,
        "pergunta": "Qual é o rio mais longo da Ásia (6.300 km) e o terceiro mais extenso da Terra, onde foi construída a hidrelétrica das Três Gargantas?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Rio Amarelo (Huang He)", "Rio Yangtzé (Chang Jiang)", "Rio Mekong", "Rio Ganges"],
        "resposta": 1,
        "explicacao": "A bacia do Yangtzé abriga mais de 400 milhões de habitantes na China e produz um terço da produção agrícola e do PIB do país.",
        "dificuldade": "facil"
    },
    {
        "id": 177,
        "pergunta": "Qual rio no sudeste da Ásia nasce no Planalto Tibetano e atravessa China, Mianmar, Laos, Tailândia, Camboja e Vietnã antes de desaguar no Mar da China?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Rio Irrawaddy", "Rio Mekong", "Rio Chao Phraya", "Rio Vermelho"],
        "resposta": 1,
        "explicacao": "O Rio Mekong é vital para mais de 60 milhões de pessoas e abriga a maior bacia pesqueira de água doce do mundo.",
        "dificuldade": "facil"
    },
    {
        "id": 178,
        "pergunta": "Qual lago africano no Vale do Rift é o mais longo do mundo (673 km) e o segundo mais profundo da Terra (1.470 metros)?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Lago Vitória", "Lago Tanganica", "Lago Malaui", "Lago Albert"],
        "resposta": 1,
        "explicacao": "O Lago Tanganica é dividido entre quatro países (Tanzânia, RDC, Burundi e Zâmbia) e contém 18% de toda a água doce líquida da Terra.",
        "dificuldade": "medio"
    },
    {
        "id": 179,
        "pergunta": "Qual é a maior ilha marítima fluvial do mundo, cercada pelos rios Amazonas, Tocantins e o Oceano Atlântico no estado do Pará?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Ilha do Bananal", "Ilha de Marajó", "Ilha Grande", "Ilha de Santana"],
        "resposta": 1,
        "explicacao": "A Ilha de Marajó tem 40.100 km² (área maior que a Suíça) e abriga o maior rebanho de búfalos montados da América do Sul.",
        "dificuldade": "facil"
    },
    {
        "id": 180,
        "pergunta": "Qual é a maior ilha fluvial genuinamente lacustre/interior do mundo, localizada entre os braços do Rio Araguaia no estado do Tocantins?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Ilha de Marajó", "Ilha do Bananal", "Ilha Tupinambarana", "Ilha de Mosqueiro"],
        "resposta": 1,
        "explicacao": "A Ilha do Bananal tem mais de 20.000 km² cercada inteiramente por água doce entre dois braços do Rio Araguaia.",
        "dificuldade": "medio"
    },
    {
        "id": 181,
        "pergunta": "Qual rio sagrado da Índia nasce no Himalaia, drena mais de 1 milhão de km² e se une ao Rio Brahmaputra em Bangladesh?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Rio Indo", "Rio Ganges", "Rio Godavari", "Rio Narmada"],
        "resposta": 1,
        "explicacao": "O Rio Ganges (Ganga) é adorado pelos hindus como uma deusa viva e sustenta a planície mais povoada de todo o continente asiático.",
        "dificuldade": "facil"
    },
    {
        "id": 182,
        "pergunta": "Qual é o maior corpo d'água inteiramente fechado e endorreico do mundo, classificado tecnicamente como o maior lago da Terra apesar de seu sal?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Mar Negro", "Mar Cáspio", "Mar de Aral", "Lago Superior"],
        "resposta": 1,
        "explicacao": "Com 371.000 km² de superfície, o Mar Cáspio tem nível -28 metros abaixo dos oceanos e representa mais de 40% de todas as águas de lagos do mundo.",
        "dificuldade": "facil"
    },
    {
        "id": 183,
        "pergunta": "Qual lago no Cazaquistão possui uma característica limnológica singular: metade de suas águas é doce e a outra metade é salgada?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Mar de Aral", "Lago Balkhash", "Lago Baikal", "Lago Issyk-Kul"],
        "resposta": 1,
        "explicacao": "O Lago Balkhash é estreito e alongado; o Rio Ili deságua no lado ocidental mantendo a água doce, enquanto o lado oriental raso tem forte evaporação e fica salino.",
        "dificuldade": "dificil"
    },
    {
        "id": 184,
        "pergunta": "Qual é o maior lago natural em volume de água doce da América do Sul, localizado a 3.812 metros nos Andes entre Bolívia e Peru?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Lago de Maracaibo", "Lago Titicaca", "Lago Poopó", "Lago Nahuel Huapi"],
        "resposta": 1,
        "explicacao": "Embora o Maracaibo na Venezuela tenha maior área, é conectado ao mar (baía); o Titicaca é o maior lago de água doce e o lago navegável mais alto da Terra.",
        "dificuldade": "facil"
    },
    {
        "id": 185,
        "pergunta": "Qual bacia hidrográfica na América do Norte é a quarta maior do mundo e drena água de 32 estados americanos e duas províncias canadenses?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Bacia do Rio São Lourenço", "Bacia Mississippi-Missouri", "Bacia do Rio Colorado", "Bacia do Rio Mackenzie"],
        "resposta": 1,
        "explicacao": "O Rio Mississippi-Missouri drena 3,2 milhões de km² de coração agrícola dos EUA até desaguar em um delta em forma de pé de pássaro no Golfo do México.",
        "dificuldade": "facil"
    },
    {
        "id": 186,
        "pergunta": "Qual rio no sudoeste dos EUA foi represado pela colossal Represa Hoover e escavou a maravilha geológica do Grand Canyon?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Rio Grande", "Rio Colorado", "Rio Columbia", "Rio Sacramento"],
        "resposta": 1,
        "explicacao": "O Rio Colorado é tão intensamente explorado para irrigação e cidades como Las Vegas e Los Angeles que raramente suas águas conseguem alcançar o Golfo da Califórnia.",
        "dificuldade": "facil"
    },
    {
        "id": 187,
        "pergunta": "Qual é o único rio do mundo que cruza a Linha do Equador duas vezes durante o seu curso sinuoso pela África Central?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Rio Nilo", "Rio Congo", "Rio Níger", "Rio Zambeze"],
        "resposta": 1,
        "explicacao": "O Rio Congo corre primeiro para o norte cruzando o Equador, faz uma curva em arco e corre para sudoeste cruzando o Equador novamente rumo ao Atlântico.",
        "dificuldade": "medio"
    },
    {
        "id": 188,
        "pergunta": "Qual fenômeno de fluxo hídrico une a Bacia Amazônica à Bacia do Rio Orinoco na Venezuela através de um rio bifurcado natural?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Canal do Panamá", "Canal do Cassiquiare", "Foz do Solimões", "Estuário do Amapá"],
        "resposta": 1,
        "explicacao": "O Canal do Cassiquiare desvia parte das águas do Rio Orinoco diretamente para o Rio Negro (afluente do Amazonas), uma das mais raras confluências interbacias do planeta.",
        "dificuldade": "dificil"
    },
    {
        "id": 189,
        "pergunta": "Qual lago na Sibéria congela no inverno criando uma camada de gelo transparente de até 2 metros de espessura que suporta a passagem de caminhões pesados?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Lago Ladoga", "Lago Baikal", "Lago Onega", "Lago Taymyr"],
        "resposta": 1,
        "explicacao": "O gelo do Baikal é famoso por suas bolhas congeladas de gás metano e pureza cristalina de onde é possível enxergar dezenas de metros sob a superfície.",
        "dificuldade": "facil"
    },
    {
        "id": 190,
        "pergunta": "Qual cachoeira na fronteira entre a Zâmbia e o Zimbábue forma a maior cortina contínua de água em queda do mundo (1,7 km de largura e 108m de altura)?",
        "categoria": "Hidrografia & Bacias",
        "opcoes": ["Cataratas do Iguaçu", "Cataratas de Vitória (Mosi-oa-Tunya)", "Salto Ángel", "Cataratas do Niágara"],
        "resposta": 1,
        "explicacao": "David Livingstone foi o primeiro europeu a contemplá-la em 1855 no Rio Zambeze, rebatizando-a em homenagem à Rainha Vitória britânica.",
        "dificuldade": "facil"
    },

    # =========================================================================
    # 7. VULCÕES, TECTÔNICA & EXTREMOS FÍSICOS (191-200)
    # =========================================================================
    {
        "id": 191,
        "pergunta": "Qual é a cadeia vulcânica que cerca o Oceano Pacífico responsável por cerca de 75% de todos os vulcões ativos e 90% dos terremotos do globo?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Cinturão Alpino", "Círculo de Fogo do Pacífico", "Dorsal Mesoatlântica", "Fenda do Rift"],
        "resposta": 1,
        "explicacao": "O Anel de Fogo do Pacífico estende-se por 40.000 km desde os Andes e a costa das Américas, passando pelas Aleutas e Japão até a Nova Zelândia.",
        "dificuldade": "facil"
    },
    {
        "id": 192,
        "pergunta": "Qual vulcão na ilha de Java (Indonésia) é famoso mundialmente por expelir chamas azul-elétricas provocadas pela combustão de gases de enxofre líquido?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Monte Bromo", "Kawah Ijen", "Monte Merapi", "Krakatoa"],
        "resposta": 1,
        "explicacao": "Kawah Ijen abriga também o lago de caldeira mais ácido do planeta Terra, com pH inferior a 0,5 devido a concentrações brutais de ácido sulfúrico.",
        "dificuldade": "medio"
    },
    {
        "id": 193,
        "pergunta": "Qual cordilheira submarina de mais de 16.000 km divide o Oceano Atlântico ao meio e emerge na superfície na ilha vulcânica da Islândia?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Cordilheira de Lomonosov", "Dorsal Mesoatlântica", "Elevação do Pacífico Leste", "Dorsal de Gakkel"],
        "resposta": 1,
        "explicacao": "A Dorsal Mesoatlântica afasta lentamente a placa Norte-Americana da Euroasiática em um processo de acreção contínua da crosta oceânica.",
        "dificuldade": "facil"
    },
    {
        "id": 194,
        "pergunta": "Qual é a montanha mais alta do mundo fora do continente asiático, elevando-se a 6.961 metros na província argentina de Mendoza?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Monte Ojos del Salado", "Monte Aconcágua", "Monte Huascarán", "Monte Chimborazo"],
        "resposta": 1,
        "explicacao": "O Aconcágua é o 'Teto das Américas' e de todo o Hemisfério Sul, desafiando milhares de montanhistas na rota normal dos Andes.",
        "dificuldade": "facil"
    },
    {
        "id": 195,
        "pergunta": "Qual vulcão ativo na fronteira entre Argentina e Chile é o vulcão mais alto da Terra, com cume a 6.893 metros de altitude?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Llullaillaco", "Ojos del Salado", "Cotopaxi", "Tupungato"],
        "resposta": 1,
        "explicacao": "O Nevado Ojos del Salado é a segunda montanha mais alta das Américas e abriga uma lagoa de cratera a 6.390m, o corpo d'água mais alto do mundo.",
        "dificuldade": "dificil"
    },
    {
        "id": 196,
        "pergunta": "Qual geleira na província de Santa Cruz na Argentina é famosa por seu ciclo contínuo de avanço e colapso de diques de gelo no Lago Argentino?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Geleira Upsala", "Geleira Perito Moreno", "Geleira Grey", "Geleira Pio XI"],
        "resposta": 1,
        "explicacao": "O Glaciar Perito Moreno tem uma parede frontal de gelo de 5 km de largura e 74 metros de altura acima da água, permanecendo em raro equilíbrio de massa.",
        "dificuldade": "facil"
    },
    {
        "id": 197,
        "pergunta": "Qual ilha vulcânica italiana no Mar Tirreno está em erupção moderada quase contínua há mais de 2.000 anos, servindo de 'Farol do Mediterrâneo' para navegadores?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Vulcano", "Stromboli", "Lipari", "Pantelária"],
        "resposta": 1,
        "explicacao": "O Stromboli dá nome ao tipo de erupção 'estromboliana', caracterizada por ejeções regulares de bombas incandescentes de lava a cada 20 a 30 minutos.",
        "dificuldade": "facil"
    },
    {
        "id": 198,
        "pergunta": "Qual depressão geológica no sudoeste da Ásia é o ponto mais baixo da Terra em terra firme exposta à atmosfera livre (-430 metros)?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Depressão de Qattara", "As margens do Mar Morto", "Vale da Morte", "Lago Eyre"],
        "resposta": 1,
        "explicacao": "O Mar Morto tem uma salinidade de mais de 34% (quase 10 vezes maior que os oceanos), impedindo peixes de viver e permitindo humanos boiarem sem esforço.",
        "dificuldade": "facil"
    },
    {
        "id": 199,
        "pergunta": "Qual é a maior caverna subterrânea conhecida do planeta em volume contínuo, capaz de abrigar um arranha-céu de 40 andares dentro do seu salão principal?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Caverna Mammoth (EUA)", "Caverna Sơn Đoòng (Vietnã)", "Caverna de Krubera (Geórgia)", "Caverna de Postojna (Eslovênia)"],
        "resposta": 1,
        "explicacao": "Sơn Đoòng no Parque Nacional Phong Nha-Kẻ Bàng possui mais de 9 km de extensão com sua própria selva interior, rio subterrâneo e sistema de microclima com nuvens.",
        "dificuldade": "medio"
    },
    {
        "id": 200,
        "pergunta": "Qual é a falha geológica transformante de 1.200 km na Califórnia que marca o limite tectônico entre a Placa do Pacífico e a Placa Norte-Americana?",
        "categoria": "Extremos Geográficos",
        "opcoes": ["Falha de Cascadia", "Falha de San Andreas", "Falha de Hayward", "Falha de Denali"],
        "resposta": 1,
        "explicacao": "A Falha de San Andreas foi responsável pelo devastador terremoto e incêndio de São Francisco em 1906 e é monitorada constantemente pelo risco do chamado 'The Big One'.",
        "dificuldade": "facil"
    }
]

# Consolida garantindo integridade de IDs
ids_existentes = {q["id"] for q in PERGUNTAS}
adicionadas = 0

for nq in NOVAS_PERGUNTAS:
    if nq["id"] not in ids_existentes:
        PERGUNTAS.append(nq)
        ids_existentes.add(nq["id"])
        adicionadas += 1

# Ordena por id
PERGUNTAS.sort(key=lambda q: q["id"])

print(f"Novas perguntas adicionadas: {adicionadas}")
print(f"Total consolidado de PERGUNTAS: {len(PERGUNTAS)}")

with open("D:/Dev/vitale-geo/scripts/dados_perguntas.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\n")
    f.write('"""BASE MESTRE DE 200+ PERGUNTAS DE INTELIGÊNCIA GEOPOLÍTICA — VITALEGEO"""\n\n')
    f.write("PERGUNTAS = " + json.dumps(PERGUNTAS, ensure_ascii=False, indent=4) + "\n")

print("Arquivo D:/Dev/vitale-geo/scripts/dados_perguntas.py atualizado com sucesso!")
