import { Link } from "react-router-dom";
import logo from "@/assets/monishine-logo.png.asset.json";

const SiteFooter = () => (
  <footer className="bg-secondary/50 border-t border-border/60 mt-32">
    <div className="container-editorial py-20 grid gap-10 md:grid-cols-3 md:items-start">

      {/* Left — Logo + tagline */}
      <div>
        <Link to="/" aria-label="Monishine — Startseite" className="inline-block">
          <img src={logo.url} alt="Monishine" className="h-[5.6rem] md:h-[7rem] w-auto" />
        </Link>
        <p className="mt-8 max-w-sm text-sm text-muted-foreground leading-[1.85] font-light">
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
          height="200"
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
              +49 176 24050812
            </a>
          </li>
          <li>
            <a href="mailto:michaela@monishine.at" className="hover:text-accent transition-colors">
              michaela@monishine.at
            </a>
          </li>
        </ul>
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
