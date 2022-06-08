import '../styles/globals.css';
import next from '~/node_modules/next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '~/styles/theme';
import MainStyled from '~/styles/styled';
import Header from '~/components/atoms/Header';
import Head from 'next/head';
import { Html } from 'next/document';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSS Effects</title>
        <link href="/fonts/style.css" rel="stylesheet" />
        <link href="/animations/main.css" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <MainStyled />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
