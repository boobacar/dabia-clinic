import React from "react";
import Seo from "../components/Seo";
import NAP from "../components/NAP";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import sao from "../assets/sao.webp";

export default function APropos() {
  const title = "À propos – Clinique Dentaire DABIA (Dakar)";
  const description =
    "Notre équipe, notre philosophie de soins, nos équipements modernes et notre engagement qualité à Dakar.";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: title,
      description: description,
      url: "https://www.cliniquedentairedabia.com/a-propos",
    },
  ];

  return (
    <main className="mt-20 pt-20 pb-14 px-4 max-w-5xl mx-auto">
      <Seo
        title={title}
        description={description}
        jsonLd={schema}
        canonical="https://www.cliniquedentairedabia.com/a-propos"
      />
      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
      <h1 className="text-3xl text-[#ad9d64] font-extrabold mb-4">
        À propos de la Clinique Dentaire DABIA
      </h1>

      <section className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-2">Notre mission</h2>
          <p className="text-gray-700">
            Offrir des soins modernes, indolores et esthétiques, avec
            transparence et pédagogie. Prévention, bien-être et résultats
            durables guident nos décisions cliniques.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">
            Équipe & qualifications
          </h2>
          <p className="text-gray-700">
            <strong>Dr Fatoumata SAO</strong> – Chirurgienne-dentiste (diplômes,
            formations, congrès). Expérience en esthétique, implantologie,
            endodontie moderne. Encadrement des assistantes et hygiénistes.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-2">Technologies</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              Imagerie 3D (CBCT) pour planification implantaire et endodontie
              complexe
            </li>
            <li>Laser dentaire (confort et cicatrisation)</li>
            <li>Caméra intra-orale pour le diagnostic visuel partagé</li>
            <li>Chaîne de stérilisation traçable</li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-2">Nos valeurs</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Écoute & explications claires</li>
            <li>Devis transparents avant tout acte</li>
            <li>Suivi post-soins et prévention</li>
          </ul>

          <div className="mt-6">
            <Link
              to="/rendez-vous"
              className="inline-flex px-5 py-3 rounded-full bg-[#bb2988] text-white hover:bg-[#a32678]"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <aside>
          <img
            src={sao}
            alt="Dr Fatoumata SAO"
            className="rounded-xl shadow mb-4"
            loading="lazy"
          />
          <div className="text-sm text-gray-600">
            <br />
          </div>
        </aside>
      </section>
    </main>
  );
}
