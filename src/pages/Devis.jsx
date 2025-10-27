import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Calculator, 
  CheckCircle, 
  Clock, 
  Star,
  ArrowRight,
  Bot,
  Code,
  Wrench,
  Mail,
  Phone,
  User,
  Building,
  Calendar,
  DollarSign
} from 'lucide-react'
import emailjs from 'emailjs-com'

const Devis = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: 'ia', name: 'Intelligence Artificielle', icon: Bot, description: 'Formation ChatGPT, assistants IA, automatisation' },
    { id: 'developpement', name: 'Développement', icon: Code, description: 'Web, mobile, applications sur mesure' },
    { id: 'reparation', name: 'Réparation', icon: Wrench, description: 'Smartphones, PC, montres connectées' }
  ]

  const budgetRanges = [
    { value: '500-1000', label: '500€ - 1 000€' },
    { value: '1000-3000', label: '1 000€ - 3 000€' },
    { value: '3000-5000', label: '3 000€ - 5 000€' },
    { value: '5000+', label: '5 000€+' },
    { value: 'discussion', label: 'À discuter' }
  ]

  const timelines = [
    { value: 'urgent', label: 'Urgent (1-2 semaines)' },
    { value: 'normal', label: 'Normal (1 mois)' },
    { value: 'flexible', label: 'Flexible (2-3 mois)' },
    { value: 'long', label: 'Long terme (3+ mois)' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Préparer les données pour EmailJS avec formatage structuré
      const fullMessage = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 NOUVELLE DEMANDE DE DEVIS - KLYON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom         : ${formData.name}
Email       : ${formData.email}
Téléphone   : ${formData.phone || 'Non renseigné'}
Entreprise  : ${formData.company || 'Particulier'}

📋 DÉTAILS DU PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service      : ${formData.service || 'Non précisé'}
Budget       : ${formData.budget || 'À discuter'}
Délai        : ${formData.timeline || 'Flexible'}

📝 DESCRIPTION DU PROJET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim()

      await emailjs.send(
        'service_lb38ewo',
        'template_2af96ws',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: fullMessage,
          to_name: 'Lorenzo'
        },
        'ZJMuCYNkzxGhqore6'
      )

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        description: ''
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      alert('Erreur lors de l\'envoi du devis. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Devis Envoyé - Klyon | Merci pour votre confiance</title>
          <meta name="description" content="Votre demande de devis a été envoyée avec succès. Nous vous recontacterons sous 24h pour discuter de votre projet." />
        </Helmet>

        <section className="min-h-screen flex items-center justify-center bg-gray-950 py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>

              <h1 className="text-4xl font-bold text-white mb-6">
                Devis envoyé avec succès !
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Merci pour votre confiance. Nous avons bien reçu votre demande de devis et vous recontacterons sous <span className="text-primary-400 font-semibold">24h</span> pour discuter de votre projet.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <Clock className="h-8 w-8 text-accent-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Réponse rapide</h3>
                  <p className="text-gray-400 text-sm">Sous 24h maximum</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Devis gratuit</h3>
                  <p className="text-gray-400 text-sm">Sans engagement</p>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <Calculator className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Tarif sur mesure</h3>
                  <p className="text-gray-400 text-sm">Adapté à vos besoins</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-4 w-4" />
                  Nous contacter
                </motion.a>
                <motion.a
                  href="/projets"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-4 w-4" />
                  Voir nos projets
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Demande de Devis Gratuit | Klyon Expert IA & Développement</title>
        <meta name="description" content="Demandez votre devis gratuit pour vos projets IA, développement web/mobile et réparation informatique. Réponse sous 24h, tarifs sur mesure." />
        <meta name="keywords" content="devis gratuit, intelligence artificielle, développement web, réparation informatique, Bouches-du-Rhône" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://klyon.fr/devis" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Demande de Devis Gratuit | Klyon" />
        <meta property="og:description" content="Devis gratuit pour vos projets IA, développement et réparation informatique. Réponse sous 24h." />
        <meta property="og:url" content="https://klyon.fr/devis" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gray-950">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-primary-500 to-accent-500" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-accent-500 to-primary-500" />
        </div>
        
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-accent-500/20 rounded-xl">
                <Calculator className="h-8 w-8 text-accent-400" />
              </div>
              <span className="px-4 py-2 bg-accent-500/20 text-accent-400 font-medium rounded-full border border-accent-500/30">
                Devis Gratuit
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Demande de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Devis</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Obtenez un devis personnalisé pour vos projets IA, développement ou réparation. 
              Réponse garantie sous 24h, sans engagement.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Clock, text: 'Réponse sous 24h', color: 'text-accent-400' },
                { icon: Star, text: 'Devis gratuit', color: 'text-yellow-400' },
                { icon: CheckCircle, text: 'Sans engagement', color: 'text-green-400' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center justify-center gap-3"
                >
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  <span className="text-gray-300 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Building className="inline h-4 w-4 mr-2" />
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-4">
                    Service souhaité *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <motion.label
                        key={service.id}
                        className={`relative flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.service === service.id
                            ? 'border-primary-500 bg-primary-500/10'
                            : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-3">
                          <service.icon className="h-6 w-6 text-primary-400" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <DollarSign className="inline h-4 w-4 mr-2" />
                      Budget estimé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Délai souhaité
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre délai</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Description de votre projet *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, contraintes techniques, etc."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Demander mon devis gratuit
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Besoin d'informations complémentaires ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              N'hésitez pas à nous contacter directement pour toute question sur nos services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+33766980342"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4" />
                07 66 98 03 42
              </motion.a>
              <motion.a
                href="mailto:klyonme@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                klyonme@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Devis
