import Card from 'components/Card'
import { getAllPosts } from 'lib/mdx'
import Container from 'components/Container'
import blogData from 'data/blog'

export default function Blog({ posts, blog }) {
  return (
    <Container
      title='Blog - Kevin Zuniga Cuellar'
      description={blog.description}
      image='/img/blog-img.png'>
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
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  const blog = blogData[locale]
  const posts = getAllPosts(locale)

  return {
    props: { posts, blog },
  }
}
