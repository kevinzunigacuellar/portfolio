import Book from 'components/Book'
import bookshelfData from 'data/bookshelf'
import books from 'data/books.json'
import Container from 'components/Container'
import Title from 'components/Title'
export default function BookShelf({ bookshelf, books }) {
  return (
    <Container title={bookshelf.pageTitle} description={bookshelf.pageDescription} image='/img/bookshelf.jpg'>
      <Title>{bookshelf.title}</Title>
      <div className='grid grid-cols-1 justify-items-center md:justify-items-start gap-10 pb-10'>
        {books.map(({ img, title, author, year, comment }) => (
          <Book key={title} title={title} author={author} year={year} comment={comment} img={img} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  const bookshelf = bookshelfData[locale]
  return {
    props: { bookshelf, books },
  }
}
