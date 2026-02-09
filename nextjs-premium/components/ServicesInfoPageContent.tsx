'use client'

import { motion } from 'framer-motion'
import { Monitor, Settings, Package, Wrench, HeadphonesIcon, CheckCircle, Shield, Zap, Clock, HelpCircle, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Monitor,
    title: 'Montage PC sur mesure',
    description: 'Conception et assemblage de PC adaptés à vos besoins spécifiques : gaming, bureautique, création, serveurs.',
    details: [
      'Sélection des composants optimaux',
      'Assemblage professionnel',
      'Tests et optimisation',
      'Garantie sur le montage',
    ],
  },
  {
    icon: Settings,
    title: 'Installation systèmes d\'exploitation',
    description: 'Installation et configuration de Windows, Linux ou macOS selon vos préférences et besoins.',
    details: [
      'Installation propre du système',
      'Configuration optimale',
      'Mise à jour des drivers',
      'Optimisation des performances',
    ],
  },
  {
    icon: Package,
    title: 'Installation suites Office',
    description: 'Installation et configuration de Microsoft 365, LibreOffice ou autres suites bureautiques.',
    details: [
      'Installation complète',
      'Configuration des comptes',
      'Synchronisation cloud',
      'Formation rapide à l\'utilisation',
    ],
  },
  {
    icon: Wrench,
    title: 'Installation logiciels',
    description: 'Installation et configuration de tous types de logiciels selon vos besoins professionnels ou personnels.',
    details: [
      'Logiciels métier spécifiques',
      'Outils de productivité',
      'Logiciels créatifs',
      'Configuration et paramétrage',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Support technique',
    description: 'Accompagnement et support après installation pour garantir le bon fonctionnement de vos équipements.',
    details: [
      'Support téléphonique',
      'Assistance à distance',
      'Résolution de problèmes',
      'Conseils et optimisation',
    ],
  },
]

export default function ServicesInfoPageContent() {
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
            <Monitor className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-neutral-300 tracking-wide">Services Informatiques</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-100 mb-6 tracking-tight"
            style={{ fontWeight: 200 }}
          >
            Services informatiques complets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-3xl mx-auto font-light"
          >
            Montage PC sur mesure, installation de systèmes et logiciels, support technique. 
            <br className="hidden md:block" />
            Services adaptés à vos besoins dans les Bouches-du-Rhône et au-delà.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-3xl glass-dark border border-amber-400/20 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6">
                    <div className="relative w-7 h-7 flex items-center justify-center">
                      <div className="absolute w-6 h-6 border-2 border-amber-400 rotate-45" />
                      <div className="absolute w-3 h-3 bg-amber-400/50 rotate-45" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-light text-neutral-100 mb-3" style={{ fontWeight: 300 }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
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
              Pourquoi faire appel à nos services ?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Expertise technique, rapidité d'intervention et accompagnement personnalisé
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Intervention rapide',
                description: 'Réactivité optimale pour répondre à vos besoins urgents. Disponibilité adaptée à vos contraintes.',
              },
              {
                icon: Shield,
                title: 'Expertise garantie',
                description: 'Maîtrise des dernières technologies et bonnes pratiques. Travail soigné et professionnel.',
              },
              {
                icon: Clock,
                title: 'Gain de temps',
                description: 'Vous concentrez sur votre cœur de métier pendant que nous gérons vos besoins informatiques.',
              },
              {
                icon: TrendingUp,
                title: 'Support continu',
                description: 'Accompagnement après installation et support technique pour garantir le bon fonctionnement.',
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-400/10 flex items-center justify-center mb-4 border border-amber-400/30">
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
            Comment ça se passe ?
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Premier contact',
                description: 'Écoute de vos besoins et analyse de votre demande. Discussion sur vos objectifs et contraintes.',
              },
              {
                step: '2',
                title: 'Devis gratuit',
                description: 'Proposition détaillée avec tarification adaptée à votre projet. Transparence totale sur les coûts.',
              },
              {
                step: '3',
                title: 'Intervention',
                description: 'Réalisation du service sur site ou à distance selon vos préférences. Travail soigné et professionnel.',
              },
              {
                step: '4',
                title: 'Support post-installation',
                description: 'Accompagnement et support technique pour garantir le bon fonctionnement. Disponible pour vos questions.',
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
                question: 'Quels types de PC pouvez-vous monter ?',
                reponse: 'Je monte des PC adaptés à tous les usages : gaming, bureautique, création graphique, serveurs, stations de travail. Chaque configuration est optimisée selon vos besoins spécifiques et votre budget.',
              },
              {
                question: 'Intervenez-vous à domicile ou en entreprise ?',
                reponse: 'Les deux. Je me déplace dans les Bouches-du-Rhône pour les interventions sur site. Je peux aussi intervenir à distance pour certaines prestations comme l\'installation de logiciels ou le support technique.',
              },
              {
                question: 'Quelle est la garantie sur le montage PC ?',
                reponse: 'Je garantis le montage et le bon fonctionnement des composants. Chaque PC est testé avant livraison. Les composants bénéficient de leur garantie constructeur respective.',
              },
              {
                question: 'Combien de temps prend une intervention ?',
                reponse: 'Cela dépend du service. Un montage PC complet prend généralement une demi-journée. L\'installation d\'un système d\'exploitation et de logiciels prend 2-3 heures. Je m\'adapte à vos contraintes horaires.',
              },
              {
                question: 'Proposez-vous des tarifs dégressifs pour les entreprises ?',
                reponse: 'Oui, pour les entreprises avec plusieurs postes à équiper ou des besoins récurrents, je propose des tarifs dégressifs et des formules d\'abonnement pour le support technique.',
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
            Besoin d'un service informatique ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-400 mb-8"
          >
            Tarifs adaptés selon votre demande et votre configuration. 
            <br />
            Intervention possible dans les Bouches-du-Rhône et au-delà si nécessaire.
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
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+33766980342"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-neutral-100 text-lg glass-dark border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300"
            >
              <Clock className="w-5 h-5 text-amber-400" />
              Appeler maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
