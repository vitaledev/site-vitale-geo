export interface ToolItem {
  id: string;
  titulo: string;
  desc: string;
  icon: string;
  cover: string;
  link: string;
  categoria: string;
  badge?: string;
  tags?: string[];
}

export const toolsDB: ToolItem[] = [
  {
    id: "quantos-cabem",
    titulo: "Quantos Cabem? (Comparador de Escala)",
    desc: "Descubra visualmente quantas vezes um país ou estado cabe dentro de outro território com preenchimento em blocos.",
    icon: "ph-bold ph-squares-four",
    cover: "/assets/img/ferramentas/quantos-cabem.jpg",
    link: "/ferramentas/quantos-cabem/",
    categoria: "Escala & Projeção",
    badge: "COMPARADOR",
    tags: ["escala", "tamanho", "area", "comparador", "territorio", "brasil", "superficie", "blocos"]
  },
  {
    id: "comparador-paises",
    titulo: "Qual o Real Tamanho dos Países?",
    desc: "Compare o tamanho real dos territórios de cada país no mapa e descubra a distorção da projeção de Mercator.",
    icon: "ph-bold ph-globe-stand",
    cover: "/assets/img/ferramentas/comparador-paises.jpg",
    link: "/ferramentas/comparador-paises/",
    categoria: "Escala & Projeção",
    badge: "PROJEÇÃO",
    tags: ["mercator", "distorcao", "projecao", "tamanho real", "paises", "area", "mapa", "groenlandia"]
  },
  {
    id: "calculadora-fuso",
    titulo: "Fuso Horário Global",
    desc: "Calculadora de fusos horários, meridianos internacionais e diferença horária entre capitais.",
    icon: "ph-bold ph-clock",
    cover: "/assets/img/ferramentas/calculadora-fuso.png",
    link: "/ferramentas/calculadora-fuso/",
    categoria: "Tempo & Fusos",
    badge: "HORÁRIO",
    tags: ["fuso horario", "meridianos", "greenwich", "utc", "relogio", "tempo", "hora mundial", "capitais"]
  },
  {
    id: "gerador-abnt",
    titulo: "Gerador de Citações ABNT",
    desc: "Citações e referências cartográficas rápidas no formato acadêmico ABNT para mapas, atlas e artigos.",
    icon: "ph-bold ph-quotes",
    cover: "/assets/img/ferramentas/gerador-abnt.jpg",
    link: "/ferramentas/gerador-abnt/",
    categoria: "Ciência & Pesquisa",
    badge: "ACADÊMICO",
    tags: ["abnt", "citacoes", "referencias", "bibliografia", "academico", "mapas", "normas", "tcc"]
  },
  {
    id: "calculadora-distancia",
    titulo: "Medidor Geodésico de Distância",
    desc: "Descubra a distância ortodrômica real entre quaisquer dois pontos do globo terrestre sobre o elipsoide WGS84.",
    icon: "ph-bold ph-path",
    cover: "/assets/img/ferramentas/calculadora-distancia.png",
    link: "/ferramentas/calculadora-distancia/",
    categoria: "Geodésia & Rotas",
    badge: "DISTÂNCIA",
    tags: ["distancia", "geodesia", "ortodromia", "haversine", "km", "cidades", "globo", "coordenadas"]
  },
  {
    id: "calculadora-antipodas",
    titulo: "Calculador de Antípodas",
    desc: "Veja onde você sairia se atravessasse a Terra em linha reta pelo centro exato do planeta.",
    icon: "ph-bold ph-globe-hemisphere-west",
    cover: "/assets/img/ferramentas/calculadora-antipodas.png",
    link: "/ferramentas/calculadora-antipodas/",
    categoria: "Geodésia & Rotas",
    badge: "COORDENADAS",
    tags: ["antipodas", "outro lado do mundo", "coordenadas", "diametro", "globo", "terra", "mar"]
  },
  {
    id: "rotas-extremas",
    titulo: "Rotas em Linha Reta no Globo",
    desc: "Compare a menor distância esférica com a distorção do mapa plano e veja a maior rota marítima do mundo.",
    icon: "ph-bold ph-compass",
    cover: "/assets/img/ferramentas/rotas-extremas.png",
    link: "/ferramentas/rotas-extremas/",
    categoria: "Geodésia & Rotas",
    badge: "ROTAS",
    tags: ["rotas", "linha reta", "navegacao", "maritima", "loxodromia", "ortodromia", "circulo maximo", "oceanos"]
  },
  {
    id: "radar-microestados",
    titulo: "Radar de Microestados em Escala",
    desc: "Compare o tamanho real dos 18 menores países soberanos do mundo com o Parque Ibirapuera, Copacabana e cidades brasileiras.",
    icon: "ph-bold ph-magnifying-glass-plus",
    cover: "/assets/img/ferramentas/radar-microestados.png",
    link: "/ferramentas/radar-microestados/",
    categoria: "Escala & Projeção",
    badge: "MICROESTADOS",
    tags: ["microestados", "menores paises", "vaticano", "monaco", "escala", "ibirapuera", "copacabana", "san marino"]
  },
  {
    id: "paradoxo-linha-costa",
    titulo: "O Paradoxo da Linha de Costa",
    desc: "Descubra por que é impossível medir o litoral exato de um país e simule o efeito fractal de Mandelbrot com réguas interativas.",
    icon: "ph-bold ph-chart-line-up",
    cover: "/assets/img/ferramentas/paradoxo-linha-costa.jpg",
    link: "/ferramentas/paradoxo-linha-costa/",
    categoria: "Ciência & Pesquisa",
    badge: "CIÊNCIA",
    tags: ["linha de costa", "litoral", "fractal", "mandelbrot", "morfologia", "regua", "fronteira", "paradoxo"]
  },
  {
    id: "simulador-nivel-mar",
    titulo: "Simulador de Elevação do Nível do Mar",
    desc: "Simule a elevação dos oceanos de +1m até +70m e veja quais litorais, ilhas e cidades do Brasil e do mundo ficariam submersos.",
    icon: "ph-bold ph-waves",
    cover: "/assets/img/ferramentas/simulador-nivel-mar.jpg",
    link: "/ferramentas/simulador-nivel-mar/",
    categoria: "Ciência & Clima",
    badge: "CLIMA & COSTAS",
    tags: ["nivel do mar", "elevacao", "inundacao", "clima", "aquecimento global", "litoral", "brasil", "recife", "rio de janeiro", "holanda", "oceanos", "ipcc"]
  }
];
