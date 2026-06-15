import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
  onClick?: () => void;
};

const Logo = ({ variant = "header", onClick }: LogoProps) => (
  <Link
    href="/"
    className={`logo logo--${variant}`}
    onClick={onClick}
    aria-label="Electrotech — Accueil"
  >
    <span className="logo__mark">
      <Image
        src={
          variant === "footer"
            ? "/img/logo-footer-white.png"
            : "/img/logo-navbar.png"
        }
        alt="Electrotech — Expertise électrique"
        fill
        sizes={
          variant === "footer"
            ? "(max-width: 768px) 144px, 168px"
            : "(max-width: 768px) 160px, 220px"
        }
        className="logo__img"
        priority={variant === "header"}
      />
    </span>
  </Link>
);

export default Logo;
