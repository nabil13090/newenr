import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const HuaweiSection = () => (
  <section className="section section--compact">
    <div className="container split">
      <Reveal className="split__media">
        <Image
          src="/img/newhuawei.png"
          alt="Solutions Huawei FusionSolar"
          width={900}
          height={600}
          className="w-full h-full object-cover"
          sizes="55vw"
        />
      </Reveal>
      <Reveal delay={100}>
        <span className="section-label blue">Partenaire Huawei</span>
        <div className="relative h-20 w-56 mb-4">
          <Image src="/img/Huawei-Logo.png" alt="Huawei FusionSolar" fill className="object-contain object-left" />
        </div>
        <h2>Technologies SUN2000 &amp; LUNA2000</h2>
        <p>
          Spécialiste des solutions Huawei FusionSolar, Electrotech s&apos;appuie sur une expertise approfondie des onduleurs SUN2000 et des systèmes de stockage LUNA2000 pour concevoir et déployer des installations photovoltaïques de nouvelle génération.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Nous maîtrisons l&apos;intégration, le paramétrage et l&apos;optimisation de ces équipements afin de garantir des installations performantes, fiables et évolutives.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Grâce aux technologies avancées Huawei, nous maximisons la production énergétique, la sécurité des systèmes et la rentabilité des projets.
        </p>
      </Reveal>
    </div>
  </section>
);

export default HuaweiSection;
