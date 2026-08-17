import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemple prestataire — Tenergie | Hangar agricole Belmont de la Loire",
  description:
    "Découvrez notre réalisation pour Tenergie : installation photovoltaïque complète sur un hangar agricole neuf à Belmont de la Loire (42670), de la pose à la mise en service.",
  keywords:
    "Tenergie, prestataire photovoltaïque, hangar agricole solaire, Belmont de la Loire, installation panneaux solaires, mise en service photovoltaïque",
  alternates: { canonical: "/chercher-un-prestataire/exemple/tenergie/" },
  openGraph: {
    title: "Exemple prestataire — Tenergie | Electrotech",
    description:
      "Installation photovoltaïque complète sur hangar agricole neuf à Belmont de la Loire. Équipe professionnelle, pose et mise en service.",
    type: "article",
    images: [{ url: "/img/prestataires/tenergie/equipe-chantier-belmont.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function TenergieExempleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
