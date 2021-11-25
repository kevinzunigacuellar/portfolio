export default function Body({ children }) {
  return (
    <main className='flex-grow'>
      <div className='mx-auto px-6 w-full lg:max-w-5xl'>{children}</div>
    </main>
  )
}
