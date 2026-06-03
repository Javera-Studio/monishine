import { ArrowUpRight } from "lucide-react";
import kontaktImg from "@/assets/kontakt.png";

const WA_URL = "https://wa.me/4917634050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";
const TW_URL = "https://buchung.treatwell.de/ort/monishine/";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Booking = () => (
  <section className="py-16 md:py-32 bg-foreground text-background">
    <div className="container-editorial">

      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="eyebrow mb-5 text-background/60">Termin buchen</p>
        <h2 className="headline text-background">
          Dein Weg zu Brows, Lashes &amp; Beauty beginnt hier.
        </h2>
        <p className="lede mt-6 text-background/70">
          Wähle den Weg, der am besten zu dir passt.
        </p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 items-stretch">

        {/* WhatsApp — primary, dominant */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-accent text-background p-6 md:p-8 flex flex-col justify-between min-h-[196px] hover:bg-[hsl(24,36%,50%)] transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-background/60 mb-2">Empfohlen</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <ArrowUpRight size={16} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-background/70" />
          </div>
          <div className="mt-6">
            <p className="font-serif text-lg md:text-xl leading-tight">
              Direkt auf WhatsApp schreiben
            </p>
            <p className="mt-2 text-xs text-background/75 leading-[1.8] max-w-sm">
              Schnell, persönlich und unkompliziert — Moni berät dich direkt.
            </p>
          </div>
        </a>

        {/* Treatwell — secondary */}
        <a
          href={TW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-background/5 border border-background/15 p-6 md:p-7 flex flex-col justify-between hover:bg-background/10 transition-colors"
        >
          <div className="flex items-start justify-between">
            <p className="eyebrow text-background/50">Online Buchung</p>
            <ArrowUpRight size={15} strokeWidth={1.3} className="text-background/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-6">
            <p className="font-serif text-base md:text-lg text-background leading-tight">
              Direkt über Treatwell buchen
            </p>
            <p className="mt-2 text-xs text-background/60 leading-[1.8]">
              Freie Termine ansehen und rund um die Uhr online buchen.
            </p>
          </div>
        </a>

      </div>
    </div>

    {/* Studio image — full-width below cards */}
    <div className="mt-5 md:mt-6 overflow-hidden">
      <img
        src={kontaktImg}
        alt="Monishine Studio"
        loading="lazy"
        className="w-full object-cover"
        style={{ maxHeight: "480px", objectPosition: "center 35%" }}
      />
    </div>
  </section>
);

export default Booking;
