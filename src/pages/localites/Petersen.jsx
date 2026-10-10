import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Y a-t-il un cabinet dentaire proche de Petersen à Dakar ?",
    a:
      "La Clinique Dentaire DABIA, située à Sicap Foire (Liberté 6), est accessible depuis Petersen, Fann et Point E par la Corniche puis la VDN.",
  },
  {
    q: "Recevez-vous les urgences dentaires le jour même ?",
    a:
      "Les urgences (douleur, abcès, dent cassée, gonflement) sont reçues en priorité. Appelez avant de vous déplacer pour obtenir un créneau rapide.",
  },
  {
    q: "Proposez-vous l'orthodontie et les aligneurs ?",
    a:
      "Oui : bilans orthodontiques, appareils à bagues et aligneurs transparents, suivi du traitement et contention après traitement.",
  },
];

export default function LocalitePetersen() {
  return (
    <LocalitePage
      quartier="Petersen"
      quartierPreposition="de"
      slug="cabinet-dentaire-petersen"
      areaServed={"Fann", "Point E", "Amitié", "Corniche", "Liberté 6"}
      intro="Depuis Petersen, Fann et Point E, la Clinique Dentaire DABIA est rapidement accessible par la Corniche puis la VDN ou les voies de Liberté 6. L'équipe assure les consultations, le détartrage, les soins de caries, les urgences dentaires, les couronnes, les implants, l'orthodontie et les soins esthétiques du sourire."
      faq={faq}
      seoTitle="Dentiste près de Petersen, Dakar : RDV et urgences | DABIA"
      seoDescription="Dentiste proche de Petersen (Dakar) : consultation, détartrage, urgences, implants, orthodontie et esthétique du sourire à la Clinique DABIA, Liberté 6. RDV rapide."
    />
  );
}
