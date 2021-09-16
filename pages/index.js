import Image from 'next/image'
import profilePic from 'public/img/me.jpg'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/serverSideScripts'
import ListOfPosts from 'components/ListOfPosts'
import { homeData } from 'data/pageData'
import Title from 'components/Title'
export default function Home({ blogPostsData, homeDataLocale }) {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col sm:flex-row items-center mt-8'>
          <Image
            src={profilePic}
            alt='Picture of the author'
            width={397}
            height={483}
            className='rounded-lg'
            placeholder='blur'
            quality={100}
          />
          <div className='p-4 sm:p-10'>
            <Title>{homeDataLocale.welcome}</Title>
            <p className='max-w-lg text-gray-500 dark:text-gray-400'>
              {homeDataLocale.description}
            </p>
          </div>
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
  for (const filename of files) {
    const fileData = readMarkdown(locale, filename)
    const parsedMarkedown = parseMarkdown(fileData)
    blogPostsData.push(parsedMarkedown.data)
  }
  const homeDataLocale = homeData[locale]
  return {
    props: { blogPostsData, homeDataLocale },
  }
}
