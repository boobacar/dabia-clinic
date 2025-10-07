// src/components/CompetenceModal.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function CompetenceModal({ open, item, onClose }) {
  const closeBtnRef = useRef(null);

  // Empêche le scroll en arrière-plan + ESC pour fermer + focus sur le bouton
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // clic sur le fond = fermer
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.titre}
          className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique dans la modale
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h3 className="text-xl font-bold text-gray-900">{item.titre}</h3>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ad9d64]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          {item.image && (
            <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.titre}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Contenu scrollable */}
          <div className="p-5 overflow-y-auto">
            <p className="text-gray-700 leading-relaxed">
              {item.longDescription || item.description}
            </p>

            {Array.isArray(item.points) && item.points.length > 0 && (
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
                {item.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex gap-3">
              <Link to="/rendez-vous" className="btn-cta">
                Prendre un RV
              </Link>
              <button onClick={onClose} className="btn-cta btn-cta-sm">
                Fermer
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
