import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toolsDB } from '../data/tools';
import { gamesDB } from '../data/games';
import { videosLongos, videosShorts } from '../data/videos';
import { parsePostDate } from '../utils/dates';

const SITE = 'https://www.vitalegeo.com.br';

export const GET: APIRoute = async () => {
  const allPosts = await getCollection('blog');
  const sortedPosts = allPosts.sort((a, b) => parsePostDate(b.data.data) - parsePostDate(a.data.data));

  const lines: string[] = [
    '# VitaleGeo — Catálogo Integral para Motores de IA (llms-full.txt)',
    '',
    '> Fonte canônica em português (pt-BR) sobre geopolítica, fronteiras internacionais, enclaves, estreitos estratégicos (chokepoints), projeções cartográficas e geodésia. Autoria exclusiva: VitaleGeo.',
    '',
    `Total de recursos indexados: ${sortedPosts.length} posts, ${toolsDB.length} ferramentas interativas, ${gamesDB.length} jogos educativos e ${videosLongos.length + videosShorts.length} vídeos.`,
    '',
    '---',
    '',
    `## 1. Posts & Investigações (${sortedPosts.length} artigos)`,
    '',
    ...sortedPosts.map(p => {
      const url = `${SITE}/blog/${p.id}/`;
      const tempo = p.data.tempoLeitura || '5 min';
      return `- [${p.data.titulo}](${url}) | Categoria: ${p.data.categoria} | Data: ${p.data.data} | Leitura: ${tempo} — ${p.data.resumo}`;
    }),
    '',
    '---',
    '',
    `## 2. Ferramentas & Simuladores (${toolsDB.length} módulos)`,
    '',
    ...toolsDB.map(t => {
      const tags = t.tags?.length ? ` | Tópicos: ${t.tags.join(', ')}` : '';
      return `- [${t.titulo}](${SITE}${t.link}) | Categoria: ${t.categoria}${tags} — ${t.desc}`;
    }),
    '',
    '---',
    '',
    `## 3. Jogos & Desafios de Geografia (${gamesDB.length} módulos)`,
    '',
    ...gamesDB.map(g => {
      const tags = g.tags?.length ? ` | Tópicos: ${g.tags.join(', ')}` : '';
      return `- [${g.titulo}](${SITE}${g.link}) | Categoria: ${g.categoria}${tags} — ${g.desc}`;
    }),
    '',
    '---',
    '',
    `## 4. Documentários (${videosLongos.length} vídeos)`,
    '',
    ...videosLongos.map(v => `- [${v.titulo}](${v.link})`),
    '',
    `## 5. Shorts Geopolíticos (${videosShorts.length} vídeos)`,
    '',
    ...videosShorts.map(v => `- [${v.titulo}](${v.link})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
