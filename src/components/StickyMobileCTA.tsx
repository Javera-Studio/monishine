

const StickyMobileCTA = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-t border-border/50">
    <div className="px-5 py-3 flex items-center justify-between gap-4 max-w-[1400px] mx-auto">
      <span className="text-[0.7rem] text-muted-foreground font-light leading-snug">
        Nicht sicher, welche Behandlung passt?
      </span>
      <a
        href="https://wa.me/4917624050812?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center text-[0.62rem] uppercase tracking-[0.22em] text-foreground border-b border-foreground/25 pb-0.5 transition-colors duration-300 hover:text-accent hover:border-accent"
      >
        Kostenlose Beratung
      </a>
    </div>
  </div>
);

export default StickyMobileCTA;
