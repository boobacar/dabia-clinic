import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import technologies from "../data/technologies";

export default function TechnologieDetail() {
  const { slug } = useParams();
  const tech = useMemo(() => technologies.find((t) => t.slug === slug), [slug]);

  if (!tech) {
    return (
      <section className="py-20 px-4 max-w-5xl mx-auto mt-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Technologie", href: "/infos/technologie" },
            { label: "Introuvable" },
          ]}
        />
        <h1 className="text-3xl font-bold text-red-600 mb-4">Technologie introuvable</h1>
        <p className="text-gray-600">
          Retour à la page {" "}
          <Link className="text-[#bb2988] underline" to="/infos/technologie">
            Technologies
          </Link>
          .
        </p>
      </section>
    );
  }

  const canonical = `https://www.cliniquedentairedabia.com/infos/technologie/${tech.slug}`;

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto mt-20">
      <Seo
        title={`${tech.titre} – Technologies dentaires à Dakar`}
        description={tech.description}
        canonical={canonical}
        url={canonical}
        image={tech.image}
        type="article"
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Technologie", href: "/infos/technologie" },
          { label: tech.titre },
        ]}
      />

      <motion.h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64] mb-2" initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>
        {tech.titre}
      </motion.h1>
      <motion.p className="text-gray-700 mb-6" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.1, duration:0.4 }}>
        {tech.description}
      </motion.p>

      <motion.div className="p-6 rounded-xl border bg-white shadow-sm" initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, amount:0.4 }} transition={{ duration:0.4 }}>
        {tech.image && (
          <img
            src={tech.image}
            alt={tech.titre}
            className="w-full h-auto rounded-lg mb-5"
            loading="lazy"
            decoding="async"
          />
        )}

        {tech.details && (
          <div className="prose prose-gray max-w-none">
            <p className="whitespace-pre-line text-gray-800 leading-relaxed">{tech.details}</p>
          </div>
        )}
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/infos/technologie"
          className="inline-block px-5 py-3 rounded-full border hover:bg-gray-50"
        >
          ← Retour aux technologies
        </Link>
        <Link
          to="/rendez-vous"
          className="inline-block bg-[#bb2988] text-white px-5 py-3 rounded-full"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}
