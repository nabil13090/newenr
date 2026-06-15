import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface PageCTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const PageCTA = ({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) => (
  <section className="dband">
    <div className="dband__half left">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={primaryHref} className="cta cta--white">
        {primaryLabel} <span className="arrow">→</span>
      </Link>
    </div>
    <div className="dband__half right">
      <h2>Une question ?</h2>
      <div className="tel">04 91 87 11 08</div>
      {secondaryHref ? (
        <Link href={secondaryHref} className="cta cta--primary">
          {secondaryLabel || "Nous contacter"}
        </Link>
      ) : (
        <a href="tel:0491871108" className="cta cta--primary">
          Appeler maintenant
        </a>
      )}
    </div>
  </section>
);

interface SectionHeadProps {
  label?: string;
  labelClass?: string;
  title: string;
  description?: string;
}

export const SectionHead = ({ label, labelClass = "", title, description }: SectionHeadProps) => (
  <Reveal className="section-head">
    {label && <span className={`section-label ${labelClass}`}>{label}</span>}
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-head__desc">{description}</p>}
  </Reveal>
);

export const CertificationsRow = () => (
  <div className="certrow">
    <Reveal>
      <div className="certrow__logo">
        <img src="/img/ATEC.png" alt="ATEC" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </Reveal>
    <Reveal delay={80}>
      <div className="certrow__logo certrow__logo--lg">
        <img src="/img/MMALOGO.png" alt="MMA" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </Reveal>
    <Reveal delay={160}>
      <div className="certrow__logo">
        <img src="/img/ETN.png" alt="ETN" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
    </Reveal>
  </div>
);
