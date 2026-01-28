'use client'

import { motion } from 'framer-motion'
import FAQ from './FAQ'
import AnimatedSection from './AnimatedSection'

const faqItems = [
  {
    question: 'Quels types de missions acceptez-vous ?',
    answer: 'J\'accepte les missions courtes (quelques jours/semaines) comme les missions longues (plusieurs mois). Je peux intervenir en autonomie complète ou en renfort d\'équipe existante. Tous les projets sont livrés en production, prêts à l\'emploi.',
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon la complexité du projet. Pour les missions courtes, comptez généralement 1 à 4 semaines. Pour les projets plus importants, nous établissons un planning détaillé dès la phase de spécifications.',
  },
  {
    question: 'Comment fonctionne la tarification ?',
    answer: 'La tarification est adaptée à chaque projet selon sa complexité et sa durée. Je propose des devis transparents avec un forfait ou un tarif journalier selon le type de mission. Contactez-moi pour discuter de votre projet.',
  },
  {
    question: 'Dans quelle zone intervenez-vous ?',
    answer: 'Je suis basé dans les Bouches-du-Rhône et peux intervenir sur site dans la région. Pour les missions à distance, je travaille avec des entreprises partout en France.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Je maîtrise un large éventail de technologies : React/Next.js, Python, PostgreSQL, APIs REST, intégrations IA (OpenAI, etc.), et bien d\'autres. Je choisis toujours la stack la plus adaptée à votre projet.',
  },
  {
    question: 'Proposez-vous un support après livraison ?',
    answer: 'Oui, je propose un support post-livraison pour garantir la stabilité de votre solution. La durée et les modalités sont définies selon chaque projet.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50/60 via-transparent to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-10 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-purple-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">FAQ</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Questions fréquentes
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 font-light" style={{ letterSpacing: '0.01em' }}>
            Tout ce que vous devez savoir avant de démarrer votre projet
          </p>
        </AnimatedSection>

        <FAQ items={faqItems} />
      </div>
    </section>
  )
}
