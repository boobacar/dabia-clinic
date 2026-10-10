import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Y a-t-il un dentiste accessible depuis la Médina à Dakar ?",
    a:
      "Oui : la Clinique Dentaire DABIA, à Sicap Foire (Liberté 6), est desservie depuis la Médina par l'avenue Cheikh Anta Diop puis les voies de Liberté 6.",
  },
  {
    q: "Comment venir de la Médina à la clinique ?",
    a:
      "En voiture ou en taxi par l'avenue Cheikh Anta Diop en direction du Plateau/Liberté 6, ou par les axes qui rejoignent la VDN. Un parking est disponible devant la clinique.",
  },
  {
    q: "Que faut-il apporter au premier rendez-vous ?",
    a:
      "Vos anciennes radios, ordonnances, devis ou ordonnances de mutuelle (IPM) si vous en avez : ils évitent de refaire des examens déjà réalisés.",
  },
];

export default function LocaliteMedina() {
  return (
    <LocalitePage
      quartier="Médina"
      quartierPreposition="de la"
      slug="cabinet-dentaire-medina"
      areaServed={"Plateau", "Colobane", "Gueule Tapée", "Fann Hock", "Médina"}
      intro="Les patients de la Médina rejoignent la Clinique Dentaire DABIA par l'avenue Cheikh Anta Diop puis le secteur de Liberté 6. La clinique prend en charge les soins courants (consultation, détartrage, caries), les urgences dentaires, les prothèses, les implants, l'orthodontie et l'esthétique du sourire, avec un devis écrit avant tout traitement."
      faq={faq}
      seoTitle="Dentiste près de la Médina, Dakar : soins et urgences | DABIA"
      seoDescription="Dentiste proche de la Médina à Dakar (Sicap Foire, Liberté 6) : consultation, détartrage, urgences, prothèses, implants et orthodontie. Devis clair avant soin."
    />
  );
}
