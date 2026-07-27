export function cleanupPrerenderedSeoHead() {
  const nodes = Array.from(
    document.head.querySelectorAll(
      'title, meta[name="description"], meta[name="robots"], meta[name="application-name"], meta[name="apple-mobile-web-app-title"], link[rel="canonical"], link[rel="alternate"], meta[property^="og:"], meta[name^="twitter:"]',
    ),
  );
  const keyFor = (node) => {
    if (node.tagName === "TITLE") return "title";
    if (node.tagName === "LINK" && node.getAttribute("rel") === "alternate") {
      return `LINK:alternate:${node.getAttribute("hreflang") || ""}`;
    }
    return `${node.tagName}:${
      node.getAttribute("name") ||
      node.getAttribute("property") ||
      node.getAttribute("rel")
    }`;
  };
  const hydratedKeys = new Set(
    nodes
      .filter((node) => node.getAttribute("data-seo-prerender") !== "true")
      .map(keyFor),
  );

  for (const node of nodes) {
    if (node.getAttribute("data-seo-prerender") !== "true") continue;
    if (hydratedKeys.has(keyFor(node))) node.remove();
    else node.removeAttribute("data-seo-prerender");
  }

  const remaining = nodes.filter((node) => node.isConnected);
  const lastByKey = new Map();
  for (const node of remaining) lastByKey.set(keyFor(node), node);
  for (const node of remaining) {
    if (lastByKey.get(keyFor(node)) !== node) node.remove();
  }
}
