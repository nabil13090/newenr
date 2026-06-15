"use client";

import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ target, suffix = "", className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = target.toLocaleString("fr-FR") + suffix;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const span = entry.target as HTMLSpanElement;
          const t = +span.dataset.target!;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min((now - start) / 1600, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const isDecimal = t % 1 !== 0;
            span.textContent = isDecimal
              ? (ease * t).toFixed(1)
              : Math.round(ease * t).toLocaleString("fr-FR");
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(span);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <span ref={ref} data-target={target} className={className}>
      0{suffix}
    </span>
  );
};

export default AnimatedCounter;
