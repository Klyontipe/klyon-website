'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(30, 58, 95, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(30, 58, 95, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 20%, rgba(30, 58, 95, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(30, 58, 95, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0"
      />
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgba(10, 10, 10, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(10, 10, 10, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, rgba(10, 10, 10, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(10, 10, 10, 0.05) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0"
      />
    </div>
  )
}
