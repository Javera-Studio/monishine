import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";

const Leistungen = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    cms.categories().then(setCategories);
  }, []);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments & Services"
        title={<>Individuelle Treatments für <span className="italic text-accent">Ladies & Gentlemen</span>.</>}
        intro="Brow Styling, Lashes, Permanent Make-up, Skin Treatments, Laser & mehr — sorgfältig zusammengestellt und persönlich auf dich abgestimmt."
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((c, i) => (
              <Link
                key={c.id}
                to={`/leistungen/${c.slug}`}
                className="group block bg-card border border-border/60 hover:border-foreground/30 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="eyebrow mb-3">{String(i + 1).padStart(2, "0")} — {c.tagline}</p>
                  <h2 className="font-serif text-2xl md:text-[1.75rem] leading-[1.15] text-foreground">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {c.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 group-hover:text-accent group-hover:border-accent group-hover:gap-3">
                    Entdecken
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
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
