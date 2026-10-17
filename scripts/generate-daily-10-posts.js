const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const blogDir = path.join(rootDir, 'blog');
const srcBlogDir = path.join(rootDir, 'src', 'content', 'blog');
const postsJsFile = path.join(rootDir, 'assets', 'js', 'posts.js');

// Os 9 posts novos (além de dilema-de-malaca que já tem html em blog/dilema-de-malaca)
const newPosts = [
    {
        slug: "mar-do-sul-da-china",
        titulo: "A Linha dos Nove Traços: A Disputa por US$ 3 Trilhões no Mar do Sul da China",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 22:00",
        tempoLeitura: "9 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Mar_de_China_Meridional_-_BM_WMS_2004.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "Pequim reivindica 90% de um mar estratégico por onde passa um terço do comércio marítimo global, construindo ilhas artificiais militarizadas.",
        lead: "A mais de mil quilômetros da costa continental da China, no coração de um dos mares mais disputados do planeta, caças stealth e baterias de mísseis antinavio repousam sobre pistas de pouso militares construídas sobre atóis de coral que não existiam há uma década. Esta é a realidade militarizada da <strong>Linha dos Nove Traços (Nine-Dash Line)</strong>, a demarcação unilateral pela qual a República Popular da China reivindica soberania sobre aproximadamente <strong>90% de todo o Mar do Sul da China</strong>.",
        sections: [
            {
                h2: "A geografia do atrito: as ilhas Spratly e Paracel",
                content: `<p>O Mar do Sul da China cobre uma bacia oceânica de <strong>3,5 milhões de quilômetros quadrados</strong>, delimitada pela costa da China ao norte, o Vietnã a oeste, as Filipinas a leste e a Malásia, Brunei e Indonésia ao sul. Longe de ser apenas uma vasta extensão de água azul, a bacia é pontilhada por centenas de ilhotas, bancos de areia, atóis submersos e recifes agrupados em dois arquipélagos principais: as <strong>Ilhas Paracel</strong> e as <strong>Ilhas Spratly</strong>.</p>
                <p>Nenhum desses acidentes geográficos possui população indígena permanente ou atividade econômica autossustentável natural. No entanto, o controle de cada pedaço de coral aciona o direito sobre uma Zona Econômica Exclusiva (ZEE) de 200 milhas náuticas segundo a Convenção das Nações Unidas sobre o Direito do Mar (UNCLOS) de 1982.</p>
                <p>A sobreposição de fronteiras marítimas transformou o Mar do Sul da China em um tabuleiro onde seis governos — Pequim, Taipé, Hanói, Manila, Kuala Lumpur e Bandar Seri Begawan — disputam o mesmo metro quadrado oceânico.</p>`
            },
            {
                h2: "A engenharia do fato consumado: a Grande Muralha de Areia",
                content: `<p>Entre 2013 e 2018, enquanto o mundo observava as tensões no Oriente Médio, dragas industriais chinesas executaram a mais massiva campanha de geoengenharia militar do século. Bombardeando milhões de toneladas de areia e concreto sobre recifes que mal emergiam na maré baixa — como <strong>Mischief Reef (Panganiban)</strong>, <strong>Subi Reef</strong> e <strong>Fiery Cross Reef</strong> —, Pequim transformou bancos de coral em fortalezas insulares com mais de <strong>3.200 hectares de novas terras artificiais</strong>.</p>
                <p>Hoje, essas bases contam com pistas de pouso reforçadas de 3.000 metros capazes de operar bombardeiros H-6K, hangares blindados para caças J-11 e J-16, torres de radar de longo alcance e silos para sistemas de mísseis terra-ar HQ-9 e antinavio YJ-12B.</p>
                <p>A estratégia, descrita pelo almirante norte-americano Harry Harris como uma "Grande Muralha de Areia", criou portas-aviões insulares inafundáveis que projetam o poder militar chinês a milhares de quilômetros de suas bases continentais.</p>`
            },
            {
                h2: "O laudo de Haia de 2016 e o choque jurídico internacional",
                content: `<p>Em 2013, após a marinha chinesa tomar o controle do atol de Scarborough Shoal (Panatag), localizado a apenas 220 km da costa de Luzon, o governo das Filipinas acionou formalmente o Tribunal Permanente de Arbitragem em Haia sob as regras da UNCLOS.</p>
                <p>Em <strong>12 de julho de 2016</strong>, em uma decisão histórica e unânime, os juízes emitiram um veredito demolidor: declararam que a Linha dos Nove Traços da China <strong>não possui qualquer base jurídica histórica no direito internacional</strong> e que nenhuma das formações nas Ilhas Spratly tem capacidade de gerar zonas econômicas exclusivas.</p>
                <p>A resposta de Pequim foi imediata e categórica: o Ministério das Relações Exteriores da China declarou que o laudo arbitral era "nulo e sem valor vinculante", recusando-se a reconhecer qualquer legitimidade à decisão internacional.</p>`
            },
            {
                h2: "A artéria de US$ 3,4 trilhões e as Operações FONOP",
                content: `<p>O que torna o Mar do Sul da China o epicentro da rivalidade entre superpotências não é apenas o nacionalismo territorial, mas a economia do planeta. Por esta bacia oceânica navegam anualmente mais de <strong>US$ 3,4 trilhões de dólares em mercadorias</strong> — cerca de 21% de todo o comércio marítimo do globo terrestre.</p>
                <p>Além disso, o subsolo marítimo abriga reservas estimadas pela Agência de Informação de Energia dos EUA (EIA) em aproximadamente <strong>11 bilhões de barris de petróleo</strong> e <strong>190 trilhões de pés cúbicos de gás natural</strong>, ao lado de um ecossistema pesqueiro que alimenta centenas de milhões de cidadãos asiáticos.</p>
                <p>Para desafiar a tentativa de Pequim de converter o mar em um "lago doméstico chinês", a Marinha dos EUA conduz regularmente <em>Freedom of Navigation Operations</em> (FONOPs), enviando contratorpedeiros com mísseis guiados da classe <em>Arleigh Burke</em> para navegar a menos de 12 milhas das ilhas fortificadas, mantendo o risco de uma colisão acidental no limite da navalha.</p>`
            }
        ],
        tableTitle: "Matriz Tática de Reivindicações no Mar do Sul da China",
        tableHeaders: ["Ator Soberano", "Formações Ocupadas", "Fundamento Jurídico", "Status Militar"],
        tableRows: [
            ["China (Pequim)", "7 ilhas artificiais fortificadas (Spratly)", "Linha dos Nove Traços (Direitos Históricos)", "Pistas 3.000m, mísseis HQ-9 e radares"],
            ["Filipinas", "9 destacamentos (Ilha Thitu / Pag-asa)", "UNCLOS e ZEE de 200 milhas náuticas", "Pista militar e posto naval em Thitu"],
            ["Vietnã", "27 a 30 recifes e atóis ocupados", "Soberania histórica das dinastias Nguyen", "Fortificações costeiras e quebra-mares"],
            ["Taiwan (Taipé)", "Ilha de Itu Aba (Taiping) e Pratas", "Reivindicações pré-1949 da República da China", "Guarda costeira e pista militar"],
            ["Malásia", "5 recifes artificiais (Swallow Reef)", "Plataforma continental nacional", "Estação naval e pista de mergulho turística"]
        ],
        quote: "O controle do Mar do Sul da China confere a quem o domina o poder de sufocar as economias da Coreia do Sul, do Japão e de Taiwan em caso de crise militar.",
        quoteAuthor: "Dossiê Estratégico CSIS // Asia Maritime Transparency Initiative, Washington.",
        tacticalBoxTitle: "A Tática da Zona Cinzenta e a Milícia Marítima Chinesa",
        tacticalBoxText: "Em vez de empregar navios de guerra cinzentos da Marinha (PLAN), a China utiliza com frequência a chamada Milícia Marítima das Forças Armadas Populares (PAFMM): centenas de traineiras de pesca com cascos reforçados de aço financiadas pelo Estado que ancoram em massa ao redor de recifes filipinos para intimidar pescadores locais sem disparar tiros, operando logo abaixo do limiar de uma resposta armada formal.",
        faq: [
            { q: "O que é exatamente a Linha dos Nove Traços?", a: "É uma linha imaginária em formato de 'U' composta por nove traços descontínuos traçada pela China nos mapas para reivindicar soberania sobre quase 90% das águas e recursos do Mar do Sul da China." },
            { q: "Qual foi a decisão de Haia em 2016 sobre o Mar do Sul da China?", a: "O Tribunal Permanente de Arbitragem decidiu que a China não tem base legal histórica para suas reivindicações e que suas ilhas artificiais violaram os direitos soberanos das Filipinas." },
            { q: "Por que os Estados Unidos navegam no Mar do Sul da China?", a: "Os EUA realizam missões de Liberdade de Navegação (FONOPs) para demonstrar que as águas internacionais não pertencem exclusivamente a nenhum país, mantendo as rotas de comércio abertas." }
        ]
    },
    {
        slug: "corredor-de-zangezur",
        titulo: "O Corredor de Zangezur: A Faixa de 43 km que Pode Incendiar o Cáucaso",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 20:30",
        tempoLeitura: "8 min",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg/960px-Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        resumo: "Uma faixa de 43 km no sul da Armênia separa o Azerbaijão de seu enclave de Nakhchivan e pode unir o mundo túrquico de Istambul ao Mar Cáspio.",
        lead: "Nas montanhas áridas da província armênia de Syunik, no sul do Cáucaso, uma faixa estreita de apenas <strong>43 quilômetros de largura</strong> concentra a maior bomba-relógio geopolítica da Eurásia moderna: o chamado <strong>Corredor de Zangezur</strong>. Trata-se de um gargalo territorial que separa o território continental do Azerbaijão de seu enclave autônomo de <strong>Nakhchivan</strong>, posicionando Armênia, Azerbaijão, Turquia, Irã e Rússia em uma disputa implacável por rotas de trânsito.",
        sections: [
            {
                h2: "A herança soviética e as fronteiras despedaçadas do Cáucaso",
                content: `<p>Para entender o conflito de Zangezur, é necessário recuar até o ano de 1921, quando o Bureau Caucasiano do Partido Bolchevique, sob influência direta de Josef Stalin, redesenhou as fronteiras da região. A província montanhosa de Syunik (Zangezur) foi atribuída à República Socialista Soviética da Armênia, enquanto o território de Nakhchivan foi transformado em uma república autônoma subordinada ao Azerbaijão soviético.</p>
                <p>Durante a era soviética, trens de passageiros e carga circulavam livremente ao longo do vale do rio Aras, ligando Baku a Nakhchivan e Yerevan sem controle de passaporte. No entanto, o colapso da URSS e a Primeira Guerra de Nagorno-Karabakh (1988–1994) destruíram as ferrovias, ergueram trincheiras com campos minados e congelaram as fronteiras em hostilidade mortal.</p>`
            },
            {
                h2: "O Acordo de Cessar-Fogo de 2020 e a Cláusula 9",
                content: `<p>Após a Segunda Guerra de Nagorno-Karabakh em novembro de 2020, o presidente do Azerbaijão, Ilham Aliyev, o primeiro-ministro da Armênia, Nikol Pashinyan, e o presidente russo Vladimir Putin assinaram uma declaração tripartite de cessar-fogo.</p>
                <p>A controversa <strong>Cláusula 9</strong> do tratado estabeleceu que todas as conexões econômicas e de transporte na região seriam desbloqueadas, e que a Armênia deveria garantir a segurança dos transportes entre a parte continental do Azerbaijão e Nakhchivan sob a vigilância das tropas de fronteira do Serviço Federal de Segurança da Rússia (FSB).</p>
                <p>O Azerbaijão interpreta essa cláusula como o direito a um corredor soberano extraterritorial sem controle alfandegário armênio, enquanto a Armênia insiste que qualquer trânsito deve respeitar sua plena soberania aduaneira e territorial.</p>`
            },
            {
                h2: "A linha vermelha de Teerã e o eixo túrquico de Ancara",
                content: `<p>Se o Corredor de Zangezur for aberto sob controle total do Azerbaijão, ele criará uma rota terrestre contínua conectando a Turquia diretamente ao Azerbaijão, ao Mar Cáspio e aos países de língua túrquica da Ásia Central — o grande sonho pan-túrquico do presidente Recep Tayyip Erdoğan.</p>
                <p>Para o <strong>Irã</strong>, porém, o projeto é uma ameaça existencial. O Corredor de Zangezur cortaria fisicamente a fronteira de 44 quilômetros entre o Irã e a Armênia, isolando Teerã do acesso rodoviário à Europa via Geórgia e tornando o país dependente de rotas controladas pela Turquia e Azerbaijão. O líder supremo Ali Khamenei já declarou publicamente que qualquer alteração de fronteiras no Cáucaso é uma linha vermelha militar inegociável.</p>`
            },
            {
                h2: "A encruzilhada da paz: Corredor de Zangezur vs Cruzamento da Paz",
                content: `<p>Como alternativa à imposição militar azeri, o governo armênio lançou a iniciativa <strong>"Cruzamento da Paz" (Crossroads of Peace)</strong>, propondo reconstruir as ferrovias sob custódia e soberania das próprias autoridades armênias, integrando Turquia, Azerbaijão, Irã e Armênia em uma rede aberta de trânsito internacional.</p>
                <p>Enquanto as negociações diplomáticas se arrastam, o Azerbaijão constrói a toque de caixa rodovias de quatro pistas e linhas férreas que avançam até a linha de fronteira armênia, mantendo o Cáucaso em tensão permanente entre a integração logística e uma nova deflagração armada.</p>`
            }
        ],
        tableTitle: "Matriz Geopolítica de Interesses no Corredor de Zangezur",
        tableHeaders: ["País / Ator", "Objetivo Estratégico", "Posição Oficial", "Risco Militar"],
        tableRows: [
            ["Azerbaijão", "Acesso direto a Nakhchivan e à Turquia", "Exige passagem desimpedida sem alfândega armênia", "Ameaça de abertura forçada da rota"],
            ["Armênia", "Preservar integridade territorial em Syunik", "Propõe ferrovias sob controle aduaneiro soberano", "Risco de invasão e corte do território ao meio"],
            ["Turquia", "União terrestre com Baku e Ásia Central", "Apoio total à exigência de corredor azeri", "Poder militar da OTAN apoiando o Azerbaijão"],
            ["Irã", "Manter fronteira aberta com a Armênia", "Rejeita qualquer mudança de fronteira regional", "Manobras militares com tropas na fronteira sul"],
            ["Rússia", "Controlar a rota de trânsito via agentes FSB", "Busca manter monopólio sobre o corredor de transporte", "Perda gradual de influência militar pós-Ucrânia"]
        ],
        quote: "A fronteira entre o Irã e a Armênia é uma rota histórica de milhares de anos e nenhuma potência terá permissão para bloqueá-la ou redesenhá-la.",
        quoteAuthor: "Aiatolá Ali Khamenei, Líder Supremo da República Islâmica do Irã.",
        tacticalBoxTitle: "A Rota Alternativa de Aras via Território Iraniano",
        tacticalBoxText: "Em 2023, percebendo a resistência armênia, Baku e Teerã assinaram um acordo para construir uma rota alternativa através do território iraniano ao sul do rio Aras, contornando a Armênia. No entanto, o Azerbaijão não abandonou a exigência do traçado original por Zangezur, mantendo a província de Syunik sob constante pressão psicológica.",
        faq: [
            { q: "Onde fica localizado o Corredor de Zangezur?", a: "Ele atravessa a província armênia de Syunik, uma estreita faixa montanhosa de cerca de 43 km que separa o Azerbaijão de seu enclave de Nakhchivan." },
            { q: "Por que o Irã se opõe firmemente ao corredor?", a: "Porque o corredor cortaria a fronteira física terrestre entre o Irã e a Armênia, deixando Teerã cercado por vizinhos de língua túrquica aliados de Israel e da OTAN." },
            { q: "O que o Azerbaijão exige para abrir a passagem?", a: "Baku exige que seus cidadãos e cargas transitem entre o Azerbaijão e Nakhchivan sem controles de passaporte ou tarifas alfandegárias armênias." }
        ]
    },
    {
        slug: "crise-canal-do-panama",
        titulo: "O Canal do Panamá Sem Água: A Seca no Lago Gatún que Travou o Comércio Mundial",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 19:00",
        tempoLeitura: "8 min",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Panama_Canal_Map_EN.svg/500px-Panama_Canal_Map_EN.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        resumo: "Cada navio que cruza o Canal do Panamá consome 200 milhões de litros de água doce. A pior seca do Lago Gatún provocou leilões de US$ 4 milhões por vaga.",
        lead: "Diferente do Canal de Suez, que é uma vala aberta ao nível do mar onde as águas salgadas do Mediterrâneo e do Mar Vermelho se encontram livremente, o <strong>Canal do Panamá</strong> é um elevador hidráulico de água doce. Para erguer e abaixar cargueiros a 26 metros de altitude através da cordilheira central, cada travessia de um único navio consome cerca de <strong>200 milhões de litros de água doce potável</strong> que são despejados nos oceanos. E essa água vem de um único reservatório que começou a secar: o <strong>Lago Gatún</strong>.",
        sections: [
            {
                h2: "A mecânica oculta: o paradoxo da água doce no canal marítimo",
                content: `<p>Inaugurado em <strong>15 de agosto de 1914</strong> após mais de três décadas de obras catastróficas iniciadas pela França e concluídas pelos Estados Unidos, o Canal do Panamá estende-se por <strong>82 quilômetros</strong> entre a cidade do Panamá, no Pacífico, e Colón, no mar do Caribe.</p>
                <p>O coração do sistema é o Lago Gatún, um lago artificial de 425 km² criado pelo represamento do rio Chagres. Quando um navio Neopanamax entra nas eclusas de Miraflores ou Cocolí, três conjuntos sucessivos de comportas funcionam por pura gravidade, utilizando a água do lago para erguer o navio até o corte Culebra e depois descê-lo de volta ao nível do mar.</p>
                <p>O problema ambiental e estrutural é que a água das eclusas não é reciclada: cada um dos 14 mil navios que cruzavam o canal todos os anos drena o reservatório que também abastece de água potável mais de 50% de toda a população da República do Panamá.</p>`
            },
            {
                h2: "O impacto do El Niño e o racionamento histórico",
                content: `<p>Entre 2023 e 2024, a combinação de um fenômeno El Niño extremo com mudanças climáticas prolongou a estação seca e reduziu o nível do Lago Gatún a patamares alarmantes próximos de 24 metros, contra a média segura de 27 metros.</p>
                <p>A Autoridade do Canal do Panamá (ACP) foi forçada a aplicar um racionamento drástico: o tráfego normal de <strong>36 a 38 navios por dia</strong> foi reduzido para meros <strong>18 a 22 navios diários</strong>. Ao mesmo tempo, o calado máximo operacional foi reduzido de 50 pés para 44 pés, forçando megacargueiros a descarregar até 40% de seus contêineres antes de cruzar ou abandonar a rota.</p>`
            },
            {
                h2: "Leilões milionários e filas de centenas de navios",
                content: `<p>Com centenas de embarcações fundeadas nas entradas do Pacífico e do Atlântico aguardando até três semanas por uma vaga, armadores de gás liquefeito e produtos químicos entraram em uma guerra de lances financeiros. Em um dos leilões extraordinários da ACP, uma empresa de energia pagou um sobrepreço recorde de <strong>US$ 4 milhões de dólares</strong> além da taxa padrão de pedágio de US$ 500 mil apenas para furar a fila e conseguir cruzar no mesmo dia.</p>
                <p>Os atrasos desorganizaram as rotas de grãos dos EUA rumo à Ásia e encareceram fretes globais, reacendendo debates sobre a fragilidade dos canais artificiais da modernidade.</p>`
            },
            {
                h2: "Soluções de engenharia: bacia do rio Indio e corredores concorrentes",
                content: `<p>Para salvar o canal do estrangulamento hídrico permanente, o governo panamenho aprovou um projeto estimado em mais de <strong>US$ 1,6 bilhão de dólares</strong> para construir uma represa na bacia do vizinho <strong>Rio Índio</strong> e perfurar um túnel de 8 km para transferir água para o Lago Gatún, o que exigirá reassentar centenas de comunidades rurais.</p>
                <p>Enquanto isso, países vizinhos tentam capturar o tráfego: o México inaugurou o <strong>Corredor Interoceânico do Istmo de Tehuantepec</strong> ligando ferrovias do Golfo ao Pacífico, enquanto a Colômbia e a Nicarágua voltam a discutir canais concorrentes terrestres.</p>`
            }
        ],
        tableTitle: "Comparativo de Chokepoints: Panamá vs Suez vs Cabo da Boa Esperança",
        tableHeaders: ["Parâmetro Operacional", "Canal do Panamá", "Canal de Suez", "Cabo da Boa Esperança"],
        tableRows: [
            ["Tipo de Passagem", "Eclusas de água doce (altitude 26m)", "Vala ao nível do mar (água salgada)", "Mar aberto (contorno continental)"],
            ["Tempo Médio Travessia", "8 a 10 horas (+ dias de fila)", "11 a 12 horas contínuas", "Adiciona 10 a 14 dias de navegação"],
            ["Custo do Pedágio", "US$ 400 mil a US$ 1 milhão", "US$ 500 mil a US$ 700 mil", "US$ 0 (sem pedágio, +bunker)"],
            ["Gargalo Crítico", "Falta de água doce (seca)", "Bloqueios militares e mísseis", "Ondas gigantes e tempestades austrais"],
            ["Tráfego Pré-Crise", "36 a 38 navios/dia", "55 a 65 navios/dia", "Livre trânsito oceânico"]
        ],
        quote: "O Canal do Panamá é o único canal marítimo do planeta cuja operação depende da chuva que cai nas florestas tropicais da sua bacia hidrográfica.",
        quoteAuthor: "Ricaurte Vásquez Morales, Administrador da Autoridade do Canal do Panamá (ACP).",
        tacticalBoxTitle: "As Eclusas Neopanamax com Bacias de Economia de Água",
        tacticalBoxText: "A ampliação do canal inaugurada em 2016 incorporou bacias de reutilização de água (Water-Saving Basins) que recuperam até 60% da água doce em cada operação de eclusa. No entanto, o volume total consumido continua superando a capacidade de recarga natural nos períodos de seca prolongada, expondo os limites físicos da infraestrutura.",
        faq: [
            { q: "Por que o Canal do Panamá gasta água doce em vez de usar água do mar?", a: "Porque o canal sobe até 26 metros de altitude no Lago Gatún. Se usasse água salgada sem eclusas de água doce, o sal contaminaria o maior reservatório de água potável do país e o ecossistema lacustre." },
            { q: "Qual foi o impacto da seca nas taxas de pedágio?", a: "A Autoridade do Canal reduziu as vagas diárias e criou leilões competitivos onde armadores pagaram mais de US$ 4 milhões por travessia para furar a fila." },
            { q: "Quanto tempo um navio economiza usando o canal?", a: "Cruzar o Panamá poupa cerca de 13.000 quilômetros e até 22 dias de navegação em comparação com contornar o Cabo Horn no extremo sul da América do Sul." }
        ]
    },
    {
        slug: "estreito-de-taiwan",
        titulo: "A Primeira Cadeia de Ilhas: Por que o Estreito de Taiwan é o Lugar Mais Perigoso da Terra",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 17:30",
        tempoLeitura: "9 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Bathymetry_and_ocean_currents_of_the_Taiwan_Strait_and_nearby_areas.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "Separando Taiwan da China continental por 160 km, o estreito concentra a produção dos chips mais avançados do mundo e a maior frota naval do planeta.",
        lead: "Com cerca de <strong>160 quilômetros de largura</strong> no seu ponto médio, o <strong>Estreito de Taiwan</strong> separa a costa montanhosa de Fujian, na China continental, da ilha democrática e autogovernada de Taiwan. Mais do que uma barreira física de água rasa e mares agitados, este estreito é a falha tectônica central da ordem internacional do século XXI: o ponto onde colidem a ascensão militar de Pequim, a aliança de segurança de Washington e o monopólio global dos semicondutores mais avançados do planeta.",
        sections: [
            {
                h2: "A geografia insular da Primeira Cadeia de Ilhas",
                content: `<p>Do ponto de vista estratégico, Taiwan é a peça-chave da chamada <strong>Primeira Cadeia de Ilhas</strong>, um arco geográfico concebido por estrategistas norte-americanos na Guerra Fria que se estende do Japão e ilhas Ryukyu até Taiwan, Filipinas e Bornéu.</p>
                <p>Enquanto Taiwan permanecer fora do controle de Pequim, a Marinha do Exército de Libertação Popular (PLAN) fica contida em mares litorâneos rasos, sem acesso desimpedido às profundezas do Oceano Pacífico aberto, onde submarinos nucleares de mísseis balísticos podem patrulhar sem detecção.</p>
                <p>Se Pequim conquistar a ilha, cortará a cadeia defensiva ocidental ao meio, ameaçará o flanco sul do Japão e projetará sua esquadra naval diretamente rumo ao Havaí e a Guam.</p>`
            },
            {
                h2: "O escudo de silício: o papel indispensável da TSMC",
                content: `<p>Existe uma razão material concreta pela qual uma invasão em Taiwan provocaria uma depressão econômica mundial instantânea: os semicondutores. A empresa taiwanesa <strong>TSMC (Taiwan Semiconductor Manufacturing Company)</strong> fabrica mais de <strong>90% de todos os microchips de ponta do planeta</strong> (abaixo de 5 nanômetros), utilizados nos processadores da Apple, placas de IA da Nvidia, mísseis Patriot e sistemas de satélite militares.</p>
                <p>Analistas da Bloomberg estimam que um bloqueio militar de seis meses ao redor de Taiwan custaria mais de <strong>US$ 10 trilhões de dólares à economia mundial</strong> — o equivalente a 10% de todo o PIB do planeta, superando com folga os impactos combinados da pandemia de 2020 e da Guerra da Ucrânia.</p>`
            },
            {
                h2: "A Linha Mediana e a tática de desgaste cotidiano",
                content: `<p>Durante décadas após a crise do Estreito de Taiwan em 1954–1958, uma fronteira marítima invisível manteve a trégua prática: a <strong>Linha Mediana</strong>, estabelecida tacitamente pelo general norte-americano Benjamin O. Davis Jr. em 1955.</p>
                <p>No entanto, desde a visita da líder congressista dos EUA Nancy Pelosi a Taipé em agosto de 2022, as forças armadas chinesas cruzam a Linha Mediana quase diariamente com esquadrões de caças J-20, drones de reconhecimento e navios de guerra, erodindo a capacidade de alerta prévio de Taiwan em uma guerra psicológica de atrito sem trégua.</p>`
            },
            {
                h2: "Bloqueio naval vs invasão anfíbia: o pesadelo militar",
                content: `<p>Militarmente, cruzar o Estreito de Taiwan para uma invasão anfíbia seria uma das operações mais complexas da história militar. A costa oeste de Taiwan é protegida por lodaçais rasos, pouquíssimas praias de desembarque viáveis e uma cordilheira montanhosa de quase 4.000 metros de altitude.</p>
                <p>Por isso, estrategistas em Washington e Taipé alertam que o perigo mais imediato não é um desembarque no estilo Dia D, mas uma <strong>quarentena aduaneira ou bloqueio aeronaval progressivo</strong>, onde a China isolaria o tráfego aéreo e marítimo de Taiwan alegando medidas policiais de inspeção, desafiando o mundo a iniciar uma guerra para romper o cerco.</p>`
            }
        ],
        tableTitle: "Equilíbrio de Forças no Estreito de Taiwan",
        tableHeaders: ["Dimensão Militar", "China (Teatro Leste / PLAN)", "Taiwan (Forças Armadas da ROC)", "Vantagem Tática"],
        tableRows: [
            ["Efetivo Ativo", "~1 milhão de tropas no teatro", "~170 mil tropas ativas (+ reservistas)", "China (Escala numérica esmagadora)"],
            ["Frota de Superfície", "370 navios e submarinos de combate", "26 fragatas e contratorpedeiros", "China (Maior marinha em cascos)"],
            ["Defesa Costeira", "Mísseis hipersônicos DF-17 e DF-21D", "Mísseis Hsiung Feng III e Harpoon móveis", "Taiwan (Doutrina do Porco-Espinho)"],
            ["Geografia Costeira", "Portos e bases navais protegidas", "Apenas 14 praias estreitas de desembarque", "Taiwan (Fortaleza natural montanhosa)"],
            ["Dependência Econômica", "Consome chips taiwaneses em massa", "Importa 97% de toda a sua energia", "China (Vulnerabilidade energética mútua)"]
        ],
        quote: "Quem controla Taiwan controla as artérias náuticas da Ásia Oriental e o acesso militar aos abismos do Pacífico Ocidental.",
        quoteAuthor: "General Douglas MacArthur, Memorando Estratégico de 1950.",
        tacticalBoxTitle: "A Estratégia do Porco-Espinho (Assymmetric Warfare)",
        tacticalBoxText: "Em vez de gastar bilhões comprando caças caros que seriam destruídos na pista no primeiro dia de conflito, Taiwan adotou a Estratégia do Porco-Espinho: comprar dezenas de milhares de mísseis antinavio portáteis, minas marítimas inteligentes, drones kamikazes e sistemas de defesa antiaérea Stinger espalhados pelas montanhas para tornar o custo de qualquer invasão inaceitavelmente alto para Pequim.",
        faq: [
            { q: "Qual a distância entre Taiwan e a China continental?", a: "O Estreito de Taiwan mede entre 130 km no ponto mais estreito e cerca de 180 km no ponto mais largo." },
            { q: "Por que Taiwan é tão importante para os Estados Unidos?", a: "Além de ser a âncora da Primeira Cadeia de Ilhas que bloqueia a expansão naval chinesa, Taiwan fabrica a imensa maioria dos chips mais avançados do mundo." },
            { q: "A China e Taiwan já travaram conflitos militares no estreito?", a: "Sim, durante as Crises do Estreito de Taiwan em 1954, 1958 e 1996, ocorreram bombardeios de artilharia, combates aéreos e mobilizações navais com envio de porta-aviões norte-americanos." }
        ]
    },
    {
        slug: "triangulo-do-litio",
        titulo: "O Triângulo do Lítio: A Batalha Geopolítica pelo Ouro Branco nos Andes",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 16:00",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Triangulo_del_lito.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "Na fronteira entre Bolívia, Argentina e Chile estão mais de 50% das reservas mundiais de lítio, atraindo a disputa entre EUA, China e União Europeia.",
        lead: "A mais de 3.600 metros de altitude, na aridez gelada da cordilheira dos Andes onde o horizonte se perde em desertos infinitos de sal branco, repousa o mineral que dita a velocidade da transição energética do planeta: o <strong>lítio</strong>. A intersecção das fronteiras entre <strong>Bolívia, Argentina e Chile</strong> forma o chamado <strong>Triângulo do Lítio</strong>, uma região geográfica que concentra mais de <strong>53% de todas as reservas mundiais identificadas</strong> do metal mais leve da tabela periódica.",
        sections: [
            {
                h2: "A geografia do ouro branco: Uyuni, Atacama e Hombre Muerto",
                content: `<p>Diferente da Austrália, que extrai o lítio de rochas duras de espodumênio a custos energéticos altíssimos, o Triângulo do Lítio possui a geologia mais vantajosa da Terra: salmouras subterrâneas concentradas sob crostas salinas colossais.</p>
                <p>Os três pilares geográficos da região são o <strong>Salar de Uyuni</strong> na Bolívia (com mais de 10.500 km², o maior do mundo), o <strong>Salar de Atacama</strong> no Chile e os salares da província de Jujuy e Catamarca na Argentina (como o <strong>Salar del Hombre Muerto</strong>).</p>
                <p>Nesses locais, o método de extração tradicional baseia-se em bombear a salmoura para gigantescas piscinas rasas e deixar a radiação solar andina evaporar a água por até 18 meses, concentrando o carbonato de lítio necessário para baterias de veículos elétricos e smartphones.</p>`
            },
            {
                h2: "Três países, três modelos geopolíticos contrastantes",
                content: `<p>Apesar de compartilharem a mesma riqueza geológica, os três países andinos adotaram estratégias políticas radicalmente distintas para lidar com o mineral:</p>
                <p><strong>1. Chile: O modelo corporativo regulado:</strong> O Chile declarou o lítio um recurso de interesse nacional em 1979 devido a suas aplicações nucleares históricas. Empresas privadas como SQM e a norte-americana Albemarle pagam royalties elevados ao Estado através da agência Corfo. Em 2023, o governo de Gabriel Boric lançou a Estratégia Nacional do Lítio, impondo controle estatal majoritário em novas concessões estratégicas.</p>
                <p><strong>2. Argentina: O modelo descentralizado de livre mercado:</strong> Sob a Constituição argentina, os recursos minerais pertencem às províncias, não ao governo federal. Províncias como Salta, Jujuy e Catamarca concedem licenças diretamente a multinacionais estrangeiras com baixas taxas tributárias, tornando o país o que mais atrai novos investimentos privados rápidos.</p>
                <p><strong>3. Bolívia: O estatismo integral e a barreira técnica:</strong> Embora possua o maior reservatório do planeta em Uyuni (mais de 23 milhões de toneladas estimadas), a Bolívia estatizou toda a cadeia através da estatal YLB. A salmoura boliviana possui alto teor de magnésio, tornando a separação química complexa e mantendo a produção industrial em níveis muito abaixo do seu potencial colossal.</p>`
            },
            {
                h2: "A investida chinesa e o alarme do Comando Sul dos EUA",
                content: `<p>Enquanto as montadoras ocidentais demoraram a assegurar contratos de longo prazo, gigantes estatais e corporações chinesas — como <strong>Tianqi Lithium</strong>, <strong>Ganfeng Lithium</strong> e o consórcio <strong>CBC (CATL)</strong> — compraram participações bilionárias em minas e refinarias nos três países.</p>
                <p>A general Laura Richardson, ex-comandante do Comando Sul dos Estados Unidos (SOUTHCOM), alertou perante o Congresso norte-americano que a presença dominante da China no Triângulo do Lítio representa um risco direto à segurança nacional dos EUA, pois Pequim já controla 60% da capacidade mundial de refino de lítio e 75% da produção de células de bateria.</p>`
            },
            {
                h2: "O desafio ambiental da água nos desertos andinos",
                content: `<p>A extração de lítio enfrenta um dilema ecológico agudo: cada tonelada de lítio refinado por evaporação consome até <strong>2 milhões de litros de água</strong> em regiões hiperáridas onde comunidades indígenas quechuas e atacamenhas dependem de oásis frágeis para agricultura e pastoreio de lhamas.</p>
                <p>A corrida agora é pela implementação da tecnologia de <strong>Extração Direta de Lítio (DLE)</strong>, que promete reinjetar a salmoura no subsolo em horas sem depender de piscinas de evaporação, reconfigurando os custos e os impactos territoriais da mineração andina.</p>`
            }
        ],
        tableTitle: "Comparativo dos Países do Triângulo do Lítio",
        tableHeaders: ["Indicador Estratégico", "Chile", "Argentina", "Bolívia"],
        tableRows: [
            ["Reservas Estimadas (USGS)", "~9,3 milhões de toneladas", "~3,6 milhões de toneladas", "~23 milhões de toneladas (maior do mundo)"],
            ["Produção Atual", "2º maior produtor mundial (~35%)", "4º maior produtor (~10%)", "Incipiente (<1% global)"],
            ["Modelo Regulatório", "Parcerias público-privadas com controle estatal", "Livre concessão provincial com royalties baixos", "Estatização total através da estatal YLB"],
            ["Qualidade da Salmoura", "Excelente (alta concentração, baixo magnésio)", "Boa (concentração moderada)", "Desafiadora (alta concentração de magnésio)"],
            ["Principais Atores", "SQM, Albemarle, Codelco", "Arcadium, Ganfeng Lithium, Livent", "Consórcio chinês CBC (CATL), Rosatom (Rússia)"]
        ],
        quote: "O Triângulo do Lítio na América do Sul é para o século XXI o que o Golfo Pérsico e seus poços de petróleo foram para o século XX.",
        quoteAuthor: "General Laura J. Richardson, Comandante do U.S. Southern Command (SOUTHCOM).",
        tacticalBoxTitle: "A Ideia de uma OPEP do Lítio na América Latina",
        tacticalBoxText: "Líderes políticos da região já propuseram a criação de uma aliança nos moldes da OPEP para coordenar preços de exportação e exigir transferência de tecnologia para fabricar células de bateria em solo sul-americano. Contudo, as divergências ideológicas e as legislações minerárias incompatíveis impediram até hoje a formação de um bloco cartelizado comum.",
        faq: [
            { q: "Quais países formam o Triângulo do Lítio?", a: "O Triângulo do Lítio é composto por Bolívia, Argentina e Chile, abrangendo os desertos de sal dos Andes centrais." },
            { q: "Por que a Bolívia produz pouco lítio mesmo tendo as maiores reservas?", a: "Devido a desafios técnicos (a salmoura de Uyuni tem muito magnésio, exigindo processos químicos caros) e à exigência de controle estatal absoluto que afastou investimentos privados estrangeiros." },
            { q: "Qual a importância do lítio para a economia global?", a: "O lítio é o componente básico insubstituível das baterias de íon-lítio que alimentam carros elétricos, sistemas de armazenamento de energia solar e dispositivos móveis." }
        ]
    },
    {
        slug: "estreito-de-bosforo",
        titulo: "A Convenção de Montreux: Como a Turquia Controla a Entrada do Mar Negro desde 1936",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 14:30",
        tempoLeitura: "8 min",
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Turkish_Strait_disambig.svg/500px-Turkish_Strait_disambig.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        resumo: "Com apenas 700 metros no ponto mais estreito em Istambul, os Estreitos Turcos são a única chave naval para o Mar Negro sob a Convenção de Montreux.",
        lead: "Cortando a cidade histórica de Istambul em duas partes e separando fisicamente o continente europeu da Ásia, o <strong>Estreito de Bósforo</strong> possui apenas <strong>700 metros de largura</strong> em seu ponto mais estrangulado, entre as fortalezas de Rumelihisarı e Anaduluhisarı. Juntamente com o <strong>Estreito de Dardanelos</strong> e o Mar de Mármara, os chamados Estreitos Turcos formam o único cordão umbilical líquido que liga o Mar Negro ao Mar Mediterrâneo e aos oceanos do mundo, controlado com mão de ferro por Ancara sob um tratado assinado em 1936: a <strong>Convenção de Montreux</strong>.",
        sections: [
            {
                h2: "A geografia do Bósforo: correntes traiçoeiras e curvas cegas",
                content: `<p>Com 31 quilômetros de comprimento, o Bósforo é uma das hidrovias mais desafiadoras do planeta para a navegação mercantil e de guerra. A diferença de salinidade e densidade entre o Mar Negro e o Mar de Mármara gera um sistema duplo de correntes perigosas: na superfície, águas menos salgadas correm para o sul a até 4 nós, enquanto no fundo oceânico uma contra-corrente densa flui para o norte.</p>
                <p>Além disso, o canal serpenteia em 12 curvas cegas acentuadas que exigem que navios petroleiros de 250 metros alterem seu curso bruscamente a poucos metros de bairros residenciais históricos de Istambul, onde mais de 16 milhões de pessoas vivem às margens da hidrovia.</p>`
            },
            {
                h2: "O escudo diplomático: o que diz a Convenção de Montreux",
                content: `<p>Assinada em <strong>20 de julho de 1936</strong> na cidade suíça de Montreux, a convenção restituiu à República da Turquia a plena soberania militar sobre os estreitos, encerrando a desmilitarização forçada imposta após a Primeira Guerra Mundial pelo Tratado de Lausanne.</p>
                <p>O tratado estabeleceu regras cirúrgicas:</p>
                <ul>
                    <li><strong>Navios mercantes:</strong> Têm liberdade total de passagem e navegação em tempos de paz sem taxas de pedágio arbitrárias, pagando apenas tarifas de sinalização e serviços sanitários.</li>
                    <li><strong>Potências litorâneas do Mar Negro (como Rússia):</strong> Podem enviar navios de guerra de grande porte para fora do Mar Negro, desde que passem individualmente e notifiquem o governo turco com 8 dias de antecedência.</li>
                    <li><strong>Potências não-litorâneas (como EUA e Reino Unido):</strong> Enfrentam limites severos: nenhuma belonave individual pode exceder 10.000 toneladas, o deslocamento total de forças estrangeiras no Mar Negro não pode passar de 45.000 toneladas e nenhum navio militar estrangeiro pode permanecer no Mar Negro por mais de <strong>21 dias consecutivos</strong>. Porta-aviões e submarinos não-litorâneos são terminantemente proibidos de cruzar.</li>
                </ul>`
            },
            {
                h2: "A ativação do Artigo 19 na Guerra da Ucrânia",
                content: `<p>Em <strong>28 de fevereiro de 2022</strong>, quatro dias após o início da invasão russa à Ucrânia, o presidente turco Recep Tayyip Erdoğan tomou uma decisão histórica: classificou formalmente o conflito como um "estado de guerra" e ativou o <strong>Artigo 19 da Convenção de Montreux</strong>.</p>
                <p>Sob este artigo, a Turquia fechou imediatamente os estreitos para a passagem de quaisquer navios de guerra das nações beligerantes. Isso impediu que a Rússia transferisse navios de suas frotas do Báltico, do Pacífico ou do Norte para reforçar a Frota do Mar Negro, mudando o equilíbrio naval da guerra e permitindo à Ucrânia neutralizar alvos como o cruzador <em>Moskva</em> sem enfrentar uma armada russa ampliada.</p>`
            },
            {
                h2: "O megaprojeto Canal Istambul: o bypass da convenção",
                content: `<p>Para contornar as limitações de tráfego do Bósforo — por onde passam cerca de 40 mil navios por ano — e criar uma nova fonte bilionária de pedágios, o governo turco projetou o polêmico <strong>Kanal İstanbul</strong>, uma via artificial navegável de 45 km paralela ao Bósforo.</p>
                <p>O projeto gerou comoção diplomática: Moscou teme que o novo canal artificial não esteja sujeito às restrições militares da Convenção de Montreux, permitindo que a OTAN e os Estados Unidos enviem frotas inteiras de porta-aviões para o Mar Negro em desafio direto à hegemonia russa.</p>`
            }
        ],
        tableTitle: "Regras da Convenção de Montreux de 1936",
        tableHeaders: ["Categoria de Embarcação", "Países do Mar Negro (ex: Rússia)", "Países Não-Litorâneos (ex: EUA, Reino Unido)"],
        tableRows: [
            ["Navios Mercantes", "Liberdade total de trânsito em tempos de paz", "Liberdade total de trânsito em tempos de paz"],
            ["Navios de Guerra (Geral)", "Acesso permitido com notificação prévia (8 dias)", "Limite máximo agregado de 45.000 toneladas"],
            ["Porta-Aviões", "Proibição prática pelas regras de tonelagem", "Proibição absoluta de trânsito"],
            ["Submarinos", "Apenas para reparos ou entrega de compras", "Proibição absoluta de trânsito"],
            ["Tempo de Permanência", "Sem limite (águas territoriais próprias)", "Máximo de 21 dias contínuos no Mar Negro"],
            ["Em Caso de Guerra (Artigo 19)", "Navios fora não podem retornar se beligerantes", "Turquia pode bloquear trânsito de beligerantes"]
        ],
        quote: "A Convenção de Montreux é a certidão de soberania da Turquia sobre os estreitos e o pilar da estabilidade estratégica de todo o Mar Negro.",
        quoteAuthor: "Mevlüt Çavuşoğlu, ex-Ministro das Relações Exteriores da Turquia.",
        tacticalBoxTitle: "O Incidente do Submarino Rostov-on-Don",
        tacticalBoxText: "Antes da ativação do Artigo 19 em 2022, a Rússia utilizava uma cláusula técnica de Montreux que permitia o trânsito de submarinos caso estivessem retornando para reparos em suas bases de origem. Submarinos russos da classe Kilo cruzavam o Bósforo na superfície sob a alegação de manutenção e, uma vez dentro do Mar Negro, disparavam mísseis de cruzeiro Kalibr contra alvos terrestres.",
        faq: [
            { q: "Quais são os dois estreitos turcos?", a: "O Estreito de Bósforo (ao norte, em Istambul) e o Estreito de Dardanelos (ao sul, perto de Çanakkale), conectados pelo Mar de Mármara." },
            { q: "Os navios dos Estados Unidos podem ficar no Mar Negro indefinidamente?", a: "Não. A Convenção de Montreux proíbe que nações que não possuem costa no Mar Negro mantenham navios de guerra na região por mais de 21 dias consecutivos." },
            { q: "A Turquia cobra pedágio para os navios cruzarem o Bósforo?", a: "A convenção garante trânsito livre para comércio, mas a Turquia cobra taxas padronizadas por serviços sanitários, faróis e taxa de resgate naval baseadas na moeda histórica Franco Ouro Poincaré." }
        ]
    },
    {
        slug: "rota-maritima-do-artico",
        titulo: "A Rota do Ártico: O Degelo Polar e a Corrida pelo Atalho de 40% Entre Ásia e Europa",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 13:00",
        tempoLeitura: "9 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Map_of_the_Arctic_region_showing_the_Northeast_Passage%2C_the_Northern_Sea_Route_and_Northwest_Passage%2C_and_bathymetry.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "Com o derretimento do gelo marinho, a Rota Marítima do Norte encurta em 15 dias a viagem entre China e Europa, criando uma nova frente de disputa militar.",
        lead: "No topo congelado do globo terrestre, onde durante séculos exploradores heroicos pereceram aprisionados em calotas impenetráveis de gelo, uma transformação climática e geográfica irreversível está redesenhando as rotas de comércio marítimo da humanidade: o degelo do Ártico. A abertura sazonal da <strong>Rota Marítima do Norte (Northern Sea Route - NSR)</strong> ao longo da costa siberiana da Rússia oferece às grandes marinhas mercantes um atalho revolucionário que reduz em até <strong>40% a distância náutica</strong> e em mais de <strong>duas semanas o tempo de viagem</strong> entre os portos da Ásia Oriental e da Europa Ocidental.",
        sections: [
            {
                h2: "A geografia do atalho boreal: NSR vs Canal de Suez",
                content: `<p>A Rota Marítima do Norte estende-se por aproximadamente <strong>5.600 quilômetros (3.000 milhas náuticas)</strong> através das águas árticas russas, conectando o Estreito de Bering (entre a Sibéria e o Alasca) até o Mar de Barents, na fronteira com a Noruega.</p>
                <p>Para um navio porta-contêineres que zarpa de <strong>Yokohama (Japão)</strong> rumo a <strong>Roterdã (Holanda)</strong>, a rota tradicional pelo Canal de Suez e o Oceano Índico exige percorrer cerca de <strong>21.000 quilômetros</strong> em uma viagem que leva de 30 a 35 dias.</p>
                <p>Navegando pela Rota do Ártico, a distância despenca para <strong>13.000 quilômetros</strong>, completados em menos de 18 a 20 dias. Essa economia de combustível, emissões de carbono e tempo de frete representa bilhões de dólares para armadores e importadores.</p>`
            },
            {
                h2: "O monopólio russo dos quebra-gelos nucleares",
                content: `<p>Apesar do degelo crescente acelerado pelas mudanças climáticas no verão polar, a navegação ártica ainda exige embarcações com casco reforçado de classe de gelo e assistência constante de quebra-gelos pesados durante grande parte do ano.</p>
                <p>Nesse quesito, a Federação Russa detém um monopólio tecnológico absoluto: é a <strong>única nação do planeta que constrói e opera uma frota de quebra-gelos de propulsão nuclear</strong> (frota da estatal <em>Atomflot</em>), incluindo os gigantes da classe <em>Arktika</em> (Projeto 22220), capazes de romper placas de gelo de 3 metros de espessura a velocidades contínuas.</p>
                <p>Moscou classifica a rota como uma hidrovia nacional de trânsito interno sob a jurisdição da agência Rosatom, exigindo autorizações prévias, tarifas de escolta e pilotos russos a bordo para qualquer travessia estrangeira.</p>`
            },
            {
                h2: "A Rota da Seda Polar da China e a corrida por recursos",
                content: `<p>A China, autodeclarada um "Estado quase-ártico" (Near-Arctic State) em seu Livro Branco sobre o Ártico de 2018, integrou a Rota Marítima do Norte à sua Iniciativa do Cinturão e Rota sob a bandeira da <strong>Rota da Seda Polar</strong>.</p>
                <p>Para Pequim, o Ártico oferece a fuga perfeita do "Dilema de Malaca": uma rota segura longe dos navios de guerra da Marinha dos EUA e dos chokepoints vigiados do Sudeste Asiático. Além disso, corporações chinesas como a CNPC e o Fundo da Rota da Seda detêm participações de quase 30% nos megaprojetos de gás natural liquefeito <strong>Yamal LNG</strong> e <strong>Arctic LNG 2</strong> na península siberiana de Yamal.</p>`
            },
            {
                h2: "A remilitarização do Ártico e o alerta da OTAN",
                content: `<p>À medida que as rotas se abrem, o Ártico volta a ser uma linha de frente de confronto militar. Sob a doutrina do Comando Estratégico Conjunto da Frota do Norte, a Rússia reabriu e modernizou mais de 50 bases militares da era soviética ao longo do litoral ártico, instalando baterias de mísseis costeiros Bastion-P e sistemas antiaéreos S-400 com pintura camuflada de inverno.</p>
                <p>Com a adesão da Finlândia e da Suécia à OTAN, sete dos oito países que compõem o Conselho do Ártico (Canadá, Dinamarca/Groenlândia, EUA, Finlândia, Islândia, Noruega e Suécia) são agora membros da aliança ocidental, deixando a Rússia isolada na governança polar e elevando os riscos de atrito militar no topo do mundo.</p>`
            }
        ],
        tableTitle: "Comparativo Náutico: Rota do Ártico (NSR) vs Rota Suez",
        tableHeaders: ["Critério de Comparação", "Rota Marítima do Norte (Ártico)", "Rota do Canal de Suez (Tradicional)"],
        tableRows: [
            ["Distância (Xangai ➔ Roterdã)", "~15.000 km (8.000 MN)", "~20.000 km (10.800 MN) (-25%)"],
            ["Tempo Médio de Trânsito", "18 a 22 dias de viagem", "30 a 35 dias de viagem (-12 a 15 dias)"],
            ["Janela de Navegação", "Sazonal (Julho a Novembro sem gelo duro)", "Operacional 365 dias por ano"],
            ["Chokepoints / Riscos", "Estreito de Bering / Gelo e tempestades polares", "Malaca, Bab el-Mandeb, Canal de Suez"],
            ["Custos Adicionais", "Quebra-gelo obrigatório e seguro polar especial", "Taxas de pedágio do Canal de Suez"],
            ["Controle Geopolítico", "Supervisionado pela Rússia (Rosatom / FSB)", "Egito e marinhas ocidentais de patrulha"]
        ],
        quote: "O Ártico não é mais uma região remota e pacífica. O degelo transformou o topo do mundo em uma nova fronteira de competição estratégica e militar.",
        quoteAuthor: "Jens Stoltenberg, ex-Secretário-Geral da OTAN.",
        tacticalBoxTitle: "O Código Polar da Organização Marítima Internacional (IMO)",
        tacticalBoxText: "Em vigor desde 2017, o Código Polar da IMO impõe normas técnicas rígidas de segurança para qualquer navio operando no Ártico, incluindo cascos duplos com ligas de aço resistentes a temperaturas de -40°C, trajes de sobrevivência térmica para toda a tripulação e proibição absoluta do uso e transporte de óleo combustível pesado (HFO) para prevenir desastres ecológicos irreversíveis na tundra.",
        faq: [
            { q: "Por que a Rota do Ártico é mais curta do que navegar pelo canal de Suez?", a: "Porque a curvatura esférica da Terra faz com que as rotas traçadas pelas altas latitudes boreais próximas ao Polo Norte cubram distâncias consideravelmente menores do que as rotas pelo Equador." },
            { q: "Qualquer navio pode navegar pelo Ártico hoje em dia?", a: "Não. A maioria dos navios comerciais não possui cascos reforçados contra gelo (Ice Class) e é obrigada a contratar escolta cara de quebra-gelos nucleares russos." },
            { q: "Quem tem direito sobre as rotas marítimas do Ártico?", a: "A Rússia considera as águas da Rota do Norte como hidrovias históricas internas, enquanto os EUA e a União Europeia sustentam que são estreitos internacionais sujeitos à passagem em trânsito livre." }
        ]
    },
    {
        slug: "disputa-fronteira-himalaia",
        titulo: "A Linha de Controle Real: A Fronteira Nuclear Mais Alta do Mundo Onde Não se Disparam Tiros",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 11:30",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/82/China_India_CIA_map_border_disputes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "A 4.500 metros de altitude entre Índia e China, soldados de duas potências nucleares patrulham uma fronteira não demarcada de 3.488 km usando porretes.",
        lead: "A mais de 4.500 metros de altitude no planalto gelado de Ladakh, onde o ar rarefeito corta a respiração e as temperaturas despencam para 30 graus negativos no inverno, repousa a fronteira mais paradoxal e perigosa do planeta: a <strong>Linha de Controle Real (Line of Actual Control - LAC)</strong>. Trata-se de uma demarcação de fato de aproximadamente <strong>3.488 quilômetros</strong> que separa os dois gigantes demográficos da humanidade: a <strong>Índia</strong> e a <strong>República Popular da China</strong>, duas potências dotadas de arsenais atômicos que patrulham a fronteira sob uma proibição estrita de disparar armas de fogo.",
        sections: [
            {
                h2: "A cicatriz imperial britânica: a Linha McMahon e Aksai Chin",
                content: `<p>A raiz da disputa remonta à colonização britânica do subcontinente indiano. Em 1914, na Convenção de Simla, o diplomata britânico Sir Henry McMahon traçou a chamada <strong>Linha McMahon</strong> como a fronteira oficial entre a Índia Britânica e o Tibete.</p>
                <p>A China nunca reconheceu o tratado, afirmando que o Tibete era parte soberana da China e não tinha autoridade internacional para assinar fronteiras. Do outro lado, no setor ocidental, fica <strong>Aksai Chin</strong>, um deserto de sal de alta altitude de 38 mil km² reivindicado pela Índia como parte de Jammu e Caxemira, mas ocupado pela China para construir a estratégica Rodovia Nacional G219 ligando o Tibete a Xinjiang.</p>
                <p>O desacordo explodiu na <strong>Guerra Sino-Indiana de 1962</strong>, um conflito relâmpago de um mês que terminou com a vitória militar chinesa e o congelamento das posições na Linha de Controle Real.</p>`
            },
            {
                h2: "O protocolo de 1996: a proibição de armas de fogo",
                content: `<p>Para evitar que patrulhas territoriais que se cruzam na neblina desencadeassem uma guerra nuclear, os governos de Nova Délhi e Pequim assinaram em <strong>1996 um acordo histórico de medidas de confiança</strong>.</p>
                <p>O Artigo VI do tratado proibiu terminantemente que qualquer soldado das patrulhas fronteiriças disparasse tiros, realizasse explosões ou carregasse armas de fogo carregadas a menos de dois quilômetros da Linha de Controle Real.</p>
                <p>Isso deu origem a uma dinâmica bizarra e brutal: confrontos territoriais corpo a corpo onde tropas brigam com socos, pedras e bastões de madeira envoltos em arame farpado e pregos de aço para empurrar o inimigo sem violar formalmente o tratado anti-armas de fogo.</p>`
            },
            {
                h2: "O massacre do Vale de Galwan em 2020",
                content: `<p>Em <strong>15 de junho de 2020</strong>, a trégua de quatro décadas desmoronou em uma das batalhas mais primitivas e mortais da geopolítica moderna. No Vale de Galwan, em uma encosta íngreme sobre o rio congelado, soldados indianos e chineses entraram em combate corporal selvagem no meio da escuridão.</p>
                <p>Sem disparar um único tiro de fuzil, <strong>20 soldados indianos e pelo menos quatro militares chineses morreram</strong> por traumatismos cranianos, quedas em abismos rochosos e hipotermia nas águas gélidas do rio Galwan.</p>
                <p>O episódio quebrou a confiança mútua e levou ambos os países a mobilizarem mais de <strong>50 mil tropas adicionais, tanques T-90 e caças de combate</strong> cada um para as bases aéreas de alta altitude de Ladakh e Tibete.</p>`
            },
            {
                h2: "A guerra da infraestrutura: túneis, pontes e cidades fronteiriças",
                content: `<p>Hoje, o verdadeiro campo de batalha na LAC é a engenharia pesada. A Índia investiu bilhões de dólares na agência Border Roads Organisation (BRO), inaugurando o <strong>Túnel de Atal</strong> e a rodovia estratégica Darbuk-Shyok-Daulat Beg Oldie (DS-DBO), que alcança a pista de pouso militar mais alta do mundo, a poucos quilômetros do Passo de Karakoram.</p>
                <p>Em resposta, a China construiu centenas de vilarejos fortificados de uso duplo (chamados vilarejos <em>Xiaokang</em>) colados à linha divisória, conectando ferrovias de alta velocidade de Lhasa à fronteira e assegurando superioridade logística para abastecer divisões blindadas em pleno inverno ártico dos Himalaias.</p>`
            }
        ],
        tableTitle: "Os Três Setores da Linha de Controle Real (LAC)",
        tableHeaders: ["Setor Fronteiriço", "Extensão Geográfica", "Região em Litígio", "Ponto Estratégico Crítico"],
        tableRows: [
            ["Setor Ocidental", "~1.597 km de fronteira", "Ladakh vs Aksai Chin (Xinjiang/Tibete)", "Vale de Galwan, Lago Pangong Tso e Daulat Beg Oldie"],
            ["Setor Central", "~545 km de fronteira", "Himachal Pradesh e Uttarakhand vs Tibete", "Passos montanhosos com menor atividade militar"],
            ["Setor Oriental", "~1.346 km de fronteira", "Arunachal Pradesh vs Tibete do Sul", "Monastério histórico de Tawang e Linha McMahon"]
        ],
        quote: "Nem um centímetro de terra pode ser cedido por qualquer um dos lados. O Himalaia é a fronteira mais dura do planeta, onde a altitude mata mais soldados do que as balas.",
        quoteAuthor: "General Manoj Pande, ex-Chefe do Estado-Maior do Exército Indiano.",
        tacticalBoxTitle: "O Lago Pangong Tso: Uma Fronteira Fluvial a 4.200 Metros",
        tacticalBoxText: "O lago endorreico de Pangong Tso, com 134 km de extensão nas montanhas, é dividido entre os dois países: um terço sob controle da Índia e dois terços sob controle da China. As montanhas que caem abruptamente na água formam esporões rochosos conhecidos militarmente como 'Fingers' (Dedos de 1 a 8). Patrulhas em lanchas de alta velocidade blindadas travam perseguições perigosas nas águas salinas do lago disputando cada ponta rochosa.",
        faq: [
            { q: "O que significa a sigla LAC entre Índia e China?", a: "Significa Line of Actual Control (Linha de Controle Real), a linha de demarcação fática militar que separa os territórios controlados por indianos e chineses nos Himalaias." },
            { q: "Por que os soldados usam pedras e porretes em vez de armas de fogo?", a: "Por causa de um tratado assinado em 1996 que proíbe expressamente tiros e explosivos a menos de 2 km da fronteira para evitar que incidentes locais escalem para uma guerra nuclear." },
            { q: "Qual a importância de Aksai Chin para a China?", a: "Aksai Chin abriga a Rodovia G219, a principal artéria terrestre construída pela China para conectar suas duas regiões mais sensíveis e instáveis: o Tibete e Xinjiang." }
        ]
    },
    {
        slug: "nicosia-cidade-dividida",
        titulo: "Nicósia: A Última Capital Dividida da Europa e a Linha Verde da ONU Congelada no Tempo",
        categoria: "Fronteiras",
        data: "11 Out 2026 - 09:30",
        tempoLeitura: "8 min",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Cyprus_districts_named.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
        resumo: "Desde 1974, a capital do Chipre é cortada ao meio por muros, sacos de areia e uma zona tampão da ONU, separando gregos e turcos após a Operação Átila.",
        lead: "Trinta e cinco anos após a queda do Muro de Berlim em novembro de 1989, existe ainda no continente europeu uma capital milenar partida exatamente ao meio por muros de concreto, sacos de areia, arame farpado e postos de sentinela com guardas armados: <strong>Nicósia</strong> (Lefkosia para os gregos, Lefkoşa para os turcos), a capital da ilha do <strong>Chipre</strong>. Cortando a cidade de leste a oeste, a <strong>Linha Verde da ONU (Zona Tampão das Nações Unidas)</strong> é uma cicatriz cartográfica congelada no tempo desde a guerra de 1974.",
        sections: [
            {
                h2: "A origem da Linha Verde: o traço de lápis de cera em 1963",
                content: `<p>A divisão de Nicósia começou antes da invasão militar de 1974. Após conquistar a independência da coroa britânica em 1960 sob uma constituição complexa de partilha de poder entre a maioria cipriota-grega (cerca de 78%) e a minoria cipriota-turca (cerca de 18%), o país mergulhou em violência sectária em dezembro de 1963 (o chamado "Natal Sangrento").</p>
                <p>Para estancar os confrontos de rua, o general britânico Peter Young abriu um mapa de Nicósia na mesa e, usando um <strong>lápis de cera verde</strong>, traçou uma linha divisória de cessar-fogo separando os bairros gregos dos bairros turcos. Aquele traço improvisado de lápis batizou a <strong>Linha Verde</strong>, que permanece viva até hoje.</p>`
            },
            {
                h2: "O golpe de 1974 e a Operação Átila",
                content: `<p>A ruptura definitiva aconteceu no verão de 1974. A junta militar que governava a Grécia patrocinou um golpe de Estado em Chipre liderado pela organização paramilitar EOKA-B para derrubar o presidente arcebispo Makarios e forçar a <em>Enosis</em> (anexação da ilha à Grécia).</p>
                <p>Citando o Tratado de Garantia de 1960, a <strong>Turquia lançou em 20 de julho de 1974 a Operação Átila</strong>, uma invasão anfíbia e de paraquedistas de grande escala. As forças armadas turcas ocuparam o terço norte da ilha (36% do território) e avançaram até Nicósia, provocando o deslocamento forçado de mais de 160 mil cipriotas gregos para o sul e dezenas de milhares de cipriotas turcos para o norte.</p>
                <p>Em 1983, a região ocupada proclamou unilateralmente a <strong>República Turca do Chipre do Norte (RTCN)</strong>, um Estado de fato reconhecido internacionalmente apenas pelo governo de Ancara.</p>`
            },
            {
                h2: "A Zona Tampão da ONU: um museu a céu aberto de 1974",
                content: `<p>A Linha Verde é patrulhada ininterruptamente pela Força das Nações Unidas para Manutenção da Paz no Chipre (<strong>UNFICYP</strong>), uma das missões de capacetes azuis mais longas da história da ONU.</p>
                <p>No centro antigo de Nicósia, circunscrito pelas históricas muralhas venezianas em formato de estrela construídas no século XVI, a zona tampão estreita-se em alguns pontos para meros <strong>3,3 metros de largura</strong> entre sacadas de edifícios residenciais. Em outras áreas rurais da ilha, ela se alarga por até 7 quilômetros.</p>
                <p>Dentro da zona de exclusão de Nicósia, o tempo parou em 1974: o antigo <strong>Aeroporto Internacional de Nicósia</strong> repousa abandonado com um avião comercial da Cyprus Airways coberto de poeira na pista deserta, concessionárias de automóveis exibem carros Toyota intactos de 1974 com zero quilômetro e lojas permanecem com vitrines congeladas sob o olhar de patrulhas multinacionais.</p>`
            },
            {
                h2: "A travessia de Ledra Street e o fracasso do Plano Annan",
                content: `<p>Durante quase três décadas, nenhuma pessoa cruzava a linha de separação. A primeira abertura histórica ocorreu apenas em <strong>abril de 2003</strong>, quando as autoridades do norte abriram o posto de controle de Ledra Palace, permitindo que famílias separadas visitassem suas antigas casas de infância.</p>
                <p>Em 2004, a ONU propôs o <strong>Plano Annan</strong> para reunificar Chipre como uma federação bicomunitária antes da entrada da ilha na União Europeia. Em referendo simultâneo, 65% dos cipriotas turcos votaram 'Sim', mas 76% dos cipriotas gregos rejeitaram o plano por considerarem insuficientes as garantias de retirada dos 40 mil soldados turcos estacionados no norte.</p>
                <p>Hoje, os turistas podem caminhar pela rua comercial de pedestres de <strong>Ledra Street</strong>, carimbar o passaporte em uma cabine e cruzar em dez segundos entre a zona do euro da República de Chipre e a zona da lira turca do Chipre do Norte, experimentando o peso da última fronteira militarizada urbana da Europa.</p>`
            }
        ],
        tableTitle: "A Divisão de Chipre em Números",
        tableHeaders: ["Indicador Territorial", "República de Chipre (Sul)", "Chipre do Norte (RTCN)"],
        tableRows: [
            ["População Estimada", "~920 mil habitantes (maioria grega)", "~380 mil habitantes (cipriotas turcos e colonos)"],
            ["Área Controlada", "~64% da ilha de Chipre", "~36% da ilha de Chipre"],
            ["Reconhecimento Internacional", "Reconhecida pela ONU e membro da UE (2004)", "Reconhecida exclusivamente pela Turquia"],
            ["Moeda Oficial", "Euro (€)", "Lira Turca (₺)"],
            ["Presença Militar", "Guarda Nacional Cipriota (~12 mil tropas)", "Forças Armadas da Turquia (~35 a 40 mil tropas)"],
            ["Bases Soberanas Britânicas", "Akrotiri e Dhekelia (3% da ilha - bases do Reino Unido)", "Fronteira leste com Dhekelia"]
        ],
        quote: "Nicósia é a prova viva de que quando a diplomacia internacional falha em resolver um conflito, uma linha provisória de lápis de cera pode se transformar em um muro permanente de meio século.",
        quoteAuthor: "Relatório de Missão UNFICYP // Nações Unidas, Nicósia.",
        tacticalBoxTitle: "Varosha: A Cidade Fantasma Reaberta como Ponto de Tensão",
        tacticalBoxText: "No leste da ilha, o balneário paradisíaco de Varosha (Famagusta) — outrora frequentado por estrelas de Hollywood como Elizabeth Taylor e Brigitte Bardot — foi totalmente evacuado e cercado com arame farpado pelo exército turco em 1974, permanecendo como uma cidade fantasma intacta por 46 anos sob resoluções protetivas da ONU até ter sua orla parcialmente reaberta unilateralmente em 2020 pelas autoridades turcas.",
        faq: [
            { q: "Por que Nicósia é considerada a última capital dividida da Europa?", a: "Porque desde a queda do Muro de Berlim em 1989, Nicósia é a única capital europeia ainda cortada ao meio por muros de concreto, arame farpado e uma zona militar desmilitarizada operada pela ONU." },
            { q: "É possível atravessar a fronteira em Nicósia a pé?", a: "Sim. Desde 2008, o posto de controle de pedestres na rua comercial de Ledra Street permite cruzar a Linha Verde a pé mediante apresentação de passaporte ou documento de identidade europeu." },
            { q: "Qual é o status da República Turca do Chipre do Norte?", a: "A RTCN é um Estado autoproclamado em 1983 que não possui reconhecimento diplomático internacional por nenhum país do mundo, com exceção exclusiva da Turquia." }
        ]
    }
];

function generatePostHtml(p) {
    const sectionsHtml = p.sections.map(s => `
        <h2>${s.h2}</h2>
        ${s.content}
    `).join('\n');

    const tableHeadersHtml = p.tableHeaders.map(h => `<th class="p-3.5">${h}</th>`).join('\n');

    const tableRowsHtml = p.tableRows.map(row => `
        <tr>
            ${row.map((cell, idx) => {
                if (idx === 0) return `<td class="p-3.5 font-bold text-white">${cell}</td>`;
                if (idx === 1) return `<td class="p-3.5 text-amber-400">${cell}</td>`;
                const isRisk = cell.includes('Risco') || cell.includes('Crítico') || cell.includes('Míss') || cell.includes('Ameaça') || cell.includes('Proibição');
                return `<td class="p-3.5 ${isRisk ? 'text-rose-400 font-bold' : 'text-slate-300'}">${cell}</td>`;
            }).join('\n')}
        </tr>
    `).join('\n');

    const faqItemsHtml = p.faq.map(f => `
        <div class="bg-slate-900/70 border border-white/10 rounded-xl p-5">
            <h4 class="text-sm font-bold text-white mb-2 font-heading">${f.q}</h4>
            <p class="text-xs text-slate-300 leading-relaxed">${f.a}</p>
        </div>
    `).join('\n');

    return `<!DOCTYPE html>
<html lang="pt-br" class="scroll-smooth bg-[#090a0f]">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${p.titulo} | Dossiê VitaleGeo</title>
    <meta name="description" content="${p.resumo}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="canonical" href="https://www.vitalegeo.com.br/blog/${p.slug}/">

    <!-- Open Graph / Redes Sociais -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.vitalegeo.com.br/blog/${p.slug}/">
    <meta property="og:title" content="${p.titulo} | Dossiê VitaleGeo">
    <meta property="og:description" content="${p.resumo}">
    <meta property="og:image" content="${p.img}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${p.titulo} | Dossiê VitaleGeo">
    <meta name="twitter:description" content="${p.resumo}">
    <meta name="twitter:image" content="${p.img}">

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${p.titulo}",
      "description": "${p.resumo}",
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
      "datePublished": "2026-10-11T12:00:00-03:00",
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
                                h3: { color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '1.8em', fontWeight: '600' },
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
            <!-- Breadcrumb -->
            <div class="flex items-center justify-center gap-2 text-xs text-slate-500 font-mono mb-4 uppercase">
                <a href="/" class="hover:text-amber-400 transition">Home</a>
                <span>/</span>
                <a href="/blog" class="hover:text-amber-400 transition">Posts</a>
                <span>/</span>
                <span class="text-amber-400">${p.categoria}</span>
            </div>

            <div class="carto-badge mb-6">
                <span>Dossiê Geopolítico · Investigação Territorial</span>
            </div>
            
            <h1 class="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                ${p.titulo}
            </h1>

            <div class="flex items-center justify-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                <span><i class="ph-bold ph-calendar text-amber-400"></i> ${p.data.split(' - ')[0]}</span>
                <span>•</span>
                <span><i class="ph-bold ph-user text-amber-400"></i> Agnaldo Batista</span>
                <span>•</span>
                <span><i class="ph-bold ph-clock text-amber-400"></i> ${p.tempoLeitura} (Dossiê Completo)</span>
            </div>
        </div>
    </header>

    <!-- Corpo do Artigo -->
    <main class="page-content">
        <article class="py-16 px-6">
            <div class="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-heading prose-headings:text-white prose-a:text-amber-400 hover:prose-a:text-white prose-img:rounded-xl">
                
                <!-- Imagem Principal Documental -->
                <figure class="mb-12 not-prose">
                    <img src="${p.img}" alt="${p.titulo}" class="w-full h-auto shadow-2xl border border-white/10 rounded-2xl object-cover aspect-video">
                    <figcaption class="text-center font-mono text-[11px] text-slate-500 mt-3 uppercase tracking-wider">
                        FIG 01 // Registro cartográfico oficial e documental: representação tática do território em disputa.
                    </figcaption>
                </figure>

                ${p.lead}

                ${sectionsHtml}

                <blockquote>
                    "${p.quote}"
                    <footer class="text-xs text-slate-400 not-italic mt-2 font-mono">— ${p.quoteAuthor}</footer>
                </blockquote>

                <!-- Tabela Comparativa de Dados Táticos -->
                <div class="my-10 overflow-x-auto not-prose">
                    <table class="w-full text-left text-sm border border-white/10 rounded-xl overflow-hidden bg-slate-900/60 font-mono">
                        <thead class="bg-slate-800 text-amber-400 text-xs uppercase tracking-wider">
                            <tr>
                                ${tableHeadersHtml}
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/5 text-slate-300">
                            ${tableRowsHtml}
                        </tbody>
                    </table>
                </div>

                <!-- Box de Curiosidade Tática // Detalhe Técnico -->
                <div class="my-10 bg-slate-900/90 border border-white/10 rounded-2xl p-6 not-prose shadow-xl">
                    <div class="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                        <i class="ph-bold ph-shield-check text-base"></i> Análise Estratégica Operacional
                    </div>
                    <h4 class="text-lg font-heading font-bold text-white mb-2">${p.tacticalBoxTitle}</h4>
                    <p class="text-sm text-slate-300 leading-relaxed mb-4">
                        ${p.tacticalBoxText}
                    </p>
                    <p class="text-xs text-slate-400 font-mono">
                        ARQUIVO // RELATÓRIO DOCUMENTAL DE INTELIGÊNCIA GEOGRÁFICA
                    </p>
                </div>

                <!-- Box de Retenção Interativa // Ferramenta do VitaleGeo -->
                <div class="my-10 bg-slate-900/80 border border-amber-400/30 rounded-2xl p-6 not-prose shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span class="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider inline-flex items-center gap-1.5 mb-2">
                            <i class="ph-bold ph-compass text-sm"></i> Ferramenta Interativa
                        </span>
                        <h4 class="text-lg font-bold text-white mb-1">Meça distâncias reais e áreas no mapa</h4>
                        <p class="text-sm text-slate-400">Calcule trajetos geodésicos e compare dimensões de fronteiras na calculadora do VitaleGeo.</p>
                    </div>
                    <a href="/ferramentas/calculadora-distancia/" class="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs px-5 py-3 rounded-xl transition shadow-lg shadow-amber-400/20 inline-flex items-center gap-2 font-mono">
                        <i class="ph-bold ph-ruler"></i> Calcular Distâncias Reais
                    </a>
                </div>

                <!-- FAQ Cartográfico -->
                <div class="my-12 not-prose">
                    <h3 class="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes
                    </h3>
                    <div class="space-y-4">
                        ${faqItemsHtml}
                    </div>
                </div>

            </div>
        </article>

        <!-- Chamada para Ação / Canal YouTube -->
        <section class="pb-16 px-6">
            <div class="max-w-3xl mx-auto bg-slate-900/80 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden shadow-2xl">
                <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-400/5 blur-3xl pointer-events-none rounded-full"></div>
                <div class="carto-badge mb-4">
                    <span>Análises Cartográficas em Vídeo</span>
                </div>
                <h3 class="text-2xl font-heading font-bold text-white mb-2">Gostou deste dossiê investigativo?</h3>
                <p class="text-slate-400 mb-6 text-sm max-w-lg mx-auto">No canal oficial do VitaleGeo desvendamos mapas táticos, chokepoints navais e rotas geopolíticas com animações em alta definição.</p>
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
            <div class="grid grid-cols-4 gap-2 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <a href="/" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-house text-xl text-amber-400"></i> Home
                </a>
                <a href="/jogos" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-game-controller text-xl"></i> Jogos
                </a>
                <a href="/ferramentas" class="flex flex-col items-center gap-1 hover:text-white transition">
                    <i class="ph-fill ph-wrench text-xl"></i> Ferramentas
                </a>
                <a href="/blog" class="flex flex-col items-center gap-1 text-white">
                    <i class="ph-fill ph-newspaper text-xl text-amber-400"></i> Blog
                </a>
            </div>
        </div>
    </nav>
</body>
</html>`;
}

function generateAstroMd(p) {
    const sectionsHtml = p.sections.map(s => `
<h2>${s.h2}</h2>
${s.content}
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

${sectionsHtml}

<blockquote>
"${p.quote}"
<footer class="text-xs text-slate-400 not-italic mt-2 font-mono">— ${p.quoteAuthor}</footer>
</blockquote>

<div class="my-8 overflow-x-auto not-prose">
<table class="w-full text-left text-xs font-mono border border-white/10 rounded-lg overflow-hidden bg-slate-900/60">
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
<i class="ph-bold ph-shield-check"></i> ${p.tacticalBoxTitle}
</h4>
<p class="text-sm text-slate-300 mb-2">${p.tacticalBoxText}</p>
</div>
`;
}

console.log("Iniciando geração dos 9 novos artigos...");

for (const p of newPosts) {
    const dir = path.join(blogDir, p.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    // 1. Escrever index.html
    const htmlPath = path.join(dir, 'index.html');
    fs.writeFileSync(htmlPath, generatePostHtml(p), 'utf8');

    // 2. Escrever src/content/blog/<slug>.md
    const mdPath = path.join(srcBlogDir, `${p.slug}.md`);
    fs.writeFileSync(mdPath, generateAstroMd(p), 'utf8');

    console.log(`✓ Gerado com sucesso: ${p.slug}`);
}

// 3. Atualizar assets/js/posts.js
console.log("Atualizando assets/js/posts.js...");
let postsJs = fs.readFileSync(postsJsFile, 'utf8');

const all10List = [
    {
        titulo: "O Dilema de Malaca: O Chokepoint Onde 80% do Petróleo da Ásia Pode Ser Bloqueado",
        categoria: "Geopolítica",
        data: "11 Out 2026 - 23:00",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Strait_of_Malacca_%2836759635615%29.jpg/1280px-Strait_of_Malacca_%2836759635615%29.jpg",
        link: "dilema-de-malaca/",
        resumo: "Com apenas 2,8 km de largura no seu ponto mais crítico, o Estreito de Malaca concentra 100 mil navios por ano e é o maior gargalo energético de Pequim."
    },
    ...newPosts.map(p => ({
        titulo: p.titulo,
        categoria: p.categoria,
        data: p.data,
        img: p.img,
        link: `${p.slug}/`,
        resumo: p.resumo
    }))
];

// Remover dilema-de-malaca duplicado se já estiver no topo
postsJs = postsJs.replace(/const blogPosts = \[\s*\{[\s\S]*?link: "dilema-de-malaca\/",[\s\S]*?\},/g, 'const blogPosts = [');

const newObjectsCode = all10List.map(item => `    {
        titulo: "${item.titulo.replace(/"/g, '\\"')}",
        categoria: "${item.categoria}",
        data: "${item.data}",
        img: "${item.img}",
        link: "${item.link}",
        resumo: "${item.resumo.replace(/"/g, '\\"')}"
    },`).join('\n');

postsJs = postsJs.replace('const blogPosts = [', `const blogPosts = [\n${newObjectsCode}`);
fs.writeFileSync(postsJsFile, postsJs, 'utf8');

console.log("Sucesso! Todos os 10 posts foram criados, integrados e configurados.");
