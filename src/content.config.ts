import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    categoria: z.string().default('Geopolítica'),
    data: z.string(),
    img: z.string(),
    tempoLeitura: z.string().default('5 min'),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { blog };
