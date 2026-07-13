import Image from "next/image";

const BrandPhilosophy = () => (
  <section className="relative bg-background overflow-hidden">

    {/* Full-width wall image with soft edge fades */}
    <div className="relative w-full">
      <Image
        src="/images/monishinewall.jpeg"
        alt="Monishine Studio"
        width={7008}
        height={4672}
        className="w-full object-contain"
        style={{ maxHeight: "60vh" }}
        sizes="100vw"
      />

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 h-1/5 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, hsl(var(--background)), transparent)" }}
      />
      {/* Left fade */}
      <div
        className="absolute inset-y-0 left-0 w-1/5 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute inset-y-0 right-0 w-1/5 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background) / 0.6) 40%, transparent 100%)" }}
      />
    </div>

    {/* Slogan + divider */}
    <div className="relative z-10 flex flex-col items-center -mt-10 md:-mt-14 pb-4">
      <p
        className="font-script shimmer-gold text-center px-6"
        style={{
          fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
          lineHeight: 1.2,
        }}
      >
        Be your own kind of beautiful.
      </p>

      {/* Elegant divider */}
      <div className="mt-10 flex items-center gap-4">
        <span className="block h-px w-16 md:w-24 bg-foreground/15" />
        <span className="text-accent/40" style={{ fontSize: "0.45rem" }}>✦</span>
        <span className="block h-px w-16 md:w-24 bg-foreground/15" />
      </div>
    </div>

    {/* Generous whitespace before next section */}
    <div className="pb-6 md:pb-10" />

  </section>
);

export default BrandPhilosophy;
