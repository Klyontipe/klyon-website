import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Clock, Users, Linkedin } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: MapPin,
      title: 'Zone d\'intervention',
      description: 'Bouches-du-Rhône et environs'
    },
    {
      icon: Clock,
      title: 'Flexibilité',
      description: 'Intervention sur site ou à distance selon vos besoins'
    },
    {
      icon: Users,
      title: 'Clientèle',
      description: 'Entreprises, particuliers, associations, collectivités'
    },
    {
      icon: Linkedin,
      title: 'Profil LinkedIn',
      description: 'Consulter mon profil professionnel',
      link: 'https://www.linkedin.com/in/zl3/'
    }
  ]

  return (
    <section id="apropos" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              À propos de Klyon
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <strong>Klyon</strong> est une entreprise spécialisée dans les solutions informatiques innovantes, 
              fondée par Lorenzo Fortini, ingénieur en fin de cursus à EPITECH. Nous combinons expertise 
              technique avancée et vision entrepreneuriale pour accompagner entreprises et particuliers 
              dans leur transformation digitale dans le Sud de la France.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Fort de plusieurs années d'expérience à travers des projets 
              variés, notre équipe maîtrise les technologies les plus récentes : développement Full-Stack, 
              intelligence artificielle, automatisation et support informatique professionnel.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      {feature.link ? (
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                        >
                          {feature.description}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl transform rotate-3"></div>
              <img
                src="./assets/photopro.jpg"
                alt="Lorenzo Fortini - Fondateur de Klyon"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Années d'expérience
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projets réalisés' },
              { number: '100%', label: 'Satisfaction client' },
              { number: '24/7', label: 'Support disponible' },
              { number: '3+', label: 'Années d\'expérience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
