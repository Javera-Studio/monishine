"use client";

import { useRevealOnce } from "@/hooks/use-reveal-once";
import type { ServiceCategory } from "@/content/types";

const serif = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontWeight: 300,
} as const;

const ROW_BASE_DELAY = 260; // ms — after the divider starts drawing
const ROW_STAGGER = 90; // ms between each treatment
const PRICE_LAG = 130; // ms the price trails its row's content

const PriceTable = ({ category }: { category: ServiceCategory }) => {
  const { ref, revealed } = useRevealOnce<HTMLDivElement>();

  return (
    <div ref={ref} className={`price-group ${revealed ? "is-visible" : ""}`}>
      <div className="flex items-baseline justify-between mb-6 pb-5">
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

      <div className="price-group-divider h-px bg-foreground/[0.14] mb-2" />

      <ul>
        {category.treatments.map((t, i) => {
          const rowDelay = ROW_BASE_DELAY + i * ROW_STAGGER;
          return (
            <li
              key={i}
              className="price-row group relative border-b border-foreground/[0.06] last:border-b-0 py-7 md:py-9 hover:border-foreground/[0.16] transition-colors duration-500"
            >
              <span className="price-row-indicator" aria-hidden />
              <div className="grid grid-cols-10 gap-6 md:gap-10 items-start">
                <div
                  className="price-row-main col-span-7"
                  style={{ transitionDelay: `${rowDelay}ms` }}
                >
                  <p
                    className="text-foreground/85 group-hover:text-foreground transition-colors duration-500 mb-2.5"
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
                    <p className="mt-4 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/80 font-light">
                      {t.duration}
                    </p>
                  )}
                </div>
                <div
                  className="price-row-price col-span-3 text-right"
                  style={{ transitionDelay: `${rowDelay + PRICE_LAG}ms` }}
                >
                  <p
                    className="text-accent/90 group-hover:text-accent transition-colors duration-500 whitespace-nowrap"
                    style={{ ...serif, fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)" }}
                  >
                    {t.price ?? "auf Anfrage"}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PriceTable;
