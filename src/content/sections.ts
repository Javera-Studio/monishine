import type { EditableSection } from "./types";

/**
 * Editable copy blocks keyed by a stable identifier. Components fetch the
 * block they need via cms.section("<key>"). Default values live here so the
 * site renders without a CMS connection; once Notion is wired up the same
 * keys can be overridden remotely.
 */
export const sections: EditableSection[] = [
  {
    id: "hero",
    slug: "hero",
    key: "hero",
    eyebrow: "Premium Beauty & Glow Studio · Hamburg",
    title:
      "Eine Beauty-Routine, die deine natürliche Schönheit unterstreicht.",
    body:
      "Bei Monishine verbinden wir moderne Treatments mit warmer, persönlicher Betreuung — für ein Ergebnis, das sich genauso gut anfühlt wie es aussieht.",
    ctaLabel: "Termin buchen",
    ctaHref: "/kontakt",
  },
  {
    id: "about-intro",
    slug: "about-intro",
    key: "about-intro",
    eyebrow: "Über uns",
    title: "Beauty ist für uns persönlich.",
    body:
      "Wir nehmen uns bewusst Zeit für jeden Menschen und jede Haut — für ein Ergebnis, das natürlich wirkt und sich richtig anfühlt.",
  },
];
