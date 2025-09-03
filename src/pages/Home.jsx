import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
import ClinicIntro from "../components/ClinicIntro";
import CompetencesGrid from "../components/CompetencesGrid";
import StaffPreview from "../components/StaffPreview";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GoogleMapSection from "../components/GoogleMapSection";
import Personnel from "./Personnel";
import HeroSlideshow from "../components/HeroSlideshow";

// 👉 On importe la source des articles
import { POSTS } from "../data/posts";
import BlogListCompact from "../components/BlogListCompact";

// Utils: tri par date décroissante
const sortByDateDesc = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const Home = () => {
  const postsSorted = [...POSTS].sort(sortByDateDesc);
  const latest = postsSorted.slice(0, 6); // vitrine
  const allPosts = postsSorted; // liste complète

  return (
    <div className="bg-white text-gray-800">
      <HeroSlideshow />
      <BeforeAfterGallery />
      <ClinicIntro />
      <Personnel />
      <CompetencesGrid />

      {/* =========================
          Derniers articles (grille)
         ========================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Derniers articles du blog
            </h2>
            <Link
              to="/blog"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Voir le blog →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:opacity-95 transition"
                  />
                )}
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    • {post.category}
                    {post.readingMinutes ? ` • ${post.readingMinutes} min` : ""}
                  </div>
                  <h3 className="font-semibold text-lg leading-snug group-hover:text-pink-700">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-block px-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
            >
              Tous les articles du blog
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================
          Tous nos articles (liste de liens)
         =================================== */}
      <BlogListCompact />
      <TestimonialsCarousel />
      <GoogleMapSection />
    </div>
  );
};

export default Home;
