"use client";

import { useRevealOnce } from "@/hooks/use-reveal-once";

type Position = "bottom-left" | "top-right" | "top-left" | "bottom-right";

const POSITION_CLASSES: Record<Position, string> = {
  "bottom-left": "left-2 md:left-6 bottom-2 md:bottom-6",
  "top-right": "right-2 md:right-6 top-2 md:top-6",
  "top-left": "left-2 md:left-6 top-2 md:top-6",
  "bottom-right": "right-2 md:right-6 bottom-2 md:bottom-6",
};

/**
 * Fine-line pampas grass motif — a nod to the real pampas grass in the studio.
 * Purely decorative, kept subtle (opacity set in CSS) and hidden below md so
 * it never competes with content on small screens.
 *
 * Positioned fully inside its section (not bled off the edge) because the
 * parent sections use overflow-hidden — IntersectionObserver measures the
 * clipped visible area, so a mostly-off-canvas icon could stay under the
 * reveal threshold forever and never fade in.
 */
const PampasMotif = ({ position }: { position: Position }) => {
  const { ref, revealed } = useRevealOnce<HTMLDivElement>(0.01);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pampas-motif hidden md:block absolute z-0 pointer-events-none select-none ${POSITION_CLASSES[position]} ${revealed ? "is-visible" : ""}`}
    >
      <svg width="190" height="230" viewBox="0 0 190 230" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M95 230 C 88 165, 56 122, 36 42" />
          <path d="M95 230 C 95 155, 101 100, 95 18" />
          <path d="M95 230 C 104 165, 134 118, 154 52" />
          <path d="M95 230 C 82 175, 74 132, 60 84" opacity="0.65" />
          <path d="M95 230 C 106 175, 116 132, 132 88" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
};

export default PampasMotif;
