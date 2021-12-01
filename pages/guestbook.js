import Container from 'components/Container'
import GuestbookEntries from 'components/GuestBookEntries'

export default function Guestbook() {
  return (
    <Container title='Guestbook' description='this is a guestbook' image=''>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        Guestbook
      </h1>
      <p className='pb-6 w-full leading-relaxed text-gray-600 md:max-w-xl dark:text-gray-400'>
        Welcome to my guestbook! Feel free to leave a comment below.
      </p>
      <GuestbookEntries />
    </Container>
  )
}
