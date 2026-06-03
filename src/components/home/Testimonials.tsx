import { Star } from "lucide-react";
import moni2 from "@/assets/moni2.jpg";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const STAR_COLOR = "#C9A66B";
const CARD_BG    = "#A8937C";   // slightly darker than surface-taupe bg
const CARD_TEXT  = "#F7F3EE";
const CARD_MUTED = "rgba(247,243,238,0.60)";
const CARD_DIM   = "rgba(247,243,238,0.38)";
const CARD_GOLD  = "#D8B98A";
const CARD_BORDER = "rgba(247,243,238,0.10)";

const Stars = ({ size = 11 }: { size?: number }) => (
  <div className="flex gap-[3px]" aria-label="5 von 5 Sternen">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={size} fill={STAR_COLOR} strokeWidth={0} />
    ))}
  </div>
);

const featured = {
  quote:
    "Moni ist einfach großartig! 💕 Meine Wimpern sehen traumhaft aus — perfekt geformt, leicht und trotzdem ausdrucksstark. Man merkt sofort, wie viel Liebe sie in ihre Arbeit steckt. Ich habe mich rundum wohlgefühlt und komme definitiv wieder.",
  name: "Saskia",
  treatment: "Wimpernverlängerung",
};

const reviews = [
  {
    quote: "Die Lippenpigmentierung ist mit eine der besten Entscheidungen meines Lebens gewesen. Die Farbe ist perfekt und ich sehe direkt frischer aus. Danke für deine zauberhafte Arbeit Moni!",
    name: "Salma",
    treatment: "Permanent Make-up",
  },
  {
    quote: "Monishine ist eine super kompetente Kosmetikerin mit Erfahrung. Die Atmosphäre war 1A, ich habe mich gut aufgehoben gefühlt. Sie nimmt sich Zeit, gibt Tipps und man kann super entspannen.",
    name: "Angelina",
    treatment: "Micro-Needling",
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

const stats = [
  { value: "5.0", stars: true, label: "Verifizierte Bewertung" },
  { value: "400+",    label: "Zufriedene Kundinnen"  },
  { value: "5 Jahre", label: "Treatwell Top Rated"   },
  { value: "100%",    label: "Persönliche Betreuung" },
];

type Review = typeof reviews[number];

const ReviewCard = ({ r }: { r: Review }) => (
  <article
    className="flex flex-col p-7 md:p-8 transition-opacity duration-500 hover:opacity-90"
    style={{ backgroundColor: CARD_BG }}
  >
    <Stars size={11} />
    <blockquote
      className="mt-4 flex-1 font-light leading-[1.78]"
      style={{ ...serif, fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: CARD_TEXT }}
    >
      „{r.quote}"
    </blockquote>
    <footer className="mt-5 pt-5" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
      <p style={{ ...serif, fontSize: "0.88rem", color: CARD_TEXT }}>— {r.name}</p>
      <p
        className="mt-1 font-light uppercase"
        style={{ fontSize: "0.57rem", letterSpacing: "0.22em", color: CARD_GOLD }}
      >
        {r.treatment}
      </p>
      <p
        className="mt-2 flex items-center gap-1.5 font-light uppercase"
        style={{ fontSize: "0.54rem", letterSpacing: "0.18em", color: CARD_DIM }}
      >
        <span>✓</span> Verifizierte Bewertung
      </p>
    </footer>
  </article>
);

const Testimonials = () => (
  <section className="surface-taupe pt-6 md:pt-10 pb-0">
    <div className="container-editorial">

      {/* ── Header: two-column editorial layout ── */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-28">

        {/* Left — badge · headline · text · CTA · stats */}
        <div className="order-2 lg:order-1 reveal lg:pt-6">

          {/* Treatwell badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-accent/25 bg-secondary/50">
            <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
            <span className="text-[0.58rem] uppercase tracking-[0.3em] text-accent/80">
              Treatwell Top Rated
            </span>
            <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
          </div>

          {/* Headline */}
          <h2
            className="text-foreground leading-[1.04]"
            style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)" }}
          >
            5 Jahre in Folge ausgezeichnet.
          </h2>

          {/* Body text */}
          <p className="lede mt-6 max-w-lg">
            Über 400 verifizierte Bewertungen und unzählige zufriedene Kundinnen machen
            Monishine zu einer der beliebtesten Adressen für Brows, Lashes und Permanent
            Make-up in Wien. Persönliche Beratung, präzise Arbeit und eine Atmosphäre zum
            Wohlfühlen stehen seit dem ersten Tag im Mittelpunkt.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://buchung.treatwell.de/ort/monishine/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              Bewertungen ansehen
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-10 pt-8 border-t border-foreground/[0.07] grid grid-cols-2 lg:flex gap-y-6">
            {stats.map(({ value, stars, label }, i) => (
              <div
                key={value}
                className="lg:flex-1 px-4 lg:px-5 lg:first:pl-0"
                style={i > 0 ? { borderLeft: "1px solid hsl(var(--foreground) / 0.08)" } : {}}
              >
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <p style={{ ...serif, fontSize: "clamp(1.4rem, 2vw, 1.9rem)", color: "hsl(var(--foreground) / 0.88)" }}>
                    {value}
                  </p>
                  {stars && (
                    <div className="flex gap-[2px]" style={{ marginBottom: "2px" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={9} fill={STAR_COLOR} strokeWidth={0} />
                      ))}
                    </div>
                  )}
                </div>
                <p className="eyebrow mt-1" style={{ color: "hsl(var(--accent) / 0.6)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="order-1 lg:order-2 reveal reveal-delay-1 lg:-mb-24">
          <div className="overflow-hidden shadow-elegant w-full" style={{ borderRadius: "10px" }}>
            <img
              src={moni2}
              alt="Moni — Monishine Beauty Studio"
              loading="eager"
              className="w-full object-cover object-top"
              style={{ maxHeight: "720px" }}
            />
          </div>
        </div>

      </div>

      {/* ── Featured review ── */}
      <div className="py-14 md:py-20 border-y border-foreground/[0.07] reveal">
        <div className="max-w-3xl mx-auto text-center">
          <p
            aria-hidden
            className="select-none leading-none mb-4"
            style={{ ...serif, fontSize: "6rem", color: "hsl(var(--accent) / 0.15)", lineHeight: 0.7 }}
          >
            "
          </p>
          <blockquote
            style={{ ...serif, fontSize: "clamp(1.15rem, 2.2vw, 1.7rem)", lineHeight: 1.7, color: "hsl(var(--foreground) / 0.85)" }}
          >
            {featured.quote}
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-2">
            <Stars size={12} />
            <p className="mt-1" style={{ ...serif, fontSize: "0.92rem", color: "hsl(var(--foreground) / 0.6)" }}>
              — {featured.name}
            </p>
            <p className="eyebrow" style={{ color: "hsl(var(--accent) / 0.65)" }}>
              {featured.treatment}
            </p>
            <p className="text-[0.55rem] uppercase tracking-[0.2em] text-foreground/28 flex items-center gap-1.5 mt-1">
              <span>✓</span> Verifizierte Bewertung
            </p>
          </div>
        </div>
      </div>

      {/* ── Gold slogan ── */}
      <div className="mt-10 md:mt-12 text-center reveal">
        <p
          className="font-script shimmer-gold"
          style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)" }}
        >
          Be your own kind of beautiful.
        </p>
      </div>

      {/* ── Review cards — 2-col grid ── */}
      <div className="mt-8 md:mt-10 pb-14 md:pb-20 grid md:grid-cols-2 gap-3 md:gap-4 reveal reveal-delay-1">
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
