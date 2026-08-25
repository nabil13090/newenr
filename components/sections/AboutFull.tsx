"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const AboutFull = () => (
  <section className="section" id="qui-sommes-nous">
    <div className="container">
      <Reveal className="about-hero clay">
        <div className="about-hero__bg">
          <Image
            src="/img/batiment-professionnel.jpg"
            alt="Installation solaire professionnelle"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="about-hero__veil" />
        </div>
        <div className="about-hero__content">
          <span className="section-label white">Qui nous sommes</span>
          <h2>Electrotech, votre expert en solaire photovoltaïque</h2>
          <p>
            <strong>Electrotech</strong> est spécialisé dans l&apos;installation de{" "}
            <strong>solutions solaires photovoltaïques</strong> pour les entreprises et professionnels.
            Notre expertise couvre l&apos;ensemble du processus, de l&apos;étude de faisabilité à la mise en service.
            Grâce à notre qualification <strong>QualiPV RGE</strong>, nous garantissons des installations conformes.
          </p>
          <Link href="/contact" className="cta cta--secondary on-dark">
            Contactez-nous
          </Link>
        </div>
        <div className="about-hero__badge hidden-mobile">
          <Image
            src="/img/logo-qualiPV-RGE_chabanat-1024x707.avif"
            alt="QualiPV RGE"
            width={60}
            height={41}
          />
          <div>
            <strong>QualiPV RGE</strong>
            <small>Qualification Photovoltaïque</small>
          </div>
        </div>
      </Reveal>

      <div className="stats stats--inline">
        <div className="stats__grid">
          <Reveal>
            <div className="stat__num"><AnimatedCounter target={25} suffix="+" /></div>
            <div className="stat__lbl">Années d&apos;expérience</div>
          </Reveal>
          <Reveal delay={100}>
            <div className="stat__num"><AnimatedCounter target={500} suffix="+" /></div>
            <div className="stat__lbl">Clients satisfaits</div>
          </Reveal>
          <Reveal delay={200}>
            <div className="stat__num"><AnimatedCounter target={5} /></div>
            <div className="stat__lbl">Note moyenne Google</div>
          </Reveal>
          <Reveal delay={300}>
            <div className="stat__num"><AnimatedCounter target={100} suffix="%" /></div>
            <div className="stat__lbl">Conformité normes</div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutFull;
