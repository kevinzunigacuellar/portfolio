import Image from 'next/image'

export default function ImageCard({ title, url, img }) {
  return (
    <figure className='max-w-4xl rounded-lg overflow-hidden shadow hover:shadow-md'>
      <div className='relative pb-2/3'>
        <div className='group absolute w-full h-full z-10 bg-gray-900 bg-opacity-0 hover:bg-opacity-50 transition-all'>
          <figcaption className='absolute bottom-0 py-6 text-center w-full bg-gray-700 dark:bg-opacity-0 bg-opacity-0 group-hover:bg-opacity-90'>
            <h4 className='sm:text-xl text-gray-100 text-opacity-0 group-hover:text-opacity-100 font-semibold'>
              {title}
            </h4>
            <a
              className='text-xs sm:text-base cursor-pointer text-opacity-0 group-hover:text-opacity-100 text-blue-400 hover hover:text-blue-500'
              href={url}
              target='_blank'
              rel='noreferrer'>
              {url}
            </a>
          </figcaption>
        </div>
        <Image
          className='absolute w-full h-full object-cover'
          src={img}
          alt={title}
          layout='fill'
          placeholder='blur'
        />
      </div>
    </figure>
  )
}
