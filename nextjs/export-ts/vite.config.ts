import { defineConfig } from 'vite';
import vinext from 'vinext';

// vinext runs this Next.js app on Vite. Hiraiship builds it with
// `vite build` and serves the static export from `dist/client`.
export default defineConfig({
  plugins: [vinext()],
});
