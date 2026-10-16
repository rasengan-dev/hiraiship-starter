// @ts-check
import { defineConfig } from 'astro/config';

// Hiraiship serves Astro's static output (`output: 'static'`, the
// default). Adding an on-demand adapter (`@astrojs/node`,
// `@astrojs/cloudflare`, ...) makes the build refused.
export default defineConfig({});
