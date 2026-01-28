'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import ServiceModal from './ServiceModal'

interface ServiceCard3DProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  color?: string
}

export default function ServiceCard3D({ 
  icon: Icon, 
  title, 
  description, 
  href,
  color = 'blue'
}: ServiceCard3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const z = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = e.clientX - centerX
      const y = e.clientY - centerY
      
      mouseX.set(x)
      mouseY.set(y)
      
      const rotateXValue = (y / rect.height) * -20
      const rotateYValue = (x / rect.width) * 20
      
      rotateX.set(rotateXValue)
      rotateY.set(rotateYValue)
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
      z.set(50)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      rotateX.set(0)
      rotateY.set(0)
      z.set(0)
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mouseX, mouseY, rotateX, rotateY, z, isMounted])

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500/20 via-blue-400/10 to-transparent',
      icon: 'text-blue-600',
      glow: 'rgba(59, 130, 246, 0.4)',
      border: 'border-blue-200/50',
    },
    purple: {
      gradient: 'from-purple-500/20 via-purple-400/10 to-transparent',
      icon: 'text-purple-600',
      glow: 'rgba(139, 92, 246, 0.4)',
      border: 'border-purple-200/50',
    },
    indigo: {
      gradient: 'from-indigo-500/20 via-indigo-400/10 to-transparent',
      icon: 'text-indigo-600',
      glow: 'rgba(99, 102, 241, 0.4)',
      border: 'border-indigo-200/50',
    },
    emerald: {
      gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
      icon: 'text-emerald-600',
      glow: 'rgba(16, 185, 129, 0.4)',
      border: 'border-emerald-200/50',
    },
  }

  const colors = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        z,
        transformStyle: 'preserve-3d',
      }}
      className="relative group h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* 3D Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
          scale: isHovered ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Card content */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="relative h-full p-8 rounded-3xl glass-soft border-2 backdrop-blur-xl overflow-hidden cursor-pointer"
        style={{
          borderColor: isHovered ? colors.glow : 'rgba(255, 255, 255, 0.2)',
          background: isHovered 
            ? 'rgba(255, 255, 255, 0.8)' 
            : 'rgba(255, 255, 255, 0.6)',
          boxShadow: isHovered
            ? `0 30px 80px ${colors.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.5)`
            : '0 10px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          transformStyle: 'preserve-3d',
        }}
      >
          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 3,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
          />

          {/* Icon with 3D effect */}
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
            }}
            className="relative mb-6"
          >
            <motion.div
              animate={{
                rotateY: isHovered ? [0, 360] : 0,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                rotateY: { duration: 2, repeat: Infinity, ease: 'linear' },
                scale: { duration: 1.5, repeat: Infinity },
              }}
              className="inline-block"
            >
              <div className="relative">
                <Icon 
                  className={`w-12 h-12 ${colors.icon} relative z-10`}
                  style={{
                    filter: isHovered ? `drop-shadow(0 0 20px ${colors.glow})` : 'none',
                  }}
                />
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 blur-xl ${colors.icon} opacity-50`}
                >
                  <Icon className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h3
            style={{
              transform: 'translateZ(20px)',
            }}
            className="text-2xl font-bold text-neutral-900 mb-4 relative z-10"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            style={{
              transform: 'translateZ(10px)',
            }}
            className="text-neutral-600 leading-relaxed relative z-10"
          >
            {description}
          </motion.p>

          {/* Arrow indicator */}
          <motion.div
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-6 right-6"
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.div
              className={`w-10 h-10 rounded-full ${colors.icon.replace('text-', 'bg-').replace('-600', '-100')} flex items-center justify-center`}
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={colors.icon}
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* 3D border effect */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${colors.glow} 0%, transparent 50%)`,
              opacity: isHovered ? 0.3 : 0,
              transition: 'opacity 0.3s',
              transform: 'translateZ(-10px)',
            }}
          />
      </div>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        icon={Icon}
        title={title}
        description={description}
        color={color}
      />
    </motion.div>
  )
}
