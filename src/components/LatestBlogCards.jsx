import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkeletonImage from "./SkeletonImage";
import SectionTitle from "./SectionTitle";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

export default function LatestBlogCards() {
  const latest = useMemo(
    () => [...POSTS].sort(sortByDateDesc).slice(0, 6),
    [],
  );

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8">
          <div className="md:flex-1 w-full">
            <SectionTitle
              title="Derniers articles du blog"
              subtitle="Conseils & Actualités"
              center={false}
              className="mb-0"
            />
          </div>
          <Link
            to="/blog"
            className="text-pink-600 hover:text-[#bb2988] font-medium mt-4 md:mt-0 md:mb-6 shrink-0"
          >
            Voir le blog →
          </Link>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.08,
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {latest.map((post) => (
            <motion.div
              key={post.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group gradient-card glow-hover wow-tilt bg-white rounded-xl shadow transition-transform duration-300 ease-out overflow-hidden transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl ring-1 ring-transparent hover:ring-[#ad9d64]/40"
              >
                {post.cover && (
                  <SkeletonImage
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 overflow-hidden"
                    imgClassName="object-cover transition-transform duration-300 rounded-t-xl group-hover:opacity-95 group-hover:scale-[1.03]"
                    style={{ viewTransitionName: `post-cover-${post.slug}` }}
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
                  <h3 className="font-semibold text-lg leading-snug group-hover:text-[#bb2988]">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/blog" className="btn-cta">
            Tous les articles du blog
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
