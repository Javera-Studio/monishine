"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Triggers once when the element first becomes visible, then disconnects —
 * no continuously-running observer or animation.
 */
export function useRevealOnce<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed, threshold]);

  return { ref, revealed };
}
