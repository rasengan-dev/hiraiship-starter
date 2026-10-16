export function meta() {
  return [{ title: 'About · React Router on Hiraiship' }];
}

export default function About() {
  return (
    <>
      <span className="badge">/about</span>
      <h1>A client-side route.</h1>
      <p className="subtitle">
        Reload this page: Hiraiship serves <code>index.html</code> for it, and the router takes it
        from there.
      </p>
    </>
  );
}
