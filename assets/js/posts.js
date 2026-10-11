// BANCO DE DADOS DOS POSTS
// Adicione novos posts aqui no topo da lista. O site atualiza sozinho.

const blogPosts = [
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
        titulo: "Nusantara: Por que a Indonésia Está Abandonando Jacarta para Construir uma Capital na Selva?",
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
        link: "ilha-faisoes",
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
        img: "https://images.pexels.com/photos/13170267/pexels-photo-13170267.jpeg", // Imagem de uma cidade com chuva/água
        link: "cidades-esponja",
        resumo: "Por que o concreto precisa dar lugar à natureza. Entenda a tecnologia e a geopolítica por trás das Sponge Cities."
    },
    {
        titulo: "O Crepúsculo das Nações e as Hipercidades de 2100",
        categoria: "Futurologia",
        data: "05 Fev 2026",
        img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop", // Imagem placeholder de cidade futurista/densa
        link: "hipercidades-2100",
        resumo: "Por que o futuro não será desenhado por fronteiras, mas por cidades com 80 milhões de habitantes. Bem-vindo à era das Megacidades Africanas."
    },
    
    {
        titulo: "Principado de Sealand: A Menor Nação",
        categoria: "Curiosidades",
        data: "15 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sealand_fortress.jpg",
        link: "sealand",
        resumo: "Conheça a plataforma de petróleo que virou um país, emitiu passaportes e travou uma guerra contra helicópteros."
    },  
    {
        titulo: "Whittier: A Cidade de Um Prédio Só",
        categoria: "Urbanismo",
        data: "20 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Back_to_Whittier...Sun_is_out...Water_is_Rough_%282571032531%29.jpg",
        link: "whittier",
        resumo: "Conheça a cidade no Alasca onde toda a população mora no mesmo edifício e o único acesso é um túnel que fecha à noite."
    },
    {
        titulo: "A Farsa de Mercator",
        categoria: "Cartografia",
        data: "20 Jan 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mercator_projection_SW.jpg/640px-Mercator_projection_SW.jpg",
        link: "farsa-mercator",
        resumo: "Por que a Groenlândia parece maior que a África? Entenda a distorção matemática dos mapas."
    },
    {
    titulo: "Ponto Nemo: O lugar mais solitário da Terra",
    categoria: "Oceanografia",
    data: "22 Jan 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Oceanic_pole_of_inaccessibility.png",
    link: "ponto-nemo",
    resumo: "No Ponto Nemo, os humanos mais próximos de você não estão na Terra, mas no espaço. Conheça o cemitério de naves."
},
{
    titulo: "A Fronteira Mais Louca do Mundo",
    categoria: "Fronteiras",
    data: "25 Jan 2026",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/LocatieBaarle.jpg",
    link: "fronteira-mais-louca",
    resumo: "Em Baarle, você pode dormir na Bélgica e tomar café na Holanda sem sair de casa. Conheça a cidade com a fronteira mais complexa do planeta."
},
{
        titulo: "Ilhas Diomedes: A Fronteira do Tempo",
        categoria: "Curiosidades",
        data: "28 Jan 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/BeringSt-close-VE.jpg",
        link: "ilhas-diomedes", 
        resumo: "A apenas 3,8 km de distância, estas ilhas separam os EUA da Rússia e o Hoje do Amanhã. Uma viagem onde é possível ver o futuro a olho nu."
    },
    {
        titulo: "Arquivo Confidencial: Área 51",
        categoria: "Conspiração",
        data: "01 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Area_51_Main_Gate_%28cropped%29.jpg",
        link: "area-51",
        resumo: "Relatório desclassificado sobre a base militar mais secreta do mundo. [DADOS EXPURGADOS]"
    },
    
  
    // COPIE E COLE ESTE BLOCO PARA ADICIONAR NOVO POST
];
