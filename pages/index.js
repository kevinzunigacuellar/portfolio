import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Index page</p>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}
