import Book from 'components/Book'
import bookshelfData from 'data/bookshelf'
import books from 'data/books.json'
import Container from 'components/Container'

export default function BookShelf({ bookshelf, books }) {
  return (
    <Container
      title={bookshelf.pageTitle}
      description={bookshelf.pageDescription}
      image='/img/bookshelf.jpg'>
      <h1 className='font-bold text-gray-900 tracking-tight text-3xl sm:text-4xl md:text-5xl dark:text-white py-10'>
        {bookshelf.title}
      </h1>
      <div className='grid grid-cols-1 justify-items-center md:justify-items-start gap-8 pb-10'>
        {books.map(({ img, title, author, year, comment }) => (
          <Book
            key={title}
            title={title}
            author={author}
            year={year}
            comment={comment}
            img={img}
          />
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
