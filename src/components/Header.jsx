// ... imports ...
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";

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
    { name: "Infos", isDropdown: true },
    { name: "Nous Rejoindre", path: "/rejoindre" }, // 🔁 remplacé
  ];

  const infosLinks = [
    { name: "Assurances", path: "/infos/assurances" },
    {
      name: "Conseils après visite (Post-opération)",
      path: "/infos/post-visite",
    },
    { name: "Espace Enfants", path: "/infos/enfants" },
    { name: "Technologie", path: "/infos/technologie" }, // ➕ ajouté
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[#ad9d64] text-xl font-bold flex items-center gap-2"
        >
          <img
            className="w-10 object-contain rounded-full"
            src={logo}
            alt="logo"
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
          <Link
            to="/rendez-vous"
            className="inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            Rendez-Vous
          </Link>
        </nav>

        {/* Mobile button */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
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
          <Link
            to="/rendez-vous"
            className="inline-block bg-[#bb2988] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
