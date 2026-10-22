import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const reading = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/reading" }),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { writing, reading };
