import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'IA', href: '/ia' },
    { name: 'Développement', href: '/developpement' },
    { name: 'Réparation', href: '/reparation' },
    { name: 'Projets', href: '/projets' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center space-x-3">
            <motion.img
              src="./assets/logowhite.png"
              alt="Klyon - Expert IA & Développement Informatique Bouches-du-Rhône"
              className="h-36 w-auto lg:h-40 max-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <RouterLink
                key={item.name}
                to={item.href}
                className={`text-gray-300 hover:text-primary-400 font-medium transition-colors duration-200 relative group ${
                  location.pathname === item.href ? 'text-primary-400' : ''
                }`}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 ${
                      location.pathname === item.href ? 'w-full' : 'w-0'
                    }`}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </RouterLink>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RouterLink
                to="/devis"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">💬</span>
                Demande de Devis
              </RouterLink>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900 border-t border-gray-700"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <RouterLink
                    key={item.name}
                    to={item.href}
                    className={`block w-full text-left font-medium transition-colors duration-200 ${
                      location.pathname === item.href 
                        ? 'text-primary-400' 
                        : 'text-gray-300 hover:text-primary-400'
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.div>
                  </RouterLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
