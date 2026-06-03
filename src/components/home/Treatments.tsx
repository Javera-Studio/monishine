import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";
import vn1 from "@/assets/vorhernachher1.jpg";
import vn2 from "@/assets/vorhernachher2.jpg";
import vn3 from "@/assets/vorhernachher3.jpg";
import vn4 from "@/assets/vorhernachher4.jpg";

const vnImages = [vn1, vn2, vn3, vn4];

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

// Tier 1 — signature specialties, displayed side by side
const FEATURED_IDS = ["lash-extensions", "brows-lash-styling"];
// Tier 2 — secondary treatments, 3×2 grid
const GRID_IDS = [
  "permanent-make-up",
  "pmu-removal",
  "gesichtsbehandlungen",
  "haarentfernung",
  "koerperbehandlungen",
  "fineline-tattoo",
];

/* ── card colour tokens — bypasses surface-taupe CSS-variable remap ── */
const LIGHT = {
  bg:     "#FAF7F2",
  border: "1px solid #E5DDD3",
  label:  "#B28F78",
  title:  "#241E1A",
  body:   "#5F554D",
  link:   "#7A6657",
  linkBorder: "#D0C3B5",
};
const DARK = {
  bg:     "#3D2F26",
  label:  "rgba(248,245,240,0.48)",
  title:  "#F8F5F0",
  body:   "rgba(248,245,240,0.64)",
  link:   "rgba(248,245,240,0.58)",
  linkBorder: "rgba(248,245,240,0.22)",
};

/* ── Tier 1 card ────────────────────────────────────────────── */
const FeaturedCard = ({ category, isDark }: { category: ServiceCategory; isDark: boolean }) => {
  const href = category.href ?? `/leistungen/${category.slug}`;
  const c = isDark ? DARK : LIGHT;
  return (
    <Link
      to={href}
      className="group flex flex-col overflow-hidden transition-all duration-500"
      style={{ backgroundColor: c.bg, border: isDark ? "none" : LIGHT.border }}
    >
      {/* Tall image — full clarity, no overlay */}
      <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden shrink-0">
        <img
          src={category.image}
          alt={category.title}
          loading="eager"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8 md:p-10 lg:p-12">
        <p
          className="text-[0.58rem] uppercase tracking-[0.26em] mb-4 font-light"
          style={{ color: c.label }}
        >
          {category.tagline}
        </p>
        <h3
          className="leading-[1.1]"
          style={{ ...serif, fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)", color: c.title }}
        >
          {category.title}
        </h3>
        <p
          className="mt-4 text-sm leading-relaxed font-light"
          style={{ color: c.body }}
        >
          {category.description}
        </p>
        <span
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b pb-1 transition-all duration-300 group-hover:gap-3"
          style={{ color: c.link, borderColor: c.linkBorder }}
        >
          Entdecken <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
};

/* ── Tier 2 card ────────────────────────────────────────────── */
const GridCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const isDark = index % 2 === 1;
  const href = category.href ?? `/leistungen/${category.slug}`;
  const c = isDark ? DARK : LIGHT;
  return (
    <Link
      to={href}
      className="group flex flex-col overflow-hidden transition-all duration-500"
      style={{ backgroundColor: c.bg, border: isDark ? "none" : LIGHT.border }}
    >
      {/* Image — full clarity, no overlay */}
      <div className="aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col flex-1 p-7 md:p-8">
        <p
          className="text-[0.6rem] uppercase tracking-[0.24em] mb-3 font-light"
          style={{ color: c.label }}
        >
          {category.tagline}
        </p>
        <h3
          className="leading-[1.12] flex-1"
          style={{ ...serif, fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)", color: c.title }}
        >
          {category.title}
        </h3>
        <p
          className="mt-3 text-sm leading-relaxed line-clamp-2 font-light"
          style={{ color: c.body }}
        >
          {category.description}
        </p>
        <span
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b pb-1 transition-all duration-300 group-hover:gap-3"
          style={{ color: c.link, borderColor: c.linkBorder }}
        >
          Entdecken <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
};

/* ── Section ────────────────────────────────────────────────── */
const Treatments = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    cms.categories().then(setCategories);
  }, []);

  const featured = FEATURED_IDS
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as ServiceCategory[];

  const grid = GRID_IDS
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as ServiceCategory[];

  return (
    <section className="pt-16 md:pt-32 pb-0 surface-taupe">
      <div className="container-editorial">

        {/* Section header — 2-column editorial */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12 md:mb-20 items-start">

          {/* Left — slogan · eyebrow · headline · lede */}
          <div className="lg:col-span-7">
            <p
              className="font-script shimmer-gold mb-2"
              style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}
            >
              Brows. Lashes. Glow.
            </p>
            <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
              Treatments & Services
            </p>
            <h2 className="headline">Individuelle Treatments für Ladies &amp; Gentlemen.</h2>
            <p className="lede mt-6">
              Jede Behandlung wird persönlich auf dich abgestimmt — vom feinen Brow Styling
              bis zum modernen Skin Treatment.
            </p>
          </div>

          {/* Right — stats stacked · link */}
          <div className="lg:col-span-5 lg:pt-3 flex flex-col">
            <div>
              {([
                { value: "400+",         label: "Zufriedene Kund:innen" },
                { value: "5 Jahre",      label: "Top Rated Studio"      },
                { value: "Zertifiziert", label: "Beauty Expertin"       },
              ] as const).map(({ value, label }, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-5 border-b border-foreground/10"
                >
                  <span
                    className="text-foreground leading-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 300,
                      fontSize: "clamp(1.55rem, 2vw, 2rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-foreground/50 font-light uppercase text-right"
                    style={{ fontSize: "0.56rem", letterSpacing: "0.22em", lineHeight: 1.6 }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link to="/leistungen" className="link-underline text-sm">
                Alle Leistungen <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        {/* ── Tier 1: two large featured cards ── */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {featured.map((c, i) => (
              <FeaturedCard key={c.id} category={c} isDark={i === 0} />
            ))}
          </div>
        )}

        {/* ── Tier 2: 3×2 secondary grid ── */}
        {grid.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {grid.map((c, i) => (
              <GridCard key={c.id} category={c} index={i} />
            ))}
          </div>
        )}

        {/* Script slogan — directly under the grid */}
        <div className="mt-12 md:mt-16 text-center">
          <p
            className="font-script shimmer-gold"
            style={{ fontSize: "clamp(2.1rem, 2.6vw, 2.6rem)" }}
          >
            Natürlich schön. Sichtbar selbstbewusst.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14 pt-10 md:pt-14 border-t border-foreground/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h3
              className="text-foreground leading-[1.12]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 2.8vw, 2.9rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Du weißt noch nicht, welche Behandlung zu dir passt?
            </h3>
            <p
              className="mt-5 text-foreground/65 font-light leading-[1.85]"
              style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
            >
              Ob Brows, Lashes, Laser oder Skin Treatment – wir beraten dich persönlich
              und finden gemeinsam die passende Behandlung.
            </p>
            <div className="mt-8">
              <Link to="/kontakt" className="btn-primary">
                Kostenlose Beratung buchen
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-14 border-b border-foreground/10" />
        </div>

      </div>

      {/* ── Vorher/Nachher headline ── */}
      <div className="container-editorial mt-16 md:mt-20 mb-8 md:mb-10 text-center">
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            color: "hsl(var(--foreground))",
            letterSpacing: "-0.005em",
          }}
        >
          Natürlich. Präzise. Sichtbar.
        </h3>
        <p className="mt-4 text-foreground/75 font-light text-sm md:text-base max-w-xl mx-auto leading-[1.85]">
          Jede Behandlung wird individuell auf dich abgestimmt. Hier siehst du echte Ergebnisse aus dem Studio.
        </p>
      </div>

      {/* ── Vorher/Nachher image marquee ── */}
      <div className="marquee-outer overflow-hidden">
        <div
          className="marquee-track flex gap-3 md:gap-4"
          style={{ animation: "marquee 50s linear infinite" }}
        >
          {[...vnImages, ...vnImages].map((src, i) => (
            <div key={i} className="shrink-0 overflow-hidden shadow-soft">
              <img
                src={src}
                alt={`Vorher Nachher ${(i % 4) + 1}`}
                loading="lazy"
                className="h-[240px] md:h-[320px] w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Treatments;
