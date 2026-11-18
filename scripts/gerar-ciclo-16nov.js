// Gerador do Ciclo Diário de Conteúdo - 16 de Novembro de 2026
// VitaleGeo - Inteligência Geográfica // Arquivo e Investigação

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { postsP1 } from './posts-16nov-data-p1.js';
import { postsP2 } from './posts-16nov-data-p2.js';
import { postsP3 } from './posts-16nov-data-p3.js';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');

const modeloHtml = fs.readFileSync(path.join(rootDir, '_modelos', 'modelo-post.html'), 'utf8');

const posts = [...postsP1, ...postsP2, ...postsP3];

// Função geradora de HTML baseada no modelo-post.html
function gerarHtml(p) {
  let conteudoHtml = `
                <!-- Imagem Principal Documental -->
                <figure class="mb-12 not-prose">
                    <img src="${p.img}" alt="${p.titulo}" class="w-full h-auto shadow-2xl border border-white/10 rounded-2xl object-cover aspect-video">
                    <figcaption class="text-center font-mono text-[11px] text-slate-500 mt-3 uppercase tracking-wider">
                        ${p.legendaImagem}
                    </figcaption>
                </figure>

                <!-- Ficha Técnica Cartográfica (Grid de 4 Cards) -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">
                    ${p.ficha.map(f => `
                    <div class="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                        <div class="text-[10px] text-slate-500 font-mono uppercase tracking-wider">${f.rotulo}</div>
                        <div class="text-sm font-bold text-amber-400 mt-1">${f.valor}</div>
                    </div>`).join('')}
                </div>

                <!-- Lead Investigativo -->
                <p class="lead text-xl text-slate-200">
                    ${p.lead}
                </p>\n\n`;

  // Seções H2 e parágrafos
  for (let i = 0; i < p.secoes.length; i++) {
    const sec = p.secoes[i];
    conteudoHtml += `                <h2>${sec.h2}</h2>\n`;
    for (const par of sec.p) {
      conteudoHtml += `                <p>${par}</p>\n`;
    }
    conteudoHtml += `\n`;

    // Inserir citação documental após a segunda seção
    if (i === 1 && p.citacao) {
      conteudoHtml += `                <blockquote>
                    <p>"${p.citacao.texto}"</p>
                    <footer class="font-mono text-xs text-amber-400 mt-2">— ${p.citacao.autor}</footer>
                </blockquote>\n\n`;
    }

    // Inserir tabela de dados após a terceira seção
    if (i === 2 && p.tabela) {
      conteudoHtml += `
<div class="my-10 overflow-x-auto not-prose">
    <h3 class="text-base font-bold text-white mb-3 font-heading flex items-center gap-2">
        <i class="ph-bold ph-table text-amber-400"></i> ${p.tabela.titulo}
    </h3>
    <table class="w-full text-left text-xs font-mono border border-white/10 rounded-xl overflow-hidden bg-slate-900/60">
        <thead class="bg-slate-800 text-amber-400 uppercase border-b border-white/10">
            <tr>${p.tabela.colunas.map(col => `<th class="p-3 font-semibold">${col}</th>`).join('')}</tr>
        </thead>
        <tbody class="divide-y divide-white/5 text-slate-300">
            ${p.tabela.linhas.map(row => `<tr>
                <td class="p-3 font-bold text-white">${row[0]}</td>
                <td class="p-3 text-amber-400">${row[1]}</td>
                <td class="p-3 text-slate-300">${row[2]}</td>
                <td class="p-3 text-slate-300">${row[3]}</td>
            </tr>`).join('')}
        </tbody>
    </table>
</div>\n\n`;
    }
  }

  // Caixa de Análise Territorial / Destaque
  if (p.caixaDestaque) {
    conteudoHtml += `
<div class="my-8 p-6 bg-slate-800/60 border border-amber-400/20 rounded-xl not-prose">
    <h4 class="text-amber-400 font-mono uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
        <i class="ph-bold ph-crosshair text-amber-400"></i> ${p.caixaDestaque.titulo}
    </h4>
    <p class="text-sm text-slate-300 leading-relaxed">${p.caixaDestaque.texto}</p>
</div>\n\n`;
  }

  // Box de Retenção Interativa (Jogo ou Ferramenta)
  if (p.retencao) {
    conteudoHtml += `
<div class="my-8 p-6 bg-slate-900 border border-white/10 rounded-2xl not-prose text-center">
    <div class="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
        <i class="ph-fill ph-compass-tool text-xl"></i>
    </div>
    <h4 class="text-white font-heading font-bold text-base mb-1">${p.retencao.ferramenta}</h4>
    <p class="text-xs text-slate-400 mb-4 max-w-md mx-auto">${p.retencao.descricao}</p>
    <a href="${p.retencao.link}" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 px-5 py-2.5 rounded-full hover:bg-white transition shadow-lg shadow-amber-400/10">
        <i class="ph-bold ph-arrow-up-right"></i> ${p.retencao.textoBotao}
    </a>
</div>\n\n`;
  }

  // Perguntas Frequentes (FAQ Cartográfico)
  if (p.faq && p.faq.length > 0) {
    conteudoHtml += `
<div class="my-10 not-prose">
    <h3 class="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
        <i class="ph-bold ph-question text-amber-400"></i> Perguntas Frequentes (FAQ Cartográfico)
    </h3>
    <div class="space-y-3">
        ${p.faq.map(item => `
        <div class="p-4 bg-slate-900/50 border border-white/5 rounded-xl">
            <h4 class="text-sm font-bold text-white mb-2">${item.pergunta}</h4>
            <p class="text-xs text-slate-400 leading-relaxed">${item.resposta}</p>
        </div>`).join('')}
    </div>
</div>\n`;
  }

  // Substituição das tags do modelo
  let html = modeloHtml;
  html = html.replaceAll('{{TITULO}}', p.titulo);
  html = html.replaceAll('{{DESCRICAO}}', p.resumo);
  html = html.replaceAll('{{CATEGORIA}}', p.categoria);
  html = html.replaceAll('{{SLUG}}', p.slug);
  html = html.replaceAll('{{DATA}}', p.data);
  html = html.replaceAll('{{DATA_ISO}}', p.dataIso);
  html = html.replaceAll('{{TEMPO_LEITURA}}', p.tempoLeitura);
  html = html.replaceAll('{{IMAGEM_DESTAQUE}}', p.img);
  html = html.replaceAll('{{LEGENDA_IMAGEM}}', p.legendaImagem);
  html = html.replace('{{CONTEUDO}}', conteudoHtml);

  return html;
}

// Função geradora de Markdown compatível com a coleção Astro
function gerarMarkdown(p) {
  let md = `---
titulo: "${p.titulo.replace(/"/g, '\\"')}"
resumo: "${p.resumo.replace(/"/g, '\\"')}"
categoria: "${p.categoria}"
data: "${p.data}"
img: "${p.img}"
tempoLeitura: "${p.tempoLeitura}"
destaque: false
---

${p.lead}

`;

  for (let i = 0; i < p.secoes.length; i++) {
    const sec = p.secoes[i];
    md += `## ${sec.h2}\n\n`;
    for (const par of sec.p) {
      md += `${par}\n\n`;
    }

    if (i === 1 && p.citacao) {
      md += `> "${p.citacao.texto}"\n>\n> — *${p.citacao.autor}*\n\n`;
    }

    if (i === 2 && p.tabela) {
      md += `### ${p.tabela.titulo}\n\n`;
      md += `| ${p.tabela.colunas.join(' | ')} |\n`;
      md += `| ${p.tabela.colunas.map(() => ':---').join(' | ')} |\n`;
      for (const row of p.tabela.linhas) {
        md += `| ${row.join(' | ')} |\n`;
      }
      md += `\n`;
    }
  }

  if (p.caixaDestaque) {
    md += `### ${p.caixaDestaque.titulo}\n\n${p.caixaDestaque.texto}\n\n`;
  }

  return md;
}

// 1. Gravar os 10 arquivos HTML em blog/<slug>/index.html e Markdown em src/content/blog/<slug>.md
console.log('🚀 Criando 10 novos artigos HTML e Markdown para 16 de Novembro de 2026...');
for (const p of posts) {
  const dirHtml = path.join(rootDir, 'blog', p.slug);
  fs.mkdirSync(dirHtml, { recursive: true });
  const htmlFile = path.join(dirHtml, 'index.html');
  const htmlContent = gerarHtml(p);
  fs.writeFileSync(htmlFile, htmlContent, 'utf8');

  // Gravar também o arquivo markdown da coleção Astro
  const mdFile = path.join(rootDir, 'src', 'content', 'blog', `${p.slug}.md`);
  const mdContent = gerarMarkdown(p);
  fs.writeFileSync(mdFile, mdContent, 'utf8');

  console.log(`✅ [${p.data.split(' - ')[1]}] ${p.slug} (${htmlContent.length} chars HTML / ${mdContent.length} chars MD)`);
}

// 2. Atualizar assets/js/posts.js
console.log('\n📝 Atualizando assets/js/posts.js...');
const postsJsPath = path.join(rootDir, 'assets', 'js', 'posts.js');
let postsJsContent = fs.readFileSync(postsJsPath, 'utf8');

const novosObjetosJs = posts.map(p => `    {
        titulo: "${p.titulo.replace(/"/g, '\\"')}",
        categoria: "${p.categoria}",
        data: "${p.data}",
        img: "${p.img}",
        link: "${p.slug}/",
        resumo: "${p.resumo.replace(/"/g, '\\"')}"
    }`).join(',\n');

// Inserir de forma segura no topo do array blogPosts (suportando tanto \r\n quanto \n)
const marker = /const blogPosts = \[\r?\n/;
if (marker.test(postsJsContent)) {
  postsJsContent = postsJsContent.replace(marker, `const blogPosts = [\n${novosObjetosJs},\n`);
  fs.writeFileSync(postsJsPath, postsJsContent, 'utf8');
  console.log('✅ assets/js/posts.js atualizado com sucesso com os 10 novos posts no topo do array.');
} else {
  console.error('❌ Falha ao encontrar "const blogPosts = [" em assets/js/posts.js');
}

console.log('\n🎯 Todos os 10 artigos HTML, Markdown e posts.js foram gerados com sucesso!');
