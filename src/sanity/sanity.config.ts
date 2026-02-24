import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import news from './news';

export default defineConfig({
    name: 'naraha-vero-base',
    title: 'NARAHA VERO BASE 管理画面',
    projectId: import.meta.env?.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    dataset: import.meta.env?.PUBLIC_SANITY_DATASET || 'production',
    plugins: [structureTool()],
    schema: {
        types: [news],
    },
});
