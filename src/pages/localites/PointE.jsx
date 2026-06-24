import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Y a-t-il un dentiste à Point E ou à proximité ?", a: "Oui, la Clinique Dentaire DABIA (Sicap Foire, Liberté 6) est à moins de 10 minutes de Point E. L'équipe propose urgences, soins conservateurs, implants, orthodontie et esthétique avec devis transparent." },
];

export default function LocalitePointE() {
  return <LocalitePage quartier="Point E" quartierPreposition="du" slug="cabinet-dentaire-point-e" areaServed={["Mermoz", "Fann", "Plateau"]} intro="La Clinique Dentaire DABIA reçoit les patients de Point E, Fann et du Plateau dans un cadre moderne à Sicap Foire (Liberté 6). Notre équipe assure les soins dentaires complets : consultation, détartrage, traitement des caries, implants, orthodontie, facettes et blanchiment. Devis clair, RDV en ligne disponible." faq={faq} />;
}
