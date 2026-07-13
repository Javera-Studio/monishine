import Image from "next/image";
import PampasMotif from "./PampasMotif";
import OrganicDivider from "./OrganicDivider";

const BrandPhilosophy = () => (
  <section className="relative bg-background overflow-hidden">

    {/* Full-width wall image with soft edge fades — the studio's own window/mirror wall */}
    <div className="relative w-full">
      <Image
        src="/images/monishinewall.jpeg"
        alt="Monishine Studio"
        width={7008}
        height={4672}
        className="w-full object-contain"
        style={{ maxHeight: "72vh" }}
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

    <PampasMotif position="bottom-left" />

    {/* Slogan — icon + text as one composition, shifted left, compact */}
    <div className="container-editorial relative z-10 flex flex-col items-center md:items-start -mt-10 md:-mt-14 pb-4 md:pb-6">
      <div className="flex items-center gap-4 max-w-md md:max-w-xl lg:max-w-2xl text-center md:text-left">
        <span className="hidden md:inline-block shrink-0 text-accent/40" style={{ fontSize: "0.55rem" }}>
          ✦
        </span>
        <p
          className="font-script shimmer-gold"
          style={{
            fontSize: "clamp(2.3rem, 4.8vw, 4.4rem)",
            lineHeight: 1.2,
          }}
        >
          Be your own kind of beautiful.
        </p>
      </div>

      <OrganicDivider className="mt-5 md:mt-6 md:ml-[2.3rem]" />
    </div>

  </section>
);

export default BrandPhilosophy;
