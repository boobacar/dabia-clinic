// src/pages/BlogPost.jsx
import React, { useEffect, useMemo, useState } from "react";
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
import ReadingProgress from "../components/ReadingProgress";
// Video embeds removed per request
import Magnetic from "../components/Magnetic";

function textFromChildren(children) {
  if (children == null) return "";
  const arr = Array.isArray(children) ? children : [children];
  let out = "";
  for (const child of arr) {
    if (typeof child === "string") out += child;
    else if (typeof child === "number") out += String(child);
    else if (child && child.props && child.props.children) {
      out += textFromChildren(child.props.children);
    }
  }
  return out.trim();
}

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

  const currentSlug = post ? post.slug : "";
  const canonical = `https://www.cliniquedentairedabia.com/blog/${currentSlug}`;
  // Memoize tags validation to avoid frequent re-renders of dependent hooks
  const tags = useMemo(
    () => ((post && post.tags) || []).map((t) => t.toLowerCase()),
    [post],
  );

  const postSlug = post ? post.slug : "";
  const postCategory = post ? post.category : "";
  const postFaq = useMemo(() => (post ? post.faq : []), [post]);
  const postContent = post ? post.content : "";
  const postCover = post ? post.cover : null;

  // Build enriched sections as Markdown to merge with article Markdown for homogeneity
  const enrichedMd = useMemo(() => {
    if (!post) return "";
    const parts = [];
    parts.push(
      `## Indications et contre-indications\n\n` +
        `Les traitements décrits s’adressent aux patients selon un diagnostic personnalisé. ` +
        `Un bilan clinique et radiologique préalable permet de confirmer l’indication, ` +
        `de repérer d’éventuelles contre-indications (inflammation active, pathologies générales non stabilisées, ` +
        `hygiène insuffisante), et d’adapter le protocole pour garantir sécurité et efficacité.`,
    );
    parts.push(
      `## Étapes clés du traitement\n\n` +
        `La prise en charge suit un enchaînement clair : consultation, explication des options, consentement éclairé, ` +
        `réalisation du soin, puis contrôle. Selon le cas, un traitement préparatoire (détartrage, soins des gencives, ` +
        `photographie, empreinte numérique) peut être nécessaire pour optimiser le résultat.`,
    );
    parts.push(
      `## Durée, confort et suites\n\n` +
        `La durée dépend de la complexité et des objectifs. Les techniques modernes, l’anesthésie et les équipements ` +
        `(CBCT, scanner intra-oral, systèmes d’aspiration) permettent des soins précis et confortables. ` +
        `Une gêne transitoire est possible et se contrôle avec des conseils et antalgiques adaptés.`,
    );
    parts.push(
      `## Coût et devis transparents\n\n` +
        `Un devis détaillé est systématiquement remis après l’examen clinique et le plan de traitement. ` +
        `Le prix reflète la durée, les matériaux, la complexité et les contrôles. Des alternatives thérapeutiques ` +
        `sont toujours discutées pour concilier efficacité, esthétique et budget.`,
    );
    parts.push(
      `## Prévention et entretien\n\n` +
        `Les résultats à long terme reposent sur une hygiène rigoureuse (brossage bi-quotidien, fil/brossettes), ` +
        `une alimentation équilibrée, des contrôles réguliers et des séances de prophylaxie. ` +
        `Des conseils personnalisés sont fournis pour prolonger les bénéfices du soin.`,
    );
    if (tags.some((t) => /urgence|douleur|trauma/.test(t))) {
      parts.push(
        `## Quand consulter en urgence\n\n` +
          `Douleur intense, fièvre, gonflement qui s’étend, saignement persistant, traumatisme avec dent mobile ` +
          `ou expulsée : contactez la clinique sans tarder pour une prise en charge prioritaire.`,
      );
    }
    parts.push(
      `## À retenir\n\n` +
        `- Diagnostic personnalisé et information claire avant tout acte.\n` +
        `- Équipements modernes pour précision et confort des soins.\n` +
        `- Suivi et prévention pour des résultats durables.`,
    );
    return parts.join("\n\n");
  }, [post, tags]); // Included 'tags' array itself used inside

  const combinedMarkdown = useMemo(() => {
    if (!post) return "";
    return `${postContent || ""}\n\n${enrichedMd}`.trim();
  }, [post, postContent, enrichedMd]);

  // Style spécial pour le bloc "À retenir" (applique une classe callout au list suivant le titre)
  useEffect(() => {
    const h2s = document.querySelectorAll("h2");
    h2s.forEach((h) => {
      const txt = (h.textContent || "").trim().toLowerCase();
      if (txt === "à retenir" || txt === "a retenir") {
        h.classList.add("callout-title");
        const next = h.nextElementSibling;
        if (next) next.classList.add("callout");
      }
    });
  }, [currentSlug, combinedMarkdown]);
  const headings = extractHeadings(combinedMarkdown || "");

  // Auto-scroll si on arrive avec /blog/slug#ancre
  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    const headerOffset = 100;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 0);
  }, [currentSlug]);

  const [imgDims, setImgDims] = useState(null);
  useEffect(() => {
    if (!postCover) return;
    try {
      const img = new Image();
      img.src = postCover;
      img.onload = () =>
        setImgDims({ width: img.naturalWidth, height: img.naturalHeight });
    } catch {
      // Ignore image loading errors
    }
  }, [postCover]);

  const articleJsonLd = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: [
        {
          "@type": "ImageObject",
          url: post.cover,
          ...(imgDims ? { width: imgDims.width, height: imgDims.height } : {}),
        },
      ],
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
  }, [post, imgDims]);

  // Related posts (based on shared tags/category)
  const related = useMemo(() => {
    if (!post) return [];
    const sameCat = POSTS.filter(
      (p) => p.category === postCategory && p.slug !== postSlug,
    );
    const byTags = POSTS.filter(
      (p) =>
        p.slug !== postSlug &&
        (p.tags || []).some((t) => tags.includes(String(t).toLowerCase())),
    );
    const merged = [...sameCat, ...byTags];
    const unique = [];
    const seen = new Set();
    for (const r of merged) {
      if (!seen.has(r.slug)) {
        seen.add(r.slug);
        unique.push(r);
      }
      if (unique.length >= 6) break;
    }
    return unique;
  }, [post, postSlug, postCategory, tags]);

  // Competence links suggestions based on tags
  const competenceLinks = useMemo(() => {
    const map = [
      {
        keys: ["implant", "implantologie"],
        to: "/competences/implantologie",
        label: "Implantologie",
      },
      {
        keys: ["orthodontie", "aligneurs", "bagues"],
        to: "/competences/orthodontie",
        label: "Orthodontie",
      },
      {
        keys: ["facette", "facettes"],
        to: "/competences/facettes-dentaires",
        label: "Facettes dentaires",
      },
      {
        keys: ["blanchiment"],
        to: "/competences/blanchiment-dentaire",
        label: "Blanchiment dentaire",
      },
      {
        keys: ["detartrage", "parodont"],
        to: "/competences/parodontologie",
        label: "Parodontologie",
      },
    ];
    const out = [];
    const seen = new Set();
    for (const m of map) {
      if (m.keys.some((k) => tags.some((t) => t.includes(k)))) {
        if (!seen.has(m.to)) {
          seen.add(m.to);
          out.push(m);
        }
      }
    }
    return out;
  }, [tags]);

  // Auto‑FAQ hints per tag (fallback generic)
  const faqItems = useMemo(() => {
    if (!post) return [];
    const items = [];
    if (Array.isArray(postFaq) && postFaq.length) {
      return postFaq.slice(0, 6);
    }
    const has = (w) => tags.some((t) => t.includes(w));
    if (has("implant")) {
      items.push(
        {
          q: "Combien de temps dure un implant dentaire ?",
          a: "Avec une hygiène rigoureuse et des contrôles réguliers, un implant peut durer de très nombreuses années, souvent plusieurs décennies.",
        },
        {
          q: "L’intervention est‑elle douloureuse ?",
          a: "Elle se fait sous anesthésie locale. Une gêne transitoire est possible et bien contrôlée par des antalgiques.",
        },
      );
    }
    if (has("orthodontie") || has("aligneur")) {
      items.push(
        {
          q: "Aligneurs ou bagues : que choisir ?",
          a: "Les aligneurs sont discrets et confortables ; les bagues sont indiquées pour des cas plus complexes. Le choix dépend du diagnostic.",
        },
        {
          q: "Durée d’un traitement orthodontique ?",
          a: "De quelques mois à 24 mois en moyenne selon la complexité et la coopération.",
        },
      );
    }
    if (has("blanchiment")) {
      items.push(
        {
          q: "Le blanchiment abîme‑t‑il les dents ?",
          a: "Réalisé sous contrôle professionnel avec des produits homologués, il est sûr et respecte l’émail.",
        },
        {
          q: "Combien de temps durent les résultats ?",
          a: "En moyenne 12 à 24 mois ; des retouches seront proposées si besoin.",
        },
      );
    }
    if (items.length === 0) {
      items.push(
        {
          q: "Quand faut‑il consulter en priorité ?",
          a: "Douleur aiguë, gonflement, fièvre, traumatisme : contactez la clinique rapidement pour une prise en charge adaptée.",
        },
        {
          q: "Comment connaître le prix d’un soin ?",
          a: "Un devis clair est remis après l’examen clinique et le plan de traitement personnalisé.",
        },
      );
    }
    return items.slice(0, 4);
  }, [post, postFaq, tags]);

  const faqJsonLd = useMemo(() => {
    if (!post) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
  }, [post, faqItems]);

  // Optional HowTo for urgent topics
  const isHowTo =
    post &&
    (/que-faire|urgence/i.test(post.slug) ||
      tags.some((t) => /urgence|que faire/.test(t)));

  const howToJsonLd = isHowTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `Que faire – ${post.title}`,
        step: headings
          .slice(0, 6)
          .map((h) => ({ "@type": "HowToStep", name: h.text })),
      }
    : null;

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

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto mt-20">
      <ReadingProgress />
      <Seo
        title={post.title}
        description={post.description}
        url={canonical}
        canonical={canonical}
        type="article"
        image={post.cover}
        publishedTime={post.date}
        modifiedTime={post.date}
        jsonLd={[
          articleJsonLd,
          faqJsonLd,
          ...(howToJsonLd ? [howToJsonLd] : []),
        ].filter(Boolean)}
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
            <div
              className="w-full rounded-xl mt-6 overflow-hidden"
              style={{
                aspectRatio: imgDims
                  ? `${imgDims.width}/${imgDims.height}`
                  : "1200/630",
              }}
            >
              <img
                src={post.cover}
                alt={post.title}
                width={imgDims?.width || 1200}
                height={imgDims?.height || 630}
                className="w-full h-full object-cover"
                style={{ viewTransitionName: `post-cover-${post.slug}` }}
                decoding="async"
                fetchPriority="high"
                sizes="100vw"
              />
            </div>
            {/* vidéos retirées */}
          </header>

          <div className="my-8 flex justify-center lg:justify-start">
            <Magnetic>
              <Link
                to="/rendez-vous"
                className="ripple btn-cta px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 block text-center"
              >
                Prendre un rendez-vous
              </Link>
            </Magnetic>
          </div>

          {/* TOC mobile */}
          <div className="lg:hidden mb-6">
            <TOC headings={headings} />
          </div>

          <div className="prose prose-gray max-w-none prose-headings:text-[#ad9d64]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children, ...props }) => {
                  const txt = textFromChildren(children);
                  const id = slugify(txt);
                  return (
                    <h2
                      id={id}
                      className="scroll-mt-28 text-2xl md:text-3xl font-bold text-[#ad9d64] mt-8 mb-3"
                      {...props}
                    >
                      {children}
                    </h2>
                  );
                },
                h3: ({ children, ...props }) => {
                  const txt = textFromChildren(children);
                  const id = slugify(txt);
                  return (
                    <h3
                      id={id}
                      className="scroll-mt-28 text-xl md:text-2xl font-semibold text-[#ad9d64] mt-6 mb-2"
                      {...props}
                    >
                      {children}
                    </h3>
                  );
                },
                h4: ({ children, ...props }) => {
                  const txt = textFromChildren(children);
                  const id = slugify(txt);
                  return (
                    <h4
                      id={id}
                      className="scroll-mt-28 text-lg md:text-xl font-semibold text-[#ad9d64] mt-4 mb-2"
                      {...props}
                    >
                      {children}
                    </h4>
                  );
                },
                a: ({ href = "", children, ...props }) => {
                  const isExternal = /^https?:\/\//i.test(href);
                  if (isExternal) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener nofollow ugc"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }

                  const isRdvLink =
                    href === "/rendez-vous" || href.endsWith("/rendez-vous");

                  if (isRdvLink) {
                    return (
                      <Link to="/rendez-vous" className="btn-cta btn-cta-sm inline-block" {...props}>
                        📅 Rendez-vous rapide
                      </Link>
                    );
                  }

                  return (
                    <a href={href} {...props}>
                      {children}
                    </a>
                  );
                },
              }}
            >
              {combinedMarkdown}
            </ReactMarkdown>
          </div>

          <div className="mt-8 p-4 border rounded-lg bg-yellow-50 text-yellow-800 text-sm">
            Les informations de ce blog sont fournies à titre informatif et ne
            remplacent pas une consultation clinique. En cas de douleur ou
            d’urgence, contactez directement la clinique.
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ShareButtons title={post.title} url={canonical} />
            <Magnetic>
              <Link to="/rendez-vous" className="ripple btn-cta btn-cta-sm">
                Prendre rendez-vous
              </Link>
            </Magnetic>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            Voir aussi{" "}
            <Link to="/all-competences" className="text-[#bb2988] underline">
              nos compétences
            </Link>
            ,{" "}
            <Link to="/dentiste-dakar" className="text-[#bb2988] underline">
              Dentiste à Dakar
            </Link>{" "}
            et{" "}
            <Link
              to="/urgence-dentaire-dakar"
              className="text-[#bb2988] underline"
            >
              Urgence dentaire
            </Link>
            .
          </div>
        </article>

        <aside className="lg:col-span-4 space-y-6">
          <TOC headings={headings} />
          {related.length > 0 && (
            <div className="p-5 border rounded-xl">
              <p className="font-semibold mb-2">Articles liés</p>
              <ul className="space-y-2 text-sm">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      className="hover:text-[#bb2988]"
                      to={`/blog/${p.slug}`}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {competenceLinks.length > 0 && (
            <div className="p-5 border rounded-xl">
              <p className="font-semibold mb-2">Liens vers nos compétences</p>
              <ul className="space-y-2 text-sm">
                {competenceLinks.map((c) => (
                  <li key={c.to}>
                    <Link className="hover:text-[#bb2988]" to={c.to}>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="p-5 border rounded-xl bg-gradient-to-br from-white to-gray-50">
            <p className="font-semibold">Besoin d’un second avis ?</p>
            <p className="text-sm text-gray-600">
              Notre équipe vous répond rapidement.
            </p>
            <Link
              to="/rendez-vous"
              className="mt-3 inline-block btn-cta btn-cta-sm"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </aside>
      </div>

      {/* FAQ visible (same content as JSON-LD) */}
      {faqItems.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#ad9d64] mb-3">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((f, i) => (
              <details key={i} className="border rounded-xl p-4 bg-white">
                <summary className="font-semibold cursor-pointer">
                  {f.q}
                </summary>
                <p className="mt-2 text-gray-700 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
