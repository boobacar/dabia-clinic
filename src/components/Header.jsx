import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";

const navLinks = [{ name: "Accueil", path: "/" }, { name: "Soins", path: "/all-competences" }, { name: "Urgence", path: "/urgence-dentaire-dakar" }, { name: "La clinique", path: "/apropos" }, { name: "Galerie", path: "/galerie" }, { name: "Conseils", path: "/blog" }];
const infosLinks = [{ name: "Assurances", path: "/infos/assurances" }, { name: "Conseils après visite", path: "/infos/post-visite" }, { name: "Espace enfants", path: "/infos/enfants" }, { name: "Technologie", path: "/infos/technologie" }, { name: "Nous rejoindre", path: "/rejoindre" }];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef(null);
  const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [location.pathname]);
  useEffect(() => () => clearTimeout(closeTimeout.current), []);
  return <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
    <div className="site-header__notice"><div className="studio-container"><span>Sicap Foire · Liberté 6</span><span className="site-header__notice-hours">Lun–Jeu 9h–16h30 · Sam 9h–14h</span><a href="tel:+221****9393">+221 77 703 93 93</a></div></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SiteNavigationElement", name: navLinks.map(n => n.name), url: navLinks.map(n => `${typeof window !== "undefined" ? window.location.origin : "https://www.cliniquedentairedabia.com"}${n.path}`) }) }} />
    <div className="studio-container site-header__main">
      <Link to="/" className="site-logo"><img src={logo} alt="Clinique Dentaire DABIA" width="54" height="54" /><span>Clinique Dentaire <strong>DABIA</strong></span></Link>
      <nav className="site-nav" aria-label="Navigation principale">{navLinks.map(link => <Link key={link.path} to={link.path} aria-current={location.pathname === link.path ? "page" : undefined}>{link.name}</Link>)}<div className="site-nav__more" onMouseEnter={() => { clearTimeout(closeTimeout.current); setDropdownOpen(true); }} onMouseLeave={() => { closeTimeout.current = setTimeout(() => setDropdownOpen(false), 180); }}><button type="button" onClick={() => setDropdownOpen(v => !v)} aria-expanded={dropdownOpen}>Infos <ChevronDown /></button>{dropdownOpen && <div className="site-nav__dropdown">{infosLinks.map(l => <Link key={l.path} to={l.path}>{l.name}</Link>)}</div>}</div><Link to="/rendez-vous" className="btn-cta btn-cta--nav">Rendez-vous</Link></nav>
      <button className="menu-toggle" type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navigation mobile"><div className="studio-container">{navLinks.map(l => <Link key={l.path} to={l.path}>{l.name}</Link>)}<p>Informations</p>{infosLinks.map(l => <Link key={l.path} className="mobile-nav__sub" to={l.path}>{l.name}</Link>)}<Link to="/rendez-vous" className="btn-cta">Prendre rendez-vous</Link></div></nav>}
  </header>;
};
export default Header;
