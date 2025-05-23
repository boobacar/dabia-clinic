import React from "react";
import StaffCard from "../components/StaffCard";

const personnel = [
  {
    nom: "Dr. Aïssatou Ndiaye",
    poste: "Chirurgienne-dentiste spécialisée en esthétique",
    bio: "Passionnée par le sourire de ses patients, elle cumule 10 ans d'expérience en esthétique dentaire.",
    photo: "/assets/staff1.jpg",
  },
  {
    nom: "Dr. Mamadou Sy",
    poste: "Implantologue",
    bio: "Expert en chirurgie implantaire, il assure des soins de haute précision avec douceur.",
    photo: "/assets/staff2.jpg",
  },
  {
    nom: "Dr. Khadija Ba",
    poste: "Orthodontiste",
    bio: "Elle accompagne enfants et adultes pour un alignement parfait des dents.",
    photo: "/assets/staff3.jpg",
  },
  {
    nom: "Fatou Diop",
    poste: "Assistante dentaire",
    bio: "Souriante et organisée, elle garantit un accueil chaleureux pour tous les patients.",
    photo: "/assets/staff4.jpg",
  },
  {
    nom: "Dr. Boubacar Fall",
    poste: "Parodontologue & Fondateur",
    bio: "Fondateur de la clinique DABIA, il veille à l’excellence médicale et humaine.",
    photo: "/assets/staff5.jpg",
  },
];

const Personnel = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#ad9d64]">
        Notre Équipe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {personnel.map((membre, index) => (
          <StaffCard
            key={index}
            nom={membre.nom}
            poste={membre.poste}
            bio={membre.bio}
            photo={membre.photo}
          />
        ))}
      </div>
    </section>
  );
};

export default Personnel;
