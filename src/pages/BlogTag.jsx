// src/pages/BlogTag.jsx
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { POSTS } from "../data/posts";
import { slugify } from "../utils/slugify";
import { TAG_META } from "../data/tagMeta";

const PAGE_SIZE = 12;

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
      <section className="page-shell px-4 max-w-4xl mx-auto">
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
    <section className="page-shell px-4 max-w-7xl mx-auto">
      <Seo
        title={title}
        description={description}
        url={canonical}
        canonical={canonicalBase}
        type="website"
        robots={meta ? "index,follow" : "noindex,follow"}
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
                    className={`blog-tag ${slugify(t) === tagSlug ? "" : "blog-tag--soft"}`}
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
