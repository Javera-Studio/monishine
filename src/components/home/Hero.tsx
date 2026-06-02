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

          <p className="mb-6 text-accent font-light" style={{ fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase" }}>
            Brows • Lashes • Glow
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
                fontSize: "clamp(3.65rem, 6.4vw, 6.4rem)",
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

          <div className="mt-8 space-y-2" style={{ maxWidth: "400px" }}>
            <p className="lede">Moderne Beauty Treatments für Ladies &amp; Gentlemen.</p>
            <p className="lede">Spezialisiert auf Brows &amp; Lashes, persönliche Beratung und präzise Arbeit.</p>
            <p className="lede">In einer warmen Studioatmosphäre zum Wohlfühlen.</p>
          </div>

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
        Trust strip — infinite marquee
    ══════════════════════════════════════ */}
    <section
      className="border-t border-border/40"
      style={{ background: "linear-gradient(to bottom, hsl(var(--secondary) / 0.25), hsl(var(--background)))" }}
    >
      {/* Marquee ticker */}
      <div className="marquee-outer overflow-hidden py-8 md:py-10">
        <div
          className="marquee-track flex whitespace-nowrap"
          style={{ animation: "marquee 42s linear infinite" }}
        >
          {/* Two identical sets — second copy makes the loop seamless */}
          {[...badges, ...badges].map(({ label }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 shrink-0 px-5 md:px-7"
            >
              <span
                className="text-accent shrink-0"
                style={{ fontSize: "0.38rem", opacity: 0.65 }}
                aria-hidden
              >
                ✦
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.26em] text-foreground/55 font-light shrink-0">
                {label}
              </span>
              <span
                className="ml-3 text-foreground/20 shrink-0"
                style={{ fontSize: "0.55rem" }}
                aria-hidden
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Editorial signature quote */}
      <div className="container-editorial pb-8 md:pb-10">
        <p
          className="font-script text-center"
          style={{
            fontSize: "clamp(1.6rem, 2vw, 2rem)",
            color: "hsl(var(--accent))",
            opacity: 0.5,
          }}
        >
          Be your own kind of beautiful.
        </p>
      </div>
    </section>
  </>
);

export default Hero;
