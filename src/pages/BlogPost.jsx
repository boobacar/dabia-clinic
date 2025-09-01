// src/pages/BlogPost.jsx
import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { POSTS } from "../data/posts";
import { ShareButtons } from "../components/ShareButtons";
import TOC from "../components/TOC";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { slugify } from "../utils/slugify";

function extractHeadings(markdown) {
  const lines = markdown.split(/\n/);
  const re = /^(##+)\s+(.*)/; // H2+
  const headings = [];
  lines.forEach((l) => {
    const m = l.match(re);
    if (m) {
      const level = m[1].length; // ## => 2
      const text = m[2].replace(/[#*`_]/g, "").trim();
      const id = slugify(text);
      headings.push({ level, text, id });
    }
  });
  return headings;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = useMemo(() => POSTS.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="py-20 px-4 max-w-4xl mx-auto mt-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Article introuvable" },
          ]}
        />
        <h1 className="text-2xl font-bold">Article introuvable</h1>
        <p className="mt-2 text-gray-600">
          Retour au{" "}
          <Link className="text-[#bb2988]" to="/blog">
            blog
          </Link>
          .
        </p>
      </section>
    );
  }

  const canonical = `https://www.cliniquedentairedabia.com/blog/${post.slug}`;
  const headings = extractHeadings(post.content || "");

  // Auto-scroll si on arrive avec /blog/slug#ancre
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const headerOffset = 100;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 0);
  }, [post?.slug]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.cover],
    datePublished: post.date,
    dateModified: post.date,
    wordCount: Math.max(400, (post.content || "").split(/\s+/).length),
    author: {
      "@type": "Person",
      name: post?.author?.name || "Clinique Dentaire DABIA",
    },
    publisher: {
      "@type": "Organization",
      name: "Clinique Dentaire DABIA",
      logo: { "@type": "ImageObject", url: "/logo192.png" },
    },
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <Seo
        title={post.title}
        description={post.description}
        url={canonical}
        canonical={canonical}
        type="article"
        image={post.cover}
        jsonLd={[articleJsonLd]}
      />

      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <article className="lg:col-span-8">
          <header className="mb-6">
            <p className="text-xs text-gray-500">
              {new Date(post.date).toLocaleDateString("fr-FR")} •{" "}
              {post.category} • {post.readingMinutes} min
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64] mt-1">
              {post.title}
            </h1>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="flex items-center gap-3 mt-4">
              {post.author?.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm font-medium">{post.author?.name}</p>
                <p className="text-xs text-gray-500">{post.author?.title}</p>
              </div>
            </div>
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl mt-6"
            />
          </header>

          {/* TOC mobile */}
          <div className="lg:hidden mb-6">
            <TOC headings={headings} />
          </div>

          <div className="prose prose-gray max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ node, ...props }) => {
                  const raw = String(props.children?.[0] ?? "");
                  const id = slugify(raw);
                  return <h2 id={id} className="scroll-mt-28" {...props} />;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-8 p-4 border rounded-lg bg-yellow-50 text-yellow-800 text-sm">
            Les informations de ce blog sont fournies à titre informatif et ne
            remplacent pas une consultation clinique. En cas de douleur ou
            d’urgence, contactez directement la clinique.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ShareButtons title={post.title} url={canonical} />
            <Link
              to="/rendez-vous"
              className="inline-block bg-[#bb2988] text-white px-4 py-2 rounded-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </article>

        <aside className="lg:col-span-4 space-y-6">
          <TOC headings={headings} />
          <div className="p-5 border rounded-xl">
            <p className="font-semibold mb-2">Articles récents</p>
            <ul className="space-y-2 text-sm">
              {POSTS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link className="hover:text-[#bb2988]" to={`/blog/${p.slug}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 border rounded-xl bg-gradient-to-br from-white to-gray-50">
            <p className="font-semibold">Besoin d’un second avis ?</p>
            <p className="text-sm text-gray-600">
              Notre équipe vous répond rapidement.
            </p>
            <Link
              to="/rendez-vous"
              className="mt-3 inline-block bg-[#bb2988] text-white px-4 py-2 rounded-lg"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
