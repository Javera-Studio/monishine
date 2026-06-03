import { ArrowUpRight } from "lucide-react";
import kontaktImg from "@/assets/kontakt.png";

const WA_URL = "https://wa.me/4917634050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";
const TW_URL = "https://buchung.treatwell.de/ort/monishine/";

const Booking = () => (
  <section className="bg-foreground text-background overflow-hidden">
    <div className="container-editorial">
      <div className="grid lg:grid-cols-2 items-stretch min-h-[480px] lg:min-h-[560px]">

        {/* Left — header + two side-by-side cards */}
        <div className="flex flex-col justify-between py-14 md:py-20 pr-0 lg:pr-12 gap-10">

          {/* Header */}
          <div>
            <p className="eyebrow mb-4 text-background/60">Termin buchen</p>
            <h2 className="headline text-background">
              Dein Weg zu Brows, Lashes &amp; Beauty beginnt hier.
            </h2>
            <p className="lede mt-5 text-background/70">
              Wähle den Weg, der am besten zu dir passt.
            </p>
          </div>

          {/* Cards — stacked, WhatsApp larger */}
          <div className="flex flex-col gap-3">

            {/* WhatsApp — primary, larger */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent text-background p-6 md:p-7 flex flex-col justify-between hover:bg-[hsl(24,36%,50%)] transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <p className="eyebrow text-background/60">Empfohlen</p>
                <ArrowUpRight size={16} strokeWidth={1.3} className="text-background/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <p className="font-serif text-lg md:text-xl leading-tight">
                  WhatsApp schreiben
                </p>
                <p className="mt-2 text-xs text-background/70 leading-[1.75]">
                  Schnell &amp; persönlich — Moni antwortet direkt.
                </p>
              </div>
            </a>

            {/* Treatwell — secondary, smaller */}
            <a
              href={TW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background/5 border border-background/15 p-4 md:p-5 flex items-center justify-between hover:bg-background/10 transition-colors"
            >
              <div>
                <p className="eyebrow text-background/50 mb-1">Online Buchung</p>
                <p className="font-serif text-base text-background leading-tight">
                  Über Treatwell buchen
                </p>
              </div>
              <ArrowUpRight size={15} strokeWidth={1.3} className="text-background/50 shrink-0 ml-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>
        </div>

        {/* Right — full image fills column height */}
        <div className="hidden lg:block overflow-hidden">
          <img
            src={kontaktImg}
            alt="Monishine Studio"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>

      </div>
    </div>
  </section>
);

export default Booking;
