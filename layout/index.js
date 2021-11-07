import Navbar from 'layout/Navbar'
import Body from 'layout/Body'
import Footer from 'layout/Footer'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen items-stretch antialiased bg-gray-100 dark:bg-gray-800 transition-colors'>
      <Navbar />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}
