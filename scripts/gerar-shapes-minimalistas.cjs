const fs = require('fs');
const path = require('path');

// 1. GLOBO GEOMÉTRICO QUADRICULADO (Wireframe Geodésico Minimalista)
function generateGlobeGridSvg() {
  const size = 400;
  const cx = 200;
  const cy = 200;
  const R = 175;
  const tilt = 23.5 * Math.PI / 180; // inclinação axial de 23.5°
  const cosT = Math.cos(tilt);
  const sinT = Math.sin(tilt);

  let paths = [];

  // Função de projeção ortográfica 3D -> 2D com rotação axial
  function project(latDeg, lonDeg) {
    const lat = latDeg * Math.PI / 180;
    const lon = lonDeg * Math.PI / 180;
    const x3 = Math.cos(lat) * Math.sin(lon);
    const y3 = Math.sin(lat);
    const z3 = Math.cos(lat) * Math.cos(lon);

    // Rotação em torno do eixo X (tilt)
    const yRot = y3 * cosT - z3 * sinT;
    const zRot = y3 * sinT + z3 * cosT;
    const xRot = x3;

    return {
      x: cx + R * xRot,
      y: cy - R * yRot,
      visible: zRot >= -0.01 // hemisfério visível
    };
  }

  // Paralelos (Latitudes) a cada 15 graus: -75° a +75°
  const latitudes = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];
  latitudes.forEach(lat => {
    let d = '';
    let inPath = false;
    for (let lon = -90; lon <= 90; lon += 2) {
      const p = project(lat, lon);
      if (p.visible) {
        if (!inPath) {
          d += `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
          inPath = true;
        } else {
          d += ` L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
        }
      } else {
        inPath = false;
      }
    }
    const isEquator = lat === 0;
    if (d) {
      paths.push(`<path d="${d}" fill="none" stroke="#0A192F" stroke-width="${isEquator ? '1.2' : '0.75'}" stroke-opacity="${isEquator ? '0.75' : '0.4'}" />`);
    }
  });

  // Meridianos (Longitudes) a cada 15 graus: -75° a +75°
  const longitudes = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];
  longitudes.forEach(lon => {
    let d = '';
    let inPath = false;
    for (let lat = -90; lat <= 90; lat += 2) {
      const p = project(lat, lon);
      if (p.visible) {
        if (!inPath) {
          d += `M ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
          inPath = true;
        } else {
          d += ` L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
        }
      } else {
        inPath = false;
      }
    }
    const isPrime = lon === 0;
    if (d) {
      paths.push(`<path d="${d}" fill="none" stroke="#0A192F" stroke-width="${isPrime ? '1.2' : '0.75'}" stroke-opacity="${isPrime ? '0.75' : '0.4'}" />`);
    }
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="100%" height="100%" fill="none">
  <!-- VitaleGeo - Globo Geométrico Quadriculado Minimalista -->
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#0A192F" stroke-width="1.3" stroke-opacity="0.85" />
  ${paths.join('\n  ')}
  <!-- Eixo Polar Minimalista Sutil -->
  <line x1="${(cx - R * 1.08 * sinT).toFixed(2)}" y1="${(cy - R * 1.08 * cosT).toFixed(2)}" x2="${(cx + R * 1.08 * sinT).toFixed(2)}" y2="${(cy + R * 1.08 * cosT).toFixed(2)}" stroke="#C8102E" stroke-width="1" stroke-dasharray="3 3" stroke-opacity="0.55" />
</svg>`;
}

// 2. SHAPES TOPOGRÁFICOS: CÍRCULOS CONTÍNUOS QUE ENTRAM PELOS CANTOS (SEM INÍCIO NEM FIM)
function generateTopoRipplesSvg() {
  const size = 500;
  // Centro projetado no canto superior direito (500, 0)
  const cx = 500;
  const cy = 0;
  
  // Raios concêntricos harmônicos que cruzam toda a tela
  const radii = [60, 120, 180, 250, 320, 400, 480, 570, 660, 760, 870];
  
  let rings = [];
  radii.forEach((r, idx) => {
    const isMajor = idx % 3 === 0;
    rings.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#A8C3A6" stroke-width="${isMajor ? '1.2' : '0.75'}" stroke-opacity="${isMajor ? '0.75' : '0.4'}" />`);
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="100%" height="100%" fill="none">
  <!-- VitaleGeo - Círculos Topográficos Contínuos de Canto (Sem Início, Sem Fim) -->
  ${rings.join('\n  ')}
</svg>`;
}

// 3. BÚSSOLA ULTRA-MINIMALISTA
function generateCompassMinimalSvg() {
  const size = 120;
  const cx = 60;
  const cy = 60;
  const r = 50;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="100%" height="100%" fill="none">
  <!-- VitaleGeo - Bússola Minimalista Precisa -->
  <!-- Anel Externo Fino -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#0A192F" stroke-width="1.2" stroke-opacity="0.6" />
  <circle cx="${cx}" cy="${cy}" r="${r - 8}" fill="none" stroke="#0A192F" stroke-width="0.6" stroke-opacity="0.2" stroke-dasharray="2 4" />
  
  <!-- 4 Ticks Cardinais Precisos -->
  <line x1="${cx}" y1="${cy - r}" x2="${cx}" y2="${cy - r + 7}" stroke="#C8102E" stroke-width="1.8" />
  <line x1="${cx}" y1="${cy + r - 6}" x2="${cx}" y2="${cy + r}" stroke="#0A192F" stroke-width="1" stroke-opacity="0.5" />
  <line x1="${cx - r}" y1="${cy}" x2="${cx - r + 6}" y2="${cy}" stroke="#0A192F" stroke-width="1" stroke-opacity="0.5" />
  <line x1="${cx + r - 6}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#0A192F" stroke-width="1" stroke-opacity="0.5" />

  <!-- Indicador 'N' em Orbitron -->
  <text x="${cx}" y="${cy - r + 19}" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="9" font-weight="700" fill="#C8102E" letter-spacing="1">N</text>

  <!-- Agulha Minimalista Precisa -->
  <!-- Ponta Norte (Vermelho) -->
  <polygon points="${cx},${cy - 27} ${cx - 3.5},${cy} ${cx + 3.5},${cy}" fill="#C8102E" />
  <!-- Ponta Sul (Navy Translúcido) -->
  <polygon points="${cx},${cy + 27} ${cx - 3.5},${cy} ${cx + 3.5},${cy}" fill="#0A192F" fill-opacity="0.25" />
  
  <!-- Pivot Central -->
  <circle cx="${cx}" cy="${cy}" r="2.5" fill="#0A192F" />
  <circle cx="${cx}" cy="${cy}" r="1" fill="#F5F2EB" />
</svg>`;
}

// 4. Salvar arquivos
const brandShapesDir = path.join('D:', 'Dev', 'vitale-geo', 'public', 'brand', 'shapes');
const vaultShapesDir = path.join('d:', 'Obsidian', 'Vida nova', 'design', 'vitalegeo', 'shapes');

[brandShapesDir, vaultShapesDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const globeSvg = generateGlobeGridSvg();
const topoRipplesSvg = generateTopoRipplesSvg();
const compassSvg = generateCompassMinimalSvg();

fs.writeFileSync(path.join(brandShapesDir, 'globe-grid-minimal.svg'), globeSvg);
fs.writeFileSync(path.join(vaultShapesDir, 'globe-grid-minimal.svg'), globeSvg);

fs.writeFileSync(path.join(brandShapesDir, 'topo-ripples-corner.svg'), topoRipplesSvg);
fs.writeFileSync(path.join(vaultShapesDir, 'topo-ripples-corner.svg'), topoRipplesSvg);

fs.writeFileSync(path.join(brandShapesDir, 'compass-minimal.svg'), compassSvg);
fs.writeFileSync(path.join(vaultShapesDir, 'compass-minimal.svg'), compassSvg);

console.log('✅ Shapes minimalistas gerados com sucesso!');
