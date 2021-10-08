import Title from 'components/Title'
import { bookShelfData } from 'data/pageData'
import Head from 'next/head'
import Book from 'components/Book'

export default function BookShelf({
  bookShelfDataLocale: { pageDescription, pageTitle, title, books },
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </Head>
      <Title>{title}</Title>
      <p className='max-w-lg leading-relaxed text-gray-500 dark:text-gray-400 mt-2'>
        {pageDescription}
      </p>
      <div className='grid grid-cols-1 justify-items-center md:justify-items-start my-6 gap-y-6'>
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
  const bookShelfDataLocale = bookShelfData[locale]
  return {
    props: { bookShelfDataLocale },
  }
}
