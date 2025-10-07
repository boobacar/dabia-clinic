// src/components/TOC.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function TOC({ headings = [] }) {
  const [activeId, setActiveId] = useState(null);
  const ids = useMemo(() => headings.map((h) => h.id), [headings]);

  useEffect(() => {
    if (!ids.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        // pick the nearest heading to top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: [0, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join("|")]);

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
    <aside className="bg-gray-50 border rounded-xl p-4 lg:sticky lg:top-24">
      <p className="font-semibold mb-2">Sur cette page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} style={{ marginLeft: Math.max(0, (h.level - 2) * 12) }}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className={`hover:text-[#bb2988] ${activeId === h.id ? 'text-[#bb2988] font-semibold' : ''}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
