import OfferPacks from "@/components/OfferPacks";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";

const Offres = () => (
  <>
    <Seo
      title="Offres Klyon — packs et bases tarifaires"
      description="Découvrez les offres Klyon: KlySync, KlyGuard, journées d'intervention, formations sur mesure et solutions techniques sur devis."
      path="/offres"
    />
    <PageLayout
      eyebrow="// OFFRES · KLYON"
      title={<>Des offres <span className="text-gradient-primary">lisibles</span></>}
      subtitle="Des repères pour se situer, pas des prix figés. Chaque offre se cadrera au devis — gratuit et sans engagement — avant toute facturation."
    >
      <OfferPacks showIntro={false} sectionId="catalogue-offres" />
    </PageLayout>
  </>
);

export default Offres;
