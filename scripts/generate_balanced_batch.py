import os
import json

with open('scripts/verified_post_images.json', 'r', encoding='utf-8') as f:
    images = json.load(f)

posts = [
    {
        "slug": "toquio-urbanismo-ferroviario",
        "titulo": "Por Que Tóquio é a Maior Metrópole do Planeta Sem Sofrer Com Engarrafamentos Gigantescos?",
        "categoria": "Urbanismo",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["toquio"],
        "resumo": "Com 37 milhões de habitantes na Grande Tóquio, a capital japonesa desafia as leis do tráfego urbano através do modelo ferroviário integrado e do zoneamento unificado.",
        "metrica1": ("População Metropolitana", "37,4 Milhões"),
        "metrica2": ("Viagens por Trilhos", "86% dos Deslocamentos"),
        "metrica3": ("Linha Yamanote", "34,5 km em Anel"),
        "metrica4": ("Modelo Urbano", "TOD (Transit-Oriented)"),
        "lead": "Em quase qualquer metrópole global com mais de vinte milhões de habitantes, de São Paulo a Jacarta e de Los Angeles a Mumbai, a menção ao tráfego evoca imagens de avenidas travadas, buzinas incessantes e horas perdidas no asfalto. Tóquio, no entanto, abriga 37,4 milhões de pessoas em sua mancha metropolitana contínua — a maior aglomeração humana da história da Terra — e opera com uma fluidez quase cirúrgica. A resposta para esse paradoxo não reside em viadutos monumentais, mas em uma simbiose radical entre trens de alta frequência e uma legislação de zoneamento que proíbe o modelo americano de subúrbios dependentes do automóvel.",
        "secoes": [
            ("O Anel de Ferro da Linha Yamanote e a Malha Policêntrica",
             "Ao contrário de cidades monocêntricas que concentram todos os empregos em um único distrito financeiro central, Tóquio foi deliberadamente estruturada ao redor da lendária Linha Yamanote. Este anel ferroviário circular de 34,5 quilômetros conecta as principais sub-centralidades metropolitanas: Shinjuku, Shibuya, Ikebukuro, Ueno, Shinagawa e a Estação de Tóquio. Cada uma dessas estações funciona como um núcleo autossuficiente de trabalho, comércio e entretenimento, dispersando as viagens pendulares em múltiplas direções em vez de sobrecarregar um único eixo viário."),
            ("Zoneamento Nacional Unificado: Por Que Tóquio Não Tem Favelas Nem Guetos Ricos",
             "Nos Estados Unidos e na maior parte da América Latina, os municípios possuem autonomia para impor leis restritivas de zoneamento monofamiliar, proibindo prédios e comércio em bairros residenciais. No Japão, a Lei de Planejamento Urbano de 1968 estabeleceu apenas 12 zonas em nível nacional, controladas pelo governo central. Sob esse regime, é praticamente impossível para um bairro impedir a abertura de pequenos comércios, cafés ou residências multifamiliares. Isso gera bairros hiper-caminháveis, onde o cidadão encontra mercados, escolas e consultórios a menos de 500 metros de casa, eliminando a necessidade mecânica do carro."),
            ("A Lei do Comprovante de Garagem e o Fim das Vagas Gratuitas na Rua",
             "Outro pilar determinante da mobilidade de Tóquio é a famosa lei do Shako Shomeisho (Certificado de Garagem), instituída em 1962. No Japão, é proibido por lei comprar um automóvel sem comprovar perante a polícia distrital que você possui uma vaga privada de estacionamento a até dois quilômetros de sua residência. Além disso, o estacionamento nas ruas da cidade é terminantemente proibido durante a noite. Ao contrário do Ocidente, onde o espaço público da rua é subsidiado para estocar veículos particulares de graça, Tóquio exige que o proprietário pague pelo custo real do espaço físico que seu veículo ocupa no tecido urbano."),
            ("Ferrovias Privadas Como Incorporadoras Imobiliárias",
             "A genialidade financeira do sistema de transporte japonês repousa no modelo de negócios das operadoras privadas de trem, como Tokyu, Odakyu, Tobu e Seibu. Essas companhias não sobrevivem da venda de passagens ferroviárias, mas da valorização imobiliária ao redor das estações. Elas compram terrenos agrícolas no entorno da linha, constroem os trilhos, erguem bairros residenciais planejados e operam gigantescas lojas de departamento e hospitais diretamente sobre os terminais de passageiros. O passageiro mora no empreendimento da ferrovia, compra na loja da ferrovia e viaja no trem da mesma operadora.")
        ],
        "citacao": ("O milagre da mobilidade de Tóquio não foi inventado pela tecnologia dos trens-bala, mas pela coragem política de cobrar o preço real do solo urbano e proibir que carros particulares sufoquem as calçadas dos pedestres.", "Prof. Hidenori Kondo, Urbanista da Universidade de Tóquio"),
        "tabela_cabecalho": ["Métrica Urbana", "Tóquio (Kanto)", "São Paulo (RMSP)", "Nova York (Tri-State)"],
        "tabela_linhas": [
            ["População Metropolitana", "37,4 milhões", "21,5 milhões", "20,1 milhões"],
            ["Uso do Transporte sobre Trilhos", "86%", "31%", "56%"],
            ["Frota de Veículos por 1.000 hab.", "320 carros", "450 carros", "680 carros"],
            ["Tempo Médio de Deslocamento", "46 minutos", "72 minutos", "58 minutos"],
            ["Acidentes Fatais por 100k hab.", "1,3", "8,9", "4,2"]
        ],
        "box_tatica": ("O Efeito do 'Micro-Urbanismo' Japonês", "Em bairros tradicionais como Shimokitazawa, Yanaka ou Kichijoji, as ruas não possuem calçadas elevadas nem meio-fio: o asfalto é compartilhado entre pedestres, ciclistas e veículos em velocidades inferiores a 20 km/h. Como as casas não possuem recuos frontais obrigatórios nem garagens gigantescas, o olhar da rua é constante, gerando índices de criminalidade próximos de zero."),
        "ferramenta_link": "/ferramentas/quantos-cabem/",
        "ferramenta_nome": "Quantos Cabem? (Comparador de Escala Territorial)",
        "faq": [
            ("Quantas pessoas passam pela estação de Shinjuku todos os dias?", "A estação de Shinjuku em Tóquio é a mais movimentada do mundo pelo Guinness World Records, com fluxo superior a 3,6 milhões de passageiros diários cruzando mais de 200 saídas."),
            ("Por que não há lixeiras nas ruas de Tóquio?", "Após o atentado com gás sarin no metrô em 1995, as lixeiras foram removidas por segurança. A população adota o hábito cultural de carregar seu próprio lixo até em casa."),
            ("Os trens de Tóquio dão lucro?", "Sim. Diferente da maioria das redes mundiais subsidiadas por impostos, as operadoras privadas de Tóquio operam no azul através da diversificação imobiliária e comercial das estações.")
        ]
    },
    {
        "slug": "barcelona-superquarteiroes-urbanismo",
        "titulo": "Como Barcelona Inventou os Superquarteirões para Tirar o Domínio dos Carros na Cidade?",
        "categoria": "Urbanismo",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["barcelona"],
        "resumo": "Desenhada por Ildefons Cerdà em 1859, a malha ortogonal do Eixample virou o laboratório das 'Superilles', devolvendo 70% das ruas aos pedestres, crianças e comércio local.",
        "metrica1": ("Malha de Cerdà", "Quadras de 113 metros"),
        "metrica2": ("Superilles Criadas", "Mais de 20 blocos"),
        "metrica3": ("Redução de Ruído", "Até 5 decibéis a menos"),
        "metrica4": ("Espaço Pedonal Ganho", "+33.000 m² de lazer"),
        "lead": "No meio do século XIX, quando a cidade murada de Barcelona sufocava sob epidemias de cólera e densidade desumana, um engenheiro visionário chamado Ildefons Cerdà desenhou um plano revolucionário: uma grade infinita de quadras quadradas com cantos chanfrados a 45 graus, garantindo luz solar, ventilação e vegetação para todas as classes sociais. Mais de 150 anos depois, esse mesmo traçado tornou-se a base da maior revolução urbana da Europa contemporânea: os Superquarteirões (Superilles), um modelo que agrupou blocos de 3x3 quadras para banir o tráfego de passagem e transformar o asfalto em praças arborizadas.",
        "secoes": [
            ("O Plano Cerdà de 1859 e a Invenção da Palavra 'Urbanização'",
             "Pouca gente sabe que foi Ildefons Cerdà quem cunhou formalmente a palavra 'urbanismo' e 'urbanização' em sua obra seminal de 1867. Seu projeto para o distrito de Eixample ('Ensanche' ou expansão) previa quadras octogonais perfeitas de 113 metros de lado com esquinas chanfradas em 20 metros. A intenção dos cantos cortados era permitir que locomotivas a vapor fizessem curvas suaves. Ironicamente, um século depois, essas mesmas esquinas chanfradas foram transformadas em estacionamento caótico para milhares de automóveis particulares."),
            ("O Que é Uma Superilla e Como Ela Redireciona o Tráfego",
             "O conceito das Superilles, idealizado pelo ecólogo urbano Salvador Rueda, é elegante em sua simplicidade matemática: agrupa-se um conjunto de nove quadras (3 por 3). As vias arteriais que contornam o perímetro externo continuam permitindo o tráfego geral de ônibus e carros a 50 km/h. No entanto, as quatro ruas internas tornam-se de uso compartilhado, com velocidade limitada a 10 km/h, permitindo apenas acesso de moradores, entregas e emergências. Além disso, as ruas internas operam em laços de sentido único que impedem qualquer veículo de cruzá-las em linha reta, eliminando totalmente o tráfego de corte."),
            ("A Queda da Poluição e a Redução das Ilhas de Calor",
             "Antes das Superilles, cerca de 60% do espaço público de Barcelona era dedicado a veículos motorizados, embora menos de 25% dos deslocamentos fossem feitos por carro. Essa disparidade cobrava um preço alto: níveis de dióxido de nitrogênio (NO2) e material particulado rotineiramente violavam os limites da Organização Mundial da Saúde. As medições pós-implantação em bairros como Sant Antoni e Poblenou revelaram reduções de até 25% na poluição do ar, aumento de 30% nas vendas do comércio de rua e queda drástica nos níveis de ruído ambiental."),
            ("O Conflito Político e as Lições Para Cidades Globais",
             "A transição não ocorreu sem resistências acaloradas. Associações de comerciantes inicialmente temiam que a retirada dos carros levasse à falência de lojas, e motoristas protestaram contra o alongamento de algumas rotas. Entretanto, pesquisas posteriores demonstraram que o fluxo de pedestres atraído pelas novas praças e áreas verdes aumentou o faturamento dos cafés e mercados de bairro. Hoje, cidades como Paris, Berlim, Bogotá e Buenos Aires enviam delegações a Barcelona para replicar a arquitetura dos superquarteirões.")
        ],
        "citacao": ("A rua não pode ser apenas um cano por onde passam canos menores com quatro rodas e um motor. A rua é o jardim, a sala de visitas e a praça cívica de quem mora na cidade.", "Salvador Rueda, Diretor da Agência de Ecologia Urbana de Barcelona"),
        "tabela_cabecalho": ["Indicador", "Antes da Superilla", "Após a Superilla", "Impacto Real"],
        "tabela_linhas": [
            ["Tráfego de Veículos de Passagem", "100%", "Reduzido em 82%", "Ruas pacificadas"],
            ["Espaço Dedicado ao Pedestre", "24%", "74%", "+50% de espaço livre"],
            ["Poluição do Ar (NO2)", "48 µg/m³", "36 µg/m³", "-25% de toxinas"],
            ["Ruído Urbano Diurno", "72 dB", "66 dB", "Queda perceptível"],
            ["Área Verde e Jardins", "2.100 m²", "8.900 m²", "+320% de vegetação"]
        ],
        "box_tatica": ("O Chanfro das Esquinas: De Curva de Trem a Praça de Bairro", "Os cantos chanfrados de Cerdà criam pequenas praças octogonais em cada cruzamento. Com o fechamento do tráfego interno, esses cruzamentos viraram parques de bolso infantis, mesas de xadrez comunitárias e feiras de produtores locais, redefinindo a vida social dos bairros de Barcelona."),
        "ferramenta_link": "/ferramentas/comparador-paises/",
        "ferramenta_nome": "Comparador de Escala Real de Cidades e Países",
        "faq": [
            ("Quantas Superilles existem em Barcelona?", "Atualmente Barcelona possui mais de 20 superquarteirões implantados ou em fase de execução, concentrados em Poblenou, Sant Antoni, Horta e no Eixample central."),
            ("Moradores podem entrar com carro na Superilla?", "Sim. Moradores, veículos de coleta, ambulâncias e entregas possuem acesso irrestrito às garagens e residências internas, porém com limite rígido de 10 km/h."),
            ("Quanto custa implementar um superquarteirão?", "O modelo inicial utiliza 'urbanismo tático' de baixíssimo custo: pintura no asfalto, vasos de plantas e bancos de madeira, antes de obras estruturais pesadas.")
        ]
    },
    {
        "slug": "brasilia-plano-piloto-urbanismo",
        "titulo": "Por Que Brasília Foi Desenhada em Formato de Cruz e Quais São os Limites do Plano Piloto?",
        "categoria": "Urbanismo",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["brasilia"],
        "resumo": "Projetada em 1957 por Lúcio Costa e Oscar Niemeyer, a capital federal modernista aboliu as esquinas, inventou as superquadras e enfrenta hoje o dilema da segregação metropolitana.",
        "metrica1": ("Concepção", "Lúcio Costa (1957)"),
        "metrica2": ("Inauguração", "21 de Abril de 1960"),
        "metrica3": ("Área Tombada", "112,25 km² pela UNESCO"),
        "metrica4": ("População DF", "3,1 Milhões de Habitantes"),
        "lead": "No dia 21 de abril de 1960, no coração do cerrado brasileiro, emergia do nada a mais ambiciosa experiência de urbanismo modernista do século XX. O Plano Piloto de Brasília, concebido pelo arquiteto Lúcio Costa a partir de um gesto primordial — o cruzamento de dois eixos em formato de cruz, mais tarde curvado para se adaptar ao relevo e parecer uma aeronave —, pretendia reinventar a própria sociedade brasileira. A capital federal aboliu esquinas tradicionais, eliminou cruzamentos com semáforos, organizou a vida em superquadras autossuficientes e transformou-se no primeiro monumento moderno tombado como Patrimônio Mundial pela UNESCO.",
        "secoes": [
            ("O Cruzamento dos Eixos e as Quatro Escalas de Lúcio Costa",
             "A arquitetura conceitual de Brasília fundamenta-se na Carta de Atenas e nas quatro escalas urbanísticas definidas por Lúcio Costa no relatório do concurso: a Escala Monumental (o Eixo Monumental com os edifícios de governo e a Praça dos Três Poderes); a Escala Residencial (as Asas Sul e Norte organizadas em Superquadras); a Escala Gregária (o centro de convivência, setor comercial, bancário e de diversões no cruzamento central); e a Escala Bucólica (os gramados verdes e a orla do Lago Paranoá integrando a natureza ao desenho)."),
            ("A Superquadra: O Experimento da Vida Coletiva sob Pilotis",
             "As Superquadras de Brasília (SQS e SQN) foram pensadas como pequenas comunidades de escala humana. Cada quadra de cerca de 280 por 280 metros abriga no máximo 11 blocos de apartamentos de seis andares, suspensos obrigatoriamente sobre pilotis abertos. A regra mestra de Lúcio Costa determinava que o solo do chão pertence à cidade inteira: qualquer cidadão pode caminhar livremente por baixo dos prédios sem muros, portões ou grades. Entre as quadras residenciais intercalam-se as entrequadras comerciais com padarias, livrarias e escolas."),
            ("O Triunfo Rodoviarista e o Sacrifício do Pedestre",
             "Projetada no auge da era do automóvel dos anos 1950, Brasília foi meticulosamente desenhada para que nenhum veículo precisasse parar em cruzamentos de trânsito. O Eixo Rodoviário (o 'Eixão') e os eixinhos operam com tesourinhas, viadutos e passagens subterrâneas em desnível. Essa fluidez veicular, celebrada pelos motoristas, cobra um tributo severo de quem precisa andar a pé: atravessar os eixos demanda coragem ou o uso de passagens subterrâneas escuras, gerando uma cidade onde ter carro não é opção, mas condição sine qua non de cidadania."),
            ("O Plano Piloto vs as Cidades-Satélites: O Dilema da Segregação",
             "O maior ponto cego do planejamento original foi dimensionar o Plano Piloto para apenas 500 mil habitantes, sem prever onde morariam os milhares de candangos que construíram a cidade e a população que migraria nas décadas seguintes. Hoje, mais de 85% dos 3,1 milhões de habitantes do Distrito Federal residem fora do Plano Piloto, em cidades-satélites como Ceilândia, Taguatinga, Samambaia e Águas Claras, realizando jornadas diárias de horas de ônibus para trabalhar na área central preservada.")
        ],
        "citacao": ("Nasceu do gesto primário de quem assinala um lugar ou dele toma posse: dois eixos cruzando-se em ângulo reto, ou seja, o próprio sinal da cruz.", "Lúcio Costa, Relatório do Plano Piloto de Brasília (1957)"),
        "tabela_cabecalho": ["Dimensão", "Plano Piloto Original", "Distrito Federal Atual"],
        "tabela_linhas": [
            ["População Total", "Projetado para 500k", "3,1 milhões no DF"],
            ["Dependência do Carro", "Totalmente desenhada p/ auto", "1 carro p/ cada 1,6 pessoa"],
            ["Tombamento UNESCO", "112,25 km² protegidos", "Restante com dinâmica livre"],
            ["Perfil Socioeconômico", "Mais alta renda per capita", "Abismo com a periferia metropolitana"],
            ["Espaço Público Térreo", "100% aberto sob pilotis", "Cidades-satélites com lotes cercados"]
        ],
        "box_tatica": ("A Falta de Nomes de Rua e a Lógica de Coordenadas", "Em Brasília não existem ruas com nomes de generais ou poetas. O endereço é puramente matricial e geodésico: SQS 308 Bloco F Apt 204 significa Superquadra Sul, número 308, bloco de letra F. Uma vez decodificada a lógica geométrica, ninguém se perde na capital."),
        "ferramenta_link": "/ferramentas/quantos-cabem/",
        "ferramenta_nome": "Quantos Cabem? (Simulador de Área Urbana)",
        "faq": [
            ("Brasília foi feita em formato de avião de propósito?", "Não. Lúcio Costa afirmou que desenhou uma cruz adaptada à topografia do Lago Paranoá. A semelhança com uma aeronave foi uma associação popular e midiática posterior."),
            ("Pode construir prédios altos no Plano Piloto?", "Não. Por ser tombada pela UNESCO desde 1987, a escala gabarítica das superquadras é estritamente congelada em seis andares, garantindo a linha do horizonte desimpedida."),
            ("O que significa 'tesourinha' no trânsito de Brasília?", "São as alças de acesso curvo em formato de tesoura que permitem trocar de pista e entrar nas quadras passando sob os viadutos sem cruzar o tráfego oposto.")
        ]
    },
    {
        "slug": "distorcao-projecoes-cartograficas",
        "titulo": "Por Que Todo Mapa Mundi Plano Mente e Qual Projeção é a Mais Precisa da Terra?",
        "categoria": "Cartografia",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["projecoes"],
        "resumo": "Do Teorema Egregium de Gauss às projeções de Mercator, Gall-Peters, Robinson e AuthaGraph: entenda a impossibilidade matemática de achatar uma esfera sem distorcer formas ou áreas.",
        "metrica1": ("Descoberta Matemática", "Theorema Egregium (Gauss, 1827)"),
        "metrica2": ("Projeção de Mercator", "Ano de 1569 (Navegação)"),
        "metrica3": ("Gall-Peters", "1973 (Área Equivalente)"),
        "metrica4": ("AuthaGraph Japão", "2016 (Menor Distorção Geral)"),
        "lead": "Se você já olhou para o mapa mundi tradicional que decora paredes de escolas e redações de notícias, provavelmente acreditou que a Groenlândia tem o mesmo tamanho de todo o continente africano, ou que a Europa e a América do Norte dominam geograficamente o globo terrestre. Essa percepção é uma ilusão de ótica monumental. Em 1827, o príncipe dos matemáticos Carl Friedrich Gauss provou no seu célebre Theorema Egregium que é geometricamente impossível transferir a superfície curva de uma esfera para uma folha de papel plana sem distorcer ou a área, ou a forma, ou a distância entre os pontos. Todo mapa plano mente — o que muda é a intenção por trás de cada distorção.",
        "secoes": [
            ("O Teorema de Gauss: A Casca da Laranja Impossível de Esticar",
             "Para compreender a cartografia, é preciso entender a curvatura gaussiana. Uma folha de papel plana possui curvatura zero; um cilindro ou cone também possui curvatura zero (pois podem ser desenrolados sem rasgar). Uma esfera perfeita como a Terra, no entanto, possui curvatura gaussiana positiva. Tentar achatar a superfície de uma esfera sobre uma mesa é exatamente como tentar esticar a casca de uma laranja sem rasgar suas bordas ou esmagar o centro. Por consequência física, todo cartógrafo é forçado a escolher qual propriedade geométrica ele sacrificará: ângulos, áreas ou distâncias."),
            ("Mercator de 1569: O Mapa Perfeito Para Navios Que Enganou a Humanidade",
             "Em 1569, o geógrafo flamengo Gerardus Mercator criou a projeção cilíndrica conforme que leva seu nome. Seu objetivo era técnico e extraordinário: permitir que navegadores traçassem linhas retas de rumo constante (linhas loxodrômicas) com a bússola magnética. Para que os ângulos e as direções locais permanecessem perfeitos, Mercator teve que esticar progressivamente a distância entre os paralelos à medida que se aproxima dos polos. O resultado colateral foi deformar a escala das terras no hemisfério norte: a Groenlândia (2,1 milhões de km²) aparenta ser maior que a África inteira (30,3 milhões de km²), quando na realidade a África é catorze vezes maior."),
            ("Gall-Peters e a Batalha Ideológica dos Anos 1970",
             "Em 1973, o historiador alemão Arno Peters apresentou a projeção equivalente de Gall-Peters, argumentando que a projeção de Mercator promovia um eurocentrismo colonial inconsciente ao apequenar os países do Sul Global. O mapa de Peters manteve as áreas relativas de todos os territórios milimetricamente proporcionais, mas pagou o preço deformando severamente as formas: os países tropicais da África e América do Sul parecem panos esticados pendurados num varal. Geógrafos de todo o mundo criticaram a agressividade estética da projeção, mas o debate forçou escolas e atlas a reverem suas escolhas."),
            ("A Solução Moderna: Robinson, Winkel-Tripel e o AuthaGraph",
             "Para escapar da guerra entre conformidade e equivalência, a National Geographic Society adotou em 1988 a Projeção de Robinson e, em 1998, a Projeção Winkel-Tripel. Ambas são projeções afiláticas ou de compromisso: não preservam perfeitamente nem a área nem os ângulos, mas equilibram os erros visuais de modo a oferecer uma representação harmoniosa. O auge da precisão contemporânea foi atingido em 2016 pelo arquiteto japonês Hajime Narukawa com a Projeção AuthaGraph: dividindo o globo em 96 triângulos projetados em um tetraedro desdobrado, ele conseguiu representar oceanos e continentes com proporções de área quase perfeitas e formatos intactos.")
        ],
        "citacao": ("Não existe projeção perfeita, assim como não existe uma única verdade em duas dimensões para um mundo que nasceu esférico.", "Arthur H. Robinson, Cartógrafo e Professor da Universidade de Wisconsin"),
        "tabela_cabecalho": ["Projeção", "Tipo Cartográfico", "O Que Preserva", "Distorção Crítica"],
        "tabela_linhas": [
            ["Mercator (1569)", "Cilíndrica Conforme", "Ângulos e Direções locais", "Amplia drasticamente os polos"],
            ["Gall-Peters (1973)", "Cilíndrica Equivalente", "Áreas territoriais reais", "Achata e estica as formas tropicais"],
            ["Winkel-Tripel (1921)", "Projeção Modificada", "Compromisso de equilíbrio", "Pequenas distorções distribuídas"],
            ["Robinson (1963)", "Pseudocilíndrica", "Harmonia estética visual", "Polos representados como linhas retas"],
            ["AuthaGraph (2016)", "Poliédrica Tetraédrica", "Áreas e continentes intactos", "Orientações astronômicas não convencionais"]
        ],
        "box_tatica": ("A África Real: O Que Cabe Dentro do Continente", "Dentro do continente africano (30,3 milhões de km²) cabem com folga os territórios inteiros dos Estados Unidos, China, Índia, Europa Ocidental, Japão e ainda sobra espaço para o Reino Unido. Olhar para a projeção de Mercator apaga essa dimensão continental da consciência pública."),
        "ferramenta_link": "/ferramentas/comparador-paises/",
        "ferramenta_nome": "Qual o Real Tamanho dos Países? (Simulador Mercator)",
        "faq": [
            ("Por que o Google Maps usa Mercator se ele distorce os países?", "O Google Maps utiliza a Web Mercator porque ela preserva os ângulos locais em 90 graus nas esquinas das ruas e cidades, permitindo zoom suave sem deformar edifícios ou curvas de trânsito."),
            ("Existe algum mapa plano sem nenhuma distorção?", "Não. O Theorema Egregium de Gauss provou matematicamente que nenhuma superfície com curvatura positiva pode ser planificada com curvatura zero sem deformações."),
            ("Qual é o único mapa 100% fiel à Terra?", "O globo terrestre tridimensional. Apenas sobre uma esfera com escala reduzida é possível manter ângulos, distâncias e proporções territoriais simultaneamente exatos.")
        ]
    },
    {
        "slug": "meridiano-de-greenwich-historia",
        "titulo": "Como o Meridiano de Greenwich Venceu Paris e Jerusalém Para Dividir os Fusos do Planeta?",
        "categoria": "Cartografia",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["greenwich"],
        "resumo": "Em 1884, delegados de 25 nações reuniram-se em Washington para eleger a Linha de Longitude Zero. Entenda a geopolítica naval britânica que derrotou o Meridiano de Paris.",
        "metrica1": ("Evento Decisivo", "Conferência de Washington (1884)"),
        "metrica2": ("Longitude Zero", "0° 0' 0\" W/E"),
        "metrica3": ("Frota Comercial 1884", "72% usava cartas de Greenwich"),
        "metrica4": ("Votos da Conferência", "22 a favor, 1 contra, 2 abstenções"),
        "lead": "A Linha do Equador é uma demarcação matemática incontestável dada pela própria rotação da Terra: é o círculo máximo equidistante dos polos geográficos, estabelecendo a latitude zero por física pura. A longitude, por outro lado, é uma convenção inteiramente política e humana. Não há nada no universo que determine que o meridiano central da Terra deva passar sobre um observatório astronômico nos arredores de Londres. No final do século XIX, antes que houvesse um horário mundial unificado, o mundo operava em um caos de relógios locais: trens colidiam nos Estados Unidos e marinheiros naufragavam calculando distâncias a partir de Paris, Ferro, Jerusalém, Roma ou Washington.",
        "secoes": [
            ("A Era da Anarquia dos Relógios e o Caos Ferroviário",
             "Até a década de 1880, cada cidade do mundo definia seu próprio meio-dia solar quando o sol atingia o zênite no céu. Quando eram 12:00 em Nova York, eram 12:12 em Boston e 11:48 na Filadélfia. Para quem viajava a cavalo, a diferença era imperceptível; mas quando as locomotivas a vapor começaram a cruzar continentes a 80 km/h, o desencontro de horários virou pesadelo logístico. Apenas nos Estados Unidos, as ferrovias operavam com mais de cinquenta horários ferroviários diferentes, gerando atrasos em massa e acidentes fatais."),
            ("A Conferência Internacional do Meridiano de 1884",
             "Diante da expansão dos cabos telegráficos submarinos e do comércio internacional, o presidente dos EUA Chester A. Arthur convocou 41 delegados de 25 países para a Conferência Internacional do Meridiano em outubro de 1884, em Washington. O objetivo era definir um único primeiro meridiano universal para calcular a contagem dos 24 fusos horários e as cartas de navegação mundiais. Três fortes candidatos disputavam a honra: o Meridiano de Ferro (usado desde a Antiguidade nas Ilhas Canárias), o Meridiano de Paris (defendido com unhas e dentes pelos franceses) e Greenwich."),
            ("Por Que Greenwich Venceu Paris de Goleada",
             "A diplomacia francesa argumentou veementemente que o meridiano inicial deveria ser neutro e apolítico, sugerindo até mesmo a Linha de Data no Pacífico ou o Meridiano de Paris compensado por medidas astronômicas. Mas a economia naval falou mais alto: naquele ano, mais de 72% de toda a tonelagem da marinha mercante mundial já navegava utilizando as cartas náuticas britânicas e as tábuas do Nautical Almanac, publicadas desde 1767 em Greenwich. Mudar todo o acervo impresso do mundo para Paris custaria centenas de milhões de libras. Na votação final, 22 nações votaram por Greenwich, o Haiti votou contra e França e Brasil abstiveram-se."),
            ("O Orgulho Francês e a Vingança das Horas",
             "A França recusou-se a aceitar a derrota de imediato. Durante quase três décadas, os relógios franceses continuaram operando oficialmente com o Meridiano de Paris, que ficava 9 minutos e 21 segundos à frente de Greenwich. Somente em 1911 o governo francês adotou o horário de Greenwich na lei, mas sem citar o nome da Grã-Bretanha no texto legal: a legislação dizia apenas que a França adotava 'o horário solar de Paris diminuído de 9 minutos e 21 segundos'. Somente em 1978 Paris alinhou formalmente sua legislação ao UTC internacional.")
        ],
        "citacao": ("Não estamos aqui para decidir qual nação é mais erudita ou poderosa, mas para adotar o meridiano que já guia as velas e os lemes de sete em cada dez navios no oceano.", "Almirante C. R. P. Rodgers, Presidente da Conferência de 1884"),
        "tabela_cabecalho": ["Meridiano Concorrente", "Localização Histórica", "Vantagem Alegada", "Resultado em 1884"],
        "tabela_linhas": [
            ["Greenwich (Inglaterra)", "0° 00' 00\"", "72% do comércio náutico mundial já usava", "Vencedor Oficial (22 votos)"],
            ["Paris (França)", "2° 20' 14\" E", "Tradição científica e Observatório Real", "Derrotado (Absteve-se)"],
            ["Ilha de Ferro (Canárias)", "17° 39' 46\" W", "Neutra, usada por Ptolomeu na Antiguidade", "Rejeitada por falta de dados astronômicos"],
            ["Jerusalém (Palestina)", "35° 13' 00\" E", "Significado religioso e espiritual neutro", "Descartada por razões práticas"],
            ["Washington (EUA)", "77° 03' 56\" W", "Sede do Observatório Naval Americano", "Retirada em prol de Greenwich"]
        ],
        "box_tatica": ("O Desvio Moderno do GPS", "Se você visitar hoje o Observatório de Greenwich com um smartphone, verá que o GPS aponta longitude 00° 00' 00\" cerca de 102 metros a leste da famosa linha de bronze cravada no chão. Essa discrepância decorre do sistema geodésico WGS84, que usa o centro de massa da Terra com satélites, corrigindo a leve distorção gravitacional local que afetava os telescópios do século XIX."),
        "ferramenta_link": "/ferramentas/calculadora-fuso/",
        "ferramenta_nome": "Calculadora de Fusos Horários e Meridianos",
        "faq": [
            ("Por que a Linha Internacional de Data fica no Pacífico?", "Fica no meridiano 180°, exatamente no lado oposto a Greenwich. Ao ser fixada em meio ao Oceano Pacífico, cruza uma área com pouquíssima terra habitada, minimizando o impacto de trocar de dia no calendário."),
            ("O que significa a sigla GMT e UTC?", "GMT é Greenwich Mean Time (Horário Médio de Greenwich), baseado na observação astronômica solar. UTC é o Tempo Universal Coordenado, adotado nos anos 1970 com base em relógios atômicos de césio ultra-precisos."),
            ("Por que o Brasil se absteve na votação de 1884?", "O delegado do Império do Brasil, Luís Cruls, reconheceu os méritos técnicos de Greenwich, mas absteve-se por diplomacia e cortesia científica para com a delegação francesa.")
        ]
    },
    {
        "slug": "ranking-menores-paises-do-mundo",
        "titulo": "Quais São os Dez Menores Países Soberanos da Terra e Como Suas Fronteiras Sobrevivem?",
        "categoria": "Rankings",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["vaticano"],
        "resumo": "Do Vaticano com seus 0,49 km² a Mônaco, Nauru e San Marino: conheça o ranking oficial dos microestados que cabem dentro de bairros e fazendas mas possuem voto na ONU.",
        "metrica1": ("Menor País do Mundo", "Vaticano (0,49 km²)"),
        "metrica2": ("Microestado Mais Antigo", "San Marino (Ano 301 d.C.)"),
        "metrica3": ("Menor República", "Nauru (21 km²)"),
        "metrica4": ("Membros da ONU", "Todos soberanos plenos"),
        "lead": "No xadrez geopolítico global dominado por colossos continentais como Rússia, Canadá, China e Brasil, existem pequenos enclaves territoriais que desafiam o senso comum sobre soberania. São nações que não possuem espaço para pistas de pouso comerciais, cujas fronteiras podem ser percorridas a pé em uma caminhada matinal e cujos parlamentos governam menos habitantes do que um quarteirão de Copacabana. Ainda assim, esses microestados emitem seus próprios passaportes, cunham moedas oficiais, mantêm embaixadas e possuem o mesmo voto de peso soberano na Assembleia Geral das Nações Unidas que os Estados Unidos ou a Alemanha.",
        "secoes": [
            ("1. Vaticano (0,49 km²) e 2. Mônaco (2,02 km²): Os Titãs da Escala Mínima",
             "No topo absoluto do ranking dos menores territórios soberanos da Terra está o Estado da Cidade do Vaticano, encravado no centro de Roma. Com apenas 0,49 quilômetros quadrados, ele é menor que o Central Park de Nova York e abriga cerca de 800 cidadãos. Criado pelo Tratado de Latrão em 1929 com Mussolini, o Vaticano é uma monarquia teocrática absoluta. Em segundo lugar está o Principado de Mônaco, na Côte d'Azur: com 2,02 km² e mais de 38 mil habitantes, ostenta a maior densidade populacional e a maior concentração de milionários do planeta."),
            ("3. Nauru (21 km²) e 4. Tuvalu (26 km²): Os Gigantes Isolados da Micronésia",
             "Na Oceania encontram-se os dois menores países insulares do globo. Nauru, com 21 km² sobre um atol de coral isolado, é a menor república do mundo. Nos anos 1970, chegou a ter a maior renda per capita do planeta com a mineração de fosfato de guano; hoje, com as reservas esgotadas, enfrenta o desafio de reconverter sua economia. Tuvalu, com 26 km² espalhados em nove ilhas de baixa altitude, financia seu orçamento alugando o domínio de internet de topo '.tv' para empresas de tecnologia e luta contra o aumento do nível do mar."),
            ("5. San Marino (61 km²) e 6. Liechtenstein (160 km²): As Fortalezas Alpinas",
             "Encravado no norte da Itália sobre o Monte Titano, San Marino é considerado a república soberana mais antiga em funcionamento contínuo do mundo, fundada em 301 d.C. por São Marino. Sobreviveu intocado às guerras napoleônicas e à unificação italiana. Logo a seguir vem o Principado de Liechtenstein, cravado entre a Suíça e a Áustria nos Alpes: com 160 km², é um dos dois únicos países duplamente encravados do mundo (cercado apenas por nações que também não têm mar), liderando o ranking mundial de patentes per capita e tecnologia médica."),
            ("7. Ilhas Marshall, 8. São Cristóvão e Neves, 9. Maldivas e 10. Malta",
             "Completam a lista das dez menores nações soberanas as Ilhas Marshall (181 km² no Pacífico central); São Cristóvão e Neves (261 km² no Caribe, o menor país das Américas); a República das Maldivas (298 km² distribuídos em 1.192 ilhotas no Oceano Índico); e a República de Malta (316 km² no Mediterrâneo, entre a Sicília e a Tunísia), uma potência histórica naval que resistiu a cercos fenícios, romanos, otomanos e alemães.")
        ],
        "citacao": ("A soberania de uma nação não se mede pela quantidade de quilômetros de terra que ela ocupa no mapa, mas pela legitimidade de suas leis e pela vontade inabalável de seu povo de não ser absorvido por seus vizinhos.", "Capitão Regente de San Marino, Discurso Oficial perante o Conselho Grande e Geral"),
        "tabela_cabecalho": ["Posição", "País Soberano", "Área Oficial (km²)", "Continente", "População Aprox."],
        "tabela_linhas": [
            ["1º", "Vaticano", "0,49 km²", "Europa", "800 hab."],
            ["2º", "Mônaco", "2,02 km²", "Europa", "39.000 hab."],
            ["3º", "Nauru", "21 km²", "Oceania", "12.500 hab."],
            ["4º", "Tuvalu", "26 km²", "Oceania", "11.200 hab."],
            ["5º", "San Marino", "61 km²", "Europa", "34.000 hab."],
            ["6º", "Liechtenstein", "160 km²", "Europa", "39.500 hab."],
            ["7º", "Ilhas Marshall", "181 km²", "Oceania", "42.000 hab."],
            ["8º", "São Cristóvão e Neves", "261 km²", "América", "48.000 hab."],
            ["9º", "Maldivas", "298 km²", "Ásia", "520.000 hab."],
            ["10º", "Malta", "316 km²", "Europa", "530.000 hab."]
        ],
        "box_tatica": ("A Ordem de Malta: O País Sem Território", "Embora não entre no ranking por não possuir território físico soberano contínuo, a Soberana Ordem Militar de Malta é reconhecida pelo direito internacional como entidade soberana plena: emite passaportes diplomáticos, possui embaixadores em mais de 100 países e tem status de observador na ONU com sede no Palazzo Malta em Roma."),
        "ferramenta_link": "/ferramentas/radar-microestados/",
        "ferramenta_nome": "Radar de Microestados em Escala Real",
        "faq": [
            ("Qual é o menor país das Américas?", "São Cristóvão e Neves (Saint Kitts and Nevis), no Caribe, com 261 km² de área e cerca de 48 mil habitantes."),
            ("O Vaticano tem exército próprio?", "A segurança do Papa e dos palácios apostólicos é exercida pela Guarda Suíça Pontifícia, fundada em 1506, o menor e mais antigo exército em atividade do planeta."),
            ("Esses países têm moeda própria?", "O Vaticano, Mônaco e San Marino utilizam o Euro através de acordos bilaterais especiais com a União Europeia, emitindo moedas de colecionador raríssimas.")
        ]
    },
    {
        "slug": "ranking-capitais-mais-altas-do-mundo",
        "titulo": "Quais São as Dez Capitais Mais Altas do Planeta Onde Viver Acima das Nuvens é a Regra?",
        "categoria": "Rankings",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["lapaz"],
        "resumo": "De La Paz e Quito a Thimphu e Bogotá: conheça o ranking das sedes de governo situadas a mais de 2.000 metros de altitude e os desafios da vida com pouco oxigênio.",
        "metrica1": ("Capital Mais Alta", "La Paz (Bolívia, 3.640m)"),
        "metrica2": ("Segunda Colocada", "Quito (Equador, 2.850m)"),
        "metrica3": ("Pressão Atmosférica", "Até 40% menor que o mar"),
        "metrica4": ("Teleférico Urbano", "Mi Teleférico La Paz (33 km)"),
        "lead": "Para a grande maioria da humanidade concentrada em planícies costeiras e deltas de rios ao nível do mar, a altitude é um destino de férias ou uma barreira geográfica intransponível. No entanto, para dezenas de milhões de cidadãos na América do Sul, Ásia e África, o centro político, econômico e cultural de suas nações situa-se a altitudes onde o oxigênio é rarefeito, a água ferve abaixo dos 90 graus Celsius e os aviões precisam de pistas com quilômetros extras de extensão para decolar no ar fino. Viver nessas capitais de altitude moldou línguas, arquiteturas de montanha e uma fisiologia humana singular adaptada a suportar a hipóxia crônica.",
        "secoes": [
            ("1. La Paz (Bolívia, 3.640 m) e 2. Quito (Equador, 2.850 m): As Gigantes dos Andes",
             "A liderança incontestável do ranking global de capitais mais elevadas pertence a La Paz, sede do governo e do legislativo da Bolívia (embora a capital constitucional histórica seja Sucre, a 2.810 m). Situada em um cânion profundo sob a imponente montanha Illimani, o centro de La Paz fica a 3.640 metros, enquanto sua cidade contínua, El Alto, atinge inacreditáveis 4.150 metros. Em segundo lugar está Quito, no Equador, erguida nas encostas do vulcão ativo Pichincha a 2.850 metros, abrigando o centro histórico colonial mais bem preservado das Américas."),
            ("3. Thimphu (Butão, 2.334 m) e 4. Bogotá (Colômbia, 2.640 m)",
             "Na Cordilheira do Himalaia encontra-se Thimphu, a capital do Reino do Butão, cravada em um vale verdejante a 2.334 metros de altitude. Famosa por medir o desenvolvimento pelo Índice de Felicidade Interna Bruta em vez do PIB, Thimphu é uma das únicas capitais do mundo sem um único semáforo de trânsito. De volta aos Andes colombianos, a megacidade de Bogotá ocupa a terceira posição entre as capitais de alta densidade: situada em um altiplano a 2.640 metros de altitude, abriga mais de 8 milhões de pessoas em um clima temperado perpétuo a apenas 4 graus ao norte da Linha do Equador."),
            ("5. Adis Abeba (Etiópia, 2.355 m) e 6. Asmara (Eritreia, 2.325 m)",
             "O Chifre da África abriga duas das capitais mais elevadas da Terra. Adis Abeba, a metrópole de mais de 5 milhões de habitantes e capital diplomática da União Africana, localiza-se nos planaltos da Etiópia a 2.355 metros, o que explica os treinos de elite dos fundistas e maratonistas do país. Ao norte, Asmara, a capital da Eritreia a 2.325 metros, é famosa por seu patrimônio de arquitetura futurista e Art Déco dos anos 1930, preservada intacta desde o período colonial italiano."),
            ("Do México ao Iêmen: As Posições Restantes do Top 10",
             "Completam o ranking oficial: Cidade do México (2.240 m, erguida sobre a antiga bacia lacustre de Tenochtitlan); Sanaa (Iêmen, 2.250 m, com seus arranha-céus históricos de adobe de mil anos); Thimphu no Butão; Teerã (Irã, cujos bairros ao norte tocam 1.800 m aos pés da cordilheira Alborz); e Cabul (Afeganistão, a 1.790 m, encravada entre as montanhas do Hindu Kush).")
        ],
        "citacao": ("Aqui em cima, a montanha nos ensina a respirar devagar e a pensar com a paciência das rochas.", "Jaime Paz Zamora, Ex-Presidente da Bolívia"),
        "tabela_cabecalho": ["Posição", "Capital", "País", "Altitude Oficial", "Cordilheira / Região"],
        "tabela_linhas": [
            ["1º", "La Paz (Sede de Governo)", "Bolívia", "3.640 metros", "Cordilheira dos Andes"],
            ["2º", "Quito", "Equador", "2.850 metros", "Cordilheira dos Andes"],
            ["3º", "Bogotá", "Colômbia", "2.640 metros", "Altiplano Cundiboyacense"],
            ["4º", "Adis Abeba", "Etiópia", "2.355 metros", "Planalto Etíope"],
            ["5º", "Thimphu", "Butão", "2.334 metros", "Cordilheira do Himalaia"],
            ["6º", "Asmara", "Eritreia", "2.325 metros", "Planalto da Eritreia"],
            ["7º", "Sanaa", "Iêmen", "2.250 metros", "Montanhas Sarawat"],
            ["8º", "Cidade do México", "México", "2.240 metros", "Vale do México"],
            ["9º", "Teerã (Zonas Altas)", "Irã", "1.800 metros", "Cordilheira Alborz"],
            ["10º", "Cabul", "Afeganistão", "1.790 metros", "Cordilheira Hindu Kush"]
        ],
        "box_tatica": ("O Maior Metrô de Cabos do Mundo em La Paz", "Diante da geografia acidentada com desníveis de quase 1.000 metros entre o vale e o planalto, La Paz e El Alto construíram a maior rede de transporte por teleférico do planeta: a rede 'Mi Teleférico' possui 10 linhas, 36 estações e 33 km de extensão, transportando 300 mil passageiros diários sem trânsito."),
        "ferramenta_link": "/jogos/capitais/",
        "ferramenta_nome": "Desafio das Capitais do Mundo (Jogo Interativo)",
        "faq": [
            ("Qual a diferença entre La Paz e Sucre na Bolívia?", "Sucre é a capital constitucional e sede do Poder Judiciário (a 2.810 m). La Paz é a sede de fato dos poderes Executivo e Legislativo, sendo considerada a capital governamental."),
            ("A água ferve em temperatura mais baixa nessas capitais?", "Sim. Pela menor pressão atmosférica em La Paz (3.640 m), a água ferve a cerca de 87°C em vez de 100°C, alterando receitas culinárias e o tempo de cozimento."),
            ("Por que os atletas sentem tanto a altitude nessas cidades?", "Pela baixa pressão barométrica, o oxigênio está mais disperso no ar. O organismo humano precisa de semanas de aclimatação para aumentar a contagem de glóbulos vermelhos.")
        ]
    },
    {
        "slug": "ranking-maiores-paises-sem-mar",
        "titulo": "Quais São os Dez Maiores Países Sem Acesso ao Mar do Mundo e Quanto Custa o Isolamento?",
        "categoria": "Rankings",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["cazaquistao"],
        "resumo": "Do gigante Cazaquistão com seus 2,7 milhões de km² à Mongólia e Bolívia: descubra o ranking das nações encravadas e o imposto invisível que pagam sobre o comércio global.",
        "metrica1": ("Maior País Sem Mar", "Cazaquistão (2.724.900 km²)"),
        "metrica2": ("Segundo Maior", "Mongólia (1.564.116 km²)"),
        "metrica3": ("Custo Logístico Extra", "+30% a +45% no Frete"),
        "metrica4": ("Países Sem Mar no Mundo", "44 nações soberanas"),
        "lead": "No comércio internacional contemporâneo, onde mais de 80% de todas as mercadorias consumidas no planeta viajam em contêineres a bordo de navios mercantes pelo oceano, não ter litoral marítimo próprio é uma das maiores desvantagens econômicas que a geografia pode impor a um Estado soberano. Os chamados Países Sem Litoral (Landlocked Developing Countries) enfrentam tarifas alfandegárias de trânsito, dependência política de governos vizinhos para escoar seus produtos e custos de frete até 45% mais caros do que nações com portos de águas profundas. Ainda assim, alguns desses gigantes continentais acumulam riquezas monumentais no subsolo e desafiam a tirania do mapa.",
        "secoes": [
            ("1. Cazaquistão (2.724.900 km²): O Colosso da Ásia Central",
             "Com uma extensão territorial equivalente a toda a Europa Ocidental, o Cazaquistão lidera o ranking mundial com folga: é o nono maior país do planeta em área total e o maior estado sem litoral da história humana. Embora banhado pelo Mar Cáspio, este é na verdade um imenso lago endorreico sem ligação natural direta aos oceanos abertos do globo. Para exportar seus bilhões de barris de petróleo e mais de 40% do urânio consumido pelas usinas nucleares do mundo, o Cazaquistão depende de oleodutos cruzando a Rússia ou da complexa Rota Transcaspiana até o Mar Negro."),
            ("2. Mongólia (1.564.116 km²) e 3. Chade (1.284.000 km²)",
             "Na segunda colocação encontra-se a Mongólia, encravada entre duas superpotências globais: a Rússia ao norte e a China ao sul. Sem acesso marítimo em milhares de quilômetros ao redor, a Mongólia precisa de ferrovias com bitolas diferentes para exportar seu cobre e carvão vegetal. Na terceira posição está o Chade, no centro da África, onde distâncias de mais de 1.500 km através de florestas e desertos separam sua capital, N'Djamena, dos portos marítimos mais próximos em Camarões e na Nigéria."),
            ("4. Níger, 5. Mali e 6. Etiópia: Os Dilemas do Sahel e do Chifre Africano",
             "O continente africano abriga 16 das 44 nações sem mar do planeta. O Níger (1,26 milhão de km²) e o Mali (1,24 milhão de km²) enfrentam o isolamento através do Saara árido, dependendo de corredores rodoviários até os portos de Abidjan na Costa do Marfim ou Cotonou no Benin. A Etiópia (1,1 milhão de km²), por sua vez, é o país sem litoral mais populoso do planeta, com mais de 125 milhões de habitantes pagando mais de US$ 1,5 bilhão por ano em taxas portuárias ao pequeno vizinho Djibuti desde que perdeu sua costa com a independência da Eritreia em 1993."),
            ("América Latina: A Bolívia e o Paraguai",
             "Nas Américas, apenas dois países não possuem saída soberana para o mar. A Bolívia (1.098.581 km², 7ª colocada no ranking global) perdeu seus 400 km de litoral no Oceano Pacífico para o Chile na Guerra do Pacífico (1879-1884), mantendo viva até hoje uma reivindicação diplomática perante a Corte de Haia. Já o Paraguai (406.752 km²) compensa seu isolamento marítimo utilizando a Hidrovia Paraná-Paraguai, que permite a barcaças fluviais navegarem diretamente até os portos de Buenos Aires e Montevidéu no Atlântico.")
        ],
        "citacao": ("Estar sem mar não é apenas uma barreira geográfica; é um imposto invisível que incide sobre cada quilo de comida, remédio ou aço que entra e sai do nosso território.", "Relatório Oficial da UN-OHRLLS sobre Países em Desenvolvimento Sem Litoral"),
        "tabela_cabecalho": ["Posição", "País Soberano", "Área Territorial (km²)", "Continente", "Porto Principal Utilizado"],
        "tabela_linhas": [
            ["1º", "Cazaquistão", "2.724.900 km²", "Ásia", "Novorossiysk (Rússia / Mar Negro)"],
            ["2º", "Mongólia", "1.564.116 km²", "Ásia", "Tianjin (China / Mar Amarelo)"],
            ["3º", "Chade", "1.284.000 km²", "África", "Douala (Camarões / Atlântico)"],
            ["4º", "Níger", "1.267.000 km²", "África", "Cotonou (Benin / Atlântico)"],
            ["5º", "Mali", "1.240.192 km²", "África", "Dakar (Senegal / Atlântico)"],
            ["6º", "Etiópia", "1.104.300 km²", "África", "Porto de Djibuti (Golfo de Áden)"],
            ["7º", "Bolívia", "1.098.581 km²", "América do Sul", "Arica / Antofagasta (Chile)"],
            ["8º", "Zâmbia", "752.618 km²", "África", "Porto de Lobito (Angola) / Dar es Salaam"],
            ["9º", "Afeganistão", "652.864 km²", "Ásia", "Karachi (Paquistão / Índico)"],
            ["10º", "Rep. Centro-Africana", "622.984 km²", "África", "Douala (Camarões / Atlântico)"]
        ],
        "box_tatica": ("O Caso Único dos Países Duplamente Sem Litoral", "No mundo inteiro existem apenas dois países 'duplamente sem litoral' (doubly landlocked): Liechtenstein e Uzbequistão. Isso significa que para alcançar o oceano, um cidadão dessas nações precisa cruzar pelo menos dois países soberanos vizinhos consecutivos."),
        "ferramenta_link": "/ferramentas/comparador-paises/",
        "ferramenta_nome": "Simulador de Escala Territorial de Países Sem Mar",
        "faq": [
            ("O Mar Cáspio não conta como mar?", "Geograficamente é o maior lago de água salgada da Terra. Por não ter saída natural aberta para o oceano mundial, os países banhados exclusivamente por ele são legalmente sem litoral."),
            ("Qual país tem a maior marinha de guerra sem ter mar?", "A Bolívia mantém uma força naval com mais de 5.000 marinheiros e embarcações de patrulha no Lago Titicaca e nos rios da bacia amazônica."),
            ("Quantos países sem litoral existem na Europa?", "A Europa possui 16 países sem litoral, incluindo Suíça, Áustria, República Tcheca, Hungria, Eslováquia e Luxemburgo, que superaram o isolamento com ferrovias e integração da UE.")
        ]
    },
    {
        "slug": "tratado-de-tordesilhas-fronteiras",
        "titulo": "Como o Tratado de Tordesilhas Dividiu o Planeta Entre Portugal e Espanha Antes de Sabermos o Tamanho da Terra?",
        "categoria": "História",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["tordesilhas"],
        "resumo": "Assinado em 1494 na pequena vila espanhola de Tordesilhas, o pacto traçou um meridiano imaginário que repartiu o Novo Mundo e forjou o mapa colonial da América Latina.",
        "metrica1": ("Data da Assinatura", "7 de Junho de 1494"),
        "metrica2": ("Demarcação Oficial", "370 léguas a oeste de Cabo Verde"),
        "metrica3": ("Papa Avalizador", "Alexandre VI (Bula Inter Caetera)"),
        "metrica4": ("Tratado Sucessor", "Tratado de Madri (1750, Uti Possidetis)"),
        "lead": "No dia 7 de junho de 1494, em uma pacata vila às margens do rio Douro na Espanha, os reis católicos Fernando e Isabel e o monarca português Dom João II assinaram o mais audacioso acordo diplomático da história moderna. Sem mapas precisos, sem saber calcular a longitude no mar e sem fazer ideia de que existia um continente inteiro de 42 milhões de quilômetros quadrados entre a Europa e a Ásia, dois reinos da Península Ibérica traçaram uma linha reta imaginária de polo a polo e dividiram todas as terras do planeta entre si. Esse meridiano forjou a gênese do Brasil, determinou por que metade do continente fala português e a outra fala espanhol e inaugurou a diplomacia de fronteiras moderna.",
        "secoes": [
            ("A Bula Papal de 1493 e a Guerra Iminente Entre Vizinhos",
             "Quando Cristóvão Colombo retornou a Lisboa em março de 1493 anunciando que havia alcançado ilhas nas 'Índias' pelo Ocidente sob a bandeira de Castela, uma crise militar imediata explodiu. O rei Dom João II de Portugal invocou o Tratado de Alcáçovas de 1479, alegando que todas as terras ao sul das Ilhas Canárias pertenciam à coroa portuguesa. Em resposta, os espanhóis recorreram ao Papa Alexandre VI (o cardeal espanhol Rodrigo Bórgia), que emitiu a Bula Inter Caetera traçando uma linha a apenas 100 léguas das Ilhas de Cabo Verde. Sentindo-se lesado, Portugal ameaçou enviar caravelas de guerra para interceptar a frota espanhola."),
            ("A Jogada de Mestre Diplomática das 370 Léguas",
             "Dom João II recusou a arbitragem papal e exigiu negociações diretas entre as duas cortes em Tordesilhas. Demonstrando um conhecimento de navegação muito superior ao dos espanhóis, os negociadores portugueses insistiram tenazmente em empurrar o meridiano 270 léguas mais a oeste, fixando-o a exatas 370 léguas a oeste do arquipélago de Cabo Verde. Essa alteração empurrou a linha para aproximadamente o meridiano 46° 37' W. Quando Pedro Álvares Cabral aportou em Porto Seguro seis anos depois, em abril de 1500, o litoral leste da América do Sul já estava formal e legalmente garantido sob a jurisdição do Reino de Portugal."),
            ("O Tratado de Saragoça de 1529: A Divisão do Outro Lado da Terra",
             "O grande dilema geométrico de Tordesilhas era que a Terra é uma esfera contínua: traçar um meridiano em um hemisfério exige traçar o seu antimeridiano correspondente do outro lado do globo. Quando Fernão de Magalhães completou a primeira circum-navegação em serviço da Espanha e descobriu as Ilhas Molucas (na atual Indonésia), ricas em noz-moscada e cravo-da-índia, as duas potências voltaram a entrar em conflito. A disputa só foi resolvida em 1529 com o Tratado de Saragoça, que traçou o antimeridiano no Oceano Pacífico, concedendo a Espanha as Filipinas e a Portugal o monopólio das cobiçadas Ilhas das Especiarias."),
            ("Como os Bandeirantes e o Tratado de Madri de 1750 Rasgaram a Linha",
             "Pelo traçado estrito de Tordesilhas, o Brasil português deveria terminar em Laguna (Santa Catarina) ao sul e em Belém ao norte: Cuiabá, Manaus, Goiás, Minas Gerais e São Paulo ficavam em território que pertencia legalmente à Espanha. Entretanto, a União Ibérica (1580-1640) apagou temporariamente a fronteira entre os dois impérios sob o mesmo rei. Aproveitando o vácuo, as bandeiras paulistas e missões religiosas penetraram milhares de quilômetros sertão adentro. Em 1750, o diplomata Alexandre de Gusmão negociou o Tratado de Madri, consagrando o princípio do Uti Possidetis ('a terra pertence a quem de fato a ocupa e povoa'), desenhando os limites continentais do Brasil contemporâneo.")
        ],
        "citacao": ("Que me mostrem o testamento de nosso pai Adão para que eu veja como ele dividiu o mundo entre o rei de Espanha e o rei de Portugal.", "Rei Francisco I da França, contestando a partilha de Tordesilhas em 1540"),
        "tabela_cabecalho": ["Tratado Histórico", "Ano", "Demarcação Chave", "Impacto nas Fronteiras"],
        "tabela_linhas": [
            ["Tratado de Alcáçovas", "1479", "Paralelo ao sul das Canárias", "Garante o monopólio da rota africana a Portugal"],
            ["Bula Inter Caetera", "1493", "100 léguas a oeste de Cabo Verde", "Arbitragem pró-espanhola de Alexandre VI"],
            ["Tratado de Tordesilhas", "1494", "370 léguas a oeste de Cabo Verde", "Reserva o litoral do Brasil para a coroa portuguesa"],
            ["Tratado de Saragoça", "1529", "Antimeridiano 297,5 léguas a leste", "Divide as Ilhas das Especiarias na Ásia"],
            ["Tratado de Madri", "1750", "Princípio do Uti Possidetis", "Revoga Tordesilhas e legaliza a expansão brasileira"]
        ],
        "box_tatica": ("O Marco de Cananeia e Laguna", "O meridiano de Tordesilhas cortava o litoral brasileiro entre Belém do Pará, ao norte, e a cidade de Laguna, em Santa Catarina, ao sul. Hoje, marcos de pedra e memoriais históricos assinalam os locais exatos onde passava a linha imaginária que dividiu o continente americano."),
        "ferramenta_link": "/jogos/fronteiras/",
        "ferramenta_nome": "Fronteiras do Mundo (Jogo Histórico de Limites)",
        "faq": [
            ("Onde ficava a linha de Tordesilhas no Brasil atual?", "A linha passava aproximadamente de Belém do Pará até Laguna em Santa Catarina, correspondendo hoje perto do meridiano 48° Oeste."),
            ("A Inglaterra e a França aceitaram Tordesilhas?", "Nunca. Reis franceses e ingleses financiaram corsários e piratas no Atlântico, ignorando solenemente o tratado por considerá-lo um monopólio sem respaldo bíblico ou jurídico."),
            ("Quanto media uma légua marítima em 1494?", "Na navegação ibérica da época, uma légua marítima correspondia a cerca de 5,55 quilômetros (três milhas náuticas), totalizando cerca de 2.050 km a oeste de Cabo Verde.")
        ]
    },
    {
        "slug": "queda-de-constantinopla-rotas",
        "titulo": "Como a Queda de Constantinopla em 1453 Forçou a Europa a Redesenhar os Mapas do Mundo?",
        "categoria": "História",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["constantinopla"],
        "resumo": "Em 29 de maio de 1453, os canhões do sultão Mehmed II derrubaram as muralhas bizantinas, cortaram a Rota da Seda e impeliram os europeus a desbravar os oceanos desconhecidos.",
        "metrica1": ("Data da Queda", "29 de Maio de 1453"),
        "metrica2": ("Conquistador Otomano", "Sultão Mehmed II (O Conquistador)"),
        "metrica3": ("Fim Histórico", "Queda do Império Romano do Oriente"),
        "metrica4": ("Consequência Geográfica", "Início das Grandes Navegações"),
        "lead": "Na manhã de 29 de maio de 1453, quando os canhões de bronze do sultão otomano Mehmed II abriram brechas irreversíveis nas lendárias muralhas teodosianas de Constantinopla, encerrou-se não apenas o Império Bizantino e os mais de mil anos de continuidade do Império Romano do Oriente. O mundo medieval desmoronava sob os escombros do Bósforo. Ao transformar a capital do cristianismo oriental em Istambul e tomar o controle exclusivo dos estreitos que ligavam o Mar Mediterrâneo ao Mar Negro, o Império Otomano impôs um bloqueio tributário estrangulador sobre as rotas terrestres de seda, especiarias e porcelana. Sem conseguir chegar à Ásia por terra, a Europa foi forçada a virar as costas para o Mediterrâneo e lançar-se às trevas do Atlântico aberto.",
        "secoes": [
            ("O Chokepoint do Bósforo: A Fortaleza Que Bloqueou a Cristandade",
             "Durante um milênio, Constantinopla foi a cidade mais rica e cobiçada da Eurásia por uma razão geográfica implacável: ela controlava o Estreito de Bósforo e o Corno de Ouro, o estreito estrangulamento marítimo de apenas 700 metros de largura que conecta a Europa à Ásia Menor. Quem controlava a cidade cobrava pedágio sobre cada fardo de pimenta da Índia, canela do Ceilão e rolo de seda chinesa que entrava na Europa através de mercadores venezianos e genoveses. Com a vitória otomana, os impostos alfandegários foram multiplicados e comerciantes cristãos foram sumariamente expulsos das rotas caravanistas terrestres."),
            ("A Pimenta Que Valia Mais Que Ouro e a Inflação Europeia",
             "No século XV, as especiarias não eram artigos de luxo supérfluo: elas eram essenciais para a preservação de carnes durante os longos invernos europeus e para a fabricação de medicamentos básicos. Quando os otomanos fecharam as passagens terrestres, o preço da pimenta-do-reino e do cravo explodiu nas praças comerciais de Gênova e Veneza, atingindo valores superiores ao próprio peso em ouro. Nações da costa atlântica, como Portugal e Espanha, viram-se diante de um ultimato econômico: ou encontravam uma rota naval alternativa contornando a África ou entrariam em colapso financeiro."),
            ("A Escola de Sagres e a Conquista da Rota do Cabo",
             "Comandada pelo Infante Dom Henrique e impulsionada pela carência comercial, Portugal iniciou a mais metódica corrida de exploração científica da história. Marinheiros lusitanos desenvolveram a caravela latina, dominaram o astrolábio e a bússola e aprenderam a fazer a manobra da 'volta do mar' no Atlântico Sul. Em 1488, Bartolomeu Dias dobrou o temido Cabo das Tormentas (rebatizado de Cabo da Boa Esperança), e em 1498 Vasco da Gama aportou em Calicute na Índia, inaugurando a rota marítima das especiarias e transferindo o eixo de riqueza do Mediterrâneo para o Atlântico."),
            ("O Nascimento da Cartografia Renascentista e o Êxodo de Eruditos",
             "A queda da cidade produziu ainda uma consequência cultural decisiva: centenas de sábios, matemáticos e astrônomos bizantinos fugiram para a Itália carregando manuscritos clássicos da biblioteca imperial, incluindo textos de Ptolomeu, Platão e geógrafos gregos que haviam sido esquecidos no Ocidente. Essa infusão de conhecimento impulsionou o Renascimento italiano e permitiu que cartógrafos como Fra Mauro e Martin Waldseemüller superassem os mapas teológicos medievais em prol de cartas náuticas fundamentadas na matemática e na observação astronômica empírica.")
        ],
        "citacao": ("A cidade caiu e com ela o mundo que conhecíamos. Doravante, quem quiser saborear as especiarias do Oriente terá de desafiar os monstros e as calmarias do mar sem fim.", "Carta de um mercador genovês ao Senado de Veneza, Junho de 1453"),
        "tabela_cabecalho": ["Antes de 1453 (Mediterrâneo)", "Depois de 1453 (Atlântico)", "Consequência Prática"],
        "tabela_linhas": [
            ["Rota Terrestre da Seda e Bósforo", "Rota Marítima do Cabo da Boa Esperança", "Transporte marítimo substitui caravanas"],
            ["Hegemonia de Veneza e Gênova", "Ascensão de Lisboa, Sevilha e Antuérpia", "Declínio das cidades-estado italianas"],
            ["Mapas Medievais Teológicos (T-O)", "Cartas Portulano e Projeções Geométricas", "Nascimento da cartografia moderna"],
            ["Monopólio Comercial Otomano", "Descoberta da América e do Brasil", "Criação do comércio em escala global"],
            ["Império Bizantino como barreira", "Expansão otomana até os portões de Viena", "Redefinição militar da Europa Central"]
        ],
        "box_tatica": ("A Cadeia do Corno de Ouro e o Transporte de Navios por Terra", "Um dos feitos táticos mais brilhantes do cerco de 1453 foi ordenado por Mehmed II: para contornar a gigantesca corrente de ferro que os bizantinos estenderam na foz do Corno de Ouro para impedir a entrada de navios, o sultão mandou construir uma estrada de troncos de madeira engraxados e arrastou 70 navios de guerra por cima da colina de Galata durante a noite, atacando os bizantinos pela retaguarda."),
        "ferramenta_link": "/jogos/onde-fica/",
        "ferramenta_nome": "Onde Fica no Mapa? (Estreitos e Rotas Estratégicas)",
        "faq": [
            ("Por que Constantinopla era tão difícil de ser conquistada?", "A cidade era protegida por três camadas concêntricas de muralhas de pedra de 12 metros de altura (Muralhas Teodosianas) e cercada por água em três lados."),
            ("Qual arma foi decisiva para a queda da cidade?", "Os canhões de cerco gigantescos fundidos pelo engenheiro húngaro Urbano, incluindo a bombarda de Basilicata, capaz de disparar rochas de 600 kg a mais de um quilômetro."),
            ("Como a queda levou ao descobrimento da América?", "A busca desesperada por uma rota marítima para as especiarias da Índia sem passar pelo território otomano levou Colombo a navegar para o oeste, encontrando as Américas em 1492.")
        ]
    },
    {
        "slug": "marco-zero-equador-macapa",
        "titulo": "Por Que a Linha do Equador Corta o Brasil no Meio e o Marco Zero Fica em Macapá?",
        "categoria": "Curiosidades",
        "data": "18 Out 2026",
        "iso_date": "2026-10-18",
        "tempoLeitura": 8,
        "img": images["equador"],
        "resumo": "Macapá é a única capital estadual brasileira cortada exatamente pela latitude 0° 0' 0\". Conheça o monumento do Marco Zero, o fenômeno do equinócio e a verdade sobre o efeito Coriolis.",
        "metrica1": ("Latitude Exata", "0° 00' 00\""),
        "metrica2": ("Monumento Marco Zero", "Obelisco de 30 metros"),
        "metrica3": ("Fenômeno Solar", "Equinócio de Primavera e Outono"),
        "metrica4": ("Estádio de Futebol Único", "Zerão (cada time em um hemisfério)"),
        "lead": "No litoral norte do Brasil, onde as águas barrentas do Rio Amazonas encontram o Oceano Atlântico em uma foz monumental de mais de 300 quilômetros de largura, repousa uma das anomalias geográficas mais singulares das Américas. Macapá, a capital do estado do Amapá, é a única capital estadual do continente americano cortada milimetricamente pela Linha do Equador. Na cidade, é possível colocar um pé no Hemisfério Norte e outro no Hemisfério Sul, assistir a uma partida de futebol onde cada time defende um hemisfério do globo terrestre e observar o sol projetar sua sombra exatamente sob os pés durante o fenômeno cósmico do equinócio.",
        "secoes": [
            ("O Monumento do Marco Zero e o Raio Solar do Equinócio",
             "Erguido na rodovia JK a poucos quilômetros do centro de Macapá, o Monumento do Marco Zero é um obelisco de concreto de trinta metros de altura com uma abertura circular no topo. Duas vezes por ano, durante os equinócios de março (outono austral) e setembro (primavera austral), quando o sol cruza diretamente o plano do equador celeste e o dia tem exatamente a mesma duração da noite em todo o planeta, os raios solares passam através da fresta e projetam um feixe de luz vertical perfeito sobre a linha divisória cravada no piso da praça."),
            ("O Estádio Zerão: Onde o Meio de Campo Divide os Hemisférios",
             "Talvez a curiosidade urbana mais famosa de Macapá seja o Estádio Milton de Souza Corrêa, popularmente batizado de 'Zerão'. Inaugurado em 1990, o estádio foi propositalmente alinhado para que a linha de meio de campo coincida com o paralelo zero do globo. Quando dois times entram em campo para disputar uma partida do campeonato amapaense, um time joga no Hemisfério Norte enquanto o adversário ataca a partir do Hemisfério Sul, trocando de hemisfério no intervalo do jogo."),
            ("O Mito do Ralo da Pia e a Verdade Sobre a Força de Coriolis",
             "Um dos truques turísticos mais populares em marcos equatoriais ao redor do mundo — de Quito no Equador a Macapá — consiste em demonstrar uma bacia com água que supostamente gira no sentido horário no Hemisfério Sul, no sentido anti-horário no Hemisfério Norte e desce em linha reta exatamente sobre a linha do Equador. Na física, essa demonstração é uma farsa deliberada montada para arrancar gorjetas. Embora a Força de Coriolis causada pela rotação da Terra seja real e determine a rotação de furacões e correntes oceânicas de milhares de quilômetros, em escalas milimétricas como uma pia de banheiro sua magnitude é milhões de vezes menor que a assimetria do ralo e a inércia da água despejada."),
            ("Apenas 13 Países no Mundo São Cortados Pelo Equador",
             "Apesar de ser a linha de referência primordial de toda a navegação e cartografia terrestre, o paralelo zero possui 40.075 quilômetros de circunferência, mas quase 80% de seu trajeto passa por águas oceânicas abertas. No mundo inteiro, apenas 13 países têm a honra geográfica de serem cortados em terra firme pela Linha do Equador: São Tomé e Príncipe, Gabão, República do Congo, República Democrática do Congo, Uganda, Quênia, Somália, Maldivas, Indonésia, Kiribati, Equador, Colômbia e o Brasil (cruzando os estados do Amazonas, Roraima, Pará e Amapá).")
        ],
        "citacao": ("Estar em Macapá é testemunhar a matemática da Terra se tornar praça pública, estádio de futebol e ponto de encontro.", "Guia Oficial de Patrimônio Histórico e Cartográfico do Amapá"),
        "tabela_cabecalho": ["Curiosidade do Equador", "Como Funciona na Realidade", "Fato Científico"],
        "tabela_linhas": [
            ["Equinócio em Macapá", "Sol a pino a 90° exatos no zênite", "Dia e noite com 12 horas perfeitas em todo o globo"],
            ["Estádio Zerão", "Linha de meio de campo no paralelo 0°", "Times trocam de hemisfério nos 45 minutos"],
            ["Efeito Coriolis na Pia", "Truque de mágica para turistas", "A força só age em ciclones e grandes massas"],
            ["Circunferência do Equador", "40.075 quilômetros", "Velocidade de rotação de 1.670 km/h na linha"],
            ["Brasil na Linha", "Cruza 4 estados brasileiros", "Amazonas, Roraima, Pará e Amapá"]
        ],
        "box_tatica": ("Por Que a Força Centrífuga Faz Você Pesar Menos no Equador?", "Como a Terra é achatada nos polos e bojudas no Equador devido à rotação diária de 1.670 km/h, um ser humano situado na linha do Equador está cerca de 21 km mais longe do centro de massa do planeta e sofre maior inércia centrífuga. Na prática, uma pessoa de 80 kg pesa cerca de 400 gramas a menos na linha do Equador do que se estivesse no Polo Sul."),
        "ferramenta_link": "/ferramentas/calculadora-distancia/",
        "ferramenta_nome": "Medidor Geodésico de Distância no Globo",
        "faq": [
            ("Quais estados do Brasil são cortados pela Linha do Equador?", "A linha cruza quatro estados da Região Norte: Amazonas, Roraima, Pará e Amapá."),
            ("Qual a capital mais próxima da Linha do Equador no mundo?", "Quito, capital do Equador, fica a cerca de 25 km ao sul da linha. Macapá é a única capital que fica exatamente em cima do paralelo zero."),
            ("O que acontece com a sombra no dia do equinócio no Marco Zero?", "Ao meio-dia solar dos dias 20/21 de março e 22/23 de setembro, o sol atinge o zênite perpendicular perfeito (90°), fazendo com que edifícios e pessoas não projetem sombra alguma para os lados.")
        ]
    }
]

print(f"Gerando lote de {len(posts)} artigos balanceados...")

output_dir = r"D:\Dev\vitale-geo\src\content\blog"

for p in posts:
    secoes_md = ""
    for h2, txt in p["secoes"]:
        secoes_md += f"""
## {h2}

{txt}
"""

    tabela_cab = " | ".join(p["tabela_cabecalho"])
    tabela_sep = " | ".join(["---"] * len(p["tabela_cabecalho"]))
    tabela_corpo = "\n".join([" | ".join(row) for row in p["tabela_linhas"]])

    faq_md = ""
    for q, a in p["faq"]:
        faq_md += f"""
### {q}
{a}
"""

    schema_json = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": p["titulo"],
        "description": p["resumo"],
        "image": p["img"],
        "author": {
            "@type": "Person",
            "name": "Agnaldo Batista",
            "url": "https://www.vitalegeo.com.br/sobre/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "VitaleGeo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.vitalegeo.com.br/assets/icons/favicon.svg"
            }
        },
        "datePublished": p["iso_date"],
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": f"https://www.vitalegeo.com.br/blog/{p['slug']}/"
        }
    }

    md_content = f"""---
titulo: "{p['titulo']}"
resumo: "{p['resumo']}"
categoria: "{p['categoria']}"
data: "{p['data']} - 10:00"
img: "{p['img']}"
tempoLeitura: {p['tempoLeitura']}
---

<p class="lead text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-8">
{p['lead']}
</p>

<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 not-prose">
  <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">{p['metrica1'][0]}</span>
    <span class="text-sm sm:text-base font-semibold text-white">{p['metrica1'][1]}</span>
  </div>
  <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">{p['metrica2'][0]}</span>
    <span class="text-sm sm:text-base font-semibold text-amber-400">{p['metrica2'][1]}</span>
  </div>
  <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">{p['metrica3'][0]}</span>
    <span class="text-sm sm:text-base font-semibold text-white">{p['metrica3'][1]}</span>
  </div>
  <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5">
    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">{p['metrica4'][0]}</span>
    <span class="text-sm sm:text-base font-semibold text-sky-400">{p['metrica4'][1]}</span>
  </div>
</div>

{secoes_md}

<blockquote class="my-8 p-5 rounded-xl border-l-4 border-amber-400 bg-white/[0.02] italic text-slate-300">
"{p['citacao'][0]}"
<footer class="mt-2 text-xs font-mono text-slate-400 not-italic">— {p['citacao'][1]}</footer>
</blockquote>

## Dados Técnicos e Comparativos

| {tabela_cab} |
| {tabela_sep} |
| {tabela_corpo} |

<div class="my-8 p-6 rounded-2xl bg-[#0f172a]/70 border border-white/10 not-prose">
  <div class="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
    <i class="ph-bold ph-compass"></i>
    <span>Dossiê Cartográfico: {p['box_tatica'][0]}</span>
  </div>
  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
    {p['box_tatica'][1]}
  </p>
</div>

<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-transparent border border-white/10 not-prose flex flex-col sm:flex-row items-center justify-between gap-4">
  <div>
    <span class="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">Simulação Interativa</span>
    <h3 class="text-base font-heading font-semibold text-white">{p['ferramenta_nome']}</h3>
    <p class="text-xs text-slate-400 mt-1">Explore os cálculos no laboratório cartográfico do VitaleGeo.</p>
  </div>
  <a href="{p['ferramenta_link']}" class="btn-clean-primary whitespace-nowrap text-xs">
    Acessar Simulador <i class="ph-bold ph-arrow-right text-xs"></i>
  </a>
</div>

## Perguntas Frequentes

{faq_md}

<script type="application/ld+json">
{json.dumps(schema_json, ensure_ascii=False, indent=2)}
</script>
"""

    filepath = os.path.join(output_dir, f"{p['slug']}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(md_content.strip())
    print(f"Gravado: {filepath}")

print("Concluída geração dos 11 posts no Astro!")

# Agora adicionar ao topo de posts.js (public e assets)
for js_path in [r"D:\Dev\vitale-geo\public\assets\js\posts.js", r"D:\Dev\vitale-geo\assets\js\posts.js"]:
    if os.path.exists(js_path):
        js_text = open(js_path, "r", encoding="utf-8").read()
        novos_itens = ""
        for p in reversed(posts):
            novos_itens += f"""    {{
        titulo: "{p['titulo']}",
        categoria: "{p['categoria']}",
        data: "{p['data']} - 10:00",
        img: "{p['img']}",
        link: "{p['slug']}/",
        resumo: "{p['resumo']}"
    }},
"""
        # Inserir apos const blogPosts = [\n
        js_text = js_text.replace("const blogPosts = [\n", f"const blogPosts = [\n{novos_itens}", 1)
        with open(js_path, "w", encoding="utf-8") as f:
            f.write(js_text)
        print(f"posts.js atualizado em: {js_path}")
