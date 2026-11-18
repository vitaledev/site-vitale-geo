import fs from 'node:fs';
import { execSync } from 'node:child_process';

const images = [
  { slug: 'historia-da-italia-unificacao-risorgimento-fronteiras', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Historical-map-of-Italy.png' },
  { slug: 'geopolitica-do-vietna-mar-da-china-meridional-baia-cam-ranh', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Cam_Ranh_Bay_satellite_view.jpg' },
  { slug: 'geoeconomia-da-africa-do-sul-platina-cromo-minerais-estrategicos', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bushveld_Igneous_Complex%2C_South_Africa_%28ASTER%29.jpg' },
  { slug: 'estreito-de-torres-australia-papua-nova-guine-fronteira-recifes', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Torres_Strait_%28MODIS_2018-08-23%29.jpg' },
  { slug: 'triplice-fronteira-monte-roraima-brasil-venezuela-guiana', url: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Kukenan_Roraima_GS.jpg' },
  { slug: 'disputa-fronteira-olivenca-portugal-espanha-tratado-viena', url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ponte_da_Ajuda_1.jpg' },
  { slug: 'estreito-de-bonifacio-corsica-sardenha-franca-italia-canal', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Strait_of_Bonifacio_-_Envisat.jpg' },
  { slug: 'ranking-paises-mais-ricos-do-mundo-pib-per-capita', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/IMF_GDP_PPP_per_capita_by_country_%28Oct_2022%29.png' },
  { slug: 'ranking-maiores-reservas-de-ouro-do-mundo', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/400-oz-Gold-Bars-AB-01.jpg' },
  { slug: 'ranking-paises-mais-visitados-do-mundo', url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Overtourism_at_the_Trevi_Fountain_in_Rome.jpg' }
];

for (const img of images) {
  const p1 = `D:/Dev/vitale-geo/public/assets/img/blog/${img.slug}.jpg`;
  const p2 = `D:/Dev/vitale-geo/assets/img/blog/${img.slug}.jpg`;
  console.log(`Downloading: ${img.slug}`);
  try {
    execSync(`curl.exe -s -L -A "VitaleGeoBot/1.0 (info@vitalegeo.com.br)" "${img.url}" -o "${p1}"`, { timeout: 45000 });
    fs.copyFileSync(p1, p2);
    const sz = fs.statSync(p1).size;
    console.log(`  -> Sucesso: ${sz} bytes`);
  } catch (err) {
    console.error(`  -> Erro: ${err.message}`);
  }
}
