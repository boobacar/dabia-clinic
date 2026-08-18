import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaPhone, FaEnvelope, FaGlobe, FaCode } from "react-icons/fa";

const DevInfoModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="dev-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Fallcon Tech"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 340, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="dev-modal__card"
      >
        {/* Bouton de fermeture */}
        <button
          type="button"
          onClick={onClose}
          className="dev-modal__close"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>

        {/* Icône code dans une puce façon care-row */}
        <div className="dev-modal__icon">
          <FaCode size={26} aria-label="Code" />
        </div>

        <p className="dev-modal__kicker">Conception &amp; développement</p>
        <h3 className="dev-modal__title">Fallcon Tech</h3>

        {/* Contacts directs */}
        <div className="dev-modal__list">
          <a href="tel:+221776260020" className="dev-modal__row">
            <span className="dev-modal__row-icon">
              <FaPhone size={15} />
            </span>
            <span className="dev-modal__row-text">
              <span className="dev-modal__row-label">Téléphone</span>
              <span className="dev-modal__row-value">+221 77 626 00 20</span>
            </span>
          </a>
          <a href="mailto:info@fallcontech.com" className="dev-modal__row">
            <span className="dev-modal__row-icon">
              <FaEnvelope size={15} />
            </span>
            <span className="dev-modal__row-text">
              <span className="dev-modal__row-label">Email</span>
              <span className="dev-modal__row-value">info@fallcontech.com</span>
            </span>
          </a>
          <a
            href="https://www.fallcontech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="dev-modal__row"
          >
            <span className="dev-modal__row-icon">
              <FaGlobe size={15} />
            </span>
            <span className="dev-modal__row-text">
              <span className="dev-modal__row-label">Site web</span>
              <span className="dev-modal__row-value">www.fallcontech.com</span>
            </span>
          </a>
        </div>

        {/* CTA principal charte */}
        <a
          href="https://www.fallcontech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dev-modal__cta"
        >
          Visiter fallcontech.com
        </a>
      </motion.div>
    </motion.div>
  );
};

export default DevInfoModal;
