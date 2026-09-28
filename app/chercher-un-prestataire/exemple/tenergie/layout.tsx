import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exemple prestataire — Tenergie | Belmont de la Loire",
  description:
    "Réalisation Tenergie : installation photovoltaïque sur hangar agricole à Belmont de la Loire (42670), pose et mise en service.",
  keywords:
    "Tenergie, prestataire photovoltaïque, hangar agricole solaire, Belmont de la Loire",
  alternates: { canonical: "/chercher-un-prestataire/exemple/tenergie/" },
  openGraph: {
    title: "Exemple prestataire — Tenergie | Electrotech",
    description:
      "Installation photovoltaïque sur hangar agricole à Belmont de la Loire. Pose et mise en service.",
    type: "article",
    images: [{ url: "/img/prestataires/tenergie/equipe-chantier-belmont.jpg" }],
  },
  robots: { index: false, follow: false },
};

export default function TenergieExempleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
