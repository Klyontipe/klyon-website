import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ServicesList from '@/components/ServicesList'

export const metadata: Metadata = {
  title: 'Services — KLYON',
  description: 'Formations IA & ChatGPT, Microsoft 365, développement logiciel sur mesure, automatisation & intégrations. Solutions professionnelles pour entreprises.',
}

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Des solutions professionnelles adaptées à vos besoins spécifiques
          </p>
        </AnimatedSection>

        <ServicesList />
      </div>
    </div>
  )
}
