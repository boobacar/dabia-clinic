import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaPhone, FaEnvelope, FaGlobe, FaCode } from "react-icons/fa";

const DevInfoModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
    >
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center relative shadow-xl">
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X />
        </button>

        {/* Icône code au lieu de la photo */}
        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#ad9d64]/10 flex items-center justify-center">
          <FaCode className="text-[#ad9d64]" size={40} aria-label="Code" />
        </div>

        {/* Contacts directs */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-[#ad9d64]" />
            <a href="tel:+221776260020" className="hover:underline">
              +221 77 626 00 20
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-[#ad9d64]" />
            <a href="mailto:info@fallcontech.com" className="hover:underline">
              info@fallcontech.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaGlobe className="text-[#ad9d64]" />
            <a
              href="https://www.fallcontech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.fallcontech.com
            </a>
          </div>
        </div>

        {/* Liens externes supprimés sur demande */}
      </div>
    </motion.div>
  );
};

export default DevInfoModal;
