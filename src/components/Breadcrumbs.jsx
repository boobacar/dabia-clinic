import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Breadcrumbs component
 * - Renders a visual breadcrumb trail
 * - Injects JSON-LD BreadcrumbList for SEO (enabled by default)
 */
export default function Breadcrumbs({
  items = [{ label: "Accueil", href: "/" }],
  structuredData = true,
  baseUrl = "https://www.cliniquedentairedabia.com",
}) {
  const location = useLocation();

  const origin = useMemo(() => {
    if (typeof window !== "undefined" && window.location?.origin) {
      return window.location.origin;
    }
    return baseUrl;
  }, [baseUrl]);

  const finalItems = Array.isArray(items) && items.length ? items : [{ label: "Accueil", href: "/" }];

  const breadcrumbLd = useMemo(() => {
    if (!structuredData) return null;

    const list = finalItems.map((it, idx) => {
      const isLast = idx === finalItems.length - 1;
      let href = it.href;
      if (!href && isLast) href = location?.pathname || "/";
      // absolute URL
      const abs = href
        ? href.startsWith("http")
          ? href
          : `${origin}${href}`
        : `${origin}${location?.pathname || "/"}`;
      return {
        "@type": "ListItem",
        position: idx + 1,
        name: String(it.label || ""),
        item: abs,
      };
    });
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: list,
    };
  }, [structuredData, finalItems, origin, location?.pathname]);

  return (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center gap-2">
        {finalItems.map((it, i) => {
          const isLast = i === finalItems.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300">/</span>}
              {it.href && !isLast ? (
                <Link className="hover:text-[#bb2988]" to={it.href}>
                  {it.label}
                </Link>
              ) : (
                <span className="text-gray-700" aria-current={isLast ? "page" : undefined}>
                  {it.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {breadcrumbLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      )}
    </nav>
  );
}
