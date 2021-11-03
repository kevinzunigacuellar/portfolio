import Head from 'next/head'
import Posts from 'components/Posts'
import { getAllPosts } from 'lib/mdx'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Kevin Zuniga Cuellar</title>
      </Head>
      <h1 className='text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl md:text-5xl dark:text-white py-10'>
        Blog
      </h1>
      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPosts(locale)
  return {
    props: { posts },
  }
}
