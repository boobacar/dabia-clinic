import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "221777039393"; // Updated with Dabia Clinic's number
  const message = encodeURIComponent(
    "Bonjour, j'aimerais prendre rendez-vous ou avoir des informations."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Discuter sur WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 group-hover:animate-ping"></div>
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
