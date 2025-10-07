import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const SuccessModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded-lg p-6 w-[90%] max-w-md text-center"
    >
      <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Rendez-vous envoyé !</h3>
      <p className="text-gray-600 mb-4">
        Nous vous contacterons pour confirmer votre rendez-vous.
      </p>
      <button onClick={onClose} className="btn-cta btn-cta-sm">
        Fermer
      </button>
    </motion.div>
  );
};

export default SuccessModal;
