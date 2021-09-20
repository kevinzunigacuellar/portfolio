import { useState } from 'react'
import Navbar from 'components/Layout/Navbar'
import Body from 'components/Layout/Body'
export default function Layout({ children }) {
  const [dark, setDark] = useState(false)
  return (
    <>
      <Navbar setDark={setDark} dark={dark} />
      <Body>{children}</Body>
    </>
  )
}
