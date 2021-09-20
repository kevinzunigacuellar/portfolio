import ListOfPosts from 'components/ListOfPosts'
import Title from 'components/Title'
import Head from 'next/head'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/serverSideScripts'

export default function Blog({ blogPostsData }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Title>Blog</Title>
      <ListOfPosts blogPostsData={blogPostsData} />
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
  return {
    props: { blogPostsData },
  }
}
