import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// CONFIGURAÇÕES
const DOMINIO = 'https://www.vitalegeo.com.br';
const __filename = fileURLToPath(import.meta.url);
const PASTA_RAIZ = path.dirname(__filename); // Onde o script está
const ARQUIVO_SAIDA = 'sitemap.xml';

const IGNORAR = ['.git', '.vscode', '.github', '.astro', 'assets', '_modelos', 'node_modules', 'dist', 'public'];

// Cabeçalho do XML
let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Função Recursiva para varrer pastas
function varrerPastas(diretorio) {
    const arquivos = fs.readdirSync(diretorio);

    arquivos.forEach(arquivo => {
        const caminhoCompleto = path.join(diretorio, arquivo);
        const status = fs.statSync(caminhoCompleto);

        // Se for pasta e não estiver na lista de ignorados
        if (status.isDirectory()) {
            if (!IGNORAR.includes(arquivo)) {
                varrerPastas(caminhoCompleto);
            }
        } 
        // Se for arquivo e for index.html
        else if (arquivo === 'index.html') {
            let urlPath = caminhoCompleto.replace(PASTA_RAIZ, '').replace(/\\/g, '/');
            
            // Remove o "index.html" do final para a URL ficar bonita (ex: /blog/sealand/)
            urlPath = urlPath.replace('index.html', '');
            
            // Monta a URL completa
            const urlFinal = DOMINIO + urlPath;
            const dataHoje = new Date().toISOString().split('T')[0];

            // Define prioridade (Home = 1.0, Resto = 0.8)
            const prioridade = urlPath === '/' ? '1.0' : '0.8';

            // Adiciona ao XML
            xmlContent += `   <url>
      <loc>${urlFinal}</loc>
      <lastmod>${dataHoje}</lastmod>
      <priority>${prioridade}</priority>
   </url>
`;
            console.log(`✅ Adicionado: ${urlFinal}`);
        }
    });
}

console.log('🔄 Gerando sitemap...');
varrerPastas(PASTA_RAIZ);

// Fecha o XML
xmlContent += `</urlset>`;

// Salva o arquivo
fs.writeFileSync(ARQUIVO_SAIDA, xmlContent);
console.log(`\n🎉 Sucesso! Arquivo ${ARQUIVO_SAIDA} atualizado.`);