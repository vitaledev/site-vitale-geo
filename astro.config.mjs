import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vitalegeo.com.br',
  integrations: [
    react()
  ],
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  }
});
