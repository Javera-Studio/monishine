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

          {/* Cards — side by side */}
          <div className="grid grid-cols-2 gap-3">

            {/* WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-accent text-background p-5 flex flex-col justify-between hover:bg-[hsl(24,36%,50%)] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <p className="eyebrow text-background/60 text-[0.55rem]">Empfohlen</p>
                <ArrowUpRight size={14} strokeWidth={1.3} className="text-background/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <p className="font-serif text-base leading-tight">
                  WhatsApp schreiben
                </p>
                <p className="mt-1.5 text-[0.7rem] text-background/70 leading-[1.7]">
                  Schnell &amp; persönlich — Moni antwortet direkt.
                </p>
              </div>
            </a>

            {/* Treatwell */}
            <a
              href={TW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background/5 border border-background/15 p-5 flex flex-col justify-between hover:bg-background/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <p className="eyebrow text-background/50 text-[0.55rem]">Online</p>
                <ArrowUpRight size={14} strokeWidth={1.3} className="text-background/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <p className="font-serif text-base text-background leading-tight">
                  Über Treatwell
                </p>
                <p className="mt-1.5 text-[0.7rem] text-background/60 leading-[1.7]">
                  Freie Termine 24/7 online buchen.
                </p>
              </div>
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
