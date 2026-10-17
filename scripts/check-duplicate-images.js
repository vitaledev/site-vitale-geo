import fs from 'node:fs';
import path from 'node:path';

// 1. Verificar URLs repetidas em posts.js
const postsContent = fs.readFileSync('assets/js/posts.js', 'utf-8');
const matches = [...postsContent.matchAll(/titulo:\s*"([^"]+)",[\s\S]*?img:\s*"([^"]+)"/g)];
const urlMap = {};
for (const [_, titulo, img] of matches) {
  if (!urlMap[img]) urlMap[img] = [];
  urlMap[img].push(titulo);
}

console.log('=== IMAGENS REPETIDAS EM POSTS DIFERENTES (posts.js) ===');
let foundDuplicateUrl = false;
for (const [img, titles] of Object.entries(urlMap)) {
  if (titles.length > 1) {
    foundDuplicateUrl = true;
    console.log(`URL: ${img}`);
    titles.forEach(t => console.log(`  - ${t}`));
  }
}
if (!foundDuplicateUrl) {
  console.log('Nenhuma URL repetida encontrada em posts.js.');
}

// 2. Verificar tags <img> ou figuras duplicadas dentro do corpo dos .md em src/content/blog/
console.log('\n=== POSTS COM <img OU FIGURA NO CORPO DO MARKDOWN (src/content/blog) ===');
const blogDir = 'src/content/blog';
const mdFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
let duplicateBodyCount = 0;
for (const f of mdFiles) {
  const content = fs.readFileSync(path.join(blogDir, f), 'utf-8');
  const body = content.replace(/^---[\s\S]*?---/, '');
  if (body.includes('<img') || body.includes('![')) {
    console.log(`Capa/imagem duplicada no corpo em: ${f}`);
    duplicateBodyCount++;
  }
}
console.log(`Total de arquivos com imagem no corpo: ${duplicateBodyCount}`);

// 3. Verificar também nos arquivos HTML em blog/*/index.html
console.log('\n=== VERIFICAR SE HÁ IMAGENS DUPLICADAS EM blog/*/index.html ===');
const blogHtmlDirs = fs.readdirSync('blog');
for (const d of blogHtmlDirs) {
  const p = path.join('blog', d, 'index.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf-8');
    const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)];
    // Checar se a mesma imagem aparece mais de 1 vez na mesma página
    const srcs = imgMatches.map(m => m[1]);
    const counts = {};
    srcs.forEach(s => { counts[s] = (counts[s] || 0) + 1; });
    for (const [s, c] of Object.entries(counts)) {
      if (c > 1) {
        console.log(`Imagem repetida ${c}x no mesmo HTML: blog/${d}/index.html (${s.substring(0, 50)}...)`);
      }
    }
  }
}
