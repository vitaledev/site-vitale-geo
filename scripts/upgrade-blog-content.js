import fs from 'node:fs';
import path from 'node:path';

const contentBlogDir = path.resolve('src/content/blog');
const blogDir = path.resolve('blog');

const mdFiles = fs.readdirSync(contentBlogDir).filter(f => f.endsWith('.md'));
console.log(`🔍 Total de arquivos .md em src/content/blog/: ${mdFiles.length}`);

let upgradedCount = 0;
let skippedCount = 0;

for (const file of mdFiles) {
  const slug = file.replace(/\.md$/, '');
  const mdPath = path.join(contentBlogDir, file);
  const htmlPath = path.join(blogDir, slug, 'index.html');

  if (!fs.existsSync(htmlPath)) {
    skippedCount++;
    continue;
  }

  const mdStats = fs.statSync(mdPath);
  const htmlStats = fs.statSync(htmlPath);

  // Se o HTML tem significativamente mais conteúdo (> 1.5x)
  if (htmlStats.size < mdStats.size * 1.5) {
    skippedCount++;
    continue;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const mdContent = fs.readFileSync(mdPath, 'utf-8');

  // Extrair o frontmatter existente
  const fmMatch = mdContent.match(/^(---\r?\n[\s\S]*?\r?\n---)/);
  if (!fmMatch) {
    console.warn(`⚠️ Sem frontmatter em ${file}`);
    continue;
  }

  let frontmatter = fmMatch[1];

  // Extrair corpo dentro de <article>...</article>
  const articleMatch = htmlContent.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/);
  if (!articleMatch) {
    console.warn(`⚠️ Não foi possível encontrar <article> em blog/${slug}/index.html`);
    continue;
  }

  let body = articleMatch[1].trim();

  // Se tiver o div do prose container, extrair o conteúdo interno
  const proseMatch = body.match(/<div class="[^"]*prose[^"]*">([\s\S]*)<\/div>\s*$/);
  if (proseMatch) {
    body = proseMatch[1].trim();
  }

  // Corrigir o grid do dossiê tático se a abertura estiver faltando
  if (body.includes('<!-- Dossiê Tático') && !body.includes('grid grid-cols-1 md:grid-cols-3')) {
    body = body.replace(
      /(<!-- Dossiê Tático[\s\S]*?-->)\s*(<div class="bg-slate-900)/i,
      '$1\n<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">\n$2'
    );
  }

  // Garantir que links internos tenham trailing slash
  body = body.replace(/href="(\/(?:blog|ferramentas|jogos|sobre|politica)\/[^"#?]+)(?<!\/)"/g, 'href="$1/"');

  // Ajustar tempo de leitura no frontmatter para posts ricos
  if (body.length > 10000) {
    frontmatter = frontmatter.replace(/tempoLeitura:\s*["'][^"']+["']/, 'tempoLeitura: "10 min"');
  } else if (body.length > 5000) {
    frontmatter = frontmatter.replace(/tempoLeitura:\s*["'][^"']+["']/, 'tempoLeitura: "8 min"');
  }

  // Remover indentação excessiva para evitar blocos <pre> acidentais em Markdown
  const cleanedLines = body.split('\n').map(line => line.trimStart()).join('\n');

  const newMdContent = `${frontmatter}\n\n${cleanedLines}\n`;

  fs.writeFileSync(mdPath, newMdContent, 'utf-8');
  console.log(`✅ [Upgraded] ${slug}.md: ${mdStats.size}B -> ${Buffer.byteLength(newMdContent, 'utf-8')}B (${(htmlStats.size / mdStats.size).toFixed(1)}x maior)`);
  upgradedCount++;
}

console.log(`\n🎉 Concluído: ${upgradedCount} artigos atualizados com o conteúdo rico e completo! (${skippedCount} mantidos)`);
