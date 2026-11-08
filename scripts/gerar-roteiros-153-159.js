import fs from 'node:fs';
import path from 'node:path';

const roteirosDir = 'D:/Obsidian/Vida nova/Projetos/VitaleGeo/Roteiros';

const videos = [
  // VIDEO 153 - ARGENTINA
  {
    num: 153,
    titulo: 'Como a Conquista do Deserto e os Tratados de Fronteira Forjaram o Gigantesco Território da Argentina?',
    roteiro: `Como a Conquista do Deserto e os tratados de fronteira forjaram o gigantesco território da Argentina? Em 1816, quando declarou sua independência, a Argentina governava menos de um quinto do espaço que possui hoje. O antigo Vice-Reino do Prata havia perdido a Bolívia, o Paraguai e o Uruguai, deixando Buenos Aires cercada por conflitos civis e com uma fronteira sul que terminava a escassos duzentos quilômetros da capital. Para romper esse cerco, o general Julio Argentino Roca comandou a violenta Conquista do Deserto entre 1878 e 1885, empurrando a linha militar até os rios Negro e Neuquén e anexando meio milhão de quilômetros quadrados da Patagônia. Em 1881, aproveitando a Guerra do Pacífico travada pelo Chile, a diplomacia argentina garantiu a meseta oriental e dividiu a Terra do Fogo em linha reta pelo meridiano sessenta e oito oeste. O mapa que transformou um país sitiado no oitavo maior do planeta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Southern Cone of South America focusing on Argentina.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "COMO SURGIU O MAPA"
Line 2 (intense crimson red #C8102E): "DO GIGANTE ARGENTINO?"
Line 3 (pure white #F5F2EB): "DE SITIO A OITAVO MAIOR PAÍS"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Rio de la Plata estuary.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Fragmentação do Vice-Reino do Prata em 1816',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay showing the vast Viceroyalty of the Rio de la Plata (1776) fracturing into separate nations: Bolivia, Paraguay, and Uruguay.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Territory lost highlighted in amber pulses (#F59E0B): Alto Peru, Paraguay, Banda Oriental.
Text on screen: "1816 // A FRAGMENTAÇÃO DO PRATA" in uppercase white Orbitron Bold.
Badge: "BUENOS AIRES GOVERNAVA MENOS DE 20% DO ATUAL TERRITÓRIO" in intense crimson red (#C8102E).
Camera: linear pullback revealing continental South America borders.
NO voice, NO speech, NO music. ONLY tactical document shuffle and map strike SFX.`
      },
      {
        t: 'A Fronteira Sul em 1870: O Rio Salado e os Malones',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic map of Buenos Aires province showing the historical southern frontier ending at the Rio Salado, 200 km from the capital.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Frontier line marked in glowing Bege Cartográfico (#F5F2EB): "FRONTEIRA COM O PUELMAPU INDÍGENA".
Text on screen: "O LIMITE HISTÓRICO // RIO SALADO" in uppercase white Montserrat Bold.
Badge: "ALÉM DESTA LINHA: TERRITÓRIO MAPUCHE E TEHUELCHE" in gold (#F59E0B).
Camera: slow diagonal satellite tracking shot across the pampas.
NO voice, NO speech, NO music. ONLY wind over grass and telemetry lock SFX.`
      },
      {
        t: 'A Zanja de Alsina de 1876: 374 km de Vala Militar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective highlighting the historical defensive ditch known as Zanja de Alsina across western Buenos Aires.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Continuous trench line glowing in sage green (#A8C3A6) with fort icons along its 374 km path.
Text on screen: "ZANJA DE ALSINA (1876) // 374 KM" in uppercase white Orbitron Bold.
Badge: "A MURALHA DEFENSIVA CONTRA OS MALONES" in sage green (#A8C3A6).
Camera: smooth linear zoom into the line of forts.
NO voice, NO speech, NO music. ONLY military telegraph beeps and mechanical hum SFX.`
      },
      {
        t: 'A Ofensiva da Conquista do Deserto (1878-1885)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Animated tactical map showing five military divisions under General Julio Argentino Roca advancing south toward the Rio Negro and Neuquén.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Five red advance vectors (#C8102E) sweeping across 500,000 square kilometers of territory.
Text on screen: "CONQUISTA DO DESERTO // 1878-1885" in uppercase white Orbitron Bold.
Badge: "+500.000 KM² ANEXADOS PELAS DIVISÕES DE ROCA" in intense crimson red (#C8102E).
Camera: dynamic linear satellite sweep from the pampas into northern Patagonia.
NO voice, NO speech, NO music. ONLY horse gallop and artillery thunder SFX.`
      },
      {
        t: 'O Tratado de Limites de 1881 com o Chile',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical cartographic layout showing the Andes mountain crest line being traced as the international boundary with Chile.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Andean watershed line (divortium aquarum) glowing in bright amber (#F59E0B).
Text on screen: "TRATADO DE 1881 // ARGENTINA E CHILE" in uppercase white Orbitron Bold.
Badge: "PATAGÔNIA ORIENTAL CONSOLIDADA SOBRE O ATLÂNTICO" in white (#F5F2EB).
Camera: cinematic flyover along the colossal snowy peaks of the Andes.
NO voice, NO speech, NO music. ONLY mountain wind and pen signing treaty SFX.`
      },
      {
        t: 'A Partilha Cirúrgica da Terra do Fogo (Meridiano 68°34\' W)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme high-resolution satellite zoom into the Isla Grande de Tierra del Fuego and Beagle Channel at the southern tip of the continent.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Straight vertical meridian line in Bege Cartográfico (#F5F2EB): "MERIDIANO 68°34' W".
Text on screen: "TERRA DO FOGO // A DIVISÃO EM LINHA RETA" in uppercase white Montserrat Bold.
Badge: "USHUAIA E O ATLÂNTICO GARANTIDOS PELA DIPLOMACIA" in intense crimson red (#C8102E).
Camera: slow linear descent towards Ushuaia and the Beagle Channel.
NO voice, NO speech, NO music. ONLY ocean wave surge and GPS coordinate chime SFX.`
      },
      {
        t: 'As Fronteiras do Chaco e Misiones (Tratados de 1876 e 1895)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning to the northeast borders of Argentina with Paraguay and Brazil across the Chaco and Misiones forests.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pilcomayo River and Iguazu borders glowing with boundary marker pins.
Text on screen: "CHACO E MISIONES // FRONTEIRAS FIXADAS" in uppercase white Montserrat Bold.
Badge: "ARBITRAGEM DE CLEVELAND E TRATADO DE 1876" in gold (#F59E0B).
Camera: steady diagonal flyover over the Parana and Uruguay river basins.
NO voice, NO speech, NO music. ONLY river current and gavel strike SFX.`
      },
      {
        t: 'A Dimensão Real dos 2,78 Milhões de km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Scale comparison animation superimposing the true outline of Argentina over Western Europe (from Portugal to Poland).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Outlines in glowing 2px stroke in Bege Cartográfico (#F5F2EB).
Text on screen: "2.780.400 KM² // OITAVO MAIOR PAÍS" in uppercase white Orbitron Bold.
Badge: "QUASE O MESMO TAMANHO DA EUROPA OCIDENTAL" in sage green (#A8C3A6).
Camera: wide orthographic view displaying continental scale.
NO voice, NO speech, NO music. ONLY digital data counter chime SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Argentine territory from the subtropical Iguazu Falls to the glacial tip of Cape Horn.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the complete national boundary.
Text on screen: "A FORMAÇÃO DA ARGENTINA // 2,78 MI KM²" in uppercase white Orbitron Bold.
Badge: "DE CAPITANIA SITIADA A IMPÉRIO DO PRATA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Southern Hemisphere globe curvature.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 154 - INDIA
  {
    num: 154,
    titulo: 'Por Que a Posição Naval da Índia no Oceano Índico Pode Asfixiar as Rotas de Petróleo da China?',
    roteiro: `Por que a posição naval da Índia no Oceano Índico pode asfixiar as rotas de petróleo da China? Projetando-se como uma colossal cunha naval de dois mil quilômetros sobre as águas equatoriais, a Índia domina o oceano por onde passam oitenta por cento do petróleo transportado por mar no mundo. A maior fraqueza de Pequim é o Estreito de Malaca, por onde cruza quase todo o combustível que abastece suas indústrias. E bem na saída desse canal, a apenas cento e cinquenta quilômetros de Sumatra, ergue-se o arquipélago indiano de Andamão e Nicobar. Ali, caças e aviões de patrulha Poseidon vigiam o Canal dos Seis Graus vinte e quatro horas por dia. Para escapar desse estrangulamento, a China construiu portos no Paquistão e Sri Lanka, mas Nova Délhi respondeu com a aliança do QUAD e bases avançadas em Omã e Cingapura. O tabuleiro naval onde o futuro energético da Ásia é decidido todos os dias. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Indian subcontinent jutting into the Indian Ocean.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGALTA NAVAL"
Line 2 (intense crimson red #C8102E): "DA ENERGIA DA CHINA"
Line 3 (pure white #F5F2EB): "O PODER DO OCEANO ÍNDICO"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the southern tip of India and Sri Lanka.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Cunha Geográfica de 2.000 km no Oceano Índico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional perspective showing India projecting 2,000 km into the equatorial ocean like a colossal fixed aircraft carrier.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Coastline vector highlighted in sage green (#A8C3A6): "7.516 KM DE LITORAL".
Text on screen: "A CUNHA NAVAL DA ÍNDIA // 7.516 KM" in uppercase white Orbitron Bold.
Badge: "80% DO COMÉRCIO MARÍTIMO DE PETRÓLEO DO MUNDO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the Indian Ocean basin.
NO voice, NO speech, NO music. ONLY ocean rumble and radar lock SFX.`
      },
      {
        t: 'O Dilema de Malaca da China: 80% do Petróleo em Risco',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical animation of maritime shipping lanes streaming from the Persian Gulf across the Indian Ocean into the narrow Malacca Strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing cargo density vectors in gold (#F59E0B) funneled into the narrow strait.
Text on screen: "O DILEMA DE MALACA // VULNERABILIDADE DE PEQUIM" in uppercase white Montserrat Bold.
Badge: "80% DO PETRÓLEO IMPORTADO PELA CHINA" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in towards the mouth of the strait.
NO voice, NO speech, NO music. ONLY ship horn and ambient radar pulse SFX.`
      },
      {
        t: 'A Fortaleza das Ilhas Andamão e Nicobar a 150 km',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view locking onto the 572 Indian islands of Andaman and Nicobar guarding the western exit of Malacca.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in Bege Cartográfico (#F5F2EB): "150 KM DE SUMATRA".
Text on screen: "ILHAS ANDAMÃO E NICOBAR // POSTO AVANÇADO" in uppercase white Orbitron Bold.
Badge: "BASE AERONAVAL INS BAAZ E CAÇAS SU-30MKI" in sage green (#A8C3A6).
Camera: smooth linear zoom into Great Nicobar Island and the Six Degree Channel.
NO voice, NO speech, NO music. ONLY jet engine rumble and telemetry beep SFX.`
      },
      {
        t: 'O Canal dos Seis Graus: A Chave da Navegação Submarina',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetry and radar layout displaying the deep Six Degree Channel between Great Nicobar and Aceh.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Submarine acoustic detection hydrophone array glowing beneath the waves.
Text on screen: "CANAL DOS SEIS GRAUS // CHOKEPOINT EQUATORIAL" in uppercase white Montserrat Bold.
Badge: "PASSAGEM OBRIGATÓRIA PARA SUPERPETROLEIROS E SUBMARINOS" in gold (#F59E0B).
Camera: linear lateral tracking shot across the nautical corridor.
NO voice, NO speech, NO music. ONLY sonar ping and deep water hum SFX.`
      },
      {
        t: 'O Colar de Pérolas de Pequim (Gwadar, Hambantota, Djibuti)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional tactical map showing Chinese-funded ports encircling India: Gwadar (Pakistan), Hambantota (Sri Lanka), Kyaukpyu (Myanmar), and Djibouti.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing red harbor markers (#C8102E) connecting along a strategic maritime arc.
Text on screen: "STRING OF PEARLS // A CERCA NAVAL CHINESA" in uppercase white Montserrat Bold.
Badge: "BASES PORTUÁRIAS DE DUPLO USO AO REDOR DA ÍNDIA" in intense crimson red (#C8102E).
Camera: high-altitude satellite overview panning from Pakistan to Myanmar.
NO voice, NO speech, NO music. ONLY warning chime and tactical sweep SFX.`
      },
      {
        t: 'O Colar de Diamantes de Nova Délhi (Chabahar, Duqm, Sabang)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Counter-strategy map showing Indian military and logistics access: Chabahar (Iran), Duqm (Oman), Sabang (Indonesia), and Changi (Singapore).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing diamond icons in bright Bege Cartográfico (#F5F2EB) breaking the encirclement.
Text on screen: "NECKLACE OF DIAMONDS // A RESPOSTA INDIANA" in uppercase white Orbitron Bold.
Badge: "BASES AVANÇADAS EM OMÃ, IRÃ E CINGAPURA" in sage green (#A8C3A6).
Camera: dynamic linear satellite sweep connecting the Indian Ocean access points.
NO voice, NO speech, NO music. ONLY radar data lock and military communication SFX.`
      },
      {
        t: 'O Front do Himalaia: A Linha de Controle Real (LAC)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic satellite terrain view of the icy peaks of Ladakh, Galwan Valley, and Doklam plateau along the 3,488 km border with China.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dashed yellow line: "LINHA DE CONTROLE REAL (LAC) ▲ 4.500M".
Text on screen: "FRONT DO HIMALAIA // 3.488 KM DE TENSÃO" in uppercase white Montserrat Bold.
Badge: "O CONFRONTO TERRESTRE DE DOIS GIGANTES NUCLEARES" in intense crimson red (#C8102E).
Camera: 3D mountain flyby through snow-covered glacial valleys.
NO voice, NO speech, NO music. ONLY freezing mountain gale and radio static SFX.`
      },
      {
        t: 'O QUAD e os Exercícios Navais Malabar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical layout highlighting the Quadrilateral Security Dialogue (QUAD) alliance: India, United States, Japan, and Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Interconnected vector links across the Indo-Pacific theatre.
Text on screen: "ALIANÇA DO QUAD // ÍNDIA, EUA, JAPÃO E AUSTRÁLIA" in uppercase white Orbitron Bold.
Badge: "EXERCÍCIOS MALABAR E INTEROPERABILIDADE NAVAL" in gold (#F59E0B).
Camera: wide orthographic view across the Pacific and Indian oceans.
NO voice, NO speech, NO music. ONLY naval aircraft carrier catapult and telemetry SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Indian Ocean basin framed by Africa, India, and Southeast Asia.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Indian peninsula.
Text on screen: "O SENHOR DO ÍNDICO // A POSIÇÃO DA ÍNDIA" in uppercase white Orbitron Bold.
Badge: "O MAIOR CHOKEPOINT ENERGÉTICO DO PLANETA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing continental horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 155 - CATAR
  {
    num: 155,
    titulo: 'Como Uma Península Menor Que Sergipe Tornou-se o Maior Exportador de Gás Liquefeito e Uma Potência Financeira Global?',
    roteiro: `Como uma península menor que Sergipe tornou-se o maior exportador de gás liquefeito e uma potência financeira global? Com apenas onze mil quilômetros quadrados de deserto árido no Golfo Pérsico, o Catar era um arquipélago de vilarejos de pescadores de pérolas até a década de 1970. Tudo mudou com a descoberta do Campo Norte, a maior reserva não associada de gás natural do globo, compartilhada sob as águas com o Irã. Em vez de queimar o gás, o país investiu bilhões no megacomplexo de Ras Laffan e na tecnologia criogênica que resfria o gás a cento e sessenta e dois graus negativos, encolhendo seu volume seiscentas vezes para transporte marítimo. Hoje, sua frota de supermetaneiros Q-Max abastece usinas elétricas de Tóquio a Londres, gerando petrodólares que financiam um fundo soberano de meio trilhão de dólares e compram participações na Volkswagen e no aeroporto de Heathrow. A península onde a energia move a geopolítica. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Persian Gulf focusing on the tiny peninsula of Qatar.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "MENOR QUE SERGIPE"
Line 2 (intense crimson red #C8102E): "O IMPÉRIO DO GÁS DO CATAR"
Line 3 (pure white #F5F2EB): "A POTÊNCIA QUE MANDA NA ENERGIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the desert thumb of Qatar.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Península de 11.581 km² no Golfo Pérsico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the arid 11,581 km² desert peninsula jutting into the turquoise waters of the Persian Gulf.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Border vector in Bege Cartográfico (#F5F2EB) with Salwa border crossing to Saudi Arabia highlighted.
Text on screen: "O ESTADO DO CATAR // 11.581 KM²" in uppercase white Orbitron Bold.
Badge: "300 MIL CIDADÃOS NATIVOS E O MAIOR PIB PER CAPITA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot along the coastline.
NO voice, NO speech, NO music. ONLY desert wind and telemetry lock chime SFX.`
      },
      {
        t: 'O Megacampo Submarino North Field / South Pars',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Offshore cartographic bathymetry map highlighting the massive 9,700 km² gas field sitting in the Gulf waters between Qatar and Iran.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Glowing reservoir in amber (#F59E0B): "900 TRILHÕES DE PÉS CÚBICOS".
Text on screen: "NORTH FIELD // O MAIOR CAMPO DE GÁS DA TERRA" in uppercase white Montserrat Bold.
Badge: "MAIS DE 10% DE TODAS AS RESERVAS GLOBAIS COMPROVADAS" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in over the offshore field.
NO voice, NO speech, NO music. ONLY underwater sonar pulse and gas valve SFX.`
      },
      {
        t: 'A Coabitação com o Irã na Fronteira Marítima',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical dividing line splitting the underwater reservoir into North Field (Qatar) and South Pars (Iran).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dashed nautical border in Bege Cartográfico (#F5F2EB) between Doha and Tehran jurisdictions.
Text on screen: "FRONTEIRA SUBAQUÁTICA // CATAR E IRÃ" in uppercase white Orbitron Bold.
Badge: "O MESMO RESERVATÓRIO GEOLÓGICO COMPARTILHADO" in sage green (#A8C3A6).
Camera: linear lateral tracking shot along the median line.
NO voice, NO speech, NO music. ONLY maritime telemetry and radar sweep SFX.`
      },
      {
        t: 'Ras Laffan: O Maior Complexo Industrial de GNL do Planeta',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the Ras Laffan Industrial City port on the northeastern coast of Qatar with its 14 LNG mega-trains and storage tanks.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
LNG plant boundaries glowing in sage green (#A8C3A6).
Text on screen: "CIDADE INDUSTRIAL DE RAS LAFFAN // GNL" in uppercase white Montserrat Bold.
Badge: "77 MILHÕES DE TONELADAS/ANO (EXPANSÃO A 126 MI)" in gold (#F59E0B).
Camera: smooth linear zoom into the loading jetties.
NO voice, NO speech, NO music. ONLY cryogenic plant hum and flare hiss SFX.`
      },
      {
        t: 'A Tecnologia Criogênica: Resfriamento a -162°C',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D animation diagram showing methane gas being chilled to minus 162 degrees Celsius, shrinking in volume by 600 times into liquid.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Molecular compression visual from gas cloud to glowing liquid droplet.
Text on screen: "CRIOGENIA A -162°C // ENCOLHIMENTO DE 600X" in uppercase white Orbitron Bold.
Badge: "O SEGREDO QUE PERMITIU TRANSPORTAR GÁS PELOS OCEANOS" in white (#F5F2EB).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY freeze crackle and cryogenic vapor SFX.`
      },
      {
        t: 'Os Supermetaneiros da Frota Q-Max',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite perspective of giant 345-meter Q-Max LNG carriers departing Ras Laffan into the Strait of Hormuz.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Ship track lines radiating to Japan, South Korea, China, and Western Europe.
Text on screen: "FROTA Q-MAX // 266.000 M³ POR NAVIO" in uppercase white Montserrat Bold.
Badge: "ENERGIA PARA ABASTECER PAÍSES INTEIROS EM UMA ÚNICA VIAGEM" in gold (#F59E0B).
Camera: dynamic linear satellite sweep along the navigation corridor.
NO voice, NO speech, NO music. ONLY ship horn and ocean wake rumble SFX.`
      },
      {
        t: 'O Bloqueio de 2017 e o Triunfo Diplomático',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating the June 2017 land, sea, and air blockade imposed by Saudi Arabia, UAE, Bahrain, and Egypt against Qatar.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red exclusion borders around the peninsula with air corridors re-routed via Iran and Turkey.
Text on screen: "O BLOQUEIO DE 2017 // A GUERRA DIPLOMÁTICA" in uppercase white Montserrat Bold.
Badge: "O GÁS NUNCA PAROU: EXPORTAÇÕES MANTIDAS A 100%" in intense crimson red (#C8102E).
Camera: steady diagonal flyover highlighting the Salwa border.
NO voice, NO speech, NO music. ONLY alarm pulse and radio broadcast chatter SFX.`
      },
      {
        t: 'O Fundo Soberano QIA: Meio Trilhão de Dólares',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
World map animation highlighting global assets owned by the Qatar Investment Authority (QIA): London (The Shard, Harrods), Germany (Volkswagen), Paris (PSG).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Investment pins in glowing gold (#F59E0B) across global financial capitals.
Text on screen: "FUNDO SOBERANO QIA // >US$ 500 BILHÕES" in uppercase white Orbitron Bold.
Badge: "DE DOHA PARA AS MAIORES EMPRESAS E MONUMENTOS DO MUNDO" in sage green (#A8C3A6).
Camera: wide orthographic flyover from Europe to North America.
NO voice, NO speech, NO music. ONLY financial ledger chime and digital tally SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete Arabian Peninsula and Persian Gulf with Qatar glowing at its center.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the peninsula.
Text on screen: "A CAPITAL DO GÁS // O ESTADO DO CATAR" in uppercase white Orbitron Bold.
Badge: "A PENÍNSULA QUE MANDA NO TERMOSTATO DO MUNDO" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Gulf horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 156 - TSUSHIMA
  {
    num: 156,
    titulo: 'Por Que o Estreito de Tsushima É a Rota Naval Mais Vigiada do Leste Asiático Desde a Batalha de 1905?',
    roteiro: `Por que o Estreito de Tsushima é a rota naval mais vigiada do Leste Asiático desde a batalha de 1905? Com apenas cinquenta quilômetros de largura separando o Japão da costa de Busan na Coreia do Sul, este canal marítimo conecta o Mar da China Oriental ao Mar do Japão. Foi aqui, em maio de 1905, que o almirante japonês Togo destruiu a esquadra do czar russo Nicolau Segundo em vinte e quatro horas, marcando a primeira grande vitória militar asiática contra um império europeu na era moderna. Hoje, as águas de Tsushima são monitoradas por uma teia invisível de hidrofones e radares tridimensionais, rastreando submarinos da Frota Russa de Vladivostok e navios de guerra chineses que tentam cruzar para o Pacífico. Um estreito onde a história militar e a rota dos semicondutores navegam lado a lado. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the narrow waters between Busan (South Korea) and Kyushu (Japan).
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A GARGALTA NAVAL"
Line 2 (intense crimson red #C8102E): "DO ESTREITO DE TSUSHIMA"
Line 3 (pure white #F5F2EB): "A ROTA MAIS VIGIADA DA ÁSIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward Tsushima Island.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Garganta Naval de 50 km Entre Busan e Fukuoka',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view locking onto the 50 km nautical pinch point between the Korean peninsula and the Japanese home islands.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance measurement line in Bege Cartográfico (#F5F2EB): "50 KM NAVEGÁVEIS".
Text on screen: "ESTREITO DA COREIA // CANAL DE TSUSHIMA" in uppercase white Orbitron Bold.
Badge: "A PORTA ENTRE O MAR DA CHINA E O MAR DO JAPÃO" in intense crimson red (#C8102E).
Camera: dynamic linear satellite tracking shot across the strait.
NO voice, NO speech, NO music. ONLY radar telemetry lock and ocean wind SFX.`
      },
      {
        t: 'A Batalha de Tsushima de 1905: O Cruzamento do T',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical tactical tactical diagram overlay showing Admiral Togo's Japanese fleet crossing the T of the Russian Baltic Fleet on May 27, 1905.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Warship vectors in red and gold firing broadsides across the strait.
Text on screen: "BATALHA DE TSUSHIMA // 27 MAIO 1905" in uppercase white Orbitron Bold.
Badge: "21 NAVIOS RUSSOS AFUNDADOS EM 24 HORAS" in intense crimson red (#C8102E).
Camera: slow cinematic downward push-in over the tactical engagement.
NO voice, NO speech, NO music. ONLY historic naval cannon thunder and wood splinter SFX.`
      },
      {
        t: 'A Viagem de 33.000 km da Frota do Czar',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
World map animation showing the 7-month, 33,000 km voyage of the Russian fleet from the Baltic around Africa to Tsushima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Red expedition line tracing across the Atlantic and Indian oceans into the strait.
Text on screen: "A ROTA DA MORTE // 33.000 KM DESDE O BÁLTICO" in uppercase white Montserrat Bold.
Badge: "O DESASTRE MILITAR QUE PRECIPITOU A QUEDA DO CZAR" in gold (#F59E0B).
Camera: high-altitude satellite flyover following the maritime path.
NO voice, NO speech, NO music. ONLY ocean swell and compass creak SFX.`
      },
      {
        t: 'O Canal Artificial de Manzeki Escavado em 1900',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Extreme close-up satellite view of the Manzeki canal cutting Tsushima Island into two separate landmasses.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Artificial canal cut highlighted in glowing sage green (#A8C3A6).
Text on screen: "CANAL DE MANZEKI (1900) // CORTE ARTIFICIAL" in uppercase white Orbitron Bold.
Badge: "ESCAVADO PELA MARINHA JAPONESA PARA ATALHO MILITAR" in sage green (#A8C3A6).
Camera: linear descent toward the metallic bridge over the canal.
NO voice, NO speech, NO music. ONLY water rapids and metal bridge chime SFX.`
      },
      {
        t: 'A Rede de Hidrofones Submarinos Antissubmarino',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Bathymetry view showing the 90-meter shallow seabed wired with submarine acoustic detection cables (SOSUS/OP-3).
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Pulsing sonar rings tracking submerged submarine silhouettes.
Text on screen: "REDE SOSUS // VIGILÂNCIA ANTISSUBMARINO" in uppercase white Montserrat Bold.
Badge: "MONITORAMENTO DE SUBMARINOS RUSSOS E CHINESES" in gold (#F59E0B).
Camera: steady diagonal flyover at constant nautical altitude.
NO voice, NO speech, NO music. ONLY tactical sonar ping and deep water hum SFX.`
      },
      {
        t: 'A Disputa Pelas Ilhas Dokdo/Takeshima',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view zooming north of the strait onto the contested rocky islets of Dokdo / Takeshima.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Overlapping maritime boundaries in amber (#F59E0B) and red (#C8102E).
Text on screen: "DOKDO / TAKESHIMA // DISPUTA TERRITORIAL" in uppercase white Montserrat Bold.
Badge: "GUARDA COSTEIRA COREANA OCUPANDO DESDE 1954" in white (#F5F2EB).
Camera: 3D orbit around the sheer volcanic cliffs of the islets.
NO voice, NO speech, NO music. ONLY sea spray and radio surveillance chatter SFX.`
      },
      {
        t: 'O Cruzamento de Espaço Aéreo ADIZ',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical radar layout showing overlapping Air Defense Identification Zones (ADIZ) of Japan, South Korea, and China over the strait.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Radar sector sweeps with fighter jet intercept vectors.
Text on screen: "SOBREPOSIÇÃO DE ADIZ // CÉUS EM ALERTA" in uppercase white Orbitron Bold.
Badge: "INTERCEPTAÇÕES SEMANAIS DE CAÇAS F-15 E F-35" in intense crimson red (#C8102E).
Camera: orthographic aerial view looking down at flight corridors.
NO voice, NO speech, NO music. ONLY jet cockpit radar alert beep SFX.`
      },
      {
        t: 'A Rota Tecnológica dos Semicondutores e Busan',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view showing commercial container ship density between Busan (23 million TEUs) and Japanese industrial ports.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
High-tech trade vectors glowing in sage green (#A8C3A6).
Text on screen: "CORREDOR DE ALTA TECNOLOGIA // BUSAN E JAPÃO" in uppercase white Montserrat Bold.
Badge: "QUÍMICOS ESSENCIAIS PARA CHIPS DE MEMÓRIA DA SAMSUNG" in sage green (#A8C3A6).
Camera: linear satellite sweep over the bustling container terminals.
NO voice, NO speech, NO music. ONLY harbor crane hum and container lock SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete East Asian maritime crossroads from Shanghai to Vladivostok.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the Korean and Japanese coasts.
Text on screen: "A GARGALTA DO ORIENTE // ESTREITO DE TSUSHIMA" in uppercase white Orbitron Bold.
Badge: "ONDE AS MAIORES MARINHAS DO MUNDO SE CRUZAM" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing regional horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 157 - TRIPLICE FRONTEIRA AMAZONICA
  {
    num: 157,
    titulo: 'Como Três Países Sul-Americanos Convivem Sem Fronteiras Físicas no Coração da Floresta Amazônica?',
    roteiro: `Como três países sul-americanos convivem sem fronteiras físicas no coração da floresta amazônica? A mais de mil quilômetros de qualquer capital, na confluência do Solimões com o Javari, as cidades de Tabatinga no Brasil, Letícia na Colômbia e a comunidade insular de Santa Rosa no Peru formam uma das fronteiras mais pacíficas do mundo. Entre o lado brasileiro e colombiano, a divisa é apenas uma avenida urbana comum chamada Avenida Internacional. Não existem muros, cancelas ou guardas aduaneiros: moradores cruzam a rua a pé para ir à padaria ou ao trabalho, pagando indiferentemente em reais, pesos colombianos ou soles peruanos. A soberania que foi disputada em uma guerra fluvial na década de 1930 transformou-se em uma conurbação trilíngue no meio da maior floresta do planeta. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the deep Amazon Basin where Brazil, Colombia, and Peru meet.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "SEM MUROS OU CANCELAS"
Line 2 (intense crimson red #C8102E): "A TRÍPLICE FRONTEIRA AMAZÔNICA"
Line 3 (pure white #F5F2EB): "BRASIL, COLÔMBIA E PERU"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the confluence of the Solimões and Javari rivers.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric jungle rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'O Ponto Extremo no Meio da Selva Equatorial',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental scale map highlighting the extreme isolation: 1,000 km from Manaus, 1,100 km from Bogota, 2,000 km from Lima with zero highways.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Distance vectors radiating outward through the endless green canopy.
Text on screen: "A 1.000 KM DE QUALQUER ESTRADA // TABATINGA E LETÍCIA" in uppercase white Orbitron Bold.
Badge: "120.000 MORADORES CONECTADOS APENAS POR RIOS E AVIÕES" in gold (#F59E0B).
Camera: dynamic linear satellite tracking shot along the Amazon River curves.
NO voice, NO speech, NO music. ONLY jungle birds and river water splash SFX.`
      },
      {
        t: 'A Avenida da Amizade: A Linha Divisória Invisível',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution urban satellite view zooming down to street level on Avenida da Amizade / Avenida Internacional.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
A thin dashed yellow vector tracing the center of the asphalt street: "FRONTEIRA INTERNACIONAL BRASIL-COLÔMBIA".
Text on screen: "AVENIDA INTERNACIONAL // ZERO CANCELAS" in uppercase white Montserrat Bold.
Badge: "LIVRE CIRCULAÇÃO DIÁRIA DE PEDESTRES E MOTOCICLETAS" in sage green (#A8C3A6).
Camera: slow linear descent towards the road between Tabatinga and Leticia.
NO voice, NO speech, NO music. ONLY motorcycle buzz and street market chatter SFX.`
      },
      {
        t: 'A Economia Trilíngue: Real, Peso e Sol Peruano',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic animation showing three currency symbols (R$, COP, S/.) circulating side by side across store signs.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Dual language market signage in Portuguese and Spanish.
Text on screen: "ECONOMIA TRILÍNGUE // TRÊS MOEDAS" in uppercase white Orbitron Bold.
Badge: "COMÉRCIO LOCAL ACEITA REAIS, PESOS E SOLES INDISTINTAMENTE" in white (#F5F2EB).
Camera: smooth technical pan across the border shopping zone.
NO voice, NO speech, NO music. ONLY cash register ring and marketplace murmur SFX.`
      },
      {
        t: 'O Trapézio Amazônico e o Tratado Salomón-Lozano de 1922',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the geometric corridor known as the Trapecio Amazonico granted to Colombia in 1922.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Corridor outlined in bright gold (#F59E0B): "ACESSO SOBERANO AO RIO AMAZONAS".
Text on screen: "TRAPÉZIO AMAZÔNICO // TRATADO DE 1922" in uppercase white Montserrat Bold.
Badge: "COLÔMBIA GANHA SAÍDA NAVEGÁVEL PARA O ATLÂNTICO" in sage green (#A8C3A6).
Camera: linear satellite zoom out revealing the trapezoidal border shape.
NO voice, NO speech, NO music. ONLY historic document rustle and seal stamp SFX.`
      },
      {
        t: 'A Guerra de Letícia de 1932: O Conflito Peru-Colômbia',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating the September 1932 invasion of Leticia by Peruvian forces and the Colombian gunboat flotilla sailing upriver.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Gunboat icons and naval skirmish markers along the river bend.
Text on screen: "GUERRA DE LETÍCIA (1932-1933) // LIGA DAS NAÇÕES" in uppercase white Montserrat Bold.
Badge: "RESOLVIDO PELO PROTOCOLO DO RIO DE JANEIRO DE 1934" in intense crimson red (#C8102E).
Camera: dramatic lateral pan along the riverbank.
NO voice, NO speech, NO music. ONLY steamship whistle and antique artillery echo SFX.`
      },
      {
        t: 'A Ilha Fluvial de Santa Rosa de Yavarí (Peru)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite view focusing on the sediment island of Santa Rosa de Yavari in the center of the muddy Amazon River stream.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island boundary glowing with Peruvian naval post marker.
Text on screen: "SANTA ROSA DE YAVARÍ // O VÉRTICE PERUANO" in uppercase white Montserrat Bold.
Badge: "COMUNIDADE PALAFÍTICA A 10 MINUTOS DE LANCHA" in gold (#F59E0B).
Camera: low-altitude flyover above the wooden stilts and riverboats.
NO voice, NO speech, NO music. ONLY outboard motor hum and water wake SFX.`
      },
      {
        t: 'O Rio Javari e a Terra Indígena dos Povos Isolados',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Map panning south down the winding Javari River marking the border between Brazil and Peru.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Indigenous reservation polygon glowing in deep green: "TERRA INDÍGENA VALE DO JAVARI".
Text on screen: "VALE DO JAVARI // FRONTEIRA SENSÍVEL" in uppercase white Orbitron Bold.
Badge: "A MAIOR CONCENTRAÇÃO DE POVOS ISOLADOS DO PLANETA" in sage green (#A8C3A6).
Camera: steady diagonal flyover through dense jungle canopy.
NO voice, NO speech, NO music. ONLY deep rainforest nature ambience SFX.`
      },
      {
        t: 'O Povo Ticuna: Soberania Indígena Além dos Mapas',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ethnographic territory map showing ancestral settlements of the Ticuna people spread across Brazilian, Colombian, and Peruvian shores.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Traditional clan migration paths glowing across the river lines.
Text on screen: "NAÇÃO TICUNA // 60.000 INDÍGENAS" in uppercase white Montserrat Bold.
Badge: "FAMÍLIAS ANCESTRAIS COM TRÊS NACIONALIDADES" in white (#F5F2EB).
Camera: wide orthographic flyover displaying the tri-border wetlands.
NO voice, NO speech, NO music. ONLY indigenous wooden flute and paddle splash SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the triple confluence where the Solimões, Javari, and Amazon rivers meet under equatorial clouds.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the three sovereign territories.
Text on screen: "TRÍPLICE FRONTEIRA AMAZÔNICA // BRASIL, COLÔMBIA, PERU" in uppercase white Orbitron Bold.
Badge: "A CIDADE TRIPLA QUE VIVE SEM MUROS NA SELVA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing endless Amazon green horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 158 - NOVA GUINE MERIDIANO 141
  {
    num: 158,
    titulo: 'Por Que Uma Linha Reta no Meio da Selva Divide a Segunda Maior Ilha do Planeta?',
    roteiro: `Por que uma linha reta no meio da selva divide a segunda maior ilha do planeta? Com quase oitocentos mil quilômetros quadrados, a Nova Guiné é a maior ilha tropical da Terra, abrigando mais de mil tribos e picos nevados com geleiras equatoriais a quase cinco mil metros de altitude. No entanto, o mapa político da ilha é cortado ao meio por uma linha reta artificial de oitocentos e vinte quilômetros ao longo do meridiano cento e quarenta e um leste. Essa cicatriz nasceu em 1828, quando a Holanda proclamou posse sobre a metade ocidental, enquanto britânicos e alemães partilharam o leste. A única curva da fronteira foi negociada em 1895 para contornar a curva do Rio Fly e garantir a navegação britânica. Hoje, a linha divide a soberania da Indonésia da Papua-Nova Guiné em meio a florestas intransponíveis. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the bird-shaped landmass of New Guinea north of Australia.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "UMA LINHA RETA NA SELVA"
Line 2 (intense crimson red #C8102E): "A SEGUNDA MAIOR ILHA DO MUNDO"
Line 3 (pure white #F5F2EB): "INDONÉSIA E PAPUA-NOVA GUINÉ"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the 141st meridian line.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Dimensão Colossal de 785.753 km²',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Continental scale view showcasing New Guinea's true size: second largest island on Earth, exceeding Turkey or France in land area.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Island boundary glowing in Bege Cartográfico (#F5F2EB): "785.753 KM²".
Text on screen: "ILHA DE NOVA GUINÉ // 785.753 KM²" in uppercase white Orbitron Bold.
Badge: "SEGUNDA MAIOR DO PLANETA, ATRÁS APENAS DA GROENLÂNDIA" in gold (#F59E0B).
Camera: slow linear satellite tracking shot along the central mountain spine.
NO voice, NO speech, NO music. ONLY mountain wind and digital metric chime SFX.`
      },
      {
        t: 'O Meridiano 141° Leste: A Régua Colonial de 1828',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
A sharp, glowing red 2px vector line cutting 820 km from north to south along the 141° East meridian.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Meridian coordinates labeled in JetBrains Mono: "141°00'00"E".
Text on screen: "MERIDIANO 141° LESTE // A RÉGUA COLONIAL" in uppercase white Montserrat Bold.
Badge: "820 KM DE LINHA RETA TRAÇADA POR BUROCRATAS NA EUROPA" in intense crimson red (#C8102E).
Camera: smooth linear zoom directly along the geometric border.
NO voice, NO speech, NO music. ONLY surveyor laser tone and metallic ruler snap SFX.`
      },
      {
        t: 'A Partilha Tripla: Holanda, Grã-Bretanha e Alemanha (1884)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical map overlay displaying the 1884 division: Dutch New Guinea in the west, British Papua in the southeast, German Kaiser-Wilhelmsland in the northeast.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Imperial colonial color blocks labeled with historical crests.
Text on screen: "A PARTILHA DE 1884 // TRÊS IMPÉRIOS" in uppercase white Orbitron Bold.
Badge: "HOLANDESES, BRITÂNICOS E ALEMÃES DIVIDEM A SELVA" in gold (#F59E0B).
Camera: dynamic linear satellite sweep comparing the colonial halves.
NO voice, NO speech, NO music. ONLY historical parchment rustle and military drum SFX.`
      },
      {
        t: 'A Curva do Rio Fly e o Tratado de Haia de 1895',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite zoom onto the 'Fly River bulge' — the single curved deviation where the border follows the meandering river.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
River bend highlighted in glowing sage green (#A8C3A6).
Text on screen: "A CURVA DO RIO FLY // TRATADO DE HAIA 1895" in uppercase white Montserrat Bold.
Badge: "A ÚNICA CURVA NEGOCIADA PARA GARANTIR NAVEGAÇÃO BRITÂNICA" in sage green (#A8C3A6).
Camera: slow cinematic downward push-in over the muddy river loops.
NO voice, NO speech, NO music. ONLY river current swirl and pen signing SFX.`
      },
      {
        t: 'Puncak Jaya: Geleiras Tropicais a 4.884 Metros de Altitude',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Dramatic 3D satellite view of Puncak Jaya (Carstensz Pyramid) with its vanishing equatorial ice caps.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Elevation marker: "▲ 4.884 M // MAIOR PICO DA OCEANIA".
Text on screen: "PUNCAK JAYA // O TETO DA ILHA" in uppercase white Montserrat Bold.
Badge: "GELEIRAS EQUATORIAIS DESAPARECENDO SOB O AQUECIMENTO" in white (#F5F2EB).
Camera: 3D orbit around the sheer limestone pyramid.
NO voice, NO speech, NO music. ONLY high-altitude freezing wind gale SFX.`
      },
      {
        t: 'A Megamina de Grasberg: Ouro e Cobre Bilionários',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Satellite zoom into the colossal open-pit mine of Grasberg, just kilometers from the glacial summits.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Mine pit terraces highlighted in glowing gold (#F59E0B).
Text on screen: "MINA DE GRASBERG // A MAIOR DE OURO DO MUNDO" in uppercase white Orbitron Bold.
Badge: "BILHÕES DE DÓLARES EM COBRE E OURO NO MEIO DA FLORESTA" in gold (#F59E0B).
Camera: steep top-down descent into the mining pit.
NO voice, NO speech, NO music. ONLY heavy industrial machinery rumble SFX.`
      },
      {
        t: 'O Conflito de Papua Ocidental e a Guerrilha OPM',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical map illustrating border crossings and dense rainforest patrol zones between Indonesian Papua and PNG.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Refugee movement arrows and military post icons.
Text on screen: "TENSÃO FRONTEIRIÇA // A GUERRILHA DA OPM" in uppercase white Montserrat Bold.
Badge: "DISPUTA PELA AUTONOMIA E DIREITOS INDÍGENAS PAPUAS" in intense crimson red (#C8102E).
Camera: steady diagonal flyover through cloud-shrouded jungle valleys.
NO voice, NO speech, NO music. ONLY radio static and distant helicopter rotor SFX.`
      },
      {
        t: 'O Único Posto Rodoviário: Skouw e Wutung na Costa Norte',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Close satellite view of the coastal checkpoint of Skouw (Indonesia) and Wutung (PNG), the only paved road crossing on the entire 820 km border.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Road crossing vector in Bege Cartográfico (#F5F2EB).
Text on screen: "POSTO SKOUW / WUTUNG // O ÚNICO ASFALTO" in uppercase white Montserrat Bold.
Badge: "OS OUTROS 800 KM SÃO SELVA ABSOLUTAMENTE INTRANSPONÍVEL" in sage green (#A8C3A6).
Camera: slow linear descent towards the border gate.
NO voice, NO speech, NO music. ONLY ocean surf and border gate bell chime SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the complete New Guinea island floating between the Pacific Ocean and the Coral Sea.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector border in Bege Cartográfico (#F5F2EB, 2px) tracing the 141° meridian line.
Text on screen: "A ILHA DIVIDIDA // NOVA GUINÉ" in uppercase white Orbitron Bold.
Badge: "O MAIOR MOSAICO DE LÍNGUAS E FLORESTAS DO PLANETA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing equatorial Pacific horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  },

  // VIDEO 159 - BAKASSI
  {
    num: 159,
    titulo: 'Por Que a Nigéria Entregou Uma Península Petrolífera Bilionária Para Camarões Sem Disparar Um Tiro?',
    roteiro: `Por que a Nigéria entregou uma península petrolífera bilionária para Camarões sem disparar um tiro? No Golfo da Guiné, a Península de Bakassi cobre mil quilômetros quadrados de manguezais ricos em petróleo e pesqueiros estratégicos. Durante décadas, o território foi ocupado militarmente pela Nigéria, e noventa por cento de seus trezentos mil moradores eram cidadãos nigerianos. Em 1994, Camarões decidiu processar a Nigéria na Corte Internacional de Justiça de Haia, resgatando um tratado colonial assinado entre britânicos e alemães em 1913. Em 2002, para surpresa do continente, o tribunal deu ganho de causa a Camarões. Em vez de iniciar uma guerra sangrenta, a Nigéria assinou o Acordo de Greentree em 2006 sob mediação da ONU e retirou todas as suas tropas, em um dos raros exemplos de respeito pacífico ao direito internacional. O próximo vídeo de mapa pode ser o seu. Comece pelo link do perfil.`,
    prompts: [
      {
        t: 'Abertura e Gancho Cartográfico',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into the Gulf of Guinea where Nigeria meets Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.
From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text is perfectly balanced in the geometric dead center of the screen.
Line 1 (pure white #F5F2EB): "A PENÍNSULA DO PETRÓLEO"
Line 2 (intense crimson red #C8102E): "POR QUE A NIGÉRIA CEDEU BAKASSI?"
Line 3 (pure white #F5F2EB): "A DECISÃO HISTÓRICA DE HAIA"
Font Orbitron Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.
Subtle graduated cartographic frame corners (map-frame-corner.svg) framing the screen edges.
Camera motion: smooth, slow, linear orthographic push-in toward the Bakassi mangrove delta.
NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.`
      },
      {
        t: 'A Península de Bakassi: 1.000 km² de Mangues e Petróleo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
High-resolution satellite view outlining the 1,000 km² maze of mangrove channels and islands in the Rio del Rey estuary.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Peninsula boundary highlighted in glowing amber (#F59E0B): "1.000 KM² // PETRÓLEO E PESCA".
Text on screen: "PENÍNSULA DE BAKASSI // GOLFO DA GUINÉ" in uppercase white Orbitron Bold.
Badge: "300 MIL MORADORES (90% DE ETNIA NIGERIANA)" in intense crimson red (#C8102E).
Camera: slow linear satellite tracking shot across the coastal wetlands.
NO voice, NO speech, NO music. ONLY tidal water surge and telemetry lock chime SFX.`
      },
      {
        t: 'O Tratado Anglo-Germânico de 1913',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Historical colonial map overlay showing the March 1913 treaty boundary placing Bakassi inside the German colony of Kamerun.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Colonial demarcation line glowing in Bege Cartográfico (#F5F2EB).
Text on screen: "TRATADO DE 1913 // REINO UNIDO E ALEMANHA" in uppercase white Montserrat Bold.
Badge: "O DOCUMENTO COLONIAL QUE DECIDIU O DESTINO DA PENÍNSULA" in gold (#F59E0B).
Camera: smooth linear zoom into the Rio del Rey river mouth.
NO voice, NO speech, NO music. ONLY historical quill scratch and wax seal chime SFX.`
      },
      {
        t: 'A Ocupação Militar Nigeriana de 1993',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Tactical military map showing Nigerian army garrisons landing in force in December 1993 under General Sani Abacha.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Military deployment arrows in bright red (#C8102E) across the peninsula.
Text on screen: "OCUPAÇÃO MILITAR (1993) // GENERAL ABACHA" in uppercase white Orbitron Bold.
Badge: "POSTOS FORTIFICADOS E ADMINISTRAÇÃO CIVIL NIGERIANA" in intense crimson red (#C8102E).
Camera: low-altitude flyover above mangrove channels and barracks.
NO voice, NO speech, NO music. ONLY patrol boat engine and military boots SFX.`
      },
      {
        t: 'O Processo em Haia: Camarões Aciona a Corte Internacional',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Graphic visualization of the International Court of Justice (ICJ) in The Hague receiving the formal legal case filed by Cameroon in March 1994.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Legal boundary vector radiating from Lake Chad down to the Atlantic Ocean.
Text on screen: "CORTE DE HAIA // CAMARÕES VS. NIGÉRIA" in uppercase white Montserrat Bold.
Badge: "OITO ANOS DE DISPUTA JURÍDICA E MAPAS HISTÓRICOS" in sage green (#A8C3A6).
Camera: technical orthographic push-in.
NO voice, NO speech, NO music. ONLY courtroom gavel strike and page turn SFX.`
      },
      {
        t: 'A Sentença Histórica de 10 de Outubro de 2002',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
3D animation showing the ICJ verdict: by 13 votes to 3, the court awards complete sovereignty over Bakassi to Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Sovereignty transfer vectors shifting across the peninsula.
Text on screen: "SENTENÇA DA CIJ // 10 OUTUBRO 2002" in uppercase white Orbitron Bold.
Badge: "TRIUNFO DO PRINCÍPIO DO UTI POSSIDETIS JURIS" in gold (#F59E0B).
Camera: steady diagonal satellite sweep over the disputed border.
NO voice, NO speech, NO music. ONLY legal gavel echo and dramatic transition tone SFX.`
      },
      {
        t: 'A Mediação de Kofi Annan e o Acordo de Greentree (2006)',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Diplomatic layout showing UN Secretary-General Kofi Annan mediating between Nigerian President Obasanjo and Cameroonian President Biya in New York.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Signature graphic with UN seal glowing in white (#F5F2EB).
Text on screen: "ACORDO DE GREENTREE // 12 JUNHO 2006" in uppercase white Montserrat Bold.
Badge: "COMPROMISSO HISTÓRICO DE DESOCUPAÇÃO PACÍFICA DE TROPAS" in sage green (#A8C3A6).
Camera: smooth linear zoom into the treaty text.
NO voice, NO speech, NO music. ONLY fountain pen signature and camera flash chime SFX.`
      },
      {
        t: 'A Transferência Oficial de Soberania em 2008',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Ceremonial satellite view of Calabar / Bakassi base where the Nigerian flag was lowered and the Cameroonian flag was raised on August 14, 2008.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Flag transition vectors in green, white, and red.
Text on screen: "14 AGOSTO 2008 // TRANSFERÊNCIA PACÍFICA" in uppercase white Orbitron Bold.
Badge: "A BANDEIRA CAMARONESA HASTEADA SEM DISPARAR UM TIRO" in sage green (#A8C3A6).
Camera: slow linear descent towards the border post.
NO voice, NO speech, NO music. ONLY bugle call echo and crowd applause SFX.`
      },
      {
        t: 'O Novo Assentamento de Bakassi em Cross River',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Regional map panning to Cross River State in Nigeria showing the New Bakassi resettlement area built for returning fishermen.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Resettlement town polygon glowing in amber (#F59E0B).
Text on screen: "NOVO ASSENTAMENTO // REFUGIADOS DE RETORNO" in uppercase white Montserrat Bold.
Badge: "DEZENAS DE MILHARES DE PESCADORES REASSENTADOS" in white (#F5F2EB).
Camera: linear satellite sweep over the coastal towns.
NO voice, NO speech, NO music. ONLY riverboat engine and coastal breeze SFX.`
      },
      {
        t: 'Síntese Estratégica e Assinatura VitaleGeo',
        desc: `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.
Wide 4K satellite view of the Gulf of Guinea showing the peaceful border between Nigeria and Cameroon.
Geographically locked terrain coordinates, rigidly stable coastlines, UN compliant borders, absolutely NO landmass morphing, NO melting shores, NO fictional islands.
Crisp 2D vector borders in Bege Cartográfico (#F5F2EB, 2px) tracing the coastline.
Text on screen: "A LIÇÃO DE BAKASSI // DIREITO INTERNACIONAL" in uppercase white Orbitron Bold.
Badge: "QUANDO A DIPLOMACIA VENCEU A GUERRA NA ÁFRICA" in white (#F5F2EB).
Assinatura institucional de encerramento: Símbolo Globo-G Geodésico do VitaleGeo (vitalegeo-symbol-primary.svg monocromático Bege #F5F2EB com opacidade 70%) e wordmark "VITALEGEO" em Orbitron no quadrante inferior central.
Camera: gentle pull-back revealing Atlantic horizon.
NO voice, NO speech, NO music. ONLY deep transition whoosh and tactical data resolve chime.`
      }
    ]
  }
];

function buildVideoMarkdown(v) {
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n${v.roteiro}\n\n---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  let pCount = 0;
  for (const p of v.prompts) {
    pCount++;
    md += `#### Prompt ${pCount} — ${p.t} (4s)\n\`\`\`text\n${p.desc}\n\`\`\`\n\n`;
  }

  md += `---\n\n### 3. Legenda\n\n${v.titulo}\n\n#geografia #geopolitica #mapas\n`;
  return md;
}

// 1. Criar arquivos de roteiro
console.log('Gerando roteiros de vídeo...');
for (const v of videos) {
  const filePath = path.join(roteirosDir, `Video ${v.num}.md`);
  fs.writeFileSync(filePath, buildVideoMarkdown(v), 'utf8');
  console.log(`✓ Video ${v.num}.md gerado com sucesso (${fs.statSync(filePath).size} bytes)`);
}

// 2. Atualizar Índice.md
console.log('Atualizando Índice.md...');
const indicePath = path.join(roteirosDir, 'Índice.md');
let indiceContent = fs.readFileSync(indicePath, 'utf8');

// Adicionar entradas no índice antes de "---" da seção 3
let novasLinhasIndice = '';
for (const v of videos) {
  novasLinhasIndice += `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |\n`;
}

// Encontrar onde inserir (apos o ultimo item da tabela de videos)
if (indiceContent.includes('| 127 |')) {
  // Encontrar a linha de 127 ou similar
  indiceContent = indiceContent.replace(/(| 127 \|[^\n]+\n)/, `$1${novasLinhasIndice}`);
} else if (indiceContent.includes('---')) {
  indiceContent = indiceContent.replace('\n---\n\n## 🛠️ 3.', `\n${novasLinhasIndice}\n---\n\n## 🛠️ 3.`);
}

fs.writeFileSync(indicePath, indiceContent, 'utf8');
console.log('✓ Índice.md atualizado com os novos roteiros!');
