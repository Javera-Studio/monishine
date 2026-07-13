import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Wand2, RefreshCcw, TrendingUp, Users, Heart, BookOpen, Award, Star, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Schulungen",
  description:
    "Monishine Academy — professionelle Lash Extension Schulungen in persönlicher Studioatmosphäre. Für Anfängerinnen und erfahrene Beauty Artists in Hamburg.",
  alternates: { canonical: "/schulungen" },
};

const GOLD = "#D8B98A";

const topics = [
  "Grundlagen der Lash Extensions",
  "Vorbereitung des Arbeitsplatzes",
  "Hygiene & professionelles Arbeiten",
  "Lash Mapping & Augenformanalyse",
  "Applikationstechniken",
  "Kleberkunde & Haltbarkeit",
  "Arbeiten an Modellen",
  "Fehler vermeiden & Ergebnisse verbessern",
  "Kundenberatung & Nachpflege",
  "Tipps für deinen Start als Lash Artist",
];

const targetFeatures: { Icon: LucideIcon; text: string }[] = [
  { Icon: Sparkles,    text: "Anfängerinnen"          },
  { Icon: Wand2,       text: "Beauty Artists"          },
  { Icon: RefreshCcw,  text: "Wiedereinsteigerinnen"   },
  { Icon: TrendingUp,  text: "Technik auffrischen"     },
  { Icon: Users,       text: "Angebot erweitern"       },
];

const trustFeatures: { Icon: LucideIcon; text: string }[] = [
  { Icon: Heart,    text: "Persönliche Betreuung"         },
  { Icon: BookOpen, text: "Praxisorientiertes Lernen"     },
  { Icon: Wand2,    text: "Moderne Lash Techniken"        },
  { Icon: Award,    text: "Erfahrung aus dem Studioalltag"},
  { Icon: Star,     text: "Zertifizierte Beauty Expertin" },
  { Icon: Eye,      text: "Brows & Lashes Specialist"     },
];

const serif: React.CSSProperties = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontWeight: 300,
};

const Schulungen = () => (
  <SiteLayout>

    {/* ══════════════════════════════════════
        Hero
    ══════════════════════════════════════ */}
    <section className="py-20 md:py-28 bg-gradient-warm">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div className="reveal">
            <p className="eyebrow mb-6 text-accent" style={{ letterSpacing: "0.3em" }}>
              Monishine Academy
            </p>
            <h1
              className="text-foreground leading-[1.02]"
              style={{ ...serif, fontSize: "clamp(2.2rem, 4.2vw, 4rem)" }}
            >
              Werde Lash Artist mit{" "}
              <em className="italic">Technik, Gefühl &amp; Selbstvertrauen.</em>
            </h1>
            <p className="lede mt-8">
              Professionelle Lash Extension Schulungen in persönlicher
              Studioatmosphäre — praxisnah, verständlich und mit viel Liebe zum
              Detail.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
              <Link href="/kontakt" className="btn-primary group">
                Jetzt Schulung anfragen
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a href="#inhalte" className="btn-outline">
                Inhalte ansehen
              </a>
            </div>
          </div>

          {/* Right — editorial image composition */}
          <div className="reveal reveal-delay-1 grid grid-cols-2 gap-3 lg:gap-4">
            <div className="hover-sweep col-span-2 relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden shadow-elegant">
              <Image
                src="/images/schulung1.jpg"
                alt="Monishine Lash Extension Schulung"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="hover-sweep relative aspect-[4/3] overflow-hidden shadow-soft">
              <Image
                src="/images/schulung2.jpg"
                alt="Monishine Academy Training"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="hover-sweep relative aspect-[4/3] overflow-hidden shadow-soft">
              <Image
                src="/images/schulung3.jpg"
                alt="Monishine Lash Artist Ausbildung"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        Intro — image + text
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 reveal">
          <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-elegant">
            <Image
              src="/images/schulung1.jpg"
              alt="Lash Extension Schulung bei Monishine"
              fill
              className="object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-6 reveal reveal-delay-1">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Die Schulung
          </p>
          <h2
            className="text-foreground leading-[1.06]"
            style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            Lernen in einer Atmosphäre, in der du dich sicher fühlst.
          </h2>
          <div className="mt-7 space-y-5 text-foreground/80 leading-[1.9] font-light">
            <p>
              Bei Monishine geht es nicht nur darum, dir eine Technik zu
              zeigen. In den Lash Extension Schulungen lernst du Schritt für
              Schritt, worauf es bei hochwertigen Lash Extensions wirklich
              ankommt — von sauberer Vorbereitung über präzises Arbeiten bis
              hin zum sicheren Umgang mit Kundinnen.
            </p>
            <p>
              Moni begleitet dich mit Geduld, Erfahrung und einem Blick für
              Details, damit du nicht nur verstehst, was du tust, sondern auch
              warum du es tust.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        Topics — editorial split layout
    ══════════════════════════════════════ */}
    <section id="inhalte" className="py-24 md:py-32 surface-taupe">
      <div className="container-editorial">

        {/* Section header */}
        <div className="mb-16 md:mb-20 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Schulungsinhalte
          </p>
          <h2
            className="text-foreground leading-[1.06] max-w-xl"
            style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 3rem)", color: "hsl(var(--foreground))" }}
          >
            Was du in der Schulung lernst
          </h2>
        </div>

        {/* Two-column topic grid */}
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 reveal">
          {[topics.slice(0, 5), topics.slice(5)].map((col, colIdx) => (
            <div key={colIdx}>
              {col.map((topic, i) => {
                const globalIndex = colIdx * 5 + i;
                return (
                  <div
                    key={topic}
                    className="group flex items-baseline gap-5 py-6 md:py-7 border-b cursor-default transition-all duration-400"
                    style={{ borderColor: "hsl(var(--foreground) / 0.07)" }}
                  >
                    <span
                      className="shrink-0 w-7 text-right"
                      style={{
                        ...serif,
                        fontSize: "0.78rem",
                        color: "hsl(var(--accent) / 0.4)",
                        letterSpacing: "0.06em",
                        lineHeight: 1,
                        paddingTop: "0.15em",
                      }}
                    >
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-foreground/85 group-hover:text-foreground transition-colors duration-400"
                      style={{
                        ...serif,
                        fontSize: "clamp(1rem, 1.4vw, 1.3rem)",
                        letterSpacing: "0.008em",
                        lineHeight: 1.35,
                      }}
                    >
                      {topic}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Script closing accent */}
        <div className="pt-12 md:pt-16 reveal">
          <p
            className="font-script shimmer-gold text-right"
            style={{ fontSize: "clamp(1.82rem, 2.6vw, 2.47rem)" }}
          >
            Glow with Confidence.
          </p>
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        For whom + Why Monishine
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container-editorial grid lg:grid-cols-2 gap-14 lg:gap-20">

        {/* For whom */}
        <div className="reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Zielgruppe
          </p>
          <h2
            className="text-foreground leading-[1.06] mb-7"
            style={{ ...serif, fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
          >
            Für wen ist die Schulung geeignet?
          </h2>
          <div className="space-y-4 text-foreground/80 leading-[1.9] font-light mb-8">
            <p>
              Die Schulung eignet sich für Anfängerinnen, die neu in die
              Beauty-Branche starten möchten, sowie für bestehende Beauty
              Artists, die ihr Angebot erweitern oder ihre Technik verbessern
              möchten.
            </p>
            <p>
              Ob du gerade erst beginnst oder bereits Erfahrung mitbringst —
              die Schulung wird persönlich begleitet und verständlich aufgebaut.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {targetFeatures.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={14} strokeWidth={1.4} style={{ color: GOLD, flexShrink: 0 }} />
                <span
                  className="text-foreground/75 font-light"
                  style={{ fontSize: "0.88rem", letterSpacing: "0.01em" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Monishine */}
        <div className="reveal reveal-delay-1">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Warum Monishine
          </p>
          <h2
            className="text-foreground leading-[1.06] mb-7"
            style={{ ...serif, fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
          >
            Warum eine Schulung bei Monishine?
          </h2>
          <div className="space-y-4 text-foreground/80 leading-[1.9] font-light mb-8">
            <p>
              Monishine steht für präzise Arbeit, moderne Beauty-Ästhetik und
              eine warme, persönliche Studioatmosphäre. Moni gibt ihr Wissen
              mit echter Leidenschaft weiter und legt Wert darauf, dass du dich
              während der Schulung sicher, gesehen und unterstützt fühlst.
            </p>
            <p>
              Hier lernst du nicht in einer unpersönlichen Massenveranstaltung,
              sondern in einem Umfeld, in dem Fragen erlaubt sind und Details
              zählen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {trustFeatures.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={14} strokeWidth={1.4} style={{ color: GOLD, flexShrink: 0 }} />
                <span
                  className="text-foreground/75 font-light"
                  style={{ fontSize: "0.88rem", letterSpacing: "0.01em" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* ══════════════════════════════════════
        Gallery — 2×2 editorial grid
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container-editorial">
        <div className="mb-14 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Einblicke
          </p>
          <h2
            className="text-foreground leading-[1.06] max-w-xl"
            style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            Einblicke in die Schulungen
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-5 reveal reveal-delay-1">
          {(["/images/schulung1.jpg", "/images/schulung2.jpg", "/images/schulung3.jpg", "/images/schulung4.jpg"] as const).map((img, i) => (
            <div key={i} className="hover-sweep relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden shadow-soft">
              <Image
                src={img}
                alt={`Monishine Lash Extension Schulung — Einblick ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={img === "/images/schulung1.jpg" ? { objectPosition: "center 20%" } : undefined}
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════
        Final CTA — dark section
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-editorial max-w-2xl reveal">
        <p className="eyebrow mb-5 text-background/45" style={{ letterSpacing: "0.3em" }}>
          Monishine Academy
        </p>
        <h2
          className="text-background leading-[1.06]"
          style={{ ...serif, fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
          Bereit für deinen Start als Lash Artist?
        </h2>
        <p className="mt-6 text-background/65 leading-[1.9] font-light max-w-lg">
          Wenn du Lash Extensions professionell lernen möchtest und dir eine
          persönliche, verständliche und praxisnahe Schulung wünschst, bist du
          bei Monishine genau richtig.
        </p>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-9 py-4 bg-background text-foreground text-xs tracking-[0.22em] uppercase font-normal transition-all duration-500 hover:bg-accent hover:text-background group"
          >
            Schulung anfragen
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <p className="mt-6 text-background/40 text-sm font-light leading-relaxed max-w-md">
          Gerne beraten wir dich persönlich, welche Schulung am besten zu
          deinem aktuellen Stand passt.
        </p>
      </div>
    </section>

  </SiteLayout>
);

export default Schulungen;
