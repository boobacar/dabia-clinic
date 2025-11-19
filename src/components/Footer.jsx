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
    <footer className="bg-gray-800 text-white py-8">
      <NAP />

      {/* Liens internes clés */}
      <div className="footer-links-condensed max-w-7xl mx-auto px-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-center">
        <a
          href="/dentiste-dakar"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Dentiste à Dakar
        </a>
        <a
          href="/cabinet-dentaire-dakar"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Cabinet dentaire Dakar
        </a>
        <a
          href="/urgence-dentaire-dakar"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Urgence dentaire
        </a>
        <a
          href="/all-competences"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Nos compétences
        </a>
        <a
          href="/infos/technologie"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Technologie
        </a>
        <a
          href="/infos/assurances"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Assurances
        </a>
        <a
          href="/blog"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Blog
        </a>
        <a
          href="/cabinet-dentaire-liberte-6"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Liberté 6
        </a>
        <a
          href="/clinique-dentaire-parcelles-assainies"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Parcelles Assainies
        </a>
        <a
          href="/cabinet-dentaire-sacre-coeur"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Sacré‑Cœur
        </a>
        <a
          href="/cabinet-dentaire-yoff"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Yoff
        </a>
        <a
          href="/cabinet-dentaire-hlm-grand-yoff"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          HLM Grand Yoff
        </a>
        <a
          href="/cabinet-dentaire-patte-d-oie"
          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
        >
          Patte d’Oie
        </a>
      </div>

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
          Fallcon Tech
        </button>
      </div>

      <AnimatePresence>
        {showModal && <DevInfoModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
