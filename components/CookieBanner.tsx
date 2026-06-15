"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookieConsent", "refused");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
      style={{ background: "var(--dark)", color: "#fff" }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          En continuant à naviguer, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={handleAccept} className="cta cta--primary">
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="cta cta--secondary on-dark"
            style={{ height: "3rem" }}
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
