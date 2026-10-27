import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { batchPart1 } from './data/batch-part1.js';
import { batchPart2 } from './data/batch-part2.js';
import { videosData } from './data/videos-data.js';

const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.resolve(path.dirname(__filename), '..');
const ROTEIROS_DIR = 'D:\\Obsidian\\Vida nova\\Projetos\\VitaleGeo\\Roteiros';

const allPosts = [...batchPart1, ...batchPart2];
console.log(`Carregados ${allPosts.length} posts para processamento.`);

// Template HTML de modelo-post.html
const modeloHtmlPath = path.join(PASTA_RAIZ, '_modelos', 'modelo-post.html');
const modeloHtml = fs.readFileSync(modeloHtmlPath, 'utf8');

function renderPostHtml(post) {
  // Montar o grid de fatos
  const factCardsHtml = `
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">
            ${post.factGrid.map(f => `
        <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
            <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">${f.label}</div>
            <div class="text-sm font-bold text-amber-400 mt-1">${f.val}</div>
        </div>
            `).join('')}
        </div>`;

  // Montar o lead
  const leadHtml = `<p class="lead text-xl text-slate-200">\n            ${post.lead}\n        </p>`;

  // Montar seções H2
  const sectionsHtml = post.sections.map(s => `
        <h2>${s.h2}</h2>
        ${s.content}
  `).join('\n');

  // Montar citação
  const quoteHtml = `
        <blockquote>
            <p>"${post.quote.text}"</p>
            <footer class="font-mono text-xs text-amber-400 mt-2">— ${post.quote.author}</footer>
        </blockquote>`;

  // Montar tabela
  const tableRowsHtml = post.table.rows.map(row => `
        <tr>
            ${row.map((cell, idx) => {
              if (idx === 0) return `    <td class="p-3 font-bold text-white">${cell}</td>\n`;
              if (idx === 1) return `    <td class="p-3 text-amber-400">${cell}</td>\n`;
              return `    <td class="p-3 text-slate-300">${cell}</td>\n`;
            }).join('')}
        </tr>
  `).join('');

  const tableHtml = `
        <div class="my-10 overflow-x-auto not-prose">
            <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">
                <i class="ph-bold ph-table text-amber-400"></i> ${post.table.title}
            </h3>
            <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
                <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
                    <tr>
                        ${post.table.headers.map(h => `<th class="p-3 font-semibold">${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-slate-300">
                    ${tableRowsHtml}
                </tbody>
            </table>
        </div>`;

  // Montar caixa de análise
  const boxHtml = `
        <div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
            <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                <i class="ph-bold ph-compass"></i> ${post.box.title}
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed">
                ${post.box.text}
            </p>
        </div>`;

  // Montar retenção
  const retencaoHtml = `
        <div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
            <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <i class="ph-fill ph-game-controller text-xl"></i>
            </div>
            <h4 class="text-white font-heading font-bold text-base mb-1">${post.retencao.title}</h4>
            <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">${post.retencao.text}</p>
            <a href="${post.retencao.link}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
                <i class="ph-bold ph-arrow-up-right"></i> ${post.retencao.btn}
            </a>
        </div>`;

  // Montar FAQ
  const faqHtml = `
        <div class="my-10 not-prose">
            <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
                <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes (FAQ)
            </h3>
            <div class="space-y-3">
                ${post.faq.map(item => `
        <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
            <h4 class="text-sm font-bold text-white mb-2">${item.q}</h4>
            <p class="text-xs text-slate-400 leading-relaxed">${item.a}</p>
        </div>
                `).join('')}
            </div>
        </div>`;

  const fullConteudo = `${factCardsHtml}\n\n${leadHtml}\n\n${sectionsHtml}\n\n${quoteHtml}\n\n${tableHtml}\n\n${boxHtml}\n\n${retencaoHtml}\n\n${faqHtml}`;

  let html = modeloHtml;
  html = html.replaceAll('{{TITULO}}', post.titulo);
  html = html.replaceAll('{{DESCRICAO}}', post.resumo);
  html = html.replaceAll('{{SLUG}}', post.slug);
  html = html.replaceAll('{{CATEGORIA}}', post.categoria);
  html = html.replaceAll('{{DATA}}', post.data);
  html = html.replaceAll('{{DATA_ISO}}', post.dataIso);
  html = html.replaceAll('{{TEMPO_LEITURA}}', post.tempoLeitura);
  html = html.replaceAll('{{IMAGEM_DESTAQUE}}', post.img);
  html = html.replaceAll('{{LEGENDA_IMAGEM}}', post.legenda);
  html = html.replace('{{CONTEUDO}}', fullConteudo);

  return html;
}

function renderPostMarkdown(post) {
  let md = `---
titulo: "${post.titulo.replaceAll('"', '\\"')}"
resumo: "${post.resumo.replaceAll('"', '\\"')}"
categoria: "${post.categoria}"
data: "${post.data}"
img: "${post.img}"
tempoLeitura: "${post.tempoLeitura}"
destaque: false
---

${post.lead}

`;

  for (const s of post.sections) {
    // converter HTML simples de paragrafos para markdown limpo
    const cleanSectionContent = s.content
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '\n\n')
      .trim();
    md += `## ${s.h2}\n\n${cleanSectionContent}\n\n`;
  }

  md += `> "${post.quote.text}"\n> — *${post.quote.author}*\n\n`;

  md += `### ${post.table.title}\n\n`;
  md += `| ${post.table.headers.join(' | ')} |\n`;
  md += `| ${post.table.headers.map(() => '---').join(' | ')} |\n`;
  for (const row of post.table.rows) {
    md += `| ${row.join(' | ')} |\n`;
  }
  md += '\n';

  md += `### ${post.box.title}\n\n${post.box.text}\n\n`;

  md += `### Perguntas Frequentes (FAQ)\n\n`;
  for (const f of post.faq) {
    md += `**${f.q}**\n\n${f.a}\n\n`;
  }

  return md;
}

// 1 & 2: Criar os arquivos HTML e MD para cada um dos 10 posts
console.log('\n--- 1 & 2. GERANDO 10 ARTIGOS HTML E MARKDOWN ---');
for (const post of allPosts) {
  const postHtmlDir = path.join(PASTA_RAIZ, 'blog', post.slug);
  if (!fs.existsSync(postHtmlDir)) {
    fs.mkdirSync(postHtmlDir, { recursive: true });
  }
  const postHtmlPath = path.join(postHtmlDir, 'index.html');
  const postHtmlContent = renderPostHtml(post);
  fs.writeFileSync(postHtmlPath, postHtmlContent, 'utf8');

  // Gerar arquivo MD para Astro
  const postMdPath = path.join(PASTA_RAIZ, 'src', 'content', 'blog', `${post.slug}.md`);
  const postMdContent = renderPostMarkdown(post);
  fs.writeFileSync(postMdPath, postMdContent, 'utf8');

  console.log(`✅ [${post.categoria}] ${post.slug} -> HTML (${postHtmlContent.length} chars) e MD criados com sucesso!`);
}

// 3 & 4: Atualizar assets/js/posts.js
console.log('\n--- 4. ATUALIZANDO ASSETS/JS/POSTS.JS ---');
const postsJsPath = path.join(PASTA_RAIZ, 'assets', 'js', 'posts.js');
let postsJsContent = fs.readFileSync(postsJsPath, 'utf8');

// Ordenar os 10 posts de forma decrescente por horário para inserção no topo
const postsReversos = [...allPosts].reverse();

const novosCardsJs = postsReversos.map(post => `    {
        titulo: "${post.titulo.replaceAll('"', '\\"')}",
        categoria: "${post.categoria}",
        data: "${post.data}",
        img: "${post.img}",
        link: "${post.slug}/",
        resumo: "${post.resumo.replaceAll('"', '\\"')}"
    },`).join('\n');

const marker = 'const blogPosts = [\n';
if (!postsJsContent.includes(marker)) {
  throw new Error('Marcador "const blogPosts = [" não encontrado em posts.js');
}

// Verificar se algum já está no arquivo para evitar duplicações
let postsJaInseridos = false;
for (const post of allPosts) {
  if (postsJsContent.includes(`link: "${post.slug}/"`)) {
    postsJaInseridos = true;
    break;
  }
}

if (!postsJaInseridos) {
  postsJsContent = postsJsContent.replace(marker, marker + novosCardsJs + '\n');
  fs.writeFileSync(postsJsPath, postsJsContent, 'utf8');
  console.log(`✅ 10 novos posts inseridos com sucesso no topo do array blogPosts em posts.js!`);
} else {
  console.log(`ℹ️ Posts já identificados em posts.js. Atualização mantida.`);
}

// 5: Executar npm run sitemap (node gerar_sitemap.js)
console.log('\n--- 5. EXECUTANDO GERAR_SITEMAP.JS ---');
try {
  const outputSitemap = execSync('node gerar_sitemap.js', { cwd: PASTA_RAIZ, encoding: 'utf8' });
  console.log(outputSitemap);
  console.log('✅ Sitemap.xml gerado e atualizado com sucesso!');
} catch (err) {
  console.error('❌ Erro ao rodar gerar_sitemap.js:', err);
}

// 6: Criar os 10 roteiros de vídeo completos em D:\Obsidian\Vida nova\Projetos\VitaleGeo\Roteiros\
console.log('\n--- 6. GERANDO OS 10 ROTEIROS DE VÍDEO (VIDEOS 118 A 127) ---');

function renderVideoMd(v) {
  let md = `# Video ${v.num} — ${v.titulo}\n\n`;
  md += `### 1. Roteiro\n\n`;
  md += `${v.roteiro}\n\n`;
  md += `---\n\n`;
  md += `### 2. Dez Prompts de Vídeo (4 Segundos Cada — Anti-AI-Slop)\n\n`;

  // Prompt 1 padronizado
  md += `#### Prompt 1 — Abertura e Gancho Cartográfico (4s)\n`;
  md += `\`\`\`text\n`;
  md += `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.\n`;
  md += `GeoLayers style satellite map opening. Photorealistic high-resolution Bing Maps 3D globe spinning and zooming into ${v.focalRegion}.\n`;
  md += `Geographically locked terrain coordinates, rigidly stable coastlines, zero landmass morphing, zero melted shores, zero fictional islands.\n`;
  md += `From the VERY FIRST FRAME (no fade-in, no transition delay), the 3-line title and the thematic emoji must be treated as a single unified layout grid, mathematically dead-centered both horizontally and vertically in the 9:16 frame (X: 50%, Y: 50% absolute screen center). The composite bounding box enclosing all three lines of text and the emoji is perfectly balanced and centered on the screen.\n`;
  md += `Line 1 (pure white): "${v.line1}"\n`;
  md += `Line 2 (intense crimson red #E50914): "${v.line2}"\n`;
  md += `Line 3 (pure white): "${v.line3}"\n`;
  md += `Font Tahoma Bold, 1px stroke outline, exactly 3px vertical spacing between lines, text horizontally center-aligned line by line. Luminous radiant glowing text bloom effect.\n`;
  md += `Centered horizontally directly beneath line 3 inside the same unified central grid container: animated thematic emoji ${v.emoji}.\n`;
  md += `Camera motion: smooth, slow, linear orthographic push-in toward the focal region.\n`;
  md += `NO voice, NO speech, NO music. ONLY subtle deep atmospheric rumble and clean satellite whoosh SFX.\n`;
  md += `\`\`\`\n\n`;

  // Prompts 2 a 10
  for (const p of v.prompts) {
    md += `#### Prompt ${p.pNum} — ${p.title}\n`;
    md += `\`\`\`text\n`;
    md += `Vertical video 9:16, 4K resolution, 60fps, 4.0 seconds duration.\n`;
    md += `${p.desc}\n`;
    md += `Text on screen: "${p.text}" in uppercase white Tahoma Bold.\n`;
    md += `Badge: "${p.badge}" in intense amber or crimson red (#E50914).\n`;
    md += `Camera: dynamic linear satellite tracking shot along the geographic feature.\n`;
    md += `NO voice, NO speech, NO music. ONLY ambient documentary environment SFX and telemetry lock chime.\n`;
    md += `\`\`\`\n\n`;
  }

  return md;
}

for (const v of videosData) {
  const videoFilePath = path.join(ROTEIROS_DIR, `Video ${v.num}.md`);
  const videoContent = renderVideoMd(v);
  fs.writeFileSync(videoFilePath, videoContent, 'utf8');
  console.log(`✅ [Video ${v.num}] ${videoFilePath} gravado com sucesso! (${v.roteiro.length} chars de narração)`);
}

// Atualizar Índice.md de Roteiros
const indicePath = path.join(ROTEIROS_DIR, 'Índice.md');
if (fs.existsSync(indicePath)) {
  let indiceContent = fs.readFileSync(indicePath, 'utf8');
  for (const v of videosData) {
    const entry = `| ${v.num} | [[Projetos/VitaleGeo/Roteiros/Video ${v.num}|Video ${v.num}]] | ${v.titulo} |`;
    if (!indiceContent.includes(`Video ${v.num}|`)) {
      indiceContent += `\n${entry}`;
    }
  }
  fs.writeFileSync(indicePath, indiceContent, 'utf8');
  console.log('✅ Índice.md de Roteiros atualizado com os novos 10 vídeos (118 a 127)!');
}

console.log('\n========================================');
console.log('🎉 CICLO DIÁRIO VITALEGEO EXECUTADO COM SUCESSO TOTAL!');
console.log('========================================');
