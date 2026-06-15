import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

interface AboutProps {
  compact?: boolean;
}

const About = ({ compact = false }: AboutProps) => {
  if (compact) {
    return (
      <section className="section" id="qui-sommes-nous">
        <div className="container split">
          <Reveal className="split__media">
            <Image
              src="/img/Bâtimentprofessionnel.jpg"
              alt="Electrotech - expert solaire"
              width={800}
              height={640}
              className="w-full h-full object-cover"
              sizes="50vw"
            />
          </Reveal>
          <Reveal delay={100}>
            <span className="section-label">Qui sommes-nous</span>
            <h2>Electrotech, votre expert solaire.</h2>
            <p>
              Spécialisés en solutions solaires photovoltaïques pour entreprises et
              professionnels. Qualification QualiPV RGE, bureau d&apos;études intégré
              et plus de 25 ans d&apos;expérience.
            </p>
            <Link href="/contact" className="cta cta--primary">
              Contactez-nous <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="qui-sommes-nous">
      <div className="container split reverse">
        <Reveal className="split__media">
          <Image
            src="/img/Bâtimentprofessionnel.jpg"
            alt="Electrotech - expert solaire photovoltaïque"
            width={800}
            height={640}
            className="w-full h-full object-cover"
            sizes="50vw"
          />
        </Reveal>
        <Reveal delay={100}>
          <span className="section-label">Qui sommes-nous</span>
          <h2>25 ans d&apos;expertise au service du solaire.</h2>
          <p>
            <strong>Electrotech</strong> est spécialisé dans l&apos;installation de
            solutions solaires photovoltaïques pour les entreprises et professionnels.
            Fondée sur une expertise en électricité générale depuis 2002, notre équipe
            — Bilel (ingénieur aéronautique) et Rayan (conducteur de travaux) —
            garantit des installations conformes grâce à notre qualification{" "}
            <strong>QualiPV RGE</strong>.
          </p>
          <div className="split__stats">
            <div className="split__stat">
              <div className="n">500+</div>
              <div className="l">Clients satisfaits</div>
            </div>
            <div className="split__stat blue">
              <div className="n">5.0</div>
              <div className="l">Note Google</div>
            </div>
          </div>
          <Link href="/qui-sommes-nous" className="cta cta--tertiary">
            En savoir plus <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
