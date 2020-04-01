import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Layout from '../layouts/default';
import TagManager from 'react-gtm-module';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    TagManager.initialize({ gtmId: 'GTM-T9V6SZV' });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>MLJP SCRIM</title>
          <meta
            name="description"
            content="モバイル·レジェンド: Bang Bang (MLBB) の、日本で行われているスクリムの情報をまとめています。"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
