import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos réalisations | Travaux d'électricité — Electrotech Marseille",
  description:
    "Découvrez des chantiers d'installation, de rénovation électrique et de mise aux normes réalisés par Electrotech pour des clients à Marseille et en région.",
  keywords:
    "réalisations électricien, chantiers électricité, installation électrique, rénovation, Electrotech",
  alternates: { canonical: "/nos-realisations/" },
  openGraph: {
    title: "Nos réalisations | Travaux d'électricité — Electrotech",
    description:
      "Sélection de projets : tableaux, circuits, éclairages et équipements pour logements et locaux professionnels.",
    type: "website",
  },
};

export default function NosRealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
