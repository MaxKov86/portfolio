import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

/**
 * Reveals an element once it scrolls into view. Disconnects after the first hit,
 * so an element that has appeared never animates again.
 */
export function useReveal<T extends HTMLElement>(): {
  ref: MutableRefObject<T | null>;
  isVisible: boolean;
} {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
