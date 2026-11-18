import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toolsDB } from '../data/tools';
import { gamesDB } from '../data/games';
import { videosLongos } from '../data/videos';
import { parsePostDate } from '../utils/dates';

const SITE = 'https://www.vitalegeo.com.br';

export const GET: APIRoute = async () => {
  const allPosts = await getCollection('blog');
  const sortedPosts = allPosts.sort((a, b) => parsePostDate(b.data.data) - parsePostDate(a.data.data));

  const categories = Array.from(new Set(sortedPosts.map(p => p.data.categoria))).sort();

  const lines: string[] = [
    '# VitaleGeo',
    '',
    '> Portal independente de inteligência geográfica, geopolítica, fronteiras internacionais, anomalias territoriais, rotas marítimas estratégicas e simuladores cartográficos em português (pt-BR). Autoria exclusiva: VitaleGeo.',
    '',
    '## Páginas Principais',
    `- [Início](${SITE}/): Portal principal de geopolítica, fronteiras, simuladores e desafios geográficos.`,
    `- [Posts & Investigações](${SITE}/blog/): Arquivo completo com ${sortedPosts.length} artigos sobre enclaves, estreitos estratégicos, disputas territoriais e cartografia.`,
    `- [Ferramentas & Simuladores](${SITE}/ferramentas/): ${toolsDB.length} simuladores interativos de projeções cartográficas, áreas reais, fusos horários e geodésia.`,
    `- [Desafios de Fronteira (Jogos)](${SITE}/jogos/): ${gamesDB.length} jogos educativos de mapa mudo, bandeiras, capitais, fronteiras e estatísticas mundiais.`,
    `- [Vídeos & Documentários](${SITE}/videos/): Análises cartográficas e documentários geopolíticos do canal VitaleGeo no YouTube.`,
    `- [Sobre o VitaleGeo](${SITE}/sobre/): Propósito editorial, rigor documental e metodologia cartográfica.`,
    `- [Política de Privacidade](${SITE}/politica/): Termos de uso e privacidade do portal.`,
    `- [Catálogo Completo para LLMs](${SITE}/llms-full.txt): Índice integral em texto estruturado de todos os ${sortedPosts.length} posts, ferramentas, jogos e vídeos.`,
    `- [Feed RSS](${SITE}/rss.xml): Feed XML atualizado com os posts do VitaleGeo.`,
    `- [Sitemap XML](${SITE}/sitemap.xml): Mapa completo de URLs indexáveis.`,
    '',
    '## Categorias Editoriais',
    ...categories.map(cat => {
      const count = sortedPosts.filter(p => p.data.categoria === cat).length;
      return `- **${cat}**: ${count} investigações publicadas.`;
    }),
    '',
    '## Ferramentas & Simuladores Cartográficos',
    ...toolsDB.map(t => `- [${t.titulo}](${SITE}${t.link}): ${t.desc}`),
    '',
    '## Jogos & Desafios de Geografia',
    ...gamesDB.map(g => `- [${g.titulo}](${SITE}${g.link}): ${g.desc}`),
    '',
    '## Posts & Investigações Recentes (Top 30)',
    ...sortedPosts.slice(0, 30).map(
      p => `- [${p.data.titulo}](${SITE}/blog/${p.id}/) (${p.data.categoria}, ${p.data.data}): ${p.data.resumo}`
    ),
    '',
    '## Documentários em Destaque no YouTube',
    ...videosLongos.slice(0, 15).map(v => `- [${v.titulo}](${v.link})`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
