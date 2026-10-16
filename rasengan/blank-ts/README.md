# Rasengan.js on Hiraiship

A [Rasengan.js](https://rasengan.dev) app with file-based routing. Hiraiship runs `rasengan build` and follows `rasengan.config.js`: server-rendered by default (a Worker plus its assets), prerendered with `prerender: true`, a single-page app with `ssr: false`.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/app/_routes/index.page.tsx`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## `@rasenganjs/runtime` override

`package.json` overrides `@rasenganjs/runtime` to `1.0.0-beta.6` (`overrides` for npm, `pnpm.overrides` for pnpm): `rasengan@2.0.0-beta.5` pins `beta.5`, which Hiraiship's server-rendering bundle refuses. Drop the override once a `rasengan` release depends on `beta.6` or later.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
