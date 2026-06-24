import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Y a-t-il un cabinet dentaire proche de HLM Grand Yoff ?", a: "Oui, la Clinique Dentaire DABIA est à quelques minutes de HLM Grand Yoff, à Sicap Foire (Liberté 6). Urgences, consultations, implants et soins esthétiques avec RDV en ligne." },
];

export default function LocaliteHlmGrandYoff() {
  return <LocalitePage quartier="HLM Grand Yoff" quartierPreposition="de" slug="cabinet-dentaire-hlm-grand-yoff" areaServed={["Grand Yoff", "Scat Urbam", "Parcelles Assainies"]} intro="La Clinique Dentaire DABIA accueille les patients de HLM Grand Yoff, Grand Yoff et des Parcelles Assainies dans un cabinet moderne à Sicap Foire (Liberté 6). Soins complets : consultation, urgence, détartrage, implants, orthodontie, facettes et blanchiment. Devis clair, créneaux adaptés." faq={faq} />;
}
