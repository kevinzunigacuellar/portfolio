import GuestbookEntry from 'components/GuestbookEntry'
import useSWR from 'swr'
import { getEntries } from 'services/getEntries'

export default function GuestbookEntries() {
  const { data, error } = useSWR('/api/guestbook', getEntries)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (!data.length) return <div>no posts</div>
  return (
    <div>
      {data.map(entry => (
        <GuestbookEntry
          key={entry.id}
          message={entry.message}
          datetime={entry.createdAt}
          author={entry.author}
        />
      ))}
    </div>
  )
}
