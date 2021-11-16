import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return <>
  <Head>
    <title>ShareNGO</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
