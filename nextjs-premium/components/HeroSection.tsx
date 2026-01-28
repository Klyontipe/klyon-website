'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Sparkles } from 'lucide-react'
import CTA from './CTA'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
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
            ease: 'linear',
          }}
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-neutral-900/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
        }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Badge with advanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10 border border-neutral-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 bg-accent-500 rounded-full"
          />
          <span className="text-sm font-semibold text-neutral-700">Consultant confirmé • Disponible pour missions</span>
        </motion.div>

        {/* Animated title with stagger */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1], type: 'spring', stiffness: 200 }}
              className="block text-neutral-900 relative"
            >
              KLYON
              <motion.span
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="h-6 w-6 text-accent-500" />
              </motion.span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-2 relative"
            >
              <span className="gradient-text">Logiciels sur mesure</span>
              <motion.span
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 h-1 bg-accent-500"
              />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block mt-2 text-neutral-700 font-light"
            >
              & automatisation
            </motion.span>
          </motion.h1>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          {['Gain de temps', 'Fiabilité', 'Process optimisés', 'Intégration complète'].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9 + index * 0.15,
                type: 'spring',
                stiffness: 200
              }}
              className="inline-block mr-2"
            >
              <motion.span
                whileHover={{ 
                  scale: 1.15, 
                  color: '#1e3a5f',
                  textShadow: '0 0 20px rgba(30, 58, 95, 0.3)'
                }}
                transition={{ duration: 0.3 }}
                className="font-semibold cursor-default relative"
              >
                {word}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-accent-500"
                />
              </motion.span>
              {index < 3 && (
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="mx-2"
                >
                  •
                </motion.span>
              )}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <CTA href="#contact">Discuter d'une mission</CTA>
          <CTA href="/services" variant="secondary">Voir mes services</CTA>
        </motion.div>

        {/* Proof Banner - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: CheckCircle, text: 'Mission courte ou longue' },
            { icon: CheckCircle, text: 'Autonome ou renfort' },
            { icon: CheckCircle, text: 'Livraison production' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg glass border border-neutral-200/50 hover:border-neutral-300/50 transition-all duration-300 cursor-default"
            >
              <item.icon className="h-4 w-4 text-accent-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-neutral-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
        />
      </div>
    </section>
  )
}
