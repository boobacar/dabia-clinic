import React from "react";

export default function AssuranceMarquee({
  logos = [],
  speed = 40,
  className = "",
}) {
  if (!logos.length) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max items-center gap-10"
        style={{ animation: `assurance-scroll ${speed}s linear infinite` }}
      >
        {[...logos, ...logos].map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt="Assurance"
            className="h-10 w-auto object-contain opacity-90"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <style>{`
        @keyframes assurance-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
