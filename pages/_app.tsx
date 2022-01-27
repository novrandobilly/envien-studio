import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-174977000-1'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-174977000-1');
                `,
          }}></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
