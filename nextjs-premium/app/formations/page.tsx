import type { Metadata } from 'next'
import FormationsPageContent from '@/components/FormationsPageContent'

export const metadata: Metadata = {
  title: 'Formations — KLYON',
  description: 'Formations professionnelles en IA/ChatGPT, Microsoft 365, SharePoint et automatisation. Niveaux débutant, expérimenté et expert. Format hybride.',
}

export default function FormationsPage() {
  return <FormationsPageContent />
}
