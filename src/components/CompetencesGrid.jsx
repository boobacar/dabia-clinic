import { Link } from "react-router-dom";
import {
  AestheticToothIcon,
  BoneGraftToothIcon,
  GumToothIcon,
  ImplantToothIcon,
  OrthodonticToothIcon,
  PediatricToothIcon,
  RootCanalToothIcon,
  VeneerToothIcon,
  WhiteningToothIcon,
} from "./DentalCareIcons";
import competences from "../data/competences";
import SectionTitle from "./SectionTitle";

const competenceIcons = {
  "esthétique-dentaire": AestheticToothIcon,
  parodontologie: GumToothIcon,
  implantologie: ImplantToothIcon,
  endodontie: RootCanalToothIcon,
  "facettes-dentaires": VeneerToothIcon,
  orthodontie: OrthodonticToothIcon,
  "greffe-osseuse": BoneGraftToothIcon,
  "blanchiment-dentaire": WhiteningToothIcon,
  pedodontie: PediatricToothIcon,
};

export default function CompetencesGrid() {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.cliniquedentairedabia.com";
  const itemList = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: competences.map((item, i) => ({ "@type": "ListItem", position: i + 1, url: `${origin}/competences/${item.slug}`, name: item.titre })) };

  return (
    <section id="competences" className="care-index section-pad scroll-mt-24">
      <div className="studio-container">
        <div className="care-index__head">
          <SectionTitle title="Trouver le bon point de départ." subtitle="Soins & compétences" center={false} />
          <p>Prévenir, soulager, restaurer ou transformer : chaque parcours commence par un bilan adapté à votre situation.</p>
        </div>
        <div className="care-index__list">
          {competences.map((item, index) => {
            const Icon = competenceIcons[item.slug] || AestheticToothIcon;

            return (
              <Link key={item.slug} to={`/competences/${item.slug}`} className={`care-row ${index === 0 ? "care-row--featured" : ""}`} title={`${item.titre} à Dakar – en savoir plus`}>
                <span className="care-row__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="care-row__icon" aria-hidden="true"><Icon /></span>
                <div className="care-row__body"><h3>{item.titre}</h3><p>{(item.description || "").slice(0, 125)}{item.description?.length > 125 ? "…" : ""}</p></div>
                <span className="care-row__arrow" aria-hidden="true">↗</span>
              </Link>
            );
          })}
        </div>
        <div className="care-index__cta"><Link to="/all-competences" className="btn-secondary">Voir tous les soins</Link><Link to="/rendez-vous" className="btn-cta">Demander un rendez-vous</Link></div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </section>
  );
}
