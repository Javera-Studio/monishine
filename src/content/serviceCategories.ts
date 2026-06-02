import type { ServiceCategory } from "./types";
import imgBrows from "@/assets/haut1.jpg";
import imgLashExt from "@/assets/lashes.jpg";
import imgPmu from "@/assets/treatment-pmu.jpg";
import imgPmuRemoval from "@/assets/neue.jpg";
import imgFacial from "@/assets/gesichtsbehandlung.jpg";
import imgLaser from "@/assets/treatment-skin.jpg";
import imgBody from "@/assets/bodytreatment.jpg";
import imgFineline from "@/assets/fineline.jpg";
import imgSchulung from "@/assets/schulung3.jpg";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "brows-lash-styling",
    slug: "brows-lash-styling",
    order: 1,
    title: "Brows & Lash Styling",
    tagline: "Brow Lifting · Lash Lifting · Styling",
    description:
      "Definierte Brauen, ein offener Wimpernblick und gepflegtes Styling — für deinen natürlichen Augenausdruck.",
    image: imgBrows,
    group: "Brows & Lashes",
    treatments: [
      { name: "Brow Lifting", description: "Geliftete, voller wirkende Augenbrauen mit weichem Finish.", duration: "45 Min", price: "ab € 55" },
      { name: "Lash Lifting", description: "Sanft geschwungene Wimpern für einen offenen Blick.", duration: "60 Min", price: "ab € 65" },
      { name: "Brow Styling", description: "Form, Linie und Symmetrie — individuell modelliert.", duration: "30 Min", price: "ab € 35" },
      { name: "Browshine", description: "Glow-Finish und Pflege für gepflegte, glänzende Brauen.", duration: "30 Min", price: "ab € 40" },
      { name: "Tinting", description: "Brauen- und Wimpernfärbung in natürlichen Nuancen.", duration: "20 Min", price: "ab € 20" },
      { name: "Glow Combo Treatments", description: "Lash Lift + Brow Styling + Tinting — das Komplettpaket.", duration: "90 Min", price: "ab € 120" },
    ],
  },
  {
    id: "lash-extensions",
    slug: "lash-extensions",
    order: 2,
    title: "Lash Extensions",
    tagline: "Classic · Volume · Wispy · Refill",
    description:
      "Hochwertige Wimpernverlängerungen für jeden Look — von natürlich bis ausdrucksstark, präzise und mit Liebe zum Detail.",
    image: imgLashExt,
    group: "Brows & Lashes",
    treatments: [
      { name: "Classic Lashes", description: "Wimpernverlängerung 1:1 für einen natürlichen, gepflegten Look.", duration: "120 Min", price: "ab € 110" },
      { name: "Volume Lashes", description: "Mehrere feine Wimpern pro Naturwimper — voller, weicher Effekt.", duration: "150 Min", price: "ab € 140" },
      { name: "Wispy Lashes", description: "Spikey, luftiger Look mit ausdrucksstarkem Finish.", duration: "150 Min", price: "ab € 150" },
      { name: "Refill Treatments", description: "Auffüllen nach 2–3 Wochen für konstante Fülle.", duration: "60–90 Min", price: "ab € 55" },
    ],
  },
  {
    id: "permanent-make-up",
    slug: "permanent-make-up",
    order: 3,
    title: "Permanent Make-up",
    tagline: "Powder Brows · Lip Blush · Refresh",
    description:
      "Langanhaltende, natürlich wirkende PMU-Techniken für Brauen und Lippen — inklusive Korrekturen und Auffrischungen.",
    image: imgPmu,
    group: "PMU",
    treatments: [
      { name: "Powder Brows", description: "Weich schattierte Brauen mit Puder-Finish.", duration: "150 Min", price: "ab € 390" },
      { name: "Lip Blush", description: "Sanfte Lippenpigmentierung für ein frisches, gleichmäßiges Lippenbild.", duration: "150 Min", price: "ab € 420" },
      { name: "PMU Treatments", description: "Individuelle PMU-Behandlungen nach persönlicher Beratung.", duration: "ab 120 Min", price: "auf Anfrage" },
      { name: "Refresh Sessions", description: "Auffrischung bestehender PMU-Arbeiten innerhalb 18 Monaten.", duration: "90 Min", price: "ab € 180" },
      { name: "Corrections", description: "Korrektur und Optimierung bestehender Pigmentierungen.", duration: "ab 90 Min", price: "auf Anfrage" },
    ],
  },
  {
    id: "pmu-removal",
    slug: "pmu-removal",
    order: 4,
    title: "PMU Removal",
    tagline: "Removal · Correction Sessions",
    description:
      "Sanfte, schrittweise Entfernung und Korrektur von Permanent Make-up — mit modernem Remover-Verfahren.",
    image: imgPmuRemoval,
    group: "PMU",
    treatments: [
      { name: "PMU Removal Treatments", description: "Schrittweise Entfernung mit modernem Remover-Verfahren.", duration: "60 Min", price: "ab € 95" },
      { name: "Correction / Removal Sessions", description: "Kombinierte Sitzungen für gezielte Korrekturen.", duration: "60–90 Min", price: "ab € 120" },
    ],
  },
  {
    id: "gesichtsbehandlungen",
    slug: "gesichtsbehandlungen",
    order: 5,
    title: "Gesichtsbehandlungen",
    tagline: "Facials · Glow · Skin",
    description:
      "Moderne Gesichtsbehandlungen für strahlende, gesunde Haut — von Tiefenreinigung bis Glow.",
    image: imgFacial,
    group: "Skin",
    treatments: [
      { name: "Aquafacial", description: "Tiefenreinigung, Peeling und Hydration in einem Treatment.", duration: "60 Min", price: "ab € 95" },
      { name: "BB Glow", description: "Ebenmäßiger Teint mit sofortigem Glow-Effekt.", duration: "75 Min", price: "ab € 130" },
      { name: "Microneedling", description: "Aktiviert Kollagen für straffe, frische Haut.", duration: "60 Min", price: "ab € 140" },
      { name: "Tiefenreinigung", description: "Klassische, gründliche Reinigung — der Hautreset.", duration: "60 Min", price: "ab € 80" },
      { name: "Glow Treatments", description: "Soforteffekt-Treatments für besondere Anlässe.", duration: "45 Min", price: "ab € 75" },
      { name: "Skin Treatments", description: "Individuelle Wirkstoff-Treatments nach Hautanalyse.", duration: "60 Min", price: "ab € 90" },
    ],
  },
  {
    id: "haarentfernung",
    slug: "haarentfernung",
    order: 6,
    title: "Dauerhafte Haarentfernung",
    tagline: "ICE Diodenlaser · Ladies & Gentlemen",
    description:
      "Schmerzarme, dauerhafte Haarentfernung mit modernster ICE-Diodenlaser-Technologie.",
    image: imgLaser,
    group: "Laser",
    treatments: [
      { name: "ICE Diodenlaser", description: "Hochwirksam, sanft, geeignet für alle Hauttypen.", duration: "Variabel", price: "ab € 49" },
      { name: "Ladies Treatments", description: "Behandlungen für Damen — Gesicht & Körperzonen.", duration: "Variabel", price: "ab € 39" },
      { name: "Gentleman Treatments", description: "Behandlungen für Herren — Rücken, Brust, Bart & mehr.", duration: "Variabel", price: "ab € 59" },
      { name: "Laser Packages", description: "Vergünstigte Behandlungspakete (6–8 Sitzungen).", duration: "Variabel", price: "auf Anfrage" },
      { name: "Body Area Treatments", description: "Gezielte Körperareale — individuell zusammengestellt.", duration: "Variabel", price: "auf Anfrage" },
    ],
  },
  {
    id: "koerperbehandlungen",
    slug: "koerperbehandlungen",
    order: 7,
    title: "Körperbehandlungen",
    tagline: "Body Care & Glow",
    description:
      "Wohltuende Körperbehandlungen für gepflegte, strahlende Haut von Kopf bis Fuß.",
    image: imgBody,
    group: "Body",
    treatments: [
      { name: "Body Treatments", description: "Pflegende, straffende Behandlungen für den Körper.", duration: "60 Min", price: "ab € 95" },
      { name: "Body Glow Treatments", description: "Peeling, Pflege und Glow-Finish — der Body-Reset.", duration: "75 Min", price: "ab € 120" },
    ],
  },
  {
    id: "fineline-tattoo",
    slug: "fineline-tattoo",
    order: 8,
    title: "Fineline Tattoo",
    tagline: "Delicate Fineline Art",
    description:
      "Filigrane Fineline Tattoos — minimalistisch, elegant und individuell gestaltet.",
    image: imgFineline,
    group: "Art",
    treatments: [
      { name: "Fineline Tattoo Services", description: "Individuelle Motivgestaltung und Stechen in Fineline-Technik.", duration: "ab 60 Min", price: "ab € 150" },
    ],
  },
  {
    id: "lash-schulungen",
    slug: "lash-schulungen",
    href: "/schulungen",
    order: 9,
    title: "Lash Extension Schulungen",
    tagline: "Academy · Training · Praxisnah",
    description:
      "Professionelle Lash Extension Schulungen in persönlicher Studioatmosphäre — für Anfängerinnen und erfahrene Artists.",
    image: imgSchulung,
    group: "Academy",
    treatments: [],
  },
];
