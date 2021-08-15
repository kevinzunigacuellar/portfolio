import Link from 'next/link'
import path from 'path'
import { readDirectory } from 'lib/serverSideScripts'
export default function Blog({ slugs }) {
  return (
    <div>
      <ul>
        {slugs.map(slug => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = ({ locale }) => {
  const files = readDirectory(path.join('posts', locale))
  const slugs = files.map(filename => filename.replace('.md', ''))

  return {
    props: {
      slugs,
    },
  }
}
