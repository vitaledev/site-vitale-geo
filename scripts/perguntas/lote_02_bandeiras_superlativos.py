# -*- coding: utf-8 -*-
"""LOTE 02: PERGUNTAS 301 A 400 (BANDEIRAS, CAPITAIS, LOCALIZAÇÃO, EXTENSÃO TERRITORIAL & POPULAÇÃO)

Substituição oficial do antigo lote de enclaves em cumprimento à diretriz editorial:
- Bandeiras do Mundo (Vexilologia, símbolos e cores)
- Capitais do Mundo (Pegadinhas, cidades planejadas e sedes governamentais)
- Onde Fica & Localização Geográfica (Mares, sub-regiões e vizinhos)
- Extensão Territorial & Superlativos de Área (Maior e menor país por região)
- População & Demografia (Maiores populações e densidades demográficas)
- Características Nacionais Singulares (Idiomas, moedas e particularidades)
"""

PERGUNTAS_LOTE_02 = [
    # --- BANDEIRAS DO MUNDO (301 a 335) ---
    {
        'id': 301,
        'pergunta': 'Qual país possui a única bandeira nacional do mundo que não é retangular nem quadrada, sendo formada por dois triângulos sobrepostos?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Nepal', 'Butão', 'Sri Lanka', 'Camboja'],
        'resposta': 0,
        'explicacao': 'A bandeira do Nepal é a única do mundo com formato não quadrilátero; os dois triângulos simbolizam os picos do Himalaia e as duas religiões predominantes: hinduísmo e budismo.',
        'dificuldade': 'facil'
    },
    {
        'id': 302,
        'pergunta': 'Qual país africano exibe em sua bandeira oficial a imagem de um fuzil AK-47 cruzado com uma enxada sobre um livro aberto e uma estrela amarela?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Moçambique', 'Angola', 'Zimbábue', 'Etiópia'],
        'resposta': 0,
        'explicacao': 'A bandeira de Moçambique simboliza a luta armada pela independência (o fuzil), a agricultura (a enxada) e a educação/estudo (o livro aberto).',
        'dificuldade': 'facil'
    },
    {
        'id': 303,
        'pergunta': 'Qual país europeu e qual microestado são os dois únicos membros soberanos da ONU que possuem bandeiras nacionais de proporção rigorosamente quadrada (1:1)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Suíça e Vaticano', 'Mônaco e Liechtenstein', 'San Marino e Andorra', 'Malta e Luxemburgo'],
        'resposta': 0,
        'explicacao': 'Apenas a Suíça e a Cidade do Vaticano adotam proporção oficial quadrada (1:1) em suas bandeiras soberanas de estado.',
        'dificuldade': 'facil'
    },
    {
        'id': 304,
        'pergunta': 'As bandeiras de quais dois países soberanos do mundo são quase idênticas (tricolor vertical azul, amarelo e vermelho), diferenciando-se apenas por um tom sutil de azul?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Romênia e Chade', 'Mônaco e Polônia', 'Irlanda e Costa do Marfim', 'Indonésia e Cingapura'],
        'resposta': 0,
        'explicacao': 'A Romênia e o Chade compartilham exatamente o mesmo padrão tricolor vertical (azul, amarelo, vermelho); a Romênia adotou as cores no século XIX e o Chade após a independência em 1960.',
        'dificuldade': 'facil'
    },
    {
        'id': 305,
        'pergunta': 'Qual país da América do Sul tem a única bandeira nacional do mundo cujos lados da frente (anverso) e de trás (reverso) apresentam brasões oficiais diferentes?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Paraguai', 'Uruguai', 'Bolívia', 'Suriname'],
        'resposta': 0,
        'explicacao': 'A bandeira do Paraguai exibe no anverso o Brasão de Armas da República (com a estrela de maio) e no reverso o Selo da Fazenda (com um leão coroado sob o Barrete Frígio da Liberdade).',
        'dificuldade': 'medio'
    },
    {
        'id': 306,
        'pergunta': 'Qual país do Sudeste Asiático exibe a silhueta do complexo arquitetônico de Angkor Wat em sua bandeira nacional?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Camboja', 'Laos', 'Tailândia', 'Vietnã'],
        'resposta': 0,
        'explicacao': 'O templo de Angkor Wat, construído no século XII pela civilização Khmer, é o símbolo central e orgulho nacional estampado na bandeira do Camboja.',
        'dificuldade': 'facil'
    },
    {
        'id': 307,
        'pergunta': 'Qual país insular do Caribe possui uma noz-moscada estilizada desenhada no triângulo vermelho esquerdo de sua bandeira nacional?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Granada', 'Barbados', 'Trinidad e Tobago', 'Santa Lúcia'],
        'resposta': 0,
        'explicacao': 'Granada é conhecida historicamente como a Ilha das Especiarias e é uma das maiores produtoras globais de noz-moscada, destacando o fruto em sua bandeira.',
        'dificuldade': 'medio'
    },
    {
        'id': 308,
        'pergunta': 'Qual país do Oriente Médio traz estampado no centro de sua faixa branca horizontal a silhueta de um cedro verde milenar?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Líbano', 'Jordânia', 'Síria', 'Kuwait'],
        'resposta': 0,
        'explicacao': 'O Cedro-do-Líbano (Cedrus libani) é o símbolo de imortalidade, resistência e pureza do país, citado repetidas vezes em textos bíblicos e na história fenícia.',
        'dificuldade': 'facil'
    },
    {
        'id': 309,
        'pergunta': 'Qual país da América Central tem a única bandeira nacional do mundo que exibe uma Bíblia aberta no centro do seu brasão de armas?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['República Dominicana', 'El Salvador', 'Honduras', 'Guatemala'],
        'resposta': 0,
        'explicacao': 'O brasão da República Dominicana contém uma Bíblia aberta no Evangelho de São João (capítulo 8, versículo 32: "E conhecereis a verdade, e a verdade vos libertará").',
        'dificuldade': 'medio'
    },
    {
        'id': 310,
        'pergunta': 'Qual país do Cáucaso adotou em 2004 a famosa bandeira de cinco cruzes (uma grande cruz vermelha de São Jorge e quatro pequenas cruzes bolnisi nos quadrantes)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Geórgia', 'Armênia', 'Azerbaijão', 'Grécia'],
        'resposta': 0,
        'explicacao': 'A bandeira de cinco cruzes da Geórgia remonta ao Reino Medieval da Geórgia (século XIV) e à tradição das cruzes de Jerusalém.',
        'dificuldade': 'facil'
    },
    {
        'id': 311,
        'pergunta': 'Qual país do Golfo Pérsico tem uma bandeira bordô e branca separada por uma linha em zigue-zague com exatamente nove pontas brancas?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Catar', 'Bahrein', 'Emirados Árabes Unidos', 'Omã'],
        'resposta': 0,
        'explicacao': 'O Catar adota a cor bordô (castanho-avermelhado) e nove dentes brancos serrilhados, simbolizando que o país foi o nono membro dos emirados reconciliados em 1916.',
        'dificuldade': 'medio'
    },
    {
        'id': 312,
        'pergunta': 'Qual país insular do Caribe possui em sua bandeira um tridente quebrado dourado sobre uma faixa vertical amarela ladeada por faixas azuis ultramar?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Barbados', 'Bahamas', 'Jamaica', 'Antígua e Barbuda'],
        'resposta': 0,
        'explicacao': 'O tridente de Barbados representa a quebra do domínio colonial britânico (o cabo quebrado) e a ligação histórica e marítima da ilha com o oceano.',
        'dificuldade': 'facil'
    },
    {
        'id': 313,
        'pergunta': 'Qual país africano exibe em sua bandeira um falcão/pássaro esculpido em pedra-sabão conhecido como o "Pássaro de Pedra"?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Zimbábue', 'Botsuana', 'Zâmbia', 'Namíbia'],
        'resposta': 0,
        'explicacao': 'O Pássaro do Zimbábue é uma ave emblemática cujas estátuas originais foram escavadas nas ruínas do Grande Zimbábue, reino pré-colonial do século XI.',
        'dificuldade': 'medio'
    },
    {
        'id': 314,
        'pergunta': 'Qual nação da América Central possui na sua bandeira um pássaro Quetzal pousado sobre um pergaminho que traz a data da independência (15 de setembro de 1821)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Guatemala', 'Costa Rica', 'Nicarágua', 'Panamá'],
        'resposta': 0,
        'explicacao': 'O Quetzal-resplandecente é a ave nacional da Guatemala, símbolo supremo de liberdade e soberania, que também dá nome à moeda nacional.',
        'dificuldade': 'facil'
    },
    {
        'id': 315,
        'pergunta': 'A bandeira de qual país do Leste Asiático contém quatro trigramas do antigo I Ching (Geon, Ri, Gam, Gon) ao redor do círculo do Taegeuk (yin e yang)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Coreia do Sul', 'Japão', 'Mongólia', 'Taiwan'],
        'resposta': 0,
        'explicacao': 'A bandeira da Coreia do Sul (Taegeukgi) expressa harmonia cósmica: o círculo central representa o equilíbrio dos opostos e os trigramas representam céu, fogo, água e terra.',
        'dificuldade': 'facil'
    },
    {
        'id': 316,
        'pergunta': 'Qual país do Sudeste Asiático tem a bandeira bicolor vermelha e branca rigorosamente idêntica às proporções e cores da bandeira de Mônaco?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Indonésia', 'Singapura', 'Malásia', 'Filipinas'],
        'resposta': 0,
        'explicacao': 'A bandeira da Indonésia é horizontalmente dividida em vermelho e branco, idêntica em cores à de Mônaco, mas com proporção ligeiramente mais alongada (2:3 contra 4:5 de Mônaco).',
        'dificuldade': 'medio'
    },
    {
        'id': 317,
        'pergunta': 'Qual país da África Oriental tem na sua bandeira um escudo guerreiro tradicional Masai acompanhado por duas lanças brancas cruzadas?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Quênia', 'Uganda', 'Tanzânia', 'Ruanda'],
        'resposta': 0,
        'explicacao': 'O escudo Masai e as lanças na bandeira do Quênia simbolizam a determinação do povo queniano em defender a sua liberdade e soberania nacional.',
        'dificuldade': 'facil'
    },
    {
        'id': 318,
        'pergunta': 'Qual país insular do Caribe possui a única bandeira nacional do mundo que não utiliza nem vermelho, nem branco e nem azul em sua composição?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Jamaica', 'Bahamas', 'São Vicente e Granadinas', 'Dominica'],
        'resposta': 0,
        'explicacao': 'A bandeira da Jamaica consiste em uma cruz de Santo André amarela sobreposta a triângulos verdes e pretos; não contém qualquer traço de vermelho, branco ou azul.',
        'dificuldade': 'facil'
    },
    {
        'id': 319,
        'pergunta': 'Qual país do Caribe tem um papagaio-imperial (Amazona imperialis) empoleirado sobre um ramo no centro de sua bandeira, incluindo detalhes em roxo?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Dominica', 'Santa Lúcia', 'São Cristóvão e Névis', 'Haiti'],
        'resposta': 0,
        'explicacao': 'Dominica é um dos raríssimos países que utilizam a cor roxa (púrpura) na bandeira oficial, presente nas penas do papagaio Sisserou, ave símbolo nacional.',
        'dificuldade': 'medio'
    },
    {
        'id': 320,
        'pergunta': 'Qual país nórdico foi o pioneiro a adotar o padrão da Cruz Nórdica (cruz descentralizada para a esquerda), que inspirou Dinamarca, Noruega, Suécia, Finlândia e Islândia?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Dinamarca (Dannebrog)', 'Suécia', 'Noruega', 'Islândia'],
        'resposta': 0,
        'explicacao': 'A Dannebrog da Dinamarca é reconhecida pelo Guinness como a bandeira nacional contínua mais antiga do mundo em uso, documentada desde o século XIII (Batalha de Lindanise, 1219).',
        'dificuldade': 'facil'
    },
    {
        'id': 321,
        'pergunta': 'Qual país insular do Pacífico Sul exibe na sua bandeira um pássaro fragata dourado voando sobre um sol nascente dourado que emerge de ondas azuis e brancas?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Kiribati', 'Fiji', 'Vanuatu', 'Palau'],
        'resposta': 0,
        'explicacao': 'A bandeira de Kiribati retrata a fragata que simboliza o domínio dos mares e a liberdade, enquanto os 17 raios solares representam as 16 Ilhas Gilbert mais a Ilha Banaba.',
        'dificuldade': 'medio'
    },
    {
        'id': 322,
        'pergunta': 'Qual país da América Central tem na bandeira cinco vulcões que emergem do mar, iluminados por um gorro frígio vermelho com raios de luz?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Nicarágua', 'El Salvador', 'Costa Rica', 'Honduras'],
        'resposta': 0,
        'explicacao': 'Tanto a Nicarágua quanto El Salvador herdam o brasão das Províncias Unidas da América Central, com cinco vulcões simbolizando os cinco estados originais da federação.',
        'dificuldade': 'medio'
    },
    {
        'id': 323,
        'pergunta': 'Qual país do norte da África e qual país do sudoeste da Europa utilizam como emblema central da bandeira o símbolo da Esfera Armilar manuelina?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Portugal', 'Espanha', 'Marrocos', 'Cabo Verde'],
        'resposta': 0,
        'explicacao': 'A Esfera Armilar na bandeira de Portugal representa o instrumento astronômico e náutico utilizado pelos navegadores durante a Era dos Descobrimentos marítimos.',
        'dificuldade': 'facil'
    },
    {
        'id': 324,
        'pergunta': 'Qual país da Ásia Central exibe na sua bandeira um sol dourado com 40 raios ao redor de uma "tunduk" (abóbada de madeira circular de uma tenda tradicional yurt)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Quirguistão', 'Cazaquistão', 'Turcomenistão', 'Uzbequistão'],
        'resposta': 0,
        'explicacao': 'A bandeira do Quirguistão homenageia os 40 clãs unidos pelo lendário herói Manas e traz o teto da tenda yurt nômade no centro.',
        'dificuldade': 'medio'
    },
    {
        'id': 325,
        'pergunta': 'Qual país da Ásia Central possui na sua bandeira azul clara uma águia-das-estepes dourada voando abaixo de um sol radiante de 32 raios?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Cazaquistão', 'Mongólia', 'Tajiquistão', 'Azerbaijão'],
        'resposta': 0,
        'explicacao': 'A bandeira do Cazaquistão traz a águia-das-estepes (berkut), símbolo de liberdade, poder e visão de futuro do povo cazaque.',
        'dificuldade': 'facil'
    },
    {
        'id': 326,
        'pergunta': 'Qual país da Ásia Central possui na sua bandeira verde uma faixa vertical com cinco desenhos tradicionais de tapetes artesanais (guls)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Turcomenistão', 'Uzbequistão', 'Afeganistão', 'Paquistão'],
        'resposta': 0,
        'explicacao': 'A bandeira do Turcomenistão homenageia as cinco tribos tradicionais do país através dos motivos de tapetes turcomanos mais famosos do mundo.',
        'dificuldade': 'medio'
    },
    {
        'id': 327,
        'pergunta': 'Qual país do Sudeste Asiático tem na sua bandeira uma estrela branca de 14 pontas (Bintang Persekutuan) e 14 listras vermelhas e brancas horizontais?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Malásia', 'Indonésia', 'Filipinas', 'Brunei'],
        'resposta': 0,
        'explicacao': 'A bandeira da Malásia (Jalur Gemilang) possui 14 listras e 14 pontas na estrela representando a união dos 13 estados federados com o território federal da capital.',
        'dificuldade': 'facil'
    },
    {
        'id': 328,
        'pergunta': 'Qual país do sul da Ásia possui uma bandeira onde um leão dourado segura uma espada (espada Kastane) sobre um fundo bordô?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Sri Lanka', 'Butão', 'Nepal', 'Maldivas'],
        'resposta': 0,
        'explicacao': 'A bandeira do Sri Lanka (Bandeira do Leão) homenageia a maioria cingalesa (leão), com faixas verticais verde e laranja representando as minorias muçulmana e tâmil.',
        'dificuldade': 'facil'
    },
    {
        'id': 329,
        'pergunta': 'Qual país montanhoso do Himalaia tem como símbolo em sua bandeira um dragão do trovão branco (Druk) segurando joias cintilantes nas quatro garras?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Butão', 'Nepal', 'Tibete', 'Mianmar'],
        'resposta': 0,
        'explicacao': 'O Butão é conhecido nativamente como Druk Yul (Terra do Dragão do Trovão); o dragão branco na bandeira simboliza pureza e a riqueza do reino.',
        'dificuldade': 'facil'
    },
    {
        'id': 330,
        'pergunta': 'Qual país da África Ocidental possui uma bandeira verde, amarela e vermelha com uma estrela preta de cinco pontas no centro da faixa amarela?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Gana', 'Senegal', 'Camarões', 'Togo'],
        'resposta': 0,
        'explicacao': 'Gana foi pioneira na independência na África subsaariana (1957); a Estrela Negra de Marcus Garvey simboliza a emancipação e união de todo o continente africano.',
        'dificuldade': 'facil'
    },
    {
        'id': 331,
        'pergunta': 'A bandeira de qual país do sul da Europa consiste em duas faixas horizontais (branca acima e azul claro abaixo) com o brasão das Três Torres sobre três cumes?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['San Marino', 'Liechtenstein', 'Mônaco', 'Andorra'],
        'resposta': 0,
        'explicacao': 'A bandeira de San Marino homenageia as três fortalezas históricas no cume do Monte Titano (Guaita, Cesta e Montale) com o lema "Libertas".',
        'dificuldade': 'medio'
    },
    {
        'id': 332,
        'pergunta': 'Qual país do Cáucaso tem uma bandeira tricolor horizontal composta por vermelho, azul escuro e amarelo damasco (laranja)?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Armênia', 'Geórgia', 'Azerbaijão', 'Moldávia'],
        'resposta': 0,
        'explicacao': 'O damasco (Prunus armeniaca) é a fruta nativa e símbolo da Armênia; a faixa inferior laranja-damasco representa a coragem e a fertilidade da terra.',
        'dificuldade': 'facil'
    },
    {
        'id': 333,
        'pergunta': 'Qual país insular do Sudeste Asiático inverte a sua bandeira em tempos de guerra, colocando a faixa vermelha para cima e a azul para baixo?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Filipinas', 'Tailândia', 'Vietnã', 'Indonésia'],
        'resposta': 0,
        'explicacao': 'A constituição das Filipinas prevê que em tempos de paz a faixa azul fique no topo (paz e justiça); em estado oficial de guerra, a faixa vermelha (coragem) é içada no topo.',
        'dificuldade': 'facil'
    },
    {
        'id': 334,
        'pergunta': 'Qual país insular da Micronésia possui uma bandeira azul com um círculo amarelo descentralizado representando a lua cheia sobre o oceano?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Palau', 'Nauru', 'Tuvalu', 'Ilhas Marshall'],
        'resposta': 0,
        'explicacao': 'A bandeira de Palau retrata a lua cheia dourada (símbolo de paz e amor à natureza) iluminando o azul profundo do Oceano Pacífico.',
        'dificuldade': 'medio'
    },
    {
        'id': 335,
        'pergunta': 'Qual país da África Austral possui uma bandeira azul celeste com uma faixa preta central envolta por duas bordas brancas finas?',
        'categoria': 'Bandeiras do Mundo',
        'opcoes': ['Botsuana', 'Namíbia', 'Lesoto', 'Zâmbia'],
        'resposta': 0,
        'explicacao': 'A bandeira de Botsuana simboliza a água e a chuva tão preciosas no deserto do Kalahari ("Pula", que também dá nome à moeda), e a harmonia entre povos brancos e negros.',
        'dificuldade': 'facil'
    },

    # --- CAPITAIS DO MUNDO (336 a 355) ---
    {
        'id': 336,
        'pergunta': 'Qual é a capital oficial do Canadá, cidade escolhida estrategicamente pela Rainha Vitória em 1857 na divisa entre as províncias de Ontário e Quebec?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
        'resposta': 0,
        'explicacao': 'Embora Toronto seja a maior cidade e polo financeiro, a capital federal é Ottawa, situada estrategicamente na fronteira linguística anglo-francesa.',
        'dificuldade': 'facil'
    },
    {
        'id': 337,
        'pergunta': 'Qual é a capital oficial da Austrália, construída de maneira planejada no início do século XX como um compromisso diplomático entre Sydney e Melbourne?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Camberra', 'Sydney', 'Melbourne', 'Brisbane'],
        'resposta': 0,
        'explicacao': 'Camberra foi fundada em 1913 no Território da Capital Australiana como compromisso salomônico para resolver a feroz rivalidade entre Melbourne e Sydney.',
        'dificuldade': 'facil'
    },
    {
        'id': 338,
        'pergunta': 'Qual é a capital oficial da Turquia, estabelecida por Mustafa Kemal Atatürk em 1923 no planalto da Anatólia em substituição a Istambul?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Ancara', 'Istambul', 'Esmirna', 'Bursa'],
        'resposta': 0,
        'explicacao': 'Ancara tornou-se a capital da República da Turquia para romper com o legado imperial otomano de Istambul e situar o centro de poder no coração geográfico do país.',
        'dificuldade': 'facil'
    },
    {
        'id': 339,
        'pergunta': 'Qual nação possui três capitais oficiais onde o Poder Executivo fica em Pretória, o Legislativo na Cidade do Cabo e o Judiciário em Bloemfontein?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['África do Sul', 'Nigéria', 'Quênia', 'Egito'],
        'resposta': 0,
        'explicacao': 'A África do Sul divide a sede de seus três poderes republicanos entre Pretória (administrativa), Cidade do Cabo (legislativa) e Bloemfontein (judiciária).',
        'dificuldade': 'facil'
    },
    {
        'id': 340,
        'pergunta': 'Qual cidade suíça funciona como a capital de facto e sede do Conselho Federal e da Assembleia da Suíça, embora a constituição não declare capital oficial?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Berna', 'Zurique', 'Genebra', 'Basileia'],
        'resposta': 0,
        'explicacao': 'A Suíça não possui uma capital de jure por respeito à autonomia dos cantões, mas Berna foi designada Cidade Federal (Bundesstadt) em 1848.',
        'dificuldade': 'facil'
    },
    {
        'id': 341,
        'pergunta': 'Qual é a capital soberana mais meridional (situada mais ao sul) de todo o planeta Terra?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Wellington (Nova Zelândia)', 'Camberra (Austrália)', 'Buenos Aires (Argentina)', 'Santiago (Chile)'],
        'resposta': 0,
        'explicacao': 'Wellington, na ilha norte da Nova Zelândia (latitude 41°17\' S), é a capital nacional soberana localizada mais próxima do Polo Sul no globo.',
        'dificuldade': 'facil'
    },
    {
        'id': 342,
        'pergunta': 'Qual é a capital soberana mais setentrional (situada mais ao norte) do planeta Terra, a apenas 250 km ao sul do Círculo Polar Ártico?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Reykjavik (Islândia)', 'Oslo (Noruega)', 'Helsinque (Finlândia)', 'Estocolmo (Suécia)'],
        'resposta': 0,
        'explicacao': 'Reykjavik, na Islândia (latitude 64°08\' N), é a capital de um estado soberano mais ao norte de todo o mundo.',
        'dificuldade': 'facil'
    },
    {
        'id': 343,
        'pergunta': 'Qual é a capital oficial do Reino do Marrocos, frequentemente ofuscada em população pela metrópole econômica de Casablanca?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Rabat', 'Casablanca', 'Marrakech', 'Fez'],
        'resposta': 0,
        'explicacao': 'Rabat é a capital política e administrativa do Marrocos e sede do Palácio Real, enquanto Casablanca é o maior porto e polo financeiro.',
        'dificuldade': 'facil'
    },
    {
        'id': 344,
        'pergunta': 'Qual cidade é a capital oficial dos Países Baixos segundo a Constituição Nacional, embora o Parlamento, a Suprema Corte e a monarquia fiquem em Haia?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Amsterdã', 'Haia', 'Roterdã', 'Utrecht'],
        'resposta': 0,
        'explicacao': 'Amsterdã é a capital constitucional oficial holandesa, mas Haia (Den Haag) é a sede real do governo, dos ministérios e dos tribunais internacionais.',
        'dificuldade': 'facil'
    },
    {
        'id': 345,
        'pergunta': 'Qual é a capital oficial da República Federal da Nigéria, construída planejadamente no centro geográfico do país para substituir a litorânea Lagos em 1991?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Abuja', 'Lagos', 'Kano', 'Ibadan'],
        'resposta': 0,
        'explicacao': 'Abuja foi erguida na década de 1980 em território federal neutro para promover a coesão entre as diversas etnias do norte e do sul nigeriano.',
        'dificuldade': 'facil'
    },
    {
        'id': 346,
        'pergunta': 'Qual cidade é a capital constitucional e histórica da Bolívia (onde fica a Suprema Corte), embora a sede dos poderes Executivo e Legislativo fique em La Paz?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Sucre', 'La Paz', 'Santa Cruz de la Sierra', 'Cochabamba'],
        'resposta': 0,
        'explicacao': 'Sucre é a capital histórica e de direito da Bolívia segundo a Constituição, enquanto La Paz abriga o Palácio Quemado e a Assembleia Legislativa.',
        'dificuldade': 'facil'
    },
    {
        'id': 347,
        'pergunta': 'Qual é a capital oficial da Costa do Marfim desde 1983, famosa por abrigar a gigantesca Basílica de Nossa Senhora da Paz, substituindo a metrópole litorânea de Abidjan?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Yamoussoukro', 'Abidjan', 'Bouaké', 'San-Pédro'],
        'resposta': 0,
        'explicacao': 'Yamoussoukro é a capital política da Costa do Marfim, cidade natal do primeiro presidente Félix Houphouët-Boigny, embora Abidjan retenha a maioria das embaixadas e empresas.',
        'dificuldade': 'medio'
    },
    {
        'id': 348,
        'pergunta': 'Qual é a capital do Cazaquistão que foi fundada no século XIX, mudou de nome para Nur-Sultan em 2019 e teve seu nome restabelecido em 2022?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Astana', 'Almaty', 'Shymkent', 'Aktobe'],
        'resposta': 0,
        'explicacao': 'Astana substituiu Almaty como capital do Cazaquistão em 1997, famosa por seus monumentos futuristas projetados por arquitetos como Norman Foster.',
        'dificuldade': 'facil'
    },
    {
        'id': 349,
        'pergunta': 'Qual é a capital de Mianmar, megacidade planejada inaugurada sigilosamente no interior em 2005 para substituir Yangon?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Naypyidaw', 'Yangon (Rangum)', 'Mandalay', 'Bagan'],
        'resposta': 0,
        'explicacao': 'Naypyidaw é quatro vezes maior em área que Londres, construída pela junta militar birmanesa com avenidas monumentais de até 20 pistas.',
        'dificuldade': 'medio'
    },
    {
        'id': 350,
        'pergunta': 'Qual é a capital oficial do Paquistão, erguida nos anos 1960 aos pés das colinas de Margalla para substituir Karachi no sul?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi'],
        'resposta': 0,
        'explicacao': 'Islamabad foi projetada pelo arquiteto grego Constantinos Doxiadis com layout em grelha modular dividida em setores funcionais.',
        'dificuldade': 'facil'
    },
    {
        'id': 351,
        'pergunta': 'Qual é a capital oficial da Nova Zelândia, situada no extremo sul da Ilha do Norte, substituindo Auckland em 1865?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Wellington', 'Auckland', 'Christchurch', 'Hamilton'],
        'resposta': 0,
        'explicacao': 'Wellington foi escolhida por sua posição geográfica central no Estreito de Cook para evitar que a Ilha do Sul se separasse da colônia.',
        'dificuldade': 'facil'
    },
    {
        'id': 352,
        'pergunta': 'Qual é a capital dos Emirados Árabes Unidos (EAU), sede do governo federal e detentora de mais de 90% das reservas de petróleo da federação?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman'],
        'resposta': 0,
        'explicacao': 'Embora Dubai seja o polo comercial e turístico global mais famoso, a capital federal e centro político e petrolífero dos EAU é Abu Dhabi.',
        'dificuldade': 'facil'
    },
    {
        'id': 353,
        'pergunta': 'Qual cidade histórica é a capital da Escócia, famosa pelo seu castelo sobre uma rocha vulcânica e sede do Parlamento Escocês reaberto em 1999?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Edimburgo', 'Glasgow', 'Aberdeen', 'Dundee'],
        'resposta': 0,
        'explicacao': 'Edimburgo é a capital histórica da Escócia desde o século XV, enquanto Glasgow é a cidade mais populosa e centro industrial escocês.',
        'dificuldade': 'facil'
    },
    {
        'id': 354,
        'pergunta': 'Qual é a capital do Equador, fundada a 2.850 metros de altitude, sendo a capital nacional mais próxima da Linha do Equador?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Quito', 'Guayaquil', 'Cuenca', 'Manta'],
        'resposta': 0,
        'explicacao': 'Quito fica a apenas 25 km ao sul da Linha do Equador e seu centro colonial foi o primeiro patrimônio mundial urbano declarado pela UNESCO em 1978.',
        'dificuldade': 'facil'
    },
    {
        'id': 355,
        'pergunta': 'Qual país do Sudeste Asiático transferiu formalmente sua capital governamental e palácio administrativo para a nova cidade planejada de Putrajaya em 1999?',
        'categoria': 'Capitais do Mundo',
        'opcoes': ['Malásia', 'Indonésia', 'Tailândia', 'Vietnã'],
        'resposta': 0,
        'explicacao': 'Kuala Lumpur permanece como capital real e legislativa da Malásia, mas a sede executiva e ministerial foi realocada para Putrajaya.',
        'dificuldade': 'medio'
    },

    # --- ONDE FICA & LOCALIZAÇÃO GEOGRÁFICA (356 a 370) ---
    {
        'id': 356,
        'pergunta': 'Onde fica a nação insular de Malta, antigo bastião dos Cavaleiros Hospitalários e ponto de interseção naval estratégico?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Mar Mediterrâneo central, a 80 km ao sul da Sicília (Itália) e a leste da Tunísia',
            'No Mar Vermelho, próximo ao Golfo de Ácaba',
            'No Oceano Atlântico Norte, a oeste de Portugal',
            'No Mar Egeu, entre a Grécia continental e Creta'
        ],
        'resposta': 0,
        'explicacao': 'Malta ocupa o centro do Mar Mediterrâneo, controlando a passagem naval entre a bacia ocidental e oriental do mar.',
        'dificuldade': 'facil'
    },
    {
        'id': 357,
        'pergunta': 'Onde fica o arquipélago das Seychelles, famoso mundialmente por suas ilhas de granito rosa e reservas de tartarugas-gigantes?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Oceano Índico Ocidental, a nordeste de Madagascar e a leste da costa da África',
            'No Oceano Pacífico Sul, próximo à Polinésia Francesa',
            'No Mar do Caribe, próximo à costa venezuelana',
            'No Oceano Atlântico Sul, entre o Brasil e Angola'
        ],
        'resposta': 0,
        'explicacao': 'As Seychelles são compostas por 115 ilhas tropicais situadas no Oceano Índico Ocidental, a cerca de 1.500 km a leste da costa continental da África.',
        'dificuldade': 'facil'
    },
    {
        'id': 358,
        'pergunta': 'Em qual sub-região e continente fica o Suriname, o único país do continente sul-americano a adotar o neerlandês (holandês) como língua oficial?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No norte da América do Sul, banhado pelo Oceano Atlântico entre a Guiana e a Guiana Francesa',
            'Na América Central continental, entre a Nicarágua e a Costa Rica',
            'No Caribe insular, na região das Antilhas Menores',
            'No oeste da África, encravado no Golfo da Guiné'
        ],
        'resposta': 0,
        'explicacao': 'O Suriname localiza-se na costa norte do Escudo das Guianas, na América do Sul, fazendo fronteira ao sul com o estado brasileiro do Pará e do Amapá.',
        'dificuldade': 'facil'
    },
    {
        'id': 359,
        'pergunta': 'Onde fica o pequeno reino montanhoso do Butão, conhecido por mensurar a "Felicidade Interna Bruta"?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'Na cordilheira do Himalaia, na Ásia Meridional, espremido entre a China (Tibete) e a Índia',
            'Nas montanhas do Cáucaso, entre a Rússia e o Irã',
            'No Sudeste Asiático, entre a Tailândia e o Camboja',
            'Na Cordilheira dos Andes, entre o Peru e a Bolívia'
        ],
        'resposta': 0,
        'explicacao': 'O Butão é um reino budista do Himalaia Oriental, cercado ao norte pela Região Autônoma do Tibete (China) e ao sul, leste e oeste pela Índia.',
        'dificuldade': 'facil'
    },
    {
        'id': 360,
        'pergunta': 'Onde fica a República de Djibuti, país estratégico que sedia simultaneamente bases militares dos EUA, China, França e Japão?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Chifre da África, na entrada sul do Mar Vermelho junto ao Estreito de Bab-el-Mandeb',
            'No Golfo Pérsico, entre o Irã e o Iraque',
            'Na costa ocidental da África, junto ao Rio Congo',
            'No norte da África, no Estreito de Gibraltar'
        ],
        'resposta': 0,
        'explicacao': 'O Djibuti controla a entrada do Estreito de Bab-el-Mandeb no Chifre da África, rota por onde passa cerca de 30% do tráfego global de contêineres marítimos.',
        'dificuldade': 'facil'
    },
    {
        'id': 361,
        'pergunta': 'Onde fica o Sultanato de Brunei, pequena nação petrolífera de altíssima renda per capita governada por uma monarquia absolutista islâmica?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Sudeste Asiático, na costa norte da ilha de Bornéu, inteiramente cercado pela Malásia e pelo Mar da China Meridional',
            'No Golfo Pérsico, em uma península ao lado da Arábia Saudita',
            'No Oceano Índico, próximo ao arquipélago das Maldivas',
            'Na Península da Indochina, entre o Vietnã e o Laos'
        ],
        'resposta': 0,
        'explicacao': 'Brunei fica na ilha de Bornéu no Sudeste Asiático, dividido em duas partes desconexas cercadas pelo estado malaio de Sarawak.',
        'dificuldade': 'facil'
    },
    {
        'id': 362,
        'pergunta': 'Em qual mar e região fica a nação insular de Chipre, terceira maior ilha do seu respectivo mar?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No leste do Mar Mediterrâneo, ao sul da Turquia e a oeste da Síria e Líbano',
            'No centro do Mar Negro, a leste da Crimeia',
            'No Mar Vermelho, próximo ao Canal de Suez',
            'No Mar Adriático, em frente à costa da Croácia'
        ],
        'resposta': 0,
        'explicacao': 'Chipre fica na bacia oriental do Mediterrâneo Levou um papel estratégico na encruzilhada de três continentes (Europa, Ásia e África).',
        'dificuldade': 'facil'
    },
    {
        'id': 363,
        'pergunta': 'Onde fica o arquipélago de Cabo Verde, nação insular de língua portuguesa com dez ilhas vulcânicas?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Oceano Atlântico Norte, cerca de 570 km a oeste da costa do Senegal (África Ocidental)',
            'No Golfo da Guiné, exatamente sobre a Linha do Equador',
            'No Oceano Índico, próximo ao Canal de Moçambique',
            'No Mar do Caribe, entre Cuba e a Flórida'
        ],
        'resposta': 0,
        'explicacao': 'Cabo Verde fica no Oceano Atlântico central, no Sahel oceânico, ponto de parada histórico crucial nas rotas entre Europa, África e Américas.',
        'dificuldade': 'facil'
    },
    {
        'id': 364,
        'pergunta': 'Onde fica o Principado de Andorra, microestado montanhoso soberano governado por dois copríncipes (o Bispo de Urgell e o Presidente da França)?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'Na cordilheira dos Pireneus, na fronteira montanhosa entre Espanha e França',
            'Na cordilheira dos Alpes, entre a Suíça e a Itália',
            'Nas montanhas dos Bálcãs, entre a Bósnia e Montenegro',
            'Nas montanhas dos Cárpatos, entre a Polônia e a Ucrânia'
        ],
        'resposta': 0,
        'explicacao': 'Andorra fica encravada nas altas montanhas dos Pireneus na Europa Ocidental, sem exército próprio e com o catalão como única língua oficial.',
        'dificuldade': 'facil'
    },
    {
        'id': 365,
        'pergunta': 'Onde fica a República de Maurício, famosa por ter sido o único habitat do extinto pássaro dodô?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Oceano Índico Sudoeste, a leste de Madagascar e vizinha à ilha francesa de Reunião',
            'No Oceano Pacífico, a oeste de Fiji',
            'No Oceano Atlântico Sul, próximo à Namíbia',
            'No Mar da Arábia, em frente ao Iêmen'
        ],
        'resposta': 0,
        'explicacao': 'Maurício faz parte das Ilhas Mascarenhas no Oceano Índico a cerca de 800 km a leste de Madagascar.',
        'dificuldade': 'facil'
    },
    {
        'id': 366,
        'pergunta': 'Onde fica a nação insular de São Tomé e Príncipe, o segundo menor país da África em território?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Golfo da Guiné, no Oceano Atlântico equatorial, a cerca de 250 km da costa do Gabão',
            'No Oceano Índico, próximo a Zanzibar',
            'No Mar Vermelho, próximo ao Djibuti',
            'No Oceano Atlântico Sul, ao sul de Angola'
        ],
        'resposta': 0,
        'explicacao': 'São Tomé e Príncipe é composto por duas ilhas vulcânicas no Golfo da Guiné; o Ilhéu das Rolas ao sul de São Tomé é cortado exatamente pela Linha do Equador.',
        'dificuldade': 'facil'
    },
    {
        'id': 367,
        'pergunta': 'Onde fica a Ilha de Bornéu, a terceira maior ilha do mundo, cujo território é politicamente dividido entre três países soberanos?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Sudeste Asiático, dividida entre Indonésia, Malásia e Brunei',
            'No Caribe, dividida entre Haiti, República Dominicana e Porto Rico',
            'No Oceano Índico, dividida entre Índia, Sri Lanka e Maldivas',
            'No Pacífico Sul, dividida entre Austrália e Papua-Nova Guiné'
        ],
        'resposta': 0,
        'explicacao': 'Bornéu é a terceira maior ilha do planeta, dividida entre o Kalimantan indonésio (73% da ilha), os estados malaios de Sabah e Sarawak (26%) e o sultanato de Brunei (1%).',
        'dificuldade': 'facil'
    },
    {
        'id': 368,
        'pergunta': 'Onde fica o arquipélago das Bermudas, território ultramarino britânico famoso no imaginário popular?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Oceano Atlântico Norte ocidental, a cerca de 1.050 km a leste do estado americano da Carolina do Norte',
            'No meio do Mar do Caribe, ao sul de Cuba',
            'No Golfo do México, próximo a Cancún',
            'No Oceano Pacífico Norte, a oeste da Califórnia'
        ],
        'resposta': 0,
        'explicacao': 'Bermudas não fica no Mar do Caribe, mas sim isolada no Atlântico Norte, em águas aquecidas pela Corrente do Golfo que sustentam os recifes de corais mais setentrionais do planeta.',
        'dificuldade': 'medio'
    },
    {
        'id': 369,
        'pergunta': 'Onde fica a nação insular de Tuvalu, um dos quatro países membros da ONU com menor altitude média e mais vulneráveis ao aquecimento global?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'No Oceano Pacífico Sul, na Polinésia, a meio caminho entre o Havaí e a Austrália',
            'No Oceano Índico, próximo às Maldivas',
            'No Mar do Caribe, nas Pequenas Antilhas',
            'No Oceano Ártico, ao norte da Sibéria'
        ],
        'resposta': 0,
        'explicacao': 'Tuvalu é formado por nove atóis de coral no Pacífico Sul; o ponto mais alto de toda a nação atinge menos de 5 metros acima do nível do mar.',
        'dificuldade': 'facil'
    },
    {
        'id': 370,
        'pergunta': 'Em qual continente e região fica a nação sem litoral do Quirguistão, dominada pelos picos nevados das montanhas Tian Shan?',
        'categoria': 'Localização & Fronteiras',
        'opcoes': [
            'Na Ásia Central, fazendo fronteira com Cazaquistão, Uzbequistão, Tajiquistão e China',
            'No Cáucaso, entre a Rússia e a Turquia',
            'No Sudeste Asiático, entre Mianmar e a Índia',
            'Na Europa Oriental, entre a Ucrânia e a Romênia'
        ],
        'resposta': 0,
        'explicacao': 'O Quirguistão situa-se na Ásia Central, com mais de 90% do seu território acima dos 1.500 metros de altitude em meio à imponente cordilheira Tian Shan.',
        'dificuldade': 'facil'
    },

    # --- EXTENSÃO TERRITORIAL & SUPERLATIVOS DE ÁREA (371 a 385) ---
    {
        'id': 371,
        'pergunta': 'Qual é o maior país do continente africano em extensão territorial desde a secessão do Sudão do Sul em 2011?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Argélia (2,38 milhões de km²)', 'República Democrática do Congo', 'Sudão', 'Líbia'],
        'resposta': 0,
        'explicacao': 'A Argélia é o maior país da África e do mundo árabe em área (2.381.741 km²), dos quais cerca de 85% são ocupados pelo Deserto do Saara.',
        'dificuldade': 'facil'
    },
    {
        'id': 372,
        'pergunta': 'Qual é o menor país independente da América do Sul tanto em extensão territorial quanto em número de habitantes?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Suriname (163.820 km²)', 'Uruguai', 'Guiana', 'Equador'],
        'resposta': 0,
        'explicacao': 'O Suriname é o menor estado soberano da América do Sul em área (163.820 km²) e tem cerca de 600 mil habitantes, embora a Guiana Francesa seja menor, ela é um departamento ultramarino francês.',
        'dificuldade': 'facil'
    },
    {
        'id': 373,
        'pergunta': 'Qual é o maior país do planeta Terra sem qualquer saída para o oceano (o maior país landlocked do mundo)?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Cazaquistão (2,72 milhões de km²)', 'Mongólia', 'Chade', 'Níger'],
        'resposta': 0,
        'explicacao': 'O Cazaquistão é o 9º maior país do mundo no geral e o maior sem acesso ao mar aberto (ele margeia o Mar Cáspio, que é um mar fechado/lago endorreico).',
        'dificuldade': 'facil'
    },
    {
        'id': 374,
        'pergunta': 'Qual é o menor país soberano e membro das Nações Unidas de todo o continente africano em área territorial?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Seychelles (459 km²)', 'São Tomé e Príncipe', 'Maurício', 'Cabo Verde'],
        'resposta': 0,
        'explicacao': 'Com apenas 459 km² distribuídos em 115 ilhas, as Seychelles são o menor país independente da África em área territorial.',
        'dificuldade': 'facil'
    },
    {
        'id': 375,
        'pergunta': 'Qual é o maior país da América Central continental em área territorial?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Nicarágua (130.375 km²)', 'Guatemala', 'Honduras', 'Panamá'],
        'resposta': 0,
        'explicacao': 'A Nicarágua é o maior país da América Central continental em extensão territorial, cobrindo cerca de 130 mil km².',
        'dificuldade': 'facil'
    },
    {
        'id': 376,
        'pergunta': 'Qual é o segundo maior país do mundo em área territorial total (terra e águas interiores), superado apenas pela Rússia?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Canadá (9,98 milhões de km²)', 'China', 'Estados Unidos', 'Brasil'],
        'resposta': 0,
        'explicacao': 'O Canadá cobre 9.984.670 km² estendendo-se do Atlântico ao Pacífico e até o Oceano Ártico, contendo quase 9% do seu território formado por água doce.',
        'dificuldade': 'facil'
    },
    {
        'id': 377,
        'pergunta': 'Qual é o maior país da Europa cujo território está 100% contido geograficamente dentro do continente europeu (excluindo a parte russa)?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Ucrânia (603.628 km²)', 'França', 'Espanha', 'Alemanha'],
        'resposta': 0,
        'explicacao': 'A Ucrânia é o maior país totalmente localizado na Europa (603.628 km²); a França metropolitana cobre 543 mil km² e a Espanha 505 mil km².',
        'dificuldade': 'facil'
    },
    {
        'id': 378,
        'pergunta': 'Qual país do mundo possui a maior linha costeira (litoral) de todo o planeta Terra, superando 202.000 quilômetros de extensão?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Canadá', 'Noruega', 'Indonésia', 'Rússia'],
        'resposta': 0,
        'explicacao': 'Devido ao seu vasto arquipélago ártico com milhares de fiordes e ilhas recortadas, o Canadá possui mais de 202.080 km de linha costeira.',
        'dificuldade': 'facil'
    },
    {
        'id': 379,
        'pergunta': 'Qual é o menor país independente de todo o continente asiático em área territorial e população?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Maldivas (298 km²)', 'Bahrein', 'Singapura', 'Brunei'],
        'resposta': 0,
        'explicacao': 'As Maldivas ocupam apenas 298 km² em cerca de 1.190 ilhas de coral no Oceano Índico, sendo o menor país da Ásia em extensão de terra firme.',
        'dificuldade': 'facil'
    },
    {
        'id': 380,
        'pergunta': 'Qual é o maior país em extensão territorial localizado inteiramente dentro da região do Oriente Médio?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Arábia Saudita (2,15 milhões de km²)', 'Irã', 'Iraque', 'Iêmen'],
        'resposta': 0,
        'explicacao': 'A Arábia Saudita cobre cerca de 2.149.690 km², ocupando aproximadamente 80% de toda a Península Arábica.',
        'dificuldade': 'facil'
    },
    {
        'id': 381,
        'pergunta': 'Qual é o menor país independente de todas as Américas (América do Norte, Central e do Sul) em extensão territorial?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['São Cristóvão e Névis (261 km²)', 'Granada', 'Barbados', 'Antígua e Barbuda'],
        'resposta': 0,
        'explicacao': 'A federação caribenha de São Cristóvão e Névis (Saint Kitts and Nevis) cobre 261 km², sendo o menor país soberano das Américas.',
        'dificuldade': 'facil'
    },
    {
        'id': 382,
        'pergunta': 'Qual é o maior país insular (composto exclusivamente por ilhas) em extensão territorial do planeta Terra?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Indonésia (1,90 milhão de km²)', 'Madagascar', 'Papua-Nova Guiné', 'Japão'],
        'resposta': 0,
        'explicacao': 'A Indonésia cobre 1.904.569 km² de terra distribuídos em mais de 17.500 ilhas no Sudeste Asiático, constituindo o maior estado-arquipélago do globo.',
        'dificuldade': 'facil'
    },
    {
        'id': 383,
        'pergunta': 'Qual país do mundo faz fronteira terrestre com o maior número de vizinhos diferentes, empatado no topo com a China (ambos com 14 vizinhos)?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Rússia (14 países vizinhos)', 'Brasil', 'Alemanha', 'República Democrática do Congo'],
        'resposta': 0,
        'explicacao': 'A Rússia e a China lideram o planeta fazendo fronteira com 14 estados soberanos reconhecidos cada uma.',
        'dificuldade': 'facil'
    },
    {
        'id': 384,
        'pergunta': 'Qual é o menor país da América Central continental em área territorial e o único voltado exclusivamente para a costa do Pacífico?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['El Salvador (21.041 km²)', 'Belize', 'Costa Rica', 'Panamá'],
        'resposta': 0,
        'explicacao': 'El Salvador tem 21.041 km² e é o único estado da América Central continental que não possui litoral banhado pelo Mar do Caribe.',
        'dificuldade': 'facil'
    },
    {
        'id': 385,
        'pergunta': 'Qual é o maior país da América do Sul em área territorial e o quinto maior de todo o planeta Terra?',
        'categoria': 'Extensão & Superlativos',
        'opcoes': ['Brasil (8,51 milhões de km²)', 'Argentina', 'Peru', 'Colômbia'],
        'resposta': 0,
        'explicacao': 'O Brasil possui 8.515.767 km² cobrindo quase metade (47,3%) de toda a massa territorial do continente sul-americano.',
        'dificuldade': 'facil'
    },

    # --- POPULAÇÃO & DEMOGRAFIA (386 a 400) ---
    {
        'id': 386,
        'pergunta': 'Qual é o país mais populoso de todo o continente africano, ultrapassando 220 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Nigéria', 'Etiópia', 'Egito', 'República Democrática do Congo'],
        'resposta': 0,
        'explicacao': 'A Nigéria é o gigante demográfico da África (mais de 225 milhões de pessoas) e projeta-se que possa se tornar o terceiro país mais populoso do mundo até 2050.',
        'dificuldade': 'facil'
    },
    {
        'id': 387,
        'pergunta': 'Qual é o país mais populoso da Europa (excluindo a Federação Russa), com mais de 84 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Alemanha', 'Reino Unido', 'França', 'Itália'],
        'resposta': 0,
        'explicacao': 'A Alemanha é o estado mais populoso da União Europeia e de todo o continente europeu a oeste da Rússia, com aproximadamente 84,4 milhões de pessoas.',
        'dificuldade': 'facil'
    },
    {
        'id': 388,
        'pergunta': 'Qual nação da América do Sul possui a segunda maior população do continente, ultrapassando 52 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Colômbia', 'Argentina', 'Peru', 'Venezuela'],
        'resposta': 0,
        'explicacao': 'A Colômbia é o segundo país mais habitado da América do Sul, com cerca de 52,5 milhões de pessoas, superando a Argentina (aproximadamente 46 milhões).',
        'dificuldade': 'facil'
    },
    {
        'id': 389,
        'pergunta': 'Qual é o país insular mais populoso do planeta Terra, abrigando mais de 275 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Indonésia', 'Japão', 'Filipinas', 'Reino Unido'],
        'resposta': 0,
        'explicacao': 'A Indonésia é o quarto país mais populoso do mundo no geral e o país insular mais populoso, com mais de metade de sua população concentrada na ilha de Java.',
        'dificuldade': 'facil'
    },
    {
        'id': 390,
        'pergunta': 'Qual país soberano do mundo possui a menor densidade demográfica do planeta, com apenas cerca de 2,1 habitantes por quilômetro quadrado?',
        'categoria': 'População & Demografia',
        'opcoes': ['Mongólia', 'Namíbia', 'Austrália', 'Islândia'],
        'resposta': 0,
        'explicacao': 'A Mongólia cobre 1,56 milhão de km² para apenas 3,4 milhões de habitantes, tornando-se o estado soberano com menor densidade humana média da Terra.',
        'dificuldade': 'facil'
    },
    {
        'id': 391,
        'pergunta': 'Qual país ultrapassou oficialmente a China em 2023, consolidando-se como a nação mais populosa de todo o planeta Terra com mais de 1,43 bilhão de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Índia', 'Estados Unidos', 'Indonésia', 'Paquistão'],
        'resposta': 0,
        'explicacao': 'Segundo dados oficiais do Fundo de População da ONU (UNFPA) em abril de 2023, a Índia ultrapassou a China continental e assumiu o primeiro lugar global.',
        'dificuldade': 'facil'
    },
    {
        'id': 392,
        'pergunta': 'Qual país do mundo árabe e do Oriente Médio/Norte da África ultrapassou 105 milhões de habitantes, concentrando mais de 95% do seu povo ao longo de uma estreita faixa fértil do Rio Nilo?',
        'categoria': 'População & Demografia',
        'opcoes': ['Egito', 'Argélia', 'Iraque', 'Arábia Saudita'],
        'resposta': 0,
        'explicacao': 'O Egito é o país mais populoso do mundo árabe; com um território quase todo desértico, sua população vive comprimida em menos de 5% da área total do país ao redor do Nilo.',
        'dificuldade': 'facil'
    },
    {
        'id': 393,
        'pergunta': 'Qual país da América Central possui a maior população da região, ultrapassando 18 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Guatemala', 'Honduras', 'El Salvador', 'Nicarágua'],
        'resposta': 0,
        'explicacao': 'A Guatemala é o país mais populoso da América Central, com forte percentual de população descendente direta da civilização maia indígena.',
        'dificuldade': 'facil'
    },
    {
        'id': 394,
        'pergunta': 'Qual país do sul da Ásia abriga mais de 170 milhões de pessoas em um território menor que o estado brasileiro do Acre, gerando uma das maiores densidades demográficas do globo (>1.200 hab/km²)?',
        'categoria': 'População & Demografia',
        'opcoes': ['Bangladesh', 'Paquistão', 'Vietnã', 'Filipinas'],
        'resposta': 0,
        'explicacao': 'Bangladesh localiza-se no delta extremamente fértil e plano dos rios Ganges e Brahmaputra, gerando uma das maiores concentrações humanas por km² do planeta.',
        'dificuldade': 'facil'
    },
    {
        'id': 395,
        'pergunta': 'Desconsiderando a Austrália, qual é o país soberano mais populoso de toda a Oceania, superando 10 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Papua-Nova Guiné', 'Nova Zelândia', 'Fiji', 'Ilhas Salomão'],
        'resposta': 0,
        'explicacao': 'Papua-Nova Guiné ultrapassou os 10 milhões de habitantes, sendo muito mais populosa que a Nova Zelândia (que tem aproximadamente 5,2 milhões).',
        'dificuldade': 'facil'
    },
    {
        'id': 396,
        'pergunta': 'Qual nação de língua portuguesa na África possui a maior população entre os países africanos lusófonos (PALOP), superando 36 milhões de pessoas?',
        'categoria': 'População & Demografia',
        'opcoes': ['Angola', 'Moçambique', 'Guiné-Bissau', 'Cabo Verde'],
        'resposta': 0,
        'explicacao': 'Angola ultrapassou 36 milhões de habitantes e lidera a taxa de crescimento demográfico entre os países de língua oficial portuguesa.',
        'dificuldade': 'facil'
    },
    {
        'id': 397,
        'pergunta': 'Qual país do Sudeste Asiático ultrapassou 115 milhões de habitantes distribuídos em mais de 7.000 ilhas tropicais?',
        'categoria': 'População & Demografia',
        'opcoes': ['Filipinas', 'Vietnã', 'Tailândia', 'Mianmar'],
        'resposta': 0,
        'explicacao': 'As Filipinas constituem o segundo país mais populoso do Sudeste Asiático, atrás apenas da Indonésia.',
        'dificuldade': 'facil'
    },
    {
        'id': 398,
        'pergunta': 'Qual país do mundo possui a maior proporção de idosos do planeta, onde mais de 29% de toda a sua população tem 65 anos ou mais?',
        'categoria': 'População & Demografia',
        'opcoes': ['Japão', 'Itália', 'Alemanha', 'Portugal'],
        'resposta': 0,
        'explicacao': 'O Japão enfrenta o mais avançado processo de envelhecimento populacional do mundo, associado a uma das maiores expectativas de vida globais (>84 anos) e baixa taxa de fecundidade.',
        'dificuldade': 'facil'
    },
    {
        'id': 399,
        'pergunta': 'Qual país do Oriente Médio continental (localizado na Ásia Ocidental) possui a maior população de língua árabe da Ásia, superando 45 milhões de habitantes?',
        'categoria': 'População & Demografia',
        'opcoes': ['Iraque', 'Arábia Saudita', 'Iêmen', 'Síria'],
        'resposta': 0,
        'explicacao': 'O Iraque conta com mais de 45 milhões de pessoas nos vales dos rios Tigre e Eufrates, superando a Arábia Saudita (aproximadamente 36 milhões, incluindo estrangeiros).',
        'dificuldade': 'facil'
    },
    {
        'id': 400,
        'pergunta': 'Qual país da África Oriental é o segundo mais populoso de todo o continente africano, ultrapassando 125 milhões de habitantes e sem qualquer saída para o mar?',
        'categoria': 'População & Demografia',
        'opcoes': ['Etiópia', 'República Democrática do Congo', 'Tanzânia', 'Quênia'],
        'resposta': 0,
        'explicacao': 'A Etiópia é a nação sem litoral mais populosa de todo o planeta Terra e a segunda nação mais populosa da África, atrás apenas da Nigéria.',
        'dificuldade': 'facil'
    }
]
