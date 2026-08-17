import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import NAP from "./NAP";
import BlogLinksCompact from "./BlogLinksCompact";

const DevInfoModal = lazy(() => import("./DevInfoModal"));

// Liens de navigation principaux (refonte) + liens localité (SEO interne prod)
const links = [
  ["Dentiste à Dakar", "/dentiste-dakar"],
  ["Nos compétences", "/all-competences"],
  ["Urgence dentaire", "/urgence-dentaire-dakar"],
  ["La clinique", "/apropos"],
  ["Galerie", "/galerie"],
  ["Blog", "/blog"],
  ["Assurances", "/infos/assurances"],
  ["Technologie", "/infos/technologie"],
  ["Cabinet dentaire Dakar", "/cabinet-dentaire-dakar"],
  ["Liberté 6", "/cabinet-dentaire-liberte-6"],
  ["Parcelles Assainies", "/clinique-dentaire-parcelles-assainies"],
  ["Sacré-Cœur", "/cabinet-dentaire-sacre-coeur"],
  ["Yoff", "/cabinet-dentaire-yoff"],
  ["VDN", "/cabinet-dentaire-vdn"],
  ["HLM Grand Yoff", "/cabinet-dentaire-hlm-grand-yoff"],
  ["Patte d'Oie", "/cabinet-dentaire-patte-d-oie"],
];

const socials = [
  [FaInstagram, "https://www.instagram.com/clinique_dentaire_dabia/", "Instagram"],
  [FaFacebookF, "https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR", "Facebook"],
  [FaTiktok, "https://www.tiktok.com/@cliniquedentairedabia5", "TikTok"],
  [FaLinkedinIn, "https://sn.linkedin.com/company/clinique-dentaire-dabia", "LinkedIn"],
  [FaWhatsapp, "https://wa.me/221777039393", "WhatsApp"],
];

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className="site-footer">
      {/* NAP : données structurées schema.org LocalBusiness (SEO local) */}
      <NAP />

      <div className="studio-container site-footer__links">
        {links.map(([label, path]) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      </div>

      <div className="studio-container">
        <Suspense fallback={null}>
          <BlogLinksCompact count={8} />
        </Suspense>
      </div>

      <div className="studio-container site-footer__bottom">
        <div className="site-footer__socials">
          {socials.map(([Icon, href, label]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Clinique DABIA sur ${label}`}
            >
              <Icon />
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Clinique DABIA</p>
        <button onClick={() => setShowModal(true)}>Site par Fallcon Tech</button>
      </div>

      {showModal && (
        <Suspense fallback={null}>
          <DevInfoModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </footer>
  );
};

export default Footer;
