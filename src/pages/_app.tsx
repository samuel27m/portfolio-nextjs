import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import { Montserrat } from 'next/font/google';
import 'bootstrap/scss/bootstrap.scss'
import '../styles/global.scss'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
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
