'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero3D() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  
  // Create transforms once (hooks must be called unconditionally)
  const titleX = useTransform(springX, (v) => v * 0.5)
  const titleY = useTransform(springY, (v) => v * 0.5)
  const titleRotateX = useTransform(springY, (v) => v * 0.1)
  const titleRotateY = useTransform(springX, (v) => v * 0.1)
  
  const subtitleX = useTransform(springX, (v) => v * 0.2)
  const subtitleY = useTransform(springY, (v) => v * 0.2)
  
  const badgeX = useTransform(springX, (v) => v * 0.3)
  const badgeY = useTransform(springY, (v) => v * 0.3)
  
  const button1X = useTransform(springX, (v) => v * 0.1)
  const button1Y = useTransform(springY, (v) => v * 0.1)
  
  const button2X = useTransform(springX, (v) => -v * 0.1)
  const button2Y = useTransform(springY, (v) => -v * 0.1)

  // Grid rotation transforms
  const gridRotateX = useTransform(scrollYProgress, [0, 1], [0, 15])
  const gridRotateY = useTransform(scrollYProgress, [0, 1], [0, -10])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        mouseX.set(x * 30)
        mouseY.set(y * 30)
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, isMounted])

  return (
    <section 
      ref={sectionRef} 
      className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated 3D gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)',
            transformStyle: 'preserve-3d',
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotateX: [180, 0],
            rotateY: [0, -180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-1/4 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* 3D Grid Pattern */}
        <motion.div
          style={{ 
            y,
            rotateX: gridRotateX,
            rotateY: gridRotateY,
            transformStyle: 'preserve-3d',
          }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg)',
          }} />
        </motion.div>

        {/* Floating 3D particles - only render after mount to avoid hydration issues */}
        {isMounted && typeof window !== 'undefined' && [...Array(20)].map((_, i) => {
          const initialX = Math.random() * (window.innerWidth || 1920)
          const initialY = Math.random() * (window.innerHeight || 1080)
          const targetY = Math.random() * (window.innerHeight || 1080)
          const duration = 10 + Math.random() * 10
          const opacity = 0.3 + Math.random() * 0.3
          const shadowSize = 10 + Math.random() * 20
          return (
            <motion.div
              key={i}
              initial={{
                x: initialX,
                y: initialY,
                z: Math.random() * 500 - 250,
              }}
              animate={{
                y: [null, targetY],
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `rgba(${59 + i * 10}, ${130 + i * 5}, 246, ${opacity})`,
                boxShadow: `0 0 ${shadowSize}px rgba(59, 130, 246, 0.5)`,
                transformStyle: 'preserve-3d',
              }}
            />
          )
        })}
      </div>

      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto text-center relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Premium Badge with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 20,
          }}
          style={{
            x: isMounted ? badgeX : 0,
            y: isMounted ? badgeY : 0,
            transformStyle: 'preserve-3d',
          }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl mb-16 mt-8 glass-soft shadow-soft-xl backdrop-blur-xl border border-white/20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity },
            }}
            className="relative"
          >
            <Sparkles className="w-5 h-5 text-blue-500" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 blur-md"
              style={{ filter: 'blur(8px)' }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>
          </motion.div>
          <span className="text-sm font-semibold text-neutral-800 tracking-wide">
            Lorenzo Fortini • Expert IA & Automatisation • Disponible
          </span>
        </motion.div>


        {/* Premium Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              x: isMounted ? subtitleX : 0,
              y: isMounted ? subtitleY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-6 sm:mb-8 font-light tracking-wide max-w-4xl mx-auto px-4"
          >
          <span className="inline-block">Logiciels sur mesure</span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-3"
          >
            &
          </motion.span>
          <span className="inline-block">Automatisation intelligente</span>
        </motion.p>

        {/* Rich Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-12 font-light max-w-3xl mx-auto leading-relaxed px-4"
          >
          Transformez votre entreprise avec des solutions sur mesure. Formations IA & ChatGPT, 
          Microsoft 365 avancé, développement full-stack et automatisation de processus. 
          <br className="hidden md:block" />
          <span className="text-blue-600 font-medium">Expertise technique</span> et{' '}
          <span className="text-indigo-600 font-medium">accompagnement personnalisé</span> dans le Sud de la France.
        </motion.p>

        {/* Premium Value Props with 3D cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto px-4"
        >
          {[
            { icon: Zap, text: 'Rapidité', color: 'blue', colorClass: 'text-blue-600' },
            { icon: Rocket, text: 'Innovation', color: 'purple', colorClass: 'text-purple-600' },
            { icon: Sparkles, text: 'Excellence', color: 'indigo', colorClass: 'text-indigo-600' },
            { icon: ArrowRight, text: 'Résultats', color: 'emerald', colorClass: 'text-emerald-600' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  rotateY: 10,
                  rotateX: 5,
                  z: 30,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
                  }}
                />
                <div className="relative px-6 py-5 rounded-2xl glass-soft border border-white/30 backdrop-blur-xl shadow-soft-xl group-hover:shadow-2xl transition-all">
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${item.colorClass}`} />
                  <div className="text-sm font-semibold text-neutral-800">{item.text}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Premium CTA Buttons with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateX: 10,
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              x: isMounted ? button1X : 0,
              y: isMounted ? button1Y : 0,
              transformStyle: 'preserve-3d',
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
            className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-white text-base sm:text-lg overflow-hidden min-h-[44px] flex items-center justify-center"
          >
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.2) 100%)',
                backgroundSize: '200% 200%',
              }}
            />
            {/* Shimmer */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
            <span className="relative z-10 flex items-center gap-3">
              Discuter d'une mission
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateX: 10,
              rotateY: -5,
              z: 50,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              x: isMounted ? button2X : 0,
              y: isMounted ? button2Y : 0,
              transformStyle: 'preserve-3d',
            }}
            className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-neutral-800 text-base sm:text-lg glass-soft border-2 border-white/40 backdrop-blur-xl shadow-soft-xl overflow-hidden min-h-[44px] flex items-center justify-center"
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            />
            <span className="relative z-10 flex items-center gap-3">
              Découvrir mes services
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.a>
        </motion.div>

        {/* Premium Stats with 3D effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          {[
            { number: '45+', label: 'Projets réalisés', color: 'blue', icon: Rocket, iconClass: 'text-blue-600', textClass: 'text-blue-600' },
            { number: '100%', label: 'Satisfaction', color: 'emerald', icon: Sparkles, iconClass: 'text-emerald-600', textClass: 'text-emerald-600' },
            { number: '3', label: 'Ans d\'IA', color: 'indigo', icon: Zap, iconClass: 'text-indigo-600', textClass: 'text-indigo-600' },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  rotateY: 10,
                  z: 40,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                className="relative text-center group"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 30px rgba(59, 130, 246, 0.3)`,
                      `0 0 60px rgba(59, 130, 246, 0.5)`,
                      `0 0 30px rgba(59, 130, 246, 0.3)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100"
                />
                <div className="relative px-6 py-5 rounded-2xl glass-soft border border-white/30 backdrop-blur-xl">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.iconClass}`} />
                  <div className={`text-4xl md:text-5xl font-light mb-2 ${stat.textClass}`} style={{ fontWeight: 100 }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-neutral-700">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Premium badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            'Mission courte ou longue',
            'Autonome ou renfort équipe',
            'Livraison production-ready',
            'Support post-livraison',
          ].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3, rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl glass-soft border border-white/30 backdrop-blur-xl text-neutral-800 text-sm font-semibold shadow-soft"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-emerald-500' : index === 2 ? 'bg-indigo-500' : 'bg-purple-500'
                }`}
              />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
