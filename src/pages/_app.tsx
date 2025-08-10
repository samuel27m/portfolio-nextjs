import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import { Montserrat } from 'next/font/google';
import 'bootstrap/scss/bootstrap.scss'
import '../styles/global.scss'
import { useEffect } from 'react';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load Bootstrap JS only on client-side
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div className={montserrat.className}>
      <Head>
        <title>Samuel Caçador</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container main-content">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
