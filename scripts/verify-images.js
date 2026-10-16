const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mexico_%28orthographic_projection%29.svg/1280px-Mexico_%28orthographic_projection%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Poland_%28orthographic_projection%29.svg/1280px-Poland_%28orthographic_projection%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/1280px-Kazakhstan_%28orthographic_projection%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Altenholz%2C_Nord-Ostsee-Kanal%2C_Kreuzfahrtschiff_%22Amadea%22_--_2023_--_1129.jpg/1280px-Altenholz%2C_Nord-Ostsee-Kanal%2C_Kreuzfahrtschiff_%22Amadea%22_--_2023_--_1129.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Carta_topogr%C3%A1fica_do_Julgado_de_Montalegre_1836_Fidencio_Bourman_%28Couto_misto%29.jpg/1280px-Carta_topogr%C3%A1fica_do_Julgado_de_Montalegre_1836_Fidencio_Bourman_%28Couto_misto%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bb/2008_submarine_cable_disruption_map.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pont_depuis_l%27_Oyapock.jpg/1280px-Pont_depuis_l%27_Oyapock.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_%28orthographic_projection%29.svg/1280px-Mongolia_%28orthographic_projection%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Selat_Sunda_2014_%283%29.jpg/1280px-Selat_Sunda_2014_%283%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/M%C3%A4rket_Lighthouse%2C_Finland_IMG_3355.jpg/1280px-M%C3%A4rket_Lighthouse%2C_Finland_IMG_3355.jpg"
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function verify() {
  for (const u of urls) {
    try {
      const res = await fetch(u, {
        headers: { 'User-Agent': 'VitaleGeoImageVerifier/1.0 (https://vitalegeo.com.br; contact@vitalegeo.com.br)' }
      });
      console.log(res.status, u.split('/').pop().substring(0, 40));
    } catch (e) {
      console.error('FAIL', u, e.message);
    }
    await sleep(2000);
  }
}

verify();
