import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BUTTON_TEXT = {
  en: 'Learn more',
  es: 'Leer más',
}

export default function ProjectCard({
  imgSrc,
  title,
  description,
  url,
  projectUrl,
}) {
  const router = useRouter()
  const { locale } = router
  return (
    <div className='antialiased text-gray-900'>
      <div className='relative pb-2/3 rounded-lg overflow-hidden shadow'>
        <Image
          className='absolute h-full w-full object-cover'
          src={imgSrc}
          alt={title}
          layout='fill'
          placeholder='blur'
        />
      </div>

      <div className='relative px-4 -mt-16'>
        <div className='p-1 rounded-xl shadow bg-gradient-to-tr from-indigo-500 to-pink-700'>
          <div className='bg-white dark:bg-gray-900 p-6 rounded-lg'>
            <p className='flex items-center mt-1 font-semibold text-lg leading-tight truncate dark:text-gray-100'>
              {title}
              <a href={projectUrl} target='_blank' rel='noreferrer noopener'>
                <svg
                  className='h-4 w-4 ml-1 stroke-current'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </p>
            <p className='mt-2 mb-3 text-gray-500 dark:text-gray-400 leading-relaxed'>
              {description}
            </p>
            <Link href={url}>
              <a className='inline-block bg-indigo-500 hover:bg-pink-500 transition-colors rounded-full px-4 py-0.5'>
                <div className='flex items-center justify-center space-x-1 text-white'>
                  <p className='font-semibold mb-0.5'>{BUTTON_TEXT[locale]}</p>
                  <svg
                    className='h-5 w-5 stroke-current'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
