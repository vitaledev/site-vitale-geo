// BANCO DE DADOS DOS POSTS
// Adicione novos posts aqui no topo da lista. O site atualiza sozinho.

const blogPosts = [
    {
        titulo: "A Fronteira Mais Curta do Mundo: 85 Metros",
        categoria: "Fronteiras",
        data: "05 Abr 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pe%C3%B1on_de_Velez_de_la_Gomera.jpg/800px-Pe%C3%B1on_de_Velez_de_la_Gomera.jpg",
        link: "blog/fronteira-mais-curta/",
        resumo: "Ela é menor que um campo de futebol, separa dois continentes e foi criada por um 'acidente' meteorológico."
    },
    {
        titulo: "A Guerra do Uísque: Canadá vs Dinamarca",
        categoria: "Curiosidades",
        data: "30 Mar 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Hans_Island.jpg",
        link: "blog/guerra-uisque/",
        resumo: "Durante décadas, duas nações disputaram uma ilha deixando garrafas de uísque e schnapps para os 'invasores'."
    },
    {
        titulo: "Os Prisioneiros Geográficos: Países dentro de Países",
        categoria: "Fronteiras",
        data: "25 Mar 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lesotho_location_map.svg/1200px-Lesotho_location_map.svg.png",
        link: "blog/enclaves/",
        resumo: "Existem apenas três países no mundo inteiramente cercados por um único vizinho. Conheça Lesoto, San Marino e Vaticano."
    },
    {
        titulo: "Point Roberts: A Cidade Americana Presa no Canadá",
        categoria: "Fronteiras",
        data: "20 Mar 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Point_Roberts_border_monument.jpg/800px-Point_Roberts_border_monument.jpg",
        link: "blog/point-roberts/",
        resumo: "Para ir à escola ou ao mercado, os moradores precisam cruzar duas fronteiras internacionais. Conheça o erro do Paralelo 49."
    },
    {
        titulo: "A Ilha que Troca de Dono: Ilha dos Faisões",
        categoria: "Fronteiras",
        data: "10 Mar 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Pheasant_Island_01.jpg",
        link: "blog/ilha-faisoes/",
        resumo: "Seis meses é da França, seis meses é da Espanha. Conheça o condomínio internacional mais antigo do mundo."
    },
    {
        titulo: "O Reino da Areia: A História de Bir Tawil",
        categoria: "Geopolítica",
        data: "18 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bir_Tawil_map.png/800px-Bir_Tawil_map.png",
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
