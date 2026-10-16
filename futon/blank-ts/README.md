# Futon on Hiraiship

A [Futon](https://github.com/rasengan-dev/rasenganjs/tree/main/packages/framework/futon) API running as a Cloudflare Worker. Hiraiship bundles `src/index.ts` into one Worker.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/app.ts`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Layout

- `src/app.ts`: the app, its routes and middleware.
- `src/index.ts`: what Hiraiship deploys, `export default { fetch: toWinterCgHandler(app) }`.
- `src/dev.ts`: a Node server around the same app, for `npm run dev` only (port 3000).

Variables set on Hiraiship reach handlers through `ctx.runtime.env`.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
