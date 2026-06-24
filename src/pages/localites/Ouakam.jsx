import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Où trouver un dentiste à Ouakam ?", a: "La Clinique Dentaire DABIA, à Sicap Foire (Liberté 6), est à quelques minutes d'Ouakam. Nous prenons en charge les consultations, urgences, implants, orthodontie et soins esthétiques avec un équipement de pointe." },
];

export default function LocaliteOuakam() {
  return <LocalitePage quartier="Ouakam" slug="cabinet-dentaire-ouakam" areaServed={["Almadies", "Ngor", "Yoff"]} intro="Vous habitez Ouakam et cherchez un dentiste moderne à proximité ? La Clinique Dentaire DABIA vous reçoit à Sicap Foire (Liberté 6), à quelques minutes en voiture. Consultation, urgence, détartrage, implants, orthodontie et esthétique : toute la dentisterie générale et spécialisée dans un cadre équipé des dernières technologies." faq={faq} />;
}
