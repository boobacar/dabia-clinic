import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Existe-t-il un dentiste au Plateau de Dakar ?",
    a: "La Clinique Dentaire DABIA est idéalement située à Sicap Foire (Liberté 6), à moins de 15 minutes du Plateau. Nous accueillons les professionnels travaillant au Plateau pour des consultations sur rendez-vous, avec des créneaux adaptés aux emplois du temps chargés.",
  },
  {
    q: "Puis-je venir pendant ma pause déjeuner ?",
    a: "Oui, nous proposons des créneaux entre 9h et 16h30. Pour une consultation rapide (bilan, détartrage, urgence), prévoyez environ 45 minutes. Appelez pour réserver le créneau qui vous convient.",
  },
  {
    q: "Quels soins proposez-vous aux travailleurs du Plateau ?",
    a: "Consultation et bilan complet, détartrage, traitement des caries, urgences, implants, couronnes, facettes et blanchiment. Devis clair et transparent remis après examen. Nous accompagnons aussi les dossiers de mutuelle.",
  },
];

export default function LocalitePlateau() {
  return (
    <LocalitePage
      quartier="Plateau"
      quartierPreposition="du"
      slug="cabinet-dentaire-plateau"
      areaServed={["Dakar Plateau", "Fann", "Point E", "Médina"]}
      intro="Vous travaillez au Plateau de Dakar et cherchez un dentiste à proximité ? La Clinique Dentaire DABIA, située à Sicap Foire (Liberté 6), est accessible en quelques minutes depuis le Plateau. Notre équipe prend en charge les consultations de routine, les urgences dentaires, l'implantologie, l'orthodontie, les facettes et le blanchiment. Nous comprenons les contraintes des professionnels et proposons des créneaux adaptés, avec un devis transparent remis après examen."
      faq={faq}
      seoTitle="Dentiste Plateau Dakar – Consultation, Urgences & Implants | DABIA"
      seoDescription="Dentiste proche du Plateau de Dakar (Liberté 6, Sicap Foire) : consultation, urgence, implants, orthodontie, esthétique. Créneaux adaptés aux professionnels. RDV en ligne."
    />
  );
}
