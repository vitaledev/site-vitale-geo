export interface ToolItem {
  titulo: string;
  desc: string;
  icon: string;
  cover: string;
  link: string;
}

export const toolsDB: ToolItem[] = [
  {
    titulo: "Quantos Cabem? (Comparador de Escala)",
    desc: "Descubra visualmente quantas vezes um país ou estado cabe dentro de outro território com preenchimento em blocos.",
    icon: "ph-bold ph-squares-four",
    cover: "/assets/img/ferramentas/quantos-cabem.jpg",
    link: "/ferramentas/quantos-cabem/"
  },
  {
    titulo: "Qual o Real Tamanho dos Países?",
    desc: "Compare o tamanho real dos territórios de cada país no mapa e descubra a distorção da projeção de Mercator.",
    icon: "ph-bold ph-globe-stand",
    cover: "/assets/img/ferramentas/comparador-paises.jpg",
    link: "/ferramentas/comparador-paises/"
  },
  {
    titulo: "Fuso Horário Global",
    desc: "Calculadora de fusos horários e meridianos internacionais.",
    icon: "ph-bold ph-clock",
    cover: "/assets/img/ferramentas/calculadora-fuso.png",
    link: "/ferramentas/calculadora-fuso/"
  },
  {
    titulo: "Gerador de Citações ABNT",
    desc: "Citações e referências cartográficas rápidas no formato acadêmico ABNT.",
    icon: "ph-bold ph-quotes",
    cover: "/assets/img/ferramentas/gerador-abnt.jpg",
    link: "/ferramentas/gerador-abnt/"
  },
  {
    titulo: "Medidor Geodésico de Distância",
    desc: "Descubra a distância ortodrômica real entre quaisquer dois pontos do globo terrestre.",
    icon: "ph-bold ph-path",
    cover: "/assets/img/ferramentas/calculadora-distancia.png",
    link: "/ferramentas/calculadora-distancia/"
  },
  {
    titulo: "Calculador de Antípodas",
    desc: "Veja onde você sairia se atravessasse a Terra em linha reta pelo centro do planeta.",
    icon: "ph-bold ph-globe-hemisphere-west",
    cover: "/assets/img/ferramentas/calculadora-antipodas.png",
    link: "/ferramentas/calculadora-antipodas/"
  },
  {
    titulo: "Rotas em Linha Reta no Globo",
    desc: "Compare a menor distância esférica com a distorção do mapa plano e veja a maior rota marítima do mundo.",
    icon: "ph-bold ph-compass",
    cover: "/assets/img/ferramentas/rotas-extremas.png",
    link: "/ferramentas/rotas-extremas/"
  }
];
