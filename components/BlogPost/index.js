export default function BlogPost({ title, date, description }) {
  return (
    <div className='max-w-4xl shadow rounded py-4 px-6 border-l-4 border-indigo-400 hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-md dark:bg-gray-900 bg-white transition-all'>
      <h2 className='text-lg pb-2 text-gray-900 font-medium dark:text-gray-200'>
        {title}
      </h2>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>{date}</p>
      <p className='text-gray-500 leading-relaxed dark:text-gray-400'>
        {description}
      </p>
    </div>
  )
}
