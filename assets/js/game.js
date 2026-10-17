// BANCO DE DADOS DE JOGOS — VITALEGEO ARCADE
const gamesDB = [
    {
        titulo: "Onde Fica no Mapa?",
        desc: "Aponte estreitos estratégicos, chokepoints e marcos geopolíticos no mapa mudo com pontuação de precisão por distância.",
        icon: "ph-fill ph-crosshair",
        cover: "/assets/img/jogos/onde-fica.jpg",
        link: "/jogos/onde-fica/",
        badge: "PRECISÃO GEODÉSICA"
    },
    {
        titulo: "O País Secreto",
        desc: "Descubra a nação misteriosa do dia guiado pela temperatura geodésica em km, bússola de azimute e mapa térmico.",
        icon: "ph-fill ph-thermometer-hot",
        cover: "/assets/img/jogos/pais-secreto.jpg",
        link: "/jogos/pais-secreto/",
        badge: "DESAFIO DIÁRIO"
    },
    {
        titulo: "Desafio Mundial de Bandeiras",
        desc: "Identifique as 198 bandeiras soberanas do planeta nos modos Sobrevivência (3 vidas) e Blitz 60s, com filtros por continente.",
        icon: "ph-fill ph-flag-banner",
        cover: "/assets/img/jogos/bandeiras.jpg",
        link: "/jogos/bandeiras/",
        badge: "198 SOBERANIAS"
    },
    {
        titulo: "Missão Capitais do Mundo",
        desc: "Domine as 198 capitais oficiais e supere as pegadinhas clássicas onde a maior metrópole não é a sede de governo.",
        icon: "ph-fill ph-buildings",
        cover: "/assets/img/jogos/capitais.jpg",
        link: "/jogos/capitais/",
        badge: "INTELIGÊNCIA DIPLOMÁTICA"
    },
    {
        titulo: "Guerra de Escala & Números",
        desc: "Duelos estatísticos de Maior ou Menor: compare a extensão territorial real (km² sem distorção de Mercator), população e PIB.",
        icon: "ph-fill ph-scales",
        cover: "/assets/img/jogos/maior-menor.jpg",
        link: "/jogos/maior-menor/",
        badge: "ESCALA REAL VS MERCATOR"
    },
    {
        titulo: "Quiz de Inteligência Geopolítica",
        desc: "Acervo investigativo com mais de 1.050 dossiês sobre tratados, canais marítimos, hidrografia e extremos do planeta sem repetição.",
        icon: "ph-fill ph-brain",
        cover: "/assets/img/jogos/quiz.jpg",
        link: "/jogos/quiz/",
        badge: "1.050 PERGUNTAS"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { gamesDB };
}
