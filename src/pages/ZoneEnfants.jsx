import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    titre: "Première visite chez le dentiste",
    contenu: [
      "La première visite de votre enfant devrait avoir lieu vers l’âge de 3 ans.",
      "Cette rencontre permet de créer un lien de confiance et de familiariser l’enfant avec l’environnement dentaire.",
      "L’hygiéniste vérifiera le brossage des dents et donnera des conseils adaptés.",
      "Évitez d’utiliser des mots comme 'piqûre' pour ne pas inquiéter l’enfant.",
      "Prévoyez un rendez-vous le matin, lorsque l’enfant est reposé et plus coopératif.",
    ],
  },
  {
    titre: "Éruption des dents primaires",
    contenu: [
      "Les premières dents apparaissent généralement entre 4 et 7 mois.",
      "Symptômes possibles : salivation abondante, mordillement, irritabilité, joues rouges.",
      "Le frottement délicat des gencives et l’utilisation d’un anneau de dentition peuvent soulager l’inconfort.",
      "En cas de fièvre, consultez un professionnel de santé.",
    ],
  },
  {
    titre: "Habitudes de succion",
    contenu: [
      "La succion est naturelle chez le nourrisson, mais après 3 ans, elle peut causer des problèmes dentaires.",
      "Des astuces pour arrêter : restreindre progressivement l’usage, utiliser un tableau de motivation, couper le bout de la tétine.",
      "Évitez de punir l’enfant ; encouragez-le positivement.",
    ],
  },
  {
    titre: "Prévention de la carie du biberon",
    contenu: [
      "Évitez de laisser l’enfant s’endormir avec un biberon contenant du lait ou du jus.",
      "Le sucre présent dans ces liquides peut causer des caries.",
      "Nettoyez les dents de l’enfant avant le coucher.",
    ],
  },
  {
    titre: "Application de fluor et scellants",
    contenu: [
      "Le fluor renforce l’émail des dents et prévient les caries.",
      "Les scellants protègent les surfaces de mastication des molaires.",
      "Ces traitements sont simples et efficaces pour maintenir une bonne santé bucco-dentaire.",
    ],
  },
];

const ZoneEnfants = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-[#ad9d64] text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Espace Enfants
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        À la Clinique Dentaire Dabia, nous mettons tout en œuvre pour que les
        enfants se sentent à l’aise et en confiance lors de leurs visites. Voici
        quelques informations utiles pour les parents.
      </p>

      <div className="flex justify-center mb-10">
        <Link
          to="/rendez-vous"
          className="animate-bounce inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Prendre un rendez-vous
        </Link>
      </div>

      <div className="space-y-10">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#ad9d64]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[#bb2988] font-bold mb-4">
              {sec.titre}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              {sec.contenu.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ZoneEnfants;
