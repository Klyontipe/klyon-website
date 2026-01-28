'use client'

import { BookOpen, Monitor, Zap, Code, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    icon: BookOpen,
    title: 'Formations',
    description: 'Formations IA/ChatGPT, Microsoft 365, SharePoint. Niveaux débutant, expérimenté et expert.',
    href: '/formations',
    color: 'blue',
  },
  {
    icon: Monitor,
    title: 'Services Informatiques',
    description: 'Montage PC sur mesure, installation systèmes d\'exploitation, suites Office, support technique.',
    href: '/services-info',
    color: 'emerald',
  },
  {
    icon: Zap,
    title: 'Automatisations',
    description: 'Automatisation avec Zapier, N8N ou scripts sur mesure. Gain de temps garanti avec ROI mesurable.',
    href: '/automatisations',
    color: 'purple',
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Applications web, mobiles et desktop. Solutions fonctionnelles et élégantes.',
    href: '/developpement',
    color: 'indigo',
  },
]

export default function ServicesSectionSimple() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-50/80 via-transparent to-neutral-100/60" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-blue-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Nos services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
            Services
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Des solutions structurées et professionnelles adaptées à vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              blue: 'from-blue-500/20 to-blue-400/10 text-blue-600 border-blue-200/50',
              emerald: 'from-emerald-500/20 to-emerald-400/10 text-emerald-600 border-emerald-200/50',
              purple: 'from-purple-500/20 to-purple-400/10 text-purple-600 border-purple-200/50',
              indigo: 'from-indigo-500/20 to-indigo-400/10 text-indigo-600 border-indigo-200/50',
            }
            const colors = colorClasses[service.color as keyof typeof colorClasses] || colorClasses.blue
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link href={service.href}>
                  <div className="h-full p-6 rounded-2xl glass-soft border border-white/30 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${colors.split(' ')[2]}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{service.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">{service.description}</p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
