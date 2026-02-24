import type { Metadata } from 'next'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'
import ServicesList from '@/components/ServicesList'

export const metadata: Metadata = {
  title: 'Services — KLYON',
  description: 'Formations IA & ChatGPT, Microsoft 365, développement logiciel sur mesure, automatisation & intégrations. Solutions professionnelles pour entreprises.',
  openGraph: {
    title: 'Services — KLYON',
    description:
      'Formations IA & ChatGPT, Microsoft 365, développement logiciel sur mesure, automatisation & intégrations. Solutions professionnelles pour entreprises.',
    url: 'https://klyon.fr/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Services"
        subtitle="Des solutions professionnelles adaptées à vos besoins spécifiques"
        badge="Nos services"
        ctaLabel="Nous contacter"
        ctaHref="/contact"
      />
      <div className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ServicesList />
        </div>
      </div>
    </div>
  )
}
