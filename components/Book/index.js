import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Book({ img, title, author, year, comment }) {
  const router = useRouter()
  const { locale } = router

  return (
    <article className='max-w-md md:max-w-5xl bg-white rounded-lg shadow overflow-hidden dark:bg-gray-900 dark:border-gray-500 transition-colors'>
      <div className='md:flex'>
        <div className='max-w-md'>
          <div className='relative pb-3/2 md:w-60'>
            <Image
              className='absolute w-full h-full object-cover'
              src={img}
              alt={title}
              layout='fill'
            />
          </div>
        </div>
        <div className='py-4 px-6'>
          <h2 className='font-semibold py-1 text-lg dark:text-gray-200'>
            {title}
          </h2>
          <p>
            <span className='text-gray-800 dark:text-gray-300'>{author}</span>{' '}
            <span className='text-gray-500 dark:text-gray-400'>&middot;</span>{' '}
            <span className='text-gray-500 dark:text-gray-400'>{year}</span>
          </p>
          <q className='text-gray-500 leading-relaxed dark:text-gray-400'>
            {comment[locale]}
          </q>
        </div>
      </div>
    </article>
  )
}
