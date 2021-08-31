export default function Body({ children }) {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <main className='container mx-auto px-4 py-2'>{children}</main>
    </div>
  )
}
