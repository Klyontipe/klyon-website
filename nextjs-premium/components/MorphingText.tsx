'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['KLYON', 'LOGICIELS', 'AUTOMATISATION', 'INNOVATION', 'SOLUTIONS']

export default function MorphingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-20 md:h-24 lg:h-28 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 90 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-black absolute"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 8s ease infinite',
            textShadow: '0 0 40px rgba(102, 126, 234, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.3))',
          }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
