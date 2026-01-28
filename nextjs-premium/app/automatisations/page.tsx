import type { Metadata } from 'next'
import AutomatisationsPageContent from '@/components/AutomatisationsPageContent'

export const metadata: Metadata = {
  title: 'Automatisations — KLYON',
  description: 'Automatisation de processus avec Zapier, N8N et scripts sur mesure. Gain de temps garanti avec ROI mesurable.',
}

export default function AutomatisationsPage() {
  return <AutomatisationsPageContent />
}
