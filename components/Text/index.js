export default function Text({ children }) {
  return (
    <p className='max-w-lg leading-relaxed text-gray-600 dark:text-gray-400'>
      {children}
    </p>
  )
}
