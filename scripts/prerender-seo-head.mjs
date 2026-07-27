export async function dedupeSeoHead(page) {
  await page.evaluate(() => {
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
    const lastByKey = new Map();

    for (const node of nodes) lastByKey.set(keyFor(node), node);

    for (const node of nodes) {
      if (lastByKey.get(keyFor(node)) !== node) node.remove();
    }

    for (const node of lastByKey.values()) {
      node.setAttribute("data-seo-prerender", "true");
    }
  });
}
