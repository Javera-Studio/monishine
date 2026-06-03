import { Star } from "lucide-react";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const BG        = "#BCA998";
const CARD_BG   = "#C9B8A8";
const TEXT      = "#F7F3EE";
const TEXT_MUTED = "rgba(247,243,238,0.62)";
const TEXT_DIM  = "rgba(247,243,238,0.38)";
const GOLD      = "#D8B98A";
const BORDER    = "rgba(247,243,238,0.10)";
const STAR_COLOR = "#C9A66B";
const TREATWELL = "https://buchung.treatwell.de/ort/monishine/";

const reviews = [
  {
    quote: "Moni ist einfach großartig! 💕 Meine Wimpern sehen traumhaft aus — perfekt geformt, leicht und trotzdem ausdrucksstark. Man merkt sofort, wie viel Liebe sie in ihre Arbeit steckt. Ich habe mich rundum wohlgefühlt und komme definitiv wieder.",
    name: "Saskia",
    treatment: "Wimpernverlängerung",
  },
  {
    quote: "Monishine ist eine super kompetente Kosmetikerin mit Erfahrung. Die Atmosphäre war 1A, ich habe mich gut aufgehoben gefühlt. Sie nimmt sich Zeit, gibt Tipps und man kann super entspannen.",
    name: "Angelina",
    treatment: "Micro-Needling",
  },
  {
    quote: "Die Lippenpigmentierung ist mit eine der besten Entscheidungen meines Lebens gewesen. Die Farbe ist perfekt und ich sehe direkt frischer aus. Danke für deine zauberhafte Arbeit Moni!",
    name: "Salma",
    treatment: "Permanent Make-up",
  },
  {
    quote: "Eine liebevolle Wimpernstylistin mit Erfahrung, die weiß wie es geht und das perfekte Ergebnis zaubert. 😍",
    name: "Sabina",
    treatment: "Lash Extensions",
  },
  {
    quote: "Super nette Beratung für mich und meine Mutter, wir sind so zufrieden.",
    name: "Aktas",
    treatment: "PMU & Brows",
  },
  {
    quote: "Das es voll ist habe ich mir gedacht — aber dass es sooo toll ist, wow 🥰",
    name: "Julia",
    treatment: "Hydrating Facial",
  },
];

const trustItems = [
  "5.0 Bewertung",
  "400+ Kund:innen",
  "5 Jahre Top Rated",
  "Persönliche Betreuung",
];

type Review = typeof reviews[number];

const ReviewCard = ({ r }: { r: Review }) => (
  <article className="flex flex-col p-7 md:p-8" style={{ backgroundColor: CARD_BG }}>
    <div className="flex gap-[3px]" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} fill={STAR_COLOR} strokeWidth={0} />
      ))}
    </div>
    <blockquote
      className="mt-5 flex-1 font-light leading-[1.78]"
      style={{ ...serif, fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: TEXT }}
    >
      „{r.quote}"
    </blockquote>
    <footer className="mt-6 pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
      <p style={{ ...serif, fontSize: "0.88rem", color: TEXT }}>
        — {r.name}
      </p>
      <p
        className="mt-1 font-light uppercase"
        style={{ fontSize: "0.57rem", letterSpacing: "0.22em", color: GOLD }}
      >
        {r.treatment}
      </p>
      <p
        className="mt-2 flex items-center gap-1.5 font-light uppercase"
        style={{ fontSize: "0.54rem", letterSpacing: "0.18em", color: TEXT_DIM }}
      >
        <span>✓</span> Verifizierte Bewertung
      </p>
    </footer>
  </article>
);

const Testimonials = () => (
  <section className="py-14 md:py-20" style={{ backgroundColor: BG }}>
    <div className="container-editorial">

      {/* ── Header — centred ── */}
      <div className="text-center mb-12 md:mb-16 reveal">
        <p
          className="font-script shimmer-gold mb-4"
          style={{ fontSize: "clamp(1.8rem, 2.6vw, 2.6rem)" }}
        >
          Echte Ergebnisse. Echtes Vertrauen.
        </p>
        <h2
          className="leading-[1.06]"
          style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)", color: TEXT }}
        >
          Über 400 zufriedene Kund:innen
        </h2>
        <p
          className="mt-5 mx-auto max-w-lg font-light leading-[1.85]"
          style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)", color: TEXT_MUTED }}
        >
          Seit 5 Jahren Top Rated auf Treatwell mit zahlreichen verifizierten Bewertungen.
        </p>

        {/* Trust indicators */}
        <div
          className="mt-8 pt-7 flex flex-wrap justify-center gap-x-8 gap-y-3"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          {trustItems.map((text) => (
            <span
              key={text}
              className="flex items-center gap-2 font-light uppercase"
              style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: TEXT_MUTED }}
            >
              <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Review grid — 2 columns desktop ── */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 reveal reveal-delay-1">
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="mt-12 md:mt-14 text-center reveal">
        <a
          href={TREATWELL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-9 py-4 text-xs tracking-[0.22em] uppercase font-normal transition-opacity duration-300 hover:opacity-75"
          style={{ backgroundColor: TEXT, color: BG }}
        >
          Alle Bewertungen ansehen
        </a>
      </div>

    </div>
  </section>
);

export default Testimonials;
