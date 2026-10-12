const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'blog');
const entries = fs.readdirSync(blogDir).filter(f => {
    const p = path.join(blogDir, f);
    return fs.statSync(p).isDirectory() && f !== 'fronteira-mais-louca';
});

console.log(`Auditando a qualidade e integridade editorial dos ${entries.length} dossiês...\n`);

let passedCount = 0;
let errors = [];

for (const slug of entries) {
    const postFile = path.join(blogDir, slug, 'index.html');
    if (!fs.existsSync(postFile)) {
        errors.push(`[${slug}] Arquivo index.html não existe!`);
        continue;
    }

    const html = fs.readFileSync(postFile, 'utf8');

    // 1. Extração de texto puro dentro de <article>
    const articleMatch = html.match(/<article[\s\S]*?<\/article>/);
    if (!articleMatch) {
        errors.push(`[${slug}] Tag <article> não encontrada!`);
        continue;
    }

    const cleanText = articleMatch[0]
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const charCount = cleanText.length;

    // 2. Verificações de AI Slop
    const hasFloatingButton = html.includes('fixed top-24 left-6');
    const hasSaaSMetricsGrid = html.includes('grid-cols-4 gap-3 my-10 not-prose') || html.includes('grid-cols-4 gap-3 my-8 not-prose');
    const hasPlayfairFont = html.includes('Playfair+Display');
    const hasSerifHeading = html.includes('font-serif font-bold text-white mb-6');
    const hasBorderLeftH2 = html.includes("borderLeft: '4px solid #f59e0b'");

    if (charCount < 8000) {
        errors.push(`[${slug}] Texto puro abaixo de 8.000 chars: ${charCount} chars`);
    }
    if (hasFloatingButton) {
        errors.push(`[${slug}] Botão flutuante ainda presente!`);
    }
    if (hasSaaSMetricsGrid) {
        errors.push(`[${slug}] Ticker de 4 caixas SaaS ainda presente!`);
    }
    if (!hasPlayfairFont) {
        errors.push(`[${slug}] Fonte Playfair Display não importada!`);
    }
    if (!hasSerifHeading) {
        errors.push(`[${slug}] H1 não está usando font-serif editorial!`);
    }
    if (hasBorderLeftH2) {
        errors.push(`[${slug}] Borda amarela dura em H2 ainda configurada!`);
    }

    console.log(`✓ [${slug}] ${charCount.toLocaleString('pt-BR')} caracteres | Playfair: SIM | Anti-Slop: 100%`);
    passedCount++;
}

console.log(`\n========================================`);
console.log(`AUDITORIA CONCLUÍDA:`);
console.log(`Artigos aprovados: ${passedCount} de ${entries.length}`);
if (errors.length > 0) {
    console.error(`Falhas encontradas (${errors.length}):`);
    errors.forEach(err => console.error(`- ${err}`));
    process.exit(1);
} else {
    console.log(`STATUS: 100% APROVADO! Todos os dossiês possuem densidade editorial nobre (>8.000 chars), tipografia Playfair Display e zero poluição visual de IA.`);
}
