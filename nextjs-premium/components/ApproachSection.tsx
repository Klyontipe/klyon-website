'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { ArrowRight } from 'lucide-react'

const approachSteps = [
  { 
    step: '1', 
    title: 'Cahier des Charges', 
    description: 'Analyse de vos besoins et définition précise des fonctionnalités',
    details: 'Échange approfondi pour comprendre vos enjeux métier et vos contraintes techniques'
  },
  { 
    step: '2', 
    title: 'Estimation & Planning', 
    description: 'Définition des tarifs, temps de développement et planning détaillé',
    details: 'Devis transparent avec planning réaliste et jalons de validation'
  },
  { 
    step: '3', 
    title: 'Développement par Rushes', 
    description: 'Développement itératif avec des livrables réguliers',
    details: 'Livrables fréquents pour validation continue et ajustements en temps réel'
  },
  { 
    step: '4', 
    title: 'Présentation & Validation', 
    description: 'Présentation au client pour validation et ajustements',
    details: 'Démonstration complète avec possibilité d\'ajustements avant finalisation'
  },
  { 
    step: '5', 
    title: 'Livraison & Suivi', 
    description: 'Mise en production et support post-livraison',
    details: 'Déploiement professionnel avec documentation et support inclus'
  },
]

export default function ApproachSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-50/50 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-10 shadow-soft"
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-indigo-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Notre méthode</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Approche
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
            Un processus structuré pour garantir la réussite de votre projet
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Soft connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group text-center"
              >
                {/* Connector arrow (desktop only) */}
                {index < approachSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 z-10">
                    <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300" />
                  </div>
                )}

                {/* Step number - alcantara style */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-14 h-14 rounded-xl glass-soft border border-indigo-300/50 text-indigo-700 flex items-center justify-center font-light text-lg mb-6 mx-auto shadow-soft hover:shadow-indigo-200/30 hover:border-indigo-400/60 hover:bg-indigo-50/30 transition-all duration-300"
                >
                  <span className="relative z-10" style={{ fontWeight: 300 }}>
                    {step.step}
                  </span>
                </motion.div>

                <h3 className="text-base font-light text-neutral-900 mb-2 tracking-tight" style={{ fontWeight: 300 }}>
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-2" style={{ letterSpacing: '0.01em' }}>
                  {step.description}
                </p>
                {step.details && (
                  <p className="text-xs text-neutral-500 leading-relaxed italic" style={{ letterSpacing: '0.01em' }}>
                    {step.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
