import fs from 'fs'
import Link from 'next/link'
export default function Blog({ slugs }) {
  return (
    <div>
      <ul>
        {slugs.map(slug => (
          <li>
            <Link href={`/blog/${slug}`}>
              <a>{slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = () => {
  const files = fs.readdirSync('posts')
  const slugs = files.map(filename => filename.replace('.md', ''))

  return {
    props: {
      slugs,
    },
  }
}
