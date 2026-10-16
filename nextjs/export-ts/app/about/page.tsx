import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About · Next.js on Hiraiship',
};

export default function About() {
  return (
    <>
      <span className="badge">/about</span>
      <h1>A second page.</h1>
      <p className="subtitle">
        Each route is written to its own HTML file. Server Components run once, at build time.
      </p>
    </>
  );
}
