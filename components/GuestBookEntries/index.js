import GuestbookEntry from 'components/GuestbookEntry'
import useSWR from 'swr'
import { getEntries } from 'services/getEntries'

export default function GuestbookEntries() {
  const { data, error, isValidating } = useSWR('/api/guestbook', getEntries)
  if (error) return <div>failed to load</div>
  if (!data) return <GuestbookEntryPlaceholder />
  if (!data.length) return <div>no posts</div>
  return (
    <div className='grid grid-cols-1 gap-6 pb-6'>
      {data.map(entry => (
        <GuestbookEntry key={entry.id} message={entry.message} datetime={entry.createdAt} author={entry.author} />
      ))}
    </div>
  )
}

function GuestbookEntryPlaceholder() {
  return (
    <div className='grid grid-cols-1 gap-6 pb-6'>
      <div className='space-y-3'>
        <div className='h-4 w-40 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
        <div className='h-4 w-60 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
      </div>
      <div className='space-y-3'>
        <div className='h-4 w-40 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
        <div className='h-4 w-60 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
      </div>
      <div className='space-y-3'>
        <div className='h-4 w-40 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
        <div className='h-4 w-60 flex-shrink-0 bg-gray-300 dark:bg-gray-600 animate-pulse rounded-lg'></div>
      </div>
    </div>
  )
}
