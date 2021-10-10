import Github from 'components/icons/Github'
import LinkedIn from 'components/icons/LinkedIn'
import Twitter from 'components/icons/Twitter'
import SpotifyPlayer from 'components/SpotifyPlayer'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()
  const { locale } = router

  return (
    <footer className='bg-gray-200 py-4 px-4 flex-shrink-0 border-t border-gray-300 dark:bg-gray-900 dark:border-gray-500 transition-all'>
      <div className='mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <div className='mx-auto w-72 sm:m-0 sm:w-auto'>
          <div className='flex flex-col sm:flex-row sm:justify-around'>
            <div className='flex flex-col space-y-5 sm:w-auto'>
              <SpotifyPlayer />
              <div className='flex space-x-5 text-gray-400 dark:text-gray-400'>
                <a
                  href='https://github.com/kevinzunigacuellar'
                  target='_blank'
                  aria-label='Visit my Github'
                  rel='noreferrer'>
                  <Github />
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
              </div>
            </div>
            <div className='flex flex-col py-2 sm:w-auto sm:max-w-md'>
              <Link href='/' key='footer-Home'>
                <a className='py-2 cursor-pointer antialiased text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
                  {locale === 'en' ? 'Home' : 'Inicio'}
                </a>
              </Link>
              <Link href='/about' key='footer-about'>
                <a className='py-2 cursor-pointer antialiased text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
                  {locale === 'en' ? 'About' : 'Acerca'}
                </a>
              </Link>
              <Link href='/blog' key='footer-blog'>
                <a className='py-2 cursor-pointer antialiased text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
                  Blog
                </a>
              </Link>
              <Link href='/bookshelf' key='footer-bookshelf'>
                <a className='py-2 cursor-pointer antialiased text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
                  {locale === 'en' ? 'Bookshelf' : 'Biblioteca'}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
