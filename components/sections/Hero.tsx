"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const mediaRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const media = mediaRef.current;
    if (!media) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const rect = media.getBoundingClientRect();
      const off = rect.top + rect.height / 2 - vh / 2;
      media.style.transform = `translate3d(0, ${(-off * 0.18).toFixed(1)}px, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="hero" id="accueil">
      <video
        ref={mediaRef}
        className="hero__media"
        autoPlay
        muted
        loop
        playsInline
        data-parallax="0.18"
      >
        <source src="/img/acceuilsolaire.mp4" type="video/mp4" />
      </video>
      <div className="hero__veil" />
      <div className="container hero__content">
        <span className="section-label white">Solaire · Photovoltaïque · PACA</span>
        <h1>Votre énergie solaire entre de bonnes mains</h1>
        <p className="hero__sub">
          Expert en installation solaire photovoltaïque à Marseille — Entreprises,
          industriels et collectivités en région PACA.
        </p>
        <div className="hero__ctas">
          <Link href="/nos-realisations" className="cta cta--primary">
            Voir nos réalisations <span className="arrow">→</span>
          </Link>
          <Link href="/contact" className="cta cta--secondary on-dark">
            Nous contacter
          </Link>
        </div>
      </div>
      <div className="hero__badge">✓ QualiPV RGE · 25+ ans d&apos;expérience</div>
    </section>
  );
};

export default Hero;
