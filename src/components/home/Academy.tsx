import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Heart, Award, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { Icon: LucideIcon; title: string; description: string }[] = [
  { Icon: Users,    title: "Kleine Gruppen",                  description: "Mehr Zeit für jede Teilnehmerin"                          },
  { Icon: Heart,    title: "Persönliche Betreuung",           description: "Direkte Unterstützung während der gesamten Schulung"      },
  { Icon: Award,    title: "Zertifizierter Abschluss",        description: "Offizielles Zertifikat nach erfolgreichem Abschluss"      },
  { Icon: Sparkles, title: "Dein Start in die Beauty-Branche", description: "Ideal für Anfängerinnen und Quereinsteigerinnen"         },
];

const Academy = () => (
  <section className="surface-taupe pt-16 md:pt-32 pb-6 md:pb-10">
    <div className="container-editorial">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* ── Text ── */}
        <div className="lg:col-span-5 lg:pr-6 reveal">
          <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
            Academy & Schulungen
          </p>
          <h2
            className="text-foreground leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              fontWeight: 300,
            }}
          >
            Mehr als nur eine Schulung —
            <em className="italic"> ein Start in deine Beauty Karriere.</em>
          </h2>
          <p className="lede mt-7">
            In den Monishine Lash Extension Schulungen lernst du nicht nur
            Technik, sondern auch Präzision, Ästhetik und den sicheren Umgang
            mit Kundinnen.
          </p>
          <p className="mt-4 text-foreground/75 leading-[1.85] font-light text-sm md:text-base">
            Mit persönlicher Betreuung, viel Geduld und echter Leidenschaft
            gibt Moni ihr Wissen praxisnah weiter — für alle, die
            selbstbewusst als Lash Artist starten oder ihr Können
            weiterentwickeln möchten.
          </p>

          <div className="mt-10 pt-7 border-t border-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6">
            {features.map(({ Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-2">
                <Icon
                  size={16}
                  strokeWidth={1.3}
                  style={{ color: "#D8B98A" }}
                />
                <p
                  className="text-foreground font-light leading-snug"
                  style={{ fontSize: "0.78rem", letterSpacing: "0.01em" }}
                >
                  {title}
                </p>
                <p
                  className="text-foreground/55 font-light leading-[1.6]"
                  style={{ fontSize: "0.68rem" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/schulungen" className="btn-primary group">
              Mehr über die Schulungen erfahren
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ── Staggered image grid ── */}
        <div className="lg:col-span-7 reveal reveal-delay-1">
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="space-y-3 lg:space-y-4">
              <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-soft">
                <Image
                  src="/images/schulung1.jpg"
                  alt="Monishine Lash Extension Schulung"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-soft">
                <Image
                  src="/images/schulung3.jpg"
                  alt="Lash Extension Training bei Monishine"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-3 lg:space-y-4 mt-10 lg:mt-14">
              <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-soft">
                <Image
                  src="/images/schulung2.jpg"
                  alt="Monishine Lash Artist Ausbildung"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="hover-sweep relative aspect-[4/5] overflow-hidden shadow-soft">
                <Image
                  src="/images/schulung4.jpg"
                  alt="Lash Extension Workshop"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Academy;
