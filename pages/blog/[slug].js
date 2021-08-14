import Head from 'next/head'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml, readDirectory, readFile } from 'lib/serverSideScripts'

export default function Post({ contents, data }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <article
        className='mx-auto prose prose-blue md:prose-lg lg:prose-xl'
        dangerouslySetInnerHTML={{ __html: contents }}></article>
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = readDirectory(path.join(process.cwd(), 'posts'))
  const paths = files.map(filename => ({
    params: { slug: filename.replace('.md', '') },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = readFile(
    path.join(process.cwd(), 'posts', slug + '.md'),
    'utf8'
  )
  const parsedMarkedown = matter(markdownWithMetadata)
  const htmlContent = await markdownToHtml(parsedMarkedown.content)
  return {
    props: {
      contents: htmlContent,
      data: parsedMarkedown.data,
    },
  }
}
