import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panneaux solaires pour entreprises | Production & revente d'électricité",
  description: "Équipez votre entreprise en panneaux solaires et transformez votre toiture en source de revenus grâce à la production et la revente d'électricité.",
  keywords: "panneaux solaires entreprise, photovoltaïque professionnel, revente électricité, installation solaire entreprise, énergie renouvelable B2B",
  openGraph: {
    title: "Panneaux solaires pour entreprises | Production & revente d'électricité",
    description: "Équipez votre entreprise en panneaux solaires et transformez votre toiture en source de revenus grâce à la production et la revente d'électricité.",
    type: "website",
  },
  robots: { index: false, follow: true },
};

export default function EquiperMonEntrepriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
