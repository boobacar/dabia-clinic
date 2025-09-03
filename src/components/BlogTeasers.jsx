import React from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

export default function BlogTeasers() {
  const latest = [...POSTS].sort(sortByDateDesc).slice(0, 3);

  return (
    <section className="py-12 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            À la une du blog
          </h2>
          <Link to="/blog" className="text-pink-600 hover:text-pink-700">
            Voir tout →
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
                  className="w-full h-44 object-cover group-hover:opacity-95 transition"
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
                </div>
                <h3 className="font-semibold leading-snug group-hover:text-pink-700">
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
      </div>
    </section>
  );
}
