const https = require('node:https');

async function getCommonsUrl(fileTitle) {
  return new Promise((resolve) => {
    const apiPath = `/w/api.php?action=query&titles=File:${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json`;
    const opts = {
      hostname: 'commons.wikimedia.org',
      path: apiPath,
      headers: { 'User-Agent': 'VitaleGeoBot/1.0 (info@vitalegeo.com.br)' }
    };
    https.get(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].imageinfo && pages[pageId].imageinfo[0]) {
            resolve(pages[pageId].imageinfo[0].url);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function searchCommons(query) {
  return new Promise((resolve) => {
    const apiPath = `/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json&srlimit=3`;
    const opts = {
      hostname: 'commons.wikimedia.org',
      path: apiPath,
      headers: { 'User-Agent': 'VitaleGeoBot/1.0 (info@vitalegeo.com.br)' }
    };
    https.get(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const results = json.query.search.map(s => s.title.replace(/^File:/i, ''));
          resolve(results);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const topics = [
    { slug: 'ilha-bouvet', q: 'Bouvet Island' },
    { slug: 'petroleo', q: 'Offshore platform' }
  ];

  for (const t of topics) {
    const hits = await searchCommons(t.q);
    console.log(`\nTopic: ${t.slug} (search: ${t.q})`);
    for (const h of hits) {
      const url = await getCommonsUrl(h);
      console.log(`  - ${h} => ${url}`);
    }
  }
}

main();
