"use client";

import { useRevealOnce } from "@/hooks/use-reveal-once";

/**
 * A single, hand-drawn-feeling curved line — used in place of a standard
 * straight divider. Draws itself in once, like a light brush stroke.
 */
const OrganicDivider = ({ className = "" }: { className?: string }) => {
  const { ref, revealed } = useRevealOnce<HTMLDivElement>(0.4);

  return (
    <div ref={ref} aria-hidden className={`organic-divider ${revealed ? "is-visible" : ""} ${className}`}>
      <svg width="220" height="14" viewBox="0 0 220 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7 C 38 1, 68 13, 108 6 C 148 -1, 180 12, 218 5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default OrganicDivider;
