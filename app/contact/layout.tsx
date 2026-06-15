import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Électricien à Marseille — Electrotech",
  description:
    "Contactez Electrotech pour un dépannage, une installation ou une rénovation électrique à Marseille : réponse rapide et conseils personnalisés.",
  keywords:
    "contact électricien Marseille, devis électricité, dépannage électrique, Electrotech contact",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact | Électricien à Marseille — Electrotech",
    description:
      "Demande de devis ou d'intervention : notre équipe d'électriciens vous répond dans les meilleurs délais.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
