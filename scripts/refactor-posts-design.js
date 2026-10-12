const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'blog');
const entries = fs.readdirSync(blogDir).filter(f => {
    const p = path.join(blogDir, f);
    return fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, 'index.html'));
});

console.log(`Encontrados ${entries.length} artigos para refatoração visual editorial anti-slop.`);

let processedCount = 0;
let stats = [];

for (const slug of entries) {
    const postFile = path.join(blogDir, slug, 'index.html');
    let content = fs.readFileSync(postFile, 'utf8');
    const originalLength = content.length;

    let updated = content;

    // 1. Remover botão flutuante lateral
    updated = updated.replace(/\s*<!--\s*Botão Voltar\s*-->\s*<div class="fixed top-24 left-6 z-30 hidden lg:block">[\s\S]*?<\/div>/g, '');
    updated = updated.replace(/\s*<div class="fixed top-24 left-6 z-30 hidden lg:block">[\s\S]*?<\/div>/g, '');

    // 2. Remover ticker de 4 métricas estilo dashboard SaaS
    updated = updated.replace(/\s*<!--\s*Dossiê Tático\s*\/\/\s*Ficha Técnica Rápida\s*\(4 Métricas\)\s*-->\s*<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">[\s\S]*?<\/div>/g, '');
    updated = updated.replace(/\s*<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10 not-prose">[\s\S]*?<\/div>/g, '');
    updated = updated.replace(/\s*<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 not-prose">[\s\S]*?<\/div>/g, '');

    // 3. Atualizar link Google Fonts para incluir Playfair Display
    if (!updated.includes('family=Playfair+Display')) {
        updated = updated.replace(
            'family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono',
            'family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono'
        );
    }

    // 4. No tailwind.config: incluir serif e ajustar typography
    if (!updated.includes("serif: ['Playfair Display'")) {
        updated = updated.replace(
            /heading: \['Plus Jakarta Sans', 'sans-serif'\],/,
            "heading: ['Plus Jakarta Sans', 'sans-serif'],\n                        serif: ['Playfair Display', 'serif'],"
        );
    }

    // Typography: H1 com Playfair Display
    updated = updated.replace(
        /h1: \{ color: '#fff', fontFamily: 'Plus Jakarta Sans', fontWeight: '700' \}/g,
        "h1: { color: '#fff', fontFamily: 'Playfair Display', fontWeight: '700' }"
    );

    // Typography: H2 sem borderLeft duro artificial
    updated = updated.replace(
        /h2: \{ color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2.2em', marginBottom: '0.8em', borderLeft: '4px solid #f59e0b', paddingLeft: '1rem', fontWeight: '700' \}/g,
        "h2: { color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2.5em', marginBottom: '0.8em', fontWeight: '700' }"
    );
    updated = updated.replace(
        /h2: \{ color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2.2em', marginBottom: '0.8em', fontWeight: '700' \}/g,
        "h2: { color: '#fff', fontFamily: 'Plus Jakarta Sans', marginTop: '2.5em', marginBottom: '0.8em', fontWeight: '700' }"
    );

    // Typography: blockquote
    updated = updated.replace(
        /backgroundColor: 'rgba\(245, 158, 11, 0\.05\)'/g,
        "backgroundColor: 'rgba(245, 158, 11, 0.04)'"
    );

    // 5. H1 do artigo com font-serif
    updated = updated.replace(
        /<h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">/g,
        '<h1 class="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">'
    );

    // 6. Badge: remover dot pulsante e limpar barra dupla '//'
    updated = updated.replace(
        /<div class="carto-badge mb-6">\s*<span class="carto-badge-dot"><\/span>\s*<span>(.*?)<\/span>\s*<\/div>/g,
        (match, p1) => {
            const cleanText = p1.replace(/\/\//g, '·').trim();
            return `<div class="carto-badge mb-6">\n                <span>${cleanText}</span>\n            </div>`;
        }
    );

    // 7. Salvar se houver alteração
    if (updated !== content) {
        fs.writeFileSync(postFile, updated, 'utf8');
        processedCount++;
        stats.push({
            slug,
            delta: updated.length - originalLength,
            newLength: updated.length
        });
    }
}

console.log(`\nSucesso! ${processedCount} de ${entries.length} artigos foram refatorados com o novo design system editorial.`);
stats.slice(0, 10).forEach(s => {
    console.log(`- ${s.slug}: ${s.newLength} bytes (${s.delta} bytes de remoção de AI slop)`);
});
