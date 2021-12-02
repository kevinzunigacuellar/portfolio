import { useField } from 'formik'

export const TextInput = props => {
  const [field] = useField(props)
  return (
    <input
      className='w-full flex-grow py-2 px-4 bg-white border text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 ring-offset-indigo-100 dark:bg-gray-800 dark:border-gray-500 dark:focus:ring-indigo-600 dark:ring-offset-indigo-900 dark:text-gray-100 transition-colors'
      {...field}
      {...props}
    />
  )
}
