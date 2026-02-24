'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function PageBackground() {
  const { scrollYProgress } = useScroll()
  const meshOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.5, 0.35, 0.2])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.08])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{ opacity: meshOpacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute w-[160%] h-[160%] -left-[30%] -top-[40%] rounded-full blur-3xl gradient-animated"
          style={{
            background:
              'radial-gradient(circle at 0% 0%, rgba(234,179,8,0.4), transparent 50%), radial-gradient(circle at 80% 100%, rgba(250,204,21,0.25), transparent 55%), radial-gradient(circle at 50% 50%, rgba(37,99,235,0.15), transparent 60%)',
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: gridY, scale }}
        className="absolute inset-0 opacity-[0.05]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, transparent 0%, #0f0f0f 70%)',
        }}
      />
    </div>
  )
}
