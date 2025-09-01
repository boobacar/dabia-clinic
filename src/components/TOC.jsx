// src/components/TOC.jsx
import React from "react";

export default function TOC({ headings = [] }) {
  if (!headings.length) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 100; // ajuste selon la hauteur de ton header
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    // En BrowserRouter, on peut mettre à jour le hash sans recharger
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <aside className="bg-gray-50 border rounded-xl p-4 sticky top-24">
      <p className="font-semibold mb-2">Sur cette page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={`ml-${(h.level - 2) * 3}`}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className="hover:text-[#bb2988]"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
