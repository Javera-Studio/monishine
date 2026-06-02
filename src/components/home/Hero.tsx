import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroImg from "@/assets/michaela.jpg";

const TREATWELL = "https://buchung.treatwell.de/ort/monishine/";

const badges = [
  "5 Jahre in Folge Top Rated",
  "Zertifizierte Beauty Expertin",
  "Brows & Lashes Specialist",
  "Lash Extension Schulungen",
  "Ladies & Gentlemen",
  "Persönliche Beratung",
];

const Hero = () => (
  <section className="relative bg-background overflow-hidden">
    {/* ── Mobile image — in document flow, fades into background ── */}
    <div className="lg:hidden relative h-[72vw] min-h-[300px] max-h-[500px]">
      <img
        src={heroImg}
        alt="Monishine Beauty Studio Wien — Brows & Lashes"
        className="w-full h-full object-cover object-top"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 35%, hsl(var(--background) / 0.6) 65%, hsl(var(--background)) 100%)",
        }}
      />
    </div>

    {/* ── Desktop image — absolute, right 73%, bleeds to edges ── */}
    <div className="hidden lg:block absolute inset-y-0 right-0 w-[73%] pointer-events-none select-none">
      <img
        src={heroImg}
        alt="Monishine Beauty Studio Wien — Brows & Lashes"
        className="w-full h-full object-cover object-top"
        loading="eager"
      />
      {/* Soft left-edge gradient blending image into cream background */}
      <div
        className="absolute inset-y-0 left-0 w-[62%]"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.82) 30%, hsl(var(--background) / 0.35) 62%, transparent 100%)",
        }}
      />
    </div>

    {/* ── Content ── */}
    <div className="relative z-10 container-editorial w-full lg:min-h-screen lg:flex lg:items-center">
      <div className="max-w-[540px] pt-3 pb-16 lg:py-32 reveal">

        {/* Eyebrow label */}
        <p className="eyebrow mb-6 text-accent" style={{ letterSpacing: "0.3em" }}>
          Brows. Lashes. Glow.
        </p>

        {/* Main display headline — Cormorant Garamond, weight 300 */}
        <h1
          className="text-foreground leading-[1.0]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3.1rem, 5.5vw, 5.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Your Glow
          <br />
          <em style={{ fontStyle: "italic" }}>is your</em>
          <br />
          Signature.
        </h1>

        {/* Subheadline */}
        <p className="lede mt-8" style={{ maxWidth: "420px" }}>
          Moderne Beauty Treatments für Ladies &amp; Gentlemen —
          spezialisiert auf Brows &amp; Lashes, mit persönlicher Beratung,
          präziser Arbeit und einer warmen Studioatmosphäre zum Wohlfühlen.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
          <a
            href={TREATWELL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Termin buchen
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <Link to="/leistungen" className="btn-outline">
            Treatments entdecken
          </Link>
        </div>

        {/* Tertiary text link */}
        <div className="mt-5">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors"
          >
            Kostenlose Beratung <ChevronRight size={11} />
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-foreground/10 reveal reveal-delay-1">
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 border border-foreground/15 bg-background/75 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          {/* Subtle editorial quote */}
          <p
            className="mt-5 text-sm italic text-foreground/30 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300 }}
          >
            Be your own kind of beautiful.
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
