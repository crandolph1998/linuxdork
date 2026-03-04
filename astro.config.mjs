import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://linuxdork.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});
