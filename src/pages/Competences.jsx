import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Bot, 
  Brain, 
  Network, 
  Wrench,
  Star,
  Puzzle,
  Users,
  CheckCircle,
  TrendingUp
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Competences = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const competences = [
    {
      icon: Code,
      title: 'Développement',
      description: 'Maîtrise des technologies modernes de développement',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'Node.js/Express', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'PHP/Laravel', level: 80 },
        { name: 'JavaScript/TypeScript', level: 95 }
      ],
      color: 'primary'
    },
    {
      icon: Database,
      title: 'Bases de Données',
      description: 'Optimisation et gestion de vos données',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Elasticsearch', level: 70 }
      ],
      color: 'accent'
    },
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA pour automatiser vos processus',
      skills: [
        { name: 'Machine Learning', level: 80 },
        { name: 'OpenAI API', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Chatbots', level: 90 },
        { name: 'NLP', level: 80 }
      ],
      color: 'purple'
    },
    {
      icon: Network,
      title: 'DevOps & Cloud',
      description: 'Déploiement et infrastructure moderne',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 90 }
      ],
      color: 'green'
    }
  ]

  const softSkills = [
    {
      icon: Brain,
      title: 'Analyse',
      description: 'Compréhension approfondie des besoins métiers'
    },
    {
      icon: Puzzle,
      title: 'Polyvalence',
      description: 'Développement, bases de données, IA, support IT'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Solutions robustes, fonctionnelles, adaptées aux besoins métiers'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Veille technologique et adoption des dernières tendances'
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'Backend', level: 85 },
    { name: 'PostgreSQL', category: 'Database', level: 90 },
    { name: 'Docker', category: 'DevOps', level: 85 },
    { name: 'AWS', category: 'Cloud', level: 80 },
    { name: 'TypeScript', category: 'Frontend', level: 90 },
    { name: 'MongoDB', category: 'Database', level: 80 },
    { name: 'Git', category: 'DevOps', level: 95 },
    { name: 'Linux', category: 'System', level: 90 }
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
    hidden: { opacity: 0, y: 20 },
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
    <>
      <Helmet>
        <title>Compétences - Klyon | Expertise Technique et Technologique</title>
        <meta name="description" content="Découvrez nos compétences techniques : développement web, bases de données, IA, DevOps. Expertise reconnue dans les technologies modernes." />
      </Helmet>

      {/* Hero Section */}
      <section className={`py-20 lg:py-32 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Compétences</span>
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Une expertise technique solide et une veille technologique constante pour vous offrir les meilleures solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="space-y-16"
          >
            {competences.map((competence, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    competence.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/50' :
                    competence.color === 'accent' ? 'bg-accent-100 dark:bg-accent-900/50' :
                    competence.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/50' :
                    'bg-green-100 dark:bg-green-900/50'
                  }`}>
                    <competence.icon className={`h-8 w-8 ${
                      competence.color === 'primary' ? 'text-primary-600' :
                      competence.color === 'accent' ? 'text-accent-600' :
                      competence.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
                  </div>
                  
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {competence.title}
                  </h2>
                  
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                    {competence.description}
                  </p>

                  <div className="space-y-4">
                    {competence.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <motion.div
                            className={`h-2 rounded-full ${
                              competence.color === 'primary' ? 'bg-primary-600' :
                              competence.color === 'accent' ? 'bg-accent-600' :
                              competence.color === 'purple' ? 'bg-purple-600' :
                              'bg-green-600'
                            }`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    className={`relative p-8 rounded-3xl ${
                      competence.color === 'primary' ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20' :
                      competence.color === 'accent' ? 'bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20' :
                      competence.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' :
                      'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <div className={`text-6xl mb-4 ${
                        competence.color === 'primary' ? 'text-primary-600' :
                        competence.color === 'accent' ? 'text-accent-600' :
                        competence.color === 'purple' ? 'text-purple-600' :
                        'text-green-600'
                      }`}>
                        {competence.icon === Code ? '💻' : 
                         competence.icon === Database ? '🗄️' : 
                         competence.icon === Bot ? '🤖' : '☁️'}
                      </div>
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {competence.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Compétences Transversales
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Au-delà de la technique, des qualités humaines qui font la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  theme === 'dark' ? 'bg-primary-900/50' : 'bg-primary-100'
                }`}>
                  <skill.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {skill.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Technologies Maîtrisées
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Un éventail de technologies modernes pour répondre à tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} text-center hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl mb-2 ${
                  tech.level >= 90 ? 'text-green-600' :
                  tech.level >= 80 ? 'text-primary-600' :
                  tech.level >= 70 ? 'text-accent-600' :
                  'text-gray-500'
                }`}>
                  {tech.level >= 90 ? '🔥' : tech.level >= 80 ? '⭐' : '💫'}
                </div>
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {tech.name}
                </h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tech.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à exploiter notre expertise ?
            </h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Mettons nos compétences au service de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuter de votre projet
              </motion.a>
              <motion.a
                href="/services"
                className="px-8 py-4 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Competences
