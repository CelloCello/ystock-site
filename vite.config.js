import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const analyticsPlugin = {
  name: 'inject-analytics',
  transformIndexHtml: {
    order: 'pre',
    handler() {
      return [
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: '/src/analytics.js',
          },
          injectTo: 'head',
        },
      ];
    },
  },
};

export default defineConfig({
  plugins: [analyticsPlugin, tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        guide: resolve(import.meta.dirname, 'guide.html'),
        version: resolve(import.meta.dirname, 'version.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
      },
    },
  },
});
