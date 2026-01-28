'use client'

import { Code, ArrowRight, Square, BookOpen } from 'lucide-react'
import CTA from './CTA'
import AnimatedSection from './AnimatedSection'

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
      {/* Services */}
      <div className="space-y-24">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <AnimatedSection
              key={service.id}
              delay={index * 0.1}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <div id={service.id}>
                <div className="w-16 h-16 rounded-xl bg-neutral-100 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-neutral-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Ce que je propose :
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <span className="text-neutral-900 mt-1">•</span>
                      <span className="text-neutral-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                    Technologies :
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <CTA href="/contact">Discuter de ce service</CTA>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      {/* CTA Section */}
      <AnimatedSection className="mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
        </p>
        <CTA href="/contact">Demander un devis</CTA>
      </AnimatedSection>
    </>
  )
}
