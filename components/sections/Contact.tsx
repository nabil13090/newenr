"use client";

import ContactForm from "@/components/forms/ContactForm";

const Contact = () => (
  <section className="section">
    <div className="container contact-grid">
      <div className="formcard clay">
        <h2>Demande de devis</h2>
        <ContactForm />
      </div>

      <div>
        <div className="infocard sky clay">
          <h3>Coordonnées</h3>
          <div className="row">
            <b>📍</b>
            <div>
              58 Trav. des Marronniers
              <br />
              13012 Marseille
            </div>
          </div>
          <div className="row">
            <b>📞</b>
            <a href="tel:0491871108">04 91 87 11 08</a>
          </div>
          <div className="row">
            <b>✉️</b>
            <a href="mailto:contact@electrotech13.fr">contact@electrotech13.fr</a>
          </div>
          <p style={{ marginTop: "0.5rem", fontSize: "var(--font-size-1)" }}>
            Lun–Ven 7h30–18h · Sam–Dim urgences
          </p>
        </div>

        <div className="infocard blue clay">
          <h3>Devis gratuit</h3>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>
            Étude personnalisée et estimation sans engagement pour votre projet
            solaire photovoltaïque.
          </p>
        </div>

        <div className="infocard dark clay">
          <h3>Urgence</h3>
          <div className="tel">04 91 87 11 08</div>
          <a href="tel:0491871108" className="cta cta--primary">
            Appeler maintenant
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
