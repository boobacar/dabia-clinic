import { Link } from "react-router-dom";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import SectionTitle from "./SectionTitle";
import avantApresImages from "../assets/avantApresImages";

export default function BeforeAfterGallery() {
  return (
    <section className="results-story section-pad">
      <div className="studio-container">
        <div className="results-story__head">
          <SectionTitle title="Des résultats à regarder de près." subtitle="Avant / après" center={false} />
          <p>Faites glisser le curseur pour comparer. Chaque situation clinique est différente et commence par un bilan personnalisé.</p>
        </div>
        <div className="results-story__grid">
          {avantApresImages.map((pair, idx) => (
            <figure key={`${pair.before}-${idx}`} className={idx === 0 ? "results-story__case results-story__case--lead" : "results-story__case"}>
              <ReactCompareSlider
                className="before-after-wrapper"
                itemOne={<div className="result-image"><ReactCompareSliderImage src={pair.before} alt={`Avant soin dentaire ${idx + 1}`} loading="lazy" decoding="async" /><span>Avant</span></div>}
                itemTwo={<div className="result-image"><ReactCompareSliderImage src={pair.after} alt={`Après soin dentaire ${idx + 1}`} loading="lazy" decoding="async" /><span>Après</span></div>}
              />
              <figcaption>Cas {String(idx + 1).padStart(2, "0")}</figcaption>
            </figure>
          ))}
        </div>
        <Link to="/galerie" className="btn-secondary">Explorer toute la galerie</Link>
      </div>
    </section>
  );
}
