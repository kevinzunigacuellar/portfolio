import Container from 'components/Container'
import useSWR from 'swr'
import { getPosts } from 'services/getPosts'
import GuestbookEntry from 'components/GuestbookEntry'

export default function Guestbook() {
  const { data, error } = useSWR('/api/guestbook?limit=10&offset=0', getPosts)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (!data.length) return <div>no posts</div>

  return (
    <Container title='Guestbook' description='this is a guestbook' image=''>
      <h1 className='text-3xl tracking-tight sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 py-10'>
        Guestbook
      </h1>
      <p className='pb-6 w-full leading-relaxed text-gray-600 md:max-w-xl dark:text-gray-400'>
        Welcome to my guestbook! Feel free to leave a comment below.
      </p>
      {data.map(post => (
        <GuestbookEntry
          key={post.id}
          message={post.message}
          datetime={post.createdAt}
          author={post.author}
        />
      ))}
    </Container>
  )
}
