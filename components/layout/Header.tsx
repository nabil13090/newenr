"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/layout/Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/panneaux-solaires/stockage-autoconsommation", label: "Autoconsommation" },
    { href: "/chercher-un-prestataire", label: "Prestataire" },
    { href: "/nos-realisations", label: "Réalisations" },
    { href: "/qui-sommes-nous", label: "Qui sommes\u00A0nous" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="container header__inner">
          <Logo variant="header" onClick={closeMenu} />

          <nav className="nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <Link href="/contact" className="cta cta--primary">
              Devis gratuit
            </Link>
            <button
              className={`burger${menuOpen ? " open" : ""}`}
              id="burger"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} id="mobileNav">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="cta cta--primary" onClick={closeMenu}>
          Devis gratuit
        </Link>
      </nav>
    </>
  );
};

export default Header;
