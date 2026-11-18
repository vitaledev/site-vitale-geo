import fs from 'node:fs';
import path from 'node:path';
import { postsP1 } from './posts-11nov-data-p1.js';
import { postsP2 } from './posts-11nov-data-p2.js';
import { postsP3 } from './posts-11nov-data-p3.js';

const allPosts = [...postsP1, ...postsP2, ...postsP3];

const modeloHtmlPath = 'D:/Dev/vitale-geo/_modelos/modelo-post.html';
const modeloHtml = fs.readFileSync(modeloHtmlPath, 'utf8');

function buildHtml(post) {
  let html = modeloHtml;

  html = html.replace(/{{TITULO}}/g, post.titulo);
  html = html.replace(/{{DESCRICAO}}/g, post.resumo);
  html = html.replace(/{{SLUG}}/g, post.slug);
  html = html.replace(/{{IMAGEM_DESTAQUE}}/g, post.img);
  html = html.replace(/{{LEGENDA_IMAGEM}}/g, post.legendaImg);
  html = html.replace(/{{CATEGORIA}}/g, post.categoria);
  html = html.replace(/{{DATA}}/g, post.dataExibicao);
  html = html.replace(/{{DATA_ISO}}/g, post.dataIso);
  html = html.replace(/{{TEMPO_LEITURA}}/g, post.tempoLeitura);

  // Cards de Metricas
  let cardsHtml = `<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">\n`;
  for (const c of post.cards) {
    cardsHtml += `    <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
        <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">${c.label}</div>
        <div class="text-sm font-bold text-amber-400 mt-1">${c.val}</div>
    </div>\n`;
  }
  cardsHtml += `</div>`;

  let bodyHtml = cardsHtml + '\n\n';
  bodyHtml += `<p class="lead text-xl text-slate-200">
    ${post.lead}
</p>\n\n`;

  let secCount = 0;
  for (const sec of post.h2_sections) {
    secCount++;
    bodyHtml += `<h2>${sec.titulo}</h2>\n\n${sec.conteudo}\n\n`;

    // Apos a segunda secao, inserir a citacao
    if (secCount === 2 && post.citacao) {
      bodyHtml += `<blockquote>
    <p>"${post.citacao.texto}"</p>
    <footer class="font-mono text-xs text-amber-400 mt-2">— ${post.citacao.autor}</footer>
</blockquote>\n\n`;
    }

    // Apos a terceira secao, inserir a tabela comparativa
    if (secCount === 3 && post.tabela) {
      let tblHtml = `<div class="my-10 overflow-x-auto not-prose">
    <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">
        <i class="ph-bold ph-table text-amber-400"></i> ${post.tabela.titulo}
    </h3>
    <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
        <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
            <tr>`;
      for (const h of post.tabela.headers) {
        tblHtml += `<th class="p-3 font-semibold">${h}</th>`;
      }
      tblHtml += `</tr>
        </thead>
        <tbody class="divide-y divide-white/5 text-slate-300">\n`;
      for (const row of post.tabela.linhas) {
        tblHtml += `            <tr><td class="p-3 font-bold text-white">${row[0]}</td><td class="p-3 text-amber-400">${row[1]}</td><td class="p-3 text-slate-300">${row[2]}</td><td class="p-3 text-slate-300">${row[3]}</td></tr>\n`;
      }
      tblHtml += `        </tbody>
    </table>
</div>\n\n`;
      bodyHtml += tblHtml;
    }
  }

  // Destaque Box
  if (post.destaqueBox) {
    bodyHtml += `<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
        <i class="ph-bold ph-crosshair text-amber-400"></i> ${post.destaqueBox.titulo}
    </h4>
    <p class="text-sm text-slate-300 leading-relaxed">${post.destaqueBox.texto}</p>
</div>\n\n`;
  }

  // Retencao Interativa
  bodyHtml += `<div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
    <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
        <i class="ph-fill ph-compass-tool text-xl"></i>
    </div>
    <h4 class="text-white font-heading font-bold text-base mb-1">${post.ferramentaNome}</h4>
    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">${post.ferramentaTexto}</p>
    <a href="${post.ferramentaLink}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
        <i class="ph-bold ph-arrow-up-right"></i> ${post.ferramentaBtn}
    </a>
</div>\n\n`;

  // FAQ
  if (post.faq && post.faq.length > 0) {
    let faqHtml = `<div class="my-10 not-prose">
    <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes (FAQ Cartográfico)
    </h3>
    <div class="space-y-3">\n`;
    for (const item of post.faq) {
      faqHtml += `        <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
            <h4 class="text-sm font-bold text-white mb-2">${item.q}</h4>
            <p class="text-xs text-slate-400 leading-relaxed">${item.a}</p>
        </div>\n`;
    }
    faqHtml += `    </div>
</div>`;
    bodyHtml += faqHtml;
  }

  html = html.replace('{{CONTEUDO}}', bodyHtml);
  return html;
}

function buildMarkdown(post) {
  let md = `---
titulo: "${post.titulo}"
resumo: "${post.resumo}"
categoria: "${post.categoria}"
data: "${post.dataExibicao}"
img: "${post.img}"
tempoLeitura: "${post.tempoLeitura}"
destaque: false
---

${post.lead}

`;

  let secCount = 0;
  for (const sec of post.h2_sections) {
    secCount++;
    const mdContent = sec.conteudo
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '\n\n')
      .replace(/<em>/g, '*')
      .replace(/<\/em>/g, '*')
      .replace(/<strong>/g, '**')
      .replace(/<\/strong>/g, '**')
      .trim();

    md += `## ${sec.titulo}\n\n${mdContent}\n\n`;

    if (secCount === 2 && post.citacao) {
      md += `> "${post.citacao.texto}"\n>\n> — *${post.citacao.autor}*\n\n`;
    }

    if (secCount === 3 && post.tabela) {
      md += `### ${post.tabela.titulo}\n\n`;
      md += `| ${post.tabela.headers.join(' | ')} |\n`;
      md += `| ${post.tabela.headers.map(() => ':---').join(' | ')} |\n`;
      for (const row of post.tabela.linhas) {
        md += `| ${row.join(' | ')} |\n`;
      }
      md += '\n';
    }
  }

  if (post.destaqueBox) {
    md += `> [!NOTE] ${post.destaqueBox.titulo}\n> ${post.destaqueBox.texto}\n\n`;
  }

  return md;
}

// 1. Criar pastas e arquivos HTML e MD
console.log(`Criando ${allPosts.length} artigos HTML e Markdown para 11 Nov 2026...`);
for (const post of allPosts) {
  // Pasta HTML: D:\Dev\vitale-geo\blog\<slug>\index.html
  const postDir = path.join('D:/Dev/vitale-geo/blog', post.slug);
  fs.mkdirSync(postDir, { recursive: true });
  const htmlPath = path.join(postDir, 'index.html');
  fs.writeFileSync(htmlPath, buildHtml(post), 'utf8');

  // Arquivo MD: D:\Dev\vitale-geo\src\content\blog\<slug>.md
  const mdPath = path.join('D:/Dev/vitale-geo/src/content/blog', post.slug + '.md');
  fs.writeFileSync(mdPath, buildMarkdown(post), 'utf8');

  const htmlSize = fs.statSync(htmlPath).size;
  const mdSize = fs.statSync(mdPath).size;
  console.log(`✓ Gerado: ${post.slug} (HTML: ${htmlSize} bytes, MD: ${mdSize} bytes)`);
}

// 2. Atualizar posts.js inserindo no topo do array
console.log('Atualizando D:/Dev/vitale-geo/assets/js/posts.js...');
const postsJsPath = 'D:/Dev/vitale-geo/assets/js/posts.js';
let postsJsContent = fs.readFileSync(postsJsPath, 'utf8');

const newPostsArrayEntries = allPosts.map(p => {
  return `    {
        titulo: ${JSON.stringify(p.titulo)},
        categoria: ${JSON.stringify(p.categoria)},
        data: ${JSON.stringify(p.dataExibicao)},
        img: ${JSON.stringify(p.img)},
        link: ${JSON.stringify(p.slug + '/')},
        resumo: ${JSON.stringify(p.resumo)}
    },`;
}).join('\n');

postsJsContent = postsJsContent.replace('const blogPosts = [\n', `const blogPosts = [\n${newPostsArrayEntries}\n`);
fs.writeFileSync(postsJsPath, postsJsContent, 'utf8');
console.log('✓ posts.js atualizado com sucesso no topo do array com os 10 novos posts!');
