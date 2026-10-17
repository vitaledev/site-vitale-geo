import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOMINIO = 'https://www.vitalegeo.com.br';
const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.dirname(__filename);

const dataHoje = new Date().toISOString().split('T')[0];

// Carregar posts do posts.js para enriquecer com imagens (Google Images SEO)
const postsJsFile = path.join(PASTA_RAIZ, 'assets', 'js', 'posts.js');
let postsMap = new Map();

if (fs.existsSync(postsJsFile)) {
    try {
        const postsContent = fs.readFileSync(postsJsFile, 'utf8');
        const fn = new Function(postsContent + '; return typeof blogPosts !== "undefined" ? blogPosts : [];');
        const blogPosts = fn();
        blogPosts.forEach(post => {
            const cleanSlug = post.link.replace(/^\/?blog\//, '').replace(/\/$/, '');
            postsMap.set(cleanSlug, post);
        });
        console.log(`📑 Encontrados ${postsMap.size} posts em posts.js para o sitemap.`);
    } catch (e) {
        console.warn('⚠️ Não foi possível ler posts.js:', e.message);
    }
}

// Ler artigos da pasta src/content/blog caso existam
const contentBlogDir = path.join(PASTA_RAIZ, 'src', 'content', 'blog');
if (fs.existsSync(contentBlogDir)) {
    const mdFiles = fs.readdirSync(contentBlogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    mdFiles.forEach(file => {
        const slug = file.replace(/\.(md|mdx)$/, '');
        if (!postsMap.has(slug)) {
            try {
                const content = fs.readFileSync(path.join(contentBlogDir, file), 'utf8');
                const titleMatch = content.match(/titulo:\s*["']?([^"'\n\r]+)["']?/);
                const imgMatch = content.match(/img:\s*["']?([^"'\n\r]+)["']?/);
                postsMap.set(slug, {
                    titulo: titleMatch ? titleMatch[1].trim() : slug,
                    img: imgMatch ? imgMatch[1].trim() : '',
                    link: `blog/${slug}/`
                });
            } catch (err) {}
        }
    });
}

function escapeXml(str) {
    if (!str) return '';
    return str.replace(/[<>&'"]/g, c => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

// Início do XML com suporte a Google Images
let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// 1. Páginas Institucionais e Principais
const paginasEstaticas = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/blog/', priority: '0.9', changefreq: 'daily' },
    { url: '/ferramentas/', priority: '0.9', changefreq: 'weekly' },
    { url: '/jogos/', priority: '0.9', changefreq: 'weekly' },
    { url: '/videos/', priority: '0.8', changefreq: 'weekly' },
    { url: '/sobre/', priority: '0.7', changefreq: 'monthly' },
    { url: '/politica/', priority: '0.5', changefreq: 'yearly' }
];

paginasEstaticas.forEach(p => {
    xmlContent += `   <url>
      <loc>${DOMINIO}${p.url}</loc>
      <lastmod>${dataHoje}</lastmod>
      <changefreq>${p.changefreq}</changefreq>
      <priority>${p.priority}</priority>
   </url>
`;
});

// 2. Ferramentas Interativas (Procurar em public/ferramentas ou ferramentas/)
const ferramentasDir = fs.existsSync(path.join(PASTA_RAIZ, 'ferramentas')) 
    ? path.join(PASTA_RAIZ, 'ferramentas') 
    : path.join(PASTA_RAIZ, 'public', 'ferramentas');

if (fs.existsSync(ferramentasDir)) {
    const fFolders = fs.readdirSync(ferramentasDir).filter(f => {
        try {
            return fs.statSync(path.join(ferramentasDir, f)).isDirectory();
        } catch { return false; }
    });
    fFolders.forEach(folder => {
        xmlContent += `   <url>
      <loc>${DOMINIO}/ferramentas/${folder}/</loc>
      <lastmod>${dataHoje}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
`;
    });
}

// 3. Jogos e Simulações (Procurar em public/jogos ou jogos/)
const jogosDir = fs.existsSync(path.join(PASTA_RAIZ, 'jogos'))
    ? path.join(PASTA_RAIZ, 'jogos')
    : path.join(PASTA_RAIZ, 'public', 'jogos');

if (fs.existsSync(jogosDir)) {
    const jFolders = fs.readdirSync(jogosDir).filter(f => {
        try {
            return fs.statSync(path.join(jogosDir, f)).isDirectory();
        } catch { return false; }
    });
    jFolders.forEach(folder => {
        xmlContent += `   <url>
      <loc>${DOMINIO}/jogos/${folder}/</loc>
      <lastmod>${dataHoje}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
   </url>
`;
    });
}

// 4. Artigos do Blog com Google Images Sitemaps
for (const [slug, post] of postsMap.entries()) {
    const urlArtigo = `${DOMINIO}/blog/${slug}/`;
    let imageXml = '';
    if (post.img && post.img.startsWith('http')) {
        imageXml = `
      <image:image>
         <image:loc>${escapeXml(post.img)}</image:loc>
         <image:title>${escapeXml(post.titulo)}</image:title>
      </image:image>`;
    }

    xmlContent += `   <url>
      <loc>${urlArtigo}</loc>
      <lastmod>${dataHoje}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.85</priority>${imageXml}
   </url>
`;
}

xmlContent += `</urlset>`;

// Salvar em múltiplos destinos essenciais
const destinos = [
    path.join(PASTA_RAIZ, 'sitemap.xml'),
    path.join(PASTA_RAIZ, 'public', 'sitemap.xml'),
    path.join(PASTA_RAIZ, 'dist', 'sitemap.xml')
];

destinos.forEach(dest => {
    try {
        const dir = path.dirname(dest);
        if (fs.existsSync(dir)) {
            fs.writeFileSync(dest, xmlContent, 'utf8');
            console.log(`✅ Sitemap salvo em: ${dest}`);
        }
    } catch (e) {
        console.warn(`⚠️ Não foi possível salvar em ${dest}:`, e.message);
    }
});

console.log(`🎉 Sucesso! Sitemap gerado com ${postsMap.size + paginasEstaticas.length} URLs indexáveis.`);