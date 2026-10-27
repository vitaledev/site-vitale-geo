// BANCO DE DADOS DE JOGOS — VITALEGEO ARCADE
const gamesDB = [
    {
        titulo: "Onde Fica no Mapa?",
        desc: "Ache estreitos, canais marítimos e marcos no mapa mudo. Quanto mais perto o clique, maior a pontuação.",
        icon: "ph-fill ph-crosshair",
        cover: "/assets/img/jogos/onde-fica.jpg",
        link: "/jogos/onde-fica/",
        badge: "MAPA MUDO"
    },
    {
        titulo: "O País Secreto",
        desc: "Adivinhe a nação misteriosa do dia. Cada palpite revela a distância em km e a direção do alvo.",
        icon: "ph-fill ph-thermometer-hot",
        cover: "/assets/img/jogos/pais-secreto.jpg",
        link: "/jogos/pais-secreto/",
        badge: "DESAFIO DIÁRIO"
    },
    {
        titulo: "Bandeiras do Mundo",
        desc: "Identifique as bandeiras de 198 países nos modos Sobrevivência (3 vidas) e Blitz (60 segundos).",
        icon: "ph-fill ph-flag-banner",
        cover: "/assets/img/jogos/bandeiras.jpg",
        link: "/jogos/bandeiras/",
        badge: "198 PAÍSES"
    },
    {
        titulo: "Capitais do Mundo",
        desc: "Descubra as capitais oficiais do planeta e não caia na pegadinha das maiores cidades.",
        icon: "ph-fill ph-buildings",
        cover: "/assets/img/jogos/capitais.jpg",
        link: "/jogos/capitais/",
        badge: "CAPITAIS"
    },
    {
        titulo: "Fronteiras do Mundo",
        desc: "Descubra quais países dividem limites terrestres, quais são ilhas e não caia nas pegadinhas de fronteira.",
        icon: "ph-fill ph-map-trifold",
        cover: "/assets/img/jogos/fronteiras.jpg",
        link: "/jogos/fronteiras/",
        badge: "FRONTEIRAS"
    },
    {
        titulo: "Maior ou Menor",
        desc: "Duelos diretos: compare dois países por área real em km², população ou tamanho da economia.",
        icon: "ph-fill ph-scales",
        cover: "/assets/img/jogos/maior-menor.jpg",
        link: "/jogos/maior-menor/",
        badge: "DUELO DE DADOS"
    },
    {
        titulo: "Duelo de Latitudes",
        desc: "Quem está mais ao norte? Quem está mais ao sul? Desmistifique as coordenadas e paralelos climáticos do globo.",
        icon: "ph-fill ph-compass",
        cover: "/assets/img/jogos/duelo-latitudes.svg",
        link: "/jogos/duelo-latitudes/",
        badge: "NOVO DUELO"
    },
    {
        titulo: "Quiz Geopolítico",
        desc: "Mais de 1.000 perguntas sobre estreitos, canais, limites territoriais e geografia mundial.",
        icon: "ph-fill ph-brain",
        cover: "/assets/img/jogos/quiz.jpg",
        link: "/jogos/quiz/",
        badge: "TRIVIA"
    },
    {
        titulo: "Silhueta do País",
        desc: "Identifique nações soberanas do planeta apenas pelo contorno da sua silhueta isolada com pistas progressivas.",
        icon: "ph-fill ph-globe-stand",
        cover: "/assets/img/jogos/silhueta-pais.svg",
        link: "/jogos/silhueta-pais/",
        badge: "NOVO ARCADE"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gamesDB };
}
