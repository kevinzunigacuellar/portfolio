import Navbar from 'layout/Navbar'
import Body from 'layout/Body'
import Footer from 'layout/Footer'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen items-stretch antialiased'>
      <Navbar />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}
