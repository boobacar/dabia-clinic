import React from "react";
import LocalitePage from "../../components/LocalitePage";

const faq = [
  {
    q: "Où trouver un dentiste à Mermoz ou à proximité ?",
    a: "La Clinique Dentaire DABIA, située à Sicap Foire (Liberté 6), est à quelques minutes de Mermoz. Accès facile via la VDN ou la Corniche. L'équipe propose urgences, implants, orthodontie et soins esthétiques.",
  },
  {
    q: "Quels sont les tarifs d'une consultation dentaire près de Mermoz ?",
    a: "Les tarifs varient selon les soins nécessaires. Un devis détaillé est remis après l'examen clinique, avec explication des options et alternatives. Consultez notre guide des tarifs sur le blog.",
  },
  {
    q: "Puis-je avoir un rendez-vous en urgence depuis Mermoz ?",
    a: "Oui, des créneaux d'urgence sont ouverts chaque jour. Appelez avant de vous déplacer pour être orienté et obtenir un créneau adapté à votre situation.",
  },
];

export default function LocaliteMermoz() {
  return (
    <LocalitePage
      quartier="Mermoz"
      quartierPreposition="de"
      slug="cabinet-dentaire-mermoz"
      areaServed={["Sicap Foire", "Point E", "Ouakam"]}
      intro="La Clinique Dentaire DABIA reçoit les habitants de Mermoz, Sicap Foire et des quartiers voisins dans un cadre moderne et apaisant. Notre équipe assure les soins du quotidien (détartrage, traitement des caries), les urgences dentaires, l'implantologie, l'orthodontie adulte et enfant, ainsi que l'esthétique du sourire (facettes, blanchiment). Chaque plan de traitement est expliqué avec transparence, du diagnostic au devis."
      faq={faq}
      seoTitle="Dentiste Mermoz Dakar – Urgences, Implants & Orthodontie | DABIA"
      seoDescription="Cabinet dentaire proche de Mermoz (Sicap Foire, Liberté 6) : urgences le jour même, détartrage, implants, orthodontie et facettes. Accès facile, RDV en ligne disponible."
    />
  );
}
