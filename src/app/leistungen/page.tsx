import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Alle Treatments bei Monishine im Überblick: Brow Styling, Lash Extensions, Permanent Make-up, Gesichtsbehandlungen, dauerhafte Haarentfernung und mehr — in Hamburg.",
  alternates: { canonical: "/leistungen" },
};

const vnImages = [
  { src: "/images/vorhernachher1.jpg", w: 720, h: 593 },
  { src: "/images/vorhernachher2.jpg", w: 715, h: 565 },
  { src: "/images/vorhernachher3.jpg", w: 1774, h: 887 },
  { src: "/images/vorhernachher4.jpg", w: 1623, h: 969 },
];

const serif = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontWeight: 300,
} as const;

const FEATURED_IDS = ["lash-extensions", "brows-lash-styling"];
const GRID_IDS = [
  "permanent-make-up",
  "pmu-removal",
  "gesichtsbehandlungen",
  "haarentfernung",
  "koerperbehandlungen",
  "fineline-tattoo",
];

const FeaturedCard = ({ category, isDark }: { category: ServiceCategory; isDark: boolean }) => {
  const href = category.href ?? `/leistungen/${category.slug}`;
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-foreground hover:bg-primary-glow"
          : "bg-card border border-border/60 hover:border-foreground/25"
      }`}
    >
      <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden shrink-0">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className={`object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
            isDark ? "opacity-70 group-hover:opacity-85" : ""
          }`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-8 md:p-10 lg:p-12">
        <p className={`text-[0.58rem] uppercase tracking-[0.26em] mb-4 font-light ${isDark ? "text-background/45" : "text-muted-foreground"}`}>
          {category.tagline}
        </p>
        <h2 className={`leading-[1.1] ${isDark ? "text-background" : "text-foreground"}`}
          style={{ ...serif, fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}>
          {category.title}
        </h2>
        <p className={`mt-4 text-sm leading-relaxed font-light ${isDark ? "text-background/55" : "text-muted-foreground"}`}>
          {category.description}
        </p>
        <span className={`mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b pb-1 transition-all duration-300 group-hover:gap-3 ${
          isDark
            ? "text-background/60 border-background/25 group-hover:text-background group-hover:border-background"
            : "text-foreground/70 border-foreground/25 group-hover:text-accent group-hover:border-accent"
        }`}>
          Entdecken <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
};

const GridCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const isDark = index % 2 === 1;
  const href = category.href ?? `/leistungen/${category.slug}`;
  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-foreground hover:bg-primary-glow"
          : "bg-card border border-border/60 hover:border-foreground/25"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className={`object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${isDark ? "opacity-65 group-hover:opacity-80" : ""}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-7 md:p-8">
        <p className={`text-[0.6rem] uppercase tracking-[0.24em] mb-3 font-light ${isDark ? "text-background/45" : "text-muted-foreground"}`}>
          {category.tagline}
        </p>
        <h2 className={`leading-[1.12] flex-1 ${isDark ? "text-background" : "text-foreground"}`}
          style={{ ...serif, fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)" }}>
          {category.title}
        </h2>
        <p className={`mt-3 text-sm leading-relaxed line-clamp-2 font-light ${isDark ? "text-background/55" : "text-muted-foreground"}`}>
          {category.description}
        </p>
        <span className={`mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border-b pb-1 transition-all duration-300 group-hover:gap-3 ${
          isDark
            ? "text-background/60 border-background/25 group-hover:text-background group-hover:border-background"
            : "text-foreground/70 border-foreground/25 group-hover:text-accent group-hover:border-accent"
        }`}>
          Entdecken <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
};

export default async function Leistungen() {
  const categories = await cms.categories();

  const featured = FEATURED_IDS
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as ServiceCategory[];

  const grid = GRID_IDS
    .map(id => categories.find(c => c.id === id))
    .filter(Boolean) as ServiceCategory[];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Treatments & Services"
        title={<>Individuelle Treatments für <span className="italic text-accent">Ladies &amp; Gentlemen</span>.</>}
        intro="Brow Styling, Lashes, Permanent Make-up, Skin Treatments, Laser & mehr — sorgfältig zusammengestellt und persönlich auf dich abgestimmt."
      />

      <section className="pt-20 md:pt-28 pb-0">
        <div className="container-editorial">

          {/* Tier 1 */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              {featured.map((c, i) => (
                <FeaturedCard key={c.id} category={c} isDark={i === 0} />
              ))}
            </div>
          )}

          {/* Tier 2 */}
          {grid.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {grid.map((c, i) => (
                <GridCard key={c.id} category={c} index={i} />
              ))}
            </div>
          )}

          <div className="mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-serif text-2xl md:text-3xl max-w-md leading-snug">
              Lass uns gemeinsam dein ideales Treatment finden.
            </p>
            <Link href="/kontakt" className="btn-primary shrink-0">
              Termin buchen
            </Link>
          </div>

        </div>

        {/* ── Vorher/Nachher image marquee ── */}
        <div className="marquee-outer overflow-hidden mt-16 md:mt-20 -mx-6 md:-mx-12 lg:-mx-20">
          <div
            className="marquee-track flex gap-3 md:gap-4"
            style={{ animation: "marquee 50s linear infinite" }}
          >
            {[...vnImages, ...vnImages].map((img, i) => (
              <div key={i} className="shrink-0 overflow-hidden shadow-soft">
                <Image
                  src={img.src}
                  width={img.w}
                  height={img.h}
                  alt={`Vorher Nachher ${(i % 4) + 1}`}
                  loading="lazy"
                  className="h-[240px] md:h-[320px] w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="pb-16 md:pb-20" />

      </section>
    </SiteLayout>
  );
}
