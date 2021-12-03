import { useEffect, useState } from 'react'
import Link from 'next/link'
import NAVIGATION from 'data/navigation.json'
import { useRouter } from 'next/router'
import LanguageSelect from 'components/LanguageSelect'
import { MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline'

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
              {open ? (
                <XIcon className='h-6 w-6 stroke-current' />
              ) : (
                <MenuIcon className='h-6 w-6 stroke-current' />
              )}
            </button>
          </div>
          <div className='flex items-center'>
            <button
              className='p-1.5 mr-3 border dark:border-gray-500 hover:border-gray-300 dark:hover:border-gray-400 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ring-indigo-300 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800'
              onClick={handleToggleDarkTheme}
              aria-label='toggle dark theme'>
              {dark ? (
                <SunIcon className='h-6 w-6 stroke-current' />
              ) : (
                <MoonIcon className='h-6 w-6 stroke-current' />
              )}
            </button>
            <LanguageSelect />
          </div>
        </div>
        <nav
          className={`${
            open ? 'block' : 'hidden'
          } pt-6 sm:flex sm:p-0 sm:space-x-2`}>
          <Link href='/'>
            <a
              className={`${
                pathname === '/'
                  ? 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 opacity-100'
                  : 'text-gray-600 dark:text-gray-400'
              } block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition ease-out duration-200 focus:outline-none opacity-90`}
              onClick={handleMenuExpand}>
              {NAVIGATION.home[locale]}
            </a>
          </Link>
          <Link href='/about' key='/about'>
            <a
              className={`${
                pathname.includes('/about')
                  ? 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 opacity-100'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 sm:mt-0 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition ease-out duration-200 focus:outline-none opacity-90`}
              onClick={handleMenuExpand}>
              {NAVIGATION.about[locale]}
            </a>
          </Link>
          <Link href='/blog' key='/blog'>
            <a
              className={`${
                pathname.includes('/blog')
                  ? 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 opacity-100'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 sm:mt-0 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition ease-out duration-200 focus:outline-none opacity-90`}
              onClick={handleMenuExpand}>
              Blog
            </a>
          </Link>
          <Link href='/bookshelf' key='/bookshelf'>
            <a
              className={`${
                pathname.includes('/bookshelf')
                  ? 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 opacity-100'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 sm:mt-0 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition ease-out duration-200 focus:outline-none opacity-90`}
              onClick={handleMenuExpand}>
              {NAVIGATION.bookshelf[locale]}
            </a>
          </Link>
          <Link href='/guestbook' key='/guestbook'>
            <a
              className={`${
                pathname.includes('/guestbook')
                  ? 'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200 opacity-100'
                  : 'text-gray-600 dark:text-gray-400'
              } mt-1 sm:mt-0 block py-1.5 px-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition ease-out duration-200 focus:outline-none opacity-90`}
              onClick={handleMenuExpand}>
              {NAVIGATION.guestbook[locale]}
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
