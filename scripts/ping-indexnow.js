import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const sitemapFile = path.join(rootDir, 'public', 'sitemap.xml') || path.join(rootDir, 'sitemap.xml');
const key = 'c4b9e28f1d7a46e3950b712fa83d9e01';
const host = 'www.vitalegeo.com.br';
const keyLocation = `https://${host}/${key}.txt`;

const targetSitemap = fs.existsSync(path.join(rootDir, 'public', 'sitemap.xml')) 
    ? path.join(rootDir, 'public', 'sitemap.xml')
    : path.join(rootDir, 'sitemap.xml');

if (!fs.existsSync(targetSitemap)) {
    console.error('❌ sitemap.xml não encontrado. Execute node gerar_sitemap.js antes.');
    process.exit(1);
}

const sitemapContent = fs.readFileSync(targetSitemap, 'utf8');
const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log(`🚀 Preparando envio de ${urls.length} URLs para o IndexNow (Bing, Copilot, ChatGPT Search)...`);

async function sendIndexNow() {
    const payload = {
        host: host,
        key: key,
        keyLocation: keyLocation,
        urlList: urls
    };

    try {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        if (response.status === 200 || response.status === 202) {
            console.log(`✅ Sucesso! IndexNow respondeu HTTP ${response.status}. URLs enviadas para indexação prioritária no Bing e parceiros.`);
        } else {
            const body = await response.text();
            console.warn(`⚠️ Resposta do IndexNow: HTTP ${response.status}`, body);
        }
    } catch (err) {
        console.error('❌ Erro ao conectar com a API do IndexNow:', err.message);
    }
}

sendIndexNow();
