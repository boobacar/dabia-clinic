import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Existe-t-il un dentiste à Sacré-Cœur ou à proximité ?", a: "La Clinique Dentaire DABIA (Sicap Foire, Liberté 6) est à quelques minutes de Sacré-Cœur via la VDN. Consultations, urgences, implants et soins esthétiques avec devis clair et RDV rapide." },
];

export default function LocaliteSacreCoeur() {
  return <LocalitePage quartier="Sacré-Cœur" quartierPreposition="du" slug="cabinet-dentaire-sacre-coeur" areaServed={["VDN", "Mermoz", "Liberté 6"]} intro="Située à Sicap Foire (Liberté 6), la Clinique Dentaire DABIA accueille les résidents de Sacré-Cœur et des quartiers VDN. Accès facile, stationnement disponible. Notre équipe propose une dentisterie complète : urgence, implants, orthodontie, facettes et blanchiment, avec un suivi personnalisé." faq={faq} />;
}
