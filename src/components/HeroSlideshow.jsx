// src/components/HeroSlideshow.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImages from "../assets/heroImages";

const SLIDE_MS = 3000; // 5000 ms = 5 s par image
const LOOP_START_DESKTOP_MS = 1800;
const LOOP_START_MOBILE_MS = 4500;

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0);
  // Démarre le slideshow seulement après le rendu initial pour laisser la LCP se stabiliser
  const [enableLoop, setEnableLoop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef(null);
  const startRef = useRef(null);

  // Ne lance l'animation qu'en idle (+ délai) pour protéger la fenêtre LCP
  useEffect(() => {
    const cb =
      (typeof window !== "undefined" && window.requestIdleCallback) ||
      ((fn) => setTimeout(fn, 350));

    const handle = cb(() => {
      const startDelay = isMobile ? LOOP_START_MOBILE_MS : LOOP_START_DESKTOP_MS;
      startRef.current = setTimeout(() => setEnableLoop(true), startDelay);
    });

    return () => {
      if (typeof window !== "undefined" && window.cancelIdleCallback) {
        try {
          window.cancelIdleCallback(handle);
        } catch {
          // noop
        }
      } else {
        clearTimeout(handle);
      }
      if (startRef.current) clearTimeout(startRef.current);
    };
  }, [isMobile]);

  // Réduit les animations décoratives sur mobile (batch perf prudent)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Auto-play avec setTimeout (plus fiable que setInterval ici)
  useEffect(() => {
    if (!enableLoop || isMobile || heroImages.length <= 1) return;

    // Nettoyage de l'ancien timer au changement de vitesse / longueur / index
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // 👉 très important: inclure SLIDE_MS et la longueur
  }, [index, enableLoop, isMobile]);

  const currentObj = useMemo(() => heroImages[index], [index]);
  const firstHero = heroImages[0];
  const isSlideshow = enableLoop && !isMobile && heroImages.length > 1;
  const heroAlt =
    "Dentiste Dakar - Clinique dentaire DABIA - Clinique dentaire dakar";

  return (
    <>
      {firstHero && (
        <>
          <link
            rel="preload"
            as="image"
            href={firstHero.mobile}
            media="(max-width: 640px)"
            fetchPriority="high"
          />
          <link
            rel="preload"
            as="image"
            href={firstHero.desktop}
            media="(min-width: 641px)"
            fetchPriority="high"
          />
        </>
      )}
      <section className="relative h-[100svh] min-h-[100svh] overflow-hidden bg-black">
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
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: shouldReduceMotion || isMobile ? 1 : 0 }}
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
        initial={isMobile ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: isMobile ? 0 : 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h2
          initial={isMobile ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0 : 0.2 }}
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

        <motion.h1
          initial={isMobile ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0 : 0.35 }}
          className="text-[#ad9d64] font-bold text-7xl md:text-7xl mb-6"
        >
          DABIA
        </motion.h1>

        <motion.p
          initial={isMobile ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? 0 : 0.5 }}
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

      {!isMobile && (
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
      )}
    </section>
    </>
  );
};

export default HeroSlideshow;
