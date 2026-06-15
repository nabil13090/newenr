"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HeroReusableProps {
  title: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
  videoSrc?: string;
  imageSrc?: string;
  customDescription?: string | null;
  titleMaxLines?: 2 | 3;
  breadcrumb?: { label: string; href?: string }[];
  label?: string;
}

const HeroReusable = ({
  title,
  subtitle,
  videoSrc = "/img/electrotechmp4.mp4",
  imageSrc,
  customDescription,
  titleMaxLines,
  breadcrumb,
  label,
}: HeroReusableProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [videoSrc]);

  const description =
    customDescription === undefined
      ? subtitle
      : customDescription === ""
        ? undefined
        : customDescription;

  const titleClass =
    titleMaxLines === 2
      ? "pagehero__title pagehero__title--2"
      : titleMaxLines === 3
        ? "pagehero__title pagehero__title--3"
        : "pagehero__title";

  return (
    <section className="pagehero">
      <div className="pagehero__media-wrap">
        {imageSrc ? (
          <div className="pagehero__image">
            <Image src={imageSrc} alt="" fill priority className="pagehero__media" sizes="100vw" />
          </div>
        ) : (
          <video
            ref={videoRef}
            className="pagehero__media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="pagehero__veil" />
      </div>

      <div className="container pagehero__content">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="pagehero__crumb" aria-label="Fil d'Ariane">
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="pagehero__crumb-sep"> · </span>}
                {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
              </span>
            ))}
          </nav>
        )}
        {(label || subtitle) && (
          <span className="section-label white">{label || subtitle}</span>
        )}
        <h1 className={titleClass}>{title}</h1>
        {description && <p className="pagehero__desc">{description}</p>}
      </div>
    </section>
  );
};

export default HeroReusable;
