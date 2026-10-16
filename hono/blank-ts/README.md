# Hono on Hiraiship

A [Hono](https://hono.dev) API running as a Cloudflare Worker. Hiraiship bundles `src/index.ts` (wrangler's `main`) into one Worker; its default export handles every request.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/index.ts`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Environment variables

Variables set on Hiraiship reach the app as bindings: `c.env.GREETING`. Locally, `wrangler dev` reads them from `.dev.vars` (copy `.dev.vars.example`).

`wrangler.jsonc` is only for `wrangler dev`: Hiraiship ignores everything in it but `main`.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
