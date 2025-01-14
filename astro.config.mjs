// @ts-check
import { defineConfig } from 'astro/config';
import node from 'npm:@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
