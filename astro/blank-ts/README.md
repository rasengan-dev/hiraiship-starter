# Astro on Hiraiship

A static [Astro](https://astro.build) site. Hiraiship runs `astro build` and serves `dist/`, with `404.html` as the not-found page.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/pages/index.astro`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Keep it static

Hiraiship deploys Astro's static output. An on-demand rendering adapter (`@astrojs/node`, `@astrojs/cloudflare`, …) or `output: 'server'` makes the build refused.

Variables prefixed with `PUBLIC_` reach the browser (`import.meta.env.PUBLIC_*`); the others are read at build time only.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
