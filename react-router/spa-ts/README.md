# React Router on Hiraiship

[React Router](https://reactrouter.com) in framework mode, built as a single-page app. Hiraiship runs `react-router build` and serves `build/client`; every unknown path gets `index.html` and the router renders the route.

## Develop

```bash
npm install
npm run dev
```

Then edit `app/routes/home.tsx`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

## Keep `ssr: false`

`react-router.config.ts` sets `ssr: false`. With server rendering on, the build needs a server and is refused. Routes listed in `prerender` still get their own HTML file.

Variables prefixed with `VITE_` reach the browser.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
