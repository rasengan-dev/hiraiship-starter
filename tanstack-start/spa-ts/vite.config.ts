import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Hiraiship deploys TanStack Start in SPA mode: the build writes a
    // shell (`dist/client/_shell.html`) served for every path. Without
    // it the app needs a server and is refused. Keep the shell's
    // default path.
    tanstackStart({ spa: { enabled: true } }),
    viteReact(),
  ],
});
