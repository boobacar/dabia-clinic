import React, { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

export default function EmergencyCallButton({ phone = "+221777039393" }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 flex-row-reverse">
      <a
        href={`tel:${phone}`}
        aria-label="Appeler en urgence"
        title="Appel d’urgence"
        className="pulse-ring cta-surface text-white shadow-xl w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
      <span className="hidden md:inline-flex btn-cta btn-cta-sm pointer-events-none select-none">
        Urgence
      </span>
    </div>
  );
}
