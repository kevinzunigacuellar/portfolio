import Head from 'next/head'
import {
  getBlogPostData,
  getUrlPaths,
  markdownToHtml,
} from 'lib/parseBlogPosts'
export default function Post({
  htmlContent,
  metadata: { title, description },
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <article
        className='mx-auto py-6 prose prose-blue md:prose-lg lg:prose-xl dark:prose-dark'
        dangerouslySetInnerHTML={{ __html: htmlContent }}></article>
    </div>
  )
}

export const getStaticPaths = async ({ locales }) => {
  const paths = getUrlPaths(locales)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug }, locale }) => {
  const { content, metadata } = getBlogPostData(locale, slug)
  const htmlContent = await markdownToHtml(content)
  return {
    props: {
      htmlContent,
      metadata,
    },
  }
}
