import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Star, Heart, Sparkles, GraduationCap } from "lucide-react";
import heroImg from "@/assets/IMG_0578.jpeg";
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

          <div className="mt-8 space-y-3" style={{ maxWidth: "460px" }}>
            {[
              "Moderne Beauty Treatments für Ladies & Gentlemen.",
              "Spezialisiert auf Brows & Lashes, persönliche Beratung und präzise Arbeit.",
              "In einer warmen Studioatmosphäre zum Wohlfühlen.",
            ].map((line) => (
              <p
                key={line}
                className="text-muted-foreground font-light"
                style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.8 }}
              >
                {line}
              </p>
            ))}
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
