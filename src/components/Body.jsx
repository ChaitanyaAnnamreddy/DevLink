import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Body
