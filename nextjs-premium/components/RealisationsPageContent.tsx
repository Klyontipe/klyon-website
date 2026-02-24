'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Building2, Users, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

const realisations = [
  {
    type: 'Entreprise',
    icon: Building2,
    title: 'Automatisation extraction PDF',
    description: 'Saisie manuelle répétitive des propales PDF dans le CRM, source d\'erreurs et perte de temps pour les commerciaux.',
    solution: 'Développement d\'une interface web automatisant l\'extraction des données PDF avec validation avant intégration automatique dans le CRM.',
    services: ['Automatisation', 'Python', 'PDF Processing'],
    resultats: [
      'Gain de temps de 80%',
      'Réduction des erreurs de 95%',
      'Interface intuitive et rapide',
    ],
  },
  {
    type: 'Entreprise',
    icon: Briefcase,
    title: 'Optimisation PostgreSQL',
    description: 'Système de reporting PostgreSQL générant des rapports en 30 secondes, impactant significativement la productivité des équipes.',
    solution: 'Optimisation complète des requêtes SQL complexes, création d\'index composites optimisés et mise en place de vues matérialisées.',
    services: ['PostgreSQL', 'SQL', 'Optimisation'],
    resultats: [
      'Réduction de 30s à 0.2s',
      'Amélioration de 99.3%',
      'Système maintenant réactif',
    ],
  },
  {
    type: 'Entreprise',
    icon: Building2,
    title: 'Intégration Shopify-CRM',
    description: 'Synchronisation manuelle des commandes Shopify vers CRM interne, source d\'erreurs et délais dans le traitement des commandes.',
    solution: 'Développement d\'une solution d\'intégration complète via webhooks JSON traitant automatiquement les commandes et synchronisant les données client en temps réel.',
    services: ['Python', 'Flask', 'API REST', 'Webhooks'],
    resultats: [
      'Synchronisation automatique',
      'Réduction des erreurs manuelles',
      'Mise en production rapide',
    ],
  },
  {
    type: 'Entreprise',
    icon: Briefcase,
    title: 'Formation IA & ChatGPT',
    description: 'Besoin de formation des équipes sur l\'utilisation avancée de ChatGPT et création d\'assistants IA personnalisés.',
    solution: 'Formation complète sur les techniques de prompt engineering, création de GPT personnalisés avec données métier, et intégration API dans les workflows existants.',
    services: ['Formation', 'OpenAI API', 'GPT Builder'],
    resultats: [
      'Équipes formées et autonomes',
      'Création de GPT spécialisés',
      'Automatisation complète',
    ],
  },
  {
    type: 'Entreprise',
    icon: Building2,
    title: 'Application mobile gestion stock',
    description: 'Gestion de stock manuelle chronophage avec risques d\'erreurs et difficultés de suivi en temps réel.',
    solution: 'Développement d\'une application mobile React Native avec synchronisation temps réel, notifications push et mode hors-ligne pour la gestion de stock.',
    services: ['React Native', 'JavaScript', 'Firebase'],
    resultats: [
      'Interface mobile intuitive',
      'Synchronisation temps réel',
      'Mode hors-ligne fonctionnel',
    ],
  },
  {
    type: 'Entreprise',
    icon: Briefcase,
    title: 'Interface interne réseau',
    description: 'Interface interne complexe nécessitant une refonte pour améliorer l\'ergonomie et la productivité des équipes.',
    solution: 'Création d\'une interface fonctionnelle interne au réseau permettant l\'ajout de produits via base de données avec synchronisation automatique et gestion des stocks.',
    services: ['Python', 'SQL', 'Interface Web'],
    resultats: [
      'Interface sécurisée et intuitive',
      'Ajout de produits simplifié',
      'Gestion des stocks en temps réel',
    ],
  },
  {
    type: 'TPE',
    icon: Building2,
    title: 'Automatisation pour TPE',
    description: 'Mise en place d\'un système d\'automatisation pour une petite entreprise permettant de gagner plusieurs heures par semaine.',
    solution: 'Configuration d\'automatisations avec Zapier pour connecter différents outils et réduire les tâches répétitives.',
    services: ['Automatisation', 'Zapier'],
    resultats: [
      'Gain de temps significatif',
      'Réduction des erreurs',
      'ROI positif rapide',
    ],
  },
  {
    type: 'PME',
    icon: Briefcase,
    title: 'Formation Microsoft 365',
    description: 'Formation complète Microsoft 365 et SharePoint pour une équipe. Niveaux débutant à expérimenté.',
    solution: 'Formation pratique avec ateliers sur SharePoint, Teams et Power Platform adaptée aux besoins de l\'équipe.',
    services: ['Formation', 'Microsoft 365'],
    resultats: [
      'Équipe formée efficacement',
      'Adoption rapide des outils',
      'Productivité améliorée',
    ],
  },
  {
    type: 'Association',
    icon: Users,
    title: 'Application web sur mesure',
    description: 'Développement d\'une application web fonctionnelle pour la gestion des membres et événements d\'une association.',
    solution: 'Création d\'une application web moderne avec gestion des membres, événements et communication interne.',
    services: ['Développement', 'Application web'],
    resultats: [
      'Gestion simplifiée',
      'Interface intuitive',
      'Gain de temps significatif',
    ],
  },
  {
    type: 'Particulier',
    icon: Users,
    title: 'Montage PC gaming',
    description: 'Conception et montage d\'un PC gaming sur mesure avec optimisation pour les performances.',
    solution: 'Sélection des composants optimaux, assemblage professionnel et configuration du système.',
    services: ['Montage PC', 'Installation'],
    resultats: [
      'PC performant',
      'Configuration optimale',
      'Support post-installation',
    ],
  },
]

// Component for animated counter
function AnimatedCounter({ value }: { value: string }) {
  const numValue = parseInt(value.replace(/\D/g, ''))
  const hasPlus = value.includes('+')
  const hasPercent = value.includes('%')
  
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 60, stiffness: 100 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(Math.floor(latest))
    })
    motionValue.set(numValue)
    return unsubscribe
  }, [numValue, spring, motionValue])

  return (
    <>
      {display}
      {hasPercent && '%'}
      {hasPlus && '+'}
    </>
  )
}

export default function RealisationsPageContent() {
  const [filter, setFilter] = useState<string>('Tous')
  const types = ['Tous', 'Entreprise', 'TPE', 'PME', 'Association', 'Particulier']
  
  const filteredRealisations = filter === 'Tous' 
    ? realisations 
    : realisations.filter(r => r.type === filter)

  return (
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Nos réalisations"
        subtitle="Collaborations réussies avec TPE, PME, associations et particuliers. Résultats concrets et mesurables."
        badge="Réalisations"
        ctaLabel="Discuter d'un projet"
        ctaHref="/contact"
      />

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  filter === type
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-900 shadow-lg shadow-amber-500/50'
                    : 'glass-dark border border-amber-400/20 text-neutral-300 hover:border-amber-400/40 hover:text-amber-400'
                }`}
              >
                {type}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Réalisations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation, index) => {
              const Icon = realisation.icon
              return (
                <motion.div
                  key={realisation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-3xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center overflow-hidden">
                        {/* Forme géométrique abstraite */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent opacity-50" />
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-amber-400/40 rounded-full" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400/20 rounded-full" />
                        </div>
                        {/* Numéro stylisé */}
                        <span className="relative z-10 text-xs font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
                          {realisation.type}
                        </span>
                        <h2 className="text-2xl font-light text-neutral-100 mt-1" style={{ fontWeight: 300 }}>
                          {realisation.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-400 mb-4 leading-relaxed">{realisation.description}</p>
                  
                  {realisation.solution && (
                    <div className="mb-6 p-4 rounded-xl glass-dark border border-amber-400/20">
                      <p className="text-sm font-semibold text-neutral-100 mb-2">Solution :</p>
                      <p className="text-sm text-neutral-300 leading-relaxed">{realisation.solution}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-neutral-100 mb-3">Technologies :</p>
                    <div className="flex flex-wrap gap-2">
                      {realisation.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-400/30"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-amber-400/20">
                    <p className="text-sm font-semibold text-neutral-100 mb-3">Résultats :</p>
                    <ul className="space-y-2">
                      {realisation.resultats.map((resultat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{resultat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            En chiffres
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { number: '100%', label: 'Satisfaction client' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass-dark border border-amber-400/20"
              >
                <div className="text-4xl md:text-5xl font-light text-amber-400 mb-2" style={{ fontWeight: 100 }}>
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-sm font-medium text-neutral-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-6"
            style={{ fontWeight: 200 }}
          >
            Votre projet sera le prochain ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
          >
            TPE, PME, association ou particulier, je m'adapte à vos besoins. 
            <br />
            Premier contact : écoute de vos besoins et proposition adaptée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-base font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Discuter d'un projet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/formations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-dark border border-amber-400/30 text-neutral-100 font-medium hover:border-amber-400/50 hover:text-amber-300 transition-all duration-200"
            >
              Voir les formations
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
