import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { cms } from "@/lib/cms/provider";

export async function generateStaticParams() {
  const categories = await cms.categories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await cms.category(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/leistungen/${category.slug}` },
  };
}

export default async function LeistungenCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await cms.category(slug);

  if (!category) notFound();

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-warm">
        <div className="container-editorial pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Link href="/leistungen" className="inline-flex items-center gap-2 eyebrow mb-8 hover:text-accent transition-colors">
              <ArrowLeft size={14} /> Alle Treatments
            </Link>
            <p className="eyebrow mb-6">{category.tagline}</p>
            <h1 className="display">{category.title}</h1>
            <p className="lede mt-7 max-w-xl">{category.description}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.22em] text-accent">
              Für Ladies & Gentlemen
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary">Termin buchen</Link>
              <Link href="/kontakt" className="btn-outline">Kostenlose Beratung</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden shadow-elegant">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
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
            <Link href="/kontakt" className="btn-primary shrink-0">
              Termin buchen
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
