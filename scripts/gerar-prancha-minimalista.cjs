const fs = require('fs');
const path = require('path');

const globeSvgContent = fs.readFileSync('D:/Dev/vitale-geo/public/brand/shapes/globe-grid-minimal.svg', 'utf8')
  .replace(/<\?xml.*?\?>/g, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '');

const ripplesSvgContent = fs.readFileSync('D:/Dev/vitale-geo/public/brand/shapes/topo-ripples-corner.svg', 'utf8')
  .replace(/<\?xml.*?\?>/g, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '');

const compassSvgContent = fs.readFileSync('D:/Dev/vitale-geo/public/brand/shapes/compass-minimal.svg', 'utf8')
  .replace(/<\?xml.*?\?>/g, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>/, '');

const prancha = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 780" width="1500" height="780" style="background:#F5F2EB;">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&amp;family=Montserrat:wght@400;600;700&amp;family=JetBrains+Mono:wght@400;600&amp;display=swap');
      .title-orbitron { font-family: 'Orbitron', sans-serif; font-weight: 900; fill: #0A192F; }
      .label-mono { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: #53647C; font-weight: 600; letter-spacing: 1.5px; }
      .desc-text { font-family: 'Montserrat', sans-serif; font-size: 12px; fill: #1F334E; line-height: 1.4; }
      .card-bg { fill: #FFFFFF; stroke: rgba(10, 25, 47, 0.12); stroke-width: 1; rx: 16px; }
    </style>
  </defs>

  <!-- Cabeçalho da Prancha -->
  <g transform="translate(60, 45)">
    <text x="0" y="24" class="label-mono" fill="#C8102E">VITALEGEO // TRÍADE MINIMALISTA OFICIAL</text>
    <text x="0" y="60" class="title-orbitron" font-size="30" letter-spacing="2">SHAPES GEOGRÁFICOS DE CANTO &amp; BÚSSOLA</text>
    <text x="0" y="86" font-family="'Montserrat', sans-serif" font-size="14" fill="#53647C">
      Instrumentos vetoriais puros, sem escala, projetados para sangrar elegantemente pelas bordas da tela.
    </text>
  </g>

  <!-- CARD 1: GLOBO GEOMÉTRICO QUADRICULADO -->
  <g transform="translate(60, 160)">
    <rect width="430" height="560" class="card-bg" />
    <!-- Container com overflow simulado mostrando o bleed de canto -->
    <g transform="translate(20, 20)">
      <rect width="390" height="340" fill="#FAF8F3" stroke="rgba(10, 25, 47, 0.08)" rx="12" />
      <g clip-path="url(#clip-c1)">
        <clipPath id="clip-c1">
          <rect width="390" height="340" rx="12" />
        </clipPath>
        <!-- Globo entrando pelo canto superior direito -->
        <g transform="translate(140, -40)">
          <svg viewBox="0 0 400 400" width="340" height="340">
            ${globeSvgContent}
          </svg>
        </g>
      </g>
    </g>
    <!-- Metadados -->
    <g transform="translate(35, 395)">
      <text x="0" y="0" class="label-mono" fill="#C8102E">SHAPE 01 // CANTO &amp; WIREFRAME</text>
      <text x="0" y="26" class="title-orbitron" font-size="17">GLOBO QUADRICULADO</text>
      <text x="0" y="52" class="desc-text">
        <tspan x="0" dy="0">Wireframe geodésico ortográfico com inclinação</tspan>
        <tspan x="0" dy="18">axial de 23.5°. Desenhado para ancorar nos cantos</tspan>
        <tspan x="0" dy="18">da tela com retícula ortogonal límpida.</tspan>
      </text>
      <rect x="0" y="98" width="180" height="26" rx="6" fill="rgba(10, 25, 47, 0.04)" stroke="rgba(10, 25, 47, 0.1)" />
      <text x="10" y="115" class="label-mono" font-size="10">globe-grid-minimal.svg</text>
    </g>
  </g>

  <!-- CARD 2: CÍRCULOS TOPOGRÁFICOS CONTÍNUOS (SEM INÍCIO NEM FIM) -->
  <g transform="translate(535, 160)">
    <rect width="430" height="560" class="card-bg" />
    <g transform="translate(20, 20)">
      <rect width="390" height="340" fill="#FAF8F3" stroke="rgba(10, 25, 47, 0.08)" rx="12" />
      <g clip-path="url(#clip-c2)">
        <clipPath id="clip-c2">
          <rect width="390" height="340" rx="12" />
        </clipPath>
        <!-- Círculos topográficos contínuos fluindo pelo canto -->
        <g transform="translate(0, 0)">
          <svg viewBox="0 0 500 500" width="390" height="340">
            ${ripplesSvgContent}
          </svg>
        </g>
      </g>
    </g>
    <g transform="translate(35, 395)">
      <text x="0" y="0" class="label-mono" fill="#A8C3A6">SHAPE 02 // RELEVO CONTÍNUO</text>
      <text x="0" y="26" class="title-orbitron" font-size="17">ONDAS TOPOGRÁFICAS</text>
      <text x="0" y="52" class="desc-text">
        <tspan x="0" dy="0">Anéis harmônicos em Verde Sálvia (#A8C3A6).</tspan>
        <tspan x="0" dy="18">Sem início e sem fim: cruzam a tela de borda a borda</tspan>
        <tspan x="0" dy="18">gerando relevo sem nós isolados ou poluição.</tspan>
      </text>
      <rect x="0" y="98" width="190" height="26" rx="6" fill="rgba(10, 25, 47, 0.04)" stroke="rgba(10, 25, 47, 0.1)" />
      <text x="10" y="115" class="label-mono" font-size="10">topo-ripples-corner.svg</text>
    </g>
  </g>

  <!-- CARD 3: BÚSSOLA ULTRA-MINIMALISTA -->
  <g transform="translate(1010, 160)">
    <rect width="430" height="560" class="card-bg" />
    <g transform="translate(20, 20)">
      <rect width="390" height="340" fill="#FAF8F3" stroke="rgba(10, 25, 47, 0.08)" rx="12" />
      <!-- Bússola centralizada com proporções precisas -->
      <g transform="translate(105, 75)">
        <svg viewBox="0 0 120 120" width="180" height="180">
          ${compassSvgContent}
        </svg>
      </g>
    </g>
    <g transform="translate(35, 395)">
      <text x="0" y="0" class="label-mono" fill="#C8102E">SHAPE 03 // ALTA PRECISÃO</text>
      <text x="0" y="26" class="title-orbitron" font-size="17">BÚSSOLA MINIMALISTA</text>
      <text x="0" y="52" class="desc-text">
        <tspan x="0" dy="0">Anel fino com 4 ticks cardinais e agulha afilada.</tspan>
        <tspan x="0" dy="18">Ponta Norte em Vermelho (#C8102E), Sul translúcido</tspan>
        <tspan x="0" dy="18">e 'N' em Orbitron. Zero clichês náuticos.</tspan>
      </text>
      <rect x="0" y="98" width="170" height="26" rx="6" fill="rgba(10, 25, 47, 0.04)" stroke="rgba(10, 25, 47, 0.1)" />
      <text x="10" y="115" class="label-mono" font-size="10">compass-minimal.svg</text>
    </g>
  </g>
</svg>`;

const outputPath = 'd:/Obsidian/Vida nova/design/vitalegeo/prancha-shapes-minimalistas.svg';
fs.writeFileSync(outputPath, prancha, 'utf8');
console.log('✅ Prancha de shapes minimalistas gerada em:', outputPath);
