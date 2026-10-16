import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [{ title: 'About · TanStack Start on Hiraiship' }] }),
  component: About,
});

function About() {
  return (
    <>
      <span className="badge">/about</span>
      <h1>A client-side route.</h1>
      <p className="subtitle">
        Reload this page: Hiraiship serves the shell for it, and the router takes it from there.
      </p>
    </>
  );
}
