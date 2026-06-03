import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { cms } from "@/lib/cms/provider";
import type { ServiceCategory } from "@/content/types";
import preiseImg from "@/assets/preise.jpg";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

// Mapping requested page categories to internal category IDs.
// "Brows & Lashes" merges brows-lash-styling content (lash-extensions is its own section).
const PRICE_GROUPS: { label: string; ids: string[] }[] = [
  { label: "Lash Extensions", ids: ["lash-extensions"] },
  { label: "Brows & Lashes", ids: ["brows-lash-styling"] },
  { label: "Permanent Make-up", ids: ["permanent-make-up", "pmu-removal"] },
  { label: "Gesichtsbehandlungen", ids: ["gesichtsbehandlungen"] },
  { label: "Dauerhafte Haarentfernung", ids: ["haarentfernung"] },
  { label: "Körperbehandlungen", ids: ["koerperbehandlungen"] },
  { label: "Fineline Tattoos", ids: ["fineline-tattoo"] },
];

const priceFaqs = [
  {
    q: "Wie kann ich meinen Termin verschieben?",
    a: "Eine Terminverschiebung ist bis 24 Stunden vor deinem Termin kostenlos möglich.",
  },
  {
    q: "Was passiert bei einer kurzfristigen Absage?",
    a: "Bei Absagen weniger als 24 Stunden vor dem Termin kann eine Ausfallgebühr von 50 % des Behandlungspreises berechnet werden.",
  },
  {
    q: "Was passiert, wenn ich nicht erscheine?",
    a: "Nicht wahrgenommene Termine ohne vorherige Absage werden mit 50 % des vereinbarten Behandlungspreises verrechnet.",
  },
  {
    q: "Was passiert bei Verspätung?",
    a: "Je nach Behandlung kann die Behandlungszeit verkürzt oder der Termin verschoben werden.",
  },
];

const trustItems = [
  { value: "400+", label: "Zufriedene Kunden" },
  { value: "5 Jahre", label: "Treatwell Top Rated" },
  { value: "1:1", label: "Persönliche Beratung" },
  { value: "Alle", label: "Ladies & Gentlemen willkommen" },
];

const PriceTable = ({ category }: { category: ServiceCategory }) => (
  <div className="reveal">
    <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-foreground/[0.12]">
      <h3
        className="text-foreground leading-[1.1]"
        style={{ ...serif, fontSize: "clamp(1.4rem, 2vw, 1.9rem)" }}
      >
        {category.title}
      </h3>
      <p className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground font-light hidden sm:block">
        {category.tagline}
      </p>
    </div>
    <ul className="divide-y divide-foreground/[0.07]">
      {category.treatments.map((t, i) => (
        <li key={i} className="py-3 flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p
              className="text-foreground/90 mb-1"
              style={{ ...serif, fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)" }}
            >
              {t.name}
            </p>
            {t.description && (
              <p className="text-xs md:text-sm text-foreground/55 font-light leading-relaxed">
                {t.description}
              </p>
            )}
            {t.duration && (
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/80 font-light">
                {t.duration}
              </p>
            )}
          </div>
          <p
            className="shrink-0 text-accent whitespace-nowrap"
            style={{ ...serif, fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)" }}
          >
            {t.price ?? "auf Anfrage"}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const FaqItem = ({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-foreground/[0.07]">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
    >
      <span
        className="text-foreground/85 group-hover:text-foreground transition-colors pr-4"
        style={{ ...serif, fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
      >
        {q}
      </span>
      <span className="shrink-0 text-accent/50 group-hover:text-accent transition-colors">
        {open ? <Minus size={15} strokeWidth={1.5} /> : <Plus size={15} strokeWidth={1.5} />}
      </span>
    </button>
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="pb-7 text-foreground/60 font-light leading-[1.9] text-sm md:text-[0.95rem] max-w-2xl">
          {a}
        </p>
      </div>
    </div>
  </div>
);

const Preise = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    cms.categories().then(setCategories);
  }, []);

  const findCat = (id: string) => categories.find((c) => c.id === id);

  return (
    <SiteLayout>
     <div className="surface-taupe">
      {/* ── Hero ── */}
      <section>

        <div className="container-editorial pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="eyebrow mb-6">Monishine Beauty Studio</p>
              <h1
                className="display"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 4.4rem)" }}
              >
                Alle Preise auf einen Blick
              </h1>
              <p className="lede mt-7">
                Bei Monishine erwarten dich hochwertige Beauty Treatments mit transparenter
                Preisgestaltung. Alle Leistungen werden individuell auf dich abgestimmt und in
                persönlicher Atmosphäre durchgeführt.
              </p>
              <div className="mt-10">
                <a
                  href="https://wa.me/4917634050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Termin buchen
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="overflow-hidden shadow-elegant">
              <img
                src={preiseImg}
                alt="Monishine Preise"
                loading="eager"
                className="w-full h-full object-cover"
                style={{ maxHeight: "520px" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="py-12 md:py-16 border-b border-border/60">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {trustItems.map((t, i) => (
              <div key={i} className="text-center md:text-left">
                <p
                  className="text-accent leading-none mb-2"
                  style={{ ...serif, fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
                >
                  {t.value}
                </p>
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground font-light">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Tables ── */}
      <section className="py-10 md:py-16">
        <div className="container-editorial">
          <div className="flex flex-col gap-10 md:gap-14 lg:pr-[calc(50%-2rem)]">
            {PRICE_GROUPS.map((group) => {
              const cats = group.ids.map(findCat).filter(Boolean) as ServiceCategory[];
              if (cats.length === 0) return null;
              return (
                <div key={group.label}>
                  <p className="eyebrow mb-5 text-accent">{group.label}</p>
                  <div className="flex flex-col gap-8">
                    {cats.map((c) => (
                      <PriceTable key={c.id} category={c} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-28 border-t border-border/40">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5 text-accent">FAQ</p>
              <h2
                className="text-foreground leading-[1.05]"
                style={{ ...serif, fontSize: "clamp(2rem, 3vw, 3rem)" }}
              >
                Termine &amp; Stornierung.
              </h2>
              <p className="mt-6 text-foreground/60 font-light leading-[1.85] text-sm md:text-base">
                Alles Wichtige rund um Buchung, Verschiebung und Absage deines Termins.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-foreground/[0.07]">
                {priceFaqs.map((item, i) => (
                  <FaqItem
                    key={i}
                    q={item.q}
                    a={item.a}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 md:py-32">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <h2
            className="text-foreground leading-none mb-6 whitespace-nowrap"
            style={{ ...serif, fontSize: "clamp(1.6rem, 2.6vw, 2.6rem)" }}
          >
            Noch Fragen zu einer <span className="italic text-accent">Behandlung</span>?
          </h2>
          <p className="text-foreground/60 font-light leading-[1.85] text-base md:text-lg mb-10">
            Ich berate dich gerne persönlich und helfe dir dabei, die passende Behandlung
            für deine Wünsche zu finden.
          </p>
          <Link to="/kontakt" className="btn-primary">
            Kostenlose Beratung
          </Link>
        </div>
      </section>
     </div>
    </SiteLayout>
  );

};

export default Preise;
