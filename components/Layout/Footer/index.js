import Github from 'components/icons/Github'
import LinkedIn from 'components/icons/LinkedIn'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navigation } from '../Navbar'
export default function Footer() {
  const router = useRouter()
  const { locale } = router
  return (
    <footer className='bg-white py-4 mt-auto border-t border-gray-300 dark:bg-gray-900 dark:border-gray-500'>
      <div className='flex flex-wrap justify-center p-2 space-x-3'>
        {navigation.map(({ name, href }) => (
          <Link href={href} key={name + href}>
            <a className='p-2 cursor-pointer antialiased rounded-lg text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
              {locale === 'en' ? name.en : name.es}
            </a>
          </Link>
        ))}
      </div>
      <div className='flex justify-center p-2 space-x-5 text-gray-400 dark:text-gray-400'>
        <a
          href='https://github.com/kevinzunigacuellar'
          target='_blank'
          rel='noreferrer'>
          <Github />
        </a>
        <a
          href='https://www.linkedin.com/in/kevinzunigacuellar/'
          target='_blank'
          rel='noreferrer'>
          <LinkedIn />
        </a>
      </div>
    </footer>
  )
}
