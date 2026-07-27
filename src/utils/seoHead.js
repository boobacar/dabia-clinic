export function cleanupPrerenderedSeoHead() {
  const nodes = Array.from(
    document.head.querySelectorAll(
      'title, meta[name], meta[property], link[rel]',
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
}
