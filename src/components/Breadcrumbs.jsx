import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({
  items = [{ label: "Accueil", href: "/" }],
}) {
  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-300">/</span>}
            {it.href ? (
              <Link className="hover:text-[#bb2988]" to={it.href}>
                {it.label}
              </Link>
            ) : (
              <span className="text-gray-700">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
