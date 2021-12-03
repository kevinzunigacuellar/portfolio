import { Formik, Form } from 'formik'
import { TextInput } from 'components/Forms/Fields'
import { mutate } from 'swr'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function SignEntry() {
  const handleCreateEntry = async values => {
    toast.promise(
      axios.post('/api/createEntry', values),
      {
        loading: 'Posting...',
        success: 'Thank you for your comment',
        error: 'Something went wrong',
      },
      {
        style: {
          minWidth: '200px',
        },
        success: {
          duration: 5000,
        },
      }
    )
    mutate('/api/guestbook')
  }

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleCreateEntry(values)
        setSubmitting(false)
        resetForm()
      }}>
      <Form className='sm:flex sm:space-x-2 space-y-3 sm:space-y-0 items-center'>
        <TextInput
          name='message'
          type='text'
          placeholder='Your message'
          required
        />
        <button
          type='submit'
          className='block px-10 hover:border-indigo-400 hover:bg-indigo-200 dark:text-gray-100 bg-indigo-100 transition-colors border border-indigo-300 dark:border-gray-500 rounded-lg py-2 font-semibold text-indigo-700 dark:bg-gray-900 dark:hover:border-gray-300'>
          Sign
        </button>
        <Toaster />
      </Form>
    </Formik>
  )
}
