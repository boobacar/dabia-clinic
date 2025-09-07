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
import logo from "../assets/logo.jpg";
import BlogLinksCompact from "./BlogLinksCompact";
import NAP from "./NAP";
import ReviewCTA from "./ReviewCTA";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <NAP />

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.tiktok.com/@cliniquedentairedabia5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaTiktok className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/clinique_dentaire_dabia/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c24f21] transition"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#252ea1] transition"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="https://sn.linkedin.com/company/clinique-dentaire-dabia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4f84c2] transition"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/221777039393"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#408a4c] transition"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>

      <div className="md:col-span-1">
        <BlogLinksCompact count={8} />
      </div>

      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Dabia. Tous droits réservés.
      </div>
      <div className="flex text-gray-400 items-center justify-center text-sm">
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
