import ListOfPosts from 'components/ListOfPosts'
import Title from 'components/Title'
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
        <title>Kevin Zuniga Cuellar - Blog</title>
      </Head>
      <Title>Blog</Title>
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
