import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Quel dentiste pour les habitants de Mbao ?",
    a:
      "La Clinique Dentaire DABIA, à Sicap Foire (Liberté 6, Dakar), reçoit les patients de Mbao et des zones voisines. Accès par la route nationale 1.",
  },
  {
    q: "Combien coûte une consultation dentaire ?",
    a:
      "La consultation est facturée selon la grille de la clinique et un devis détaillé vous est remis pour les soins. Demandez la grille complète à l'accueil ou par WhatsApp.",
  },
  {
    q: "Recevez-vous sans rendez-vous ?",
    a:
      "La clinique privilégie le rendez-vous pour limiter l'attente, mais reçoit les urgences en priorité : dans ce cas, appelez avant de venir.",
  },
];

export default function LocaliteMbao() {
  return (
    <LocalitePage
      quartier="Mbao"
      quartierPreposition="de"
      slug="cabinet-dentaire-mbao"
      areaServed={"Mbao", "Petit Mbao", "Grand Mbao", "ZAC Mbao", "Rufisque", "Keur Massar"}
      intro="Depuis Mbao (Petit Mbao, Grand Mbao, ZAC Mbao) et les communes voisines, la Clinique Dentaire DABIA se rejoint par la route nationale 1 en direction de Dakar puis le secteur de Liberté 6. La clinique traite prévention, caries, gencives, extractions, prothèses, implants, orthodontie et esthétique du sourire, devis écrit avant chaque soin."
      faq={faq}
      seoTitle="Dentiste pour Mbao et Rufisque (Dakar) : RDV et urgences | DABIA"
      seoDescription="Patients de Mbao (Petit Mbao, Grand Mbao, ZAC Mbao) et Rufisque : consultations, urgences, prothèses et implants à la Clinique Dentaire DABIA, Liberté 6, Dakar."
    />
  );
}
