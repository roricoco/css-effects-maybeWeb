import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '~/styles/theme';
import Head from 'next/head';
import MainStyled from '~/styles/styled';
import Header from '~/components/atoms/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>CSS Effects</title>
        <link href="/fonts/style.css" rel="stylesheet" />
        <link href="/animations/main.css" rel="stylesheet" />
      </Head>
      <MainStyled />

      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
