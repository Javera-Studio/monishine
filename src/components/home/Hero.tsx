import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-skin.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-warm">
    <div className="container-editorial pt-16 md:pt-28 pb-20 md:pb-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-7 reveal">
        <p className="eyebrow mb-8">Premium Beauty &amp; Glow Studio · Wien</p>
        <h1 className="display">
          Eine Beauty-Routine, die deine{" "}
          <span className="italic text-accent">natürliche</span> Schönheit unterstreicht.
        </h1>
        <p className="lede mt-10 max-w-xl">
          Bei Monishine verbinden wir moderne Treatments mit warmer, persönlicher
          Betreuung — für ein Ergebnis, das sich genauso gut anfühlt wie es aussieht.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link to="/kontakt" className="btn-primary group">
            Termin buchen
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/leistungen" className="btn-outline">
            Treatments entdecken
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 max-w-2xl border-t border-foreground/10 pt-10">
          {[
            ["Persönlich", "1:1 Beratung"],
            ["Premium", "Hochwertige Produkte"],
            ["Erfahren", "Geprüfte Expertise"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="eyebrow text-accent">{k}</p>
              <p className="mt-2 text-sm text-foreground/75 font-light">{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 reveal reveal-delay-2">
        <div className="relative aspect-[3/4] overflow-hidden shadow-elegant">
          <img
            src={heroImg}
            alt="Monishine Beauty Studio in Wien"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
