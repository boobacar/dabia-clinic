// src/pages/BlogTag.jsx
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { POSTS } from "../data/posts";
import { slugify } from "../utils/slugify";

const PAGE_SIZE = 12;

// SEO metadata for top tags
const TAG_META = {
  "dentiste-dakar": {
    label: "Dentiste Dakar",
    title: "Dentiste à Dakar – Articles & conseils | Clinique DABIA",
    description:
      "Tous nos articles sur les soins dentaires à Dakar : urgences, tarifs, implants, orthodontie. La Clinique DABIA vous informe pour mieux prendre soin de vos dents.",
  },
  "urgence-dentaire": {
    label: "Urgence dentaire",
    title: "Urgence dentaire à Dakar – Que faire ? | Clinique DABIA",
    description:
      "Douleur aiguë, dent cassée, abcès ? Retrouvez tous nos guides sur les urgences dentaires à Dakar : symptômes, premiers soins et quand appeler la clinique.",
  },
  "implant-dentaire": {
    label: "Implant dentaire",
    title: "Implant dentaire Dakar – Prix, étapes & conseils | DABIA",
    description:
      "Tout sur l'implantologie dentaire à Dakar : coût des implants, déroulement de l'intervention, suites opératoires et alternatives. Guides complets par la Clinique DABIA.",
  },
  orthodontie: {
    label: "Orthodontie",
    title: "Orthodontie à Dakar – Aligneurs, Bagues & Prix | DABIA",
    description:
      "Aligneurs invisibles ou brackets : nos articles sur l'orthodontie adulte et enfant à Dakar. Prix, durée de traitement et conseils pratiques de la Clinique DABIA.",
  },
  "blanchiment-des-dents": {
    label: "Blanchiment dentaire",
    title: "Blanchiment des dents à Dakar – Guide complet | DABIA",
    description:
      "Tout ce que vous devez savoir sur le blanchiment dentaire à Dakar : techniques, durée, prix et conseils post-traitement. Articles d'experts de la Clinique DABIA.",
  },
  prix: {
    label: "Prix & tarifs",
    title: "Prix soins dentaires à Dakar – Tarifs & devis | DABIA",
    description:
      "Combien coûte un dentiste à Dakar ? Retrouvez nos articles sur les prix des soins : implants, détartrage, orthodontie, couronne. Transparence garantie par la Clinique DABIA.",
  },
  "tarif-dentiste-dakar": {
    label: "Tarifs dentiste Dakar",
    title: "Tarifs dentiste à Dakar 2026 – Guide des prix | DABIA",
    description:
      "Consultez nos guides sur les tarifs dentaires à Dakar : prix d'une consultation, d'un détartrage, d'un implant ou d'un appareil. Devis clair à la Clinique DABIA.",
  },
  prevention: {
    label: "Prévention",
    title: "Prévention dentaire à Dakar – Conseils & Hygiène | DABIA",
    description:
      "Brossage, alimentation, fluor, contrôles réguliers : tous nos articles sur la prévention dentaire pour adultes et enfants à Dakar. Clinique Dentaire DABIA.",
  },
  "douleur-dentaire": {
    label: "Douleur dentaire",
    title: "Douleur dentaire – Causes, remèdes & quand consulter | DABIA",
    description:
      "Mal de dents, sensibilité, douleur nocturne : nos articles expliquent les causes et vous guident vers la bonne prise en charge à la Clinique DABIA Dakar.",
  },
  detartrage: {
    label: "Détartrage",
    title: "Détartrage dentaire à Dakar – Prix & fréquence | DABIA",
    description:
      "Pourquoi et quand faire un détartrage ? Nos articles répondent à toutes vos questions sur le détartrage à Dakar, son prix et ses bénéfices pour vos gencives.",
  },
  gingivite: {
    label: "Gingivite",
    title: "Gingivite & maladies des gencives à Dakar | DABIA",
    description:
      "Gencives qui saignent, rouges ou enflées ? Nos guides sur la gingivite et la parodontite à Dakar : traitement, prévention et suivi à la Clinique DABIA.",
  },
  "mauvaise-haleine": {
    label: "Mauvaise haleine",
    title: "Mauvaise haleine – Causes & solutions à Dakar | DABIA",
    description:
      "Halitose, mauvaise haleine persistante : nos articles expliquent les causes dentaires et les solutions efficaces disponibles à la Clinique Dentaire DABIA Dakar.",
  },
  "invisalign-dakar": {
    label: "Invisalign Dakar",
    title: "Invisalign à Dakar – Aligneurs transparents & Prix | DABIA",
    description:
      "Tout savoir sur les aligneurs transparents type Invisalign à Dakar : fonctionnement, avantages, durée et prix. Articles experts de la Clinique DABIA.",
  },
  caries: {
    label: "Caries",
    title: "Caries dentaires à Dakar – Prévention & traitement | DABIA",
    description:
      "Comment se forment les caries, comment les éviter et les traiter ? Nos guides pratiques sur la carie dentaire chez l'adulte et l'enfant à Dakar.",
  },
  "dentiste-pediatrique-dakar": {
    label: "Dentiste enfant Dakar",
    title: "Dentiste pédiatrique à Dakar – Soins enfants | DABIA",
    description:
      "Première visite, caries bébé, fluorure : nos articles sur les soins dentaires pour enfants à Dakar. La Clinique DABIA accueille les enfants dès le plus jeune âge.",
  },
};

export default function BlogTag() {
  const { tagSlug } = useParams();
  const [page, setPage] = useState(1);

  const posts = useMemo(
    () =>
      POSTS.filter((p) =>
        (p.tags || []).some((t) => slugify(t) === tagSlug)
      ).sort((a, b) => new Date(b.date) - new Date(a.date)),
    [tagSlug]
  );

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const pageItems = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const meta = TAG_META[tagSlug] || null;
  const label = meta?.label || posts[0]?.tags?.find((t) => slugify(t) === tagSlug) || tagSlug;
  const canonicalBase = `https://www.cliniquedentairedabia.com/blog/tag/${tagSlug}`;
  const canonical = page > 1 ? `${canonicalBase}?page=${page}` : canonicalBase;

  const title =
    meta?.title ||
    `Articles « ${label} » – Clinique Dentaire DABIA Dakar`;
  const description =
    meta?.description ||
    `${posts.length} article${posts.length > 1 ? "s" : ""} sur « ${label} » par la Clinique Dentaire DABIA à Dakar. Conseils, guides et informations par nos experts.`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.cliniquedentairedabia.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.cliniquedentairedabia.com/blog" },
      { "@type": "ListItem", position: 3, name: label, item: canonicalBase },
    ],
  };

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonicalBase,
    name: title,
    description,
    url: canonicalBase,
    publisher: {
      "@type": "Organization",
      name: "Clinique Dentaire DABIA",
      url: "https://www.cliniquedentairedabia.com",
    },
  };

  if (posts.length === 0) {
    return (
      <section className="py-20 px-4 max-w-4xl mx-auto mt-20">
        <Seo
          title={`Tag introuvable | Clinique Dentaire DABIA`}
          description="Aucun article pour ce tag. Consultez le blog de la Clinique Dentaire DABIA Dakar."
          canonical={canonicalBase}
          url={canonicalBase}
          robots="noindex,follow"
        />
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Tag introuvable" },
          ]}
        />
        <h1 className="text-2xl font-bold mt-4">Aucun article pour ce tag</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#bb2988] underline">
          Voir tous les articles →
        </Link>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title={title}
        description={description}
        url={canonical}
        canonical={canonicalBase}
        type="website"
        prevUrl={page > 1 ? `/blog/tag/${tagSlug}?page=${page - 1}` : undefined}
        nextUrl={page < totalPages ? `/blog/tag/${tagSlug}?page=${page + 1}` : undefined}
        jsonLd={[breadcrumbLd, collectionLd]}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label },
        ]}
      />

      <header className="mb-8">
        <p className="text-sm text-[#bb2988] font-medium mb-1">Tag</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64]">
          {label}
        </h1>
        <p className="text-gray-600 mt-2">
          {posts.length} article{posts.length > 1 ? "s" : ""} sur ce sujet
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map((p) => (
          <article
            key={p.slug}
            className="gradient-card glow-hover wow-tilt bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Link to={`/blog/${p.slug}`} className="block">
              <div
                style={{ aspectRatio: "16/9" }}
                className="w-full rounded-t-xl overflow-hidden"
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
              </div>
            </Link>
            <div className="p-5">
              <p className="text-xs text-gray-500">
                {new Date(p.date).toLocaleDateString("fr-FR")} • {p.category}
              </p>
              <h2 className="text-lg font-bold mt-1 mb-2">
                <Link className="hover:text-[#bb2988]" to={`/blog/${p.slug}`}>
                  {p.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {(p.tags || []).slice(0, 4).map((t) => (
                  <Link
                    key={t}
                    to={`/blog/tag/${slugify(t)}`}
                    className={`px-2 py-1 rounded-full transition ${
                      slugify(t) === tagSlug
                        ? "bg-[#bb2988] text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-2 mt-8">
          <button
            className="btn-cta btn-cta-sm disabled:opacity-40 disabled:pointer-events-none"
            onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span className="text-sm text-gray-600">
            Page {page} / {totalPages}
          </span>
          <button
            className="btn-cta btn-cta-sm disabled:opacity-40 disabled:pointer-events-none"
            onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            disabled={page === totalPages}
          >
            Suivant
          </button>
        </div>
      )}

      <div className="mt-10 p-5 border rounded-xl bg-gray-50 text-center">
        <p className="text-gray-700 mb-3">
          Vous souhaitez prendre rendez-vous à la Clinique Dentaire DABIA ?
        </p>
        <Link to="/rendez-vous" className="btn-cta btn-cta-sm inline-block">
          Prendre rendez-vous
        </Link>
        <Link to="/blog" className="ml-4 text-sm text-[#bb2988] underline">
          Voir tous les articles →
        </Link>
      </div>
    </section>
  );
}
