'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Monitor, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const technologies = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Python', 'C++', 'C', 'Node.js', 'PostgreSQL', 'SQL'],
  },
  {
    category: 'Outils',
    items: ['Git', 'APIs REST', 'Architecture cloud-native'],
  },
]

const typesProjets = [
  {
    icon: Globe,
    title: 'Applications Web',
    description: 'Applications web fonctionnelles et élégantes, optimisées pour la performance et l\'expérience utilisateur.',
    caracteristiques: [
      'Design moderne et responsive',
      'Performance optimisée',
      'Sécurité renforcée',
      'Intégration API',
    ],
  },
  {
    icon: Smartphone,
    title: 'Applications Mobile',
    description: 'Applications mobiles cross-platform avec React Native pour iOS et Android.',
    caracteristiques: [
      'Développement cross-platform',
      'Interface native',
      'Performance optimale',
      'Publication sur stores',
    ],
  },
  {
    icon: Monitor,
    title: 'Applications Desktop',
    description: 'Applications desktop performantes pour Windows, macOS et Linux.',
    caracteristiques: [
      'Performance native',
      'Interface intuitive',
      'Intégration système',
      'Déploiement simplifié',
    ],
  },
]

export default function DeveloppementPageContent() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-transparent to-blue-50/50" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <Code className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Développement sur mesure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-900 mb-6 tracking-tight"
            style={{ fontWeight: 200 }}
          >
            Développement professionnel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto font-light"
          >
            Applications web, mobiles et desktop. 
            <br className="hidden md:block" />
            Solutions fonctionnelles et élégantes adaptées à vos besoins.
          </motion.p>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            Technologies maîtrisées
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-soft border border-white/30 backdrop-blur-xl shadow-xl"
              >
                <h3 className="text-2xl font-light text-neutral-900 mb-6" style={{ fontWeight: 300 }}>
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-indigo-100 text-indigo-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
            style={{ fontWeight: 200 }}
          >
            Types de projets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {typesProjets.map((projet, index) => {
              const Icon = projet.icon
              return (
                <motion.div
                  key={projet.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-3xl glass-soft border border-white/30 backdrop-blur-xl shadow-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-2xl font-light text-neutral-900 mb-3" style={{ fontWeight: 300 }}>
                    {projet.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{projet.description}</p>
                  
                  <ul className="space-y-2">
                    {projet.caracteristiques.map((carac, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{carac}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
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
            Approche de développement
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Écoute et analyse',
                description: 'Compréhension approfondie de vos besoins et objectifs. Analyse technique et proposition de solution.',
              },
              {
                step: '2',
                title: 'Conception',
                description: 'Architecture technique, design de l\'interface et planification du développement.',
              },
              {
                step: '3',
                title: 'Développement',
                description: 'Code de qualité, tests continus et respect des bonnes pratiques. Applications fonctionnelles et élégantes.',
              },
              {
                step: '4',
                title: 'Livraison et suivi',
                description: 'Déploiement, formation et support post-livraison pour garantir le succès de votre projet.',
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center font-semibold text-lg">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-indigo-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-6"
            style={{ fontWeight: 200 }}
          >
            Un projet en tête ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
          >
            Tarification au jour travaillé ou au projet selon votre préférence. 
            <br />
            Missions ponctuelles ou temps partiel selon vos besoins.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg"
              style={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #3b82f6 100%)',
                boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)',
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
