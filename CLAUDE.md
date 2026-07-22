# Monishine — Next.js Projekt-Standards

Gilt zusätzlich zu den globalen Standards in `~/.claude/CLAUDE.md`. Diese Datei enthält alles Monishine-Spezifische: Kundendaten, Design-Tokens, Migrationsstatus sowie die projektspezifischen AEO- und Security-Standards, übernommen aus `javera-studio/CLAUDE.md` (canonical source: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards)).

## Projekt

- **Kunde:** Monishine — Premium Beauty & Glow Studio, Bramfelder Straße 77, 22305 Hamburg
- **Kontakt:** +49 176 240 50 812 · monishine@outlook.de
- **Buchung:** ausschließlich extern über WhatsApp-Link und Treatwell (`https://buchung.treatwell.de/ort/monishine/`) — es gibt **kein** Kontaktformular und **keine** Server-API-Route auf dieser Website. `/kontakt` ist ein serverseitiger Redirect (`redirect()` in `src/app/kontakt/page.tsx`) direkt zu WhatsApp.
- **Herkunft:** Dieses Repo wurde von Vite + React + react-router auf Next.js 14 App Router migriert (zunächst in `Javera-Studio/monishine-nextjs` entwickelt und getestet, dann hierher — auf `main` — übernommen). Der alte Vite-Stand ist als Rollback-Branch `backup-vite-pre-nextjs` erhalten.

## Design-System (Monishine-spezifisch, überschreibt globalen Default)

- Farbpalette: warme Creme/Taupe/Espresso-Töne, siehe CSS-Variablen in `src/app/globals.css` (`--background`, `--accent`, `--taupe`, etc.) — **nicht** die globale JAVERA-Referenzpalette
- Typografie: Cormorant Garamond (Headlines), Great Vibes (Script-Akzente/Slogans), Italiana (`.font-display`), Inter (Fließtext) — geladen über `next/font/google` in `src/app/layout.tsx`
- Utility-Klassen `.btn-primary`, `.btn-outline`, `.eyebrow`, `.display`, `.headline`, `.lede`, `.shimmer-gold`, `.surface-taupe`, `.reveal` etc. sind fester Bestandteil des Designs — bei neuen Komponenten wiederverwenden statt neu erfinden

## Migrations-Hinweise

- Bilder liegen in `public/images/` (vormals `src/assets/`), referenziert als `"/images/dateiname.jpg"` statt `import img from "@/assets/..."`
- Alle Bild-Komponenten nutzen `next/image`: bei aspect-ratio-Containern `fill` + `object-cover`, sonst reale Pixel-Dimensionen als `width`/`height` (nicht raten — mit einem Skript aus den Originaldateien ausgelesen)
- Komponenten ohne `useState`/`useEffect` sind bewusst Server Components geblieben (z.B. `Treatments`, `Hero`, `About`, `Academy`, `Booking`, `BrandPhilosophy`); nur dort `"use client"`, wo Interaktivität (Accordion, Mobile-Menü, Scroll-State) wirklich gebraucht wird
- `cms.categories()` / `cms.category()` etc. (`src/lib/cms/`) werden in Server Components direkt `await`-ed statt über `useEffect` geladen — kein React Query nötig, da keine Client-seitigen dynamischen Daten existieren
- `src/content/faq.ts` (`faqItems`) ist unbenutzter Alt-Content aus dem Vite-Repo — die echten FAQ-Texte stehen hartcodiert in `src/components/home/Faq.tsx` und `src/components/PriceFaqAccordion.tsx`

## SEO/AEO/Security Status-Check (Stand: nach Migration auf `main`)

Gegen die globale Pflicht-Checkliste (`~/.claude/CLAUDE.md`) und die AEO/Security-Standards unten geprüft:

**Erledigt:**
- [x] Mehrseitige Architektur, sprechende URLs (`/leistungen`, `/preise`, `/leistungen/[slug]`, …), Hauptmenü mit Kernseiten
- [x] `generateMetadata()`/statisches `metadata` pro Seite, individuelle Titel (kein Duplikat, `%s | Monishine`-Template), eigene H1 pro Seite
- [x] OpenGraph + Twitter-Card **inkl. Bild** (`src/app/layout.tsx`) — vorher gefehlt, jetzt mit `/images/IMG_0578.jpeg` ergänzt
- [x] Favicon (`src/app/icon.png`, aus dem Monishine-Logo) — vorher komplett gefehlt. **Caveat:** Quelle ist das rechteckige Logo (`IMG_4261.png`, 1920×1080), kein quadratischer Ausschnitt. Funktioniert, ist aber nicht optimal — bei Gelegenheit durch einen echten quadratischen Icon-Export ersetzen
- [x] `next/image` überall, `next/font/google`, keine `window`/`document`-Zugriffe außerhalb `useEffect`
- [x] JSON-LD: `BeautySalon`/`LocalBusiness`, `Service`, `Review`, `FAQPage` (Startseite + `/preise`)
- [x] `app/sitemap.ts`, `app/robots.ts`, `public/.well-known/security.txt`
- [x] Security-Header (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) in `next.config.js`, CSP eng gescoped auf tatsächlich genutzte Ressourcen (Google Maps Embed)
- [x] Kein Tracking/keine Cookie-Consent-Pflicht, da keine Analytics/Ads-Scripts eingebunden sind

**Bewusst offen (fehlende echte Inhalte, nicht erfunden):**
- [ ] FAQ-Block + `FAQPage`-Schema auf den einzelnen Leistungsseiten (`/leistungen/[slug]`) — noch keine echten, kundenspezifischen Fragen pro Behandlung vorhanden. Erst ergänzen, wenn diese von Monishine geliefert werden (siehe „Keine Preise erfinden“-Regel unten)
- [ ] Eigene `/faq`-Seite laut globalem Standard-Hauptmenü — aktuell nur FAQ-Abschnitte auf Startseite und `/preise`. Kein Muss, aber Standardvorgabe

**Externe/manuelle Schritte (nicht im Code lösbar):**
- [ ] Google Search Console: Sitemap einreichen, Indexierung anfragen
- [ ] Rich Results Test für das JSON-LD durchführen
- [ ] DNSSEC, CAA-Record, SPF/DKIM/DMARC beim Registrar/DNS-Provider
- [ ] securityheaders.com-Check nach dem nächsten Deploy (Ziel: Note A)

**Dependency-Sicherheit:**
- `npm audit` zeigt 5 Findings (1 moderate, 4 high) in `next@14.2.35` (Image-Optimizer-DoS, RSC-Cache-Poisoning, Middleware-Bypass, Postcss-XSS) — betreffen Features, die dieses Projekt nicht nutzt (keine `remotePatterns`, kein Middleware, kein i18n-Routing, keine WebSocket-Upgrades), sind aber offiziell erst ab Next 15/16 gefixt (kein Patch mehr innerhalb der 14.x-Reihe verfügbar). Ein Upgrade auf Next 16 (wie im Referenzprojekt `javera-studio-nextjs`, dort inkl. React 19 + Tailwind 4) ist ein separater, bewusst nicht in dieser Session durchgeführter Schritt, da er auf einem produktiven Repo ohne ausführliches Nach-Testen zu riskant ist. Vor dem nächsten größeren Release einplanen.

---

# Code-Qualität & Architektur-Standards

Baue dieses Next.js-Projekt mit professionellem, wartbarem Code, aber ohne unnötige Überarchitektur. Die Website ist eine überschaubare Unternehmenswebsite für ein Beauty-Studio. Verwende deshalb einfache, klare und bewährte Lösungen.

Achte auf folgende Qualitätsstandards:

- TypeScript im Strict Mode
- saubere und nachvollziehbare Ordnerstruktur
- kleine, logisch getrennte Komponenten
- keine unnötigen Abstraktionen
- keine doppelten Komponenten oder Styles
- wiederverwendbare Komponenten nur dort, wo es sinnvoll ist
- Server Components standardmäßig verwenden
- Client Components nur bei tatsächlicher Interaktivität
- keine unnötigen useEffect- oder useState-Lösungen
- semantisches HTML
- gute Accessibility
- responsive Umsetzung
- optimierte Bilder mit next/image
- saubere Metadaten und SEO-Grundlagen
- verständliche Namen für Dateien, Komponenten und Funktionen
- keine ungenutzten Imports, Dateien oder Variablen
- keine hardcodierten Inhalte, wenn diese sinnvoll zentral gepflegt werden können
- keine großen Komponenten mit zu vielen Verantwortlichkeiten
- keine schnellen Workarounds oder KI-typischen Code-Abkürzungen

Priorisiere Lesbarkeit und Wartbarkeit vor technischer Komplexität. Der Code soll so aufgebaut sein, dass ein erfahrener Entwickler das Projekt später problemlos übernehmen, verstehen und erweitern kann.

Bevor eine Aufgabe abgeschlossen wird, prüfen:

1. Ist die Lösung einfacher möglich?
2. Gibt es doppelten Code?
3. Ist die Komponente zu groß?
4. Wird unnötig Client-side JavaScript verwendet?
5. Sind Benennung und Struktur verständlich?
6. Bleibt die bestehende Funktionalität erhalten?
7. Würde diese Lösung eine professionelle Code-Review bestehen?

Nach Änderungen immer TypeScript-, Lint- und Build-Prüfungen ausführen und gefundene Fehler beheben.

---

# AEO (Answer Engine Optimization) Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (AEO-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Ziel: Inhalte so strukturieren, dass ChatGPT, Google AI Overviews, Perplexity, Gemini & Co. sie direkt als Antwort extrahieren und zitieren können — nicht nur klassisches Ranking.

## 1. FAQ-Content + FAQPage-Schema (höchster Hebel, immer umsetzen)

- Umgesetzt: `src/app/page.tsx` (Startseite, FAQPage-Schema aus den Fragen in `home/Faq.tsx`) und `src/app/preise/page.tsx` (Stornobedingungen-FAQ)
- Bei neuen Leistungsseiten (`src/app/leistungen/[slug]/page.tsx` o.ä.): FAQ-Block + FAQPage-Schema ergänzen, sobald echte Kundenfragen zur jeweiligen Behandlung vorliegen
- Vor Umsetzung neuer FAQ-Inhalte: mit der Kundin abstimmen, welche Fragen tatsächlich häufig gestellt werden
- Nach Umsetzung: Schema mit Google Rich Results Test validieren

## 2. „Answer-First"-Struktur in Content-Blöcken

- Jeder inhaltliche Abschnitt beginnt mit der direkten Antwort in 1–2 Sätzen, erst danach Kontext/Storytelling
- Gilt besonders für: Leistungsbeschreibungen (`src/content/serviceCategories.ts`), Preisangaben, Behandlungsabläufe

## 3. Überschriften-Struktur an echten Fragen ausrichten

- H2/H3 so formulieren, wie eine Kundin tatsächlich fragen würde
- Hierarchie sauber halten (H1 → H2 → H3), siehe `PageHero` (H1) → Section-Headlines (H2)

## 4. Strukturierte Formate statt Fließtext

- Preisübersichten → Liste/Tabelle (`PriceTable` in `src/app/preise/page.tsx`)
- Behandlungsschritte → nummerierte Liste

## 5. Entity-Konsistenz (NAP + Branding)

- Name, Adresse, Telefonnummer müssen exakt identisch sein auf: Website (`SiteFooter.tsx`, JSON-LD in `page.tsx`), Google Business Profile, Instagram-Bio, Treatwell-Profil, Facebook
- Aktuell: Monishine · Bramfelder Straße 77, 22305 Hamburg · +49 176 240 50 812

## 6. Freshness-Signal

- Bei Preisänderungen: Datum aktiv mit aktualisieren, sobald ein sichtbares "Zuletzt aktualisiert"-Datum auf `/preise` ergänzt wird

## Kurz-Checkliste bei jeder Content-Änderung

- [ ] FAQ-Sektion mit echten Kundenfragen + FAQPage-Schema, wo inhaltlich sinnvoll
- [ ] Answer-First-Struktur in allen Haupttextblöcken
- [ ] Überschriften als natürliche Fragen formuliert
- [ ] Preise/Abläufe als Liste oder Tabelle statt Fließtext
- [ ] NAP-Konsistenz über alle Kanäle geprüft
- [ ] Schema mit Google Rich Results Test validiert

---

# Security Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (SECURITY-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung.

## 1. HTTP Security Header

Umgesetzt in `next.config.ts` (`headers()`): CSP, Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

- Die CSP ist bewusst eng gehalten (nur Google Maps Embed im Footer + `api.web3forms.com` als Reserve für ein künftiges Kontaktformular). **Bei jedem neuen extern eingebundenen Script/Embed/iframe die CSP in `next.config.ts` erweitern** — nie blind auf `unsafe-inline`/Wildcards ausweichen, ohne den Code vorher auf tatsächlich genutzte externe Ressourcen zu scannen.
- Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A).

## 2. CORS

- Diese Website hat keine API-Routen — kein CORS-Handling nötig. Sobald eine API-Route hinzukommt (z.B. für ein Kontaktformular), CORS explizit und restriktiv konfigurieren, nicht global öffnen.

## 3. Formulare & API-Routes

- Aktuell nicht relevant — es gibt kein Kontaktformular (`/kontakt` redirectet zu WhatsApp). Falls künftig ein Formular ergänzt wird: serverseitige Validierung, Rate-Limiting, Honeypot-Feld, `WEB3FORMS_KEY` (oder Äquivalent) ausschließlich als Server-Env-Variable — nie `NEXT_PUBLIC_`.

## 4. Dependencies

- Vor Projektabschluss: `npm audit` laufen lassen, kritische/hohe Findings fixen

## 5. robots.txt, sitemap.xml, security.txt

Umgesetzt: `src/app/robots.ts`, `src/app/sitemap.ts`, `public/.well-known/security.txt`.

## 6. Mixed Content

- Alle eingebundenen Ressourcen (Bilder, Google Maps Embed) laufen über `https://` — keine `http://`-Referenzen

## 7. Dinge, die NICHT im Code passieren (manuell prüfen/einstellen)

| Punkt | Wo einstellen | Warum wichtig |
|---|---|---|
| DNSSEC | Beim Domain-Registrar | Schützt vor DNS-Spoofing/Cache-Poisoning |
| DNS CAA-Record | Beim DNS-Provider | Legt fest, welche CAs Zertifikate ausstellen dürfen |
| SSL/TLS-Zertifikat | Bei Vercel automatisch (Let's Encrypt) | Auto-Renewal + TLS 1.3 |
| SPF / DKIM / DMARC | Beim E-Mail-/DNS-Provider | Schützt vor E-Mail-Spoofing/Phishing |
| Malware-/Blacklist-Scan | Google Safe Browsing, VirusTotal, Sucuri SiteCheck | Bei jedem Webseitencheck durchführen |
| Registrar-Zugang/2FA | Beim Registrar | Häufiger Grund für gehackte Kundenseiten |
