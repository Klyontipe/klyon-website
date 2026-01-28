'use client'

import { BookOpen, Square, Code, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ServiceCard3D from './ServiceCard3D'

const services = [
  {
    icon: BookOpen,
    title: 'Formations',
    description: 'Formations IA/ChatGPT, Microsoft 365, SharePoint. Niveaux débutant, expérimenté et expert. Format hybride adapté à vos besoins.',
    href: '/formations',
    color: 'blue',
  },
  {
    icon: Square,
    title: 'Services Informatiques',
    description: 'Montage PC sur mesure, installation systèmes d\'exploitation, suites Office, support technique. Services adaptés à vos besoins.',
    href: '/services-info',
    color: 'emerald',
  },
  {
    icon: ArrowRight,
    title: 'Automatisations',
    description: 'Automatisation avec Zapier, N8N ou scripts sur mesure. Gain de temps garanti avec ROI mesurable. Exemples : prise de notes, assistants Telegram.',
    href: '/automatisations',
    color: 'purple',
  },
  {
    icon: Code,
    title: 'Développement',
    description: 'Applications web, mobiles et desktop. Solutions fonctionnelles et élégantes avec React, Python, JavaScript et plus.',
    href: '/developpement',
    color: 'indigo',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-50/80 via-transparent to-neutral-100/60" />
      </div>
      {/* Animated decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent-500/3 to-transparent"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/3 to-transparent"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-10 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-blue-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Nos expertises</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight"
            style={{ letterSpacing: '-0.02em', fontWeight: 200 }}
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ letterSpacing: '0.01em' }}
          >
            Des solutions complètes pour tous vos besoins informatiques
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <ServiceCard3D key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
