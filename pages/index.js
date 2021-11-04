import Image from 'next/image'
import Head from 'next/head'
import profilePic from 'public/img/me.jpg'
import homeData from 'data/homeData'
import Posts from 'components/Posts'
import { getAllPosts } from 'lib/mdx'

export default function Home({
  homeDataLocale: { description, pageTitle, role, postsTitle },
  posts,
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='follow, index' />
        <meta name='googlebot' content='index,follow' />
        <meta property='og:url' content='https://www.kevinzunigacuellar.com' />
        <link rel='canonical' href='https://www.kevinzunigacuellar.com' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Kevin Zuniga Cuellar' />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:image' content={profilePic} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kevinzunigacuel' />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={profilePic} />
      </Head>

      <section className='py-10 sm:flex sm:items-center sm:justify-between'>
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
          <header className='my-4 space-y-2'>
            <h1 className='font-bold text-gray-900 tracking-tight text-3xl sm:text-4xl dark:text-white'>
              Kevin Zuniga Cuellar
            </h1>
            <h2 className='max-w-lg leading-relaxed text-gray-800 dark:text-gray-300'>
              {role}
            </h2>
          </header>
          <p className='w-full leading-relaxed text-gray-600 sm:max-w-sm md:max-w-xl dark:text-gray-400'>
            {description}
          </p>
        </div>
      </section>
      <section className='sm:py-8'>
        <h1 className='mb-6 font-bold text-gray-800 text-3xl dark:text-white'>
          {postsTitle}
        </h1>
        <Posts posts={posts} />
      </section>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const homeDataLocale = homeData[locale]
  const posts = getAllPosts(locale)
  return {
    props: { homeDataLocale, posts },
  }
}
