import Image from 'next/image'
import Head from 'next/head'
import profilePic from 'public/img/me.jpg'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/parseBlogPosts'
import ListOfPosts from 'components/ListOfPosts'
import { homeData } from 'data/pageData'
import Title from 'components/Title'
export default function Home({ blogPostsData, homeDataLocale }) {
  return (
    <>
      <Head>
        <title>{homeDataLocale.pageTitle}</title>
        <meta name='description' content={homeDataLocale.description} />
        <meta name='robots' content='index, follow' />
      </Head>

      <div className='mt-8 sm:flex sm:items-center'>
        <div className='max-w-sm mx-auto sm:m-0'>
          <div className='relative pb-3/2 rounded-lg sm:w-60 md:w-72 lg:w-80 overflow-hidden'>
            <Image
              className='absolute w-full h-full object-cover'
              src={profilePic}
              alt='Picture of the author'
              placeholder='blur'
              layout='fill'
            />
          </div>
        </div>
        <div className='p-4 sm:p-10'>
          <Title>{homeDataLocale.welcome}</Title>
          <p className='max-w-lg leading-relaxed text-gray-600 dark:text-gray-400'>
            {homeDataLocale.description}
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <Title>{homeDataLocale.postsTitle}</Title>
        <ListOfPosts blogPostsData={blogPostsData} />
      </div>
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
