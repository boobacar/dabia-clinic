// src/components/HeroSlideshow.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImages from "../assets/heroImages";
import SplitText from "./SplitText";

const SLIDE_MS = 3000; // 5000 ms = 5 s par image
const FADE_S = 1.5; // durée du fondu en secondes

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef(null);

  // Préchargement léger: première et suivante uniquement (réduit la concurrence réseau initiale)
  useEffect(() => {
    [heroImages[0], heroImages[1]].filter(Boolean).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-play avec setTimeout (plus fiable que setInterval ici)
  useEffect(() => {
    if (heroImages.length <= 1) return;

    // Nettoyage de l'ancien timer au changement de vitesse / longueur / index
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // 👉 très important: inclure SLIDE_MS et la longueur
  }, [index, SLIDE_MS, heroImages.length]);

  const currentSrc = useMemo(() => heroImages[index], [index]);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt="Dentiste Dakar - Clinique dentaire DABIA"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          sizes="100vw"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.08 }}
          animate={{ opacity: 1, scale: shouldReduceMotion ? 1 : 1.2 }}
          exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : Math.min(1.2, SLIDE_MS/1000),
            ease: "easeOut",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#ad9d64] text-xl md:text-3xl mb-2"
        >
          Bienvenue à la Clinique Dentaire
        </motion.h2>

        {/* <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-[#ad9d64] font-bold text-5xl md:text-7xl mb-6"
        >
          Dabia
        </motion.h1> */}

        <SplitText
          text="DABIA"
          className="text-[#ad9d64] font-bold text-5xl md:text-7xl mb-6"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border border-[#ad9d64]/40 p-2 text-[#ad9d64] max-w-60 text-sm mb-10 sm:max-w-100 rounded"
        >
          Des soins avancés, un accueil chaleureux, un sourire radieux.
        </motion.p>

        <Link to="/rendez-vous" className="btn-cta">
          Prendre un rendez-vous
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSlideshow;
