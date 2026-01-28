'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Formations', href: '/formations' },
  { name: 'Services Info', href: '/services-info' },
  { name: 'Automatisations', href: '/automatisations' },
  { name: 'Développement', href: '/developpement' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl border-b border-neutral-300/30 bg-white/80 shadow-sm'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <span className="text-2xl font-light text-neutral-900 relative z-10 tracking-tight">
                KLYON
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-700 hover:text-neutral-900 font-medium transition-all duration-200 text-sm group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-neutral-900"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Link
                  href="/contact"
                  className="relative px-6 py-2.5 text-white text-sm font-semibold rounded-xl border border-neutral-800 bg-neutral-900 shadow-md hover:shadow-lg transition-all duration-300 block"
                >
                  <span className="relative z-10">Discuter d'une mission</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-neutral-300/30 py-4 bg-white/90 backdrop-blur-xl"
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-neutral-700 hover:text-neutral-900 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-200"
                >
                  Discuter d'une mission
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
