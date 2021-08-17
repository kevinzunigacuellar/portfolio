import { useState } from 'react'
import Link from 'next/link'
import LanguageSelect from 'components/LanguageSelect'
const navigation = [
  {
    name: 'Home',
    href: '/',
    style:
      'antialiased block px-3 py-1 text-white hover:bg-gray-700 rounded focus:outline-none focus:ring',
  },
  {
    name: 'About',
    href: '/about',
    style:
      'antialiased mt-1 block px-3 py-1 text-white hover:bg-gray-700 rounded sm:mt-0 sm:ml-4 focus:outline-none focus:ring',
  },
  {
    name: 'Blog',
    href: '/blog',
    style:
      'antialiased mt-1 block px-3 py-1 text-white hover:bg-gray-700 rounded sm:mt-0 sm:ml-4 focus:outline-none focus:ring',
  },
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <header className='bg-gray-600'>
      <div className='max-w-screen-2xl mx-auto sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-2'>
        <div className='flex items-center justify-between px-4 py-2 sm:p-0 sm:order-last'>
          <div className='sm:hidden'>
            <button
              type='button'
              className='p-1 text-gray-100 focus:text-white hover:text-white focus:outline-none rounded focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 focus:bg-gray-700'
              onClick={handleClick}>
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
            <button className='p-1 mr-3 text-gray-100 focus:text-white hover:bg-gray-500 focus:outline-none rounded focus:ring'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
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
            <Link href={href} key={name}>
              <a className={style}>{name}</a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
