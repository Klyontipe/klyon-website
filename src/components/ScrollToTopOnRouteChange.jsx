import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll vers le haut à chaque changement de route
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTopOnRouteChange
