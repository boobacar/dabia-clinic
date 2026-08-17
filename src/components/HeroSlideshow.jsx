import { Link } from "react-router-dom";
import heroImages from "../assets/heroImages";

const HeroSlideshow = () => {
  const hero = heroImages[0];
  if (!hero) return null;

  return (
    <>
      <section className="editorial-hero" aria-labelledby="home-title">
        <div className="editorial-hero__copy">
          <p className="editorial-hero__eyebrow">Clinique dentaire · Sicap Foire, Liberté 6</p>
          <h1 id="home-title">Comprendre vos soins.<br /><em>Décider sereinement.</em></h1>
          <p className="editorial-hero__lead">
            À Dakar, l’équipe DABIA vous reçoit pour les soins du quotidien,
            les urgences et les traitements qui demandent un vrai temps d’explication.
          </p>
          <div className="editorial-hero__actions">
            <Link to="/rendez-vous" className="btn-cta">Prendre rendez-vous</Link>
            <Link to="/urgence-dentaire-dakar" className="btn-secondary">J’ai une urgence</Link>
          </div>
          <div className="editorial-hero__proof" aria-label="Horaires d’ouverture">
            <span><strong>Lun–Jeu</strong> 9h–16h30</span>
            <span><strong>Vendredi</strong> 9h–13h · 15h–16h30</span>
            <span><strong>Samedi</strong> 9h–14h</span>
          </div>
        </div>
        <figure className="editorial-hero__media">
          <picture>
            {hero.mobileAvif && hero.desktopAvif && <source type="image/avif" srcSet={`${hero.mobileAvif} 640w, ${hero.desktopAvif} 1600w`} sizes="(min-width: 900px) 46vw, 100vw" />}
            <img src={hero.desktop} srcSet={`${hero.mobile} 640w, ${hero.desktop} 1600w`} sizes="(min-width: 900px) 46vw, 100vw" alt="Accueil de la Clinique Dentaire DABIA à Dakar" width="1600" height="900" decoding="sync" fetchPriority="high" loading="eager" />
          </picture>
          <figcaption>Un lieu de soin pensé pour accueillir, écouter et expliquer.</figcaption>
        </figure>
      </section>
    </>
  );
};

export default HeroSlideshow;
