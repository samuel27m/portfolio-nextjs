import Head from 'next/head'
import Link from 'next/link'

import 'bootstrap/scss/bootstrap.scss'
import '../styles.scss'

import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Samuel Caçador</title>
        <link rel="icon" href="/favicon.png" />
        <link href="/static/styles/app.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <div className="container main-content">
        <div className="homepage">
            <p className="text-center intro-text">
                Hello! My name is <span className="text-red">Samuel</span> and I’m a <span className="text-red">Full Stack Web Developer</span>
            </p>
            <div class="text-center">
                <Link href='/about'>
                    <button className="btn center-block button">
                        <span>About me</span>
                    </button>
                </Link>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
 