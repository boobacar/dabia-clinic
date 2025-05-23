import { motion } from "framer-motion";

const StaffCard = ({ photo, nom, poste, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition"
    >
      <img
        src={photo}
        alt={nom}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-[#ad9d64]">{nom}</h3>
      <p className="text-sm text-gray-600 italic">{poste}</p>
      <p className="text-sm text-gray-700 mt-2">{bio}</p>
    </motion.div>
  );
};

export default StaffCard;
