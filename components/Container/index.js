import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Container({ children, title, description, image, date }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='follow, index' />
        <meta name='googlebot' content='index,follow' />
        <meta
          property='og:url'
          content={`https://www.kevinzunigacuellar.com${router.locale !== 'en' ? `/${router.locale}` : ''}${
            router.asPath
          }`}
        />
        <link
          rel='canonical'
          href={`https://www.kevinzunigacuellar.com${router.locale !== 'en' ? `/${router.locale}` : ''}${
            router.asPath
          }`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`https://www.kevinzunigacuellar.com${image}`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kevinzunigacuel' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={`https://www.kevinzunigacuellar.com${image}`} />
        {date && <meta property='article:published_time' content={date} />}
      </Head>
      {children}
    </>
  )
}
