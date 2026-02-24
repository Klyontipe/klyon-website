import type { Metadata } from 'next'
import HeroModern from '@/components/HeroModern'
import ServicesSectionSimple from '@/components/ServicesSectionSimple'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'KLYON — Logiciels sur mesure & automatisation',
  description: 'Consultant informatique confirmé spécialisé en développement logiciel sur mesure, automatisation de processus et intégration IA. Missions courtes ou longues dans les Bouches-du-Rhône.',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedSection delay={0.2}>
        <HeroModern />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <ServicesSectionSimple />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={1.0}>
        <ContactSection />
      </AnimatedSection>
    </div>
  )
}
