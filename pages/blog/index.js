import Head from 'next/head'
import Card from 'components/Card'
import { getAllPosts } from 'lib/mdx'
import blogImage from 'public/img/blog-img.png'

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Kevin Zuniga Cuellar</title>
        <meta
          name='description'
          content='This is my personal blog, find free front-end development guides and code snippets'
        />
        <meta name='robots' content='follow, index' />
        <meta name='googlebot' content='index,follow' />
        <meta
          property='og:url'
          content='https://www.kevinzunigacuellar.com/blog'
        />
        <link rel='canonical' href='https://www.kevinzunigacuellar.com/blog' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Blog - Kevin Zuniga Cuellar' />
        <meta
          property='og:description'
          content='This is my personal blog, find free front-end development guides and code snippets'
        />
        <meta property='og:title' content='Blog - Kevin Zuniga Cuellar' />
        <meta property='og:image' content={blogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kevinzunigacuel' />
        <meta name='twitter:title' content='Blog - Kevin Zuniga Cuellar' />
        <meta
          name='twitter:description'
          content='This is my personal blog, find free front-end development guides and code snippets'
        />
        <meta name='twitter:image' content={blogImage} />
      </Head>
      <h1 className='text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl md:text-5xl dark:text-white py-10'>
        Blog
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
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
    </>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPosts(locale)
  return {
    props: { posts },
  }
}
