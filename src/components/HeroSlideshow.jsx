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
  // Démarre le slideshow seulement après le rendu initial pour laisser la LCP se stabiliser
  const [enableLoop, setEnableLoop] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef(null);

  // Préchargement léger: première et suivante uniquement (réduit la concurrence réseau initiale)
  useEffect(() => {
    // heroImages is now an array of objects { desktop, mobile }
    [heroImages[0], heroImages[1]].filter(Boolean).forEach((imgObj) => {
      // Preload desktop
      const imgD = new Image();
      imgD.src = imgObj.desktop;
      // Preload mobile (browser cache will handle it if needed)
      const imgM = new Image();
      imgM.src = imgObj.mobile;
    });
  }, []);

  // Ne lance l'animation qu'en idle pour ne pas dégrader le LCP
  useEffect(() => {
    const cb =
      (typeof window !== "undefined" && window.requestIdleCallback) ||
      ((fn) => setTimeout(fn, 350));
    const handle = cb(() => setEnableLoop(true));
    return () => {
      if (typeof window !== "undefined" && window.cancelIdleCallback) {
        try {
          window.cancelIdleCallback(handle);
        } catch {}
      } else {
        clearTimeout(handle);
      }
    };
  }, []);

  // Auto-play avec setTimeout (plus fiable que setInterval ici)
  useEffect(() => {
    if (!enableLoop || heroImages.length <= 1) return;

    // Nettoyage de l'ancien timer au changement de vitesse / longueur / index
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // 👉 très important: inclure SLIDE_MS et la longueur
  }, [index, SLIDE_MS, heroImages.length, enableLoop]);

  const currentObj = useMemo(() => heroImages[index], [index]);
  const isSlideshow = enableLoop && heroImages.length > 1;
  const heroAlt = "Dentiste Dakar - Clinique dentaire DABIA";

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {isSlideshow ? (
        <AnimatePresence initial={false}>
          <motion.img
            key={currentObj.desktop}
            src={currentObj.desktop}
            srcSet={`${currentObj.mobile} 640w, ${currentObj.desktop} 1600w`}
            sizes="100vw"
            alt={heroAlt}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: shouldReduceMotion ? 1 : 1.2 }}
            exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : Math.min(1.2, SLIDE_MS / 1000),
              ease: "easeOut",
            }}
          />
        </AnimatePresence>
      ) : (
        <img
          src={currentObj.desktop}
          srcSet={`${currentObj.mobile} 640w, ${currentObj.desktop} 1600w`}
          sizes="100vw"
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      )}

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
          className="text-[#ad9d64] text-2xl md:text-3xl mb-2"
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
          className="text-[#ad9d64] font-bold text-7xl md:text-7xl mb-6"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag="h1"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-2 border-[#ad9d64]/40 p-2 text-[#ad9d64] max-w-60 text-md text-justify mb-10 sm:max-w-100 rounded-lg"
        >
          Clinique dentaire moderne à Dakar : implants, orthodontie, urgences et
          esthétique du sourire, avec un accueil chaleureux et un plateau
          technique de pointe.
        </motion.p>

        <div className="flex flex-col items-center gap-6">
          <Link to="/rendez-vous" className="btn-cta">
            Prendre un rendez-vous
          </Link>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-15 sm:bottom-40 md:bottom-40 flex flex-col items-center gap-3">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.95, y: [0, 42, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ad9d64]/70 bg-gradient-to-b from-white/15 to-white/0 text-[#f2e7b2] shadow-[0_18px_60px_-20px_rgba(0,0,0,0.95)] ring-1 ring-white/30 backdrop-blur-[4px]"
        >
          <span className="sr-only">Faites défiler pour découvrir</span>
          <svg
            className="h-7 w-7 drop-shadow-[0_0_14px_rgba(173,157,100,0.8)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 10l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
