import Head from 'next/head';

export default function SEO({ title, description, slug }) {
  const siteName = "SHOPALL";
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://shopall.com/product/${slug}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      {/* Social Media (Open Graph) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
