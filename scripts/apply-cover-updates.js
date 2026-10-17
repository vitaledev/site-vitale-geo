import fs from 'node:fs';
import path from 'node:path';

const REPLACEMENTS = [
  {
    slug: 'mongolia-vazio-demografico',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mongolia_%28orthographic_projection%29.svg/1280px-Mongolia_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mongolian_Steppes_%286228096139%29.jpg/1280px-Mongolian_Steppes_%286228096139%29.jpg'
  },
  {
    slug: 'geoeconomia-do-cazaquistao',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kazakhstan_%28orthographic_projection%29.svg/1280px-Kazakhstan_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg/1280px-Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg'
  },
  {
    slug: 'geopolitica-da-polonia',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Poland_%28orthographic_projection%29.svg/1280px-Poland_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Suwalki_Gap-de-cropped.png'
  },
  {
    slug: 'historia-do-mexico',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mexico_%28orthographic_projection%29.svg/1280px-Mexico_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mexican_Cession.png/1280px-Mexican_Cession.png'
  },
  {
    slug: 'djibuti-bases-militares',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Djibouti_%28orthographic_projection%29.svg/1280px-Djibouti_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bab-el-Mandeb_Strait%2C_Africa-Arabia_%28ASTER%29.jpg/1280px-Bab-el-Mandeb_Strait%2C_Africa-Arabia_%28ASTER%29.jpg'
  },
  {
    slug: 'canada-pais-dos-lagos',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Canada_%28orthographic_projection%29.svg/1280px-Canada_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1280px-Moraine_Lake_17092005.jpg'
  },
  {
    slug: 'geoeconomia-da-noruega',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Norway_%28orthographic_projection%29.svg/1280px-Norway_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Troll_A_Platform.jpg/1280px-Troll_A_Platform.jpg'
  },
  {
    slug: 'geopolitica-da-turquia',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Turkey_%28orthographic_projection%29.svg/1280px-Turkey_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_Bosphorus_Strait%2C_Turkey_ESA418914.jpg/1280px-The_Bosphorus_Strait%2C_Turkey_ESA418914.jpg'
  },
  {
    slug: 'historia-da-colombia',
    oldUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Colombia_%28orthographic_projection%29.svg/1280px-Colombia_%28orthographic_projection%29.svg.png',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Gran_Colombia_in_1824.svg/1280px-Gran_Colombia_in_1824.svg.png'
  },
  {
    slug: 'corredor-de-zangezur',
    oldUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg/960px-Armenia_%28orthographic_projection%2C_with_Zangezur_corridor%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    newUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Zangezur_corridor_red_arrow.png'
  }
];

// 1. Atualizar assets/js/posts.js e public/assets/js/posts.js
for (const p of ['assets/js/posts.js', 'public/assets/js/posts.js']) {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    for (const r of REPLACEMENTS) {
      if (content.includes(r.oldUrl)) {
        content = content.replaceAll(r.oldUrl, r.newUrl);
        console.log(`Atualizado ${r.slug} em ${p}`);
      }
    }
    fs.writeFileSync(p, content, 'utf8');
  }
}

// 2. Atualizar src/content/blog/<slug>.md
for (const r of REPLACEMENTS) {
  const mdPath = path.join('src/content/blog', `${r.slug}.md`);
  if (fs.existsSync(mdPath)) {
    let content = fs.readFileSync(mdPath, 'utf8');
    if (content.includes(r.oldUrl)) {
      content = content.replaceAll(r.oldUrl, r.newUrl);
      fs.writeFileSync(mdPath, content, 'utf8');
      console.log(`Atualizado frontmatter de ${mdPath}`);
    } else {
      // Caso a URL tenha pequenas variações
      const frontRegex = new RegExp(`(img:\\s*["']?)(.*?)(["']?\\n)`, 'm');
      content = content.replace(frontRegex, `$1${r.newUrl}$3`);
      fs.writeFileSync(mdPath, content, 'utf8');
      console.log(`Substituído img regex em ${mdPath}`);
    }
  }
}

// 3. Atualizar blog/<slug>/index.html
for (const r of REPLACEMENTS) {
  const htmlPath = path.join('blog', r.slug, 'index.html');
  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');
    if (content.includes(r.oldUrl)) {
      content = content.replaceAll(r.oldUrl, r.newUrl);
      fs.writeFileSync(htmlPath, content, 'utf8');
      console.log(`Atualizado HTML estático em ${htmlPath}`);
    }
  }
}

console.log('Todas as capas repetidas foram substituídas por documentos cartográficos e fotos reais distintas!');
