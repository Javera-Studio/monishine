import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import schulung1 from "@/assets/schulung1.jpg";
import schulung2 from "@/assets/schulung2.jpg";
import schulung3 from "@/assets/schulung3.jpg";
import schulung4 from "@/assets/schulung4.jpg";

const badges = [
  "Lash Extension Schulungen",
  "Persönliche Betreuung",
  "Praxisnahes Lernen",
  "Für Anfänger & Fortgeschrittene",
];

const Academy = () => (
  <section className="surface-taupe py-16 md:py-32">
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

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center px-3 py-1.5 border border-foreground/15 bg-background/80 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {badge}
              </span>
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
