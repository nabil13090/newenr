import Link from "next/link";
import Logo from "@/components/layout/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <Logo variant="footer" />
          <p style={{ marginTop: "1rem" }}>
            Expert en solaire photovoltaïque depuis plus de 25 ans. Installation,
            autoconsommation, stockage et délégation pour entreprises et
            professionnels en région Provence-Alpes-Côte d&apos;Azur.
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <Link href="/panneaux-solaires/stockage-autoconsommation">
            Autoconsommation
          </Link>
          <Link href="/panneaux-solaires">Panneaux solaires</Link>
          <Link href="/chercher-un-prestataire">Prestataire solaire</Link>
          <Link href="/nos-realisations">Nos réalisations</Link>
          <Link href="/seo/">Zones PACA</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/faq/">FAQ</Link>
          <Link href="/contact">Devis gratuit</Link>
        </div>

        <div className="footer__col">
          <h4>Zones d&apos;intervention</h4>
          <Link href="/contact">Marseille</Link>
          <Link href="/contact">Aix-en-Provence</Link>
          <Link href="/contact">Fos-sur-Mer</Link>
          <Link href="/contact">Pertuis</Link>
          <Link href="/contact">Bouches-du-Rhône (13)</Link>
          <Link href="/contact">Var · Vaucluse · PACA</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>
            58 Trav. des Marronniers
            <br />
            13012 Marseille
          </p>
          <a href="tel:0491871108">04 91 87 11 08</a>
          <a href="mailto:contact@electrotech13.fr">contact@electrotech13.fr</a>
          <p>Lun–Ven 7h30–18h · Sam–Dim urgences</p>
        </div>
      </div>

      <div className="footer__legal">
        © {currentYear} ELECTROTECH ·{" "}
        <Link href="/mentions-legales">Mentions légales</Link> ·{" "}
        <Link href="/confidentialite">Politique de confidentialité</Link> ·{" "}
        <Link href="/cgv">CGV</Link>
      </div>
    </footer>
  );
};

export default Footer;
