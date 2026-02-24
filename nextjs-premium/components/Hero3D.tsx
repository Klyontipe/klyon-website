'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useAnimation } from '@/contexts/AnimationContext'

export default function Hero3D() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { startupComplete } = useAnimation()
  
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
      style={{ background: '#0f0f0f', perspective: '1000px' }}
    >
      {/* 3D Background Layers - Dark Premium */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated 3D gradient orbs - Gold accents */}
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
          className="absolute top-20 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, rgba(161, 98, 7, 0.15) 50%, transparent 100%)',
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
          className="absolute bottom-20 right-1/4 w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.25) 0%, rgba(133, 77, 14, 0.1) 50%, transparent 100%)',
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
          className="absolute inset-0 opacity-[0.05]"
        >
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(234, 179, 8, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234, 179, 8, 0.15) 1px, transparent 1px)
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
                background: `rgba(${234 - i * 5}, ${179 - i * 3}, ${8 + i * 2}, ${opacity})`,
                boxShadow: `0 0 ${shadowSize}px rgba(234, 179, 8, 0.4)`,
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
          animate={startupComplete ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl mb-16 mt-8 glass-soft shadow-soft-xl backdrop-blur-xl border border-amber-400/30"
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
            <Sparkles className="w-5 h-5 text-amber-400" />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 blur-md"
              style={{ filter: 'blur(8px)' }}
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>
          </motion.div>
          <span className="text-sm font-semibold text-neutral-100 tracking-wider uppercase">
            Lorenzo Fortini <span className="text-amber-400/60">•</span> Expert IA & Automatisation <span className="text-amber-400/60">•</span> Disponible
          </span>
        </motion.div>


        {/* Premium Subtitle avec typographie distinctive */}
          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            animate={startupComplete ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -10 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              x: isMounted ? subtitleX : 0,
              y: isMounted ? subtitleY : 0,
              transformStyle: 'preserve-3d',
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 font-light tracking-tight max-w-4xl mx-auto px-4"
          >
          <span className="inline-block text-neutral-100 font-medium">Logiciels sur mesure</span>
          <motion.span
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="mx-4 text-amber-400 font-light"
            style={{ fontWeight: 100 }}
          >
            &
          </motion.span>
          <span className="inline-block text-neutral-100 font-medium">Automatisation intelligente</span>
        </motion.p>

        {/* Rich Description avec style plus marqué */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8 sm:mb-12 font-light max-w-3xl mx-auto leading-relaxed px-4"
            style={{ letterSpacing: '0.01em' }}
          >
          Transformez votre entreprise avec des solutions sur mesure. Formations IA & ChatGPT, 
          Microsoft 365 avancé, développement full-stack et automatisation de processus. 
          <br className="hidden md:block" />
          <motion.span 
            className="text-amber-400 font-semibold relative"
            whileHover={{ scale: 1.05 }}
          >
            Expertise technique
          </motion.span>
          {' '}et{' '}
          <motion.span 
            className="text-amber-500 font-semibold relative"
            whileHover={{ scale: 1.05 }}
          >
            accompagnement personnalisé
          </motion.span>
          {' '}dans le Sud de la France.
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
                    background: `radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, transparent 70%)`,
                  }}
                />
                <div className="relative px-6 py-5 rounded-2xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-soft-xl group-hover:shadow-2xl transition-all">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-8 h-8 mx-auto mb-2 relative flex items-center justify-center"
                  >
                    {/* Formes géométriques abstraites uniques */}
                    {index === 0 && (
                      <>
                        <div className="absolute w-6 h-1 bg-amber-400 rotate-45" />
                        <div className="absolute w-6 h-1 bg-amber-400 -rotate-45" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="absolute w-4 h-4 border-2 border-amber-400 rotate-45" />
                        <div className="absolute w-2 h-2 bg-amber-400/50 rotate-45" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="absolute w-5 h-5 border-2 border-amber-400 rounded-full" />
                        <div className="absolute w-2 h-2 bg-amber-400 top-0 left-1/2 -translate-x-1/2" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-amber-400" />
                        <div className="absolute top-2 w-4 h-1 bg-amber-400" />
                      </>
                    )}
                  </motion.div>
                  <div className="text-sm font-bold text-neutral-100 tracking-wide uppercase">{item.text}</div>
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
              background: 'linear-gradient(135deg, #a16207 0%, #eab308 50%, #fbbf24 100%)',
              boxShadow: '0 20px 60px rgba(234, 179, 8, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-black text-base sm:text-lg overflow-hidden min-h-[44px] flex items-center justify-center"
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
            className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-2xl font-bold text-neutral-100 text-base sm:text-lg glass-soft border-2 border-amber-400/30 backdrop-blur-xl shadow-soft-xl overflow-hidden min-h-[44px] flex items-center justify-center"
          >
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-xl mx-auto px-4"
        >
          {[
            { number: '100%', label: 'Satisfaction', color: 'emerald', icon: Sparkles },
          ].map((stat, index) => (
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
                      `0 0 30px rgba(234, 179, 8, 0.3)`,
                      `0 0 60px rgba(234, 179, 8, 0.5)`,
                      `0 0 30px rgba(234, 179, 8, 0.3)`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100"
                />
                <div className="relative px-6 py-5 rounded-2xl glass-dark border border-amber-400/20 backdrop-blur-xl">
                  <div className="w-10 h-10 mx-auto mb-3 relative flex items-center justify-center">
                    <div className="absolute w-7 h-7 border-2 border-amber-400 rounded-full" />
                    <div className="absolute w-2 h-2 bg-amber-400 top-0 left-1/2 -translate-x-1/2" />
                    <div className="absolute w-2 h-2 bg-amber-400 bottom-0 left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light mb-2 text-amber-400" style={{ fontWeight: 100 }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-neutral-300">{stat.label}</div>
                </div>
              </motion.div>
            ))
        </motion.div>

        {/* Premium badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
              {[
            { text: 'Mission courte ou longue', color: 'blue' },
            { text: 'Autonome ou renfort équipe', color: 'emerald' },
            { text: 'Livraison production-ready', color: 'indigo' },
            { text: 'Support post-livraison', color: 'purple' },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3, rotateY: 5, z: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl glass-soft border border-amber-400/20 backdrop-blur-xl text-neutral-100 text-sm font-bold tracking-wide uppercase shadow-soft"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className={`w-2.5 h-2.5 rounded-full bg-amber-400`}
              />
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
