const https = require('node:https');

const testUrls = [
  { name: 'china', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg' },
  { name: 'franca', url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Charles_de_Gaulle_%28R_91%29_underway_in_the_Mediterranean_Sea_on_18_March_2019_%28190318-N-PQ548-0050%29.jpg' },
  { name: 'indonesia', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Open_pit_ferronickel_mine_in_Pomalaa_Kolaka.jpg' },
  { name: 'montreux', url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Bosphorus_viewed_from_Istanbul.jpg' },
  { name: 'finlandia', url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Finnish-Russian_border_zone_marker.jpg' },
  { name: 'alasca', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Boundary_Peak_181_Alaska_Yukon.jpg' },
  { name: 'bouvet', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Bouvet_Island.jpg' },
  { name: 'hidreletricas', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Three_Gorges_Dam%2C_middle_stream_of_Yangtze_River.jpg' },
  { name: 'petroleo', url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Pumpjack_San_Ardo.jpg' },
  { name: 'zee', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Exclusive_Economic_Zones.png' }
];

testUrls.forEach(item => {
  const req = https.request(item.url, { method: 'HEAD', headers: { 'User-Agent': 'VitaleGeoBot/1.0 (info@vitalegeo.com.br)' } }, res => {
    console.log(`${res.statusCode} ${item.name} (${item.url})`);
  });
  req.on('error', e => console.error(`${item.name} ERROR: ${e.message}`));
  req.end();
});
