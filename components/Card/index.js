import Link from 'next/link'
import Image from 'next/image'
import DateFormater from 'components/DateFormater'

export default function Card({ title, description, image, date, url }) {
  return (
    <Link href={url}>
      <a className='group'>
        <div className='relative pb-2/3 rounded-lg shadow overflow-hidden'>
          <Image
            src={image}
            alt={title}
            className='absolute w-full h-full object-cover filter group-hover:brightness-75 transition'
            layout='fill'
          />
        </div>
        <div className='py-4'>
          <h2 className='text-lg font-semibold text-gray-900 tracking-tight dark:text-gray-100 group-hover:text-indigo-400'>
            {title}
          </h2>
          {date && (
            <DateFormater
              date={date}
              className='text-sm text-gray-600 dark:text-gray-400'
            />
          )}
          <p className='text-gray-600 dark:text-gray-400 py-2'>{description}</p>
        </div>
      </a>
    </Link>
  )
}
