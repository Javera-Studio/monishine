import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";
import NotFound from "./NotFound";

const LeistungenCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<ServiceCategory | null | undefined>(undefined);

  useEffect(() => {
    if (!slug) return;
    cms.category(slug).then(setCategory);
  }, [slug]);

  if (category === undefined) {
    return (
      <SiteLayout>
        <div className="container-editorial py-32" />
      </SiteLayout>
    );
  }

  if (category === null) return <NotFound />;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-warm">
        <div className="container-editorial pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Link to="/leistungen" className="inline-flex items-center gap-2 eyebrow mb-8 hover:text-accent transition-colors">
              <ArrowLeft size={14} /> Alle Treatments
            </Link>
            <p className="eyebrow mb-6">{category.tagline}</p>
            <h1 className="display">{category.title}</h1>
            <p className="lede mt-7 max-w-xl">{category.description}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-accent">
              Für Ladies & Gentlemen
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="btn-primary">Termin buchen</Link>
              <Link to="/kontakt" className="btn-outline">Kostenlose Beratung</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden shadow-elegant">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments list */}
      <section className="py-20 md:py-28">
        <div className="container-editorial max-w-4xl">
          <div className="mb-12 md:mb-16">
            <p className="eyebrow mb-5">Treatments & Preise</p>
            <h2 className="headline">Behandlungen im Überblick.</h2>
          </div>

          <ul className="divide-y divide-border/70 border-t border-b border-border/70">
            {category.treatments.map((t) => (
              <li key={t.name} className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-7">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug">{t.name}</h3>
                  {t.description && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">{t.description}</p>
                  )}
                </div>
                <div className="md:col-span-3">
                  {t.duration && (
                    <>
                      <p className="eyebrow">Dauer</p>
                      <p className="mt-1 text-sm text-foreground">{t.duration}</p>
                    </>
                  )}
                </div>
                <div className="md:col-span-2 md:text-right">
                  {t.price && (
                    <>
                      <p className="eyebrow md:hidden">Preis</p>
                      <p className="mt-1 text-sm md:text-base text-accent font-medium">{t.price}</p>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-serif text-2xl max-w-md leading-snug">
              Bereit für dein nächstes Treatment?
            </p>
            <Link to="/kontakt" className="btn-primary shrink-0">
              Termin buchen
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LeistungenCategory;
