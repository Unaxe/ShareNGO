import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/global.css'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }) {

  return <>
  <Head>
    <title>ShareNGO</title>
    <link rel="icon" type="image/svg" sizes="16x16" href="../logo.svg"></link>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"/>

  </Head>
  <Component {...pageProps} />

  
  </>
}

export default MyApp
