'use client'

import { motion } from 'framer-motion'
import { BookOpen, Square, ArrowRight, Users, CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

const formationCategories = [
  {
    icon: Square,
    title: 'Formation Intelligence Artificielle & ChatGPT',
    color: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-300/50',
    hoverBorder: 'hover:border-indigo-400/70',
    items: [
      'Formation ChatGPT en entreprise : techniques de prompt engineering avancées',
      'Création de GPT personnalisés avec vos données métier',
      'Intégration ChatGPT dans vos workflows et processus',
      'Formation aux assistants IA (Claude, Gemini, Perplexity)',
      'Automatisation avec IA : workflows intelligents et assistances internes',
      'Sessions présentiel et distanciel avec suivi personnalisé',
    ],
  },
  {
    icon: Users,
    title: 'Formation Microsoft 365 & Administration',
    color: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-300/50',
    hoverBorder: 'hover:border-blue-400/70',
    items: [
      'Administration Microsoft 365 : configuration et gestion complète',
      'Gestion SharePoint : sites, bibliothèques, workflows, permissions',
      'Optimisation Teams : canaux, intégrations, bots, automatisations',
      'Power Automate : création de workflows automatisés',
      'Power Apps : développement d\'applications métier',
      'Sécurité et conformité : configuration des politiques et règles',
    ],
  },
  {
    icon: ArrowRight,
    title: 'Formation Automatisation & Chatbots',
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-300/50',
    hoverBorder: 'hover:border-emerald-400/70',
    items: [
      'Mise en place de chatbots intelligents pour service client',
      'Création de chatbots internes pour support et assistance',
      'Automatisation de processus métier avec Power Automate',
      'Intégrations API et webhooks pour workflows automatisés',
      'Formation aux outils d\'automatisation (Zapier, Make, etc.)',
      'Optimisation de processus avec solutions sur mesure',
    ],
  },
]

export default function FormationsSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/40" />
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
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Formations professionnelles</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-neutral-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.02em', fontWeight: 200 }}>
            Formations sur mesure
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-4" style={{ letterSpacing: '0.01em' }}>
            Formez vos équipes aux technologies les plus récentes : Intelligence Artificielle, ChatGPT, Microsoft 365, automatisation et chatbots.
          </p>
          <p className="text-base text-neutral-500 max-w-2xl mx-auto font-light" style={{ letterSpacing: '0.01em' }}>
            Sessions présentiel ou distanciel • Programmes personnalisés • Suivi post-formation
          </p>
        </AnimatedSection>

        {/* Categories de formations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {formationCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`relative p-8 rounded-2xl glass-soft border ${category.borderColor} ${category.hoverBorder} bg-gradient-to-br ${category.color} transition-all duration-300 shadow-soft hover:shadow-soft-lg`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center border ${category.borderColor} shadow-soft`}>
                    <Icon className={`h-7 w-7 ${
                      index === 0 ? 'text-indigo-700' : index === 1 ? 'text-blue-700' : 'text-emerald-700'
                    }`} />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 flex-1" style={{ fontWeight: 300 }}>
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        index === 0 ? 'text-indigo-600' : index === 1 ? 'text-blue-600' : 'text-emerald-600'
                      }`} />
                      <span className="text-sm text-neutral-700 leading-relaxed" style={{ letterSpacing: '0.01em' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Avantages formations */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Programmes personnalisés',
                description: 'Formations adaptées à vos besoins métier et à votre niveau',
                icon: '🎯',
              },
              {
                title: 'Présentiel & Distanciel',
                description: 'Sessions flexibles selon vos contraintes et préférences',
                icon: '💻',
              },
              {
                title: 'Suivi personnalisé',
                description: 'Accompagnement post-formation pour garantir la mise en pratique',
                icon: '📈',
              },
            ].map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl glass-soft border border-neutral-300/50 shadow-soft"
              >
                <div className="text-4xl mb-4">{avantage.icon}</div>
                <h4 className="text-lg font-medium text-neutral-900 mb-2">{avantage.title}</h4>
                <p className="text-sm text-neutral-600">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-soft border border-indigo-300/50 text-indigo-700 font-medium hover:border-indigo-400/70 hover:bg-indigo-50/30 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
          >
            Discuter de vos besoins en formation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
