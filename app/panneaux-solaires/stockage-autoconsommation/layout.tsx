import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stockage et Autoconsommation | Solaire photovoltaïque | Electrotech Marseille",
  description: "Stockage et autoconsommation solaire : produire, stocker et consommer votre électricité verte. Solutions photovoltaïques pour les professionnels.",
  keywords: "stockage solaire, autoconsommation, panneaux solaires, photovoltaïque, installation solaire, revente électricité",
  alternates: { canonical: "/panneaux-solaires/stockage-autoconsommation/" },
  openGraph: {
    title: "Stockage et Autoconsommation | Electrotech Marseille",
    description: "Produire, stocker et consommer votre électricité verte. Solutions photovoltaïques pour les professionnels.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function StockageAutoconsommationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
