import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Vaut-il mieux consulter sur Rufisque ou rejoindre Dakar ?",
    a:
      "Pour les actes spécialisés (implantologie, prothèse complexe, orthodontie, chirurgie), la Clinique Dentaire DABIA à Dakar dispose d'un plateau technique complet : imagerie 3D, scanner intra-oral et stérilisation. L'accès se fait facilement par l'autoroute.",
  },
  {
    q: "Recevez-vous les patients venant de Bargny ou Diamniadio ?",
    a:
      "Oui, la clinique reçoit les patients de tout le département de Rufisque et organise si besoin plusieurs actes lors d'une même visite.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a:
      "En ligne sur le site, par téléphone ou par WhatsApp. Précisez si vous avez déjà des radiographies ou un devis d'un autre cabinet.",
  },
];

export default function LocaliteRufisque() {
  return (
    <LocalitePage
      quartier="Rufisque"
      quartierPreposition="de"
      slug="cabinet-dentaire-rufisque"
      areaServed={"Rufisque", "Bargny", "Mbao", "Keur Massar", "Diamniadio", "Dakar"}
      intro="Depuis Rufisque, Bargny et Diamniadio, la Clinique Dentaire DABIA se rejoint par l'autoroute ou la route nationale 1 puis le secteur de Liberté 6, à Dakar. La clinique dispose d'un plateau technique complet (CBCT 3D, scanner intra-oral, stérilisation) pour les soins courants comme pour l'implantologie, l'orthodontie et la prothèse."
      faq={faq}
      seoTitle="Dentiste pour Rufisque, Bargny et Diamniadio (Dakar) | DABIA"
      seoDescription="Dentiste pour les patients de Rufisque, Bargny et Diamniadio : implants, prothèses, orthodontie et urgences à la Clinique Dentaire DABIA (Dakar), plateau technique complet."
    />
  );
}
