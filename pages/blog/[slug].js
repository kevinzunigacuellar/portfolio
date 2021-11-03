import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
import { getAllPostsPaths, getSinglePost } from 'lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { useRouter } from 'next/router'

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

export default function Post({ code, frontmatter }) {
  const router = useRouter()
  const { locale } = router
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article className='py-10'>
        <header className='flex flex-col items-center'>
          <p className='font-medium text-gray-500 dark:text-gray-400 py-1'>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString(locale, {
                month: 'long',
                weekday: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </p>
          <h1 className='font-bold text-center text-gray-900 tracking-tight text-3xl sm:text-4xl md:text-5xl dark:text-white'>
            {frontmatter.title}
          </h1>
          <div className='flex items-center space-x-2 justify-center my-8'>
            <Image
              src='/img/me.jpg'
              alt='Picture of the author'
              className='rounded-full'
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
