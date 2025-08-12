import React from "react";
import StaffCard from "../components/StaffCard";

// Importation des images
import admin from "../assets/admin.jpeg";
import assistanteDent from "../assets/assistanteDent.jpeg";
import assistante from "../assets/assistante.jpeg";
import sao from "../assets/sao.webp";
import { Link } from "react-router-dom";

const personnel = [
  {
    nom: "Dr Fatoumata SAO",
    poste: "Fondatrice et chirurgienne-dentiste en chef",
    bio: "Passionnée par l'excellence et le bien-être de ses patients, Dr SAO est la fondatrice et l’âme de la clinique dentaire DABIA. Forte de plusieurs années d'expérience, elle s'est spécialisée dans des domaines de pointe tels que l’implantologie, l’orthodontie, l’endodontie et la dentisterie esthétique. Grâce à une approche humaine et à une expertise technique reconnue, elle propose des traitements sur mesure alliant précision, confort et esthétisme. Sa vision : redonner le sourire en toute confiance, avec un souci constant d’innovation et de qualité.",
    photo: sao,
  },
  {
    nom: "Moustapha FALL",
    poste: "Office Manager – Administrateur de la clinique dentaire DABIA",
    bio: `Il veille au bon fonctionnement global de la clinique, en supervisant à la fois l’équipe administrative et l’organisation des services. Grâce à son sens aigu de la gestion et son engagement constant envers la qualité des soins, il s’assure que chaque patient bénéficie d’une expérience fluide, accueillante et professionnelle. 
    
  Pilier de notre structure, Moustapha coordonne les opérations quotidiennes, gère les ressources humaines et veille à l’amélioration continue des processus internes, dans le respect des standards les plus élevés.`,
    photo: admin,
  },
  {
    nom: "Fatou WADE",
    poste: "Assistante dentaire",
    bio: "Fatou Wade accompagne nos praticiens au quotidien pour garantir des soins de qualité dans un environnement serein et sécurisé. Attentive, organisée et toujours à l’écoute, elle prépare le matériel, assiste le dentiste en salle de soins et veille à la stérilisation rigoureuse des instruments.\n\nSon sens du détail et son empathie contribuent à mettre les patients en confiance, tout en assurant un soutien essentiel à l’ensemble de l’équipe médicale.",
    photo: assistanteDent,
  },
  {
    nom: "Mame Ndiaye SY",
    poste: "Responsable du secrétariat dentaire",
    bio: "Avec professionnalisme et bienveillance, Mame Ndiaye Sy assure la gestion quotidienne du secrétariat de notre clinique dentaire. Elle est votre premier point de contact, que ce soit pour la prise de rendez-vous, la gestion des dossiers ou le suivi administratif. Forte d’une solide expérience dans le domaine médico-administratif, elle veille à ce que chaque patient soit accueilli avec courtoisie et efficacité.\n\nMame joue un rôle central dans le bon fonctionnement de notre clinique, en facilitant la communication entre les patients et l’équipe soignante, tout en garantissant une organisation fluide et rigoureuse.",
    photo: assistante,
  },
];

const Personnel = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-5">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#ad9d64]">
        Notre Équipe
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
