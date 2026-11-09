// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set SITE_URL to the production origin before deploying so canonical and sitemap URLs resolve.
  site: process.env.SITE_URL ?? 'http://localhost:4321',
});
