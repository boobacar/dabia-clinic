import { motion } from "framer-motion";

const PostVisite = () => {
  const sections = [
    {
      titre: "Après une extraction dentaire",
      contenu: [
        "Gardez la compresse en bouche pendant 30 minutes pour arrêter le saignement.",
        "Évitez de rincer vigoureusement la bouche les premières 24h.",
        "Mangez des aliments mous et tièdes, évitez les aliments chauds ou durs.",
        "Ne fumez pas pendant au moins 72h.",
        "Appliquez une poche de glace sur la joue pour réduire le gonflement.",
      ],
    },
    {
      titre: "Après une dévitalisation / traitement de canal",
      contenu: [
        "Il est normal d’avoir une légère sensibilité pendant quelques jours.",
        "Évitez de mâcher du côté traité jusqu’à la pose définitive de la couronne.",
        "Prenez les antalgiques prescrits si nécessaire.",
      ],
    },
    {
      titre: "Après une pose d’implant",
      contenu: [
        "Suivez strictement les prescriptions données par votre chirurgien.",
        "Appliquez de la glace sur la joue en externe pendant les premières 24h.",
        "Maintenez une hygiène bucco-dentaire douce avec une brosse chirurgicale.",
        "Évitez tout effort physique pendant 48h.",
      ],
    },
    {
      titre: "Après un blanchiment dentaire",
      contenu: [
        "Évitez le café, le thé, le vin rouge et le tabac pendant au moins 48h.",
        "Utilisez un dentifrice adapté aux dents sensibles si besoin.",
        "Respectez les recommandations de fréquence pour conserver les résultats.",
      ],
    },
    {
      titre: "Après un soin esthétique ou orthodontique",
      contenu: [
        "Respectez les consignes spécifiques données par le praticien.",
        "Signalez rapidement tout décollement ou inconfort.",
        "Continuez les rendez-vous de suivi régulièrement.",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-[#ad9d64] text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Conseils Post-Visite
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Ces recommandations vous permettent de bien récupérer après vos soins
        dentaires à la clinique DABIA. En cas de doute, n’hésitez pas à nous
        contacter.
      </p>

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

export default PostVisite;
