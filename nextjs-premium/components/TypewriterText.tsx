'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  texts: string[]
  speed?: number
  className?: string
}

export default function TypewriterText({ texts, speed = 100, className = '' }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return current.slice(0, prev.length + 1)
          }
        })
      }, isDeleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-accent-500 ml-1"
      />
    </span>
  )
}
