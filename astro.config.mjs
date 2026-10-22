import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jamesashley.dev",
  integrations: [mdx()],
  vite: {
    environments: {
      astro: {
        optimizeDeps: {
          // Astro's content loader imports picomatch, which is CommonJS.
          // Prebundle it before the ESM-only content module runner loads it.
          include: ["picomatch"],
        },
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-sans",
      styles: ["normal"],
      weights: [300, 400, 500],
    },
  ],
});
