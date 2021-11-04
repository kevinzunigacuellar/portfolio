import Head from 'next/head'
import aboutData from 'data/aboutData.json'

export default function About({
  aboutDataLocale: { pageTitle, pageProjects },
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        {pageProjects}
      </h1>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const aboutDataLocale = aboutData[locale]
  return {
    props: { aboutDataLocale },
  }
}
