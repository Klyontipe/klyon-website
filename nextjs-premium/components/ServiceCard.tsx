'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      className="group relative p-8 glass-soft rounded-2xl border border-neutral-300/50 hover:border-blue-300/60 transition-all duration-300 overflow-hidden shadow-soft hover:shadow-soft-lg hover:bg-blue-50/20"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {/* Animated glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 rounded-2xl blur-xl transition-all duration-500"
      />
      
      {/* Soft gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/0 to-neutral-100/0 group-hover:from-neutral-50/50 group-hover:to-neutral-100/30 transition-all duration-500 rounded-2xl" />
      
      {/* Shimmer effect on hover */}
      <motion.div
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
      />

      {/* Icon - enhanced with glow */}
      <div className="relative mb-6">
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotateZ: 5,
            transition: { duration: 0.3 }
          }}
          className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm flex items-center justify-center border border-blue-200/40 shadow-soft group-hover:shadow-blue-200/30 group-hover:border-blue-300/60 transition-all duration-300"
        >
          {/* Glow behind icon */}
          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:bg-blue-500/30"
          />
          <Icon className="h-7 w-7 text-blue-700 group-hover:text-blue-600 transition-colors duration-300 relative z-10" />
        </motion.div>
      </div>
      
      <h3 className="text-xl font-light text-neutral-900 mb-3 relative z-10 tracking-tight" style={{ fontWeight: 300 }}>
        {title}
      </h3>
      <p className="text-neutral-600 mb-6 leading-relaxed relative z-10 text-sm" style={{ letterSpacing: '0.01em' }}>
        {description}
      </p>
      {href === '/services#formations' && (
        <ul className="text-xs text-neutral-500 space-y-1 mb-6 relative z-10">
          <li>• Formation IA & ChatGPT</li>
          <li>• Microsoft 365 & SharePoint</li>
          <li>• Automatisation & Chatbots</li>
        </ul>
      )}
      {href === '/services#ia' && (
        <ul className="text-xs text-neutral-500 space-y-1 mb-6 relative z-10">
          <li>• Intégration ChatGPT</li>
          <li>• Assistants IA sur mesure</li>
          <li>• Solutions IA personnalisées</li>
        </ul>
      )}
      {href === '/services#developpement' && (
        <ul className="text-xs text-neutral-500 space-y-1 mb-6 relative z-10">
          <li>• Applications web sur mesure</li>
          <li>• Applications mobiles React Native</li>
          <li>• APIs Python & Backend</li>
        </ul>
      )}
      {href === '/services#automatisation' && (
        <ul className="text-xs text-neutral-500 space-y-1 mb-6 relative z-10">
          <li>• Intégrations API & Webhooks</li>
          <li>• Automatisation de processus</li>
          <li>• Workflows automatisés</li>
        </ul>
      )}
      
      <Link
        href={href}
        className="relative z-10 inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-all duration-300 text-sm group/link"
      >
        <span>En savoir plus</span>
        <motion.span
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>
  )
}
