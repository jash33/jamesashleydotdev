import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const reading = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { writing, reading };
