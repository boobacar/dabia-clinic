import { motion } from "framer-motion";

const StaffCard = ({ photo, nom, poste, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white shadow-md rounded-xl p-6 text-center hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <img
        src={photo}
        alt={`Photo de ${nom}`}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-[#ad9d64]"
        loading="lazy"
      />
      <h3 className="text-lg font-bold text-[#ad9d64]">{nom}</h3>
      <p className="text-sm text-gray-600 italic">{poste}</p>
      <p className="whitespace-pre-line text-left text-sm text-gray-700 mt-2">
        {bio}
      </p>
    </motion.div>
  );
};

export default StaffCard;
