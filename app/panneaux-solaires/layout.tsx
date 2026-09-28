import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panneaux solaires | Solutions photovoltaïques professionnelles | Electrotech Marseille",
  description: "Découvrez nos solutions de panneaux solaires photovoltaïques : équiper votre entreprise, autoconsommation et revente d'électricité.",
  keywords: "panneaux solaires, photovoltaïque, installation solaire, autoconsommation, revente électricité",
  alternates: { canonical: "/panneaux-solaires/" },
  openGraph: {
    title: "Panneaux solaires | Solutions photovoltaïques professionnelles",
    description: "Découvrez nos solutions de panneaux solaires photovoltaïques pour entreprises et professionnels.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PanneauxSolairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
