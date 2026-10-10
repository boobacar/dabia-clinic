import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Où se trouve exactement la clinique dentaire à Sicap Foire ?",
    a:
      "La Clinique Dentaire DABIA est située à Sicap Foire, 2 voies Liberté 6, à environ 150 m du Uno, dans la zone Libération 6 / Sicap Foire, à Dakar.",
  },
  {
    q: "Faut-il prendre rendez-vous pour une consultation à Sicap Foire ?",
    a:
      "Le rendez-vous est recommandé pour éviter l'attente, et il se prend en ligne ou par téléphone. La clinique reçoit aussi les urgences en priorité : dans ce cas, appelez avant de venir.",
  },
  {
    q: "Quels soins sont réalisés sur place ?",
    a:
      "Consultation et bilan, détartrage, traitement des caries, soins des gencives, extractions, couronnes et prothèses, implants, orthodontie (aligneurs et bagues), blanchiment et facettes, urgences dentaires.",
  },
];

export default function LocaliteSicapFoire() {
  return (
    <LocalitePage
      quartier="Sicap Foire"
      quartierPreposition="de"
      slug="cabinet-dentaire-sicap-foire"
      areaServed={"Liberté 6", "Dieuppeul", "Castors", "Sicap Baobab", "Sicap Liberté"}
      intro="La Clinique Dentaire DABIA est installée au cœur de Sicap Foire, sur les 2 voies de Liberté 6 (à 150 m du Uno). Les habitants du quartier y accèdent à pied ou en quelques minutes : consultation, détartrage, soins des caries, urgences dentaires, implants, orthodontie et esthétique du sourire. Un devis détaillé est remis et expliqué avant chaque soin."
      faq={faq}
      seoTitle="Dentiste à Sicap Foire (Dakar) : clinique dentaire à Liberté 6 | DABIA"
      seoDescription="Clinique dentaire à Sicap Foire (Liberté 6, Dakar) : consultations, urgences, détartrage, implants et orthodontie. Devis clair, RDV en ligne ou par téléphone."
    />
  );
}
