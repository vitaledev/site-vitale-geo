const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const blogDir = path.join(rootDir, 'blog');
const srcBlogDir = path.join(rootDir, 'src', 'content', 'blog');
const postsJsFile = path.join(rootDir, 'assets', 'js', 'posts.js');

const postsData = [
    {
        slug: "historia-do-egito",
        titulo: "Como o Egito Manteve as Mesmas Fronteiras Naturais Por Cinco Mil Anos de História?",
        categoria: "História",
        data: "20 Out 2026 - 07:30",
        dataIso: "2026-10-20T07:30:00-03:00",
        tempoLeitura: "9 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Egypt_relief_location_map.jpg",
        imgLegenda: "FIG 01 // Mapa físico do Egito destacando a fita verde do Vale e Delta do Rio Nilo cercada pelos desertos Oriental e Ocidental.",
        resumo: "Da unificação pelo faraó Menés em 3100 a.C. ao Canal de Suez e à era moderna, entenda como o Nilo e os desertos preservaram a nação mais antiga do planeta.",
        dossie: [
            { rotulo: "Área Territorial", valor: "1.002.450 km²" },
            { rotulo: "Unificação Original", valor: "c. 3100 a.C. (Menés)" },
            { rotulo: "Artéria Vital", valor: "Rio Nilo (6.650 km)" },
            { rotulo: "Oásis Habitado", valor: "Apenas 4% do território" }
        ],
        lead: "Enquanto impérios colossais como Roma, a Pérsia aquemênida, a Babilônia e a União Soviética se expandiram e desapareceram sem deixar vestígios em suas fronteiras territoriais primitivas, existe uma nação que preserva rigorosamente o mesmo desenho geográfico há mais de cinquenta séculos: o <strong>Egito</strong>. Desde que o mítico faraó Menés unificou as coroas do Alto e do Baixo Egito por volta de 3100 a.C., o núcleo da civilização egípcia permaneceu ancorado na estreita faixa fértil irrigada pelas cheias do <strong>Rio Nilo</strong>, protegida a leste pelo Mar Vermelho, ao norte pelo Mediterrâneo e a oeste pela imensidão estéril do Deserto do Saara.",
        sections: [
            {
                h2: "A bênção e a prisão geográfica do Rio Nilo",
                paragraphs: [
                    "O historiador grego Heródoto sintetizou a geopolítica egípcia no século V a.C. com uma frase imortal: 'O Egito é uma dádiva do Nilo'. Sem as águas que brotam no Lago Vitória e nas terras altas da Etiópia, o território egípcio seria uma extensão árida e inabitável do Saara.",
                    "Dos mais de um milhão de quilômetros quadrados que compõem o país moderno, assombrosos <strong>96% são formados por areia pura, rochas e desertos hiperáridos</strong> (o Deserto Líbio e o Deserto Arábico).",
                    "Mais de 110 milhões de habitantes comprimem-se em míseros 4% da área territorial, concentrados ao longo da fita verde do vale do Nilo e no leque triangular do Delta.",
                    "Essa geografia linear criou uma das maiores densidades populacionais efetivas da Terra — superior a 2.500 habitantes por quilômetro quadrado de solo arável —, forçando desde a Antiguidade um poder estatal altamente centralizado para gerenciar canais de irrigação, barragens e estoques de trigo."
                ]
            },
            {
                h2: "As cataratas de Assuã e o escudo dos desertos",
                paragraphs: [
                    "A longevidade das fronteiras egípcias foi garantida por barreiras físicas que desestimulavam invasões de infantaria em massa.",
                    "A fronteira sul com o Reino de Cuxe (atual Sudão) era bloqueada pelas <strong>Cataratas do Nilo</strong> — uma série de seis corredeiras rochosas intransponíveis para frotas de barcos fluviais, onde os faraós ergueram fortalezas de tijolos de barro como Buhen.",
                    "A oeste, o Grande Mar de Areia do Saara criava um vazio de mil quilômetros sem água que impedia ataques terrestres da Cirenaica.",
                    "Apenas o istmo do Sinai, a nordeste, funcionava como o corredor vulnerável por onde penetraram os invasores hicsos, persas, gregos de Alexandre o Grande e romanos de Júlio César, que cobiçavam o Egito como o celeiro de cereais do Mediterrâneo."
                ]
            },
            {
                h2: "O divisor de águas: o Canal de Suez de 1869",
                paragraphs: [
                    "Durante a era islâmica e sob o domínio do Império Otomano, o Egito operou como uma província semiautônoma sob a dinastia de Muhammad Ali no século XIX.",
                    "A posição geográfica do país foi dramaticamente reconfigurada em novembro de 1869 com a inauguração do <strong>Canal de Suez</strong>, idealizado pelo diplomata francês Ferdinand de Lesseps.",
                    "Ao rasgar 193 quilômetros de terra seca entre Port Said e o Mar Vermelho, a obra eliminou a necessidade de navios contornarem o continente africano pelo Cabo da Boa Esperança, encurtando a viagem entre a Europa e a Índia em quase 9.000 quilômetros.",
                    "O novo canal transformou o Egito no maior chokepoint logístico do planeta, mas atraiu a cobiça do Império Britânico, que ocupou militarmente o país em 1882 para controlar a rota das especiarias e do algodão."
                ]
            },
            {
                h2: "Gamal Abdel Nasser e a nacionalização de 1956",
                paragraphs: [
                    "A verdadeira soberania moderna do Egito renasceu em 1952 com a Revolução dos Oficiais Livres, liderada pelo coronel <strong>Gamal Abdel Nasser</strong>, que depôs o rei Faruk e proclamou a república.",
                    "Em 26 de julho de 1956, em um dos atos mais audaciosos da geopolítica do século XX, Nasser anunciou em Alexandria a <strong>nacionalização do Canal de Suez</strong>, expulsando os acionistas britânicos e franceses para usar as tarifas de pedágio no financiamento da colossal Represa Alta de Assuã.",
                    "A decisão provocou a Crise de Suez: uma invasão militar conjunta de Reino Unido, França e Israel.",
                    "No entanto, sob pressão diplomática severa dos Estados Unidos e da União Soviética, as forças europeias foram humilhadas e forçadas a se retirar, consagrando Nasser como o líder supremo do nacionalismo árabe e reafirmando o controle egípcio sobre o canal."
                ]
            },
            {
                h2: "A megalópole no deserto e a ameaça da represa etíope",
                paragraphs: [
                    "No século XXI, o Egito enfrenta dois desafios existenciais que redesenham seu mapa humano.",
                    "Para aliviar o congestionamento caótico do Cairo (com mais de 22 milhões de moradores), o governo do presidente Abdel Fattah el-Sisi constrói a <strong>Nova Capital Administrativa (NAC)</strong>: uma metrópole futurista de US$ 58 bilhões erguida 45 km a leste em pleno deserto, abrigando o maior edifício da África (Iconic Tower) e ministérios inteligentes.",
                    "No front geopolítico externo, a grande ameaça vem do sul: a Etiópia concluiu o enchimento da <strong>Grande Represa do Renascimento Etíope (GERD)</strong> no Nilo Azul, uma usina de US$ 4 bilhões que pode reter bilhões de metros cúbicos de água.",
                    "Como 97% da água doce egípcia provém do Nilo, o Cairo considera qualquer redução severa de fluxo como uma ameaça militar de segurança nacional, mantendo a bacia do rio sob tensão permanente."
                ]
            }
        ],
        quote: "O Egito não é apenas uma nação antiga; é a própria história viva gravada na terra. Quem ameaçar as águas do Nilo descobrirá que o povo das pirâmides sabe lutar pela fonte de sua vida.",
        quoteAuthor: "Gamal Abdel Nasser // Discurso na inauguração das obras da Represa de Assuã (1960).",
        tableTitle: "Marcos Fundadores da Linha Territorial do Egito",
        tableHeaders: ["Período Histórico", "Ano Aproximado", "Ator Soberano", "Impacto nas Fronteiras"],
        tableRows: [
            ["Unificação Menita", "c. 3100 a.C.", "Faraó Menés (Narmer)", "Fusão do Alto e Baixo Egito; fundação de Mênfis"],
            ["Invasão dos Hicsos", "1650 a.C.", "Povos semitas do Levante", "Ocupação do Delta; primeira ruptura da barreira do Sinai"],
            ["Conquista Macedônica", "332 a.C.", "Alexandre o Grande", "Fundação de Alexandria; dinastia ptolemaica grega"],
            ["Inauguração de Suez", "1869", "Khedivato do Egito / França", "Corte do istmo; rota marítima mais estratégica do mundo"],
            ["Nacionalização do Canal", "1956", "República do Egito (Nasser)", "Controle soberano total sobre a hidrovia internacional"]
        ],
        tacticalBoxTitle: "O Triângulo de Hala'ib e o Vazio de Bir Tawil",
        tacticalBoxText: "No extremo sul do Egito, na fronteira com o Sudão, vigora a mais fascinante anomalia de fronteira da África. O tratado anglo-egípcio de 1899 traçou uma linha reta perfeitamente rígida pelo Paralelo 22°N. Porém, em 1902, os britânicos criaram uma 'fronteira administrativa' que concedeu o fértil Triângulo de Hala'ib (banhado pelo Mar Vermelho) ao Sudão e a área desértica de Bir Tawil ao Egito. Hoje, como ambos querem Hala'ib (rico em minérios e pesca), o Egito defende o mapa de 1899 e o Sudão defende o de 1902. O resultado é que Bir Tawil (2.060 km²) é uma 'terra nullius' rejeitada por ambos, sendo o único pedaço habitável de terra seca do planeta não reivindicado por nenhum país.",
        retencaoTexto: "Compare o tamanho do território do Egito com outras nações históricas no Comparador Territorial oficial:",
        retencaoLink: "/ferramentas/comparador-paises/",
        retencaoBotao: "Abrir Comparador de Países",
        faq: [
            { q: "Por que 96% do Egito é deserto desabitado?", a: "O território egípcio está situado no cinturão hiperárido do Saara e do Deserto Oriental, com índices pluviométricos quase nulos fora da estreita planície aluvial irrigada pelo Rio Nilo." },
            { q: "Qual a importância do Canal de Suez para o Egito moderno?", a: "O Canal de Suez movimenta cerca de 12% do comércio marítimo mundial e gera anualmente mais de US$ 9 bilhões em receitas de pedágio em moeda forte para o tesouro nacional egípcio." },
            { q: "O que é a disputa pela represa GERD na Etiópia?", a: "A Grande Represa do Renascimento Etíope (GERD) foi construída pela Etiópia no Nilo Azul para gerar eletricidade. O Egito teme que o controle das comportas reduza a vazão de água doce que abastece 100% de sua agricultura e consumo urbano." }
        ]
    },
    {
        slug: "geopolitica-de-singapura",
        titulo: "Por Que Singapura é Uma Ilha Sem Água Doce Nem Recursos Que Domina o Comércio Mundial?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 09:15",
        dataIso: "2026-10-20T09:15:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/07/CIA_World_Factbook_map_of_Singapore_%28English%29.png",
        imgLegenda: "FIG 01 // Mapa do Estreito de Singapura e da ilha-Estado situada estrategicamente na ponta sul da Península Malaia.",
        resumo: "Expulsa da Malásia em 1965 sem petróleo ou água potável, a microilha transformou sua posição no Estreito de Malaca no maior entreposto marítimo da Terra.",
        dossie: [
            { rotulo: "Área Territorial", valor: "734 km² (com aterros)" },
            { rotulo: "Movimento Portuário", valor: "+37 milhões de TEUs/ano" },
            { rotulo: "Independência", valor: "1965 (Expulsão)" },
            { rotulo: "PIB per capita", valor: "+US$ 85.000" }
        ],
        lead: "Em 9 de agosto de 1965, durante uma histórica transmissão de televisão gravada em lágrimas, o primeiro-ministro <strong>Lee Kuan Yew</strong> anunciou a independência forçada de <strong>Singapura</strong>. A jovem cidade-estado não havia lutado por sua emancipação: fora sumariamente expulsa da Federação da Malásia por tensões étnicas e políticas. Naquele momento, o prognóstico de sobrevivência era nulo: tratava-se de um pântano insular miserável de 580 quilômetros quadrados, sem reservas de petróleo, sem minérios, sem terras agrícolas e incapaz até de saciar a sede de sua população sem importar água doce encanada do país vizinho. Meio século depois, Singapura converteu essa extrema vulnerabilidade geográfica no maior milagre econômico e geopolítico da Ásia contemporânea.",
        sections: [
            {
                h2: "A esquina mais movimentada dos mares: o Estreito de Malaca",
                paragraphs: [
                    "O grande trunfo de Singapura sempre foi sua coordenada matemática: 1° 17′ N, 103° 50′ E. A ilha repousa exatamente na boca meridional do <strong>Estreito de Malaca</strong>, o funil náutico que conecta o Oceano Índico ao Mar do Sul da China e ao Oceano Pacífico.",
                    "Por esse estreito navega anualmente um terço de todo o comércio de mercadorias do globo e mais de 80% do petróleo cru consumido pelas superpotências industriais do Japão, Coreia do Sul e China.",
                    "Antes da chegada dos europeus, a ilha era conhecida como Temasek ('Cidade do Mar'). Em 1819, o funcionário colonial britânico Sir Stamford Raffles reconheceu o valor ímpar de suas águas profundas abrigadas de monções e fundou um entreposto comercial isento de tarifas.",
                    "Após a independência em 1965, o governo de Lee Kuan Yew expandiu essa vocação, transformando o <strong>Porto de Singapura</strong> no segundo porto mais movimentado do mundo em movimentação de contêineres e no líder absoluto global em reabastecimento marítimo de combustíveis ('bunkering')."
                ]
            },
            {
                h2: "A paranoia da água doce e os 'Quatro Grifos Nacionais'",
                paragraphs: [
                    "A maior fragilidade existencial de Singapura sempre foi a segurança hídrica. Pelos Acordos da Água de 1961 e 1962 com a Malásia, a cidade-estado dependia de adutoras gigantescas que cruzam a Ponte Johor-Singapura trazendo água bruta do Rio Tebrau e do Rio Johor.",
                    "Diante de frequentes ameaças de líderes malaios de 'fechar a torneira' em disputas diplomáticas, Singapura tratou a água não como um serviço público, mas como uma questão de sobrevivência militar.",
                    "O país desenvolveu a célebre estratégia dos <strong>'Quatro Grifos Nacionais'</strong>: captação pluvial em 17 reservatórios urbanos (incluindo o Marina Barrage, que transformou a baía central em um lago de água doce), importação da Malásia, dessalinização de água do mar por osmose reversa e o pioneiro <strong>NEWater</strong>.",
                    "O NEWater é um sistema ultra-avançado de microfiltração e desinfecção por raios ultravioleta que purifica águas residuais urbanas e industriais em água potável com pureza superior aos padrões da OMS, garantindo que o país alcance autossuficiência hídrica antes do término dos tratados em 2061."
                ]
            },
            {
                h2: "A terra artificial: crescendo sobre as águas",
                paragraphs: [
                    "Sem espaço territorial para expandir fábricas, aeroportos e moradias, Singapura realizou a maior campanha contínua de aterro marinho ('land reclamation') da história urbana.",
                    "Desde 1965, a área territorial da ilha saltou de <strong>581 km² para mais de 734 km²</strong> — um aumento de mais de 25% de solo novo criado sobre o mar com areia importada e rochas dragadas.",
                    "O Aeroporto Changi (um dos melhores do mundo), o complexo de resorts de Marina Bay Sands e os terminais automatizados do Megaporto de Tuas foram construídos sobre áreas que eram mar aberto na década de 1970.",
                    "Essa expansão, porém, gerou tensões de fronteira com os vizinhos: a Malásia e a Indonésia já impuseram embargos à exportação de areia para Singapura, alegando danos a ecossistemas costeiros e receio de que os limites marítimos internacionais fossem empurrados para além das fronteiras históricas."
                ]
            },
            {
                h2: "A doutrina militar do 'Camarão Venenoso'",
                paragraphs: [
                    "Cercada por vizinhos muçulmanos gigantescos (a Indonésia com 280 milhões de pessoas e a Malásia com 34 milhões), a liderança de Singapura adotou uma doutrina militar implacável formulada por Lee Kuan Yew: a <strong>'Doutrina do Camarão Venenoso'</strong>.",
                    "O conceito é claro: em um mar de peixes grandes, Singapura pode ser pequena como um camarão, mas se alguém tentar engoli-la, morrerá envenenado.",
                    "O país mantém o serviço militar obrigatório rigoroso para todos os cidadãos do sexo masculino (National Service), dispondo de um exército permanente de 70 mil soldados com capacidade de mobilizar <strong>300 mil reservistas altamente treinados em menos de 48 horas</strong>.",
                    "Com o maior orçamento militar do sudeste asiático (mais de US$ 15 bilhões por ano), Singapura opera caças F-15SG, caças stealth F-35B, tanques Leopard 2SG e submarinos alemães da classe Invincible, treinando tropas no exterior (em Taiwan, Austrália e EUA) pela escassez de espaço aéreo em sua ilha."
                ]
            },
            {
                h2: "O equilibrista diplomático entre Washington e Pequim",
                paragraphs: [
                    "A inteligência geopolítica de Singapura culmina na sua diplomacia de neutralidade ativa. A cidade-estado é a única nação do mundo que consegue ser parceira militar íntima do Pentágono e o maior investidor estrangeiro na China simultaneamente.",
                    "A base naval de Changi foi construída com calado especial para acolher portas-aviões nucleares da Marinha dos EUA, garantindo a presença dissuasória norte-americana nas rotas de Malaca.",
                    "Ao mesmo tempo, Singapura — onde cerca de 75% da população é de etnia chinesa — mantém canais privilegiados com o Partido Comunista em Pequim, servindo como a ponte bancária e jurídica do comércio da Ásia.",
                    "Como definiu o chanceler Kishore Mahbubani, Singapura é o grande mestre do xadrez que não escolhe lados, mas se torna indispensável para todos os jogadores do tabuleiro mundial."
                ]
            }
        ],
        quote: "Nós não tínhamos terras, não tínhamos recursos, não tínhamos retaguarda. Para sobreviver, tínhamos que ser extraordinários. Se fôssemos apenas comuns, estaríamos mortos.",
        quoteAuthor: "Lee Kuan Yew // Memórias: 'Do Terceiro Mundo ao Primeiro' (Singapura, 2000).",
        tableTitle: "Matriz das Vulnerabilidades Físicas e Respostas Estratégicas de Singapura",
        tableHeaders: ["Vulnerabilidade Geográfica", "Dimensão do Risco", "Solução Estratégica Implementada", "Status Contemporâneo"],
        tableRows: [
            ["Falta de Água Doce", "Dependência total da Malásia", "Quatro Grifos (NEWater, dessalinização e represas)", "Quase 70% de autossuficiência comprovada"],
            ["Escassez de Território", "581 km² em 1965", "Engenharia de aterro marinho (+25% de solo novo)", "734 km² com projeção de 760 km² até 2030"],
            ["Espaço Aéreo e Naval Mínimo", "Caças cruzam a ilha em 2 minutos", "Bases de treino avançado na Austrália, EUA e França", "Força aérea mais moderna do sudeste asiático"],
            ["Isolamento Alimentar", "Mais de 90% dos alimentos importados", "Iniciativa '30 by 30' (fazendas verticais e hidroponia)", "Meta de produzir 30% dos nutrientes na ilha até 2030"],
            ["Gargalo Energético", "Zero petróleo ou carvão no subsolo", "Hub global de refino de petróleo e importação de energia solar", "Conexão de cabos elétricos submarinos com a Austrália"]
        ],
        tacticalBoxTitle: "O Megaporto Automatizado de Tuas (2040)",
        tacticalBoxText: "Para consolidar sua hegemonia naval pelas próximas décadas, Singapura está construindo em fases o Megaporto de Tuas, na costa oeste da ilha. Quando estiver 100% concluído na década de 2040, Tuas será o maior porto de contêineres totalmente automatizado do mundo em um único local, capaz de movimentar inacreditáveis 65 milhões de TEUs por ano — o dobro da capacidade do porto atual —, operado por frotas de guindastes elétricos sem condutor humano e inteligência artificial preditiva.",
        retencaoTexto: "Explore as rotas marítimas vitais e os chokepoints navais do Sudeste Asiático no simulador oficial:",
        retencaoLink: "/jogos/mapa-mundi-interativo/",
        retencaoBotao: "Abrir Mapa-Múndi Interativo",
        faq: [
            { q: "Como Singapura obtém água potável sendo uma ilha pequena?", a: "Singapura utiliza a estratégia dos Quatro Grifos: coleta de água de chuva em represas urbanas, importação da Malásia, dessalinização de água do mar e o sistema NEWater, que recicla águas residuais urbanas com purificação de alta tecnologia." },
            { q: "Por que Singapura é considerada tão poderosa militarmente?", a: "Apesar do tamanho minúsculo, Singapura possui o maior orçamento de defesa do sudeste asiático, mantém serviço militar obrigatório com 300 mil reservistas mobilizáveis em 48 horas e opera caças F-15, F-35 e submarinos de alta tecnologia." },
            { q: "Qual a importância do Estreito de Malaca para Singapura?", a: "O Estreito de Malaca é a rota marítima mais movimentada do planeta, por onde passa um terço de todo o comércio de cargas e 80% do petróleo da Ásia. Singapura fica localizada exatamente na boca do estreito, funcionando como o grande posto de reabastecimento e transbordo mundial." }
        ]
    },
    {
        slug: "geoeconomia-do-chile",
        titulo: "Como o Chile Monopolizou as Maiores Reservas de Cobre e Lítio da Terra no Deserto de Atacama?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 11:00",
        dataIso: "2026-10-20T11:00:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Copper_mines_in_Chile_-_3.PNG",
        imgLegenda: "FIG 01 // Mapa da infraestrutura e dos principais megacomplexos minerários de cobre e salares de lítio ao longo do território do Chile.",
        resumo: "Com a maior mina de cobre do mundo e os salares mais secos de lítio em Atacama, o Chile domina as matérias-primas essenciais da eletrificação global.",
        dossie: [
            { rotulo: "Produção de Cobre", valor: "~24% do mercado global" },
            { rotulo: "Reservas de Lítio", valor: "36% das reservas mundiais" },
            { rotulo: "Mina Escondida", valor: "Maior mina a céu aberto" },
            { rotulo: "Acordos Comerciais", valor: "Mais de 65 nações" }
        ],
        lead: "Estendendo-se por mais de <strong>4.300 quilômetros de comprimento</strong> ao longo da costa sul-americana do Oceano Pacífico — com uma largura média de míseros 175 quilômetros imprensados entre o mar e a Cordilheira dos Andes —, o <strong>Chile</strong> possui a silhueta geográfica mais longa e estreita do mundo. Se no mapa escolar esse formato parece uma fragilidade territorial, na geoeconomia global ele representa uma fortuna sem rivais. O solo chileno abriga <strong>as maiores jazidas de cobre e de lítio do planeta Terra</strong>: um tesouro geológico concentrado no Deserto de Atacama que converteu o país no fornecedor indispensável para a revolução dos carros elétricos, redes de energia verde e eletrônica avançada da humanidade.",
        sections: [
            {
                h2: "O gigante do cobre: a mina de Escondida e a Codelco",
                paragraphs: [
                    "O Chile é o líder supremo indiscutível da produção mundial de cobre, sendo responsável por cerca de <strong>24% a 28% de todo o metal vermelho extraído anualmente no globo</strong> — mais de cinco milhões de toneladas métricas por ano.",
                    "A espinha dorsal dessa indústria divide-se entre a estatal <strong>Codelco (Corporación Nacional del Cobre)</strong> — nacionalizada em 1971 durante o governo de Salvador Allende e mantida intacta pelo regime militar posterior — e gigantes multinacionais privadas.",
                    "No coração árido de Atacama repousa a mina de <strong>Minera Escondida</strong>, operada pela anglo-australiana BHP: trata-se da maior mina de cobre a céu aberto do mundo em volume de produção, responsável sozinha por quase 5% de toda a oferta global do metal.",
                    "Sem o cobre chileno, a transmissão de eletricidade moderna, os enrolamentos de motores elétricos e as turbinas eólicas do mundo ocidental e asiático simplesmente não teriam matéria-prima suficiente para funcionar."
                ]
            },
            {
                h2: "O ouro branco de Atacama: a química dos salares",
                paragraphs: [
                    "Nas últimas duas décadas, o protagonismo geológico chileno expandiu-se com a corrida global pelas baterias de íons de lítio. O Chile detém cerca de <strong>36% de todas as reservas economicamente lavráveis de lítio do planeta</strong>, concentradas no imenso <strong>Salar de Atacama</strong>.",
                    "A geografia do Atacama — o deserto não-polar mais árido da Terra — confere ao lítio chileno uma vantagem de custo impossível de replicar em outros continentes.",
                    "Ao contrário da Austrália (onde o lítio é extraído da rocha dura com alto consumo energético de britagem e fornos térmicos), o lítio em Atacama está dissolvido em salmouras subterrâneas hipersalinas.",
                    "A salmoura é bombeada para gigantescas lagoas rasas de evaporação que se estendem por dezenas de quilômetros quadrados: a radiação solar ultravioleta extrema e a umidade relativa do ar próxima de zero evaporam a água gratuitamente ao longo de doze a dezoito meses, concentrando o cloreto de lítio até atingir 6% de pureza com custos operacionais que são menos da metade dos concorrentes mundiais."
                ]
            },
            {
                h2: "A Batalha pelo Lítio: SQM, Albemarle e a Estratégia Nacional",
                paragraphs: [
                    "A exploração das lagoas de salmoura em Atacama sempre foi controlada por duas corporações gigantes: a chilena <strong>SQM (Sociedad Química y Minera de Chile)</strong> e a norte-americana <strong>Albemarle</strong>.",
                    "Em abril de 2023, o presidente Gabriel Boric anunciou a <strong>Estratégia Nacional do Lítio</strong>, exigindo que o Estado chileno assuma o controle majoritário (50% mais uma ação) de todas as novas concessões e alianças de exploração em salares estratégicos, sob a gestão da Codelco.",
                    "A medida gerou debates tensos com investidores internacionais sobre segurança jurídica, mas resultou em um acordo histórico em maio de 2024 entre a Codelco e a SQM, garantindo que o Estado passe a capturar a maior fatia dos lucros bilionários até o ano de 2060.",
                    "Ao mesmo tempo, potências industriais como a China (que consome quase 70% das exportações chilenas de lítio e cobre) e montadoras de automóveis da Coreia do Sul e Alemanha disputam contratos de longo prazo diretamente com Santiago."
                ]
            },
            {
                h2: "A logística perfeita da costa pacífica e o Corredor Bioceânico",
                paragraphs: [
                    "A geografia longa e esguia do Chile oferece uma vantagem logística sem paralelo para o comércio internacional.",
                    "Nenhuma mina ou instalação industrial no país está a mais de 200 quilômetros de distância de um porto marítimo no Oceano Pacífico.",
                    "Terminais modernos como Antofagasta, Mejillones e Iquique despacham navios graneleiros diretamente para os mercados da Ásia sem passar por estreitos congestionados ou canais artificiais com pedágio.",
                    "Além disso, o Chile é a ponta de lança do <strong>Corredor Rodoviário Bioceânico</strong>: uma rodovia internacional de mais de 2.400 km que ligará os portos chilenos de Antofagasta e Iquique ao Mato Grosso do Sul no Brasil, cruzando o Paraguai e a Argentina para escoar soja, carne e manufaturas brasileiras para o Pacífico economizando até duas semanas de navio."
                ]
            },
            {
                h2: "A crise hídrica e a geoengenharia das usinas de dessalinização",
                paragraphs: [
                    "Apesar do sucesso geoeconômico, o modelo minerário chileno enfrenta seu maior estrangulamento na biosfera: a escassez absoluta de água doce.",
                    "Processar minério de cobre e concentrar salmouras consome milhões de litros de água em uma região onde não chove há séculos, provocando o rebaixamento de lençóis freáticos e protestos veementes de comunidades indígenas atacamenhas e colas.",
                    "A resposta da engenharia chilena tem sido a construção massiva de <strong>usinas de dessalinização de água do mar</strong> na costa do Pacífico.",
                    "Tubulações de aço de alta pressão bombeiam água do mar dessalinizada por mais de 150 quilômetros deserto adentro, elevando-a a mais de 3.000 metros de altitude até as cavas das minas, tornando a mineração chilena a mais avançada do mundo em transição hídrica marinha."
                ]
            }
        ],
        quote: "O cobre é o salário do Chile, e o lítio é o seu futuro tecnológico. Nossa geografia inóspita no Atacama transformou-se na maior reserva estratégica de matérias-primas para descarbonizar o planeta Terra.",
        quoteAuthor: "Gabriel Boric // Discurso presidencial no anúncio da Estratégia Nacional do Lítio (Santiago, 2023).",
        tableTitle: "Matriz dos Minerais Críticos e Reservas do Chile",
        tableHeaders: ["Commodity Estratégica", "Participação Global", "Localização Primária", "Mercado Comprador Dominante"],
        tableRows: [
            ["Cobre (Cu)", "24% a 28% da produção mundial", "Minera Escondida, Chuquicamata e El Teniente", "China (+50%), Japão, Coreia do Sul e UE"],
            ["Lítio (Li)", "36% das reservas mundiais em salmoura", "Salar de Atacama e Salar de Maricunga", "Fabricantes de baterias na China, Coreia e EUA"],
            ["Molibdênio (Mo)", "2º maior produtor do globo", "Subproduto do refino de cobre da Codelco", "Siderúrgicas de aços especiais de alta resistência"],
            ["Iodo (I)", "Mais de 60% da oferta mundial", "Depósitos de caliche no Deserto de Atacama", "Indústria farmacêutica, contrastes de raio-X e óptica"],
            ["Nitrato Natural", "Quase 100% das reservas mundiais", "Planaltos desérticos de Tarapacá e Antofagasta", "Fertilizantes agrícolas de alta solubilidade e sais solares"]
        ],
        tacticalBoxTitle: "A Guerra do Pacífico de 1879 e a Conquista do Atacama",
        tacticalBoxText: "Toda a colossal riqueza mineral contemporânea do Chile decorre de uma guerra de fronteiras travada no século XIX. Até 1879, a província de Antofagasta pertencia à Bolívia (que possuía 400 km de litoral no Pacífico) e a região de Tarapacá pertencia ao Peru. Na Guerra do Pacífico (1879–1884), motivada pela tributação sobre as jazidas de salitre e guano, as forças armadas do Chile derrotaram a aliança peruano-boliviana e anexaram definitivamente todo o Deserto de Atacama. A Bolívia perdeu seu acesso soberano ao mar, enquanto o Chile herdou o subsolo que sustenta sua economia até hoje.",
        retencaoTexto: "Compare a surpreendente extensão de norte a sul do Chile com os países da Europa e da América do Sul no Comparador:",
        retencaoLink: "/ferramentas/comparador-paises/",
        retencaoBotao: "Abrir Comparador de Países",
        faq: [
            { q: "Quanto do cobre mundial é produzido pelo Chile?", a: "O Chile responde por cerca de 24% a 28% de todo o cobre extraído no planeta, superando nações como Peru, República Democrática do Congo e China." },
            { q: "Por que o lítio do Chile é mais barato de extrair?", a: "Porque o lítio chileno encontra-se em salmouras no Deserto de Atacama, onde a altíssima radiação solar e aridez extrema evaporam a água naturalmente em lagoas rasas, sem necessidade da queima de combustíveis ou britagem pesada de rochas." },
            { q: "Qual a maior mina de cobre a céu aberto do mundo?", a: "A mina de Minera Escondida, situada no Deserto de Atacama a 3.100 metros de altitude, operada pela BHP, é a maior mina de cobre a céu aberto do planeta Terra." }
        ]
    },
    {
        slug: "estreito-de-dardanelos-chokepoint",
        titulo: "Por Que o Estreito de Dardanelos Foi Palco da Batalha Mais Sangrenta Pelo Controle dos Mares?",
        categoria: "Curiosidades",
        data: "20 Out 2026 - 12:45",
        dataIso: "2026-10-20T12:45:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Dardanelles_map2.png",
        imgLegenda: "FIG 01 // Carta náutica do Estreito de Dardanelos conectando o Mar Egeu ao Mar de Mármara ao longo da Península de Galípoli.",
        resumo: "Com 61 km de comprimento e apenas 1,2 km de largura em Çanakkale, Dardanelos é a porta de saída do Mar Negro regida pelo Tratado de Montreux.",
        dossie: [
            { rotulo: "Extensão Total", valor: "61 quilômetros" },
            { rotulo: "Largura Mínima", valor: "Meros 1,2 km (Çanakkale)" },
            { rotulo: "Batalha Histórica", valor: "Galípoli (1915)" },
            { rotulo: "Tratado Vigente", valor: "Convenção de Montreux (1936)" }
        ],
        lead: "Separando a Península de Galípoli na Europa da costa noroeste da Ásia Menor na Turquia, o <strong>Estreito de Dardanelos</strong> (o antigo Helesponto da Grécia clássica) é um dos canais marítimos mais disputados, sangrentos e geopoliticamente estratégicos da civilização. Com <strong>61 quilômetros de comprimento</strong> e uma largura que se estreita para míseros <strong>1.200 metros</strong> na altura da cidade de Çanakkale, esse canal natural é o primeiro portão de acesso obrigatório para qualquer embarcação que deseje navegar do Mar Mediterrâneo até Istambul, o Bósforo e as águas do Mar Negro. Foi nesse gargalo marítimo que, em 1915, o Império Otomano infligiu uma das derrotas mais humilhantes da Primeira Guerra Mundial às potências da Tríplice Entente.",
        sections: [
            {
                h2: "O Helesponto mítico: de Xerxes a Alexandre o Grande",
                paragraphs: [
                    "A importância militar de Dardanelos remonta às origens da cartografia bélica. Na mitologia grega, o estreito recebeu o nome de Helesponto ('Mar de Hele') após a fuga trágica com o Velocino de Ouro.",
                    "Nas Guerras Médicas em 480 a.C., o imperador persa <strong>Xerxes I</strong>, marchando com centenas de milhares de guerreiros para conquistar a Grécia, construiu duas gigantescas pontes de barcos amarrados através do estreito.",
                    "Quando uma tempestade repentina destruiu a estrutura pioneira, Xerxes ordenou que o próprio mar fosse açoitado com 300 chicotadas e marcado com ferros em brasa por desafiar sua vontade imperial.",
                    "Em 334 a.C., o jovem rei Alexandre o Grande fez a travessia inversa com sua falange macedônia para aniquilar o Império Aquemênida, consagrando Dardanelos como o divisor sagrado entre a Europa e o Oriente."
                ]
            },
            {
                h2: "A Campanha de Galípoli (1915): o delírio de Churchill",
                paragraphs: [
                    "O capítulo mais dramático de Dardanelos desenrolou-se na Primeira Guerra Mundial. Com a Rússia czarista isolada no Mar Negro e as frentes na França congeladas em trincheiras de lama, o Primeiro Lorde do Almirantado britânico, <strong>Winston Churchill</strong>, concebeu um plano ousado.",
                    "Churchill pretendia forçar a passagem de encouraçados britânicos e franceses pelo estreito de Dardanelos, bombardear Constantinopla (Istambul), derrubar o Império Otomano da guerra e abrir uma rota marítima direta para armar a Rússia.",
                    "Em 18 de março de 1915, a maior esquadra naval da época tentou forçar o canal. Mas os canhões das fortalezas turcas e um campo secreto de minas marítimas colocado pelo navio minador otomano <em>Nusret</em> afundaram três encouraçados aliados (o <em>Bouvet</em>, o <em>Irresistible</em> e o <em>Ocean</em>) e danificaram gravemente outros três.",
                    "O fracasso naval forçou um desembarque anfíbio sangrento nas praias da Península de Galípoli por tropas britânicas, francesas, australianas e neozelandesas (as forças ANZAC), resultando em oito meses de massacre e na morte de mais de <strong>130 mil soldados</strong> antes da retirada aliada definitiva."
                ]
            },
            {
                h2: "A Convenção de Montreux de 1936: as chaves em mãos turcas",
                paragraphs: [
                    "O status contemporâneo de Dardanelos e do Bósforo é regido por um dos instrumentos jurídicos mais duradouros e respeitados do direito internacional: a <strong>Convenção de Montreux sobre o Regime dos Estreitos, assinada em 1936</strong> na Suíça.",
                    "O tratado reconheceu a soberania plena da República da Turquia para militarizar e guarnecer os estreitos com baterias costeiras.",
                    "Montreux estabelece o princípio da livre navegação pacífica para todos os navios mercantes civis em tempos de paz, mas impõe restrições draconianas à passagem de navios de guerra de potências que não possuem litoral no Mar Negro.",
                    "Porta-aviões estrangeiros são terminantemente proibidos de transitar, e navios de guerra de forças não ribeirinhas só podem permanecer no Mar Negro por no máximo 21 dias com limites severos de tonelagem combinada."
                ]
            },
            {
                h2: "O impacto na Guerra da Ucrânia: a Turquia tranca a porta",
                paragraphs: [
                    "A importância de Montreux e de Dardanelos atingiu o ápice do noticiário global em fevereiro de 2022 com a eclosão da invasão russa na Ucrânia.",
                    "Valendo-se do <strong>Artigo 19 da Convenção de Montreux</strong>, que autoriza a Turquia a fechar os estreitos a navios de guerra de nações beligerantes, o governo de Ancara proibiu formalmente a passagem de fragatas e cruzadores adicionais da Marinha da Rússia com destino ao Mar Negro.",
                    "Essa decisão estratégica impediu que Moscou reforçasse sua Frota do Mar Negro após o afundamento do cruzador de mísseis guiados <em>Moskva</em> por mísseis ucranianos.",
                    "Ao mesmo tempo, navios de guerra da OTAN também ficaram impedidos de adentrar a bacia, convertendo a Turquia no fiel da balança que evitou o confronto naval direto entre as superpotências nucleares."
                ]
            },
            {
                h2: "A Ponte Çanakkale 1915: a maior do mundo",
                paragraphs: [
                    "Durante milênios, cruzar o Estreito de Dardanelos exigia balsas lentas sujeitas a fortes correntes marítimas opostas — águas doces e menos densas do Mar Negro correm na superfície em direção ao Egeu, enquanto águas salgadas e densas correm no fundo em sentido contrário.",
                    "Esse isolamento físico foi rompido em 18 de março de 2022 com a inauguração da monumental <strong>Ponte Çanakkale 1915</strong>.",
                    "Com um vão central suspenso de inacreditáveis <strong>2.023 metros de extensão livre entre pilares</strong>, ela superou a Ponte Akashi Kaikyo do Japão e tornou-se a maior ponte pênsil do planeta Terra.",
                    "As torres vermelhas da ponte erguem-se a 318 metros de altura (uma homenagem à data da vitória turca de 18 de março de 1915), conectando a Europa à Ásia por automóvel em meros seis minutos e transformando a rota comercial dos Balcãs."
                ]
            }
        ],
        quote: "Eu não ordeno que vocês ataquem; eu ordeno que vocês morram. No tempo que levaremos para morrer, outras tropas e comandantes virão para tomar nossos lugares e defender Galípoli.",
        quoteAuthor: "Mustafa Kemal Atatürk // Ordem do Dia às tropas otomanas na colina de Conkbayırı (Galípoli, 25 de abril de 1915).",
        tableTitle: "Comparativo dos Dois Chokepoints Estratégicos Turcos",
        tableHeaders: ["Estreito Marítimo", "Extensão / Largura Mínima", "Conexão Marítima", "Papel Estratégico em Montreux"],
        tableRows: [
            ["Dardanelos (Çanakkale)", "61 km / 1.200 metros", "Mar Egeu (Mediterrâneo) ao Mar de Mármara", "Primeira linha defensiva e controle de navios de guerra"],
            ["Bósforo (Istambul)", "31 km / 700 metros", "Mar de Mármara ao Mar Negro", "Corta a metrópole de Istambul; tráfego urbano pesado"],
            ["Ponte Çanakkale 1915", "Vão livre de 2.023 metros", "Maior ponte pênsil do planeta Terra", "Eliminou as balsas entre a Trácia europeia e a Anatólia"],
            ["Restrição de Beligerantes", "Artigo 19 da Convenção de 1936", "Turquia bloqueia navios de combate em guerras", "Bloqueio à frota de guerra russa na invasão da Ucrânia"]
        ],
        tacticalBoxTitle: "A Façanha do Minador Nusret",
        tacticalBoxText: "Na madrugada de 8 de março de 1915, o pequeno navio minador otomano Nusret, de apenas 360 toneladas, executou uma das manobras mais decisivas da história bélica. Em vez de lançar suas minas em linhas perpendiculares ao estreito (como os aliados esperavam), o capitão turco colocou silenciosamente uma fileira de 26 minas paralelas à costa na baía de Erenköy. Dez dias depois, quando os encouraçados britânicos manobravam para retornar após bombardear fortes turcos, entraram em cheio no campo minado do Nusret, selando o fracasso da campanha de Churchill.",
        retencaoTexto: "Calcule distâncias náuticas entre o Mediterrâneo e os portos do Mar Negro na Calculadora oficial:",
        retencaoLink: "/ferramentas/calculadora-distancia/",
        retencaoBotao: "Abrir Calculadora de Distâncias",
        faq: [
            { q: "Qual a diferença entre o Estreito de Dardanelos e o Bósforo?", a: "Ambos formam os Estreitos Turcos: Dardanelos liga o Mar Egeu (Mediterrâneo) ao Mar de Mármara mais ao sul, enquanto o Bósforo liga o Mar de Mármara ao Mar Negro mais ao norte, cortando a cidade de Istambul." },
            { q: "O que determina a Convenção de Montreux de 1936?", a: "A Convenção de Montreux confere à Turquia a soberania militar sobre os estreitos de Dardanelos e Bósforo, garantindo passagem livre a cargueiros comerciais mas impondo limites rigorosos a navios de guerra de nações que não são banhadas pelo Mar Negro." },
            { q: "Qual a extensão da Ponte Çanakkale 1915?", a: "A ponte tem vão central suspenso de 2.023 metros de comprimento entre seus pilares, sendo oficialmente a maior ponte pênsil do mundo, inaugurada em março de 2022." }
        ]
    },
    {
        slug: "ilha-de-sao-martinho-fronteira",
        titulo: "Por Que a Menor Ilha Habitada Dividida Entre Dois Países Fica no Caribe?",
        categoria: "Fronteiras",
        data: "20 Out 2026 - 14:30",
        dataIso: "2026-10-20T14:30:00-03:00",
        tempoLeitura: "7 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saint_Martin_map.svg/1280px-Saint_Martin_map.svg.png",
        imgLegenda: "FIG 01 // Mapa da ilha caribenha dividida entre Saint-Martin (França) ao norte e Sint Maarten (Reino dos Países Baixos) ao sul.",
        resumo: "Com apenas 87 km², a ilha caribenha abriga a única fronteira terrestre entre França e Países Baixos, aberta e pacífica desde o Tratado de Concórdia de 1648.",
        dossie: [
            { rotulo: "Área Total da Ilha", valor: "87 km²" },
            { rotulo: "Partilha Territorial", valor: "França (53 km²) / Holanda (34 km²)" },
            { rotulo: "Tratado Fundador", valor: "Tratado de Concórdia (1648)" },
            { rotulo: "Controle de Fronteira", valor: "Zero guaritas (Fronteira aberta)" }
        ],
        lead: "No arquipélago das Pequenas Antilhas no Mar do Caribe, repousa uma ilhota tropical de apenas <strong>87 quilômetros quadrados</strong> que ostenta uma distinção cartográfica singular: é a <strong>menor massa terrestre habitada do mundo dividida soberanamente entre duas nações diferentes</strong>. A porção setentrional (Saint-Martin, com 53 km²) pertence à República Francesa como Coletividade Ultramarina; a porção meridional (Sint Maarten, com 34 km²) é um país autônomo constituinte do Reino dos Países Baixos. Trata-se do único lugar do planeta onde a França e a Holanda compartilham uma fronteira terrestre física — uma linha invisível sem cercas, arames ou passaportes que resiste em harmonia há quase quatro séculos.",
        sections: [
            {
                h2: "O Tratado de Concórdia de 1648 no topo do Monte Concordia",
                paragraphs: [
                    "A história da partilha remonta ao século XVII, quando os impérios espanhol, francês e holandês disputavam o controle das rotas açucareiras do Caribe. Após os espanhóis abandonarem a fortaleza da ilha em 1648, marinheiros franceses (vindos da ilha vizinha de Saint Kitts) e colonos holandeses (vindos de Santo Eustáquio) desembarcaram quase simultaneamente.",
                    "Em vez de guerrearem até a aniquilação mútua, os dois comandantes — o francês Robert de Longvilliers e o holandês Martin Thomas — subiram a uma colina central e assinaram em <strong>23 de março de 1648 o Tratado de Concórdia</strong>.",
                    "O documento estabeleceu que a ilha seria dividida pacificamente e que os recursos naturais (como as ricas lagoas de sal marinho essenciais para preservar carnes e peixes) seriam compartilhados perpetuamente.",
                    "O tratado garantiu que franceses e holandeses pudessem circular livremente em ambos os lados para comércio e moradia, criando um dos tratados de cooperação de fronteira mais antigos ainda em vigor no direito internacional."
                ]
            },
            {
                h2: "A lenda do concurso de caminhada: o gin contra o vinho",
                paragraphs: [
                    "A sabedoria popular dos ilhéus preserva uma lenda folclórica saborosa sobre como o traçado exato da fronteira foi definido.",
                    "Conta-se que os colonos decidiram marcar a fronteira através de uma competição: um atirador de elite francês e um soldado holandês postaram-se de costas um para o outro em Oyster Pond na costa leste.",
                    "Ao sinal de partida, ambos começaram a caminhar pela orla da ilha em direções opostas: o francês marchou pelo norte e o holandês pelo sul, até se encontrarem novamente na praia de Cupecoy na costa oeste.",
                    "Como a França ficou com cerca de 60% da ilha e a Holanda com 40%, a piada caribenha diz que o soldado francês bebeu vinho tinto revigorante e marchou com passadas rápidas, enquanto o holandês bebeu o tradicional gin jenever, ficou embriagado, tirou uma soneca sob uma palmeira e perdeu preciosos quilômetros de terra."
                ]
            },
            {
                h2: "Duas Europas tropicais em 87 quilômetros quadrados",
                paragraphs: [
                    "A convivência pacífica em São Martinho gerou uma das atmosferas culturais mais singulares do Caribe.",
                    "No lado francês (Saint-Martin, capital Marigot), a moeda oficial é o Euro (€), a eletricidade opera a 220 volts, a gastronomia segue a tradição dos bistrôs parisienses e as leis obedecem ao Código Civil de Paris como território ultraperiférico da União Europeia.",
                    "A poucos metros de distância, cruzando um pequeno marco de pedra com as bandeiras entrelaçadas, entra-se no lado holandês (Sint Maarten, capital Philipsburg), onde se utiliza o Florim das Antilhas e o Dólar, as tomadas são de 110 volts padrão norte-americano e imperam cassinos luminosos, lojas francas de joias ('duty-free') e cruzeiros gigantescos.",
                    "Apesar das diferenças administrativas, a população local de 75 mil pessoas é bilíngue, utiliza o inglês caribenho no cotidiano e cruza a fronteira várias vezes ao dia sem qualquer controle alfandegário."
                ]
            },
            {
                h2: "O espetáculo aéreo de Maho Beach",
                paragraphs: [
                    "No setor holandês situa-se uma das atrações mais famosas da aviação mundial: o <strong>Aeroporto Internacional Princesa Juliana (SXM)</strong>.",
                    "Pela escassez severa de terras planas na ilha, a cabeceira da pista de pouso 10 foi construída a escassos 50 metros das areias da praia pública de <strong>Maho Beach</strong>.",
                    "O resultado é um espetáculo cinematográfico diário: jatos comerciais de grande porte (como Boeing 747, 777 e Airbus A330) realizam aproximações rasantes a menos de vinte metros sobre a cabeça de milhares de banhistas.",
                    "Nas decolagens, o sopro dos motores a jato ('jet blast') atinge forças de furacão na praia, arremessando turistas e toalhas no mar e tornando a fronteira aeroportuária mundialmente famosa nas redes sociais."
                ]
            },
            {
                h2: "O teste da pandemia e a resiliência após o Furacão Irma",
                paragraphs: [
                    "A fronteira aberta de quase 400 anos quase nunca foi fechada, exceto em circunstâncias extremas.",
                    "Em setembro de 2017, a ilha foi devastada pelo catastrófico <strong>Furacão Irma</strong> (categoria 5), com ventos de 295 km/h que destruíram 90% das edificações e do sistema de energia de ambos os lados, exigindo pontes aéreas de socorro militar de Paris e Haia.",
                    "Em março de 2020, durante a pandemia de COVID-19, as autoridades francesas e holandesas instalaram barreiras sanitárias e policiais temporárias na linha divisória pela primeira vez na história moderna.",
                    "A reação popular foi imediata: centenas de moradores das duas partes da ilha realizaram protestos com cartazes dizendo 'One Island, One People, One Destiny', forçando a reabertura completa da divisa semanas depois e reafirmando a força do Tratado de Concórdia de 1648."
                ]
            }
        ],
        quote: "Nós podemos ter dois governos, duas moedas e duas pátrias do outro lado do oceano, mas no Caribe nós somos uma só carne. O Tratado de Concórdia não é um papel velho: é a nossa forma diária de viver.",
        quoteAuthor: "Manifesto Comunitário de Moradores de Saint-Martin e Sint Maarten (Philipsburg / Marigot, 2020).",
        tableTitle: "Quadro Comparativo: Saint-Martin (França) vs Sint Maarten (Países Baixos)",
        tableHeaders: ["Aspecto", "Saint-Martin (Lado Norte)", "Sint Maarten (Lado Sul)"],
        tableRows: [
            ["Status Político", "Coletividade Ultramarina da França (UE)", "País Constituinte do Reino dos Países Baixos"],
            ["Área Territorial", "53 km² (61% da ilha)", "34 km² (39% da ilha)"],
            ["Capital Administrativa", "Marigot", "Philipsburg"],
            ["Moeda em Circulação", "Euro (€) (aceita dólares)", "Florim das Antilhas e Dólar Americano (US$)"],
            ["Perfil Econômico", "Turismo ecológico, gastronomia francesa e náutica", "Turismo de massa, navios de cruzeiro, cassinos e duty-free"]
        ],
        tacticalBoxTitle: "A Fronteira que Divide uma Lagoa",
        tacticalBoxText: "A fronteira terrestre entre França e Holanda não corta apenas colinas e estradas, mas também divide ao meio uma das maiores lagoas de água salgada do Caribe: a Simpson Bay Lagoon. As águas da lagoa são cortadas por uma linha imaginária sem boias físicas. Para facilitar a circulação de megaiates, o canal de acesso do mar fica no setor holandês com a ponte elevadiça de Simpson Bay, enquanto os estaleiros de reparo naval e marinas de luxo estão distribuídos harmonicamente em ambos os lados territoriais.",
        retencaoTexto: "Teste seus conhecimentos sobre bandeiras caribenhas e identidades nacionais no Quiz do VitaleGeo:",
        retencaoLink: "/jogos/bandeiras/",
        retencaoBotao: "Jogar Quiz de Bandeiras",
        faq: [
            { q: "Qual a menor ilha do mundo dividida por dois países?", a: "A ilha de São Martinho (Saint-Martin / Sint Maarten) no Caribe, com 87 km² de área total divididos entre a França (norte) e os Países Baixos (sul)." },
            { q: "Existe controle de passaporte na fronteira de São Martinho?", a: "Não. A fronteira terrestre é completamente aberta para pessoas e veículos desde o Tratado de Concórdia de 1648, sendo demarcada apenas por pequenos marcos de pedra simbólicos nas laterais das vias." },
            { q: "Qual aeroporto fica famoso pelos pousos sobre a praia em São Martinho?", a: "O Aeroporto Internacional Princesa Juliana (SXM), situado no setor holandês de Sint Maarten, onde aviões a jato passam a poucos metros sobre os banhistas na praia de Maho Beach." }
        ]
    },
    {
        slug: "eurotunel-canal-da-mancha",
        titulo: "Como o Eurotúnel Quebrou Oito Mil Anos de Isolamento Insular da Grã-Bretanha?",
        categoria: "Curiosidades",
        data: "20 Out 2026 - 16:15",
        dataIso: "2026-10-20T16:15:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Chargement_voiture_Eurotunnel.jpg",
        imgLegenda: "FIG 01 // Embarque de veículos nos vagões de transporte fechados do Eurotúnel no terminal de travessia do Canal da Mancha.",
        resumo: "Com 50,4 km de trilhos sob o mar, o túnel ligou Folkestone a Coquelles em 1994, quebrando o fosso geológico que separava a Grã-Bretanha da Europa desde a Era do Gelo.",
        dossie: [
            { rotulo: "Extensão Total", valor: "50,45 quilômetros" },
            { rotulo: "Trecho Sob o Mar", valor: "37,9 km (Recorde mundial)" },
            { rotulo: "Profundidade", valor: "Até 75m sob o leito marinho" },
            { rotulo: "Inauguração Oficial", valor: "6 de maio de 1994" }
        ],
        lead: "Durante mais de <strong>oito mil anos ininterruptos</strong> — desde que o derretimento das geleiras da última Era do Gelo submergiu a planície pré-histórica de Doggerland e inundou o Estreito de Dover —, a ilha da Grã-Bretanha esteve fisicamente separada do continente europeu pelas águas agitadas do Canal da Mancha. Esse fosso geológico de 34 quilômetros de água funcionou como o escudo supremo britânico contra as invasões armadas da Invencível Armada espanhola em 1588, das tropas imperiais de Napoleão Bonaparte em 1805 e da Alemanha nazista na Segunda Guerra Mundial. Essa barreira natural milenar ruiu em definitivo em 1 de dezembro de 1990, quando brocas gigantescas de escavação britânica e francesa se encontraram a 40 metros sob o fundo do mar, concluindo a maior façanha de geoengenharia do século XX: o <strong>Eurotúnel (Channel Tunnel)</strong>.",
        sections: [
            {
                h2: "O sonho de Napoleão e os séculos de paranoia militar",
                paragraphs: [
                    "A ideia de perfurar o leito do Canal da Mancha para ligar a França à Inglaterra surgiu em 1802, proposta pelo engenheiro francês Albert Mathieu-Favier a Napoleão Bonaparte. O projeto previa túneis iluminados por lamparinas a óleo com carruagens puxadas por cavalos e uma ilha artificial no meio do canal para trocar os animais.",
                    "No entanto, enquanto os franceses viam o túnel com entusiasmo comercial, a liderança militar britânica reagiu com pânico e repulsa geopolítica.",
                    "Generais e almirantes do Império Britânico (como Lord Palmerston e o duque de Wellington) temiam que qualquer elo terrestre permanente neutralizasse a supremacia invencível da Marinha Real britânica, permitindo que exércitos estrangeiros tomassem Londres de surpresa.",
                    "Foi necessário mais de um século de paz, a vitória compartilhada em duas guerras mundiais e a consolidação do Mercado Comum Europeu para que a primeira-ministra Margaret Thatcher e o presidente François Mitterrand assinassem em 1986 o Tratado de Cantuária, autorizando a obra com financiamento 100% privado."
                ]
            },
            {
                h2: "A anatomia da obra: três túneis cavados no giz-marga",
                paragraphs: [
                    "O Eurotúnel não é um túnel único, mas um complexo sistema de <strong>três tubos paralelos</strong> perfurados a uma profundidade média de 40 metros (e até 75 metros) sob o leito rochoso do mar.",
                    "Existem dois túneis ferroviários principais de 7,6 metros de diâmetro para trens de passageiros e carga em sentidos opostos, ladeando um túnel central de serviço menor de 4,8 metros de diâmetro, mantido sob pressão positiva para garantir ventilação, fuga de emergência e manutenção sem paralisar o tráfego.",
                    "O sucesso da engenharia dependeu de uma descoberta geológica precisa: os engenheiros orientaram os 50,4 km de traçado rigorosamente dentro da camada estratigráfica de <strong>giz-marga (chalk marl)</strong>.",
                    "Essa rocha sedimentar calcária continha a combinação perfeita: era impermeável à infiltração da água salgada do oceano e suficientemente macia para ser cortada com eficiência pelas cabeças giratórias das tuneladoras elétricas sem desabamentos nas paredes."
                ]
            },
            {
                h2: "O histórico aperto de mãos a 40 metros sob o mar",
                paragraphs: [
                    "Para escavar os túneis, onze colossais tuneladoras (tatuzões) fabricadas nos EUA, Reino Unido e Japão — máquinas de 1.000 toneladas e do tamanho de dois campos de futebol — começaram a perfurar simultaneamente a partir de Shakespeare Cliff (perto de Dover) e de Sangatte (perto de Calais).",
                    "A precisão do alinhamento a laser via satélite foi assombrosa.",
                    "Em <strong>1 de dezembro de 1990</strong>, a equipe do operário britânico Graham Fagg e do operário francês Philippe Cozette rompeu a última parede de rocha com picaretas pneumáticas no túnel de serviço.",
                    "O aperto de mãos transmitido ao vivo para todo o planeta consolidou a primeira ligação terrestre contínua entre a Grã-Bretanha e a Europa continental desde a Idade da Pedra. Em 6 de maio de 1994, a rainha Elizabeth II e o presidente François Mitterrand inauguraram formalmente o serviço comercial."
                ]
            },
            {
                h2: "A mecânica operacional: Eurostar e Le Shuttle",
                paragraphs: [
                    "Ao contrário de pontes ou túneis rodoviários convencionais, carros, ônibus e caminhões não dirigem diretamente pelo Eurotúnel devido ao risco proibitivo de fumaça tóxica e colisões em 50 km de escuridão confinada.",
                    "O sistema opera com trens de alta tecnologia em dois modelos:",
                    "1. <strong>Le Shuttle</strong>: trens lançadeira gigantescos de dois andares com vagões de aço fechados. Carros e caminhões sobem a bordo nos terminais de Folkestone ou Coquelles e são transportados de uma costa à outra em apenas <strong>35 minutos de travessia subterrânea</strong> a 160 km/h.",
                    "2. <strong>Eurostar</strong>: trens de alta velocidade para passageiros que viajam diretamente do centro de Londres (Estação St Pancras) até Paris (Gare du Nord) em 2 horas e 15 minutos, ou até Bruxelas em 2 horas a velocidades de até 300 km/h nos trilhos abertos."
                ]
            },
            {
                h2: "O pesadelo financeiro e o novo atrito pós-Brexit",
                paragraphs: [
                    "Se o Eurotúnel foi uma obra-prima de engenharia civil, na área financeira ele foi um dos maiores desastres da história corporativa.",
                    "Orçado originalmente em £ 4,7 bilhões de libras, o custo real de construção disparou para quase <strong>£ 10 bilhões de libras esterlinas (mais de 100% de sobrecusto)</strong>, empurrando o consórcio Eurotunnel para uma reestruturação de dívida quase falimentar nos anos 1990 antes de atingir lucros estáveis sob o grupo Getlink.",
                    "No século XXI, com a saída do Reino Unido da União Europeia pelo <strong>Brexit</strong>, a fronteira subterrânea ganhou novas complexidades geopolíticas.",
                    "Cabines de controle alfandegário e de passaportes foram reimplantadas nos terminais; no entanto, mais de 20 milhões de passageiros e 25% de todo o valor das mercadorias trocadas entre a Grã-Bretanha e a Europa continental continuam cruzando a artéria submarina, provando que nem as decisões políticas de Westminster conseguem quebrar a ponte de concreto cravada sob o mar."
                ]
            }
        ],
        quote: "Pela primeira vez na história da humanidade, um monarca britânico e um chefe de Estado francês estão unidos sem precisar molhar os sapatos ou cruzar um navio sobre as ondas.",
        quoteAuthor: "Rainha Elizabeth II // Discurso oficial de inauguração do Eurotúnel no terminal de Coquelles (6 de maio de 1994).",
        tableTitle: "Ficha Técnica e Dimensões do Eurotúnel (Channel Tunnel)",
        tableHeaders: ["Parâmetro Estrutural", "Métrica de Engenharia", "Relevância Operacional"],
        tableRows: [
            ["Extensão Total da Obra", "50,45 quilômetros", "4º maior túnel ferroviário do mundo em comprimento total"],
            ["Trecho Submarino Contínuo", "37,9 quilômetros", "Recorde mundial absoluto de extensão sob o leito oceânico"],
            ["Profundidade Máxima", "75 metros sob o fundo do mar", "115 metros abaixo da superfície da água do canal"],
            ["Tempo de Travessia do Trem", "35 minutos entre terminais", "Reduziu viagens de balsa que duravam de 90 a 120 minutos"],
            ["Volume de Escavação", "+8 milhões de metros cúbicos", "Material descartado criou a reserva costeira de Samphire Hoe em Dover"]
        ],
        tacticalBoxTitle: "A Fortaleza de Sangatte e a Crise Migratória",
        tacticalBoxText: "No final dos anos 1990 e início dos anos 2000, o terminal francês de Coquelles e o vilarejo vizinho de Sangatte transformaram-se no foco dramático da imigração clandestina para a Grã-Bretanha. Centenas de migrantes tentavam invadir as plataformas à noite para subir nos tetos dos trens ou caminhar pelos túneis escuros. O governo britânico financiou a instalação de quilômetros de cercas eletrificadas duplas, câmeras térmicas, patrulhas de cães e detectores de dióxido de carbono para monitorar caminhões, transformando o terminal de acesso ao túnel em uma das fronteiras terrestres mais blindadas da Europa ocidental.",
        retencaoTexto: "Meça a distância exata e compare rotas ferroviárias de alta velocidade na Calculadora de Distâncias oficial:",
        retencaoLink: "/ferramentas/calculadora-distancia/",
        retencaoBotao: "Abrir Calculadora de Distâncias",
        faq: [
            { q: "Qual a extensão do Eurotúnel sob o mar?", a: "O Eurotúnel tem 50,45 quilômetros de extensão total, dos quais 37,9 quilômetros ficam inteiramente escavados sob o leito rochoso do mar, sendo o maior trecho submarino contínuo do planeta." },
            { q: "É possível dirigir um carro dentro do Eurotúnel?", a: "Não. Não existe pista para automóveis dirigirem. Os carros, caminhões e ônibus são embarcados nos vagões fechados do trem lançadeira Le Shuttle e transportados sobre trilhos de uma costa à outra em 35 minutos." },
            { q: "Quanto tempo dura a viagem de trem de Londres a Paris pelo Eurotúnel?", a: "A viagem nos trens de alta velocidade Eurostar dura aproximadamente 2 horas e 15 minutos entre a estação St Pancras em Londres e a Gare du Nord em Paris." }
        ]
    },
    {
        slug: "tratado-da-antartida-territorios",
        titulo: "Como o Tratado da Antártida Congelou as Disputas Territoriais de Sete Países no Fim do Mundo?",
        categoria: "Fronteiras",
        data: "20 Out 2026 - 18:00",
        dataIso: "2026-10-20T18:00:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Antarctica%2C_territorial_claims.svg/1280px-Antarctica%2C_territorial_claims.svg.png",
        imgLegenda: "FIG 01 // Mapa das reivindicações territoriais na Antártida mostrando a sobreposição entre Chile, Argentina e Reino Unido e o setor não reivindicado da Terra de Marie Byrd.",
        resumo: "Assinado em 1959 no auge da Guerra Fria, o tratado desmilitarizou 14 milhões de km², baniu armas nucleares e congelou pretensões territoriais soberanas.",
        dossie: [
            { rotulo: "Área Coberta", valor: "14 milhões de km² (Sul de 60°S)" },
            { rotulo: "Signatários Originais", valor: "12 nações (1959)" },
            { rotulo: "Setor Sem Dono", valor: "Terra de Marie Byrd (Terra nullius)" },
            { rotulo: "Status Militar", valor: "100% desmilitarizado e não-nuclear" }
        ],
        lead: "Cobrindo mais de <strong>14 milhões de quilômetros quadrados</strong> — uma extensão continental 40% maior do que toda a Europa —, a <strong>Antártida</strong> é o continente mais frio, ventoso, seco e inacessível da Terra. Mas sob sua monumental calota glacial de três quilômetros de espessura repousam cerca de <strong>70% de toda a água doce da biosfera</strong> e jazidas astronômicas de carvão, ferro, petróleo e gás natural. Durante a primeira metade do século XX, sete nações soberanas retalharam o mapa polar em fatias em forma de pizza convergindo para o Polo Sul, ameaçando transformar o continente branco em um campo de batalha militar na Guerra Fria. Essa catástrofe geopolítica foi abortada por um dos tratados diplomáticos mais perfeitos da história humana: o <strong>Tratado da Antártida de 1959</strong>.",
        sections: [
            {
                h2: "A corrida das pizzas polares e as pretensões sobrepostas",
                paragraphs: [
                    "Entre 1908 e 1943, sete países proclamaram formalmente setores soberanos sobre a Antártida, baseando-se em descobertas de exploradores e proximidade geográfica: <strong>Reino Unido, Nova Zelândia, França, Austrália, Noruega, Chile e Argentina</strong>.",
                    "A Austrália reivindicou a maior fatia individual (quase 42% de todo o continente).",
                    "A grande bomba-relógio cartográfica concentrou-se na Península Antártica, onde as fatias territoriais de três nações — <strong>Reino Unido (Território Antártico Britânico), Chile (Território Chileno Antártico) e Argentina (Antártida Argentina)</strong> — sobrepõem-se descaradamente sobre o mesmo metro quadrado de rocha e gelo.",
                    "Durante a Segunda Guerra Mundial, navios britânicos executaram a secreta 'Operação Tabarin' para expulsar destacamentos argentinos e chilenos que haviam pintado bandeiras em cabanas de madeira, acendendo o alerta de um conflito armado internacional."
                ]
            },
            {
                h2: "O Tratado de Washington de 1959 e o milagre do Artigo IV",
                paragraphs: [
                    "O ponto de virada deu-se com o Ano Geofísico Internacional (1957–1958), quando cientistas de todo o mundo cooperaram pacificamente em pesquisas de física e meteorologia polar.",
                    "Reconhecendo o perigo de que os Estados Unidos e a União Soviética instalassem silos de mísseis balísticos e bases nucleares no gelo, diplomatas de doze nações reuniram-se em Washington e assinaram em <strong>1 de dezembro de 1959 o Tratado da Antártida</strong>.",
                    "O coração jurídico da paz polar é o genial <strong>Artigo IV</strong>:",
                    "O artigo determina que nenhuma atividade científica ou instalação de bases estabelecida durante a vigência do tratado serve como base para sustentar, ampliar ou criar novas reivindicações de soberania territorial. Em termos jurídicos, o tratado não anulou as reivindicações dos sete países, mas as 'congelou' em suspensão permanente, permitindo que todas as nações operem juntas sem discutir fronteiras."
                ]
            },
            {
                h2: "A primeira zona livre de armas e lixo nuclear do planeta",
                paragraphs: [
                    "O Tratado da Antártida foi a primeira convenção de controle de armas da Guerra Fria a banir completamente a presença militar em uma região inteira da Terra.",
                    "Pelo <strong>Artigo I</strong>, a Antártida só pode ser utilizada exclusivamente para fins pacíficos: manobras militares, exercícios com armas e construção de fortificações permanentes são terminantemente proibidos.",
                    "Pelo <strong>Artigo V</strong>, quaisquer testes nucleares e o descarte de resíduos radioativos no continente polar foram tornados ilegais.",
                    "Militares de marinhas e forças aéreas só podem atuar no continente para suporte logístico e resgate humanitário de expedições científicas civis, sendo concedido a inspetores de qualquer nação o direito de inspecionar qualquer base estrangeira sem aviso prévio."
                ]
            },
            {
                h2: "A Terra de Marie Byrd: a maior 'terra nullius' do planeta",
                paragraphs: [
                    "Enquanto quase toda a Antártida foi reivindicada por algum país antes de 1959, sobrou uma imensa fatia triangular entre as longitudes 90°W e 150°W: a <strong>Terra de Marie Byrd</strong>.",
                    "Com uma área de 1,6 milhão de quilômetros quadrados (maior do que o território do Alasca e quase o tamanho da Líbia), essa gigantesca massa de gelo e montanhas vulcânicas subglaciais é a <strong>maior 'terra nullius' (terra de ninguém) do planeta Terra</strong>.",
                    "Como nenhum Estado formalizou uma pretensão oficial antes do congelamento jurídico do Tratado de 1959, e o Artigo IV proíbe novas reivindicações soberanas, a Terra de Marie Byrd permanecerá para sempre como o único território continental sem dono no globo terrestre."
                ]
            },
            {
                h2: "O Protocolo de Madri de 1991 e o horizonte de 2048",
                paragraphs: [
                    "Para proteger o continente contra a ganância industrial, as nações assinaram em 1991 o <strong>Protocolo de Madri sobre Proteção Ambiental</strong>, que declarou a Antártida como uma 'reserva natural consagrada à paz e à ciência'.",
                    "O Artigo 7 do protocolo baniu por tempo indeterminado qualquer atividade comercial relacionada a recursos minerais (mineração e prospecção de petróleo).",
                    "No entanto, essa proibição de mineração pode ser revista a partir do ano de <strong>2048</strong> se qualquer um dos membros consultivos solicitar uma conferência de revisão.",
                    "Com a escassez de combustíveis fósseis e a corrida por minerais críticos, potências globais como a China e a Rússia têm expandido silenciosamente o número de bases científicas e quebra-gelos nucleares nas águas do oceano austral, antecipando que o degelo político da Antártida poderá reabrir a mais fria disputa de poder do século XXI."
                ]
            }
        ],
        quote: "É do interesse de toda a humanidade que a Antártida continue para sempre a ser utilizada exclusivamente para fins pacíficos e não se torne cenário ou objeto de discórdia internacional.",
        quoteAuthor: "Preâmbulo do Tratado da Antártida // Assinado em Washington D.C. (1 de dezembro de 1959).",
        tableTitle: "Os Sete Países Reivindicantes na Antártida e seus Setores",
        tableHeaders: ["País Reivindicante", "Ano da Pretensão", "Fatia Territorial", "Status de Sobreposição"],
        tableRows: [
            ["Reino Unido", "1908", "Território Antártico Britânico (20°W a 80°W)", "Sobreposição quase total com Chile e Argentina"],
            ["Nova Zelândia", "1923", "Dependência de Ross (160°E a 150°W)", "Reivindicação exclusiva sem sobreposições"],
            ["França", "1924", "Terra Adélia (136°E a 142°E)", "Estreita faixa encravada no setor australiano"],
            ["Austrália", "1933", "Território Antártico Australiano (42% do continente)", "Maior pretensão individual; sem contestações ocidentais"],
            ["Noruega", "1939", "Terra da Rainha Maud (20°W a 45°E)", "Delimitada sem fronteiras norte/sul definidas"],
            ["Chile", "1940", "Território Chileno Antártico (53°W a 90°W)", "Sobreposição com o setor britânico e argentino"],
            ["Argentina", "1943", "Antártida Argentina (25°W a 74°W)", "Sobreposição com o setor chileno e britânico"]
        ],
        tacticalBoxTitle: "A Estratégia dos Bebês da Península Antártica",
        tacticalBoxText: "Durante a década de 1970, em uma bizarra tentativa de fortalecer futuras pretensões de soberania pelo princípio do 'jus soli' (direito do solo), os governos de Argentina e Chile enviaram famílias civis com mulheres grávidas para suas bases antárticas. Em 7 de janeiro de 1978, Emilio Marcos Palma nasceu na base argentina de Esperanza, tornando-se o primeiro ser humano registrado a nascer no continente antártico. Pouco depois, o Chile registrou o nascimento de Juan Pablo Camacho na Villa Las Estrelas, mantendo até hoje pequenas escolas primárias e agências de correio civis no meio do gelo polar.",
        retencaoTexto: "Explore as fronteiras e tratados territoriais mais curiosos do globo no jogo Fronteiras do Mundo:",
        retencaoLink: "/jogos/fronteiras/",
        retencaoBotao: "Jogar Fronteiras do Mundo",
        faq: [
            { q: "Quem é o dono da Antártida?", a: "Nenhum país é dono da Antártida. O Tratado da Antártida de 1959 congelou todas as pretensões de soberania de sete países, estabelecendo que o continente pertence à humanidade para fins de pesquisa científica pacífica." },
            { q: "Quais países têm reivindicações de terra na Antártida?", a: "Sete nações formalizaram setores antes de 1959: Reino Unido, Nova Zelândia, França, Austrália, Noruega, Chile e Argentina. Estados Unidos e Rússia mantêm bases mas reservam o direito de reivindicar todo o continente no futuro." },
            { q: "É permitido explorar petróleo ou minérios na Antártida?", a: "Não. O Protocolo de Madri de 1991 proíbe expressamente qualquer atividade comercial relacionada a recursos minerais no continente, proteção ambiental que vigora pelo menos até uma possível revisão em 2048." }
        ]
    },
    {
        slug: "estreito-de-kerch-crimeia",
        titulo: "Por Que a Ponte do Estreito de Kerch é o Ponto Mais Vigiado da Guerra no Mar Negro?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 19:30",
        dataIso: "2026-10-20T19:30:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kerch_Strait%2C_Ukraine%2C_Russia%2C_near_natural_colors_satellite_image%2C_LandSat-5%2C_2011-08-30.jpg",
        imgLegenda: "FIG 01 // Imagem de satélite natural da NASA do Estreito de Kerch conectando o Mar Negro ao Mar de Azov entre a Crimeia e a Península de Taman.",
        resumo: "Com 19 km de extensão, a megaestrutura construída por Putin conecta a Rússia à Crimeia, controlando a entrada do Mar de Azov como a maior artéria de guerra.",
        dossie: [
            { rotulo: "Extensão da Ponte", valor: "19 quilômetros (Maior da Europa)" },
            { rotulo: "Custo de Construção", valor: "US$ 3,7 bilhões" },
            { rotulo: "Chokepoint Naval", valor: "Entrada do Mar de Azov" },
            { rotulo: "Inauguração", valor: "Maio de 2018 (Putin)" }
        ],
        lead: "Com <strong>19 quilômetros de extensão</strong> cruzando as correntes rasas e lamacentas que separam a Península de Taman (na Rússia continental) da Península de Kerch (na Crimeia ocupada), a <strong>Ponte da Crimeia (Ponte do Estreito de Kerch)</strong> é a ponte mais longa já construída na Europa e o símbolo máximo da anexação de 2014 conduzida pelo presidente Vladimir Putin. Mais do que uma façanha colossal de engenharia civil de US$ 3,7 bilhões de dólares, essa estrutura rodoferroviária funciona como a artéria logística vital para o abastecimento das tropas russas no sul da Ucrânia e como um torniquete naval que estrangula o acesso de navios ao <strong>Mar de Azov</strong>, convertendo o estreito no alvo mais cobiçado de mísseis ocidentais e drones navais da guerra contemporânea.",
        sections: [
            {
                h2: "A geografia do Estreito de Kerch: o portão do Mar de Azov",
                paragraphs: [
                    "O Estreito de Kerch tem cerca de 45 quilômetros de comprimento e uma largura que varia entre 3,1 e 15 quilômetros, conectando o Mar Negro ao Mar de Azov.",
                    "Trata-se de uma passagem marítima naturalmente traiçoeira: as profundidades médias raramente superam cinco metros fora do estreito canal artificial dragado de Kerch-Yenikale.",
                    "Antes da invasão de 2022, o Mar de Azov abrigava portos industriais ucranianos cruciais como Mariupol e Berdyansk, por onde a Ucrânia exportava anualmente milhões de toneladas de aço e cereais.",
                    "Ao construir a ponte com um arco central de navegação fixado em apenas <strong>35 metros de altura livre sobre a água</strong>, a engenharia russa impôs uma barreira física deliberada que baniu permanentemente cargueiros maiores da classe Panamax, estrangulando a economia portuária ucraniana anos antes do conflito armado generalizado."
                ]
            },
            {
                h2: "A construção relâmpago de Putin e a empresa de Rotenberg",
                paragraphs: [
                    "Após a anexação militar da Crimeia em março de 2014, a península não tinha qualquer conexão terrestre com a Rússia, dependendo exclusivamente de balsas lentas paralisadas por tempestades no inverno ou de rotas aéreas vulneráveis.",
                    "Putin declarou a construção da ponte como uma prioridade de segurança de Estado inegociável, entregando o contrato bilionário sem licitação à construtora Stroygazmontazh, controlada por seu aliado íntimo Arkady Rotenberg.",
                    "A obra enfrentou desafios de fundação extremos: o leito do estreito assenta-se sobre centenas de metros de lodo aluvial instável e falhas tectônicas sísmicas ativas, exigindo a cravação de mais de <strong>7.000 estacas tubulares de aço</strong> cravadas a até 105 metros de profundidade na rocha sólida.",
                    "Em maio de 2018, Putin cruzou a ponte pessoalmente dirigindo um caminhão Kamaz alaranjado na abertura da pista rodoviária, seguido pela inauguração da ferrovia militar em 2019."
                ]
            },
            {
                h2: "O primeiro ataque em outubro de 2022: o caminhão-bomba",
                paragraphs: [
                    "Para o governo de Volodymyr Zelensky e os estrategistas militares de Kyiv, a ponte nunca foi apenas uma rodovia: é uma infraestrutura ilegal construída em território soberano ucraniano e o cordão umbilical de munições para os exércitos russos.",
                    "Na madrugada de <strong>8 de outubro de 2022</strong> — um dia após o aniversário de 70 anos de Vladimir Putin —, uma colossal explosão abalou a estrutura.",
                    "Um caminhão carregado com toneladas de explosivos camuflados detonou na pista rodoviária exatamente quando um trem de carga com vagões-tanque de combustível cruzava a ferrovia paralela.",
                    "O fogo infernal derrubou dois vãos inteiros da pista de concreto no mar e danificou gravemente os trilhos, desferindo um golpe psicológico e logístico devastador nas forças de ocupação de Moscou."
                ]
            },
            {
                h2: "A guerra assimétrica dos 'Sea Baby' e os mísseis ATACMS",
                paragraphs: [
                    "A vulnerabilidade da ponte voltou a ser exposta em 17 de julho de 2023, quando os serviços de inteligência militar da Ucrânia (SBU) executaram um ataque inovador de guerra naval assimétrica.",
                    "Foram empregados os drones marítimos não tripulados <strong>'Sea Baby'</strong>: lanchas robóticas furtivas de fibra de vidro recheadas com 850 quilos de explosivos plásticos que navegaram centenas de quilômetros pelo Mar Negro e detonaram contra os pilares submersos da ponte.",
                    "Mais tarde, o fornecimento de mísseis balísticos táticos norte-americanos <strong>ATACMS</strong> com ogivas de fragmentação e mísseis de cruzeiro britânicos <em>Storm Shadow</em> forçou as forças russas a montar um dos perímetros de defesa aérea mais densos do planeta ao redor de Kerch.",
                    "O anel defensivo inclui baterias de mísseis S-400 Triumf, sistemas Pantsir-S1, cortinas de fumaça química aerosolizada, barcaças com refletores de radar e redes de contenção com cabos de aço contra drones subaquáticos."
                ]
            },
            {
                h2: "A ferrovia continental alternativa de Rostov a Mariupol",
                paragraphs: [
                    "Consciente de que a Ponte de Kerch permanece ao alcance constante de armas de precisão ucranianas e que um colapso total deixaria a Crimeia sitiada, o Ministério dos Transportes da Rússia acelerou uma rota alternativa de geoengenharia.",
                    "Trata-se de uma <strong>nova ferrovia continental de 500 quilômetros</strong> construída em tempo recorde através dos territórios ocupados de Donetsk e Zaporizhzhia, ligando Rostov-on-Don diretamente a Mariupol, Berdyansk e Melitopol.",
                    "Essa rota ferroviária pelo continente reduz a dependência militar exclusiva da Ponte de Kerch, assegurando que o estreito permaneça como uma sentinela geopolítica de atrito permanente entre as ambições imperiais de Moscou e a resistência armada de Kyiv."
                ]
            }
        ],
        quote: "A Ponte da Crimeia não é apenas um elo logístico; é o símbolo da anexação e uma construção militar ilegal em águas territoriais da Ucrânia. Ela deve ser neutralizada.",
        quoteAuthor: "Volodymyr Zelensky // Discurso na Cúpula da Plataforma da Crimeia (Kyiv, 2023).",
        tableTitle: "Cronologia dos Ataques e Defesas na Ponte de Kerch",
        tableHeaders: ["Evento / Ação Militar", "Data do Ocorrido", "Vetor Empregado", "Dano Estrutural e Consequência"],
        tableRows: [
            ["Inauguração Rodoviária", "Maio de 2018", "Caminhão dirigido por Vladimir Putin", "Consolidação da anexação e restrição a navios no Mar de Azov"],
            ["Primeiro Grande Ataque", "8 de outubro de 2022", "Caminhão-bomba com detonação de trem de combustível", "Derrubada de 2 vãos rodoviários e danos severos na linha férrea"],
            ["Ataque de Drones Navais", "17 de julho de 2023", "Drones kamikaze de superfície 'Sea Baby' (SBU)", "Fratura estrutural nos pilares de sustentação e corte de tráfego"],
            ["Instalação de Escudos", "2023–2024", "Baterias S-400, fumaça química e barcaças com cabos", "Transformação no estreito marítimo mais defendido da Europa"],
            ["Ferrovia Alternativa", "2024", "Nova malha ferroviária Rostov-Mariupol por terra", "Tentativa de reduzir a dependência logística da ponte no sul"]
        ],
        tacticalBoxTitle: "O Ataque às Balsas Ferroviárias de Kavkaz (2024)",
        tacticalBoxText: "Em agosto de 2024, quando a Rússia já evitava transportar trens com armamento pesado e combustível pelos trilhos vulneráveis da Ponte de Kerch, as forças ucranianas mudaram de tática: atacaram com mísseis antinavio Neptune a balsa ferroviária Conro Trader no porto de Kavkaz, no lado russo do estreito. A balsa, carregada com 30 vagões de combustível militar, explodiu e afundou nas águas do estreito, cortando temporariamente a principal alternativa de abastecimento de combustível de guerra para as tropas russas na Crimeia.",
        retencaoTexto: "Acompanhe as disputas territoriais e as mudanças de fronteiras no simulador interativo do VitaleGeo:",
        retencaoLink: "/jogos/fronteiras/",
        retencaoBotao: "Abrir Jogo de Fronteiras",
        faq: [
            { q: "Qual o comprimento da Ponte da Crimeia no Estreito de Kerch?", a: "A ponte tem 19 quilômetros de extensão total, sendo a mais longa ponte em operação na Europa, composta por pistas rodoviárias de quatro faixas e uma ferrovia dupla paralela." },
            { q: "Por que a Ponte de Kerch é tão importante militarmente para a Rússia?", a: "A ponte é a principal artéria de transporte pesado para abastecer bases militares russas, tropas, tanques e munições na Crimeia e na frente de combate sul da Ucrânia (regiões de Kherson e Zaporizhzhia)." },
            { q: "Quantas vezes a Ponte de Kerch foi atacada com sucesso?", a: "A ponte sofreu dois grandes ataques devastadores documentados: o caminhão-bomba de 8 de outubro de 2022 e o ataque com drones marítimos 'Sea Baby' em 17 de julho de 2023, além de dezenas de tentativas repelidas por defesas aéreas." }
        ]
    },
    {
        slug: "ranking-ilhas-mais-povoadas-do-mundo",
        titulo: "Quais São as Dez Ilhas Mais Povoadas do Planeta Onde Centenas de Milhões Vivem Cercados Pelo Mar?",
        categoria: "Rankings",
        data: "20 Out 2026 - 21:00",
        dataIso: "2026-10-20T21:00:00-03:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Java_Topography.png",
        imgLegenda: "FIG 01 // Mapa topográfico da Ilha de Java (Indonésia), a massa insular mais densamente povoada do planeta Terra, com mais de 156 milhões de habitantes.",
        resumo: "De Java com 156 milhões de pessoas a Honshu e Grã-Bretanha, veja as 10 ilhas mais populosas do globo e como a geografia insular condiciona nações inteiras.",
        dossie: [
            { rotulo: "1º Lugar Supremo", valor: "Ilha de Java (156M habitantes)" },
            { rotulo: "Densidade de Java", valor: "+1.200 hab/km²" },
            { rotulo: "População do Top 10", valor: "Mais de 650 milhões de pessoas" },
            { rotulo: "Representação Global", valor: "~8% da população da Terra" }
        ],
        lead: "Quando a maioria das pessoas imagina uma ilha, a mente evoca atóis tropicais paradisíacos desabitados ou pequenas comunidades de pescadores isoladas no oceano. A realidade demográfica do planeta Terra, no entanto, é radicalmente diferente: algumas das maiores aglomerações urbanas, potências industriais e centros geopolíticos da civilização humana estão espremidos em massas de terra completamente cercadas por água salgada. Na ilha mais populosa do mundo, vivem mais seres humanos do que na Rússia inteira ou no Japão, comprimidos entre vulcões ativos e plantações de arroz. Conheça a investigação cartográfica oficial com o ranking das <strong>dez ilhas mais povoadas do planeta Terra</strong>.",
        sections: [
            {
                h2: "O monstro demográfico: a Ilha de Java (156 milhões)",
                paragraphs: [
                    "A medalha de ouro demográfica absoluta pertence com folga inacreditável à <strong>Ilha de Java</strong>, na Indonésia.",
                    "Com uma área territorial de 128.297 km² (aproximadamente o tamanho da Grécia ou do estado brasileiro do Ceará), Java abriga mais de <strong>156 milhões de habitantes</strong> — cerca de 56% de toda a imensa população da Indonésia concentrada em apenas 7% do território nacional.",
                    "A densidade demográfica supera a marca sufocante de <strong>1.200 habitantes por quilômetro quadrado</strong>.",
                    "O segredo geológico dessa fertilidade extrema reside nos seus 45 vulcões ativos: cinzas vulcânicas ricas em minerais e um clima equatorial de chuvas abundantes transformaram o solo de Java em uma das terras mais produtivas do mundo, sustentando até três colheitas anuais de arroz que alimentam megacidades como a grande Jacarta (Jabodetabek, com 35 milhões de moradores)."
                ]
            },
            {
                h2: "O império industrial de Honshu (104 milhões)",
                paragraphs: [
                    "No segundo lugar global ergue-se a ilha principal do arquipélago japonês: <strong>Honshu</strong>.",
                    "Com 227.960 km², Honshu abriga mais de <strong>104 milhões de pessoas</strong> — cerca de 80% de toda a população do Japão.",
                    "É nessa ilha montanhosa recortada por falhas sísmicas ativas que repousa a Grande Área Metropolitana de Tóquio (com mais de 37 milhões de habitantes, a maior aglomeração urbana do planeta), além de centros industriais como Osaka, Kyoto, Nagoya e Hiroshima.",
                    "Apesar de ter 75% do seu relevo coberto por montanhas acidentadas e florestas inabitáveis, a engenharia japonesa maximizou cada metro quadrado de suas planícies costeiras (como a Planície de Kanto) com redes de trens-bala Shinkansen e arranha-céus antibarranco."
                ]
            },
            {
                h2: "As ilhas ocidentais e a megalópole de Luzon",
                paragraphs: [
                    "O terceiro lugar do ranking global pertence à <strong>Ilha da Grã-Bretanha</strong>, na Europa Ocidental, somando cerca de <strong>67 milhões de habitantes</strong> divididos entre Inglaterra, Escócia e País de Gales.",
                    "Foi nos vales fluviais e bacias de carvão da Grã-Bretanha que nasceu a Revolução Industrial no século XVIII, irradiando a tecnologia a vapor e o comércio global para os quatro cantos da Terra.",
                    "Logo atrás, em 4º lugar, surge a <strong>Ilha de Luzon</strong>, a maior das Filipinas, com mais de <strong>64 milhões de moradores</strong>.",
                    "Luzon abriga a hiperdensa capital Manila e a bacia industrial do Rio Pasig, concentrando metade da riqueza econômica e das disputas geopolíticas do país frente ao Mar do Sul da China."
                ]
            },
            {
                h2: "Os gigantes tropicais: Sumatra, Madagascar e Taiwan",
                paragraphs: [
                    "A Indonésia volta a dominar o ranking na 5ª posição com a monumental <strong>Ilha de Sumatra</strong>, abrigando quase <strong>60 milhões de pessoas</strong> em seus 473.000 km² de selvas tropicais, plantações de dendê e campos de gás natural.",
                    "Em 6º lugar figura a ilha de <strong>Madagascar</strong>, na costa leste da África, com mais de <strong>30 milhões de habitantes</strong> e um ecossistema biológico onde 90% das espécies de fauna e flora não existem em nenhum outro lugar do mundo.",
                    "O 7º lugar é o epicentro da maior tensão de semicondutores da atualidade: a <strong>Ilha de Taiwan (Formosa)</strong>, onde <strong>23,5 milhões de pessoas</strong> vivem em 36.000 km² sob a liderança de Taipé, concentrando mais de 60% da fabricação mundial de microchips avançados da TSMC."
                ]
            },
            {
                h2: "O fechamento do Top 10: Bornéu, Sri Lanka e Hispaniola",
                paragraphs: [
                    "O top 10 é completado por ilhas que combinam alta densidade e divisões territoriais singulares:",
                    "Em 8º lugar surge a ilha de <strong>Bornéu</strong>, com <strong>23 milhões de habitantes</strong> — a única ilha do mundo dividida soberanamente entre três países: Indonésia (Kalimantan), Malásia (Sabah e Sarawak) e o sultanato de Brunei.",
                    "O 9º lugar pertence ao <strong>Sri Lanka</strong>, no Oceano Índico, com <strong>22 milhões de pessoas</strong> dedicadas à agricultura de chá e portos estratégicos na rota de Malaca.",
                    "Fechando o ranking em 10º lugar está a caribenha <strong>Ilha de Hispaniola (22 milhões)</strong>, marcada pela dramática disparidade de fronteira entre a República Dominicana (próspera e florestada a leste) e o Haiti (empobrecido e desmatado a oeste)."
                ]
            }
        ],
        quote: "Viver em uma ilha não é uma limitação territorial; é um destino geológico. As ilhas mais populosas da Terra foram forçadas pela falta de espaço a se tornarem as sociedades mais inovadoras, disciplinadas e marinheiras da história.",
        quoteAuthor: "Dossiê Demográfico das Nações Insulares // Fundo de População da ONU (UNFPA, Nova York).",
        tableTitle: "Tabela Oficial: As 10 Ilhas Mais Populosas do Planeta Terra",
        tableHeaders: ["Posição", "Ilha", "População Estimada", "Área Territorial", "País / Soberania"],
        tableRows: [
            ["1º Lugar", "Ilha de Java", "156.000.000", "128.297 km²", "Indonésia (Jacarta e Bandung)"],
            ["2º Lugar", "Ilha de Honshu", "104.000.000", "227.960 km²", "Japão (Tóquio, Osaka e Nagoya)"],
            ["3º Lugar", "Grã-Bretanha", "67.000.000", "209.331 km²", "Reino Unido (Inglaterra, Escócia e Gales)"],
            ["4º Lugar", "Ilha de Luzon", "64.000.000", "109.965 km²", "Filipinas (Grande Manila)"],
            ["5º Lugar", "Ilha de Sumatra", "59.000.000", "473.481 km²", "Indonésia (Medan e Palembang)"],
            ["6º Lugar", "Madagascar", "30.000.000", "587.041 km²", "República de Madagascar"],
            ["7º Lugar", "Ilha de Taiwan", "23.500.000", "36.197 km²", "Taiwan / República da China (Taipé)"],
            ["8º Lugar", "Ilha de Bornéu", "23.000.000", "748.168 km²", "Divisão tríplice: Indonésia, Malásia e Brunei"],
            ["9º Lugar", "Sri Lanka (Ceilão)", "22.000.000", "65.610 km²", "República Democrática Socialista do Sri Lanka"],
            ["10º Lugar", "Hispaniola", "22.000.000", "76.192 km²", "Divisão binária: Rep. Dominicana e Haiti"]
        ],
        tacticalBoxTitle: "A Transferência da Capital de Java para Bornéu (IKN Nusantara)",
        tacticalBoxText: "A hiperpopulação sufocante de Java gerou uma das decisões geopolíticas mais radicais da era moderna. Jacarta, com 35 milhões de pessoas na área metropolitana, afunda até 20 centímetros por ano no mar devido à extração excessiva de água do subsolo, enquanto engarrafamentos crônicos paralisam o tráfego urbano. Diante do colapso ecológico, o governo da Indonésia iniciou a mudança de sua capital federal para a selva de Bornéu, fundando do zero a cidade planejada de Nusantara (IKN) a um custo de US$ 33 bilhões de dólares para transferir ministérios e funcionários para fora de Java.",
        retencaoTexto: "Teste seus conhecimentos geográficos e adivinhe capitais de nações insulares no Quiz do VitaleGeo:",
        retencaoLink: "/jogos/capitais/",
        retencaoBotao: "Jogar Quiz de Capitais",
        faq: [
            { q: "Qual é a ilha mais populosa do mundo?", a: "A Ilha de Java, na Indonésia, é a mais populosa do planeta com mais de 156 milhões de habitantes, concentrando mais da metade de toda a população da Indonésia em uma área equivalente ao estado do Ceará." },
            { q: "Por que a Ilha de Java consegue sustentar tantas pessoas?", a: "A presença de 45 vulcões ativos enriqueceu o solo de cinzas minerais férteis que, combinadas com o clima equatorial chuvoso, permitem até três colheitas anuais de arroz ininterruptas há séculos." },
            { q: "Qual a ilha mais povoada da Europa?", a: "A Ilha da Grã-Bretanha, onde vivem cerca de 67 milhões de habitantes distribuídos entre a Inglaterra, Escócia e País de Gales, ocupando o 3º lugar no ranking mundial." }
        ]
    },
    {
        slug: "ranking-paises-mais-jovens-do-mundo",
        titulo: "Quais São as Dez Nações Mais Jovens do Planeta Que Ganharam Assento na ONU?",
        categoria: "Rankings",
        data: "20 Out 2026 - 22:30",
        dataIso: "2026-10-20T22:30:00-03:00",
        tempoLeitura: "9 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/SouthSudanOMC.png",
        imgLegenda: "FIG 01 // Carta territorial do Sudão do Sul, a nação soberana mais jovem do planeta Terra, independente desde 9 de julho de 2011.",
        resumo: "Do Sudão do Sul em 2011 a Kosovo, Montenegro, Timor-Leste e o colapso soviético, veja os 10 países mais novos do mundo que redesenharam as fronteiras globais.",
        dossie: [
            { rotulo: "País Mais Jovem", valor: "Sudão do Sul (Julho de 2011)" },
            { rotulo: "Último Europeu na ONU", valor: "Montenegro (Junho de 2006)" },
            { rotulo: "Membro 193 da ONU", valor: "Sudão do Sul" },
            { rotulo: "Independência Lusófona", valor: "Timor-Leste (Maio de 2002)" }
        ],
        lead: "É comum pensarmos nas fronteiras dos países soberanos como entidades imutáveis, consagradas há séculos por guerras imperiais do passado distante. A realidade das relações internacionais, no entanto, é dinâmica: o mapa mundi está em constante mutação. Desde a queda do Muro de Berlim e a dissolução da União Soviética e da Iugoslávia na década de 1990, mais de trinta novos Estados foram criados, alterando atlas escolares, hasteando novas bandeiras no gramado da sede das Nações Unidas em Nova York e emitindo novos passaportes e moedas. Conheça a apuração com o ranking oficial das <strong>dez nações mais jovens do planeta Terra que conquistaram a independência soberana</strong>.",
        sections: [
            {
                h2: "O caçula do planeta: Sudão do Sul (2011)",
                paragraphs: [
                    "A nação soberana mais jovem do planeta Terra é o <strong>Sudão do Sul</strong>, que conquistou sua independência oficial em <strong>9 de julho de 2011</strong>, tornando-se o 193º Estado-membro da ONU.",
                    "A emancipação foi o desfecho trágico de mais de cinco décadas de guerra civil entre o norte muçulmano arabizado de Cartum e o sul predominantemente cristão e animista de etnias Dinka e Nuer, um conflito que custou a vida de mais de dois milhões de pessoas.",
                    "Em janeiro de 2011, supervisionado pela ONU, um referendo histórico registrou assombrosos <strong>98,83% dos votos a favor da secessão</strong>.",
                    "Apesar de ter herdado cerca de 75% dos campos de petróleo do antigo Sudão unificado, o país nasceu sem saída para o mar e mergulhou em guerras civis internas, dependendo dos oleodutos de Cartum para exportar seu óleo pelo Mar Vermelho."
                ]
            },
            {
                h2: "A dissolução dos Balcãs: Kosovo (2008) e Montenegro (2006)",
                paragraphs: [
                    "O continente europeu viu duas novas nações surgirem no século XXI a partir dos escombros da antiga Iugoslávia.",
                    "Em <strong>3 de junho de 2006</strong>, após um referendo onde 55,5% dos eleitores aprovaram a separação, <strong>Montenegro</strong> declarou a dissolução da federação com a Sérvia, garantindo seu assento como o 192º membro da ONU e recuperando a soberania que havia perdido após a Primeira Guerra Mundial.",
                    "Dois anos depois, em <strong>17 de fevereiro de 2008</strong>, o parlamento de <strong>Kosovo</strong> declarou unilateralmente a independência da Sérvia.",
                    "Com uma população majoritariamente de etnia albanesa, Kosovo é hoje reconhecido por mais de 100 países (incluindo EUA, Alemanha e França), mas sua entrada plena na ONU permanece bloqueada pelo poder de veto da Rússia e da China no Conselho de Segurança, além da oposição formal de Belgrado."
                ]
            },
            {
                h2: "A epopeia lusófona de Timor-Leste (2002)",
                paragraphs: [
                    "Na Ásia, a nação mais jovem do milênio é a <strong>República Democrática de Timor-Leste</strong>, independente desde <strong>20 de maio de 2002</strong>.",
                    "Após séculos de colonização portuguesa, o território declarou sua independência em 1975, mas foi imediatamente invadido e anexado pela Indonésia de Suharto, iniciando vinte e quatro anos de ocupação militar brutal e massacres sangrentos (como o massacre do Cemitério de Santa Cruz em Díli).",
                    "A resistência heroica liderada por Xanana Gusmão e a pressão diplomática mundial culminaram no referendo de 1999 administrado pela ONU, onde 78,5% dos timorenses votaram pela libertação.",
                    "Após um período de administração transitória internacional liderada pelo diplomata brasileiro Sérgio Vieira de Mello, Timor-Leste nasceu como o primeiro novo Estado soberano do século XXI e o único país de língua oficial portuguesa da Ásia ao lado de Macau."
                ]
            },
            {
                h2: "O divórcio de veludo: Chéquia e Eslováquia (1993)",
                paragraphs: [
                    "Em <strong>1 de janeiro de 1993</strong>, a Europa testemunhou a dissolução pacífica mais elegante da história cartográfica moderna: o chamado <strong>'Divórcio de Veludo' da Tchecoslováquia</strong>.",
                    "Após o colapso do comunismo na Revolução de Veludo de 1989 liderada pelo dramaturgo Václav Havel, divergências políticas e fiscais entre os líderes Václav Klaus (em Praga) e Vladimír Mečiar (em Bratislava) selaram a partilha amigável da nação em dois Estados independentes: a <strong>República Tcheca (Chéquia)</strong> e a <strong>República Eslovaca (Eslováquia)</strong>.",
                    "Sem disparar um único tiro de fuzil, as fronteiras internas foram convertidas em limites internacionais, com os bens estatais divididos na proporção matemática exata de dois para um, tornando-se modelo diplomático de convivência civilizada."
                ]
            },
            {
                h2: "O fechamento do Top 10: Palau, Eritreia e o colapso soviético",
                paragraphs: [
                    "Completam a lista das nações mais jovens do planeta:",
                    "No Pacífico Sul, <strong>Palau</strong> tornou-se independente em <strong>1 de outubro de 1994</strong>, encerrando o protetorado sob tutela dos Estados Unidos.",
                    "No Chifre da África, a <strong>Eritreia</strong> separou-se formalmente da Etiópia em <strong>24 de maio de 1993</strong> após trinta anos de guerra armada, privando a Etiópia de todo o seu litoral no Mar Vermelho.",
                    "No início dos anos 1990, o colapso formal da União Soviética em <strong>26 de dezembro de 1991</strong> deu à luz simultaneamente a quinze nações soberanas (como Cazaquistão, Ucrânia, Belarus, Geórgia e os Estados Bálticos), e o colapso iugoslavo criou nações como <strong>Bósnia e Herzegovina (1992)</strong> e <strong>Macedônia do Norte (1991)</strong>, que completam a era mais fértil de surgimento de novas bandeiras da história moderna."
                ]
            }
        ],
        quote: "O nascimento de uma nação não termina na assinatura da ata de independência; ele começa ali. Manter a soberania de pé em um mundo de gigantes exige mais coragem do que derrotar os generais da opressão.",
        quoteAuthor: "Xanana Gusmão // Discurso na cerimônia de restauração da independência de Timor-Leste (Díli, 20 de maio de 2002).",
        tableTitle: "Tabela Oficial: As 10 Nações Mais Jovens do Planeta Terra",
        tableHeaders: ["Posição", "País / Estado", "Data da Independência", "País de Origem", "Membro da ONU"],
        tableRows: [
            ["1º Lugar", "Sudão do Sul", "9 de julho de 2011", "Sudão", "Sim (193º membro desde 2011)"],
            ["2º Lugar", "Kosovo", "17 de fevereiro de 2008", "Sérvia", "Reconhecimento parcial (+100 países)"],
            ["3º Lugar", "Montenegro", "3 de junho de 2006", "Sérvia e Montenegro", "Sim (192º membro desde 2006)"],
            ["4º Lugar", "Timor-Leste", "20 de maio de 2002", "Indonésia / Portugal", "Sim (191º membro desde 2002)"],
            ["5º Lugar", "Palau", "1 de outubro de 1994", "Estados Unidos (Tutela ONU)", "Sim (185º membro desde 1994)"],
            ["6º Lugar", "Eritreia", "24 de maio de 1993", "Etiópia", "Sim (182º membro desde 1993)"],
            ["7º Lugar", "República Tcheca (Chéquia)", "1 de janeiro de 1993", "Tchecoslováquia (Divórcio de Veludo)", "Sim (Membro fundador repactuado)"],
            ["8º Lugar", "Eslováquia", "1 de janeiro de 1993", "Tchecoslováquia (Divórcio de Veludo)", "Sim (Membro fundador repactuado)"],
            ["9º Lugar", "Bósnia e Herzegovina", "3 de março de 1992", "Iugoslávia", "Sim (desde maio de 1992)"],
            ["10º Lugar", "Cazaquistão / Repúblicas pós-URSS", "Dezembro de 1991", "União Soviética (Dissolução formal)", "Sim (desde 1992)"]
        ],
        tacticalBoxTitle: "Bougainville: O Próximo País do Mundo?",
        tacticalBoxText: "O próximo país a ingressar na ONU pode surgir no Pacífico Sul. Em 2019, a ilha de Bougainville realizou um referendo de autodeterminação após décadas de conflito armado com a Papua-Nova Guiné: impressionantes 97,7% da população votaram pela independência total. O governo de Bougainville e o parlamento de Port Moresby negociam os termos de transferência de poderes para proclamar oficialmente a República de Bougainville até 2027.",
        retencaoTexto: "Adivinhe as bandeiras e as capitais dos países mais novos do mundo no Quiz oficial do VitaleGeo:",
        retencaoLink: "/jogos/bandeiras/",
        retencaoBotao: "Jogar Quiz de Bandeiras",
        faq: [
            { q: "Qual é o país mais jovem do mundo?", a: "O Sudão do Sul é a nação soberana mais jovem do planeta, tendo declarado sua independência em 9 de julho de 2011 após um referendo onde quase 99% dos eleitores votaram pela separação do Sudão." },
            { q: "Qual o último país da Europa a ser admitido na ONU?", a: "Montenegro, que declarou independência da união com a Sérvia em junho de 2006 e foi admitido como o 192º Estado-membro da ONU no mesmo mês." },
            { q: "O que foi o Divórcio de Veludo de 1993?", a: "Foi a dissolução pacífica e amigável da Tchecoslováquia em 1 de janeiro de 1993, dando origem a dois países soberanos distintos: a República Tcheca e a Eslováquia, sem qualquer violência armada." }
        ]
    }
];

function generatePostHtml(p) {
    const dossieHtml = p.dossie.map(item => `
                    <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                        <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">${item.rotulo}</div>
                        <div class="text-sm font-bold text-amber-400 mt-1">${item.valor}</div>
                    </div>`).join('');

    const sectionsHtml = p.sections.map(s => `
                <h2>${s.h2}</h2>
                ${s.paragraphs.map(text => `<p>${text}</p>`).join('\n')}`).join('\n');

    const tableRowsHtml = p.tableRows.map(row => `
                            <tr>
                                ${row.map((cell, idx) => `
                                <td class="p-3 border-b border-white/5 ${idx === 0 ? 'font-bold text-white' : (idx === 1 ? 'text-amber-400' : 'text-slate-300')}">${cell}</td>`).join('')}
                            </tr>`).join('');

    const faqHtml = p.faq.map(item => `
                        <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
                            <h4 class="text-sm font-bold text-white mb-2">${item.q}</h4>
                            <p class="text-xs text-slate-400 leading-relaxed">${item.a}</p>
                        </div>`).join('');

    return `<!DOCTYPE html>
<html lang="pt-br" class="scroll-smooth bg-[#090a0f]">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${p.titulo} | Blog VitaleGeo</title>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="alternate" type="application/rss+xml" title="VitaleGeo | Feed RSS" href="https://www.vitalegeo.com.br/rss.xml">
    <meta name="description" content="${p.resumo}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="canonical" href="https://www.vitalegeo.com.br/blog/${p.slug}/">

    <!-- Open Graph / Redes Sociais -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.vitalegeo.com.br/blog/${p.slug}/">
    <meta property="og:title" content="${p.titulo} | Blog VitaleGeo">
    <meta property="og:description" content="${p.resumo}">
    <meta property="og:image" content="${p.img}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${p.titulo} | Blog VitaleGeo">
    <meta name="twitter:description" content="${p.resumo}">
    <meta name="twitter:image" content="${p.img}">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${p.titulo.replace(/"/g, '\\"')}",
      "description": "${p.resumo.replace(/"/g, '\\"')}",
      "image": "${p.img}",
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
      "datePublished": "${p.dataIso}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.vitalegeo.com.br/blog/${p.slug}/"
      }
    }
    </script>

    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Plus Jakarta Sans', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                        mono: ['Space Mono', 'monospace']
                    },
                    colors: {
                        geoNavy: '#090a0f',
                        geoBlue: '#38bdf8',
                        geoGold: '#f59e0b',
                        geoPaper: '#11131a'
                    },
                    typography: (theme) => ({
                        DEFAULT: {
                            css: {
                                color: theme('colors.slate.300'),
                                h1: { color: '#fff', fontFamily: 'Playfair Display', fontWeight: '700' },
                                h2: { color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2.5em', marginBottom: '0.8em', fontWeight: '700' },
                                h3: { color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2em', fontWeight: '600' },
                                strong: { color: theme('colors.geoGold') },
                                a: { color: theme('colors.geoBlue'), textDecoration: 'none', '&:hover': { color: '#fff', textDecoration: 'underline' } },
                                blockquote: { borderLeftColor: '#f59e0b', backgroundColor: 'rgba(245, 158, 11, 0.04)', color: '#f1f5f9', fontStyle: 'italic', padding: '1.25rem 1.5rem', borderRadius: '0.5rem' },
                                code: { color: theme('colors.geoGold'), backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }
                            }
                        }
                    })
                }
            }
        }
    </script>
</head>
<body class="page-shell bg-[#090a0f] text-slate-300 font-sans antialiased selection:bg-amber-400 selection:text-black">

    <!-- Navbar Flutuante em Pílula -->
    <nav class="floating-pill-nav">
        <div class="px-6 h-16 flex justify-between items-center w-full">
            <a href="/" class="flex items-center gap-2.5 group">
                <div class="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition">
                    <i class="ph-fill ph-globe-hemisphere-east text-lg group-hover:rotate-45 transition duration-500"></i>
                </div>
                <span class="text-lg font-heading font-bold text-white tracking-tight">Vitale<span class="text-amber-400">Geo</span></span>
            </a>
            
            <div class="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300 bg-white/[0.03] p-1 rounded-full border border-white/5">
                <a href="/" class="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition">Início</a>
                <a href="/blog" class="px-3.5 py-1.5 rounded-full text-white bg-white/10 font-semibold transition">Posts</a>
                <a href="/ferramentas" class="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition">Ferramentas</a>
                <a href="/jogos" class="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition">Jogos</a>
                <a href="/videos" class="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition">Vídeos</a>
                <a href="/sobre" class="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition">Sobre</a>
            </div>

            <a href="https://www.youtube.com/@vitalegeo" target="_blank" class="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-200 hover:text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 px-4 py-2 rounded-full transition">
                <i class="ph-fill ph-youtube-logo text-base text-red-500"></i> YouTube
            </a>
        </div>
    </nav>

    <!-- Header do Artigo -->
    <header class="pt-36 pb-14 px-6 border-b border-white/5 bg-slate-900/30 relative overflow-hidden">
        <div class="max-w-3xl mx-auto text-center relative z-10">
            <div class="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono mb-4 uppercase">
                <a href="/" class="hover:text-amber-400 transition">Home</a>
                <span>/</span>
                <a href="/blog" class="hover:text-amber-400 transition">Dossiês</a>
                <span>/</span>
                <span class="text-amber-400">${p.categoria}</span>
            </div>

            <div class="carto-badge mb-6">
                <span>Dossiê Investigativo · ${p.categoria}</span>
            </div>
            
            <h1 class="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                ${p.titulo}
            </h1>

            <div class="flex items-center justify-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                <span><i class="ph-bold ph-calendar text-amber-400"></i> ${p.data}</span>
                <span>•</span>
                <span><i class="ph-bold ph-user text-amber-400"></i> Agnaldo Batista</span>
                <span>•</span>
                <span><i class="ph-bold ph-clock text-amber-400"></i> ${p.tempoLeitura} (Leitura Completa)</span>
            </div>
        </div>
    </header>

    <!-- Conteúdo Principal -->
    <main class="page-content">
        <article class="py-16 px-6">
            <div class="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:text-white prose-a:text-amber-400 hover:prose-a:text-white prose-img:rounded-xl">
                
                <figure class="mb-12 not-prose">
                    <img src="${p.img}" alt="${p.titulo}" class="w-full h-auto shadow-2xl border border-white/10 rounded-2xl object-cover aspect-video">
                    <figcaption class="text-center font-mono text-[11px] text-slate-500 mt-3 uppercase tracking-wider">
                        ${p.imgLegenda}
                    </figcaption>
                </figure>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">
                    ${dossieHtml}
                </div>

                <p class="lead text-xl text-slate-200">
                    ${p.lead}
                </p>

                ${sectionsHtml}

                <blockquote>
                    <p>"${p.quote}"</p>
                    <footer class="font-mono text-xs text-amber-400 mt-2">— ${p.quoteAuthor}</footer>
                </blockquote>

                <div class="my-10 overflow-x-auto not-prose">
                    <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">
                        <i class="ph-bold ph-table text-amber-400"></i> ${p.tableTitle}
                    </h3>
                    <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
                        <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
                            <tr>
                                ${p.tableHeaders.map(h => `<th class="p-3 font-semibold">${h}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/5">
                            ${tableRowsHtml}
                        </tbody>
                    </table>
                </div>

                <div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
                    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                        <i class="ph-bold ph-compass"></i> ${p.tacticalBoxTitle}
                    </h4>
                    <p class="text-sm text-slate-300 leading-relaxed">
                        ${p.tacticalBoxText}
                    </p>
                </div>

                <div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
                    <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                        <i class="ph-fill ph-game-controller text-xl"></i>
                    </div>
                    <h4 class="text-white font-heading font-bold text-base mb-1">Exploração Interativa VitaleGeo</h4>
                    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">${p.retencaoTexto}</p>
                    <a href="${p.retencaoLink}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
                        <i class="ph-bold ph-arrow-up-right"></i> ${p.retencaoBotao}
                    </a>
                </div>

                <div class="my-10 not-prose">
                    <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
                        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes do Dossiê (FAQ)
                    </h3>
                    <div class="space-y-3">
                        ${faqHtml}
                    </div>
                </div>

            </div>
        </article>

        <!-- Chamada YouTube -->
        <section class="pb-16 px-6">
            <div class="max-w-3xl mx-auto bg-slate-900/80 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl">
                <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-400/5 blur-3xl pointer-events-none rounded-full"></div>
                <div class="carto-badge mb-4">
                    <span class="carto-badge-dot"></span>
                    <span>Análises Cartográficas em Vídeo</span>
                </div>
                <h3 class="text-2xl font-heading font-bold text-white mb-2">Gostou desta investigação?</h3>
                <p class="text-slate-400 mb-6 text-sm max-w-lg mx-auto">No canal oficial do VitaleGeo desvendamos mapas táticos, fronteiras bizarras e rankings geopolíticos com animações em alta definição.</p>
                <a href="https://www.youtube.com/@vitalegeo" target="_blank" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest px-6 py-3 rounded-full transition text-xs shadow-lg shadow-red-600/20">
                    <i class="ph-fill ph-youtube-logo text-lg"></i> Inscrever-se no YouTube
                </a>
            </div>
        </section>

        <!-- Bloco Google AdSense Oficial -->
        <section class="pb-20 px-6">
            <div class="max-w-3xl mx-auto">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6879770260785828" crossorigin="anonymous"></script>
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-format="autorelaxed"
                     data-ad-client="ca-pub-6879770260785828"
                     data-ad-slot="5140105675"></ins>
                <script>
                     (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </section>
    </main>

    <!-- Rodapé Oficial VitaleGeo -->
    <footer class="site-footer">
        <div class="max-w-6xl mx-auto">
            <div class="site-footer__social">
                <a href="https://github.com/vitaledev" target="_blank" class="hover:text-white transition" aria-label="GitHub"><i class="ph-fill ph-github-logo"></i></a>
                <a href="https://www.youtube.com/@vitalegeo" target="_blank" class="hover:text-red-500 transition" aria-label="YouTube"><i class="ph-fill ph-youtube-logo"></i></a>
            </div>
            <p class="site-footer__brand font-heading text-base text-white">VitaleGeo</p>
            <p class="text-slate-400 text-xs">Arquivo independente de geopolítica e cartografia investigativa.</p>
            <div class="site-footer__links text-xs mt-4">
                <a href="/sobre/">Sobre o Projeto</a>
                <span class="text-slate-700">·</span>
                <a href="/politica/">Política de Privacidade</a>
                <span class="text-slate-700">·</span>
                <a href="https://www.youtube.com/@vitalegeo" target="_blank">Canal YouTube</a>
            </div>
            <p class="text-[11px] text-slate-600 mt-8">&copy; 2026 VitaleGeo. Todos os direitos reservados.</p>
        </div>
    </footer>

    <!-- Barra Mobile Inferior -->
    <div class="h-20 md:hidden"></div>
    <nav class="fixed bottom-0 left-0 right-0 z-50 md:hidden mobile-app-nav">
        <div class="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#090a0f]/95 backdrop-blur shadow-2xl">
            <div class="grid grid-cols-6 gap-1 px-2 py-3 text-[10px] font-medium text-slate-400 text-center">
                <a href="/" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-house text-lg text-geoGold"></i> <span class="truncate">Início</span>
                </a>
                <a href="/blog" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-newspaper text-lg"></i> <span class="truncate">Posts</span>
                </a>
                <a href="/ferramentas" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-wrench text-lg"></i> <span class="truncate">Ferramentas</span>
                </a>
                <a href="/jogos" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-game-controller text-lg"></i> <span class="truncate">Jogos</span>
                </a>
                <a href="/videos" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-play-circle text-lg"></i> <span class="truncate">Vídeos</span>
                </a>
                <a href="/sobre" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-info text-lg"></i> <span class="truncate">Sobre</span>
                </a>
            </div>
        </div>
    </nav>
</body>
</html>`;
}

function generateAstroMarkdown(p) {
    const sectionsMd = p.sections.map(s => `
## ${s.h2}

${s.paragraphs.join('\n\n')}
`).join('\n');

    return `---
titulo: "${p.titulo.replace(/"/g, '\\"')}"
resumo: "${p.resumo.replace(/"/g, '\\"')}"
categoria: "${p.categoria}"
data: "${p.data}"
img: "${p.img}"
tempoLeitura: "${p.tempoLeitura}"
destaque: false
---

${p.lead}

${sectionsMd}

<blockquote>
"${p.quote}"
<footer class="font-mono text-xs text-amber-400 mt-2">— ${p.quoteAuthor}</footer>
</blockquote>

<div class="my-10 overflow-x-auto not-prose">
<table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
<thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
<tr>
${p.tableHeaders.map(h => `<th class="p-3">${h}</th>`).join('\n')}
</tr>
</thead>
<tbody class="divide-y divide-white/5 text-slate-300">
${p.tableRows.map(r => `<tr>${r.map((c, i) => `<td class="p-3 ${i === 0 ? 'font-bold text-white' : (i === 1 ? 'text-amber-400' : 'text-slate-300')}">${c}</td>`).join('\n')}</tr>`).join('\n')}
</tbody>
</table>
</div>

<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
<h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
<i class="ph-bold ph-compass"></i> ${p.tacticalBoxTitle}
</h4>
<p class="text-sm text-slate-300 leading-relaxed">${p.tacticalBoxText}</p>
</div>
`;
}

console.log("=================================================");
console.log("INICIANDO CICLO DIÁRIO DE CONTEÚDO (20 OUT 2026)");
console.log("=================================================");

for (const p of postsData) {
    const targetBlogDir = path.join(blogDir, p.slug);
    if (!fs.existsSync(targetBlogDir)) {
        fs.mkdirSync(targetBlogDir, { recursive: true });
    }

    const htmlContent = generatePostHtml(p);
    const htmlFile = path.join(targetBlogDir, 'index.html');
    fs.writeFileSync(htmlFile, htmlContent, 'utf8');

    if (!fs.existsSync(srcBlogDir)) {
        fs.mkdirSync(srcBlogDir, { recursive: true });
    }
    const mdContent = generateAstroMarkdown(p);
    const mdFile = path.join(srcBlogDir, `${p.slug}.md`);
    fs.writeFileSync(mdFile, mdContent, 'utf8');

    console.log(`[HTML + MD OK] ${p.slug} (${htmlContent.length} chars)`);
}

console.log("\nAtualizando assets/js/posts.js...");
let postsJs = fs.readFileSync(postsJsFile, 'utf8');

const orderedForPostsJs = [...postsData].reverse();

const newObjectsCode = orderedForPostsJs.map(item => `    {
        titulo: "${item.titulo.replace(/"/g, '\\"')}",
        categoria: "${item.categoria}",
        data: "${item.data}",
        img: "${item.img}",
        link: "${item.slug}/",
        resumo: "${item.resumo.replace(/"/g, '\\"')}"
    },`).join('\n');

postsJs = postsJs.replace('const blogPosts = [', `const blogPosts = [\n${newObjectsCode}`);
fs.writeFileSync(postsJsFile, postsJs, 'utf8');
console.log("✓ assets/js/posts.js atualizado com sucesso!");

console.log("\nExecutando 'npm run sitemap'...");
try {
    const sitemapOutput = execSync('npm run sitemap', { cwd: rootDir, encoding: 'utf8' });
    console.log(sitemapOutput);
} catch (err) {
    console.error("Erro ao gerar sitemap:", err.message);
}

console.log("\nProcessamento dos 10 posts de 20 Out 2026 concluído com êxito!");
