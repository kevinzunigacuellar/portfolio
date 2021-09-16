import ListOfPosts from 'components/ListOfPosts'
import Title from 'components/Title'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/serverSideScripts'

export default function Blog({ blogPostsData }) {
  return (
    <div>
      <Title>Blog</Title>
      <ListOfPosts blogPostsData={blogPostsData} />
    </div>
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
