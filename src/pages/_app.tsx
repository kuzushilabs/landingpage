import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Default title that can be overridden by individual pages */}
        <title>Kuzushi Labs</title>
        <meta
          name="description"
          content="Here at Kuzushi Labs we engineer AI native solutions. We are committed to helping you transform your ideas into innovative and inspiring world-class products."
        />
        {/* Add the favicon here */}
        <link rel="icon" href="/favicon.png" />
        {/* Or use PNG */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
