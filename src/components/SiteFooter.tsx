import { Link } from "react-router-dom";
import logo from "@/assets/monishine-logo.png.asset.json";

const SiteFooter = () => (
  <footer className="bg-secondary/50 border-t border-border/60 mt-32">
    <div className="container-editorial py-20 grid gap-10 md:grid-cols-3 md:items-start">

      {/* Left — Logo + tagline */}
      <div>
        <Link to="/" aria-label="Monishine — Startseite" className="inline-block">
          {logo.url.startsWith("http") ? (
            <img src={logo.url} alt="Monishine" className="h-[5.6rem] md:h-[7rem] w-auto" />
          ) : (
            <span
              className="font-script"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", color: "hsl(var(--accent))" }}
            >
              Monishine
            </span>
          )}
        </Link>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-[1.85] font-light">
          Premium Beauty &amp; Glow Studio — moderne Behandlungen, persönliche
          Beratung und ein Ort zum Ankommen.
        </p>
      </div>

      {/* Center — Google Maps */}
      <div className="overflow-hidden border border-border/50">
        <iframe
          title="Monishine Studio Hamburg"
          src="https://maps.google.com/maps?q=Bramfelder+Stra%C3%9Fe+77%2C+22305+Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="240"
          style={{ border: 0, display: "block", filter: "grayscale(0.2) contrast(0.95)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Right — Address, right-aligned */}
      <div className="text-right">
        <ul className="space-y-3 text-sm text-foreground/75 font-light">
          <li>Bramfelder Straße 77</li>
          <li>22305 Hamburg</li>
          <li>
            <a href="tel:+4917624050812" className="hover:text-accent transition-colors">
              +49 176 240 50 812
            </a>
          </li>
          <li>
            <a href="mailto:monishine@outlook.de" className="hover:text-accent transition-colors">
              monishine@outlook.de
            </a>
          </li>
        </ul>

        {/* Social media icons */}
        <div className="mt-5 flex items-center justify-end gap-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/monishine_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground/45 hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@monishiine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-foreground/45 hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.79a4.85 4.85 0 01-1.02-.1z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/p/Monishine-100031308979177/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-foreground/45 hover:text-accent transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
    <div className="border-t border-border/60">
      <div className="container-editorial py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground font-light">
        <p>© {new Date().getFullYear()} Monishine — Premium Beauty Studio</p>
        <p>
          Webdesign by{" "}
          <a
            href="https://www.javera-studio.at"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            JAVERA Studio
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
