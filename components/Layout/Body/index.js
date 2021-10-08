export default function Body({ children }) {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 transition-colors flex-grow'>
      <main className='mx-auto px-8 pt-10 pb-4 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl'>
        {children}
      </main>
    </div>
  )
}
