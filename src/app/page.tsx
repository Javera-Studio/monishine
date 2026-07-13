import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/home/Hero";
import Treatments from "@/components/home/Treatments";
import BrandPhilosophy from "@/components/home/BrandPhilosophy";
import About from "@/components/home/About";
import Academy from "@/components/home/Academy";
import Testimonials from "@/components/home/Testimonials";
import Booking from "@/components/home/Booking";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqs = [
  { q: "Wie lange hält ein Brow Lifting?", a: "Ein Brow Lifting hält in der Regel 4 bis 8 Wochen, abhängig von deinem Haarwachstum und deiner Pflege. Für dauerhaft schöne Ergebnisse empfehlen wir regelmäßige Auffrischungen." },
  { q: "Was ist der Unterschied zwischen Lash Lifting und Lash Extensions?", a: "Beim Lash Lifting werden deine natürlichen Wimpern angehoben und optisch verlängert. Lash Extensions hingegen werden einzeln auf die Naturwimpern appliziert und sorgen für mehr Länge, Dichte und Ausdruck." },
  { q: "Ist Permanent Make-up schmerzhaft?", a: "Jeder Mensch empfindet Schmerzen unterschiedlich. Die meisten Kundinnen beschreiben die Behandlung als gut erträglich. Vor der Behandlung wird die Haut vorbereitet, damit du dich möglichst wohlfühlst." },
  { q: "Wie lange hält Permanent Make-up?", a: "Je nach Hauttyp, Stoffwechsel und Pflege hält Permanent Make-up meist zwischen 1 und 3 Jahren. Regelmäßige Refresh-Termine helfen dabei, die Farbe dauerhaft schön zu erhalten." },
  { q: "Wie buche ich einen Termin?", a: "Du kannst deinen Termin ganz einfach online, über WhatsApp oder direkt telefonisch vereinbaren. Falls du unsicher bist, welche Behandlung zu dir passt, beraten wir dich gerne persönlich." },
  { q: "Ist Monishine auch für Männer geeignet?", a: "Ja. Viele unserer Behandlungen wie Brow Styling, Gesichtsbehandlungen oder Laserbehandlungen werden regelmäßig von Männern gebucht. Wir legen Wert auf eine entspannte Atmosphäre, persönliche Beratung und natürliche Ergebnisse." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": ["BeautySalon", "LocalBusiness"],
      name: "Monishine",
      image: "https://monishine.vercel.app/images/IMG_0578.jpeg",
      url: "https://monishine.vercel.app/",
      telephone: "+4917624050812",
      email: "monishine@outlook.de",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bramfelder Straße 77",
        postalCode: "22305",
        addressLocality: "Hamburg",
        addressCountry: "DE",
      },
      sameAs: [
        "https://www.instagram.com/monishine_/",
        "https://www.tiktok.com/@monishiine",
        "https://www.facebook.com/p/Monishine-100031308979177/",
      ],
    },
    {
      "@type": "Service",
      serviceType: "Brows & Lashes, Permanent Make-up, Gesichtsbehandlungen, Haarentfernung",
      provider: { "@type": "BeautySalon", name: "Monishine" },
      areaServed: "Hamburg",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Saskia" },
      reviewBody:
        "Moni ist einfach großartig! Meine Wimpern sehen traumhaft aus — perfekt geformt, leicht und trotzdem ausdrucksstark.",
      itemReviewed: { "@type": "BeautySalon", name: "Monishine" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteLayout>
        <Hero />
        <Treatments />
        <BrandPhilosophy />
        <About />
        <Academy />
        <Testimonials />
        <Faq />
        <Booking />
      </SiteLayout>
    </>
  );
}
