export default function SpotifyPlaceholder() {
  return (
    <div className='w-auto max-w-sm sm:w-96 mt-8'>
      <div className='flex bg-white dark:bg-gray-800 rounded-md min-w-full items-center overflow-hidden'>
        <div className='w-16 h-16 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse'></div>
        <div className='px-3 py-2 w-full space-y-2'>
          <div className='bg-gray-300 dark:bg-gray-600 rounded-md w-40 sm:w-60 h-4 animate-pulse'></div>
          <div className='bg-gray-300 dark:bg-gray-600 rounded-md w-24 sm:w-36 h-4 animate-pulse'></div>
        </div>
      </div>
    </div>
  )
}
