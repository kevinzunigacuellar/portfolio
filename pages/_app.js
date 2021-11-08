import 'tailwindcss/tailwind.css'
import Layout from 'layout'
import { UserProvider } from '@auth0/nextjs-auth0'
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
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='keywords' content='software, blog, developer, student' />
        <meta name='rating' content='General' />
        <meta name='author' content='Kevin Zuniga Cuellar' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/logo/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/logo/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/logo/favicon-16x16.png'
        />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  )
}

export default MyApp
