import { createContext, useContext, useState } from 'react'
import emailjs from 'emailjs-com'

const ContactContext = createContext()

export const useContact = () => {
  const context = useContext(ContactContext)
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider')
  }
  return context
}

export const ContactProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  const sendEmail = async (formData) => {
    setIsSubmitting(true)
    
    try {
      const result = await emailjs.send(
        'service_lb38ewo',
        'template_2af96ws',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          company: formData.company || '',
          service_type: formData.service,
          budget: formData.budget || '',
          timeline: formData.timeline || '',
          message: formData.message,
          to_email: 'klyonme@gmail.com'
        },
        'ZJMuCYNkzxGhqore6'
      )
      
      console.log('Email sent successfully:', result)
      showNotification('Message envoyé avec succès !', 'success')
      
      // Google Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_success', {
          'event_category': 'engagement',
          'event_label': 'contact_form'
        })
      }
      
      return { success: true }
    } catch (error) {
      console.error('Email sending failed:', error)
      showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error')
      
      // Google Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_error', {
          'event_category': 'engagement',
          'event_label': 'contact_form'
        })
      }
      
      return { success: false, error }
    } finally {
      setIsSubmitting(false)
    }
  }

  const value = {
    isSubmitting,
    notification,
    sendEmail,
    showNotification
  }

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  )
}
