import Head from 'next/head'
import Book from 'components/Book'
import bookshelfData from 'data/bookshelfData.json'
import books from 'data/books.json'

export default function BookShelf({
  bookShelfDataLocale: { pageDescription, pageTitle, title },
  books,
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </Head>
      <h1 className='font-bold text-gray-900 tracking-tight text-3xl sm:text-4xl md:text-5xl dark:text-white py-10'>
        {title}
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
    </>
  )
}

export async function getStaticProps({ locale }) {
  const bookShelfDataLocale = bookshelfData[locale]
  return {
    props: { bookShelfDataLocale, books },
  }
}
