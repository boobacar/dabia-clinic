import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Y a-t-il un bon dentiste à Yoff ?", a: "La Clinique Dentaire DABIA est à quelques minutes de Yoff, à Sicap Foire (Liberté 6). Équipe qualifiée, technologies modernes (CBCT 3D, scanner intra-oral) et prise en charge complète : urgences, implants, orthodontie et esthétique." },
  { q: "Quels sont les horaires pour un rendez-vous depuis Yoff ?", a: "Lundi à jeudi 9h–16h30, vendredi 9h–13h et 15h–16h30, samedi 9h–14h. Les urgences sont prises en charge avec des créneaux dédiés." },
];

export default function LocaliteYoff() {
  return <LocalitePage quartier="Yoff" slug="cabinet-dentaire-yoff" areaServed={["Almadies", "Ngor", "Ouakam"]} intro="La Clinique Dentaire DABIA accueille les habitants de Yoff et des quartiers environnants à Sicap Foire (Liberté 6), facilement accessible via la VDN. Notre équipe propose des soins dentaires complets : consultation, urgence, détartrage, implants, orthodontie, facettes et blanchiment, avec un devis clair et un suivi personnalisé." faq={faq} />;
}
