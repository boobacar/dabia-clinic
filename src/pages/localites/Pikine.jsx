import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Quel dentiste consulter quand on habite Pikine ?",
    a:
      "La Clinique Dentaire DABIA, située à Sicap Foire (Liberté 6, Dakar), est accessible depuis Pikine par la route nationale 1 puis les voies de Liberté 6.",
  },
  {
    q: "Prenez-vous les urgences dentaires venant de Pikine ?",
    a:
      "Oui. Douleur intense, abcès, gonflement ou dent cassée : appelez la clinique avant de vous déplacer afin d'obtenir un créneau prioritaire.",
  },
  {
    q: "Faut-il une ordonnance pour consulter ?",
    a:
      "Non, une consultation peut se faire sans ordonnance. En revanche, si vous avez déjà des radios, ordonnances ou un devis antérieur, apportez-les.",
  },
];

export default function LocalitePikine() {
  return (
    <LocalitePage
      quartier="Pikine"
      quartierPreposition="de"
      slug="cabinet-dentaire-pikine"
      areaServed={"Pikine", "Guédiawaye", "Thiaroye", "Keur Massar", "Dakar"}
      intro="Depuis Pikine, Guédiawaye et Thiaroye, la Clinique Dentaire DABIA se rejoint par la route nationale 1 puis le secteur de Liberté 6. La clinique traite l'ensemble des soins dentaires : prévention, caries, gencives, extractions, prothèses, implants, orthodontie et esthétique, avec un devis écrit et expliqué avant chaque intervention."
      faq={faq}
      seoTitle="Dentiste pour Pikine et Thiaroye (Dakar) : RDV rapide | DABIA"
      seoDescription="Dentiste pour les patients de Pikine, Thiaroye et Guédiawaye : consultation, détartrage, urgences, prothèses et implants à la Clinique DABIA (Liberté 6, Dakar)."
    />
  );
}
