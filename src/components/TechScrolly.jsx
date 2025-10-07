import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sticky scrollytelling: sticky image on the left; right column text sections update the image when they enter viewport.
export default function TechScrolly({ items = [] }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const refs = useRef([]);
  const containerRef = useRef(null);

  const list = useMemo(() => items || [], [items]);

  useEffect(() => {
    const mm = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mm.matches);
    update();
    mm.addEventListener("change", update);
    return () => mm.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!refs.current.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const idx = Number(en.target.getAttribute("data-idx")) || 0;
            setActive(idx);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [list.length]);

  if (isMobile) {
    // Mobile: simple stacked cards (no sticky)
    return (
      <section className="mt-8 space-y-6">
        {list.map((t, i) => (
          <article
            key={t.slug || i}
            className="rounded-2xl border bg-white shadow-sm overflow-hidden"
          >
            {t.image && (
              <img
                src={t.image}
                alt={t.titre}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-5">
              <h3 className="text-[#ad9d64] text-xl font-semibold">
                {t.titre}
              </h3>
              <p className="text-gray-700 text-sm mt-1">{t.description}</p>
            </div>
          </article>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
    >
      {/* Sticky visual */}
      <div className="md:sticky md:top-28 bg-white rounded-2xl  shadow-sm overflow-hidden">
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={list[active]?.image || active}
              src={list[active]?.image}
              alt={list[active]?.titre || ""}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0.0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <p className="text-sm">{list[active]?.titre}</p>
          </div>
        </div>
      </div>

      {/* Text blocks */}
      <div className="space-y-6">
        {list.map((t, i) => (
          <article
            key={t.slug || i}
            ref={(el) => (refs.current[i] = el)}
            data-idx={i}
            className={`p-5 rounded-2xl  bg-white shadow-sm transition ${
              i === active ? "ring-1 ring-[#bb2988]/100" : ""
            }`}
          >
            <h3 className="text-[#ad9d64] text-xl font-semibold">{t.titre}</h3>
            <p className="text-gray-700 text-sm mt-1">{t.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
