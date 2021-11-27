import 'tailwindcss/tailwind.css'
import Layout from 'layout'
import Script from 'next/script'
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
    <>
      <Script
        strategy='lazyOnload'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy={'lazyOnload'} id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          })
          `}
      </Script>
      <UserProvider>
        <Layout>
          <Head>
            <meta charSet='utf-8' />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
            <meta
              name='keywords'
              content='software, blog, developer, student'
            />
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
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  )
}

export default MyApp
