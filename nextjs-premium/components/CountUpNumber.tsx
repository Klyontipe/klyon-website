'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CountUpNumberProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUpNumber({ value, suffix = '', duration = 2, className = '' }: CountUpNumberProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (inView && !hasAnimated) {
      motionValue.set(value)
      setHasAnimated(true)
    }
  }, [motionValue, inView, value, hasAnimated])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (spanRef.current) {
        const rounded = Math.floor(latest)
        spanRef.current.textContent = `${rounded}${suffix}`
      }
    })

    return () => unsubscribe()
  }, [springValue, suffix])

  return (
    <span ref={ref}>
      <motion.span 
        ref={spanRef} 
        className={className} 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }} 
        transition={{ duration: 0.5, type: 'spring' }}
      >
        0{suffix}
      </motion.span>
    </span>
  )
}
