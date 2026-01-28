'use client'

import { motion } from 'framer-motion'
import { Monitor, Settings, Package, Wrench, HeadphonesIcon, CheckCircle } from 'lucide-react'
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50/50 via-transparent to-blue-50/50" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-soft mb-8 shadow-soft"
          >
            <Monitor className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-neutral-700 tracking-wide">Services Informatiques</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extralight text-neutral-900 mb-6 tracking-tight"
            style={{ fontWeight: 200 }}
          >
            Services informatiques complets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto font-light"
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
                  className="p-8 rounded-3xl glass-soft border border-white/30 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  
                  <h2 className="text-2xl font-light text-neutral-900 mb-3" style={{ fontWeight: 300 }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-emerald-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-12 text-center"
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 text-white flex items-center justify-center font-semibold text-lg">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-neutral-900 mb-6"
            style={{ fontWeight: 200 }}
          >
            Besoin d'un service informatique ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
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
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg"
              style={{
                background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #3b82f6 100%)',
                boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
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
