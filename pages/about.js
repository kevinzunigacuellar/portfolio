import aboutData from 'data/about'
import Card from 'components/Card'
import gifindImage from 'public/img/gifind.png'
import HotelManantialImage from 'public/img/hotelmanantialchurin.png'
import Container from 'components/Container'
import Title from 'components/Title'

export default function About({ about }) {
  return (
    <Container
      title={about.pageTitle}
      description={about.description}
      image='/img/me.jpg'>
      <Title>{about.title}</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
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
