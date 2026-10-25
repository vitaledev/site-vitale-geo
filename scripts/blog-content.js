import fs from 'node:fs';
import path from 'node:path';

const MONTHS = {
  jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5,
  jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11,
};

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"')) {
    try { return JSON.parse(trimmed); } catch {}
  }
  if (trimmed.startsWith("'")) return trimmed.slice(1, -1).replaceAll("''", "'");
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null' || trimmed === '~') return null;
  return trimmed;
}

function parseFrontmatter(markdown, filePath) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s*\r?\n|$)/);
  if (!match) throw new Error(`Frontmatter ausente em ${filePath}`);

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([\w-]+):\s*(.*)$/);
    if (field) fields[field[1]] = parseScalar(field[2]);
  }
  return fields;
}

function dateValue(value) {
  const isoDate = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDate) return Date.UTC(Number(isoDate[1]), Number(isoDate[2]) - 1, Number(isoDate[3]));
  const match = String(value || '').match(/^(\d{1,2})\s+([\p{L}.]{3,})\s+(\d{4})(?:\s*-\s*(\d{1,2}):(\d{2}))?/u);
  if (!match) return 0;
  const monthName = match[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f.]/g, '').slice(0, 3);
  const englishMonths = { feb: 1, apr: 3, may: 4, aug: 7, sep: 8, oct: 9, dec: 11 };
  const month = MONTHS[monthName] ?? englishMonths[monthName];
  if (month === undefined) return 0;
  return Date.UTC(Number(match[3]), month, Number(match[1]), Number(match[4] || 12), Number(match[5] || 0));
}

export function getBlogPosts(rootDir) {
  const contentDir = path.join(rootDir, 'src', 'content', 'blog');
  const files = fs.readdirSync(contentDir)
    .filter(file => /\.mdx?$/i.test(file));

  return files.map(file => {
    const slug = file.replace(/\.mdx?$/i, '');
    const source = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const metadata = parseFrontmatter(source, file);
    for (const required of ['titulo', 'resumo', 'categoria', 'data', 'img']) {
      if (!metadata[required]) throw new Error(`Campo ${required} ausente em ${file}`);
    }
    return { ...metadata, slug, link: `${slug}/` };
  }).sort((a, b) => dateValue(b.data) - dateValue(a.data));
}
