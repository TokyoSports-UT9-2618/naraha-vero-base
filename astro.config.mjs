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
    projectId: process.env.SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'd3pt5qdo',
    dataset: process.env.SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: false, // ビルド時は常に最新データを取得（CDNキャッシュをバイパス）
    apiVersion: '2024-01-01',
    // Sanity Studio は sanity.io/manage で管理
    // studioBasePath は SSG では使用不可のため省略
  }), sitemap()],
});