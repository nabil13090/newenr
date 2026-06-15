import Link from "next/link";

interface MiniHeroProps {
  title: string;
  label?: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  variant?: "dark" | "sky" | "peach" | "grey";
}

const MiniHero = ({
  title,
  label,
  description,
  breadcrumb,
  variant = "dark",
}: MiniHeroProps) => {
  const variantClass =
    variant === "sky"
      ? "minihero--sky"
      : variant === "peach"
        ? "minihero--peach"
        : variant === "grey"
          ? "minihero--grey"
          : "";

  return (
    <section className={`minihero ${variantClass}`}>
      <div className="container">
        {breadcrumb && breadcrumb.length > 0 && (
          <div className="crumb">
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {i > 0 && " · "}
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </div>
        )}
        {label && <span className="section-label white">{label}</span>}
        <h1>{title}</h1>
        {description && (
          <p
            style={{
              color: variant === "dark" ? "rgba(255,255,255,0.8)" : "var(--grey-text)",
              maxWidth: "42rem",
              margin: "1rem auto 0",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default MiniHero;
