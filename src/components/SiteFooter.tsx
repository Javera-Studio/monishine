import { Link } from "react-router-dom";
import logo from "@/assets/monishine-logo.png.asset.json";

const SiteFooter = () => (
  <footer className="bg-secondary/50 border-t border-border/60 mt-32">
    <div className="container-editorial py-20 grid gap-14 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" aria-label="Monishine — Startseite" className="inline-block">
          <img src={logo.url} alt="Monishine" className="h-16 md:h-20 w-auto" />
        </Link>
        <p className="mt-8 max-w-sm text-sm text-muted-foreground leading-[1.85] font-light">
          Premium Beauty &amp; Glow Studio — moderne Behandlungen, persönliche
          Beratung und ein Ort zum Ankommen.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-5">Studio</p>
        <ul className="space-y-3 text-sm text-foreground/75 font-light">
          <li>Wolfsaugasse 6/2, A-1200 Wien</li>
          <li>+43 677 62 920 665</li>
          <li>hello@monishine.at</li>
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-5">Treatments</p>
        <ul className="space-y-2.5 text-sm font-light">
          <li><Link to="/leistungen/augenbrauen-wimpern" className="hover:text-accent transition-colors">Augenbrauen & Wimpern</Link></li>
          <li><Link to="/leistungen/wimpernverlaengerung" className="hover:text-accent transition-colors">Wimpernverlängerung</Link></li>
          <li><Link to="/leistungen/permanent-make-up" className="hover:text-accent transition-colors">Permanent Make-up</Link></li>
          <li><Link to="/leistungen/gesichtsbehandlungen" className="hover:text-accent transition-colors">Gesichtsbehandlungen</Link></li>
          <li><Link to="/leistungen/haarentfernung" className="hover:text-accent transition-colors">Haarentfernung</Link></li>
          <li><Link to="/leistungen" className="hover:text-accent transition-colors">Alle Treatments</Link></li>
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-5">Studio</p>
        <ul className="space-y-2.5 text-sm font-light">
          <li><Link to="/ueber-mich" className="hover:text-accent transition-colors">Über uns</Link></li>
          <li><Link to="/blog" className="hover:text-accent transition-colors">Journal</Link></li>
          <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
          <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground font-light">
        <p>© {new Date().getFullYear()} Monishine — Premium Beauty Studio</p>
        <p>Made with care in Wien</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
