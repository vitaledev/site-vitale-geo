// BANCO DE DADOS DOS POSTS
// Adicione novos posts aqui no topo da lista. O site atualiza sozinho.

const blogPosts = [
    {
        titulo: "Como Um Pequeno Principado em Moscou Expandiu-se por Onze Fusos Horários Até o Pacífico?",
        categoria: "História",
        data: "21 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-russia-principado-moscou-siberia-tratados-fronteiras.png",
        link: "historia-da-russia-principado-moscou-siberia-tratados-fronteiras/",
        resumo: "De um principado cercado por florestas no século XV aos 17,1 milhões de km² atuais: os tratados e marchas cossacas que levaram a Rússia até o Pacífico."
    },
    {
        titulo: "Por Que a Arábia Saudita Construiu Oleodutos Para Contornar Dois Estreitos Vitais do Planeta?",
        categoria: "Geopolítica",
        data: "21 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-arabia-saudita-estreito-ormuz-mar-vermelho-oleodutos.png",
        link: "geopolitica-da-arabia-saudita-estreito-ormuz-mar-vermelho-oleodutos/",
        resumo: "Presa entre o Estreito de Ormuz e o Bab el-Mandeb, a Arábia Saudita converteu a Petroline Leste-Oeste de 1.200 km em escudo estratégico até o Mar Vermelho."
    },
    {
        titulo: "Como Cobre Andino, Ouro e o Megaporto de Chancay Transformaram o Peru na Porta Asiática da América do Sul?",
        categoria: "Geoeconomia",
        data: "21 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-do-peru-cobre-porto-chancay-corredor-pacifico.jpg",
        link: "geoeconomia-do-peru-cobre-porto-chancay-corredor-pacifico/",
        resumo: "Com 85 milhões de toneladas em reservas de cobre e calado natural de 17,8 metros em Chancay, o Peru redesenha o eixo comercial entre os Andes e a Ásia."
    },
    {
        titulo: "Por Que Quatro Ilhas Vulcânicas no Pacífico Impedem Japão e Rússia de Assinar a Paz Desde 1945?",
        categoria: "Geopolítica",
        data: "21 Nov 2026 - 12:45",
        img: "/assets/img/blog/ilhas-curilas-disputa-japao-russia-mar-de-okhotsk-pacifico.png",
        link: "ilhas-curilas-disputa-japao-russia-mar-de-okhotsk-pacifico/",
        resumo: "Controlando o acesso militar ao Mar de Okhotsk, Etorofu, Kunashiri, Shikotan e Habomai bloqueiam há oito décadas o tratado de paz entre Tóquio e Moscou."
    },
    {
        titulo: "Por Que Navios Gigantes Precisam Contornar o Sri Lanka Por Causa de Um Banco de Areia Milenar?",
        categoria: "Geopolítica",
        data: "21 Nov 2026 - 14:30",
        img: "/assets/img/blog/estreito-de-palk-ponte-de-adao-india-sri-lanka-barreira-naval.jpg",
        link: "estreito-de-palk-ponte-de-adao-india-sri-lanka-barreira-naval/",
        resumo: "Com apenas 1 a 3 metros de profundidade sobre os recifes da Ponte de Adão, o Estreito de Palk obriga navios indianos a desviar até 400 milhas náuticas."
    },
    {
        titulo: "Como Um Advogado Que Nunca Visitou a Índia Desenhou em Cinco Semanas Uma Fronteira Nuclear de Três Mil Quilômetros?",
        categoria: "Fronteiras",
        data: "21 Nov 2026 - 16:15",
        img: "/assets/img/blog/linha-radcliffe-particao-india-paquistao-fronteira-wagah.png",
        link: "linha-radcliffe-particao-india-paquistao-fronteira-wagah/",
        resumo: "Sem jamais pisar no subcontinente indiano, Sir Cyril Radcliffe riscou em 1947 uma linha sobre mapas defasados que dividiu 88 milhões de pessoas e gerou três guerras."
    },
    {
        titulo: "Por Que a Terceira Maior Ilha do Mundo É Dividida Entre Três Países e Abriga Um Sultanato Fragmentado?",
        categoria: "Fronteiras",
        data: "21 Nov 2026 - 18:00",
        img: "/assets/img/blog/ilha-de-borneu-tres-paises-indonesia-malasia-brunei-fronteiras.png",
        link: "ilha-de-borneu-tres-paises-indonesia-malasia-brunei-fronteiras/",
        resumo: "Com 743 mil km², Bornéu é a única ilha da Terra dividida entre três Estados soberanos — Indonésia, Malásia e Brunei — após tratados coloniais de 1824 e 1891."
    },
    {
        titulo: "Por Que Cinco Fusos Geográficos na China Obedecem ao Mesmo Relógio de Pequim?",
        categoria: "Curiosidades",
        data: "21 Nov 2026 - 19:30",
        img: "/assets/img/blog/fuso-horario-unico-china-xinjiang-pequim-anomalia-cartografica.png",
        link: "fuso-horario-unico-china-xinjiang-pequim-anomalia-cartografica/",
        resumo: "De 1949 até hoje, toda a China usa apenas o horário UTC+8 de Pequim. Em Xinjiang, o sol nasce às 10h no inverno e atravessar ao Afeganistão salta 3h30."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Minério de Ferro do Mundo que Sustentam o Aço Global?",
        categoria: "Rankings",
        data: "21 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-ferro-do-mundo-siderurgia-usgs.jpg",
        link: "ranking-maiores-reservas-de-ferro-do-mundo-siderurgia-usgs/",
        resumo: "Dos 59 bilhões de toneladas da Austrália aos 34 bilhões do Brasil em Carajás e no Quadrilátero Ferrífero: os 10 maiores donos de minério de ferro segundo o USGS."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Água Doce Renovável do Planeta?",
        categoria: "Rankings",
        data: "21 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-reservas-de-agua-doce-do-mundo-fao-aquastat.png",
        link: "ranking-maiores-reservas-de-agua-doce-do-mundo-fao-aquastat/",
        resumo: "Com 5.661 km³/ano de água interna — ou 8.646 km³/ano com fluxos transfronteiriços — o Brasil lidera isolado o mapa hídrico mundial da FAO AQUASTAT."
    },

    {
        titulo: "Como Seis Tratados e Compras Bilionárias Transformaram Treze Colônias nos Estados Unidos Continentais?",
        categoria: "História",
        data: "18 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-dos-estados-unidos-compra-louisiana-alaska-fronteiras.png",
        link: "historia-dos-estados-unidos-compra-louisiana-alaska-fronteiras/",
        resumo: "Do Tratado de Paris de 1783 às compras da Louisiana (1803) e Alasca (1867): como seis tratados multiplicaram o território americano até 9,83 milhões de km²."
    },
    {
        titulo: "Por Que a Pequena Dinamarca Controla a Saída Naval Russa no Báltico e a Disputa Pela Groenlândia?",
        categoria: "Geopolítica",
        data: "18 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-dinamarca-groenlandia-estreitos-balticos-artico.jpg",
        link: "geopolitica-da-dinamarca-groenlandia-estreitos-balticos-artico/",
        resumo: "Com apenas 42.952 km² na Europa, a Dinamarca guarda os Estreitos Dinamarqueses que bloqueiam a Frota do Báltico e exerce soberania sobre a Groenlândia."
    },
    {
        titulo: "Como Um País Sem Petróleo Nem Minério Passou a Dominar os Semicondutores e Estaleiros do Mundo?",
        categoria: "Geoeconomia",
        data: "18 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-coreia-do-sul-semicondutores-estaleiros-rotas.jpg",
        link: "geoeconomia-da-coreia-do-sul-semicondutores-estaleiros-rotas/",
        resumo: "Sem petróleo nem minério, a Coreia do Sul importa mais de 94% da sua energia, mas domina mais de 70% das memórias DRAM e lidera a construção naval de GNL."
    },
    {
        titulo: "Por Que Duas Ilhas Desertas no Estreito de Tiran Decidem o Acesso Marítimo de Israel e da Jordânia?",
        categoria: "Geopolítica",
        data: "18 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-tiran-golfo-acaba-ilhas-egito-arabia-saudita.jpg",
        link: "estreito-de-tiran-golfo-acaba-ilhas-egito-arabia-saudita/",
        resumo: "Com canais navegáveis de 1,3 km entre recifes de coral, o Estreito de Tiran decide o acesso de Israel e Jordânia ao Mar Vermelho e abriga tropas da MFO."
    },
    {
        titulo: "Por Que a Maior Hidrelétrica da África no Rio Nilo Azul Colocou Etiópia, Sudão e Egito em Atrito?",
        categoria: "Geopolítica",
        data: "18 Nov 2026 - 14:30",
        img: "/assets/img/blog/barragem-da-renascenca-gerd-rio-nilo-etiopia-egito-sudao.jpg",
        link: "barragem-da-renascenca-gerd-rio-nilo-etiopia-egito-sudao/",
        resumo: "Inaugurada em 2025 com 5.150 MW e reservatório de 74 bilhões de m³, a Barragem da Renascença no Nilo Azul redefiniu o equilíbrio entre Etiópia, Sudão e Egito."
    },
    {
        titulo: "Como Duas Linhas Traçadas Pelos Britânicos Criaram o Disputado Triângulo de Halaib no Mar Vermelho?",
        categoria: "Fronteiras",
        data: "18 Nov 2026 - 16:15",
        img: "/assets/img/blog/triangulo-de-halaib-fronteira-egito-sudao-mar-vermelho.png",
        link: "triangulo-de-halaib-fronteira-egito-sudao-mar-vermelho/",
        resumo: "Egito e Sudão disputam desde 1958 os 20.580 km² do Triângulo de Halaib no Mar Vermelho, nascidos do choque entre o limite político de 1899 e o mapa de 1902."
    },
    {
        titulo: "Como a Fronteira Pavimentada Mais Alta do Mundo a 4.693 Metros Liga a China ao Oceano Índico?",
        categoria: "Fronteiras",
        data: "18 Nov 2026 - 18:00",
        img: "/assets/img/blog/passo-khunjerab-fronteira-mais-alta-china-paquistao-cpec.jpg",
        link: "passo-khunjerab-fronteira-mais-alta-china-paquistao-cpec/",
        resumo: "Erguida a 4.693 metros no Caracórum após o acordo de 1963, a fronteira do Passo de Khunjerab liga o oeste da China ao Porto de Gwadar no Oceano Índico."
    },
    {
        titulo: "Por Que Dois Vizinhos Separados Por Setenta Quilômetros no Pacífico Vivem em Dias Diferentes?",
        categoria: "Curiosidades",
        data: "18 Nov 2026 - 19:30",
        img: "/assets/img/blog/linha-internacional-de-data-samoa-ilhas-fenix-salto-tempo.png",
        link: "linha-internacional-de-data-samoa-ilhas-fenix-salto-tempo/",
        resumo: "Separadas por 70 km no Pacífico, Samoa e Samoa Americana têm 24 horas de diferença desde que Apia pulou 30 de dezembro de 2011 para negociar com a Austrália."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Urânio do Mundo na Corrida Nuclear Global?",
        categoria: "Rankings",
        data: "18 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-uranio-do-mundo-energia-nuclear.png",
        link: "ranking-maiores-reservas-de-uranio-do-mundo-energia-nuclear/",
        resumo: "Da liderança geológica da Austrália ao domínio produtivo do Cazaquistão e ao 9º lugar do Brasil: o ranking das dez maiores reservas de urânio segundo o Red Book."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Cobre do Mundo Onde Nasce a Eletrificação?",
        categoria: "Rankings",
        data: "18 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-reservas-de-cobre-do-mundo-minerais-criticos.jpg",
        link: "ranking-maiores-reservas-de-cobre-do-mundo-minerais-criticos/",
        resumo: "Dos 180 milhões de toneladas do Chile à ascensão da RD Congo e à força de Austrália e Peru: as dez maiores reservas de cobre do mundo segundo o USGS."
    },

    {
        titulo: "Como o Tratado de Madri e o Barão do Rio Branco Dobraram o Tamanho do Brasil?",
        categoria: "História",
        data: "17 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-do-brasil-tratado-de-madri-petropolis-fronteiras.jpg",
        link: "historia-do-brasil-tratado-de-madri-petropolis-fronteiras/",
        resumo: "Da linha imaginária de Tordesilhas em 1494 aos 8.515.770 quilômetros quadrados atuais: como o princípio do uti possidetis no Tratado de Madri e a diplomacia do Barão do Rio Branco no Tratado de Petrópolis consolidaram as fronteiras brasileiras com dez países."
    },
    {
        titulo: "Por Que a Noruega Virou a Sentinela da OTAN no Ártico e o Principal Fornecedor de Gás da Europa?",
        categoria: "Geopolítica",
        data: "17 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-noruega-estreito-do-urso-otan-artico-gas.jpg",
        link: "geopolitica-da-noruega-estreito-do-urso-otan-artico-gas/",
        resumo: "Com 198 quilômetros de fronteira terrestre ao lado da Frota do Norte nuclear russa, o controle sobre o Estreito do Urso e 114,9 bilhões de metros cúbicos anuais de gás natural exportados por gasodutos submarinos, Oslo tornou-se peça central da segurança energética e militar europeia."
    },
    {
        titulo: "Como os Emirados Árabes Transformaram Petróleo, Fundos Soberanos e o Porto de Fujairah em Poder Global?",
        categoria: "Geoeconomia",
        data: "17 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-dos-emirados-arabes-fundos-soberanos-oleoduto-fujairah.jpg",
        link: "geoeconomia-dos-emirados-arabes-fundos-soberanos-oleoduto-fujairah/",
        resumo: "Com 113 bilhões de barris em reservas provadas, fundos soberanos superiores a 1,7 trilhão de dólares e o oleoduto Habshan–Fujairah que contorna o Estreito de Ormuz pelo Golfo de Omã, os Emirados Árabes Unidos blindaram sua geoeconomia no centro das rotas entre Ásia e Europa."
    },
    {
        titulo: "Por Que o Estreito de Luzón Entre Taiwan e as Filipinas Concentra Cabos Submarinos e Submarinos Nucleares?",
        categoria: "Geopolítica",
        data: "17 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-luzon-taiwan-filipinas-cabos-submarinos-pacifico.jpg",
        link: "estreito-de-luzon-taiwan-filipinas-cabos-submarinos-pacifico/",
        resumo: "Separando o extremo sul de Taiwan da ilha filipina de Luzón por cerca de 250 quilômetros recortados pelos canais de Bashi e Balintang, esse gargalo oceânico guarda dezenas de cabos de fibra óptica da internet asiática e é a única porta em águas profundas para os submarinos chineses saírem ao Pacífico."
    },
    {
        titulo: "Como o Corredor Transcaspiano Virou a Rota Terrestre Entre China e Europa Que Contorna a Rússia?",
        categoria: "Geopolítica",
        data: "17 Nov 2026 - 14:30",
        img: "/assets/img/blog/corredor-transcaspiano-rota-do-meio-china-europa-caucaso.png",
        link: "corredor-transcaspiano-rota-do-meio-china-europa-caucaso/",
        resumo: "Cruzando a fronteira sino-cazaque de Khorgos, o Mar Cáspio de balsa entre Aktau e Baku e as ferrovias do Cáucaso até a Turquia, a Rota do Meio reduziu o trânsito Eurásia–Europa para treze a vinte dias e cresceu mais de vinte por cento em 2026 ao evitar território russo e o Mar Vermelho."
    },
    {
        titulo: "Por Que a Entrega do Arquipélago de Chagos e da Base de Diego Garcia Travou Entre Londres, Maurício e Washington?",
        categoria: "Fronteiras",
        data: "17 Nov 2026 - 16:15",
        img: "/assets/img/blog/arquipelago-chagos-diego-garcia-reino-unido-mauricio-eua.jpg",
        link: "arquipelago-chagos-diego-garcia-reino-unido-mauricio-eua/",
        resumo: "Desmembrado das Ilhas Maurício em 1965 para abrigar a maior base militar anglo-americana no Oceano Índico, o Arquipélago de Chagos teve sua transferência negociada em 2025 com arrendamento de 99 anos para Diego Garcia, mas o tratado travou em 2026 entre o Parlamento britânico e o Pentágono."
    },
    {
        titulo: "Como o Acordo de Hadda Criou o Zigue-Zague Desértico Apelidado de Soluço de Churchill Entre Jordânia e Arábia Saudita?",
        categoria: "Fronteiras",
        data: "17 Nov 2026 - 18:00",
        img: "/assets/img/blog/soluco-de-churchill-fronteira-jordania-arabia-saudita-acordo-hadda.png",
        link: "soluco-de-churchill-fronteira-jordania-arabia-saudita-acordo-hadda/",
        resumo: "No meio do Deserto da Síria, uma cunha triangular de quase cem quilômetros corta o mapa da Jordânia como se uma régua tivesse escorregado. Conhecida pelo apelido falso de Soluço de Churchill, a anomalia nasceu do Acordo de Hadda de 1925 pela disputa estratégica do oásis de Kaf e do vale de Wadi Sirhan."
    },
    {
        titulo: "Por Que Estados Unidos e México Cimentaram o Rio Grande Para Encerrar Cem Anos de Disputa Pelo Chamizal?",
        categoria: "Fronteiras",
        data: "17 Nov 2026 - 19:30",
        img: "/assets/img/blog/disputa-do-chamizal-rio-grande-fronteira-eua-mexico-concreto.png",
        link: "disputa-do-chamizal-rio-grande-fronteira-eua-mexico-concreto/",
        resumo: "Quando enchentes do Rio Grande deslocaram o leito para o sul em 1864, centenas de acres mexicanos foram parar no Texas. Após cem anos de atrito e a rejeição de uma arbitragem em 1911, os dois países assinaram a Convenção do Chamizal de 1963 e concretaram sete quilômetros de canal artificial para travar a fronteira."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Lítio do Mundo Onde Nasce a Corrida Pelas Baterias?",
        categoria: "Rankings",
        data: "17 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-litio-do-mundo-baterias.jpg",
        link: "ranking-maiores-reservas-de-litio-do-mundo-baterias/",
        resumo: "Dos 9,2 milhões de toneladas do Chile nas salmouras do Atacama aos 8,4 milhões da Austrália e à ascensão estratégica de China, Argentina, Estados Unidos, Canadá e Brasil: o ranking oficial baseado nos dados do Serviço Geológico dos EUA (USGS) mostra quem controla o metal das baterias."
    },
    {
        titulo: "Quais São os Dez Menores Países do Mundo Onde Estados Soberanos Cabem Dentro de Um Bairro Urbano?",
        categoria: "Rankings",
        data: "17 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-menores-paises-do-mundo-microestados-area.jpg",
        link: "ranking-menores-paises-do-mundo-microestados-area/",
        resumo: "Dos 0,44 quilômetros quadrados do Vaticano — que cabe 3,6 vezes dentro do Parque Ibirapuera — aos 2,02 km² de Mônaco e aos atóis ameaçados pelo mar em Tuvalu e nas Maldivas: o ranking exato dos dez menores países independentes da Terra com dados oficiais da ONU."
    },
    {
        titulo: "Como Três Séculos da Dinastia Qing e os Tratados Desiguais Desenharam as Fronteiras da China Moderna?",
        categoria: "História",
        data: "16 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-china-dinastia-qing-tratados-desiguais-fronteiras.jpg",
        link: "historia-da-china-dinastia-qing-tratados-desiguais-fronteiras/",
        resumo: "Nove milhões e seiscentos mil quilômetros quadrados, as campanhas militares dos imperadores Kangxi e Qianlong, os Tratados de Nerchinsk, Aigun e Pequim e a herança cartográfica que fixou as fronteiras de Pequim com catorze nações vizinhas."
    },
    {
        titulo: "Por Que a França Possui a Segunda Maior Zona Econômica Exclusiva do Mundo Espalhada por Três Oceanos?",
        categoria: "Geopolítica",
        data: "16 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-franca-zona-economica-exclusiva-oceanos-dissuasao.jpg",
        link: "geopolitica-da-franca-zona-economica-exclusiva-oceanos-dissuasao/",
        resumo: "Dez milhões e duzentos mil quilômetros quadrados de leito marinho, territórios ultramarinos da Polinésia Francesa às Ilhas Kerguelen e a Força de Dissuasão Nuclear: o império oceânico silencioso de Paris."
    },
    {
        titulo: "Como o Monopólio Global do Níquel e o Banning de Minério Bruto Transformaram a Indonésia na Capital dos Carros Elétricos?",
        categoria: "Geoeconomia",
        data: "16 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-indonesia-niquel-baterias-minerais-estrategicos.jpg",
        link: "geoeconomia-da-indonesia-niquel-baterias-minerais-estrategicos/",
        resumo: "Vinte e um milhões de toneladas em reservas geológicas, o embargo de exportações in natura em 2020 e a atração de mais de trinta bilhões de dólares em fundições industriais: a estratégia geoeconômica de Jacarta."
    },
    {
        titulo: "Como a Convenção de Montreux de 1936 Dá à Turquia a Chave Militar dos Estreitos do Bósforo e Dardanelos?",
        categoria: "Geopolítica",
        data: "16 Nov 2026 - 12:45",
        img: "/assets/img/blog/convencao-de-montreux-estreitos-turcos-bosforo-dardanelos.jpg",
        link: "convencao-de-montreux-estreitos-turcos-bosforo-dardanelos/",
        resumo: "Apenas oitocentos metros na largura mínima do Bósforo, quarenta mil navios por ano ligando o Mar Negro ao Mediterrâneo e o poder discricionário de Ancara de fechar a passagem a navios de guerra em tempos de conflito."
    },
    {
        titulo: "Por Que a Finlândia Fechou os Mais de Mil e Trezentos Quilômetros da Maior Fronteira da OTAN com a Rússia?",
        categoria: "Fronteiras",
        data: "16 Nov 2026 - 14:30",
        img: "/assets/img/blog/fronteira-finlandia-russia-carelia-fechamento-cerca-otan.jpg",
        link: "fronteira-finlandia-russia-carelia-fechamento-cerca-otan/",
        resumo: "Mil trezentos e quarenta quilômetros de taiga boreal pantanosa, o trauma histórico da perda da Carélia e Petsamo na Guerra de Inverno e a construção de barreiras de segurança física após a adesão a Helsinque à OTAN."
    },
    {
        titulo: "Como Três Mil Quilômetros de Linha Reta e o Tratado de 1825 Desenharam a Fronteira Entre o Alasca e o Canadá?",
        categoria: "Fronteiras",
        data: "16 Nov 2026 - 16:15",
        img: "/assets/img/blog/fronteira-alasca-canada-meridiano-141-tratado-sao-petersburgo.jpg",
        link: "fronteira-alasca-canada-meridiano-141-tratado-sao-petersburgo/",
        resumo: "Dois mil quatrocentos e setenta e cinco quilômetros de divisa, a demarcação arbitrária do Meridiano 141° Oeste entre a Rússia czarista e o Império Britânico e a disputa do Panhandle na Corrida do Ouro de Klondike."
    },
    {
        titulo: "Por Que a Norueguesa Ilha Bouvet É o Ponto de Terra Mais Isolado e Inóspito do Planeta Terra?",
        categoria: "Curiosidades",
        data: "16 Nov 2026 - 18:00",
        img: "/assets/img/blog/ilha-bouvet-ponto-de-terra-mais-isolado-do-mundo-noruega.jpg",
        link: "ilha-bouvet-ponto-de-terra-mais-isolado-do-mundo-noruega/",
        resumo: "Dois mil e duzentos quilômetros de qualquer continente habitado, noventa e três por cento de superfície coberta por uma geleira eterna e o mistério de um bote salva-vidas abandonado na ilha mais inacessível do planeta."
    },
    {
        titulo: "Quais São as Dez Maiores Centrais Hidrelétricas do Mundo Onde Paredões de Concreto Represam Rios Titânicos?",
        categoria: "Rankings",
        data: "16 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-maiores-hidreletricas-do-mundo-geracao-energia.jpg",
        link: "ranking-maiores-hidreletricas-do-mundo-geracao-energia/",
        resumo: "Dos 22.500 megawatts da chinesa Três Gargantas aos gigantescos vertedouros de Itaipu Binacional e Belo Monte: o ranking definitivo das maiores megaestruturas hidrelétricas do planeta Terra."
    },
    {
        titulo: "Quais São os Dez Maiores Produtores de Petróleo do Mundo Onde Milhões de Barris Diários Sustentam o Transporte Global?",
        categoria: "Rankings",
        data: "16 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-produtores-de-petroleo-do-mundo-barris-dia.jpg",
        link: "ranking-maiores-produtores-de-petroleo-do-mundo-barris-dia/",
        resumo: "Dos mais de treze milhões de barris diários dos Estados Unidos aos poços do deserto saudita e às plataformas do Pré-Sal brasileiro: o ranking definitivo da extração diária de petróleo bruto no planeta."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Zonas Econômicas Exclusivas do Mundo Onde o Domínio Marítimo Supera a Terra Firme?",
        categoria: "Rankings",
        data: "16 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-zonas-economicas-exclusivas-do-mundo-zee.jpg",
        link: "ranking-maiores-zonas-economicas-exclusivas-do-mundo-zee/",
        resumo: "Dos onze milhões de quilômetros quadrados dos Estados Unidos e o império ultramarino da França às ZEEs colossais de Austrália, Rússia e a Amazônia Azul do Brasil: o ranking da soberania oceânica global."
    },
    {
        titulo: "Como Três Partilhas e a Conferência de Potsdam Moveram a Polônia Duzentos Quilômetros Para o Oeste no Mapa Europeu?",
        categoria: "História",
        data: "15 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-polonia-partilhas-potsdam-fronteiras-oder-neisse.jpg",
        link: "historia-da-polonia-partilhas-potsdam-fronteiras-oder-neisse/",
        resumo: "Dezesseis milhões de pessoas deslocadas, o desaparecimento do mapa em 1795 e a translação de duzentos quilômetros para o oeste em 1945: como as Linhas Curzon e Oder-Neisse desenharam a Polônia moderna."
    },
    {
        titulo: "Por Que o Cerco da Cadeia de Pérolas e as Montanhas do Himalaia Fazem da Índia a Chave da Segurança do Oceano Índico?",
        categoria: "Geopolítica",
        data: "15 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-india-oceano-indico-cadeia-perolas-himalaia.jpg",
        link: "geopolitica-da-india-oceano-indico-cadeia-perolas-himalaia/",
        resumo: "Sete mil e quinhentos quilômetros de litoral, 3.488 km de fronteira militarizada no Himalaia e o controle das rotas navais em Malaca: o xadrez estratégico de Nova Délhi contra a expansão chinesa."
    },
    {
        titulo: "Como as Jazidas de Cobalto e Coltan de Katanga no Congo Sustentam a Indústria Global de Baterias e Smartphones?",
        categoria: "Geoeconomia",
        data: "15 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-republica-democratica-do-congo-cobalto-coltan-katanga.jpg",
        link: "geoeconomia-da-republica-democratica-do-congo-cobalto-coltan-katanga/",
        resumo: "Mais de setenta por cento do cobalto mundial, sessenta por cento do coltan e vinte e quatro trilhões de dólares em riquezas minerais subterrâneas: a anatomia geoeconômica de Katanga e do leste congolês."
    },
    {
        titulo: "Como a Retificação do Rio Danúbio Criou Bolsões de Terra Nullius e a Disputa Entre Sérvia e Croácia?",
        categoria: "Fronteiras",
        data: "15 Nov 2026 - 12:45",
        img: "/assets/img/blog/fronteira-servia-croacia-rio-danubio-terra-nullius-liberland.jpg",
        link: "fronteira-servia-croacia-rio-danubio-terra-nullius-liberland/",
        resumo: "Obras de dragagem do século XIX endireitaram o Rio Danúbio e geraram um paradoxo cartográfico: bolsões de terra que nenhum país reivindica onde ativistas criaram a micronação de Liberland."
    },
    {
        titulo: "Por Que o Exclave de Oecusse Permanece Isolado a Setenta Quilômetros de Timor-Leste Dentro da Indonésia?",
        categoria: "Fronteiras",
        data: "15 Nov 2026 - 14:30",
        img: "/assets/img/blog/exclave-de-oecusse-timor-leste-indonesia-fronteira-lisboa.jpg",
        link: "exclave-de-oecusse-timor-leste-indonesia-fronteira-lisboa/",
        resumo: "Oitocentos e quinze quilômetros quadrados cercados pela Indonésia e pelo Mar de Savu a setenta quilômetros de Díli: a história da colônia lusófona onde nasceu a identidade de Timor-Leste."
    },
    {
        titulo: "Como o Paralelo Quarenta e Nove Criou a Maior Fronteira Desmilitarizada do Planeta e a Curiosidade do Northwest Angle?",
        categoria: "Curiosidades",
        data: "15 Nov 2026 - 16:15",
        img: "/assets/img/blog/paralelo-49-fronteira-estados-unidos-canada-northwest-angle.jpg",
        link: "paralelo-49-fronteira-estados-unidos-canada-northwest-angle/",
        resumo: "Oito mil oitocentos e noventa e um quilômetros de raia pacífica, o corte florestal de seis metros de largura e a anomalia geográfica do Northwest Angle isolado pelo Tratado de Paris de 1783."
    },
    {
        titulo: "Por Que Quatorze Quilômetros de Mar no Estreito de Gibraltar Permanecem no Centro de Disputas Entre Três Nações?",
        categoria: "Geopolítica",
        data: "15 Nov 2026 - 18:00",
        img: "/assets/img/blog/estreito-de-gibraltar-geopolitica-chokepoint-espanha-marrocos-britanicos.jpg",
        link: "estreito-de-gibraltar-geopolitica-chokepoint-espanha-marrocos-britanicos/",
        resumo: "Quatorze quilômetros de água entre Europa e África por onde transitam 100 mil navios por ano: a disputa soberana secular entre Espanha, Grã-Bretanha e Marrocos na entrada do Mediterrâneo."
    },
    {
        titulo: "Quais São os Dez Maiores Aeroportos do Mundo em Área Territorial Onde Cidades Aéreas Superam Países Inteiros?",
        categoria: "Rankings",
        data: "15 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-aeroportos-do-mundo-em-area-territorial.jpg",
        link: "ranking-maiores-aeroportos-do-mundo-em-area-territorial/",
        resumo: "Dos estarrecedores 776 km² do Aeroporto Rei Fahd na Arábia Saudita aos 135 km² de Denver e os megacomplexos de Dallas e Orlando: o ranking dos maiores aeroportos do mundo em área física."
    },
    {
        titulo: "Como Oito Séculos de Guerras e o Tratado dos Pirenéus Desenharam as Fronteiras da Espanha Moderna?",
        categoria: "História",
        data: "14 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-espanha-reconquista-utrecht-fronteiras-pireneus.jpg",
        link: "historia-da-espanha-reconquista-utrecht-fronteiras-pireneus/",
        resumo: "Da união dinástica de Castela e Aragão em 1469 à queda de Granada em 1492, do Tratado dos Pirenéus de 1659 às perdas de Gibraltar em Utrecht em 1713: como quinhentos mil quilômetros quadrados forjaram o mapa da Espanha."
    },
    {
        titulo: "Por Que o Domínio do Indo-Pacífico e a Aliança AUKUS Transformaram a Austrália na Fortaleza do Sul Global?",
        categoria: "Geopolítica",
        data: "14 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-australia-indo-pacifico-aukus-oceano-indico.jpg",
        link: "geopolitica-da-australia-indo-pacifico-aukus-oceano-indico/",
        resumo: "Sete vírgula seis milhões de quilômetros quadrados cercados por dois oceanos, o Estreito de Torres, a barreira do Mar de Coral e a frota de submarinos de propulsão nuclear AUKUS: o xadrez estratégico de Camberra."
    },
    {
        titulo: "Como o Gás da Sibéria e a Rota do Ártico Sustentam a Máquina Econômica e Mineral da Rússia?",
        categoria: "Geoeconomia",
        data: "14 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-russia-gas-siberia-petroleo-rota-artico.jpg",
        link: "geoeconomia-da-russia-gas-siberia-petroleo-rota-artico/",
        resumo: "Dezessete milhões de quilômetros quadrados, as jazidas monumentais de gás da Península de Yamal, o níquel de Norilsk e o degelo da Rota Marítima do Norte: os pilares de recursos do maior país do planeta."
    },
    {
        titulo: "Por Que o Japão Reduziu Seu Próprio Mar Territorial no Estreito de Tsugaru Para Permitir Submarinos Nucleares?",
        categoria: "Geopolítica",
        data: "14 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-tsugaru-japao-hokkaido-honshu-mar-territorial-submarinos.jpg",
        link: "estreito-de-tsugaru-japao-hokkaido-honshu-mar-territorial-submarinos/",
        resumo: "Vinte quilômetros de largura entre Honshu e Hokkaido, o colossal túnel submarino Seikan e a anomalia jurídica de 1977 que manteve águas internacionais no coração do arquipélago japonês."
    },
    {
        titulo: "Como o Sedimento de Um Rio Uniu Duas Ilhas e Criou a Única Fronteira Terrestre Entre a Argentina e o Uruguai?",
        categoria: "Fronteiras",
        data: "14 Nov 2026 - 14:30",
        img: "/assets/img/blog/ilha-martin-garcia-timoteo-dominguez-fronteira-argentina-uruguai.jpg",
        link: "ilha-martin-garcia-timoteo-dominguez-fronteira-argentina-uruguai/",
        resumo: "Oitenta milhões de toneladas de aluvião despejadas anualmente pelo Rio Paraná soldaram a ilha argentina Martín García ao banco uruguaio Timoteo Domínguez: a fronteira seca mais bizarra da América do Sul."
    },
    {
        titulo: "Como Três Países Dividiram a Terceira Maior Ilha do Mundo Entre Selvas e Monarquias Petrolíferas?",
        categoria: "Curiosidades",
        data: "14 Nov 2026 - 16:15",
        img: "/assets/img/blog/ilha-de-borneu-divisao-indonesia-malasia-brunei-nusantara.jpg",
        link: "ilha-de-borneu-divisao-indonesia-malasia-brunei-nusantara/",
        resumo: "Setecentos e quarenta e três mil quilômetros quadrados de floresta equatorial partilhados entre Indonésia, Malásia e Brunei: dos acordos coloniais de 1824 e 1891 à nova capital Nusantara em Kalimantan."
    },
    {
        titulo: "Por Que o Exclave de Musandam em Omã Guarda a Garganta Naval Mais Estratégica do Oriente Médio?",
        categoria: "Fronteiras",
        data: "14 Nov 2026 - 18:00",
        img: "/assets/img/blog/exclave-de-musandam-oma-estreito-de-ormuz-geopolitica-golfo.jpg",
        link: "exclave-de-musandam-oma-estreito-de-ormuz-geopolitica-golfo/",
        resumo: "Montanhas áridas de dois mil metros despencando em fiordes desérticos a cem quilômetros do restante de Omã: como o enclave de Musandam vigia a passagem de vinte milhões de barris de petróleo por dia em Ormuz."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Terras Raras do Mundo Onde Minerais Críticos Movem a Tecnologia Global?",
        categoria: "Rankings",
        data: "14 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-maiores-reservas-de-terras-raras-do-mundo.jpg",
        link: "ranking-maiores-reservas-de-terras-raras-do-mundo/",
        resumo: "Dos 44 milhões de toneladas da China e as imensas jazidas inexploradas do Vietnã e Brasil às minas de Mountain Pass nos EUA e Mount Weld na Austrália: o ranking definitivo dos 17 elementos químicos da transição energética."
    },
    {
        titulo: "Quais São os Dez Maiores Canais Artificiais do Mundo Onde Obras Gigantescas Cortam Continentes?",
        categoria: "Rankings",
        data: "14 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-canais-artificiais-do-mundo.jpg",
        link: "ranking-maiores-canais-artificiais-do-mundo/",
        resumo: "Dos quase mil e oitocentos quilômetros do Grande Canal da China aos canais marítimos de Karakum, Suez, Kiel e Panamá: o ranking das maiores hidrovias artificiais escavadas pela engenharia humana."
    },
    {
        titulo: "Quais São os Dez Países com o Maior Número de Vizinhos de Fronteira Terrestre no Mundo?",
        categoria: "Rankings",
        data: "14 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-paises-com-mais-vizinhos-de-fronteira-no-mundo.jpg",
        link: "ranking-paises-com-mais-vizinhos-de-fronteira-no-mundo/",
        resumo: "China e Rússia dividem o topo histórico com catorze nações vizinhas cada uma, seguidas pelo Brasil com dez e potências europeias e africanas: o ranking dos maiores cruzamentos fronteiriços do planeta."
    },
    {
        titulo: "Como o Tratado de Lausanne e a Queda do Império Otomano Desenharam as Fronteiras da Turquia Moderna Entre Dois Continentes?",
        categoria: "História",
        data: "13 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-turquia-imperio-otomano-lausanne-estreitos-bosforo.jpg",
        link: "historia-da-turquia-imperio-otomano-lausanne-estreitos-bosforo/",
        resumo: "Do desmembramento do Império Otomano pelo Tratado de Sèvres à Guerra de Independência liderada por Atatürk e ao Tratado de Lausanne de 1923: como 783 mil km² e o controle dos estreitos forjaram a Turquia moderna."
    },
    {
        titulo: "Por Que o Relevo Acidentado e o Estreito de Cento e Sessenta Quilômetros Fazem de Taiwan a Ilha Mais Cobiçada e Perigosa do Planeta?",
        categoria: "Geopolítica",
        data: "13 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-de-taiwan-estreito-primeira-cadeia-ilhas-chips.jpg",
        link: "geopolitica-de-taiwan-estreito-primeira-cadeia-ilhas-chips/",
        resumo: "Cento e sessenta quilômetros de mar separando o continente, montanhas de quatro mil metros, o escudo de semicondutores da TSMC e a Primeira Cadeia de Ilhas: a complexa fortaleza geopolítica de Taiwan."
    },
    {
        titulo: "Como as Maiores Minas de Cobre do Planeta e o Deserto de Atacama Transformaram o Chile na Potência Mineral da Eletrificação Global?",
        categoria: "Geoeconomia",
        data: "13 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-do-chile-cobre-atacama-triangulo-litio-riquezas.jpg",
        link: "geoeconomia-do-chile-cobre-atacama-triangulo-litio-riquezas/",
        resumo: "Mais de quatro mil quilômetros de extensão litorânea, as minas monumentais de Chuquicamata e Escondida e as salmouras de lítio do Atacama: como o Chile controla recursos cruciais para a transição energética do planeta."
    },
    {
        titulo: "Por Que Vinte e Nove Quilômetros de Mar no Estreito de Bab el-Mandeb Podem Paralisar Doze Por Cento do Comércio Mundial?",
        categoria: "Geopolítica",
        data: "13 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-bab-el-mandeb-mar-vermelho-chokepoint-iemen-djibuti.jpg",
        link: "estreito-de-bab-el-mandeb-mar-vermelho-chokepoint-iemen-djibuti/",
        resumo: "A garganta naval entre o Iêmen e o Djibuti onde cargueiros cruzam o Mar Vermelho rumo a Suez: as rotas de contêineres, as bases militares internacionais e o impacto econômico dos desvios pelo Cabo da Boa Esperança."
    },
    {
        titulo: "Como Vinte e Dois Quilômetros de Terra no Corredor de Siliguri Sustentam a Unidade Territorial de Quarenta e Cinco Milhões de Pessoas?",
        categoria: "Fronteiras",
        data: "13 Nov 2026 - 14:30",
        img: "/assets/img/blog/corredor-de-siliguri-pescoco-de-galinha-fronteira-india-himalaia.jpg",
        link: "corredor-de-siliguri-pescoco-de-galinha-fronteira-india-himalaia/",
        resumo: "Espremido entre Nepal, Butão e Bangladesh, o Pescoço de Galinha liga a Índia continental aos seus oito estados do Nordeste sob a sombra do Vale de Chumbi: a anomalia geográfica mais vulnerável da Ásia Meridional."
    },
    {
        titulo: "Por Que a Grécia Levou Mais de Dois Mil Anos Para Rasgar Vinte e Quatro Metros de Rocha e Transformar o Peloponeso em Uma Ilha?",
        categoria: "Curiosidades",
        data: "13 Nov 2026 - 16:15",
        img: "/assets/img/blog/canal-de-corinto-grecia-peloponeso-istmo-engenharia.jpg",
        link: "canal-de-corinto-grecia-peloponeso-istmo-engenharia/",
        resumo: "Seis quilômetros de canal escavados em falésias de calcário de quase oitenta metros de altura: do diolkos da Grécia Antiga e das escavações do imperador Nero à conclusão em 1893 que redesenhou o Golfo de Corinto."
    },
    {
        titulo: "Por Que Cidadãos Russos Podem Viver e Minerar Sem Visto Norueguês no Arquipélago Desmilitarizado de Svalbard no Ártico?",
        categoria: "Fronteiras",
        data: "13 Nov 2026 - 18:00",
        img: "/assets/img/blog/tratado-de-svalbard-barentsburg-enclave-russo-noruega-artico.jpg",
        link: "tratado-de-svalbard-barentsburg-enclave-russo-noruega-artico/",
        resumo: "O Tratado de Paris de 1920 garantiu soberania norueguesa a Svalbard, mas concedeu direito de exploração econômica igualitária a dezenas de nações: a história do assentamento minerador russo de Barentsburg no Círculo Polar."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Frotas Mercantes do Mundo Onde Milhares de Navios Movem Noventa Por Cento do Comércio Global?",
        categoria: "Rankings",
        data: "13 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-frotas-mercantes-do-mundo.jpg",
        link: "ranking-maiores-frotas-mercantes-do-mundo/",
        resumo: "Das bandeiras de conveniência do Panamá, Libéria e Ilhas Marshall às frotas proprietárias de Grécia, China e Japão: o ranking das maiores potências navais comerciais que sustentam as cadeias de suprimentos globais."
    },
    {
        titulo: "Quais São as Dez Maiores Bacias Hidrográficas do Mundo Onde Rios Colossais Drenam Milhões de Quilômetros Quadrados de Continentes?",
        categoria: "Rankings",
        data: "13 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-bacias-hidrograficas-do-mundo.jpg",
        link: "ranking-maiores-bacias-hidrograficas-do-mundo/",
        resumo: "Dos 7 milhões de km² da Bacia Amazônica e os 4 milhões de km² do Rio Congo aos sistemas fluviais gigantescos do Mississippi, Rio da Prata, Ob e Yangtzé: o ranking das maiores bacias de drenagem da Terra."
    },
    {
        titulo: "Como o Relevo Alpino, o Juramento de Rütli e o Congresso de Viena Desenharam as Fronteiras Intactas da Suíça Moderna?",
        categoria: "História",
        data: "12 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-suica-neutralidade-fronteiras-alpes-congresso-viena.jpg",
        link: "historia-da-suica-neutralidade-fronteiras-alpes-congresso-viena/",
        resumo: "Do Juramento de Rütli de 1291 e da Paz de Vestfália ao Congresso de Viena de 1815 e à doutrina do Reduto Nacional: como 41 mil km² de montanhas mantiveram suas fronteiras intocadas cercadas por guerras europeias."
    },
    {
        titulo: "Por Que o Domínio de Três Estreitos Estratégicos e a Mudança da Capital Fazem da Indonésia o Pivô Naval do Indo-Pacífico?",
        categoria: "Geopolítica",
        data: "12 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-indonesia-estreitos-malaca-sunda-indo-pacifico.jpg",
        link: "geopolitica-da-indonesia-estreitos-malaca-sunda-indo-pacifico/",
        resumo: "Com mais de dezessete mil ilhas controlando os estreitos vitais de Malaca, Sunda e Lombok e transferindo sua capital de Jacarta para Nusantara em Bornéu: como Jacarta equilibra a pressão naval de China e EUA."
    },
    {
        titulo: "Como o Nearshoring, a Fronteira Norte e o Corredor Interoceânico Transformaram o México no Gigante Industrial da América?",
        categoria: "Geoeconomia",
        data: "12 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-do-mexico-nearshoring-fronteira-corredor-interoceanico.jpg",
        link: "geoeconomia-do-mexico-nearshoring-fronteira-corredor-interoceanico/",
        resumo: "Com 3.145 km de fronteira com os EUA, o trem interoceânico do Istmo de Tehuantepec rivalizando com o Panamá e investimentos maciços em semicondutores e veículos: a reconfiguração industrial mexicana."
    },
    {
        titulo: "Por Que a Itália Levou Mais de Um Século Para Tentar Construir a Maior Ponte Pênsil do Mundo no Estreito de Messina?",
        categoria: "Geopolítica",
        data: "12 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-messina-italia-sicilia-maior-ponte-pensil.jpg",
        link: "estreito-de-messina-italia-sicilia-maior-ponte-pensil/",
        resumo: "Três quilômetros de águas turbulentas entre a Calábria e a Sicília com correntes de nove nós e falhas sísmicas ativas: os desafios da megaponte pênsil de 3.300 metros de vão livre para unir a ilha ao continente."
    },
    {
        titulo: "Como a Fronteira Fluvial do Rio Amur Separa Duas Cidades Gêmeas da Rússia e da China a Menos de Um Quilômetro?",
        categoria: "Fronteiras",
        data: "12 Nov 2026 - 14:30",
        img: "/assets/img/blog/rio-amur-fronteira-russia-china-blagoveshchensk-heihe.jpg",
        link: "rio-amur-fronteira-russia-china-blagoveshchensk-heihe/",
        resumo: "Blagoveshchensk na Sibéria russa e Heihe na Manchúria chinesa encaram-se através de oitocentos metros de água: como o Tratado de Aigun de 1858 e uma nova ponte internacional desenham a fronteira no Extremo Oriente."
    },
    {
        titulo: "Por Que o Atol de Scarborough no Mar da China Meridional Tornou-se o Ponto de Atrito Mais Perigoso do Sudeste Asiático?",
        categoria: "Geopolítica",
        data: "12 Nov 2026 - 16:15",
        img: "/assets/img/blog/atol-de-scarborough-mar-da-china-meridional-filipinas.jpg",
        link: "atol-de-scarborough-mar-da-china-meridional-filipinas/",
        resumo: "Um anel de recifes a apenas duzentos e vinte quilômetros da ilha filipina de Luzon sob bloqueio contínuo da guarda costeira chinesa: onde manobras navais e disputas de pesca colocam o Tratado EUA-Filipinas à prova."
    },
    {
        titulo: "Por Que a França e a Itália Disputam o Cume Exato do Mont Blanc a Mais de Quatro Mil e Oitocentos Metros de Altitude?",
        categoria: "Fronteiras",
        data: "12 Nov 2026 - 18:00",
        img: "/assets/img/blog/disputa-fronteira-mont-blanc-franca-italia-cume-alpes.jpg",
        link: "disputa-fronteira-mont-blanc-franca-italia-cume-alpes/",
        resumo: "O Tratado de Turim de 1860 e mapas militares divergentes deixaram um impasse secular no teto da Europa Ocidental: afinal, o cume nevado de 4.808 metros pertence exclusivamente à França ou é compartilhado com a Itália?"
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Linhas de Costa do Planeta Onde Mares Gigantescos Contornam Continentes e Ilhas?",
        categoria: "Rankings",
        data: "12 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-maiores-linhas-de-costa-do-mundo.jpg",
        link: "ranking-maiores-linhas-de-costa-do-mundo/",
        resumo: "Do litoral colossal de 243 mil km do Canadá e os fiordes da Noruega aos arquipélagos da Indonésia, Filipinas e Japão: o ranking das dez nações com a maior extensão litorânea segundo dados da CIA e da ONU."
    },
    {
        titulo: "Quais São as Dez Maiores Malhas Ferroviárias do Mundo Onde Centenas de Milhares de Quilômetros de Trilhos Movem Continentes?",
        categoria: "Rankings",
        data: "12 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-malhas-ferroviarias-do-mundo.jpg",
        link: "ranking-maiores-malhas-ferroviarias-do-mundo/",
        resumo: "Dos 250 mil km de ferrovias dos EUA e do salto pioneiro em alta velocidade da China aos trilhos transcontinentais da Rússia, Índia e Canadá: o ranking das dez maiores redes ferroviárias que sustentam o comércio planetário."
    },
    {
        titulo: "Quais São os Dez Maiores Produtores de Energia Renovável do Mundo Onde Ventos, Rios e Sol Redesenham a Matriz Global?",
        categoria: "Rankings",
        data: "12 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-produtores-de-energia-renovavel-do-mundo.jpg",
        link: "ranking-maiores-produtores-de-energia-renovavel-do-mundo/",
        resumo: "Da capacidade instalada de mais de 1.400 GW da China e da matriz hidrelétrica e eólica de ponta do Brasil aos parques solares e eólicos de EUA, Alemanha e Índia: o ranking dos dez líderes globais em energia limpa."
    },
    {
        titulo: "Como a Restauração Meiji, a Expansão Imperial e o Tratado de Paz de 1951 Desenharam as Fronteiras do Japão Moderno?",
        categoria: "História",
        data: "11 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-do-japao-meiji-expansao-fronteiras-tratado-sao-francisco.jpg",
        link: "historia-do-japao-meiji-expansao-fronteiras-tratado-sao-francisco/",
        resumo: "Do isolamento Sakoku de 250 anos à anexação de Hokkaido e Okinawa, à expansão colonial na Ásia e ao Tratado de São Francisco de 1951: a forja territorial de 377 mil km² do arquipélago japonês."
    },
    {
        titulo: "Por Que a Geografia Plana da Polônia e o Corredor de Suwalki Fazem de Varsóvia a Maior Fortaleza Militar da Europa?",
        categoria: "Geopolítica",
        data: "11 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-polonia-corredor-de-suwalki-planicie-otan.jpg",
        link: "geopolitica-da-polonia-corredor-de-suwalki-planicie-otan/",
        resumo: "Sem montanhas protetoras na Grande Planície Europeia e vigiando o estreito corredor de 65 km entre Kaliningrado e Belarus: como a Polônia investe quase 5% do PIB na maior força blindada da OTAN."
    },
    {
        titulo: "Como as Minas de Ferro de Pilbara e o Lítio Fazem da Austrália o Motor Mineral da Economia Global?",
        categoria: "Geoeconomia",
        data: "11 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-australia-minerio-de-ferro-pilbara-litio-riquezas.jpg",
        link: "geoeconomia-da-australia-minerio-de-ferro-pilbara-litio-riquezas/",
        resumo: "A província geológica de Pilbara exporta quase 900 milhões de toneladas de minério por ano e a mina de Greenbushes domina o lítio: como um continente-ilha sustenta a indústria mundial e a transição verde."
    },
    {
        titulo: "Como a Confluência dos Rios Paraná e Iguaçu Criou a Tríplice Fronteira Mais Movimentada da América do Sul?",
        categoria: "Fronteiras",
        data: "11 Nov 2026 - 12:45",
        img: "/assets/img/blog/triplice-fronteira-brasil-argentina-paraguai-iguacu-itaipu.jpg",
        link: "triplice-fronteira-brasil-argentina-paraguai-iguacu-itaipu/",
        resumo: "O encontro hidrográfico de Foz do Iguaçu, Ciudad del Este e Puerto Iguazú ao lado dos 14 mil megawatts de Itaipu: a dinâmica de comércio, energia e segurança no marco geodésico de três nações."
    },
    {
        titulo: "Por Que o Canal de Kiel Movimenta Mais Navios Que Suez e Panamá Sem Chamar a Atenção do Mundo?",
        categoria: "Geopolítica",
        data: "11 Nov 2026 - 14:30",
        img: "/assets/img/blog/canal-de-kiel-alemanha-chokepoint-mar-do-norte-baltico.jpg",
        link: "canal-de-kiel-alemanha-chokepoint-mar-do-norte-baltico/",
        resumo: "Cortando a península da Jutlândia por 98 quilômetros, a hidrovia alemã economiza 460 km de circunavegação da Dinamarca e opera mais de trinta mil travessias anuais entre o Mar do Norte e o Báltico."
    },
    {
        titulo: "Por Que a Ilha dos Faisões Muda de País a Cada Seis Meses Entre a França e a Espanha?",
        categoria: "Fronteiras",
        data: "11 Nov 2026 - 16:15",
        img: "/assets/img/blog/ilha-dos-faisoes-condominio-fronteira-franca-espanha-rio-bidasoa.jpg",
        link: "ilha-dos-faisoes-condominio-fronteira-franca-espanha-rio-bidasoa/",
        resumo: "O mais antigo condomínio indiviso do planeta no rio Bidasoa: como o Tratado dos Pirenéus de 1659 criou uma soberania alternada sem habitantes permanentes e vigiada pelas marinhas de Paris e Madri."
    },
    {
        titulo: "Por Que Apenas Quatro Quilômetros de Mar Separam os Estados Unidos e a Rússia no Estreito de Bering?",
        categoria: "Geopolítica",
        data: "11 Nov 2026 - 18:00",
        img: "/assets/img/blog/estreito-de-bering-diomedes-fronteira-russia-estados-unidos.jpg",
        link: "estreito-de-bering-diomedes-fronteira-russia-estados-unidos/",
        resumo: "Entre a Grande Diomede russa e a Pequena Diomede americana correm a fronteira marítima internacional e 21 horas de fuso horário: o chokepoint polar de 82 km onde duas superpotências se encaram."
    },
    {
        titulo: "Quais São os Dez Maiores Produtores de Alimentos do Mundo Onde a Terra Alimenta Oito Bilhões de Pessoas?",
        categoria: "Rankings",
        data: "11 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-maiores-produtores-de-alimentos-do-mundo.jpg",
        link: "ranking-maiores-produtores-de-alimentos-do-mundo/",
        resumo: "Da imensa colheita de grãos da China e da Índia à potência exportadora de grãos e carnes do Brasil e dos EUA: o ranking dos dez países agrícolas que garantem a sobrevivência nutricional do planeta."
    },
    {
        titulo: "Quais São os Dez Maiores Portos de Contêineres do Mundo Onde Milhões de Navios Movem o Comércio Global?",
        categoria: "Rankings",
        data: "11 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-portos-de-conteineres-do-mundo.jpg",
        link: "ranking-maiores-portos-de-conteineres-do-mundo/",
        resumo: "De Xangai com quase cinquenta milhões de TEUs a Singapura, Ningbo e Shenzhen: o ranking das dez megainfraestruturas portuárias que movimentam a espinha dorsal logística da economia global."
    },
    {
        titulo: "Quais São os Dez Países Mais Densamente Povoados do Mundo Onde Milhares de Pessoas Disputam Cada Quilômetro Quadrado?",
        categoria: "Rankings",
        data: "11 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-paises-mais-densamente-povoados-do-mundo.jpg",
        link: "ranking-paises-mais-densamente-povoados-do-mundo/",
        resumo: "De Mônaco com mais de vinte e seis mil habitantes por quilômetro quadrado a Singapura, Bahrein e ao gigante Bangladesh com 170 milhões de pessoas: os dez países com a maior densidade humana da Terra."
    },
    {
        titulo: "Como o Risorgimento, as Guerras de Independência e os Tratados Alpinos Forjaram as Fronteiras da Itália Moderna?",
        categoria: "História",
        data: "09 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-italia-unificacao-risorgimento-fronteiras.jpg",
        link: "historia-da-italia-unificacao-risorgimento-fronteiras/",
        resumo: "Da mera expressão geográfica de Metternich à Expedição dos Mil de Garibaldi, à Brecha da Porta Pia em 1870 e à anexação alpina de Trieste: a unificação de 302 mil km²."
    },
    {
        titulo: "Por Que a Diplomacia do Bambu e a Baía de Cam Ranh Fazem do Vietnã o Ponto de Equilíbrio Entre Washington e Pequim?",
        categoria: "Geopolítica",
        data: "09 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-do-vietna-mar-da-china-meridional-baia-cam-ranh.jpg",
        link: "geopolitica-do-vietna-mar-da-china-meridional-baia-cam-ranh/",
        resumo: "Com 3.260 km de litoral debruçados sobre a rota marítima mais disputada do mundo e o megaporto militar de Cam Ranh: como Hanói equilibra a superpotência vizinha e os Estados Unidos."
    },
    {
        titulo: "Como as Maiores Reservas de Platina e Cromo do Planeta Fazem da África do Sul o Monopólio Mineral da Indústria Global?",
        categoria: "Geoeconomia",
        data: "09 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-africa-do-sul-platina-cromo-minerais-estrategicos.jpg",
        link: "geoeconomia-da-africa-do-sul-platina-cromo-minerais-estrategicos/",
        resumo: "O Complexo Ígneo de Bushveld concentra mais de 75% da platina e 80% do cromo da Terra: a geoeconomia do megadepósito geológico sem o qual a indústria moderna e a transição verde entram em colapso."
    },
    {
        titulo: "Por Que as Ilhas da Austrália no Estreito de Torres Ficam a Menos de Quatro Quilômetros da Costa da Papua-Nova Guiné?",
        categoria: "Fronteiras",
        data: "09 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-torres-australia-papua-nova-guine-fronteira-recifes.jpg",
        link: "estreito-de-torres-australia-papua-nova-guine-fronteira-recifes/",
        resumo: "O Tratado de 1978 desenhou uma das fronteiras marítimas mais complexas do mundo: ilhas soberanas australianas coladas à costa de Papua, partilha do leito marinho e livre trânsito tribal."
    },
    {
        titulo: "Como Três Países Sul-Americanos Se Encontram no Topo de Uma Fortaleza de Pedra Inacessível a Quase Três Mil Metros?",
        categoria: "Fronteiras",
        data: "09 Nov 2026 - 14:30",
        img: "/assets/img/blog/triplice-fronteira-monte-roraima-brasil-venezuela-guiana.jpg",
        link: "triplice-fronteira-monte-roraima-brasil-venezuela-guiana/",
        resumo: "O platô tepui de 2.810 metros abriga o marco tríplice BV-0 erguido em 1931: onde as fronteiras de Brasil, Venezuela e Guiana convergem sobre falésias verticais e a disputa de Essequibo."
    },
    {
        titulo: "Por Que Portugal Recusa Reconhecer a Soberania da Espanha Sobre Olivença Há Mais de Duzentos Anos?",
        categoria: "Fronteiras",
        data: "09 Nov 2026 - 16:15",
        img: "/assets/img/blog/disputa-fronteira-olivenca-portugal-espanha-tratado-viena.jpg",
        link: "disputa-fronteira-olivenca-portugal-espanha-tratado-viena/",
        resumo: "Tomada por tropas espanholas na Guerra das Laranjas em 1801, Olivença é a pendência territorial mais duradoura da Europa: por que Lisboa não delimita a fronteira no Rio Guadiana até hoje."
    },
    {
        titulo: "Por Que o Estreito de Bonifacio Entre a Córsega e a Sardenha É Uma das Passagens Marítimas Mais Perigosas da Europa?",
        categoria: "Geopolítica",
        data: "09 Nov 2026 - 18:00",
        img: "/assets/img/blog/estreito-de-bonifacio-corsica-sardenha-franca-italia-canal.jpg",
        link: "estreito-de-bonifacio-corsica-sardenha-franca-italia-canal/",
        resumo: "Com apenas onze quilômetros de largura entre falésias e rochedos de granito submersos, a rota marítima que divide a Córsega francesa e a Sardenha italiana baniu petroleiros para evitar um desastre ecológico."
    },
    {
        titulo: "Quais São os Dez Países Mais Ricos do Mundo por PIB per Capita Onde a Riqueza por Habitante Ultrapassa Cem Mil Dólares?",
        categoria: "Rankings",
        data: "09 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-paises-mais-ricos-do-mundo-pib-per-capita.jpg",
        link: "ranking-paises-mais-ricos-do-mundo-pib-per-capita/",
        resumo: "De Luxemburgo, Irlanda e Singapura aos petroestados do Golfo e aos cofres helvéticos: o ranking dos dez países com o maior PIB per capita em Paridade de Poder de Compra segundo o FMI."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Ouro do Mundo Onde Milhares de Toneladas Guardam o Poder Geopolítico?",
        categoria: "Rankings",
        data: "09 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-ouro-do-mundo.jpg",
        link: "ranking-maiores-reservas-de-ouro-do-mundo/",
        resumo: "De Fort Knox e do Federal Reserve de Nova York ao Bundesbank alemão e às compras maciças de China e Rússia: o ranking das mais de trinta e seis mil toneladas que protegem os bancos centrais mundiais."
    },
    {
        titulo: "Quais São os Dez Países Mais Visitados do Mundo Onde Centenas de Milhões de Turistas Redefinem as Fronteiras das Viagens?",
        categoria: "Rankings",
        data: "09 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-paises-mais-visitados-do-mundo.jpg",
        link: "ranking-paises-mais-visitados-do-mundo/",
        resumo: "Da marca histórica de cem milhões de turistas na França ao magnetismo de Espanha, Estados Unidos, Itália e Turquia: o ranking dos dez destinos que dominam a mobilidade humana global."
    },
    {
        titulo: "A Fronteira Mais Louca do Mundo",
        categoria: "Curiosidades",
        data: "25 Jan 2026",
        img: "/assets/img/blog/fronteira-mais-louca.jpg",
        link: "fronteira-mais-louca/",
        resumo: "Em Baarle, você pode dormir na Bélgica e tomar café na Holanda sem sair de casa. Conheça a cidade com a fronteira mais complexa do planeta."
    },
    {
        titulo: "Como a Conquista do Deserto e os Tratados de Fronteira Forjaram o Gigantesco Território da Argentina?",
        categoria: "História",
        data: "08 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-da-argentina-formacao-territorial-fronteiras.jpg",
        link: "historia-da-argentina-formacao-territorial-fronteiras/",
        resumo: "Do Vice-Reino do Rio da Prata e da perda do Alto Peru à Conquista do Deserto de Julio Argentino Roca e ao Tratado de 1881 com o Chile: a sangrenta consolidação de 2,78 milhões de km²."
    },
    {
        titulo: "Por Que a Posição Naval da Índia no Oceano Índico Pode Asfixiar as Rotas de Petróleo da China?",
        categoria: "Geopolítica",
        data: "08 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-da-india-oceano-indico-himalaia-rotas-estrategicas.jpg",
        link: "geopolitica-da-india-oceano-indico-himalaia-rotas-estrategicas/",
        resumo: "Do posto avançado nas Ilhas Andamão a 150 km de Malaca ao confronto na Linha de Controle Real no Himalaia: como Nova Délhi articula o QUAD para conter o colar de pérolas chinês."
    },
    {
        titulo: "Como Uma Península Menor Que Sergipe Tornou-se o Maior Exportador de Gás Liquefeito e Uma Potência Financeira Global?",
        categoria: "Geoeconomia",
        data: "08 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-do-catar-gas-natural-liquefeito-gnl-riquezas.jpg",
        link: "geoeconomia-do-catar-gas-natural-liquefeito-gnl-riquezas/",
        resumo: "Do Campo Norte submarino compartilhado com o Irã ao monopólio de 900 trilhões de pés cúbicos de gás e ao fundo QIA de meio trilhão de dólares: a geoeconomia do megacomplexo de Ras Laffan."
    },
    {
        titulo: "Por Que o Estreito de Tsushima É a Rota Naval Mais Vigiada do Leste Asiático Desde a Batalha de 1905?",
        categoria: "Geopolítica",
        data: "08 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-tsushima-japao-coreia-chokepoint-naval.jpg",
        link: "estreito-de-tsushima-japao-coreia-chokepoint-naval/",
        resumo: "Cinquenta quilômetros de águas estratégicas entre a Coreia do Sul e o Japão que decidiram a Guerra Russo-Japonesa e hoje canalizam frotas nucleares sob redes de hidrofones e radares 24 horas."
    },
    {
        titulo: "Como Três Países Sul-Americanos Convivem Sem Fronteiras Físicas no Coração da Floresta Amazônica?",
        categoria: "Fronteiras",
        data: "08 Nov 2026 - 14:30",
        img: "/assets/img/blog/triplice-fronteira-brasil-colombia-peru-tabatinga-leticia.jpg",
        link: "triplice-fronteira-brasil-colombia-peru-tabatinga-leticia/",
        resumo: "Na confluência do Solimões com o Javari, Tabatinga, Letícia e Santa Rosa de Yavarí dividem três soberanias, três moedas e zero barreiras alfandegárias a mil quilômetros de qualquer capital."
    },
    {
        titulo: "Por Que Uma Linha Reta no Meio da Selva Divide a Segunda Maior Ilha do Planeta?",
        categoria: "Fronteiras",
        data: "08 Nov 2026 - 16:15",
        img: "/assets/img/blog/ilha-de-nova-guine-fronteira-meridiano-141-indonesia-papua.jpg",
        link: "ilha-de-nova-guine-fronteira-meridiano-141-indonesia-papua/",
        resumo: "Cortando florestas impenetráveis e picos nevados a 4.884 metros de altitude, o meridiano 141° Leste separa a Indonésia da Papua-Nova Guiné com uma única curva negociada no Rio Fly em 1895."
    },
    {
        titulo: "Por Que a Nigéria Entregou Uma Península Petrolífera Bilionária Para Camarões Sem Disparar Um Tiro?",
        categoria: "Fronteiras",
        data: "08 Nov 2026 - 18:00",
        img: "/assets/img/blog/peninsula-de-bakassi-fronteira-nigeria-camaroes-petroleo.jpg",
        link: "peninsula-de-bakassi-fronteira-nigeria-camaroes-petroleo/",
        resumo: "Mil quilômetros quadrados de manguezais ricos em petróleo e habitados por 300 mil nigerianos foram transferidos para a soberania camaronesa após a histórica sentença da Corte de Haia em 2002."
    },
    {
        titulo: "Quais São os Dez Países Mais Populosos do Mundo Onde Mais de Quatro Bilhões de Habitantes Redefinem a Demografia da Terra?",
        categoria: "Rankings",
        data: "08 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-paises-mais-populosos-do-mundo.jpg",
        link: "ranking-paises-mais-populosos-do-mundo/",
        resumo: "Da virada histórica da Índia com 1,43 bilhão de habitantes ultrapassando a China aos gigantes demográficos Indonésia, Paquistão, Nigéria e Brasil: o mapa da concentração humana planetária."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Gás Natural do Mundo Onde Trilhões de Metros Cúbicos Movem a Energia Global?",
        categoria: "Rankings",
        data: "08 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-gas-natural-do-mundo.jpg",
        link: "ranking-maiores-reservas-de-gas-natural-do-mundo/",
        resumo: "Da Sibéria russa com 37 trilhões de metros cúbicos a South Pars no Irã, ao Campo Norte do Catar e às bacias de xisto dos Estados Unidos: o ranking dos maiores depósitos de gás fóssil da Terra."
    },
    {
        titulo: "Quais São as Dez Maiores Economias do Mundo Medidas Pelo Produto Interno Bruto Nominal em Trilhões de Dólares?",
        categoria: "Rankings",
        data: "08 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-economias-do-mundo.jpg",
        link: "ranking-maiores-economias-do-mundo/",
        resumo: "Dos 28 trilhões de dólares dos Estados Unidos à manufatura maciça da China, à ascensão fulgurante da Índia e ao retorno do Brasil ao grupo de elite: o ranking do PIB nominal segundo o FMI."
    },
    {
        titulo: "Quais São as Dez Maiores Penínsulas do Planeta Onde Línguas de Terra Gigantescas Avançam Pelos Oceanos?",
        categoria: "Rankings",
        data: "07 Nov 2026 - 22:30",
        img: "/assets/img/blog/ranking-maiores-peninsulas-do-mundo.jpg",
        link: "ranking-maiores-peninsulas-do-mundo/",
        resumo: "Da Península Arábica com mais de 3,2 milhões de km² à Península Antártica, Indochina, Labrador e Escandinávia: conheça as dez maiores projeções continentais cercadas por mares."
    },
    {
        titulo: "Quais São os Dez Países com as Maiores Reservas de Petróleo do Mundo Onde Trilhões de Barris Definem a Geopolítica Global?",
        categoria: "Rankings",
        data: "07 Nov 2026 - 21:00",
        img: "/assets/img/blog/ranking-maiores-reservas-de-petroleo-do-mundo.jpg",
        link: "ranking-maiores-reservas-de-petroleo-do-mundo/",
        resumo: "Da Faixa do Orinoco na Venezuela com 303 bilhões de barris a Ghawar na Arábia Saudita e às areias do Canadá: o ranking dos dez maiores depósitos comprovados de óleo bruto da Terra."
    },
    {
        titulo: "Quais São os Dez Maiores Países Sem Saída Para o Mar e Como Eles Vencem o Isolamento Geográfico?",
        categoria: "Rankings",
        data: "07 Nov 2026 - 19:30",
        img: "/assets/img/blog/ranking-maiores-paises-sem-saida-para-o-mar.jpg",
        link: "ranking-maiores-paises-sem-saida-para-o-mar/",
        resumo: "Do Cazaquistão com 2,72 milhões de km² à Mongólia, Chade, Níger, Mali e Bolívia: o ranking das maiores nações sem costa oceânica e suas batalhas logísticas bilionárias por portos vizinhos."
    },
    {
        titulo: "Como os Estados Unidos Mantêm Uma Base Militar Soberana de Cento e Dezessete Quilômetros Quadrados Cravada no Leste de Cuba?",
        categoria: "Fronteiras",
        data: "07 Nov 2026 - 18:00",
        img: "/assets/img/blog/baia-de-guantanamo-enclave-militar-eua-cuba.jpg",
        link: "baia-de-guantanamo-enclave-militar-eua-cuba/",
        resumo: "Arrendada em 1903 sob a Emenda Platt por um cheque anual que Cuba recusa descontar há sessenta anos, a base naval de Guantánamo é o enclave extraterritorial mais tenso das Américas."
    },
    {
        titulo: "Como Uma Fronteira Murada na Grécia Mantém a República Monástica de Monte Athos Proibida Para Mulheres Há Mais de Mil Anos?",
        categoria: "Curiosidades",
        data: "07 Nov 2026 - 16:15",
        img: "/assets/img/blog/monte-athos-grecia-fronteira-republica-monastica-avaton.jpg",
        link: "monte-athos-grecia-fronteira-republica-monastica-avaton/",
        resumo: "Reconhecida no Tratado de Lausanne e na União Europeia, a península teocrática de Athos abriga vinte mosteiros soberanos regidos pela lei bizantina do Avaton desde 1046."
    },
    {
        titulo: "Por Que Uma Selva de Cem Quilômetros Entre a Colômbia e o Panamá É o Único Ponto Onde a Rodovia Pan-Americana Foi Interrompida?",
        categoria: "Fronteiras",
        data: "07 Nov 2026 - 14:30",
        img: "/assets/img/blog/tampao-de-darien-selva-colombia-panama-rodovia-pan-americana.jpg",
        link: "tampao-de-darien-selva-colombia-panama-rodovia-pan-americana/",
        resumo: "Entre Yaviza e Turbo, o pântano de Atrato e a densa selva tropical de Darién formam o único hiato de 106 km na maior rodovia do planeta, dividindo o continente americano."
    },
    {
        titulo: "Por Que o Estreito de Dover É a Rota Marítima Mais Movimentada do Mundo Onde Mais de Quinhentos Cargueiros Cruzam Diariamente?",
        categoria: "Geopolítica",
        data: "07 Nov 2026 - 12:45",
        img: "/assets/img/blog/estreito-de-dover-canal-da-mancha-chokepoint-maritimo.jpg",
        link: "estreito-de-dover-canal-da-mancha-chokepoint-maritimo/",
        resumo: "Com apenas 34 km de largura entre o Reino Unido e a França, o Estreito de Dover canaliza um quarto do comércio marítimo do norte da Europa sobre o Eurotúnel submarino."
    },
    {
        titulo: "Como o Quase Monopólio das Terras Raras Deu à China o Controle da Cadeia Tecnológica Global?",
        categoria: "Geoeconomia",
        data: "07 Nov 2026 - 11:00",
        img: "/assets/img/blog/geoeconomia-da-china-terras-raras-monopolio-tecnologico.jpg",
        link: "geoeconomia-da-china-terras-raras-monopolio-tecnologico/",
        resumo: "De Bayan Obo ao refino de 70% dos elementos críticos do planeta: como o domínio de ímãs de neodímio, gálio e germânio colocou caças, carros elétricos e semicondutores sob controle chinês."
    },
    {
        titulo: "Por Que o Porto de Gwadar e o Corredor com a China Fazem do Paquistão o Ponto Mais Crítico do Sul da Ásia?",
        categoria: "Geopolítica",
        data: "07 Nov 2026 - 09:15",
        img: "/assets/img/blog/geopolitica-do-paquistao-porto-gwadar-cpec-caxemira.jpg",
        link: "geopolitica-do-paquistao-porto-gwadar-cpec-caxemira/",
        resumo: "A saída chinesa para o Mar da Arábia desviando de Malaca, o Corredor Econômico de US$ 62 bilhões, a fronteira hostil da Linha Durand e a rivalidade nuclear com a Índia na Caxemira."
    },
    {
        titulo: "Como a Guerra do Pacífico e os Tratados Andinos Forjaram o Formato Estreito e Extremo do Chile?",
        categoria: "História",
        data: "07 Nov 2026 - 07:30",
        img: "/assets/img/blog/historia-do-chile-formacao-territorial-guerra-do-pacifico.jpg",
        link: "historia-do-chile-formacao-territorial-guerra-do-pacifico/",
        resumo: "De capitania geral isolada entre os Andes e o oceano à Guerra do Pacífico que retirou o mar da Bolívia e ao Tratado de 1881 com a Argentina: a formação da fita territorial chilena."
    },

    {
        titulo: "Quais São as Dez Cidades Mais Altas do Mundo Onde Populações Inteiras Vivem Acima de Três Mil Metros de Altitude?",
        categoria: "Rankings",
        data: "29 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Rinconadapuno.JPG",
        link: "ranking-cidades-mais-altas-do-mundo/",
        resumo: "De La Rinconada no Peru a 5.100 metros de altitude a El Alto na Bolívia e Lhasa no Tibete: o ranking das dez cidades mais altas habitadas permanentemente pela humanidade."
    },
    {
        titulo: "Quais São as Dez Capitais Mais Frias do Mundo Onde o Inverno Despenca Abaixo de Quarenta Graus Negativos?",
        categoria: "Rankings",
        data: "29 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/UB_downtown.jpg",
        link: "ranking-capitais-mais-frias-do-mundo/",
        resumo: "De Ulaanbaatar na Mongólia com média de -24°C em janeiro a Astana no Cazaquistão e Ottawa no Canadá: conheça as dez capitais nacionais mais gélidas do globo."
    },
    {
        titulo: "Quais São os Dez Países com as Menores Densidades Demográficas e os Maiores Vazios Humanos do Planeta?",
        categoria: "Rankings",
        data: "29 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Population_density_map_of_the_world.svg/1280px-Population_density_map_of_the_world.svg.png",
        link: "ranking-menores-densidades-demograficas-do-mundo/",
        resumo: "Da estepe sem cercas da Mongólia com 2 hab/km² aos desertos da Namíbia e do Outback australiano: o ranking dos 10 países soberanos mais vazios e isolados da Terra."
    },
    {
        titulo: "Por Que É Matematicamente Impossível Medir o Tamanho Exato do Litoral de Um País?",
        categoria: "Cartografia",
        data: "29 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Britain-fractal-coastline-100km.png",
        link: "paradoxo-da-linha-de-costa-geometria-fractal-mandelbrot/",
        resumo: "Publicado por Benoit Mandelbrot em 1967, o Paradoxo da Linha de Costa prova que quanto menor a régua utilizada, mais o perímetro litorâneo tende ao infinito."
    },
    {
        titulo: "Como Quatro Países Se Encontram em Um Único Ponto de Cento e Cinquenta Metros no Rio Zambeze?",
        categoria: "Fronteiras",
        data: "29 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kazungula_Bridge.jpg",
        link: "quadriponto-de-kazungula-fronteira-quatro-paises-rio-zambeze/",
        resumo: "No leito do Rio Zambeze, as fronteiras de Botsuana, Zâmbia, Zimbábue e Namíbia convergem em uma das anomalias geodésicas mais complexas da África, resolvida por uma ponte curva."
    },
    {
        titulo: "Como Quatro Quilômetros de Terra de Ninguém Mantêm Dois Milhões de Soldados Separados na Coreia?",
        categoria: "Fronteiras",
        data: "29 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/070401_Panmunjeom3.jpg",
        link: "zona-desmilitarizada-coreia-dmz-paralelo-38/",
        resumo: "Com 250 km de extensão ao longo da Linha de Demarcação Militar de 1953, a Zona Desmilitarizada coreana abriga dois milhões de minas terrestres e um paradoxal refúgio ecológico."
    },
    {
        titulo: "Por Que a Frota Russa do Báltico Está Encurralada em Três Canais Rasos na Dinamarca?",
        categoria: "Geopolítica",
        data: "29 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Storeb%C3%A6ltsbroen_from_Sj%C3%A6lland.jpg",
        link: "estreitos-dinamarqueses-chokepoint-baltico-otan-russia/",
        resumo: "Com apenas 15 metros de profundidade navegável no Grande Belt, os Estreitos Dinamarqueses são a garganta obrigatória vigiada pela OTAN que trava o acesso naval russo ao Atlântico."
    },
    {
        titulo: "Como o Brasil Se Tornou a Maior Superpotência de Terras Agricultáveis e Energia Limpa do Planeta?",
        categoria: "Geoeconomia",
        data: "29 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Agricultural_Fields_near_Perdizes%2C_Minas_Gerais%2C_Brazil.JPG",
        link: "geoeconomia-do-brasil-agronegocio-minerais-energia/",
        resumo: "Da correção do solo ácido do Cerrado pela Embrapa à matriz de 88% de eletricidade renovável e as maiores reservas mundiais de nióbio e minério de ferro em Carajás."
    },
    {
        titulo: "Por Que a Geografia do Egito Depende de Uma Valeta Artificial e de Um Rio Sob Ameaça?",
        categoria: "Geopolítica",
        data: "29 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Iss016e019375.jpg",
        link: "geopolitica-do-egito-canal-de-suez-rio-nilo/",
        resumo: "O controle do Canal de Suez gerando bilhões em pedágios marítimos e a dependência existencial de 97% das águas do Rio Nilo diante da mega-represa da Etiópia."
    },
    {
        titulo: "Como Mil Anos de Guerras e Tratados Forjaram o Hexágono Perfeito das Fronteiras da França?",
        categoria: "História",
        data: "29 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Satellite_image_of_France_in_August_2002.jpg",
        link: "historia-da-franca-formacao-territorial-fronteiras/",
        resumo: "Do Tratado de Verdun em 843 e o fim da Guerra dos Cem Anos à anexação da Alsácia e o Tratado de Turim em 1860: a formação territorial do hexágono francês."
    },
    {
        titulo: "Quais São as Dez Maiores Fronteiras Terrestres do Mundo Onde Milhares de Quilômetros Dividem Continentes e Nações?",
        categoria: "Rankings",
        data: "28 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg",
        link: "ranking-maiores-fronteiras-terrestres-do-mundo/",
        resumo: "Do paralelo 49 entre Canadá e EUA com 8.891 km à estepe entre Rússia e Cazaquistão e os Andes entre Argentina e Chile: o ranking das 10 maiores divisas terrestres."
    },
    {
        titulo: "Por Que a Ilha de Taiwan É o Território Mais Perigoso e Disputado do Tabuleiro Militar Global?",
        categoria: "Geopolítica",
        data: "28 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Bathymetry_and_ocean_currents_of_the_Taiwan_Strait_and_nearby_areas.png",
        link: "taiwan-geopolitica-estreito-semicondutores-primeira-cadeia/",
        resumo: "Primeira cadeia de ilhas, controle da rota de semicondutores e a barreira naval no Pacífico: por que a geografia de Taiwan impede o avanço irrestrito de superpotências."
    },
    {
        titulo: "Por Que Vinte Por Cento de Todo o Petróleo Consumido no Mundo Precisa Atravessar Uma Valeta Naval de Trinta e Três Quilômetros?",
        categoria: "Geopolítica",
        data: "28 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/16/Strait_of_Hormuz_and_Musandam_Peninsula_%28MODIS_2018-12-10%29.jpg",
        link: "estreito-de-ormuz-chokepoint-petroleo-geopolitica-golfo/",
        resumo: "Com canais de navegação de apenas 3 km em cada sentido, o Estreito de Ormuz entre o Irã e Omã é a artéria energética mais vigiada e vulnerável de todo o planeta."
    },
    {
        titulo: "Por Que Este Estreito de Vinte e Seis Quilômetros no Mar Vermelho Pode Interromper Doze Por Cento do Comércio Marítimo Mundial?",
        categoria: "Geopolítica",
        data: "28 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Bab-el-Mandeb_And_Red_Sea_NASA_photo.webp",
        link: "estreito-bab-el-mandeb-chokepoint-mar-vermelho-djibuti/",
        resumo: "Entre o Iêmen e o Djibuti, o Estreito de Bab-el-Mandeb é a garganta marítima que conecta a Ásia à Europa. Uma interrupção aqui desvia milhares de navios para o Cabo."
    },
    {
        titulo: "Como as Maiores Reservas de Cobalto do Planeta Transformaram a República Democrática do Congo no Epicentro da Geoeconomia Global?",
        categoria: "Geoeconomia",
        data: "28 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/DRC_mineral_resources_-_en_version.png",
        link: "congo-geoeconomia-cobalto-coltan-riquezas-minerais/",
        resumo: "Com mais de setenta por cento da produção mundial de cobalto no cinturão de Katanga, a República Democrática do Congo é a chave da transição energética do século XXI."
    },
    {
        titulo: "Como a Espanha Mantém a Menor Fronteira Terrestre do Planeta em um Rochedo de Oitenta e Cinco Metros no Norte da África?",
        categoria: "Fronteiras",
        data: "28 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Velez_de_la_Gomera.jpg",
        link: "penon-de-velez-de-la-gomera-menor-fronteira-espanha-marrocos/",
        resumo: "Com exatos 85 metros de extensão em um tômbolo de areia, o Peñón de Vélez de la Gomera abriga a menor fronteira internacional contínua entre Espanha e Marrocos."
    },
    {
        titulo: "Como Uma Faixa de Trezentos e Cinquenta Quilômetros de Montanhas Foi Criada para Impedir que Duas Superpotências Entrassem em Guerra?",
        categoria: "Fronteiras",
        data: "28 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Wakhan.png",
        link: "corredor-de-wakhan-fronteira-afeganistao-grande-jogo/",
        resumo: "Encravado entre o Tadjiquistão, Paquistão e China, o Corredor de Wakhan foi desenhado em 1895 no Grande Jogo para separar o Império Britânico do Império Russo."
    },
    {
        titulo: "Como Duas Ilhas Separadas por Menos de Quatro Quilômetros Vivem com Vinte e Uma Horas de Diferença no Relógio?",
        categoria: "Curiosidades",
        data: "28 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/BeringSt-close-VE.jpg",
        link: "ilhas-diomedes-estreito-de-bering-fuso-horario-russia-estados-unidos/",
        resumo: "No Estreito de Bering, Big Diomede na Rússia e Little Diomede nos Estados Unidos distam apenas 3,8 km, mas estão divididas pela Linha Internacional de Data."
    },
    {
        titulo: "Por Que o Ponto Mais Isolado de Todos os Oceanos Fica Mais Próximo dos Astronautas no Espaço do Que de Qualquer Ser Humano na Terra?",
        categoria: "Curiosidades",
        data: "28 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Distancia_a_la_costa.png",
        link: "ponto-nemo-polo-de-inacessibilidade-oceanica-cemiterio-espacial/",
        resumo: "A 2.688 km de qualquer pedaço de terra no Pacífico Sul, o Ponto Nemo é o polo de inacessibilidade oceânica e o maior cemitério de espaçonaves do planeta."
    },
    {
        titulo: "Como a Queda do Império Otomano e o Tratado de Lausanne Redesenharam as Fronteiras da Turquia Moderna?",
        categoria: "História",
        data: "28 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Turkey-Greece-Bulgaria_on_Treaty_of_Lausanne.png",
        link: "turquia-historia-formacao-fronteiras-tratado-lausanne/",
        resumo: "Da partilha colonial de Sèvres em 1920 à guerra de independência de Atatürk e o Tratado de Lausanne de 1923: como as fronteiras da Turquia foram forjadas."
    },
    {
        titulo: "Quais São as Dez Menores Nações Insulares da Terra Ameaçadas Pela Subida dos Oceanos?",
        categoria: "Rankings",
        data: "27 Out 2026 - 19:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Funafuti_airport_-_Fiji_Airways.jpg/1280px-Funafuti_airport_-_Fiji_Airways.jpg",
        link: "ranking-menores-paises-insulares-do-mundo/",
        resumo: "De Nauru e Tuvalu às Maldivas e Malta: conheça os dez menores países formados exclusivamente por ilhas e atóis e seus desafios existenciais de soberania."
    },
    {
        titulo: "Por Que o Mapa Icosaédrico de Buckminster Fuller Mostra a Humanidade Vivendo em Uma Única Ilha Contínua?",
        categoria: "Cartografia",
        data: "27 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/53/Dymaxion_projection.png",
        link: "mapa-dymaxion-buckminster-fuller-projecao-icosaedro/",
        resumo: "Projetada nas 20 faces de um icosaedro em 1943, a projeção Dymaxion de Buckminster Fuller desfaz o viés colonial e revela a Terra como uma ilha conectada."
    },
    {
        titulo: "Como os Círculos Matemáticos de Tissot Provam que Nenhum Mapa-Múndi Plano Jamais Poderá Ser Perfeito?",
        categoria: "Cartografia",
        data: "27 Out 2026 - 16:50",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tissot_world_from_space.png",
        link: "indicatriz-de-tissot-distorcao-projecoes-cartograficas/",
        resumo: "Criada pelo matemático Nicolas Auguste Tissot em 1859, a elipse indicatriz revela visualmente como toda projeção deforma áreas, ângulos ou distâncias na Terra."
    },
    {
        titulo: "Por Que Montreal Construiu uma Cidade Subterrânea de Trinta e Três Quilômetros para Vencer o Inverno Polar?",
        categoria: "Urbanismo",
        data: "27 Out 2026 - 15:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Place_des_Arts_-_m%C3%A9tro_de_Montr%C3%A9al.jpg",
        link: "cidade-subterranea-de-montreal-reso-urbanismo-inverno/",
        resumo: "Com mais de 33 km de túneis climatizados conectando metrô, escritórios e praças, o RÉSO permite que 500 mil pessoas circulem diariamente sob temperaturas de -30°C."
    },
    {
        titulo: "Como Curitiba Revolucionou o Transporte Público Mundial ao Inventar o Sistema BRT nos Anos Setenta?",
        categoria: "Urbanismo",
        data: "27 Out 2026 - 14:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Curitiba_PublicTransport.png/1280px-Curitiba_PublicTransport.png",
        link: "sistema-brt-curitiba-mobilidade-urbana-jaime-lerner/",
        resumo: "Canaletas exclusivas, estações-tubo e ônibus expressos: como o arquiteto Jaime Lerner criou em Curitiba o modelo de BRT replicado em mais de 200 metrópoles."
    },
    {
        titulo: "Como Uma Canetada Diplomática em 1750 Quase Triplicou o Tamanho do Brasil e Enterrou o Meridiano de Tordesilhas?",
        categoria: "História",
        data: "27 Out 2026 - 13:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Frontisp%C3%ADcio_do_Tratado_de_Madrid.jpg",
        link: "tratado-de-madri-1750-uti-possidetis-fronteiras-brasil/",
        resumo: "Articulado pelo diplomata santista Alexandre de Gusmão, o Tratado de Madri aplicou o princípio de posse efetiva para desenhar a silhueta moderna do mapa do Brasil."
    },
    {
        titulo: "Como Uma Disputa de Agrimensores no Século Dezoito Dividiu os Estados Unidos Cultural e Politicamente em Dois Mundos?",
        categoria: "História",
        data: "27 Out 2026 - 12:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mason-dixon-line.gif",
        link: "linha-mason-dixon-fronteira-geodesica-estados-unidos/",
        resumo: "Traçada com astrolábios e telescópios entre 1763 e 1767 por Charles Mason e Jeremiah Dixon, a linha de divisa colonial virou o divisor histórico entre Norte e Sul."
    },
    {
        titulo: "Por Que Este Ponto a Cento e Vinte e Cinco Metros Abaixo do Nível do Mar Está Partindo a África e Criando um Novo Oceano?",
        categoria: "Curiosidades",
        data: "27 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Map_Danakil.jpg/1280px-Map_Danakil.jpg",
        link: "depressao-de-danakil-triplice-juncao-afar-etiopia/",
        resumo: "Na Depressão de Danakil, na Etiópia, três placas tectônicas se afastam em um caldeirão de vulcões de lava permanente e fontes hidrotermais ácidas de enxofre."
    },
    {
        titulo: "Por Que o Governo Brasileiro Proíbe Terminantemente o Desembarque Civil Nesta Ilha a Trinta e Cinco Quilômetros de São Paulo?",
        categoria: "Curiosidades",
        data: "27 Out 2026 - 09:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ilha_da_Queimada_Grande_-_Itanha%C3%A9m3.jpg",
        link: "ilha-da-queimada-grande-ilha-das-cobras-brasil/",
        resumo: "A 35 km da costa paulista, a Ilha da Queimada Grande concentra a mais perigosa densidade de jararacas-ilhoas da Terra em um ecossistema isolado na Era do Gelo."
    },
    {
        titulo: "Por Que o Lugar Mais Seco do Planeta Abriga a Maior Escavação Feita Pela Humanidade?",
        categoria: "Curiosidades",
        data: "27 Out 2026 - 08:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG/1280px-Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG",
        link: "deserto-do-atacama-chuquicamata-lugar-mais-seco/",
        resumo: "No coração do Deserto do Atacama, onde estações meteorológicas nunca registraram chuva, opera a colossal mina de Chuquicamata a 2.870 metros de altitude."
    },
    {
        titulo: "Quais São os Dez Países com Mais Ilhas no Mundo Onde Pequenos Arquipélagos Somam Centenas de Milhares de Territórios?",
        categoria: "Rankings",
        data: "27 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/%C3%85land_Islands.jpg",
        link: "ranking-paises-com-mais-ilhas-do-mundo/",
        resumo: "Por que Suécia, Noruega e Finlândia superam Indonésia e Filipinas na contagem insular global: entenda o relevo pós-glacial e os números reais dos maiores arquipélagos."
    },
    {
        titulo: "Quais São as Dez Maiores Ilhas do Planeta Que Somadas Ocupam Uma Área Maior Que Toda a Europa Ocidental?",
        categoria: "Rankings",
        data: "27 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Landsat_sees_Greenland%27s_Ice_Cap.jpg",
        link: "ranking-maiores-ilhas-do-mundo/",
        resumo: "Da gigantesca Groenlândia e as selvas da Nova Guiné aos desertos de gelo de Baffin e Ellesmere: o ranking comparativo das 10 maiores massas insulares da Terra."
    },
    {
        titulo: "Por Que Índia e China Disputam Uma Linha Desenhada em Um Mapa de 1914 no Himalaia Oriental?",
        categoria: "Fronteiras",
        data: "27 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/62/McMahon_Line_Simla_Accord_Treaty_1914_Map1.jpg",
        link: "linha-mcmahon-fronteira-india-china/",
        resumo: "Da Convenção de Simla negociada por Sir Henry McMahon à guerra de 1962 e a militarização de Arunachal Pradesh: a história da linha contestada no Himalaia."
    },
    {
        titulo: "Como Três Países Soberanos Dividem a Terceira Maior Ilha do Planeta Coberta por Florestas Tropicais?",
        categoria: "Curiosidades",
        data: "27 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Administrative_map_of_Borneo_%28Indonesian%29.png",
        link: "ilha-de-borneo-tres-paises/",
        resumo: "Da Convenção de Londres de 1891 entre holandeses e britânicos à ascensão de Nusantara: a partilha de Bornéu entre Indonésia, Malásia e o Sultanato de Brunei."
    },
    {
        titulo: "Por Que o Reino Unido Mantém Duas Bases Militares Soberanas no Território do Chipre Desde 1960?",
        categoria: "Fronteiras",
        data: "27 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Akrotiri_and_Dhekelia_location_map.svg",
        link: "bases-soberanas-akrotiri-e-dhekelia-chipre/",
        resumo: "Do Tratado de Estabelecimento de 1960 aos postos de inteligência de Ayios Nikolaos e RAF Akrotiri: como Londres preservou 254 km² de território soberano no Mediterrâneo."
    },
    {
        titulo: "Como Uma Fronteira de Apenas Dezessete Quilômetros Entre a Rússia e a Coreia do Norte Desafia a Geopolítica da Ásia?",
        categoria: "Fronteiras",
        data: "27 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/North_Korea_-_Russia_border_map.jpg",
        link: "fronteira-russia-coreia-do-norte-rio-tumen/",
        resumo: "Do Tratado de Pequim de 1860 à Ponte da Amizade no Rio Tumen: a menor fronteira internacional da Rússia e o corredor militar estratégico com Pyongyang."
    },
    {
        titulo: "Por Que o Corredor GIUK Entre a Groenlândia e a Grã-Bretanha É o Ponto Mais Vigiado da Guerra Submarina Global?",
        categoria: "Geopolítica",
        data: "27 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/GIUK_gap.png",
        link: "corredor-giuk-gap-guerra-submarina/",
        resumo: "A passagem naval entre Groenlândia, Islândia e Reino Unido: entenda a hidrografia estratégica, as redes de hidrofones SOSUS e a rota de submarinos no Atlântico Norte."
    },
    {
        titulo: "Como a Descoberta de Onze Bilhões de Barris de Petróleo Transformou a Guiana no País que Mais Cresce no Planeta?",
        categoria: "Geopolítica",
        data: "27 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Stabroek_and_Block_58_in_Suriname-Guyana_Basin_Offshore_map.png",
        link: "geoeconomia-da-guiana/",
        resumo: "Do Bloco Stabroek e o salto do PIB superior a 30% ao ano à disputa territorial pelo Essequibo com a Venezuela: o xadrez geoeconômico da Guiana."
    },
    {
        titulo: "Por Que as Filipinas Tornaram-se o Ponto Mais Crítico da Batalha Naval Entre Estados Unidos e China no Mar do Sul?",
        categoria: "Geopolítica",
        data: "27 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/57/South_China_Sea_Claims_and_Boundary_Agreements_2012.jpg",
        link: "geopolitica-das-filipinas/",
        resumo: "Do navio encalhado BRP Sierra Madre e o Canal de Bashi às bases militares do EDCA: entenda o valor geoestratégico das Filipinas no Indo-Pacífico."
    },
    {
        titulo: "Como a Grécia Reconquistou Seu Território e Mais de Três Mil Ilhas Após Quatro Séculos de Domínio Otomano?",
        categoria: "História",
        data: "27 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Territorial_Evolution_of_Greece.png",
        link: "historia-da-grecia/",
        resumo: "Da Guerra de Independência de 1821 e o Tratado de Londres aos tratados de Lausanne e Paris: a reconstituição cartográfica do território grego contemporâneo."
    },
    {
        titulo: "Quais São os Dez Maiores Aglomerados Urbanos do Planeta Onde Vivem Mais de Trezentos Milhões de Pessoas?",
        categoria: "Rankings",
        data: "25 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
        link: "ranking-maiores-megacidades-do-mundo/",
        resumo: "De Tóquio-Yokohama e Deli a São Paulo e Xangai: compare as dez maiores megacidades da Terra por população, densidade demográfica e desafios logísticos."
    },
    {
        titulo: "Quais São os Dez Maiores Países do Planeta Que Ocupam Quase Metade de Todas as Terras Emersas?",
        categoria: "Rankings",
        data: "25 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/70/The_Blue_Marble%2C_AS17-148-22727.jpg",
        link: "ranking-maiores-paises-do-mundo/",
        resumo: "Da imensidão transcontinental da Rússia e os arquipélagos do Canadá aos desertos da Argélia e o cerrado brasileiro: conheça os 10 gigantes territoriais da Terra."
    },
    {
        titulo: "Por Que Cinco Nações Estão Mapeando o Fundo do Oceano Ártico Para Reivindicar o Polo Norte Submarino?",
        categoria: "Geopolítica",
        data: "25 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/IBCAO_betamap.jpg",
        link: "disputa-do-artico-dorsal-de-lomonosov/",
        resumo: "A batalha científica e militar pela Dorsal de Lomonosov: como Rússia, Canadá, Dinamarca, EUA e Noruega disputam a extensão de suas plataformas sob o gelo polar."
    },
    {
        titulo: "Por Que Índia e Paquistão Lutam Há Quarenta Anos Pelo Controle de Uma Geleira Congelada a Seis Mil Metros de Altitude?",
        categoria: "Fronteiras",
        data: "25 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Siachen_Glacier_Satellite_Image%2C_1.jpg",
        link: "geleira-de-siachen-campo-batalha-mais-alto/",
        resumo: "Da Operação Meghdoot em 1984 e a indefinição do marco NJ9842 a postos militares a -50°C: a disputa pelo campo de batalha mais alto do planeta em Siachen."
    },
    {
        titulo: "Como Uma Faixa Estreita de Quatorze Quilômetros de Areia Tornou-se o Ponto Mais Tenso do Oriente Médio?",
        categoria: "Fronteiras",
        data: "25 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Road_to_Gaza_060_-_Flickr_-_Al_Jazeera_English.jpg",
        link: "corredor-de-philadelphi-fronteira-egito-gaza/",
        resumo: "Criada pelo tratado de paz de Camp David em 1979 entre Egito e Israel: entenda a importância militar e territorial do Corredor de Philadelphi na fronteira com Gaza."
    },
    {
        titulo: "Como Uma Faixa de Vinte Quilômetros de Litoral Cortou a Croácia em Duas Partes e Isolou Dubrovnik?",
        categoria: "Fronteiras",
        data: "25 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/86/Pelje%C5%A1ac_Bridge_1.jpg",
        link: "corredor-de-neum-bosnia-croacia/",
        resumo: "Do Tratado de Karlowitz de 1699 entre Ragusa e o Império Otomano à inauguração da monumental Ponte de Pelješac: a história do corredor costeiro de Neum."
    },
    {
        titulo: "Por Que Mais de Dez Por Cento do Comércio Global Depende de Uma Valeta de Cento e Noventa Quilômetros no Egito?",
        categoria: "Geopolítica",
        data: "25 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Iss016e019375.jpg",
        link: "canal-de-suez-arteria-maritima/",
        resumo: "Da inauguração em 1869 e as guerras de nacionalização ao encalhe do Ever Given e os desvios marítimos: a geopolítica e a economia do Canal de Suez."
    },
    {
        titulo: "Como o Maior Exportador de Petróleo do Mundo Usa Um Fundo Soberano de Quase Um Trilhão de Dólares Para Sobreviver ao Fim da Era Fóssil?",
        categoria: "Geopolítica",
        data: "25 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Kingdom_Centre_Riyadh_2024.jpeg",
        link: "geoeconomia-da-arabia-saudita/",
        resumo: "Do megacampo de Ghawar e a gigante Saudi Aramco aos projetos monumentais da Visão 2030 e minerais críticos: a corrida geoeconômica da Arábia Saudita."
    },
    {
        titulo: "Por Que a Península Coreana Permanece Dividida no Paralelo 38 com Mais de Um Milhão de Soldados em Alerta Máximo?",
        categoria: "Geopolítica",
        data: "25 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/070401_Panmunjeom3.jpg",
        link: "geopolitica-da-coreia-do-sul/",
        resumo: "Entre a artilharia norte-coreana a quarenta quilômetros de Seul, a Zona Desmilitarizada e as superpotências: entenda o xadrez geopolítico da Coreia do Sul."
    },
    {
        titulo: "Como Três Partilhas Apagaram a Polônia do Mapa por Mais de Um Século Antes de Seu Renascimento Territorial?",
        categoria: "História",
        data: "25 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Polish-Lithuanian_Commonwealth_in_1772.PNG",
        link: "historia-da-polonia/",
        resumo: "Da Comunidade Polaco-Lituana e as partilhas de 1772, 1793 e 1795 ao renascimento em 1918 e a migração de fronteiras em Potsdam: conheça a saga cartográfica da Polônia."
    },
    {
        titulo: "Quais São os Dez Maiores Lagos do Planeta Que Concentram a Maior Parte da Água Doce e Salgada da Terra?",
        categoria: "Rankings",
        data: "24 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Caspian_Sea_from_orbit.jpg",
        link: "ranking-maiores-lagos-do-mundo/",
        resumo: "Do gigantesco Mar Cáspio e os Grandes Lagos da América do Norte ao Lago Vitória e o profundo Baikal: compare os 10 maiores corpos d'água lacustres do mundo."
    },
    {
        titulo: "Por Que o Lago Baikal na Sibéria Guarda Vinte Por Cento de Toda a Água Doce Não Congelada da Terra?",
        categoria: "Curiosidades",
        data: "24 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Baikal.A2001296.0420.250m-NASA.jpg",
        link: "lago-baikal-maior-reserva-agua-doce/",
        resumo: "Com 1.642 metros de profundidade e 25 milhões de anos de idade geológica, conheça o abismo fóssil que armazena mais água doce líquida que todos os Grandes Lagos juntos."
    },
    {
        titulo: "Como Nove Mil Quilômetros de Trilhos Pela Taiga e Montanhas Conectaram Dois Continentes na Maior Ferrovia da Terra?",
        categoria: "Curiosidades",
        data: "24 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/VL_85-022_container_train.jpg",
        link: "ferrovia-transiberiana-maior-linha-do-mundo/",
        resumo: "De Moscou a Vladivostok através de 8 fusos horários e contornando o Lago Baikal: saiba como a Ferrovia Transiberiana unificou a eurásia russa desde 1891."
    },
    {
        titulo: "Como a Engenharia Territorial Soviética Criou o Labirinto de Oito Enclaves no Vale de Fergana?",
        categoria: "Fronteiras",
        data: "24 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/ValleDeFergan%C3%A1Topogr%C3%A1fico_en.svg",
        link: "enclaves-do-vale-de-fergana/",
        resumo: "As fronteiras entre Quirguistão, Tajiquistão e Uzbequistão desenhadas nas décadas de 1920 e 1930: veja a disputa por água, estradas e terras em Sokh e Vorukh."
    },
    {
        titulo: "Como Uma Cidade na Áustria Ficou Conectada ao Resto do País por Um Ponto de Rocha de Apenas Um Milímetro?",
        categoria: "Fronteiras",
        data: "24 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/BlickAufJungholz.jpg",
        link: "jungholz-enclave-austria-alemanha/",
        resumo: "No cume do Monte Sorgschrofen, descubra como o vilarejo alpino de Jungholz forma um quadripoint geográfico único cercado inteiramente pela Baviera alemã."
    },
    {
        titulo: "Como um Erro de Cartografia de 1783 Deixou Uma Fatia dos Estados Unidos Isolada Dentro do Território Canadense?",
        categoria: "Fronteiras",
        data: "24 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/NORTHWEST_Angle.png",
        link: "angulo-noroeste-minnesota-fronteira/",
        resumo: "Ao norte do paralelo 49° no Lago dos Bosques, conheça o Ângulo Noroeste de Minnesota, o único exclave dos EUA contíguos onde os moradores cruzam o Canadá para ir à escola."
    },
    {
        titulo: "Por Que a Passagem de Vinte e Seis Quilômetros em Bab el-Mandeb Forçou Navios a Contornar Todo o Continente Africano?",
        categoria: "Geopolítica",
        data: "24 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Bab-el-Mandeb_And_Red_Sea_NASA_photo.webp",
        link: "estreito-de-bab-el-mandeb-chokepoint/",
        resumo: "A Porta das Lágrimas entre o Mar Vermelho e o Oceano Índico: entenda como um estrangulamento naval de 26 km reordenou as rotas mundiais de frete marítimo."
    },
    {
        titulo: "Como Mais de Setenta Por Cento do Fosfato do Planeta Transformou o Marrocos no Guardião da Agricultura Global?",
        categoria: "Geopolítica",
        data: "24 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/ISS056-E-32453_-_View_of_Western_Sahara.jpg",
        link: "geoeconomia-do-marrocos/",
        resumo: "Das jazidas de Khouribga à esteira transportadora de 100 km de Bou Craa no Saara Ocidental: descubra como o fosfato marroquino sustenta a alimentação humana."
    },
    {
        titulo: "Por Que a Primeira Cadeia de Ilhas e o Escudo de Silício Transformaram Taiwan no Ponto Mais Disputado do Mundo?",
        categoria: "Geopolítica",
        data: "24 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/00/101.portrait.altonthompson.jpg",
        link: "geopolitica-de-taiwan/",
        resumo: "A 160 km do continente chinês, saiba como o controle de 90% dos microchips avançados e a geografia do Estreito de Taiwan definem o equilíbrio militar do Pacífico."
    },
    {
        titulo: "Como Nove Séculos de Guerras e Tratados Fizeram de Portugal o País com as Fronteiras Mais Antigas da Europa?",
        categoria: "História",
        data: "24 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Torre_belem.jpg",
        link: "historia-de-portugal/",
        resumo: "Do Tratado de Zamora em 1143 e a Linha de Alcanizes em 1297 até as grandes navegações e as fronteiras modernas: conheça a trajetória territorial de Portugal."
    },
    {
        titulo: "Quais São os Dez Países com Mais Fusos Horários do Planeta Onde o Sol Nunca Se Põe?",
        categoria: "Rankings",
        data: "23 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/95/World_Time_Zones_Map%281%29.png",
        link: "ranking-paises-mais-fusos-horarios/",
        resumo: "Por que a França lidera o ranking mundial com 12 fusos horários à frente da Rússia e dos Estados Unidos? Veja os 10 países com mais zonas de tempo na Terra."
    },
    {
        titulo: "Quais São os Dez Maiores Desertos do Planeta Onde o Clima Extremo Desafia a Vida Humana?",
        categoria: "Rankings",
        data: "23 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Antarctica_6400px_from_Blue_Marble.jpg",
        link: "ranking-maiores-desertos-do-mundo/",
        resumo: "Da imensidão gelada da Antártida e do Ártico às dunas do Saara, Arábia, Gobi e Patagônia: conheça os dez maiores desertos da Terra e a ciência da aridez."
    },
    {
        titulo: "Como Uma Mina de Zinco Criou o País Esquecido de Moresnet no Ponto de Quatro Fronteiras da Europa?",
        categoria: "História",
        data: "23 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Zinkwerke_Neutral-Moresnet_%282%29.jpg",
        link: "moresnet-neutro-quatro-fronteiras/",
        resumo: "Entre 1816 e 1920, uma disputa por minério entre a Prússia e a Holanda gerou um microestado independente de 3,4 km² que quase adotou o Esperanto como língua."
    },
    {
        titulo: "Por Que o Cume do Vulcão Chimborazo Fica Mais Perto do Espaço do Que o Topo do Monte Everest?",
        categoria: "Curiosidades",
        data: "23 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Chimborazo_04.jpg",
        link: "vulcao-chimborazo-centro-da-terra/",
        resumo: "Pela curvatura e achatamento da Terra no Equador, o vulcão Chimborazo está a 6.384,4 km do núcleo do planeta — 2 km mais próximo das estrelas que o Everest."
    },
    {
        titulo: "Como a Holanda Drenou o Oceano e Criou Uma Província Inteira Abaixo do Nível do Mar?",
        categoria: "Curiosidades",
        data: "23 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Afsluitdijk.jpg",
        link: "polderes-holanda-flevolandia/",
        resumo: "Com o dique Afsluitdijk de 32 km e bombas de drenagem contínuas, os Países Baixos criaram Flevolândia sobre o leito marinho. Veja a engenharia dos pôlderes."
    },
    {
        titulo: "Por Que o Uruguai Ainda Reivindica Oficialmente Duas Áreas de Fronteira Dentro do Território do Brasil?",
        categoria: "Fronteiras",
        data: "23 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Puente_Bella_Union_Barra_Quarai.jpg",
        link: "disputa-fronteira-brasil-uruguai/",
        resumo: "A Ilha Brasileira na foz do Rio Quaraí e o Rincão de Artigas com 237 km²: conheça as duas disputas de limites ativas na fronteira sul do Brasil."
    },
    {
        titulo: "Como Três Ilhas Minúsculas no Canal de Beagle Quase Levaram Argentina e Chile a Uma Guerra Total?",
        categoria: "Fronteiras",
        data: "23 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ushuaia_-_Costa_del_Canal_de_Beagle_2.JPG",
        link: "canal-de-beagle-fronteira/",
        resumo: "Em dezembro de 1978, a Operação Soberania colocou frotas de guerra frente a frente por Picton, Lennox e Nueva. Saiba como o Papa evitou o conflito."
    },
    {
        titulo: "Como as Maiores Reservas de Níquel do Planeta Transformaram a Indonésia no Pivô Global dos Carros Elétricos?",
        categoria: "Geopolítica",
        data: "23 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sulawesi%2C_Indonesia_%28PIA26007%29.jpg",
        link: "geoeconomia-da-indonesia/",
        resumo: "Com 21 milhões de toneladas de níquel em Sulawesi e Molucas e a proibição de exportar minério bruto, descubra a revolução geoeconômica de Jacarta."
    },
    {
        titulo: "Por Que a Ilha de Gotland Transforma a Suécia na Chave de Controle Militar de Todo o Mar Báltico?",
        categoria: "Geopolítica",
        data: "23 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/GotlandFromSpace.jpg",
        link: "geopolitica-da-suecia/",
        resumo: "A 90 km do litoral sueco e 130 km de Kaliningrado, veja por que a Ilha de Gotland é chamada de porta-aviões inafundável e o pivô da OTAN no Báltico."
    },
    {
        titulo: "Como a Prússia, as Guerras Mundiais e a Linha Oder-Neisse Desenharam as Fronteiras da Alemanha Moderna?",
        categoria: "História",
        data: "23 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Brandenburger_Tor_nachts.jpg",
        link: "historia-da-alemanha/",
        resumo: "Do Sacro Império e ascensão prussiana à Conferência de Potsdam, divisão pelo Muro de Berlim e reunificação de 1990: entenda a evolução territorial alemã."
    },
    {
        titulo: "Quais São os Dez Maiores Rios do Planeta Que Alimentam Civilizações e Redesenham Fronteiras?",
        categoria: "Rankings",
        data: "21 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Beautiful_nature_along_Nile_River_01.jpg",
        link: "ranking-maiores-rios-do-mundo/",
        resumo: "Do duelo entre Amazonas e Nilo ao Yangtzé, Mississipi, Mekong e Amur, descubra os 10 maiores rios da Terra em extensão, vazão e poder geopolítico."
    },
    {
        titulo: "Quais São as Dez Capitais Mais Altas do Planeta Onde o Ar Rarefeito Molda a Vida Humana?",
        categoria: "Rankings",
        data: "21 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Vista_del_centro_de_La_Paz.jpg",
        link: "ranking-capitais-mais-altas-do-mundo/",
        resumo: "De La Paz e Quito a Sucre, Bogotá e Adis Abeba, compare dez capitais e sedes de governo em altitude — com os critérios e as diferenças entre listas."
    },
    {
        titulo: "Por Que a Transnístria é o País Fantasma Que Ainda Vive na União Soviética Dentro da Europa?",
        categoria: "Curiosidades",
        data: "21 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Moldova_Transnistria_Locator.png",
        link: "transnistria-pais-fantasma/",
        resumo: "Espremida entre o Rio Dniester na Moldávia e a Ucrânia, conheça a faixa separatista com foice e martelo na bandeira e o arsenal de Cobasna."
    },
    {
        titulo: "Por Que a Fronteira Entre o Haiti e a República Dominicana Pode Ser Vista do Espaço?",
        categoria: "Fronteiras",
        data: "21 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/03/ISS027-E-17333_-_View_of_Dominican_Republic.jpg",
        link: "ilha-de-hispaniola-fronteira/",
        resumo: "Na Ilha de Hispaniola, os tratados de Ryswick e Aranjuez e o contraste de cobertura vegetal ajudam a explicar uma fronteira visível em imagens de satélite."
    },
    {
        titulo: "Por Que as Colinas de Golã São o Planalto de Água e Radar Mais Disputado do Oriente Médio?",
        categoria: "Fronteiras",
        data: "21 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Golan_Heights_Map-SVG.svg/1280px-Golan_Heights_Map-SVG.svg.png",
        link: "colinas-de-gola-fronteira/",
        resumo: "Da Linha de 1967 à zona de separação da ONU, entenda a importância do Golã e as mudanças ocorridas após dezembro de 2024."
    },
    {
        titulo: "Por Que o Estreito de Gibraltar Separa a Europa da África Por Apenas 14 Km de Mar?",
        categoria: "Geopolítica",
        data: "21 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/STS059-238-074_Strait_of_Gibraltar.jpg",
        link: "estreito-de-gibraltar-chokepoint/",
        resumo: "Do tráfego marítimo às rotas de contêineres, conheça o estreito entre Europa e África e os estudos ainda preliminares para uma ligação ferroviária."
    },
    {
        titulo: "Por Que o Corredor de Siliguri é o Gargalo de 22 Km Que Pode Cortar a Índia ao Meio?",
        categoria: "Fronteiras",
        data: "21 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Chickensneckindia.jpg",
        link: "corredor-de-siliguri-india/",
        resumo: "O corredor liga os oito estados do Nordeste ao restante da Índia; o Censo de 2011 registrou 45,8 milhões de habitantes na região."
    },
    {
        titulo: "Como as Areias Betuminosas de Alberta e o Urânio Transformaram o Canadá em Superpotência de Recursos?",
        categoria: "Geopolítica",
        data: "21 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Athabasca_Oil_Sands_map.png",
        link: "geoeconomia-do-canada/",
        resumo: "Com 163 bilhões de barris em reservas provadas de petróleo, 1,1 bilhão de toneladas de potássio e urânio de alto teor, entenda a geoeconomia do Canadá."
    },
    {
        titulo: "Como a posição insular do Japão condiciona o acesso naval ao Pacífico?",
        categoria: "Geopolítica",
        data: "21 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/30/First_island_chain_perimeter_%28marked_in_red%29.jpg",
        link: "geopolitica-do-japao/",
        resumo: "Das Ilhas Curilas a Okinawa, veja como a posição insular do Japão influencia as rotas entre o Mar da China Oriental e o Pacífico."
    },
    {
        titulo: "Como a Linha Radcliffe Retalhou o Império Britânico e Desenhou as Fronteiras da Índia Moderna?",
        categoria: "História",
        data: "21 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Brit_IndianEmpireReligions3.jpg",
        link: "historia-da-india/",
        resumo: "Da civilização do Vale do Indo à Partição de 1947 e à anexação de 565 Estados Principescos, entenda como nasceu o mapa da nação mais populosa do planeta."
    },
    {
        titulo: "Quais São as Dez Nações Mais Jovens do Planeta Que Ganharam Assento na ONU?",
        categoria: "Rankings",
        data: "20 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/SouthSudanOMC.png",
        link: "ranking-paises-mais-jovens-do-mundo/",
        resumo: "Do Sudão do Sul em 2011 a Kosovo, Montenegro, Timor-Leste e o colapso soviético, veja os 10 países mais novos do mundo que redesenharam as fronteiras globais."
    },
    {
        titulo: "Quais São as Dez Ilhas Mais Povoadas do Planeta Onde Centenas de Milhões Vivem Cercados Pelo Mar?",
        categoria: "Rankings",
        data: "20 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Java_Topography.png",
        link: "ranking-ilhas-mais-povoadas-do-mundo/",
        resumo: "De Java com 156 milhões de pessoas a Honshu e Grã-Bretanha, veja as 10 ilhas mais populosas do globo e como a geografia insular condiciona nações inteiras."
    },
    {
        titulo: "Por Que a Ponte do Estreito de Kerch é o Ponto Mais Vigiado da Guerra no Mar Negro?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Kerch_Strait%2C_Ukraine%2C_Russia%2C_near_natural_colors_satellite_image%2C_LandSat-5%2C_2011-08-30.jpg",
        link: "estreito-de-kerch-crimeia/",
        resumo: "Com 19 km de extensão, a megaestrutura construída por Putin conecta a Rússia à Crimeia, controlando a entrada do Mar de Azov como a maior artéria de guerra."
    },
    {
        titulo: "Como o Tratado da Antártida Congelou as Disputas Territoriais de Sete Países no Fim do Mundo?",
        categoria: "Fronteiras",
        data: "20 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Antarctica%2C_territorial_claims.svg/1280px-Antarctica%2C_territorial_claims.svg.png",
        link: "tratado-da-antartida-territorios/",
        resumo: "Assinado em 1959 no auge da Guerra Fria, o tratado desmilitarizou 14 milhões de km², baniu armas nucleares e congelou pretensões territoriais soberanas."
    },
    {
        titulo: "Como o Eurotúnel Quebrou Oito Mil Anos de Isolamento Insular da Grã-Bretanha?",
        categoria: "Curiosidades",
        data: "20 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Chargement_voiture_Eurotunnel.jpg",
        link: "eurotunel-canal-da-mancha/",
        resumo: "Com 50,4 km de trilhos sob o mar, o túnel ligou Folkestone a Coquelles em 1994, quebrando o fosso geológico que separava a Grã-Bretanha da Europa desde a Era do Gelo."
    },
    {
        titulo: "Por Que a Menor Ilha Habitada Dividida Entre Dois Países Fica no Caribe?",
        categoria: "Fronteiras",
        data: "20 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saint_Martin_map.svg/1280px-Saint_Martin_map.svg.png",
        link: "ilha-de-sao-martinho-fronteira/",
        resumo: "Com apenas 87 km², a ilha caribenha abriga a única fronteira terrestre entre França e Países Baixos, aberta e pacífica desde o Tratado de Concórdia de 1648."
    },
    {
        titulo: "Por Que o Estreito de Dardanelos Foi Palco da Batalha Mais Sangrenta Pelo Controle dos Mares?",
        categoria: "Curiosidades",
        data: "20 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Dardanelles_map2.png",
        link: "estreito-de-dardanelos-chokepoint/",
        resumo: "Com 61 km de comprimento e apenas 1,2 km de largura em Çanakkale, Dardanelos é a porta de saída do Mar Negro regida pelo Tratado de Montreux."
    },
    {
        titulo: "Como o Chile Monopolizou as Maiores Reservas de Cobre e Lítio da Terra no Deserto de Atacama?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Copper_mines_in_Chile_-_3.PNG",
        link: "geoeconomia-do-chile/",
        resumo: "Com a maior mina de cobre do mundo e os salares mais secos de lítio em Atacama, o Chile domina as matérias-primas essenciais da eletrificação global."
    },
    {
        titulo: "Por Que Singapura é Uma Ilha Sem Água Doce Nem Recursos Que Domina o Comércio Mundial?",
        categoria: "Geopolítica",
        data: "20 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/07/CIA_World_Factbook_map_of_Singapore_%28English%29.png",
        link: "geopolitica-de-singapura/",
        resumo: "Expulsa da Malásia em 1965 sem petróleo ou água potável, a microilha transformou sua posição no Estreito de Malaca no maior entreposto marítimo da Terra."
    },
    {
        titulo: "Como o Egito Manteve as Mesmas Fronteiras Naturais Por Cinco Mil Anos de História?",
        categoria: "História",
        data: "20 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Egypt_relief_location_map.jpg",
        link: "historia-do-egito/",
        resumo: "Da unificação pelo faraó Menés em 3100 a.C. ao Canal de Suez e à era moderna, entenda como o Nilo e os desertos preservaram a nação mais antiga do planeta."
    },
    {
        titulo: "Por Que o Lago de Constança é o Único Lugar da Europa Onde Três Países Não Concordam Onde Fica a Fronteira?",
        categoria: "Curiosidades",
        data: "19 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Lake_Constance_Edited.png",
        link: "lago-de-constanca-fronteira-triplice/",
        resumo: "Entre a Alemanha, a Suíça e a Áustria, as águas de 536 km² do Bodensee não possuem tratado formal de limites: cada nação aplica sua própria teoria jurídica sem disparar um único tiro."
    },
    {
        titulo: "Por Que o Descongelamento da Passagem Noroeste Pode Reduzir a Rota da Ásia para a Europa em 7.000 km?",
        categoria: "Geopolítica",
        data: "19 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/2007_Envisat_mosaic_of_Arctic_Ocean_ESA210015.jpg",
        link: "passagem-noroeste-artico-degelo/",
        resumo: "O recuo histórico da calota polar ártica está abrindo o mítico labirinto de ilhas do norte canadense, acirrando uma disputa de soberania naval entre Ottawa, Washington e Pequim."
    },
    {
        titulo: "Quais São os Dez Países Mais Densamente Povoados do Planeta Onde Cada Metro Quadrado é Disputado?",
        categoria: "Rankings",
        data: "19 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Tejgaon_Commercial_Area.jpg",
        link: "ranking-maiores-densidades-demograficas/",
        resumo: "De Mônaco e Cingapura à pressão colossal de 170 milhões de pessoas em Bangladesh: conheça o ranking oficial das nações onde o espaço físico é o recurso mais escasso da civilização."
    },
    {
        titulo: "Quais São os Dez Países Com os Maiores Litorais do Mundo e o Paradoxo da Linha de Costa?",
        categoria: "Rankings",
        data: "19 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/1280px-Geirangerfjord_.jpg",
        link: "ranking-maiores-litorais-do-mundo/",
        resumo: "Do Canadá com seus 202.080 km de costas ao labirinto de fiordes da Noruega e os arquipélagos da Indonésia: descubra o ranking das maiores costas marítimas e o enigma matemático fractal."
    },
    {
        titulo: "Como a Confluência dos Rios Iguaçu e Paraná Criou a Tríplice Fronteira Mais Movimentada da América do Sul?",
        categoria: "Curiosidades",
        data: "19 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Ponte_da_amizade_-_Friendship_bridge-_Paraguay_%289623754507%29.jpg",
        link: "triplice-fronteira-parana-iguacu/",
        resumo: "Onde as águas do Rio Iguaçu encontram o Rio Paraná, Brasil, Argentina e Paraguai dividem um triângulo geográfico de hidrelétricas gigantes, pontes internacionais e um fluxo comercial de bilhões."
    },
    {
        titulo: "Por Que a Linha Durand Traçada Pelo Império Britânico Divide Tribos e Incendeia a Fronteira Afegã?",
        categoria: "História",
        data: "19 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Afghanistan-Pakistan_border.png",
        link: "linha-durand-fronteira-afeganistao-paquistao/",
        resumo: "Traçada a caneta em 1893 por um diplomata britânico, a fronteira de 2.670 km cortou ao meio a nação pashtun, nunca foi aceita por Cabul e transformou o Passo de Khyber no epicentro de insurgências."
    },
    {
        titulo: "Por Que o Estreito de Magalhães Foi a Rota Mais Secreta e Lucrativa dos Impérios Coloniais?",
        categoria: "Curiosidades",
        data: "19 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/StraitOfMagellan.jpg",
        link: "estreito-de-magalhaes-patagonia/",
        resumo: "Com 565 km entre a Patagônia e a Terra do Fogo, o canal natural desbravado em 1520 quebrou o monopólio das rotas orientais, abrigou batalhas navais e moldou a soberania do Chile no extremo sul."
    },
    {
        titulo: "Como a Austrália Se Tornou a Maior Mina do Planeta e o Principal Fornecedor de Ferro da Ásia?",
        categoria: "Geopolítica",
        data: "19 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Super_Pit_Gold_Mine%2C_Kalgoorlie%2C_WA%2C_2023%2C_11.jpg/1280px-Super_Pit_Gold_Mine%2C_Kalgoorlie%2C_WA%2C_2023%2C_11.jpg",
        link: "geoeconomia-da-australia/",
        resumo: "Das minas colossais de Pilbara aos depósitos de lítio de Greenbushes: descubra como a ilha-continente sustenta a indústria pesada da China enquanto navega tensões estratégicas no Indo-Pacífico."
    },
    {
        titulo: "Por Que a Finlândia Abandonou Décadas de Neutralidade Para Erguer Uma Fortaleza na Fronteira Russa?",
        categoria: "Geopolítica",
        data: "19 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Easternmost_finland.jpg",
        link: "geopolitica-da-finlandia/",
        resumo: "Com 1.340 km de divisa direta com a Rússia e a memória da Guerra de Inverno, Helsinque abandonou a neutralidade histórica, entrou para a OTAN e ergueu uma das maiores redes de bunkers da Europa."
    },
    {
        titulo: "Como o Japão Se Manteve Isolado Por Dois Séculos e Forjou Suas Fronteiras no Pacífico?",
        categoria: "História",
        data: "19 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Satellite_View_of_Japan_1999.jpg",
        link: "historia-do-japao/",
        resumo: "Do edito de isolamento Sakoku de 1635 aos 'Navios Negros' do comodoro Perry e a expansão no Pacífico: conheça a saga territorial que transformou o arquipélago nipônico em potência global."
    },
    {
        titulo: "Por Que a Linha do Equador Corta o Brasil no Meio e o Marco Zero Fica em Macapá?",
        categoria: "Curiosidades",
        data: "18 Out 2026 - 10:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/2023-03-20_Marco_Zero_do_Equador_05.jpg",
        link: "marco-zero-equador-macapa/",
        resumo: "Macapá é a única capital estadual brasileira cortada exatamente pela latitude 0° 0' 0\". Conheça o monumento do Marco Zero, o fenômeno do equinócio e a verdade sobre o efeito Coriolis."
    },
    {
        titulo: "Como a Queda de Constantinopla em 1453 Forçou a Europa a Redesenhar os Mapas do Mundo?",
        categoria: "História",
        data: "18 Out 2026 - 10:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Le_si%C3%A8ge_de_Constantinople_%281453%29_by_Jean_Le_Tavernier_after_1455.jpg",
        link: "queda-de-constantinopla-rotas/",
        resumo: "Em 29 de maio de 1453, os canhões do sultão Mehmed II derrubaram as muralhas bizantinas, cortaram a Rota da Seda e impeliram os europeus a desbravar os oceanos desconhecidos."
    },
    {
        titulo: "Como o Tratado de Tordesilhas Dividiu o Planeta Entre Portugal e Espanha Antes de Sabermos o Tamanho da Terra?",
        categoria: "História",
        data: "18 Out 2026 - 10:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/El_reparto_del_espacio_terrestre_en_Tordesillas_y_Zaragoza%2C_1494-1529.jpg",
        link: "tratado-de-tordesilhas-fronteiras/",
        resumo: "Assinado em 1494 na pequena vila espanhola de Tordesilhas, o pacto traçou um meridiano imaginário que repartiu o Novo Mundo e forjou o mapa colonial da América Latina."
    },
    {
        titulo: "Quais São os Dez Maiores Países Sem Acesso ao Mar do Mundo e Quanto Custa o Isolamento?",
        categoria: "Rankings",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/View_from_Bayterek_tower.jpg/1280px-View_from_Bayterek_tower.jpg",
        link: "ranking-maiores-paises-sem-mar/",
        resumo: "Do gigante Cazaquistão com seus 2,7 milhões de km² à Mongólia e Bolívia: descubra o ranking das nações encravadas e o imposto invisível que pagam sobre o comércio global."
    },

    {
        titulo: "Quais São os Dez Menores Países Soberanos da Terra e Como Suas Fronteiras Sobrevivem?",
        categoria: "Rankings",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Collier%27s_1921_Vol_9_Frontispiece_--_Vatican.jpg/1280px-Collier%27s_1921_Vol_9_Frontispiece_--_Vatican.jpg",
        link: "ranking-menores-paises-do-mundo/",
        resumo: "Do Vaticano com seus 0,49 km² a Mônaco, Nauru e San Marino: conheça o ranking oficial dos microestados que cabem dentro de bairros e fazendas mas possuem voto na ONU."
    },
    {
        titulo: "Como o Meridiano de Greenwich Venceu Paris e Jerusalém Para Dividir os Fusos do Planeta?",
        categoria: "Cartografia",
        data: "18 Out 2026 - 10:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Greenwich_observatory_laser.jpg",
        link: "meridiano-de-greenwich-historia/",
        resumo: "Em 1884, delegados de 25 nações reuniram-se em Washington para eleger a Linha de Longitude Zero. Entenda a geopolítica naval britânica que derrotou o Meridiano de Paris."
    },
    {
        titulo: "Por Que Todo Mapa Mundi Plano Mente e Qual Projeção é a Mais Precisa da Terra?",
        categoria: "Cartografia",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Gall%E2%80%93Peters_projection_SW.jpg/1280px-Gall%E2%80%93Peters_projection_SW.jpg",
        link: "distorcao-projecoes-cartograficas/",
        resumo: "Do Teorema Egregium de Gauss às projeções de Mercator, Gall-Peters, Robinson e AuthaGraph: entenda a impossibilidade matemática de achatar uma esfera sem distorcer formas ou áreas."
    },
    {
        titulo: "Por Que Brasília Foi Desenhada em Formato de Cruz e Quais São os Limites do Plano Piloto?",
        categoria: "Urbanismo",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/BSB_02_2006_Esplanada_dos_Ministerios_02_2006_39.JPG/1280px-BSB_02_2006_Esplanada_dos_Ministerios_02_2006_39.JPG",
        link: "brasilia-plano-piloto-urbanismo/",
        resumo: "Projetada em 1957 por Lúcio Costa e Oscar Niemeyer, a capital federal modernista aboliu as esquinas, inventou as superquadras e enfrenta hoje o dilema da segregação metropolitana."
    },
    {
        titulo: "Como Barcelona Inventou os Superquarteirões para Tirar o Domínio dos Carros na Cidade?",
        categoria: "Urbanismo",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Cerda-quadricula_eixample_compara.jpg/1280px-Cerda-quadricula_eixample_compara.jpg",
        link: "barcelona-superquarteiroes-urbanismo/",
        resumo: "Desenhada por Ildefons Cerdà em 1859, a malha ortogonal do Eixample virou o laboratório das 'Superilles', devolvendo 70% das ruas aos pedestres, crianças e comércio local."
    },
    {
        titulo: "Por Que Tóquio é a Maior Metrópole do Planeta Sem Sofrer Com Engarrafamentos Gigantescos?",
        categoria: "Urbanismo",
        data: "18 Out 2026 - 10:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Shibuya_and_Shinjuku_from_Yebisu_Garden_Place_Tower%2C_Ebisu%2C_Tokyo%2C_Japan%2C_2024_May.jpg/1280px-Shibuya_and_Shinjuku_from_Yebisu_Garden_Place_Tower%2C_Ebisu%2C_Tokyo%2C_Japan%2C_2024_May.jpg",
        link: "toquio-urbanismo-ferroviario/",
        resumo: "Com 37 milhões de habitantes na Grande Tóquio, a capital japonesa desafia as leis do tráfego urbano através do modelo ferroviário integrado e do zoneamento unificado."
    },
    {
        titulo: "Quais São as Dez Maiores Fronteiras Terrestres Contínuas do Planeta Terra?",
        categoria: "Rankings",
        data: "18 Out 2026 - 22:30",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg/1280px-Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg",
        link: "ranking-maiores-fronteiras-do-mundo/",
        resumo: "Dos 8.891 km entre Estados Unidos e Canadá aos desertos gelados da Eurásia e florestas sul-americanas, conheça as maiores linhas divisórias do globo e seus segredos."
    },
    {
        titulo: "Por Que os Estados Unidos Estão Financiando uma Ferrovia de Bilhões no Porto de Lobito?",
        categoria: "Geopolítica",
        data: "18 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Benguela_Bahn.jpg",
        link: "corredor-de-lobito-ferrovia/",
        resumo: "Ligando as ricas minas de cobre e cobalto do Congo e da Zâmbia ao Oceano Atlântico em Angola, a Ferrovia de Benguela é o trunfo do Ocidente contra a hegemonia chinesa."
    },
    {
        titulo: "Por Que o Rio Danúbio Cruza Dez Países e Quatro Capitais Como a Maior Artéria da Europa?",
        categoria: "Curiosidades",
        data: "18 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg/1280px-View_from_Gell%C3%A9rt_Hill_to_the_Danube%2C_Hungary_-_Budapest_%2828493220635%29.jpg",
        link: "rio-danubio-arteria-europa/",
        resumo: "Da Floresta Negra na Alemanha ao Delta do Mar Negro na Romênia, o Danúbio é a hidrovia internacional mais vital da Europa, cruzando 2.850 km e quatro capitais nacionais."
    },
    {
        titulo: "Por Que o Enclave de Cabinda Foi Separado de Angola Pela Saída para o Mar do Congo?",
        categoria: "História",
        data: "18 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Angola-Cabinda_border_map.png",
        link: "enclave-de-cabinda-angola/",
        resumo: "Separado do território angolano por uma faixa costeira de 60 km da RDC, o enclave de Cabinda concentra mais de metade de todo o petróleo de Angola sob tensões separatistas."
    },
    {
        titulo: "Por Que o Canal de Corinto é Uma Trincheira na Rocha Onde Navios Quase Tocam as Paredes?",
        categoria: "Curiosidades",
        data: "18 Out 2026 - 16:15",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Korinth_Canal_N_2019.jpg/1280px-Korinth_Canal_N_2019.jpg",
        link: "canal-de-corinto-grecia/",
        resumo: "Cortado através de 6,3 km de calcário com paredes verticais de quase 90 metros e apenas 24,6 metros de largura, o canal grego transformou o Peloponeso em uma ilha."
    },
    {
        titulo: "Por Que a Namíbia Tem um Dedo de Terra de 450 km Que Corta Quatro Países na África?",
        categoria: "História",
        data: "18 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Dito_di_Caprivi_-_mappa.svg/1280px-Dito_di_Caprivi_-_mappa.svg.png",
        link: "faixa-de-caprivi-namibia/",
        resumo: "Em 1890, a Alemanha imperial negociou a Faixa de Caprivi para tentar navegar até o Oceano Índico pelo Rio Zambeze, sem saber que as Cataratas de Vitória bloqueavam o caminho."
    },
    {
        titulo: "Por Que a Passagem de Drake é a Rota Marítima Mais Perigosa e Temida do Planeta?",
        categoria: "Curiosidades",
        data: "18 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Drake_passage_en.png",
        link: "passagem-de-drake-maritima/",
        resumo: "Entre o Cabo Horn e a Península Antártica, ventos uivantes e ondas de até 25 metros colidem no gargalo de 800 km onde as águas do Pacífico e do Atlântico se comprimem."
    },
    {
        titulo: "Como o Congo Monopolizou 70% do Cobalto Mundial Sem Conseguir Enriquecer Seu Povo?",
        categoria: "Geopolítica",
        data: "18 Out 2026 - 11:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Artisanal_cobalt_miners_in_the_Democratic_Republic_of_Congo.jpg/1280px-Artisanal_cobalt_miners_in_the_Democratic_Republic_of_Congo.jpg",
        link: "geoeconomia-da-rd-congo/",
        resumo: "No coração da África, o cinturão mineral de Katanga detém as maiores reservas de cobalto e coltan da Terra, vitais para baterias e celulares em meio à maldição dos recursos."
    },
    {
        titulo: "Por Que a Geografia Montanhosa Faz do Irã Uma Fortaleza Quase Impossível de Invadir?",
        categoria: "Geopolítica",
        data: "18 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/94/IranOMC.png",
        link: "geopolitica-do-ira/",
        resumo: "Cercado pelo muro dos Montes Zagros e desertos inóspitos de sal, o platô iraniano controla o Estreito de Ormuz e projeta poder assimétrico no Oriente Médio."
    },
    {
        titulo: "Como o Vietnã Resistiu a Três Superpotências e Forjou Suas Fronteiras em Mil Anos de Guerra?",
        categoria: "História",
        data: "18 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Vietnam_Topography.png",
        link: "historia-do-vietna/",
        resumo: "De mil anos de dominação chinesa à partilha no Paralelo 17 e a vitória sobre franceses e americanos, entenda como o Vietnã forjou seu território em forma de 'S'."
    },
    {
        titulo: "Por Que um Farol Errado Criou a Fronteira em Zigue-Zague Mais Estranha da Europa na Ilha de Märket?",
        categoria: "Curiosidades",
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
        categoria: "Rankings",
        data: "17 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mongolian_Steppes_%286228096139%29.jpg/1280px-Mongolian_Steppes_%286228096139%29.jpg",
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
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/JADEQUEIROZ_PRAIA_DO_FUTURO_FORTALEZA_CE_%2840209530245%29.jpg/1280px-JADEQUEIROZ_PRAIA_DO_FUTURO_FORTALEZA_CE_%2840209530245%29.jpg",
        link: "cabos-submarinos-fortaleza/",
        resumo: "A Praia do Futuro, em Fortaleza, é o maior entroncamento digital da América Latina, conectando o continente aos EUA, Europa e África sob ameaça de apagão."
    },
    {
        titulo: "Como o Couto Misto Sobreviveu 700 Anos Como um Microestado Sem Rei Entre Portugal e Espanha?",
        categoria: "História",
        data: "17 Out 2026 - 14:30",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Couto_Misto.JPG/1280px-Couto_Misto.JPG",
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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg/1280px-Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg",
        link: "geoeconomia-do-cazaquistao/",
        resumo: "Com 43% da produção mundial de urânio e posição chave no Corredor Médio, a gigante das estepes navega com maestria entre a Rússia, a China e o Ocidente."
    },
    {
        titulo: "Por Que a Polônia Está Se Armando para Ter o Maior Exército Terrestre da Europa?",
        categoria: "Geopolítica",
        data: "17 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Suwalki_Gap-de-cropped.png",
        link: "geopolitica-da-polonia/",
        resumo: "Na planície indefesa entre a Alemanha e a Rússia, Varsóvia investe mais de 4% do PIB em defesa para se tornar o escudo inexpugnável do flanco leste da OTAN."
    },
    {
        titulo: "Como o México Perdeu Mais de Metade de Seu Território para os Estados Unidos?",
        categoria: "História",
        data: "17 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mexican_Cession.png/1280px-Mexican_Cession.png",
        link: "historia-do-mexico/",
        resumo: "Do esplendor de Tenochtitlán à perda de 2 milhões de km² no Tratado de Guadalupe Hidalgo em 1848, entenda como as fronteiras mexicanas foram forjadas."
    },
    {
        titulo: "Vennbahn: A Linha de Trem Belga Que Isolou 5 Pedaços de Território Alemão",
        categoria: "Curiosidades",
        data: "16 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Vennbahn_Karte.svg/1280px-Vennbahn_Karte.svg.png",
        link: "vennbahn-enclaves-belgas/",
        resumo: "O Tratado de Versalhes entregou o leito de uma ferrovia à Bélgica, gerando enclaves alemães separados por poucos metros de trilhos na Europa Central."
    },
    {
        titulo: "O Menor Gigante Geopolítico: Por Que as Superpotências Disputam o Djibuti?",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bab-el-Mandeb_Strait%2C_Africa-Arabia_%28ASTER%29.jpg/1280px-Bab-el-Mandeb_Strait%2C_Africa-Arabia_%28ASTER%29.jpg",
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
        categoria: "Rankings",
        data: "16 Out 2026 - 18:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1280px-Moraine_Lake_17092005.jpg",
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
        categoria: "Cartografia",
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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Troll_A_Platform.jpg/1280px-Troll_A_Platform.jpg",
        link: "geoeconomia-da-noruega/",
        resumo: "Ao descobrir óleo no Mar do Norte em 1969, Oslo evitou a 'doença holandesa' e ergueu um fundo de US$ 1,6 trilhão que detém 1,5% de todas as ações do planeta."
    },
    {
        titulo: "A Geopolítica da Turquia: A Sentinela dos Estreitos Entre o Oriente e o Ocidente",
        categoria: "Geopolítica",
        data: "16 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_Bosphorus_Strait%2C_Turkey_ESA418914.jpg/1280px-The_Bosphorus_Strait%2C_Turkey_ESA418914.jpg",
        link: "geopolitica-da-turquia/",
        resumo: "Controlando o Bósforo e os Dardanelos pelo Tratado de Montreux, Ancara opera como o pivô eurasiático indispensável entre a OTAN, o Cáucaso e o Oriente Médio."
    },
    {
        titulo: "A História Completa da Colômbia: De Eldorado e Grã-Colômbia ao País dos Três Andes",
        categoria: "História",
        data: "16 Out 2026 - 07:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gran_Colombia_in_1824.svg/1280px-Gran_Colombia_in_1824.svg.png",
        link: "historia-da-colombia/",
        resumo: "Conheça a trajetória épica da Colômbia: a lenda de Eldorado, as guerras de Bolívar, a perda do Panamá e a geografia montanhosa que moldou sua identidade."
    },
    {
        titulo: "A Fronteira Mais Reta do Mundo: Os 1.000 km do Meridiano 25 Entre Egito e Líbia",
        categoria: "Cartografia",
        data: "15 Out 2026 - 22:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Egypt_Libya_Border.jpg/1280px-Egypt_Libya_Border.jpg",
        link: "fronteira-egito-libia-meridiano-25/",
        resumo: "Desenhada com régua em conferências coloniais entre britânicos e italianos, a linha do Meridiano 25 rasga o Saara sem uma curva por mil quilômetros."
    },
    {
        titulo: "O Lago Tanganica: O Segundo Mais Fundo do Mundo Onde 4 Países Dividem uma Fenda",
        categoria: "Rankings",
        data: "15 Out 2026 - 21:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Lake_Tanganyika.jpg/1280px-Lake_Tanganyika.jpg",
        link: "lago-tanganica-fronteiras/",
        resumo: "Com 1.470 metros de profundidade no Rift Africano, o Lago Tanganica divide 4 nações e guarda 18% da água doce de superfície do planeta."
    },
    {
        titulo: "O Enclave de Llívia: A Ilha de Solo Espanhol Cercada pela França nos Pirineus",
        categoria: "Curiosidades",
        data: "15 Out 2026 - 19:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Llivia_aerial_view.jpg/1280px-Llivia_aerial_view.jpg",
        link: "llivia-enclave-espanhol/",
        resumo: "No Tratado dos Pirineus de 1659, a Espanha cedeu 33 vilarejos à França. Llívia foi mantida por Madri por ser classificada como cidade e virou um enclave."
    },
    {
        titulo: "A Represa das Três Gargantas: Como a Megaconstrução da China Desacelerou a Terra",
        categoria: "Curiosidades",
        data: "15 Out 2026 - 18:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/ThreeGorgesDam-China2009.jpg/1280px-ThreeGorgesDam-China2009.jpg",
        link: "represa-tres-gargantas-impacto/",
        resumo: "Com 39 trilhões de quilos de água represados no rio Yangtze, a megaconstrução chinesa deslocou a massa planetária e alongou o dia terrestre."
    },
    {
        titulo: "Por que a Bolívia Mantém uma Marinha de Guerra Sem Ter Acesso ao Mar?",
        categoria: "Curiosidades",
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
        categoria: "História",
        data: "15 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Longyearbyen_2011.jpg/1280px-Longyearbyen_2011.jpg",
        link: "svalbard-tratado-artico/",
        resumo: "Sob o Tratado de 1920, cidadãos de mais de 40 países podem morar nas ilhas norueguesas sem visto, além do território abrigar o Cofre Global de Sementes."
    },
    {
        titulo: "O Corredor de Wakhan: O Dedo de 350 km do Afeganistão que Toca a China",
        categoria: "História",
        data: "15 Out 2026 - 11:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Wakhan_corridor.jpg/1280px-Wakhan_corridor.jpg",
        link: "corredor-de-wakhan/",
        resumo: "Criado no Grande Jogo como zona tampão entre impérios britânico e russo, esse corredor montanhoso tem o maior salto de fuso horário do mundo (+3h30)."
    },
    {
        titulo: "A Linha Internacional de Data e Kiribati: O País Que 'Pulou' um Dia Inteiro",
        categoria: "Cartografia",
        data: "15 Out 2026 - 09:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/International_Date_Line.png/1280px-International_Date_Line.png",
        link: "kiribati-fuso-horario/",
        resumo: "Para não ter o território dividido em dias diferentes pela Linha de Data, Kiribati fez uma curva de 3.000 km no fuso em 1995 e virou o primeiro a ver o sol."
    },
    {
        titulo: "Gibraltar: Por que 6 km² de Rocha no Sul da Espanha Pertencem ao Reino Unido?",
        categoria: "História",
        data: "15 Out 2026 - 07:30",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Gibraltar_View_of_the_Rock_from_La_Linea.jpg/1280px-Gibraltar_View_of_the_Rock_from_La_Linea.jpg",
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
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Zangezur_corridor_red_arrow.png",
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
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/2020-04-23_Seaman_Xi_Chan_stands_lookout_on_the_flight_deck_as_USS_Barry_%28DDG_52%29_transits_the_Taiwan_Strait.jpg/1280px-2020-04-23_Seaman_Xi_Chan_stands_lookout_on_the_flight_deck_as_USS_Barry_%28DDG_52%29_transits_the_Taiwan_Strait.jpg",
        link: "estreito-de-taiwan/",
        resumo: "Separando Taiwan da China continental por 160 km, o estreito concentra a produção dos chips mais avançados do mundo e a maior frota naval do planeta."
    },
    {
        titulo: "Por que o Triângulo do Lítio Virou o Maior Alvo Geopolítico dos Andes?",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 16:00",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Salar_de_Atacama%2C_Chile.jpg/1280px-Salar_de_Atacama%2C_Chile.jpg",
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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yamal_icebreaker_%282225309%29.jpg/1280px-Yamal_icebreaker_%282225309%29.jpg",
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
        categoria: "Urbanismo",
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
        categoria: "Curiosidades",
        data: "11 Out 2026 - 21:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Buesingen_am_Hochrhein_aerial.jpg/1280px-Buesingen_am_Hochrhein_aerial.jpg",
        link: "busingen-enclave-alemao/",
        resumo: "Cercada pelo cantão suíço de Schaffhausen, Büsingen tem dois códigos postais, polícia mista e votou 96% para se juntar à Suíça em 1918."
    },
    {
        titulo: "Por que a Indonésia Está Abandonando Jacarta para Construir uma Capital na Selva?",
        categoria: "Urbanismo",
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
        categoria: "História",
        data: "11 Out 2026 - 16:15",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aral_Sea_1989-2014.jpg/1280px-Aral_Sea_1989-2014.jpg",
        link: "desaparecimento-mar-de-aral/",
        resumo: "Em menos de quatro décadas, o desvio soviético dos rios encolheu um mar interior de 68.000 km² em 90%, deixando navios enferrujados na areia."
    },
    {
        titulo: "Campione d'Italia: O Enclave Italiano Onde Quase Tudo Funciona na Suíça",
        categoria: "Curiosidades",
        data: "11 Out 2026 - 14:30",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Campione_d%27Italia_view_from_Lugano.jpg/1280px-Campione_d%27Italia_view_from_Lugano.jpg",
        link: "campione-d-italia/",
        resumo: "À beira do Lago de Lugano, uma cidade soberana italiana usa franco suíço, rede telefônica suíça e placas do cantão de Ticino."
    },
    {
        titulo: "Ceuta e Melilla: Os Dois Pedaços da Europa Cravados no Norte da África",
        categoria: "História",
        data: "11 Out 2026 - 12:45",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Plazas_de_soberan%C3%ADa_%28Espa%C3%B1a%29.svg/1280px-Plazas_de_soberan%C3%ADa_%28Espa%C3%B1a%29.svg.png",
        link: "ceuta-e-melilla/",
        resumo: "Cercadas por muralhas triplas e pelo território do Marrocos, Ceuta e Melilla são as únicas fronteiras terrestres diretas da UE na África."
    },
    {
        titulo: "Cooch Behar: Onde Existiu o Único Enclave de 3ª Ordem da História Humana",
        categoria: "História",
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
        categoria: "Curiosidades",
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
        categoria: "Curiosidades",
        data: "10 Out 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Baarle-Hertog_and_Baarle-Nassau_border.jpg/1280px-Baarle-Hertog_and_Baarle-Nassau_border.jpg",
        link: "baarle-fronteira/",
        resumo: "Com 22 enclaves belgas e 8 contra-enclaves holandeses, Baarle é o quebra-cabeça cartográfico mais surreal do planeta. Entenda a Regra da Porta da Frente."
    },
    {
        titulo: "O Megaporto de Chancay: Como a China Está Redesenhando o Comércio da América do Sul",
        categoria: "Urbanismo",
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
        categoria: "Cartografia",
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
        categoria: "Curiosidades",
        data: "05 Abr 2026",
        img: "https://mega.ibxk.com.br/2024/04/10/10181558422191.jpg",
        link: "fronteira-mais-curta/",
        resumo: "Ela é menor que um campo de futebol, separa dois continentes e foi criada por um 'acidente' meteorológico."
    },
    {
        titulo: "A Guerra do Uísque: Canadá vs Dinamarca",
        categoria: "História",
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
        categoria: "Curiosidades",
        data: "20 Mar 2026",
        img: "https://quirkytravelguy.com/wp-content/uploads/2024/08/point-roberts-map.jpg",
        link: "point-roberts/",
        resumo: "Para ir à escola ou ao mercado, os moradores precisam cruzar duas fronteiras internacionais. Conheça o erro do Paralelo 49."
    },
    {
        titulo: "A Ilha que Troca de Dono: Ilha dos Faisões",
        categoria: "História",
        data: "10 Mar 2026",
        img: "https://conteudo.imguol.com.br/blogsbol/2/2022/12/ilha-2-300x225.png",
        link: "ilha-faisoes/",
        resumo: "Seis meses é da França, seis meses é da Espanha. Conheça o condomínio internacional mais antigo do mundo."
    },
    {
        titulo: "O Reino da Areia: A História de Bir Tawil",
        categoria: "Curiosidades",
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
        categoria: "Urbanismo",
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
    categoria: "Cartografia",
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
        categoria: "Curiosidades",
        data: "01 Fev 2026",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Area_51_Main_Gate_%28cropped%29.jpg",
        link: "area-51/",
        resumo: "Relatório desclassificado sobre a base militar mais secreta do mundo. [DADOS EXPURGADOS]"
    },
    
  
    // COPIE E COLE ESTE BLOCO PARA ADICIONAR NOVO POST
];
