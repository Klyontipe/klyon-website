'use client'

import { motion } from 'framer-motion'
import { BookOpen, Bot, FileText, Users, Clock, GraduationCap, CheckCircle, Target, Award, Zap, MessageSquare, HelpCircle, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

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
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Formations sur mesure"
        subtitle="IA, Microsoft 365 et automatisation. Niveaux débutant à expert. Format hybride adapté à vos besoins."
        badge="Formations professionnelles"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />

      {/* Avantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Pourquoi choisir nos formations ?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Une approche pédagogique adaptée à vos besoins avec des résultats concrets et mesurables
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Approche pratique',
                description: 'Formation basée sur des cas d\'usage réels et des exercices concrets. Vous repartez avec des compétences directement applicables.',
              },
              {
                icon: Users,
                title: 'Groupes réduits',
                description: 'Effectifs limités pour garantir un suivi personnalisé et des échanges de qualité. Maximum 8 participants par session.',
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Attestation de formation délivrée à l\'issue de chaque session. Reconnaissance de vos nouvelles compétences.',
              },
              {
                icon: MessageSquare,
                title: 'Support post-formation',
                description: 'Accompagnement après la formation : ressources, FAQ, et support pour vos questions. Vous n\'êtes jamais seul.',
              },
            ].map((avantage, index) => {
              const Icon = avantage.icon
              return (
                <ScrollReveal key={avantage.title} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 h-full">
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
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
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
                        <div className="p-8 rounded-3xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-xl">
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center mb-6 border border-amber-400/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-transparent opacity-50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-amber-400/40 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-amber-400/20 rounded-full" />
                            <span className="relative z-10 text-sm font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                              {(index + 1).toString().padStart(2, '0')}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-light text-neutral-100 mb-2" style={{ fontWeight: 300 }}>
                            {formation.title}
                          </h2>
                          <p className="text-neutral-400 mb-6">{formation.subtitle}</p>
                          <p className="text-sm text-neutral-400 leading-relaxed mb-6">{formation.description}</p>
                          
                          <div className="space-y-3 pt-6 border-t border-amber-400/20">
                            <div className="flex items-center gap-2 text-sm text-neutral-300">
                              <Clock className="w-4 h-4 text-amber-400" />
                              <span>{formation.duree}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-300">
                              <Users className="w-4 h-4 text-amber-400" />
                              <span>{formation.public}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-300">
                              <CheckCircle className="w-4 h-4 text-amber-400" />
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
                          className="p-6 md:p-8 rounded-2xl glass-dark border border-amber-400/20"
                        >
                          <h3 className="text-xl font-semibold text-neutral-100 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
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
                                className="flex items-start gap-3 text-neutral-300"
                              >
                                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
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

      {/* Méthodologie Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Notre méthodologie
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Un processus structuré pour garantir votre réussite et l'acquisition de compétences durables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Analyse des besoins',
                description: 'Évaluation de votre niveau actuel et identification de vos objectifs spécifiques. Adaptation du programme à votre contexte.',
              },
              {
                step: '2',
                title: 'Formation interactive',
                description: 'Sessions dynamiques alternant théorie et pratique. Exercices concrets, cas d\'usage réels et échanges avec le formateur.',
              },
              {
                step: '3',
                title: 'Mise en pratique',
                description: 'Travaux pratiques sur vos propres projets ou cas d\'usage. Application immédiate des concepts appris.',
              },
              {
                step: '4',
                title: 'Suivi et ressources',
                description: 'Documentation complète, ressources complémentaires et support post-formation pour consolider vos acquis.',
              },
            ].map((etape, index) => (
              <motion.div
                key={etape.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl glass-dark border border-amber-400/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-black flex items-center justify-center font-bold text-lg mb-4">
                    {etape.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-3">{etape.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{etape.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-400/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils et Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Outils et technologies
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Formation sur les outils les plus performants et les plus demandés du marché
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'Intelligence Artificielle',
                outils: ['ChatGPT (GPT-4)', 'Microsoft Copilot', 'Claude AI', 'API OpenAI', 'Assistants personnalisés'],
              },
              {
                category: 'Microsoft 365',
                outils: ['SharePoint Online', 'Microsoft Teams', 'Power Automate', 'Power Apps', 'Power BI'],
              },
              {
                category: 'Automatisation',
                outils: ['Zapier', 'N8N', 'Make (Integromat)', 'Scripts Python', 'API REST'],
              },
            ].map((categorie, index) => (
              <motion.div
                key={categorie.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-dark border border-amber-400/20"
              >
                <h3 className="text-xl font-semibold text-neutral-100 mb-4">{categorie.category}</h3>
                <ul className="space-y-2">
                  {categorie.outils.map((outil, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                      <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{outil}</span>
                    </li>
                  ))}
                </ul>
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
                question: 'Quel niveau faut-il avoir pour suivre une formation ?',
                reponse: 'Nos formations sont adaptées à tous les niveaux. Nous proposons des sessions débutant, expérimenté et expert. Avant la formation, nous évaluons votre niveau pour vous orienter vers le programme le plus adapté.',
              },
              {
                question: 'Les formations peuvent-elles être personnalisées ?',
                reponse: 'Absolument. Nous proposons des formations sur mesure adaptées à vos outils, processus et objectifs spécifiques. Nous analysons vos besoins en amont pour créer un programme personnalisé.',
              },
              {
                question: 'Quel est le format des formations ?',
                reponse: 'Nos formations sont en format hybride, combinant présentiel et distanciel selon vos préférences. La durée moyenne est de 2 jours, mais peut être adaptée selon vos besoins.',
              },
              {
                question: 'Y a-t-il un suivi après la formation ?',
                reponse: 'Oui, nous proposons un accompagnement post-formation avec ressources documentaires, FAQ, et support pour répondre à vos questions. Vous n\'êtes jamais seul après la formation.',
              },
              {
                question: 'Peut-on organiser une formation pour une équipe ?',
                reponse: 'Bien sûr. Nous proposons des formations en groupe pour équipes (maximum 8 participants). Les tarifs sont dégressifs selon le nombre de participants.',
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

      {/* Résultats attendus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-100 mb-6 tracking-tight" style={{ fontWeight: 200 }}>
              Résultats attendus
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Ce que vous allez acquérir et les bénéfices concrets pour votre activité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Gain de productivité',
                description: 'Réduction significative du temps passé sur les tâches répétitives. Automatisation de processus chronophages et optimisation de vos workflows.',
                resultat: 'Jusqu\'à 70% de gain de temps',
              },
              {
                icon: Lightbulb,
                title: 'Nouvelles compétences',
                description: 'Maîtrise des outils les plus demandés du marché. Capacité à créer des solutions innovantes et à résoudre des problèmes complexes.',
                resultat: 'Compétences directement applicables',
              },
              {
                icon: Zap,
                title: 'Autonomie renforcée',
                description: 'Capacité à utiliser les outils de manière autonome et à former vos équipes. Indépendance dans la résolution de problèmes techniques.',
                resultat: 'Autonomie complète sur les outils',
              },
              {
                icon: Award,
                title: 'Certification professionnelle',
                description: 'Attestation de formation reconnue. Valorisation de vos compétences sur votre CV et dans votre entreprise.',
                resultat: 'Certification délivrée',
              },
            ].map((resultat, index) => {
              const Icon = resultat.icon
              return (
                <motion.div
                  key={resultat.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl glass-dark border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center border border-amber-400/30 flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-amber-400/30" />
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t border-l border-amber-400/30" />
                      </div>
                      <span className="relative z-10 text-xs font-bold text-amber-400 tracking-tighter" style={{ fontFamily: 'monospace' }}>
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-100 mb-2">{resultat.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed mb-3">{resultat.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-400/30">
                        <CheckCircle className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-medium text-amber-400">{resultat.resultat}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#0f0f0f' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-100 mb-6"
            style={{ fontWeight: 200 }}
          >
            Prêt à développer vos compétences ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black text-base font-semibold tracking-wide shadow-soft-xl hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+33766980342"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-dark border border-amber-400/30 text-neutral-100 font-medium hover:border-amber-400/50 hover:text-amber-300 transition-all duration-200"
            >
              <Clock className="w-5 h-5 text-amber-400" />
              Réserver un appel
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
