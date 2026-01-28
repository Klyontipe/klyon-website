'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function HeroSectionSimple() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated background with particles effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Soft gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-100/50 via-transparent to-neutral-200/30" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-50/40 via-transparent to-transparent" />
        
        {/* Animated grid pattern */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-[0.02]"
        >
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite',
          }} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Soft badge - enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-12 glass-soft shadow-soft"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-blue-500"
          />
          <span className="text-sm font-medium text-neutral-700 tracking-wide">Lorenzo Fortini • Disponible pour missions</span>
        </motion.div>

        {/* Title - enhanced typography with glow effect */}
        <motion.div
          style={{ opacity }}
          className="relative mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-extralight text-neutral-900 tracking-[-0.02em] leading-[1.1] relative z-10"
            style={{
              letterSpacing: '-0.03em',
              fontWeight: 200,
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.1))',
            }}
          >
            KLYON
          </motion.h1>
          {/* Glow effect behind title */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 blur-2xl -z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(139, 92, 246, 0.2) 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 5s ease infinite',
            }}
          />
        </motion.div>

        {/* Subtitle - refined */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-600 mb-6 font-light tracking-[0.01em] max-w-3xl mx-auto"
          style={{
            letterSpacing: '0.02em',
          }}
        >
          Logiciels sur mesure & automatisation
        </motion.p>

        {/* Description enrichie */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-neutral-500 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
          style={{ letterSpacing: '0.01em' }}
        >
          Votre partenaire informatique dans le Sud de la France. Formations IA & ChatGPT, Microsoft 365, développement sur mesure et automatisation. 
          J'accompagne votre transformation digitale avec des solutions adaptées à vos besoins.
        </motion.p>

        {/* Value props - soft grey tones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12 text-sm md:text-base"
        >
          {['Gain de temps', 'Fiabilité', 'Process optimisés', 'Intégration complète'].map((text, index) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="px-5 py-2.5 rounded-xl border border-neutral-300/50 bg-white/50 backdrop-blur-sm text-neutral-700 hover:border-blue-300/50 hover:bg-blue-50/30 transition-all cursor-default font-medium shadow-soft glass-soft hover:shadow-blue-100/20"
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
        
        {/* CTA Buttons - soft alcantara style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4.5 rounded-2xl font-semibold text-white border border-neutral-800 bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-900 shadow-soft-xl hover:shadow-soft-xl transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: '0 8px 32px rgba(30, 58, 138, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Animated gradient overlay */}
            <motion.span
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                  'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <span className="relative z-10 flex items-center gap-2">
              Discuter d'une mission
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="/services"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4.5 rounded-2xl font-semibold text-neutral-800 border border-neutral-300/60 bg-white/70 backdrop-blur-sm shadow-soft-lg hover:shadow-soft-xl hover:bg-white/90 transition-all duration-300 glass-soft"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Subtle shimmer */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 4,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            />
            <span className="relative z-10 flex items-center gap-2">
              Voir mes services
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.a>
        </motion.div>

        {/* Stats rapides with 3D effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: '45+', label: 'Projets réalisés', color: 'text-blue-600', glowColor: 'rgba(59, 130, 246, 0.2)' },
            { number: '100%', label: 'Satisfaction', color: 'text-emerald-600', glowColor: 'rgba(16, 185, 129, 0.2)' },
            { number: '3', label: 'Ans d\'IA', color: 'text-indigo-600', glowColor: 'rgba(99, 102, 241, 0.2)' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="text-center relative group"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    `0 0 20px ${stat.glowColor}`,
                    `0 0 40px ${stat.glowColor}`,
                    `0 0 20px ${stat.glowColor}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-xl blur-xl opacity-50"
              />
              <div className={`text-2xl md:text-3xl font-light mb-1 ${stat.color} relative z-10`} style={{ fontWeight: 200 }}>
                {stat.number}
              </div>
              <div className="text-xs text-neutral-600 font-medium relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proof badges - soft grey */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {['Mission courte ou longue', 'Autonome ou renfort', 'Livraison production'].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -1 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-300/50 bg-white/60 backdrop-blur-sm text-neutral-700 text-xs font-medium hover:border-neutral-400/70 hover:bg-white/80 transition-all shadow-soft glass-soft"
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className={`w-1.5 h-1.5 rounded-full ${
                  index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-emerald-500' : 'bg-indigo-500'
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
