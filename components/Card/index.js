import Link from 'next/link'
import Image from 'next/image'
import DateFormater from 'components/DateFormater'

export default function Card({ title, description, image, date, url }) {
  return (
    <Link href={url}>
      <a className='group'>
        <div className='relative aspect-[14/9] rounded-lg shadow overflow-hidden'>
          <Image
            src={image}
            alt={title}
            className='absolute w-full h-full filter group-hover:brightness-75 transition'
            layout='fill'
            objectFit='fill'
          />
        </div>
        <div className='py-6'>
          <h2 className='text-xl font-semibold text-gray-900 tracking-tight dark:text-white group-hover:text-indigo-500'>
            {title}
          </h2>
          {date && <DateFormater date={date} className='block text-sm text-gray-600 dark:text-gray-400 my-1' />}
          <p className='text-gray-600 dark:text-gray-300 my-4'>{description}</p>
        </div>
      </a>
    </Link>
  )
}
