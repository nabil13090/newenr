import Image from "next/image";
import Link from "next/link";

const CTA = () => (
  <section className="dband" id="contact">
    <div className="dband__half left">
      <video src="/img/acceuilsolaire.mp4" autoPlay muted loop playsInline />
      <h2>Besoin d&apos;un devis ?</h2>
      <p>
        Étude gratuite et sans engagement pour votre projet solaire photovoltaïque
        professionnel.
      </p>
      <Link href="/contact" className="cta cta--white">
        Demander un devis
      </Link>
    </div>
    <div className="dband__half right">
      <Image
        src="/img/Bâtimentprofessionnel.jpg"
        alt="Installation solaire professionnelle"
        fill
        sizes="50vw"
      />
      <h2>Une question urgente ?</h2>
      <div className="tel">04 91 87 11 08</div>
      <a href="tel:0491871108" className="cta cta--primary">
        Appeler maintenant
      </a>
    </div>
  </section>
);

export default CTA;
