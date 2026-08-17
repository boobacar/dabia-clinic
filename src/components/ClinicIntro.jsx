import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import treatmentRoom from "../assets/hero/hero7.webp";

const ClinicIntro = () => (
  <section className="clinic-intro section-pad">
    <div className="studio-container clinic-intro__grid">
      <div className="clinic-intro__copy">
        <SectionTitle title="D’abord vous écouter. Ensuite, expliquer." subtitle="Votre première visite" center={false} />
        <p className="clinic-intro__lead">
          Une douleur, une gêne ou un projet de sourire ne racontent jamais toute l’histoire.
          La consultation sert à regarder, poser les bonnes questions et hiérarchiser ce qui compte.
        </p>
        <ol className="care-steps">
          <li><span>01</span><div><strong>Faire le point</strong><p>Vos attentes, vos antécédents et ce qui vous amène aujourd’hui.</p></div></li>
          <li><span>02</span><div><strong>Comprendre le diagnostic</strong><p>Un examen expliqué simplement, avec l’imagerie lorsque nécessaire.</p></div></li>
          <li><span>03</span><div><strong>Choisir la suite</strong><p>Les priorités, les options et le devis sont présentés avant de commencer.</p></div></li>
        </ol>
        <Link to="/apropos" className="text-link">Découvrir la clinique <span aria-hidden="true">→</span></Link>
      </div>
      <figure className="clinic-intro__media">
        <img src={treatmentRoom} alt="Salle de soins de la Clinique DABIA à Dakar" width="1080" height="720" loading="lazy" decoding="async" />
        <figcaption>Une salle de soins de la clinique, à Sicap Foire.</figcaption>
      </figure>
    </div>
  </section>
);

export default ClinicIntro;
