import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Star, Heart, Sparkles, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TREATWELL = "https://buchung.treatwell.de/ort/monishine/";

const facts: { Icon: LucideIcon; text: string }[] = [
  { Icon: Star,          text: "5 Jahre Treatwell Top Rated"    },
  { Icon: Heart,         text: "Über 400 zufriedene Kundinnen"  },
  { Icon: Sparkles,      text: "Zertifizierte Beauty Expertin"  },
  { Icon: GraduationCap, text: "Academy & Schulungen"           },
];

const Hero = () => (
  <>
    {/* ══════════════════════════════════════
        Main hero
    ══════════════════════════════════════ */}
    <section className="relative bg-background overflow-hidden">

      {/* ── Mobile image ── */}
      <div className="lg:hidden relative h-[80vw] min-h-[320px] max-h-[540px]">
        <Image
          src="/images/IMG_0578.jpeg"
          alt="Monishine Beauty Studio Wien — Brows & Lashes"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 35%, hsl(var(--background) / 0.6) 65%, hsl(var(--background)) 100%)",
          }}
        />
      </div>

      {/* ── Desktop image — full section width, subject on right ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/IMG_0578.jpeg"
          alt="Monishine Beauty Studio Wien — Brows & Lashes"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "right center" }}
          sizes="100vw"
        />
        {/* Cream overlay — solid left zone, then fades to reveal image */}
        <div
          className="absolute inset-y-0 left-0 w-[68%]"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background)) 32%, hsl(var(--background) / 0.82) 50%, hsl(var(--background) / 0.28) 68%, transparent 100%)",
          }}
        />
      </div>

      {/* Dark overlay — additional contrast for text readability */}
      <div
        className="hidden lg:block absolute inset-y-0 left-0 w-[55%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 55%, rgba(0,0,0,0) 100%)" }}
      />
      <div className="relative z-20 container-editorial lg:min-h-screen lg:flex lg:flex-col lg:justify-end lg:pb-24">
        <div className="relative max-w-[460px] pt-3 pb-12 lg:py-20 reveal">

          <p className="mb-6 text-accent font-light" style={{ fontSize: "0.75rem", letterSpacing: "0.35em", textTransform: "uppercase" }}>
            Brows • Lashes • Glow
          </p>

          <h1
            className="text-foreground leading-[1.0]"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3.1rem, 5.5vw, 5.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              textShadow: "0 1px 8px rgba(0,0,0,0.18), 0 2px 20px rgba(0,0,0,0.10)",
            }}
          >
            Your Glow
            <br />
            <span
              className="font-script shimmer-gold block"
              style={{
                fontSize: "clamp(3.65rem, 6.4vw, 6.4rem)",
                letterSpacing: "0.01em",
                lineHeight: 1.15,
              }}
            >
              is your
            </span>
            Signature.
          </h1>

          <div className="mt-12 space-y-4" style={{ maxWidth: "420px" }}>
            {[
              "Moderne Beauty Treatments für Ladies & Gentlemen.",
              "Spezialisiert auf Brows & Lashes, persönliche Beratung und präzise Arbeit.",
              "In einer warmen Studioatmosphäre zum Wohlfühlen.",
            ].map((line) => (
              <p
                key={line}
                className="text-foreground/80 font-light"
                style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  lineHeight: 1.85,
                  textShadow: "0 1px 6px rgba(0,0,0,0.20)",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA buttons */}
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
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 text-xs tracking-[0.22em] uppercase font-normal transition-all duration-500 hover:bg-foreground/5"
              style={{ backgroundColor: "#fff", color: "#1C1611", border: "1px solid rgba(28,22,17,0.2)" }}
            >
              Treatments entdecken
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground hover:text-accent transition-colors"
            >
              Kostenlose Beratung <ChevronRight size={11} />
            </Link>
          </div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        Trust facts — elegant static row
    ══════════════════════════════════════ */}
    <section
      className="border-t border-border/40 py-8 md:py-10"
      style={{ background: "linear-gradient(to bottom, hsl(var(--secondary) / 0.25), hsl(var(--background)))" }}
    >
      <div className="container-editorial">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0">
          {facts.map(({ Icon, text }, i) => (
            <div key={text} className="flex items-center">
              <span className="flex items-center gap-2 text-foreground/55 font-light">
                <Icon
                  size={12}
                  strokeWidth={1.4}
                  className="text-accent shrink-0"
                  style={{ opacity: 0.7 }}
                />
                <span className="text-[0.62rem] uppercase tracking-[0.24em]">
                  {text}
                </span>
              </span>
              {i < facts.length - 1 && (
                <span
                  className="hidden sm:block mx-7 text-foreground/18"
                  style={{ fontSize: "0.45rem" }}
                  aria-hidden
                >
                  ✦
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Hero;
