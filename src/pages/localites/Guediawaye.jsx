import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Y a-t-il un dentiste qui reçoit les patients de Guédiawaye à Dakar ?",
    a:
      "Oui : la Clinique Dentaire DABIA, à Sicap Foire (Liberté 6), reçoit les patients de Guédiawaye. L'accès se fait par la route nationale 1 puis Liberté 6.",
  },
  {
    q: "Proposez-vous les prothèses et les implants ?",
    a:
      "Oui, la clinique réalise prothèses fixes et amovibles, couronnes, bridges et implants dentaires, avec un plan de traitement chiffré et expliqué.",
  },
  {
    q: "Quels documents apporter ?",
    a:
      "Une pièce d'identité si vous utilisez une prise en charge (IPM, mutuelle), vos anciennes radiographies et tout devis ou ordonnance déjà établis.",
  },
];

export default function LocaliteGuediawaye() {
  return (
    <LocalitePage
      quartier="Guédiawaye"
      quartierPreposition="de"
      slug="cabinet-dentaire-guediawaye"
      areaServed={"Guédiawaye", "Pikine", "Thiaroye", "Keur Massar", "Dakar"}
      intro="Les patients de Guédiawaye accèdent à la Clinique Dentaire DABIA par la route nationale 1 puis le secteur de Liberté 6, à Dakar. La clinique assure le diagnostic, les soins courants (détartrage, caries, gencives), les extractions, les prothèses, les implants et l'orthodontie, avec un plateau technique moderne et un devis remis avant traitement."
      faq={faq}
      seoTitle="Dentiste pour Guédiawaye (Dakar) : soins et urgences | DABIA"
      seoDescription="Patients de Guédiawaye : consultations, détartrage, urgences, prothèses, implants et orthodontie à la Clinique Dentaire DABIA, Sicap Foire (Liberté 6), Dakar."
    />
  );
}
