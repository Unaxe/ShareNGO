import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return <>
  <Head>
    <title>ShareNGO</title>
    <link rel="icon" type="image/svg" sizes="16x16" href="../logo.svg"></link>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
