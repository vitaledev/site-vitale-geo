const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const { execSync } = require('node:child_process');

const files = [
  {
    slug: 'historia-da-china-dinastia-qing-tratados-desiguais-fronteiras',
    title: 'Map-Qing_Dynasty_1911.jpg'
  },
  {
    slug: 'geopolitica-da-franca-zona-economica-exclusiva-oceanos-dissuasao',
    title: 'French_aircraft_carrier_Charles_de_Gaulle_(R91)_underway_on_24_April_2019_(190424-M-BP588-1005).jpg'
  },
  {
    slug: 'geoeconomia-da-indonesia-niquel-baterias-minerais-estrategicos',
    title: 'Sulawesi,_Indonesia_(PIA26007).jpg'
  },
  {
    slug: 'convencao-de-montreux-estreitos-turcos-bosforo-dardanelos',
    title: 'Bosphorus_Bridge_across_Bosphorus_Strait,_connecting_Europe_and_Asia_(Ank_Kumar)_08.jpg'
  },
  {
    slug: 'fronteira-finlandia-russia-carelia-fechamento-cerca-otan',
    title: 'Border_barrier_in_Pelkola,_Imatra.jpg'
  },
  {
    slug: 'fronteira-alasca-canada-meridiano-141-tratado-sao-petersburgo',
    title: 'Border_vista.jpg'
  },
  {
    slug: 'ilha-bouvet-ponto-de-terra-mais-isolado-do-mundo-noruega',
    title: 'Bouvet_aerial_photo.jpg'
  },
  {
    slug: 'ranking-maiores-hidreletricas-do-mundo-geracao-energia',
    title: 'Usina_Hidroelétrica_Itaipu_Binacional_-_Itaipu_Dam_-_Foto_aérea_da_usina_com_o_vertedouro_aberto_-_Aerial_photo_of_the_powerplant_with_the_spillway_gates_opened_(17359345042).jpg'
  },
  {
    slug: 'ranking-maiores-produtores-de-petroleo-do-mundo-barris-dia',
    title: 'Oil_platform_P-51_(Brazil).jpg'
  },
  {
    slug: 'ranking-maiores-zonas-economicas-exclusivas-do-mundo-zee',
    title: 'Exclusive_Economic_Zones_-_World.svg'
  }
];

function getImageUrl(fileTitle) {
  return new Promise((resolve) => {
    const apiPath = `/w/api.php?action=query&titles=File:${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json`;
    https.get({
      hostname: 'commons.wikimedia.org',
      path: apiPath,
      headers: { 'User-Agent': 'VitaleGeoBot/1.0 (info@vitalegeo.com.br)' }
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
    const url = await getImageUrl(item.title);
    if (!url) {
      console.error(`Erro ao obter URL para: ${item.slug}`);
      continue;
    }
    const p1 = path.join(dirPublic, `${item.slug}.jpg`);
    const p2 = path.join(dirAssets, `${item.slug}.jpg`);
    console.log(`Baixando: ${item.slug} de ${url}`);
    try {
      execSync(`curl.exe -s -L -A "VitaleGeoBot/1.0 (info@vitalegeo.com.br)" "${url}" -o "${p1}"`, { timeout: 60000 });
      fs.copyFileSync(p1, p2);
      const sz = fs.statSync(p1).size;
      console.log(`  -> Sucesso: ${sz} bytes`);
    } catch (err) {
      console.error(`  -> Erro ao baixar ${item.slug}: ${err.message}`);
    }
  }
}

main();
