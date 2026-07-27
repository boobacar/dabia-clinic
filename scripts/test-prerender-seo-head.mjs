import assert from "node:assert/strict";
import { chromium } from "playwright-chromium";
import { dedupeSeoHead } from "./prerender-seo-head.mjs";
import { markSeoShellHead } from "./seo-shell-head.mjs";
import {
  cleanupPrerenderedSeoHead,
  removeSeoShellHead,
} from "../src/utils/seoHead.js";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

try {
  await page.setContent(`<!doctype html><html><head>
    <title>Ancien</title><title>Nouveau</title>
    <meta name="description" content="ancienne"><meta name="description" content="nouvelle">
    <link rel="canonical" href="https://example.com/ancien"><link rel="canonical" href="https://example.com/nouveau">
    <meta property="og:title" content="ancien"><meta property="og:title" content="nouveau">
    <meta property="og:description" content="ancienne"><meta property="og:description" content="nouvelle">
    <meta property="og:image" content="ancien.webp"><meta property="og:image" content="nouveau.webp">
    <meta name="twitter:title" content="ancien"><meta name="twitter:title" content="nouveau">
    <meta name="twitter:description" content="ancienne"><meta name="twitter:description" content="nouvelle">
    <meta name="application-name" content="ancienne"><meta name="application-name" content="nouvelle">
    <meta name="apple-mobile-web-app-title" content="ancienne"><meta name="apple-mobile-web-app-title" content="nouvelle">
    <link rel="alternate" hreflang="fr" href="https://example.com/ancien"><link rel="alternate" hreflang="fr" href="https://example.com/nouveau">
    <link rel="alternate" hreflang="x-default" href="https://example.com/ancien"><link rel="alternate" hreflang="x-default" href="https://example.com/nouveau">
  </head><body></body></html>`);

  await dedupeSeoHead(page);

  const state = await page.evaluate(() => ({
    titles: Array.from(document.head.querySelectorAll("title"), (node) => node.textContent),
    descriptions: Array.from(document.head.querySelectorAll('meta[name="description"]'), (node) => node.content),
    canonicals: Array.from(document.head.querySelectorAll('link[rel="canonical"]'), (node) => node.href),
    og: Object.fromEntries(
      Array.from(document.head.querySelectorAll('meta[property^="og:"]'), (node) => [node.getAttribute("property"), node.content]),
    ),
    twitter: Object.fromEntries(
      Array.from(document.head.querySelectorAll('meta[name^="twitter:"]'), (node) => [node.name, node.content]),
    ),
    applicationName: Array.from(document.head.querySelectorAll('meta[name="application-name"]'), (node) => node.content),
    appleTitle: Array.from(document.head.querySelectorAll('meta[name="apple-mobile-web-app-title"]'), (node) => node.content),
    alternates: Object.fromEntries(
      Array.from(document.head.querySelectorAll('link[rel="alternate"]'), (node) => [node.hreflang, node.href]),
    ),
  }));

  assert.deepEqual(state.titles, ["Nouveau"]);
  assert.deepEqual(state.descriptions, ["nouvelle"]);
  assert.deepEqual(state.canonicals, ["https://example.com/nouveau"]);
  assert.deepEqual(state.og, {
    "og:title": "nouveau",
    "og:description": "nouvelle",
    "og:image": "nouveau.webp",
  });
  assert.deepEqual(state.twitter, {
    "twitter:title": "nouveau",
    "twitter:description": "nouvelle",
  });
  assert.deepEqual(state.applicationName, ["nouvelle"]);
  assert.deepEqual(state.appleTitle, ["nouvelle"]);
  assert.deepEqual(state.alternates, {
    fr: "https://example.com/nouveau",
    "x-default": "https://example.com/nouveau",
  });
  assert.equal(
    await page.locator('[data-seo-prerender="true"]').count(),
    12,
    "Chaque balise SEO conservée doit être marquée pour l'hydratation",
  );

  await page.evaluate(() => {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<title>Hydraté</title>
       <meta name="description" content="hydratée">
       <link rel="canonical" href="https://example.com/hydrate">
       <meta property="og:title" content="hydraté">
       <meta property="og:description" content="hydratée">
       <meta property="og:image" content="hydrate.webp">
       <meta name="twitter:title" content="hydraté">
       <meta name="twitter:description" content="hydratée">
       <meta name="application-name" content="hydratée">
       <meta name="apple-mobile-web-app-title" content="hydratée">
       <link rel="alternate" hreflang="fr" href="https://example.com/hydrate">
       <link rel="alternate" hreflang="x-default" href="https://example.com/hydrate">`,
    );
  });
  await page.evaluate(cleanupPrerenderedSeoHead);

  const hydrated = await page.evaluate(() => ({
    title: document.title,
    descriptions: Array.from(document.head.querySelectorAll('meta[name="description"]'), (node) => node.content),
    canonicals: Array.from(document.head.querySelectorAll('link[rel="canonical"]'), (node) => node.href),
    ogTitles: Array.from(document.head.querySelectorAll('meta[property="og:title"]'), (node) => node.content),
    twitterTitles: Array.from(document.head.querySelectorAll('meta[name="twitter:title"]'), (node) => node.content),
    applicationNames: Array.from(document.head.querySelectorAll('meta[name="application-name"]'), (node) => node.content),
    appleTitles: Array.from(document.head.querySelectorAll('meta[name="apple-mobile-web-app-title"]'), (node) => node.content),
    alternates: Object.fromEntries(
      Array.from(document.head.querySelectorAll('link[rel="alternate"]'), (node) => [node.hreflang, node.href]),
    ),
    markers: document.head.querySelectorAll('[data-seo-prerender="true"]').length,
  }));
  assert.deepEqual(hydrated, {
    title: "Hydraté",
    descriptions: ["hydratée"],
    canonicals: ["https://example.com/hydrate"],
    ogTitles: ["hydraté"],
    twitterTitles: ["hydraté"],
    applicationNames: ["hydratée"],
    appleTitles: ["hydratée"],
    alternates: {
      fr: "https://example.com/hydrate",
      "x-default": "https://example.com/hydrate",
    },
    markers: 0,
  });

  const shellHtml = markSeoShellHead(`<!doctype html><html><head>
    <title>Shell statique</title>
    <meta name="description" content="shell">
    <meta name="application-name" content="shell">
    <meta property="og:title" content="shell">
    <meta name="twitter:title" content="shell">
    <link rel="canonical" href="https://example.com/shell">
    <link rel="alternate" hreflang="fr" href="https://example.com/shell">
    <link rel="preconnect" href="https://fonts.example.com">
    <link rel="modulepreload" href="/assets/app.js">
  </head><body><link rel="canonical" href="https://example.com/body"></body></html>`);
  assert.equal(
    (shellHtml.match(/data-seo-shell="true"/g) || []).length,
    7,
    "Le générateur doit marquer uniquement les balises SEO statiques du head",
  );
  assert.match(shellHtml, /<link rel="preconnect" href="https:\/\/fonts\.example\.com">/);
  assert.match(shellHtml, /<link rel="modulepreload" href="\/assets\/app\.js">/);
  assert.match(shellHtml, /<body><link rel="canonical" href="https:\/\/example\.com\/body">/);

  await page.setContent(shellHtml);
  await page.evaluate(removeSeoShellHead);
  const shellState = await page.evaluate(() => ({
    shellMarkers: document.head.querySelectorAll('[data-seo-shell="true"]').length,
    seoNodes: document.head.querySelectorAll(
      'title, meta[name="description"], meta[name="application-name"], meta[property="og:title"], meta[name="twitter:title"], link[rel="canonical"], link[rel="alternate"]',
    ).length,
    technicalLinks: document.head.querySelectorAll(
      'link[rel="preconnect"], link[rel="modulepreload"]',
    ).length,
  }));
  assert.deepEqual(shellState, {
    shellMarkers: 0,
    seoNodes: 0,
    technicalLinks: 2,
  });

  await page.setContent(`<!doctype html><html><head>
    <title>Shell non marqué</title><title>React</title>
    <meta name="description" content="shell"><meta name="description" content="react">
  </head><body></body></html>`);
  await page.evaluate(cleanupPrerenderedSeoHead);
  assert.equal(
    await page.locator("head > title").count(),
    2,
    "Le nettoyage post-montage ne doit jamais supprimer des nœuds non marqués que React pourrait gérer",
  );
  assert.equal(await page.locator('head > meta[name="description"]').count(), 2);

  console.log("✅ Déduplication du head SEO validée");
} finally {
  await page.close();
  await browser.close();
}
