import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Quel dentiste consulter quand on habite Yeumbeul ?",
    a:
      "La Clinique Dentaire DABIA, à Sicap Foire (Liberté 6, Dakar), reçoit les patients de Yeumbeul et de Malika. L'accès se fait par la route nationale 1.",
  },
  {
    q: "Peut-on faire tous les soins en une seule journée ?",
    a:
      "Pour beaucoup de situations, le bilan, le détartrage et les premiers soins peuvent être organisés le même jour. Le plan de traitement complet est expliqué après examen.",
  },
  {
    q: "Traitez-vous les enfants et les adolescents ?",
    a:
      "Oui : contrôles, prévention, soins de caries, extractions de dents de lait et orthodontie pour les enfants et adolescents.",
  },
];

export default function LocaliteYeumbeul() {
  return (
    <LocalitePage
      quartier="Yeumbeul"
      quartierPreposition="de"
      slug="cabinet-dentaire-yeumbeul"
      areaServed={"Yeumbeul", "Keur Massar", "Malika", "Mbao", "Pikine"}
      intro="Les patients de Yeumbeul et de Malika rejoignent la Clinique Dentaire DABIA par la route nationale 1 puis le secteur de Liberté 6, à Dakar. La clinique regroupe sur un même lieu le diagnostic, l'imagerie, les soins courants, les prothèses, les implants et l'orthodontie, ce qui évite de multiplier les déplacements et les interlocuteurs."
      faq={faq}
      seoTitle="Dentiste pour Yeumbeul et Malika (Dakar) : soins, prix | DABIA"
      seoDescription="Dentiste pour Yeumbeul et Malika : consultations, détartrage, urgences, prothèses, implants et orthodontie à la Clinique Dentaire DABIA, Sicap Foire, Dakar."
    />
  );
}
