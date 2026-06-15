import Reveal from "@/components/ui/Reveal";

const zones = [
  "Marseille",
  "Aix-en-Provence",
  "Fos-sur-Mer",
  "Pertuis",
  "Aubagne",
  "Salon-de-Provence",
  "Arles",
  "Toulon",
  "Avignon",
  "Manosque",
  "Gap",
  "Digne-les-Bains",
];

const Zones = () => (
  <section className="section zones">
    <div className="container">
      <Reveal>
        <h2>Nous intervenons dans toute la région PACA</h2>
        <p className="sub">Départements 13 · 83 · 84 · 04 · 05</p>
        <div className="zonegrid">
          {zones.map((z) => (
            <span key={z}>{z}</span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Zones;
