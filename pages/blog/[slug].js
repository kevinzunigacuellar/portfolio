import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import DateFormater from 'components/DateFormater'
import profilePic from 'public/img/me.jpg'
import { getAllPostsPaths, getSinglePost } from 'lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.description} />
        <meta name='robots' content='follow, index' />
        <meta
          property='og:url'
          content={`https://www.kevinzunigacuellar.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://www.kevinzunigacuellar.com${router.asPath}`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Kevin Zuniga Cuellar' />
        <meta property='og:description' content={frontmatter.description} />
        <meta property='og:title' content={frontmatter.title} />
        <meta property='og:image' content={frontmatter.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kevinzunigacuel' />
        <meta name='twitter:title' content={frontmatter.title} />
        <meta name='twitter:description' content={frontmatter.description} />
        <meta name='twitter:image' content={frontmatter.image} />
        <meta property='article:published_time' content={frontmatter.date} />
      </Head>
      <article className='py-10'>
        <header className='flex flex-col items-center'>
          <DateFormater
            date={frontmatter.date}
            className='font-medium text-gray-500 dark:text-gray-400 py-1'
          />
          <h1 className='font-bold text-center text-gray-900 tracking-tight text-3xl sm:text-4xl md:text-5xl dark:text-white'>
            {frontmatter.title}
          </h1>
          <div className='flex items-center space-x-2 justify-center my-8'>
            <Image
              src={profilePic}
              alt='Picture of the author'
              className='rounded-full'
              placeholder='blur'
              width={40}
              height={40}
            />
            <div className='text-sm font-medium'>
              <p className='text-gray-900 dark:text-gray-300'>
                Kevin Zuniga Cuellar
              </p>
              <a
                href='https://twitter.com/kevinzunigacuel'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-500'>
                @kevinzunigacuel
              </a>
            </div>
          </div>
        </header>
        <div className='relative w-full pb-2/3 rounded-lg shadow-sm overflow-hidden'>
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            layout='fill'
            priority={true}
            className='absolute w-full h-full object-cover'
          />
        </div>
        <div className='py-6 prose max-w-none prose-blue md:prose-lg dark:prose-dark'>
          <Component components={{ Image: RoundedImage }} />
        </div>
      </article>
    </>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const paths = getAllPostsPaths(locales)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug }, locale }) => {
  const post = await getSinglePost(slug, locale)
  return {
    props: { ...post },
  }
}
