import { Formik, Form } from 'formik'
import { TextInput } from 'components/Forms/Fields'
import { mutate } from 'swr'
import axios from 'axios'

export default function SignEntry() {
  const handleCreateEntry = async values => {
    await axios.post('/api/createEntry', values)
    await mutate('/api/guestbook')
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
      </Form>
    </Formik>
  )
}
