'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Send } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background avec motifs géométriques dark premium */}
      <div className="absolute inset-0 -z-10" style={{ background: '#0f0f0f' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
        {/* Motifs géométriques dorés */}
        <div className="absolute top-20 right-10 w-64 h-64 border-2 border-amber-400/20 rotate-45 rounded-lg" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-amber-500/15 rotate-12 rounded-full" />
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/4 w-32 h-32 border border-amber-400/10 rotate-45"
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <AnimatedSection className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-10 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-amber-400 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-300 tracking-wide uppercase">Contact</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Discutons de votre projet
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8 font-light" style={{ letterSpacing: '0.01em' }}>
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          
          {/* Contact info avec icônes élégantes */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="tel:+33766980342"
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl glass-soft border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center border border-amber-400/30"
              >
                <Phone className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-sm font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">
                07 66 98 03 42
              </span>
            </motion.a>
            
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-amber-400/40" />
            
            <motion.a
              href="mailto:klyonme@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl glass-soft border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center border border-amber-400/30"
              >
                <Mail className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-sm font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">
                klyonme@gmail.com
              </span>
            </motion.a>
            
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-amber-400/40" />
            
            <motion.a
              href="https://linkedin.com/in/zl3/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-xl glass-soft border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center border border-amber-400/30"
              >
                <Linkedin className="w-5 h-5 text-amber-400" />
              </motion.div>
              <span className="text-sm font-medium text-neutral-200 group-hover:text-amber-400 transition-colors">
                LinkedIn
              </span>
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Formulaire de contact */}
        <AnimatedSection>
          <div className="p-8 rounded-2xl glass-soft border border-amber-400/20 shadow-soft-lg">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
