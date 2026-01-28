'use client'

import CaseStudyCard from './CaseStudyCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const caseStudies = [
  {
    problem: 'Saisie manuelle répétitive des propales PDF dans le CRM, source d\'erreurs et perte de temps.',
    solution: 'Interface web automatisant l\'extraction des données PDF avec validation avant intégration automatique.',
    technologies: ['Python', 'PDF Processing', 'SQL', 'Interface Web'],
    result: 'Gain de temps de 80% pour les commerciaux, réduction des erreurs de saisie de 95%.',
  },
  {
    problem: 'Système de reporting PostgreSQL générant des rapports en 30 secondes, impactant la productivité.',
    solution: 'Optimisation complète des requêtes SQL, création d\'index composites et mise en place de vues matérialisées.',
    technologies: ['PostgreSQL', 'SQL', 'Optimisation', 'Indexation'],
    result: 'Réduction du temps de génération de 30s à 0.2s, amélioration de 99.3% des performances.',
  },
  {
    problem: 'Synchronisation manuelle des commandes Shopify vers CRM interne, source d\'erreurs et délais.',
    solution: 'Intégration automatisée via webhooks JSON traitant les commandes en temps réel.',
    technologies: ['Python', 'Flask', 'API REST', 'Webhooks', 'JSON'],
    result: 'Synchronisation automatique des commandes, réduction drastique des erreurs manuelles.',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-neutral-50/60 via-transparent to-transparent" />
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
              className="w-2.5 h-2.5 bg-emerald-500 rounded-full"
            />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Réalisations</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Cas d'usage
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
            Des solutions concrètes pour des problèmes réels
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-soft border border-neutral-300/50 text-neutral-700 font-medium hover:border-neutral-400/60 hover:bg-white/60 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
          >
            Voir toutes les réalisations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
