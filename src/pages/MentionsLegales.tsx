import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section } from "@/components/PageBlocks";

const MentionsLegales = () => {
  return (
    <>
      <Seo
        title="Mentions légales — Klyon"
        description="Mentions légales du site Klyon: éditeur, responsable, SIRET, contact et informations générales."
        path="/mentions-legales"
      />
      <PageLayout
        eyebrow="// INFORMATIONS LÉGALES"
        title={<>Mentions <span className="text-gradient-primary">légales</span></>}
        subtitle="Informations d'identification et de contact du site Klyon."
      >
      <Section>
        <div className="max-w-3xl space-y-8">
          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Éditeur du site</h2>
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p><span className="text-foreground">Nom commercial :</span> KLYON</p>
              <p><span className="text-foreground">Responsable :</span> Lorenzo FORTINI</p>
              <p><span className="text-foreground">SIRET :</span> 93535072800017</p>
              <p><span className="text-foreground">Origine / localisation :</span> Allauch, France</p>
              <p><span className="text-foreground">Email :</span> klyonme@gmail.com</p>
            </div>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Activité</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Klyon propose des prestations informatiques, notamment en intelligence artificielle, développement sur mesure, automatisation, support technique, maintenance, hébergement et accompagnement numérique.
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hébergeur : OVH SAS — 2 rue Kellermann, 59100 Roubaix, France —{" "}
              <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                ovh.com
              </a>
            </p>
          </div>

          <div className="glass-strong rounded-2xl border border-border/40 p-6">
            <h2 className="font-display text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les contenus présents sur ce site, sauf mention contraire, sont exploités par Klyon. Toute reproduction, diffusion ou réutilisation non autorisée peut être interdite.
            </p>
          </div>
        </div>
      </Section>
      </PageLayout>
    </>
  );
};

export default MentionsLegales;
