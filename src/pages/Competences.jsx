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
  TrendingUp,
  Smartphone,
  Shield,
  Globe,
  Terminal,
  Zap,
  BookOpen,
  Target,
  Layers
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useMemo, useState } from 'react'

const Competences = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getTier = (level) => {
    if (level >= 90) return { label: 'Expert', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' }
    if (level >= 80) return { label: 'Avancé', color: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' }
    if (level >= 70) return { label: 'Intermédiaire', color: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300' }
    return { label: 'Découverte', color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' }
  }

  // UI filtres & drawer (filtres dérivés après déclaration)
  let filters = ['Tous']
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [selectedCompetence, setSelectedCompetence] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  let filteredCompetences = []

  const competences = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Solutions web modernes et performantes',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Node.js/Express', level: 90 },
        { name: 'Python/Flask', level: 85 },
        { name: 'PHP/Laravel', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Tailwind CSS', level: 90 }
      ],
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles cross-platform',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Mobile UI/UX', level: 80 },
        { name: 'App Store Deployment', level: 75 },
        { name: 'Cross-platform', level: 85 }
      ],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Bases de Données',
      description: 'Optimisation et gestion de vos données',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Optimisation requêtes', level: 85 }
      ],
      color: 'accent'
    },
    {
      icon: Bot,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA pour automatiser vos processus',
      skills: [
        { name: 'OpenAI API', level: 90 },
        { name: 'Chatbots', level: 90 },
        { name: 'Machine Learning', level: 80 },
        { name: 'NLP', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Prompt Engineering', level: 90 }
      ],
      color: 'purple'
    },
    {
      icon: Terminal,
      title: 'Développement Système',
      description: 'Programmation système et optimisation',
      skills: [
        { name: 'C/C++', level: 85 },
        { name: 'Linux', level: 90 },
        { name: 'Algorithmes', level: 85 },
        { name: 'Optimisation', level: 80 },
        { name: 'Haskell', level: 70 }
      ],
      color: 'orange'
    },
    {
      icon: Network,
      title: 'DevOps & Infrastructure',
      description: 'Déploiement et infrastructure moderne',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'DNS Configuration', level: 90 },
        { name: 'GitHub Pages', level: 95 },
        { name: 'Linux Administration', level: 90 }
      ],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Sécurisation et protection des systèmes',
      skills: [
        { name: 'CTF Participation', level: 75 },
        { name: 'Security Best Practices', level: 80 },
        { name: 'Vulnerability Assessment', level: 70 },
        { name: 'Secure Coding', level: 85 }
      ],
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Déploiement Web',
      description: 'Mise en ligne et configuration DNS',
      skills: [
        { name: 'DNS Configuration', level: 90 },
        { name: 'Domain Management', level: 85 },
        { name: 'SSL/TLS', level: 80 },
        { name: 'Web Hosting', level: 90 },
        { name: 'A/TXT Records', level: 90 }
      ],
      color: 'indigo'
    }
  ]

  // dériver filtres et résultat après avoir les données
  filters = ['Tous', ...competences.map(c => c.title)]
  filteredCompetences = useMemo(() => {
    if (activeFilter === 'Tous') return competences
    return competences.filter(c => c.title === activeFilter)
  }, [activeFilter])

  const softSkills = [
    {
      icon: Brain,
      title: 'Apprentissage Rapide',
      description: 'Maîtrise de nouvelles technologies en quelques jours selon les besoins'
    },
    {
      icon: Target,
      title: 'Gestion de Projets',
      description: 'Pilotage de projets complets via micro-entreprise et encadrement d\'équipes'
    },
    {
      icon: Users,
      title: 'Formation & Encadrement',
      description: 'Formation des équipes IT/IA et encadrement de stagiaires'
    },
    {
      icon: BookOpen,
      title: 'Pédagogie',
      description: 'Transfert de compétences et accompagnement technique'
    },
    {
      icon: Zap,
      title: 'Autonomie',
      description: 'Capacité d\'apprentissage rapide et résolution de problèmes'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Veille technologique et adoption des dernières tendances'
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'React Native', category: 'Mobile', level: 85 },
    { name: 'JavaScript', category: 'Frontend', level: 95 },
    { name: 'TypeScript', category: 'Frontend', level: 90 },
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'Backend', level: 85 },
    { name: 'Flask', category: 'Backend', level: 85 },
    { name: 'C/C++', category: 'System', level: 85 },
    { name: 'Haskell', category: 'Functional', level: 70 },
    { name: 'PostgreSQL', category: 'Database', level: 90 },
    { name: 'MySQL', category: 'Database', level: 85 },
    { name: 'MongoDB', category: 'Database', level: 80 },
    { name: 'Docker', category: 'DevOps', level: 85 },
    { name: 'Git', category: 'DevOps', level: 95 },
    { name: 'GitHub', category: 'DevOps', level: 95 },
    { name: 'Linux', category: 'System', level: 90 },
    { name: 'DNS', category: 'Infrastructure', level: 90 },
    { name: 'OpenAI API', category: 'AI', level: 90 },
    { name: 'TensorFlow', category: 'AI', level: 75 },
    { name: 'HTML/CSS', category: 'Frontend', level: 95 }
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
      <section className={`py-8 lg:py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Compétences</span>
            </h1>
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
              Une expertise technique solide et une veille technologique constante pour vous offrir les meilleures solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills - Grille cartes + filtres + drawer */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          {/* Filtres */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  activeFilter === f
                    ? 'bg-primary-600 text-white border-primary-600'
                    : theme === 'dark' ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Grille cartes compétences */}
            <div className="lg:col-span-2">
              <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCompetences.map((competence, index) => (
                  <motion.div key={index} variants={itemVariants} className={`p-4 rounded-xl border cursor-pointer ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700' : 'bg-gray-50 border-gray-200'}`} onClick={() => { setSelectedCompetence(competence); setDrawerOpen(true) }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${
                        competence.color === 'primary' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' :
                        competence.color === 'accent' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300' :
                        competence.color === 'purple' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' :
                        competence.color === 'blue' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                        competence.color === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' :
                        competence.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                        competence.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                      }`}>
                        <competence.icon className="h-4 w-4" />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Détails</span>
                    </div>
                    <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{competence.title}</h3>
                    <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{competence.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {competence.skills.slice(0, 5).map((skill, i) => (
                        <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>{skill.name}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Colonne latérale (Approche/Points forts/Outillage) */}
            <div>
              <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h4 className={`text-base font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Approche</h4>
                <ol className={`space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                    Cadrage du besoin et contraintes
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-500" />
                    Proposition technique pragmatique
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" />
                    Implémentation incrémentale et tests
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-500" />
                    Passage à l’échelle et transfert
                  </li>
                </ol>
              </div>
              <div className={`mt-4 p-4 rounded-xl border ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h4 className={`text-base font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Points forts</h4>
                <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5" /> Code lisible, maintenable et testé
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5" /> Orientation résultat et délais tenus
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-500 mt-0.5" /> Pédagogie et transfert de compétences
                  </li>
                </ul>
              </div>
              <div className={`mt-4 p-4 rounded-xl border ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h4 className={`text-base font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Outillage</h4>
                <div className="flex flex-wrap gap-2">
                  {['GitHub','Docker','Postman','Jira','Notion','CI/CD','Linux'].map((t, i) => (
                    <span key={i} className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl border bg-transparent border-dashed border-gray-300 dark:border-gray-700">
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Design épuré: lisible, sans gimmick, pensé pour inspirer confiance.</p>
              </div>
            </div>
          </div>

          {/* Drawer détails */}
          {drawerOpen && selectedCompetence && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
              <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} transition={{ type: 'tween', duration: 0.25 }} className={`absolute right-0 top-0 h-full w-full max-w-md ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl border-l ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="p-5 flex items-start justify-between border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${
                      selectedCompetence.color === 'primary' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' :
                      selectedCompetence.color === 'accent' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300' :
                      selectedCompetence.color === 'purple' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' :
                      selectedCompetence.color === 'blue' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                      selectedCompetence.color === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' :
                      selectedCompetence.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' :
                      selectedCompetence.color === 'indigo' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' :
                      'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                    }`}>
                      <selectedCompetence.icon className="h-4 w-4" />
                    </div>
                    <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{selectedCompetence.title}</h3>
                  </div>
                  <button onClick={() => setDrawerOpen(false)} className={`text-sm ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Fermer</button>
                </div>
                <div className="p-5 space-y-5 overflow-y-auto h-[calc(100%-60px)]">
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Compétences clés</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedCompetence.skills.map((s, i) => {
                        const tier = getTier(s.level)
                        return (
                          <li key={i} className={`flex items-center justify-between p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                            <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{s.name}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${tier.color}`}>{tier.label}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Exemples génériques</h4>
                    <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm list-disc pl-4 space-y-1`}>
                      <li>Conception d’une API propre, testée et documentée</li>
                      <li>Mise en place d’une CI/CD sobre et fiable</li>
                      <li>Intégration d’un modèle IA sur un cas d’usage simple</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Soft Skills */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Compétences Transversales
            </h2>
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Au-delà de la technique, des qualités humaines qui font la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow hover:shadow-md transition-all duration-300 text-center`}
                whileHover={{ y: -3 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  theme === 'dark' ? 'bg-primary-900/50' : 'bg-primary-100'
                }`}>
                  <skill.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className={`text-base font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {skill.title}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Technologies Maîtrisées
            </h2>
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Un éventail de technologies modernes pour répondre à tous vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => {
              const tier = getTier(tech.level)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} text-center border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:shadow transition-all duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <h3 className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{tech.name}</h3>
                  <p className={`text-[10px] mt-0.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{tech.category}</p>
                  <div className={`mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${tier.color}`}>
                    {tier.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Prêt à exploiter notre expertise ?
            </h2>
            <p className={`text-base mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
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
