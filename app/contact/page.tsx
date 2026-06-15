import MiniHero from "@/components/ui/MiniHero";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <MiniHero
        title="Parlons de votre projet"
        label="Devis gratuit"
        description="Décrivez-nous votre projet solaire : nous revenons vers vous rapidement avec un conseil et une estimation personnalisée."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Contact />
    </>
  );
}
