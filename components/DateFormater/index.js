import { useRouter } from 'next/router'

export default function DateFormater(props) {
  const router = useRouter()
  const { locale } = router

  return (
    <time dateTime={props.date} {...props}>
      {new Date(props.date).toLocaleDateString(locale, {
        month: 'long',
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </time>
  )
}
