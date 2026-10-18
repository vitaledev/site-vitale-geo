export interface GameItem {
  id: string;
  titulo: string;
  desc: string;
  icon: string;
  cover: string;
  link: string;
  badge?: string;
  categoria: string;
  tags?: string[];
}

export const gamesDB: GameItem[] = [
  {
    id: "onde-fica",
    titulo: "Onde Fica no Mapa?",
    desc: "Ache estreitos, canais marítimos e marcos no mapa mudo. Quanto mais perto o clique, maior a pontuação.",
    icon: "ph-fill ph-crosshair",
    cover: "/assets/img/jogos/onde-fica.jpg",
    link: "/jogos/onde-fica/",
    categoria: "Mapa Mudo & Localização",
    badge: "MAPA MUDO",
    tags: ["mapa mudo", "localizacao", "estreitos", "canais", "clique", "geografia", "marcos", "pontos"]
  },
  {
    id: "pais-secreto",
    titulo: "O País Secreto",
    desc: "Adivinhe a nação misteriosa do dia. Cada palpite revela a distância em km e a direção do alvo.",
    icon: "ph-fill ph-thermometer-hot",
    cover: "/assets/img/jogos/pais-secreto.jpg",
    link: "/jogos/pais-secreto/",
    categoria: "Mapa Mudo & Localização",
    badge: "DESAFIO DIÁRIO",
    tags: ["pais secreto", "diario", "adivinhacao", "distancia", "direcao", "globle", "worldle", "misterio"]
  },
  {
    id: "bandeiras",
    titulo: "Bandeiras do Mundo",
    desc: "Identifique as bandeiras de 198 países nos modos Sobrevivência (3 vidas) e Blitz (60 segundos).",
    icon: "ph-fill ph-flag-banner",
    cover: "/assets/img/jogos/bandeiras.jpg",
    link: "/jogos/bandeiras/",
    categoria: "Símbolos & Capitais",
    badge: "198 PAÍSES",
    tags: ["bandeiras", "paises", "vexilologia", "blitz", "sobrevivencia", "simbolos", "198 paises", "cores"]
  },
  {
    id: "capitais",
    titulo: "Capitais do Mundo",
    desc: "Descubra as capitais oficiais do planeta e não caia na pegadinha das maiores cidades.",
    icon: "ph-fill ph-buildings",
    cover: "/assets/img/jogos/capitais.jpg",
    link: "/jogos/capitais/",
    categoria: "Símbolos & Capitais",
    badge: "CAPITAIS",
    tags: ["capitais", "cidades", "governo", "pegadinhas", "geografia politica", "mundo", "sedes"]
  },
  {
    id: "fronteiras",
    titulo: "Fronteiras do Mundo",
    desc: "Descubra quais países dividem limites terrestres, quais são ilhas e não caia nas pegadinhas de fronteira.",
    icon: "ph-fill ph-map-trifold",
    cover: "/assets/img/jogos/fronteiras.jpg",
    link: "/jogos/fronteiras/",
    categoria: "Fronteiras & Território",
    badge: "FRONTEIRAS",
    tags: ["fronteiras", "limites", "vizinhos", "ilhas", "enclaves", "divisas", "soberania", "terra"]
  },
  {
    id: "maior-menor",
    titulo: "Maior ou Menor",
    desc: "Duelos diretos: compare dois países por área real em km², população ou tamanho da economia.",
    icon: "ph-fill ph-scales",
    cover: "/assets/img/jogos/maior-menor.jpg",
    link: "/jogos/maior-menor/",
    categoria: "Estatísticas & Dados",
    badge: "DUELO DE DADOS",
    tags: ["maior ou menor", "duelo", "pib", "populacao", "area", "economia", "comparacao", "estatisticas"]
  },
  {
    id: "duelo-latitudes",
    titulo: "Duelo de Latitudes",
    desc: "Quem está mais ao norte? Quem está mais ao sul? Desmistifique as coordenadas e paralelos climáticos do globo.",
    icon: "ph-fill ph-compass",
    cover: "/assets/img/jogos/duelo-latitudes.svg",
    link: "/jogos/duelo-latitudes/",
    categoria: "Estatísticas & Dados",
    badge: "NOVO DUELO",
    tags: ["latitudes", "paralelos", "norte", "sul", "duelo", "coordenadas", "clima", "comparador"]
  },
  {
    id: "quiz",
    titulo: "Quiz Geopolítico",
    desc: "Mais de 1.000 perguntas sobre estreitos, canais, limites territoriais e geografia mundial.",
    icon: "ph-fill ph-brain",
    cover: "/assets/img/jogos/quiz.jpg",
    link: "/jogos/quiz/",
    categoria: "Quiz & Geopolítica",
    badge: "TRIVIA",
    tags: ["quiz", "trivia", "geopolitica", "perguntas", "estreitos", "historia", "conhecimento", "provas"]
  }
];
