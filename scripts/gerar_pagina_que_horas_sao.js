import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');

const paises = JSON.parse(fs.readFileSync(path.join(PASTA_RAIZ, 'ferramentas/que-horas-sao/paises-fusos.json'), 'utf8'));

// Top 20 países para o Schema FAQPage estruturado
const TOP_FAQS = [
  { slug: 'japao', nome: 'Japão', art: 'no', cap: 'Tóquio', tz: 'Asia/Tokyo', utc: 'UTC+9', diffPadrao: '+12 horas em relação ao Horário de Brasília (UTC-3)' },
  { slug: 'estados-unidos', nome: 'Estados Unidos', art: 'nos', cap: 'Washington, D.C.', tz: 'America/New_York', utc: 'UTC-5 a UTC-10', diffPadrao: 'de -1 a -5 horas em relação a Brasília dependendo do fuso (Nova York fica a -1h ou -2h dependendo do horário de verão americano)' },
  { slug: 'portugal', nome: 'Portugal', art: 'em', cap: 'Lisboa', tz: 'Europe/Lisbon', utc: 'UTC±0 / UTC+1', diffPadrao: '+3 a +4 horas à frente de Brasília (varia com o horário de verão europeu)' },
  { slug: 'reino-unido', nome: 'Reino Unido (Inglaterra)', art: 'no', cap: 'Londres', tz: 'Europe/London', utc: 'UTC±0 / UTC+1', diffPadrao: '+3 a +4 horas à frente de Brasília (horário de Greenwich GMT/BST)' },
  { slug: 'alemanha', nome: 'Alemanha', art: 'na', cap: 'Berlim', tz: 'Europe/Berlin', utc: 'UTC+1 / UTC+2', diffPadrao: '+4 a +5 horas à frente de Brasília (CET/CEST)' },
  { slug: 'franca', nome: 'França', art: 'na', cap: 'Paris', tz: 'Europe/Paris', utc: 'UTC+1 / UTC+2', diffPadrao: '+4 a +5 horas à frente de Brasília' },
  { slug: 'italia', nome: 'Itália', art: 'na', cap: 'Roma', tz: 'Europe/Rome', utc: 'UTC+1 / UTC+2', diffPadrao: '+4 a +5 horas à frente de Brasília' },
  { slug: 'espanha', nome: 'Espanha', art: 'na', cap: 'Madri', tz: 'Europe/Madrid', utc: 'UTC+1 / UTC+2', diffPadrao: '+4 a +5 horas à frente de Brasília (península) e +3h a +4h nas Ilhas Canárias' },
  { slug: 'china', nome: 'China', art: 'na', cap: 'Pequim', tz: 'Asia/Shanghai', utc: 'UTC+8', diffPadrao: '+11 horas à frente de Brasília (a China adota fuso unificado nacional em Pequim)' },
  { slug: 'australia', nome: 'Austrália', art: 'na', cap: 'Camberra', tz: 'Australia/Sydney', utc: 'UTC+8 a UTC+11', diffPadrao: '+11 a +14 horas à frente de Brasília (Sydney fica normalmente a +13h ou +14h com horário de verão)' },
  { slug: 'canada', nome: 'Canadá', art: 'no', cap: 'Ottawa', tz: 'America/Toronto', utc: 'UTC-3:30 a UTC-8', diffPadrao: 'Toronto e Montreal ficam a -1h ou -2h de Brasília; Vancouver no Pacífico fica a -4h ou -5h' },
  { slug: 'argentina', nome: 'Argentina', art: 'na', cap: 'Buenos Aires', tz: 'America/Argentina/Buenos_Aires', utc: 'UTC-3', diffPadrao: 'mesmo horário oficial de Brasília (ambos operam em UTC-3 durante todo o ano)' },
  { slug: 'mexico', nome: 'México', art: 'no', cap: 'Cidade do México', tz: 'America/Mexico_City', utc: 'UTC-5 a UTC-8', diffPadrao: '-3 horas atrás de Brasília na Cidade do México' },
  { slug: 'emirados-arabes-unidos', nome: 'Emirados Árabes Unidos (Dubai)', art: 'nos', cap: 'Abu Dhabi', tz: 'Asia/Dubai', utc: 'UTC+4', diffPadrao: '+7 horas à frente de Brasília' },
  { slug: 'russia', nome: 'Rússia', art: 'na', cap: 'Moscou', tz: 'Europe/Moscow', utc: 'UTC+2 a UTC+12', diffPadrao: '+6 horas à frente de Brasília em Moscou (UTC+3); o país se estende por 11 fusos horários' },
  { slug: 'coreia-do-sul', nome: 'Coreia do Sul', art: 'na', cap: 'Seul', tz: 'Asia/Seoul', utc: 'UTC+9', diffPadrao: '+12 horas à frente de Brasília' },
  { slug: 'india', nome: 'Índia', art: 'na', cap: 'Nova Delhi', tz: 'Asia/Kolkata', utc: 'UTC+5:30', diffPadrao: '+8 horas e 30 minutos à frente de Brasília (a Índia utiliza um raro fuso de meia hora)' },
  { slug: 'suica', nome: 'Suíça', art: 'na', cap: 'Berna', tz: 'Europe/Zurich', utc: 'UTC+1 / UTC+2', diffPadrao: '+4 a +5 horas à frente de Brasília' },
  { slug: 'israel', nome: 'Israel', art: 'em', cap: 'Jerusalém', tz: 'Asia/Jerusalem', utc: 'UTC+2 / UTC+3', diffPadrao: '+5 a +6 horas à frente de Brasília' },
  { slug: 'africa-do-sul', nome: 'África do Sul', art: 'na', cap: 'Pretória / Cidade do Cabo', tz: 'Africa/Johannesburg', utc: 'UTC+2', diffPadrao: '+5 horas à frente de Brasília' }
];

// Gerar FAQPage Schema JSON
const faqEntities = TOP_FAQS.map(faq => ({
  '@type': 'Question',
  'name': `Que horas são ${faq.art} ${faq.nome} agora?`,
  'acceptedAnswer': {
    '@type': 'Answer',
    'text': `O horário oficial ${faq.art} ${faq.nome} (referência principal em ${faq.cap}, fuso ${faq.utc}) pode ser consultado ao vivo na calculadora de fusos do VitaleGeo. A diferença média é de ${faq.diffPadrao}. O conversor atualiza a hora e a data automaticamente segundo o horário atômico e as regras de horário de verão locais.`
  }
}));

const faqSchemaJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqEntities
}, null, 2);

// Gerar cartões estáticos pré-renderizados para os 198 países
function gerarCardsPaises() {
  return paises.map(p => {
    const queryFrase = `Que horas são ${p.artigo} ${p.nome}?`;
    return `
      <a href="/ferramentas/que-horas-sao/?pais=${p.slug}"
         data-slug="${p.slug}"
         data-continent="${p.continente}"
         data-search="${p.synonyms.join(' ')}"
         class="country-card group bg-white border border-[#0A192F]/10 hover:border-[#C8102E]/40 rounded-2xl p-4 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between">
        <div class="flex items-start justify-between gap-2 mb-2">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-mono text-[10px] font-bold text-[#53647C] uppercase bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#0A192F]/5">${p.iso2.toUpperCase()}</span>
              <span class="text-[11px] font-mono text-[#53647C]">${p.continente}</span>
            </div>
            <h3 class="font-heading font-bold text-base text-[#0A192F] group-hover:text-[#C8102E] transition mt-1">
              ${p.nome}
            </h3>
            <p class="text-xs text-[#53647C]">Capital: ${p.capital}</p>
          </div>
          <div class="text-right">
            <span class="country-card-utc font-mono text-[11px] font-semibold text-[#0A192F] block">--</span>
            <span class="country-card-delta font-mono text-[10px] text-[#53647C] block">--</span>
          </div>
        </div>
        
        <div class="pt-2 border-t border-[#0A192F]/5 flex items-center justify-between mt-1">
          <span class="text-[11px] text-[#53647C] font-mono">${queryFrase}</span>
          <span class="country-card-time font-mono font-bold text-base text-[#0A192F] group-hover:text-[#C8102E] transition">--:--</span>
        </div>
      </a>
    `;
  }).join('\n');
}

const htmlContent = `<!DOCTYPE html>
<html lang="pt-br" class="scroll-smooth bg-[#F5F2EB]">
<head>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link id="canonical-tag" rel="canonical" href="https://www.vitalegeo.com.br/ferramentas/que-horas-sao/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title id="page-title">Que Horas São no Mundo? Conversor de Fuso Horário por País | VitaleGeo</title>
    <meta id="meta-description" name="description" content="Descubra que horas são em qualquer país do mundo agora em tempo real. Compare com o horário de Brasília, calcule a diferença de fusos horários e converta horas de reuniões.">
    <meta name="keywords" content="que horas são no japão, que horas são nos estados unidos, que horas são em portugal, que horas são na alemanha, horario mundial agora, conversor de fuso horario, que horas sao no mundo, relogio mundial, diferenca de horario brasil, vitalegeo">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="alternate" type="application/rss+xml" title="VitaleGeo | Feed RSS" href="https://www.vitalegeo.com.br/rss.xml">

    <!-- Open Graph / Redes Sociais -->
    <meta id="og-title" property="og:title" content="Que Horas São no Mundo? Conversor de Horários por País | VitaleGeo">
    <meta id="og-description" property="og:description" content="Consulte o horário atual de 198 países em tempo real, veja a diferença para Brasília e converta fusos instantaneamente.">
    <meta property="og:type" content="website">
    <meta id="og-url" property="og:url" content="https://www.vitalegeo.com.br/ferramentas/que-horas-sao/">
    <meta property="og:image" content="https://www.vitalegeo.com.br/assets/img/ferramentas/que-horas-sao.svg">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta id="tw-title" name="twitter:title" content="Que Horas São no Mundo? Conversor de Fuso Horário por País">
    <meta id="tw-description" name="twitter:description" content="Horário exato em 198 países, diferença de fusos para o Brasil e simulador de reuniões.">
    <meta name="twitter:image" content="https://www.vitalegeo.com.br/assets/img/ferramentas/que-horas-sao.svg">

    <!-- Google AdSense Oficial VitaleGeo -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6879770260785828" crossorigin="anonymous"></script>

    <!-- Tailwind & Estilos VitaleGeo -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- Tipografia Oficial VitaleGeo -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Orbitron:wght@700;800;900&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <!-- Schema.org Estruturado: WebApplication -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Conversor de Horário Mundial e Fusos por País",
      "url": "https://www.vitalegeo.com.br/ferramentas/que-horas-sao/",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "description": "Ferramenta para consultar que horas são em qualquer país do mundo em tempo real, calcular a diferença de horário com o Brasil e simular reuniões internacionais.",
      "browserRequirements": "Requires JavaScript. Requires HTML5."
    }
    </script>

    <!-- Schema.org Estruturado: FAQPage Pré-renderizado com Top 20 Consultas de SEO -->
    <script type="application/ld+json">
${faqSchemaJson}
    </script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'system-ui', 'sans-serif'],
                        heading: ['Montserrat', 'system-ui', 'sans-serif'],
                        display: ['Orbitron', 'system-ui', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace']
                    },
                    colors: {
                        geoBg: '#F5F2EB',
                        geoCard: '#FFFFFF',
                        geoNavy: '#0A192F',
                        geoNavyDark: '#112236',
                        geoSage: '#A8C3A6',
                        geoRed: '#C8102E',
                        geoSlate: '#53647C'
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-[#F5F2EB] text-[#1F334E] font-sans antialiased selection:bg-[#C8102E] selection:text-white page-shell min-h-screen flex flex-col justify-between">

    <!-- Navegação Flutuante em Pílula -->
    <nav class="floating-pill-nav">
        <div class="px-6 h-16 flex justify-between items-center w-full">
            <a href="/" class="flex items-center gap-2.5 group" aria-label="VitaleGeo Início">
                <div class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#0A192F] group-hover:text-[#C8102E] group-hover:scale-105 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-full h-full" fill="none">
                        <path stroke="currentColor" stroke-width="15" stroke-linecap="butt" stroke-linejoin="miter" d="M 193 63 A 92 92 0 1 0 220 128 L 154 128" />
                        <rect x="123" y="14" width="10" height="20" rx="2" fill="currentColor"/>
                        <rect x="123" y="222" width="10" height="20" rx="2" fill="currentColor"/>
                        <rect x="14" y="123" width="20" height="10" rx="2" fill="currentColor"/>
                        <ellipse cx="128" cy="128" rx="48" ry="92" stroke="currentColor" stroke-width="3" stroke-dasharray="6 5" opacity="0.4"/>
                        <line x1="128" y1="36" x2="128" y2="220" stroke="currentColor" stroke-width="2.5" stroke-dasharray="5 5" opacity="0.35"/>
                        <line x1="36" y1="128" x2="136" y2="128" stroke="currentColor" stroke-width="3" stroke-dasharray="6 5" opacity="0.4"/>
                        <path fill="currentColor" d="M 74 76 L 94 76 L 118 156 L 142 76 L 162 76 L 128 180 C 124 190 112 190 108 180 Z"/>
                    </svg>
                </div>
                <span class="text-base sm:text-lg font-['Orbitron',sans-serif] font-black tracking-wider leading-none text-[#0A192F] group-hover:text-[#C8102E] transition">
                    VITALEGEO
                </span>
            </a>
            
            <div class="hidden md:flex items-center gap-1 text-xs font-medium text-[#53647C] bg-white/70 p-1 rounded-full border border-[#0A192F]/10 shadow-sm">
                <a href="/" class="px-3 py-1 rounded-full hover:text-[#0A192F] hover:bg-white transition">Início</a>
                <a href="/blog" class="px-3 py-1 rounded-full hover:text-[#0A192F] hover:bg-white transition">Posts</a>
                <a href="/ferramentas" class="px-3 py-1 rounded-full text-[#0A192F] bg-white font-semibold shadow-xs">Ferramentas</a>
                <a href="/jogos" class="px-3 py-1 rounded-full hover:text-[#0A192F] hover:bg-white transition">Jogos</a>
                <a href="/videos" class="px-3 py-1 rounded-full hover:text-[#0A192F] hover:bg-white transition">Vídeos</a>
            </div>

            <a href="/ferramentas" class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#C8102E] transition px-3 py-1.5 rounded-full bg-white border border-[#0A192F]/10 shadow-sm">
                <i class="ph-bold ph-arrow-left"></i>
                <span class="hidden sm:inline">Ferramentas</span>
            </a>
        </div>
    </nav>

    <!-- Conteúdo Principal -->
    <main class="page-content pt-28 sm:pt-32 pb-16 px-4 sm:px-6 flex-1">
        <div class="max-w-6xl mx-auto">
            
            <!-- Cabeçalho Dinâmico Orientado a SEO -->
            <header class="mb-8 pb-5 border-b border-[#0A192F]/10">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2 mb-1.5">
                            <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/10 px-2 py-0.5 rounded-md">
                                Tempo & Fusos Horários
                            </span>
                            <span id="country-badge" class="text-[11px] font-mono font-semibold text-[#53647C] uppercase">
                                198 Países Mapeados
                            </span>
                        </div>
                        <h1 id="hero-title" class="text-2xl sm:text-4xl font-heading font-extrabold text-[#0A192F] tracking-tight">
                            Que Horas São no Mundo?
                        </h1>
                        <p id="hero-subtitle" class="text-xs sm:text-sm text-[#53647C] mt-1.5 max-w-2xl">
                            Consulte a hora atual em qualquer país do globo em tempo real, veja a diferença exata para Brasília e planeje horários internacionais.
                        </p>
                    </div>

                    <!-- Botões de Compartilhar & Copiar Link Direto -->
                    <div class="flex items-center gap-2 shrink-0 self-start md:self-end">
                        <button id="btn-copy-link" type="button" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#0A192F]/15 hover:border-[#C8102E]/40 text-xs font-semibold text-[#0A192F] transition shadow-xs">
                            <i class="ph-bold ph-link-simple text-sm text-[#C8102E]"></i>
                            <span>Copiar Link</span>
                        </button>
                        <button id="btn-share-whatsapp" type="button" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#112236] text-xs font-semibold text-white transition shadow-xs">
                            <i class="ph-bold ph-whatsapp-logo text-sm text-[#A8C3A6]"></i>
                            <span>WhatsApp</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- PAINEL CENTRAL DE CONVERSÃO E RELÓGIOS MONUMENTAIS -->
            <section aria-label="Relógios Mundiais e Comparador de Fusos" class="mb-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                    
                    <!-- CARD DO PAÍS ALVO (O país que o usuário busca) -->
                    <div class="lg:col-span-5 bg-white border border-[#0A192F]/12 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-pulse"></span>
                                <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8102E]">País Selecionado</span>
                            </div>
                            <span id="target-daylight-badge" class="text-[10px] font-mono text-[#53647C] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#0A192F]/5 hidden">
                                Horário Padrão
                            </span>
                        </div>

                        <!-- Seletor do País Alvo -->
                        <div class="mb-4">
                            <label for="select-target-country" class="block text-[11px] font-mono uppercase tracking-wider text-[#53647C] font-semibold mb-1">
                                Escolha o País
                            </label>
                            <div class="relative">
                                <select id="select-target-country" class="w-full rounded-xl border border-[#0A192F]/20 bg-[#FAF8F5] px-3.5 py-2.5 text-sm sm:text-base text-[#0A192F] font-bold focus:outline-none focus:border-[#C8102E] appearance-none cursor-pointer pr-10 shadow-xs">
                                </select>
                                <div class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#53647C]">
                                    <i class="ph-bold ph-caret-down"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Sub-zonas (se país tiver múltiplos fusos como EUA, Rússia, Canadá) -->
                        <div id="target-subzones-container" class="mb-4 hidden">
                            <label for="select-target-subzone" class="block text-[11px] font-mono uppercase tracking-wider text-[#53647C] font-semibold mb-1">
                                Fuso Regional / Cidade
                            </label>
                            <div class="relative">
                                <select id="select-target-subzone" class="w-full rounded-xl border border-[#0A192F]/20 bg-[#FAF8F5] px-3 py-2 text-xs sm:text-sm text-[#0A192F] font-semibold focus:outline-none focus:border-[#C8102E] appearance-none cursor-pointer pr-8 shadow-xs">
                                </select>
                                <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#53647C]">
                                    <i class="ph-bold ph-caret-down text-xs"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Display Monumental do Horário -->
                        <div class="py-4 my-auto text-center sm:text-left">
                            <div class="flex items-baseline justify-center sm:justify-start gap-1">
                                <span id="target-clock" class="font-['Orbitron',sans-serif] font-black text-4xl sm:text-6xl text-[#0A192F] tracking-tight">
                                    --:--:--
                                </span>
                            </div>
                            <p id="target-date" class="font-mono text-xs sm:text-sm text-[#53647C] mt-1.5 font-medium">
                                Atualizando data...
                            </p>
                        </div>

                        <!-- Metadados de Luz do Sol & Expediente -->
                        <div class="pt-4 border-t border-[#0A192F]/10 flex flex-wrap items-center justify-between gap-2">
                            <div id="target-period-badge" class="inline-flex items-center gap-1.5 text-xs font-mono text-[#0A192F] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#0A192F]/10">
                                <i class="ph-bold ph-sun text-[#C8102E]"></i>
                                <span>Dia</span>
                            </div>
                            <div id="target-work-badge" class="inline-flex items-center gap-1.5 text-xs font-mono text-[#53647C] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#0A192F]/10">
                                <i class="ph-bold ph-briefcase"></i>
                                <span>Expediente</span>
                            </div>
                            <div id="target-utc-offset" class="text-xs font-mono font-bold text-[#0A192F] ml-auto">
                                UTC+0
                            </div>
                        </div>
                    </div>

                    <!-- CARD CENTRAL DE DELTA / DIFERENÇA DE HORÁRIO -->
                    <div class="lg:col-span-2 bg-[#0A192F] text-white rounded-2xl p-5 shadow-xs flex flex-col justify-between items-center text-center">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-[#A8C3A6] font-bold">
                            Diferença Exata
                        </span>

                        <div class="my-auto py-2">
                            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 text-[#A8C3A6]">
                                <i id="delta-icon" class="ph-bold ph-arrows-left-right text-xl"></i>
                            </div>
                            <div id="delta-hours" class="font-['Orbitron',sans-serif] font-bold text-2xl sm:text-3xl text-white">
                                --
                            </div>
                            <div id="delta-day-badge" class="font-mono text-[11px] text-[#A8C3A6] mt-1 uppercase font-semibold">
                                Mesmo dia
                            </div>
                        </div>

                        <div class="text-[11px] font-mono text-white/70 border-t border-white/10 pt-3 w-full">
                            <span id="delta-summary">Calculando relação de fuso...</span>
                        </div>
                    </div>

                    <!-- CARD DO PAÍS DE REFERÊNCIA (Padrão: Brasil / Brasília) -->
                    <div class="lg:col-span-5 bg-white border border-[#0A192F]/12 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-2">
                                <i class="ph-bold ph-map-pin text-[#53647C]"></i>
                                <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#53647C]">País de Referência</span>
                            </div>
                            <span class="text-[10px] font-mono text-[#53647C] bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#0A192F]/5">
                                Sua Base
                            </span>
                        </div>

                        <!-- Seletor do País de Referência -->
                        <div class="mb-4">
                            <label for="select-ref-country" class="block text-[11px] font-mono uppercase tracking-wider text-[#53647C] font-semibold mb-1">
                                Ponto de Partida
                            </label>
                            <div class="relative">
                                <select id="select-ref-country" class="w-full rounded-xl border border-[#0A192F]/20 bg-[#FAF8F5] px-3.5 py-2.5 text-sm sm:text-base text-[#0A192F] font-bold focus:outline-none focus:border-[#C8102E] appearance-none cursor-pointer pr-10 shadow-xs">
                                </select>
                                <div class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#53647C]">
                                    <i class="ph-bold ph-caret-down"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Sub-zonas da Referência se aplicável -->
                        <div id="ref-subzones-container" class="mb-4 hidden">
                            <label for="select-ref-subzone" class="block text-[11px] font-mono uppercase tracking-wider text-[#53647C] font-semibold mb-1">
                                Região / Fuso de Origem
                            </label>
                            <div class="relative">
                                <select id="select-ref-subzone" class="w-full rounded-xl border border-[#0A192F]/20 bg-[#FAF8F5] px-3 py-2 text-xs sm:text-sm text-[#0A192F] font-semibold focus:outline-none focus:border-[#C8102E] appearance-none cursor-pointer pr-8 shadow-xs">
                                </select>
                                <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#53647C]">
                                    <i class="ph-bold ph-caret-down text-xs"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Display Monumental do Horário de Referência -->
                        <div class="py-4 my-auto text-center sm:text-left">
                            <div class="flex items-baseline justify-center sm:justify-start gap-1">
                                <span id="ref-clock" class="font-['Orbitron',sans-serif] font-black text-4xl sm:text-6xl text-[#0A192F] tracking-tight">
                                    --:--:--
                                </span>
                            </div>
                            <p id="ref-date" class="font-mono text-xs sm:text-sm text-[#53647C] mt-1.5 font-medium">
                                Atualizando data...
                            </p>
                        </div>

                        <!-- Metadados da Referência -->
                        <div class="pt-4 border-t border-[#0A192F]/10 flex flex-wrap items-center justify-between gap-2">
                            <div id="ref-period-badge" class="inline-flex items-center gap-1.5 text-xs font-mono text-[#0A192F] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#0A192F]/10">
                                <i class="ph-bold ph-sun text-[#C8102E]"></i>
                                <span>Dia</span>
                            </div>
                            <div id="ref-work-badge" class="inline-flex items-center gap-1.5 text-xs font-mono text-[#53647C] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#0A192F]/10">
                                <i class="ph-bold ph-briefcase"></i>
                                <span>Expediente</span>
                            </div>
                            <div id="ref-utc-offset" class="text-xs font-mono font-bold text-[#0A192F] ml-auto">
                                UTC-3
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <!-- SIMULADOR INTERATIVO DE REUNIÕES & LINHA DO TEMPO 24H -->
            <section class="bg-white border border-[#0A192F]/12 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#0A192F]/10">
                    <div>
                        <h2 class="text-sm font-heading font-bold text-[#0A192F] uppercase tracking-wider flex items-center gap-2">
                            <i class="ph-bold ph-sliders text-[#C8102E]"></i> Simulador de Reuniões & Conversor 24 Horas
                        </h2>
                        <p class="text-xs text-[#53647C] mt-0.5">
                            Arraste o marcador para simular qualquer hora no país de referência e veja a conversão simultânea.
                        </p>
                    </div>

                    <button id="btn-reset-now" type="button" class="inline-flex items-center gap-1 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#0A192F] text-[#0A192F] hover:text-white border border-[#0A192F]/10 transition">
                        <i class="ph-bold ph-clock-counter-clockwise"></i>
                        <span>Hora Atual</span>
                    </button>
                </div>

                <!-- Slider Interativo -->
                <div class="space-y-4 py-2">
                    <div class="flex items-center justify-between font-mono text-xs text-[#53647C]">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>23:59</span>
                    </div>

                    <input id="timeline-slider" type="range" min="0" max="1439" step="15" value="720" class="w-full accent-[#C8102E] cursor-pointer h-2 bg-[#FAF8F5] rounded-lg border border-[#0A192F]/10">

                    <!-- Visualizador da Conversão no Slider -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div class="bg-[#FAF8F5] border border-[#0A192F]/10 rounded-xl p-3 flex items-center justify-between">
                            <div>
                                <span id="slider-ref-name" class="text-[10px] font-mono uppercase tracking-wider text-[#53647C] block font-semibold">Brasil (Referência)</span>
                                <span id="slider-ref-time" class="font-['Orbitron',sans-serif] font-bold text-xl text-[#0A192F]">12:00</span>
                            </div>
                            <span id="slider-ref-badge" class="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-[#0A192F]/10 text-[#0A192F]">Tarde</span>
                        </div>

                        <div class="bg-[#FAF8F5] border border-[#0A192F]/10 rounded-xl p-3 flex items-center justify-between">
                            <div>
                                <span id="slider-target-name" class="text-[10px] font-mono uppercase tracking-wider text-[#C8102E] block font-semibold">País Selecionado</span>
                                <span id="slider-target-time" class="font-['Orbitron',sans-serif] font-bold text-xl text-[#C8102E]">--:--</span>
                            </div>
                            <span id="slider-target-badge" class="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-[#0A192F]/10 text-[#0A192F]">--</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ANÚNCIO ADSENSE RESPONSIVO (ANTI-CLS COM ALTURA RESERVADA) -->
            <div class="adsense-slot my-8 mx-auto w-full min-h-[120px] bg-white border border-[#0A192F]/10 rounded-xl flex items-center justify-center">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-6879770260785828"
                     data-ad-slot="5140105675"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                <script>
                    try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
                </script>
            </div>

            <!-- DIRETÓRIO SEMÂNTICO INDEXÁVEL DOS 198 PAÍSES (O MOTOR DE SEO CRAWLÁVEL) -->
            <section class="mt-12" aria-labelledby="directory-heading">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#0A192F]/10">
                    <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8102E] block mb-1">
                            Índice Global de Fusos Horários
                        </span>
                        <h2 id="directory-heading" class="text-xl sm:text-2xl font-heading font-extrabold text-[#0A192F] tracking-tight">
                            Que Horas São em Cada País do Mundo?
                        </h2>
                        <p class="text-xs sm:text-sm text-[#53647C] mt-1 max-w-xl">
                            Consulte a lista completa com os horários oficiais, capitais e fusos IANA dos 198 países e territórios soberanos.
                        </p>
                    </div>

                    <!-- Campo de Busca em Tempo Real -->
                    <div class="w-full md:w-72 relative">
                        <input id="directory-search" type="search" placeholder="Filtrar país ou capital..." class="w-full rounded-xl border border-[#0A192F]/20 bg-white px-3.5 py-2 pl-9 text-xs sm:text-sm text-[#0A192F] font-semibold focus:outline-none focus:border-[#C8102E] shadow-xs">
                        <i class="ph-bold ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-[#53647C] text-sm"></i>
                    </div>
                </div>

                <!-- Abas por Continente -->
                <div class="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none text-xs font-mono font-semibold">
                    <button type="button" class="continent-tab active px-3 py-1.5 rounded-full bg-[#0A192F] text-white transition shadow-xs" data-filter="all">Todos (198)</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="América do Sul">América do Sul</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="América do Norte">América do Norte</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="América Central">América Central</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="Europa">Europa</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="Ásia">Ásia</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="África">África</button>
                    <button type="button" class="continent-tab px-3 py-1.5 rounded-full bg-white text-[#53647C] hover:text-[#0A192F] border border-[#0A192F]/10 transition" data-filter="Oceania">Oceania</button>
                </div>

                <!-- Grid de Cartões Pré-renderizados (Indexável para o Googlebot) -->
                <div id="country-directory-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
${gerarCardsPaises()}
                </div>

                <div id="no-search-results" class="text-center py-12 text-xs font-mono text-[#53647C] hidden">
                    Nenhum país encontrado para o termo pesquisado.
                </div>
            </section>

            <!-- Links Internos & Artigos Relacionados -->
            <div class="mt-12 pt-6 border-t border-[#0A192F]/10 flex flex-wrap gap-4 items-center justify-between text-xs font-semibold">
                <a href="/blog/ranking-paises-mais-fusos-horarios/" class="text-[#0A192F] hover:text-[#C8102E] flex items-center gap-1.5">
                    <i class="ph-bold ph-article text-[#C8102E]"></i>
                    <span>Artigo: Por que a França tem 12 fusos e lidera o ranking mundial?</span>
                </a>
                <a href="/ferramentas/horarios-russia/" class="text-[#0A192F] hover:text-[#C8102E] flex items-center gap-1.5">
                    <i class="ph-bold ph-clock-countdown text-[#C8102E]"></i>
                    <span>Relógio Especial: Que horas são nos 11 fusos da Rússia?</span>
                </a>
                <a href="/ferramentas/calculadora-fuso/" class="text-[#0A192F] hover:text-[#C8102E] flex items-center gap-1.5">
                    <i class="ph-bold ph-globe text-[#C8102E]"></i>
                    <span>Calculadora Global de Fusos por Cidade</span>
                </a>
            </div>

        </div>
    </main>

    <!-- Rodapé Oficial VitaleGeo em Azul Marinho -->
    <footer class="site-footer">
        <div class="max-w-5xl mx-auto">
            <div class="site-footer__social">
                <a href="https://github.com/vitaledev" target="_blank" aria-label="GitHub"><i class="ph-fill ph-github-logo"></i></a>
                <a href="https://www.youtube.com/@vitalegeo" target="_blank" aria-label="YouTube"><i class="ph-fill ph-youtube-logo"></i></a>
            </div>
            <p class="site-footer__brand">VitaleGeo</p>
            <p class="text-[#CBD5E1] text-xs">Observatório independente de geopolítica, cartografia e dados territoriais.</p>
            <div class="site-footer__links">
                <a href="/sobre/">Sobre</a>
                <span>·</span>
                <a href="/politica/">Privacidade</a>
                <span>·</span>
                <a href="/ferramentas/">Ferramentas</a>
                <span>·</span>
                <a href="/jogos/">Jogos</a>
                <span>·</span>
                <a href="/blog/">Posts</a>
            </div>
            <p class="text-[11px] text-[#53647C] mt-6">&copy; 2026 VitaleGeo. Todos os direitos reservados.</p>
        </div>
    </footer>

    <!-- Carrega a Base Oficial de 198 Países e Fusos -->
    <script src="/ferramentas/que-horas-sao/paises-fusos.js"></script>

    <!-- Script de Execução e SEO Dinâmico -->
    <script>
    (function() {
        const PAISES = window.PAISES_FUSOS || [];
        if (!PAISES.length) return;

        // Elementos DOM
        const selectTarget = document.getElementById('select-target-country');
        const selectRef = document.getElementById('select-ref-country');
        const targetSubzonesContainer = document.getElementById('target-subzones-container');
        const selectTargetSubzone = document.getElementById('select-target-subzone');
        const refSubzonesContainer = document.getElementById('ref-subzones-container');
        const selectRefSubzone = document.getElementById('select-ref-subzone');

        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const countryBadge = document.getElementById('country-badge');
        const canonicalTag = document.getElementById('canonical-tag');
        const pageTitle = document.getElementById('page-title');
        const metaDesc = document.getElementById('meta-description');
        const ogTitle = document.getElementById('og-title');
        const ogDesc = document.getElementById('og-description');
        const ogUrl = document.getElementById('og-url');
        const twTitle = document.getElementById('tw-title');
        const twDesc = document.getElementById('tw-description');

        const targetClock = document.getElementById('target-clock');
        const targetDate = document.getElementById('target-date');
        const targetPeriod = document.getElementById('target-period-badge');
        const targetWork = document.getElementById('target-work-badge');
        const targetUtc = document.getElementById('target-utc-offset');

        const refClock = document.getElementById('ref-clock');
        const refDate = document.getElementById('ref-date');
        const refPeriod = document.getElementById('ref-period-badge');
        const refWork = document.getElementById('ref-work-badge');
        const refUtc = document.getElementById('ref-utc-offset');

        const deltaHours = document.getElementById('delta-hours');
        const deltaDayBadge = document.getElementById('delta-day-badge');
        const deltaSummary = document.getElementById('delta-summary');
        const deltaIcon = document.getElementById('delta-icon');

        const slider = document.getElementById('timeline-slider');
        const sliderRefName = document.getElementById('slider-ref-name');
        const sliderRefTime = document.getElementById('slider-ref-time');
        const sliderRefBadge = document.getElementById('slider-ref-badge');
        const sliderTargetName = document.getElementById('slider-target-name');
        const sliderTargetTime = document.getElementById('slider-target-time');
        const sliderTargetBadge = document.getElementById('slider-target-badge');
        const btnResetNow = document.getElementById('btn-reset-now');

        const btnCopyLink = document.getElementById('btn-copy-link');
        const btnShareWa = document.getElementById('btn-share-whatsapp');

        const directorySearch = document.getElementById('directory-search');
        const continentTabs = document.querySelectorAll('.continent-tab');
        const countryCards = document.querySelectorAll('.country-card');
        const noSearchResults = document.getElementById('no-search-results');

        // Estado da Aplicação
        let currentTargetSlug = 'japao';
        let currentRefSlug = 'brasil';
        let isSimulatingSlider = false;
        let sliderMinutes = 720; // 12:00

        // Helpers de Formatação e Fusos
        function getCountryBySlug(slug) {
            return PAISES.find(p => p.slug === slug) || PAISES.find(p => p.slug === 'japao') || PAISES[0];
        }

        function getActiveZone(country, isTarget) {
            const selectEl = isTarget ? selectTargetSubzone : selectRefSubzone;
            if (country.zones && country.zones.length > 1 && selectEl && selectEl.value) {
                return selectEl.value;
            }
            return country.defaultZone;
        }

        function formatDateTime(date, timeZone) {
            try {
                const fmt = new Intl.DateTimeFormat('pt-BR', {
                    timeZone,
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });
                const parts = {};
                fmt.formatToParts(date).forEach(p => { parts[p.type] = p.value; });
                return parts;
            } catch (e) {
                return { hour: '00', minute: '00', second: '00', day: '01', month: 'Janeiro', year: '2026', weekday: 'domingo' };
            }
        }

        function getUtcOffsetMinutes(date, timeZone) {
            try {
                const parts = formatDateTime(date, timeZone);
                const localUtc = Date.UTC(
                    Number(parts.year),
                    Number(parts.month ? (new Date(\`\${parts.year}-\${parts.month}-01\`).getMonth()) : 0),
                    Number(parts.day),
                    Number(parts.hour),
                    Number(parts.minute),
                    Number(parts.second)
                );
                return (localUtc - date.getTime()) / 60000;
            } catch (e) {
                return 0;
            }
        }

        function formatUtcLabel(offsetMinutes) {
            const sign = offsetMinutes >= 0 ? '+' : '-';
            const abs = Math.abs(offsetMinutes);
            const hours = Math.floor(abs / 60);
            const mins = abs % 60;
            return mins > 0 ? \`UTC\${sign}\${hours}:\${mins.toString().padStart(2, '0')}\` : \`UTC\${sign}\${hours}\`;
        }

        function getPeriodInfo(hour) {
            const h = Number(hour);
            if (h >= 0 && h < 6) {
                return { label: 'Madrugada', icon: 'ph-moon-stars', isDay: false, isWork: false };
            } else if (h >= 6 && h < 12) {
                return { label: 'Manhã', icon: 'ph-sun', isDay: true, isWork: h >= 9 };
            } else if (h >= 12 && h < 18) {
                return { label: 'Tarde', icon: 'ph-sun', isDay: true, isWork: true };
            } else {
                return { label: 'Noite', icon: 'ph-moon', isDay: false, isWork: false };
            }
        }

        // Popula Dropdowns
        function populateCountrySelects() {
            const optionsHtml = PAISES.map(p => \`<option value="\${p.slug}">\${p.nome} (\${p.capital})</option>\`).join('');
            selectTarget.innerHTML = optionsHtml;
            selectRef.innerHTML = optionsHtml;

            selectTarget.value = currentTargetSlug;
            selectRef.value = currentRefSlug;
        }

        function updateSubzonesUI(isTarget) {
            const country = getCountryBySlug(isTarget ? currentTargetSlug : currentRefSlug);
            const container = isTarget ? targetSubzonesContainer : refSubzonesContainer;
            const select = isTarget ? selectTargetSubzone : selectRefSubzone;

            if (country.zones && country.zones.length > 1) {
                container.classList.remove('hidden');
                select.innerHTML = country.zones.map(z => \`<option value="\${z.id}">\${z.label}</option>\`).join('');
            } else {
                container.classList.add('hidden');
                select.innerHTML = '';
            }
        }

        // Adaptação Dinâmica de SEO & URL ("SEO Invisível")
        function adaptSEO(targetCountry, refCountry) {
            const art = targetCountry.artigo || 'em';
            const nomeAlvo = targetCountry.nome;
            const capAlvo = targetCountry.capital;
            const refNome = refCountry.nome;

            // Título H1 Dinâmico
            heroTitle.textContent = \`Que horas são \${art} \${nomeAlvo} agora?\`;
            heroSubtitle.textContent = \`Horário oficial em \${capAlvo} e comparador de fusos horários em tempo real com \${refNome}.\`;
            countryBadge.textContent = \`\${nomeAlvo} · Capital: \${capAlvo}\`;

            // Document Title
            const newDocTitle = \`Que Horas São \${art.charAt(0).toUpperCase() + art.slice(1)} \${nomeAlvo} Agora? Horário em \${capAlvo} e Fuso | VitaleGeo\`;
            document.title = newDocTitle;
            if (pageTitle) pageTitle.textContent = newDocTitle;

            // Meta Description
            const newMetaDesc = \`Veja que horas são \${art} \${nomeAlvo} agora em tempo real. Consulte o fuso de \${capAlvo}, a diferença de horário para \${refNome} e use o conversor de horas internacional.\`;
            if (metaDesc) metaDesc.setAttribute('content', newMetaDesc);

            // Canonical & OpenGraph
            const targetUrl = \`https://www.vitalegeo.com.br/ferramentas/que-horas-sao/?pais=\${targetCountry.slug}\${refCountry.slug !== 'brasil' ? '&ref=' + refCountry.slug : ''}\`;
            if (canonicalTag) canonicalTag.setAttribute('href', targetUrl);
            if (ogTitle) ogTitle.setAttribute('content', newDocTitle);
            if (ogDesc) ogDesc.setAttribute('content', newMetaDesc);
            if (ogUrl) ogUrl.setAttribute('content', targetUrl);
            if (twTitle) twTitle.setAttribute('content', newDocTitle);
            if (twDesc) twDesc.setAttribute('content', newMetaDesc);

            // Atualiza barra de URL do navegador sem recarregar a página
            if (window.history && window.history.replaceState) {
                const searchParams = new URLSearchParams();
                searchParams.set('pais', targetCountry.slug);
                if (refCountry.slug !== 'brasil') {
                    searchParams.set('ref', refCountry.slug);
                }
                const newRelativeUrl = window.location.pathname + '?' + searchParams.toString();
                window.history.replaceState({ pais: targetCountry.slug, ref: refCountry.slug }, newDocTitle, newRelativeUrl);
            }
        }

        // Atualização dos Relógios Centrais
        function tickClocks() {
            const targetCountry = getCountryBySlug(currentTargetSlug);
            const refCountry = getCountryBySlug(currentRefSlug);

            const targetZone = getActiveZone(targetCountry, true);
            const refZone = getActiveZone(refCountry, false);

            let now = new Date();

            // Se o usuário estiver usando o slider interativo, simula a hora
            if (isSimulatingSlider) {
                const todayYmd = now.toISOString().slice(0, 10);
                const hours = Math.floor(sliderMinutes / 60);
                const mins = sliderMinutes % 60;
                now = new Date(\`\${todayYmd}T\${hours.toString().padStart(2, '0')}:\${mins.toString().padStart(2, '0')}:00Z\`);
            }

            const targetParts = formatDateTime(now, targetZone);
            const refParts = formatDateTime(now, refZone);

            // Atualiza Target Clock
            targetClock.textContent = isSimulatingSlider 
                ? \`\${targetParts.hour}:\${targetParts.minute}\` 
                : \`\${targetParts.hour}:\${targetParts.minute}:\${targetParts.second}\`;
            targetDate.textContent = \`\${targetParts.weekday}, \${targetParts.day} de \${targetParts.month} de \${targetParts.year}\`;

            const targetPeriodInfo = getPeriodInfo(targetParts.hour);
            targetPeriod.innerHTML = \`<i class="ph-bold \${targetPeriodInfo.icon} text-[#C8102E]"></i><span>\${targetPeriodInfo.label}</span>\`;
            targetWork.innerHTML = targetPeriodInfo.isWork 
                ? \`<i class="ph-bold ph-briefcase text-[#A8C3A6]"></i><span class="text-[#0A192F] font-semibold">Expediente Ativo</span>\`
                : \`<i class="ph-bold ph-moon"></i><span>Fora do Expediente</span>\`;

            // Atualiza Ref Clock
            refClock.textContent = isSimulatingSlider 
                ? \`\${refParts.hour}:\${refParts.minute}\` 
                : \`\${refParts.hour}:\${refParts.minute}:\${refParts.second}\`;
            refDate.textContent = \`\${refParts.weekday}, \${refParts.day} de \${refParts.month} de \${refParts.year}\`;

            const refPeriodInfo = getPeriodInfo(refParts.hour);
            refPeriod.innerHTML = \`<i class="ph-bold \${refPeriodInfo.icon} text-[#C8102E]"></i><span>\${refPeriodInfo.label}</span>\`;
            refWork.innerHTML = refPeriodInfo.isWork 
                ? \`<i class="ph-bold ph-briefcase text-[#A8C3A6]"></i><span class="text-[#0A192F] font-semibold">Expediente Ativo</span>\`
                : \`<i class="ph-bold ph-moon"></i><span>Fora do Expediente</span>\`;

            // Cálculo do Delta
            const targetOff = getUtcOffsetMinutes(now, targetZone);
            const refOff = getUtcOffsetMinutes(now, refZone);

            targetUtc.textContent = formatUtcLabel(targetOff);
            refUtc.textContent = formatUtcLabel(refOff);

            const diffMinutes = targetOff - refOff;
            const diffHoursVal = diffMinutes / 60;
            const sign = diffHoursVal >= 0 ? '+' : '';
            const diffHoursText = Number.isInteger(diffHoursVal) 
                ? \`\${sign}\${diffHoursVal}h\` 
                : \`\${sign}\${Math.floor(diffHoursVal)}h\${Math.abs(diffMinutes % 60)}m\`;

            deltaHours.textContent = diffHoursVal === 0 ? '0h' : diffHoursText;

            // Relação de Dias
            const dayTarget = Number(targetParts.day);
            const dayRef = Number(refParts.day);
            let dayRel = 'Mesmo dia';
            if (dayTarget > dayRef) {
                dayRel = '+1 dia (Amanhã)';
            } else if (dayTarget < dayRef) {
                dayRel = '-1 dia (Ontem)';
            }
            deltaDayBadge.textContent = dayRel;

            if (diffHoursVal === 0) {
                deltaSummary.textContent = \`\${targetCountry.nome} e \${refCountry.nome} estão exatamente no mesmo fuso horário.\`;
            } else if (diffHoursVal > 0) {
                deltaSummary.textContent = \`\${targetCountry.nome} está \${diffHoursText.replace('+', '')} à frente de \${refCountry.nome}.\`;
            } else {
                deltaSummary.textContent = \`\${targetCountry.nome} está \${diffHoursText.replace('-', '')} atrás de \${refCountry.nome}.\`;
            }

            // Atualiza Slider Textos
            sliderRefName.textContent = \`\${refCountry.nome} (Referência)\`;
            sliderRefTime.textContent = \`\${refParts.hour}:\${refParts.minute}\`;
            sliderRefBadge.textContent = refPeriodInfo.label;

            sliderTargetName.textContent = targetCountry.nome;
            sliderTargetTime.textContent = \`\${targetParts.hour}:\${targetParts.minute}\`;
            sliderTargetBadge.textContent = \`\${targetPeriodInfo.label} (\${dayRel})\`;
        }

        // Atualização em Lote dos 198 Cartões Pré-renderizados
        function updateDirectoryCardsTimes() {
            const now = new Date();
            const refCountry = getCountryBySlug(currentRefSlug);
            const refZone = getActiveZone(refCountry, false);
            const refOff = getUtcOffsetMinutes(now, refZone);

            countryCards.forEach(card => {
                const slug = card.getAttribute('data-slug');
                const country = getCountryBySlug(slug);
                if (!country) return;

                const zone = country.defaultZone;
                const parts = formatDateTime(now, zone);
                const off = getUtcOffsetMinutes(now, zone);
                const diffVal = (off - refOff) / 60;
                const sign = diffVal >= 0 ? '+' : '';
                const diffStr = diffVal === 0 ? 'Mesmo fuso' : \`\${sign}\${diffVal}h\`;

                const timeEl = card.querySelector('.country-card-time');
                const utcEl = card.querySelector('.country-card-utc');
                const deltaEl = card.querySelector('.country-card-delta');

                if (timeEl) timeEl.textContent = \`\${parts.hour}:\${parts.minute}\`;
                if (utcEl) utcEl.textContent = formatUtcLabel(off);
                if (deltaEl) deltaEl.textContent = diffStr;
            });
        }

        // Inicialização de Parâmetros de URL
        function parseUrlParams() {
            const params = new URLSearchParams(window.location.search);
            const pPais = params.get('pais');
            const pRef = params.get('ref');

            if (pPais && PAISES.some(p => p.slug === pPais.toLowerCase())) {
                currentTargetSlug = pPais.toLowerCase();
            } else {
                currentTargetSlug = 'japao'; // Destaque inicial
            }

            if (pRef && PAISES.some(p => p.slug === pRef.toLowerCase())) {
                currentRefSlug = pRef.toLowerCase();
            } else {
                currentRefSlug = 'brasil';
            }
        }

        // Ações e Event Listeners
        selectTarget.addEventListener('change', function() {
            currentTargetSlug = this.value;
            updateSubzonesUI(true);
            const target = getCountryBySlug(currentTargetSlug);
            const ref = getCountryBySlug(currentRefSlug);
            adaptSEO(target, ref);
            tickClocks();
        });

        selectTargetSubzone.addEventListener('change', function() {
            tickClocks();
        });

        selectRef.addEventListener('change', function() {
            currentRefSlug = this.value;
            updateSubzonesUI(false);
            const target = getCountryBySlug(currentTargetSlug);
            const ref = getCountryBySlug(currentRefSlug);
            adaptSEO(target, ref);
            tickClocks();
            updateDirectoryCardsTimes();
        });

        selectRefSubzone.addEventListener('change', function() {
            tickClocks();
            updateDirectoryCardsTimes();
        });

        // Slider Interativo 24 Horas
        slider.addEventListener('input', function() {
            isSimulatingSlider = true;
            sliderMinutes = Number(this.value);
            tickClocks();
        });

        btnResetNow.addEventListener('click', function() {
            isSimulatingSlider = false;
            const now = new Date();
            const refParts = formatDateTime(now, getActiveZone(getCountryBySlug(currentRefSlug), false));
            sliderMinutes = Number(refParts.hour) * 60 + Number(refParts.minute);
            slider.value = sliderMinutes;
            tickClocks();
        });

        // Clique nos Cartões do Diretório
        countryCards.forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const slug = this.getAttribute('data-slug');
                if (!slug) return;

                currentTargetSlug = slug;
                selectTarget.value = slug;
                updateSubzonesUI(true);

                const target = getCountryBySlug(currentTargetSlug);
                const ref = getCountryBySlug(currentRefSlug);
                adaptSEO(target, ref);
                tickClocks();

                // Scroll suave até o topo do relógio
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        // Filtro de Busca do Diretório
        directorySearch.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            let visibleCount = 0;

            countryCards.forEach(card => {
                const searchData = card.getAttribute('data-search') || '';
                const match = searchData.includes(query);
                card.style.display = match ? '' : 'none';
                if (match) visibleCount++;
            });

            if (noSearchResults) {
                noSearchResults.classList.toggle('hidden', visibleCount > 0);
            }
        });

        // Abas de Continentes
        continentTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                continentTabs.forEach(t => {
                    t.classList.remove('bg-[#0A192F]', 'text-white', 'active');
                    t.classList.add('bg-white', 'text-[#53647C]');
                });
                this.classList.add('bg-[#0A192F]', 'text-white', 'active');
                this.classList.remove('bg-white', 'text-[#53647C]');

                const filter = this.getAttribute('data-filter');
                let visibleCount = 0;

                countryCards.forEach(card => {
                    const cont = card.getAttribute('data-continent');
                    const match = filter === 'all' || cont === filter;
                    card.style.display = match ? '' : 'none';
                    if (match) visibleCount++;
                });

                if (noSearchResults) {
                    noSearchResults.classList.toggle('hidden', visibleCount > 0);
                }
            });
        });

        // Compartilhamento
        btnCopyLink.addEventListener('click', function() {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const span = this.querySelector('span');
                const orig = span.textContent;
                span.textContent = 'Link Copiado!';
                setTimeout(() => { span.textContent = orig; }, 2000);
            });
        });

        btnShareWa.addEventListener('click', function() {
            const target = getCountryBySlug(currentTargetSlug);
            const ref = getCountryBySlug(currentRefSlug);
            const art = target.artigo || 'em';
            const msg = \`Que horas são \${art} \${target.nome} agora? Veja o horário exato e a conversão de fuso com \${ref.nome} no VitaleGeo: \${window.location.href}\`;
            window.open(\`https://api.whatsapp.com/send?text=\${encodeURIComponent(msg)}\`, '_blank');
        });

        // Ciclo de Inicialização
        parseUrlParams();
        populateCountrySelects();
        updateSubzonesUI(true);
        updateSubzonesUI(false);

        const initialTarget = getCountryBySlug(currentTargetSlug);
        const initialRef = getCountryBySlug(currentRefSlug);
        adaptSEO(initialTarget, initialRef);

        // Inicializa slider com a hora atual da referência
        const nowInit = new Date();
        const refPartsInit = formatDateTime(nowInit, getActiveZone(initialRef, false));
        sliderMinutes = Number(refPartsInit.hour) * 60 + Number(refPartsInit.minute);
        slider.value = sliderMinutes;

        tickClocks();
        updateDirectoryCardsTimes();

        // Loop de Atualização a Cada Segundo
        setInterval(function() {
            if (!isSimulatingSlider) {
                tickClocks();
            }
        }, 1000);

        // Atualiza os cartões a cada 30 segundos
        setInterval(updateDirectoryCardsTimes, 30000);
    })();
    </script>
</body>
</html>
`;

const destPath = path.join(PASTA_RAIZ, 'ferramentas/que-horas-sao/index.html');
fs.writeFileSync(destPath, htmlContent, 'utf8');
console.log(`Página gerada com sucesso em: ${destPath}`);
console.log(`Tamanho do arquivo HTML gerado: ${(Buffer.byteLength(htmlContent) / 1024).toFixed(1)} KB`);
