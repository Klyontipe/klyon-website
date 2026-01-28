'use client'

import { motion } from 'framer-motion'
import { BookOpen, Bot, FileText, Users, Clock, GraduationCap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const formations = [
  {
    icon: Bot,
    title: 'Formation IA & ChatGPT',
    subtitle: 'Maîtrisez les outils d\'intelligence artificielle',
    description: 'Apprenez à utiliser efficacement ChatGPT, Copilot et autres outils IA pour améliorer votre productivité et automatiser vos tâches.',
    niveaux: [
      {
        nom: 'Débutant',
        contenu: [
          'Introduction à l\'IA et ChatGPT',
          'Création de comptes et premiers pas',
          'Rédaction de prompts efficaces',
          'Cas d\'usage pratiques quotidiens',
        ],
      },
      {
        nom: 'Expérimenté',
        contenu: [
          'Prompt engineering avancé',
          'Intégration ChatGPT dans vos outils',
          'Automatisation avec Copilot',
          'Optimisation des workflows',
        ],
      },
      {
        nom: 'Expert',
        contenu: [
          'Fine-tuning et personnalisation',
          'Intégration API avancée',
          'Création d\'assistants IA sur mesure',
          'Architecture de solutions IA',
        ],
      },
    ],
    duree: '2 jours',
    format: 'Hybride (présentiel + distanciel)',
    public: 'Entreprises et particuliers',
  },
  {
    icon: FileText,
    title: 'Formation Microsoft 365',
    subtitle: 'SharePoint, Teams, Power Platform',
    description: 'Maîtrisez l\'écosystème Microsoft 365 pour optimiser la collaboration et la productivité de votre équipe.',
    niveaux: [
      {
        nom: 'Débutant',
        contenu: [
          'Prise en main de Microsoft 365',
          'Gestion des documents SharePoint',
          'Utilisation de Teams',
          'Organisation et collaboration',
        ],
      },
      {
        nom: 'Expérimenté',
        contenu: [
          'Administration SharePoint avancée',
          'Workflows Power Automate',
          'Applications Power Apps',
          'Gestion des permissions',
        ],
      },
      {
        nom: 'Expert',
        contenu: [
          'Architecture SharePoint complexe',
          'Développement Power Platform',
          'Intégrations avancées',
          'Migration et optimisation',
        ],
      },
    ],
    duree: '2 jours',
    format: 'Hybride (présentiel + distanciel)',
    public: 'Entreprises et particuliers',
  },
  {
    icon: GraduationCap,
    title: 'Autres Formations',
    subtitle: 'Sur mesure selon vos besoins',
    description: 'Formations personnalisées adaptées à vos outils, processus et objectifs spécifiques.',
    niveaux: [
      {
        nom: 'Sur mesure',
        contenu: [
          'Analyse de vos besoins',
          'Programme personnalisé',
          'Formation adaptée à votre niveau',
          'Suivi post-formation',
        ],
      },
    ],
    duree: 'Selon vos besoins',
    format: 'Hybride (présentiel + distanciel)',
    public: 'Entreprises et particuliers',
  },
]

export default function FormationsPageContent() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Formations Professionnelles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-900 mb-6 tracking-tight"
            style={{ fontWeight: 200 }}
          >
            Formations sur mesure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto font-light"
          >
            Formations professionnelles en IA, Microsoft 365 et automatisation. 
            <br className="hidden md:block" />
            Niveaux débutant, expérimenté et expert. Format hybride adapté à vos besoins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Durée moyenne : 2 jours</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Entreprises & Particuliers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Format hybride</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formations List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {formations.map((formation, index) => {
              const Icon = formation.icon
              return (
                <motion.div
                  key={formation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header Card */}
                    <div className="lg:col-span-1">
                      <div className="sticky top-24">
                        <div className="p-8 rounded-3xl glass-soft border border-white/30 backdrop-blur-xl shadow-xl">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-6">
                            <Icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-2" style={{ fontWeight: 300 }}>
                            {formation.title}
                          </h2>
                          <p className="text-neutral-600 mb-6">{formation.subtitle}</p>
                          <p className="text-sm text-neutral-600 leading-relaxed mb-6">{formation.description}</p>
                          
                          <div className="space-y-3 pt-6 border-t border-neutral-200/50">
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <Clock className="w-4 h-4" />
                              <span>{formation.duree}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <Users className="w-4 h-4" />
                              <span>{formation.public}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <CheckCircle className="w-4 h-4" />
                              <span>{formation.format}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Niveaux */}
                    <div className="lg:col-span-2 space-y-6">
                      {formation.niveaux.map((niveau, idx) => (
                        <motion.div
                          key={niveau.nom}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="p-6 md:p-8 rounded-2xl border"
                          style={{
                            background: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(10px)',
                            borderColor: 'rgba(229, 229, 229, 0.5)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Niveau {niveau.nom}
                          </h3>
                          <ul className="space-y-3">
                            {niveau.contenu.map((item, itemIdx) => (
                              <motion.li
                                key={itemIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: itemIdx * 0.05 }}
                                className="flex items-start gap-3 text-neutral-700"
                              >
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-6"
            style={{ fontWeight: 200 }}
          >
            Prêt à développer vos compétences ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
          >
            Contactez-moi pour discuter de vos besoins en formation. 
            <br />
            Premier contact : écoute de vos besoins et proposition adaptée.
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
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)',
              }}
            >
              Demander un devis gratuit
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
