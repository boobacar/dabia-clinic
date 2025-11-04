// src/pages/Galerie.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import avantApresImages from "../assets/avantApresImages";

// Quelques photos libres du site (tu pourras en ajouter autant que tu veux)
import photoA from "../assets/apropos.webp";
import photoB from "../assets/rendezvous-dabia.webp";
import photoC from "../assets/assistante.webp";
import photoD from "../assets/assistanteDent.webp";
import photoE from "../assets/admin.webp";
import photoF from "../assets/sao.webp";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Split,
} from "lucide-react";

const clinicPhotos = [photoA, photoB, photoC, photoD, photoE, photoF];

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const src = images[index];
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
      <button
        aria-label="Fermer"
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <button
        aria-label="Précédent"
        className="absolute left-3 md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
        onClick={onPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt="Agrandissement"
        className="max-w-6xl max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-xl"
      />
      <button
        aria-label="Suivant"
        className="absolute right-3 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
        onClick={onNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export default function Galerie() {
  const canonical = "https://www.cliniquedentairedabia.com/galerie";
  const [tab, setTab] = useState("aa"); // aa = avant/après, photos = clinique
  const [lb, setLb] = useState({ open: false, index: 0 });
  const images = useMemo(() => clinicPhotos, []);
  const openAt = (i) => setLb({ open: true, index: i });
  const closeLb = () => setLb({ open: false, index: 0 });
  const prevLb = () =>
    setLb((s) => ({
      open: true,
      index: (s.index - 1 + images.length) % images.length,
    }));
  const nextLb = () =>
    setLb((s) => ({ open: true, index: (s.index + 1) % images.length }));

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Galerie photos – Avant/Après et vues de la clinique"
        description="Découvrez des résultats avant/après et des photos de la Clinique Dentaire DABIA à Dakar."
        url={canonical}
        canonical={canonical}
        type="website"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Galerie" }]}
      />

      {/* Hero bandeau couleur du site */}
      <div className="rounded-2xl p-6 md:p-8 mb-8 bg-gradient-to-br from-[#bb2988]/10 via-white to-[#ad9d64]/10 border">
        <div className="flex items-start md:items-center gap-3 md:gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]">
              Galerie photos
            </h1>
            <p className="text-gray-700 mt-2">
              Avant/Après et images de la clinique. Tous les visuels respectent
              la confidentialité et visent à illustrer nos résultats et notre
              environnement de soins.
            </p>
          </div>
        </div>
        {/* Tabs */}
        <div className="mt-5 inline-flex rounded-full bg-white border overflow-hidden text-sm">
          <button
            onClick={() => setTab("aa")}
            className={`px-4 py-2 ${
              tab === "aa" ? "bg-[#bb2988] text-white" : "hover:bg-gray-50"
            }`}
          >
            Avant/Après{" "}
            <span className="opacity-80">({avantApresImages.length})</span>
          </button>
          <button
            onClick={() => setTab("photos")}
            className={`px-4 py-2 ${
              tab === "photos" ? "bg-[#bb2988] text-white" : "hover:bg-gray-50"
            }`}
          >
            Photos de la clinique{" "}
            <span className="opacity-80">({clinicPhotos.length})</span>
          </button>
        </div>
      </div>

      {tab === "aa" && (
        <>
          <h2 className="text-2xl font-semibold text-[#ad9d64] mb-4">
            Résultats Avant/Après
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {avantApresImages.map((pair, idx) => (
              <motion.div
                key={`aa-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ReactCompareSlider
                  className="rounded-lg shadow-md overflow-hidden h-56 md:h-64 lg:h-80"
                  itemOne={
                    <ReactCompareSliderImage
                      src={pair.before}
                      alt={`Avant ${idx + 1}`}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={pair.after}
                      alt={`Après ${idx + 1}`}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  }
                />
              </motion.div>
            ))}
          </div>
        </>
      )}

      {tab === "photos" && (
        <>
          <h2 className="text-2xl font-semibold text-[#ad9d64] mb-4">
            Photos de la clinique
          </h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clinicPhotos.map((src, i) => (
              <motion.button
                key={`ph-${i}`}
                onClick={() => openAt(i)}
                className="rounded-lg overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-[#bb2988]"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={src}
                  alt={`Clinique DABIA — photo ${i + 1}`}
                  className="w-full h-40 md:h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.button>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <div className="mt-12 text-center">
        <a href="/rendez-vous" className="btn-cta">
          Prendre rendez‑vous
        </a>
      </div>

      {lb.open && (
        <Lightbox
          images={images}
          index={lb.index}
          onClose={closeLb}
          onPrev={prevLb}
          onNext={nextLb}
        />
      )}
    </section>
  );
}
