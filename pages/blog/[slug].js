import Image from 'next/image'
import { useMemo } from 'react'
import DateFormater from 'components/DateFormater'
import Container from 'components/Container'
import profilePic from 'public/img/me.jpg'
import { getAllPostsPaths, getSinglePost } from 'lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { useState } from 'react'

function RoundedImage(props) {
  return <Image alt={props.alt} className='rounded-lg' {...props} />
}

function Code({ children }) {
  const [copyText, setCopyText] = useState(false)
  const copyCode = async () => {
    await navigator.clipboard.writeText(children.props.children)
    setCopyText(true)
    setTimeout(() => {
      setCopyText(false)
    }, 1000)
  }

  return (
    <div className='relative group'>
      <pre>{children}</pre>
      <button
        className='invisible group-hover:visible bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-800 hover:bg-gray-600 text-gray-50 p-1.5 rounded-md focus:outline-none focus:shadow-outline absolute top-0 right-0 transform -translate-x-1.5 translate-y-1.5'
        type='submit'
        onClick={copyCode}>
        <svg className='h-5 w-5 stroke-current' fill='none' viewBox='0 0 24 24'>
          {!copyText ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
            />
          ) : (
            <path
              className='dark:text-green-500 text-green-400'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          )}
        </svg>
      </button>
    </div>
  )
}

export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Container
      title={frontmatter.title}
      description={frontmatter.description}
      image={frontmatter.image}
      date={frontmatter.date}>
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
          <Component components={{ Image: RoundedImage, pre: Code }} />
        </div>
      </article>
    </Container>
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
