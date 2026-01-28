'use client'

import { motion } from 'framer-motion'

// Formes géométriques simples et abstraites
const GeometricShape = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect x="20" y="20" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const SimpleLine = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const CircleShape = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
  </svg>
)

const TriangleShape = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path d="M 50 20 L 80 80 L 20 80 Z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const SquareShape = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const HexagonShape = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path d="M 50 15 L 80 35 L 80 65 L 50 85 L 20 65 L 20 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const floatingShapes = [
  { Component: GeometricShape, delay: 0, x: '10%', y: '20%' },
  { Component: SimpleLine, delay: 0.5, x: '85%', y: '30%' },
  { Component: CircleShape, delay: 1, x: '15%', y: '70%' },
  { Component: TriangleShape, delay: 1.5, x: '80%', y: '75%' },
  { Component: SquareShape, delay: 2, x: '50%', y: '15%' },
  { Component: HexagonShape, delay: 2.5, x: '45%', y: '85%' },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {floatingShapes.map((item, index) => {
        const Component = item.Component
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.05, 0.08, 0.05, 0],
              scale: [0, 1, 1.2, 1, 0],
              x: [0, 50, -30, 20, 0],
              y: [0, -50, 30, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
            }}
            className="text-neutral-400/8"
          >
            <Component className="h-16 w-16 md:h-24 md:w-24" />
          </motion.div>
        )
      })}
    </div>
  )
}
