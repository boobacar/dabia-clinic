import { lazy, Suspense, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Seo from "../components/Seo";
import { slugify } from "../utils/slugify";
import postsMeta from "../data/posts.meta.json";

const BlogPost = lazy(() => import("./BlogPost"));

export default function BlogPostShell() {
  const { slug } = useParams();
  const post = useMemo(
    () => postsMeta.find((item) => item.slug === slug),
    [slug],
  );

  const canonical = slug
    ? `https://www.cliniquedentairedabia.com/blog/${slug}`
    : "https://www.cliniquedentairedabia.com/blog";

  if (!post) {
    return (
      <Suspense fallback={null}>
        <BlogPost />
      </Suspense>
    );
  }

  return (
    <>
      <section className="pt-20 px-4 max-w-7xl mx-auto mt-20">
        <Seo
          title={post.title}
          description={post.description}
          url={canonical}
          canonical={canonical}
          type="article"
          publishedTime={post.date}
          modifiedTime={post.date}
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
                {post.category || "Conseils"}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#ad9d64] mt-1">
                {post.title}
              </h1>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <div className="flex items-center gap-3 mt-4">
                <div>
                  <p className="text-sm font-medium">Dr Fatoumata SAO</p>
                  <p className="text-xs text-gray-500">
                    Chirurgienne-dentiste en chef
                  </p>
                </div>
              </div>
              {(post.tags || []).length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                  {(post.tags || []).slice(0, 6).map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${slugify(tag)}`}
                      className="px-2 py-1 bg-gray-100 rounded-full hover:bg-[#bb2988] hover:text-white transition"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </header>
          </article>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="px-4 max-w-7xl mx-auto">
            <div className="h-12 max-w-3xl rounded bg-gray-50" />
          </div>
        }
      >
        <BlogPost hideHeader />
      </Suspense>
    </>
  );
}
