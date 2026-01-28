'use client'

import { motion } from 'framer-motion'
import { Zap, GitBranch, Code, Rocket, CheckCircle, ArrowRight, Database } from 'lucide-react'
import Link from 'next/link'

const outils = [
  {
    icon: Zap,
    name: 'Zapier',
    description: 'Automatisation de workflows entre différentes applications. Connexion simple et efficace.',
    useCases: [
      'Synchronisation de données entre outils',
      'Notifications automatiques',
      'Création de tâches depuis emails',
      'Intégration CRM et outils marketing',
    ],
  },
  {
    icon: GitBranch,
    name: 'N8N',
    description: 'Plateforme open-source puissante pour créer des workflows automatisés complexes.',
    useCases: [
      'Workflows personnalisés avancés',
      'Intégrations API complexes',
      'Traitement de données en masse',
      'Automatisations sur serveur privé',
    ],
  },
  {
    icon: Database,
    name: 'Airtable',
    description: 'Base de données collaborative et flexible pour organiser, automatiser et connecter vos données.',
    useCases: [
      'Création de bases de données personnalisées',
      'Automatisation de workflows avec Airtable',
      'Intégration avec autres outils via API',
      'Gestion de projets et suivi de données',
    ],
  },
  {
    icon: Code,
    name: 'Scripts sur mesure',
    description: 'Développement de scripts Python, JavaScript ou autres langages pour vos besoins spécifiques.',
    useCases: [
      'Automatisation de tâches répétitives',
      'Traitement de fichiers et données',
      'Intégrations API personnalisées',
      'Solutions uniques à votre entreprise',
    ],
  },
]

const exemples = [
  {
    title: 'Prise de notes avec envoi email',
    description: 'Automatisation de la prise de notes en réunion avec envoi automatique du récapitulatif par email.',
    outils: ['Zapier', 'N8N'],
  },
  {
    title: 'Assistant Telegram',
    description: 'Création d\'un mini-assistant sur Telegram pour répondre automatiquement aux questions fréquentes.',
    outils: ['Scripts Python', 'API Telegram'],
  },
  {
    title: 'Synchronisation de données',
    description: 'Automatisation de la synchronisation entre vos différents outils (CRM, tableur, base de données).',
    outils: ['Zapier', 'N8N', 'Airtable', 'Scripts'],
  },
]

export default function AutomatisationsPageContent() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/50 via-transparent to-indigo-50/50" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Automatisation de processus</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-900 mb-4 sm:mb-6 tracking-tight px-4"
            style={{ fontWeight: 200 }}
          >
            Automatisez vos processus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-4"
          >
            Gain de temps garanti avec ROI mesurable. 
            <br className="hidden md:block" />
            Automatisation avec Zapier, N8N ou scripts sur mesure selon vos besoins.
          </motion.p>
        </div>
      </section>

      {/* Outils Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            Outils d'automatisation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {outils.map((outil, index) => {
              const Icon = outil.icon
              return (
                <motion.div
                  key={outil.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-3xl glass-soft border border-white/30 backdrop-blur-xl shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-neutral-900 mb-3" style={{ fontWeight: 300 }}>
                    {outil.name}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{outil.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-neutral-900 mb-2">Cas d'usage :</p>
                    <ul className="space-y-2">
                      {outil.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                          <ArrowRight className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{useCase}</span>
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

      {/* Exemples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            Exemples concrets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exemples.map((exemple, index) => (
              <motion.div
                key={exemple.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(229, 229, 229, 0.5)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-neutral-900">{exemple.title}</h3>
                </div>
                <p className="text-neutral-600 mb-4 leading-relaxed">{exemple.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exemple.outils.map((outil, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
                    >
                      {outil}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            Processus de travail
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Analyse de vos besoins',
                description: 'Écoute de vos processus actuels et identification des tâches répétitives à automatiser.',
              },
              {
                step: '2',
                title: 'Choix de la solution',
                description: 'Sélection de l\'outil le plus adapté (Zapier, N8N ou script sur mesure) selon votre contexte.',
              },
              {
                step: '3',
                title: 'Développement',
                description: 'Création et configuration de l\'automatisation. Durée variable selon la complexité du projet.',
              },
              {
                step: '4',
                title: 'Test et déploiement',
                description: 'Tests approfondis puis mise en production avec formation et documentation.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center justify-center font-semibold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-purple-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-6"
            style={{ fontWeight: 200 }}
          >
            Prêt à automatiser vos processus ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
          >
            Durée variable selon la complexité du projet. 
            <br />
            Tarification au jour travaillé ou au projet selon votre préférence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white text-base sm:text-lg min-h-[44px]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6366f1 100%)',
                boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4)',
              }}
            >
              Discuter d'un projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
