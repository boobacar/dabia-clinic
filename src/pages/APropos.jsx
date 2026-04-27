import React from "react";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import sao from "../assets/sao.webp";

export default function APropos() {
  const title = "À propos – Clinique Dentaire DABIA (Dakar)";
  const description =
    "Découvrez l’histoire, les valeurs, l’équipe et les engagements qualité de la Clinique Dentaire DABIA à Dakar (Liberté 6).";

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: title,
      description,
      url: "https://www.cliniquedentairedabia.com/apropos",
      mainEntity: {
        "@type": "Dentist",
        name: "Clinique Dentaire DABIA",
        url: "https://www.cliniquedentairedabia.com/",
      },
    },
  ];

  return (
    <main className="mt-20 pt-20 pb-14 px-4 max-w-5xl mx-auto">
      <Seo
        title={title}
        description={description}
        jsonLd={schema}
        canonical="https://www.cliniquedentairedabia.com/apropos"
      />

      <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />

      <h1 className="text-3xl text-[#ad9d64] font-extrabold mb-4">
        À propos de la Clinique Dentaire DABIA
      </h1>

      <p className="text-gray-700 leading-relaxed">
        Située à <strong>Sicap Foire (Liberté 6)</strong>, la Clinique Dentaire DABIA
        accompagne les patients de Dakar avec une approche simple : des soins
        précis, des explications claires et un suivi humain du premier rendez-vous
        jusqu’au contrôle post-traitement. Notre équipe prend en charge les soins
        du quotidien, les urgences dentaires, l’esthétique du sourire et les plans
        de traitement plus complexes (implants, réhabilitations, orthodontie).
      </p>

      <section className="mt-8 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Notre mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Offrir des soins dentaires modernes, durables et adaptés à chaque
              profil patient. Nous privilégions la prévention, la conservation des
              dents naturelles quand c’est possible, et des plans de traitement
              progressifs qui respectent vos contraintes médicales, esthétiques et
              budgétaires.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Notre vision du soin</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Écoute active et diagnostic personnalisé</li>
              <li>Information transparente sur les options thérapeutiques</li>
              <li>Confort au fauteuil et gestion de l’appréhension</li>
              <li>Suivi post-soins structuré pour stabiliser les résultats</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Équipe & expertise clinique</h2>
            <p className="text-gray-700 leading-relaxed">
              Sous la supervision du <strong>Dr Fatoumata SAO</strong>, la clinique
              combine expérience clinique, protocoles actualisés et coordination
              entre praticiens, assistantes et secrétariat. Cette organisation nous
              permet de garder des délais de rendez-vous cohérents, notamment pour
              les urgences et les traitements nécessitant plusieurs étapes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Plateau technique</h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-1">
              <li>Imagerie 3D (CBCT) pour planification implantaire</li>
              <li>Scanner intra-oral pour empreintes numériques de précision</li>
              <li>Caméra intra-orale pour expliquer le diagnostic en image</li>
              <li>Chaîne de stérilisation traçable (procédures strictes)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Ce que cela change pour vous</h2>
            <p className="text-gray-700 leading-relaxed">
              Des diagnostics plus fiables, des plans de traitement mieux anticipés,
              des rendez-vous plus efficaces et un résultat plus prévisible dans le
              temps. Notre objectif n’est pas seulement de traiter une douleur, mais
              d’améliorer durablement votre santé bucco-dentaire.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Questions fréquentes</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>La clinique prend-elle les urgences dentaires ?</strong>
                <br />
                Oui, nous avons un circuit dédié pour les douleurs aiguës,
                infections, abcès, fractures ou traumatismes dentaires.
              </p>
              <p>
                <strong>Comment se passe une première consultation ?</strong>
                <br />
                Entretien, examen clinique, imagerie si nécessaire, puis proposition
                de plan de traitement clair avec priorités et devis.
              </p>
              <p>
                <strong>Proposez-vous un suivi après les soins ?</strong>
                <br />
                Oui. Nous planifions les contrôles indispensables pour vérifier la
                cicatrisation, l’hygiène et la stabilité du résultat.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link to="/rendez-vous" className="btn-cta">
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <aside>
          <img
            src={sao}
            alt="Dr Fatoumata SAO, Clinique Dentaire DABIA à Dakar"
            className="rounded-xl shadow mb-4"
            loading="lazy"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Dr Fatoumata SAO – Fondatrice de la Clinique Dentaire DABIA. Une
            approche centrée sur la précision médicale, l’esthétique du sourire et
            l’accompagnement patient.
          </p>
        </aside>
      </section>
    </main>
  );
}
