import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);
const sortPinnedThenDate = (a, b) => {
  const ap = a.pinned ? 1 : 0;
  const bp = b.pinned ? 1 : 0;
  if (ap !== bp) return bp - ap;
  return sortByDateDesc(a, b);
};

export default function BlogListCompact() {
  const [showAll, setShowAll] = useState(false);

  const sortedPosts = [...POSTS].sort(sortPinnedThenDate);
  const visiblePosts = showAll ? sortedPosts : sortedPosts.slice(0, 6);

  return (
    <motion.section
      className="py-14 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-xl md:text-2xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Tous nos articles
        </motion.h2>

        <motion.ul
          key={showAll ? "all" : "few"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {visiblePosts.map((post) => (
            <motion.li
              key={post.slug}
              className="truncate"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-700 hover:underline"
              >
                {post.title}
              </Link>
              <span className="text-gray-400 text-sm"> — {post.category}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* bouton voir plus / moins */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 rounded-full bg-[#bb2988] text-white font-medium transition transform hover:scale-105"
          >
            {showAll ? "Voir moins" : "Voir tous les liens"}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
