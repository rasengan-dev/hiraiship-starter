import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js on Hiraiship',
  icons: '/favicon.svg',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="page">
          <header className="header">
            <Link href="/" style={{ textDecoration: 'none' }}>
              ⚡ hiraiship
            </Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <a href="https://docs.hiraiship.com" target="_blank" rel="noreferrer">
                Docs
              </a>
            </nav>
          </header>
          <section className="hero">{children}</section>
          <footer className="footer">Hiraiship starter · Next.js</footer>
        </main>
      </body>
    </html>
  );
}
