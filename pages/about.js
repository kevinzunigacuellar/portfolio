import Head from 'next/head'
import Title from 'components/Title'
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
      <Title>{pageProjects}</Title>
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
