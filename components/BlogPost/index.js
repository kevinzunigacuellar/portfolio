export default function BlogPost({ title, date, description }) {
  return (
    <>
      <h2 className='text-xl py-2 text-gray-900 font-semibold dark:text-gray-200'>
        {title}
      </h2>
      <p className='text-gray-500 dark:text-gray-400'>{date}</p>
      <p className='text-gray-500 dark:text-gray-400'>{description}</p>
    </>
  )
}
