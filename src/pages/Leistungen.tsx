import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const TreatmentCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const isDark = index % 2 === 1;
  const href = category.href ?? `/leistungen/${category.slug}`;

  return (
    <Link
      to={href}
      className={`group flex flex-col overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-foreground hover:bg-primary-glow"
          : "bg-card border border-border/60 hover:border-foreground/25"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
            isDark ? "opacity-65 group-hover:opacity-80" : ""
          }`}
        />
      </div>
      <div className="flex flex-col flex-1 p-7 md:p-8">
        <p
          className={`text-[0.6rem] uppercase tracking-[0.24em] mb-3 font-light ${
            isDark ? "text-background/45" : "text-muted-foreground"
          }`}
        >
          {String(index + 1).padStart(2, "0")} — {category.tagline}
        </p>
        <h2
          className={`leading-[1.12] flex-1 ${isDark ? "text-background" : "text-foreground"}`}
          style={{ ...serif, fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)" }}
        >
          {category.title}
        </h2>
        <p
          className={`mt-3 text-sm leading-relaxed line-clamp-2 font-light ${
            isDark ? "text-background/55" : "text-muted-foreground"
          }`}
        >
          {category.description}
        </p>
        <span
          className={`mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b pb-1 transition-all duration-300 group-hover:gap-3 ${
            isDark
              ? "text-background/60 border-background/25 group-hover:text-background group-hover:border-background"
              : "text-foreground/70 border-foreground/25 group-hover:text-accent group-hover:border-accent"
          }`}
        >
          Entdecken <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
};

const Leistungen = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    cms.categories().then(setCategories);
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments & Services"
        title={<>Individuelle Treatments für <span className="italic text-accent">Ladies &amp; Gentlemen</span>.</>}
        intro="Brow Styling, Lashes, Permanent Make-up, Skin Treatments, Laser & mehr — sorgfältig zusammengestellt und persönlich auf dich abgestimmt."
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((c, i) => (
              <TreatmentCard key={c.id} category={c} index={i} />
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-serif text-2xl md:text-3xl max-w-md leading-snug">
              Lass uns gemeinsam dein ideales Treatment finden.
            </p>
            <Link to="/kontakt" className="btn-primary shrink-0">
              Termin buchen
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Leistungen;
