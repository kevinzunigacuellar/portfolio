import Github from 'components/icons/Github'
import LinkedIn from 'components/icons/LinkedIn'
import Twitter from 'components/icons/Twitter'
import NAVIGATION from 'data/navigation.json'
import SpotifyPlayer from 'components/SpotifyPlayer'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()
  const { locale } = router

  return (
    <footer className='bg-gray-200 flex-shrink-0 dark:bg-gray-900 transition-all'>
      <div className='mx-auto py-4 px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <div className='flex flex-col sm:flex-row sm:justify-around'>
          <div className='flex flex-col space-y-5 sm:w-auto'>
            <SpotifyPlayer />
            <address className='flex space-x-5 text-gray-400 dark:text-gray-400'>
              <a
                href='https://github.com/kevinzunigacuellar'
                target='_blank'
                aria-label='Visit my Github'
                rel='noreferrer'>
                <Github className='w-6 h-auto fill-current text-gray-400 hover:text-gray-800 dark:text-gray-100 stroke-current bg-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full' />
              </a>
              <a
                href='https://www.linkedin.com/in/kevinzunigacuellar/'
                target='_blank'
                aria-label='Visit my LinkedIn'
                rel='noreferrer'>
                <LinkedIn />
              </a>
              <a
                href='https://twitter.com/kevinzunigacuel'
                target='_blank'
                aria-label='Visit my Twitter'
                rel='noreferrer'>
                <Twitter />
              </a>
            </address>
          </div>
          <nav className='flex flex-col py-2 sm:w-auto sm:max-w-md'>
            <Link href='/'>
              <a className='py-2 cursor-pointer antialiased font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                {NAVIGATION.home[locale]}
              </a>
            </Link>
            <Link href='/about'>
              <a className='py-2 cursor-pointer antialiased font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                {NAVIGATION.about[locale]}
              </a>
            </Link>
            <Link href='/blog'>
              <a className='py-2 cursor-pointer antialiased font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                Blog
              </a>
            </Link>
            <Link href='/bookshelf'>
              <a className='py-2 cursor-pointer antialiased font-semibold text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'>
                {NAVIGATION.bookshelf[locale]}
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
