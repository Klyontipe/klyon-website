'use client'

import { motion } from 'framer-motion'
import { useAnimation } from '@/contexts/AnimationContext'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  const { startupComplete } = useAnimation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
