import { Link } from "react-router-dom";
import sao from "../assets/sao.webp";
import SectionTitle from "./SectionTitle";

const StaffPreview = () => (
  <section className="staff-story section-pad">
    <div className="studio-container staff-story__grid">
      <figure className="staff-story__portrait">
        <img src={sao} alt="Dr Fatoumata SAO, chirurgien-dentiste à Dakar" width="900" height="1100" loading="lazy" decoding="async" />
      </figure>
      <div className="staff-story__copy">
        <SectionTitle title="Le soin commence par une conversation." subtitle="L’équipe DABIA" center={false} />
        <blockquote>
          « Expliquer ce que l’on voit et pourquoi l’on propose un soin aide chacun à avancer avec confiance. »
        </blockquote>
        <p>
          Dr Fatoumata SAO, fondatrice et chirurgien-dentiste, travaille avec l’équipe de la clinique autour d’un même principe : écouter avant de traiter et garder le patient informé à chaque étape.
        </p>
        <Link to="/personnel" className="btn-secondary">Rencontrer l’équipe</Link>
      </div>
    </div>
  </section>
);

export default StaffPreview;
