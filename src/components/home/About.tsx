import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/moni.jpeg";

const About = () => (
  <section className="py-24 md:py-32 bg-secondary/40">
    <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

      {/* Portrait */}
      <div className="lg:col-span-5 reveal">
        <div className="aspect-[4/5] overflow-hidden shadow-elegant">
          <img
            src={portrait}
            alt="Moni — Monishine Beauty Studio"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-7 reveal reveal-delay-1">
        <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
          Why Monishine
        </p>

        <h2
          className="text-foreground leading-[1.05]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.7rem, 3vw, 3rem)",
            fontWeight: 300,
          }}
        >
          Beauty sollte sich nicht perfekt anfühlen —
          <em className="italic"> sondern persönlich.</em>
        </h2>

        <div className="mt-7 space-y-5 text-foreground/80 leading-[1.9] font-light">
          <p>
            Monishine steht für moderne Beauty Treatments mit Persönlichkeit,
            Präzision und einer Atmosphäre zum Wohlfühlen.
          </p>
          <p>
            Mit viel Liebe zum Detail, echter Leidenschaft für Brows &amp; Lashes
            und dem Wunsch, Menschen selbstbewusster und glücklicher zu machen,
            ist ein Studio entstanden, in dem sich jede Person willkommen
            fühlen darf.
          </p>
          <p>
            Ob natürliche Brows, Lash Extensions, Glow Treatments oder
            Permanent Make-up – bei Monishine geht es nicht nur um
            Behandlungen, sondern darum, dass du dich schön, wohl und
            selbstbewusst fühlst.
          </p>
        </div>

        {/* Tagline */}
        <p
          className="mt-7 text-foreground/60"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.1rem",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          Für Ladies &amp; Gentlemen.<br />
          Warm. Persönlich. Modern.
        </p>

        {/* CTA */}
        <div className="mt-10 pt-8 border-t border-foreground/10">
          <Link to="/ueber-mich" className="btn-primary group">
            Mehr über Monishine
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default About;
