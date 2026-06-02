import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";

const FeaturedCard = ({ category, index }: { category: ServiceCategory; index: number }) => (
  <Link
    to={`/leistungen/${category.slug}`}
    className="group sm:col-span-2 lg:col-span-2 block bg-foreground text-background overflow-hidden relative hover:bg-primary-glow transition-colors duration-500"
  >
    <div className="grid lg:grid-cols-2 h-full">
      {/* Image */}
      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 transition-all duration-[1400ms] ease-out group-hover:scale-[1.04] group-hover:opacity-80"
        />
      </div>
      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col justify-between">
        <div>
          {/* Signature badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-background/20 text-[0.55rem] uppercase tracking-[0.25em] text-background/60 mb-6">
            <span style={{ fontSize: "0.4rem" }}>✦</span>
            Signature Treatment
          </span>
          <p className="eyebrow mb-3 text-background/50">
            {String(index + 1).padStart(2, "0")} — {category.tagline}
          </p>
          <h3
            className="text-background leading-[1.08]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)",
              fontWeight: 300,
            }}
          >
            {category.title}
          </h3>
          <p className="mt-4 text-sm text-background/60 leading-relaxed">
            {category.description}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-background/70 border-b border-background/30 pb-1 transition-all duration-300 group-hover:text-background group-hover:border-background group-hover:gap-3">
            Entdecken
            <ArrowUpRight size={14} />
          </span>
          <p
            className="font-script text-background/25"
            style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}
          >
            Brows. Lashes. Glow.
          </p>
        </div>
      </div>
    </div>
  </Link>
);

const CategoryCard = ({ category, index }: { category: ServiceCategory; index: number }) => (
  <Link
    to={`/leistungen/${category.slug}`}
    className="group block bg-card border border-border/60 hover:border-foreground/30 transition-all duration-500"
  >
    <div className="aspect-[4/5] overflow-hidden bg-muted">
      <img
        src={category.image}
        alt={category.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />
    </div>
    <div className="p-6 md:p-8">
      <p className="eyebrow mb-3">{String(index + 1).padStart(2, "0")} — {category.tagline}</p>
      <h3 className="font-serif text-2xl md:text-[1.75rem] leading-[1.15] text-foreground">
        {category.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {category.description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 group-hover:text-accent group-hover:border-accent group-hover:gap-3">
        Entdecken
        <ArrowUpRight size={14} />
      </span>
    </div>
  </Link>
);

const Treatments = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    cms.categories().then(setCategories);
  }, []);

  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-xl">
            <p
              className="font-script mb-2"
              style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: "hsl(var(--accent))", opacity: 0.45 }}
            >
              Brows. Lashes. Glow.
            </p>
            <p className="eyebrow mb-5">Treatments & Services</p>
            <h2 className="headline">Individuelle Treatments für Ladies &amp; Gentlemen.</h2>
            <p className="lede mt-6 max-w-lg">
              Jede Behandlung wird persönlich auf dich abgestimmt — vom feinen Brow Styling
              bis zum modernen Skin Treatment.
            </p>
          </div>
          <Link to="/leistungen" className="link-underline text-sm">
            Alle Leistungen
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((c, i) =>
            c.featured ? (
              <FeaturedCard key={c.id} category={c} index={i} />
            ) : (
              <CategoryCard key={c.id} category={c} index={i} />
            )
          )}
        </div>

        <div className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-2xl md:text-3xl max-w-md leading-snug">
            Nicht sicher, welche Behandlung zu dir passt?
          </p>
          <Link to="/kontakt" className="btn-primary shrink-0">
            Kostenlose Beratung
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
