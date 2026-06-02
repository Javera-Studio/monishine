import { Link } from "react-router-dom";
import logo from "@/assets/monishine-logo.png.asset.json";

const SiteFooter = () => (
  <footer className="bg-secondary/50 border-t border-border/60 mt-32">
    <div className="container-editorial py-20 grid gap-14 md:grid-cols-3">

      {/* Logo + tagline */}
      <div>
        <Link to="/" aria-label="Monishine — Startseite" className="inline-block">
          <img src={logo.url} alt="Monishine" className="h-[5.6rem] md:h-[7rem] w-auto" />
        </Link>
        <p className="mt-8 max-w-sm text-sm text-muted-foreground leading-[1.85] font-light">
          Premium Beauty &amp; Glow Studio — moderne Behandlungen, persönliche
          Beratung und ein Ort zum Ankommen.
        </p>
      </div>

      {/* Studio info + Google Maps */}
      <div>
        <p className="eyebrow mb-5">Studio</p>
        <ul className="space-y-3 text-sm text-foreground/75 font-light mb-6">
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
        {/* Google Maps embed */}
        <div className="overflow-hidden border border-border/50">
          <iframe
            title="Monishine Studio Hamburg"
            src="https://maps.google.com/maps?q=Bramfelder+Stra%C3%9Fe+77%2C+22305+Hamburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="180"
            style={{ border: 0, display: "block", filter: "grayscale(0.2) contrast(0.95)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Navigation */}
      <div>
        <p className="eyebrow mb-5">Studio</p>
        <ul className="space-y-2.5 text-sm font-light">
          <li><Link to="/ueber-mich" className="hover:text-accent transition-colors">Über uns</Link></li>
          <li><Link to="/schulungen" className="hover:text-accent transition-colors">Schulungen</Link></li>
          <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
          <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
        </ul>
      </div>

    </div>
    <div className="border-t border-border/60">
      <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground font-light">
        <p>© {new Date().getFullYear()} Monishine — Premium Beauty Studio</p>
        <p>Made with care in Hamburg</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
