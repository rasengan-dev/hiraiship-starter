import { type PageComponent } from 'rasengan';

const Page: PageComponent = () => {
  return (
    <>
      <span className="badge">/about</span>
      <h1>A second page.</h1>
      <p className="subtitle">
        Every <code>.page.tsx</code> under <code>src/app/_routes/</code> is a route.
      </p>
    </>
  );
};

Page.metadata = {
  title: 'About · Rasengan.js on Hiraiship',
  description: 'A second page',
};

export default Page;
