// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// BAL HAMBURG - Bergedorfer Autolackiererei - STATIC build.
// No adapter, no SSR. Output: /dist with plain HTML files.
// Deploy target: Cloudflare PAGES
//   Framework: Astro · Build: npm run build · Output: dist
// Tailwind v3.4 via @astrojs/tailwind.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://demo-bal-hamburg.pages.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
