import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '~/styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSS Effect</title>
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="CSS Effect" />
        <meta property="og:description" content="CSS Effect" />
        <meta property="og:site_name" content="CSS Effect" />
        <meta property="og:locale" content="CSS Effect" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link href="/fonts/style.css" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
