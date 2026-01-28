'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const accentColors = [
  { name: 'yellow', value: '#FFD700', rgb: '255, 215, 0' },
  { name: 'cyan', value: '#00FFFF', rgb: '0, 255, 255' },
  { name: 'magenta', value: '#FF00FF', rgb: '255, 0, 255' },
]

export default function ColorAccents() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Accent spots that follow mouse */}
      {accentColors.map((color, index) => (
        <motion.div
          key={color.name}
          className="absolute rounded-full blur-3xl"
          style={{
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${color.value}40 0%, transparent 70%)`,
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Static accent spots at corners */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accentColors[0].value}30 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accentColors[1].value}30 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${accentColors[2].value}20 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
