import Image from 'next/image'
import Container from 'components/Container'
import profilePic from 'public/img/me.jpg'
import homeData from 'data/home'
import Card from 'components/Card'
import { getAllPosts } from 'lib/mdx'

export default function Home({ home, posts }) {
  return (
    <Container title={home.pageTitle} description={home.description} image='/img/me.jpg'>
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
        <header>
          <div className='my-6 sm:my-4'>
            <h1 className='font-bold mb-2 text-gray-900 tracking-tight text-3xl sm:text-4xl dark:text-white'>
              Kevin Zuniga Cuellar
            </h1>
            <h2 className='py-1 max-w-lg font-semibold leading-relaxed text-gray-700 dark:text-gray-300'>
              {home.role}
            </h2>
          </div>
          <p className='w-full leading-relaxed text-gray-600 sm:max-w-sm md:max-w-xl dark:text-gray-300'>
            {home.description}
          </p>
        </header>
      </section>
      <section className='sm:py-8'>
        <h3 className='font-bold text-3xl tracking-tight mb-8 text-black dark:text-white'>{home.postsTitle}</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
          {posts.map(({ frontmatter, slug }) => (
            <Card
              key={slug}
              title={frontmatter.title}
              image={frontmatter.image}
              description={frontmatter.description}
              date={frontmatter.date}
              url={`/blog/${slug}`}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  const home = homeData[locale]
  const posts = getAllPosts(locale)
  return {
    props: { home, posts },
  }
}
