import Head from 'next/head'
import aboutData from 'data/aboutData.json'
import ProjectCard from 'components/ProjectCard'
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-6'>
        <ProjectCard
          imgSrc={gifindImage}
          title='Gifind'
          description={aboutDataLocale.gifindDescription}
          url='/projects/gifind'
          projectUrl='https://gifind.vercel.app/'
        />
        <ProjectCard
          imgSrc={HotelManantialImage}
          title='Hotel Manatial'
          description={aboutDataLocale.hotelManantialDescription}
          url='/projects/hotelmanantial'
          projectUrl='https://www.hotelmanantialchurin.com/'
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
