export interface GameItem {
  titulo: string;
  desc: string;
  icon: string;
  cover: string;
  link: string;
}

export const gamesDB: GameItem[] = [
  {
    titulo: "Quiz Geopolítico",
    desc: "Teste seu conhecimento sobre capitais, enclaves, conflitos territoriais e economia global.",
    icon: "https://img.icons8.com/?size=100&id=XsvEZR0h6fav&format=png&color=000000",
    cover: "https://i.natgeofe.com/k/c821a1da-3cea-4f22-a913-1018461702f3/quiz_geography_16x9.jpg?w=1200",
    link: "/jogos/quiz/"
  },
  {
    titulo: "Acerte a Bandeira",
    desc: "Você consegue identificar a nação soberana apenas pelo padrão heráldico da sua bandeira?",
    icon: "https://img.icons8.com/?size=100&id=o6oNyiaQhfex&format=png&color=000000",
    cover: "https://i.ytimg.com/vi/o5TQkVy0KWM/maxresdefault.jpg",
    link: "/jogos/bandeiras/"
  },
  {
    titulo: "Guerra de Números",
    desc: "Quem é maior em território? Quem tem maior PIB per capita? Um desafio cartográfico de Maior ou Menor.",
    icon: "https://img.icons8.com/?size=100&id=rOdRrQQZESUB&format=png&color=000000",
    cover: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ranks_of_countries_by_the_Good_Country_Index_1.5_%282020%29.png",
    link: "/jogos/maior-menor/"
  },
  {
    titulo: "Descubra a Capital",
    desc: "Identifique a capital estratégica de cada país em um mapa mundi interativo.",
    icon: "https://img.icons8.com/?size=100&id=36839&format=png&color=000000",
    cover: "https://i.ytimg.com/vi/EPWgsC6Tn00/maxresdefault.jpg",
    link: "/jogos/capitais/"
  }
];
