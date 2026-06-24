import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Y a-t-il un cabinet dentaire à Ngor ?", a: "La Clinique Dentaire DABIA est située à Sicap Foire (Liberté 6), à quelques minutes de Ngor. Équipe qualifiée, technologies modernes et prise en charge complète : urgences, implants, orthodontie, esthétique." },
];

export default function LocaliteNgor() {
  return <LocalitePage quartier="Ngor" slug="cabinet-dentaire-ngor" areaServed={["Almadies", "Ouakam", "Yoff"]} intro="La Clinique Dentaire DABIA reçoit les habitants de Ngor, des Almadies et d'Ouakam dans un cabinet moderne à Sicap Foire (Liberté 6). Consultation, détartrage, soins conservateurs, implants, prothèses, orthodontie et esthétique : toute la dentisterie sous un même toit, avec devis transparent et suivi personnalisé." faq={faq} />;
}
