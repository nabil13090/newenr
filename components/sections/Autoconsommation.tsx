import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const Autoconsommation = () => (
  <>
    <section className="section" style={{ background: "var(--sky)" }} id="autoconsommation">
      <div className="container split reverse">
        <Reveal className="split__media">
          <Image
            src="/img/entrepot-logistique.jpg"
            alt="Autoconsommation solaire"
            width={800}
            height={640}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={100}>
          <span className="section-label blue">Autoconsommation</span>
          <h2>Produisez et consommez votre énergie.</h2>
          <p>
            L&apos;installation solaire capte l&apos;énergie du soleil, transforme
            l&apos;électricité pour alimenter vos équipements et stocke le surplus
            dans des batteries Huawei pour une consommation optimisée.
          </p>
          <div className="split__stats">
            <div className="split__stat blue">
              <div className="n">-40%</div>
              <div className="l">Réduction facture énergie</div>
            </div>
            <div className="split__stat blue">
              <div className="n">Huawei</div>
              <div className="l">Partenaire FusionSolar</div>
            </div>
          </div>
          <Link
            href="/panneaux-solaires/stockage-autoconsommation"
            className="cta cta--tertiary"
          >
            Stockage et autoconsommation <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>

    <section className="section" style={{ background: "var(--minth)" }}>
      <div className="container split">
        <Reveal className="split__media">
          <Image
            src="/img/etude.jpg"
            alt="Étude de faisabilité solaire"
            width={800}
            height={640}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={100}>
          <span className="section-label green">Étude &amp; installation</span>
          <h2>Un projet solaire maîtrisé de A à Z.</h2>
          <p>
            De l&apos;étude de faisabilité à la mise en service, notre bureau
            d&apos;études intégré maîtrise toutes les étapes. Qualification QualiPV
            RGE pour des installations conformes aux normes en vigueur.
          </p>
          <div className="split__stats">
            <div className="split__stat green">
              <div className="n">QualiPV</div>
              <div className="l">Certification RGE</div>
            </div>
            <div className="split__stat green">
              <div className="n">1</div>
              <div className="l">Interlocuteur unique</div>
            </div>
          </div>
          <Link href="/contact" className="cta cta--tertiary">
            Demander une étude <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default Autoconsommation;
