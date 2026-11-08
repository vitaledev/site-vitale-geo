import fs from 'node:fs';
import path from 'node:path';
import { postsPart1 } from './build-posts-part1.js';
import { postsPart2 } from './build-posts-part2.js';
import { postsPart3 } from './build-posts-part3.js';
import { renderPostHtml } from './generator-helper.js';

const ROOT_DIR = 'D:/Dev/vitale-geo';
const allPosts = [...postsPart1, ...postsPart2, ...postsPart3];

console.log(`Loaded ${allPosts.length} posts for publishing.`);

function buildHtmlBody(post) {
  let html = '';

  // 1. Fact Grid
  if (post.factGrid && post.factGrid.length > 0) {
    html += `<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">\n`;
    for (const item of post.factGrid) {
      html += `    <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
        <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">${item.label}</div>
        <div class="text-sm font-bold text-amber-400 mt-1">${item.val}</div>
    </div>\n`;
    }
    html += `</div>\n\n`;
  }

  // 2. Lead Paragraph
  const leadPar = post.secoesH2[0].paragrafos[0];
  html += `<p class="lead text-xl text-slate-200">\n    ${leadPar}\n</p>\n\n`;

  // 3. Section 1 (remaining paragraphs)
  html += `<h2>${post.secoesH2[0].titulo}</h2>\n\n`;
  for (let i = 1; i < post.secoesH2[0].paragrafos.length; i++) {
    html += `<p>${post.secoesH2[0].paragrafos[i]}</p>\n\n`;
  }

  // 4. Section 2
  if (post.secoesH2[1]) {
    html += `<h2>${post.secoesH2[1].titulo}</h2>\n\n`;
    for (const p of post.secoesH2[1].paragrafos) {
      html += `<p>${p}</p>\n\n`;
    }
  }

  // 5. Section 3
  if (post.secoesH2[2]) {
    html += `<h2>${post.secoesH2[2].titulo}</h2>\n\n`;
    for (const p of post.secoesH2[2].paragrafos) {
      html += `<p>${p}</p>\n\n`;
    }
  }

  // 6. Blockquote
  if (post.citacao) {
    html += `<blockquote>\n    <p>"${post.citacao.texto}"</p>\n    <footer class="font-mono text-xs text-amber-400 mt-2">— ${post.citacao.autor}</footer>\n</blockquote>\n\n`;
  }

  // 7. Data Table
  if (post.tabela) {
    html += `<div class="my-10 overflow-x-auto not-prose">\n`;
    html += `    <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">\n`;
    html += `        <i class="ph-bold ph-table text-amber-400"></i> ${post.tabela.titulo}\n`;
    html += `    </h3>\n`;
    html += `    <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">\n`;
    html += `        <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">\n            <tr>`;
    for (const col of post.tabela.colunas) {
      html += `<th class="p-3 font-semibold">${col}</th>`;
    }
    html += `</tr>\n        </thead>\n        <tbody class="divide-y divide-white/5 text-slate-300">\n`;
    for (const row of post.tabela.linhas) {
      html += `            <tr>`;
      row.forEach((cell, idx) => {
        if (idx === 0) {
          html += `<td class="p-3 font-bold text-white">${cell}</td>`;
        } else if (idx === 1) {
          html += `<td class="p-3 text-amber-400">${cell}</td>`;
        } else {
          html += `<td class="p-3 text-slate-300">${cell}</td>`;
        }
      });
      html += `</tr>\n`;
    }
    html += `        </tbody>\n    </table>\n</div>\n\n`;
  }

  // 8. Section 4
  if (post.secoesH2[3]) {
    html += `<h2>${post.secoesH2[3].titulo}</h2>\n\n`;
    for (const p of post.secoesH2[3].paragrafos) {
      html += `<p>${p}</p>\n\n`;
    }
  }

  // 9. Highlight Box
  if (post.caixaDestaque) {
    html += `<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">\n`;
    html += `    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">\n`;
    html += `        <i class="ph-bold ph-crosshair text-amber-400"></i> ${post.caixaDestaque.titulo}\n`;
    html += `    </h4>\n`;
    html += `    <p class="text-sm text-slate-300 leading-relaxed">${post.caixaDestaque.texto}</p>\n`;
    html += `</div>\n\n`;
  }

  // 10. Section 5
  if (post.secoesH2[4]) {
    html += `<h2>${post.secoesH2[4].titulo}</h2>\n\n`;
    for (const p of post.secoesH2[4].paragrafos) {
      html += `<p>${p}</p>\n\n`;
    }
  }

  // 11. Interactive Retention Box
  if (post.toolRetention) {
    html += `<div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">\n`;
    html += `    <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">\n`;
    html += `        <i class="ph-fill ph-compass-tool text-xl"></i>\n`;
    html += `    </div>\n`;
    html += `    <h4 class="text-white font-heading font-bold text-base mb-1">${post.toolRetention.title}</h4>\n`;
    html += `    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">${post.toolRetention.desc}</p>\n`;
    html += `    <a href="${post.toolRetention.url}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">\n`;
    html += `        <i class="ph-bold ph-arrow-up-right"></i> ${post.toolRetention.button}\n`;
    html += `    </a>\n`;
    html += `</div>\n\n`;
  }

  // 12. FAQ Section
  if (post.faq && post.faq.length > 0) {
    html += `<div class="my-10 not-prose">\n`;
    html += `    <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">\n`;
    html += `        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes (FAQ Cartográfico)\n`;
    html += `    </h3>\n`;
    html += `    <div class="space-y-3">\n`;
    for (const item of post.faq) {
      html += `        <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">\n`;
      html += `            <h4 class="text-sm font-bold text-white mb-2">${item.q}</h4>\n`;
      html += `            <p class="text-xs text-slate-400 leading-relaxed">${item.a}</p>\n`;
      html += `        </div>\n`;
    }
    html += `    </div>\n`;
    html += `</div>\n`;
  }

  return html;
}

function buildMarkdown(post) {
  let md = `---
titulo: "${post.titulo}"
resumo: "${post.resumo}"
categoria: "${post.categoria}"
data: "${post.dataTexto}"
img: "${post.imagemDestaque}"
tempoLeitura: "${post.tempoLeitura}"
destaque: false
---

`;

  // First paragraph as lead
  md += `${post.secoesH2[0].paragrafos[0]}\n\n`;

  // Section 1
  md += `## ${post.secoesH2[0].titulo}\n\n`;
  for (let i = 1; i < post.secoesH2[0].paragrafos.length; i++) {
    md += `${post.secoesH2[0].paragrafos[i]}\n\n`;
  }

  // Section 2
  if (post.secoesH2[1]) {
    md += `## ${post.secoesH2[1].titulo}\n\n`;
    for (const p of post.secoesH2[1].paragrafos) {
      md += `${p}\n\n`;
    }
  }

  // Section 3
  if (post.secoesH2[2]) {
    md += `## ${post.secoesH2[2].titulo}\n\n`;
    for (const p of post.secoesH2[2].paragrafos) {
      md += `${p}\n\n`;
    }
  }

  // Quote
  if (post.citacao) {
    md += `> "${post.citacao.texto}"\n>\n> — *${post.citacao.autor}*\n\n`;
  }

  // Table
  if (post.tabela) {
    md += `### ${post.tabela.titulo}\n\n`;
    md += `| ${post.tabela.colunas.join(' | ')} |\n`;
    md += `| ${post.tabela.colunas.map(() => ':---').join(' | ')} |\n`;
    for (const r of post.tabela.linhas) {
      md += `| ${r.join(' | ')} |\n`;
    }
    md += `\n`;
  }

  // Section 4
  if (post.secoesH2[3]) {
    md += `## ${post.secoesH2[3].titulo}\n\n`;
    for (const p of post.secoesH2[3].paragrafos) {
      md += `${p}\n\n`;
    }
  }

  // Anomaly Box
  if (post.caixaDestaque) {
    md += `> [!NOTE] ${post.caixaDestaque.titulo}\n> ${post.caixaDestaque.texto}\n\n`;
  }

  // Section 5
  if (post.secoesH2[4]) {
    md += `## ${post.secoesH2[4].titulo}\n\n`;
    for (const p of post.secoesH2[4].paragrafos) {
      md += `${p}\n\n`;
    }
  }

  // Retention
  if (post.toolRetention) {
    md += `**Exploração Interativa VitaleGeo:** ${post.toolRetention.desc} [${post.toolRetention.title}](${post.toolRetention.url})\n\n`;
  }

  // FAQ
  if (post.faq && post.faq.length > 0) {
    md += `### Perguntas Frequentes\n\n`;
    for (const f of post.faq) {
      md += `**${f.q}**\n${f.a}\n\n`;
    }
  }

  return md;
}

// 1. Process and save HTML and MD for all 10 posts
for (const p of allPosts) {
  const htmlBody = buildHtmlBody(p);
  const fullHtml = renderPostHtml({
    slug: p.slug,
    titulo: p.titulo,
    descricao: p.resumo,
    categoria: p.categoria,
    dataTexto: p.dataTexto,
    dataIso: p.dataIso,
    tempoLeitura: p.tempoLeitura,
    imagemDestaque: p.imagemDestaque,
    legendaImagem: p.legendaImagem,
    conteudoHtml: htmlBody
  });

  // Save HTML in D:/Dev/vitale-geo/blog/<slug>/index.html
  const postDir = path.join(ROOT_DIR, 'blog', p.slug);
  fs.mkdirSync(postDir, { recursive: true });
  const htmlPath = path.join(postDir, 'index.html');
  fs.writeFileSync(htmlPath, fullHtml, 'utf8');

  // Save MD in D:/Dev/vitale-geo/src/content/blog/<slug>.md
  const mdContent = buildMarkdown(p);
  const mdPath = path.join(ROOT_DIR, 'src', 'content', 'blog', `${p.slug}.md`);
  fs.writeFileSync(mdPath, mdContent, 'utf8');

  const charCount = fullHtml.length;
  const mdCharCount = mdContent.length;
  console.log(`[OK] ${p.slug} -> HTML: ${charCount} chars | MD: ${mdCharCount} chars`);
}

// 2. Prepend posts to assets/js/posts.js
console.log('\nUpdating assets/js/posts.js...');
const postsJsPath = path.join(ROOT_DIR, 'assets', 'js', 'posts.js');
let postsJsContent = fs.readFileSync(postsJsPath, 'utf8');

// Sort in reverse chronological order for the array (22:30 at top, down to 07:30)
const sortedPostsForArray = [...allPosts].sort((a, b) => {
  return b.dataTexto.localeCompare(a.dataTexto);
});

let newEntriesJs = '';
for (const p of sortedPostsForArray) {
  newEntriesJs += `    {
        titulo: "${p.titulo}",
        categoria: "${p.categoria}",
        data: "${p.dataTexto}",
        img: "${p.imagemDestaque}",
        link: "${p.slug}/",
        resumo: "${p.resumo}"
    },\n`;
}

// Insert right after `const blogPosts = [\n`
const targetMarker = 'const blogPosts = [';
const insertIndex = postsJsContent.indexOf(targetMarker);
if (insertIndex === -1) {
  throw new Error('Could not find const blogPosts = [ in posts.js');
}

const updatedPostsJs = postsJsContent.slice(0, insertIndex + targetMarker.length) + '\n' + newEntriesJs + postsJsContent.slice(insertIndex + targetMarker.length);
fs.writeFileSync(postsJsPath, updatedPostsJs, 'utf8');
console.log('Successfully updated assets/js/posts.js with all 10 new posts at the top!');
