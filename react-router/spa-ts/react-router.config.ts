import type { Config } from '@react-router/dev/config';

export default {
  // Hiraiship deploys React Router as a single-page app: `build/client`
  // only. With `ssr: true` the build needs a server and is refused.
  // Routes listed in `prerender` still get their own HTML file.
  ssr: false,
} satisfies Config;
