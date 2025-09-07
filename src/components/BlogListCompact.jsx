import React, { useState } from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

export default function BlogListCompact() {
  const [showAll, setShowAll] = useState(false);

  const sortedPosts = [...POSTS].sort(sortByDateDesc);
  const visiblePosts = showAll ? sortedPosts : sortedPosts.slice(0, 6);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl font-extrabold mb-6">
          Tous nos articles
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {visiblePosts.map((post) => (
            <li key={post.slug} className="truncate">
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
              <span className="text-gray-400 text-sm"> — {post.category}</span>
            </li>
          ))}
        </ul>

        {/* bouton voir plus / moins */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 rounded-full bg-[#bb2988] text-white font-medium transition transform hover:scale-105"
          >
            {showAll ? "Voir moins" : "Voir tous les liens"}
          </button>
        </div>
      </div>
    </section>
  );
}
