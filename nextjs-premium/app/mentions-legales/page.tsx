import type { Metadata } from 'next'
import Link from 'next/link'
import PageBackground from '@/components/PageBackground'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Mentions légales — KLYON',
  description: 'Mentions légales du site KLYON',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen relative" style={{ background: '#0f0f0f' }}>
      <PageBackground />
      <PageHero
        title="Mentions légales"
        subtitle="Informations légales du site KLYON"
        badge="Légal"
      />
      <div className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Éditeur du site</h2>
            <p className="text-neutral-400 leading-relaxed">
              <strong className="text-neutral-200">KLYON</strong><br />
              Microentreprise<br />
              SIRET : [À compléter]<br />
              Email : klyonme@gmail.com<br />
              Téléphone : 07 66 98 03 42
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Directeur de publication</h2>
            <p className="text-neutral-400 leading-relaxed">
              Lorenzo Fortini
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Hébergement</h2>
            <p className="text-neutral-400 leading-relaxed">
              [À compléter avec les informations de votre hébergeur]
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Propriété intellectuelle</h2>
            <p className="text-neutral-400 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section className="mb-10 p-6 rounded-2xl glass-dark border border-amber-400/20">
            <h2 className="text-xl font-semibold text-neutral-100 mb-4">Protection des données personnelles</h2>
            <p className="text-neutral-400 leading-relaxed">
              Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général 
              sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression 
              et d'opposition aux données personnelles vous concernant.
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
