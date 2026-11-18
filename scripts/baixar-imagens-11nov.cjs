const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const images = [
  {
    slug: 'historia-do-japao-meiji-expansao-fronteiras-tratado-sao-francisco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Japanese_Empire2.png'
  },
  {
    slug: 'geopolitica-da-polonia-corredor-de-suwalki-planicie-otan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Suwalki_Gap-de-cropped.png'
  },
  {
    slug: 'geoeconomia-da-australia-minerio-de-ferro-pilbara-litio-riquezas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/BHP_Yandi_mine_seen_from_the_air%2C_October_2021.jpg'
  },
  {
    slug: 'triplice-fronteira-brasil-argentina-paraguai-iguacu-itaipu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Las_Tres_Fronteras_-_Triple_Border_%28Argentina%2C_Brasil%2C_Paraguay%29.jpg'
  },
  {
    slug: 'canal-de-kiel-alemanha-chokepoint-mar-do-norte-baltico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Nord-Ostsee-Kanal_Kiel-Holtenau.JPG'
  },
  {
    slug: 'ilha-dos-faisoes-condominio-fronteira-franca-espanha-rio-bidasoa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Irun_-_Isla_de_los_Faisanes_sobre_el_r%C3%ADo_Bisasoa_01.jpg'
  },
  {
    slug: 'estreito-de-bering-diomedes-fronteira-russia-estados-unidos',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bering_Strait.jpeg'
  },
  {
    slug: 'ranking-maiores-produtores-de-alimentos-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Combine_unloads_grain_-_Wheat_harvesting_in_Eastern_Washington_near_the_town_of_Steptoe.jpg'
  },
  {
    slug: 'ranking-maiores-portos-de-conteineres-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Shanghai-Yangshan-Port-Containers2013-01.JPG'
  },
  {
    slug: 'ranking-paises-mais-densamente-povoados-do-mundo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Monaco_from_la_turbie.jpg'
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
