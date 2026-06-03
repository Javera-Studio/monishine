import { Link } from "react-router-dom";
import { ArrowRight, Award, Sparkles, Wand2, Users } from "lucide-react";
import schulung1 from "@/assets/schulung1.jpg";
import schulung2 from "@/assets/schulung2.jpg";
import schulung3 from "@/assets/schulung3.jpg";
import schulung4 from "@/assets/schulung4.jpg";
import type { LucideIcon } from "lucide-react";

const features: { Icon: LucideIcon; text: string }[] = [
  { Icon: Award,    text: "Zertifizierte\nSchulung"         },
  { Icon: Sparkles, text: "Persönliche\nBetreuung"          },
  { Icon: Wand2,    text: "Praxisnahes\nLernen"             },
  { Icon: Users,    text: "Für Anfänger &\nFortgeschrittene" },
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
              fontFamily: "'Cormorant Garamond', Georgia, serif",
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

          <div className="mt-10 pt-7 border-t border-foreground/10 grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-6">
            {features.map(({ Icon, text }) => (
              <div key={text} className="flex flex-col gap-2.5">
                <Icon
                  size={16}
                  strokeWidth={1.3}
                  style={{ color: "#D8B98A" }}
                />
                <span
                  className="text-foreground/65 font-light uppercase leading-[1.75]"
                  style={{ fontSize: "0.57rem", letterSpacing: "0.2em", whiteSpace: "pre-line" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/schulungen" className="btn-primary group">
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
              <div className="aspect-[4/5] overflow-hidden shadow-soft">
                <img
                  src={schulung1}
                  alt="Monishine Lash Extension Schulung"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden shadow-soft">
                <img
                  src={schulung3}
                  alt="Lash Extension Training bei Monishine"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="space-y-3 lg:space-y-4 mt-10 lg:mt-14">
              <div className="aspect-[4/5] overflow-hidden shadow-soft">
                <img
                  src={schulung2}
                  alt="Monishine Lash Artist Ausbildung"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden shadow-soft">
                <img
                  src={schulung4}
                  alt="Lash Extension Workshop"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
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
