import Container from 'components/Container'
import GuestbookEntries from 'components/GuestBookEntries'
import SignEntryForm from 'components/Forms/SignEntryForm'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

export default function Guestbook() {
  const { user, loading } = useUser()
  return (
    <Container title='Guestbook' description='this is a guestbook' image=''>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        Guestbook
      </h1>
      <p className='pb-6 w-full leading-relaxed text-gray-600 md:max-w-xl dark:text-gray-400'>
        Welcome to my guestbook! Feel free to leave a comment below.
      </p>
      <div className='p-6 bg-indigo-50 rounded-lg border border-indigo-200 mb-6 dark:bg-indigo-900 dark:border-indigo-600 transition-colors'>
        <h2 className='font-semibold text-xl text-gray-900 dark:text-gray-100'>
          Sign the Guestbook
        </h2>
        <p className='my-3 text-gray-600 dark:text-gray-300'>
          Share a message for a future visitor.
        </p>
        {user ? (
          <SignEntryForm />
        ) : (
          <Link href='/api/auth/login'>
            <a className='inline-block px-8 hover:bg-indigo-200 dark:text-gray-100 bg-indigo-100 transition-colors border border-indigo-300 dark:border-gray-500 rounded-lg py-2 font-semibold text-indigo-700 dark:bg-gray-800  dark:hover:bg-gray-700'>
              Login
            </a>
          </Link>
        )}
      </div>
      <GuestbookEntries />
    </Container>
  )
}
