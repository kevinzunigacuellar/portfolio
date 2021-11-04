import Head from 'next/head'
import Book from 'components/Book'
import bookshelfData from 'data/bookshelfData.json'
import books from 'data/books.json'
import bookshelfImg from 'public/img/bookshelf.jpg'

export default function BookShelf({
  bookShelfDataLocale: { pageDescription, pageTitle, title },
  books,
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='robots' content='follow, index' />
        <meta
          property='og:url'
          content='https://www.kevinzunigacuellar.com/bookshelf'
        />
        <link
          rel='canonical'
          href='https://www.kevinzunigacuellar.com/bookshelf'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Kevin Zuniga Cuellar' />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:image' content={bookshelfImg} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kevinzunigacuel' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={bookshelfImg} />
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
