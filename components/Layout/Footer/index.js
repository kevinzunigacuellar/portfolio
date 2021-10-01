import Github from 'components/icons/Github'
import LinkedIn from 'components/icons/LinkedIn'
import SpotifyPlayer from 'components/SpotifyPlayer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navigation } from '../Navbar'
export default function Footer() {
  const router = useRouter()
  const { locale } = router
  return (
    <footer className='bg-gray-200 p-4 flex-shrink-0 border-t border-gray-300 dark:bg-gray-900 dark:border-gray-500 transition-all'>
      <div className='mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        <div className='flex justify-around'>
          <div className='flex flex-col space-y-5'>
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
            </div>
          </div>
          <div className='flex flex-col p-2'>
            {navigation.map(({ name, href }) => (
              <Link href={href} key={name + href}>
                <a className='p-2 cursor-pointer antialiased text-md text-gray-500 hover:text-gray-800 font-semibold dark:text-gray-400 dark:hover:text-gray-300'>
                  {locale === 'en' ? name.en : name.es}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
