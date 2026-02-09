'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Monitor, CheckCircle, Shield, Zap, Clock, HelpCircle, ArrowRight, TrendingUp, Layers } from 'lucide-react'
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
    <div className="min-h-screen pt-20" style={{ background: '#0f0f0f' }}>
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: '#0f0f0f' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-dark mb-8 shadow-soft"
          >
            <Code className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-neutral-300 tracking-wide">Développement sur mesure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-100 mb-6 tracking-tight"
            style={{ fontWeight: 200 }}
          >
            Développement professionnel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-3xl mx-auto font-light"
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
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-12 text-center"
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
                className="p-8 rounded-3xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-xl"
              >
                <h3 className="text-2xl font-light text-neutral-100 mb-6" style={{ fontWeight: 300 }}>
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl text-sm font-medium bg-amber-500/20 text-amber-400 border border-amber-400/30"
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

      {/* Avantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Pourquoi développer sur mesure ?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins spécifiques avec une qualité professionnelle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Sur mesure',
                description: 'Solutions développées spécifiquement pour vos besoins. Pas de compromis avec des logiciels génériques.',
              },
              {
                icon: Shield,
                title: 'Qualité professionnelle',
                description: 'Code propre, tests approfondis et respect des bonnes pratiques. Applications robustes et maintenables.',
              },
              {
                icon: Zap,
                title: 'Performance optimale',
                description: 'Applications rapides et optimisées. Architecture pensée pour la scalabilité et les performances.',
              },
              {
                icon: Layers,
                title: 'Évolutif',
                description: 'Solutions conçues pour évoluer avec vos besoins. Facilement extensibles et modulaires.',
              },
            ].map((avantage, index) => {
              const Icon = avantage.icon
              return (
                <motion.div
                  key={avantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center mb-4 border border-amber-400/30 overflow-hidden">
                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-amber-400/30" />
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t border-l border-amber-400/30" />
                    </div>
                    <span className="relative z-10 text-xs font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-100 mb-3">{avantage.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{avantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-12 text-center"
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
                  className="p-8 rounded-3xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-xl"
                >
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-amber-400/40 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-400/20 rounded-full" />
                    <span className="relative z-10 text-xs font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-neutral-100 mb-3" style={{ fontWeight: 300 }}>
                    {projet.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-6 leading-relaxed">{projet.description}</p>
                  
                  <ul className="space-y-2">
                    {projet.caracteristiques.map((carac, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
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
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-12 text-center"
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-black flex items-center justify-center font-semibold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Quel est le délai de développement d\'une application ?',
                reponse: 'Cela dépend de la complexité du projet. Une application web simple peut prendre 2-4 semaines, tandis qu\'une application complète avec backend peut nécessiter 2-3 mois. Je vous fournis toujours un planning détaillé avant de commencer.',
              },
              {
                question: 'Proposez-vous un support après la livraison ?',
                reponse: 'Oui, je propose un support post-livraison avec maintenance, corrections de bugs et évolutions. Je peux aussi former vos équipes à l\'utilisation de l\'application.',
              },
              {
                question: 'Les applications sont-elles sécurisées ?',
                reponse: 'Absolument. La sécurité est une priorité. Je respecte les bonnes pratiques de sécurité (authentification, chiffrement, protection contre les injections, etc.) et je réalise des audits de sécurité.',
              },
              {
                question: 'Pouvez-vous développer pour mobile et web ?',
                reponse: 'Oui, je développe des applications web, mobiles (iOS/Android avec React Native) et desktop. Je peux aussi créer des solutions cross-platform pour optimiser les coûts.',
              },
              {
                question: 'Comment se passe la collaboration ?',
                reponse: 'Communication régulière avec des points d\'avancement, code versionné sur Git, tests à chaque étape et livraisons progressives. Vous êtes impliqué tout au long du projet.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-dark border border-amber-400/20"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-100 mb-3">{faq.question}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{faq.reponse}</p>
                  </div>
                </div>
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
            Un projet en tête ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black text-lg uppercase tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #a16207 0%, #eab308 50%, #fbbf24 100%)',
                boxShadow: '0 10px 40px rgba(234, 179, 8, 0.3)',
              }}
            >
              Discuter d'un projet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
