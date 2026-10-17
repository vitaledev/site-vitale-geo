import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const DISCOVER_META = '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">';
const RSS_LINK = '<link rel="alternate" type="application/rss+xml" title="VitaleGeo | Feed RSS" href="https://www.vitalegeo.com.br/rss.xml">';

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Inserir DISCOVER_META se não existir
    if (!content.includes('max-image-preview:large')) {
        // Se já tiver meta robots simples, substituir
        if (content.includes('<meta name="robots"')) {
            content = content.replace(/<meta name="robots"[^>]*>/i, DISCOVER_META);
            modified = true;
        } else if (content.includes('</title>')) {
            content = content.replace('</title>', `</title>\n    ${DISCOVER_META}`);
            modified = true;
        } else if (content.includes('<head>')) {
            content = content.replace('<head>', `<head>\n    ${DISCOVER_META}`);
            modified = true;
        }
    }

    // 2. Inserir RSS_LINK se não existir
    if (!content.includes('type="application/rss+xml"')) {
        if (content.includes(DISCOVER_META)) {
            content = content.replace(DISCOVER_META, `${DISCOVER_META}\n    ${RSS_LINK}`);
            modified = true;
        } else if (content.includes('</title>')) {
            content = content.replace('</title>', `</title>\n    ${RSS_LINK}`);
            modified = true;
        } else if (content.includes('<head>')) {
            content = content.replace('<head>', `<head>\n    ${RSS_LINK}`);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function walkDir(dir) {
    let updatedCount = 0;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (['node_modules', '.git', '.vscode', '.astro', 'dist'].includes(item)) continue;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            updatedCount += walkDir(fullPath);
        } else if (item === 'index.html' || item.endsWith('.html')) {
            if (processHtmlFile(fullPath)) {
                updatedCount++;
                console.log(`[OK] Atualizado com Discover & RSS: ${path.relative(rootDir, fullPath)}`);
            }
        }
    }
    return updatedCount;
}

console.log('🔍 Iniciando verificação e injeção de tags Google Discover & Feed RSS...');
const total = walkDir(rootDir);
console.log(`🎉 Concluído! Total de arquivos HTML atualizados: ${total}`);
