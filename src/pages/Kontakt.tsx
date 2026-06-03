import SiteLayout from "@/components/SiteLayout";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const WA_URL = "https://wa.me/4917634050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren.";
const TW_URL = "https://buchung.treatwell.de/ort/monishine/";

const serif = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 300,
} as const;

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Kontakt = () => (
  <SiteLayout>

    {/* ── Hero ── */}
    <section className="py-20 md:py-28 bg-gradient-warm">
      <div className="container-editorial max-w-2xl">
        <p className="eyebrow mb-5 text-accent" style={{ letterSpacing: "0.3em" }}>
          Kontakt & Buchung
        </p>
        <h1
          className="text-foreground leading-[1.05]"
          style={{ ...serif, fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
        >
          Dein Weg zu Brows, Lashes &amp; Beauty beginnt hier.
        </h1>
        <p className="lede mt-6">
          Wähle den Weg, der am besten zu dir passt.
        </p>
      </div>
    </section>

    {/* ── Trust bar ── */}
    <div className="border-t border-border/40 bg-secondary/25 py-4">
      <div className="container-editorial">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { icon: "⭐", text: "5 Jahre Top Rated" },
            { icon: "⭐", text: "400+ Kundinnen"    },
            { icon: "📍", text: "Bramfelder Straße 77, Hamburg" },
          ].map(({ icon, text }, i) => (
            <span key={text} className="flex items-center gap-2 text-foreground/55 font-light">
              <span style={{ fontSize: "0.7rem" }}>{icon}</span>
              <span className="text-[0.62rem] uppercase tracking-[0.22em]">{text}</span>
              {i < 2 && <span className="hidden sm:inline text-foreground/20 ml-5" style={{ fontSize: "0.45rem" }}>✦</span>}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── Booking cards ── */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-5 md:gap-6 items-stretch">

          {/* WhatsApp — primary, dominant */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-foreground text-background p-10 md:p-14 flex flex-col justify-between min-h-[360px] hover:bg-primary-glow transition-colors duration-500"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow text-background/50 mb-4" style={{ letterSpacing: "0.3em" }}>
                  Empfohlen
                </p>
                <WhatsAppIcon />
              </div>
              <ArrowUpRight
                size={22}
                strokeWidth={1.3}
                className="text-background/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
            <div className="mt-12">
              <h2
                className="text-background leading-[1.1]"
                style={{ ...serif, fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)" }}
              >
                Direkt auf WhatsApp schreiben
              </h2>
              <p className="mt-5 text-background/70 font-light leading-[1.85]" style={{ fontSize: "1rem" }}>
                Schnell, persönlich und unkompliziert — Moni berät dich direkt
                und findet gemeinsam mit dir den passenden Termin.
              </p>
              <ul className="mt-6 space-y-2 text-background/55 font-light" style={{ fontSize: "0.88rem" }}>
                <li>✓ Persönliche Beratung direkt mit Moni</li>
                <li>✓ Schnelle Antwort</li>
                <li>✓ Kein Formular, kein Umweg</li>
              </ul>
              <div className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground text-xs tracking-[0.22em] uppercase font-normal transition-all duration-400 group-hover:bg-accent group-hover:text-background">
                WhatsApp öffnen <ArrowUpRight size={14} strokeWidth={1.5} />
              </div>
            </div>
          </a>

          {/* Treatwell — secondary */}
          <a
            href={TW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border p-9 md:p-10 flex flex-col justify-between hover:border-accent/40 transition-colors duration-500"
          >
            <div className="flex items-start justify-between">
              <p className="eyebrow text-muted-foreground" style={{ letterSpacing: "0.28em" }}>
                Online Buchung
              </p>
              <ArrowUpRight
                size={18}
                strokeWidth={1.3}
                className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
            <div className="mt-10">
              <h2
                className="text-foreground leading-[1.1]"
                style={{ ...serif, fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
              >
                Direkt über Treatwell buchen
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-[1.85]" style={{ fontSize: "0.9rem" }}>
                Freie Termine ansehen und rund um die Uhr online buchen.
              </p>
              <ul className="mt-5 space-y-2 text-muted-foreground font-light" style={{ fontSize: "0.82rem" }}>
                <li>✓ 24/7 verfügbar</li>
                <li>✓ Freie Termine sofort sehen</li>
                <li>✓ Sofortbestätigung</li>
              </ul>
              <div className="mt-10 inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 text-foreground text-xs tracking-[0.2em] uppercase font-normal transition-all duration-400 hover:bg-foreground hover:text-background">
                Termin buchen <ArrowUpRight size={13} strokeWidth={1.5} />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>

    {/* ── Studio info strip ── */}
    <section className="py-10 md:py-12 bg-secondary/20 border-t border-border/40">
      <div className="container-editorial">
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-foreground/60 font-light">
          <span className="flex items-center gap-2.5">
            <MapPin size={14} className="text-accent shrink-0" />
            Bramfelder Straße 77, 22305 Hamburg
          </span>
          <span className="flex items-center gap-2.5">
            <Phone size={14} className="text-accent shrink-0" />
            <a href="tel:+4917634050812" className="hover:text-foreground transition-colors">
              +49 176 340 50 812
            </a>
          </span>
          <span className="flex items-center gap-2.5">
            <Mail size={14} className="text-accent shrink-0" />
            <a href="mailto:monishine@outlook.de" className="hover:text-foreground transition-colors">
              monishine@outlook.de
            </a>
          </span>
        </div>
      </div>
    </section>

  </SiteLayout>
);

export default Kontakt;
