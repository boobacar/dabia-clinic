import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Où trouver un dentiste à Scat Urbam ?", a: "La Clinique Dentaire DABIA est à quelques minutes de Scat Urbam, à Sicap Foire (Liberté 6). Urgences, consultations, implants et soins esthétiques avec devis transparent." },
];

export default function LocaliteScatUrbam() {
  return <LocalitePage quartier="Scat Urbam" quartierPreposition="de" slug="cabinet-dentaire-scat-urbam" areaServed={["Liberté 6", "VDN", "Grand Yoff"]} intro="La Clinique Dentaire DABIA reçoit les habitants de Scat Urbam, Grand Yoff et des quartiers voisins à Sicap Foire (Liberté 6). Notre équipe propose une dentisterie complète : consultation, détartrage, traitement des caries, urgences, implants, orthodontie et esthétique du sourire, avec un suivi personnalisé." faq={faq} />;
}
