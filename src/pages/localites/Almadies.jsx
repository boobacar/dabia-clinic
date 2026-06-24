import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Y a-t-il un bon dentiste proche des Almadies ?",
    a: "Oui, la Clinique Dentaire DABIA est située à Sicap Foire (Liberté 6), à quelques minutes en voiture des Almadies. L'équipe prend en charge urgences, implants, orthodontie et esthétique avec un plateau technique moderne.",
  },
  {
    q: "Puis-je prendre rendez-vous rapidement depuis les Almadies ?",
    a: "Absolument. Les créneaux sont disponibles en ligne ou par téléphone, avec des plages adaptées aux urgences sous 24h. La clinique est facilement accessible depuis la VDN et la Corniche.",
  },
  {
    q: "Quels soins sont proposés pour les résidents des Almadies ?",
    a: "Consultation, bilan complet, détartrage, traitement des caries, implants, prothèses, facettes, blanchiment, orthodontie (aligneurs/bagues) et urgences dentaires. Devis clair remis après examen.",
  },
];

export default function LocaliteAlmadies() {
  return (
    <LocalitePage
      quartier="Almadies"
      quartierPreposition="des"
      slug="cabinet-dentaire-almadies"
      areaServed={["Ngor", "Ouakam", "Yoff", "VDN"]}
      intro="La Clinique Dentaire DABIA accueille les patients des Almadies, de Ngor et d'Ouakam à quelques minutes en voiture. Située à Sicap Foire (Liberté 6), facilement accessible par la VDN, notre équipe propose des soins dentaires complets : de la consultation de routine à l'implantologie avancée, en passant par l'orthodontie et l'esthétique du sourire. Plateau technique moderne avec CBCT 3D, scanner intra-oral et stérilisation de pointe."
      faq={faq}
      seoTitle="Dentiste Almadies Dakar – Cabinet dentaire proche, RDV rapide | DABIA"
      seoDescription="Dentiste proche des Almadies à Dakar (Liberté 6, Sicap Foire) : urgence, consultation, implants, orthodontie, blanchiment. Accès facile par la VDN. RDV en ligne ou au 77 703 93 93."
    />
  );
}
