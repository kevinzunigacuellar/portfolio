import Image from 'next/image'

export default function ImageCard({ title, url, img }) {
  return (
    <figure className='max-w-4xl rounded-lg overflow-hidden shadow hover:shadow-md'>
      <div className='relative pb-2/3'>
        <div className='group absolute w-full h-full z-10 bg-gray-900 bg-opacity-0 hover:bg-opacity-70 transition-all'>
          <figcaption className='flex items-center justify-center flex-col absolute bottom-0 py-5 sm:py-6 w-full bg-gray-900 dark:bg-opacity-0 bg-opacity-0 group-hover:bg-opacity-90'>
            <h4 className='text-base sm:text-lg text-gray-100 text-opacity-0 group-hover:text-opacity-100 font-bold'>
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
