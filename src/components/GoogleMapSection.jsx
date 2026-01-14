import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const GoogleMapSection = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle
        title="Trouver la clinique dentaire DABIA à Dakar"
        subtitle="Localisation"
      />
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
