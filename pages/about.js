import aboutData from 'data/about'
import Card from 'components/Card'
import gifindImage from 'public/img/gifind.png'
import HotelManantialImage from 'public/img/hotelmanantialchurin.png'
import Container from 'components/Container'

export default function About({ about }) {
  return (
    <Container
      title={about.pageTitle}
      description={about.description}
      image='/img/me.jpg'>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        {about.title}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card
          title='Gifind'
          image={gifindImage}
          description={about.gifindDescription}
          url={'/project/gifind'}
        />
        <Card
          title='Hotel Manantial'
          image={HotelManantialImage}
          description={about.hotelManantialDescription}
          url={'/project/hotelmanantial'}
        />
      </div>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  const about = aboutData[locale]
  return {
    props: { about },
  }
}
