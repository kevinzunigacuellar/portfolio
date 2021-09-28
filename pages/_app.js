import 'tailwindcss/tailwind.css'
import Layout from 'components/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='/logo.svg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <meta name='keywords' content='software, blog, developer, student' />
        <link rel='canonical' href='https://www.kevinzunigacuellar.com' />
        <meta name='author' content='Kevin Zuniga Cuellar' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
