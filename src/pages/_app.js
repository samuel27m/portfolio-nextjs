import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar';

import Header from '../components/header';
import Footer from '../components/footer';

import 'bootstrap/scss/bootstrap.scss'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Samuel Caçador</title>
                <link rel="icon" href="/favicon.png" />
                <link 
                    rel="stylesheet" 
                    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" 
                    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"
                />
            </Head>
            <NextNprogress
                color="#FF5A5F"
                options={{showSpinner: false}} // Not working
            />
            <Header />
            <div className="container main-content">
                <Component {...pageProps} />
            </div>
            
            <Footer />
        </div>
    )
}