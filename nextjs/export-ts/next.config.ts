import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hiraiship deploys Next.js as a static export. Without it, the build
  // needs a server and is refused.
  output: 'export',
};

export default nextConfig;
