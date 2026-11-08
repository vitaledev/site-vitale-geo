const urls = [
  // 1. Chile
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Torres_del_Paine_from_the_air.jpg/1280px-Torres_del_Paine_from_the_air.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Chile_satellite_map.jpg",
  // 2. Polonia
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Poland_topo.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Poland_satellite_image.jpg/1280px-Poland_satellite_image.jpg",
  // 3. Indonesia
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Indonesia_satellite_orthographic.jpg/1280px-Indonesia_satellite_orthographic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Indonesia_satellite_map.jpg/1280px-Indonesia_satellite_map.jpg",
  // 4. Malaca
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/Strait_of_malacca.jpg",
  // 5. Panama
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Panama_Canal_Miraflores_Locks.jpg/1280px-Panama_Canal_Miraflores_Locks.jpg",
  // 6. Paralelo 49
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Peace_Arch_%28Canada%E2%80%93United_States_border%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/International_Boundary_Vista.jpg/1280px-International_Boundary_Vista.jpg",
  // 7. Bir Tawil
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bir_Tawil_and_Halaib_Triangle.svg/1280px-Bir_Tawil_and_Halaib_Triangle.svg.png",
  // 8. Landlocked
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Landlocked_countries.svg/1280px-Landlocked_countries.svg.png",
  // 9. Linhas Ferreas
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trans-Siberian_railway_map.png/1280px-Trans-Siberian_railway_map.png",
  // 10. Maiores Lagos
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Caspian_Sea_from_orbit.jpg/1280px-Caspian_Sea_from_orbit.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Baikal_satellite_photo.jpg/1280px-Baikal_satellite_photo.jpg"
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function verify() {
  for (const u of urls) {
    try {
      const res = await fetch(u, {
        method: 'HEAD',
        headers: { 'User-Agent': 'VitaleGeoImageVerifier/1.0 (https://vitalegeo.com.br; contact@vitalegeo.com.br)' }
      });
      console.log(res.status, u);
    } catch (e) {
      console.error('FAIL', u, e.message);
    }
    await sleep(200);
  }
}

verify();
