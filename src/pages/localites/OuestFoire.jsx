import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Quel dentiste consulter près d'Ouest-Foire à Dakar ?",
    a:
      "La Clinique Dentaire DABIA, à Sicap Foire (Liberté 6), est accessible depuis Ouest-Foire et la Foire par la VDN puis les voies de Liberté 6.",
  },
  {
    q: "Combien de temps dure un premier rendez-vous ?",
    a:
      "Comptez un créneau de consultation pour l'examen, le diagnostic et la remise d'un plan de traitement chiffré. La durée des soins dépend ensuite des actes à réaliser.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a:
      "Pour certains plans de traitement, un échelonnement peut être discuté avec la clinique. Le devis détaillé est remis avant de commencer.",
  },
];

export default function LocaliteOuestFoire() {
  return (
    <LocalitePage
      quartier="Ouest-Foire"
      quartierPreposition="d'"
      slug="cabinet-dentaire-ouest-foire"
      areaServed={"Cité Keur Gorgui", "Foire", "Almadies", "Ngor", "VDN"}
      intro="Les habitants d'Ouest-Foire, de la Foire et de la Cité Keur Gorgui rejoignent la Clinique Dentaire DABIA par la VDN puis les voies de Liberté 6. La clinique propose l'ensemble des soins dentaires : prévention, détartrage, traitement des caries, prothèses, implants, orthodontie, chirurgie buccale simple et esthétique du sourire."
      faq={faq}
      seoTitle="Dentiste à Ouest-Foire (Dakar) : cabinet dentaire et RDV | DABIA"
      seoDescription="Dentiste proche d'Ouest-Foire et de la Foire (Dakar) : consultation, urgences, détartrage, implants, orthodontie, esthétique. Clinique DABIA, Liberté 6."
    />
  );
}
