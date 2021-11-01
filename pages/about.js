import Head from 'next/head'
import ImageCard from 'components/ImageCard'
import gifindImage from 'public/img/gifind.png'
import hotelManantialImage from 'public/img/hotelmanantialchurin.png'
import aboutData from 'data/aboutData.json'

export default function About({
  aboutDataLocale: { pageTitle, pageProjects },
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100'>
        {pageProjects}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        <ImageCard
          title='Gifind'
          url='https://gifind.vercel.app/'
          img={gifindImage}
        />
        <ImageCard
          title='Hotel Manantial'
          url='https://www.hotelmanantialchurin.com/'
          img={hotelManantialImage}
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
