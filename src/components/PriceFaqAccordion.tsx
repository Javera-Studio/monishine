"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const serif = {
  fontFamily: "var(--font-cormorant), Georgia, serif",
  fontWeight: 300,
} as const;

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

const PriceFaqAccordion = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
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
  );
};

export default PriceFaqAccordion;
