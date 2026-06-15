import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Electrotech — électricité à Marseille",
  description:
    "Electrotech : entreprise d'électricité générale à Marseille, interventions chez les particuliers et sur sites professionnels, savoir-faire et exigence de qualité.",
  keywords:
    "Electrotech Marseille, entreprise électricité, électricien professionnel, équipe électriciens",
  alternates: { canonical: "/qui-sommes-nous/" },
  openGraph: {
    title: "Qui sommes-nous | Electrotech — électricité à Marseille",
    description:
      "Notre histoire et nos engagements : sécurité des installations, respect des normes et accompagnement de vos projets électriques.",
    type: "website",
  },
};

export default function QuiSommesNousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
