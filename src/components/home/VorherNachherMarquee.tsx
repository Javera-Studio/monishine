"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const vnImages = [
  { src: "/images/vorhernachher1.jpg", w: 720, h: 593 },
  { src: "/images/vorhernachher2.jpg", w: 715, h: 565 },
  { src: "/images/vorhernachher3.jpg", w: 1774, h: 887 },
  { src: "/images/vorhernachher4.jpg", w: 1623, h: 969 },
];

const AUTO_SCROLL_SPEED = 0.4; // px per frame, ~24px/s
const ARROW_SCROLL_AMOUNT = 340;

const VorherNachherMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let rafId: number;
    const step = () => {
      if (!pausedRef.current) {
        track.scrollLeft += AUTO_SCROLL_SPEED;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    pausedRef.current = true;
    track.scrollBy({ left: direction * ARROW_SCROLL_AMOUNT, behavior: "smooth" });
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 1200);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        className="marquee-outer no-scrollbar flex gap-3 md:gap-4 overflow-x-auto"
      >
        {[...vnImages, ...vnImages].map((img, i) => (
          <div key={i} className="shrink-0 overflow-hidden shadow-soft">
            <Image
              src={img.src}
              width={img.w}
              height={img.h}
              alt={`Vorher Nachher ${(i % 4) + 1}`}
              loading="lazy"
              className="h-[240px] md:h-[320px] w-auto object-cover"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Vorherige Bilder"
        onClick={() => scrollByAmount(-1)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/85 backdrop-blur border border-foreground/15 text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors duration-300"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label="Nächste Bilder"
        onClick={() => scrollByAmount(1)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-background/85 backdrop-blur border border-foreground/15 text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors duration-300"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default VorherNachherMarquee;
