import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  { q: "Où trouver un dentiste à la Patte d'Oie ?", a: "La Clinique Dentaire DABIA (Sicap Foire, Liberté 6) est facilement accessible depuis la Patte d'Oie. Urgences, consultations, implants et soins esthétiques avec devis transparent et RDV rapide." },
];

export default function LocalitePatteDOie() {
  return <LocalitePage quartier="Patte d'Oie" quartierPreposition="de la" slug="cabinet-dentaire-patte-d-oie"
      seoTitle="Dentiste à la Patte d'Oie, Dakar : RDV et urgences | DABIA"
      seoDescription="Cabinet dentaire proche de la Patte d'Oie et de Grand Yoff : consultation, urgences, détartrage, implants, orthodontie. Devis clair, rendez-vous rapide." areaServed={["Grand Yoff", "VDN", "Parcelles Assainies"]} intro="Vous cherchez un dentiste moderne près de la Patte d'Oie ? La Clinique Dentaire DABIA vous reçoit à Sicap Foire (Liberté 6), à quelques minutes en voiture. Notre équipe assure les soins dentaires pour toute la famille : consultation, urgence, détartrage, implants, orthodontie, facettes et blanchiment, avec un accompagnement personnalisé." faq={faq} />;
}
