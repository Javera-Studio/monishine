import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import moniImg from "@/assets/studio.jpg";
import salon1Img from "@/assets/studio.jpg";
import salon2Img from "@/assets/studio2.jpg";
import salon3Img from "@/assets/studio3.jpg";

const badges = [
  "Brows & Lashes Specialist",
  "5 Jahre Top Rated",
  "Zertifizierte Beauty Expertin",
  "Lash Extension Schulungen",
];

const UeberMich = () => (
  <SiteLayout>

    {/* ══════════════════════════════════════════
        Section 1 — Warum Monishine
    ══════════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-background">
      <div className="container-editorial">

        {/* Page header */}
        <div className="mb-14 md:mb-18 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Warum Monishine
          </p>
          <h1
            className="text-foreground leading-[1.05] max-w-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
              fontWeight: 300,
            }}
          >
            Beauty sollte sich nicht perfekt anfühlen —
            <em className="italic"> sondern persönlich.</em>
          </h1>
        </div>

        {/* Split: portrait left, text right */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Portrait */}
          <div className="lg:col-span-5 reveal">
            <div className="aspect-[4/5] overflow-hidden shadow-elegant">
              <img
                src={moniImg}
                alt="Moni — Monishine Beauty Studio Wien"
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="space-y-6 text-foreground/80 leading-[1.9] font-light text-base md:text-[1.05rem]">
              <p>
                Monishine steht für moderne Beauty Treatments mit Persönlichkeit,
                Präzision und einer Atmosphäre zum Wohlfühlen.
              </p>
              <p>
                Mit viel Liebe zum Detail, echter Leidenschaft für Brows &amp; Lashes
                und dem Wunsch, Menschen selbstbewusster und glücklicher zu machen,
                ist ein Studio entstanden, in dem sich jede Person willkommen fühlen
                darf — ganz ohne Druck, perfekt sein zu müssen.
              </p>
              <p>
                Ob natürliche Brows, Lash Extensions, Glow Treatments oder persönliche
                Beratung: Bei Monishine geht es nicht nur um Behandlungen, sondern
                darum, dass du dich schön, wohl und selbstbewusst fühlst.
              </p>
              <p
                className="text-foreground/65"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Für Ladies &amp; Gentlemen.<br />
                Warm. Persönlich. Modern.
              </p>
            </div>

            {/* Editorial quote */}
            <blockquote className="mt-10 pl-6 border-l-2 border-accent/35">
              <p
                className="italic text-foreground/35 leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 300,
                }}
              >
                Be your own kind of beautiful.
              </p>
            </blockquote>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3 py-1.5 border border-foreground/15 bg-background text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-10 border-t border-foreground/10">
              <Link to="/kontakt" className="btn-primary group">
                Termin buchen
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════
        Section 2 — Der Salon
    ══════════════════════════════════════════ */}
    <section className="py-24 md:py-32 bg-secondary/25">
      <div className="container-editorial">

        {/* Text block — two columns */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
              Ein Ort zum Wohlfühlen
            </p>
            <h2
              className="text-foreground leading-[1.06]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              Mehr als nur ein Beauty Studio.
            </h2>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1 space-y-5 text-foreground/80 leading-[1.9] font-light text-base md:text-[1.05rem]">
            <p>
              Monishine wurde mit dem Wunsch geschaffen, einen Ort zu schaffen, an dem
              Schönheit, Wohlbefinden und Persönlichkeit zusammenkommen.
            </p>
            <p>
              Warme Farben, eine ruhige Atmosphäre und moderne Eleganz sorgen dafür,
              dass sich jeder Besuch wie eine kleine Auszeit anfühlt — persönlich,
              entspannt und herzlich.
            </p>
            <p>
              Ob Brows, Lashes, Glow Treatments oder Beratung: Bei Monishine geht es
              nicht nur um Beauty, sondern darum, dass du dich willkommen, wohl und
              selbstbewusst fühlst.
            </p>
            <p
              className="text-foreground/65"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.15rem",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Ein Studio mit Liebe zum Detail.<br />
              Modern. Persönlich. Zum Wohlfühlen.
            </p>
          </div>
        </div>

        {/* Gallery: large left + two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-3 lg:gap-4 reveal reveal-delay-1">
          {/* Large feature image */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden shadow-soft">
            <img
              src={salon1Img}
              alt="Monishine Studio Wien — Behandlungsraum"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Two stacked images */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
            <div className="aspect-[4/3] overflow-hidden shadow-soft">
              <img
                src={salon2Img}
                alt="Monishine Studio Wien — Atmosphäre"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden shadow-soft">
              <img
                src={salon3Img}
                alt="Monishine Studio Wien — Details"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>

  </SiteLayout>
);

export default UeberMich;
