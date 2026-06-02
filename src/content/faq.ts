import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    slug: "wie-buche-ich-einen-termin",
    order: 1,
    category: "Allgemein",
    question: "Wie buche ich einen Termin?",
    answer:
      "Am schnellsten per WhatsApp oder über das Kontaktformular. Wir melden uns persönlich und finden einen passenden Termin.",
  },
  {
    id: "faq-2",
    slug: "richtet-sich-das-studio-an-frauen-und-maenner",
    order: 2,
    category: "Allgemein",
    question: "Richtet sich Monishine an Frauen und Männer?",
    answer:
      "Ja. Unsere Treatments und die Beratung sind für jede Haut konzipiert — unabhängig vom Geschlecht.",
  },
  {
    id: "faq-3",
    slug: "muss-ich-mich-auf-die-behandlung-vorbereiten",
    order: 3,
    category: "Treatments",
    question: "Muss ich mich auf die Behandlung vorbereiten?",
    answer:
      "Vor der ersten Behandlung empfehlen wir eine kurze Hautanalyse. Du erhältst danach klare Hinweise für die Vor- und Nachsorge.",
  },
];
