import Link from 'next/link'
import BlogPost from 'components/BlogPost'
export default function ListOfPosts({ blogPostsData }) {
  return (
    <div>
      {blogPostsData.map(({ title, description, url, date }) => {
        return (
          <article key={url} className='mb-4'>
            <Link href={`/blog/${url}`}>
              <a>
                <BlogPost title={title} date={date} description={description} />
              </a>
            </Link>
          </article>
        )
      })}
    </div>
  )
}
