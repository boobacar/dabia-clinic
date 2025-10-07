import React from "react";
import logo from "../assets/logo.jpg";

export default function LoadingOverlay({ fullScreen = false, label = "Chargement" }) {
  const Wrapper = ({ children }) => (
    <div
      role="status"
      aria-live="polite"
      className={
        fullScreen
          ? "fixed inset-0 z-40 grid place-items-center bg-white/90 backdrop-blur-sm"
          : "min-h-[50vh] grid place-items-center py-24"
      }
    >
      {children}
    </div>
  );

  return (
    <Wrapper>
      <div className="flex flex-col items-center gap-3">
        <img
          src={logo}
          alt={label}
          width={72}
          height={72}
          className="w-16 h-16 rounded-full spin-slow select-none"
          draggable={false}
        />
        <span className="text-sm text-gray-600">{label}…</span>
      </div>
    </Wrapper>
  );
}

