'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MagneticButton from './MagneticButton'

interface CTAProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTA({ href, children, variant = 'primary', className = '' }: CTAProps) {
  const baseStyles = 'relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group'
  
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-neutral-900 border-2 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 shadow-md hover:shadow-lg',
  }

  return (
    <MagneticButton>
      <motion.div
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
          {/* Animated gradient background */}
          <motion.span
            animate={{
              background: [
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
          />
          
          {/* Shimmer effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute inset-0 shimmer" />
          </span>
          
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {children}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.span>
          </span>
        </Link>
      </motion.div>
    </MagneticButton>
  )
}
