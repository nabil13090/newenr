import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_PHONE_TEL, SITE_URL } from "@/lib/seo/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  telephone: SITE_PHONE_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 Trav. des Marronniers",
    addressLocality: "Marseille",
    postalCode: "13012",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  areaServed: "Provence-Alpes-Côte d'Azur",
  knowsAbout: [
    "Installation photovoltaïque professionnelle",
    "Autoconsommation solaire",
    "Stockage batterie",
    "QualiPV RGE",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/seo/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  title: "Electrotech Marseille | Solaire photovoltaïque professionnel",
  description:
    "Expert en solaire photovoltaïque à Marseille : installation, autoconsommation, stockage et délégation pour entreprises, industriels et collectivités. Devis gratuit.",
  keywords:
    "solaire photovoltaïque Marseille, installation panneaux solaires, autoconsommation, stockage solaire, QualiPV RGE, énergie renouvelable PACA",
  authors: [{ name: "Electrotech" }],
  creator: "Electrotech",
  publisher: "Electrotech",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
    shortcut: "/img/logo.png",
  },
  openGraph: {
    title: "Electrotech Marseille | Solaire photovoltaïque professionnel",
    description:
      "Installation solaire photovoltaïque pour entreprises et professionnels à Marseille et en région PACA.",
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    siteName: "Electrotech",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Electrotech - Solaire photovoltaïque Marseille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrotech Marseille | Solaire photovoltaïque",
    description:
      "Solutions solaires photovoltaïques pour entreprises et professionnels. Devis gratuit.",
    images: ["/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googlea17c85930f103b70",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
