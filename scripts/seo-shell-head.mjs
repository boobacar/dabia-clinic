function readAttribute(tag, attribute) {
  const match = tag.match(
    new RegExp(`\\b${attribute}\\s*=\\s*(["'])(.*?)\\1`, "i"),
  );
  return match?.[2]?.toLowerCase() || "";
}

function isSeoShellTag(tag) {
  if (/^<title\b/i.test(tag)) return true;
  if (/^<meta\b/i.test(tag)) {
    const name = readAttribute(tag, "name");
    const property = readAttribute(tag, "property");
    return (
      [
        "description",
        "robots",
        "application-name",
        "apple-mobile-web-app-title",
      ].includes(name) ||
      name.startsWith("twitter:") ||
      property.startsWith("og:")
    );
  }
  if (/^<link\b/i.test(tag)) {
    return ["canonical", "alternate"].includes(readAttribute(tag, "rel"));
  }
  return false;
}

export function markSeoShellHead(html) {
  return html.replace(/<head\b([^>]*)>([\s\S]*?)<\/head>/i, (full, attributes, head) => {
    const marked = head.replace(/<(?:title|meta|link)\b[^>]*>/gi, (tag) => {
      if (!isSeoShellTag(tag) || /\bdata-seo-shell\s*=/i.test(tag)) return tag;
      return tag.replace(/^<(title|meta|link)\b/i, '<$1 data-seo-shell="true"');
    });
    return `<head${attributes}>${marked}</head>`;
  });
}
