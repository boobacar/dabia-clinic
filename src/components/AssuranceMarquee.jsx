import React from "react";

// Continuous marquee. Accepts any logo array via props.
export default function AssuranceMarquee({
  logos = [],
  speed = 40,
  className = "",
}) {
  const list = logos.length ? logos : [];

  return (
    <div className={`overflow-hidden bg-white ${className}`}>
      {/* Wrapper with gap-10 (2.5rem) to separate the two tracks */}
      <div className="flex items-center gap-10 w-max">
        {/* Track 1 */}
        <div
          className="flex shrink-0 items-center justify-around gap-10"
          style={{
            minWidth: "100%",
            animation: `dabia-marquee ${speed}s linear infinite`,
            willChange: "transform",
          }}
        >
          {list.map((src, i) => (
            <img
              key={`t1-${i}`}
              src={src}
              alt="Assurance"
              className="h-10 w-auto object-contain opacity-90"
              loading="eager"
            />
          ))}
        </div>

        {/* Track 2 (Duplicate) */}
        <div
          className="flex shrink-0 items-center justify-around gap-10"
          style={{
            minWidth: "100%",
            animation: `dabia-marquee ${speed}s linear infinite`,
            willChange: "transform",
          }}
          aria-hidden="true"
        >
          {list.map((src, i) => (
            <img
              key={`t2-${i}`}
              src={src}
              alt="Assurance"
              className="h-10 w-auto object-contain opacity-90"
              loading="eager"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dabia-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2.5rem)); } /* -100% (width) - 2.5rem (gap-10) */
        }
      `}</style>
    </div>
  );
}
