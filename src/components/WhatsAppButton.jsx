import React from "react";

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
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Discuter sur WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-green-700 opacity-0 group-hover:animate-ping"></div>
      <svg
        className="h-7 w-7"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.04 3.2A12.68 12.68 0 0 0 5.1 22.3L3.2 29l6.86-1.8A12.66 12.66 0 1 0 16.04 3.2Zm0 23.16c-2.05 0-4.05-.6-5.76-1.72l-.41-.27-4.07 1.07 1.09-3.96-.27-.41a10.42 10.42 0 1 1 9.42 5.29Zm5.72-7.82c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.28 3.25c.16.21 2.22 3.38 5.38 4.74.75.32 1.34.52 1.79.66.75.24 1.44.2 1.98.12.6-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
