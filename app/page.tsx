import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Certifications from "@/components/sections/Certifications";
import InstallationsEntreprise from "@/components/sections/InstallationsEntreprise";
import SplitHero from "@/components/sections/SplitHero";
import ServicesDetail from "@/components/sections/ServicesDetail";
import AutoconsommationHome from "@/components/sections/AutoconsommationHome";
import RealisationsPreview from "@/components/sections/RealisationsPreview";
import Zones from "@/components/sections/Zones";
import Testimonials from "@/components/sections/Testimonials";
import AboutFull from "@/components/sections/AboutFull";
import CTA from "@/components/sections/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrotech Marseille | Solaire photovoltaïque professionnel",
  description:
    "Expert en solaire photovoltaïque à Marseille : installation, autoconsommation, stockage et délégation pour entreprises et professionnels en PACA.",
  keywords:
    "solaire photovoltaïque Marseille, installation panneaux solaires, autoconsommation, stockage solaire, QualiPV RGE, PACA",
  openGraph: {
    title: "Electrotech Marseille | Solaire photovoltaïque",
    description:
      "Solutions solaires photovoltaïques pour entreprises, industriels et collectivités à Marseille et en région PACA.",
    type: "website",
    locale: "fr_FR",
    siteName: "Electrotech Marseille",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: "Electrotech Marseille",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://electrotech-sud.fr",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://electrotech-sud.fr"}/img/logo.png`,
    description:
      "Expert en installation solaire photovoltaïque pour entreprises et professionnels.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "58 Trav. des Marronniers",
      addressLocality: "Marseille",
      postalCode: "13012",
      addressCountry: "FR",
    },
    areaServed: "France",
    telephone: "+33491871108",
    email: "contact@electrotech13.fr",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <Stats />
      <Certifications />
      <InstallationsEntreprise />
      <SplitHero />
      <ServicesDetail />
      <AutoconsommationHome />
      <RealisationsPreview />
      <Zones />
      <Testimonials />
      <AboutFull />
      <CTA />
    </>
  );
}
