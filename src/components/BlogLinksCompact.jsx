import React from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

const sortByDateDesc = (a, b) => new Date(b.date) - new Date(a.date);

export default function BlogLinksCompact({ count = 8 }) {
  const items = [...POSTS].sort(sortByDateDesc).slice(0, count);
  return (
    <div className="p-5">
      <h4 className="text-base font-semibold mb-3">Dans le blog</h4>
      <ul className="space-y-2 text-sm grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
        {items.map((post) => (
          <li key={post.slug} className="truncate">
            <Link
              to={`/blog/${post.slug}`}
              className="text-gray-300 hover:text-white hover:underline "
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
