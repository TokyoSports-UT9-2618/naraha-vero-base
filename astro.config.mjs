// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://naraha-vero-base.pages.dev',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sanity({
    projectId: import.meta.env?.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    dataset: import.meta.env?.PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    // Sanity Studio は sanity.io/manage で管理
    // studioBasePath は SSG では使用不可のため省略
  }), sitemap()],
});