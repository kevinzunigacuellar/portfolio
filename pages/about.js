import Head from 'next/head'
import aboutData from 'data/aboutData.json'
import Card from 'components/Card'
import gifindImage from 'public/img/gifind.png'
import HotelManantialImage from 'public/img/hotelmanantialchurin.png'

export default function About({ aboutDataLocale }) {
  return (
    <>
      <Head>
        <title>{aboutDataLocale.pageTitle}</title>
      </Head>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        {aboutDataLocale.pageProjects}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card
          title='Gifind'
          image={gifindImage}
          description={aboutDataLocale.gifindDescription}
          url={'/project/gifind'}
        />
        <Card
          title='Hotel Manantial'
          image={HotelManantialImage}
          description={aboutDataLocale.hotelManantialDescription}
          url={'/project/hotelmanantial'}
        />
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const aboutDataLocale = aboutData[locale]
  return {
    props: { aboutDataLocale },
  }
}
