import React from "react";
import StaffCard from "../components/StaffCard";

// Importation des images
import staff1 from "../assets/staff1.png";
import staff2 from "../assets/staff2.png";
import staff3 from "../assets/staff3.png";
import staff4 from "../assets/staff4.png";

const personnel = [
  {
    nom: "Dr. Aïssatou Ndiaye",
    poste: "Chirurgienne-dentiste spécialisée en esthétique",
    bio: "Passionnée par le sourire de ses patients, elle cumule 10 ans d'expérience en esthétique dentaire.",
    photo: staff1,
  },
  {
    nom: "Dr. Mamadou Sy",
    poste: "Implantologue",
    bio: "Expert en chirurgie implantaire, il assure des soins de haute précision avec douceur.",
    photo: staff2,
  },
  {
    nom: "Dr. Khadija Ba",
    poste: "Orthodontiste",
    bio: "Elle accompagne enfants et adultes pour un alignement parfait des dents.",
    photo: staff3,
  },
  {
    nom: "Fatou Diop",
    poste: "Assistante dentaire",
    bio: "Souriante et organisée, elle garantit un accueil chaleureux pour tous les patients.",
    photo: staff4,
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
