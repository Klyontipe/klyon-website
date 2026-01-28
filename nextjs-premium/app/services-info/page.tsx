import type { Metadata } from 'next'
import ServicesInfoPageContent from '@/components/ServicesInfoPageContent'

export const metadata: Metadata = {
  title: 'Services Informatiques — KLYON',
  description: 'Montage PC sur mesure, installation systèmes d\'exploitation, suites Office, support technique. Services informatiques dans les Bouches-du-Rhône.',
}

export default function ServicesInfoPage() {
  return <ServicesInfoPageContent />
}
