import type { Metadata } from 'next'
import RealisationsPageContent from '@/components/RealisationsPageContent'

export const metadata: Metadata = {
  title: 'Réalisations — KLYON',
  description: 'Découvrez nos réalisations avec TPE, PME, associations et particuliers. Projets réussis avec résultats mesurables.',
}

export default function RealisationsPage() {
  return <RealisationsPageContent />
}
