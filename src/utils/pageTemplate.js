export function getPageTemplate(pathname = "") {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/blog/")) return "blog_post";
  if (pathname === "/blog") return "blog_list";
  if (pathname === "/rendez-vous") return "rdv";
  if (pathname.startsWith("/infos/")) return "info";
  if (pathname.startsWith("/competences/")) return "competence_detail";
  if (pathname === "/all-competences") return "competences_list";
  if (pathname.startsWith("/cabinet-dentaire-") || pathname.startsWith("/clinique-dentaire-")) return "local_seo";
  if (pathname === "/urgence-dentaire-dakar") return "urgence";
  return "other";
}

export function getDeviceType() {
  if (typeof window === "undefined") return "unknown";
  return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
}
