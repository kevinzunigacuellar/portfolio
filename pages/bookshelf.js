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
      <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100'>
        {title}
      </h1>
      <p className='max-w-lg leading-relaxed text-gray-500 dark:text-gray-400 mt-2'>
        {pageDescription}
      </p>
      <div className='grid grid-cols-1 justify-items-center md:justify-items-start my-5 gap-y-5'>
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
