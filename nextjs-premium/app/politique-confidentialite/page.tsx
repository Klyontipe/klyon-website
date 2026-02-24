import type { Metadata } from 'next'
import Link from 'next/link'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — KLYON',
  description: 'Politique de confidentialité du site KLYON',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Politique de confidentialité"
        subtitle="Comment nous traitons vos données"
        badge="Confidentialité"
      />
      <div className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Collecte des données</h2>
            <p className="text-neutral-400 leading-relaxed">
              Les données personnelles collectées sur ce site sont limitées aux informations nécessaires 
              pour répondre à vos demandes de contact. Ces données incluent : nom, email, téléphone, entreprise, 
              sujet et message.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Utilisation des données</h2>
            <p className="text-neutral-400 leading-relaxed">
              Les données collectées sont utilisées uniquement pour répondre à vos demandes de contact 
              et pour vous fournir les services demandés. Elles ne sont en aucun cas vendues ou transmises 
              à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Conservation des données</h2>
            <p className="text-neutral-400 leading-relaxed">
              Les données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
              elles ont été collectées, conformément aux obligations légales.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Vos droits</h2>
            <p className="text-neutral-400 leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, 
              de limitation du traitement, de portabilité et d'opposition aux données personnelles vous concernant. 
              Pour exercer ces droits, contactez-nous à l'adresse : klyonme@gmail.com
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Cookies</h2>
            <p className="text-neutral-400 leading-relaxed">
              Ce site n'utilise pas de cookies de tracking. Seuls les cookies techniques nécessaires au 
              fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <p className="text-center">
            <Link href="/" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Retour à l'accueil
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
