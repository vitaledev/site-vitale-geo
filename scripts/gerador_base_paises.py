# -*- coding: utf-8 -*-
"""
GERADOR DA BASE COMPLETA DE 197 PAÍSES DO MUNDO
Cobre 100% das nações soberanas da ONU + Observadores + Territórios Especiais.
"""

import json
import os

PAISES = [
    # =========================================================================
    # AMÉRICA DO SUL (12 soberanos + 1 território especial)
    # =========================================================================
    {
        "nome": "Brasil", "nome_oficial": "República Federativa do Brasil",
        "iso2": "br", "iso3": "bra", "capital": "Brasília",
        "pegadinhas": ["Rio de Janeiro", "São Paulo", "Salvador"],
        "continente": "América do Sul", "subregiao": "América do Sul",
        "lat": -14.235, "lng": -51.9253, "area_km2": 8515767, "populacao": 215000000,
        "fronteiras": ["ar", "bo", "co", "gy", "gf", "py", "pe", "sr", "uy", "ve"],
        "fato": "Faz fronteira com 10 vizinhos na América do Sul (todos exceto Chile e Equador). Sua maior fronteira contínua é com a França (Guiana Francesa)."
    },
    {
        "nome": "Argentina", "nome_oficial": "República Argentina",
        "iso2": "ar", "iso3": "arg", "capital": "Buenos Aires",
        "pegadinhas": ["Córdoba", "Rosário", "Mendoza"],
        "continente": "América do Sul", "subregiao": "Cone Sul",
        "lat": -38.4161, "lng": -63.6167, "area_km2": 2780400, "populacao": 46000000,
        "fronteiras": ["bo", "br", "cl", "py", "uy"],
        "fato": "Abriga tanto o ponto culminante das Américas (Aconcágua, 6.961m) quanto o ponto mais baixo (Laguna del Carbón, -105m)."
    },
    {
        "nome": "Colômbia", "nome_oficial": "República da Colômbia",
        "iso2": "co", "iso3": "col", "capital": "Bogotá",
        "pegadinhas": ["Medellín", "Cáli", "Cartagena"],
        "continente": "América do Sul", "subregiao": "América Andina",
        "lat": 4.5709, "lng": -74.2973, "area_km2": 1141748, "populacao": 52000000,
        "fronteiras": ["br", "ec", "pa", "pe", "ve"],
        "fato": "Único país da América do Sul banhado tanto pelo Oceano Atlântico (Mar do Caribe) quanto pelo Oceano Pacífico."
    },
    {
        "nome": "Peru", "nome_oficial": "República do Peru",
        "iso2": "pe", "iso3": "per", "capital": "Lima",
        "pegadinhas": ["Cusco", "Arequipa", "Trujillo"],
        "continente": "América do Sul", "subregiao": "América Andina",
        "lat": -9.19, "lng": -75.0152, "area_km2": 1285216, "populacao": 34000000,
        "fronteiras": ["bo", "br", "cl", "co", "ec"],
        "fato": "Berço do Império Inca e onde nasce a nascente mais distante e confirmada do Rio Amazonas (na Quebrada de Apacheta)."
    },
    {
        "nome": "Chile", "nome_oficial": "República do Chile",
        "iso2": "cl", "iso3": "chl", "capital": "Santiago",
        "pegadinhas": ["Valparaíso", "Concepción", "Viña del Mar"],
        "continente": "América do Sul", "subregiao": "Cone Sul",
        "lat": -35.6751, "lng": -71.543, "area_km2": 756102, "populacao": 19500000,
        "fronteiras": ["ar", "bo", "pe"],
        "fato": "O país mais estreito e comprido do planeta: mais de 4.300 km de norte a sul, com largura média de apenas 177 km."
    },
    {
        "nome": "Venezuela", "nome_oficial": "República Bolivariana da Venezuela",
        "iso2": "ve", "iso3": "ven", "capital": "Caracas",
        "pegadinhas": ["Maracaibo", "Valência", "Barquisimeto"],
        "continente": "América do Sul", "subregiao": "América do Sul",
        "lat": 6.4238, "lng": -66.5897, "area_km2": 916445, "populacao": 29000000,
        "fronteiras": ["br", "co", "gy"],
        "fato": "Possui as maiores reservas provadas de petróleo bruto do planeta (na Faixa do Orinoco) e a cachoeira mais alta da Terra (Salto Ángel, 979m)."
    },
    {
        "nome": "Equador", "nome_oficial": "República do Equador",
        "iso2": "ec", "iso3": "ecu", "capital": "Quito",
        "pegadinhas": ["Guayaquil", "Cuenca", "Manta"],
        "continente": "América do Sul", "subregiao": "América Andina",
        "lat": -1.8312, "lng": -78.1834, "area_km2": 283561, "populacao": 18000000,
        "fronteiras": ["co", "pe"],
        "fato": "O cume do vulcão Chimborazo é o ponto da superfície terrestre mais distante do centro da Terra devido ao abaulamento equatorial."
    },
    {
        "nome": "Bolívia", "nome_oficial": "Estado Plurinacional da Bolívia",
        "iso2": "bo", "iso3": "bol", "capital": "Sucre",
        "pegadinhas": ["La Paz", "Santa Cruz de la Sierra", "Cochabamba"],
        "continente": "América do Sul", "subregiao": "América Andina",
        "lat": -16.2902, "lng": -63.5887, "area_km2": 1098581, "populacao": 12000000,
        "fronteiras": ["ar", "br", "cl", "py", "pe"],
        "fato": "Possui duas capitais oficiais: Sucre (constitucional e judiciária) e La Paz (sede do governo executivo e legislativo)."
    },
    {
        "nome": "Paraguai", "nome_oficial": "República do Paraguai",
        "iso2": "py", "iso3": "pry", "capital": "Assunção",
        "pegadinhas": ["Ciudad del Este", "Encarnación", "San Lorenzo"],
        "continente": "América do Sul", "subregiao": "Cone Sul",
        "lat": -23.4425, "lng": -58.4438, "area_km2": 406752, "populacao": 6800000,
        "fronteiras": ["ar", "br", "bo"],
        "fato": "Um dos dois únicos países sem litoral da América do Sul; é bilíngue oficial (espanhol e guarani falado por 90% da população)."
    },
    {
        "nome": "Uruguai", "nome_oficial": "República Oriental do Uruguai",
        "iso2": "uy", "iso3": "ury", "capital": "Montevidéu",
        "pegadinhas": ["Punta del Este", "Salto", "Colônia do Sacramento"],
        "continente": "América do Sul", "subregiao": "Cone Sul",
        "lat": -32.5228, "lng": -55.7658, "area_km2": 176215, "populacao": 3400000,
        "fronteiras": ["ar", "br"],
        "fato": "O único país sul-americano cujo território está inteiramente situado ao sul do Trópico de Capricórnio (zona temperada)."
    },
    {
        "nome": "Guiana", "nome_oficial": "República Cooperativa da Guiana",
        "iso2": "gy", "iso3": "guy", "capital": "Georgetown",
        "pegadinhas": ["Linden", "New Amsterdam", "Bartica"],
        "continente": "América do Sul", "subregiao": "Guianas",
        "lat": 4.8604, "lng": -58.9302, "area_km2": 214969, "populacao": 800000,
        "fronteiras": ["br", "sr", "ve"],
        "fato": "Único país da América do Sul onde o inglês é o idioma oficial; vive um boom petrolífero massivo no bloco offshore Stabroek."
    },
    {
        "nome": "Suriname", "nome_oficial": "República do Suriname",
        "iso2": "sr", "iso3": "sur", "capital": "Paramaribo",
        "pegadinhas": ["Lelydorp", "Nieuw Nickerie", "Moengo"],
        "continente": "América do Sul", "subregiao": "Guianas",
        "lat": 3.9193, "lng": -56.0278, "area_km2": 163820, "populacao": 618000,
        "fronteiras": ["br", "gy", "gf"],
        "fato": "Único país independente das Américas de língua oficial holandesa; possui mais de 90% do território coberto por floresta tropical primária."
    },

    # =========================================================================
    # AMÉRICA DO NORTE (3)
    # =========================================================================
    {
        "nome": "Estados Unidos", "nome_oficial": "Estados Unidos da América",
        "iso2": "us", "iso3": "usa", "capital": "Washington, D.C.",
        "pegadinhas": ["Nova York", "Los Angeles", "Chicago"],
        "continente": "América do Norte", "subregiao": "América Anglo-Saxônica",
        "lat": 37.0902, "lng": -95.7129, "area_km2": 9833517, "populacao": 335000000,
        "fronteiras": ["ca", "mx"],
        "fato": "Washington D.C. é um distrito federal especial não pertencente a nenhum estado norte-americano."
    },
    {
        "nome": "Canadá", "nome_oficial": "Canadá",
        "iso2": "ca", "iso3": "can", "capital": "Ottawa",
        "pegadinhas": ["Toronto", "Montreal", "Vancouver"],
        "continente": "América do Norte", "subregiao": "América Anglo-Saxônica",
        "lat": 56.1304, "lng": -106.3468, "area_km2": 9984670, "populacao": 40000000,
        "fronteiras": ["us"],
        "fato": "Possui o maior litoral do mundo (202.080 km) e mais lagos naturais do que todo o resto do planeta combinado."
    },
    {
        "nome": "México", "nome_oficial": "Estados Unidos Mexicanos",
        "iso2": "mx", "iso3": "mex", "capital": "Cidade do México",
        "pegadinhas": ["Guadalajara", "Monterrey", "Cancún"],
        "continente": "América do Norte", "subregiao": "América Latina",
        "lat": 23.6345, "lng": -102.5528, "area_km2": 1964375, "populacao": 129000000,
        "fronteiras": ["bz", "gt", "us"],
        "fato": "A Cidade do México foi erguida sobre o leito drenado do antigo Lago de Texcoco e afunda até 40 cm por ano."
    },

    # =========================================================================
    # AMÉRICA CENTRAL & CARIBE (20)
    # =========================================================================
    {
        "nome": "Panamá", "nome_oficial": "República do Panamá",
        "iso2": "pa", "iso3": "pan", "capital": "Cidade do Panamá",
        "pegadinhas": ["Colón", "David", "Santiago"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 8.5379, "lng": -80.7821, "area_km2": 75420, "populacao": 4400000,
        "fronteiras": ["co", "cr"],
        "fato": "O istmo do Panamá fechou-se há cerca de 3 milhões de anos, alterando o padrão das correntes oceânicas globais e gerando a Corrente do Golfo."
    },
    {
        "nome": "Costa Rica", "nome_oficial": "República da Costa Rica",
        "iso2": "cr", "iso3": "cri", "capital": "São José",
        "pegadinhas": ["Alajuela", "Cartago", "Heredia"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 9.7489, "lng": -83.7534, "area_km2": 51100, "populacao": 5200000,
        "fronteiras": ["ni", "pa"],
        "fato": "Aboliu constitucionalmente as suas forças armadas em 1948, revertendo o orçamento de defesa para saúde e educação."
    },
    {
        "nome": "Guatemala", "nome_oficial": "República da Guatemala",
        "iso2": "gt", "iso3": "gtm", "capital": "Cidade da Guatemala",
        "pegadinhas": ["Antigua Guatemala", "Quetzaltenango", "Escuintla"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 15.7835, "lng": -90.2308, "area_km2": 108889, "populacao": 18000000,
        "fronteiras": ["bz", "hn", "mx", "sv"],
        "fato": "Coração da civilização maia clássica (Tikal) e o país mais populoso da América Central continental."
    },
    {
        "nome": "Honduras", "nome_oficial": "República de Honduras",
        "iso2": "hn", "iso3": "hnd", "capital": "Tegucigalpa",
        "pegadinhas": ["San Pedro Sula", "La Ceiba", "Comayagua"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 15.2, "lng": -86.2419, "area_km2": 112492, "populacao": 10400000,
        "fronteiras": ["gt", "ni", "sv"],
        "fato": "Único país da América Central continental que não possui vulcões ativos no seu território."
    },
    {
        "nome": "El Salvador", "nome_oficial": "República de El Salvador",
        "iso2": "sv", "iso3": "slv", "capital": "San Salvador",
        "pegadinhas": ["Santa Ana", "San Miguel", "Soyapango"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 13.7942, "lng": -88.8965, "area_km2": 21041, "populacao": 6300000,
        "fronteiras": ["gt", "hn"],
        "fato": "O menor e mais densamente povoado país da América Central continental; o único sem litoral caribenho (voltado só para o Pacífico)."
    },
    {
        "nome": "Nicarágua", "nome_oficial": "República da Nicarágua",
        "iso2": "ni", "iso3": "nic", "capital": "Manágua",
        "pegadinhas": ["León", "Granada", "Masaya"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 12.8654, "lng": -85.2072, "area_km2": 130373, "populacao": 6800000,
        "fronteiras": ["cr", "hn"],
        "fato": "Abriga o Lago Cocibolca (Lago Nicarágua), o único lago de água doce do mundo que abriga tubarões-touro adaptados."
    },
    {
        "nome": "Belize", "nome_oficial": "Belize",
        "iso2": "bz", "iso3": "blz", "capital": "Belmopã",
        "pegadinhas": ["Belize City", "San Ignacio", "Orange Walk"],
        "continente": "América Central", "subregiao": "América Central",
        "lat": 17.1899, "lng": -88.4976, "area_km2": 22966, "populacao": 405000,
        "fronteiras": ["gt", "mx"],
        "fato": "Único país da América Central com o inglês como língua oficial; mudou a capital para o interior (Belmopã) após o furacão Hattie devastar Belize City."
    },
    {
        "nome": "Cuba", "nome_oficial": "República de Cuba",
        "iso2": "cu", "iso3": "cub", "capital": "Havana",
        "pegadinhas": ["Santiago de Cuba", "Camagüey", "Holguín"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 21.5218, "lng": -77.7812, "area_km2": 109884, "populacao": 11200000,
        "fronteiras": [],
        "fato": "A maior ilha do Caribe; abriga a base naval norte-americana de Guantánamo, mantida pelos EUA em regime de arrendamento perpétuo desde 1903."
    },
    {
        "nome": "República Dominicana", "nome_oficial": "República Dominicana",
        "iso2": "do", "iso3": "dom", "capital": "Santo Domingo",
        "pegadinhas": ["Santiago de los Caballeros", "Punta Cana", "La Romana"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 18.7357, "lng": -70.1627, "area_km2": 48671, "populacao": 11300000,
        "fronteiras": ["ht"],
        "fato": "Divide a ilha de Hispaniola com o Haiti; abriga a cidade europeia permanente mais antiga das Américas (Santo Domingo, fundada em 1496)."
    },
    {
        "nome": "Haiti", "nome_oficial": "República do Haiti",
        "iso2": "ht", "iso3": "hti", "capital": "Porto Príncipe",
        "pegadinhas": ["Cap-Haïtien", "Gonaïves", "Les Cayes"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 18.9712, "lng": -72.2852, "area_km2": 27750, "populacao": 11500000,
        "fronteiras": ["do"],
        "fato": "Primeira república negra independente do mundo e o primeiro país da América Latina a declarar independência (em 1804, após revolta de escravizados)."
    },
    {
        "nome": "Jamaica", "nome_oficial": "Jamaica",
        "iso2": "jm", "iso3": "jam", "capital": "Kingston",
        "pegadinhas": ["Montego Bay", "Spanish Town", "Negril"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 18.1096, "lng": -77.2975, "area_km2": 10991, "populacao": 2800000,
        "fronteiras": [],
        "fato": "Terceira maior ilha do Caribe; Kingston é flanqueada pelas Blue Mountains, onde é cultivado um dos cafés mais caros e raros do mundo."
    },
    {
        "nome": "Trinidad e Tobago", "nome_oficial": "República de Trinidad e Tobago",
        "iso2": "tt", "iso3": "tto", "capital": "Porto de Espanha",
        "pegadinhas": ["San Fernando", "Chaguanas", "Scarborough"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 10.6918, "lng": -61.2225, "area_km2": 5130, "populacao": 1500000,
        "fronteiras": [],
        "fato": "Fica a apenas 11 km da costa da Venezuela; é um dos maiores exportadores mundiais de gás natural liquefeito (GNL) e amônia do hemisfério ocidental."
    },
    {
        "nome": "Bahamas", "nome_oficial": "Comunidade das Bahamas",
        "iso2": "bs", "iso3": "bhs", "capital": "Nassau",
        "pegadinhas": ["Freeport", "Marsh Harbour", "Exuma"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 25.0343, "lng": -77.3963, "area_km2": 13943, "populacao": 410000,
        "fronteiras": [],
        "fato": "Arquipélago de mais de 700 ilhas e 2.000 ilhotas (cays); San Salvador nas Bahamas foi o primeiro ponto das Américas avistado por Cristóvão Colombo em 1492."
    },
    {
        "nome": "Barbados", "nome_oficial": "Barbados",
        "iso2": "bb", "iso3": "brb", "capital": "Bridgetown",
        "pegadinhas": ["Speightstown", "Oistins", "Holetown"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 13.1939, "lng": -59.5432, "area_km2": 432, "populacao": 281000,
        "fronteiras": [],
        "fato": "A ilha mais oriental do arco do Caribe; declarou-se república em 2021, destituindo a rainha Elizabeth II da chefia de Estado."
    },
    {
        "nome": "Santa Lúcia", "nome_oficial": "Santa Lúcia",
        "iso2": "lc", "iso3": "lca", "capital": "Castries",
        "pegadinhas": ["Soufrière", "Vieux Fort", "Gros Islet"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 13.9094, "lng": -60.9789, "area_km2": 616, "populacao": 180000,
        "fronteiras": [],
        "fato": "Famosa pelas montanhas vulcânicas gêmeas dos Pitons; trocou de soberania entre franceses e britânicos 14 vezes antes da independência."
    },
    {
        "nome": "São Vicente e Granadinas", "nome_oficial": "São Vicente e Granadinas",
        "iso2": "vc", "iso3": "vct", "capital": "Kingstown",
        "pegadinhas": ["Georgetown", "Barrouallie", "Port Elizabeth"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 13.2528, "lng": -61.1971, "area_km2": 389, "populacao": 104000,
        "fronteiras": [],
        "fato": "O vulcão ativo La Soufrière na ilha principal de São Vicente entrou em erupções explosivas recentes, evacuando um quarto da ilha."
    },
    {
        "nome": "Granada", "nome_oficial": "Granada",
        "iso2": "gd", "iso3": "grd", "capital": "Saint George's",
        "pegadinhas": ["Gouyave", "Grenville", "Victoria"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 12.1165, "lng": -61.679, "area_km2": 344, "populacao": 125000,
        "fronteiras": [],
        "fato": "Conhecida como 'Ilha das Especiarias' por ser um dos maiores produtores mundiais de noz-moscada; foi invadida pelos EUA em 1983."
    },
    {
        "nome": "Antígua e Barbuda", "nome_oficial": "Antígua e Barbuda",
        "iso2": "ag", "iso3": "atg", "capital": "Saint John's",
        "pegadinhas": ["All Saints", "Liberta", "Codrington"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 17.0608, "lng": -61.7964, "area_km2": 442, "populacao": 94000,
        "fronteiras": [],
        "fato": "Afirma possuir exatamente 365 praias de areia branca e rosada, uma para cada dia do ano."
    },
    {
        "nome": "Dominica", "nome_oficial": "Comunidade da Dominica",
        "iso2": "dm", "iso3": "dma", "capital": "Roseau",
        "pegadinhas": ["Portsmouth", "Marigot", "Berekua"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 15.415, "lng": -61.371, "area_km2": 751, "populacao": 72000,
        "fronteiras": [],
        "fato": "Conhecida como a 'Ilha da Natureza' do Caribe; abriga o Boiling Lake (o segundo maior lago de água termal fervente do mundo)."
    },
    {
        "nome": "São Cristóvão e Névis", "nome_oficial": "Federação de São Cristóvão e Névis",
        "iso2": "kn", "iso3": "kna", "capital": "Basseterre",
        "pegadinhas": ["Charlestown", "Sandy Point Town", "Cayon"],
        "continente": "América Central", "subregiao": "Caribe",
        "lat": 17.3578, "lng": -62.783, "area_km2": 261, "populacao": 48000,
        "fronteiras": [],
        "fato": "O menor país soberano de todo o continente americano, tanto em extensão territorial (261 km²) quanto em número de habitantes."
    }
]

print(f"Total inicial: {len(PAISES)}")

PAISES_EUROPA = [
    # =========================================================================
    # EUROPA (46)
    # =========================================================================
    {
        "nome": "Portugal", "nome_oficial": "República Portuguesa",
        "iso2": "pt", "iso3": "prt", "capital": "Lisboa",
        "pegadinhas": ["Porto", "Coimbra", "Braga"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 39.3999, "lng": -8.2245, "area_km2": 92212, "populacao": 10400000,
        "fronteiras": ["es"],
        "fato": "O Cabo da Roca em Sintra é o ponto mais ocidental de todo o continente europeu continental ('onde a terra se acaba e o mar começa')."
    },
    {
        "nome": "Espanha", "nome_oficial": "Reino de Espanha",
        "iso2": "es", "iso3": "esp", "capital": "Madri",
        "pegadinhas": ["Barcelona", "Sevilha", "Valência"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 40.4637, "lng": -3.7492, "area_km2": 505990, "populacao": 48000000,
        "fronteiras": ["ad", "fr", "gi", "pt", "ma"],
        "fato": "Possui as duas únicas fronteiras terrestres da União Europeia em território africano (os enclaves autônomos de Ceuta e Melilla)."
    },
    {
        "nome": "França", "nome_oficial": "República Francesa",
        "iso2": "fr", "iso3": "fra", "capital": "Paris",
        "pegadinhas": ["Marselha", "Lyon", "Nice"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 46.2276, "lng": 2.2137, "area_km2": 643801, "populacao": 68000000,
        "fronteiras": ["ad", "be", "de", "it", "lu", "mc", "es", "ch", "br", "sr"],
        "fato": "É o país com maior número de fusos horários do mundo (12 no total), somando seus territórios ultramarinos nos oceanos Pacífico, Índico e Atlântico."
    },
    {
        "nome": "Reino Unido", "nome_oficial": "Reino Unido da Grã-Bretanha e Irlanda do Norte",
        "iso2": "gb", "iso3": "gbr", "capital": "Londres",
        "pegadinhas": ["Manchester", "Birmingham", "Edimburgo"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 55.3781, "lng": -3.436, "area_km2": 242900, "populacao": 67700000,
        "fronteiras": ["ie"],
        "fato": "O Observatório Real de Greenwich em Londres define formalmente a Longitude 0° (Meridiano de Greenwich), base de todos os fusos horários do planeta."
    },
    {
        "nome": "Irlanda", "nome_oficial": "República da Irlanda",
        "iso2": "ie", "iso3": "irl", "capital": "Dublin",
        "pegadinhas": ["Cork", "Galway", "Limerick"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 53.1424, "lng": -7.6921, "area_km2": 70273, "populacao": 5200000,
        "fronteiras": ["gb"],
        "fato": "Conhecida como a 'Ilha Esmeralda'; sua única fronteira terrestre é com a Irlanda do Norte (parte do Reino Unido), mantida aberta pelo Acordo de Sexta-Feira Santa."
    },
    {
        "nome": "Alemanha", "nome_oficial": "República Federal da Alemanha",
        "iso2": "de", "iso3": "deu", "capital": "Berlim",
        "pegadinhas": ["Munique", "Frankfurt", "Hamburgo"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 51.1657, "lng": 10.4515, "area_km2": 357022, "populacao": 84400000,
        "fronteiras": ["at", "be", "cz", "dk", "fr", "lu", "nl", "pl", "ch"],
        "fato": "O país mais populoso da União Europeia; faz fronteira terrestre com 9 nações europeias distintas."
    },
    {
        "nome": "Itália", "nome_oficial": "República Italiana",
        "iso2": "it", "iso3": "ita", "capital": "Roma",
        "pegadinhas": ["Milão", "Nápoles", "Florença"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 41.8719, "lng": 12.5674, "area_km2": 301340, "populacao": 59000000,
        "fronteiras": ["at", "fr", "sm", "si", "ch", "va"],
        "fato": "Enclava completamente dentro do seu próprio território dois Estados soberanos e independentes: a Cidade do Vaticano e San Marino."
    },
    {
        "nome": "Suíça", "nome_oficial": "Confederação Suíça",
        "iso2": "ch", "iso3": "che", "capital": "Berna",
        "pegadinhas": ["Zurique", "Genebra", "Basileia"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 46.8182, "lng": 8.2275, "area_km2": 41285, "populacao": 8800000,
        "fronteiras": ["at", "fr", "it", "li", "de"],
        "fato": "Berna é formalmente a 'cidade federal', pois a Suíça constitucionalmente não possui uma capital oficial declarada para manter a igualdade cantonal."
    },
    {
        "nome": "Áustria", "nome_oficial": "República da Áustria",
        "iso2": "at", "iso3": "aut", "capital": "Viena",
        "pegadinhas": ["Salzburgo", "Innsbruck", "Graz"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 47.5162, "lng": 14.5501, "area_km2": 83871, "populacao": 9100000,
        "fronteiras": ["cz", "de", "hu", "it", "li", "sk", "si", "ch"],
        "fato": "País alpino sem litoral; Viena foi sede do Império Habsburgo por séculos e abriga um dos quatro escritórios centrais da ONU."
    },
    {
        "nome": "Bélgica", "nome_oficial": "Reino da Bélgica",
        "iso2": "be", "iso3": "bel", "capital": "Bruxelas",
        "pegadinhas": ["Antuérpia", "Gante", "Bruges"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 50.5039, "lng": 4.4699, "area_km2": 30528, "populacao": 11700000,
        "fronteiras": ["fr", "de", "lu", "nl"],
        "fato": "Sede institucional da União Europeia e do quartel-general da OTAN; dividida linguisticamente entre a Flandres neerlandesa e a Valônia francófona."
    },
    {
        "nome": "Países Baixos", "nome_oficial": "Reino dos Países Baixos",
        "iso2": "nl", "iso3": "nld", "capital": "Amsterdã",
        "pegadinhas": ["Haia", "Roterdã", "Utrecht"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 52.1326, "lng": 5.2913, "area_km2": 41543, "populacao": 17900000,
        "fronteiras": ["be", "de"],
        "fato": "Amsterdã é a capital constitucional, mas toda a sede do governo, parlamento, monarquia e tribunais internacionais fica em Haia (Den Haag)."
    },
    {
        "nome": "Luxemburgo", "nome_oficial": "Grão-Ducado do Luxemburgo",
        "iso2": "lu", "iso3": "lux", "capital": "Luxemburgo",
        "pegadinhas": ["Esch-sur-Alzette", "Differdange", "Dudelange"],
        "continente": "Europa", "subregiao": "Europa Ocidental",
        "lat": 49.8153, "lng": 6.1296, "area_km2": 2586, "populacao": 660000,
        "fronteiras": ["be", "fr", "de"],
        "fato": "O único grão-ducado soberano remanescente no mundo; possui o maior PIB per capita nominal do planeta."
    },
    {
        "nome": "Mônaco", "nome_oficial": "Principado de Mônaco",
        "iso2": "mc", "iso3": "mco", "capital": "Mônaco",
        "pegadinhas": ["Monte Carlo", "La Condamine", "Fontvieille"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 43.7384, "lng": 7.4246, "area_km2": 2.02, "populacao": 39000,
        "fronteiras": ["fr"],
        "fato": "O segundo menor país soberano do mundo (apenas 2 km²), com a maior densidade populacional da Terra (mais de 19.000 hab/km²)."
    },
    {
        "nome": "Andorra", "nome_oficial": "Principado de Andorra",
        "iso2": "ad", "iso3": "and", "capital": "Andorra-a-Velha",
        "pegadinhas": ["Escaldes-Engordany", "Encamp", "Sant Julià de Lòria"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 42.5063, "lng": 1.5218, "area_km2": 468, "populacao": 80000,
        "fronteiras": ["fr", "es"],
        "fato": "Co-principado parlamentar único onde os chefes de Estado conjuntos são o Bispo de Urgell (Espanha) e o Presidente da França."
    },
    {
        "nome": "Liechtenstein", "nome_oficial": "Principado de Liechtenstein",
        "iso2": "li", "iso3": "lie", "capital": "Vaduz",
        "pegadinhas": ["Schaan", "Balzers", "Triesen"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 47.166, "lng": 9.5554, "area_km2": 160, "populacao": 39000,
        "fronteiras": ["at", "ch"],
        "fato": "Um dos dois únicos países duplamente encravados do mundo (cercado apenas por outros países sem litoral: Suíça e Áustria)."
    },
    {
        "nome": "San Marino", "nome_oficial": "Sereníssima República de San Marino",
        "iso2": "sm", "iso3": "smr", "capital": "San Marino",
        "pegadinhas": ["Serravalle", "Borgo Maggiore", "Domagnano"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 43.9424, "lng": 12.4578, "area_km2": 61, "populacao": 34000,
        "fronteiras": ["it"],
        "fato": "A república constitucional soberana contínua mais antiga do mundo, fundada em 301 d.C. no Monte Titano."
    },
    {
        "nome": "Vaticano", "nome_oficial": "Estado da Cidade do Vaticano",
        "iso2": "va", "iso3": "vat", "capital": "Cidade do Vaticano",
        "pegadinhas": ["Roma", "Castel Gandolfo", "Borgo"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 41.9029, "lng": 12.4534, "area_km2": 0.49, "populacao": 800,
        "fronteiras": ["it"],
        "fato": "O menor país soberano independente do planeta (0,49 km²); sua soberania foi instituída pelo Tratado de Latrão em 1929."
    },
    {
        "nome": "Malta", "nome_oficial": "República de Malta",
        "iso2": "mt", "iso3": "mlt", "capital": "Valletta",
        "pegadinhas": ["Birkirkara", "Sliema", "Mdina"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 35.9375, "lng": 14.3754, "area_km2": 316, "populacao": 530000,
        "fronteiras": [],
        "fato": "Valletta é a menor capital de um país da União Europeia em área (0,8 km²); a língua maltesa é a única língua semítica oficial da UE."
    },
    {
        "nome": "Grécia", "nome_oficial": "República Helênica",
        "iso2": "gr", "iso3": "grc", "capital": "Atenas",
        "pegadinhas": ["Tessalônica", "Patras", "Heraclião"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 39.0742, "lng": 21.8243, "area_km2": 131957, "populacao": 10400000,
        "fronteiras": ["al", "bg", "tr", "mk"],
        "fato": "Possui mais de 6.000 ilhas e ilhotas dispersas pelos mares Egeu e Jônico, com a 11ª costa marítima mais extensa da Terra."
    },
    {
        "nome": "Chipre", "nome_oficial": "República de Chipre",
        "iso2": "cy", "iso3": "cyp", "capital": "Nicósia",
        "pegadinhas": ["Limassol", "Larnaca", "Paphos"],
        "continente": "Europa", "subregiao": "Europa Meridional",
        "lat": 35.1264, "lng": 33.4299, "area_km2": 9251, "populacao": 1250000,
        "fronteiras": [],
        "fato": "Nicósia é a última capital dividida por uma zona desmilitarizada (a Linha Verde da ONU) separando a República de Chipre da autodeclarada RTNC."
    },
    {
        "nome": "Polônia", "nome_oficial": "República da Polônia",
        "iso2": "pl", "iso3": "pol", "capital": "Varsóvia",
        "pegadinhas": ["Cracóvia", "Wrocław", "Gdańsk"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 51.9194, "lng": 19.1451, "area_km2": 312696, "populacao": 37700000,
        "fronteiras": ["by", "cz", "de", "lt", "ru", "sk", "ua"],
        "fato": "Sua fronteira nordeste com a Lituânia forma a 'Brecha de Suwałki' (Suwalki Gap), considerado o calcanhar de Aquiles territorial da OTAN."
    },
    {
        "nome": "República Tcheca", "nome_oficial": "Chéquia",
        "iso2": "cz", "iso3": "cze", "capital": "Praga",
        "pegadinhas": ["Brno", "Ostrava", "Plzeň"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 49.8175, "lng": 15.473, "area_km2": 78866, "populacao": 10800000,
        "fronteiras": ["at", "de", "pl", "sk"],
        "fato": "País com a maior taxa de consumo de cerveja per capita do planeta; separou-se pacificamente da Eslováquia em 1993 ('Divórcio de Veludo')."
    },
    {
        "nome": "Eslováquia", "nome_oficial": "República Eslovaca",
        "iso2": "sk", "iso3": "svk", "capital": "Bratislava",
        "pegadinhas": ["Košice", "Prešov", "Žilina"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 48.669, "lng": 19.699, "area_km2": 49035, "populacao": 5400000,
        "fronteiras": ["at", "cz", "hu", "pl", "ua"],
        "fato": "Bratislava é a única capital nacional do mundo que faz fronteira direta com dois países soberanos independentes (Áustria e Hungria)."
    },
    {
        "nome": "Hungria", "nome_oficial": "Hungria",
        "iso2": "hu", "iso3": "hun", "capital": "Budapeste",
        "pegadinhas": ["Debrecen", "Szeged", "Miskolc"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 47.1625, "lng": 19.5033, "area_km2": 93028, "populacao": 9600000,
        "fronteiras": ["at", "hr", "ro", "rs", "sk", "si", "ua"],
        "fato": "Budapeste foi formada em 1873 pela unificação das cidades históricas de Buda e Óbuda (na margem direita do Danúbio) com Peste (na margem esquerda)."
    },
    {
        "nome": "Romênia", "nome_oficial": "Romênia",
        "iso2": "ro", "iso3": "rou", "capital": "Bucareste",
        "pegadinhas": ["Cluj-Napoca", "Timișoara", "Iași"],
        "continente": "Europa", "subregiao": "Europa Oriental",
        "lat": 45.9432, "lng": 24.9668, "area_km2": 238397, "populacao": 19000000,
        "fronteiras": ["bg", "hu", "md", "rs", "ua"],
        "fato": "O Palácio do Parlamento em Bucareste é o edifício administrativo civil mais pesado do mundo, com 4,1 bilhões de quilos de rocha e concreto."
    },
    {
        "nome": "Bulgária", "nome_oficial": "República da Bulgária",
        "iso2": "bg", "iso3": "bgr", "capital": "Sófia",
        "pegadinhas": ["Plovdiv", "Varna", "Burgas"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 42.7339, "lng": 25.4858, "area_km2": 110879, "populacao": 6400000,
        "fronteiras": ["gr", "mk", "ro", "rs", "tr"],
        "fato": "Plovdiv na Bulgária é considerada a cidade mais antiga continuamente habitada da Europa, remontando a mais de 6.000 a.C."
    },
    {
        "nome": "Noruega", "nome_oficial": "Reino da Noruega",
        "iso2": "no", "iso3": "nor", "capital": "Oslo",
        "pegadinhas": ["Bergen", "Trondheim", "Stavanger"],
        "continente": "Europa", "subregiao": "Escandinávia",
        "lat": 60.472, "lng": 8.4689, "area_km2": 385207, "populacao": 5500000,
        "fronteiras": ["fi", "ru", "se"],
        "fato": "Administra o arquipélago ártico de Svalbard (onde fica o Cofre Global de Sementes) e a remota Ilha Bouvet no Atlântico Sul."
    },
    {
        "nome": "Suécia", "nome_oficial": "Reino da Suécia",
        "iso2": "se", "iso3": "swe", "capital": "Estocolmo",
        "pegadinhas": ["Gotemburgo", "Malmö", "Uppsala"],
        "continente": "Europa", "subregiao": "Escandinávia",
        "lat": 60.1282, "lng": 18.6435, "area_km2": 450295, "populacao": 10500000,
        "fronteiras": ["fi", "no"],
        "fato": "A ponte de Øresund conecta Malmö na Suécia a Copenhague na Dinamarca por uma combinação épica de ponte estaiada e túnel submarino."
    },
    {
        "nome": "Finlândia", "nome_oficial": "República da Finlândia",
        "iso2": "fi", "iso3": "fin", "capital": "Helsinque",
        "pegadinhas": ["Espoo", "Tampere", "Turku"],
        "continente": "Europa", "subregiao": "Países Nórdicos",
        "lat": 61.9241, "lng": 25.7482, "area_km2": 338424, "populacao": 5600000,
        "fronteiras": ["no", "ru", "se"],
        "fato": "Possui 1.340 km de fronteira terrestre contínua com a Rússia; conta com mais de 187.000 lagos naturais ('Terra dos Mil Lagos')."
    },
    {
        "nome": "Dinamarca", "nome_oficial": "Reino da Dinamarca",
        "iso2": "dk", "iso3": "dnk", "capital": "Copenhague",
        "pegadinhas": ["Aarhus", "Odense", "Aalborg"],
        "continente": "Europa", "subregiao": "Escandinávia",
        "lat": 56.2639, "lng": 9.5018, "area_km2": 43094, "populacao": 5900000,
        "fronteiras": ["de"],
        "fato": "Embora a Dinamarca metropolitana seja pequena, a soberania do Reino inclui a Groenlândia, a maior ilha não-continental da Terra."
    },
    {
        "nome": "Islândia", "nome_oficial": "Islândia",
        "iso2": "is", "iso3": "isl", "capital": "Reykjavík",
        "pegadinhas": ["Kópavogur", "Hafnarfjörður", "Akureyri"],
        "continente": "Europa", "subregiao": "Países Nórdicos",
        "lat": 64.9631, "lng": -19.0208, "area_km2": 103000, "populacao": 390000,
        "fronteiras": [],
        "fato": "Situada exatamente em cima da Dorsal Mesoatlântica onde as placas tectônicas Norte-Americana e Euroasiática se afastam lentamente."
    },
    {
        "nome": "Estônia", "nome_oficial": "República da Estônia",
        "iso2": "ee", "iso3": "est", "capital": "Tallinn",
        "pegadinhas": ["Tartu", "Narva", "Pärnu"],
        "continente": "Europa", "subregiao": "Países Bálticos",
        "lat": 58.5953, "lng": 25.0136, "area_km2": 45228, "populacao": 1360000,
        "fronteiras": ["lv", "ru"],
        "fato": "A sociedade digital mais avançada do mundo: 99% dos serviços públicos funcionam online 24/7 e foi pioneira no voto eletrônico nacional."
    },
    {
        "nome": "Letônia", "nome_oficial": "República da Letônia",
        "iso2": "lv", "iso3": "lva", "capital": "Riga",
        "pegadinhas": ["Daugavpils", "Liepāja", "Jelgava"],
        "continente": "Europa", "subregiao": "Países Bálticos",
        "lat": 56.8796, "lng": 24.6032, "area_km2": 64589, "populacao": 1880000,
        "fronteiras": ["by", "ee", "lt", "ru"],
        "fato": "Riga é a maior metrópole entre as capitais bálticas e abriga a maior concentração de arquitetura Art Nouveau do mundo."
    },
    {
        "nome": "Lituânia", "nome_oficial": "República da Lituânia",
        "iso2": "lt", "iso3": "ltu", "capital": "Vilnius",
        "pegadinhas": ["Kaunas", "Klaipėda", "Šiauliai"],
        "continente": "Europa", "subregiao": "Países Bálticos",
        "lat": 55.1694, "lng": 23.8813, "area_km2": 65300, "populacao": 2860000,
        "fronteiras": ["by", "lv", "pl", "ru"],
        "fato": "No século XV, o Grão-Ducado da Lituânia era o maior país da Europa, estendendo-se do Mar Báltico até as margens do Mar Negro."
    },
    {
        "nome": "Ucrânia", "nome_oficial": "Ucrânia",
        "iso2": "ua", "iso3": "ukr", "capital": "Kiev",
        "pegadinhas": ["Kharkiv", "Odessa", "Dnipro"],
        "continente": "Europa", "subregiao": "Europa Oriental",
        "lat": 48.3794, "lng": 31.1656, "area_km2": 603550, "populacao": 38000000,
        "fronteiras": ["by", "hu", "md", "pl", "ro", "ru", "sk"],
        "fato": "O maior país inteiramente situado no continente europeu; abriga um terço das reservas mundiais de 'chernozem' (solo negro fértil)."
    },
    {
        "nome": "Bielorrússia", "nome_oficial": "República da Bielorrússia",
        "iso2": "by", "iso3": "blr", "capital": "Minsk",
        "pegadinhas": ["Gomel", "Mogilev", "Vitebsk"],
        "continente": "Europa", "subregiao": "Europa Oriental",
        "lat": 53.7098, "lng": 27.9534, "area_km2": 207600, "populacao": 9200000,
        "fronteiras": ["lv", "lt", "pl", "ru", "ua"],
        "fato": "O maior país sem litoral de toda a Europa; compartilha com a Polônia a Floresta de Białowieża, refúgio do bisão-europeu selvagem."
    },
    {
        "nome": "Moldávia", "nome_oficial": "República da Moldávia",
        "iso2": "md", "iso3": "mda", "capital": "Chisinau",
        "pegadinhas": ["Tiraspol", "Bălți", "Bender"],
        "continente": "Europa", "subregiao": "Europa Oriental",
        "lat": 47.4116, "lng": 28.3699, "area_km2": 33846, "populacao": 2500000,
        "fronteiras": ["ro", "ua"],
        "fato": "Abriga na sua margem oriental a Transnístria, uma república separatista pró-russa não reconhecida que mantém símbolos da foice e martelo."
    },
    {
        "nome": "Albânia", "nome_oficial": "República da Albânia",
        "iso2": "al", "iso3": "alb", "capital": "Tirana",
        "pegadinhas": ["Durrës", "Vlorë", "Shkodër"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 41.1533, "lng": 20.1683, "area_km2": 28748, "populacao": 2750000,
        "fronteiras": ["gr", "xk", "me", "mk"],
        "fato": "Durante a ditadura comunista de Enver Hoxha, foram erguidos mais de 173.000 bunkers de concreto fortificados espalhados pelo país."
    },
    {
        "nome": "Macedônia do Norte", "nome_oficial": "República da Macedônia do Norte",
        "iso2": "mk", "iso3": "mkd", "capital": "Escópia",
        "pegadinhas": ["Bitola", "Kumanovo", "Ohrid"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 41.6086, "lng": 21.7453, "area_km2": 25713, "populacao": 1830000,
        "fronteiras": ["al", "bg", "gr", "xk", "rs"],
        "fato": "Mudou oficialmente de nome em 2019 pelo Acordo de Prespa para resolver uma disputa diplomática de 27 anos com a Grécia sobre o termo 'Macedônia'."
    },
    {
        "nome": "Montenegro", "nome_oficial": "Montenegro",
        "iso2": "me", "iso3": "mne", "capital": "Podgorica",
        "pegadinhas": ["Nikšić", "Herceg Novi", "Kotor"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 42.7087, "lng": 19.3744, "area_km2": 13812, "populacao": 620000,
        "fronteiras": ["al", "ba", "hr", "xk", "rs"],
        "fato": "Usa o Euro como moeda oficial unilateralmente sem fazer parte formal da Zona do Euro nem da União Europeia."
    },
    {
        "nome": "Sérvia", "nome_oficial": "República da Sérvia",
        "iso2": "rs", "iso3": "srb", "capital": "Belgrado",
        "pegadinhas": ["Novi Sad", "Niš", "Kragujevac"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 44.0165, "lng": 21.0059, "area_km2": 88361, "populacao": 6650000,
        "fronteiras": ["ba", "bg", "hr", "hu", "xk", "me", "mk", "ro"],
        "fato": "Belgrado é uma das capitais mais disputadas da história: foi palco de 115 guerras e arrasada ou reconstruída mais de 40 vezes."
    },
    {
        "nome": "Bósnia e Herzegovina", "nome_oficial": "Bósnia e Herzegovina",
        "iso2": "ba", "iso3": "bih", "capital": "Sarajevo",
        "pegadinhas": ["Banja Luka", "Mostar", "Tuzla"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 43.9159, "lng": 17.6791, "area_km2": 51209, "populacao": 3200000,
        "fronteiras": ["hr", "me", "rs"],
        "fato": "Possui uma das saídas para o mar mais estreitas do mundo: o corredor costeiro de Neum, com apenas 20 km de litoral cortando a Croácia."
    },
    {
        "nome": "Croácia", "nome_oficial": "República da Croácia",
        "iso2": "hr", "iso3": "hrv", "capital": "Zagreb",
        "pegadinhas": ["Split", "Rijeka", "Dubrovnik"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 45.1, "lng": 15.2, "area_km2": 56594, "populacao": 3850000,
        "fronteiras": ["ba", "hu", "me", "rs", "si"],
        "fato": "Construiu a ponte de Pelješac em 2022 para conectar o enclave de Dubrovnik ao restante do território croata sem cruzar a alfândega da Bósnia."
    },
    {
        "nome": "Eslovênia", "nome_oficial": "República da Eslovênia",
        "iso2": "si", "iso3": "svn", "capital": "Liubliana",
        "pegadinhas": ["Maribor", "Celje", "Kranj"],
        "continente": "Europa", "subregiao": "Europa Central",
        "lat": 46.1512, "lng": 14.9955, "area_km2": 20273, "populacao": 2100000,
        "fronteiras": ["at", "hr", "it", "hu"],
        "fato": "Mais de metade do território é coberto por florestas densas; é o berço do termo geológico 'Carste' (relevo calcário de cavernas)."
    },
    {
        "nome": "Kosovo", "nome_oficial": "República do Kosovo",
        "iso2": "xk", "iso3": "xkx", "capital": "Pristina",
        "pegadinhas": ["Prizren", "Peja", "Mitrovica"],
        "continente": "Europa", "subregiao": "Balcãs",
        "lat": 42.6026, "lng": 20.903, "area_km2": 10887, "populacao": 1800000,
        "fronteiras": ["al", "me", "mk", "rs"],
        "fato": "Declarou independência unilateral da Sérvia em 2008; reconhecido por cerca de 100 países da ONU, mas contestado por Belgrado e Moscou."
    },
    {
        "nome": "Rússia", "nome_oficial": "Federação Russa",
        "iso2": "ru", "iso3": "rus", "capital": "Moscou",
        "pegadinhas": ["São Petersburgo", "Novosibirsk", "Kazan"],
        "continente": "Europa", "subregiao": "Eurásia",
        "lat": 61.524, "lng": 105.3188, "area_km2": 17098246, "populacao": 144000000,
        "fronteiras": ["az", "by", "cn", "ee", "fi", "ge", "kz", "kp", "lv", "lt", "mn", "no", "pl", "ua"],
        "fato": "O maior país do planeta em extensão territorial (11 fusos horários); abriga o Lago Baikal (20% de toda a água doce líquida superficial do globo)."
    }
]

PAISES.extend(PAISES_EUROPA)
print(f"Total apos Europa: {len(PAISES)}")

PAISES_ASIA = [
    # =========================================================================
    # ÁSIA (48)
    # =========================================================================
    {
        "nome": "China", "nome_oficial": "República Popular da China",
        "iso2": "cn", "iso3": "chn", "capital": "Pequim",
        "pegadinhas": ["Xangai", "Guangzhou", "Shenzhen"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 35.8617, "lng": 104.1954, "area_km2": 9596961, "populacao": 1410000000,
        "fronteiras": ["af", "bt", "in", "kz", "kp", "kg", "la", "mn", "mm", "np", "pk", "ru", "tj", "vn"],
        "fato": "Apesar de se estender por mais de 5.000 km de largura geográfica (cobrindo 5 fusos naturais), adota por decreto um único fuso oficial nacional (UTC+8)."
    },
    {
        "nome": "Japão", "nome_oficial": "Japão",
        "iso2": "jp", "iso3": "jpn", "capital": "Tóquio",
        "pegadinhas": ["Osaka", "Quioto", "Yokohama"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 36.2048, "lng": 138.2529, "area_km2": 377975, "populacao": 124500000,
        "fronteiras": [],
        "fato": "A Grande Tóquio é a maior aglomeração urbana do planeta, com mais de 37 milhões de habitantes em sua área metropolitana contínua."
    },
    {
        "nome": "Coreia do Sul", "nome_oficial": "República da Coreia",
        "iso2": "kr", "iso3": "kor", "capital": "Seul",
        "pegadinhas": ["Busan", "Incheon", "Daegu"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 35.9078, "lng": 127.7669, "area_km2": 100210, "populacao": 51700000,
        "fronteiras": ["kp"],
        "fato": "Separada do Norte pela Zona Desmilitarizada (DMZ) de 250 km de extensão, a fronteira mais densamente minada e vigiada do planeta."
    },
    {
        "nome": "Coreia do Norte", "nome_oficial": "República Popular Democrática da Coreia",
        "iso2": "kp", "iso3": "prk", "capital": "Pyongyang",
        "pegadinhas": ["Hamhung", "Chongjin", "Nampo"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 40.3399, "lng": 127.5101, "area_km2": 120538, "populacao": 26000000,
        "fronteiras": ["cn", "ru", "kr"],
        "fato": "Compartilha uma curta fronteira fluvial de 17 km com a Rússia ao longo do Rio Tumen, conectada pela 'Ponte da Amizade'."
    },
    {
        "nome": "Índia", "nome_oficial": "República da Índia",
        "iso2": "in", "iso3": "ind", "capital": "Nova Délhi",
        "pegadinhas": ["Mumbai", "Bangalore", "Calcutá"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 20.5937, "lng": 78.9629, "area_km2": 3287263, "populacao": 1430000000,
        "fronteiras": ["bd", "bt", "cn", "mm", "np", "pk"],
        "fato": "O país mais populoso da Terra; Nova Délhi é um enclave urbano planejado dentro da metrópole histórica de Délhi."
    },
    {
        "nome": "Paquistão", "nome_oficial": "República Islâmica do Paquistão",
        "iso2": "pk", "iso3": "pak", "capital": "Islamabad",
        "pegadinhas": ["Karachi", "Lahore", "Faisalabad"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 30.3753, "lng": 69.3451, "area_km2": 881913, "populacao": 240000000,
        "fronteiras": ["af", "cn", "in", "ir"],
        "fato": "Islamabad foi construída do zero na década de 1960 como capital planejada para substituir a vulnerável metrópole costeira de Karachi."
    },
    {
        "nome": "Indonésia", "nome_oficial": "República da Indonésia",
        "iso2": "id", "iso3": "idn", "capital": "Jacarta",
        "pegadinhas": ["Surabaia", "Bandung", "Bali"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": -0.7893, "lng": 113.9213, "area_km2": 1904569, "populacao": 278000000,
        "fronteiras": ["my", "pg", "tl"],
        "fato": "O maior país arquipelágico do planeta (mais de 17.000 ilhas); está transferindo sua capital para Nusantara, em Bornéu, porque Jacarta está afundando."
    },
    {
        "nome": "Filipinas", "nome_oficial": "República das Filipinas",
        "iso2": "ph", "iso3": "phl", "capital": "Manila",
        "pegadinhas": ["Quezon City", "Davao", "Cebu"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 12.8797, "lng": 121.774, "area_km2": 300000, "populacao": 115000000,
        "fronteiras": [],
        "fato": "Composta por mais de 7.640 ilhas; Quezon City foi a capital oficial de 1948 a 1976 antes de o status retornar a Manila."
    },
    {
        "nome": "Vietnã", "nome_oficial": "República Socialista do Vietnã",
        "iso2": "vn", "iso3": "vnm", "capital": "Hanói",
        "pegadinhas": ["Ho Chi Minh", "Da Nang", "Haiphong"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 14.0583, "lng": 108.2772, "area_km2": 331212, "populacao": 98000000,
        "fronteiras": ["kh", "cn", "la"],
        "fato": "Possui formato de 'S' estreito ao longo do Mar do Sul da China; abriga a Caverna Sơn Đoòng, a maior caverna subterrânea conhecida do planeta."
    },
    {
        "nome": "Tailândia", "nome_oficial": "Reino da Tailândia",
        "iso2": "th", "iso3": "tha", "capital": "Bangcoc",
        "pegadinhas": ["Chiang Mai", "Phuket", "Pattaya"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 15.87, "lng": 100.9925, "area_km2": 513120, "populacao": 71800000,
        "fronteiras": ["mm", "kh", "la", "my"],
        "fato": "Único país do Sudeste Asiático que nunca foi colonizado por potências europeias ocidentais (atuou como estado-tampão entre os impérios britânico e francês)."
    },
    {
        "nome": "Malásia", "nome_oficial": "Malásia",
        "iso2": "my", "iso3": "mys", "capital": "Kuala Lumpur",
        "pegadinhas": ["Putrajaya", "George Town", "Johor Bahru"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 4.2105, "lng": 101.9758, "area_km2": 329847, "populacao": 34000000,
        "fronteiras": ["bn", "id", "th"],
        "fato": "Dividida em duas metades separadas pelo Mar da China Meridional: a Malásia Peninsular e a Malásia Oriental (na ilha de Bornéu)."
    },
    {
        "nome": "Cingapura", "nome_oficial": "República de Cingapura",
        "iso2": "sg", "iso3": "sgp", "capital": "Cingapura",
        "pegadinhas": ["Jurong", "Sentosa", "Changi"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 1.3521, "lng": 103.8198, "area_km2": 734, "populacao": 5900000,
        "fronteiras": [],
        "fato": "Cidade-estado insular no extremo da Península Malaia; expandiu seu território em mais de 25% desde a independência por meio de aterros marinhos contínuos."
    },
    {
        "nome": "Cazaquistão", "nome_oficial": "República do Cazaquistão",
        "iso2": "kz", "iso3": "kaz", "capital": "Astana",
        "pegadinhas": ["Almaty", "Shymkent", "Aktobe"],
        "continente": "Ásia", "subregiao": "Ásia Central",
        "lat": 48.0196, "lng": 66.9237, "area_km2": 2724900, "populacao": 20000000,
        "fronteiras": ["cn", "kg", "ru", "tm", "uz"],
        "fato": "O maior país sem saída para o mar do planeta (nonagésimo nono maior do mundo); abriga o Cosmódromo de Baikonur, a mais antiga base de lançamentos espaciais."
    },
    {
        "nome": "Uzbequistão", "nome_oficial": "República do Uzbequistão",
        "iso2": "uz", "iso3": "uzb", "capital": "Tashkent",
        "pegadinhas": ["Samarcanda", "Bukhara", "Namangan"],
        "continente": "Ásia", "subregiao": "Ásia Central",
        "lat": 41.3775, "lng": 64.5853, "area_km2": 447400, "populacao": 36000000,
        "fronteiras": ["af", "kz", "kg", "tj", "tm"],
        "fato": "Um dos dois únicos países duplamente encravados do mundo (cercado exclusivamente por vizinhos que também não têm acesso a nenhum oceano)."
    },
    {
        "nome": "Turcomenistão", "nome_oficial": "Turcomenistão",
        "iso2": "tm", "iso3": "tkm", "capital": "Asgabate",
        "pegadinhas": ["Türkmenabat", "Daşoguz", "Mary"],
        "continente": "Ásia", "subregiao": "Ásia Central",
        "lat": 38.9697, "lng": 59.5563, "area_km2": 488100, "populacao": 6500000,
        "fronteiras": ["af", "ir", "kz", "uz"],
        "fato": "Abriga a 'Porta do Inferno' (Cratera de Darvaza), poço de gás natural que queima ininterruptamente desde 1971 no meio do deserto de Karakum."
    },
    {
        "nome": "Quirguistão", "nome_oficial": "República Quirguiz",
        "iso2": "kg", "iso3": "kgz", "capital": "Bishkek",
        "pegadinhas": ["Osh", "Jalal-Abad", "Karakol"],
        "continente": "Ásia", "subregiao": "Ásia Central",
        "lat": 41.2044, "lng": 74.7661, "area_km2": 199951, "populacao": 7000000,
        "fronteiras": ["cn", "kz", "tj", "uz"],
        "fato": "Mais de 90% do seu território é coberto pelas imponentes cordilheiras de Tian Shan e Pamir; abriga o Lago Issyk-Kul (segundo maior lago alpino do mundo)."
    },
    {
        "nome": "Tadjiquistão", "nome_oficial": "República do Tadjiquistão",
        "iso2": "tj", "iso3": "tjk", "capital": "Dushanbe",
        "pegadinhas": ["Khujand", "Kulob", "Bokhtar"],
        "continente": "Ásia", "subregiao": "Ásia Central",
        "lat": 38.861, "lng": 71.2761, "area_km2": 143100, "populacao": 10000000,
        "fronteiras": ["af", "cn", "kg", "uz"],
        "fato": "Conhecido como o 'Teto do Mundo'; mais de 50% de seu território está situado a mais de 3.000 metros acima do nível do mar."
    },
    {
        "nome": "Arábia Saudita", "nome_oficial": "Reino da Arábia Saudita",
        "iso2": "sa", "iso3": "sau", "capital": "Riad",
        "pegadinhas": ["Jidá", "Meca", "Medina"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 23.8859, "lng": 45.0792, "area_km2": 2149690, "populacao": 36000000,
        "fronteiras": ["iq", "jo", "kw", "om", "qa", "ae", "ye"],
        "fato": "O maior país do mundo sem nenhum rio permanente natural de superfície; obtém metade de sua água potável por usinas massivas de dessalinização marinha."
    },
    {
        "nome": "Irã", "nome_oficial": "República Islâmica do Irã",
        "iso2": "ir", "iso3": "irn", "capital": "Teerã",
        "pegadinhas": ["Isfahan", "Mashhad", "Shiraz"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 32.4279, "lng": 53.688, "area_km2": 1648195, "populacao": 89000000,
        "fronteiras": ["af", "am", "az", "iq", "pk", "tr", "tm"],
        "fato": "Controla a margem norte do Estreito de Ormuz, gargalo marítimo por onde escoa um quinto de todo o petróleo consumido no mundo."
    },
    {
        "nome": "Iraque", "nome_oficial": "República do Iraque",
        "iso2": "iq", "iso3": "irq", "capital": "Bagdá",
        "pegadinhas": ["Basra", "Erbil", "Mossul"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 33.2232, "lng": 43.6793, "area_km2": 438317, "populacao": 44000000,
        "fronteiras": ["ir", "jo", "kw", "sa", "sy", "tr"],
        "fato": "Berço histórico da Mesopotâmia ('terra entre rios') entre os rios Tigre e Eufrates, onde surgiu a escrita cuneiforme e a agricultura irrigada."
    },
    {
        "nome": "Turquia", "nome_oficial": "República da Turquia",
        "iso2": "tr", "iso3": "tur", "capital": "Ancara",
        "pegadinhas": ["Istambul", "Esmirna", "Bursa"],
        "continente": "Ásia", "subregiao": "Eurásia",
        "lat": 38.9637, "lng": 35.2433, "area_km2": 783562, "populacao": 85300000,
        "fronteiras": ["am", "az", "bg", "ge", "gr", "ir", "iq", "sy"],
        "fato": "Istambul é a única metrópole transcontinental do mundo erguida simultaneamente em dois continentes (Europa e Ásia), cortada pelo Estreito de Bósforo."
    },
    {
        "nome": "Israel", "nome_oficial": "Estado de Israel",
        "iso2": "il", "iso3": "isr", "capital": "Jerusalém",
        "pegadinhas": ["Tel Aviv", "Haifa", "Beer-Sheva"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 31.0461, "lng": 34.8516, "area_km2": 22072, "populacao": 9800000,
        "fronteiras": ["eg", "jo", "lb", "sy", "ps"],
        "fato": "Reivindica Jerusalém como sua capital indivisível, embora a maioria das embaixadas estrangeiras permaneça em Tel Aviv devido a disputas geopolíticas."
    },
    {
        "nome": "Palestina", "nome_oficial": "Estado da Palestina",
        "iso2": "ps", "iso3": "pse", "capital": "Jerusalém Oriental",
        "pegadinhas": ["Ramallah", "Gaza", "Nablus"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 31.9522, "lng": 35.2332, "area_km2": 6020, "populacao": 5200000,
        "fronteiras": ["il", "eg", "jo"],
        "fato": "Composto por duas entidades territoriais fisicamente desconectadas: a Cisjordânia (West Bank) e a Faixa de Gaza."
    },
    {
        "nome": "Jordânia", "nome_oficial": "Reino Hachemita da Jordânia",
        "iso2": "jo", "iso3": "jor", "capital": "Amã",
        "pegadinhas": ["Zarqa", "Irbid", "Aqaba"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 30.5852, "lng": 36.2384, "area_km2": 89342, "populacao": 11300000,
        "fronteiras": ["iq", "il", "sa", "sy", "ps"],
        "fato": "Seu único acesso ao mar é uma faixa costeira de 26 km no Golfo de Aqaba (Mar Vermelho), obtida em troca territorial com a Arábia Saudita em 1965."
    },
    {
        "nome": "Líbano", "nome_oficial": "República Libanesa",
        "iso2": "lb", "iso3": "lbn", "capital": "Beirute",
        "pegadinhas": ["Trípoli", "Sidon", "Tiro"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 33.8547, "lng": 35.8623, "area_km2": 10452, "populacao": 5400000,
        "fronteiras": ["il", "sy"],
        "fato": "A diáspora libanesa no mundo é amplamente maior do que a população dentro do próprio Líbano (o Brasil sozinho abriga mais de 7 milhões de descendentes)."
    },
    {
        "nome": "Síria", "nome_oficial": "República Árabe Síria",
        "iso2": "sy", "iso3": "syr", "capital": "Damasco",
        "pegadinhas": ["Aleppo", "Homs", "Latakia"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 34.8021, "lng": 38.9968, "area_km2": 185180, "populacao": 22000000,
        "fronteiras": ["iq", "il", "jo", "lb", "tr"],
        "fato": "Damasco disputa o título de mais antiga capital continuamente habitada do planeta Terra, com registros arqueológicos que remontam ao 3º milênio a.C."
    },
    {
        "nome": "Emirados Árabes Unidos", "nome_oficial": "Emirados Árabes Unidos",
        "iso2": "ae", "iso3": "are", "capital": "Abu Dhabi",
        "pegadinhas": ["Dubai", "Sharjah", "Ajman"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 23.4241, "lng": 53.8478, "area_km2": 83600, "populacao": 9900000,
        "fronteiras": ["om", "sa"],
        "fato": "Abu Dhabi detém cerca de 90% de todo o petróleo e território dos EAU, enquanto Dubai se transformou no hub financeiro, turístico e aéreo global."
    },
    {
        "nome": "Catar", "nome_oficial": "Estado do Catar",
        "iso2": "qa", "iso3": "qat", "capital": "Doha",
        "pegadinhas": ["Al Wakrah", "Al Rayyan", "Lusail"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 25.3548, "lng": 51.1839, "area_km2": 11586, "populacao": 2700000,
        "fronteiras": ["sa"],
        "fato": "Península que avança sobre o Golfo Pérsico; compartilha com o Irã o 'North Field' / 'South Pars', o maior campo isolado de gás natural do planeta."
    },
    {
        "nome": "Kuwait", "nome_oficial": "Estado do Kuwait",
        "iso2": "kw", "iso3": "kwt", "capital": "Cidade do Kuwait",
        "pegadinhas": ["Hawalli", "Salmiya", "Al Ahmadi"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 29.3117, "lng": 47.4818, "area_km2": 17818, "populacao": 4300000,
        "fronteiras": ["iq", "sa"],
        "fato": "O Dinar Kuwaitiano (KWD) é a unidade monetária de maior valor nominal do mundo, impulsionada pelas massivas reservas petrolíferas do país."
    },
    {
        "nome": "Omã", "nome_oficial": "Sultanato de Omã",
        "iso2": "om", "iso3": "omn", "capital": "Mascate",
        "pegadinhas": ["Salalah", "Sohar", "Nizwa"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 21.4735, "lng": 55.9754, "area_km2": 309500, "populacao": 4600000,
        "fronteiras": ["sa", "ae", "ye"],
        "fato": "Controla a Península de Musandam, um enclave descolado que vigia o flanco sul do Estreito de Ormuz."
    },
    {
        "nome": "Iêmen", "nome_oficial": "República do Iêmen",
        "iso2": "ye", "iso3": "yem", "capital": "Sana",
        "pegadinhas": ["Aden", "Taiz", "Hodeida"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 15.5527, "lng": 48.5164, "area_km2": 527968, "populacao": 33000000,
        "fronteiras": ["om", "sa"],
        "fato": "Controla o Estreito de Bab el-Mandeb (porta de entrada para o Canal de Suez) e o arquipélago isolado de Socotra com sua flora pré-histórica única."
    },
    {
        "nome": "Bahrein", "nome_oficial": "Reino do Bahrein",
        "iso2": "bh", "iso3": "bhr", "capital": "Manama",
        "pegadinhas": ["Riffa", "Muharraq", "Hamad Town"],
        "continente": "Ásia", "subregiao": "Oriente Médio",
        "lat": 26.0667, "lng": 50.5577, "area_km2": 786, "populacao": 1500000,
        "fronteiras": [],
        "fato": "País insular no Golfo Pérsico conectado fisicamente à Arábia Saudita pela Calçada do Rei Fahd, uma ponte marítima de 25 km."
    },
    {
        "nome": "Afeganistão", "nome_oficial": "Emirado Islâmico do Afeganistão",
        "iso2": "af", "iso3": "afg", "capital": "Cabul",
        "pegadinhas": ["Kandahar", "Herat", "Mazar-i-Sharif"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 33.9391, "lng": 67.71, "area_km2": 652230, "populacao": 41000000,
        "fronteiras": ["cn", "ir", "pk", "tj", "tm", "uz"],
        "fato": "Possui o 'Corredor de Wakhan', uma estreita língua de terra criada no século XIX como zona-tampão entre os impérios Russo e Britânico (Grande Jogo)."
    },
    {
        "nome": "Bangladesh", "nome_oficial": "República Popular do Bangladesh",
        "iso2": "bd", "iso3": "bgd", "capital": "Daca",
        "pegadinhas": ["Chittagong", "Khulna", "Sylhet"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 23.685, "lng": 90.3563, "area_km2": 147570, "populacao": 171000000,
        "fronteiras": ["in", "mm"],
        "fato": "Assentado sobre o delta conjunto dos rios Ganges e Brahmaputra; é o grande país com maior densidade populacional do mundo (mais de 1.150 hab/km²)."
    },
    {
        "nome": "Sri Lanka", "nome_oficial": "República Democrática Socialista do Sri Lanka",
        "iso2": "lk", "iso3": "lka", "capital": "Sri Jayawardenapura Kotte",
        "pegadinhas": ["Colombo", "Kandy", "Galle"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 7.8731, "lng": 80.7718, "area_km2": 65610, "populacao": 22000000,
        "fronteiras": [],
        "fato": "Kotte é a capital administrativa e sede do Parlamento, enquanto a vizinha Colombo permanece como capital executiva e coração econômico da ilha."
    },
    {
        "nome": "Nepal", "nome_oficial": "República Democrática Federal do Nepal",
        "iso2": "np", "iso3": "npl", "capital": "Catmandu",
        "pegadinhas": ["Pokhara", "Lalitpur", "Biratnagar"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 28.3949, "lng": 84.124, "area_km2": 147181, "populacao": 30500000,
        "fronteiras": ["cn", "in"],
        "fato": "Único país soberano do mundo cuja bandeira nacional oficial não tem formato quadrilátero (é formada pela sobreposição de dois triângulos)."
    },
    {
        "nome": "Butão", "nome_oficial": "Reino do Butão",
        "iso2": "bt", "iso3": "btn", "capital": "Timbu",
        "pegadinhas": ["Phuntsholing", "Paro", "Punakha"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 27.5142, "lng": 90.4336, "area_km2": 38394, "populacao": 780000,
        "fronteiras": ["cn", "in"],
        "fato": "Pioneiro mundial no índice de Felicidade Interna Bruta (FIB); é constitucionalmente o único país com pegada de carbono negativa no planeta."
    },
    {
        "nome": "Maldivas", "nome_oficial": "República das Maldivas",
        "iso2": "mv", "iso3": "mdv", "capital": "Malé",
        "pegadinhas": ["Addu City", "Fuvahmulah", "Kulhudhuffushi"],
        "continente": "Ásia", "subregiao": "Sul da Ásia",
        "lat": 3.2028, "lng": 73.2207, "area_km2": 300, "populacao": 520000,
        "fronteiras": [],
        "fato": "O país mais baixo da Terra em altitude média: seu ponto natural mais alto atinge apenas 2,4 metros acima do nível do mar."
    },
    {
        "nome": "Mongólia", "nome_oficial": "Mongólia",
        "iso2": "mn", "iso3": "mng", "capital": "Ulan Bator",
        "pegadinhas": ["Erdenet", "Darkhan", "Choibalsan"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 46.8625, "lng": 103.8467, "area_km2": 1564116, "populacao": 3400000,
        "fronteiras": ["cn", "ru"],
        "fato": "O país soberano de menor densidade demográfica do planeta (cerca de 2 pessoas por km²); Ulan Bator é a capital nacional mais fria da Terra."
    },
    {
        "nome": "Taiwan", "nome_oficial": "República da China",
        "iso2": "tw", "iso3": "twn", "capital": "Taipé",
        "pegadinhas": ["Kaohsiung", "Taichung", "Tainan"],
        "continente": "Ásia", "subregiao": "Ásia Oriental",
        "lat": 23.6978, "lng": 120.9605, "area_km2": 36197, "populacao": 23500000,
        "fronteiras": [],
        "fato": "Coração da indústria global de semicondutores avançados (TSMC); separada do continente pelo militarizado Estreito de Taiwan."
    },
    {
        "nome": "Mianmar", "nome_oficial": "República da União de Mianmar",
        "iso2": "mm", "iso3": "mmr", "capital": "Naypyidaw",
        "pegadinhas": ["Yangon", "Mandalay", "Bago"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 21.9162, "lng": 95.956, "area_km2": 676578, "populacao": 54000000,
        "fronteiras": ["bd", "cn", "in", "la", "th"],
        "fato": "Naypyidaw foi construída em segredo pela junta militar na selva e inaugurada em 2005; possui avenidas monumentais desertas de até 20 faixas."
    },
    {
        "nome": "Camboja", "nome_oficial": "Reino do Camboja",
        "iso2": "kh", "iso3": "khm", "capital": "Phnom Penh",
        "pegadinhas": ["Siem Reap", "Battambang", "Sihanoukville"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 12.5657, "lng": 104.991, "area_km2": 181035, "populacao": 17000000,
        "fronteiras": ["la", "th", "vn"],
        "fato": "Abriga o complexo de templos de Angkor Wat (o maior monumento religioso já erguido pelo ser humano), estampado na sua bandeira nacional."
    },
    {
        "nome": "Laos", "nome_oficial": "República Democrática Popular do Laos",
        "iso2": "la", "iso3": "lao", "capital": "Vientiane",
        "pegadinhas": ["Luang Prabang", "Savannakhet", "Pakse"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 19.8563, "lng": 102.4955, "area_km2": 236800, "populacao": 7500000,
        "fronteiras": ["kh", "cn", "mm", "th", "vn"],
        "fato": "Único país sem litoral do Sudeste Asiático; durante a Guerra do Vietnã, tornou-se o país mais intensamente bombardeado per capita da história."
    },
    {
        "nome": "Brunei", "nome_oficial": "Estado de Brunei Darussalam",
        "iso2": "bn", "iso3": "brn", "capital": "Bandar Seri Begawan",
        "pegadinhas": ["Kuala Belait", "Seria", "Tutong"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": 4.5353, "lng": 114.7277, "area_km2": 5765, "populacao": 450000,
        "fronteiras": ["my"],
        "fato": "Sultanato absolutista rico em petróleo na ilha de Bornéu; seu território é dividido em duas partes desconectadas cercadas pela Malásia."
    },
    {
        "nome": "Timor-Leste", "nome_oficial": "República Democrática de Timor-Leste",
        "iso2": "tl", "iso3": "tls", "capital": "Díli",
        "pegadinhas": ["Baucau", "Maliana", "Suai"],
        "continente": "Ásia", "subregiao": "Sudeste Asiático",
        "lat": -8.8742, "lng": 125.7275, "area_km2": 14874, "populacao": 1340000,
        "fronteiras": ["id"],
        "fato": "Primeira nação soberana a nascer no século XXI (em 2002); é um dos dois únicos países de maioria católica da Ásia (ao lado das Filipinas) e fala português."
    },
    {
        "nome": "Geórgia", "nome_oficial": "Geórgia",
        "iso2": "ge", "iso3": "geo", "capital": "Tbilisi",
        "pegadinhas": ["Batumi", "Kutaisi", "Rustavi"],
        "continente": "Ásia", "subregiao": "Cáucaso",
        "lat": 42.3154, "lng": 43.3569, "area_km2": 69700, "populacao": 3700000,
        "fronteiras": ["am", "az", "ru", "tr"],
        "fato": "Berço comprovado da vinicultura mundial (há mais de 8.000 anos); abriga as regiões separatistas pró-russas da Abkházia e Ossétia do Sul."
    },
    {
        "nome": "Armênia", "nome_oficial": "República da Armênia",
        "iso2": "am", "iso3": "arm", "capital": "Yerevan",
        "pegadinhas": ["Gyumri", "Vanadzor", "Vagharshapat"],
        "continente": "Ásia", "subregiao": "Cáucaso",
        "lat": 40.0691, "lng": 45.0382, "area_km2": 29743, "populacao": 2800000,
        "fronteiras": ["az", "ge", "ir", "tr"],
        "fato": "Primeira nação do mundo a adotar o cristianismo como religião oficial de Estado (em 301 d.C.); tem o bíblico Monte Ararat em seu brasão."
    },
    {
        "nome": "Azerbaijão", "nome_oficial": "República do Azerbaijão",
        "iso2": "az", "iso3": "aze", "capital": "Baku",
        "pegadinhas": ["Ganja", "Sumqayit", "Mingachevir"],
        "continente": "Ásia", "subregiao": "Cáucaso",
        "lat": 40.1431, "lng": 47.5769, "area_km2": 86600, "populacao": 10200000,
        "fronteiras": ["am", "ge", "ir", "ru", "tr"],
        "fato": "Baku fica a -28 metros abaixo do nível do mar oceânico, sendo a capital nacional mais baixa da Terra; abriga mais de metade dos vulcões de lama do planeta."
    }
]

PAISES.extend(PAISES_ASIA)
print(f"Total apos Asia: {len(PAISES)}")

PAISES_AFRICA = [
    # =========================================================================
    # ÁFRICA (55)
    # =========================================================================
    {
        "nome": "Egito", "nome_oficial": "República Árabe do Egito",
        "iso2": "eg", "iso3": "egy", "capital": "Cairo",
        "pegadinhas": ["Alexandria", "Gizé", "Luxor"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 26.8206, "lng": 30.8025, "area_km2": 1002450, "populacao": 110000000,
        "fronteiras": ["il", "ly", "sd", "ps"],
        "fato": "País transcontinental que controla a Península do Sinai e o Canal de Suez; 95% de sua população habita uma estreita faixa ao longo do Rio Nilo."
    },
    {
        "nome": "África do Sul", "nome_oficial": "República da África do Sul",
        "iso2": "za", "iso3": "zaf", "capital": "Pretória",
        "pegadinhas": ["Joanesburgo", "Cidade do Cabo", "Durban"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -30.5595, "lng": 22.9375, "area_km2": 1221037, "populacao": 60600000,
        "fronteiras": ["bw", "ls", "mz", "na", "sz", "zw"],
        "fato": "Possui três capitais oficiais: Pretória (executiva), Cidade do Cabo (legislativa) e Bloemfontein (judiciária)."
    },
    {
        "nome": "Nigéria", "nome_oficial": "República Federal da Nigéria",
        "iso2": "ng", "iso3": "nga", "capital": "Abuja",
        "pegadinhas": ["Lagos", "Kano", "Ibadan"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 9.082, "lng": 8.6753, "area_km2": 923768, "populacao": 225000000,
        "fronteiras": ["bj", "cm", "td", "ne"],
        "fato": "O país mais populoso da África (sexto do mundo); transferiu sua capital em 1991 da superpovoada cidade costeira de Lagos para a planejada Abuja no centro geográfico."
    },
    {
        "nome": "Argélia", "nome_oficial": "República Argelina Democrática e Popular",
        "iso2": "dz", "iso3": "dza", "capital": "Argel",
        "pegadinhas": ["Orã", "Constantina", "Annaba"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 28.0339, "lng": 1.6596, "area_km2": 2381741, "populacao": 45000000,
        "fronteiras": ["ly", "ml", "mr", "ma", "ne", "tn", "eh"],
        "fato": "O maior país da África e de todo o mundo árabe em área territorial desde a partilha do Sudão em 2011; mais de 80% do país é coberto pelo Deserto do Saara."
    },
    {
        "nome": "Marrocos", "nome_oficial": "Reino de Marrocos",
        "iso2": "ma", "iso3": "mar", "capital": "Rabat",
        "pegadinhas": ["Casablanca", "Marraquexe", "Fez"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 31.7917, "lng": -7.0926, "area_km2": 446550, "populacao": 37500000,
        "fronteiras": ["dz", "es", "eh"],
        "fato": "Detém cerca de 70% de todas as reservas mundiais de fosfato de rocha do planeta, mineral essencial para a produção de fertilizantes agrícolas mundiais."
    },
    {
        "nome": "Etiópia", "nome_oficial": "República Democrática Federal da Etiópia",
        "iso2": "et", "iso3": "eth", "capital": "Adis Abeba",
        "pegadinhas": ["Dire Dawa", "Gondar", "Mekelle"],
        "continente": "África", "subregiao": "Chifre da África",
        "lat": 9.145, "lng": 40.4897, "area_km2": 1104300, "populacao": 126000000,
        "fronteiras": ["dj", "er", "ke", "so", "ss", "sd"],
        "fato": "O país sem litoral mais populoso do mundo; único país africano que nunca foi formalmente colonizado por europeus (derrotou a Itália na Batalha de Adwa em 1896)."
    },
    {
        "nome": "Quênia", "nome_oficial": "República do Quênia",
        "iso2": "ke", "iso3": "ken", "capital": "Nairóbi",
        "pegadinhas": ["Mombaça", "Kisumu", "Nakuru"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": -0.0236, "lng": 37.9062, "area_km2": 580367, "populacao": 55000000,
        "fronteiras": ["et", "so", "ss", "tz", "ug"],
        "fato": "Cortado pelo Vale do Rift e pela Linha do Equador; Nairóbi abriga o único parque nacional do mundo com leões e rinocerontes livres colado aos arranha-céus da capital."
    },
    {
        "nome": "Tanzânia", "nome_oficial": "República Unida da Tanzânia",
        "iso2": "tz", "iso3": "tza", "capital": "Dodoma",
        "pegadinhas": ["Dar es Salaam", "Zanzibar", "Arusha"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": -6.369, "lng": 34.8888, "area_km2": 947303, "populacao": 67000000,
        "fronteiras": ["bi", "cd", "ke", "mw", "mz", "rw", "ug", "zm"],
        "fato": "Abriga o ponto culminante da África (Monte Kilimanjaro, 5.895m); Dodoma é a capital política planejada, mas Dar es Salaam continua sendo a megalópole econômica."
    },
    {
        "nome": "República Democrática do Congo", "nome_oficial": "República Democrática do Congo",
        "iso2": "cd", "iso3": "cod", "capital": "Kinshasa",
        "pegadinhas": ["Lubumbashi", "Goma", "Kisangani"],
        "continente": "África", "subregiao": "África Central",
        "lat": -4.0383, "lng": 21.7587, "area_km2": 2344858, "populacao": 102000000,
        "fronteiras": ["ao", "bi", "cf", "cg", "rw", "ss", "tz", "ug", "zm"],
        "fato": "Detém mais de 70% das reservas globais de cobalto do planeta (crucial para baterias elétricas); Kinshasa e Brazzaville são as duas capitais mais próximas do mundo."
    },
    {
        "nome": "República do Congo", "nome_oficial": "República do Congo",
        "iso2": "cg", "iso3": "cog", "capital": "Brazzaville",
        "pegadinhas": ["Pointe-Noire", "Dolisie", "Nkayi"],
        "continente": "África", "subregiao": "África Central",
        "lat": -0.228, "lng": 15.8277, "area_km2": 342000, "populacao": 6100000,
        "fronteiras": ["ao", "cm", "cf", "cd", "ga"],
        "fato": "Sua capital Brazzaville fica diretamente em frente a Kinshasa na outra margem do Rio Congo, separadas por apenas 4 km de água."
    },
    {
        "nome": "Angola", "nome_oficial": "República de Angola",
        "iso2": "ao", "iso3": "ago", "capital": "Luanda",
        "pegadinhas": ["Benguela", "Huambo", "Lobito"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -11.2027, "lng": 17.8739, "area_km2": 1246700, "populacao": 36000000,
        "fronteiras": ["cd", "cg", "na", "zm"],
        "fato": "Possui o exclave petrolífero de Cabinda, separado do restante de Angola por uma estreita faixa litorânea de 40 km pertencente à RDC."
    },
    {
        "nome": "Gana", "nome_oficial": "República do Gana",
        "iso2": "gh", "iso3": "gha", "capital": "Acra",
        "pegadinhas": ["Kumasi", "Tamale", "Takoradi"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 7.9465, "lng": -1.0232, "area_km2": 238533, "populacao": 34000000,
        "fronteiras": ["bf", "ci", "tg"],
        "fato": "Abriga o Lago Volta, o maior reservatório artificial de água doce do mundo em área de superfície (8.502 km²), criado pela represa de Akosombo."
    },
    {
        "nome": "Costa do Marfim", "nome_oficial": "República da Costa do Marfim",
        "iso2": "ci", "iso3": "civ", "capital": "Yamoussoukro",
        "pegadinhas": ["Abidjan", "Bouaké", "San-Pédro"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 7.54, "lng": -5.5471, "area_km2": 322463, "populacao": 29000000,
        "fronteiras": ["bf", "gh", "gn", "lr", "ml"],
        "fato": "O maior produtor e exportador mundial de cacau; sua capital Yamoussoukro abriga a Basílica de Nossa Senhora da Paz, a maior igreja cristã do mundo."
    },
    {
        "nome": "Senegal", "nome_oficial": "República do Senegal",
        "iso2": "sn", "iso3": "sen", "capital": "Dakar",
        "pegadinhas": ["Touba", "Thiès", "Saint-Louis"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 14.4974, "lng": -14.4524, "area_km2": 196722, "populacao": 17700000,
        "fronteiras": ["gm", "gn", "gw", "ml", "mr"],
        "fato": "A península de Cabo Verde em Dakar é o ponto mais ocidental de todo o continente africano; envolve a Gâmbia em quase toda a sua fronteira terrestre."
    },
    {
        "nome": "Gâmbia", "nome_oficial": "República da Gâmbia",
        "iso2": "gm", "iso3": "gmb", "capital": "Banjul",
        "pegadinhas": ["Serekunda", "Brikama", "Bakau"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 13.4432, "lng": -15.3101, "area_km2": 11295, "populacao": 2700000,
        "fronteiras": ["sn"],
        "fato": "O menor país da África continental; seu território segue estritamente as margens do Rio Gâmbia, com largura média de apenas 25 a 50 km cercada pelo Senegal."
    },
    {
        "nome": "Mali", "nome_oficial": "República do Mali",
        "iso2": "ml", "iso3": "mli", "capital": "Bamako",
        "pegadinhas": ["Tombuctu", "Sikasso", "Mopti"],
        "continente": "África", "subregiao": "Sahel",
        "lat": 17.5707, "lng": -3.9962, "area_km2": 1240192, "populacao": 23000000,
        "fronteiras": ["dz", "bf", "gn", "ci", "mr", "ne", "sn"],
        "fato": "Tombuctu foi o maior centro comercial e acadêmico islâmico da Idade Média; o imperador Mansa Musa é considerado a pessoa mais rica de toda a história humana."
    },
    {
        "nome": "Burquina Faso", "nome_oficial": "Burquina Faso",
        "iso2": "bf", "iso3": "bfa", "capital": "Uagadugu",
        "pegadinhas": ["Bobo-Dioulasso", "Koudougou", "Banfora"],
        "continente": "África", "subregiao": "Sahel",
        "lat": 12.2383, "lng": -1.5616, "area_km2": 274200, "populacao": 22500000,
        "fronteiras": ["bj", "ci", "gh", "ml", "ne", "tg"],
        "fato": "Antigo Alto Volta; Thomas Sankara mudou seu nome em 1984 para 'Terra dos Homens Íntegros' unindo palavras dos idiomas nativos mossi e diúla."
    },
    {
        "nome": "Níger", "nome_oficial": "República do Níger",
        "iso2": "ne", "iso3": "ner", "capital": "Niamei",
        "pegadinhas": ["Zinder", "Maradi", "Agadez"],
        "continente": "África", "subregiao": "Sahel",
        "lat": 17.6078, "lng": 8.0817, "area_km2": 1267000, "populacao": 26000000,
        "fronteiras": ["dz", "bj", "bf", "td", "ly", "ml", "ng"],
        "fato": "Mais de 80% de seu território é deserto absoluto; abriga as minas de urânio de Arlit no Deserto de Aïr, cruciais para reatores nucleares da Europa."
    },
    {
        "nome": "Chade", "nome_oficial": "República do Chade",
        "iso2": "td", "iso3": "tcd", "capital": "N'Djamena",
        "pegadinhas": ["Moundou", "Sarh", "Abéché"],
        "continente": "África", "subregiao": "Sahel",
        "lat": 15.4542, "lng": 18.7322, "area_km2": 1284000, "populacao": 18000000,
        "fronteiras": ["cm", "cf", "ly", "ne", "ng", "sd"],
        "fato": "Conhecido como o 'Coração Morto da África' por seu isolamento geográfico; o Lago Chade encolheu mais de 90% desde a década de 1960."
    },
    {
        "nome": "Sudão", "nome_oficial": "República do Sudão",
        "iso2": "sd", "iso3": "sdn", "capital": "Cartum",
        "pegadinhas": ["Omdurman", "Port Sudan", "Kassala"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 12.8628, "lng": 30.2176, "area_km2": 1861484, "populacao": 48000000,
        "fronteiras": ["cf", "td", "eg", "er", "et", "ly", "ss"],
        "fato": "Possui mais pirâmides do que o Egito (mais de 250 pirâmides núbias erguidas pelos reis de Cuxe em Méroe); Cartum fica no encontro do Nilo Branco e Nilo Azul."
    },
    {
        "nome": "Sudão do Sul", "nome_oficial": "República do Sudão do Sul",
        "iso2": "ss", "iso3": "ssd", "capital": "Juba",
        "pegadinhas": ["Malakal", "Wau", "Yei"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": 6.877, "lng": 31.307, "area_km2": 644329, "populacao": 11000000,
        "fronteiras": ["cf", "cd", "et", "ke", "sd", "ug"],
        "fato": "O país mais jovem do planeta Terra reconhecido pela ONU, tornando-se independente do Sudão em 9 de julho de 2011 após referendo popular."
    },
    {
        "nome": "Uganda", "nome_oficial": "República do Uganda",
        "iso2": "ug", "iso3": "uga", "capital": "Campala",
        "pegadinhas": ["Entebbe", "Jinja", "Gulu"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": 1.3733, "lng": 32.2903, "area_km2": 241551, "populacao": 48000000,
        "fronteiras": ["cd", "ke", "rw", "ss", "tz"],
        "fato": "Winston Churchill a apelidou de 'Pérola da África'; Jinja na margem do Lago Vitória é o ponto onde o Nilo Branco nasce e inicia sua jornada de 6.650 km."
    },
    {
        "nome": "Ruanda", "nome_oficial": "República do Ruanda",
        "iso2": "rw", "iso3": "rwa", "capital": "Kigali",
        "pegadinhas": ["Gisenyi", "Butare", "Ruhengeri"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": -1.9403, "lng": 29.8739, "area_km2": 26338, "populacao": 14000000,
        "fronteiras": ["bi", "cd", "tz", "ug"],
        "fato": "Conhecida como o 'País das Mil Colinas'; baniu sacolas plásticas em 2008 e tem a maior proporção de mulheres parlamentares do mundo (mais de 60%)."
    },
    {
        "nome": "Burundi", "nome_oficial": "República do Burundi",
        "iso2": "bi", "iso3": "bdi", "capital": "Gitega",
        "pegadinhas": ["Bujumbura", "Ngozi", "Rumonge"],
        "continente": "África", "subregiao": "África Oriental",
        "lat": -3.3731, "lng": 29.9189, "area_km2": 27834, "populacao": 13000000,
        "fronteiras": ["cd", "rw", "tz"],
        "fato": "Mudou sua capital política em 2019 de Bujumbura (na margem do Lago Tanganica) para a cidade montanhosa de Gitega no centro do país."
    },
    {
        "nome": "Somália", "nome_oficial": "República Federal da Somália",
        "iso2": "so", "iso3": "som", "capital": "Mogadíscio",
        "pegadinhas": ["Hargeisa", "Kismayo", "Bosaso"],
        "continente": "África", "subregiao": "Chifre da África",
        "lat": 5.1521, "lng": 46.1996, "area_km2": 637657, "populacao": 18000000,
        "fronteiras": ["dj", "et", "ke"],
        "fato": "Possui a linha costeira mais longa de toda a África continental (3.333 km); a região norte da Somalilândia opera de facto como estado independente desde 1991."
    },
    {
        "nome": "Djibuti", "nome_oficial": "República do Djibuti",
        "iso2": "dj", "iso3": "dji", "capital": "Djibuti",
        "pegadinhas": ["Ali Sabieh", "Tadjoura", "Obock"],
        "continente": "África", "subregiao": "Chifre da África",
        "lat": 11.8251, "lng": 42.5903, "area_km2": 23200, "populacao": 1100000,
        "fronteiras": ["er", "et", "so"],
        "fato": "Posto militar mais disputado do globo: abriga bases permanentes dos EUA, China, França e Japão controlando a entrada do Mar Vermelho."
    },
    {
        "nome": "Eritreia", "nome_oficial": "Estado da Eritreia",
        "iso2": "er", "iso3": "eri", "capital": "Asmara",
        "pegadinhas": ["Massawa", "Keren", "Assab"],
        "continente": "África", "subregiao": "Chifre da África",
        "lat": 15.1794, "lng": 39.7823, "area_km2": 117600, "populacao": 3700000,
        "fronteiras": ["dj", "et", "sd"],
        "fato": "Sua independência em 1993 deixou a vizinha Etiópia totalmente sem saída para o mar; Asmara é famosa por sua preservada arquitetura modernista e Art Déco italiana."
    },
    {
        "nome": "Madagascar", "nome_oficial": "República de Madagascar",
        "iso2": "mg", "iso3": "mdg", "capital": "Antananarivo",
        "pegadinhas": ["Toamasina", "Antsirabe", "Mahajanga"],
        "continente": "África", "subregiao": "Oceano Índico",
        "lat": -18.7669, "lng": 46.8691, "area_km2": 587041, "populacao": 30000000,
        "fronteiras": [],
        "fato": "A quarta maior ilha do planeta; isolada há 88 milhões de anos, cerca de 90% de todas as espécies de plantas e animais existentes na ilha são endêmicas (não existem em nenhum outro lugar)."
    },
    {
        "nome": "Moçambique", "nome_oficial": "República de Moçambique",
        "iso2": "mz", "iso3": "moz", "capital": "Maputo",
        "pegadinhas": ["Matola", "Beira", "Nampula"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -18.6657, "lng": 35.5296, "area_km2": 801590, "populacao": 33000000,
        "fronteiras": ["mw", "za", "sz", "tz", "zm", "zw"],
        "fato": "Único país do mundo cuja bandeira nacional traz desenhado um fuzil moderno com baioneta (o lendário fuzil AK-47 cruzado com uma enxada e um livro)."
    },
    {
        "nome": "Zâmbia", "nome_oficial": "República da Zâmbia",
        "iso2": "zm", "iso3": "zmb", "capital": "Lusaka",
        "pegadinhas": ["Kitwe", "Ndola", "Livingstone"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -13.1339, "lng": 27.8493, "area_km2": 752618, "populacao": 20000000,
        "fronteiras": ["ao", "bw", "cd", "mw", "mz", "na", "tz", "zw"],
        "fato": "Compartilha com o Zimbábue as Cataratas de Vitória (Mosi-oa-Tunya, 'a fumaça que troveja'); quase toca a Namíbia e Botsuana em uma quase quádrupla fronteira."
    },
    {
        "nome": "Zimbábue", "nome_oficial": "República do Zimbábue",
        "iso2": "zw", "iso3": "zwe", "capital": "Harare",
        "pegadinhas": ["Bulawayo", "Chitungwiza", "Mutare"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -19.0154, "lng": 29.1549, "area_km2": 390757, "populacao": 16000000,
        "fronteiras": ["bw", "mz", "za", "zm"],
        "fato": "Seu nome vem de 'Dzimba-dza-mabwe' ('grandes casas de pedra'), em homenagem às monumentais ruínas do Grande Zimbábue do século XI."
    },
    {
        "nome": "Namíbia", "nome_oficial": "República da Namíbia",
        "iso2": "na", "iso3": "nam", "capital": "Windhoek",
        "pegadinhas": ["Walvis Bay", "Swakopmund", "Rundu"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -22.9576, "lng": 18.4904, "area_km2": 825615, "populacao": 2600000,
        "fronteiras": ["ao", "bw", "za", "zm"],
        "fato": "Possui a 'Faixa de Caprivi', uma curiosa língua de terra de 450 km projetada no século XIX pelo Império Alemão para tentar alcançar o Rio Zambeze."
    },
    {
        "nome": "Botsuana", "nome_oficial": "República do Botsuana",
        "iso2": "bw", "iso3": "bwa", "capital": "Gaborone",
        "pegadinhas": ["Francistown", "Molepolole", "Maun"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -22.3285, "lng": 24.6849, "area_km2": 581730, "populacao": 2600000,
        "fronteiras": ["na", "za", "zm", "zw"],
        "fato": "Abriga o Delta do Okavango, um dos maiores deltas interiores do mundo, cujas águas nunca chegam ao mar e evaporam no Deserto do Kalahari."
    },
    {
        "nome": "Lesoto", "nome_oficial": "Reino do Lesoto",
        "iso2": "ls", "iso3": "lso", "capital": "Maseru",
        "pegadinhas": ["Teyateyaneng", "Mafeteng", "Hlotse"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -29.6099, "lng": 28.2336, "area_km2": 30355, "populacao": 2300000,
        "fronteiras": ["za"],
        "fato": "O único país independente do mundo cujo território inteiro fica acima de 1.000 metros de altitude (seu ponto mais baixo fica a 1.400m); é totalmente enclavado pela África do Sul."
    },
    {
        "nome": "Essuatíni", "nome_oficial": "Reino de Essuatíni",
        "iso2": "sz", "iso3": "swz", "capital": "Mbabane",
        "pegadinhas": ["Manzini", "Lobamba", "Big Bend"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -26.5225, "lng": 31.4659, "area_km2": 17364, "populacao": 1200000,
        "fronteiras": ["mz", "za"],
        "fato": "A última monarquia absolutista remanescente na África; mudou de nome em 2018 (antiga Suazilândia) para evitar confusão internacional com a Suíça."
    },
    {
        "nome": "Líbia", "nome_oficial": "Estado da Líbia",
        "iso2": "ly", "iso3": "lby", "capital": "Trípoli",
        "pegadinhas": ["Benghazi", "Misrata", "Tobruk"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 26.3351, "lng": 17.2283, "area_km2": 1759540, "populacao": 6900000,
        "fronteiras": ["dz", "td", "eg", "ne", "sd", "tn"],
        "fato": "Construiu o 'Grande Rio Artificial' nos anos 1980 e 1990, a maior rede mundial de tubulações subterrâneas que extrai água fóssil do Aquífero de Arenito Núbio no Saara."
    },
    {
        "nome": "Tunísia", "nome_oficial": "República Tunisina",
        "iso2": "tn", "iso3": "tun", "capital": "Túnis",
        "pegadinhas": ["Sfax", "Sousse", "Kairouan"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 33.8869, "lng": 9.5375, "area_km2": 163610, "populacao": 12400000,
        "fronteiras": ["dz", "ly"],
        "fato": "O Cabo Angela na Tunísia é o ponto mais setentrional de todo o continente africano; berço da histórica civilização de Cartago que rivalizou com Roma."
    },
    {
        "nome": "Mauritânia", "nome_oficial": "República Islâmica da Mauritânia",
        "iso2": "mr", "iso3": "mrt", "capital": "Nouakchott",
        "pegadinhas": ["Nouadhibou", "Kiffa", "Atar"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 21.0079, "lng": -10.9408, "area_km2": 1030700, "populacao": 4900000,
        "fronteiras": ["dz", "ml", "sn", "eh"],
        "fato": "Abriga a 'Estrutura de Richat' (o Olho do Saara), uma formação circular geológica perfeita de 40 km de diâmetro visível do espaço sideral."
    },
    {
        "nome": "Camarões", "nome_oficial": "República dos Camarões",
        "iso2": "cm", "iso3": "cmr", "capital": "Iaundé",
        "pegadinhas": ["Douala", "Garoua", "Bamenda"],
        "continente": "África", "subregiao": "África Central",
        "lat": 7.3697, "lng": 12.3547, "area_km2": 475442, "populacao": 28000000,
        "fronteiras": ["cf", "td", "cg", "gq", "ga", "ng"],
        "fato": "Conhecido como a 'África em Miniatura' por reunir todos os climas do continente (costa, savana, deserto, floresta tropical e montanhas vulcânicas)."
    },
    {
        "nome": "Gabão", "nome_oficial": "República Gabonesa",
        "iso2": "ga", "iso3": "gab", "capital": "Libreville",
        "pegadinhas": ["Port-Gentil", "Franceville", "Oyem"],
        "continente": "África", "subregiao": "África Central",
        "lat": -0.8037, "lng": 11.6094, "area_km2": 267668, "populacao": 2400000,
        "fronteiras": ["cm", "cg", "gq"],
        "fato": "Mais de 85% do território é coberto por floresta tropical equatorial virgem; abriga Oklo, o único reator de fissão nuclear natural fóssil conhecido da Terra."
    },
    {
        "nome": "Guiné Equatorial", "nome_oficial": "República da Guiné Equatorial",
        "iso2": "gq", "iso3": "gnq", "capital": "Malabo",
        "pegadinhas": ["Bata", "Oyala", "Ebebiyín"],
        "continente": "África", "subregiao": "África Central",
        "lat": 1.6508, "lng": 10.2679, "area_km2": 28051, "populacao": 1700000,
        "fronteiras": ["cm", "ga"],
        "fato": "Único país soberano da África que tem o espanhol como idioma oficial; sua capital Malabo fica na Ilha de Bioko, a 160 km da costa continental do país."
    },
    {
        "nome": "Cabo Verde", "nome_oficial": "República de Cabo Verde",
        "iso2": "cv", "iso3": "cpv", "capital": "Praia",
        "pegadinhas": ["Mindelo", "Espargos", "Assomada"],
        "continente": "África", "subregiao": "Oceano Atlântico",
        "lat": 16.5388, "lng": -23.0418, "area_km2": 4033, "populacao": 590000,
        "fronteiras": [],
        "fato": "Arquipélago vulcânico lusófono a 570 km da costa oeste africana; não possuía habitantes nativos até ser colonizado por navegadores portugueses em 1462."
    },
    {
        "nome": "São Tomé e Príncipe", "nome_oficial": "República Democrática de São Tomé e Príncipe",
        "iso2": "st", "iso3": "stp", "capital": "São Tomé",
        "pegadinhas": ["Santo António", "Neves", "Santana"],
        "continente": "África", "subregiao": "Golfo da Guiné",
        "lat": 0.1864, "lng": 6.6131, "area_km2": 964, "populacao": 230000,
        "fronteiras": [],
        "fato": "O segundo menor país soberano da África; a ilhota das Rolas fica exatamente em cima da Linha do Equador e do Meridiano de Greenwich no Golfo da Guiné."
    },
    {
        "nome": "Seicheles", "nome_oficial": "República das Seicheles",
        "iso2": "sc", "iso3": "syc", "capital": "Victoria",
        "pegadinhas": ["Anse Boileau", "Beau Vallon", "Grand Anse"],
        "continente": "África", "subregiao": "Oceano Índico",
        "lat": -4.6796, "lng": 55.492, "area_km2": 459, "populacao": 100000,
        "fronteiras": [],
        "fato": "O menor país soberano de toda a África em população e área terrestre; abriga as únicas ilhas graníticas oceânicas do planeta (fragmentos de Gondwana)."
    },
    {
        "nome": "Maurício", "nome_oficial": "República de Maurício",
        "iso2": "mu", "iso3": "mus", "capital": "Port Louis",
        "pegadinhas": ["Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe"],
        "continente": "África", "subregiao": "Oceano Índico",
        "lat": -20.3484, "lng": 57.5522, "area_km2": 2040, "populacao": 1300000,
        "fronteiras": [],
        "fato": "Lar exclusivo do lendário Pássaro Dodô até sua extinção no século XVII; possui a 'cachoeira submarina', uma ilusão de ótica criada pelo fluxo de sedimentos marinhos."
    },
    {
        "nome": "Comores", "nome_oficial": "União das Comores",
        "iso2": "km", "iso3": "com", "capital": "Moroni",
        "pegadinhas": ["Mutsamudu", "Fomboni", "Domoni"],
        "continente": "África", "subregiao": "Canal de Moçambique",
        "lat": -11.875, "lng": 43.8722, "area_km2": 1862, "populacao": 850000,
        "fronteiras": [],
        "fato": "Arquipélago vulcânico apelidado de 'Ilhas dos Perfumes' por ser o maior produtor mundial de óleo essencial de Ylang-Ylang; a vizinha Mayotte optou por continuar francesa."
    },
    {
        "nome": "República Centro-Africana", "nome_oficial": "República Centro-Africana",
        "iso2": "cf", "iso3": "caf", "capital": "Bangui",
        "pegadinhas": ["Bimbo", "Berbérati", "Carnot"],
        "continente": "África", "subregiao": "África Central",
        "lat": 6.6111, "lng": 20.9394, "area_km2": 622984, "populacao": 5500000,
        "fronteiras": ["cm", "td", "cd", "cg", "ss", "sd"],
        "fato": "Situa-se no coração geográfico exato do continente africano; abriga a Anomalia Magnética de Bangui, uma das maiores anomalias da crosta terrestre."
    },
    {
        "nome": "Guiné", "nome_oficial": "República da Guiné",
        "iso2": "gn", "iso3": "gin", "capital": "Conacri",
        "pegadinhas": ["Nzérékoré", "Kankan", "Kindia"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 9.9456, "lng": -9.6966, "area_km2": 245857, "populacao": 14000000,
        "fronteiras": ["ci", "gw", "lr", "ml", "sn", "sl"],
        "fato": "Detém cerca de um terço de todas as reservas mundiais de bauxita (minério do alumínio); o Planalto de Fouta Djallon dá origem aos rios Níger, Senegal e Gâmbia."
    },
    {
        "nome": "Guiné-Bissau", "nome_oficial": "República da Guiné-Bissau",
        "iso2": "gw", "iso3": "gnb", "capital": "Bissau",
        "pegadinhas": ["Bafatá", "Gabú", "Canchungo"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 11.8037, "lng": -15.1804, "area_km2": 36125, "populacao": 2100000,
        "fronteiras": ["gn", "sn"],
        "fato": "Abriga o Arquipélago dos Bijagós, conjunto de 88 ilhas e ilhotas com rica biodiversidade marinha e uma sociedade tradicional matriarcal."
    },
    {
        "nome": "Libéria", "nome_oficial": "República da Libéria",
        "iso2": "lr", "iso3": "lbr", "capital": "Monróvia",
        "pegadinhas": ["Gbarnga", "Buchanan", "Kakata"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 6.4281, "lng": -9.4295, "area_km2": 111369, "populacao": 5400000,
        "fronteiras": ["ci", "gn", "sl"],
        "fato": "A república mais antiga da África (fundada em 1847 por ex-escravizados afro-americanos libertados pela American Colonization Society); Monróvia homenageia James Monroe."
    },
    {
        "nome": "Serra Leoa", "nome_oficial": "República da Serra Leoa",
        "iso2": "sl", "iso3": "sle", "capital": "Freetown",
        "pegadinhas": ["Bo", "Kenema", "Koidu"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 8.4606, "lng": -11.7799, "area_km2": 71740, "populacao": 8800000,
        "fronteiras": ["gn", "lr"],
        "fato": "Freetown possui o maior porto natural de águas profundas de toda a costa do continente africano."
    },
    {
        "nome": "Togo", "nome_oficial": "República Togolesa",
        "iso2": "tg", "iso3": "tgo", "capital": "Lomé",
        "pegadinhas": ["Sokodé", "Kara", "Kpalimé"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 8.6195, "lng": 0.8248, "area_km2": 56785, "populacao": 9000000,
        "fronteiras": ["bj", "bf", "gh"],
        "fato": "Uma das nações mais estreitas da África (apenas cerca de 50 a 140 km de largura de leste a oeste); Lomé fica colada na fronteira terrestre com Gana."
    },
    {
        "nome": "Benim", "nome_oficial": "República do Benim",
        "iso2": "bj", "iso3": "ben", "capital": "Porto-Novo",
        "pegadinhas": ["Cotonu", "Parakou", "Abomey"],
        "continente": "África", "subregiao": "África Ocidental",
        "lat": 9.3077, "lng": 2.3158, "area_km2": 114763, "populacao": 13700000,
        "fronteiras": ["bf", "ne", "ng", "tg"],
        "fato": "Berço histórico do Vodu (religião oficial reconhecida); Porto-Novo é a capital constitucional, mas toda a sede governamental e econômica opera na vizinha Cotonu."
    },
    {
        "nome": "Malaui", "nome_oficial": "República do Malaui",
        "iso2": "mw", "iso3": "mwi", "capital": "Lilongwe",
        "pegadinhas": ["Blantyre", "Mzuzu", "Zomba"],
        "continente": "África", "subregiao": "África Austral",
        "lat": -13.2543, "lng": 34.3015, "area_km2": 118484, "populacao": 20500000,
        "fronteiras": ["mz", "tz", "zm"],
        "fato": "O Lago Malaui ocupa mais de 20% da área do país e abriga mais espécies de peixes ciclídeos endêmicos do que qualquer outro lago do planeta."
    },
    {
        "nome": "Saara Ocidental", "nome_oficial": "República Árabe Saaraui Democrática",
        "iso2": "eh", "iso3": "esh", "capital": "El Aaiún",
        "pegadinhas": ["Dakhla", "Smara", "Tifariti"],
        "continente": "África", "subregiao": "Norte da África",
        "lat": 24.2155, "lng": -12.8858, "area_km2": 266000, "populacao": 600000,
        "fronteiras": ["dz", "mr", "ma"],
        "fato": "Território disputado cortado pelo 'Muro do Saara' (Berm), uma barreira de areia militarizada com 2.700 km construída pelo Marrocos cercada de minas terrestres."
    }
]

PAISES.extend(PAISES_AFRICA)
print(f"Total apos Africa: {len(PAISES)}")

PAISES_OCEANIA = [
    # =========================================================================
    # OCEANIA (14)
    # =========================================================================
    {
        "nome": "Austrália", "nome_oficial": "Comunidade da Austrália",
        "iso2": "au", "iso3": "aus", "capital": "Camberra",
        "pegadinhas": ["Sydney", "Melbourne", "Brisbane"],
        "continente": "Oceania", "subregiao": "Australásia",
        "lat": -25.2744, "lng": 133.7751, "area_km2": 7692024, "populacao": 26500000,
        "fronteiras": [],
        "fato": "Camberra foi escolhida como capital planejada de compromisso em 1908 para encerrar a feroz disputa de rivalidade entre Sydney e Melbourne."
    },
    {
        "nome": "Nova Zelândia", "nome_oficial": "Nova Zelândia",
        "iso2": "nz", "iso3": "nzl", "capital": "Wellington",
        "pegadinhas": ["Auckland", "Christchurch", "Queenstown"],
        "continente": "Oceania", "subregiao": "Polinésia",
        "lat": -40.9006, "lng": 174.886, "area_km2": 268021, "populacao": 5200000,
        "fronteiras": [],
        "fato": "Wellington é a capital nacional mais ao sul do planeta Terra (latitude 41° 17' Sul); o país é a porção visível do continente submerso Zealandia."
    },
    {
        "nome": "Papua-Nova Guiné", "nome_oficial": "Estado Independente da Papua-Nova Guiné",
        "iso2": "pg", "iso3": "png", "capital": "Port Moresby",
        "pegadinhas": ["Lae", "Mount Hagen", "Madang"],
        "continente": "Oceania", "subregiao": "Melanésia",
        "lat": -6.314993, "lng": 143.95555, "area_km2": 462840, "populacao": 10000000,
        "fronteiras": ["id"],
        "fato": "O país com maior diversidade linguística do mundo: abriga mais de 840 idiomas vivos distintos falados em vales montanhosos isolados."
    },
    {
        "nome": "Fiji", "nome_oficial": "República de Fiji",
        "iso2": "fj", "iso3": "fji", "capital": "Suva",
        "pegadinhas": ["Nadi", "Lautoka", "Labasa"],
        "continente": "Oceania", "subregiao": "Melanésia",
        "lat": -17.7134, "lng": 178.065, "area_km2": 18274, "populacao": 930000,
        "fronteiras": [],
        "fato": "O Meridiano 180° (antimeridiano) corta a ilha fijiana de Taveuni; a Linha Internacional de Mudança de Data foi desviada para contornar todo o arquipélago."
    },
    {
        "nome": "Ilhas Salomão", "nome_oficial": "Ilhas Salomão",
        "iso2": "sb", "iso3": "slb", "capital": "Honiara",
        "pegadinhas": ["Gizo", "Auki", "Noro"],
        "continente": "Oceania", "subregiao": "Melanésia",
        "lat": -9.6457, "lng": 160.1562, "area_km2": 28896, "populacao": 730000,
        "fronteiras": [],
        "fato": "A ilha principal de Guadalcanal foi o cenário da sangrenta batalha decisiva da Segunda Guerra Mundial que interrompeu a expansão naval japonesa no Pacífico."
    },
    {
        "nome": "Vanuatu", "nome_oficial": "República de Vanuatu",
        "iso2": "vu", "iso3": "vut", "capital": "Port Vila",
        "pegadinhas": ["Luganville", "Norsup", "Isangel"],
        "continente": "Oceania", "subregiao": "Melanésia",
        "lat": -15.3767, "lng": 166.9592, "area_km2": 12189, "populacao": 320000,
        "fronteiras": [],
        "fato": "Berço do bungee jump moderno (o ritual do 'Naghol' na Ilha de Pentecostes, onde jovens saltam de torres de madeira amarrados por cipós nos tornozelos)."
    },
    {
        "nome": "Samoa", "nome_oficial": "Estado Independente de Samoa",
        "iso2": "ws", "iso3": "wsm", "capital": "Apia",
        "pegadinhas": ["Salelologa", "Asau", "Mulifanua"],
        "continente": "Oceania", "subregiao": "Polinésia",
        "lat": -13.759, "lng": -172.1046, "area_km2": 2842, "populacao": 220000,
        "fronteiras": [],
        "fato": "Em 2011, saltou um dia inteiro no calendário (pulou o dia 30 de dezembro) ao mudar para o lado oeste da Linha de Data para se alinhar aos mercados de Austrália e Nova Zelândia."
    },
    {
        "nome": "Tonga", "nome_oficial": "Reino de Tonga",
        "iso2": "to", "iso3": "ton", "capital": "Nuku'alofa",
        "pegadinhas": ["Neiafu", "Pangai", "Haveluloto"],
        "continente": "Oceania", "subregiao": "Polinésia",
        "lat": -21.1789, "lng": -175.1982, "area_km2": 747, "populacao": 105000,
        "fronteiras": [],
        "fato": "A única monarquia indígena soberana do Pacífico que nunca perdeu sua soberania para potências coloniais; em 2022 o vulcão Hunga Tonga causou a maior explosão atmosférica moderna."
    },
    {
        "nome": "Micronésia", "nome_oficial": "Estados Federados da Micronésia",
        "iso2": "fm", "iso3": "fsm", "capital": "Palikir",
        "pegadinhas": ["Kolonia", "Weno", "Tofol"],
        "continente": "Oceania", "subregiao": "Micronésia",
        "lat": 7.4256, "lng": 150.5508, "area_km2": 702, "populacao": 115000,
        "fronteiras": [],
        "fato": "Abriga na ilha de Pohnpei as ruínas megalíticas de Nan Madol, a lendária 'Veneza do Pacífico', erguida sobre mais de 90 ilhotas artificiais de basalto no oceano."
    },
    {
        "nome": "Palau", "nome_oficial": "República de Palau",
        "iso2": "pw", "iso3": "plw", "capital": "Ngerulmud",
        "pegadinhas": ["Koror", "Airai", "Melekeok"],
        "continente": "Oceania", "subregiao": "Micronésia",
        "lat": 7.515, "lng": 134.5825, "area_km2": 459, "populacao": 18000,
        "fronteiras": [],
        "fato": "Ngerulmud é a capital nacional menos populosa do mundo (com cerca de 300 habitantes em seu complexo governamental de capitólio)."
    },
    {
        "nome": "Ilhas Marshall", "nome_oficial": "República das Ilhas Marshall",
        "iso2": "mh", "iso3": "mhl", "capital": "Majuro",
        "pegadinhas": ["Ebeye", "Kwajalein", "Jaluit"],
        "continente": "Oceania", "subregiao": "Micronésia",
        "lat": 7.1315, "lng": 171.1845, "area_km2": 181, "populacao": 42000,
        "fronteiras": [],
        "fato": "O Atol de Kwajalein possui a maior lagoa interior de atol do mundo (área de 2.174 km² cercada por 97 ilhotas), operada como base de testes de mísseis balísticos dos EUA."
    },
    {
        "nome": "Kiribati", "nome_oficial": "República de Kiribati",
        "iso2": "ki", "iso3": "kir", "capital": "Tarauá do Sul",
        "pegadinhas": ["Betio", "Bikenibeu", "Kiritimati"],
        "continente": "Oceania", "subregiao": "Micronésia",
        "lat": -3.3704, "lng": -168.734, "area_km2": 811, "populacao": 130000,
        "fronteiras": [],
        "fato": "O único país do planeta Terra cujas ilhas se espalham simultaneamente pelos quatro hemisférios da Terra (Norte, Sul, Oriental e Ocidental)."
    },
    {
        "nome": "Tuvalu", "nome_oficial": "Tuvalu",
        "iso2": "tv", "iso3": "tuv", "capital": "Funafuti",
        "pegadinhas": ["Vaiaku", "Nanumea", "Niutao"],
        "continente": "Oceania", "subregiao": "Polinésia",
        "lat": -7.1095, "lng": 177.6493, "area_km2": 26, "populacao": 11200,
        "fronteiras": [],
        "fato": "O quarto menor país do mundo; fatura milhões de dólares anualmente alugando seu cobiçado domínio de internet nacional de primeiro nível (.tv) para plataformas de vídeo."
    },
    {
        "nome": "Nauru", "nome_oficial": "República de Nauru",
        "iso2": "nr", "iso3": "nru", "capital": "Yaren (de facto)",
        "pegadinhas": ["Denigomodu", "Aiwo", "Boe"],
        "continente": "Oceania", "subregiao": "Micronésia",
        "lat": -0.5228, "lng": 166.9315, "area_km2": 21, "populacao": 12500,
        "fronteiras": [],
        "fato": "A menor república independente do planeta (apenas 21 km²); é o único país soberano do mundo que não possui nenhuma capital oficial de jure (Yaren é o distrito sede)."
    }
]

PAISES.extend(PAISES_OCEANIA)
print(f"Total final de paises compilados: {len(PAISES)}")

# Salva arquivo dados_paises.py
with open("D:/Dev/vitale-geo/scripts/dados_paises.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\n")
    f.write('"""BASE MESTRE DE 197 PAÍSES DO MUNDO — VITALEGEO"""\n\n')
    f.write("PAISES = " + json.dumps(PAISES, ensure_ascii=False, indent=4) + "\n")

print("Arquivo D:/Dev/vitale-geo/scripts/dados_paises.py gerado com sucesso!")
