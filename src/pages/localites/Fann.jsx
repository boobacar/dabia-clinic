import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Où trouver un dentiste à Fann ?", a: "La Clinique Dentaire DABIA est à quelques minutes de Fann, à Sicap Foire (Liberté 6). Consultations, urgences dentaires, implants, orthodontie et soins esthétiques avec devis transparent." },
];

export default function LocaliteFann() {
  return <LocalitePage quartier="Fann" slug="cabinet-dentaire-fann" areaServed={["Point E", "Plateau", "Médina"]} intro="La Clinique Dentaire DABIA accueille les patients de Fann, Point E et du Plateau à Sicap Foire (Liberté 6). Notre équipe propose des soins dentaires complets : de la consultation de routine aux traitements avancés (implants, orthodontie, facettes), avec un accompagnement personnalisé et un devis clair." faq={faq} />;
}
