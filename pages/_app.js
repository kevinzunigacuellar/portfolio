import 'tailwindcss/tailwind.css'
import Layout from 'components/Layout'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from 'lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Head>
        <link rel='icon' href='/logo.svg' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='keywords' content='software, blog, developer, student' />
        <link rel='canonical' href='https://www.kevinzunigacuellar.com' />
        <meta name='author' content='Kevin Zuniga Cuellar' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
