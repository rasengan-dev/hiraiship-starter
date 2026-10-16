import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TanStack Start on Hiraiship' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  // The document is rendered through `shellComponent`: SPA mode
  // prerenders it into the shell every path is served.
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <main className="page">
          <header className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
              ⚡ hiraiship
            </Link>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <a href="https://docs.hiraiship.com" target="_blank" rel="noreferrer">
                Docs
              </a>
            </nav>
          </header>
          <section className="hero">{children}</section>
          <footer className="footer">Hiraiship starter · TanStack Start</footer>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <>
      <span className="badge">404</span>
      <h1>Page not found.</h1>
      <p className="subtitle">
        <Link to="/">Back home</Link>
      </p>
    </>
  );
}
