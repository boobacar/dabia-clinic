import { motion } from "framer-motion";

const GoogleMapSection = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl text-[#ad9d64] font-bold text-center mb-6"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Nous trouver
      </motion.h2>
      <motion.div
        className="w-full h-96 max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <iframe
          className="w-full h-full rounded-lg shadow"
          src="https://www.google.com/maps?q=Clinique-Dentaire-Dabia,+Liberté+6,+Dakar,+Senegal&output=embed"
          allowFullScreen
          loading="lazy"
          title="Localisation"
        />
      </motion.div>
    </motion.section>
  );
};

export default GoogleMapSection;
