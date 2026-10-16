# Vite + React on Hiraiship

A React single-page app built with [Vite](https://vite.dev). Hiraiship runs `vite build` and serves `dist/`.

## Develop

```bash
npm install
npm run dev
```

Then edit `src/App.tsx`.

## Deploy

```bash
npx hiraiship login
npx hiraiship deploy
```

Or push the repository to GitHub and import it from the Hiraiship dashboard: every push deploys.

See [docs.hiraiship.com](https://docs.hiraiship.com) for environment variables, custom domains and the rest.
