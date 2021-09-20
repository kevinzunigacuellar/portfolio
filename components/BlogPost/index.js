export default function BlogPost({ title, date, description }) {
  return (
    <>
      <h2 className='text-lg py-2 text-gray-900 font-semibold dark:text-gray-200 transition-all'>
        {title}
      </h2>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>{date}</p>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>
        {description}
      </p>
    </>
  )
}
