import React from "react";

// Continuous marquee. Accepts any logo array via props.
export default function AssuranceMarquee({
  logos = [],
  speed = 40,
  className = "",
}) {
  const list = logos.length ? logos : [];
  const repeated = list.concat(list).concat(list); // 3 fois pour boucle continue
  return (
    <div className={`overflow-hidden bg-white ${className}`}>
      <div
        className="flex items-center gap-10"
        style={{
          width: "max-content",
          animation: `dabia-marquee ${speed}s linear infinite`,
          willChange: "transform",
          // léger masque aux bords pour éviter les ruptures visuelles
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {repeated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Assurance"
            className="h-10 w-auto object-contain opacity-90"
            loading="lazy"
          />
        ))}
      </div>
      <style>{`
        @keyframes dabia-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
      `}</style>
    </div>
  );
}
