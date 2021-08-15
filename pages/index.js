import Link from 'next/link'
import { useRouter } from 'next/router'
const contents = {
  en: 'This text in the language according to the locale',
  es: 'Este texto esta en el lenguage de acuerdo al local',
}
const Example = () => {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? contents.en : contents.es
  return <p>{t}</p>
}
export default function Home() {
  return (
    <div>
      <p>Index page</p>
      <Example />
      <Link href='/blog'>Blog</Link>
    </div>
  )
}
