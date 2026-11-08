import fs from 'node:fs';
import path from 'node:path';

const UA = 'VitaleGeoBot/2.0 (https://www.vitalegeo.com.br; contato@vitalegeo.com.br) Node-fetch/3.0';

async function searchCommonsFile(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|size&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Commons API error: ${res.status}`);
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];
  return Object.values(data.query.pages)
    .filter(p => p.imageinfo?.[0]?.mime?.startsWith('image/'))
    .map(p => ({
      title: p.title,
      url: p.imageinfo[0].url.replace(/\?.*$/, ''),
      size: p.imageinfo[0].size
    }));
}

async function downloadImage(url, destPath) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (res.status === 200) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`Saved: ${destPath} (${Math.round(buffer.byteLength / 1024)} KB)`);
        return true;
      }
      if (res.status === 429) {
        console.log(`Rate limited on attempt ${attempt}, waiting 3s...`);
        await new Promise(r => setTimeout(r, 3000));
      } else {
        console.log(`HTTP ${res.status} for ${url}`);
        return false;
      }
    } catch (e) {
      console.log(`Error: ${e.message}`);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  return false;
}

const targets = [
  { slug: "historia-do-chile-formacao-territorial-guerra-do-pacifico", query: "Chile satellite map Andes" },
  { slug: "geopolitica-do-paquistao-porto-gwadar-cpec-caxemira", query: "Gwadar port satellite" },
  { slug: "geoeconomia-da-china-terras-raras-monopolio-tecnologico", query: "Bayan Obo rare earth mine" },
  { slug: "estreito-de-dover-canal-da-mancha-chokepoint-maritimo", query: "Strait of Dover satellite" },
  { slug: "tampao-de-darien-selva-colombia-panama-rodovia-pan-americana", query: "Darien National Park aerial" },
  { slug: "monte-athos-grecia-fronteira-republica-monastica-avaton", query: "Mount Athos aerial Simonopetra" },
  { slug: "baia-de-guantanamo-enclave-militar-eua-cuba", query: "Guantanamo Bay aerial view" },
  { slug: "ranking-maiores-paises-sem-saida-para-o-mar", query: "World map landlocked countries" },
  { slug: "ranking-maiores-reservas-de-petroleo-do-mundo", query: "Oil refinery aerial" },
  { slug: "ranking-maiores-peninsulas-do-mundo", query: "Arabian peninsula from space" }
];

(async () => {
  for (const t of targets) {
    console.log(`\nProcessing ${t.slug}...`);
    const outPath = path.join('D:/Dev/vitale-geo/public/assets/img/blog', `${t.slug}.jpg`);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
      console.log(`Already exists: ${outPath}`);
      continue;
    }
    const candidates = await searchCommonsFile(t.query);
    console.log(`Found ${candidates.length} candidates.`);
    let success = false;
    for (const c of candidates) {
      console.log(`Trying: ${c.title} (${c.url})`);
      const ok = await downloadImage(c.url, outPath);
      if (ok) {
        success = true;
        break;
      }
      await new Promise(r => setTimeout(r, 1000));
    }
    if (!success) {
      console.warn(`WARNING: Could not download for ${t.slug}`);
    }
    await new Promise(r => setTimeout(r, 1500));
  }
})();
