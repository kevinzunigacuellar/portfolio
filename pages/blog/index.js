import ListOfPosts from 'components/ListOfPosts'
import Head from 'next/head'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/parseBlogPosts'

export default function Blog({ blogPostsData }) {
  return (
    <>
      <Head>
        <title>Blog - Kevin Zuniga Cuellar</title>
      </Head>
      <h1 className='pb-5 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100'>
        Blog
      </h1>
      <ListOfPosts blogPostsData={blogPostsData} />
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
  return {
    props: { blogPostsData },
  }
}
