import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Sincronizar ferramentas/que-horas-sao para public/ferramentas/que-horas-sao
const srcQueHoras = path.join(PASTA_RAIZ, 'ferramentas/que-horas-sao');
const destQueHoras = path.join(PASTA_RAIZ, 'public/ferramentas/que-horas-sao');
copyDirRecursive(srcQueHoras, destQueHoras);
console.log('✅ public/ferramentas/que-horas-sao sincronizado!');

// 2. Sincronizar SVG para public/assets/img/ferramentas/
const srcSvg = path.join(PASTA_RAIZ, 'assets/img/ferramentas/que-horas-sao.svg');
const destSvg = path.join(PASTA_RAIZ, 'public/assets/img/ferramentas/que-horas-sao.svg');
fs.copyFileSync(srcSvg, destSvg);
console.log('✅ public/assets/img/ferramentas/que-horas-sao.svg sincronizado!');

// 3. Sincronizar calculadora-fuso/index.html e horarios-russia/index.html
const fusoRoot = path.join(PASTA_RAIZ, 'ferramentas/calculadora-fuso/index.html');
const fusoPub = path.join(PASTA_RAIZ, 'public/ferramentas/calculadora-fuso/index.html');
if (fs.existsSync(fusoRoot) && fs.existsSync(path.dirname(fusoPub))) {
  fs.copyFileSync(fusoRoot, fusoPub);
  console.log('✅ public/ferramentas/calculadora-fuso/index.html sincronizado!');
}

const russiaRoot = path.join(PASTA_RAIZ, 'ferramentas/horarios-russia/index.html');
const russiaPub = path.join(PASTA_RAIZ, 'public/ferramentas/horarios-russia/index.html');
if (fs.existsSync(russiaRoot) && fs.existsSync(path.dirname(russiaPub))) {
  fs.copyFileSync(russiaRoot, russiaPub);
  console.log('✅ public/ferramentas/horarios-russia/index.html sincronizado!');
}

// 4. Sincronizar assets/js/tools.js para public/assets/js/tools.js se existir
const toolsJsRoot = path.join(PASTA_RAIZ, 'assets/js/tools.js');
const toolsJsPub = path.join(PASTA_RAIZ, 'public/assets/js/tools.js');
if (fs.existsSync(toolsJsRoot) && fs.existsSync(path.dirname(toolsJsPub))) {
  fs.copyFileSync(toolsJsRoot, toolsJsPub);
  console.log('✅ public/assets/js/tools.js sincronizado!');
}
