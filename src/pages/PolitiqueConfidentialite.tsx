import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section } from "@/components/PageBlocks";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Seo
        title="Politique de confidentialité — Klyon"
        description="Politique de confidentialité du site Klyon: données collectées, finalités, conservation et contact pour exercer vos droits."
        path="/politique-confidentialite"
      />
      <PageLayout
        eyebrow="// DONNÉES PERSONNELLES"
        title={<>Politique de <span className="text-gradient-primary">confidentialité</span></>}
        subtitle="Utilisation des données transmises via le site Klyon."
      >
      <Section>
        <div className="max-w-3xl space-y-8">
          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Données collectées</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorsque vous utilisez les formulaires du site, Klyon peut recevoir les informations que vous choisissez de transmettre, notamment votre nom, votre email, votre téléphone, votre société, votre message et les éléments utiles au traitement de votre demande.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Finalités</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ces données sont utilisées pour répondre à vos messages, traiter une demande de contact ou de devis, assurer le suivi commercial et échanger avec vous autour de la mission demandée.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Transmission et outils</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le site utilise actuellement EmailJS pour transmettre les formulaires envoyés via le front-end. Les données sont donc traitées dans le cadre de cet envoi technique afin d'acheminer votre message vers l'adresse de contact de Klyon.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Durée de conservation</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les informations reçues sont conservées pendant le temps nécessaire au traitement de votre demande, au suivi des échanges et, si besoin, à la relation commerciale qui peut en découler.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Vos droits</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à <span className="text-foreground">klyonme@gmail.com</span>.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Responsable du traitement</h2>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p><span className="text-foreground">KLYON</span></p>
              <p><span className="text-foreground">Responsable :</span> Lorenzo FORTINI</p>
              <p><span className="text-foreground">SIRET :</span> 93535072800017</p>
              <p><span className="text-foreground">Localisation :</span> Allauch, France</p>
              <p><span className="text-foreground">Contact :</span> klyonme@gmail.com</p>
            </div>
          </div>
        </div>
      </Section>
      </PageLayout>
    </>
  );
};

export default PolitiqueConfidentialite;
