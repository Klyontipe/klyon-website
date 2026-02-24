'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'klyon-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (value: 'accepted' | 'rejected') => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value)
    }
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="glass-soft border border-amber-400/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-sm text-neutral-300">
                <p className="font-medium mb-1">Gestion des cookies</p>
                <p className="text-neutral-400">
                  Nous utilisons des cookies techniques pour faire fonctionner le site. 
                  Pour en savoir plus, consultez notre{' '}
                  <Link
                    href="/politique-confidentialite"
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    politique de confidentialité
                  </Link>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => handleChoice('rejected')}
                  className="px-4 py-2 rounded-xl border border-neutral-600 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={() => handleChoice('accepted')}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-sm font-semibold text-black hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/30"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

