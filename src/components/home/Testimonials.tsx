import { Star } from "lucide-react";
import moni2 from "@/assets/moni2.jpg";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

/* ── colour tokens ── */
const BG          = "#F7F4F0";   // section background — light cream
const PANEL_BG    = "#FFFFFF";   // left column + review cards
const CARD_BORDER = "#E8DED4";   // card border
const ESPRESSO    = "#2D221C";   // main headlines
const BODY        = "#5A4A3E";   // body / quote text
const TAUPE       = "#8C7664";   // names, labels, muted text
const STAR_COLOR  = "#D4AF37";   // gold stars
const DIVIDER     = "rgba(45,34,28,0.07)";

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
  {
    quote: "Ich hatte das Microneedeling Treatment und bin richtig zufrieden. Ich konnte mich entspannen und meiner Haut tat es total gut! Die Mädels vor Ort sind mega lieb und man fühlt sich direkt willkommen!",
    name: "Jess",
    treatment: "Micro-Needling",
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
    className="flex flex-col p-7 md:p-8"
    style={{ backgroundColor: PANEL_BG, border: `1px solid ${CARD_BORDER}` }}
  >
    <Stars size={11} />
    <blockquote
      className="mt-4 flex-1 font-light leading-[1.78]"
      style={{ ...serif, fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)", color: BODY }}
    >
      „{r.quote}"
    </blockquote>
    <footer className="mt-5 pt-5" style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
      <p style={{ ...serif, fontSize: "0.88rem", color: ESPRESSO }}>— {r.name}</p>
      <p
        className="mt-1 font-light uppercase"
        style={{ fontSize: "0.57rem", letterSpacing: "0.22em", color: TAUPE }}
      >
        {r.treatment}
      </p>
      <p
        className="mt-2 flex items-center gap-1.5 font-light uppercase"
        style={{ fontSize: "0.54rem", letterSpacing: "0.18em", color: TAUPE, opacity: 0.6 }}
      >
        <span>✓</span> Verifizierte Bewertung
      </p>
    </footer>
  </article>
);

const Testimonials = () => (
  <section className="pt-6 md:pt-10 pb-0" style={{ backgroundColor: BG }}>
    <div className="container-editorial">

      {/* ── Header: two-column editorial layout ── */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-28">

        {/* Left — text on section background */}
        <div className="order-2 lg:order-1 reveal lg:pt-6">
          {/* Treatwell badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2"
            style={{ border: `1px solid ${CARD_BORDER}` }}
          >
            <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
            <span
              className="uppercase font-light"
              style={{ fontSize: "0.58rem", letterSpacing: "0.3em", color: TAUPE }}
            >
              Treatwell Top Rated
            </span>
            <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
          </div>

          {/* Headline */}
          <h2
            className="leading-[1.04]"
            style={{ ...serif, fontSize: "clamp(2.2rem, 3.8vw, 3.8rem)", color: ESPRESSO }}
          >
            5 Jahre in Folge ausgezeichnet.
          </h2>

          {/* Body text */}
          <p
            className="mt-6 font-light leading-[1.85]"
            style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: BODY }}
          >
            Über 400 verifizierte Bewertungen und unzählige zufriedene Kundinnen machen
            Monishine zu einer der beliebtesten Adressen für Brows, Lashes und Permanent
            Make-up in Wien. Persönliche Beratung, präzise Arbeit und eine Atmosphäre zum
            Wohlfühlen stehen seit dem ersten Tag im Mittelpunkt.
          </p>

          {/* Stats strip */}
          <div
            className="mt-10 pt-8 grid grid-cols-2 lg:flex gap-y-6"
            style={{ borderTop: `1px solid ${DIVIDER}` }}
          >
            {stats.map(({ value, stars, label }, i) => (
              <div
                key={value}
                className="lg:flex-1 px-4 lg:px-5 lg:first:pl-0"
                style={i > 0 ? { borderLeft: `1px solid ${DIVIDER}` } : {}}
              >
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <p style={{ ...serif, fontSize: "clamp(1.4rem, 2vw, 1.9rem)", color: ESPRESSO }}>
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
                <p
                  className="mt-1 uppercase font-light"
                  style={{ fontSize: "0.57rem", letterSpacing: "0.22em", color: TAUPE }}
                >
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
      <div
        className="py-14 md:py-20 reveal"
        style={{ borderTop: `1px solid ${DIVIDER}`, borderBottom: `1px solid ${DIVIDER}` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            aria-hidden
            className="select-none leading-none mb-4"
            style={{ ...serif, fontSize: "6rem", color: "rgba(45,34,28,0.08)", lineHeight: 0.7 }}
          >
            "
          </p>
          <blockquote
            style={{ ...serif, fontSize: "clamp(1.15rem, 2.2vw, 1.7rem)", lineHeight: 1.7, color: BODY }}
          >
            {featured.quote}
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-2">
            <Stars size={12} />
            <p className="mt-1" style={{ ...serif, fontSize: "0.92rem", color: ESPRESSO }}>
              — {featured.name}
            </p>
            <p
              className="uppercase font-light"
              style={{ fontSize: "0.57rem", letterSpacing: "0.22em", color: TAUPE }}
            >
              {featured.treatment}
            </p>
            <p
              className="flex items-center gap-1.5 font-light uppercase mt-1"
              style={{ fontSize: "0.54rem", letterSpacing: "0.18em", color: TAUPE, opacity: 0.6 }}
            >
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
      <div className="mt-8 md:mt-10 pb-14 md:pb-20 grid md:grid-cols-2 gap-4 md:gap-5 reveal reveal-delay-1">
        {reviews.map((r) => (
          <ReviewCard key={r.name} r={r} />
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
