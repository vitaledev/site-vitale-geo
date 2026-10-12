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
    cover: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    link: "/ferramentas/quantos-cabem/"
  },
  {
    titulo: "Qual o Real Tamanho dos Países?",
    desc: "Compare o tamanho real dos territórios de cada país no mapa e descubra a distorção da projeção de Mercator.",
    icon: "ph-bold ph-globe-stand",
    cover: "https://s2.glbimg.com/MQkTQrC9EICVaSQa2ddkcy_RsNg=/e.glbimg.com/og/ed/f/original/2020/06/10/a2.png",
    link: "/ferramentas/comparador-paises/"
  },
  {
    titulo: "Fuso Horário Global",
    desc: "Calculadora de fusos horários e meridianos internacionais.",
    icon: "ph-bold ph-clock",
    cover: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2016/07/fusohorario.png?resize=1080,565&crop=1",
    link: "/ferramentas/calculadora-fuso/"
  },
  {
    titulo: "Gerador de Citações ABNT",
    desc: "Citações e referências cartográficas rápidas no formato acadêmico ABNT.",
    icon: "ph-bold ph-quotes",
    cover: "https://tccdescomplicado.com.br/wp-content/uploads/2022/01/GERADOR-DE-REFERENCIAS-E-CITACOES-ABNT.png",
    link: "/ferramentas/gerador-abnt/"
  },
  {
    titulo: "Medidor Geodésico de Distância",
    desc: "Descubra a distância ortodrômica real entre quaisquer dois pontos do globo terrestre.",
    icon: "ph-bold ph-path",
    cover: "https://articles-images.sftcdn.net/wp-content/uploads/sites/7/2014/09/Measure-Distances-in-Google-Maps-header1.jpg",
    link: "/ferramentas/calculadora-distancia/"
  },
  {
    titulo: "Calculador de Antípodas (O Outro Lado da Terra)",
    desc: "Se você cavar um buraco reto atravessando o planeta, onde você sairia? Mapa duplo e coordenadas geodésicas.",
    icon: "ph-bold ph-globe-hemisphere-west",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    link: "/ferramentas/calculadora-antipodas/"
  }
];
