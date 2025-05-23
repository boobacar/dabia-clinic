import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // effet au scroll pour modifier l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Compétences", path: "/all-competences" },
    { name: "Équipe", path: "/personnel" },
    { name: "Rendez-vous", path: "/rendez-vous" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
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
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-[#ad9d64] font-bold hover:text-[#bb2988] transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-black/80 px-4 pb-4 shadow-sm">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-white hover:text-[#bb2988] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
