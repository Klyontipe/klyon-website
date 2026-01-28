'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBlob() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth) * 100
      const y = (clientY / innerHeight) * 100
      
      blob.style.setProperty('--mouse-x', `${x}%`)
      blob.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, rgba(236, 72, 153, 0.2) 100%)',
          filter: 'blur(80px)',
          transform: 'translate(calc(-50% + var(--mouse-x, 50%) * 0.1), calc(-50% + var(--mouse-y, 50%) * 0.1))',
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(59, 130, 246, 0.2) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 100%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
