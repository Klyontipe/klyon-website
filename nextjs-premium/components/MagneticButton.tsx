'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef, useEffect, useState } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

export default function MagneticButton({ children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isMounted) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.2)
    y.set(distanceY * 0.2)
  }

  const handleMouseLeave = () => {
    if (!isMounted) return
    x.set(0)
    y.set(0)
  }

  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
