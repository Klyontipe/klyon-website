import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Notification from './Notification'
import ScrollToTop from './ScrollToTop'
import ScrollToTopOnRouteChange from './ScrollToTopOnRouteChange'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ScrollToTopOnRouteChange />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Notification />
    </div>
  )
}

export default Layout
