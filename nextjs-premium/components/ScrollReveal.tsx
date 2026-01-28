'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -20])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
