import Navbar from 'components/Layout/Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto'>{children}</main>
    </>
  )
}
