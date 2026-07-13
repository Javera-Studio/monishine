import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Über Monishine",
  description:
    "Lerne Monishine kennen — Premium Beauty & Glow Studio in Hamburg. Persönliche Betreuung, moderne Treatments und ein Ort zum Wohlfühlen.",
  alternates: { canonical: "/ueber-mich" },
};

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
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.2rem, 4.8vw, 4.4rem)",
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
            <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-elegant">
              <Image
                src="/images/moni.jpeg"
                alt="Moni — Monishine Beauty Studio Wien"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 100vw"
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
                  fontFamily: "var(--font-cormorant), Georgia, serif",
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
            <div className="mt-10 mb-6">
              <p
                className="font-script shimmer-gold"
                style={{ fontSize: "clamp(2.2rem, 3.2vw, 3.2rem)" }}
              >
                Be your own kind of beautiful.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-10 border-t border-foreground/10">
              <Link href="/kontakt" className="btn-primary group">
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
    <section className="py-24 md:py-32 surface-taupe">
      <div className="container-editorial">

        {/* Eyebrow + headline — full width above grid */}
        <div className="mb-10 md:mb-12 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Ein Ort zum Wohlfühlen
          </p>
          <h2
            className="text-foreground leading-[1.06]"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 300,
            }}
          >
            Mehr als nur ein Beauty Studio.
          </h2>
        </div>

        {/* Grid: eingang image left, text right — both start at same level.
            Image column is 10% wider than an even 5/12 split (5.5fr vs 6.5fr). */}
        <div className="grid lg:grid-cols-[5.5fr_6.5fr] gap-12 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="reveal">
            <div className="relative aspect-[4/3] overflow-hidden shadow-soft">
              <Image
                src="/images/eingang.jpg"
                alt="Monishine Studio Wien — Eingang"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          </div>

          <div className="reveal reveal-delay-1 space-y-5 text-foreground/80 leading-[1.9] font-light text-base md:text-[1.05rem]">
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
                fontFamily: "var(--font-cormorant), Georgia, serif",
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

        {/* ── Editorial gallery — aligned grid ── */}
        <div className="space-y-4 reveal reveal-delay-1">

          {/* Row 1: dominant left (60%) · accent right (40%) */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 md:h-[460px]">
            <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden shadow-soft">
              <Image
                src="/images/salon1.png"
                alt="Monishine Studio Wien — Behandlungsraum"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden shadow-soft">
              <Image
                src="/images/salon5.jpeg"
                alt="Monishine Studio Wien — Studio Detail"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>

          {/* Row 2: three equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:h-[300px]">
            <div className="relative aspect-[3/2] sm:aspect-auto overflow-hidden shadow-soft">
              <Image
                src="/images/salon2.jpeg"
                alt="Monishine Studio Wien — Atmosphäre"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[3/2] sm:aspect-auto overflow-hidden shadow-soft">
              <Image
                src="/images/IMG_0578.jpeg"
                alt="Monishine Beauty Studio Wien"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{ objectPosition: "right center" }}
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
            <div className="relative aspect-[3/2] sm:aspect-auto overflow-hidden shadow-soft">
              <Image
                src="/images/salon3.jpeg"
                alt="Monishine Studio Wien — Details"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>

  </SiteLayout>
);

export default UeberMich;
