import type { Metadata } from 'next'
import Hero3D from '@/components/Hero3D'
import ServicesSectionSimple from '@/components/ServicesSectionSimple'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'KLYON — Logiciels sur mesure & automatisation',
  description: 'Consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA. Missions courtes ou longues dans les Bouches-du-Rhône.',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero3D />
      <ServicesSectionSimple />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
