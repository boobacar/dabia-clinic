// src/pages/Blog.jsx
import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { POSTS, CATEGORIES, TAGS } from "../data/posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PAGE_SIZE = 6;
const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
const sortPinnedThenDate = (a, b) => {
  const ap = a.pinned ? 1 : 0;
  const bp = b.pinned ? 1 : 0;
  if (ap !== bp) return bp - ap; // pinned d'abord
  return sortByDateDesc(a, b);
};

export default function Blog() {
  const q = useQuery();
  const [search, setSearch] = useState(q.get("q") || "");
  const [cat, setCat] = useState(q.get("cat") || "");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const okCat = cat ? p.category === cat : true;
      const s = search.toLowerCase();
      const inText = s
        ? [p.title, p.description, ...(p.tags || [])]
            .join(" ")
            .toLowerCase()
            .includes(s)
        : true;
      return okCat && inText;
    });
  }, [search, cat]);

  const [page, setPage] = useState(1);
  const sorted = useMemo(
    () => [...filtered].sort(sortPinnedThenDate),
    [filtered]
  );
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const pageItems = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title="Blog dentaire à Dakar – Conseils, urgences, prix"
        description="Articles clairs et fiables par la Clinique Dentaire DABIA : urgences dentaires à Dakar, blanchiment, implants, orthodontie, prévention, enfants."
        url={`https://www.cliniquedentairedabia.com/blog`}
        canonical={`https://www.cliniquedentairedabia.com/blog`}
        type="website"
      />

      <Breadcrumbs
        items={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#ad9d64] mb-6">
            Blog de la Clinique Dentaire DABIA
          </h1>
          <p className="text-gray-600 mb-6">
            Conseils pratiques, urgences, technologies et guides prix pour mieux
            prendre soin de votre sourire à Dakar.
          </p>

          <div className="flex items-center gap-3 mb-8 p-3 flex-nowrap overflow-x-auto">
            <input
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              placeholder="Rechercher : dentiste Dakar, urgence…"
              className="input-cta flex-1 min-w-[220px]"
            />
            <select
              value={cat}
              onChange={(e) => {
                setPage(1);
                setCat(e.target.value);
              }}
              className="select-cta shrink-0 min-w-[190px]"
            >
              <option value="">Toutes catégories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((p) => (
              <article
                key={p.slug}
                className="gradient-card glow-hover wow-tilt bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Link to={`/blog/${p.slug}`}>
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-65 object-cover rounded-t-xl"
                    style={{ viewTransitionName: `post-cover-${p.slug}` }}
                    loading="lazy"
                  />
                </Link>
                <div className="p-5">
                  <p className="text-xs text-gray-500">
                    {new Date(p.date).toLocaleDateString("fr-FR")} •{" "}
                    {p.category}
                  </p>
                  <h2 className="text-lg font-bold mt-1 mb-2">
                    <Link
                      className="hover:text-[#bb2988]"
                      to={`/blog/${p.slug}`}
                    >
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {(p.tags || []).slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-gray-100 rounded-full"
                      >
                        #{t}
                      </span>
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
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Précédent
              </button>
              <span className="text-sm text-gray-600">
                Page {page} / {totalPages}
              </span>
              <button
                className="btn-cta btn-cta-sm disabled:opacity-40 disabled:pointer-events-none"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Suivant
              </button>
            </div>
          )}
        </div>

        <aside className="w-full lg:w-80 space-y-6">
          <div className="p-5 rounded-xl border">
            <p className="font-semibold mb-2">Catégories</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setPage(1);
                    setCat(c === cat ? "" : c);
                  }}
                  className={`px-3 py-1 rounded-full ${
                    cat === c ? "btn-cta btn-cta-sm" : "hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-xl border">
            <p className="font-semibold mb-2">Mots-clés populaires</p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-gray-100 rounded-full text-xs"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-xl border">
            <p className="font-semibold mb-2">Liens utiles</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/all-competences" className="hover:text-[#bb2988]">
                  Nos compétences
                </Link>
              </li>
              <li>
                <Link to="/dentiste-dakar" className="hover:text-[#bb2988]">
                  Dentiste à Dakar
                </Link>
              </li>
              <li>
                <Link
                  to="/cabinet-dentaire-dakar"
                  className="hover:text-[#bb2988]"
                >
                  Cabinet dentaire Dakar
                </Link>
              </li>
              <li>
                <Link
                  to="/urgence-dentaire-dakar"
                  className="hover:text-[#bb2988]"
                >
                  Urgence dentaire
                </Link>
              </li>
              <li>
                <Link to="/rendez-vous" className="hover:text-[#bb2988]">
                  Prendre rendez‑vous
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-gradient-to-br from-white to-gray-50">
            <p className="font-semibold">Besoin d’un dentiste rapidement ?</p>
            <p className="text-sm text-gray-600">
              Réservez votre consultation en ligne en 1 minute.
            </p>
            <Link
              to="/rendez-vous"
              className="mt-3 inline-block btn-cta btn-cta-sm"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
