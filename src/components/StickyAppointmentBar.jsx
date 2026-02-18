import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, CalendarPlus } from "lucide-react";

export default function StickyAppointmentBar() {
  const { pathname } = useLocation();

  // Évite la redondance sur la page RDV (déjà très orientée conversion)
  if (pathname === "/rendez-vous") return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-white/20 bg-black/80 backdrop-blur px-3 py-2">
      <div className="mx-auto max-w-7xl grid grid-cols-3 gap-2 text-xs">
        <a
          href="tel:+221777039393"
          className="inline-flex items-center justify-center gap-1 rounded-lg bg-white text-black font-semibold py-2"
        >
          <Phone className="w-4 h-4" /> Appeler
        </a>
        <a
          href="https://wa.me/221777039393"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-lg bg-green-500 text-white font-semibold py-2"
        >
          WhatsApp
        </a>
        <Link
          to="/rendez-vous"
          className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#bb2988] text-white font-semibold py-2"
        >
          <CalendarPlus className="w-4 h-4" /> RDV
        </Link>
      </div>
    </div>
  );
}
