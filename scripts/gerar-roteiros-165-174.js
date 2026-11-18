import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';
const indicePath = path.join(roteirosDir, 'Índice.md');

const videos = [
  // 165: HISTORIA DA ITALIA
  {
    num: 165,
    titulo: 'Como o Risorgimento, as Guerras de Independência e os Tratados Alpinos Forjaram as Fronteiras da Itália Moderna?',
    roteiro: `Como o Risorgimento, as Guerras de Independência e os Tratados Alpinos forjaram as fronteiras da Itália moderna? Em 1847, o chanceler austríaco Metternich zombava dizendo que a Itália era apenas uma mera expressão geográfica: uma península retalhada em oito estados rivais sob o domínio dos Habsburgos, dos Bourbons e dos Papas. Em apenas doze anos, a diplomacia de Cavour e a intervenção francesa em Solferino expulsaram a Áustria da Lombardia ao custo da cessão de Nice e Saboia. No sul, a lendária Expedição dos Mil de Giuseppe Garibaldi derrubou o Reino das Duas Sicílias em uma marcha fulminante de camisas vermelhas. Em 1870, com a queda de Napoleão Terceiro na Guerra Franco-Prussiana, as tropas italianas abriram uma brecha na Porta Pia e transformaram Roma na capital definitiva. Quase meio século depois, ao custo de centenas de milhares de vidas nas Dolomitas e no Isonzo, a vitória em Vittorio Veneto fixou a fronteira orográfica alpina no Passo do Brennero e anexou Trieste. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Italian Peninsula and Alpine arc.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O RISORGIMENTO ITALIANO"
Line 2 (intense crimson red #C8102E): "COMO AS FRONTEIRAS DA ITÁLIA FORAM FORJADAS?"
Line 3 (pure white #F5F2EB): "DE METTERNICH AOS ALPES"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward northern Italy and the Po Valley.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Fragmentação de 1815: O Mosaico de Oito Estados', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the divided Italian peninsula after the Congress of Vienna in 1815.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Color-coded partitioned borders: Kingdom of the Two Sicilies, Papal States, Grand Duchy of Tuscany, Austrian Lombardy-Venetia, Kingdom of Sardinia-Piedmont.
Text on screen: "ITÁLIA (1815) // 'MERA EXPRESSÃO GEOGRÁFICA'" in uppercase white Orbitron Bold.
Badge: "OITO ESTADOS RIVAIS RETALHADOS POR POTÊNCIAS" in intense crimson red (#C8102E).
Camera: slow linear descent across the Apennine spine.
NO voice, NO speech, NO music. ONLY historical parchment rustle and antique map compass chime SFX.` },
      { t: 'A Batalha de Solferino e a Libertação da Lombardia (1859)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military campaign map showing French and Piedmontese army movements clashing with Austrian imperial forces at Solferino in June 1859.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Troop vectors in bright crimson red (#C8102E) clashing over the Mincio River.
Text on screen: "SOLFERINO (1859) // 40.000 BAIXAS" in uppercase white Montserrat Bold.
Badge: "A LOMBARDIA ANEXADA E O PACTO DE TURIM COM PARIS" in gold (#F59E0B).
Camera: technical orthographic push-in toward Milan and Lake Garda.
NO voice, NO speech, NO music. ONLY distant cannon rumble and cavalry drum SFX.` },
      { t: 'A Expedição dos Mil de Garibaldi (1860)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Nautical tracking route tracing the voyage of Giuseppe Garibaldi and the 1,089 Redshirts from Genoa to Marsala in Sicily.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing sea track in gold (#F59E0B) landing in Sicily and sweeping across Calabria to Naples.
Text on screen: "EXPEDIÇÃO DOS MIL // GARIBALDI EM MARSALA" in uppercase white Orbitron Bold.
Badge: "QUEDA DO REINO DAS DUAS SICÍLIAS E O ENCONTRO DE TEANO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite sweep from Sicily across the Strait of Messina.
NO voice, NO speech, NO music. ONLY coastal surf and maritime bell chime SFX.` },
      { t: 'A Proclamação do Reino e a Anexação de Veneza (1866)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of northern Italy highlighting the annexation of the Kingdom of Italy in 1861 and the incorporation of Venetia in 1866 following the Austro-Prussian War.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Venetian lagoon and Friuli illuminated in bright sage green (#A8C3A6).
Text on screen: "TRATADO DE VIENA (1866) // ANEXAÇÃO DE VENEZA" in uppercase white Montserrat Bold.
Badge: "O REINO DA ITÁLIA AVANÇA PARA O ADRIÁTICO" in white (#F5F2EB).
Camera: smooth linear zoom into the Venetian plain.
NO voice, NO speech, NO music. ONLY telemetry lock and orchestral cello hum SFX.` },
      { t: 'A Brecha da Porta Pia e a Tomada de Roma (1870)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Urban topographic map of Rome showing the Aurelian Walls and the artillery breach at Porta Pia on September 20, 1870.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Breach vector glowing in intense crimson red (#C8102E).
Text on screen: "PORTA PIA (20 SET 1870) // FIM DO PODER PAPAL" in uppercase white Orbitron Bold.
Badge: "ROMA PROCLAMADA CAPITAL DEFINITIVA DA ITÁLIA" in gold (#F59E0B).
Camera: low-altitude technical flyover above the Tiber and the Colosseum.
NO voice, NO speech, NO music. ONLY masonry crumble and trumpet fanfare chime SFX.` },
      { t: 'A Guerra Branca nos Glaciares Alpinos (1915-1918)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude topographic relief of the Dolomites and the Isonzo river valley during the First World War.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trench frontlines in glowing crimson (#C8102E) across snowcapped mountain peaks at 3,000 meters.
Text on screen: "FRENTE ALPINA (1915-1918) // GUERRA BRANCA" in uppercase white Montserrat Bold.
Badge: "BATALHA DE VITTORIO VENETO E O COLAPSO DOS HABSBURGOS" in sage green (#A8C3A6).
Camera: slow cinematic tracking shot over jagged alpine ridges.
NO voice, NO speech, NO music. ONLY howling glacial wind and artillery echoing SFX.` },
      { t: 'O Tratado de Saint-Germain e a Fronteira do Brennero (1919)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Cartographic border demarcation showing the international boundary locked onto the watershed crest at Brenner Pass.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Alpine border vector in Bege Cartográfico (#F5F2EB) separating Italy and Austria.
Text on screen: "PASSO DO BRENNERO (1919) // FRONTEIRA OROGRÁFICA" in uppercase white Orbitron Bold.
Badge: "TRENTINO, ALTO ÁDIGE E TRIESTE INCORPORADOS" in intense crimson red (#C8102E).
Camera: orthographic push-in to the mountain pass.
NO voice, NO speech, NO music. ONLY border post metal strike and wind gust SFX.` },
      { t: 'O Tratado de Paris de 1947 e o Retorno de Trieste (1954)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of the northern Adriatic depicting the post-WWII border settlement between Italy and Yugoslavia, including the Free Territory of Trieste.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Zone A (Trieste) glowing in gold (#F59E0B) returning to full Italian sovereignty under the 1954 London Memorandum.
Text on screen: "MEMORANDO DE LONDRES (1954) // TRIESTE ITALIANA" in uppercase white Montserrat Bold.
Badge: "A CONSOLIDAÇÃO GEOMÉTRICA FINAL DE 302.000 KM²" in sage green (#A8C3A6).
Camera: slow linear descent into the Gulf of Trieste.
NO voice, NO speech, NO music. ONLY harbor horn and naval radar ping SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the complete boot shape of the Italian Peninsula framed by the Alps, the Tyrrhenian and Adriatic seas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Unified borders glowing in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift towards the deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 166: GEOPOLITICA DO VIETNA
  {
    num: 166,
    titulo: 'Por Que a Diplomacia do Bambu e a Baía de Cam Ranh Fazem do Vietnã o Ponto de Equilíbrio Entre Washington e Pequim?',
    roteiro: `Por que a diplomacia do bambu e a Baía de Cam Ranh fazem do Vietnã o ponto de equilíbrio entre Washington e Pequim? Com mais de três mil e duzentos quilômetros de litoral curvados sobre a rota marítima mais disputada do planeta, o Vietnã vigia a passagem de cinco trilhões de dólares anuais no Mar da China Meridional. Sua arma geográfica secreta é a Baía de Cam Ranh: um porto natural de águas profundas com trinta metros de calado capaz de abrigar esquadras inteiras de porta-aviões e submarinos nucleares. Enquanto disputa recifes e ilhotas nas Spratly e Paracel contra o avanço da Linha de Nove Traços de Pequim, Hanói aplica com maestria a Diplomacia do Bambu: raízes sólidas na independência e galhos flexíveis que vergam sem quebrar. Sem permitir bases estrangeiras ou integrar alianças militares formais sob a Doutrina dos Quatro Nãos, o país atrai fábricas de chips e caças americanos sem romper os laços vitais com o vizinho chinês. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the S-shaped coastline of Vietnam and the South China Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A MURALHA DO SUDESTE ASIÁTICO"
Line 2 (intense crimson red #C8102E): "POR QUE O VIETNÃ É O EQUILÍBRIO DO PACÍFICO?"
Line 3 (pure white #F5F2EB): "A DIPLOMACIA DO BAMBU E CAM RANH"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the central coast of Vietnam.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Geografia do Dragão: 3.260 km de Litoral Estratégico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view outlining Vietnam's S-curve national territory between the Red River delta and the Mekong delta.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders highlighted in Bege Cartográfico (#F5F2EB) with flat official flag texture.
Text on screen: "VIETNÃ // 3.260 KM DE COSTA" in uppercase white Orbitron Bold.
Badge: "VIGIA DA ROTA NAVAL DE US$ 5 TRILHÕES / ANO" in intense crimson red (#C8102E).
Camera: slow linear descent along the Annamite mountain range.
NO voice, NO speech, NO music. ONLY coastal wind and telemetry chime SFX.` },
      { t: 'A Baía de Cam Ranh: O Baluarte de Águas Profundas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the protected deepwater harbor of Cam Ranh Bay with its granite peninsulas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Naval anchorage basin highlighted in glowing amber (#F59E0B): "CALADO NATURAL DE ATÉ 30 METROS".
Text on screen: "BAÍA DE CAM RANH // FORTALEZA NAVAL" in uppercase white Montserrat Bold.
Badge: "BASE HISTÓRICA DE RÚSSIA, EUA E DA FROTA KILO ATUAL" in gold (#F59E0B).
Camera: technical orthographic push-in toward the naval docks and submarine pens.
NO voice, NO speech, NO music. ONLY submarine sonar ping and water turbulence SFX.` },
      { t: 'O Choque Marítimo: As Ilhas Paracel e Spratly', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map overlay displaying the South China Sea (East Sea) and Chinese nine-dash line overlapping Vietnam's 200nm Exclusive Economic Zone.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Maritime dispute vectors in flashing crimson red (#C8102E) across the Spratly and Paracel atolls.
Text on screen: "ZEE DE 1.000.000 KM² // CHOQUE COM A LINHA DE 9 TRAÇOS" in uppercase white Orbitron Bold.
Badge: "30 POSTOS INSULARES DEFENDIDOS PELAS FORÇAS DE HANÓI" in intense crimson red (#C8102E).
Camera: dynamic linear sweep across contested island outposts.
NO voice, NO speech, NO music. ONLY radar alert beep and maritime radio static SFX.` },
      { t: 'A Diplomacia do Bambu: O Equilíbrio de Poder', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic alignment diagram connecting Hanoi to Washington, Beijing, Moscow, and New Delhi.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vector lines in soft gold (#F59E0B) and sage green (#A8C3A6) balancing between superpowers.
Text on screen: "DIPLOMACIA DO BAMBU // RAÍZES SÓLIDAS, GALHOS FLEXÍVEIS" in uppercase white Montserrat Bold.
Badge: "PARCERIA ESTRATÉGICA ABRANGENTE COM EUA E CHINA" in white (#F5F2EB).
Camera: smooth orbital rotation around Indochina.
NO voice, NO speech, NO music. ONLY soft wind chime and digital data transmission SFX.` },
      { t: 'A Doutrina dos Quatro Nãos na Defesa Nacional', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of Vietnam's four-pillar defense doctrine: no alliances, no bases, no siding against others, no force.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Four shield icons in sage green (#A8C3A6) surrounding Vietnam's territorial perimeter.
Text on screen: "POLÍTICA DOS QUATRO NÃOS // LIVRO BRANCO DE DEFESA" in uppercase white Orbitron Bold.
Badge: "BLINDAGEM JURÍDICA CONTRA O ARRASTAMENTO EM GUERRAS" in sage green (#A8C3A6).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY mechanical lock and telemetry tone SFX.` },
      { t: 'A Nova Fábrica de Tecnologia do Mundo: Friendshoring', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Industrial satellite view of high-tech manufacturing parks around Hanoi, Bac Ninh, and Ho Chi Minh City.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-tech corridor lines in electric cyan and gold connecting global semiconductor supply chains.
Text on screen: "FRIENDSHORING // SAMSUNG, APPLE E CHIPS" in uppercase white Montserrat Bold.
Badge: "MAIOR PARCEIRO COMERCIAL OCIDENTAL NO SUDESTE ASIÁTICO" in gold (#F59E0B).
Camera: dynamic linear flyover above industrial rail and port networks.
NO voice, NO speech, NO music. ONLY electronic microchip hum and logistics whoosh SFX.` },
      { t: 'O Arsenal Costeiro: Mísseis BrahMos e Submarinos Kilo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical defense overlay displaying coastal missile defense batteries and naval patrol zones along the Vietnamese coastline.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Targeting radii in semi-transparent red (#C8102E) covering maritime approaches.
Text on screen: "DEFESA DE NEGAÇÃO DE ÁREA (A2/AD) // 6 SUBMARINOS KILO" in uppercase white Orbitron Bold.
Badge: "CAPACIDADE DISSUASÓRIA REAL EM ÁGUAS AZUIS" in intense crimson red (#C8102E).
Camera: linear satellite track along the Gulf of Tonkin.
NO voice, NO speech, NO music. ONLY coastal missile radar lock and underwater pulse SFX.` },
      { t: 'O Tabuleiro do Indo-Pacífico e o Chokepoint de Malaca', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic wide view showing the maritime route from the Strait of Malacca through Vietnam's waters to East Asian mega-ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Shipping corridors glowing in bright Bege Cartográfico (#F5F2EB).
Text on screen: "ROTA MALACA-TÓQUIO // CHOKEPOINT VITAL DA ÁSIA" in uppercase white Montserrat Bold.
Badge: "O VIETNÃ COMO GUARDIÃO OCIDENTAL DO CORREDOR MARÍTIMO" in white (#F5F2EB).
Camera: diagonal pan from Singapore to the Paracel Islands.
NO voice, NO speech, NO music. ONLY container ship engine hum and sea spray SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite retreat showing the entire East Asian mainland and Pacific rim curving into the black void of space.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vietnam outlined in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift towards orbital nightfall.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 167: GEOECONOMIA DA AFRICA DO SUL
  {
    num: 167,
    titulo: 'Como as Maiores Reservas de Platina e Cromo do Planeta Fazem da África do Sul o Monopólio Mineral da Indústria Global?',
    roteiro: `Como as maiores reservas de platina e cromo do planeta fazem da África do Sul o monopólio mineral da indústria global? Sob o solo do planalto norte sul-africano repousa o Complexo Ígneo de Bushveld, uma intrusão magmática de dois bilhões de anos cobrindo sessenta e seis mil quilômetros quadrados. Esse megadepósito geológico concentra mais de setenta e cinco por cento de toda a platina da Terra e mais de oitenta por cento das reservas mundiais de cromo. Sem as minas profundas de Rustenburg e Limpopo, as montadoras globais não fabricam catalisadores de escapamento, a indústria aeroespacial paralisa a produção de turbinas e o hidrogênio verde perde suas membranas de eletrólise. No Deserto do Kalahari, jazidas imensas de manganês fornecem o componente essencial para baterias de veículos elétricos e para o aço estrutural. A África do Sul é o ponto de estrangulamento geoeconômico sem o qual o mundo moderno simplesmente não funciona. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Highveld plateau of South Africa and the Bushveld Complex.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O COFRE MINERAL DA TERRA"
Line 2 (intense crimson red #C8102E): "O MONOPÓLIO DA PLATINA E CROMO"
Line 3 (pure white #F5F2EB): "A GEOECONOMIA DA ÁFRICA DO SUL"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Bushveld geological basin.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'O Complexo Ígneo de Bushveld: 66.000 km² de Magma Antigo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geological satellite view outlining the colossal lopolith of the Bushveld Igneous Complex in northern South Africa.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Geological boundary outlined in glowing amber (#F59E0B): "66.000 KM² // 2 BILHÕES DE ANOS".
Text on screen: "COMPLEXO DE BUSHVELD // O MAIOR LOPOLITO DA TERRA" in uppercase white Orbitron Bold.
Badge: "80% DO CROMO E 75% DA PLATINA DO PLANETA" in intense crimson red (#C8102E).
Camera: slow linear descent into the Rustenburg mining belt.
NO voice, NO speech, NO music. ONLY seismic earth rumble and rock fracture SFX.` },
      { t: 'O Recife de Merensky e a Camada UG2: A Veia de Platina', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D geological cross-section diagram showing the Merensky Reef and UG2 chromitite layer extending underground.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mineral layers highlighted in silver-white (#F5F2EB) and deep chrome green.
Text on screen: "RECIFE DE MERENSKY // VEIA DE 1 METRO" in uppercase white Montserrat Bold.
Badge: "DENSIDADE MÁXIMA DE METAIS DO GRUPO DA PLATINA (PGMs)" in gold (#F59E0B).
Camera: technical orthographic push-in toward subterranean mine shafts.
NO voice, NO speech, NO music. ONLY underground drill clatter and hydraulic pump SFX.` },
      { t: 'O Monopólio da Platina: O Catalisador do Mundo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Industrial cutaway visualization of an automotive catalytic converter and hydrogen PEM electrolyzer membrane powered by platinum.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chemical reaction glow in electric blue and crimson (#C8102E).
Text on screen: "75% DA PLATINA MUNDIAL // CATALISADORES E HIDROGÊNIO" in uppercase white Orbitron Bold.
Badge: "SEM A ÁFRICA DO SUL, A INDÚSTRIA AUTOMOTIVA PARALISA" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in.
NO voice, NO speech, NO music. ONLY exhaust hiss and metal chime SFX.` },
      { t: 'O Cromo Indispensável: A Alma do Aço Inoxidável', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Industrial map tracking chrome ore supply chains from South African mines to global stainless steel smelters in China and Europe.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Export corridors glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "80% DAS RESERVAS DE CROMO // AÇO INOXIDÁVEL" in uppercase white Montserrat Bold.
Badge: "10,5% DE CROMO OBRIGATÓRIO PARA IMPEDIR A FERRUGEM" in white (#F5F2EB).
Camera: dynamic linear flyover toward Richards Bay harbor.
NO voice, NO speech, NO music. ONLY blast furnace roar and molten metal hiss SFX.` },
      { t: 'O Campo de Manganês do Kalahari: A Bateria Invisível', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Kalahari Manganese Field in Northern Cape province.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Open-pit mining terraces highlighted in sage green (#A8C3A6).
Text on screen: "MANGANÊS DO KALAHARI // 70% DAS RESERVAS DE ALTO TEOR" in uppercase white Orbitron Bold.
Badge: "INSUMO CRÍTICO PARA BATERIAS NCM DE VEÍCULOS ELÉTRICOS" in sage green (#A8C3A6).
Camera: technical orthographic push-in over red desert sands.
NO voice, NO speech, NO music. ONLY heavy excavator rumble and haul truck engine SFX.` },
      { t: 'Os Gargalos Estruturais: Eskom e a Crise Ferroviária', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Infrastructure map highlighting South Africa's rail corridors and power transmission grid under stress.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Warning pulse points in bright crimson red (#C8102E) along the Transnet coal and ore line to Richards Bay.
Text on screen: "APAGÕES E GARGALOS LOGÍSTICOS // PONTO ÚNICO DE FALHA" in uppercase white Montserrat Bold.
Badge: "MINERADORAS INSTALAM PARQUES SOLARES E EÓLICOS PRÓPRIOS" in gold (#F59E0B).
Camera: linear satellite track along the railway spine.
NO voice, NO speech, NO music. ONLY electrical hum and distant train whistle SFX.` },
      { t: 'A Corrida dos BRICS e a Lista de Minerais Críticos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global trade map displaying mineral export flows from Durban and Richards Bay toward China, the European Union, and the United States.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Trade vectors radiating across the Indian and Atlantic oceans.
Text on screen: "MINERAIS CRÍTICOS // DISPUTA ENTRE EUA, UE E CHINA" in uppercase white Orbitron Bold.
Badge: "O PENTÁGONO CLASSIFICA BUSHVELD COMO SEGURANÇA NACIONAL" in intense crimson red (#C8102E).
Camera: smooth orbital sweep across the African continent.
NO voice, NO speech, NO music. ONLY international telemetry beep and satellite chime SFX.` },
      { t: 'O Vale do Bushveld Visto do Espaço', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Spectacular high-altitude satellite imagery showing the circular contours of the Bushveld Igneous Complex nestled against the Highveld mountains.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Golden mineral deposit vectors pulsing in synchrony across Pretoria, Polokwane, and Rustenburg.
Text on screen: "UM TESOURO GEOLÓGICO INIGUALÁVEL NO PLANETA" in uppercase white Montserrat Bold.
Badge: "A INDÚSTRIA DO FUTURO ANCORADA NA ÁFRICA DO SUL" in gold (#F59E0B).
Camera: slow cinematic ascent towards orbital altitude.
NO voice, NO speech, NO music. ONLY deep atmospheric resonance and radio chime SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global orbital retreat displaying the southern tip of Africa framed by the meeting of the Atlantic and Indian oceans.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
South Africa outlined in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into cosmic deep space.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 168: ESTREITO DE TORRES
  {
    num: 168,
    titulo: 'Por Que as Ilhas da Austrália no Estreito de Torres Ficam a Menos de Quatro Quilômetros da Costa da Papua-Nova Guiné?',
    roteiro: `Por que as ilhas da Austrália no Estreito de Torres ficam a menos de quatro quilômetros da costa da Papua-Nova Guiné? Em 1879, a colônia britânica de Queensland desenhou a fronteira marítima rente aos manguezais da ilha da Nova Guiné para dominar o lucrativo comércio de pérolas, anexando centenas de ilhas tropicais. Quando a Papua declarou independência em 1975, ilhéus australianos de Saibai e Boigu recusaram-se terminantemente a mudar de país. Para evitar um confronto, o Tratado de 1978 criou uma engenharia cartográfica genial: a soberania do leito marinho com jazidas de gás e minerais ficou com a Papua, mas as ilhas habitadas permaneceram como território soberano australiano. Uma Zona Protegida autoriza nativos de treze aldeias papuas a cruzar a fronteira em botes sem passaporte para caça e trocas tradicionais. Uma das fronteiras mais pacíficas e intrigantes do planeta hoje vigiada pela Marinha australiana. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Torres Strait between northern Australia and Papua New Guinea.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FRONTEIRA DOS RECIFES"
Line 2 (intense crimson red #C8102E): "POR QUE AS ILHAS DA AUSTRÁLIA"
Line 3 (pure white #F5F2EB): "FICAM A 4 KM DA PAPUA-NOVA GUINÉ?"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Saibai Island.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Ilha de Saibai: Austrália a Escassos Minutos de Bote', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the low-lying mangrove atoll of Saibai Island with the Papua coastline in clear view.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance caliper line in JetBrains Mono glowing in gold (#F59E0B): "DISTÂNCIA EXATA: 3,8 KM".
Text on screen: "ILHA DE SAIBAI // TERRITÓRIO DA AUSTRÁLIA" in uppercase white Orbitron Bold.
Badge: "CIDADÃOS AUSTRALIANOS COLADOS À PAPUA-NOVA GUINÉ" in intense crimson red (#C8102E).
Camera: technical orthographic push-in across the narrow marine channel.
NO voice, NO speech, NO music. ONLY shallow water ripple and telemetry chime SFX.` },
      { t: 'A Anexação Colonial de Queensland em 1879', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical colonial map overlay showing the 1879 Queensland Coast Islands Act boundary running along the mudflats of New Guinea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Colonial demarcation line glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "LEI DE 1879 // O IMPÉRIO BRITÂNICO E AS PÉROLAS" in uppercase white Montserrat Bold.
Badge: "274 ILHAS ANEXADAS ATÉ A LINHA DA PRAIA PAPUA" in gold (#F59E0B).
Camera: smooth linear zoom across the coral reefs of Torres Strait.
NO voice, NO speech, NO music. ONLY parchment sound and clockwork mechanism SFX.` },
      { t: 'A Independência da Papua em 1975 e a Revolta dos Ilhéus', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of the diplomatic dispute in 1975 when Port Moresby demanded the northern islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Protest route arrows in gold from Thursday Island to Canberra.
Text on screen: "CRISE DE 1975 // OS ILHÉUS RECUSAM A CESSÃO" in uppercase white Orbitron Bold.
Badge: "'NÓS SOMOS AUSTRALIANOS E NÃO MUDAREMOS DE PAÍS'" in white (#F5F2EB).
Camera: dynamic linear satellite sweep from the strait to Canberra.
NO voice, NO speech, NO music. ONLY crowd murmur and gavel strike SFX.` },
      { t: 'O Tratado de 1978: A Separação do Leito e da Água', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed nautical chart overlay illustrating the two separate lines of sovereignty: Seabed Line vs. Fisheries Line.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Seabed Line in blue, Fisheries Line in sage green (#A8C3A6), islands in red.
Text on screen: "TRATADO DO ESTREITO DE TORRES (1978)" in uppercase white Montserrat Bold.
Badge: "PAPUA CONTROLA O SUBSOLO; AUSTRÁLIA RETÉM AS ILHAS" in gold (#F59E0B).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY digital line drawing and maritime compass chime SFX.` },
      { t: 'A Zona Protegida e o Trânsito Livre Tradicional', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map overlay displaying the Torres Strait Protected Zone where indigenous border crossing is exempt from passports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Cross-border dinghy tracks connecting Daru to Saibai in glowing sage green (#A8C3A6).
Text on screen: "ZONA PROTEGIDA // LIVRE CIRCULAÇÃO TRADICIONAL" in uppercase white Orbitron Bold.
Badge: "TRÂNSITO TRIBAL SEM VISTO PARA COMÉRCIO E CASAMENTOS" in sage green (#A8C3A6).
Camera: low-altitude tracking shot following wooden canoes on blue waters.
NO voice, NO speech, NO music. ONLY outboard motor hum and water splash SFX.` },
      { t: 'A Sentença Mabo de 1992 na Ilha de Mer', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the volcanic island of Mer (Murray Island) in the eastern Torres Strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island perimeter highlighted in radiant amber (#F59E0B).
Text on screen: "SENTENÇA MABO (1992) // FIM DA TERRA NULLIUS" in uppercase white Montserrat Bold.
Badge: "RECONHECIMENTO HISTÓRICO DO TÍTULO DE TERRA NATIVA" in white (#F5F2EB).
Camera: slow cinematic descent over the fringing coral reef.
NO voice, NO speech, NO music. ONLY traditional drum resonance and ocean breeze SFX.` },
      { t: 'A Ameaça Climática: Marés Gigantes em Saibai e Boigu', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite imagery capturing the low elevation of Saibai Island barely 1.5 meters above sea level during King Tides.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Tidal water flood overlay in semi-transparent turquoise across coastal village roads.
Text on screen: "MARÉS EXTREMAS // AMEAÇA EXISTENCIAL DO MAR" in uppercase white Orbitron Bold.
Badge: "ONU CONDENA AUSTRÁLIA POR INAÇÃO CLIMÁTICA EM 2022" in intense crimson red (#C8102E).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY tidal surge and wind whistling SFX.` },
      { t: 'O Xadrez Geopolítico e o Porto de Daru', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Strategic map showing the proximity of the Papua port island of Daru and proposed Chinese mega-fisheries to Australia's northern border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Surveillance radar vectors in red (#C8102E) radiating from Australian naval patrol bases.
Text on screen: "PROJETO CHINÊS EM DARU // ALERTA EM CANBERRA" in uppercase white Montserrat Bold.
Badge: "A LINHA DE FRENTE DA SEGURANÇA NACIONAL AUSTRALIANA" in gold (#F59E0B).
Camera: linear satellite sweep across the strait.
NO voice, NO speech, NO music. ONLY military radar beep and sonar ping SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude satellite pull-back showing Cape York, the Great Barrier Reef, and the whole island of New Guinea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Strait boundary outlined in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift towards orbital infinity.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 169: MONTE RORAIMA
  {
    num: 169,
    titulo: 'Como Três Países Sul-Americanos Se Encontram no Topo de Uma Fortaleza de Pedra Inacessível a Quase Três Mil Metros?',
    roteiro: `Como três países sul-americanos se encontram no topo de uma fortaleza de pedra inacessível a quase três mil metros? No coração do Escudo das Guianas, as falésias verticais do Monte Roraima despencam entre quatrocentos e oitocentos metros de queda contínua, isolando um platô de rochas precambrianas de dois bilhões de anos. No topo desse mundo perdido esculpido por névoa e cristais, uma comissão mista tripartite ergueu em 1931 o marco piramidal BV-0, onde convergem os limites soberanos de Brasil, Venezuela e Guiana. A partilha do platô é assimétrica: oitenta e cinco por cento da área superior e a única trilha de subida pertencem à Venezuela, dez por cento estão na Guiana e apenas cinco por cento no Brasil. De suas fendas rochosas brotam nascentes que vertem simultaneamente para as três maiores bacias da América do Sul: Amazonas, Orinoco e Essequibo. Um marco de pedra e neblina onde a geopolítica e a geologia se tocam no topo do continente. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Pacaraima Mountains where Brazil, Venezuela, and Guyana meet.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O MUNDO PERDIDO DOS TEPUIS"
Line 2 (intense crimson red #C8102E): "COMO TRÊS PAÍSES SE ENCONTRAM"
Line 3 (pure white #F5F2EB): "NO TOPO DO MONTE RORAIMA?"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Mount Roraima's vertical cliffs.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Fortaleza Monolítica: Falésias de 800 Metros de Queda', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D terrain model of Mount Roraima rising abruptly above the Gran Sabana and Amazonian rainforest.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Summit plateau highlighted in glowing amber (#F59E0B): "ALTITUDE: 2.810 M // ÁREA: 31 KM²".
Text on screen: "MONTE RORAIMA // ROCHAS DE 2 BILHÕES DE ANOS" in uppercase white Orbitron Bold.
Badge: "PAREDÕES VERTICAIS INACESSÍVEIS POR TERRA" in intense crimson red (#C8102E).
Camera: slow dramatic flyby along the sheer rock faces and suspended waterfalls.
NO voice, NO speech, NO music. ONLY rushing waterfall roar and mountain gale wind SFX.` },
      { t: 'O Laudo de Paris de 1899 e a Linha Schomburgk', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical boundary map overlay displaying the disputed Schomburgk Line of British Guiana and the 1899 arbitration award.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border lines converging directly upon Mount Roraima's summit.
Text on screen: "LAUDO DE PARIS (1899) // REINO UNIDO VS. VENEZUELA" in uppercase white Montserrat Bold.
Badge: "O CUME FIXADO COMO VÉRTICE GEODÉSICO INTERNACIONAL" in gold (#F59E0B).
Camera: technical orthographic push-in over the border vectors.
NO voice, NO speech, NO music. ONLY antique quill sound and seal chime SFX.` },
      { t: 'A Expedição de 1931 e o Marco Tripartite BV-0', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the exact coordinates of the BV-0 concrete pyramid marker on the windswept sandstone plateau.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crosshairs locking onto the marker with coordinates in JetBrains Mono: "05°12'08\"N, 60°44'07\"W".
Text on screen: "MARCO BV-0 (1931) // BRASIL, VENEZUELA E GUIANA" in uppercase white Orbitron Bold.
Badge: "EXPEDIÇÃO CONJUNTA ERGUE O PILAR A TRÊS MIL METROS" in white (#F5F2EB).
Camera: slow cinematic descent onto the quartz-covered rock surface.
NO voice, NO speech, NO music. ONLY telemetry lock and cold mountain wind SFX.` },
      { t: 'A Partilha Assimétrica: 85% para a Venezuela', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic pie chart map overlay showing the territorial breakdown of Mount Roraima's summit plateau.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Venezuela 85% (amber), Guyana 10% (green), Brazil 5% (blue).
Text on screen: "DIVISÃO DO PLATÔ // VENEZUELA 85% - BRASIL 5%" in uppercase white Montserrat Bold.
Badge: "A ÚNICA ROTA VIÁVEL DE SUBIDA FICA NO LADO VENEZUELANO" in gold (#F59E0B).
Camera: technical orthographic rotation around the BV-0 boundary lines.
NO voice, NO speech, NO music. ONLY digital data ping and wind whistle SFX.` },
      { t: 'O Ponto Maverick e o Teto da Montanha', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Topographic flyover of Maverick Rock, the highest elevation on Mount Roraima at 2,810 meters within Venezuelan territory.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peak elevation marked with glowing summit badge in Bege Cartográfico (#F5F2EB).
Text on screen: "PONTO MAVERICK // 2.810 M DE ALTITUDE" in uppercase white Orbitron Bold.
Badge: "VISTA PANORÂMICA INFINITA SOBRE A GRAN SABANA" in sage green (#A8C3A6).
Camera: cinematic low-altitude sweep across bizarre black rock formations.
NO voice, NO speech, NO music. ONLY atmospheric howling wind and gravel crunch SFX.` },
      { t: 'O Berço das Três Grandes Bacias Oceânicas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Hydrological flow map tracing three distinct river systems cascading down Mount Roraima's cliffs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Amazon Basin (south/west in blue), Orinoco Basin (north in cyan), Essequibo Basin (east in teal).
Text on screen: "TRÍPLICE BACIA // AMAZONAS, ORINOCO E ESSEQUIBO" in uppercase white Montserrat Bold.
Badge: "O ÚNICO MARCO DO PLANETA QUE ALIMENTA TRÊS MEGABACIAS" in gold (#F59E0B).
Camera: dynamic linear pull-back revealing continental drainage rivers.
NO voice, NO speech, NO music. ONLY rushing water and thunder rumble SFX.` },
      { t: 'A Crise de Essequibo e o Litígio da Fronteira Leste', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Geopolitical dispute overlay highlighting the Venezuelan claim over Guayana Esequiba, directly affecting the eastern flank of Roraima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Disputed Essequibo territory shaded in diagonal crimson red stripes (#C8102E).
Text on screen: "CRISE DE ESSEQUIBO // VENEZUELA VS. GUIANA" in uppercase white Orbitron Bold.
Badge: "PARA CARACAS, O MARCO É BINÁRIO; PARA A ONU, É TRIPARTITE" in intense crimson red (#C8102E).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY radar alert beep and geopolitical tension drone SFX.` },
      { t: 'A Vigilância Tática do Exército Brasileiro em Pacaraima', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Military tactical map showing Brazilian Army deployments and armored vehicle columns along the BR-174 corridor near Mount Roraima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Brazilian military outpost markers in green and gold guarding the northern border.
Text on screen: "VIGILÂNCIA BRASILEIRA // 18º REGIMENTO MECANIZADO" in uppercase white Montserrat Bold.
Badge: "SOBERANIA ASSEGURADA NOS PÉS DA SERRA PACARAIMA" in white (#F5F2EB).
Camera: slow linear satellite track over the Brazil-Venezuela highway.
NO voice, NO speech, NO music. ONLY armored vehicle engine hum and radio communication tone SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite retreat showing Mount Roraima, Kukenan, and the entire green expanse of the Amazon basin curving into the Earth's limb.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Summit boundary outlined in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 170: OLIVENCA
  {
    num: 170,
    titulo: 'Por Que Portugal Recusa Reconhecer a Soberania da Espanha Sobre Olivença Há Mais de Duzentos Anos?',
    roteiro: `Por que Portugal recusa reconhecer a soberania da Espanha sobre Olivença há mais de duzentos anos? Portuguesa por mais de cinco séculos desde o Tratado de Alcanizes de 1297, a vila fortificada alentejana de Olivença foi ocupada por tropas espanholas comandadas por Manuel Godoy na efêmera Guerra das Laranjas em 1801. O Tratado de Badajoz forçou a cessão do território, mas com a invasão napoleônica de 1807 o príncipe Dom João revogou todos os acordos no Rio de Janeiro. No Congresso de Viena de 1815, as potências mundiais e a própria Espanha assinaram o Artigo 105 reconhecendo a legitimidade da reivindicação portuguesa e prometendo devolver a praça-forte. Como Madri nunca desocupou as terras, os mapas militares portugueses mantêm cem quilômetros de fronteira no Rio Guadiana sem demarcação oficial até hoje. Uma disputa pacífica e secular onde cidadãos oliventinos hoje resgatam sua nacionalidade portuguesa. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Guadiana River boundary between Portugal and Spain.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A FRONTEIRA INDELIMITADA"
Line 2 (intense crimson red #C8102E): "POR QUE PORTUGAL RECLAMA OLIVENÇA"
Line 3 (pure white #F5F2EB): "HÁ MAIS DE 200 ANOS?"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Olivenza and the Guadiana.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'Cinco Séculos de História Portuguesa: O Tratado de Alcanizes (1297)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the 1297 Treaty of Alcañices boundary placing Olivença firmly inside the Kingdom of Portugal.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border lines in Bege Cartográfico (#F5F2EB) with Manueline fortress symbols.
Text on screen: "TRATADO DE ALCANIZES (1297) // CINCO SÉCULOS PORTUGUESES" in uppercase white Orbitron Bold.
Badge: "FORAL MANUELINO DE 1510 E A PONTE DA AJUDA" in gold (#F59E0B).
Camera: slow linear descent over the medieval bastions of Olivença.
NO voice, NO speech, NO music. ONLY church bell toll and parchment flutter SFX.` },
      { t: 'A Guerra das Laranjas de 1801 e o Tratado de Badajoz', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map depicting the invasion of the Alentejo by Spanish armies commanded by Manuel Godoy in May 1801.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Invasion vectors in bright crimson red (#C8102E) seizing Olivença and Juromenha.
Text on screen: "GUERRA DAS LARANJAS (1801) // TRATADO DE BADAJOZ" in uppercase white Montserrat Bold.
Badge: "CESSÃO FORÇADA DE 750 KM² SOB AMEAÇA NAPOLEÔNICA" in intense crimson red (#C8102E).
Camera: dynamic linear flyover toward Badajoz and Elvas.
NO voice, NO speech, NO music. ONLY musket volley and cavalry charge SFX.` },
      { t: 'O Congresso de Viena de 1815: O Artigo 105', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic document overlay featuring the official French text of Article 105 of the Final Act of the Congress of Vienna.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Diplomatic treaty seal glowing in radiant gold (#F59E0B).
Text on screen: "CONGRESSO DE VIENA (1815) // ARTIGO 105" in uppercase white Orbitron Bold.
Badge: "A ESPANHA RATIFICA O COMPROMISSO DE RESTITUIR OLIVENÇA" in gold (#F59E0B).
Camera: technical orthographic push-in over the treaty parchment.
NO voice, NO speech, NO music. ONLY wax seal stamp and orchestra violin tone SFX.` },
      { t: 'A Omissão Cartográfica: 100 km Sem Fronteira nos Mapas', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Official military topographic map of the Portuguese Army (IGeoE) showing the black dotted border line disappearing between the Caia and Cuncos rivers.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Missing border sector highlighted with dashed question marks in gold (#F59E0B).
Text on screen: "MAPAS MILITARES // 100 KM SEM DEMARCAÇÃO OFICIAL" in uppercase white Montserrat Bold.
Badge: "PORTUGAL RECUSA COLOCAR MARCOS LIMÍTROFES NO GUADIANA" in intense crimson red (#C8102E).
Camera: slow panning shot following the river meanders.
NO voice, NO speech, NO music. ONLY surveying tripod click and measuring tape SFX.` },
      { t: 'As Ruínas da Ponte da Ajuda no Rio Guadiana', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the ruined 16th-century Bridge of Ajuda spanning the Guadiana between Elvas and Olivença.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Broken stone arches in the river channel highlighted in Bege Cartográfico (#F5F2EB).
Text on screen: "PONTE DA AJUDA (1510) // O SÍMBOLO DA DISPUTA" in uppercase white Orbitron Bold.
Badge: "DINAMITADA EM 1709 E PRESERVADA COMO MEMORIAL HISTÓRICO" in white (#F5F2EB).
Camera: low-altitude technical flyover above the bridge piers and river waters.
NO voice, NO speech, NO music. ONLY water current flow and stone echo SFX.` },
      { t: 'A Vida sob Administração Espanhola e a Língua Oliventina', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Urban street map of Olivenza showing the coexistence of Spanish administration and Manueline Portuguese architecture.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bilingual street names and monuments highlighted in sage green (#A8C3A6).
Text on screen: "IGREJA DA MADALENA // PATRIMÔNIO MANUELINO" in uppercase white Montserrat Bold.
Badge: "O PORTUGUÊS OLIVENTINO E A IDENTIDADE ALENTEJANA" in sage green (#A8C3A6).
Camera: smooth descent into the town square and castle keep.
NO voice, NO speech, NO music. ONLY acoustic fado guitar strum and street murmur SFX.` },
      { t: 'A Dupla Cidadania de 2014: O Resgate do Passaporte', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization showing the law of 2014 granting Portuguese nationality to residents of Olivenza.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Nationality certificate flow in glowing gold from Lisbon to Olivenza.
Text on screen: "LEI DE 2014 // NACIONALIDADE PORTUGUESA CONCEDIDA" in uppercase white Orbitron Bold.
Badge: "MAIS DE 2.000 OLIVENTINOS TÊM PASSAPORTE PORTUGUÊS" in gold (#F59E0B).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY official passport stamp and digital chime SFX.` },
      { t: 'A Fraternidade Ibérica no Espaço Schengen', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide regional map showing the borderless integration of the Alentejo (Portugal) and Extremadura (Spain) inside the European Union.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Free transit highways in glowing sage green (#A8C3A6) connecting Elvas, Badajoz, and Olivenza.
Text on screen: "FRATERNIDADE IBÉRICA // LIVRE CIRCULAÇÃO SCHENGEN" in uppercase white Montserrat Bold.
Badge: "UMA DISPUTA CENTENÁRIA TRANSFORMADA EM PONTE CULTURAL" in white (#F5F2EB).
Camera: linear satellite sweep across the Alqueva reservoir and Guadiana valley.
NO voice, NO speech, NO music. ONLY gentle wind and highway whoosh SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the entire Iberian Peninsula surrounded by the Atlantic Ocean and the Mediterranean Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Olivença sector highlighted in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into cosmic deep space.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 171: ESTREITO DE BONIFACIO
  {
    num: 171,
    titulo: 'Por Que o Estreito de Bonifacio Entre a Córsega e a Sardenha É Uma das Passagens Marítimas Mais Perigosas da Europa?',
    roteiro: `Por que o Estreito de Bonifacio entre a Córsega e a Sardenha é uma das passagens marítimas mais perigosas da Europa? Com apenas onze quilômetros de largura separando a cidadela francesa de Bonifacio da costa sarda italiana de Santa Teresa Gallura, esse corredor náutico é um labirinto mortal de recifes submersos de granito e correntes traiçoeiras. Quando os ventos do Mistral aceleram pelo canal, ondas violentas criam um verdadeiro cemitério marinho, como no naufrágio da fragata La Sémillante em 1855, que aniquilou setecentos e oitenta soldados franceses. Para impedir que um desastre petrolífero destruísse o santuário de corais do arquipélago de La Maddalena, França e Itália baniram navios com cargas tóxicas em 1993. Em 2011, a Organização Marítima Internacional blindou a passagem como Área Marinha Especialmente Sensível sob vigilância permanente de radares costeiros. Um chokepoint mediterrâneo onde a natureza e a segurança naval se impõem. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Strait of Bonifacio between Corsica and Sardinia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "AS BOCAS DE BONIFACIO"
Line 2 (intense crimson red #C8102E): "POR QUE ESTE ESTREITO É TÃO PERIGOSO?"
Line 3 (pure white #F5F2EB): "O CANAL PROIBIDO PARA PETROLEIROS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the limestone cliffs of Bonifacio.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: 'A Garganta Estreita: 11 km Entre Córsega e Sardenha', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the 11-kilometer narrow gap separating French Corsica from Italian Sardinia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Caliper line in JetBrains Mono glowing in gold (#F59E0B): "LARGURA MÍNIMA: 11 KM (6 MILHAS NÁUTICAS)".
Text on screen: "ESTREITO DE BONIFACIO // FRANÇA E ITÁLIA" in uppercase white Orbitron Bold.
Badge: "CANAL NAVEGÁVEL ÚTIL REDUZIDO A MENOS DE 3.000 METROS" in intense crimson red (#C8102E).
Camera: slow linear descent across the turquoise waters.
NO voice, NO speech, NO music. ONLY sea spray and wind turbulence SFX.` },
      { t: 'O Labirinto de Granito: As Ilhas Lavezzi e La Maddalena', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Detailed nautical hydrographic chart showing underwater granite reefs and shallow banks littering the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Submerged reef hazards marked with glowing warning crosses in crimson red (#C8102E).
Text on screen: "RECIFES SUBMERSOS // PROFUNDIDADE DE APENAS 50 METROS" in uppercase white Montserrat Bold.
Badge: "ARQUIPÉLAGO DE LAVEZZI (FRANÇA) E LA MADDALENA (ITÁLIA)" in gold (#F59E0B).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY sonar ping and underwater current SFX.` },
      { t: 'O Vento Mistral: O Efeito Venturi do Mediterrâneo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Meteorological satellite animation depicting northwestern Mistral winds funneling between mountainous island relief.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Wind vector streamlines accelerating through the strait in radiant white (#F5F2EB).
Text on screen: "EFEITO VENTURI // ONDAS DE 8 METROS E VENTO DE 100 KM/H" in uppercase white Orbitron Bold.
Badge: "CORRENTES TRAIÇOEIRAS ARRASTAM NAVIOS CONTRA AS ROCHAS" in intense crimson red (#C8102E).
Camera: dynamic linear flyover matching the wind direction.
NO voice, NO speech, NO music. ONLY gale howling and heavy wave crash SFX.` },
      { t: 'O Naufrágio da Sémillante em 1855: 780 Mortos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical reenactment map of the French frigate La Sémillante wrecking on the granite reefs of Lavezzi Island on February 15, 1855.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Shipwreck location marked with glowing crimson beacon (#C8102E).
Text on screen: "LA SÉMILLANTE (1855) // NENHUM SOBREVIVENTE" in uppercase white Montserrat Bold.
Badge: "CEMITÉRIO MARÍTIMO E MEMORIAL DE PEDRA EM LAVEZZI" in white (#F5F2EB).
Camera: slow cinematic descent onto the barren granite island.
NO voice, NO speech, NO music. ONLY somber bell toll and breaking wave SFX.` },
      { t: 'O Decreto Franco-Italiano de 1993: Veto a Petroleiros', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of the 1993 bilateral treaty banning tankers carrying hydrocarbons and dangerous chemicals.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red exclusion barrier icon spanning the strait from Corsica to Sardinia.
Text on screen: "TRATADO DE 1993 // PROIBIÇÃO TOTAL DE CARGAS TÓXICAS" in uppercase white Orbitron Bold.
Badge: "DESVIO OBRIGATÓRIO DE PETROLEIROS PARA FORA DAS ILHAS" in gold (#F59E0B).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY mechanical seal and maritime radio tone SFX.` },
      { t: 'A Blindagem da IMO em 2011: Área Especialmente Sensível', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
International Maritime Organization (IMO) ecological protection zone overlay over the strait and surrounding archipelagos.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Marine sanctuary boundary glowing in vibrant sage green (#A8C3A6).
Text on screen: "ÁREA PSSA DA IMO (2011) // PROTEÇÃO ECOLÓGICA MÁXIMA" in uppercase white Montserrat Bold.
Badge: "STATUS IGUAL À GRANDE BARREIRA DE CORAIS E GALÁPAGOS" in sage green (#A8C3A6).
Camera: smooth sweeping shot over coral beds and cetacean sanctuaries.
NO voice, NO speech, NO music. ONLY dolphin click and pristine ocean swell SFX.` },
      { t: 'O Sistema de Radares VTS e a Praticagem Costeira', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Radar surveillance tracking display from Cap Pertusato (Corsica) and Guardia Vecchia (La Maddalena) monitoring maritime traffic in real-time.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Vessel AIS tracking vectors in cyan and gold moving through designated pilotage channels.
Text on screen: "SISTEMA VTS // VIGILÂNCIA DE RADAR 24 HORAS" in uppercase white Orbitron Bold.
Badge: "GUARDA COSTEIRA ITALIANA E MARINHA FRANCESA EM PATRULHA" in white (#F5F2EB).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY digital radar sweep and telemetry data chirp SFX.` },
      { t: 'A Integração Insular: As Balsas de Santa Teresa a Bonifacio', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Passenger ferry tracking shot crossing the scenic 50-minute route between Santa Teresa Gallura and Bonifacio harbour.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ferry route line in Bege Cartográfico (#F5F2EB) entering the natural fjord of Bonifacio.
Text on screen: "TRAVESSIA DE 50 MINUTOS // PAIXÃO CORSO-SARDA" in uppercase white Montserrat Bold.
Badge: "PONTE CULTURAL E TURÍSTICA DO MEDITERRÂNEO OCIDENTAL" in gold (#F59E0B).
Camera: slow cinematic flyover tracking the ferry between limestone cliffs.
NO voice, NO speech, NO music. ONLY ferry horn and maritime water churn SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude satellite retreat showing Corsica, Sardinia, and the entire western Mediterranean basin from the Balearic islands to Rome.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bonifacio strait glowing in soft Bege Cartográfico (#F5F2EB).
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 172: RANKING PAISES MAIS RICOS (PIB PER CAPITA PPC)
  {
    num: 172,
    titulo: 'Quais São os Dez Países Mais Ricos do Mundo por PIB per Capita Onde a Riqueza por Habitante Ultrapassa Cem Mil Dólares?',
    roteiro: `Quais são os dez países mais ricos do mundo por PIB per capita onde a riqueza por habitante ultrapassa cem mil dólares? Quando a riqueza nacional é ajustada pela Paridade de Poder de Compra para eliminar a ilusão do custo de vida, o topo da economia mundial não pertence aos continentes gigantes, mas a nações de altíssima produtividade. O Grão-Ducado de Luxemburgo lidera isolado com mais de cento e quarenta e três mil dólares por habitante graças ao seu megacentro de fundos de investimento europeus. A Irlanda ocupa o segundo lugar com multinacionais de tecnologia e farmacêuticas globais, seguida por Singapura no Estreito de Malaca e pelos petroestados do Catar e Emirados Árabes. A estabilidade secular da Suíça e o fundo trilionário de petróleo da Noruega garantem o pelotão europeu, enquanto os Estados Unidos mantêm o feito único de figurar no Top 10 com trezentos e trinta e cinco milhões de habitantes. O mapa definitivo de onde o capital e a produtividade atingem o topo da Terra. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting the wealthiest nations by GDP PPP per capita.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "RANKING GLOBAL DE RIQUEZA"
Line 2 (intense crimson red #C8102E): "OS DEZ PAÍSES MAIS RICOS DO MUNDO"
Line 3 (pure white #F5F2EB): "PIB PER CAPITA EM PODER DE COMPRA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward western Europe.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Luxemburgo (US$ 143.320 / hab)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the Grand Duchy of Luxembourg bordered by France, Germany, and Belgium.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders highlighted in radiant gold (#F59E0B): "1º LUGAR // US$ 143.320".
Text on screen: "LUXEMBURGO // O MAIOR CENTRO DE FUNDOS DA EUROPA" in uppercase white Orbitron Bold.
Badge: "660 MIL HABITANTES E 200 MIL TRABALHADORES TRANSFRONTEIRIÇOS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over the Kirchberg financial district.
NO voice, NO speech, NO music. ONLY gold coin chime and digital bank terminal SFX.` },
      { t: '2º Lugar: Irlanda (US$ 137.640 / hab)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Republic of Ireland and the Dublin Silicon Docks tech hub.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ireland outlined in vibrant green (#A8C3A6) with gold data banner: "2º LUGAR // US$ 137.640".
Text on screen: "IRLANDA // HUB EUROPEU DE BIG TECHS E FARMAS" in uppercase white Montserrat Bold.
Badge: "SEDE DA APPLE, GOOGLE, META E PFIZER NA EUROPA" in gold (#F59E0B).
Camera: slow linear descent along the Irish coastline.
NO voice, NO speech, NO music. ONLY digital data whoosh and fiber optic pulse SFX.` },
      { t: '3º Lugar: Singapura (US$ 133.890 / hab)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the island state of Singapore at the tip of the Malay Peninsula.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island perimeter outlined in electric blue and gold: "3º LUGAR // US$ 133.890".
Text on screen: "SINGAPURA // O PORTO E BANCA DO ESTREITO DE MALACA" in uppercase white Orbitron Bold.
Badge: "ZERO RECURSOS NATURAIS; MÁXIMA PRODUTIVIDADE GLOBAL" in white (#F5F2EB).
Camera: technical orthographic push-in toward Marina Bay and Jurong Port.
NO voice, NO speech, NO music. ONLY container crane hum and financial ticker SFX.` },
      { t: '4º e 5º Lugares: Catar e Emirados Árabes Unidos', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of the Arabian Peninsula highlighting Qatar (US$ 114.210) and the United Arab Emirates (US$ 96.850).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Gas flare and skyscraper vectors in gold (#F59E0B) over Doha and Dubai.
Text on screen: "CATAR E EMIRADOS // GÁS NATURAL E HUBS GLOBAIS" in uppercase white Montserrat Bold.
Badge: "CAMPO NORTE DE GNL E FUNDOS SOBERANOS TRILIONÁRIOS" in gold (#F59E0B).
Camera: smooth sweeping shot across the Persian Gulf.
NO voice, NO speech, NO music. ONLY jet engine whoosh and telemetry lock SFX.` },
      { t: '6º e 7º Lugares: Suíça e Noruega', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Relief satellite map highlighting Switzerland (US$ 91.930) in the Alps and Norway (US$ 87.970) along its fjords.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders in Bege Cartográfico (#F5F2EB).
Text on screen: "SUÍÇA E NORUEGA // ESTABILIDADE E FUNDO DE PETRÓLEO" in uppercase white Orbitron Bold.
Badge: "FUNDO SOBERANO NORUEGUÊS DE US$ 1,7 TRILHÃO" in sage green (#A8C3A6).
Camera: diagonal flyover from Zurich to the North Sea offshore platforms.
NO voice, NO speech, NO music. ONLY cold alpine wind and North Sea swell SFX.` },
      { t: '8º e 9º Lugares: Guiana e San Marino', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing Guyana's offshore Stabroek oil boom (US$ 85.000) and the microstate of San Marino (US$ 84.130).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country vectors highlighted in glowing amber (#F59E0B).
Text on screen: "GUIANA E SAN MARINO // O BOOM DO PETRÓLEO E A BANCA" in uppercase white Montserrat Bold.
Badge: "GUIANA É A ECONOMIA QUE MAIS CRESCE NO MUNDO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY offshore drill hum and antique coin clink SFX.` },
      { t: '10º Lugar: Estados Unidos (US$ 83.060 / hab)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of the United States glowing with economic activity from Silicon Valley to Wall Street.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Continental borders outlined in Bege Cartográfico (#F5F2EB): "10º LUGAR // US$ 83.060".
Text on screen: "ESTADOS UNIDOS // O ÚNICO GIGANTE DEMOGRÁFICO NO TOP 10" in uppercase white Orbitron Bold.
Badge: "336 MILHÕES DE HABITANTES GERANDO US$ 28 TRILHÕES" in gold (#F59E0B).
Camera: slow cinematic descent toward the American mainland.
NO voice, NO speech, NO music. ONLY digital power grid hum and financial bell SFX.` },
      { t: 'Tabela Resumo do Top 10 Mundial do FMI', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Full-screen dark mode infographic table ranking the 10 richest countries in order with exact USD PPP values.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Table rows styled in JetBrains Mono with gold rank numbers 1 to 10.
Text on screen: "TOP 10 PAÍSES MAIS RICOS DO MUNDO (FMI 2026)" in uppercase white Orbitron Bold.
Badge: "METODOLOGIA: PIB PER CAPITA AJUSTADO EM PODER DE COMPRA" in sage green (#A8C3A6).
Camera: slow technical downward push-in.
NO voice, NO speech, NO music. ONLY digital data calculation and chime SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite retreat showing the entire Earth globe spinning with financial centers illuminated across Europe, Asia, and the Americas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift towards the deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 173: RANKING RESERVAS DE OURO DO MUNDO
  {
    num: 173,
    titulo: 'Quais São os Dez Países com as Maiores Reservas de Ouro do Mundo Onde Milhares de Toneladas Guardam o Poder Geopolítico?',
    roteiro: `Quais são os dez países com as maiores reservas de ouro do mundo onde milhares de toneladas guardam o poder geopolítico? Em tempos de guerras de moedas e sanções financeiras, mais de trinta e seis mil toneladas de ouro repousam em cofres blindados como a âncora final da soberania monetária global. Os Estados Unidos lideram com folga absoluta: mais de oito mil cento e trinta e três toneladas distribuídas entre a lendária base de Fort Knox, West Point e o Federal Reserve de Nova York. Na Europa, a muralha de ouro do Bundesbank alemão, da Itália e da França soma mais de oito mil toneladas estocadas sob sigilo de Estado. Enquanto isso, potências dos BRICS como a Rússia e a China acumulam compras ininterruptas de centenas de toneladas por ano para proteger suas economias contra o congelamento de reservas cambiais em dólares. O ranking dos impérios que controlam o metal amarelo que nenhuma sanção internacional pode cancelar. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and highlighting the underground sovereign gold vaults of the world.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "O MAPA DO METAL SOBERANO"
Line 2 (intense crimson red #C8102E): "AS MAIORES RESERVAS DE OURO DO MUNDO"
Line 3 (pure white #F5F2EB): "36.000 TONELADAS EM COFRES BLINDADOS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the North American continent.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: Estados Unidos (8.133,5 Toneladas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto Fort Knox, Kentucky, and the Federal Reserve Bank of New York in Manhattan.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Country territory highlighted in radiant gold (#F59E0B): "1º LUGAR // 8.133,5 TONELADAS".
Text on screen: "ESTADOS UNIDOS // FORT KNOX E NEW YORK FED" in uppercase white Orbitron Bold.
Badge: "71% DE TODAS AS RESERVAS CAMBIAIS DO TESOURO AMERICANO" in intense crimson red (#C8102E).
Camera: technical orthographic push-in over the fortified bullion depository.
NO voice, NO speech, NO music. ONLY heavy vault door gear turn and gold ingot clank SFX.` },
      { t: '2º Lugar: Alemanha (3.351,5 Toneladas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Germany focusing on the headquarters of the Deutsche Bundesbank in Frankfurt.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
German borders outlined in gold (#F59E0B): "2º LUGAR // 3.351,5 TONELADAS".
Text on screen: "ALEMANHA // O TESOURO DO BUNDESBANK" in uppercase white Montserrat Bold.
Badge: "REPATRIAÇÃO SECRETA DE 674 TONELADAS ENTRE 2013 E 2017" in gold (#F59E0B).
Camera: slow linear descent into Frankfurt's banking district.
NO voice, NO speech, NO music. ONLY secure vault lock click and digital chime SFX.` },
      { t: '3º e 4º Lugares: Itália (2.451,8 t) e França (2.436,9 t)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of southern Europe highlighting Italy (Palazzo Koch in Rome) and France (La Souterraine in Paris).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders in Bege Cartográfico (#F5F2EB) with gold metrics.
Text on screen: "ITÁLIA E FRANÇA // A MURALHA DOURADA DA EUROPA" in uppercase white Orbitron Bold.
Badge: "MAIS DE 65% DAS RESERVAS NACIONAIS LASTREADAS EM OURO" in white (#F5F2EB).
Camera: smooth sweeping shot across the Alps from Paris to Rome.
NO voice, NO speech, NO music. ONLY stone crypt echo and metal lock clink SFX.` },
      { t: '5º Lugar: Rússia (2.332,7 Toneladas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Russia tracing gold flows from Siberian mines to central vaults in Moscow and Saint Petersburg.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Russian territory outlined in radiant crimson and gold: "5º LUGAR // 2.332,7 TONELADAS".
Text on screen: "RÚSSIA // A FORTALEZA CONTRA AS SANÇÕES" in uppercase white Montserrat Bold.
Badge: "OURO DOMÉSTICO IMUNE AO CONGELAMENTO CAMBIAL OCIDENTAL" in intense crimson red (#C8102E).
Camera: dynamic linear flyover across the Ural mountains toward Moscow.
NO voice, NO speech, NO music. ONLY cold Siberian blizzard hum and heavy metal clatter SFX.` },
      { t: '6º Lugar: China (2.264,3 Toneladas Oficiais)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of China and the People's Bank of China in Beijing and Shanghai Gold Exchange.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Chinese mainland glowing in intense gold (#F59E0B): "6º LUGAR // 2.264,3 TONELADAS".
Text on screen: "CHINA // COMPRAS MENSAIS RECORDES DO PBOC" in uppercase white Orbitron Bold.
Badge: "ESTOQUES REAIS ESTIMADOS COMO MUITO SUPERIORES AOS DADOS OFICIAIS" in intense crimson red (#C8102E).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY digital trading terminal beep and molten gold pour SFX.` },
      { t: '7º e 8º Lugares: Suíça (1.040 t) e Japão (845,9 t)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view highlighting Switzerland in the Alps and the Japanese archipelago in the Pacific.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Borders in sage green (#A8C3A6) and gold (#F59E0B).
Text on screen: "SUÍÇA E JAPÃO // PILARES MONETÁRIOS TRADICIONAIS" in uppercase white Montserrat Bold.
Badge: "SUÍÇA REFINA 70% DE TODO O OURO BRUTO DO PLANETA" in sage green (#A8C3A6).
Camera: slow cinematic descent toward Bern and Tokyo.
NO voice, NO speech, NO music. ONLY clock precision tick and financial chime SFX.` },
      { t: '9º e 10º Lugares: Índia (840,8 t) e Holanda (612,5 t)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map highlighting the Reserve Bank of India in Mumbai and the Netherlands vault complex in Zeist.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders highlighted in glowing amber (#F59E0B).
Text on screen: "ÍNDIA E HOLANDA // PROTEÇÃO CONTRA A VOLATILIDADE" in uppercase white Orbitron Bold.
Badge: "A ÍNDIA REPATRIOU MAIS DE 100 TONELADAS DE LONDRES EM 2024" in gold (#F59E0B).
Camera: technical orthographic sweep.
NO voice, NO speech, NO music. ONLY cargo transport engine hum and metal seal SFX.` },
      { t: 'A Explosão das Compras dos Bancos Centrais Pós-2022', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Global infographic chart showing net central bank gold purchases surpassing 1,000 tonnes annually since 2022.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Bar graph in glowing gold bars rising sharply on dark slate background.
Text on screen: "DESDOLARIZAÇÃO // COMPRAS RECORDES DE 1.000 T / ANO" in uppercase white Montserrat Bold.
Badge: "O OURO COMO ÚNICO ATIVO SEM RISCO DE SANÇÃO DE TERCEIROS" in intense crimson red (#C8102E).
Camera: slow technical push-in over the chart data.
NO voice, NO speech, NO music. ONLY electronic chart pulse and digital calculation tone SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-altitude satellite retreat showing the Earth spinning slowly with gold vault coordinates beaming light pulses across all continents.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  },

  // 174: RANKING PAISES MAIS VISITADOS DO MUNDO
  {
    num: 174,
    titulo: 'Quais São os Dez Países Mais Visitados do Mundo Onde Centenas de Milhões de Turistas Redefinem as Fronteiras das Viagens?',
    roteiro: `Quais são os dez países mais visitados do mundo onde centenas de milhões de turistas redefinem as fronteiras das viagens? O turismo internacional transformou-se na maior migração pacífica da história, concentrando mais de seiscentos milhões de viagens anuais em apenas dez destinos soberanos. A França reina invicta como o país mais visitado do planeta, alcançando a marca histórica de cem milhões de turistas atraídos por Paris, vinícolas do Loire e praias da Riviera. A Espanha brilha na segunda posição com oitenta e cinco milhões de visitantes em Barcelona, Madri e Ilhas Baleares, enquanto os Estados Unidos lideram a receita financeira global faturando cento e setenta e cinco bilhões de dólares. O Mediterrâneo domina o ranking com Itália, Turquia e Grécia, acompanhados pelo México liderando a América Latina e pelo Reino Unido e Alemanha. O mapa das nações que transformaram sua geografia e história na maior máquina de atração humana do globo. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      { t: 'Abertura e Gancho Cartográfico', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning with flight routes and passenger travel vectors radiating globally.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GRANDE MIGRAÇÃO PACÍFICA"
Line 2 (intense crimson red #C8102E): "OS DEZ PAÍSES MAIS VISITADOS DO MUNDO"
Line 3 (pure white #F5F2EB): "ONDE 600 MILHÕES DE VIAJANTES SE CONCENTRAM"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward western Europe.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.` },
      { t: '1º Lugar: França (100 Milhões de Turistas / Ano)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto France with illuminated flight routes converging on Paris Charles de Gaulle and Orly.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
French hexagon territory highlighted in radiant gold (#F59E0B): "1º LUGAR // 100 MILHÕES".
Text on screen: "FRANÇA // O DESTINO MAIS VISITADO DA TERRA" in uppercase white Orbitron Bold.
Badge: "PARIS, LOUVRE, RIVIERA, CHÂTEAUX E GASTRONOMIA" in intense crimson red (#C8102E).
Camera: slow cinematic descent toward the Seine and the Eiffel Tower.
NO voice, NO speech, NO music. ONLY jetliner contrail whoosh and camera shutter SFX.` },
      { t: '2º Lugar: Espanha (85,2 Milhões de Turistas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view of the Iberian Peninsula focusing on Spain's coastal costas, the Balearic Islands, and Madrid.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Spain outlined in vibrant amber (#F59E0B): "2º LUGAR // 85,2 MILHÕES".
Text on screen: "ESPANHA // O MAGNETISMO DE SOL, ARTE E PRAIA" in uppercase white Montserrat Bold.
Badge: "BARCELONA, MAIORCA, ANDALUZIA E MADRI" in gold (#F59E0B).
Camera: dynamic linear flyover from the Pyrenees to the Mediterranean shores.
NO voice, NO speech, NO music. ONLY Mediterranean wave swell and acoustic guitar echo SFX.` },
      { t: '3º Lugar: Estados Unidos (66,5 Milhões - US$ 175 Bi em Receita)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental satellite view of the United States glowing with international tourist arrival hubs: NYC, Orlando, Miami, Los Angeles, and Las Vegas.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
US borders in Bege Cartográfico (#F5F2EB): "3º LUGAR // US$ 175,9 BILHÕES".
Text on screen: "ESTADOS UNIDOS // LÍDER MUNDIAL EM GASTO TURÍSTICO" in uppercase white Orbitron Bold.
Badge: "RECEITAS MAIORES QUE O DOBRO DE QUALQUER CONCORRENTE" in intense crimson red (#C8102E).
Camera: technical orthographic push-in toward New York Harbor.
NO voice, NO speech, NO music. ONLY city traffic roar and aviation radar chime SFX.` },
      { t: '4º Lugar: Itália (57,3 Milhões de Turistas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view tracing tourist clusters down the Italian peninsula: Venice lagoon, Florence, Rome, and the Amalfi Coast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Italy outlined in bright sage green (#A8C3A6): "4º LUGAR // 57,3 MILHÕES".
Text on screen: "ITÁLIA // O MAIOR PATRIMÔNIO UNESCO DO MUNDO" in uppercase white Montserrat Bold.
Badge: "MAIS DE 50 PATRIMÔNIOS HISTÓRICOS DA HUMANIDADE" in white (#F5F2EB).
Camera: slow linear descent along the Grand Canal of Venice.
NO voice, NO speech, NO music. ONLY gondola oar splash and cathedral bell SFX.` },
      { t: '5º Lugar: Turquia (55,2 Milhões de Turistas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the Bosphorus dividing Istanbul between Europe and Asia, and the fairy chimneys of Cappadocia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Turkish borders highlighted in radiant gold (#F59E0B): "5º LUGAR // 55,2 MILHÕES".
Text on screen: "TURQUIA // A PONTE ENTRE DOIS CONTINENTES" in uppercase white Orbitron Bold.
Badge: "O HUB GLOBAL DA TURKISH AIRLINES E AS PRAIAS DE ANTÁLIA" in gold (#F59E0B).
Camera: technical orthographic push-in over the Golden Horn.
NO voice, NO speech, NO music. ONLY ship horn on the Bosphorus and hot air balloon burner hiss SFX.` },
      { t: '6º Lugar: México (42,2 Milhões de Turistas)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view of Mexico highlighting the Yucatan Peninsula, Cancun, Riviera Maya, and the historic center of Mexico City.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mexican territory outlined in vibrant amber: "6º LUGAR // 42,2 MILHÕES".
Text on screen: "MÉXICO // O GIGANTE DO TURISMO LATINO-AMERICANO" in uppercase white Montserrat Bold.
Badge: "PIRÂMIDES MAIAS, PRAIAS CARIBENHAS E GASTRONOMIA UNESCO" in white (#F5F2EB).
Camera: dynamic linear flyover above the turquoise Caribbean coastline.
NO voice, NO speech, NO music. ONLY Caribbean wave surge and maraca shake SFX.` },
      { t: '7º e 8º Lugares: Reino Unido (37,2 mi) e Alemanha (34,8 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map of northern and central Europe highlighting the British Isles (London hubs) and Germany (Berlin, Munich, industrial trade fairs).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
National borders in Bege Cartográfico (#F5F2EB).
Text on screen: "REINO UNIDO E ALEMANHA // CULTURA E TURISMO DE NEGÓCIOS" in uppercase white Orbitron Bold.
Badge: "LONDRES É UMA DAS TRÊS CIDADES MAIS VISITADAS DO GLOBO" in sage green (#A8C3A6).
Camera: diagonal flyover from the Thames to the Bavarian Alps.
NO voice, NO speech, NO music. ONLY Big Ben chime and high-speed ICE train whoosh SFX.` },
      { t: '9º e 10º Lugares: Grécia (32,7 mi) e Áustria (31,5 mi)', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Split satellite view showing the Greek Aegean islands (Santorini, Mykonos) and the Austrian Alps (Vienna, Salzburg).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Greece and Austria highlighted in radiant gold and sage green.
Text on screen: "GRÉCIA E ÁUSTRIA // O BERÇO CLÁSSICO E OS ALPES" in uppercase white Montserrat Bold.
Badge: "MAIS DE TRÊS VEZES A POPULAÇÃO LOCAL EM VISITANTES" in gold (#F59E0B).
Camera: slow cinematic sweep across white cycladic cliff houses.
NO voice, NO speech, NO music. ONLY gentle Aegean wave and alpine ski carve SFX.` },
      { t: 'Perspectiva Global e Encerramento VitaleGeo', desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Grand high-altitude orbital pull-back displaying the entire illuminated Earth globe with international airline routes glowing like golden spiderwebs across continents.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Institutional ending: VitaleGeo Geodesic Globe-G symbol (vitalegeo-symbol-primary.svg monochrome Bege #F5F2EB at 70% opacity) and wordmark "VITALEGEO" in Orbitron at lower center.
Camera: slow cinematic drift into the cosmic deep space horizon.
NO voice, NO speech, NO music. ONLY deep resonant bass hum and clean digital fadeout SFX.` }
    ]
  }
];

// 1. Gerar os 10 arquivos Video <num>.md
console.log('Gerando roteiros de vídeo 165 a 174 em:', roteirosDir);
for (const v of videos) {
  const fileName = `Video ${v.num}.md`;
  const filePath = path.join(roteirosDir, fileName);

  let content = `# Video ${v.num} — ${v.titulo}\n\n`;
  content += `### 1. Roteiro\n\n`;
  content += `${v.roteiro}\n\n`;
  content += `---\n\n`;
  content += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  let pCount = 0;
  for (const p of v.prompts) {
    pCount++;
    content += `#### Prompt ${pCount} — ${p.t} (4s)\n`;
    content += `\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }

  content += `---\n\n`;
  content += `### 3. Legenda\n\n`;
  content += `${v.titulo}\n\n`;
  content += `#geografia #geopolitica #mapas\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Gerado: ${fileName} (${content.length} caracteres)`);
}

// 2. Atualizar Índice.md
console.log('Atualizando Índice.md...');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

const newTableRows = videos.map(v => {
  return `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`;
}).join('\n');

// Inserir antes de '---' que encerra a seção 2 de roteiros documentais
const targetLine = '| 164 | [[Projetos/VitaleGeo/Roteiros/Video 164|Video 164]] | Por Que a Nigéria Entregou Uma Península Petrolífera Bilionária Para Camarões Sem Disparar Um Tiro? |';

if (indiceContent.includes(targetLine)) {
  indiceContent = indiceContent.replace(targetLine, `${targetLine}\n${newTableRows}`);
  // Atualizar contagem no cabeçalho de acervo oficial
  indiceContent = indiceContent.replace(/Acervo oficial de \*\*(\d+) roteiros de vídeo\*\*/, (match, p1) => {
    const novoTotal = parseInt(p1, 10) + videos.length;
    return `Acervo oficial de **${novoTotal} roteiros de vídeo**`;
  });
  fs.writeFileSync(indicePath, indiceContent, 'utf8');
  console.log(`✓ Índice.md atualizado com sucesso com os vídeos 165 a 174!`);
} else {
  console.warn('⚠️ Linha alvo não encontrada em Índice.md para injeção automática.');
}
