const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const images = [
  {
    slug: 'historia-da-suica-neutralidade-fronteiras-alpes-congresso-viena',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Swiss_R%C3%BCtlischwur.jpg'
  },
  {
    slug: 'geopolitica-da-indonesia-estreitos-malaca-sunda-indo-pacifico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Straits_of_Malacca.png'
  },
  {
    slug: 'geoeconomia-do-mexico-nearshoring-fronteira-corredor-interoceanico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mexico-US_border_at_Tijuana.jpg'
  },
  {
    slug: 'estreito-de-messina-italia-sicilia-maior-ponte-pensil',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Stretto_di_messina_satellite.jpg'
  },
  {
    slug: 'rio-amur-fronteira-russia-china-blagoveshchensk-heihe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Amur_River_and_Heihe.jpg'
  },
  {
    slug: 'atol-de-scarborough-mar-da-china-meridional-filipinas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Scarborough_Shoal_Landsat.jpg'
  },
  {
    slug: 'disputa-fronteira-mont-blanc-franca-italia-cume-alpes',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg'
  },
  {
    slug: 'ranking-maiores-linhas-de-costa-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Geirangerfjord_LC0188.jpg'
  },
  {
    slug: 'ranking-maiores-malhas-ferroviarias-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Union_Pacific_Railroad_Intermodal_Terminal%2C_Santa_Teresa_NM.jpg'
  },
  {
    slug: 'ranking-maiores-produtores-de-energia-renovavel-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Itaipu_Dam%2C_aerial_photograph.jpg'
  }
];

const dirPublic = 'D:/Dev/vitale-geo/public/assets/img/blog';
const dirAssets = 'D:/Dev/vitale-geo/assets/img/blog';

fs.mkdirSync(dirPublic, { recursive: true });
fs.mkdirSync(dirAssets, { recursive: true });

for (const item of images) {
  const p1 = path.join(dirPublic, `${item.slug}.jpg`);
  const p2 = path.join(dirAssets, `${item.slug}.jpg`);
  console.log(`Baixando: ${item.slug}`);
  try {
    execSync(`curl.exe -s -L -A "VitaleGeoBot/1.0 (info@vitalegeo.com.br)" "${item.url}" -o "${p1}"`, { timeout: 60000 });
    fs.copyFileSync(p1, p2);
    const sz = fs.statSync(p1).size;
    console.log(`  -> Sucesso: ${sz} bytes`);
  } catch (err) {
    console.error(`  -> Erro ao baixar ${item.slug}: ${err.message}`);
  }
}
