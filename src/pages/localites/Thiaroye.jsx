import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Où se faire soigner les dents quand on habite Thiaroye ?",
    a:
      "La Clinique Dentaire DABIA, située à Sicap Foire (Liberté 6, Dakar), est accessible depuis Thiaroye par la route nationale 1 puis les voies de Liberté 6.",
  },
  {
    q: "Que faire en cas de rage de dent le soir ?",
    a:
      "La clinique n'assure pas de permanence ouverte la nuit : en cas de douleur, appelez dès l'ouverture pour obtenir un créneau prioritaire. Le site explique aussi les gestes utiles en attendant.",
  },
  {
    q: "Acceptez-vous les mutuelles et l'IPM ?",
    a:
      "Oui, la clinique accompagne les patients disposant d'une IPM, d'une mutuelle ou d'une assurance santé : constitution du dossier et devis détaillé.",
  },
];

export default function LocaliteThiaroye() {
  return (
    <LocalitePage
      quartier="Thiaroye"
      quartierPreposition="de"
      slug="cabinet-dentaire-thiaroye"
      areaServed={"Thiaroye", "Pikine", "Guédiawaye", "Mbao", "Keur Massar"}
      intro="Depuis Thiaroye, la Clinique Dentaire DABIA se rejoint par la route nationale 1 en direction de Dakar puis le secteur de Liberté 6. La clinique prend en charge les urgences dentaires (douleur, abcès, dent cassée), les soins courants, les prothèses, les implants et l'orthodontie, avec un devis détaillé remis avant chaque traitement."
      faq={faq}
      seoTitle="Dentiste pour Thiaroye (Dakar) : consultation et urgences | DABIA"
      seoDescription="Patients de Thiaroye : consultations, détartrage, urgences dentaires, prothèses et implants à la Clinique Dentaire DABIA, Sicap Foire (Liberté 6), Dakar."
    />
  );
}
