'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlitchTextProps {
  children: ReactNode
  className?: string
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        textShadow: [
          '2px 2px 0px rgba(30, 58, 95, 0.5)',
          '-2px -2px 0px rgba(30, 58, 95, 0.5)',
          '2px -2px 0px rgba(30, 58, 95, 0.5)',
          '-2px 2px 0px rgba(30, 58, 95, 0.5)',
          '0px 0px 0px rgba(30, 58, 95, 0.5)',
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  )
}
