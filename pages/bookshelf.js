import Title from 'components/Title'
import { bookShelfData } from 'data/pageData'
export default function BookShelf({ bookShelfDataLocale }) {
  return (
    <div>
      <Title>{bookShelfDataLocale.pageTitle}</Title>
      <p>{bookShelfDataLocale.pageDescription}</p>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const bookShelfDataLocale = bookShelfData[locale]
  return {
    props: { bookShelfDataLocale },
  }
}
