export interface GameItem {
  titulo: string;
  desc: string;
  icon: string;
  cover: string;
  link: string;
}

export const gamesDB: GameItem[] = [
  {
    titulo: "Onde Fica no Mapa? (Desafio Geopolítico)",
    desc: "Clique no mapa mudo e descubra quão perto você chega dos enclaves, estreitos e locais mais estratégicos do planeta em 5 rodadas.",
    icon: "https://img.icons8.com/?size=100&id=36839&format=png&color=000000",
    cover: "/assets/img/jogos/onde-fica.jpg",
    link: "/jogos/onde-fica/"
  },
  {
    titulo: "Acerte a Bandeira (Todas as 196)",
    desc: "Desafio global com todas as 196 bandeiras do mundo! Acerte em sequência sem perder as 3 vidas e tente zerar o planeta.",
    icon: "https://img.icons8.com/?size=100&id=o6oNyiaQhfex&format=png&color=000000",
    cover: "https://i.ytimg.com/vi/o5TQkVy0KWM/maxresdefault.jpg",
    link: "/jogos/bandeiras/"
  },
  {
    titulo: "Missão Capitais do Mundo (Top 100)",
    desc: "Você sabe a capital real do Canadá, Austrália ou Suíça? Desafio das 100 capitais mais estratégicas com pegadinhas clássicas.",
    icon: "https://img.icons8.com/?size=100&id=36839&format=png&color=000000",
    cover: "https://i.ytimg.com/vi/EPWgsC6Tn00/maxresdefault.jpg",
    link: "/jogos/capitais/"
  },
  {
    titulo: "Guerra de Números (PIB)",
    desc: "Quem é mais rico? Compare o PIB nominal das maiores potências em um desafio Higher or Lower com streak de recordes.",
    icon: "https://img.icons8.com/?size=100&id=rOdRrQQZESUB&format=png&color=000000",
    cover: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ranks_of_countries_by_the_Good_Country_Index_1.5_%282020%29.png",
    link: "/jogos/maior-menor/"
  },
  {
    titulo: "Quiz de Inteligência Geopolítica",
    desc: "40 questões investigativas sobre fronteiras, enclaves bizarros, estreitos marítimos e tratados históricos mundiais.",
    icon: "https://img.icons8.com/?size=100&id=XsvEZR0h6fav&format=png&color=000000",
    cover: "https://i.natgeofe.com/k/c821a1da-3cea-4f22-a913-1018461702f3/quiz_geography_16x9.jpg?w=1200",
    link: "/jogos/quiz/"
  }
];
