import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import DevInfoModal from "./DevInfoModal";
import logo from "../assets/logo.webp";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex gap-2 items-center">
          <img
            className="w-[20%] sm:w-[30%] rounded-full hover:animate-spin"
            src={logo}
            alt="logo"
          />
          <div>
            <h4 className="font-bold text-xl mb-2 text-[#ad9d64]">Dabia</h4>
            <p>Clinique dentaire à Dakar, Sénégal</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <MdLocationPin className="w-5 h-5" /> Adresse
          </h4>
          <p>Sicap Foire, 2 voies Liberté 6</p>
          <p>À 150m du Uno, Dakar, Sénégal</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="flex items-center gap-2">
            <MdPhone className="w-5 h-5" /> +221 77 703 93 93
            <MdPhone className="w-5 h-5" /> +221 33 868 47 04
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="w-5 h-5" /> cliniquedentairedabia@gmail.com
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.tiktok.com/@cliniquedentairedabia5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ad9d64] transition"
        >
          <FaTiktok className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/clinique_dentaire_dabia/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ad9d64] transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ad9d64] transition"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="https://sn.linkedin.com/company/clinique-dentaire-dabia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ad9d64] transition"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/221777039393"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ad9d64] transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Dabia. Tous droits réservés.
      </div>
      <div className="flex text-gray-400 items-center justify-center">
        Designed by{" "}
        <button
          onClick={() => setShowModal(true)}
          className="font-bold animate-bounce text-[#ad9d64] ml-1 hover:underline"
        >
          Boubacar FALL
        </button>
      </div>

      <AnimatePresence>
        {showModal && <DevInfoModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
