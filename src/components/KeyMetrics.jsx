import { Link } from "react-router-dom";

export default function KeyMetrics({ className = "" }) {
  return (
    <section className={`practice-proof ${className}`} aria-label="Informations pratiques">
      <div className="studio-container practice-proof__grid">
        <div className="practice-proof__location">
          <p className="section-kicker">Ici, à Dakar</p>
          <h2>Un cabinet de proximité,<br />un parcours lisible.</h2>
          <p>Sicap Foire, 2 voies Liberté 6, à 150 m du Uno. Parking devant la clinique.</p>
          <Link to="/rendez-vous" className="btn-light">Organiser ma visite</Link>
        </div>
        <div className="practice-proof__hours">
          <p className="practice-proof__label">Horaires d’accueil</p>
          <dl>
            <div><dt>Lundi — Jeudi</dt><dd>09:00 — 16:30</dd></div>
            <div><dt>Vendredi</dt><dd>09:00 — 13:00<br />15:00 — 16:30</dd></div>
            <div><dt>Samedi</dt><dd>09:00 — 14:00</dd></div>
          </dl>
          <p className="practice-proof__note">Urgence ? Appelez avant de vous déplacer.</p>
          <a href="tel:+221****9393" className="text-link text-link--light">+221 77 703 93 93</a>
        </div>
      </div>
    </section>
  );
}
