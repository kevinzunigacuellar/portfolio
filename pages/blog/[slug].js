import Head from 'next/head'
import matter from 'gray-matter'
import {
  markdownToHtml,
  readPostsDirectory,
  readMarkdown,
} from 'lib/serverSideScripts'
export default function Post({ contents, data }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.description} />
      </Head>
      <article
        className='mx-auto py-6 prose prose-blue md:prose-lg lg:prose-xl dark:prose-dark'
        dangerouslySetInnerHTML={{ __html: contents }}></article>
    </div>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const paths = []
  for (const locale of locales) {
    const files = readPostsDirectory(locale)
    for (const file of files) {
      paths.push({
        params: { slug: file.replace('.md', '') },
        locale: locale,
      })
    }
  }
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug }, locale }) => {
  const markdownWithMetadata = readMarkdown(locale, slug + '.md')
  const parsedMarkedown = matter(markdownWithMetadata)
  const htmlContent = await markdownToHtml(parsedMarkedown.content)
  return {
    props: {
      contents: htmlContent,
      data: parsedMarkedown.data,
    },
  }
}
