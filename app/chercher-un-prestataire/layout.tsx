import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestataire photovoltaïque | Projets solaires professionnels",
  description: "Vous recherchez un prestataire photovoltaïque fiable ? Découvrez notre expertise terrain pour vos projets solaires professionnels et grands comptes.",
  keywords: "prestataire solaire, sous-traitance photovoltaïque, partenaire solaire B2B, délégation prestations solaires, installation photovoltaïque professionnelle",
  alternates: { canonical: "/chercher-un-prestataire/" },
  openGraph: {
    title: "Prestataire photovoltaïque | Projets solaires professionnels",
    description: "Vous recherchez un prestataire photovoltaïque fiable ? Découvrez notre expertise terrain pour vos projets solaires professionnels et grands comptes.",
    type: "website",
  },
  robots: { index: false, follow: true },
};

export default function ChercherUnPrestataireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
