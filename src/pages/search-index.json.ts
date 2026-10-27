import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const normalizeSearch = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/```[\s\S]*?```/g, ' ')
  .replace(/!?\[([^\]]+)\]\([^)]+\)/g, '$1')
  .replace(/[#>*_`~|]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const words: Record<string, number[]> = {};

  posts.forEach((post, index) => {
    const tokens = new Set(normalizeSearch(post.body || '').match(/[a-z0-9]{3,}/g) || []);
    for (const token of tokens) (words[token] ||= []).push(index);
  });

  const index = { slugs: posts.map(post => post.id), words };

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
