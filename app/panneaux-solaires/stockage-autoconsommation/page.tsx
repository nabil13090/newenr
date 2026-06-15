"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, TrendingUp, DollarSign, Zap, Building2, Shield, Users } from "lucide-react";
import Autoconsommation from "@/components/sections/Autoconsommation";
import HeroReusable from "@/components/sections/HeroReusable";
import HuaweiSection from "@/components/sections/HuaweiSection";
import EntrepriseForm from "@/components/forms/EntrepriseForm";
import Reveal from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/PageBlocks";

const galleryImages = [
  "/img/Bâtimentprofessionnel.jpg",
  "/img/chantier.png",
  "/img/detail.png",
  "/img/Siteindustriel.jpg",
  "/img/champs.jpg",
  "/img/Champs2.jpg",
  "/img/champs3.jpg",
  "/img/renfort.jpg",
];

export default function StockageAutoconsommationPage() {
  return (
    <>
      <HeroReusable
        title="Stockage et Autoconsommation"
        label="Solaire professionnel"
        showScrollIndicator={false}
        videoSrc="/img/equiper.mp4"
        customDescription="Produire, stocker et consommer votre électricité verte."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Panneaux solaires", href: "/panneaux-solaires" },
          { label: "Stockage et Autoconsommation" },
        ]}
      />
      <HuaweiSection />
      <Autoconsommation />

      <section className="section">
        <div className="container">
          <SectionHead
            title="Revente d'électricité : transformez votre toiture en source de revenus"
            description="La revente totale ou partielle de l'électricité produite par votre installation solaire photovoltaïque vous permet de générer des revenus réguliers tout en contribuant à la transition énergétique."
          />
          <div className="featgrid">
            {[
              { icon: TrendingUp, title: "Revenus réguliers", description: "Générez un flux de revenus prévisible grâce à la revente de votre production d'électricité." },
              { icon: DollarSign, title: "Tarif d'achat garanti", description: "Bénéficiez d'un tarif d'achat garanti sur 20 ans pour sécuriser vos revenus." },
              { icon: Zap, title: "Rentabilité optimale", description: "Maximisez le retour sur investissement de votre installation photovoltaïque." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="featcard">
                <item.icon size={36} color="var(--primary)" style={{ marginBottom: "0.75rem" }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="featcard featcard--peach" style={{ marginTop: "2rem" }}>
            <h3>Comment fonctionne la revente d&apos;électricité ?</h3>
            <ol className="processlist">
              {[
                "Installation solaire photovoltaïque sur votre toiture",
                "Production d'électricité verte injectée sur le réseau",
                "Revente de l'électricité à un tarif d'achat garanti",
                "Revenus réguliers pendant 20 ans minimum",
              ].map((step, i) => (
                <li key={i} className="processitem">
                  <span className="processitem__n">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            </div>
          </Reveal>

          <div className="twocol" style={{ marginTop: "2rem" }}>
            <Reveal className="featcard">
              <h3>Revente totale</h3>
              <ul className="checklist">
                {["Toute l'électricité produite est revendue", "Revenus maximaux et prévisibles", "Idéal pour les grandes surfaces disponibles"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="featcard" delay={80}>
              <h3>Revente partielle (avec autoconsommation)</h3>
              <ul className="checklist">
                {["Vous consommez une partie de votre production", "Le surplus est revendu", "Solution équilibrée entre économies et revenus"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="#formulaire" className="cta cta--primary">
              Étudier mon projet de revente <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--grey-light)" }}>
        <div className="container">
          <SectionHead
            title="Pourquoi équiper votre entreprise en solaire photovoltaïque ?"
            description="Dans un contexte de hausse continue des prix de l'énergie, le solaire représente une solution stratégique pour les entreprises."
          />
          <div className="featgrid">
            {[
              { icon: Building2, title: "Valoriser des surfaces inutilisées", description: "Toitures, hangars, entrepôts deviennent des sources de revenus" },
              { icon: TrendingUp, title: "Générer des revenus", description: "Revente d'électricité pour créer un nouveau flux financier" },
              { icon: Shield, title: "Stabiliser les coûts", description: "Réduire la dépendance aux fournisseurs et sécuriser les coûts énergétiques" },
              { icon: CheckCircle, title: "Énergie renouvelable", description: "Produire une énergie verte sur site, respectueuse de l'environnement" },
              { icon: Users, title: "Image RSE renforcée", description: "Renforcer l'image responsable et engagée de l'entreprise" },
              { icon: TrendingUp, title: "Investissement rentable", description: "Retour sur investissement attractif sur le long terme" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="featcard">
                <item.icon size={32} color="var(--primary)" style={{ marginBottom: "0.5rem" }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="container">
          <SectionHead
            title="Des solutions solaires adaptées aux professionnels"
            description="Chaque projet est étudié individuellement afin de proposer une installation cohérente avec la réalité du site et les objectifs de l'entreprise."
          />
          <div className="processlist" style={{ maxWidth: "48rem", margin: "0 auto" }}>
            {[
              { title: "Installations photovoltaïques en toiture", desc: "Installation solaire photovoltaïque sur les toitures de bâtiments professionnels, optimisée selon l'orientation et l'inclinaison." },
              { title: "Centrales solaires pour sites industriels et logistiques", desc: "Solutions adaptées aux grandes surfaces : entrepôts, hangars, bâtiments industriels avec dimensionnement sur mesure." },
              { title: "Projets orientés revente totale ou partielle", desc: "Configuration selon vos objectifs : revente totale de l'électricité produite, autoconsommation, ou mix des deux." },
              { title: "Installations évolutives", desc: "Solutions modulaires qui peuvent évoluer selon vos besoins futurs et l'évolution de votre activité." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="featcard" style={{ marginBottom: "1rem" }}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem" }}>
            Nous privilégions des équipements fiables et des installations conformes aux normes en vigueur.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--minth)" }}>
        <div className="container">
          <SectionHead
            title="Un accompagnement complet, de l'étude à la mise en service"
            description="Nous assurons une prise en charge globale du projet pour garantir une installation performante, sécurisée et durable."
          />
          <ol className="processlist">
            {[
              { title: "Étude de faisabilité technique et économique", description: "Analyse approfondie de votre projet, de sa rentabilité et de sa faisabilité technique." },
              { title: "Analyse du bâtiment et de son potentiel solaire", description: "Étude de la toiture, de l'orientation, de l'ensoleillement et des contraintes techniques." },
              { title: "Proposition d'une solution sur mesure", description: "Dimensionnement optimal et proposition détaillée adaptée à vos objectifs." },
              { title: "Installation solaire photovoltaïque", description: "Réalisation par nos équipes qualifiées, dans le respect des normes et des délais." },
              { title: "Mise en service et suivi", description: "Mise en service, formation et accompagnement pour optimiser votre installation." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60} as="li" className="processitem">
                <span className="processitem__n">{i + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p style={{ margin: "0.25rem 0 0", opacity: 0.85 }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            title="Nos installations solaires pour entreprises"
            description="Au fil des années, nous avons accompagné de nombreuses entreprises dans leur projet photovoltaïque. Découvrez ci-dessous quelques exemples d'installations réalisées sur des bâtiments professionnels, industriels et commerciaux."
          />
          <div className="mosaic">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 40} className="mosaic__item">
                <Image src={img} alt={`Installation solaire entreprise ${i + 1}`} fill sizes="200px" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="formulaire" className="section" style={{ background: "var(--sky)" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <Reveal className="formcard clay">
            <h2>Lancez votre projet solaire professionnel</h2>
            <p>Vous souhaitez équiper votre entreprise en solaire photovoltaïque et étudier la rentabilité de votre toiture ?</p>
            <p style={{ fontWeight: 600, color: "var(--primary)", marginBottom: "1.5rem" }}>
              Contactez-nous pour une étude personnalisée de votre projet solaire professionnel.
            </p>
            <EntrepriseForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
