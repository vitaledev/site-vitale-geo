const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const { execSync } = require('node:child_process');

const files = [
  {
    slug: 'historia-do-brasil-tratado-de-madri-petropolis-fronteiras',
    title: 'Vice-Reino_do_Brazil_1763.jpg',
    ext: 'jpg'
  },
  {
    slug: 'geopolitica-da-noruega-estreito-do-urso-otan-artico-gas',
    title: 'Troll_A_Platform.jpg',
    ext: 'jpg'
  },
  {
    slug: 'geoeconomia-dos-emirados-arabes-fundos-soberanos-oleoduto-fujairah',
    title: 'Oil_tanks,_Fujairah_Port.jpg',
    ext: 'jpg'
  },
  {
    slug: 'estreito-de-luzon-taiwan-filipinas-cabos-submarinos-pacifico',
    title: 'USS_Ronald_Reagan_(CVN_76)_operates_near_the_Luzon_Strait_(8468663).jpg',
    ext: 'jpg'
  },
  {
    slug: 'corredor-transcaspiano-rota-do-meio-china-europa-caucaso',
    title: 'Middle_Corridor_Route.svg',
    ext: 'png'
  },
  {
    slug: 'arquipelago-chagos-diego-garcia-reino-unido-mauricio-eua',
    title: 'Diego_Garcia_photographié_par_le_satellite_Sentinel_2.jpg',
    ext: 'jpg'
  },
  {
    slug: 'soluco-de-churchill-fronteira-jordania-arabia-saudita-acordo-hadda',
    title: 'Jordan_location_map_Topographic.png',
    ext: 'png'
  },
  {
    slug: 'disputa-do-chamizal-rio-grande-fronteira-eua-mexico-concreto',
    title: 'Chamizal_dispute_map_01.svg',
    ext: 'png'
  },
  {
    slug: 'ranking-maiores-reservas-de-litio-do-mundo-baterias',
    title: 'Salar_de_Atacama.jpg',
    ext: 'jpg'
  },
  {
    slug: 'ranking-menores-paises-do-mundo-microestados-area',
    title: 'Vatikanische_Gaerten_Museen_Rom.jpg',
    ext: 'jpg'
  }
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function getImageUrl(fileTitle) {
  return new Promise((resolve) => {
    const apiPath = `/w/api.php?action=query&titles=File:${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
    https.get({
      hostname: 'commons.wikimedia.org',
      path: apiPath,
      headers: { 'User-Agent': 'VitaleGeoBot/1.0 (https://www.vitalegeo.com.br; contato@vitalegeo.com.br)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pid = Object.keys(pages)[0];
          const info = pages[pid].imageinfo[0];
          resolve(info.thumburl || info.url);
        } catch (e) {
          console.error(`Parse error for ${fileTitle}:`, data.slice(0, 120));
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  const dirPublic = 'D:/Dev/vitale-geo/public/assets/img/blog';
  const dirAssets = 'D:/Dev/vitale-geo/assets/img/blog';
  fs.mkdirSync(dirPublic, { recursive: true });
  fs.mkdirSync(dirAssets, { recursive: true });

  for (const item of files) {
    await sleep(1500);
    const url = await getImageUrl(item.title);
    if (!url) {
      console.error(`Erro ao obter URL para: ${item.slug}`);
      continue;
    }
    const filename = `${item.slug}.${item.ext}`;
    const p1 = path.join(dirPublic, filename);
    const p2 = path.join(dirAssets, filename);
    console.log(`Baixando: ${filename} de ${url}`);
    try {
      await sleep(1000);
      execSync(`curl.exe -s -L -A "VitaleGeoBot/1.0 (https://www.vitalegeo.com.br; contato@vitalegeo.com.br)" "${url}" -o "${p1}"`, { timeout: 60000 });
      const buf = fs.readFileSync(p1);
      const hex = buf.subarray(0, 4).toString('hex').toUpperCase();
      const isJpg = hex.startsWith('FFD8FF');
      const isPng = hex === '89504E47';
      if ((!isJpg && !isPng) || buf.length < 10000) {
        console.error(`  -> INVALIDO (${hex}, ${buf.length} bytes)`);
        continue;
      }
      fs.copyFileSync(p1, p2);
      console.log(`  -> Sucesso: ${buf.length} bytes (magic: ${hex})`);
    } catch (err) {
      console.error(`  -> Erro ao baixar ${filename}: ${err.message}`);
    }
  }
}

main();
