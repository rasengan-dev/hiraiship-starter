# TanStack Start on Hiraiship

[TanStack Start](https://tanstack.com/start) in SPA mode. Hiraiship runs `vite build` and serves `dist/client`; the SPA shell (`_shell.html`) is served for every path and the router renders the route.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/routes/index.tsx`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Keep SPA mode

`vite.config.ts` enables `tanstackStart({ spa: { enabled: true } })`. Without it, the build needs a server and is refused. Keep the shell's default path (`spa.prerender.outputPath`). The root route renders the document through `shellComponent`.

Variables prefixed with `VITE_` reach the browser.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
