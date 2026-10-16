# Next.js on Hiraiship

A [Next.js](https://nextjs.org) App Router site, built with [vinext](https://github.com/cloudflare/vinext) (Next.js on Vite) as a static export. Hiraiship runs `vite build` and serves `dist/client`.

## Develop

```bash
npm install
npm run dev
```

Then edit `app/page.tsx`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Keep `output: "export"`

`next.config.ts` sets `output: "export"`. Without it, the build needs a server and is refused. Server Components run once, at build time.

Variables prefixed with `NEXT_PUBLIC_` are inlined in the bundle. Other variables a Server Component renders end up in the exported HTML: keep secrets out of pages.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
