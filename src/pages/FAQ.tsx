import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Faq, PageCTA, Section } from "@/components/PageBlocks";

const FAQ = () => (
  <>
    <Seo
      title="FAQ Klyon — questions fréquentes"
      description="Délais, devis, déplacements, maintenance, automatisations, IA, services informatiques et infrastructure: les réponses aux questions fréquentes."
      path="/faq"
    />
    <PageLayout
      eyebrow="// FAQ · KLYON"
      title={<>Questions <span className="text-gradient-primary">fréquentes</span></>}
      subtitle="Une zone unique pour répondre aux questions récurrentes, au lieu de les répéter partout dans le site."
    >
      <Section eyebrow="// cadrage" title={<>Avant de <span className="text-gradient-primary">commencer</span></>}>
        <Faq
          items={[
            { q: "Comment se passe un premier contact ?", a: "On part du besoin réel, même s'il n'est pas encore bien formulé. L'objectif est d'éclaircir le contexte, le périmètre et la bonne direction." },
            { q: "Travaillez-vous uniquement dans le Sud ?", a: "Klyon est basé à Allauch, intervient dans le Sud et peut aussi travailler à distance partout en France, avec déplacement possible selon la mission." },
            { q: "Faites-vous du ponctuel et du récurrent ?", a: "Oui. Certaines missions relèvent d'un besoin ponctuel, d'autres d'un forfait de maintenance ou d'un accompagnement suivi." },
          ]}
        />
      </Section>

      <Section eyebrow="// production" title={<>Services & <span className="text-gradient-primary">livraison</span></>}>
        <Faq
          items={[
            { q: "Quel est le délai d'un développement ?", a: "Cela dépend du périmètre. Une base simple peut aller vite, une application plus complète demande un cadrage et un planning plus structurés." },
            { q: "Une automatisation est-elle modifiable ensuite ?", a: "Oui. Les workflows peuvent évoluer, être renforcés ou élargis une fois les premiers usages validés." },
            { q: "Pouvez-vous gérer du support informatique classique ?", a: "Oui. Services informatiques, maintenance, dépannage, installation, postes de travail et accompagnement utilisateur font partie du périmètre." },
            { q: "Proposez-vous aussi de l'infrastructure ?", a: "Oui. NAS, sauvegardes, synchronisation, serveurs, DNS, téléphonie et briques techniques internes peuvent être pris en charge." },
          ]}
        />
      </Section>

      <Section eyebrow="// ia" title={<>IA & <span className="text-gradient-primary">formation</span></>}>
        <Faq
          items={[
            { q: "Pourquoi l'IA a-t-elle sa propre page ?", a: "Parce que le sujet est large: intégration d'outils, assistants, usages internes, formations, automatisations enrichies par l'IA et accompagnement des équipes." },
            { q: "Faites-vous des formations sur mesure ?", a: "Oui, avec adaptation au niveau du groupe, aux outils déjà utilisés et aux cas d'usage réels." },
            { q: "Travaillez-vous seulement avec ChatGPT ?", a: "Non. Klyon touche aussi Claude, Gemini, Grok, Copilot et d'autres outils selon les besoins." },
          ]}
        />
      </Section>

      <Section eyebrow="// offres" title={<>Offres & <span className="text-gradient-primary">tarification</span></>}>
        <Faq
          items={[
            { q: "Un prix affiché me semble trop élevé, que faire ?", a: "C'est justement pour ça que les montants sont des repères, pas des factures. On peut réduire le périmètre, partir sur une demi-journée, un pack allégé ou une autre formule. Le devis gratuit sert à trouver le bon niveau — pas à vous imposer le chiffre le plus haut." },
            { q: "Pourquoi certaines offres ont un prix et d'autres sont sur devis ?", a: "Parce que certains périmètres sont packagés alors que d'autres dépendent trop du contexte pour afficher un prix honnête sans cadrage." },
            { q: "KlyGuard correspond à quoi ?", a: "À une logique de maintenance et de suivi récurrent, ajustée selon la taille du parc, le niveau de suivi et la fréquence nécessaire." },
            { q: "Puis-je partir d'un besoin simple sans savoir quelle offre choisir ?", a: "Oui. Le devis sert justement à partir du terrain réel, pas d'un choix théorique dans une liste." },
            { q: "Le devis est-il gratuit ?", a: "Oui. Le premier cadrage et le devis sont sans engagement. L'objectif est de proposer une réponse utile, pas une formule générique." },
            { q: "Quel est le délai de réponse ?", a: "En général sous 24 h ouvrées pour un premier retour après votre message ou votre demande de devis." },
          ]}
        />
      </Section>

      <PageCTA title="Une question reste floue ?" desc="Le plus simple reste de la poser directement dans le formulaire: Klyon répond ensuite avec un cadrage utile, pas avec une formule générique." />
    </PageLayout>
  </>
);

export default FAQ;
