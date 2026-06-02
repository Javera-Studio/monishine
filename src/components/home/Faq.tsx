import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const faqs = [
  {
    q: "Wie lange hält ein Brow Lifting?",
    a: "Ein Brow Lifting hält in der Regel 4 bis 8 Wochen, abhängig von deinem Haarwachstum und deiner Pflege. Für dauerhaft schöne Ergebnisse empfehlen wir regelmäßige Auffrischungen.",
  },
  {
    q: "Was ist der Unterschied zwischen Lash Lifting und Lash Extensions?",
    a: "Beim Lash Lifting werden deine natürlichen Wimpern angehoben und optisch verlängert. Lash Extensions hingegen werden einzeln auf die Naturwimpern appliziert und sorgen für mehr Länge, Dichte und Ausdruck.",
  },
  {
    q: "Welche Lash Extension Technik passt zu mir?",
    a: "Das hängt ganz von deinem gewünschten Look ab. Gemeinsam finden wir die passende Technik – von natürlich und dezent bis glamourös und voluminös.",
  },
  {
    q: "Ist Permanent Make-up schmerzhaft?",
    a: "Jeder Mensch empfindet Schmerzen unterschiedlich. Die meisten Kundinnen beschreiben die Behandlung als gut erträglich. Vor der Behandlung wird die Haut vorbereitet, damit du dich möglichst wohlfühlst.",
  },
  {
    q: "Wie lange hält Permanent Make-up?",
    a: "Je nach Hauttyp, Stoffwechsel und Pflege hält Permanent Make-up meist zwischen 1 und 3 Jahren. Regelmäßige Refresh-Termine helfen dabei, die Farbe dauerhaft schön zu erhalten.",
  },
  {
    q: "Was muss ich vor meinem Termin beachten?",
    a: "Bitte erscheine möglichst ohne Augen-Make-up und informiere uns vorab über Allergien, Medikamente oder Hauterkrankungen. Die genauen Hinweise erhältst du bei deiner Terminbestätigung.",
  },
  {
    q: "Kann ich mehrere Behandlungen kombinieren?",
    a: "Ja. Viele Kundinnen kombinieren beispielsweise Brow Lifting, Lash Lifting oder Tinting für ein besonders harmonisches Ergebnis. Gerne beraten wir dich persönlich.",
  },
  {
    q: "Wie läuft eine Lash Extension Schulung ab?",
    a: "Unsere Schulungen verbinden Theorie und Praxis in einer persönlichen Atmosphäre. Du lernst die Grundlagen, Hygiene, Lash Mapping, Applikationstechniken sowie das Arbeiten am Modell und erhältst wertvolle Tipps für deinen erfolgreichen Start.",
  },
  {
    q: "Erhalte ich ein Zertifikat?",
    a: "Ja. Nach erfolgreicher Teilnahme erhältst du ein Zertifikat als Nachweis deiner absolvierten Schulung.",
  },
  {
    q: "Wie buche ich einen Termin?",
    a: "Du kannst deinen Termin ganz einfach online, über WhatsApp oder direkt telefonisch vereinbaren. Falls du unsicher bist, welche Behandlung zu dir passt, beraten wir dich gerne persönlich.",
  },
  {
    q: "Kann ich mich vorab beraten lassen?",
    a: "Natürlich. Eine persönliche Beratung gehört bei Monishine dazu. Gemeinsam finden wir die Behandlung, die am besten zu deinen Wünschen und deinem Typ passt.",
  },
  {
    q: "Ist Monishine auch für Männer geeignet?",
    a: "Ja. Viele unserer Behandlungen wie Brow Styling, Gesichtsbehandlungen oder Laserbehandlungen werden regelmäßig von Männern gebucht. Wir legen Wert auf eine entspannte Atmosphäre, persönliche Beratung und natürliche Ergebnisse.",
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
        className="text-foreground/85 group-hover:text-foreground transition-colors duration-300 pr-4"
        style={{ ...serif, fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
      >
        {q}
      </span>
      <span className="shrink-0 text-accent/50 group-hover:text-accent transition-colors duration-300">
        {open
          ? <Minus size={15} strokeWidth={1.5} />
          : <Plus size={15} strokeWidth={1.5} />
        }
      </span>
    </button>

    {/* Smooth grid-rows animation */}
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

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="surface-taupe py-16 md:py-32">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── Left: sticky headline + CTA ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 reveal">
            <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
              FAQ
            </p>
            <h2
              className="text-foreground leading-[1.05]"
              style={{ ...serif, fontSize: "clamp(2rem, 3vw, 3rem)" }}
            >
              Alles, was du vor deinem Termin wissen möchtest.
            </h2>
            <p className="mt-6 text-foreground/60 font-light leading-[1.85] text-sm md:text-base">
              Du hast Fragen zu unseren Behandlungen, Permanent Make-up oder
              Schulungen? Hier findest du die häufigsten Antworten.
            </p>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-foreground/[0.07]">
              <p
                className="text-foreground leading-[1.1] mb-4"
                style={{ ...serif, fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
              >
                Du hast noch Fragen?
              </p>
              <p className="text-foreground/55 font-light text-sm leading-[1.85] mb-6">
                Schreib mir direkt auf WhatsApp — ich berate dich persönlich.
              </p>
              <a
                href="https://wa.me/4917634050812?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20eurem%20Angebot."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center gap-2"
              >
                <WhatsAppIcon />
                WhatsApp schreiben
              </a>
            </div>
          </div>

          {/* ── Right: accordion ── */}
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <div className="border-t border-foreground/[0.07]">
              {faqs.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
