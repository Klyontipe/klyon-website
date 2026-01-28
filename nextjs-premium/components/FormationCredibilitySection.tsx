'use client'

import { motion } from 'framer-motion'
import { Clock, Users, CheckCircle2, ArrowRight, TrendingUp, Target } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const formationDetails = [
  {
    title: 'Formation Intelligence Artificielle & ChatGPT',
    duration: '2 jours',
    format: 'Atelier pratique',
    avant: [
      'Équipes peu familiarisées avec l\'IA',
      'Temps perdu sur des tâches répétitives',
      'Sous-utilisation des outils IA disponibles',
      'Manque de compétences en prompt engineering',
    ],
    apres: [
      'Maîtrise complète de ChatGPT et assistants IA',
      'Automatisation de 70% des tâches répétitives',
      'Création de GPT personnalisés pour votre métier',
      'Intégration IA dans vos workflows quotidiens',
    ],
    color: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-300/50',
  },
  {
    title: 'Formation Microsoft 365 & Administration',
    duration: '2 jours',
    format: 'Atelier pratique',
    avant: [
      'Gestion SharePoint non optimale',
      'Teams sous-utilisé par les équipes',
      'Manque de workflows automatisés',
      'Configuration de sécurité incomplète',
    ],
    apres: [
      'Administration complète de Microsoft 365',
      'SharePoint optimisé et structuré',
      'Teams configuré avec intégrations',
      'Power Automate pour automatiser vos processus',
    ],
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-300/50',
  },
  {
    title: 'Formation Automatisation & Chatbots',
    duration: '2 jours',
    format: 'Atelier pratique',
    avant: [
      'Processus manuels chronophages',
      'Support client surchargé',
      'Erreurs humaines répétitives',
      'Manque d\'outils d\'automatisation',
    ],
    apres: [
      'Chatbots intelligents déployés',
      'Workflows automatisés opérationnels',
      'Réduction de 60% du temps sur les tâches répétitives',
      'Intégrations API fonctionnelles',
    ],
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-300/50',
  },
]

export default function FormationCredibilitySection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/30 via-blue-50/20 to-purple-50/30" />
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
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Crédibilité & Résultats</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Avant / Après formation
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light" style={{ letterSpacing: '0.01em' }}>
            Format atelier pratique de 2 jours • Transformation concrète de vos compétences
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {formationDetails.map((formation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl glass-soft border ${formation.borderColor} bg-gradient-to-br ${formation.color} shadow-soft hover:shadow-soft-lg transition-all duration-300`}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-4" style={{ fontWeight: 300 }}>
                  {formation.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-300/50">
                    <Clock className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-medium text-neutral-700">{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-300/50">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-neutral-700">{formation.format}</span>
                  </div>
                </div>
              </div>

              {/* Avant / Après */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Avant */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">AVANT</span>
                    </div>
                    <h4 className="text-lg font-medium text-neutral-900">Situation initiale</h4>
                  </div>
                  <ul className="space-y-3">
                    {formation.avant.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-sm text-neutral-700 leading-relaxed" style={{ letterSpacing: '0.01em' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Après */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">APRÈS</span>
                    </div>
                    <h4 className="text-lg font-medium text-neutral-900">Résultats obtenus</h4>
                  </div>
                  <ul className="space-y-3">
                    {formation.apres.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700 leading-relaxed" style={{ letterSpacing: '0.01em' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bénéfices généraux */}
        <AnimatedSection className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Durée optimale',
                description: '2 jours d\'atelier pratique pour une transformation complète',
                color: 'text-indigo-600',
                bgColor: 'from-indigo-500/10 to-purple-500/10',
              },
              {
                icon: Users,
                title: 'Format atelier',
                description: 'Pratique, interactif, avec cas concrets de votre entreprise',
                color: 'text-blue-600',
                bgColor: 'from-blue-500/10 to-cyan-500/10',
              },
              {
                icon: TrendingUp,
                title: 'ROI mesurable',
                description: 'Résultats visibles dès la fin de la formation',
                color: 'text-emerald-600',
                bgColor: 'from-emerald-500/10 to-teal-500/10',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl glass-soft border border-neutral-300/50 bg-gradient-to-br ${benefit.bgColor} shadow-soft`}
                >
                  <Icon className={`h-8 w-8 ${benefit.color} mb-4`} />
                  <h4 className="text-lg font-medium text-neutral-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
