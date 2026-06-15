import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoconsommation solaire | Produire votre propre électricité | Electrotech Marseille",
  description: "L'autoconsommation consiste à consommer directement l'électricité produite par vos panneaux solaires. Économisez jusqu'à 1200 € par an sur votre facture d'électricité.",
  keywords: "autoconsommation solaire, autoconsommation photovoltaïque, produire électricité, économiser électricité, panneaux solaires autoconsommation",
  openGraph: {
    title: "Autoconsommation solaire | Produire votre propre électricité",
    description: "L'autoconsommation consiste à consommer directement l'électricité produite par vos panneaux solaires. Économisez jusqu'à 1200 € par an.",
    type: "website",
  },
  robots: { index: false, follow: true },
};

export default function AutoconsommationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
