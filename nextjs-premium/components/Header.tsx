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
          ? 'backdrop-blur-xl border-b border-amber-500/20 shadow-lg'
          : 'backdrop-blur-sm border-b border-amber-500/10'
      }`}
      style={{
        background: isScrolled ? 'rgba(15, 15, 15, 0.95)' : 'rgba(15, 15, 15, 0.8)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col"
            >
              <motion.span 
                className="text-2xl font-light text-amber-400 relative z-10 tracking-tight"
                whileHover={{ letterSpacing: '0.1em' }}
                transition={{ duration: 0.3 }}
              >
                KLYON
              </motion.span>
              <span className="text-[9px] font-light text-amber-400/60 tracking-widest uppercase mt-[-4px]">
                software
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-neutral-300 hover:text-amber-400 font-medium transition-all duration-200 text-sm group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
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
                  className="relative px-6 py-2.5 text-black text-sm font-bold rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 block uppercase tracking-wide"
                >
                  <span className="relative z-10">Discuter d'une mission</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors"
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
              className="md:hidden border-t border-amber-500/20 py-4 backdrop-blur-xl"
              style={{ background: 'rgba(15, 15, 15, 0.98)' }}
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-neutral-300 hover:text-amber-400 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-bold rounded-lg hover:from-amber-500 hover:to-amber-600 transition-colors duration-200 uppercase tracking-wide"
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
