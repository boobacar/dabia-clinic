import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Où consulter un dentiste quand on habite Keur Massar ?",
    a:
      "La Clinique Dentaire DABIA, à Sicap Foire (Liberté 6, Dakar), reçoit les patients de Keur Massar et des communes voisines : accès par la route nationale 1 puis Liberté 6.",
  },
  {
    q: "Est-ce utile de venir de Keur Massar pour un simple détartrage ?",
    a:
      "La clinique regroupe sur un même lieu le bilan, le détartrage, les soins et l'imagerie : le déplacement permet souvent de traiter plusieurs besoins en une seule visite.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a:
      "Espèces, carte bancaire et prise en charge par certaines mutuelles (IPM). Le devis détaillé est remis et expliqué avant le début des soins.",
  },
];

export default function LocaliteKeurMassar() {
  return (
    <LocalitePage
      quartier="Keur Massar"
      quartierPreposition="de"
      slug="cabinet-dentaire-keur-massar"
      areaServed={"Keur Massar", "Yeumbeul", "Malika", "Mbao", "Pikine"}
      intro="Les patients de Keur Massar, Yeumbeul et Malika rejoignent la Clinique Dentaire DABIA par la route nationale 1 en direction de Dakar, puis le secteur de Liberté 6. La clinique dispose d'un plateau technique complet (imagerie, stérilisation) et traite les soins courants comme les cas plus lourds : prothèses, implants, orthodontie, chirurgie simple."
      faq={faq}
      seoTitle="Dentiste pour Keur Massar, Yeumbeul et Malika (Dakar) | DABIA"
      seoDescription="Vous cherchez un dentiste pour Keur Massar, Yeumbeul ou Malika ? La Clinique Dentaire DABIA (Liberté 6, Dakar) reçoit consultations, urgences, prothèses et implants."
    />
  );
}
