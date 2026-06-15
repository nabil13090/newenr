import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    number: "01",
    title: "Étude de faisabilité solaire",
    description:
      "Analyse personnalisée de votre projet prenant en compte votre consommation électrique, l'orientation et la surface de votre toiture.",
  },
  {
    number: "02",
    title: "Installation solaire photovoltaïque",
    description:
      "Installation professionnelle avec des équipements fiables et éprouvés, conçus pour durer dans le temps.",
  },
  {
    number: "03",
    title: "Mise en service et tests",
    description:
      "Vérification complète du système et mise en service avec tous les tests nécessaires pour garantir un fonctionnement optimal.",
  },
  {
    number: "04",
    title: "Maintenance et suivi de performance",
    description:
      "Accompagnement continu avec maintenance préventive et suivi de la performance de votre installation.",
  },
];

const ServicesDetail = () => (
  <section className="section services-block" id="services-detail">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Nos services en solaire photovoltaïque</h2>
      </Reveal>

      <div className="services-layout">
        <Reveal className="services-layout__photo hidden-mobile">
          <div className="services-layout__img">
            <Image src="/img/etude.jpg" alt="Étude de faisabilité solaire" fill className="object-cover" sizes="20vw" />
          </div>
        </Reveal>

        <div className="services-layout__cards">
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 60} className="service-item">
              <span className="service-item__num">{s.number}</span>
              <div className="service-item__body">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-layout__photo hidden-mobile" delay={80}>
          <div className="services-layout__img">
            <Image src="/img/Siteindustriel.jpg" alt="Site industriel avec installation solaire" fill className="object-cover" sizes="20vw" />
          </div>
        </Reveal>
      </div>

      <div className="services-layout__photos-mobile">
        <div className="services-layout__img">
          <Image src="/img/etude.jpg" alt="Étude de faisabilité" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="services-layout__img">
          <Image src="/img/Siteindustriel.jpg" alt="Site industriel" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </div>
  </section>
);

export default ServicesDetail;
