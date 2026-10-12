const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const postsJsFile = path.join(rootDir, 'assets', 'js', 'posts.js');
const outputRssRoot = path.join(rootDir, 'rss.xml');
const outputRssPublic = path.join(rootDir, 'public', 'rss.xml');

// 1. Ler o banco de dados de posts
if (!fs.existsSync(postsJsFile)) {
    console.error('❌ Erro: Arquivo posts.js não encontrado em', postsJsFile);
    process.exit(1);
}

const postsContent = fs.readFileSync(postsJsFile, 'utf8');
const fn = new Function(postsContent + '; return blogPosts;');
const blogPosts = fn();

console.log(`📡 Processando ${blogPosts.length} artigos para o Feed RSS...`);

// Meses em português para converter para Date RFC-822
const meses = {
    'jan': 0, 'fev': 1, 'mar': 2, 'abr': 3, 'mai': 4, 'jun': 5,
    'jul': 6, 'ago': 7, 'set': 8, 'out': 9, 'nov': 10, 'dez': 11
};

function parseDataRfc(str) {
    if (!str) return new Date().toUTCString();
    const parts = str.trim().split(/[\s\-:]+/);
    if (parts.length >= 3) {
        const dia = parseInt(parts[0], 10);
        const mesStr = (parts[1] || '').toLowerCase().slice(0, 3);
        const mes = meses[mesStr] !== undefined ? meses[mesStr] : 9;
        const ano = parseInt(parts[2], 10) || 2026;
        const hora = parseInt(parts[3], 10) || 12;
        const min = parseInt(parts[4], 10) || 0;
        // Compensando fuso de Brasília (UTC-3) para UTC
        const d = new Date(Date.UTC(ano, mes, dia, hora + 3, min));
        return d.toUTCString();
    }
    return new Date().toUTCString();
}

function escapeXml(unsafe) {
    if (!unsafe) return '';
    return unsafe.replace(/[<>&'"]/g, c => {
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

const siteUrl = 'https://www.vitalegeo.com.br';
const feedUrl = `${siteUrl}/rss.xml`;
const lastBuildDate = new Date().toUTCString();

let itemsXml = '';

for (const post of blogPosts) {
    let postLink = post.link || '';
    if (!postLink.startsWith('http')) {
        postLink = `${siteUrl}/blog/${postLink.replace(/^\//, '')}`;
        if (!postLink.endsWith('/')) postLink += '/';
    }

    const pubDate = parseDataRfc(post.data);
    const tituloEscaped = escapeXml(post.titulo);
    const categoriaEscaped = escapeXml(post.categoria || 'Geopolítica');
    const resumo = post.resumo || '';
    const imagem = post.img || `${siteUrl}/assets/icons/favicon.svg`;

    itemsXml += `    <item>
      <title>${tituloEscaped}</title>
      <link>${postLink}</link>
      <guid isPermaLink="true">${postLink}</guid>
      <description><![CDATA[${resumo}]]></description>
      <category>${categoriaEscaped}</category>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${escapeXml(imagem)}" type="image/jpeg" length="102400" />
      <media:content url="${escapeXml(imagem)}" medium="image" type="image/jpeg" />
    </item>\n`;
}

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom" 
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>VitaleGeo | Geopolítica, Fronteiras &amp; Cartografia</title>
    <link>${siteUrl}</link>
    <description>Investigações territoriais, anomalias de fronteiras, rotas navais estratégicas e dossiês geopolíticos documentados.</description>
    <language>pt-BR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/assets/img/publisher/logo-publisher-square-1000.png</url>
      <title>VitaleGeo</title>
      <link>${siteUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
${itemsXml}  </channel>
</rss>`;

// Salva na raiz
fs.writeFileSync(outputRssRoot, rssXml, 'utf8');
console.log(`✅ Feed RSS gerado com sucesso na raiz: ${outputRssRoot}`);

// Salva na pasta public se ela existir
if (fs.existsSync(path.join(rootDir, 'public'))) {
    fs.writeFileSync(outputRssPublic, rssXml, 'utf8');
    console.log(`✅ Feed RSS sincronizado em public/: ${outputRssPublic}`);
}
