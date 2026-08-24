import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import HeroSlideshow from "../components/HeroSlideshow";
import Seo from "../components/Seo";
import ClinicIntro from "../components/ClinicIntro";

// Sections sous la ligne de flottaison chargées en LAZY : elles ne doivent pas
// gonfler le bundle critique (index-*.js) qui bloque l'hydratation du hero (LCP).
// Retirer ~90Ko du shell → hydratation + LCP plus rapides sur toutes les pages.
const KeyMetrics = React.lazy(() => import("../components/KeyMetrics"));
const CompetencesGrid = React.lazy(() => import("../components/CompetencesGrid"));
const StaffPreview = React.lazy(() => import("../components/StaffPreview"));
const BeforeAfterGallery = React.lazy(() => import("../components/BeforeAfterGallery"));
const AssuranceMarquee = React.lazy(() => import("../components/AssuranceMarquee"));
const LatestBlogCards = React.lazy(() => import("../components/LatestBlogCards"));
const FAQ = React.lazy(() => import("../components/FAQ"));
const TestimonialsCarousel = React.lazy(() => import("../components/TestimonialsCarousel"));
const GoogleMapSection = React.lazy(() => import("../components/GoogleMapSection"));

import logoSunu from "../assets/assurances/sunu.webp";
import logoAxa from "../assets/assurances/axa.webp";
import logoSonam from "../assets/assurances/sonam.webp";
import logoPrevoyance from "../assets/assurances/prevoyance.webp";
import logoMsh from "../assets/assurances/msh.webp";
import logoOlea from "../assets/assurances/olea.webp";
import logoAscoma from "../assets/assurances/ascoma.webp";
import logoWafa from "../assets/assurances/wafa.webp";
import logoAmsa from "../assets/assurances/amsa.webp";
import logoSanlam from "../assets/assurances/sanlam.webp";

const assuranceLogos = [logoAxa, logoSonam, logoSunu, logoPrevoyance, logoWafa, logoSanlam, logoOlea, logoMsh, logoAscoma, logoAmsa];
const faqItems = [
  { q: "Où se situe la clinique ?", a: "À Sicap Foire, 150m des deux voies de Liberté 6, proche VDN/Corniche. Parking devant l’entrée." },
  { q: "Proposez-vous des urgences dentaires à Dakar ?", a: "Oui, nous ouvrons des créneaux sous 24h. Appelez avant de venir pour organiser la prise en charge." },
  { q: "Quels soins sont proposés ?", a: "Implants, facettes, orthodontie (aligneurs/bagues), parodontologie, soins enfants, détartrage et esthétique." },
  { q: "Proposez-vous des devis détaillés ?", a: "Oui, après l’examen, un plan de traitement et un devis clairs sont expliqués avec des étapes et options." },
  { q: "Quels sont vos horaires ?", a: "Lundi à jeudi 9h–16h30, vendredi 9h–13h et 15h–16h30, samedi 9h–14h. Pour une urgence, appelez avant de vous déplacer." },
  { q: "Acceptez-vous les IPM et assurances ?", a: "Nous aidons à la préparation des dossiers. Un devis détaillé est fourni pour vos demandes de prise en charge." },
];

export default function Home() {
  return <main className="home-page">
    <Seo title="Dentiste à Dakar – RDV rapide, urgence et devis | Clinique DABIA" description="Dentiste à Dakar, Liberté 6 : consultation, urgence, détartrage, implant, orthodontie et esthétique. Appelez ou prenez rendez-vous en ligne rapidement." canonical="https://www.cliniquedentairedabia.com/" url="https://www.cliniquedentairedabia.com/" jsonLd={[{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }]} />
    <HeroSlideshow />
    <ClinicIntro />
    <Suspense fallback={null}><KeyMetrics /></Suspense>

    <section className="decision-path section-pad">
      <div className="studio-container">
        <p className="section-kicker">Votre besoin, aujourd’hui</p>
        <div className="decision-path__grid">
          <div><h2>Je veux soulager.</h2><p>Douleur, abcès, dent cassée ou gonflement : commencez par les gestes utiles et contactez la clinique.</p><Link to="/urgence-dentaire-dakar" className="text-link">Consulter la page urgence →</Link></div>
          <div><h2>Je veux comprendre.</h2><p>Un soin, son déroulement, ses alternatives ou son coût : nos guides vous donnent des repères avant la consultation.</p><Link to="/blog" className="text-link">Lire les conseils →</Link></div>
          <div><h2>Je veux avancer.</h2><p>Consultation, implant, orthodontie ou esthétique : décrivez votre besoin et choisissez une date.</p><Link to="/rendez-vous" className="text-link">Demander un rendez-vous →</Link></div>
        </div>
      </div>
    </section>

    <Suspense fallback={null}><CompetencesGrid /></Suspense>
    <Suspense fallback={null}><StaffPreview /></Suspense>
    <Suspense fallback={null}><BeforeAfterGallery /></Suspense>

    <section className="insurance-section">
      <div className="studio-container insurance-section__head"><div><p className="section-kicker">Prise en charge</p><h2>Assurances & IPM</h2></div><p>Nous vous aidons à préparer votre dossier à partir d’un devis détaillé.</p><Link to="/infos/assurances" className="text-link">Voir les informations →</Link></div>
      <Suspense fallback={null}><AssuranceMarquee className="py-6" speed={45} logos={assuranceLogos} /></Suspense>
    </section>

    <Suspense fallback={null}><LatestBlogCards /></Suspense>
    <section className="home-faq section-pad"><div className="studio-container home-faq__grid"><div><p className="section-kicker">Avant votre visite</p><h2>Les réponses utiles, sans détour.</h2><p>Pour toute situation urgente ou spécifique, appelez directement l’équipe.</p><a href="tel:+221****9393" className="btn-secondary">Appeler la clinique</a></div><Suspense fallback={null}><FAQ asJsonLd={false} title="Questions fréquentes" items={faqItems} /></Suspense></div></section>
    <Suspense fallback={<div className="py-12" aria-hidden="true" />}><TestimonialsCarousel /><GoogleMapSection /></Suspense>

    <nav className="seo-pathways" aria-label="Accès directs"><div className="studio-container"><Link to="/dentiste-dakar">Dentiste Dakar</Link><Link to="/cabinet-dentaire-dakar">Cabinet dentaire Dakar</Link><Link to="/clinique-dentaire-dakar">Clinique dentaire Dakar</Link><Link to="/en/dental-clinic-dakar">Dental clinic Dakar (EN)</Link><Link to="/cabinet-dentaire-liberte-6">Liberté 6</Link><Link to="/cabinet-dentaire-vdn">VDN</Link><Link to="/urgence-dentaire-dakar">Urgence dentaire</Link><Link to="/all-competences">Nos compétences</Link><Link to="/infos/assurances">Assurances</Link><Link to="/infos/technologie">Technologie</Link></div></nav>
  </main>;
}
