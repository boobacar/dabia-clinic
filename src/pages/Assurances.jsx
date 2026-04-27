import React from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";

// Import des logos
import logoSunu from "../assets/assurances/sunu.webp";
import logoAxa from "../assets/assurances/axa.webp";
import logoSonam from "../assets/assurances/sonam.webp";
import logoPrevoyance from "../assets/assurances/prevoyance.webp";
import logoMsh from "../assets/assurances/msh.webp";
import logoOlea from "../assets/assurances/olea.webp";
import logoAscoma from "../assets/assurances/ascoma.webp";
import logoWafa from "../assets/assurances/wafa.webp";
import logoAmsa from "../assets/assurances/amsa.webp";
import logoSanlam from "../assets/assurances/sanlam.webp";
import logoFinafrica from "../assets/assurances/finafrica.webp";
import logoWillis from "../assets/assurances/willis.webp";
import logoGga from "../assets/assurances/gga.webp";
import logoAfiyah from "../assets/assurances/afiyah.webp";
import logoIpmSonatel from "../assets/assurances/ipm_sonatel.webp";
import logoIpmEiffage from "../assets/assurances/ipm_eiffage.webp";
import logoIpmBis from "../assets/assurances/ipm_bis.webp";
import logoIpmSagfa from "../assets/assurances/ipm_sagfa.webp";
import logoIpmPoste from "../assets/assurances/ipm_poste.webp";
import logoIpmCentif from "../assets/assurances/ipm_centif.webp";
import logoIpmKingFahd from "../assets/assurances/ipm_kingfahd.webp";
import logoSypaoa from "../assets/assurances/sypaoa.webp";
import logoTransvie from "../assets/assurances/transvie.webp";
import logoIpmSenelec from "../assets/assurances/ipm_senelec.webp";
import logoSusu from "../assets/assurances/susu.webp";
import logoAgetip from "../assets/assurances/agetip.webp";
import logoMutuelleCapVert from "../assets/assurances/mutuelle_cap_vert.webp";
import logoPhosphateThies from "../assets/assurances/phosphate_thies.webp";
import logoExpressSante from "../assets/assurances/express_sante.webp";
import logoDgid from "../assets/assurances/dgid.webp";
import logoIpm from "../assets/assurances/ipm.webp";
import { Link } from "react-router-dom";

const assurances = [
  { nom: "AXA", logo: logoAxa },
  { nom: "Sonam", logo: logoSonam },
  { nom: "Amsa", logo: logoAmsa },
  { nom: "MSH International", logo: logoMsh },
  { nom: "OLEA", logo: logoOlea },
  { nom: "Ipm Sonatel", logo: logoIpmSonatel },
  { nom: "Ascoma", logo: logoAscoma },
  { nom: "Sunu Assurances", logo: logoSunu },
  { nom: "Prévoyance Assurance", logo: logoPrevoyance },
  { nom: "Wafa Assurances", logo: logoWafa },
  { nom: "Sanlam|Allianz", logo: logoSanlam },
  { nom: "Ma-Dgid (IPM impots et domaines)", logo: logoDgid },
  { nom: "Finafrica", logo: logoFinafrica },
  { nom: "WILLIS TOWERS WATSON", logo: logoWillis },
  { nom: "GGA", logo: logoGga },
  { nom: "Ipm Fadiou", logo: logoIpm },
  { nom: "Ipm Sura", logo: logoIpm },
  { nom: "Ipm des Professions Libérales", logo: logoIpm },
  { nom: "Afiyah", logo: logoAfiyah },
  { nom: "Ipm Eiffage", logo: logoIpmEiffage },
  { nom: "Ipm Bis (banque islamique)", logo: logoIpmBis },
  { nom: "Ipm Sagfa", logo: logoIpmSagfa },
  { nom: "Ipm Poste", logo: logoIpmPoste },
  { nom: "Ipm Centif", logo: logoIpmCentif },
  { nom: "Ipm King Fahd Palace", logo: logoIpmKingFahd },
  { nom: "SYPAOA", logo: logoSypaoa },
  { nom: "TRANSVIE", logo: logoTransvie },
  { nom: "Ipm Senelec", logo: logoIpmSenelec },
  { nom: "SUSU", logo: logoSusu },
  { nom: "AGETIP", logo: logoAgetip },
  { nom: "Mutuelle Hôtelière du Cap-Vert", logo: logoMutuelleCapVert },
  { nom: "Phosphate de THIES", logo: logoPhosphateThies },
  { nom: "Express Santé", logo: logoExpressSante },
];

const Assurances = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto mt-20">
      <Seo
        title="Assurances dentaires partenaires à Dakar – Clinique DABIA"
        description="Liste des assurances et mutuelles partenaires de la Clinique Dentaire DABIA à Dakar, avec conseils pratiques sur la prise en charge et les démarches patient."
        canonical="https://www.cliniquedentairedabia.com/infos/assurances"
        url="https://www.cliniquedentairedabia.com/infos/assurances"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Assurances" }]}
      />

      <motion.h1
        className="text-4xl font-bold text-center text-[#ad9d64] mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Assurances & mutuelles partenaires
      </motion.h1>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
        La Clinique Dentaire DABIA travaille avec de nombreuses assurances,
        mutuelles et IPM au Sénégal. Notre équipe administrative vous accompagne
        pour clarifier les modalités de prise en charge avant vos soins afin de
        limiter les imprévus financiers.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <article className="bg-white border border-gray-100 shadow rounded-xl p-5">
          <h2 className="text-xl font-bold text-[#bb2988] mb-2">Comment préparer votre dossier</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Apporter votre carte d’assurance/mutuelle à jour.</li>
            <li>Présenter une pièce d’identité et, si besoin, une lettre de garantie.</li>
            <li>Informer l’équipe de vos plafonds annuels ou exclusions connues.</li>
            <li>Demander un devis détaillé avant les soins planifiés.</li>
          </ul>
        </article>

        <article className="bg-white border border-gray-100 shadow rounded-xl p-5">
          <h2 className="text-xl font-bold text-[#bb2988] mb-2">Ce que nous vérifions avec vous</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Taux de remboursement par type d’acte (consultation, prothèse, etc.).</li>
            <li>Nécessité d’une entente préalable selon votre organisme.</li>
            <li>Reste à charge estimatif avant lancement du traitement.</li>
            <li>Possibilités de planification en plusieurs étapes si nécessaire.</li>
          </ul>
        </article>
      </div>

      <div className="flex justify-center mb-10">
        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assurances.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            viewport={{ once: true }}
          >
            <img
              src={item.logo}
              alt={item.nom}
              className="w-16 h-16 object-contain bg-white rounded-md"
              loading="lazy"
            />
            <h3 className="text-md font-semibold text-[#bb2988]">{item.nom}</h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-[#bb2988]/5 border border-[#bb2988]/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">Questions fréquentes</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Ma mutuelle est-elle prise en charge à 100 % ?</strong>
            <br />
            Cela dépend de votre contrat. Nous vous aidons à estimer précisément le
            reste à charge avant le début du traitement.
          </p>
          <p>
            <strong>Puis-je venir en urgence même sans accord préalable ?</strong>
            <br />
            Oui. Les urgences sont d’abord traitées cliniquement, puis nous vous
            guidons sur les formalités administratives selon votre assureur.
          </p>
          <p>
            <strong>La liste est-elle mise à jour ?</strong>
            <br />
            Oui, elle évolue régulièrement. En cas de doute, contactez la clinique
            avant votre rendez-vous pour vérification rapide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Assurances;
