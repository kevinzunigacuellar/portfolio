import Image from 'next/image'
import Head from 'next/head'
import profilePic from 'public/img/me.jpg'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/parseBlogPosts'
import ListOfPosts from 'components/ListOfPosts'
import homeData from 'data/homeData.json'
import Text from 'components/Text'
export default function Home({
  blogPostsData,
  homeDataLocale: { description, pageTitle, postsTitle, role },
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='index, follow' />
      </Head>

      <section className='sm:flex sm:items-center sm:justify-between'>
        <div className='max-w-sm sm:m-0 order-2'>
          <div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden'>
            <Image
              className='absolute w-full h-full object-cover'
              src={profilePic}
              alt='Picture of the author'
              placeholder='blur'
              layout='fill'
            />
          </div>
        </div>
        <div className='order-1'>
          <header className='mt-4 mb-6 space-y-1'>
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100'>
              Kevin Zuniga Cuellar
            </h1>
            <h3 className='max-w-lg leading-relaxed text-gray-900 dark:text-gray-300'>
              {role}
            </h3>
          </header>
          <Text>{description}</Text>
        </div>
      </section>
      <section className='mt-10'>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-relaxed mb-4'>
          {postsTitle}
        </h2>
        <ListOfPosts blogPostsData={blogPostsData} />
      </section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const files = readPostsDirectory(locale)
  const blogPostsData = []
  files.forEach(filename => {
    const fileData = readMarkdown(locale, filename)
    const { data } = parseMarkdown(fileData)
    blogPostsData.push(data)
  })

  const homeDataLocale = homeData[locale]
  return {
    props: { blogPostsData, homeDataLocale },
  }
}
