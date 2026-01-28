'use client'

import { motion } from 'framer-motion'

const shapes = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 100 + 50,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
  shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
  color: [
    'rgba(102, 126, 234, 0.1)',
    'rgba(118, 75, 162, 0.1)',
    'rgba(240, 147, 251, 0.1)',
    'rgba(79, 172, 254, 0.1)',
    'rgba(0, 242, 254, 0.1)',
  ][Math.floor(Math.random() * 5)],
}))

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.color,
            borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'triangle' ? '0' : '20%',
            clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -30, 30, -20, 0],
            x: [0, 20, -20, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
