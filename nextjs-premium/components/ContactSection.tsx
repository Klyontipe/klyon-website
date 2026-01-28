'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-50/80 via-transparent to-neutral-100/60" />
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
              className="w-2.5 h-2.5 bg-blue-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Contact</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Discutons de votre projet
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 font-light" style={{ letterSpacing: '0.01em' }}>
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 text-sm text-neutral-500">
            <a href="tel:+33766980342" className="hover:text-neutral-700 transition-colors">
              📞 07 66 98 03 42
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:klyonme@gmail.com" className="hover:text-neutral-700 transition-colors">
              ✉️ klyonme@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://linkedin.com/in/zl3/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
              💼 LinkedIn
            </a>
          </div>
        </AnimatedSection>

        {/* Formulaire de contact */}
        <AnimatedSection>
          <div className="p-8 rounded-2xl glass-soft border border-neutral-300/50 shadow-soft-lg">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
