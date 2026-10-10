import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Quel dentiste est le plus proche de Dieuppeul ?",
    a:
      "La Clinique Dentaire DABIA se trouve à Sicap Foire (Liberté 6), immédiatement adjacente à Dieuppeul, Derklé et Castors.",
  },
  {
    q: "Reçoit-on les enfants ?",
    a:
      "Oui : la clinique reçoit les enfants pour les consultations de contrôle, la prévention, le scellement des sillons, les soins de caries et les urgences.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a:
      "En ligne depuis le site, par téléphone ou par WhatsApp. Pour une urgence, appelez : un créneau prioritaire peut être proposé le jour même.",
  },
];

export default function LocaliteDieuppeul() {
  return (
    <LocalitePage
      quartier="Dieuppeul"
      quartierPreposition="de"
      slug="cabinet-dentaire-dieuppeul"
      areaServed={"Dieuppeul", "Derklé", "Castors", "Liberté 6", "Grand Médine"}
      intro="Dieuppeul, Derklé et Castors sont limitrophes du secteur de Liberté 6 : la Clinique Dentaire DABIA est donc tout proche. L'équipe y réalise consultations et bilans, détartrage, soins des caries, extractions, couronnes et prothèses, implants, orthodontie et esthétique du sourire, avec un devis remis avant chaque traitement."
      faq={faq}
      seoTitle="Dentiste près de Dieuppeul, Dakar : soins et RDV | DABIA"
      seoDescription="Dentiste proche de Dieuppeul, Derklé et Castors à Dakar : consultations, urgences, détartrage, implants et orthodontie à la Clinique DABIA, Liberté 6."
    />
  );
}
