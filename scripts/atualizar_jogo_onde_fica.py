import os
import shutil

ROOT_DIR = r"D:\Dev\vitale-geo"
INDEX_PATH = os.path.join(ROOT_DIR, "jogos", "onde-fica", "index.html")
PUBLIC_INDEX_PATH = os.path.join(ROOT_DIR, "public", "jogos", "onde-fica", "index.html")

NEW_JS_CODE = '''        // BANCO DE LOCAIS FALLBACK
        const LOCAIS_FALLBACK = [
            {
                nome: "Estreito de Ormuz",
                categoria: "Chokepoint do Petróleo",
                lat: 26.5667,
                lng: 56.2500,
                dica: "Gargalo marítimo estratégico entre o Irã e Omã por onde escoa 20% do petróleo mundial.",
                fato: "Com apenas 33 km de largura no seu ponto mais estreito, o Estreito de Ormuz é a artéria energética mais vigiada do Golfo Pérsico."
            },
            {
                nome: "Canal de Suez",
                categoria: "Chokepoint Comercial",
                lat: 30.7050,
                lng: 32.3442,
                dica: "Corta o Egito conectando o Mar Mediterrâneo ao Mar Vermelho sem contornar a África.",
                fato: "Inaugurado em 1869, o canal movimenta 12% do comércio global e economiza cerca de 7.000 km de viagem aos navios mercantes."
            },
            {
                nome: "Ponto Nemo",
                categoria: "Pólo da Inacessibilidade",
                lat: -48.8767,
                lng: -123.3933,
                dica: "O lugar mais isolado de terra firme em todos os oceanos, no Pacífico Sul.",
                fato: "Os seres humanos mais próximos do Ponto Nemo são frequentemente os astronautas da Estação Espacial Internacional (a 400 km acima)."
            },
            {
                nome: "Kaliningrado",
                categoria: "Porto Estratégico no Báltico",
                lat: 54.7104,
                lng: 20.4522,
                dica: "Território militar russo no Báltico prensado estrategicamente entre Polônia e Lituânia.",
                fato: "Antiga cidade prussiana de Königsberg, abriga a base naval da frota russa do Báltico."
            },
            {
                nome: "Estreito de Gibraltar",
                categoria: "Chokepoint Estratégico",
                lat: 35.98,
                lng: -5.60,
                dica: "O estreito marítimo de 14 km que separa a Europa da África e conecta o Atlântico ao Mediterrâneo.",
                fato: "Conhecido na Antiguidade como Colunas de Hércules, é uma das rotas marítimas mais movimentadas do globo."
            }
        ];

        // CONFIGURAÇÃO DINÂMICA DE PARTIDA & MODOS ARCADE
        const STORAGE_KEY_CONFIG = 'vitalegeo_onde_fica_config';
        const STORAGE_KEY_VISTOS = 'vitalegeo_onde_fica_historico_vistos';
        const STORAGE_KEY_CICLO = 'vitalegeo_onde_fica_ciclo';

        let configJogo = {
            modo: 'classico', // 'classico' | 'arcade'
            rodadas: 10,      // 5, 10, 15, 20
            categorias: {
                bandeiras: true,
                chokepoints: true,
                capitais: true,
                extremos: true
            }
        };

        function carregarConfiguracaoSalva() {
            try {
                const salva = localStorage.getItem(STORAGE_KEY_CONFIG);
                if (salva) {
                    const parsed = JSON.parse(salva);
                    if (parsed && typeof parsed === 'object') {
                        if (parsed.modo) configJogo.modo = parsed.modo;
                        if (parsed.rodadas) configJogo.rodadas = parseInt(parsed.rodadas, 10);
                        if (parsed.categorias) configJogo.categorias = Object.assign(configJogo.categorias, parsed.categorias);
                    }
                }
            } catch(e) {}
            atualizarUIModalConfig();
        }

        function salvarConfiguracao() {
            try {
                localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(configJogo));
            } catch(e) {}
        }

        function abrirModalConfig() {
            atualizarUIModalConfig();
            const modal = document.getElementById('modal-config');
            if (modal) modal.classList.remove('hidden');
        }

        function fecharModalConfig() {
            const modal = document.getElementById('modal-config');
            if (modal) modal.classList.add('hidden');
        }

        function selecionarModoJogo(modo) {
            configJogo.modo = modo;
            atualizarUIModalConfig();
        }

        function selecionarQtdRodadas(qtd) {
            configJogo.rodadas = qtd;
            atualizarUIModalConfig();
        }

        function atualizarUIModalConfig() {
            const cardClassico = document.getElementById('card-modo-classico');
            const cardArcade = document.getElementById('card-modo-arcade');
            const checkClassico = document.getElementById('check-modo-classico');
            const checkArcade = document.getElementById('check-modo-arcade');
            const secaoRodadas = document.getElementById('secao-qtd-rodadas');

            if (configJogo.modo === 'classico') {
                if (cardClassico) cardClassico.className = "mode-option-card p-3 rounded-2xl border border-amber-400/50 bg-amber-400/10 cursor-pointer transition relative";
                if (checkClassico) {
                    checkClassico.className = "w-4 h-4 rounded-full border border-amber-400 bg-amber-400 text-slate-950 flex items-center justify-center text-[10px]";
                    checkClassico.innerHTML = '<i class="ph-bold ph-check"></i>';
                }
                if (cardArcade) cardArcade.className = "mode-option-card p-3 rounded-2xl border border-white/15 bg-[#171a24] cursor-pointer hover:border-amber-400/50 transition relative";
                if (checkArcade) {
                    checkArcade.className = "w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-amber-400";
                    checkArcade.innerHTML = '<i class="ph-bold ph-check hidden"></i>';
                }
                if (secaoRodadas) secaoRodadas.classList.remove('hidden');
            } else {
                if (cardClassico) cardClassico.className = "mode-option-card p-3 rounded-2xl border border-white/15 bg-[#171a24] cursor-pointer hover:border-amber-400/50 transition relative";
                if (checkClassico) {
                    checkClassico.className = "w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[10px] text-amber-400";
                    checkClassico.innerHTML = '<i class="ph-bold ph-check hidden"></i>';
                }
                if (cardArcade) cardArcade.className = "mode-option-card p-3 rounded-2xl border border-amber-400/50 bg-amber-400/10 cursor-pointer transition relative";
                if (checkArcade) {
                    checkArcade.className = "w-4 h-4 rounded-full border border-amber-400 bg-amber-400 text-slate-950 flex items-center justify-center text-[10px]";
                    checkArcade.innerHTML = '<i class="ph-bold ph-check"></i>';
                }
                if (secaoRodadas) secaoRodadas.classList.add('hidden');
            }

            [5, 10, 15, 20].forEach(r => {
                const btn = document.getElementById(`btn-rodadas-${r}`);
                if (btn) {
                    if (configJogo.rodadas === r) {
                        btn.className = "py-2 rounded-xl border border-amber-400/50 bg-amber-400/10 text-xs font-mono font-bold text-amber-300 transition";
                        btn.innerText = `${r} Rodadas ⭐`;
                    } else {
                        btn.className = "py-2 rounded-xl border border-white/15 bg-[#171a24] text-xs font-mono font-bold text-slate-300 hover:text-white transition";
                        btn.innerText = `${r} Rodadas`;
                    }
                }
            });

            const chkBandeiras = document.getElementById('filtro-bandeiras');
            const chkChokepoints = document.getElementById('filtro-chokepoints');
            const chkCapitais = document.getElementById('filtro-capitais');
            const chkExtremos = document.getElementById('filtro-extremos');

            if (chkBandeiras) chkBandeiras.checked = !!configJogo.categorias.bandeiras;
            if (chkChokepoints) chkChokepoints.checked = !!configJogo.categorias.chokepoints;
            if (chkCapitais) chkCapitais.checked = !!configJogo.categorias.capitais;
            if (chkExtremos) chkExtremos.checked = !!configJogo.categorias.extremos;
        }

        function salvarConfigEIniciar() {
            const chkBandeiras = document.getElementById('filtro-bandeiras');
            const chkChokepoints = document.getElementById('filtro-chokepoints');
            const chkCapitais = document.getElementById('filtro-capitais');
            const chkExtremos = document.getElementById('filtro-extremos');

            configJogo.categorias.bandeiras = chkBandeiras ? chkBandeiras.checked : true;
            configJogo.categorias.chokepoints = chkChokepoints ? chkChokepoints.checked : true;
            configJogo.categorias.capitais = chkCapitais ? chkCapitais.checked : true;
            configJogo.categorias.extremos = chkExtremos ? chkExtremos.checked : true;

            if (!configJogo.categorias.bandeiras && !configJogo.categorias.chokepoints && !configJogo.categorias.capitais && !configJogo.categorias.extremos) {
                configJogo.categorias.bandeiras = true;
                configJogo.categorias.chokepoints = true;
            }

            salvarConfiguracao();
            fecharModalConfig();
            iniciarJogo();
        }

        // CATÁLOGO UNIFICADO DE DESAFIOS (BANDEIRAS, CHOKEPOINTS, CAPITAIS E EXTREMOS)
        function obterCatalogoDesafios(config) {
            const lista = [];
            const paises = (window.CerebroGeo && window.CerebroGeo.paises) ? window.CerebroGeo.paises : [];
            const locais = (window.CerebroGeo && window.CerebroGeo.locais && window.CerebroGeo.locais.length > 0)
                ? window.CerebroGeo.locais
                : (typeof LOCAIS_ONDE_FICA !== 'undefined' && LOCAIS_ONDE_FICA.length > 0 ? LOCAIS_ONDE_FICA : LOCAIS_FALLBACK);

            // 1. BANDEIRAS DO MUNDO (198 nações com imagens em alta definição via FlagCDN)
            if (config.categorias.bandeiras && paises.length > 0) {
                paises.forEach(p => {
                    if (p.iso2 && typeof p.lat === 'number' && typeof p.lng === 'number') {
                        lista.push({
                            id: `bandeira_${p.iso2.toLowerCase()}`,
                            tipo: 'bandeira',
                            nome: p.nome,
                            iso2: p.iso2.toLowerCase(),
                            categoria: "🚩 Bandeira do Mundo",
                            lat: p.lat,
                            lng: p.lng,
                            dica: `País soberano situado em ${p.continente}. Capital política: ${p.capital}.`,
                            fato: p.fato || `Território de ${p.nome}, capital ${p.capital} (${p.continente}).`
                        });
                    }
                });
            }

            // 2. CHOKEPOINTS & ROTAS MARÍTIMAS
            if (config.categorias.chokepoints) {
                const chokes = locais.filter(l => {
                    const cat = (l.categoria || '').toLowerCase();
                    const nome = (l.nome || '').toLowerCase();
                    return cat.includes('chokepoint') || cat.includes('estreito') || cat.includes('canal') ||
                           cat.includes('porta') || cat.includes('passagem') || cat.includes('rota') ||
                           cat.includes('corredor') || nome.includes('estreito') || nome.includes('canal');
                });
                const alvo = chokes.length > 0 ? chokes : locais.slice(0, 40);
                alvo.forEach(l => {
                    lista.push({
                        id: `choke_${l.nome}`,
                        tipo: 'chokepoint',
                        nome: l.nome,
                        categoria: `⚓ ${l.categoria || 'Chokepoint Estratégico'}`,
                        lat: l.lat,
                        lng: l.lng,
                        dica: l.dica,
                        fato: l.fato
                    });
                });
            }

            // 3. CAPITAIS MUNDIAIS
            if (config.categorias.capitais && paises.length > 0) {
                paises.forEach(p => {
                    if (p.capital && typeof p.lat === 'number' && typeof p.lng === 'number') {
                        lista.push({
                            id: `capital_${p.iso2 ? p.iso2.toLowerCase() : p.nome}`,
                            tipo: 'capital',
                            nome: `${p.capital} (${p.nome})`,
                            categoria: "🏛️ Capital Mundial",
                            lat: p.lat,
                            lng: p.lng,
                            dica: `Capital administrativa de ${p.nome}, no continente ${p.continente}.`,
                            fato: p.fato || `Capital nacional de ${p.nome}, sede dos poderes da nação.`
                        });
                    }
                });
            }

            // 4. EXTREMOS & MARAVILHAS GEOGRÁFICAS
            if (config.categorias.extremos) {
                const ext = locais.filter(l => {
                    const cat = (l.categoria || '').toLowerCase();
                    const nome = (l.nome || '').toLowerCase();
                    return cat.includes('pólo') || cat.includes('polo') || cat.includes('extremo') || cat.includes('fossa') ||
                           cat.includes('deserto') || cat.includes('vulcão') || cat.includes('cume') ||
                           cat.includes('ponto') || cat.includes('arquipélago') || cat.includes('porto') ||
                           nome.includes('ponto') || nome.includes('fossa') || nome.includes('cabo');
                });
                const alvoExt = ext.length > 0 ? ext : locais.slice(40, 80);
                alvoExt.forEach(l => {
                    lista.push({
                        id: `extremo_${l.nome}`,
                        tipo: 'extremo',
                        nome: l.nome,
                        categoria: `🏔️ ${l.categoria || 'Extremo Geográfico'}`,
                        lat: l.lat,
                        lng: l.lng,
                        dica: l.dica,
                        fato: l.fato
                    });
                });
            }

            // Fallback de segurança caso nenhum filtro retorne itens
            if (lista.length === 0) {
                LOCAIS_FALLBACK.forEach(l => {
                    lista.push({
                        id: `fallback_${l.nome}`,
                        tipo: 'chokepoint',
                        nome: l.nome,
                        categoria: l.categoria,
                        lat: l.lat,
                        lng: l.lng,
                        dica: l.dica,
                        fato: l.fato
                    });
                });
            }

            return lista;
        }

        // MOTOR ANTI-REPETIÇÃO COM MEMÓRIA NO LOCALSTORAGE
        function sortearDesafiosSemRepeticao(quantidade = 10, config = configJogo) {
            const baseCompleta = obterCatalogoDesafios(config);
            let vistos = [];
            let ciclo = 1;
            try {
                vistos = JSON.parse(localStorage.getItem(STORAGE_KEY_VISTOS) || '[]');
                if (!Array.isArray(vistos)) vistos = [];
                ciclo = parseInt(localStorage.getItem(STORAGE_KEY_CICLO) || '1', 10);
            } catch (e) {
                vistos = [];
                ciclo = 1;
            }

            let naoVistos = baseCompleta.filter(l => !vistos.includes(l.id || l.nome));
            let cicloRenovado = false;

            if (naoVistos.length < quantidade) {
                ciclo += 1;
                vistos = [];
                naoVistos = [...baseCompleta];
                cicloRenovado = true;
                try {
                    localStorage.setItem(STORAGE_KEY_CICLO, ciclo.toString());
                } catch (e) {}
            }

            // Algoritmo Fisher-Yates
            const copia = [...naoVistos];
            for (let i = copia.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copia[i], copia[j]] = [copia[j], copia[i]];
            }

            const selecionados = copia.slice(0, quantidade);
            selecionados.forEach(s => {
                const key = s.id || s.nome;
                if (!vistos.includes(key)) vistos.push(key);
            });

            try {
                localStorage.setItem(STORAGE_KEY_VISTOS, JSON.stringify(vistos));
            } catch (e) {}

            return {
                desafios: selecionados,
                vistosTotal: vistos.length,
                acervoTotal: baseCompleta.length,
                ciclo: ciclo,
                cicloRenovado: cicloRenovado
            };
        }

        function reiniciarHistoricoCache() {
            try {
                localStorage.removeItem(STORAGE_KEY_VISTOS);
                localStorage.removeItem(STORAGE_KEY_CICLO);
            } catch (e) {}
            iniciarJogo();
        }

        // ESTADO GLOBAL DO JOGO & ELEMENTOS ARCADE
        let partidaDesafios = [];
        let rodadaAtualIndex = 0;
        let pontuacaoTotal = 0;
        let palpiteAtualLatLng = null;
        let somHabilitado = true;
        let historicoRodadas = [];

        // SISTEMA DE VIDAS ARCADE (MODO SOBREVIVÊNCIA)
        let vidasArcade = 3;
        const MAX_VIDAS_ARCADE = 3;

        // SISTEMA DE COMBO STREAK & AGILIDADE
        let comboStreak = 0;
        let maxStreakPartida = 0;
        let comboMultiplier = 1.0;
        let tempoInicioRodada = Date.now();
        let timerInterval = null;

        // MAPA LEAFLET
        let map = null;
        let camadaAtual = null;
        let guessMarker = null;
        let targetMarker = null;
        let connectionLine = null;
        let radarCircle = null;

        // CAMADAS DE MAPA GRATUITAS
        const TILES = {
            canvas: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
            sat: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            osm: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        };

        // INICIALIZAÇÃO DO JOGO
        function iniciarJogo() {
            carregarConfiguracaoSalva();

            const qtdInicial = configJogo.modo === 'arcade' ? 10 : configJogo.rodadas;
            const selecao = sortearDesafiosSemRepeticao(qtdInicial, configJogo);
            partidaDesafios = selecao.desafios;
            rodadaAtualIndex = 0;
            pontuacaoTotal = 0;
            comboStreak = 0;
            maxStreakPartida = 0;
            comboMultiplier = 1.0;
            historicoRodadas = [];
            vidasArcade = 3;

            atualizarPlacarInterface();
            atualizarBadgeProgresso(selecao);
            atualizarStreakUI();
            atualizarVidasUI();

            // Atualiza Badge do Modo no Topo
            const modeBadge = document.getElementById('game-mode-badge');
            if (modeBadge) {
                if (configJogo.modo === 'arcade') {
                    modeBadge.innerHTML = '🕹️ Sobrevivência';
                    modeBadge.className = 'text-[10px] sm:text-xs font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400';
                } else {
                    modeBadge.innerHTML = `🏆 Clássico (${configJogo.rodadas}R)`;
                    modeBadge.className = 'text-[10px] sm:text-xs font-mono text-slate-300 uppercase px-2 py-0.5 rounded-full bg-white/5 border border-white/10';
                }
            }

            if (!map) {
                inicializarMapa();
            }

            carregarRodada(rodadaAtualIndex);
        }

        function atualizarVidasUI() {
            const badge = document.getElementById('arcade-lives-badge');
            const display = document.getElementById('lives-display');
            if (!badge || !display) return;

            if (configJogo.modo === 'arcade') {
                badge.classList.remove('hidden');
                badge.classList.add('flex');
                let coracoes = '';
                for (let i = 0; i < MAX_VIDAS_ARCADE; i++) {
                    if (i < vidasArcade) {
                        coracoes += '<span class="inline-block transition-transform hover:scale-125">❤️</span>';
                    } else {
                        coracoes += '<span class="inline-block opacity-40 grayscale">🖤</span>';
                    }
                }
                display.innerHTML = coracoes;
            } else {
                badge.classList.add('hidden');
                badge.classList.remove('flex');
            }
        }

        function atualizarBadgeProgresso(dados) {
            const el = document.getElementById('catalog-progress-text');
            if (el) {
                el.innerText = `${dados.vistosTotal} / ${dados.acervoTotal} explorados (Ciclo ${dados.ciclo})`;
            }
        }

        function atualizarStreakUI() {
            const badge = document.getElementById('streak-badge');
            const text = document.getElementById('streak-text');
            if (!badge || !text) return;

            if (comboStreak >= 2) {
                badge.classList.remove('hidden');
                badge.classList.add('inline-flex', 'combo-active');
                text.innerText = `🔥 COMBO x${comboMultiplier.toFixed(1)} (${comboStreak} seguidas)`;
            } else if (comboStreak === 1) {
                badge.classList.remove('hidden', 'combo-active');
                badge.classList.add('inline-flex');
                text.innerText = `🔥 STREAK 1x`;
            } else {
                badge.classList.add('hidden');
                badge.classList.remove('combo-active');
            }
        }

        // INICIALIZAÇÃO DO MAPA
        function inicializarMapa() {
            map = L.map('map', {
                center: [20, 0],
                zoom: 2,
                minZoom: 2,
                maxZoom: 17,
                worldCopyJump: true,
                zoomControl: true,
                tap: true
            });

            camadaAtual = L.tileLayer(TILES.canvas, {
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
                maxZoom: 16
            }).addTo(map);

            map.on('click', function(e) {
                if (document.getElementById('round-result-card').classList.contains('hidden') === false) {
                    return;
                }
                registrarClique(e.latlng);
            });
        }

        function mudarCamada(tipo) {
            if (!map) return;
            map.removeLayer(camadaAtual);

            let url = TILES[tipo] || TILES.canvas;
            let attr = tipo === 'osm' ? '&copy; OpenStreetMap contributors' : 'Tiles &copy; Esri';

            camadaAtual = L.tileLayer(url, { attribution: attr }).addTo(map);

            ['canvas', 'sat', 'osm'].forEach(t => {
                const btn = document.getElementById(`btn-layer-${t}`);
                if (btn) {
                    btn.className = (t === tipo) 
                        ? "px-2 sm:px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold transition"
                        : "px-2 sm:px-2.5 py-1 rounded-lg text-slate-300 hover:text-white transition";
                }
            });
        }

        // REGISTRAR CLIQUE
        function registrarClique(latlng) {
            palpiteAtualLatLng = latlng;
            tocarSomClick();

            if (guessMarker) {
                guessMarker.setLatLng(latlng);
            } else {
                const guessIcon = L.divIcon({
                    className: 'custom-guess-icon',
                    html: '<div class="pin-guess"><i class="ph-bold ph-crosshair"></i></div>',
                    iconSize: [28, 28],
                    iconAnchor: [14, 14]
                });
                guessMarker = L.marker(latlng, { icon: guessIcon }).addTo(map);
            }

            const actionBar = document.getElementById('action-bar');
            actionBar.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            actionBar.classList.add('opacity-100', 'translate-y-0');

            document.getElementById('hint-click-banner').classList.add('hidden');
        }

        function limparPalpite() {
            if (guessMarker) {
                map.removeLayer(guessMarker);
                guessMarker = null;
            }
            palpiteAtualLatLng = null;

            const actionBar = document.getElementById('action-bar');
            actionBar.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            actionBar.classList.remove('opacity-100', 'translate-y-0');
            document.getElementById('hint-click-banner').classList.remove('hidden');
        }

        // CARREGAR RODADA
        function carregarRodada(index) {
            const desafio = partidaDesafios[index];
            if (!desafio) return;

            // Reset de marcadores visuais
            if (guessMarker) { map.removeLayer(guessMarker); guessMarker = null; }
            if (targetMarker) { map.removeLayer(targetMarker); targetMarker = null; }
            if (connectionLine) { map.removeLayer(connectionLine); connectionLine = null; }
            if (radarCircle) { map.removeLayer(radarCircle); radarCircle = null; }
            palpiteAtualLatLng = null;

            // Interface do Cabeçalho da Rodada
            const roundIndicator = document.getElementById('round-indicator');
            if (roundIndicator) {
                if (configJogo.modo === 'arcade') {
                    roundIndicator.innerText = `SOBREVIVÊNCIA // ONDA ${index + 1}`;
                } else {
                    roundIndicator.innerText = `RODADA ${index + 1} DE ${configJogo.rodadas}`;
                }
            }

            document.getElementById('target-category').innerText = desafio.categoria;
            document.getElementById('target-hint').innerText = desafio.dica;

            // Tratamento especial para DESAFIO DE BANDEIRAS
            const flagBox = document.getElementById('flag-challenge-box');
            const flagImg = document.getElementById('flag-challenge-img');
            const flagPrompt = document.getElementById('flag-challenge-prompt');
            const targetTitle = document.getElementById('target-title');

            if (desafio.tipo === 'bandeira' && desafio.iso2) {
                if (flagBox) flagBox.classList.remove('hidden');
                if (flagImg) {
                    flagImg.src = `https://flagcdn.com/w160/${desafio.iso2}.png`;
                    flagImg.alt = `Bandeira de ${desafio.nome}`;
                }
                if (flagPrompt) {
                    flagPrompt.innerText = `De qual país é esta bandeira? Aponte ${desafio.nome} no mapa!`;
                }
                targetTitle.innerHTML = `Onde fica o território de <span class="text-amber-400 underline decoration-amber-400/30 decoration-wavy">${desafio.nome}</span>?`;
            } else {
                if (flagBox) flagBox.classList.add('hidden');
                if (desafio.tipo === 'capital') {
                    targetTitle.innerHTML = `Onde fica a <span class="text-amber-400 underline decoration-amber-400/30 decoration-wavy">${desafio.nome}</span>?`;
                } else {
                    targetTitle.innerHTML = `Onde fica o <span class="text-amber-400 underline decoration-amber-400/30 decoration-wavy">${desafio.nome}</span>?`;
                }
            }

            document.getElementById('round-result-card').classList.add('hidden');
            const actionBar = document.getElementById('action-bar');
            actionBar.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            actionBar.classList.remove('opacity-100', 'translate-y-0');
            document.getElementById('hint-click-banner').classList.remove('hidden');

            // Inicia cronômetro da rodada
            tempoInicioRodada = Date.now();
            if (timerInterval) clearInterval(timerInterval);
            const timerEl = document.getElementById('round-timer');
            if (timerEl) {
                timerEl.innerText = "0.0s";
                timerInterval = setInterval(() => {
                    const seg = ((Date.now() - tempoInicioRodada) / 1000).toFixed(1);
                    timerEl.innerText = `${seg}s`;
                }, 100);
            }

            map.flyTo([20, 0], 2, { duration: 0.8 });
        }

        // CONFIRMAR PALPITE & CALCULAR PONTUAÇÃO ARCADE
        function confirmarPalpite() {
            if (!palpiteAtualLatLng) return;

            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }

            const tempoGasto = Math.max(0.5, (Date.now() - tempoInicioRodada) / 1000);
            const desafio = partidaDesafios[rodadaAtualIndex];
            const targetLatLng = L.latLng(desafio.lat, desafio.lng);

            // Cálculo da distância em km (Haversine)
            const distKm = Math.round(calcularHaversineKm(
                palpiteAtualLatLng.lat, palpiteAtualLatLng.lng,
                targetLatLng.lat, targetLatLng.lng
            ));

            // 1. Pontuação Base (0 a 5.000 pts)
            let baseScore = 0;
            if (distKm <= 25) {
                baseScore = 5000;
            } else {
                baseScore = Math.max(0, Math.round(5000 * Math.exp(-distKm / 1900)));
            }

            // 2. Atualiza Combo Streak
            let streakGanho = false;
            let streakHeal = false;
            if (distKm <= 300) {
                comboStreak++;
                if (comboStreak > maxStreakPartida) maxStreakPartida = comboStreak;
                streakGanho = true;

                if (comboStreak === 2) comboMultiplier = 1.2;
                else if (comboStreak === 3) {
                    comboMultiplier = 1.5;
                    streakHeal = true;
                }
                else if (comboStreak >= 4) comboMultiplier = 2.0;
                else comboMultiplier = 1.0;
            } else if (distKm > 1000) {
                comboStreak = 0;
                comboMultiplier = 1.0;
            }

            // 3. Bônus de Agilidade / Velocidade (até +500 pts se acertou razoavelmente perto e rápido)
            let speedBonus = 0;
            if (distKm <= 600) {
                if (tempoGasto <= 5) speedBonus = 500;
                else if (tempoGasto <= 15) speedBonus = Math.round(500 * (1 - (tempoGasto - 5) / 10));
            }

            // 4. Efeito no MODO ARCADE (VIDAS)
            let vidaPerdida = false;
            let vidaRecuperada = false;

            if (configJogo.modo === 'arcade') {
                if (distKm > 1200) {
                    vidasArcade = Math.max(0, vidasArcade - 1);
                    vidaPerdida = true;
                } else if ((distKm <= 150 || streakHeal) && vidasArcade < MAX_VIDAS_ARCADE) {
                    vidasArcade = Math.min(MAX_VIDAS_ARCADE, vidasArcade + 1);
                    vidaRecuperada = true;
                }
                atualizarVidasUI();
            }

            // 5. Pontuação Final da Rodada com Multiplicador
            const pontuacaoBaseComCombo = Math.round(baseScore * comboMultiplier);
            const roundScore = pontuacaoBaseComCombo + speedBonus;

            const pontuacaoAnterior = pontuacaoTotal;
            pontuacaoTotal += roundScore;

            atualizarStreakUI();

            // Salva no histórico da partida
            historicoRodadas.push({
                local: desafio.nome,
                categoria: desafio.categoria,
                tipo: desafio.tipo,
                distKm: distKm,
                baseScore: baseScore,
                comboMultiplier: comboMultiplier,
                speedBonus: speedBonus,
                score: roundScore,
                tempoGasto: tempoGasto,
                vidasRestantes: vidasArcade,
                vidaPerdida: vidaPerdida,
                vidaRecuperada: vidaRecuperada
            });

            // Revela Alvo Real no Mapa
            const targetIcon = L.divIcon({
                className: 'custom-target-icon',
                html: '<div class="pin-target"><i class="ph-bold ph-map-pin"></i></div>',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });
            targetMarker = L.marker(targetLatLng, { icon: targetIcon }).addTo(map);

            // Círculo de Radar no Alvo
            radarCircle = L.circle(targetLatLng, {
                radius: Math.max(50000, Math.min(250000, distKm * 1000 * 0.5)),
                color: '#10b981',
                weight: 1.5,
                fillColor: '#10b981',
                fillOpacity: 0.12
            }).addTo(map);

            // Linha conectora dinâmica
            const lineColor = distKm <= 50 ? '#10b981' : (distKm <= 300 ? '#38bdf8' : (distKm <= 1200 ? '#f59e0b' : '#ef4444'));
            connectionLine = L.polyline([palpiteAtualLatLng, targetLatLng], {
                color: lineColor,
                weight: 3.5,
                dashArray: '8, 8',
                opacity: 0.9
            }).addTo(map);

            // Anima enquadramento entre os dois pontos
            const bounds = L.latLngBounds([palpiteAtualLatLng, targetLatLng]);
            map.flyToBounds(bounds, { padding: [60, 60], maxZoom: 8, duration: 1.2 });

            // Esconde barra de ação
            const actionBar = document.getElementById('action-bar');
            actionBar.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');

            // Feedback Visual e Dopamina de Impacto
            const mapWrapper = document.getElementById('map-wrapper');

            if (vidaPerdida) {
                if (mapWrapper) {
                    mapWrapper.classList.add('shake-damage');
                    setTimeout(() => mapWrapper.classList.remove('shake-damage'), 500);
                }
                tocarSomDanoVida();
            } else if (distKm <= 50) {
                if (mapWrapper) {
                    mapWrapper.classList.add('shake-impact');
                    setTimeout(() => mapWrapper.classList.remove('shake-impact'), 350);
                }
                tocarSomBullseye();
                dispararConfetes();
                if (vidaRecuperada) {
                    setTimeout(tocarSomVidaRecuperada, 250);
                }
            } else if (vidaRecuperada) {
                tocarSomVidaRecuperada();
            } else if (streakGanho && comboStreak >= 2) {
                tocarSomCombo();
            } else if (roundScore >= 3500) {
                tocarSomSucesso();
            } else {
                tocarBeep(380, 0.18);
            }

            // Exibe Card de Resultado com Count-Up Animado
            exibirResultadoRodada(distKm, roundScore, baseScore, comboMultiplier, speedBonus, desafio, pontuacaoAnterior, vidaPerdida, vidaRecuperada);
        }

        // EXIBIR CARD DE RESULTADO DA RODADA
        function exibirResultadoRodada(distKm, totalRound, baseScore, multiplier, speedBonus, desafio, pontuacaoAnterior, vidaPerdida, vidaRecuperada) {
            let label = "Boa tentativa";
            if (distKm <= 50) label = "🎯 NA MOSCA! CIRÚRGICO!";
            else if (distKm <= 200) label = "⚡ EXCELENTE! RADAR PRECISO!";
            else if (distKm <= 600) label = "👍 MUITO PERTO!";
            else if (distKm <= 1200) label = "🧭 NA MESMA REGIÃO";
            else label = "🗺️ FORA DE ALCANCE (>1.200 km)";

            if (configJogo.modo === 'arcade') {
                if (vidaPerdida) {
                    label = `💔 PERDEU 1 VIDA! (${vidasArcade} restantes)`;
                } else if (vidaRecuperada) {
                    label = `💚 +1 VIDA RECUPERADA! (${vidasArcade}/3)`;
                }
            }

            document.getElementById('result-grade-label').innerText = label;
            document.getElementById('result-distance').innerText = `${distKm.toLocaleString('pt-BR')} km de distância`;
            document.getElementById('result-fact').innerText = desafio.fato;

            document.getElementById('breakdown-base').innerText = `+${baseScore.toLocaleString('pt-BR')}`;
            document.getElementById('breakdown-combo').innerText = `x${multiplier.toFixed(1)}${multiplier > 1 ? ' 🔥' : ''}`;
            document.getElementById('breakdown-speed').innerText = speedBonus > 0 ? `+${speedBonus} pts` : `0 pts`;

            // Animação de contagem rápida de pontos da rodada
            animarContador('result-round-score', totalRound, '+', ' pts', 700);

            // Animação da barra superior do placar geral
            animarContadorDeAte('total-score', pontuacaoAnterior, pontuacaoTotal, '', ' pts', 800);

            const btnNext = document.getElementById('btn-next-round');

            if (configJogo.modo === 'arcade') {
                if (vidasArcade <= 0) {
                    btnNext.innerHTML = `<span>Ver Resultado Final (Sem Vidas)</span> <i class="ph-bold ph-skull"></i>`;
                } else {
                    btnNext.innerHTML = `<span>Sobreviver à Onda ${rodadaAtualIndex + 2}</span> <i class="ph-bold ph-arrow-right"></i>`;
                }
            } else {
                if (rodadaAtualIndex >= configJogo.rodadas - 1) {
                    btnNext.innerHTML = `<span>Ver Resultado Final</span> <i class="ph-bold ph-trophy"></i>`;
                } else {
                    btnNext.innerHTML = `<span>Próxima Rodada (${rodadaAtualIndex + 2}/${configJogo.rodadas})</span> <i class="ph-bold ph-arrow-right"></i>`;
                }
            }

            const resultCard = document.getElementById('round-result-card');
            resultCard.classList.remove('hidden');
        }

        // AVANÇAR PARA A PRÓXIMA RODADA
        function proximaRodada() {
            if (configJogo.modo === 'arcade') {
                if (vidasArcade <= 0) {
                    finalizarPartida();
                    return;
                }
                rodadaAtualIndex++;
                if (rodadaAtualIndex >= partidaDesafios.length) {
                    // Sorteia mais 5 desafios sem repetição para sobrevivência infinita
                    const extra = sortearDesafiosSemRepeticao(5, configJogo);
                    partidaDesafios = partidaDesafios.concat(extra.desafios);
                }
                carregarRodada(rodadaAtualIndex);
            } else {
                rodadaAtualIndex++;
                if (rodadaAtualIndex < configJogo.rodadas) {
                    carregarRodada(rodadaAtualIndex);
                } else {
                    finalizarPartida();
                }
            }
        }

        // FINALIZAR PARTIDA & ABRIR MODAL ARCADE
        function finalizarPartida() {
            const totalJogadas = Math.max(1, historicoRodadas.length);
            const avgDist = Math.round(historicoRodadas.reduce((acc, r) => acc + r.distKm, 0) / totalJogadas);

            let rankLetra = "C";
            let rankPill = "RANK C // VIAJANTE";
            let rankTitle = "Viajante com Bússola 🧭";
            let rankDesc = "Identificou o continente correto, mas ainda precisa calibrar a mira nos gargalos menores.";

            if (configJogo.modo === 'arcade') {
                // Ranks de sobrevivência Arcade
                if (totalJogadas >= 15) {
                    rankLetra = "SSS";
                    rankPill = `RANK SSS // LENDA DA SOBREVIVÊNCIA (${totalJogadas} ONDAS)`;
                    rankTitle = "Lenda da Sobrevivência Geoespacial 🛰️";
                    rankDesc = `Você resistiu a impressionantes ${totalJogadas} ondas seguidas de alvos e bandeiras sem esgotar suas 3 vidas!`;
                    dispararConfetesGrandes();
                    tocarSomGameOver('SSS');
                } else if (totalJogadas >= 10) {
                    rankLetra = "S";
                    rankPill = `RANK S // MESTRE DO RADAR (${totalJogadas} ONDAS)`;
                    rankTitle = "Mestre de Precisão Tática 🎖️";
                    rankDesc = `Excelente intuição e reflexos de localização sobrevivendo a ${totalJogadas} desafios do globo!`;
                    dispararConfetes();
                    tocarSomGameOver('S');
                } else if (totalJogadas >= 6) {
                    rankLetra = "A";
                    rankPill = `RANK A // PILOTO EXPERIENTE (${totalJogadas} ONDAS)`;
                    rankTitle = "Piloto de Reconhecimento ✈️";
                    rankDesc = `Boa agilidade e visão de mapa, aguentando ${totalJogadas} rodadas sob a pressão das 3 vidas.`;
                    tocarSomGameOver('A');
                } else if (totalJogadas >= 3) {
                    rankLetra = "B";
                    rankPill = `RANK B // CARTÓGRAFO (${totalJogadas} ONDAS)`;
                    rankTitle = "Cartógrafo Expedicionário 🗺️";
                    rankDesc = `Resistiu a ${totalJogadas} ondas. Na próxima, mantenha combos de precisão para recuperar vidas!`;
                    tocarSomGameOver('B');
                } else {
                    rankLetra = "D";
                    rankPill = "RANK D // ABATIDO PRECOCE";
                    rankTitle = "Abatido em Combate 🕳️";
                    rankDesc = "As 3 vidas foram esgotadas rapidamente por erros acima de 1.200 km. Tente novamente!";
                    tocarSomGameOver('D');
                }
            } else {
                // Ranks do Modo Clássico escalados por rodada
                const avgPtsPorRodada = pontuacaoTotal / totalJogadas;
                if (avgPtsPorRodada >= 4800) {
                    rankLetra = "SSS";
                    rankPill = "RANK SSS // SATÉLITE MILITAR";
                    rankTitle = "Satélite Militar de Espionagem 🛰️";
                    rankDesc = "Precisão absurda de nível militar! Você conhece cada gargalo marítimo, capital e bandeira da Terra.";
                    dispararConfetesGrandes();
                    tocarSomGameOver('SSS');
                } else if (avgPtsPorRodada >= 4000) {
                    rankLetra = "S";
                    rankPill = "RANK S // INTELIGÊNCIA MESTRE";
                    rankTitle = "General de Inteligência Geoespacial 🎖️";
                    rankDesc = "Excelente visão espacial e cartográfica. Seus palpites cruzaram com maestria os limites soberanos.";
                    dispararConfetes();
                    tocarSomGameOver('S');
                } else if (avgPtsPorRodada >= 3000) {
                    rankLetra = "A";
                    rankPill = "RANK A // RECONHECIMENTO TÁTICO";
                    rankTitle = "Piloto de Reconhecimento Tático ✈️";
                    rankDesc = "Excelente intuição e reflexos de localização. Você cruza oceanos sem hesitar!";
                    tocarSomGameOver('A');
                } else if (avgPtsPorRodada >= 2000) {
                    rankLetra = "B";
                    rankPill = "RANK B // CARTÓGRAFO";
                    rankTitle = "Cartógrafo Expedicionário 🧭";
                    rankDesc = "Boa noção geral dos continentes e mares, acertando a vizinhança dos alvos mais conhecidos.";
                    tocarSomGameOver('B');
                } else {
                    rankLetra = "D";
                    rankPill = "RANK D // PERDIDO";
                    rankTitle = "Perdido no Triângulo das Bermudas 🕳️";
                    rankDesc = "O radar falhou e você caiu no meio do oceano. Jogue outra rodada para calibrar a bússola!";
                    tocarSomGameOver('D');
                }
            }

            document.getElementById('final-rank-pill').innerText = rankPill;
            document.getElementById('final-rank-title').innerText = rankTitle;
            document.getElementById('final-rank-desc').innerText = rankDesc;
            document.getElementById('final-score-val').innerText = pontuacaoTotal.toLocaleString('pt-BR');
            document.getElementById('final-avg-dist').innerText = `${avgDist.toLocaleString('pt-BR')} km`;
            document.getElementById('final-best-streak').innerText = `${maxStreakPartida}x`;

            // Conquistas e Badges Desbloqueados na Partida
            const badgesContainer = document.getElementById('final-badges-container');
            const badges = [];

            if (configJogo.modo === 'arcade') {
                badges.push({ icone: "ph-bold ph-heart", texto: `Sobreviveu ${totalJogadas} Ondas`, cor: "text-red-400 border-red-500/30 bg-red-500/10" });
            }

            const temSniper = historicoRodadas.some(r => r.distKm <= 50);
            if (temSniper) badges.push({ icone: "ph-bold ph-crosshair", texto: "Sniper (< 50 km)", cor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" });

            if (maxStreakPartida >= 2) badges.push({ icone: "ph-bold ph-fire", texto: `Streak ${maxStreakPartida}x`, cor: "text-amber-400 border-amber-500/30 bg-amber-500/10" });

            const tempoMedio = historicoRodadas.reduce((acc, r) => acc + (r.tempoGasto || 0), 0) / totalJogadas;
            if (tempoMedio <= 6) badges.push({ icone: "ph-bold ph-lightning", texto: `Reflexo Rápido (${tempoMedio.toFixed(1)}s)`, cor: "text-sky-400 border-sky-500/30 bg-sky-500/10" });

            if (pontuacaoTotal >= 35000) badges.push({ icone: "ph-bold ph-trophy", texto: "Super Pontuação", cor: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10" });

            badgesContainer.innerHTML = badges.map(b => `
                <div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-mono ${b.cor}">
                    <i class="${b.icone}"></i>
                    <span>${b.texto}</span>
                </div>
            `).join('');

            // Preenche lista de rodadas com emojis de proximidade
            const roundsList = document.getElementById('final-rounds-list');
            roundsList.innerHTML = historicoRodadas.map((r, i) => {
                let badgeEmoji = r.distKm <= 50 ? '🎯' : (r.distKm <= 250 ? '🟢' : (r.distKm <= 1000 ? '🟡' : '🔴'));
                let extraTag = r.vidaPerdida ? '<span class="text-red-400 text-[10px]">💔-1</span>' : (r.vidaRecuperada ? '<span class="text-emerald-400 text-[10px]">💚+1</span>' : '');
                return `
                <div class="flex items-center justify-between p-2 rounded-xl bg-[#090a0f] border border-white/5 text-xs font-mono">
                    <div class="flex items-center gap-2">
                        <span class="text-slate-500 text-[10px]">#${i + 1}</span>
                        <span>${badgeEmoji}</span>
                        <strong class="text-slate-200 truncate max-w-[170px] sm:max-w-[220px]">${r.local}</strong>
                        ${extraTag}
                    </div>
                    <div class="text-right flex items-center gap-2">
                        <span class="text-amber-400 font-bold">${r.distKm.toLocaleString('pt-BR')} km</span>
                        <span class="text-emerald-400 font-bold">+${r.score}</span>
                    </div>
                </div>
                `;
            }).join('');

            // Telemetria do acervo
            const finalCacheEl = document.getElementById('final-cache-text');
            if (finalCacheEl) {
                let vistos = [];
                let ciclo = 1;
                try {
                    vistos = JSON.parse(localStorage.getItem(STORAGE_KEY_VISTOS) || '[]');
                    ciclo = localStorage.getItem(STORAGE_KEY_CICLO) || '1';
                } catch (e) {}
                const total = obterCatalogoDesafios(configJogo).length;
                finalCacheEl.innerHTML = `🌍 Você já explorou <strong>${vistos.length} de ${total}</strong> desafios da Terra sem repetição (Ciclo ${ciclo})!`;
            }

            document.getElementById('modal-game-over').classList.remove('hidden');
        }

        function reiniciarJogo() {
            document.getElementById('modal-game-over').classList.add('hidden');
            iniciarJogo();
        }

        // COMPARTILHAR DIRETAMENTE NO WHATSAPP COM FORMATO VIRAL
        function compartilharWhatsApp() {
            const totalJogadas = Math.max(1, historicoRodadas.length);
            const avgDist = Math.round(historicoRodadas.reduce((acc, r) => acc + r.distKm, 0) / totalJogadas);
            let rankLetra = "C";
            let emojiRank = '🗺️';

            if (pontuacaoTotal >= 40000) { rankLetra = "SSS"; emojiRank = '🛰️'; }
            else if (pontuacaoTotal >= 25000) { rankLetra = "S"; emojiRank = '🎖️'; }
            else if (pontuacaoTotal >= 15000) { rankLetra = "A"; emojiRank = '✈️'; }
            else if (pontuacaoTotal >= 8000) { rankLetra = "B"; emojiRank = '🧭'; }

            const nomeModo = configJogo.modo === 'arcade' ? `Modo Arcade de Vidas (${totalJogadas} Ondas)` : `Modo Clássico (${configJogo.rodadas} Rodadas)`;

            let texto = `🎯 Joguei "Onde Fica no Mapa?" no VitaleGeo Arcade!\n`;
            texto += `🕹️ Modo: ${nomeModo}\n`;
            texto += `🏆 Pontuação: ${pontuacaoTotal.toLocaleString('pt-BR')} pts (RANK ${rankLetra} ${emojiRank})\n`;
            texto += `📏 Distância Média: ${avgDist.toLocaleString('pt-BR')} km | 🔥 Melhor Streak: ${maxStreakPartida}x\n\n`;

            historicoRodadas.slice(0, 8).forEach((r, i) => {
                let icone = r.distKm <= 50 ? '🎯' : (r.distKm <= 250 ? '🟢' : (r.distKm <= 1000 ? '🟡' : '🔴'));
                texto += `${i + 1}. ${r.local} ${icone} ${r.distKm} km (+${r.score} pts)\n`;
            });

            if (historicoRodadas.length > 8) {
                texto += `... e mais ${historicoRodadas.length - 8} rodadas!\n`;
            }

            texto += `\nDuvido você chegar mais perto no mapa mudo! Jogue grátis:\n👉 https://www.vitalegeo.com.br/jogos/onde-fica/`;

            const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
            window.open(url, '_blank');
        }

        // COPIAR RESULTADO PARA A ÁREA DE TRANSFERÊNCIA (GRADE EMOJI ESTILO WORDLE)
        function copiarResultado() {
            const totalJogadas = Math.max(1, historicoRodadas.length);
            const avgDist = Math.round(historicoRodadas.reduce((acc, r) => acc + r.distKm, 0) / totalJogadas);
            let emojis = historicoRodadas.slice(0, 10).map(r => r.distKm <= 50 ? '🎯' : (r.distKm <= 250 ? '🟢' : (r.distKm <= 1000 ? '🟡' : '🔴'))).join(' ');

            const nomeModo = configJogo.modo === 'arcade' ? `Arcade (${totalJogadas} Ondas)` : `Clássico (${configJogo.rodadas}R)`;

            let texto = `🌍 VitaleGeo // Onde Fica no Mapa? [${nomeModo}]\n`;
            texto += `🏆 ${pontuacaoTotal.toLocaleString('pt-BR')} pts | ${emojis}\n`;
            texto += `📏 Média: ${avgDist} km | 🔥 Streak: ${maxStreakPartida}x\n`;
            texto += `Jogue também: https://www.vitalegeo.com.br/jogos/onde-fica/`;

            navigator.clipboard.writeText(texto).then(() => {
                const btn = document.getElementById('btn-copy-score');
                btn.innerHTML = `<i class="ph-bold ph-check text-emerald-400"></i> Copiado!`;
                tocarSomClick();
                setTimeout(() => {
                    btn.innerHTML = `<i class="ph-bold ph-copy text-base"></i> <span>Copiar Texto</span>`;
                }, 2000);
            });
        }

        // GERAR E BAIXAR SCORECARD VISUAL EM PNG VIA HTML5 CANVAS
        function baixarCardImagemPNG() {
            const btn = document.getElementById('btn-download-card');
            if (btn) btn.innerHTML = `<i class="ph-bold ph-spinner animate-spin"></i> Gerando...`;

            const canvas = document.createElement('canvas');
            canvas.width = 900;
            canvas.height = 900;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const totalJogadas = Math.max(1, historicoRodadas.length);
            const avgDist = Math.round(historicoRodadas.reduce((acc, r) => acc + r.distKm, 0) / totalJogadas);

            let rankLetra = "C";
            let rankSub = "CARTÓGRAFO EM TREINAMENTO";
            if (pontuacaoTotal >= 40000) { rankLetra = "SSS"; rankSub = "SATÉLITE MILITAR DE ESPIONAGEM"; }
            else if (pontuacaoTotal >= 25000) { rankLetra = "S"; rankSub = "GENERAL DE INTELIGÊNCIA GEOESPACIAL"; }
            else if (pontuacaoTotal >= 15000) { rankLetra = "A"; rankSub = "PILOTO DE RECONHECIMENTO TÁTICO"; }
            else if (pontuacaoTotal >= 8000) { rankLetra = "B"; rankSub = "CARTÓGRAFO EXPEDICIONÁRIO"; }

            // 1. Fundo Gradiente Escuro Sofisticado
            const bgGrad = ctx.createRadialGradient(450, 150, 40, 450, 450, 620);
            bgGrad.addColorStop(0, '#1c2233');
            bgGrad.addColorStop(0.6, '#0d1017');
            bgGrad.addColorStop(1, '#07080c');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, 900, 900);

            // Borda Externa Fina
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.lineWidth = 3;
            ctx.strokeRect(24, 24, 852, 852);

            // 2. Cabeçalho / Logo VitaleGeo
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('VITALEGEO ARCADE', 450, 85);

            ctx.fillStyle = '#94a3b8';
            ctx.font = '14px "Space Mono", monospace';
            const modoTexto = configJogo.modo === 'arcade' ? `MODO ARCADE SOBREVIVÊNCIA // ${totalJogadas} ONDAS` : `MODO CLÁSSICO // ${configJogo.rodadas} RODADAS`;
            ctx.fillText(`DESAFIO DE PRECISÃO: ONDE FICA NO MAPA? (${modoTexto})`, 450, 115);

            // 3. Card do Rank Central
            ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.fillRect(75, 145, 750, 175);
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
            ctx.lineWidth = 2;
            ctx.strokeRect(75, 145, 750, 175);

            // Letra do Rank
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 64px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(`RANK ${rankLetra}`, 450, 218);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(rankSub, 450, 252);

            // Pontuação e Média
            ctx.fillStyle = '#10b981';
            ctx.font = 'bold 28px "Space Mono", monospace';
            ctx.fillText(`${pontuacaoTotal.toLocaleString('pt-BR')} PTS`, 320, 298);

            ctx.fillStyle = '#94a3b8';
            ctx.font = 'bold 20px "Space Mono", monospace';
            ctx.fillText(`MÉDIA: ${avgDist} KM`, 580, 298);

            // 4. Rodadas em Linhas Visuais (até 6 amostras)
            ctx.textAlign = 'left';
            const startY = 350;
            const amostra = historicoRodadas.slice(0, 6);
            amostra.forEach((r, i) => {
                const y = startY + (i * 74);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
                ctx.fillRect(75, y, 750, 60);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
                ctx.strokeRect(75, y, 750, 60);

                ctx.fillStyle = '#64748b';
                ctx.font = 'bold 16px "Space Mono", monospace';
                ctx.fillText(`#${i + 1}`, 98, y + 36);

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 19px "Plus Jakarta Sans", sans-serif';
                let nome = r.local;
                if (nome.length > 25) nome = nome.substring(0, 23) + '...';
                ctx.fillText(nome, 150, y + 36);

                ctx.textAlign = 'right';
                ctx.fillStyle = r.distKm <= 50 ? '#10b981' : (r.distKm <= 250 ? '#f59e0b' : '#ef4444');
                ctx.font = 'bold 18px "Space Mono", monospace';
                ctx.fillText(`${r.distKm.toLocaleString('pt-BR')} km`, 670, y + 36);

                ctx.fillStyle = '#10b981';
                ctx.fillText(`+${r.score}`, 795, y + 36);
                ctx.textAlign = 'left';
            });

            // 5. Rodapé
            ctx.textAlign = 'center';
            ctx.fillStyle = '#64748b';
            ctx.font = '15px "Space Mono", monospace';
            ctx.fillText('JOGUE GRÁTIS EM WWW.VITALEGEO.COM.BR/JOGOS/ONDE-FICA/', 450, 840);

            try {
                const link = document.createElement('a');
                link.download = `vitalegeo-onde-fica-${pontuacaoTotal}pts.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                tocarSomSucesso();
            } catch(e) {}

            setTimeout(() => {
                if (btn) btn.innerHTML = `<i class="ph-bold ph-download-simple text-base sm:text-lg"></i> <span>Baixar Card (PNG)</span>`;
            }, 1500);
        }

        // ANIMAÇÕES DE CONTADORES DE PONTOS
        function animarContador(id, valorFinal, prefixo = '', sufixo = '', duracao = 700) {
            const el = document.getElementById(id);
            if (!el) return;
            const start = 0;
            const startTime = performance.now();

            function tick(now) {
                const progress = Math.min((now - startTime) / duracao, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(start + (valorFinal - start) * ease);
                el.innerText = `${prefixo}${current.toLocaleString('pt-BR')}${sufixo}`;
                if (Math.random() < 0.3) tocarSomCountUpTick();
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }

        function animarContadorDeAte(id, valorInicial, valorFinal, prefixo = '', sufixo = '', duracao = 800) {
            const el = document.getElementById(id);
            if (!el) return;
            const startTime = performance.now();

            function tick(now) {
                const progress = Math.min((now - startTime) / duracao, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(valorInicial + (valorFinal - valorInicial) * ease);
                el.innerText = `${prefixo}${current.toLocaleString('pt-BR')}${sufixo}`;
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }

        // FÓRMULA DE HAVERSINE
        function calcularHaversineKm(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        function atualizarPlacarInterface() {
            document.getElementById('total-score').innerText = `${pontuacaoTotal.toLocaleString('pt-BR')} pts`;
        }

        // ÁUDIO SINTETIZADO NATIVO VIA WEB AUDIO API (ZERO ARQUIVOS EXTERNOS)
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        let audioCtx = null;

        function obterAudioContext() {
            if (!audioCtx && AudioCtxClass) {
                audioCtx = new AudioCtxClass();
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        function tocarBeep(frequencia, duracao) {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(frequencia, ctx.currentTime);
                gain.gain.setValueAtTime(0.08, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duracao);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + duracao);
            } catch (e) {}
        }

        function tocarSomClick() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800, now);
                osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
                gain.gain.setValueAtTime(0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.04);
            } catch(e) {}
        }

        function tocarSomCountUpTick() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1100 + Math.random() * 200, now);
                gain.gain.setValueAtTime(0.02, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.015);
            } catch(e) {}
        }

        function tocarSomSucesso() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.07);
                    gain.gain.setValueAtTime(0.08, now + i * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.1);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.07);
                    osc.stop(now + (i + 1) * 0.1);
                });
            } catch (e) {}
        }

        function tocarSomBullseye() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.06);
                    gain.gain.setValueAtTime(0.12, now + i * 0.06);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.12);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.06);
                    osc.stop(now + (i + 1) * 0.12);
                });
            } catch(e) {}
        }

        function tocarSomCombo() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                [440, 554.37, 659.25, 880].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.05);
                    gain.gain.setValueAtTime(0.09, now + i * 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.1);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.05);
                    osc.stop(now + (i + 1) * 0.1);
                });
            } catch(e) {}
        }

        function tocarSomDanoVida() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(160, now);
                osc.frequency.exponentialRampToValueAtTime(70, now + 0.35);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now);
                osc.stop(now + 0.35);
            } catch(e) {}
        }

        function tocarSomVidaRecuperada() {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                [440, 554.37, 659.25, 880, 1108.73].forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.06);
                    gain.gain.setValueAtTime(0.12, now + i * 0.06);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + (i + 1) * 0.12);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.06);
                    osc.stop(now + (i + 1) * 0.12);
                });
            } catch(e) {}
        }

        function tocarSomGameOver(rank) {
            if (!somHabilitado) return;
            try {
                const ctx = obterAudioContext();
                if (!ctx) return;
                const now = ctx.currentTime;
                const acordes = (rank === 'SSS' || rank === 'S')
                    ? [523.25, 659.25, 783.99, 1046.50]
                    : [392.00, 493.88, 587.33];

                acordes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.1);
                    gain.gain.setValueAtTime(0.1, now + i * 0.1);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(now + i * 0.1);
                    osc.stop(now + i * 0.1 + 0.6);
                });
            } catch(e) {}
        }

        function alternarSom() {
            somHabilitado = !somHabilitado;
            const icon = document.getElementById('sound-icon');
            if (somHabilitado) {
                icon.className = 'ph-bold ph-speaker-high';
                tocarBeep(520, 0.1);
            } else {
                icon.className = 'ph-bold ph-speaker-slash text-slate-500';
            }
        }

        function alternarTelaCheia() {
            const container = document.getElementById("game-main-container") || document.documentElement;
            if (!document.fullscreenElement) {
                if (container.requestFullscreen) container.requestFullscreen();
            } else {
                if (document.exitFullscreen) document.exitFullscreen();
            }
        }

        function dispararConfetes() {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 70,
                    spread: 60,
                    origin: { y: 0.65 }
                });
            }
        }

        function dispararConfetesGrandes() {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 150, spread: 90, origin: { y: 0.55 } });
                setTimeout(() => confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }), 400);
            }
        }

        // INICIA AO CARREGAR A PÁGINA
        window.addEventListener('DOMContentLoaded', iniciarJogo);
'''

def main():
    print("Atualizando engine em:", INDEX_PATH)
    with open(INDEX_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Localizar bloco <script> final
    script_start = content.rfind("<script>")
    script_end = content.rfind("</script>")
    if script_start == -1 or script_end == -1:
        raise ValueError("Bloco <script> final não encontrado em " + INDEX_PATH)

    new_content = content[:script_start + len("<script>\n")] + NEW_JS_CODE + "\n    " + content[script_end:]

    with open(INDEX_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Sucesso ao atualizar", INDEX_PATH)

    # Espelhar para public/jogos/onde-fica/index.html
    shutil.copy2(INDEX_PATH, PUBLIC_INDEX_PATH)
    print("Sucesso ao espelhar para", PUBLIC_INDEX_PATH)

if __name__ == "__main__":
    main()
