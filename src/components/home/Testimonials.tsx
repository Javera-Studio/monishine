import { Star } from "lucide-react";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const STAR_COLOR = "#C9A66B";

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

const leftCol = [
  {
    quote:
      "Die Lippenpigmentierung ist mit eine der besten Entscheidungen meines Lebens gewesen. Die Farbe ist perfekt und ich sehe direkt frischer aus. Danke für deine zauberhafte Arbeit Moni!",
    name: "Salma",
    treatment: "Permanent Make-up",
    warm: true,
  },
  {
    quote:
      "Eine liebevolle Wimpernstylistin mit Erfahrung, die weiß wie es geht und das perfekte Ergebnis zaubert. 😍",
    name: "Sabina",
    treatment: "Lash Extensions",
    warm: false,
  },
  {
    quote: "Super nette Beratung für mich und meine Mutter, wir sind so zufrieden.",
    name: "Aktas",
    treatment: "PMU & Brows",
    warm: true,
  },
];

const rightCol = [
  {
    quote:
      "Monishine ist eine super kompetente Kosmetikerin mit Erfahrung. Die Atmosphäre war 1A, ich habe mich gut aufgehoben gefühlt. Sie nimmt sich Zeit, gibt Tipps und man kann super entspannen.",
    name: "Angelina",
    treatment: "Micro-Needling",
    warm: false,
  },
  {
    quote: "Das es voll ist habe ich mir gedacht — aber dass es sooo toll ist, wow 🥰",
    name: "Julia",
    treatment: "Hydrating Facial",
    warm: true,
  },
];

type Review = { quote: string; name: string; treatment: string; warm: boolean };

const ReviewCard = ({ r }: { r: Review }) => (
  <article
    className={`group p-7 md:p-8 transition-all duration-500 ${
      r.warm ? "bg-secondary/35" : ""
    }`}
  >
    <Stars />
    <blockquote
      className="mt-5 leading-[1.78] text-foreground/75 group-hover:text-foreground/95 transition-colors duration-500"
      style={{ ...serif, fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)" }}
    >
      „{r.quote}"
    </blockquote>
    <footer className="mt-6 pt-5 border-t border-foreground/[0.07]">
      <p style={{ ...serif, fontSize: "0.88rem", color: "hsl(var(--foreground) / 0.7)" }}>
        — {r.name}
      </p>
      <p className="eyebrow mt-1" style={{ color: "hsl(var(--accent) / 0.65)" }}>
        {r.treatment}
      </p>
      <p className="mt-2 text-[0.55rem] uppercase tracking-[0.2em] text-foreground/28 flex items-center gap-1.5">
        <span>✓</span> Verifizierte Bewertung
      </p>
    </footer>
  </article>
);

const Testimonials = () => (
  <section className="py-24 md:py-36 bg-background overflow-hidden">
    <div className="container-editorial">

      {/* ── Header ── */}
      <div className="reveal">
        {/* Treatwell badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-accent/25 bg-secondary/50">
          <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
          <span className="text-[0.58rem] uppercase tracking-[0.3em] text-accent/80">
            Treatwell Top Rated
          </span>
          <Star size={9} fill={STAR_COLOR} strokeWidth={0} />
        </div>

        <h2
          className="text-foreground leading-[1.04] max-w-2xl"
          style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
        >
          5 Jahre in Folge ausgezeichnet.
        </h2>

        <p className="lede mt-6 max-w-xl">
          Über Jahre hinweg vertrauen Kundinnen auf Monishine für präzise Beauty
          Treatments, persönliche Beratung und eine warme Studioatmosphäre.
        </p>

        {/* Stats strip */}
        <div className="mt-10 pt-8 border-t border-foreground/[0.07] grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "5.0 ★", label: "Bewertung" },
            { value: "Top Rated", label: "seit 5 Jahren" },
            { value: "100%", label: "Verifiziert" },
            { value: "Brows · Lashes", label: "PMU · Glow" },
          ].map(({ value, label }) => (
            <div key={value}>
              <p
                style={{ ...serif, fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", color: "hsl(var(--foreground) / 0.85)" }}
              >
                {value}
              </p>
              <p className="eyebrow mt-1" style={{ color: "hsl(var(--accent) / 0.6)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured review ── */}
      <div className="mt-20 md:mt-24 py-14 md:py-20 border-y border-foreground/[0.07] reveal">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative opening guillemet */}
          <p
            aria-hidden
            className="select-none leading-none mb-4"
            style={{
              ...serif,
              fontSize: "6rem",
              color: "hsl(var(--accent) / 0.15)",
              lineHeight: 0.7,
            }}
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

      {/* ── Script accent ── */}
      <div className="mt-14 md:mt-16 reveal">
        <p
          className="font-script text-center"
          style={{
            fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)",
            color: "hsl(var(--accent))",
            opacity: 0.38,
          }}
        >
          Be your own kind of beautiful.
        </p>
      </div>

      {/* ── Staggered 2-column reviews ── */}
      <div className="mt-14 md:mt-16 grid lg:grid-cols-2 gap-4 lg:gap-6 items-start reveal reveal-delay-1">
        {/* Left column */}
        <div className="space-y-4">
          {leftCol.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
        {/* Right column — offset down for stagger */}
        <div className="space-y-4 lg:mt-16">
          {rightCol.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Testimonials;
