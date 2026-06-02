import type { Treatment } from "./types";
import skinImg from "@/assets/treatment-skin.jpg";
import antiagingImg from "@/assets/treatment-antiaging.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import facialImg from "@/assets/gesichtsbehandlung.jpg";
import pmuImg from "@/assets/treatment-pmu.jpg";

export const treatments: Treatment[] = [
  {
    id: "hautverbesserung",
    slug: "problemhaut",
    order: 1,
    title: "Hautverbesserung",
    description:
      "Individuelle Behandlung für ein klareres, ebenmäßigeres Hautbild — abgestimmt auf deine Haut.",
    duration: "60 Min",
    price: "ab € 96",
    image: skinImg,
    href: "/leistungen/problemhaut",
    category: "Skin",
  },
  {
    id: "anti-aging",
    slug: "anti-aging",
    order: 2,
    title: "Anti Aging",
    description:
      "Sanfte Wirkstofftherapie für straffe, vitale Haut — natürlich und altersgerecht.",
    duration: "75 Min",
    price: "ab € 120",
    image: antiagingImg,
    href: "/leistungen/anti-aging",
    category: "Skin",
  },
  {
    id: "fruchtsaeure",
    slug: "fruchtsaeure",
    order: 3,
    title: "Fruchtsäure",
    description:
      "Erneuert die Haut und verfeinert das Hautbild sichtbar — mit dezentem Glow-Effekt.",
    duration: "30 Min",
    price: "ab € 92",
    image: fruchtImg,
    href: "/leistungen/fruchtsaeure",
    category: "Skin",
  },
  {
    id: "microneedling",
    slug: "microneedling",
    order: 4,
    title: "Microneedling",
    description:
      "Aktiviert Kollagen und Hauterneuerung — Glow, Spannkraft und Frische von innen.",
    duration: "60 Min",
    price: "ab € 136",
    image: needlingImg,
    href: "/leistungen/microneedling",
    category: "Skin",
  },
  {
    id: "klassische-behandlung",
    slug: "gesichtsbehandlung",
    order: 5,
    title: "Klassische Behandlung",
    description:
      "Ruhige, gründliche Pflege für jede Hautsituation — der Klassiker, neu interpretiert.",
    duration: "60 Min",
    price: "ab € 72",
    image: facialImg,
    href: "/leistungen/gesichtsbehandlung",
    category: "Skin",
  },
  {
    id: "microblading",
    slug: "microblading",
    order: 6,
    title: "Microblading / PMU",
    description:
      "Definierte, natürliche Augenbrauen mit feinster Präzision — handwerklich gestaltet.",
    duration: "120 Min",
    price: "ab € 345",
    image: pmuImg,
    href: "/leistungen/microblading",
    category: "Brows",
  },
];
