import Head from 'next/head'
import Title from 'components/Title'
import ImageCard from 'components/ImageCard'
import { aboutPageData } from 'data/pageData'
import gifindImage from 'public/img/gifind.png'
import hotelManantialImage from 'public/img/hotelmanantialchurin.png'

export default function About({
  aboutDataLocale: { pageTitle, pageProjects },
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Title>{pageTitle}</Title>
      <Title>{pageProjects}</Title>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
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
  const aboutDataLocale = aboutPageData[locale]
  return {
    props: { aboutDataLocale },
  }
}
