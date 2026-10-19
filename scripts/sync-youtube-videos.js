import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const CHANNEL_ID = 'UCUJyR0FfjyksEgV64hSR3XA';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const VIDEOS_JS_PATH = path.join(rootDir, 'assets', 'js', 'videos.js');
const PUBLIC_VIDEOS_JS_PATH = path.join(rootDir, 'public', 'assets', 'js', 'videos.js');
const DIST_VIDEOS_JS_PATH = path.join(rootDir, 'dist', 'assets', 'js', 'videos.js');
const SRC_VIDEOS_TS_PATH = path.join(rootDir, 'src', 'data', 'videos.ts');

function formatVideosTs(longos, shorts) {
  return `export interface VideoItem {
  titulo: string;
  id: string;
  link: string;
}

export const videosLongos: VideoItem[] = ${JSON.stringify(longos, null, 2)};

export const videosShorts: VideoItem[] = ${JSON.stringify(shorts, null, 2)};
`;
}

function saveVideos(longos, shorts) {
  const updatedJs = formatVideosJs(longos, shorts);
  const updatedTs = formatVideosTs(longos, shorts);

  const jsTargets = [VIDEOS_JS_PATH, PUBLIC_VIDEOS_JS_PATH, DIST_VIDEOS_JS_PATH];
  for (const p of jsTargets) {
    if (fs.existsSync(path.dirname(p))) {
      fs.writeFileSync(p, updatedJs, 'utf-8');
      console.log(`  💾 Salvo em: ${path.relative(rootDir, p)}`);
    }
  }

  if (fs.existsSync(path.dirname(SRC_VIDEOS_TS_PATH))) {
    fs.writeFileSync(SRC_VIDEOS_TS_PATH, updatedTs, 'utf-8');
    console.log(`  💾 Salvo em: ${path.relative(rootDir, SRC_VIDEOS_TS_PATH)}`);
  }
}

function cleanTitle(title) {
  if (!title) return '';
  // Remove hashtags at the end (#geografia #mapas #geopolítica etc)
  let t = title.replace(/(\s*#[^\s#]+)+$/g, '');
  // Remove any remaining inline hashtags
  t = t.replace(/#[^\s#]+/gu, '');
  return t.replace(/\s+/g, ' ').trim();
}

function escapeString(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function parseVideosJs(content) {
  const longos = [];
  const shorts = [];

  const longosBlock = content.split('const videosShorts')[0] || '';
  const shortsBlock = content.split('const videosShorts')[1] || '';

  const regex = /\{\s*titulo:\s*"((?:[^"\\]|\\.)*)",\s*id:\s*"([^"]+)",\s*link:\s*"([^"]+)"\s*\}/g;

  let match;
  while ((match = regex.exec(longosBlock)) !== null) {
    longos.push({ titulo: match[1].replace(/\\"/g, '"'), id: match[2], link: match[3] });
  }

  while ((match = regex.exec(shortsBlock)) !== null) {
    shorts.push({ titulo: match[1].replace(/\\"/g, '"'), id: match[2], link: match[3] });
  }

  return { longos, shorts };
}

function formatVideosJs(longos, shorts) {
  const lines = [
    '// BANCO DE DADOS DE VÍDEOS - VITALEGEO',
    `// Total: ${longos.length} Longos + ${shorts.length} Shorts`,
    '',
    '// 1. VÍDEOS LONGOS (Análises, Documentários - Formato 16:9)',
    'const videosLongos = ['
  ];

  longos.forEach((v, i) => {
    const comma = i < longos.length - 1 ? ',' : '';
    lines.push(`    { titulo: "${escapeString(v.titulo)}", id: "${v.id}", link: "${v.link}" }${comma}`);
  });

  lines.push('];');
  lines.push('');
  lines.push('// 2. SHORTS (Vídeos Curtos Verticais - Formato 9:16)');
  lines.push('const videosShorts = [');

  shorts.forEach((v, i) => {
    const comma = i < shorts.length - 1 ? ',' : '';
    lines.push(`    { titulo: "${escapeString(v.titulo)}", id: "${v.id}", link: "${v.link}" }${comma}`);
  });

  lines.push('];');
  lines.push('');
  lines.push('// Unificação (NÃO APAGUE)');
  lines.push('const todosVideos = [...videosLongos, ...videosShorts];');
  lines.push('');

  return lines.join('\n');
}

async function syncFromRss() {
  console.log(`📡 [VitaleGeo] Conectando ao feed RSS do canal (${CHANNEL_ID})...`);
  const response = await fetch(RSS_URL);
  if (!response.ok) {
    throw new Error(`Falha ao obter RSS do YouTube: HTTP ${response.status}`);
  }
  const xml = await response.text();

  const entries = xml.split('<entry>').slice(1);
  const items = [];

  for (const entry of entries) {
    const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const linkMatch = entry.match(/<link\s+rel="alternate"\s+href="([^"]+)"/);

    if (idMatch && titleMatch && linkMatch) {
      const id = idMatch[1].trim();
      const rawTitle = titleMatch[1].trim();
      const href = linkMatch[1].trim();
      const isShort = href.includes('/shorts/');

      items.push({
        id,
        titulo: cleanTitle(rawTitle),
        link: `https://www.youtube.com/watch?v=${id}`,
        isShort
      });
    }
  }

  return items;
}

async function run() {
  const isFull = process.argv.includes('--full');
  console.log(`🎬 [VitaleGeo] Iniciando sincronização de vídeos do YouTube...`);

  if (!fs.existsSync(VIDEOS_JS_PATH)) {
    throw new Error(`Arquivo não encontrado: ${VIDEOS_JS_PATH}`);
  }

  const existingContent = fs.readFileSync(VIDEOS_JS_PATH, 'utf-8');
  const { longos, shorts } = parseVideosJs(existingContent);

  const existingLongIds = new Set(longos.map(v => v.id));
  const existingShortIds = new Set(shorts.map(v => v.id));

  console.log(`📊 Banco atual: ${longos.length} vídeos longos e ${shorts.length} shorts.`);

  let addedLongCount = 0;
  let addedShortCount = 0;

  if (isFull) {
    console.log(`🔄 Modo FULL ativado. Re-escaneando com yt-dlp...`);
    // Full sync logic using yt-dlp if available
    try {
      const fetchTab = (tab) => {
        const cmd = `yt-dlp --flat-playlist --dump-single-json "https://www.youtube.com/channel/${CHANNEL_ID}/${tab}" --extractor-args "youtube:lang=pt"`;
        const res = execSync(cmd, { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 });
        const json = JSON.parse(res);
        return json.entries || [];
      };

      const fullLongEntries = fetchTab('videos');
      const fullShortEntries = fetchTab('shorts');

      const newLongos = fullLongEntries.map(e => ({
        titulo: cleanTitle(e.title),
        id: e.id,
        link: `https://www.youtube.com/watch?v=${e.id}`
      }));

      const newShorts = fullShortEntries.map(e => ({
        titulo: cleanTitle(e.title),
        id: e.id,
        link: `https://www.youtube.com/watch?v=${e.id}`
      }));

      saveVideos(newLongos, newShorts);

      console.log(`🎉 [VitaleGeo] Modo FULL concluído com sucesso: ${newLongos.length} vídeos longos e ${newShorts.length} shorts atualizados!`);
      return;
    } catch (e) {
      console.warn(`⚠️ Aviso: Falha no modo FULL com yt-dlp (${e.message}). Alternando para feed RSS...`);
    }
  }

  let rssItems = [];
  try {
    rssItems = await syncFromRss();
    console.log(`📥 ${rssItems.length} vídeos recentes encontrados no feed RSS.`);
  } catch (err) {
    console.warn(`⚠️ [VitaleGeo] Aviso: Não foi possível obter feed RSS do YouTube (${err.message}). Mantendo banco local existente.`);
  }

  // Process items in reverse (oldest from feed first) so that unshift places newest at index 0
  const reversedRss = [...rssItems].reverse();

  for (const item of reversedRss) {
    if (item.isShort) {
      if (!existingShortIds.has(item.id)) {
        shorts.unshift({ titulo: item.titulo, id: item.id, link: item.link });
        existingShortIds.add(item.id);
        addedShortCount++;
        console.log(`  ➕ [SHORT NOVO] ${item.id} - "${item.titulo}"`);
      }
    } else {
      if (!existingLongIds.has(item.id)) {
        longos.unshift({ titulo: item.titulo, id: item.id, link: item.link });
        existingLongIds.add(item.id);
        addedLongCount++;
        console.log(`  ➕ [VÍDEO LONGO NOVO] ${item.id} - "${item.titulo}"`);
      }
    }
  }

  const totalAdded = addedLongCount + addedShortCount;

  if (totalAdded > 0) {
    saveVideos(longos, shorts);
    console.log(`\n✅ [VitaleGeo] Sincronização concluída com sucesso!`);
    console.log(`   ${addedLongCount} vídeo(s) longo(s) e ${addedShortCount} short(s) adicionados ao banco.`);
    console.log(`   Total atual: ${longos.length} longos e ${shorts.length} shorts.`);
  } else {
    console.log(`\nℹ️ [VitaleGeo] Nenhum vídeo novo detectado. O site já está 100% atualizado com o canal.`);
  }
}

run().catch(err => {
  console.error(`❌ Erro durante a sincronização de vídeos:`, err);
  process.exit(1);
});
