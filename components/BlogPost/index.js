export default function BlogPost({ title, date, description }) {
  return (
    <div className='shadow rounded py-4 px-6 border-l-4 border-indigo-400 hover:border-indigo-500 hover:shadow-md dark:bg-gray-900'>
      <h2 className='text-lg pb-2 text-gray-900 font-semibold dark:text-gray-200 transition-all'>
        {title}
      </h2>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>{date}</p>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>
        {description}
      </p>
    </div>
  )
}
