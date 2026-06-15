import Image from "next/image";

const Certifications = () => (
  <section className="garanties-bar">
    <div className="container">
      <h2 className="garanties-bar__title">Nos garanties</h2>
      <div className="certrow">
        <div className="certrow__logo">
          <Image src="/img/ATEC.png" alt="ATEC" fill className="object-contain" sizes="120px" />
        </div>
        <div className="certrow__logo certrow__logo--lg">
          <Image src="/img/MMALOGO.png" alt="MMA Garantie décennale" fill className="object-contain" sizes="144px" />
        </div>
        <div className="certrow__logo">
          <Image src="/img/ETN.png" alt="ETN" fill className="object-contain" sizes="120px" />
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
