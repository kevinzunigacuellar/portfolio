export default function Body({ children }) {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <main className='container mx-auto px-4 pt-2 pb-4'>{children}</main>
    </div>
  )
}
