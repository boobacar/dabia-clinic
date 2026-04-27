import React from "react";
import StaffCard from "../components/StaffCard";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";

// Importation des images
import admin from "../assets/admin.webp";
import assistanteDent from "../assets/assistanteDent.webp";
import assistante from "../assets/assistante.webp";
import sao from "../assets/sao.webp";

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
    <section className="py-28 px-4 max-w-7xl mx-auto mt-5">
      <Seo
        title="Notre équipe – Clinique Dentaire DABIA (Dakar)"
        description="Découvrez l’équipe de la Clinique Dentaire DABIA : chirurgiens-dentistes, assistantes et personnel administratif au service de votre sourire."
        canonical="https://www.cliniquedentairedabia.com/personnel"
        url="https://www.cliniquedentairedabia.com/personnel"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Notre équipe" }]}
      />

      <h1 className="text-4xl font-bold text-center mb-6 text-[#ad9d64]">
        Notre Équipe
      </h1>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
        La qualité d’un traitement dentaire repose autant sur l’expertise du praticien
        que sur la coordination de toute l’équipe. À la Clinique Dentaire DABIA,
        chaque professionnel a un rôle précis : vous accueillir, vous informer,
        sécuriser vos soins et assurer un suivi sérieux après votre passage au
        cabinet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <article className="bg-white shadow rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold mb-3 text-[#bb2988]">Notre méthode de travail</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Pré-consultation structurée avec collecte des antécédents médicaux.</li>
            <li>Explication claire du diagnostic et des options de traitement.</li>
            <li>Planification des rendez-vous par priorités (urgence, confort, esthétique).</li>
            <li>Protocoles d’hygiène, stérilisation et traçabilité des instruments.</li>
            <li>Contrôle post-soin pour vérifier l’évolution et ajuster si besoin.</li>
          </ul>
        </article>

        <article className="bg-white shadow rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-bold mb-3 text-[#bb2988]">Pourquoi les patients nous choisissent</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nos patients recherchent une équipe disponible, une communication simple
            et des soins fiables dans la durée. Nous prenons le temps de détailler
            les bénéfices, les limites et l’entretien de chaque traitement afin de
            vous aider à faire un choix éclairé.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cette transparence améliore la confiance, l’adhésion au plan de soins et
            les résultats à long terme.
          </p>
        </article>
      </div>

      <div className="mt-10 text-center">
        <Link to="/rendez-vous" className="btn-cta">
          Prendre rendez-vous avec notre équipe
        </Link>
      </div>
    </section>
  );
};

export default Personnel;
