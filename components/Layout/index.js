import { useState } from 'react'
import Navbar from 'components/Layout/Navbar'
import Body from 'components/Layout/Body'
import Footer from 'components/Layout/Footer'
export default function Layout({ children }) {
  const [dark, setDark] = useState(false)
  return (
    <div className='flex flex-col min-h-screen items-stretch'>
      <Navbar setDark={setDark} dark={dark} />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}
