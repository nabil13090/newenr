import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const Stats = () => (
  <section className="stats">
    <div className="container stats__grid">
      <Reveal>
        <div className="stat__num">
          <AnimatedCounter target={500} suffix="+" />
        </div>
        <div className="stat__lbl">Clients satisfaits</div>
      </Reveal>
      <Reveal delay={100}>
        <div className="stat__num">
          <AnimatedCounter target={25} suffix="+" />
        </div>
        <div className="stat__lbl">Années d&apos;expérience</div>
      </Reveal>
      <Reveal delay={200}>
        <div className="stat__num">
          <AnimatedCounter target={100} suffix="%" />
        </div>
        <div className="stat__lbl">Conformité normes</div>
      </Reveal>
      <Reveal delay={300}>
        <div className="stat__num">
          <AnimatedCounter target={5} suffix="" />
        </div>
        <div className="stat__lbl">Note Google</div>
      </Reveal>
    </div>
  </section>
);

export default Stats;
