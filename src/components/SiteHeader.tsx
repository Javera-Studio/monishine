import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/monishine-logo.png.asset.json";

const links = [
  { to: "/leistungen", label: "Treatments" },
  { to: "/preise", label: "Preise" },
  { to: "/ueber-mich", label: "Über Monishine" },
  { to: "/schulungen", label: "Schulungen" },
  { to: "/kontakt", label: "Kontakt" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-28">
        <Link to="/" className="flex items-center" aria-label="Monishine — Startseite">
          <img src={logo.url} alt="Monishine" className="h-11 md:h-[5.6rem] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const isActive = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-accent" : "text-foreground/75 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/kontakt" className="btn-primary">
            Termin buchen
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-editorial py-8 flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-foreground/85"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/kontakt" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Termin buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
