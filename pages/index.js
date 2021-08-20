import Image from 'next/image'
import profilePic from 'public/me.jpg'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/serverSideScripts'
import Link from 'next/link'
import { homeData } from 'data/data'

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
            <h2 className='text-3xl sm:text-4xl py-5 mt-2 text-gray-900 font-bold'>
              {homeDataLocale.welcome}
            </h2>
            <p className='max-w-lg text-gray-500'>
              {homeDataLocale.description}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h2 className='text-2xl sm:text-3xl py-5 text-gray-900 font-bold'>
          {homeDataLocale.postsTitle}
        </h2>
        {blogPostsData.map(({ id, title, description, url }) => {
          return (
            <article key={id}>
              <Link href={`/blog/${url}`}>
                <a className='text-xl sm:text-2xl py-4 text-gray-800 font-semibold'>
                  {title}
                </a>
              </Link>
              <p className='mt-3 text-gray-500'>{description}</p>
            </article>
          )
        })}
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
