'use client'

import { motion } from 'framer-motion'
import { Zap, GitBranch, Code, Rocket, CheckCircle, ArrowRight, Database, TrendingUp, Clock, HelpCircle, Target, Award } from 'lucide-react'
import Link from 'next/link'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'

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
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Automatisez vos processus"
        subtitle="Gain de temps garanti avec ROI mesurable. Zapier, N8N ou scripts sur mesure selon vos besoins."
        badge="Automatisation de processus"
        ctaLabel="En discuter"
        ctaHref="/contact"
      />

      {/* Outils Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-12 text-center"
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
                    {outil.name}
                  </h3>
                  
                  <p className="text-neutral-400 mb-6 leading-relaxed">{outil.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-neutral-100 mb-2">Cas d'usage :</p>
                    <ul className="space-y-2">
                      {outil.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                          <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-12 text-center tracking-tight"
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
                className="p-6 md:p-8 rounded-2xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-100">{exemple.title}</h3>
                </div>
                <p className="text-neutral-400 mb-4 leading-relaxed text-sm">{exemple.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exemple.outils.map((outil, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-400/30"
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
              Les bénéfices de l'automatisation
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Des résultats mesurables et un retour sur investissement rapide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Gain de temps',
                description: 'Élimination des tâches répétitives. Jusqu\'à 70% de temps économisé sur les processus automatisés.',
                chiffre: '70%',
              },
              {
                icon: TrendingUp,
                title: 'ROI mesurable',
                description: 'Retour sur investissement généralement visible dès les premiers mois. Réduction des coûts opérationnels.',
                chiffre: '3-6 mois',
              },
              {
                icon: Target,
                title: 'Réduction d\'erreurs',
                description: 'Élimination des erreurs humaines dans les tâches répétitives. Fiabilité et précision accrues.',
                chiffre: '95%',
              },
              {
                icon: Award,
                title: 'Productivité',
                description: 'Vos équipes se concentrent sur les tâches à valeur ajoutée. Amélioration de la productivité globale.',
                chiffre: '+40%',
              },
            ].map((benefice, index) => {
              const Icon = benefice.icon
              return (
                <motion.div
                  key={benefice.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center mb-4 border border-amber-400/30">
                    <span className="relative z-10 text-xs font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="text-3xl font-light text-amber-400 mb-2" style={{ fontWeight: 100 }}>{benefice.chiffre}</div>
                  <h3 className="text-xl font-semibold text-neutral-100 mb-3">{benefice.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{benefice.description}</p>
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
            Processus de travail
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-dark border border-amber-400/20 flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-400/20 border border-amber-400/30 flex items-center justify-center font-semibold text-lg text-amber-400">
                  {item.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-neutral-100 mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
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
                question: 'Combien de temps prend la mise en place d\'une automatisation ?',
                reponse: 'Cela dépend de la complexité. Une automatisation simple avec Zapier peut être mise en place en quelques heures. Un workflow complexe avec N8N ou un script sur mesure peut prendre plusieurs jours. Je vous donne toujours une estimation précise avant de commencer.',
              },
              {
                question: 'Quel est le retour sur investissement ?',
                reponse: 'Le ROI est généralement visible dès les premiers mois. En moyenne, les automatisations permettent d\'économiser plusieurs heures par semaine, ce qui représente un gain significatif. Je calcule toujours le ROI estimé avant de démarrer un projet.',
              },
              {
                question: 'Les automatisations nécessitent-elles des compétences techniques ?',
                reponse: 'Non, une fois mises en place, les automatisations fonctionnent de manière autonome. Je vous forme à leur utilisation si nécessaire et je fournis une documentation complète. Vous n\'avez besoin d\'aucune compétence technique.',
              },
              {
                question: 'Peut-on modifier une automatisation après sa création ?',
                reponse: 'Absolument. Les automatisations sont évolutives et peuvent être modifiées selon vos besoins changeants. Je propose un support pour les ajustements et améliorations.',
              },
              {
                question: 'Quels outils sont les plus adaptés à mon cas ?',
                reponse: 'Cela dépend de vos besoins. Zapier est idéal pour les intégrations simples entre applications populaires. N8N est plus puissant pour les workflows complexes. Les scripts sur mesure offrent une flexibilité maximale. Je vous conseille lors de l\'analyse de vos besoins.',
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
            Prêt à automatiser vos processus ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-base font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
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
