import { useState } from 'react'
import Link from 'next/link'
import LanguageSelect from 'components/LanguageSelect'
import { useRouter } from 'next/router'

const navigation = [
  {
    name: { en: 'Home', es: 'Inicio' },
    href: '/',
    style:
      'antialiased block px-3 py-1 text-white hover:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700',
  },
  {
    name: { en: 'About', es: 'Acerca' },
    href: '/about',
    style:
      'antialiased mt-1 block px-3 py-1 text-white hover:bg-gray-700 rounded sm:mt-0 sm:ml-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700',
  },
  {
    name: { en: 'Blog', es: 'Blog' },
    href: '/blog',
    style:
      'antialiased mt-1 block px-3 py-1 text-white hover:bg-gray-700 rounded sm:mt-0 sm:ml-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700',
  },
  {
    name: { en: 'Books', es: 'Libros' },
    href: '/bookshelf',
    style:
      'antialiased mt-1 block px-3 py-1 text-white hover:bg-gray-700 rounded sm:mt-0 sm:ml-4 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700',
  },
]

export default function Navbar({ setDark, dark }) {
  const router = useRouter()
  const { locale } = router

  const [open, setOpen] = useState(false)

  const handleMenuExpand = () => {
    setOpen(prevState => !prevState)
  }

  const handleToggleDarkTheme = () => {
    setDark(prevState => !prevState)
  }
  return (
    <header className='bg-gray-600 sticky top-0 z-10 dark:bg-gray-900'>
      <div className='max-w-screen-2xl mx-auto sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-2'>
        <div className='flex items-center justify-between px-4 py-2 sm:p-0 sm:order-last'>
          <div className='sm:hidden'>
            <button
              type='button'
              className='p-1 text-gray-100 focus:text-white focus:outline-none rounded focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700'
              onClick={handleMenuExpand}>
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
              className='p-1 mr-3 text-gray-100 focus:text-white hover:bg-gray-700 focus:outline-none rounded focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700'
              onClick={handleToggleDarkTheme}>
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
        <div
          className={`${
            open ? 'block' : 'hidden'
          } px-2 pt-2 pb-4 sm:flex sm:p-0 sm:text-sm`}>
          {navigation.map(({ href, name, style }) => (
            <Link href={href} key={href}>
              <a className={style} onClick={handleMenuExpand}>
                {locale === 'en' ? name.en : name.es}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
