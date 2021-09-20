import Image from 'next/image'
export default function Book({ key, img, title, author, year, comment }) {
  return (
    <div className='mx-auto max-w-md md:max-w-2xl bg-white rounded-lg border overflow-hidden'>
      <div className='md:flex'>
        <div className='max-w-md'>
          <div className='relative pb-3/2 md:w-60'>
            <Image
              className='absolute w-full h-full object-cover'
              src={img}
              alt='Picture of the book'
              layout='fill'
            />
          </div>
        </div>
        <div className='py-4 px-6'>
          <p className='font-semibold py-1 text-lg'>{title}</p>
          <p>
            {author}
            <span className='text-gray-500'>&middot;</span>{' '}
            <span className='text-gray-500'>{year}</span>
          </p>
          <q className='text-gray-500 leading-relaxed'>{comment}</q>
        </div>
      </div>
    </div>
  )
}
