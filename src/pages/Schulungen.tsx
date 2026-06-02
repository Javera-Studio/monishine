import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import schulung1 from "@/assets/IMG_2081.jpeg";
import schulung2 from "@/assets/IMG_2085.jpeg";
import schulung3 from "@/assets/IMG_2086.jpeg";
import schulung4 from "@/assets/IMG_6555.jpeg";

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

const targetBadges = [
  "Anfängerinnen",
  "Beauty Artists",
  "Wiedereinsteigerinnen",
  "Technik auffrischen",
  "Angebot erweitern",
];

const trustBadges = [
  "Persönliche Betreuung",
  "Praxisorientiertes Lernen",
  "Moderne Lash Techniken",
  "Erfahrung aus dem Studioalltag",
  "Zertifizierte Beauty Expertin",
  "Brows & Lashes Specialist",
];

const serif: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
};

const Schulungen = () => (
  <SiteLayout>

    {/* ══════════════════════════════════════
        Hero
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-36 bg-gradient-warm">
      <div className="container-editorial">
        <div className="max-w-3xl reveal">
          <p className="eyebrow mb-6 text-accent" style={{ letterSpacing: "0.3em" }}>
            Monishine Academy
          </p>
          <h1
            className="text-foreground leading-[1.02]"
            style={{ ...serif, fontSize: "clamp(3rem, 5.5vw, 5.25rem)" }}
          >
            Werde Lash Artist mit{" "}
            <em className="italic">Technik, Gefühl &amp; Selbstvertrauen.</em>
          </h1>
          <p className="lede mt-8 max-w-2xl">
            Professionelle Lash Extension Schulungen in persönlicher
            Studioatmosphäre — praxisnah, verständlich und mit viel Liebe zum
            Detail.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start">
            <Link to="/kontakt" className="btn-primary group">
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
      </div>
    </section>

    {/* ══════════════════════════════════════
        Intro — image + text
    ══════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 reveal">
          <div className="aspect-[4/5] overflow-hidden shadow-elegant">
            <img
              src={schulung1}
              alt="Lash Extension Schulung bei Monishine"
              loading="lazy"
              className="w-full h-full object-cover"
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
        Topics grid
    ══════════════════════════════════════ */}
    <section id="inhalte" className="py-24 md:py-32 bg-secondary/20">
      <div className="container-editorial">
        <div className="mb-14 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Schulungsinhalte
          </p>
          <h2
            className="text-foreground leading-[1.06] max-w-xl"
            style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            Was du in der Schulung lernst
          </h2>
        </div>

        {/* Numbered topic cards with 1px grid-gap border effect */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border reveal">
          {topics.map((topic, i) => (
            <div key={topic} className="bg-background p-7 md:p-8 flex items-start gap-5">
              <span
                className="shrink-0 text-accent leading-none mt-0.5"
                style={{ ...serif, fontSize: "1.75rem" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground/80 font-light leading-relaxed text-sm md:text-[0.95rem]">
                {topic}
              </p>
            </div>
          ))}
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
          <div className="flex flex-wrap gap-2">
            {targetBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 border border-foreground/15 bg-background text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {badge}
              </span>
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
          <div className="flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 border border-foreground/15 bg-background text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {badge}
              </span>
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
          {([schulung1, schulung2, schulung3, schulung4] as const).map((img, i) => (
            <div key={i} className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden shadow-soft">
              <img
                src={img}
                alt={`Monishine Lash Extension Schulung — Einblick ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
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
            to="/kontakt"
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
