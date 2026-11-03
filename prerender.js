/**
 * Pre-rendu statique (SSG) : genere un fichier HTML complet par route.
 *
 * Enchaine apres les deux builds Vite :
 *   1. `vite build`                          -> dist/ (client + index.html template)
 *   2. `vite build --ssr src/entry-server.jsx` -> dist-ssr/entry-server.js
 *   3. `node prerender.js`                   -> injecte le markup + les meta dans dist/
 *
 * Resultat : les bots (LinkedIn, X, Slack, Discord, Bing, crawlers IA...) qui
 * n'executent pas JavaScript recoivent du HTML deja rempli. Le client hydrate
 * ce markup au chargement (voir src/main.jsx).
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssrEntry = path.resolve('dist-ssr/entry-server.js')

const templatePath = path.join(dist, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const { render, routes, SITE_URL } = await import(pathToFileURL(ssrEntry).href)

// Image d'apercu 1200x630 (LinkedIn, Slack, X...) - voir public/og-image.jpg
const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const OG_IMAGE_ALT = 'Nicolas Pandraud - DevOps AWS freelance à Lyon & Lead Fullstack'

const escape = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Construit les balises head specifiques a une route. */
function headFor({ path: routePath, title, description, jsonLd }) {
  const url = SITE_URL + (routePath === '/' ? '/' : routePath)
  const t = escape(title)
  const d = escape(description)

  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Nicolas Pandraud" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escape(OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    // Fond du hero : charge tot pour accelerer le premier affichage (accueil seulement)
    routePath === '/' &&
      `<link rel="preload" as="image" href="/bg.webp" media="(min-width: 641px)" fetchpriority="high" />`,
    routePath === '/' &&
      `<link rel="preload" as="image" href="/bg-mobile.webp" media="(max-width: 640px)" fetchpriority="high" />`,
    // Donnees structurees schema.org (Google, ATS, crawlers IA).
    // `<` echappe pour ne jamais fermer la balise script.
    jsonLd &&
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ')
}

const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/
const APP_HTML = '<!--app-html-->'

if (!SEO_BLOCK.test(template) || !template.includes(APP_HTML)) {
  throw new Error(
    'index.html doit contenir les marqueurs <!--seo--> ... <!--/seo--> et <!--app-html-->'
  )
}

for (const route of routes) {
  const appHtml = render(route.path)

  const html = template
    .replace(SEO_BLOCK, headFor(route))
    .replace(APP_HTML, appHtml)

  // /cv -> dist/cv.html (et non cv/index.html) : Netlify sert /cv directement,
  // sans redirection 301 vers /cv/ que certains bots ne suivent pas.
  const outFile =
    route.path === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, `${route.path}.html`)

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`pre-rendu ${route.path} -> ${path.relative(process.cwd(), outFile)}`)
}

// Sitemap genere depuis la meme source de routes (date = jour du build)
const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${lastmod}</lastmod></url>`
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('sitemap.xml genere')

// Page 404 statique : une URL inconnue renvoie un vrai code 404 (et non une
// copie de l'accueil en 200, que Google traite comme du contenu duplique).
const notFound = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Page introuvable - Nicolas Pandraud</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center;
        background: #0a0a0a; color: #e5e5e5; font-family: Inter, system-ui, sans-serif; text-align: center; }
      a { color: #fff; }
    </style>
  </head>
  <body>
    <main>
      <h1>Page introuvable</h1>
      <p><a href="/">Retour au portfolio de Nicolas Pandraud</a></p>
    </main>
  </body>
</html>
`
fs.writeFileSync(path.join(dist, '404.html'), notFound)
console.log('404.html genere')

// Regles Netlify generees depuis les routes : chaque route pointe explicitement
// vers son HTML pre-rendu. Toutes les pages sont pre-rendues : pas de fallback
// SPA, Netlify sert 404.html pour le reste.
const redirects = [
  '# Genere par prerender.js - ne pas editer a la main',
  // Ancienne adresse Netlify -> domaine principal (301 : Google transfere le referencement)
  'https://nicolas-pandraud.netlify.app/*  https://nicolas-pandraud.fr/:splat  301!',
  ...routes
    .filter((r) => r.path !== '/')
    .map((r) => `${r.path}  ${r.path}.html  200`),
].join('\n')

fs.writeFileSync(path.join(dist, '_redirects'), redirects + '\n')
console.log('_redirects genere')
