import { lazy, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const DevInfoModal = lazy(() => import("./DevInfoModal"));
const links = [["Dentiste à Dakar", "/dentiste-dakar"], ["Nos compétences", "/all-competences"], ["Urgence dentaire", "/urgence-dentaire-dakar"], ["La clinique", "/apropos"], ["Galerie", "/galerie"], ["Blog", "/blog"], ["Assurances", "/infos/assurances"], ["Technologie", "/infos/technologie"]];
const socials = [[FaInstagram, "https://www.instagram.com/clinique_dentaire_dabia/", "Instagram"], [FaFacebookF, "https://www.facebook.com/cliniquedentairedabia/?locale=fr_FR", "Facebook"], [FaTiktok, "https://www.tiktok.com/@cliniquedentairedabia5", "TikTok"], [FaLinkedinIn, "https://sn.linkedin.com/company/clinique-dentaire-dabia", "LinkedIn"], [FaWhatsapp, "https://wa.me/221777039393", "WhatsApp"]];

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return <footer className="site-footer">
    <div className="studio-container site-footer__top">
      <div className="site-footer__brand"><img src={logo} alt="Clinique Dentaire DABIA" width="72" height="72" /><p>Clinique Dentaire <strong>DABIA</strong></p><span>Soins dentaires à Dakar, Sénégal.</span></div>
      <div className="site-footer__contact"><p className="footer-label">Nous trouver</p><address>Sicap Foire, 2 voies Liberté 6<br />à 150 m du Uno, Dakar</address><Link to="/cabinet-dentaire-liberte-6">Voir les informations d’accès →</Link></div>
      <div className="site-footer__contact"><p className="footer-label">Nous joindre</p><a href="tel:+221****9393">+221 77 703 93 93</a><a href="tel:+221****4704">+221 33 868 47 04</a><a href="mailto:cliniquedentairedabia@gmail.com">cliniquedentairedabia@gmail.com</a></div>
    </div>
    <div className="studio-container site-footer__links">{links.map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div>
    <div className="studio-container site-footer__hours"><span>Lun–Jeu 9h–16h30</span><span>Ven 9h–13h · 15h–16h30</span><span>Sam 9h–14h</span></div>
    <div className="studio-container site-footer__bottom"><div className="site-footer__socials">{socials.map(([Icon, href, label]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Clinique DABIA sur ${label}`}><Icon /></a>)}</div><p>© {new Date().getFullYear()} Clinique DABIA</p><button onClick={() => setShowModal(true)}>Site par Fallcon Tech</button></div>
    {showModal && <Suspense fallback={null}><DevInfoModal onClose={() => setShowModal(false)} /></Suspense>}
  </footer>;
};
export default Footer;
