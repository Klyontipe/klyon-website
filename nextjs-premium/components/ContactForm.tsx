'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Building, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const subjects = [
    'Formation Intelligence Artificielle & ChatGPT',
    'Formation Microsoft 365',
    'Développement Web',
    'Automatisation',
    'Autre'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
            Nom complet *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all glass-soft"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all glass-soft"
              placeholder="votre@email.com"
            />
          </div>
        </div>
      </div>

      {/* Company and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
            Entreprise
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all glass-soft"
              placeholder="Nom de l'entreprise"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
            Téléphone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all glass-soft"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
          Sujet *
        </label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all glass-soft"
        >
          <option value="">Sélectionnez un sujet</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-400/30 bg-neutral-900 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all resize-none glass-soft"
            placeholder="Décrivez votre projet en détail..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-xl font-medium transition-all duration-200 shadow-soft-lg ${
          isSubmitting
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:from-amber-500 hover:to-amber-600 hover:shadow-soft-xl'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Envoyer le message
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800"
        >
          <CheckCircle className="h-5 w-5" />
          <p className="text-sm">Message envoyé avec succès ! Je vous répondrai rapidement.</p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800"
        >
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.</p>
        </motion.div>
      )}
    </form>
  )
}
