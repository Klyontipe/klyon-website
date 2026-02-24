'use client'

import { Code, ArrowRight, Square, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'formations',
    icon: BookOpen,
    title: 'Formations professionnelles',
    description: 'Formations sur mesure en Intelligence Artificielle, Microsoft 365, automatisation et chatbots pour vos équipes.',
    details: [
      'Formation ChatGPT & Intelligence Artificielle : techniques de prompt engineering, création de GPT personnalisés, intégration dans vos workflows',
      'Formation Microsoft 365 : administration complète, gestion SharePoint, optimisation Teams, Power Automate',
      'Formation automatisation : workflows automatisés, intégrations API, processus métier optimisés',
      'Mise en place de chatbots : création et déploiement de chatbots intelligents pour service client et support interne',
      'Sessions présentiel et distanciel : formation adaptée à vos contraintes avec suivi personnalisé',
    ],
    technologies: ['ChatGPT', 'OpenAI', 'Microsoft 365', 'SharePoint', 'Teams', 'Power Automate', 'Chatbots'],
  },
  {
    id: 'ia',
    icon: Square,
    title: 'Intelligence Artificielle & ChatGPT',
    description: 'Intégration ChatGPT et solutions IA sur mesure pour automatiser et optimiser vos processus métier.',
    details: [
      'Intégration ChatGPT dans vos processus : configuration API OpenAI, assistants GPT personnalisés',
      'Extraction et traitement intelligent de données (PDF, documents, emails)',
      'Classification et catégorisation automatique avec IA',
      'Workflows automatisés avec intelligence artificielle',
      'Assistances internes intelligentes pour vos équipes',
    ],
    technologies: ['OpenAI API', 'ChatGPT', 'GPT-4', 'Python', 'NLP', 'Machine Learning'],
  },
  {
    id: 'developpement',
    icon: Code,
    title: 'Développement logiciel sur mesure',
    description: 'Applications web et mobile adaptées à vos besoins métier spécifiques.',
    details: [
      'Applications web modernes avec React/Next.js',
      'Applications mobiles React Native (iOS & Android)',
      'Architecture robuste et maintenable',
      'Code qualité et documentation complète',
      'Tests et déploiement en production',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'React Native'],
  },
  {
    id: 'automatisation',
    icon: ArrowRight,
    title: 'Automatisation & intégrations',
    description: 'Intégration de vos systèmes existants et automatisation de vos processus métier.',
    details: [
      'Intégration API REST et webhooks (Shopify, CRM, ERP)',
      'Connexion bases de données (PostgreSQL, MySQL, MongoDB)',
      'Intégration ERP et CRM (SAP, Salesforce, HubSpot)',
      'Automatisation de workflows complexes',
      'Synchronisation de données en temps réel',
    ],
    technologies: ['Python', 'Flask', 'API REST', 'PostgreSQL', 'Webhooks', 'Power Automate'],
  },
]

export default function ServicesList() {
  return (
    <>
      <div className="space-y-20">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <div id={service.id}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-neutral-100 mb-4 tracking-tight" style={{ fontWeight: 300 }}>
                  {service.title}
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-dark border border-amber-400/20">
                <h3 className="text-lg font-semibold text-neutral-100 mb-4">
                  Ce que je propose :
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-neutral-300 text-sm leading-relaxed">
                      <span className="text-amber-400 mt-1 flex-shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                    Technologies :
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-sm font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Discuter de ce service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 py-16 text-center p-8 rounded-2xl glass-dark border border-amber-400/20"
      >
        <h2 className="text-2xl md:text-3xl font-light text-neutral-100 mb-4 tracking-tight" style={{ fontWeight: 200 }}>
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
          Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-base font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Demander un devis
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.section>
    </>
  )
}
