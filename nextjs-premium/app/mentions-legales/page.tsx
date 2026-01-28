import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — KLYON',
  description: 'Mentions légales du site KLYON',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Mentions légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Éditeur du site</h2>
          <p className="text-neutral-700">
            <strong>KLYON</strong><br />
            Microentreprise<br />
            SIRET : [À compléter]<br />
            Email : klyonme@gmail.com<br />
            Téléphone : 07 66 98 03 42
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Directeur de publication</h2>
          <p className="text-neutral-700">
            Lorenzo Fortini
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Hébergement</h2>
          <p className="text-neutral-700">
            [À compléter avec les informations de votre hébergeur]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Propriété intellectuelle</h2>
          <p className="text-neutral-700">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
            et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
            documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Protection des données personnelles</h2>
          <p className="text-neutral-700">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général 
            sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression 
            et d'opposition aux données personnelles vous concernant.
          </p>
        </section>
      </div>
    </div>
  )
}
