/* eslint-disable import/no-anonymous-default-export */

export default {
  github: 'https://github.com/pmuens/cairo-by-example.org',
  docsRepositoryBase: 'https://github.com/pmuens/cairo-by-example.org/blob/master',
  titleSuffix: ' – Cairo by Example',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Cairo by Example</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Cairo by Example: Learn Cairo and StarkNet Smart Contract programming with example code."
      />
      <meta
        name="og:description"
        content="Cairo by Example: Learn Cairo and StarkNet Smart Contract programming with example code."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cairo-by-example.org/og.png" />
      <meta name="twitter:site:domain" content="https://cairo-by-example.org" />
      <meta name="twitter:url" content="https://cairo-by-example.org" />
      <meta
        name="og:title"
        content="Cairo by Example: Learn Cairo and StarkNet Smart Contract programming"
      />
      <meta name="og:image" content="https://cairo-by-example.org" />
      <meta name="apple-mobile-web-app-title" content="Cairo by Example" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Philipp Muens.</>,
  unstable_faviconGlyph: '👋'
}
