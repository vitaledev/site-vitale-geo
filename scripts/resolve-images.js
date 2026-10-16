import fs from 'node:fs';

const items = [
  { slug: 'historia-do-mexico', search: 'Mexico (orthographic projection)' },
  { slug: 'geopolitica-da-polonia', search: 'Poland (orthographic projection)' },
  { slug: 'geoeconomia-do-cazaquistao', search: 'Kazakhstan (orthographic projection)' },
  { slug: 'canal-de-kiel-alemanha', search: 'Kiel Canal' },
  { slug: 'couto-misto-microestado', search: 'Couto Misto' },
  { slug: 'cabos-submarinos-fortaleza', search: 'Submarine cable map' },
  { slug: 'fronteira-franca-brasil-oiapoque', search: 'Oyapock River Bridge' },
  { slug: 'mongolia-vazio-demografico', search: 'Mongolia (orthographic projection)' },
  { slug: 'estreitos-sunda-lombok', search: 'Sunda Strait' },
  { slug: 'ilha-market-fronteira-ziguezague', search: 'Market island' }
];

async function findImage(query) {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|thumburl&iiurlwidth=1280&format=json`;
  const res = await fetch(searchUrl, {
    headers: { 'User-Agent': 'VitaleGeoIndexer/1.0 (https://www.vitalegeo.com.br; contact@vitalegeo.com.br)' }
  });
  const data = await res.json();
  if (data.query && data.query.pages) {
    for (const page of Object.values(data.query.pages)) {
      if (page.imageinfo && page.imageinfo[0]) {
        return {
          title: page.title,
          url: page.imageinfo[0].thumburl || page.imageinfo[0].url
        };
      }
    }
  }
  return null;
}

async function run() {
  for (const item of items) {
    const result = await findImage(item.search);
    console.log(item.slug, ':', result);
  }
}

run();
