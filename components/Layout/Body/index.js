export default function Body({ children }) {
  return (
    <div className='bg-white dark:bg-gray-800 transition-colors flex-grow'>
      <main className='container mx-auto px-4 pt-2 pb-4'>{children}</main>
    </div>
  )
}
