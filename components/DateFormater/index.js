import { useRouter } from 'next/router'

export default function DateFormater({ className, date, format }) {
  const router = useRouter()
  const { locale } = router

  return (
    <time dateTime={date} className={className || ''}>
      {new Date(date).toLocaleDateString(
        locale,
        format || {
          month: 'long',
          weekday: 'long',
          day: 'numeric',
          year: 'numeric',
        }
      )}
    </time>
  )
}
