// BANCO DE DADOS DOS POSTS
// Adicione novos posts aqui no topo da lista. O site atualiza sozinho.

const blogPosts = [
    {
        titulo: "Por Que um Farol Errado Criou a Fronteira em Zigue-Zague Mais Estranha da Europa na Ilha de Märket?",
        categoria: "Fronteiras",
        data: "17 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/M%C3%A4rket_Lighthouse%2C_Finland_IMG_3355.jpg/1280px-M%C3%A4rket_Lighthouse%2C_Finland_IMG_3355.jpg",
        link: "ilha-market-fronteira-ziguezague/",
        resumo: "Um erro de cálculo russo em 1885 colocou um farol em território sueco. Para resolver a gafe sem mexer nas áreas dos países, diplomatas criaram um zigue-zague surreal."
    },
    {
        titulo: "Por Que Submarinos Nucleares Preferem Cruzar os Estreitos de Sunda e Lombok em Vez de Malaca?",
        categoria: "Geopolítica",
        data: "17 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Selat_Sunda_2014_%283%29.jpg/1280px-Selat_Sunda_2014_%283%29.jpg",
        link: "estreitos-sunda-lombok/",
        resumo: "Enquanto Malaca sofre com águas rasas e risco de engarrafamento, as fossas profundas de Lombok e Sunda são as autoestradas secretas de submarinos e superpetroleiros."
    },
    {
        titulo: "Por Que a Mongólia Tem o Menor Povoamento do Planeta Espalhado em Três Espanhas de Terra?",
        categoria: "Curiosidades",
        data: "17 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_%28orthographic_projection%29.svg/1280px-Mongolia_%28orthographic_projection%29.svg.png",
        link: "mongolia-vazio-demografico/",
        resumo: "Com 1,56 milhão de km² e apenas 3,4 milhões de habitantes, o país dos cavaleiros nômades é a nação soberana mais vazia do mundo entre a Rússia e a China."
    },
    {
        titulo: "Por Que a Maior Fronteira Terrestre da França Fica na Floresta Amazônica com o Brasil?",
        categoria: "Fronteiras",
        data: "17 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pont_depuis_l%27_Oyapock.jpg/1280px-Pont_depuis_l%27_Oyapock.jpg",
        link: "fronteira-franca-brasil-oiapoque/",
        resumo: "Com 730 km ao longo do Amapá e do Rio Oiapoque, a França compartilha com o Brasil sua mais extensa fronteira contínua, superando vizinhos europeus."
    },
    {
        titulo: "Por Que 18 Cabos Submarinos da Internet Mundial Cruzam a Mesma Praia no Brasil?",
        categoria: "Geopolítica",
        data: "17 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/2008_submarine_cable_disruption_map.jpg",
        link: "cabos-submarinos-fortaleza/",
        resumo: "A Praia do Futuro, em Fortaleza, é o maior entroncamento digital da América Latina, conectando o continente aos EUA, Europa e África sob ameaça de apagão."
    },
    {
        titulo: "Como o Couto Misto Sobreviveu 700 Anos Como um Microestado Sem Rei Entre Portugal e Espanha?",
        categoria: "Fronteiras",
        data: "17 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Carta_topogr%C3%A1fica_do_Julgado_de_Montalegre_1836_Fidencio_Bourman_%28Couto_misto%29.jpg/1280px-Carta_topogr%C3%A1fica_do_Julgado_de_Montalegre_1836_Fidencio_Bourman_%28Couto_misto%29.jpg",
        link: "couto-misto-microestado/",
        resumo: "Durante sete séculos, três aldeias entre a Galiza e Trás-os-Montes operaram como território soberano, sem pagar tributos a Madri ou Lisboa até 1864."
    },
    {
        titulo: "Por Que o Canal de Kiel é a Rota Marítima Artificial Mais Movimentada do Planeta?",
        categoria: "Curiosidades",
        data: "17 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Altenholz%2C_Nord-Ostsee-Kanal%2C_Kreuzfahrtschiff_%22Amadea%22_--_2023_--_1129.jpg/1280px-Altenholz%2C_Nord-Ostsee-Kanal%2C_Kreuzfahrtschiff_%22Amadea%22_--_2023_--_1129.jpg",
        link: "canal-de-kiel-alemanha/",
        resumo: "Cruzando a península da Jutlândia por 98 km, o Nord-Ostsee-Kanal economiza 460 km ao redor da Dinamarca e movimenta mais de 30.000 cargueiros por ano."
    },
    {
        titulo: "Como o Cazaquistão Monopolizou Quase Metade de Todo o Urânio do Planeta?",
        categoria: "Geopolítica",
        data: "17 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/1280px-Kazakhstan_%28orthographic_projection%29.svg.png",
        link: "geoeconomia-do-cazaquistao/",
        resumo: "Com 43% da produção mundial de urânio e posição chave no Corredor Médio, a gigante das estepes navega com maestria entre a Rússia, a China e o Ocidente."
    },
    {
        titulo: "Por Que a Polônia Está Se Armando para Ter o Maior Exército Terrestre da Europa?",
        categoria: "Geopolítica",
        data: "17 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Poland_%28orthographic_projection%29.svg/1280px-Poland_%28orthographic_projection%29.svg.png",
        link: "geopolitica-da-polonia/",
        resumo: "Na planície indefesa entre a Alemanha e a Rússia, Varsóvia investe mais de 4% do PIB em defesa para se tornar o escudo inexpugnável do flanco leste da OTAN."
    },
    {
        titulo: "Como o México Perdeu Mais de Metade de Seu Território para os Estados Unidos?",
        categoria: "História",
        data: "17 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mexico_%28orthographic_projection%29.svg/1280px-Mexico_%28orthographic_projection%29.svg.png",
        link: "historia-do-mexico/",
        resumo: "Do esplendor de Tenochtitlán à perda de 2 milhões de km² no Tratado de Guadalupe Hidalgo em 1848, entenda como as fronteiras mexicanas foram forjadas."
    },
    {
        titulo: "Vennbahn: A Linha de Trem Belga Que Isolou 5 Pedaços de Território Alemão",
        categoria: "Fronteiras",
        data: "16 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vennbahn_Karte.svg/1280px-Vennbahn_Karte.svg.png",
        link: "vennbahn-enclaves-belgas/",
        resumo: "O Tratado de Versalhes entregou o leito de uma ferrovia à Bélgica, gerando enclaves alemães separados por poucos metros de trilhos na Europa Central."
    },
    {
        titulo: "O Menor Gigante Geopolítico: Por Que as Superpotências Disputam o Djibuti?",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Djibouti_%28orthographic_projection%29.svg/1280px-Djibouti_%28orthographic_projection%29.svg.png",
        link: "djibuti-bases-militares/",
        resumo: "EUA, China, França, Japão e Itália dividem poucos quilômetros quadrados no Djibuti, a sentinela armada do estreito de Bab el-Mandeb."
    },
    {
        titulo: "A Biblioteca Cortada ao Meio: Onde EUA e Canadá se Cruzam na Sala de Leitura",
        categoria: "Curiosidades",
        data: "16 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Haskell_Free_Library_and_Opera_House_2008.jpg/1280px-Haskell_Free_Library_and_Opera_House_2008.jpg",
        link: "derby-line-biblioteca-fronteira/",
        resumo: "Na Haskell Free Library, a linha divisória internacional passa pelo chão do palco e entre as estantes de livros em pleno Paralelo 45."
    },
    {
        titulo: "Por Que o Canadá Tem Mais Lagos Que o Resto do Mundo Inteiro Junto?",
        categoria: "Curiosidades",
        data: "16 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Canada_%28orthographic_projection%29.svg/1280px-Canada_%28orthographic_projection%29.svg.png",
        link: "canada-pais-dos-lagos/",
        resumo: "O Canadá abriga mais de 60% dos lagos de água doce do planeta. Entenda a herança glacial do Escudo Canadense e seu peso geoestratégico global."
    },
    {
        titulo: "As Duas Capitais do Saara Ocidental: Por Que uma Cidade Fica Atrás de um Muro de 2.700 km?",
        categoria: "Fronteiras",
        data: "16 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Western_Sahara_walls_en.svg/1280px-Western_Sahara_walls_en.svg.png",
        link: "capitais-saara-ocidental-berm/",
        resumo: "Separadas pelo Berm marroquino, El Aaiún e Tifariti simbolizam o conflito entre o controle administrativo de Marrocos e a Frente Polisário no deserto."
    },
    {
        titulo: "Túnel do Estreito de Bering: A Megaconexão de 100 km Que Uniria a Ásia às Américas",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bering_Strait.jpeg/1280px-Bering_Strait.jpeg",
        link: "estreito-de-bering-tunel/",
        resumo: "Apenas 82 km separam a Sibéria do Alasca. Entenda a engenharia, os custos astronômicos e os entraves geopolíticos de conectar dois mundos por trilhos."
    },
    {
        titulo: "O Triângulo de Ilemi: O Pedaço Esquecido da África Que Três Países Reclamam",
        categoria: "Fronteiras",
        data: "16 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ilemi_triangle_map.png/1280px-Ilemi_triangle_map.png",
        link: "triangulo-de-ilemi/",
        resumo: "Uma área de 14.000 km² no Chifre da África disputada por Quênia, Sudão do Sul e Etiópia desde as demarcações britânicas imprecisas do século XX."
    },
    {
        titulo: "A Geoeconomia da Noruega: Como o Petróleo Criou o Maior Fundo Soberano da Terra",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Norway_%28orthographic_projection%29.svg/1280px-Norway_%28orthographic_projection%29.svg.png",
        link: "geoeconomia-da-noruega/",
        resumo: "Ao descobrir óleo no Mar do Norte em 1969, Oslo evitou a 'doença holandesa' e ergueu um fundo de US$ 1,6 trilhão que detém 1,5% de todas as ações do planeta."
    },
    {
        titulo: "A Geopolítica da Turquia: A Sentinela dos Estreitos Entre o Oriente e o Ocidente",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Turkey_%28orthographic_projection%29.svg/1280px-Turkey_%28orthographic_projection%29.svg.png",
        link: "geopolitica-da-turquia/",
        resumo: "Controlando o Bósforo e os Dardanelos pelo Tratado de Montreux, Ancara opera como o pivô eurasiático indispensável entre a OTAN, o Cáucaso e o Oriente Médio."
    },
    {
        titulo: "A História Completa da Colômbia: De Eldorado e Grã-Colômbia ao País dos Três Andes",
        categoria: "História",
        data: "16 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Colombia_%28orthographic_projection%29.svg/1280px-Colombia_%28orthographic_projection%29.svg.png",
        link: "historia-da-colombia/",
        resumo: "Conheça a trajetória épica da Colômbia: a lenda de Eldorado, as guerras de Bolívar, a perda do Panamá e a geografia montanhosa que moldou sua identidade."
    },
    {
        titulo: "A Fronteira Mais Reta do Mundo: Os 1.000 km do Meridiano 25 Entre Egito e Líbia",
        categoria: "Fronteiras",
        data: "15 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Egypt_Libya_Border.jpg/1280px-Egypt_Libya_Border.jpg",
        link: "fronteira-egito-libia-meridiano-25/",
        resumo: "Desenhada com régua em conferências coloniais entre britânicos e italianos, a linha do Meridiano 25 rasga o Saara sem uma curva por mil quilômetros."
    },
    {
        titulo: "O Lago Tanganica: O Segundo Mais Fundo do Mundo Onde 4 Países Dividem uma Fenda",
        categoria: "Geopolítica",
        data: "15 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lake_Tanganyika.jpg/1280px-Lake_Tanganyika.jpg",
        link: "lago-tanganica-fronteiras/",
        resumo: "Com 1.470 metros de profundidade no Rift Africano, o Lago Tanganica divide 4 nações e guarda 18% da água doce de superfície do planeta."
    },
    {
        titulo: "O Enclave de Llívia: A Ilha de Solo Espanhol Cercada pela França nos Pirineus",
        categoria: "Fronteiras",
        data: "15 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Llivia_aerial_view.jpg/1280px-Llivia_aerial_view.jpg",
        link: "llivia-enclave-espanhol/",
        resumo: "No Tratado dos Pirineus de 1659, a Espanha cedeu 33 vilarejos à França. Llívia foi mantida por Madri por ser classificada como cidade e virou um enclave."
    },
    {
        titulo: "A Represa das Três Gargantas: Como a Megaconstrução da China Desacelerou a Terra",
        categoria: "Curiosidades",
        data: "15 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ThreeGorgesDam-China2009.jpg/1280px-ThreeGorgesDam-China2009.jpg",
        link: "represa-tres-gargantas-impacto/",
        resumo: "Com 39 trilhões de quilos de água represados no rio Yangtze, a megaconstrução chinesa deslocou a massa planetária e alongou o dia terrestre."
    },
    {
        titulo: "Por que a Bolívia Mantém uma Marinha de Guerra Sem Ter Acesso ao Mar?",
        categoria: "Geopolítica",
        data: "15 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Armada_Boliviana_Titicaca.jpg/1280px-Armada_Boliviana_Titicaca.jpg",
        link: "bolivia-marinha-sem-mar/",
        resumo: "Após perder 400 km de litoral para o Chile na Guerra do Pacífico (1879), a Bolívia preserva 5.000 marinheiros no Titicaca e luta por sua saída soberana ao mar."
    },
    {
        titulo: "A Ilha de Hans: A Guerra do Uísque Que Terminou em Uma Fronteira de 1,2 km",
        categoria: "Fronteiras",
        data: "15 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hans_Island.jpg/1280px-Hans_Island.jpg",
        link: "divisao-da-ilha-hans/",
        resumo: "Depois de 49 anos de Guerra do Uísque, Canadá e Dinamarca assinaram a partilha de uma rocha no Ártico, criando a terceira fronteira terrestre do Canadá."
    },
    {
        titulo: "Svalbard: O Arquipélago no Ártico Onde Qualquer Pessoa Pode Morar Sem Visto",
        categoria: "Curiosidades",
        data: "15 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Longyearbyen_2011.jpg/1280px-Longyearbyen_2011.jpg",
        link: "svalbard-tratado-artico/",
        resumo: "Sob o Tratado de 1920, cidadãos de mais de 40 países podem morar nas ilhas norueguesas sem visto, além do território abrigar o Cofre Global de Sementes."
    },
    {
        titulo: "O Corredor de Wakhan: O Dedo de 350 km do Afeganistão que Toca a China",
        categoria: "Fronteiras",
        data: "15 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Wakhan_corridor.jpg/1280px-Wakhan_corridor.jpg",
        link: "corredor-de-wakhan/",
        resumo: "Criado no Grande Jogo como zona tampão entre impérios britânico e russo, esse corredor montanhoso tem o maior salto de fuso horário do mundo (+3h30)."
    },
    {
        titulo: "A Linha Internacional de Data e Kiribati: O País Que 'Pulou' um Dia Inteiro",
        categoria: "Curiosidades",
        data: "15 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/International_Date_Line.png/1280px-International_Date_Line.png",
        link: "kiribati-fuso-horario/",
        resumo: "Para não ter o território dividido em dias diferentes pela Linha de Data, Kiribati fez uma curva de 3.000 km no fuso em 1995 e virou o primeiro a ver o sol."
    },
    {
        titulo: "Gibraltar: Por que 6 km² de Rocha no Sul da Espanha Pertencem ao Reino Unido?",
        categoria: "Geopolítica",
        data: "15 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Rock_of_Gibraltar_from_Spain.jpg/1280px-Rock_of_Gibraltar_from_Spain.jpg",
        link: "gibraltar-reino-unido/",
        resumo: "Cravado na entrada do Mediterrâneo, o rochedo de Gibraltar desafia a Espanha desde o Tratado de Utrecht de 1713. Entenda seu aeroporto que corta uma avenida."
    },
    {
        titulo: "Por que 80% do Petróleo da Ásia Pode Ser Bloqueado no Estreito de Malaca?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 23:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Strait_of_Malacca_%2836759635615%29.jpg/1280px-Strait_of_Malacca_%2836759635615%29.jpg",
        link: "dilema-de-malaca/",
        resumo: "Com apenas 2,8 km de largura no seu ponto mais crítico, o Estreito de Malaca concentra 100 mil navios por ano e é o maior gargalo energético de Pequim."
    },
    {
        titulo: "Como a Linha dos Nove Traços Criou uma Disputa de US$ 3 Trilhões no Mar do Sul da China",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 22:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Mar_de_China_Meridional_-_BM_WMS_2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "mar-do-sul-da-china/",
        resumo: "Pequim reivindica 90% de um mar estratégico por onde passa um terço do comércio marítimo global, construindo ilhas artificiais militarizadas."
    },
    {
        titulo: "Por que uma Faixa de 43 km no Cáucaso Pode Incendiar a Região?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 20:30",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg/960px-Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        link: "corredor-de-zangezur/",
        resumo: "Uma faixa de 43 km no sul da Armênia separa o Azerbaijão de seu enclave de Nakhchivan e pode unir o mundo túrquico de Istambul ao Mar Cáspio."
    },
    {
        titulo: "Por que o Canal do Panamá Secou e Travou os Navios do Mundo?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 19:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Panama_Canal_Map_EN.svg/500px-Panama_Canal_Map_EN.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        link: "crise-canal-do-panama/",
        resumo: "Cada navio que cruza o Canal do Panamá consome 200 milhões de litros de água doce. A pior seca do Lago Gatún provocou leilões de US$ 4 milhões por vaga."
    },
    {
        titulo: "A Primeira Cadeia de Ilhas: Por que o Estreito de Taiwan é o Lugar Mais Perigoso da Terra",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 17:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Bathymetry_and_ocean_currents_of_the_Taiwan_Strait_and_nearby_areas.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "estreito-de-taiwan/",
        resumo: "Separando Taiwan da China continental por 160 km, o estreito concentra a produção dos chips mais avançados do mundo e a maior frota naval do planeta."
    },
    {
        titulo: "Por que o Triângulo do Lítio Virou o Maior Alvo Geopolítico dos Andes?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 16:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Triangulo_del_lito.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "triangulo-do-litio/",
        resumo: "Na fronteira entre Bolívia, Argentina e Chile estão mais de 50% das reservas mundiais de lítio, atraindo a disputa entre EUA, China e União Europeia."
    },
    {
        titulo: "Como a Turquia Trancou a Entrada do Mar Negro com a Convenção de Montreux",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 14:30",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Turkish_Strait_disambig.svg/500px-Turkish_Strait_disambig.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        link: "estreito-de-bosforo/",
        resumo: "Com apenas 700 metros no ponto mais estreito em Istambul, os Estreitos Turcos são a única chave naval para o Mar Negro sob a Convenção de Montreux."
    },
    {
        titulo: "Por que o Ártico Virou o Atalho Naval Mais Disputado do Planeta?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 13:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Map_of_the_Arctic_region_showing_the_Northeast_Passage%2C_the_Northern_Sea_Route_and_Northwest_Passage%2C_and_bathymetry.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "rota-maritima-do-artico/",
        resumo: "Com o derretimento do gelo marinho, a Rota Marítima do Norte encurta em 15 dias a viagem entre China e Europa, criando uma nova frente de disputa militar."
    },
    {
        titulo: "Por que Soldados Lutam Sem Armas de Fogo na Fronteira Nuclear do Himalaia?",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 11:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/China_India_CIA_map_border_disputes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "disputa-fronteira-himalaia/",
        resumo: "A 4.500 metros de altitude entre Índia e China, soldados de duas potências nucleares patrulham uma fronteira não demarcada de 3.488 km usando porretes."
    },
    {
        titulo: "Por que Nicósia Continua Sendo a Última Capital Dividida da Europa?",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 09:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Cyprus_districts_named.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        link: "nicosia-cidade-dividida/",
        resumo: "Desde 1974, a capital do Chipre é cortada ao meio por muros, sacos de areia e uma zona tampão da ONU, separando gregos e turcos após a Operação Átila."
    },
    {
        titulo: "The Slash: A Clareira de 6 Metros que Corta 8.891 km Entre os EUA e o Canadá",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/US-Canada_Border_The_Slash.jpg/1280px-US-Canada_Border_The_Slash.jpg",
        link: "fronteira-eua-canada-the-slash/",
        resumo: "A maior fronteira desmilitarizada do planeta é mantida à base de motosserras: uma linha desmatada que rasga montanhas e florestas de costa a costa."
    },
    {
        titulo: "Büsingen am Hochrhein: A Cidade Alemã Que Vive Sob as Leis da Suíça",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Buesingen_am_Hochrhein_aerial.jpg/1280px-Buesingen_am_Hochrhein_aerial.jpg",
        link: "busingen-enclave-alemao/",
        resumo: "Cercada pelo cantão suíço de Schaffhausen, Büsingen tem dois códigos postais, polícia mista e votou 96% para se juntar à Suíça em 1918."
    },
    {
        titulo: "Por que a Indonésia Está Abandonando Jacarta para Construir uma Capital na Selva?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/IKN_Nusantara_aerial_view_2024.jpg/1280px-IKN_Nusantara_aerial_view_2024.jpg",
        link: "nusantara-nova-capital-indonesia/",
        resumo: "Afundando até 25 cm por ano sob o peso de 10 milhões de habitantes, Jacarta está sendo substituída por uma megalópole planejada no meio da selva de Bornéu."
    },
    {
        titulo: "Cabo da Boa Esperança vs Suez: Como o Mar Vermelho Redesenhou o Comércio Global",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Suez_Canal_and_Cape_Route.png/1280px-Suez_Canal_and_Cape_Route.png",
        link: "crise-mar-vermelho-rotas/",
        resumo: "Desviar dos mísseis no Estreito de Bab el-Mandeb adiciona 6.000 km e duas semanas contornando a África. Entenda o impacto nos fretes mundiais."
    },
    {
        titulo: "O Mar de Aral: A Catástrofe Cartográfica do 4º Maior Lago que Virou Deserto",
        categoria: "Curiosidades",
        data: "11 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aral_Sea_1989-2014.jpg/1280px-Aral_Sea_1989-2014.jpg",
        link: "desaparecimento-mar-de-aral/",
        resumo: "Em menos de quatro décadas, o desvio soviético dos rios encolheu um mar interior de 68.000 km² em 90%, deixando navios enferrujados na areia."
    },
    {
        titulo: "Campione d'Italia: O Enclave Italiano Onde Quase Tudo Funciona na Suíça",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Campione_d%27Italia_view_from_Lugano.jpg/1280px-Campione_d%27Italia_view_from_Lugano.jpg",
        link: "campione-d-italia/",
        resumo: "À beira do Lago de Lugano, uma cidade soberana italiana usa franco suíço, rede telefônica suíça e placas do cantão de Ticino."
    },
    {
        titulo: "Ceuta e Melilla: Os Dois Pedaços da Europa Cravados no Norte da África",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Plazas_de_soberan%C3%ADa_%28Espa%C3%B1a%29.svg/1280px-Plazas_de_soberan%C3%ADa_%28Espa%C3%B1a%29.svg.png",
        link: "ceuta-e-melilla/",
        resumo: "Cercadas por muralhas triplas e pelo território do Marrocos, Ceuta e Melilla são as únicas fronteiras terrestres diretas da UE na África."
    },
    {
        titulo: "Cooch Behar: Onde Existiu o Único Enclave de 3ª Ordem da História Humana",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/India_Bangladesh_border_%28enclaves%29.svg/1280px-India_Bangladesh_border_%28enclaves%29.svg.png",
        link: "cooch-behar-enclaves/",
        resumo: "Um pedaço da Índia dentro de Bangladesh, dentro da Índia, dentro de Bangladesh: conheça o quebra-cabeça de Dahala Khagrabari."
    },
    {
        titulo: "O Corredor de Suwalki: A Faixa de 65 km que Tira o Sono da OTAN",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Suwalki_Gap_in_Europe.svg/1280px-Suwalki_Gap_in_Europe.svg.png",
        link: "corredor-de-suwalki/",
        resumo: "Prensada entre Kaliningrado e a Bielorrússia, essa fronteira polaco-lituana é considerada o calcanhar de Aquiles militar da Europa."
    },
    {
        titulo: "O Estreito de Ormuz: Por que 20% do Petróleo Mundial Passa por um Gargalo de 39 km?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Strait_of_hormuz_full.jpg/1280px-Strait_of_hormuz_full.jpg",
        link: "estreito-de-ormuz/",
        resumo: "Com apenas 39 km de largura navegável entre o Irã e Omã, o Estreito de Ormuz é o chokepoint naval mais crítico do planeta."
    },
    {
        titulo: "A Disputa do Essequibo: Por que Dois Terços da Guiana Viraram Alvo da Venezuela?",
        categoria: "Geopolítica",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Guyana_Venezuela_Locator.png/1280px-Guyana_Venezuela_Locator.png",
        link: "disputa-essequibo/",
        resumo: "A descoberta de 11 bilhões de barris de petróleo transformou a Guiana e reacendeu a ambição da Venezuela pelo Essequibo. Entenda o alerta na fronteira com o Brasil."
    },
    {
        titulo: "A Boneca Russa Cartográfica: O Enclave Dentro de Outro Enclave em Nahwa e Madha",
        categoria: "Fronteiras",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nahwa_-_Map.png/1280px-Nahwa_-_Map.png",
        link: "nahwa-madha/",
        resumo: "Na península de Musandam, um enclave de Omã fica nos Emirados Árabes. E dentro dele, há outro enclave dos Emirados. Conheça essa anomalia de 2ª ordem."
    },
    {
        titulo: "Kaliningrado: O Enclave Armado da Rússia Cravado no Coração da OTAN",
        categoria: "Geopolítica",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kaliningrad_Oblast_within_Europe.svg/1280px-Kaliningrad_Oblast_within_Europe.svg.png",
        link: "kaliningrado-enclave/",
        resumo: "Cercado por Polônia e Lituânia, o enclave russo de 15.000 km² abriga a Frota do Báltico e mísseis Iskander. Entenda o perigo do Corredor de Suwalki."
    },
    {
        titulo: "O Canal de Kra na Tailândia: O Megaprojeto de US$ 28 Bilhões que Pode Falir Cingapura",
        categoria: "Geopolítica",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Thai_Canal_map-de.jpg/1280px-Thai_Canal_map-de.jpg",
        link: "canal-de-kra/",
        resumo: "Cortar 100 km de terra na Tailândia encurtaria 1.200 km de mar, desviando navios do Estreito de Malaca e desafiando o império econômico de Cingapura."
    },
    {
        titulo: "Baarle: A Cidade Onde a Fronteira Corta a Sua Sala de Estar",
        categoria: "Fronteiras",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Baarle-Hertog_and_Baarle-Nassau_border.jpg/1280px-Baarle-Hertog_and_Baarle-Nassau_border.jpg",
        link: "baarle-fronteira/",
        resumo: "Com 22 enclaves belgas e 8 contra-enclaves holandeses, Baarle é o quebra-cabeça cartográfico mais surreal do planeta. Entenda a Regra da Porta da Frente."
    },
    {
        titulo: "O Megaporto de Chancay: Como a China Está Redesenhando o Comércio da América do Sul",
        categoria: "Geopolítica",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Juan_Brignardello_Vela_en_el_Puerto_de_Chancay_Al_Culminar_las_Obras-cut.jpg/1280px-Juan_Brignardello_Vela_en_el_Puerto_de_Chancay_Al_Culminar_las_Obras-cut.jpg",
        link: "porto-chancay/",
        resumo: "A 80 km de Lima, o megaporto de Chancay corta 15 dias de navio até a Ásia, conecta a Ferrovia Bioceânica ao Brasil e desafia a hegemonia no Pacífico."
    },
    {
        titulo: "O Gigante Encurralado: Por que a Etiópia Busca Desesperadamente o Mar?",
        categoria: "Geopolítica",
        data: "10 Out 2026",
        img: "/assets/img/blog/etiopia-sem-mar.jpg",
        link: "etiopia-sem-mar/",
        resumo: "Com mais de 125 milhões de habitantes, a Etiópia é o país sem litoral mais populoso do mundo. Entenda a crise que ameaça o Chifre da África."
    },
    {
        titulo: "O Círculo de Valeriepieris: Onde Vive Metade da Humanidade",
        categoria: "Demografia",
        data: "14 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Valeriepieris_Circle.jpg",
        link: "circulo-valeriepieris/",
        resumo: "Um círculo de 4.000 km no Sudeste Asiático concentra mais gente do que todo o resto do planeta. Entenda por quê."
    },
    {
        titulo: "Fusos Horários da Rússia: 11 Relógios em um País",
        categoria: "Cartografia",
        data: "18 Jan 2026",
        img: "https://mf.b37mrtl.ru/rbthmedia/images/2020.02/original/5e57b97285600a6c9b45082c.jpg",
        link: "fusos-russia/",
        resumo: "Entenda por que a Rússia tem 11 fusos horários e como isso impacta política, logística e o cotidiano."
    },
    {
        titulo: "A Fronteira Mais Curta do Mundo: 85 Metros",
        categoria: "Fronteiras",
        data: "05 Abr 2026",
        img: "https://mega.ibxk.com.br/2024/04/10/10181558422191.jpg",
        link: "fronteira-mais-curta/",
        resumo: "Ela é menor que um campo de futebol, separa dois continentes e foi criada por um 'acidente' meteorológico."
    },
    {
        titulo: "A Guerra do Uísque: Canadá vs Dinamarca",
        categoria: "Curiosidades",
        data: "30 Mar 2026",
        img: "https://mega.ibxk.com.br/2018/01/24/24174917163561.jpg",
        link: "guerra-uisque/",
        resumo: "Durante décadas, duas nações disputaram uma ilha deixando garrafas de uísque e schnapps para os 'invasores'."
    },
    {
        titulo: "Os Prisioneiros Geográficos: Países dentro de Países",
        categoria: "Fronteiras",
        data: "25 Mar 2026",
        img: "https://cdn.britannica.com/47/19747-050-02FEF79F/Vatican-City.jpg",
        link: "enclaves/",
        resumo: "Existem apenas três países no mundo inteiramente cercados por um único vizinho. Conheça Lesoto, San Marino e Vaticano."
    },
    {
        titulo: "Point Roberts: A Cidade Americana Presa no Canadá",
        categoria: "Fronteiras",
        data: "20 Mar 2026",
        img: "https://quirkytravelguy.com/wp-content/uploads/2024/08/point-roberts-map.jpg",
        link: "point-roberts/",
        resumo: "Para ir à escola ou ao mercado, os moradores precisam cruzar duas fronteiras internacionais. Conheça o erro do Paralelo 49."
    },
    {
        titulo: "A Ilha que Troca de Dono: Ilha dos Faisões",
        categoria: "Fronteiras",
        data: "10 Mar 2026",
        img: "https://conteudo.imguol.com.br/blogsbol/2/2022/12/ilha-2-300x225.png",
        link: "ilha-faisoes/",
        resumo: "Seis meses é da França, seis meses é da Espanha. Conheça o condomínio internacional mais antigo do mundo."
    },
    {
        titulo: "O Reino da Areia: A História de Bir Tawil",
        categoria: "Geopolítica",
        data: "18 Fev 2026",
        img: "https://i.guim.co.uk/img/media/5ebf8e25c9fd8c7cdbf46e9d9aa89b05617a1f7f/0_145_4072_2445/master/4072.jpg?width=700&quality=85&auto=format&fit=max&s=387582e0008572dc062ebcf9729511c5",
        link: "bir-tawil/", // Link para a pasta
        resumo: "Um lugar de 2.000 km² sem dono, sem leis e sem governo. Conheça a anomalia geográfica que desafia a lógica moderna."
    },
    {
        titulo: "Cidades-Esponja: O Fim das Enchentes?",
        categoria: "Urbanismo",
        data: "15 Jan 2026",
        img: "https://images.pexels.com/photos/13170267/pexels-photo-13170267.jpeg",
        link: "cidades-esponja/",
        resumo: "Por que o concreto precisa dar lugar à natureza. Entenda a tecnologia e a geopolítica por trás das Sponge Cities."
    },
    {
        titulo: "O Crepúsculo das Nações e as Hipercidades de 2100",
        categoria: "Futurologia",
        data: "05 Fev 2026",
        img: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
        link: "hipercidades-2100/",
        resumo: "Por que o futuro não será desenhado por fronteiras, mas por cidades com 80 milhões de habitantes. Bem-vindo à era das Megacidades Africanas."
    },
    
    {
        titulo: "Principado de Sealand: A Menor Nação",
        categoria: "Curiosidades",
        data: "15 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sealand_fortress.jpg",
        link: "sealand/",
        resumo: "Conheça a plataforma de petróleo que virou um país, emitiu passaportes e travou uma guerra contra helicópteros."
    },  
    {
        titulo: "Whittier: A Cidade de Um Prédio Só",
        categoria: "Urbanismo",
        data: "20 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Back_to_Whittier...Sun_is_out...Water_is_Rough_%282571032531%29.jpg",
        link: "whittier/",
        resumo: "Conheça a cidade no Alasca onde toda a população mora no mesmo edifício e o único acesso é um túnel que fecha à noite."
    },
    {
        titulo: "A Farsa de Mercator",
        categoria: "Cartografia",
        data: "20 Jan 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mercator_projection_SW.jpg/640px-Mercator_projection_SW.jpg",
        link: "farsa-mercator/",
        resumo: "Por que a Groenlândia parece maior que a África? Entenda a distorção matemática dos mapas."
    },
    {
    titulo: "Ponto Nemo: O lugar mais solitário da Terra",
    categoria: "Oceanografia",
    data: "22 Jan 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Oceanic_pole_of_inaccessibility.png",
    link: "ponto-nemo/",
    resumo: "No Ponto Nemo, os humanos mais próximos de você não estão na Terra, mas no espaço. Conheça o cemitério de naves."
    },
    {
        titulo: "Ilhas Diomedes: A Fronteira do Tempo",
        categoria: "Curiosidades",
        data: "28 Jan 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/BeringSt-close-VE.jpg",
        link: "ilhas-diomedes/", 
        resumo: "A apenas 3,8 km de distância, estas ilhas separam os EUA da Rússia e o Hoje do Amanhã. Uma viagem onde é possível ver o futuro a olho nu."
    },
    {
        titulo: "Arquivo Confidencial: Área 51",
        categoria: "Conspiração",
        data: "01 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Area_51_Main_Gate_%28cropped%29.jpg",
        link: "area-51/",
        resumo: "Relatório desclassificado sobre a base militar mais secreta do mundo. [DADOS EXPURGADOS]"
    },
    
  
    // COPIE E COLE ESTE BLOCO PARA ADICIONAR NOVO POST
];
