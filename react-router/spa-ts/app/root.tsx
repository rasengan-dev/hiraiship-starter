import { isRouteErrorResponse, Links, Link, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { ReactNode } from 'react';
import './styles.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/hiraiship.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <Link to="/" className="brand">
          <img src="/hiraiship.svg" alt="" />
          hiraiship
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://docs.hiraiship.com" target="_blank" rel="noreferrer">
            Docs
          </a>
        </nav>
      </header>
      <section className="hero">
        <Outlet />
      </section>
      <footer className="footer">Hiraiship starter · React Router</footer>
    </main>
  );
}

// Shown while the single-page app loads, in place of server-rendered HTML.
export function HydrateFallback() {
  return null;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="page">
      <section className="hero">
        <span className="badge">{notFound ? '404' : 'Error'}</span>
        <h1>{notFound ? 'Page not found.' : 'Something went wrong.'}</h1>
        <p className="subtitle">
          <Link to="/">Back home</Link>
        </p>
      </section>
    </main>
  );
}
