import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jamesashley.dev',
  integrations: [mdx()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-sans',
        styles: ['normal'],
        weights: [300, 400, 500],
      },
    ],
  },
});
