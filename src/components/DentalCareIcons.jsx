function DentalSvg({ children }) {
  return (
    <svg
      className="dental-illustration"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function Tooth({ className = "dental-tooth" }) {
  return (
    <path
      className={className}
      d="M24 10.8C20.8 8 16.7 6 12.7 8.7 6 13.2 9.6 21.3 11.9 26.8c1.6 3.8 2 14.5 6.3 14.8 3.5.2 3.2-10.2 5.8-10.2s2.3 10.4 5.8 10.2c4.3-.3 4.7-11 6.3-14.8 2.3-5.5 5.9-13.6-.8-18.1-4-2.7-8.1-.7-11.3 2.1Z"
    />
  );
}

export function AestheticToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <path className="dental-detail" d="M17.5 21.8c1.8 2.7 3.9 4 6.5 4s4.7-1.3 6.5-4" />
      <path className="dental-accent-stroke" d="M36.5 5.5v6M33.5 8.5h6M10 4.5v4M8 6.5h4" />
    </DentalSvg>
  );
}

export function GumToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <path className="dental-gum" d="M11.3 25.4c4.3-3 8.1-.8 12.7-.8s8.4-2.2 12.7.8l-.6 4.1c-4-2.5-8-.8-12.1-.8s-8.1-1.7-12.1.8l-.6-4.1Z" />
      <path className="dental-detail" d="M16.5 27.2c2.2-.8 4.6-.2 7.5-.2s5.3-.6 7.5.2" />
    </DentalSvg>
  );
}

export function ImplantToothIcon() {
  return (
    <DentalSvg>
      <path className="dental-tooth" d="M14.1 7.7c-4.9 3.8-3.8 10.5-1.3 17.2h22.4c2.5-6.7 3.6-13.4-1.3-17.2-3.2-2.5-7-.5-9.9 2.1-2.9-2.6-6.7-4.6-9.9-2.1Z" />
      <path className="dental-accent-fill" d="M18 27h12l-1.2 4H19.2L18 27Z" />
      <path className="dental-implant" d="M20 31h8l-1 3.3h-6L20 31Zm1.2 4.7h5.6l-.9 3h-3.8l-.9-3Zm1.3 4.4h3l-1.5 3.4-1.5-3.4Z" />
      <path className="dental-detail" d="M18 25.3h12" />
    </DentalSvg>
  );
}

export function RootCanalToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <path className="dental-pulp" d="M17 15.5c3.8 1.8 7 4.6 7 8.4v9.7m7-18.1c-3.8 1.8-7 4.6-7 8.4m0 3.4-4.2 8.2m4.2-8.2 4.2 8.2" />
      <circle className="dental-accent-fill" cx="24" cy="22.7" r="2.2" />
    </DentalSvg>
  );
}

export function VeneerToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <path className="dental-veneer" d="M24 12.7c2.5-2.3 5.7-3.8 8.5-1.9 4.3 2.9 1.6 9.4.1 13-1.1 2.7-1.4 11-4.2 11.2-2 .1-1.7-7.5-4.4-7.5V12.7Z" />
      <path className="dental-accent-stroke" d="M27 15.5c2.4 1.1 3.8 3.1 3.8 5.6" />
    </DentalSvg>
  );
}

export function OrthodonticToothIcon() {
  return (
    <DentalSvg>
      <path className="dental-tooth" d="M15.5 9c-2.1-1.8-5.4-2.2-7.2-.1-3.2 3.6-.4 8.3.8 11.3.9 2.2.9 9 3.6 9.2 2 .1 1.4-6.3 2.8-6.3s.8 6.4 2.8 6.3c2.7-.2 2.7-7 3.6-9.2 1.2-3 4-7.7.8-11.3-1.8-2.1-5.1-1.7-7.2.1Z" />
      <path className="dental-tooth" d="M32.5 9c-2.1-1.8-5.4-2.2-7.2-.1-3.2 3.6-.4 8.3.8 11.3.9 2.2.9 9 3.6 9.2 2 .1 1.4-6.3 2.8-6.3s.8 6.4 2.8 6.3c2.7-.2 2.7-7 3.6-9.2 1.2-3 4-7.7.8-11.3-1.8-2.1-5.1-1.7-7.2.1Z" />
      <path className="dental-brace-wire" d="M6 17.5c9 2.1 27 2.1 36 0" />
      <rect className="dental-bracket" x="11.5" y="15.2" width="7" height="6" rx="1.2" />
      <rect className="dental-bracket" x="29.5" y="15.2" width="7" height="6" rx="1.2" />
    </DentalSvg>
  );
}

export function BoneGraftToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <circle className="dental-bone" cx="14" cy="34" r="2.5" />
      <circle className="dental-bone" cx="19" cy="38" r="2.2" />
      <circle className="dental-bone" cx="34" cy="34" r="2.5" />
      <circle className="dental-bone" cx="29" cy="38" r="2.2" />
      <path className="dental-detail" d="M21 33h6m-3-3v6" />
    </DentalSvg>
  );
}

export function WhiteningToothIcon() {
  return (
    <DentalSvg>
      <Tooth className="dental-tooth dental-tooth--bright" />
      <path className="dental-accent-fill" d="m24 14 1.7 4.3L30 20l-4.3 1.7L24 26l-1.7-4.3L18 20l4.3-1.7L24 14Z" />
      <path className="dental-accent-stroke" d="M38 8v6m-3-3h6M9 11v4m-2-2h4" />
    </DentalSvg>
  );
}

export function PediatricToothIcon() {
  return (
    <DentalSvg>
      <Tooth />
      <circle className="dental-eye" cx="19" cy="20" r="1.2" />
      <circle className="dental-eye" cx="29" cy="20" r="1.2" />
      <path className="dental-detail" d="M19.5 25c1.2 1.4 2.7 2.1 4.5 2.1s3.3-.7 4.5-2.1" />
      <path className="dental-heart" d="M37 31.5c-3.8-2.6-7 2-3.1 5.6L37 40l3.1-2.9c3.9-3.6.7-8.2-3.1-5.6Z" />
    </DentalSvg>
  );
}
