import { useEffect, useState } from 'react'
import Link from 'next/link'
import NAVIGATION from 'data/navigation.json'
import { useRouter } from 'next/router'
import LanguageSelect from 'components/LanguageSelect'

export default function Navbar() {
  const [dark, setDark] = useState(null)
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const { locale, pathname } = router

  useEffect(() => {
    if (localStorage.getItem('darkmode') === 'true') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const handleMenuExpand = () => {
    setOpen(prevState => !prevState)
  }
  const handleToggleDarkTheme = () => {
    const darkTheme = document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkmode', darkTheme)
    setDark(prevState => !prevState)
  }
  return (
    <header className='transition-colors sticky top-0 z-10 backdrop-filter backdrop-blur-md border-b dark:border-gray-700 border-gray-200'>
      <div className='mx-auto p-6 sm:pl-4 sm:flex sm:items-center sm:justify-between lg:max-w-5xl'>
        <div className='flex items-center justify-between order-last'>
          <div className='sm:hidden'>
            <button
              type='button'
              className='p-1.5 text-gray-600 dark:text-gray-300 dark:focus:text-gray-100 focus:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300'
              onClick={handleMenuExpand}
              aria-label='expand menu'>
              <svg
                className='h-6 w-6 fill-current'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {open ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
          <div className='flex items-center'>
            <button
              className='p-1.5 mr-3 text-gray-500 dark:text-gray-300 bg-white shadow-sm dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 ring-indigo-300 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800'
              onClick={handleToggleDarkTheme}
              aria-label='toggle dark and light theme'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {dark ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            </button>
            <LanguageSelect />
          </div>
        </div>
        <nav
          className={`${
            open ? 'block' : 'hidden'
          } pt-6 sm:flex sm:p-0 sm:space-x-2`}>
          <Link href='/' key='/'>
            <a
              className={`${
                pathname === '/'
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400'
              } block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-900 rounded-md transition ease-out duration-200 focus:outline-none`}
              onClick={handleMenuExpand}>
              {NAVIGATION.home[locale]}
            </a>
          </Link>
          <Link href='/about' key='/about'>
            <a
              className={`${
                pathname.includes('/about')
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-900 rounded-md sm:mt-0 transition ease-out duration-200 focus:outline-none`}
              onClick={handleMenuExpand}>
              {NAVIGATION.about[locale]}
            </a>
          </Link>
          <Link href='/blog' key='/blog'>
            <a
              className={`${
                pathname.includes('/blog')
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-900 rounded-md sm:mt-0 transition ease-out duration-200 focus:outline-none`}
              onClick={handleMenuExpand}>
              Blog
            </a>
          </Link>
          <Link href='/bookshelf' key='/bookshelf'>
            <a
              className={`${
                pathname.includes('/bookshelf')
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-900 rounded-md sm:mt-0 transition ease-out duration-200 focus:outline-none`}
              onClick={handleMenuExpand}>
              {NAVIGATION.bookshelf[locale]}
            </a>
          </Link>
          <Link href='/guestbook' key='/guestbook'>
            <a
              className={`${
                pathname.includes('/guestbook')
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:text-indigo-500 dark:hover:bg-gray-900 rounded-md sm:mt-0 transition ease-out duration-200 focus:outline-none`}
              onClick={handleMenuExpand}>
              {NAVIGATION.guestbook[locale]}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
