import Image from 'next/image'
import { useRouter } from 'next/router'
export default function CurrentlyPlaying({
  songName,
  imgUrl,
  artists,
  songUrl,
}) {
  const router = useRouter()
  const { locale } = router
  return (
    <div>
      <div className='flex items-center pb-2.5'>
        <svg
          className='fill-current text-green-400 w-6 h-auto'
          viewBox='0 0 2931 2931'
          width='2931'
          height='2931'>
          <path d='M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6c-26.3 43.2-82.6 56.7-125.6 30.4-344.1-210.3-777.3-257.8-1287.4-141.3-49.2 11.3-98.2-19.5-109.4-68.7-11.3-49.2 19.4-98.2 68.7-109.4C1242.1 1697.1 1721 1752 2107.3 1988c43 26.5 56.7 82.6 30.3 125.6zm179.3-398.9c-33.1 53.8-103.5 70.6-157.2 37.6-393.8-242.1-994.4-312.2-1460.3-170.8-60.4 18.3-124.2-15.8-142.6-76.1-18.2-60.4 15.9-124.1 76.2-142.5 532.2-161.5 1193.9-83.3 1646.2 194.7 53.8 33.1 70.8 103.4 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5-72.4 22-149-18.9-170.9-91.3-21.9-72.4 18.9-149 91.4-171 517.7-157.1 1378.2-126.8 1922 196 65.1 38.7 86.5 122.8 47.9 187.8-38.5 65.2-122.8 86.7-187.8 48z' />
        </svg>
        <p className='text-gray-500 px-1 sm:text-sm ml-1 text-xs dark:text-gray-400'>
          {locale == 'en' ? 'Now playing' : 'Reproduciendo'}
        </p>
      </div>
      <div className='w-72 sm:w-96'>
        <a
          href={songUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='flex bg-white rounded-md overflow-hidden min-w-full items-center shadow-sm hover:shadow dark:bg-gray-700 transition-all'>
          <div className='relative w-16 h-16 flex-shrink-0'>
            <Image
              className='absolute w-full h-full object-cover'
              src={imgUrl}
              alt='Now playing this song'
              layout='fill'
            />
          </div>
          <div className='px-3 py-2 w-full overflow-hidden'>
            <p className='font-medium text-gray-800 text-sm sm:text-base truncate dark:text-gray-300'>
              {songName}
            </p>
            <p className='text-gray-600 sm:text-sm text-xs leading-relaxed truncate dark:text-gray-400'>
              {artists}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
