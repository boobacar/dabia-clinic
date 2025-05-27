import { motion } from "framer-motion";

const assurances = [
  "NSIA Assurances",
  "SONAM Assurances",
  "ASKIA Assurances",
  "WAFA Assurance",
  "AMS Assurances",
  "SAAR Assurances",
  "CNART Assurances",
  "Jubilee Assurances",
];

const Assurances = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto mt-20">
      <motion.h2
        className="text-4xl font-bold text-center text-[#ad9d64] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nos Partenaires Assurances
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        La Clinique Dentaire DABIA collabore avec plusieurs compagnies
        d’assurances reconnues au Sénégal pour vous permettre de bénéficier de
        soins dentaires de qualité, pris en charge ou remboursés selon votre
        couverture.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {assurances.map((name, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100 hover:shadow-lg hover:border-[#ad9d64] transition"
          >
            <h3 className="text-[#bb2988] font-semibold text-lg">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Assurances;
