export default function Body({ children }) {
  return (
    <main className='bg-gray-100 dark:bg-gray-800 transition-colors flex-grow'>
      <div className='mx-auto px-6 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        {children}
      </div>
    </main>
  )
}
