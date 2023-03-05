import type { AppProps } from 'next/app'
import Header from '../components/header';
import Footer from '../components/footer';

import 'bootstrap/scss/bootstrap.scss'
import '../styles/global.scss'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
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
