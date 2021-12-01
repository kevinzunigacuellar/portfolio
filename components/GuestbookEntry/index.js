import DateFormater from 'components/DateFormater'

export default function GuestbookEntry({ author, datetime, message }) {
  return (
    <article className='space-y-3 pb-6'>
      <p className='text-gray-900 dark:text-gray-100'>{message}</p>
      <div className='flex space-x-1 items-center text-sm text-gray-600 dark:text-gray-400'>
        <p>{author} &middot;</p>
        <DateFormater
          date={datetime}
          className=''
          format={{
            year: '2-digit',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }}
        />
      </div>
    </article>
  )
}
