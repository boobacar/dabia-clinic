// ... imports ...
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.jpg";
import Magnetic from "./Magnetic";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Compétences", path: "/all-competences" },
    { name: "Urgence", path: "/urgence-dentaire-dakar" },
    { name: "Infos", isDropdown: true },
    { name: "Blog", path: "/blog" },
    { name: "Nous Rejoindre", path: "/rejoindre" },
  ];

  const infosLinks = [
    { name: "Assurances", path: "/infos/assurances" },
    {
      name: "Conseils après visite (Post-opération)",
      path: "/infos/post-visite",
    },
    { name: "Espace Enfants", path: "/infos/enfants" },
    { name: "Technologie", path: "/infos/technologie" },
  ];

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const mobileIconClass = open || scrolled ? "text-white" : "text-[#bb2988]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-black/60 backdrop-blur-md shadow"
      }`}
    >
      {/* Top info bar */}
      <div className="topbar-glassy text-white text-xs">
        {/* Mobile: marquee */}
        <div className="block sm:hidden">
          <div className="overflow-hidden">
            <div className="marquee-track flex items-center gap-6 py-1 px-4 whitespace-nowrap">
              {[0, 1].map((k) => (
                <div key={k} className="flex items-center gap-6">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <a href="tel:+221777039393" className="hover:underline">
                      +221 77 703 93 93
                    </a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <a href="tel:+221338684704" className="hover:underline">
                      +221 33 868 47 04
                    </a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <a href="mailto:cliniquedentairedabia@gmail.com" className="hover:underline">
                      cliniquedentairedabia@gmail.com
                    </a>
                  </span>
                  <span className="opacity-60">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/tablette: statique */}
        <div className="hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+221777039393" className="hover:underline">
                  +221 77 703 93 93
                </a>
              </span>
              <span className="hidden md:flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+221338684704" className="hover:underline">
                  +221 33 868 47 04
                </a>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:cliniquedentairedabia@gmail.com" className="hover:underline">
                cliniquedentairedabia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* JSON-LD SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: navLinks.filter((n) => !n.isDropdown).map((n) => n.name),
            url: navLinks
              .filter((n) => !n.isDropdown)
              .map((n) => {
                const base =
                  typeof window !== "undefined" && window.location?.origin
                    ? window.location.origin
                    : "https://www.cliniquedentairedabia.com";
                return `${base}${n.path}`;
              }),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[#ad9d64] text-xl font-bold flex items-center gap-2"
        >
          <img
            className="w-10 object-contain rounded-full"
            src={logo}
            alt="Dentiste Dakar - Clinique dentaire DABIA"
          />
          <span className="hidden sm:inline">Clinique Dentaire DABIA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) =>
            link.isDropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-[#ad9d64] font-bold hover:text-[#bb2988] flex items-center gap-1">
                  Infos <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md z-10 w-48 ">
                    {infosLinks.map((sub, j) => (
                      <Link
                        to={sub.path}
                        key={j}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#bb2988] hover:text-white"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={i}
                to={link.path}
                className="text-[#ad9d64] font-bold hover:text-[#bb2988] transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                {link.name}
              </Link>
            )
          )}
          <Magnetic>
            <Link
              to="/rendez-vous"
              className="ripple btn-cta"
            >
              Rendez‑Vous
            </Link>
          </Magnetic>
        </nav>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={mobileIconClass}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <X className={`w-6 h-6 ${mobileIconClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${mobileIconClass}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-black/80 px-4 pb-4 shadow-sm">
          {navLinks.map((link, i) =>
            link.isDropdown ? (
              <div key={i} className="text-white">
                <span className="block py-2 font-semibold">Infos</span>
                <div className="pl-4 space-y-1">
                  {infosLinks.map((sublink, j) => (
                    <Link
                      key={j}
                      to={sublink.path}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-sm text-white/80 hover:text-[#bb2988]"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block py-2 text-white hover:text-[#bb2988]"
              >
                {link.name}
              </Link>
            )
          )}
          <Link to="/rendez-vous" className="btn-cta">
            Prendre un rendez‑vous
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
