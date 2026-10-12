# -*- coding: utf-8 -*-
"""
EXPANSOR DO BANCO DE DADOS DE LOCAIS ESTRATÉGICOS (CEREBROGEO)
Expande LOCAIS de 105 para 210+ marcos mundiais de elite para o jogo "Onde Fica no Mapa?".
"""

import json
from dados_locais import LOCAIS

NOVOS_LOCAIS = [
    # -------------------------------------------------------------------------
    # CAPITAIS SINGULARES & CIDADES PLANEJADAS
    # -------------------------------------------------------------------------
    {
        "nome": "Camberra",
        "categoria": "Capital Planejada de Compromisso",
        "lat": -35.2809,
        "lng": 149.1300,
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
        "nome": "Naypyidaw",
        "categoria": "Capital Secreta na Floresta",
        "lat": 19.7633,
        "lng": 96.0785,
        "dica": "Capital isolada de Mianmar inaugurada em 2005 pela junta militar com avenidas desertas de até 20 faixas.",
        "fato": "Quatro vezes maior que Londres em extensão territorial, foi erguida em sigilo total na selva por razões de segurança e controle interno."
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
        "lat": -6.1630,
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
        "lat": 47.1410,
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

    # -------------------------------------------------------------------------
    # CHOKEPOINTS, CANAIS & ESTREITOS ESTRATÉGICOS
    # -------------------------------------------------------------------------
    {
        "nome": "Estreito de Bering",
        "categoria": "Fronteira Marítima Ásia-América",
        "lat": 65.5000,
        "lng": -168.0000,
        "dica": "Braço de mar de 82 km que separa a Península de Chukotka (Rússia) da Península de Seward (Alasca, EUA).",
        "fato": "Durante a última era glacial formou a Ponte Terrestre de Beringia, por onde os primeiros ancestrais humanos migraram para povoar as Américas."
    },
    {
        "nome": "Estreito de Magalhães",
        "categoria": "Passagem Austral dos Oceanos",
        "lat": -53.5000,
        "lng": -70.5000,
        "dica": "Passagem navegável no extremo sul do Chile ligando o Oceano Atlântico ao Oceano Pacífico contornando a Terra do Fogo.",
        "fato": "Navegado em 1520 pelo explorador Fernão de Magalhães na primeira circum-navegação da Terra; rota muito mais protegida que a tempestuosa Passagem de Drake."
    },
    {
        "nome": "Canal de Beagle",
        "categoria": "Estreito da Terra do Fogo",
        "lat": -54.8500,
        "lng": -68.3000,
        "dica": "Canal marítimo no extremo sul que separa a Ilha Grande da Terra do Fogo das ilhas chilenas ao sul.",
        "fato": "Recebeu o nome do navio HMS Beagle de Charles Darwin em 1830; foi o epicentro do Conflito de Beagle entre Argentina e Chile que quase gerou guerra em 1978."
    },
    {
        "nome": "Estreito de Cook",
        "categoria": "Divisor da Nova Zelândia",
        "lat": -41.2300,
        "lng": 174.5000,
        "dica": "Estreito tempestuoso de 22 km que separa a Ilha Norte da Ilha Sul da Nova Zelândia conectando o Mar da Tasmânia ao Pacífico.",
        "fato": "Notório por correntes marítimas violentas em formato de funil; é atravessado diariamente por balsas inter-ilhas conectando Wellington a Picton."
    },
    {
        "nome": "Estreito de Torres",
        "categoria": "Gargalo Austrália-Nova Guiné",
        "lat": -10.2500,
        "lng": 142.1500,
        "dica": "Estreito raso e perigoso com recifes de coral que separa o norte da Austrália do sul da Papua-Nova Guiné.",
        "fato": "Conecta o Mar de Coral ao Mar de Arafura; é povoado pelos nativos do Estreito de Torres, etnia indígena distinta dos aborígenes da Austrália continental."
    },
    {
        "nome": "Estreito de Bass",
        "categoria": "Canal da Tasmânia",
        "lat": -39.9000,
        "lng": 146.0000,
        "dica": "Estreito que separa a ilha australiana da Tasmânia do estado de Victoria na Austrália continental.",
        "fato": "Embora tenha apenas cerca de 240 km de largura, suas águas rasas combinadas com ventos do Oceano Antártico criam condições de naufrágio lendárias."
    },
    {
        "nome": "Estreito de Taiwan",
        "categoria": "Gargalo Militar Mais Tenso da Ásia",
        "lat": 24.5000,
        "lng": 119.8000,
        "dica": "Braço de mar de 160 km que separa a costa continental da China da ilha de Taiwan.",
        "fato": "Uma das rotas de navios porta-contêineres mais vitais do comércio mundial, cruzada pela 'Linha Mediana' não oficial de separação de forças militares."
    },
    {
        "nome": "Estreito de Messina",
        "categoria": "Gargalo Histórico de Cila e Caríbdis",
        "lat": 38.2000,
        "lng": 15.6000,
        "dica": "Estreito de apenas 3,1 km que separa a ponta da bota da Península Itálica (Calábria) da ilha da Sicília.",
        "fato": "Famoso na Odisséia de Homero pelos monstros mitológicos marinhos; é alvo do projeto secular da maior ponte suspensa do mundo ligando a Sicília à Itália."
    },
    {
        "nome": "Estreito de Otranto",
        "categoria": "Porta do Mar Adriático",
        "lat": 40.1500,
        "lng": 18.9000,
        "dica": "Estreito de 72 km de largura que separa o calcanhar da Itália da costa montanhosa da Albânia.",
        "fato": "Conecta o Mar Adriático ao Mar Jônico; durante a Primeira Guerra Mundial foi palco do bloqueio naval da 'Barragem de Otranto' contra os submarinos austro-húngaros."
    },
    {
        "nome": "Estreito de Davis",
        "categoria": "Porta de Entrada Ártica",
        "lat": 67.0000,
        "lng": -62.0000,
        "dica": "Estreito ártico que separa o oeste da Groenlândia da Ilha de Baffin no Canadá.",
        "fato": "Conecta o Mar de Labrador à Baía de Baffin; é a rota por onde descem milhares de icebergs desprendidos das geleiras da Groenlândia rumo ao Atlântico Norte."
    },
    {
        "nome": "Estreito da Dinamarca",
        "categoria": "Maior Cachoeira Submarina da Terra",
        "lat": 66.5000,
        "lng": -26.0000,
        "dica": "Estreito oceânico que separa a Groenlândia da Islândia conectando o Oceano Ártico ao Atlântico Norte.",
        "fato": "Abriga no leito submarino a maior cachoeira do planeta: a água polar densa e gelada despenca 3.500 metros sob o mar em um abismo com fluxo de 5 milhões de m³/s."
    },
    {
        "nome": "Canal Meno-Danúbio",
        "categoria": "Hidrovia Transcontinental Europeia",
        "lat": 49.2000,
        "lng": 11.2000,
        "dica": "Canal artificial alemão de 171 km que conecta a bacia do Rio Reno à bacia do Rio Danúbio cruzando a Linha Divisória de Águas Europeia.",
        "fato": "Inaugurado em 1992, permite que uma barcaça mercante navegue ininterruptamente desde Roterdã no Mar do Norte até o Mar Negro na Romênia."
    },
    {
        "nome": "Canal de São Lourenço",
        "categoria": "Portão dos Grandes Lagos",
        "lat": 44.9000,
        "lng": -74.9000,
        "dica": "Sistema épico de canais e eclusas conjunto entre EUA e Canadá que permite a navios cargueiros subir do Atlântico até os Grandes Lagos.",
        "fato": "Ergue os navios cargueiros por mais de 180 metros de altitude desde o nível do oceano até a superfície do Lago Superior no interior do continente."
    },

    # -------------------------------------------------------------------------
    # ENCLAVES & ANOMALIAS DE FRONTEIRA RARAS
    # -------------------------------------------------------------------------
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
        "lat": 47.3450,
        "lng": 10.1600,
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
        "lat": -9.2000,
        "lng": 124.3500,
        "dica": "Enclave costeiro pertencente a Timor-Leste cercado em todo o seu perímetro terrestre pela província indonésia de Timor Ocidental.",
        "fato": "Foi o ponto onde os frades portugueses desembarcaram pela primeira vez na ilha de Timor em 1515, fundando o primeiro assentamento europeu no território."
    },
    {
        "nome": "Nakhchivan",
        "categoria": "Exclave Estratégico do Azerbaijão",
        "lat": 39.2089,
        "lng": 45.4122,
        "dica": "República autônoma do Azerbaijão separada do território principal azeri pela província de Syunik na Armênia.",
        "fato": "Possui uma pequena fronteira de 15 km com a Turquia e longa divisa com o Irã; é o ponto central das negociações do Corredor de Zangezur."
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
        "lat": 39.9500,
        "lng": 71.1333,
        "dica": "Enclave do Uzbequistão de 350 km² com cerca de 80.000 habitantes situado inteiramente dentro da região de Batken no Quirguistão.",
        "fato": "Apesar de pertencer politicamente ao Uzbequistão, mais de 99% da sua população é de etnia tadjique e fala a língua tadjique no Vale de Fergana."
    },
    {
        "nome": "Vorukh",
        "categoria": "Enclave Tadjique no Vale de Fergana",
        "lat": 39.8500,
        "lng": 70.5833,
        "dica": "Enclave do Tadjiquistão de 130 km² situado dentro do território do Quirguistão, cercado por rios e canais disputados.",
        "fato": "Ponto de frequentes atritos fronteiriços armados e bloqueios de estradas entre as populações vizinhas devido à escassez de água para agricultura."
    },
    {
        "nome": "Northwest Angle",
        "categoria": "O Chifre dos EUA no Canadá",
        "lat": 49.2700,
        "lng": -95.0500,
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

    # -------------------------------------------------------------------------
    # DISPUTAS GEOPOLÍTICAS & ZONAS DE TENSÃO
    # -------------------------------------------------------------------------
    {
        "nome": "Triângulo de Hala'ib",
        "categoria": "Disputa do Mar Vermelho",
        "lat": 22.4667,
        "lng": 36.0000,
        "dica": "Área de 20.580 km² no Mar Vermelho reivindicada simultaneamente pelo Egito e pelo Sudão.",
        "fato": "O Egito administra a área com base na fronteira reta do Paralelo 22° de 1899; o Sudão reivindica a linha administrativa tribal de 1902. Aceitar Bir Tawil faria qualquer um perder Hala'ib."
    },
    {
        "nome": "Triângulo de Ilemi",
        "categoria": "Disputa do Chifre Africano",
        "lat": 4.8000,
        "lng": 35.0000,
        "dica": "Território de até 14.000 km² disputado de facto entre Quênia, Sudão do Sul e Etiópia.",
        "fato": "O Quênia mantém postos policiais e controle administrativo na área desde a era colonial britânica para proteger as rotas de pastoreio dos nômades Turkana."
    },
    {
        "nome": "Vale de Galwan",
        "categoria": "Ponto de Atrito Nuclear no Himalaia",
        "lat": 34.7500,
        "lng": 78.2500,
        "dica": "Vale fluvial desolado na divisa de Ladakh e Aksai Chin onde tropas indianas e chinesas se enfrentaram em 2020.",
        "fato": "Devido a acordos de desmilitarização que proibiam armas de fogo, o confronto de 2020 envolveu combate corpo a corpo com bastões e pedras em temperaturas de congelamento."
    },
    {
        "nome": "Rochedo de Scarborough",
        "categoria": "Atol em Litígio no Mar da China",
        "lat": 15.1500,
        "lng": 117.7500,
        "dica": "Atol de recifes a 220 km da ilha de Luzon (Filipinas) ocupado pela Guarda Costeira da China desde 2012.",
        "fato": "Conhecido nas Filipinas como Panatag Shoal e na China como Huangyan Dao, é um dos nós centrais de atrito marítimo na Zona Econômica Exclusiva filipina."
    },
    {
        "nome": "Ilhas Senkaku (Diaoyu)",
        "categoria": "Litígio Marítimo Japão-China",
        "lat": 25.7500,
        "lng": 123.5000,
        "dica": "Grupo de oito ilhas desabitadas no Mar da China Oriental administradas pelo Japão e reivindicadas pela China e Taiwan.",
        "fato": "Tornaram-se alvo de grande tensão estratégica após pesquisas geológicas em 1968 revelarem possíveis reservas colossais de petróleo submarino na plataforma continental."
    },
    {
        "nome": "Fazendas de Shebaa",
        "categoria": "Tríplice Tensão no Levante",
        "lat": 33.2833,
        "lng": 35.7000,
        "dica": "Pequena faixa de terra de 22 km² na encosta do Monte Hermon disputada entre Líbano, Síria e Israel.",
        "fato": "Capturada por Israel da Síria na Guerra dos Seis Dias em 1967; o Líbano afirma que o território pertence historicamente ao seu território soberano."
    },
    {
        "nome": "Ilhas Geórgia do Sul",
        "categoria": "Território Subantártico Britânico",
        "lat": -54.2500,
        "lng": -36.7500,
        "dica": "Arquipélago montanhoso coberto por geleiras no Atlântico Sul reivindicado pela Argentina como parte da disputa das Malvinas.",
        "fato": "Foi a base da épica expedição transantártica de Ernest Shackleton em 1916 e abriga milhões de pinguins-rei e elefantes-marinhos protegidos."
    },

    # -------------------------------------------------------------------------
    # EXTREMOS FÍSICOS & RELEVO
    # -------------------------------------------------------------------------
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
        "lng": 40.3000,
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
        "lat": 67.5500,
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
        "nome": "Cabo da Boa Esperança",
        "categoria": "Marco das Grandes Navegações",
        "lat": -34.3568,
        "lng": 18.4725,
        "dica": "Cabo rochoso na Península do Cabo na África do Sul dobrado por Bartolomeu Dias em 1488 abrindo o caminho marítimo para as Índias.",
        "fato": "Originalmente batizado pelos marinheiros portugueses de 'Cabo das Tormentas', o rei D. João II o renomeou para Boa Esperança pelo otimismo da rota das especiarias."
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
        "lng": -169.6500,
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
        "lat": 19.8400,
        "lng": -66.5000,
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
        "nome": "Tristão da Cunha",
        "categoria": "Comunidade Mais Isolada do Globo",
        "lat": -37.1052,
        "lng": -12.2777,
        "dica": "Arquipélago vulcânico britânico com cerca de 250 habitantes situado no meio do Atlântico Sul a 2.400 km de qualquer terra habitada.",
        "fato": "A única maneira de chegar à aldeia de Edimburgo dos Sete Mares é por navios de pesca ou expedições com viagem de 6 dias partindo da África do Sul."
    },
    {
        "nome": "Ilhas Pitcairn",
        "categoria": "Refúgio do HMS Bounty",
        "lat": -25.0667,
        "lng": -130.1000,
        "dica": "Ilha minúscula no sul do Oceano Pacífico povoada por cerca de 45 descendentes diretos dos marinheiros amotinados do HMS Bounty.",
        "fato": "Os amotinados queimaram o navio em 1790 para não serem encontrados pela Marinha Real Britânica, permanecendo isolados por quase duas décadas."
    },
    {
        "nome": "Ilhas Kerguelen",
        "categoria": "As Ilhas da Desolação",
        "lat": -49.3500,
        "lng": 70.2167,
        "dica": "Arquipélago subantártico francês de relevo vulcânico e ventos polares furiosos a mais de 3.300 km de qualquer continente.",
        "fato": "Habitada apenas por cientistas e meteorologistas na estação Port-aux-Français; abriga o repolho-de-kerguelen, planta rica em vitamina C que salvou marinheiros do escorbuto."
    },
    {
        "nome": "Null Island",
        "categoria": "Marco Zero dos Mapas Digitais",
        "lat": 0.0000,
        "lng": 0.0000,
        "dica": "Interseção teórica da Linha do Equador com o Meridiano de Greenwich nas águas do Golfo da Guiné.",
        "fato": "Conhecida por desenvolvedores de software e cartógrafos como o local onde vão parar coordenadas corrompidas (0, 0); marcada no mar pela boia meteorológica 'Soul'."
    },

    # -------------------------------------------------------------------------
    # MEGAPROJETOS & MONUMENTOS CARTOGRÁFICOS
    # -------------------------------------------------------------------------
    {
        "nome": "Observatório Real de Greenwich",
        "categoria": "A Origem da Longitude Zero",
        "lat": 51.4769,
        "lng": 0.0000,
        "dica": "Observatório histórico em Londres onde uma linha de latão gravada no chão marca a Longitude 0° e divide os hemisférios leste e oeste.",
        "fato": "Fundado em 1675 pelo rei Carlos II para aperfeiçoar a navegação marítima e resolver o clássico enigma da determinação da longitude no mar."
    },
    {
        "nome": "Marco Zero do Equador (Macapá)",
        "categoria": "Monumento do Meio do Mundo",
        "lat": 0.0000,
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
        "lat": -25.5900,
        "lng": -54.5944,
        "dica": "Ponto de encontro onde o Rio Iguaçu deságua no Rio Paraná, unindo as fronteiras de Brasil, Argentina e Paraguai.",
        "fato": "Inaugurado simultaneamente em 1903 pelo Brasil e pela Argentina, cada país possui seu próprio obelisco pintado com suas cores nacionais voltado para os rios."
    },
    {
        "nome": "Linha Maginot",
        "categoria": "Fortaleza Subterrânea Histórica",
        "lat": 49.3500,
        "lng": 6.1500,
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
        "lat": 23.9700,
        "lng": 32.8800,
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
        "lat": 41.2500,
        "lng": 140.3500,
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
    }
]

# Adiciona os novos locais garantindo que não haja duplicatas por nome
nomes_existentes = {l["nome"].lower().strip() for l in LOCAIS}
adicionados = 0

for nl in NOVOS_LOCAIS:
    if nl["nome"].lower().strip() not in nomes_existentes:
        LOCAIS.append(nl)
        nomes_existentes.add(nl["nome"].lower().strip())
        adicionados += 1

print(f"Novos locais adicionados: {adicionados}")
print(f"Total final de locais estratégicos: {len(LOCAIS)}")

with open("D:/Dev/vitale-geo/scripts/dados_locais.py", "w", encoding="utf-8") as f:
    f.write("# -*- coding: utf-8 -*-\n")
    f.write('"""BASE MESTRE DE 200+ LOCAIS ESTRATÉGICOS E PINPOINTS — VITALEGEO"""\n\n')
    f.write("LOCAIS = " + json.dumps(LOCAIS, ensure_ascii=False, indent=4) + "\n")

print("Arquivo D:/Dev/vitale-geo/scripts/dados_locais.py atualizado com sucesso!")
