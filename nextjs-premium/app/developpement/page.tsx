import type { Metadata } from 'next'
import DeveloppementPageContent from '@/components/DeveloppementPageContent'

export const metadata: Metadata = {
  title: 'Développement — KLYON',
  description: 'Développement web, mobile et desktop. Applications fonctionnelles et élégantes avec React, Python, JavaScript et plus.',
}

export default function DeveloppementPage() {
  return <DeveloppementPageContent />
}
