import DateFormater from 'components/DateFormater'
import Image from 'next/image'
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {posts.map(({ frontmatter, slug }) => (
        <li key={frontmatter.title}>
          <Link href={`/blog/${slug}`}>
            <a className='group'>
              <div className='relative pb-2/3 rounded-lg shadow overflow-hidden'>
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className='absolute w-full h-full object-cover'
                  priority={true}
                  layout='fill'
                />
              </div>
              <div className='py-4'>
                <h2 className='text-lg font-semibold text-gray-900 tracking-tight dark:text-gray-100 group-hover:text-indigo-400'>
                  {frontmatter.title}
                </h2>
                <DateFormater
                  date={frontmatter.date}
                  className='text-xs font-semibold text-gray-500 tracking-wide uppercase dark:text-gray-400 group-hover:underline'
                />
                <p className='text-gray-500 dark:text-gray-400 py-2'>
                  {frontmatter.description}
                </p>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}