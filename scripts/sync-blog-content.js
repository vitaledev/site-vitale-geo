import fs from 'node:fs';
import path from 'node:path';

// 1. Sincronizar assets/js/posts.js para public/assets/js/posts.js
const postsJsPath = path.resolve('assets/js/posts.js');
const publicPostsJsPath = path.resolve('public/assets/js/posts.js');
if (fs.existsSync(postsJsPath)) {
  fs.copyFileSync(postsJsPath, publicPostsJsPath);
  console.log('✅ assets/js/posts.js copiado para public/assets/js/posts.js');
}

// 2. Ler os posts de assets/js/posts.js
const postsContent = fs.readFileSync(postsJsPath, 'utf-8');
const blogPostsMatch = postsContent.match(/const blogPosts = (\[[\s\S]*?\]);/);
if (!blogPostsMatch) {
  console.error('❌ Não foi possível extrair blogPosts de posts.js');
  process.exit(1);
}

// Avaliar array blogPosts com segurança via Function
const blogPosts = new Function(`return ${blogPostsMatch[1]}`)();
console.log(`📋 Total de posts cadastrados em posts.js: ${blogPosts.length}`);

const contentBlogDir = path.resolve('src/content/blog');
if (!fs.existsSync(contentBlogDir)) {
  fs.mkdirSync(contentBlogDir, { recursive: true });
}

let createdCount = 0;

for (let i = 0; i < blogPosts.length; i++) {
  const post = blogPosts[i];
  const slug = post.link.replace(/^\/?blog\//, '').replace(/\/$/, '').trim();
  const mdPath = path.join(contentBlogDir, `${slug}.md`);

  // Se já existe o arquivo .md, pulamos
  if (fs.existsSync(mdPath)) {
    continue;
  }

  // Tentar encontrar o index.html em blog/<slug>/index.html
  const htmlPath = path.resolve('blog', slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.warn(`⚠️ Aviso: Não encontrado blog/${slug}/index.html`);
    continue;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Extrair o miolo do artigo
  // Procura pelo lead paragraph e captura até antes do fechamento do prose container
  let bodyContent = '';
  const leadIndex = htmlContent.indexOf('<p class="lead');
  if (leadIndex !== -1) {
    const afterLead = htmlContent.substring(leadIndex);
    // Procurar pelo fim do prose container ou do article
    const endMatch = afterLead.match(/(<\/div>\s*<\/article>)/);
    if (endMatch) {
      bodyContent = afterLead.substring(0, endMatch.index).trim();
    } else {
      bodyContent = afterLead.trim();
    }
  } else {
    // Fallback: extrair dentro de article
    const articleMatch = htmlContent.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/);
    if (articleMatch) {
      bodyContent = articleMatch[1].trim();
    }
  }

  // Limpar possíveis figuras duplicadas se houver
  bodyContent = bodyContent.replace(/<figure[\s\S]*?<\/figure>/gi, '').trim();

  // Limpar qualquer indentação no início das linhas para evitar code blocks acidentais no Markdown
  bodyContent = bodyContent.split('\n').map(line => line.trimStart()).join('\n');

  // Montar o frontmatter Astro
  const isDestaque = i === 0;
  const mdContent = `---
titulo: ${JSON.stringify(post.titulo)}
resumo: ${JSON.stringify(post.resumo)}
categoria: ${JSON.stringify(post.categoria || 'Geopolítica')}
data: ${JSON.stringify(post.data)}
img: ${JSON.stringify(post.img)}
tempoLeitura: "8 min"
destaque: ${isDestaque}
---

${bodyContent}
`;

  fs.writeFileSync(mdPath, mdContent, 'utf-8');
  console.log(`✨ Criado: src/content/blog/${slug}.md`);
  createdCount++;
}

console.log(`\n🎉 Concluído: ${createdCount} novos arquivos .md gerados em src/content/blog/`);
