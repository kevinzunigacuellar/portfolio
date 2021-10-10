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
import Title from 'components/Title'
import Text from 'components/Text'
import Subtitle from 'components/Subtitle'
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

      <div className='sm:flex sm:items-center'>
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
        <div className='sm:p-10 order-1'>
          <div className='mt-4 mb-6 space-y-1'>
            <Title>Kevin Zuniga Cuellar</Title>
            <p className='max-w-lg leading-relaxed text-gray-900 dark:text-gray-300'>
              {role}
            </p>
          </div>
          <Text>{description}</Text>
        </div>
      </div>
      <div className='mt-10'>
        <div className='mb-4'>
          <Subtitle>{postsTitle}</Subtitle>
        </div>
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
