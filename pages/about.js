import Title from 'components/Title'
import Head from 'next/head'
import { aboutPageData } from 'data/pageData'
export default function About({ aboutDataLocale: { pageTitle } }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Title>{pageTitle}</Title>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const aboutDataLocale = aboutPageData[locale]
  return {
    props: { aboutDataLocale },
  }
}
