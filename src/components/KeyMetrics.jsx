import React, { useEffect, useRef, useState } from "react";
import { Users, ShieldCheck, Cpu, Handshake } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";

function useCountUp(target, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start) return; // attend la visibilité
    if (reduce) {
      setValue(target);
      return;
    }
    setValue(0);
    startRef.current = null;
    const step = (t) => {
      if (!startRef.current) startRef.current = t;
      const p = Math.min(1, (t - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.floor(eased * target));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [target, duration, start, reduce]);

  return value;
}

function MetricCard({ icon: Icon, label, target, suffix = "+" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const value = useCountUp(target, 1600, inView);
  return (
    <div
      ref={ref}
      className="gradient-card glow-hover rounded-xl bg-white p-5 flex items-center gap-4 shadow-sm"
    >
      <div className="shrink-0 rounded-lg bg-pink-50 text-[#bb2988] p-3">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-2xl font-extrabold leading-none">
          {value}
          {suffix}
        </div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}

/**
 * KeyMetrics – Encarts "chiffres clés" avec compteurs animés.
 * Pour intégrer de mini-animations Lottie plus tard, on pourra ajouter
 * un prop `lottieSrc` à la place de `icon` et charger dynamiquement.
 */
export default function KeyMetrics({ className = "" }) {
  const metrics = [
    { icon: Users, label: "Patients soignés", target: 6000 },
    { icon: ShieldCheck, label: "Années d’expérience", target: 10 },
    { icon: Cpu, label: "Technologies avancées", target: 10 },
    { icon: Handshake, label: "Assurances partenaires", target: 20 },
  ];

  return (
    <section className={`py-10 ${className}`} aria-label="Chiffres clés">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricCard
              key={i}
              icon={m.icon}
              label={m.label}
              target={m.target}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
