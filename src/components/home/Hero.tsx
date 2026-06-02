import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroImg from "@/assets/IMG_0578.jpeg";

const TREATWELL = "https://buchung.treatwell.de/ort/monishine/";

const badges = [
  { label: "5 Jahre Top Rated" },
  { label: "Zertifizierte Beauty Expertin" },
  { label: "Brows & Lashes Specialist" },
  { label: "Lash Extension Schulungen" },
  { label: "Persönliche Beratung" },
  { label: "Ladies & Gentlemen" },
];

const Hero = () => (
  <>
    {/* ══════════════════════════════════════
        Main hero
    ══════════════════════════════════════ */}
    <section className="relative bg-background overflow-hidden">

      {/* ── Mobile image ── */}
      <div className="lg:hidden relative h-[80vw] min-h-[320px] max-h-[540px]">
        <img
          src={heroImg}
          alt="Monishine Beauty Studio Wien — Brows & Lashes"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
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

      {/* ── Desktop image — absolute, right 80%, object-contain ── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[80%] pointer-events-none select-none">
        <img
          src={heroImg}
          alt="Monishine Beauty Studio Wien — Brows & Lashes"
          className="w-full h-full"
          style={{ objectFit: "contain", objectPosition: "right center" }}
          loading="eager"
        />
        <div
          className="absolute inset-y-0 left-0 w-[52%]"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.88) 28%, hsl(var(--background) / 0.35) 58%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container-editorial w-full lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-[520px] pt-3 pb-12 lg:py-36 reveal">

          <p className="eyebrow mb-6 text-accent" style={{ letterSpacing: "0.3em" }}>
            Brows. Lashes. Glow.
          </p>

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
            <span
              className="font-script block"
              style={{
                fontSize: "clamp(2.6rem, 4.6vw, 4.6rem)",
                color: "hsl(var(--accent))",
                opacity: 0.8,
                letterSpacing: "0.01em",
                lineHeight: 1.15,
              }}
            >
              is your
            </span>
            Signature.
          </h1>

          <p className="lede mt-8" style={{ maxWidth: "400px" }}>
            Moderne Beauty Treatments für Ladies &amp; Gentlemen —
            spezialisiert auf Brows &amp; Lashes, mit persönlicher Beratung,
            präziser Arbeit und einer warmen Studioatmosphäre zum Wohlfühlen.
          </p>

          {/* CTA buttons — extra breathing room below subheadline */}
          <div className="mt-14 flex flex-col sm:flex-row gap-3 items-start">
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

          <div className="mt-5">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors"
            >
              Kostenlose Beratung <ChevronRight size={11} />
            </Link>
          </div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        Trust strip — separate section below hero
    ══════════════════════════════════════ */}
    <section className="bg-secondary/30 border-t border-border/50 py-10 md:py-12">
      <div className="container-editorial reveal">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map(({ label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 px-4 py-3.5 rounded-sm border border-border/60 bg-background/70"
              style={{ boxShadow: "0 1px 3px hsl(24 14% 11% / 0.05), 0 4px 12px hsl(24 14% 11% / 0.04)" }}
            >
              <span
                className="shrink-0 text-accent/70"
                style={{ fontSize: "0.45rem", lineHeight: 1 }}
              >
                ✦
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.16em] text-foreground/60 font-light leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Editorial signature quote */}
        <p
          className="font-script mt-7 text-center"
          style={{
            fontSize: "clamp(1.7rem, 2.2vw, 2.1rem)",
            color: "hsl(var(--accent))",
            opacity: 0.55,
          }}
        >
          Be your own kind of beautiful.
        </p>
      </div>
    </section>
  </>
);

export default Hero;
