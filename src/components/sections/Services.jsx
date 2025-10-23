import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, Code, Brain, Check } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Wrench,
      title: 'Support Informatique Professionnel',
      description: 'Maintenance, réparation et optimisation de vos équipements informatiques. Intervention sur site et à distance dans le Sud de la France.',
      features: [
        'Installation et configuration PC',
        'Réparation matériel et logiciel',
        'Maintenance préventive',
        'Support Office 365 et G Suite'
      ]
    },
    {
      icon: Code,
      title: 'Développement Full-Stack',
      description: 'Création d\'applications web et mobiles sur-mesure. Expertise React, Python, C/C++ et bases de données.',
      features: [
        'Applications React & React Native',
        'Backend Python (Flask) & C#',
        'Bases de données MySQL/PostgreSQL',
        'APIs REST et intégrations'
      ]
    },
    {
      icon: Brain,
      title: 'Solutions IA & Automatisation',
      description: 'Intégration d\'intelligence artificielle et automatisation pour optimiser vos processus métier.',
      features: [
        'Intégration ChatGPT & IA locale',
        'Automatisation de processus',
        'Solutions IA sur-mesure',
        'Formation équipes aux outils IA'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins informatiques
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.3 + (index * 0.2) + (featureIndex * 0.1) 
                        }}
                      >
                        <Check className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre informatique ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
