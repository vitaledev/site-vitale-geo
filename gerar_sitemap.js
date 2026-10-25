import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getBlogPosts } from './scripts/blog-content.js';

const DOMINIO = 'https://www.vitalegeo.com.br';
const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.dirname(__filename);

const dataHoje = new Date().toISOString().split('T')[0];

// O Markdown do Astro é a fonte canônica de metadados, imagens e slugs.
const postsMap = new Map(getBlogPosts(PASTA_RAIZ).map(post => [post.slug, post]));
console.log(`📑 Encontrados ${postsMap.size} posts na coleção Markdown do Astro.`);

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

let ferramentasIncluidas = 0;
let jogosIncluidos = 0;

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
        ferramentasIncluidas++;
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
        jogosIncluidos++;
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
    if (post.img) {
        const imageUrl = post.img.startsWith('http')
            ? post.img
            : `${DOMINIO}${post.img.startsWith('/') ? '' : '/'}${post.img}`;
        imageXml = `
      <image:image>
         <image:loc>${escapeXml(imageUrl)}</image:loc>
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

const totalUrls = postsMap.size + paginasEstaticas.length + ferramentasIncluidas + jogosIncluidos;
console.log(`🎉 Sucesso! Sitemap gerado com ${totalUrls} URLs indexáveis.`);
