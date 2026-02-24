'use client'

import { BookOpen, Monitor, Zap, Code, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAnimation } from '@/contexts/AnimationContext'

const services = [
  {
    icon: BookOpen,
    title: 'Formations',
    description:
      'Formations IA / ChatGPT et Microsoft 365 pour équipes et dirigeants. Orientées cas réels et ROI.',
    href: '/formations',
  },
  {
    icon: Monitor,
    title: 'Services Informatiques',
    description:
      'Audit, conseil et accompagnement sur votre parc informatique, environnement Microsoft et outils métiers.',
    href: '/services-info',
  },
  {
    icon: Zap,
    title: 'Automatisations',
    description:
      'Automatisations sur Zapier, n8n ou scripts custom pour supprimer les tâches manuelles répétitives.',
    href: '/automatisations',
  },
  {
    icon: Code,
    title: 'Développement',
    description:
      'Applications web et outils internes sur mesure, pensés pour vos process, pas l’inverse.',
    href: '/developpement',
  },
]

export default function ServicesSectionSimple() {
  const { startupComplete } = useAnimation()
  
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background avec motifs géométriques dark */}
      <div className="absolute inset-0 -z-10" style={{ background: '#0f0f0f' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
        {/* Éléments géométriques dorés */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-20 w-40 h-40 border-2 border-amber-400/15 rotate-45 rounded-lg"
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-32 h-32 border-2 border-amber-500/15 -rotate-12 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-amber-400 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-300 tracking-wide uppercase">Nos services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
            Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            Des solutions structurées et professionnelles adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={startupComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link href={service.href}>
                  <div className="h-full p-6 rounded-2xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center mb-4 border border-amber-400/30 overflow-hidden">
                      {/* Forme géométrique abstraite unique par service */}
                      <div className="absolute inset-0">
                        {index === 0 && (
                          <>
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-amber-400/20 to-transparent" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/20 to-transparent" />
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-amber-400/30 rotate-45" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400/20 rotate-45" />
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-amber-400/30" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t border-l border-amber-400/30" />
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-amber-400/30 rotate-45" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-amber-400/30 rotate-45" />
                          </>
                        )}
                      </div>
                      {/* Initiale stylisée */}
                      <span className="relative z-10 text-sm font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace', letterSpacing: '-0.05em' }}>
                        {service.title.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-50 mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p
                      className="text-neutral-400 text-sm leading-relaxed mb-4"
                      style={{ letterSpacing: '0.01em' }}
                    >
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-neutral-300 group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                      <span>En savoir plus</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
