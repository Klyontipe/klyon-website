import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock3, GraduationCap, HardDrive, PhoneCall, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Offer = {
  icon: typeof HardDrive;
  name: string;
  tag: string;
  price: string;
  detail: string;
  valueNote: string;
  description: string;
  bullets: string[];
  plans?: { name: string; price: string; bullets: string[] }[];
  extraTitle?: string;
  extraText?: string;
};

const offers: Offer[] = [
  {
    icon: HardDrive,
    name: "KlySync",
    tag: "Pack NAS & synchronisation",
    price: "À partir de 590 €",
    detail: "hors matériel · périmètre cadré au devis",
    valueNote: "Pose une base NAS propre — souvent moins cher qu'un incident de perte de données.",
    description:
      "Installation d'un NAS, configuration RAID 1, synchronisation de postes, création des accès et vérification du bon fonctionnement.",
    bullets: [
      "Installation et configuration du NAS",
      "RAID 1 et structure de dossiers",
      "Synchronisation de 2 postes",
      "Tests et prise en main",
    ],
    extraTitle: "Ce que le pack couvre",
    extraText:
      "KlySync sert à poser une base de stockage et de synchronisation propre. Le pack reste ensuite adaptable selon le nombre de postes, les volumes de données et les besoins d'accès à distance.",
  },
  {
    icon: Shield,
    name: "KlyGuard",
    tag: "Forfait de maintenance",
    price: "À partir de 149 € / mois",
    detail: "selon parc et niveau de suivi",
    valueNote: "Un forfait clair plutôt que des dépannages à l'unité qui s'accumulent.",
    description:
      "Suivi récurrent, maintenance, supervision et accompagnement pour garder un parc informatique propre, stable et suivi dans la durée, de la petite structure au parc plus important.",
    bullets: [
      "Maintenance de parc informatique",
      "Suivi et vérifications régulières",
      "Support à distance",
      "Pour TPE, PME, associations et grandes structures",
    ],
    plans: [
      {
        name: "KlyGuard Essentiel",
        price: "À partir de 149 € / mois",
        bullets: [
          "Pour petite structure ou parc léger",
          "Supervision et suivi de base",
          "Support à distance",
          "Mises à jour et vérifications courantes",
        ],
      },
      {
        name: "KlyGuard Pro",
        price: "À partir de 290 € / mois",
        bullets: [
          "Pour structure active avec besoin plus suivi",
          "Maintenance plus complète",
          "Suivi sauvegardes et priorisation support",
        ],
      },
      {
        name: "KlyGuard Structure",
        price: "Sur devis ou forfait adapté",
        bullets: [
          "Pour parc important ou organisation multi-postes",
          "Cadrage selon volume, rythme et niveau d'accompagnement",
          "Possibilité de suivi récurrent plus proche du terrain",
        ],
      },
    ],
  },
  {
    icon: Clock3,
    name: "Journée d'intervention",
    tag: "Prestation ponctuelle",
    price: "À partir de 450 € / jour",
    detail: "à distance ou sur site · demi-journée possible",
    valueNote: "Une journée bien cadrée remplace souvent des semaines de contournements internes.",
    description:
      "Une journée de travail dédiée pour corriger, configurer, optimiser, déployer ou faire avancer un sujet technique concret.",
    bullets: [
      "Support, configuration, correction",
      "Optimisation, audit ou mise en place",
      "Approche souple et cadrable",
      "Idéal pour besoin urgent ou ponctuel",
    ],
    extraTitle: "Quand la choisir",
    extraText:
      "C'est le bon format quand le besoin est réel mais pas encore assez récurrent pour partir sur un forfait. Une journée permet d'avancer sérieusement sans tomber dans la micro-facturation à l'heure.",
  },
  {
    icon: PhoneCall,
    name: "Téléphonie & serveur vocal",
    tag: "Solution sur mesure",
    price: "Sur devis",
    detail: "prix affiché après cadrage du besoin réel",
    valueNote: "Pas de forfait générique : le devis part de votre usage, pas d'un package imposé.",
    description:
      "Standard vocal, routage, serveur vocal automatisé, trunks SIP, messages d'accueil et scénarios adaptés à votre organisation.",
    bullets: [
      "Routage d'appels et horaires",
      "Messagerie et notifications",
      "Softphone et trunk SIP",
      "Paramétrage selon votre usage réel",
    ],
    extraTitle: "Pourquoi sur devis",
    extraText:
      "La téléphonie dépend trop du contexte pour être vendue au forfait simple : nombre de lignes, scénarios, postes, trunks, hébergement, niveau d'automatisation et maintenance attendue.",
  },
  {
    icon: GraduationCap,
    name: "Formations sur mesure",
    tag: "Formation sur 2 jours",
    price: "À partir de 900 €",
    detail: "2 jours · contenu adapté au groupe",
    valueNote: "Deux jours pour rendre une équipe autonome — pas une formation catalogue sans suite.",
    description:
      "Formation opérationnelle sur deux jours autour de l'IA, des outils collaboratifs ou des usages numériques concrets en entreprise et en association.",
    bullets: [
      "Formation sur 2 jours",
      "ChatGPT, Copilot, Microsoft 365 ou usages cibles",
      "Contenu adapté au niveau du groupe",
      "Format présentiel ou distanciel",
    ],
    extraTitle: "Format",
    extraText:
      "L'idée n'est pas de faire une formation générique. Le contenu est ajusté au niveau du groupe, aux outils déjà utilisés et aux cas d'usage concrets à mettre en place.",
  },
];

const BrandName = ({ name }: { name: string }) => {
  if (!name.startsWith("Kly")) {
    return <span>{name}</span>;
  }

  return (
    <span>
      <span className="text-[#49A4FF]">KLY</span>
      <span>{name.slice(3)}</span>
    </span>
  );
};

type OfferPacksProps = {
  showIntro?: boolean;
  sectionId?: string;
};

const OfferPacks = ({ showIntro = true, sectionId = "offres" }: OfferPacksProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 4200);

    return () => window.clearInterval(interval);
  }, [api]);

  return (
    <section id={sectionId} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        {showIntro && (
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-primary mb-3">// 03B · OFFRES KLYON</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Des repères tarifaires, <span className="text-gradient-primary">pas une facture figée</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Les montants ci-dessous servent à se situer — pas à trancher avant d'avoir parlé. Chaque mission est cadrée au devis, gratuit et sans engagement, avant le moindre engagement.
            </p>
          </div>
        )}

        <div className="mb-10 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Devis avant engagement",
              desc: "Le prix final dépend du périmètre réel. Rien n'est facturé tant que le cadre n'est pas validé ensemble.",
            },
            {
              title: "On peut partir petit",
              desc: "Demi-journée, pack allégé ou mission ponctuelle : pas besoin de viser le forfait le plus haut dès le départ.",
            },
            {
              title: "Un prix ≠ la seule option",
              desc: "Un montant vous semble élevé ? C'est souvent le signal qu'il faut d'abord cadrer — pas abandonner.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-strong rounded-2xl border border-border/40 p-5">
              <div className="font-display font-semibold text-sm mb-2">{item.title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true, slidesToScroll: 1 }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              const isActive = current === index;
              return (
                <CarouselItem
                  key={offer.name}
                  className="pl-3 md:pl-4 basis-[88%] sm:basis-[72%] md:basis-[48%] xl:basis-[33.333%]"
                >
                <motion.button
                  type="button"
                  animate={{
                    opacity: isActive ? 1 : 0.84,
                    scale: isActive ? 1 : 0.96,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedOffer(offer)}
                  className={`group h-full w-full text-left glass-strong rounded-3xl border p-5 md:p-6 relative overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "border-primary/35 shadow-glow-soft"
                      : "border-border/30 hover:border-primary/30"
                  }`}
                >
                  <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                        {offer.tag}
                      </div>
                      <h3 className={`font-display font-bold leading-tight ${isActive ? "text-xl sm:text-2xl" : "text-lg sm:text-[1.7rem]"}`}>
                        <BrandName name={offer.name} />
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <p className="relative text-sm text-muted-foreground leading-relaxed mb-5 sm:min-h-[5rem]">
                    {offer.description}
                  </p>

                  <ul className="relative space-y-2 text-sm text-muted-foreground sm:min-h-[8rem]">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-primary">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 pt-5 border-t border-border/40 space-y-3">
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      {offer.valueNote}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-4">
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">
                          Repère indicatif
                        </div>
                        <div className="font-mono text-sm sm:text-base md:text-lg text-foreground/90 leading-none break-words">
                          {offer.price}
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground mt-1.5 break-words">{offer.detail}</div>
                      </div>
                      <span className="text-[11px] font-mono text-primary shrink-0">Cadrer ce besoin</span>
                    </div>
                  </div>
                </motion.button>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-2">
          {offers.map((offer, index) => {
            const active = current === index;
            return (
              <button
                key={offer.name}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Afficher ${offer.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  active ? "w-8 bg-primary shadow-glow-soft" : "w-2.5 bg-primary/30 hover:bg-primary/60"
                }`}
              />
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/devis"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-mono text-primary-foreground shadow-glow-soft"
          >
            Cadrer mon besoin — devis gratuit
          </Link>
          <div className="inline-flex items-center justify-center rounded-full border border-border/50 px-6 py-3 text-xs font-mono text-muted-foreground text-center">
            Repères indicatifs · le devis ajuste le périmètre et le montant réel
          </div>
        </div>

        <div className="mt-16">
          <div className="font-mono text-xs text-primary mb-4">// KLYGUARD · COMPARATIF</div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Les trois niveaux de <span className="text-gradient-primary">maintenance</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: "KlyGuard Essentiel",
                price: "À partir de 149 € / mois",
                for: "Petite structure, parc léger",
                points: ["Supervision de base", "Support à distance", "Mises à jour courantes"],
              },
              {
                name: "KlyGuard Pro",
                price: "À partir de 290 € / mois",
                for: "Structure active, besoin suivi",
                points: ["Maintenance plus complète", "Suivi sauvegardes", "Priorisation support"],
              },
              {
                name: "KlyGuard Structure",
                price: "Sur devis",
                for: "Parc important, multi-postes",
                points: ["Cadrage sur mesure", "Suivi récurrent renforcé", "Intervention terrain possible"],
              },
            ].map((plan) => (
              <div key={plan.name} className="glass-strong rounded-2xl border border-border/40 p-5">
                <div className="font-display text-lg font-semibold mb-1">
                  <BrandName name={plan.name} />
                </div>
                <div className="text-xs text-muted-foreground mb-3">{plan.for}</div>
                <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-border/40">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Repère</div>
                  <div className="font-mono text-sm text-foreground/85">{plan.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedOffer} onOpenChange={(open) => !open && setSelectedOffer(null)}>
        {selectedOffer && (
          <DialogContent className="max-w-2xl max-h-[min(92vh,820px)] overflow-y-auto rounded-3xl border border-primary/20 bg-surface-elevated text-foreground">
            <DialogHeader>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                {selectedOffer.tag}
              </div>
              <DialogTitle className="font-display text-3xl">
                <BrandName name={selectedOffer.name} />
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {selectedOffer.description}
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-2xl border border-border/40 bg-background/20 p-5">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                {selectedOffer.valueNote}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Repère indicatif · ajusté au devis
              </div>
              <div className="font-mono text-xl text-foreground/90">{selectedOffer.price}</div>
              <div className="text-xs font-mono text-muted-foreground mt-2">{selectedOffer.detail}</div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="glass rounded-2xl border border-border/40 p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">Inclus</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {selectedOffer.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl border border-border/40 p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
                  {selectedOffer.extraTitle || "Cadre"}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedOffer.extraText ||
                    "Le périmètre exact est toujours validé avant lancement pour garder une offre propre, réaliste et adaptée au besoin."}
                </p>
              </div>
            </div>

            {selectedOffer.plans && (
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Forfaits disponibles</div>
                <div className="grid gap-3">
                  {selectedOffer.plans.map((plan) => (
                    <div key={plan.name} className="glass rounded-2xl border border-border/40 p-5">
                      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-3">
                        <div className="font-display text-xl font-semibold">
                          <BrandName name={plan.name} />
                        </div>
                        <div className="font-mono text-sm text-primary">{plan.price}</div>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {plan.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-primary">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/devis"
                className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-mono text-primary-foreground shadow-glow-soft"
              >
                Cadrer ce besoin — devis gratuit
              </Link>
              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="inline-flex items-center justify-center rounded-full border border-border/50 px-6 py-3 text-sm font-mono text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                Fermer
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default OfferPacks;
