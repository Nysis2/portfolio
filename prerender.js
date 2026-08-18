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

const OG_IMAGE = `${SITE_URL}/aws-saa-badge.png`

const escape = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Construit les balises head specifiques a une route. */
function headFor({ path: routePath, title, description }) {
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
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ')
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

  const outFile =
    route.path === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, route.path, 'index.html')

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`pre-rendu ${route.path} -> ${path.relative(process.cwd(), outFile)}`)
}

// Sitemap genere depuis la meme source de routes
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc></url>`)
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log('sitemap.xml genere')

// Regles Netlify generees depuis les routes : chaque route pointe explicitement
// vers son HTML pre-rendu, le reste retombe sur l'index (fallback SPA).
const redirects = [
  '# Genere par prerender.js - ne pas editer a la main',
  ...routes
    .filter((r) => r.path !== '/')
    .map((r) => `${r.path}  ${r.path}/index.html  200`),
  '/*  /index.html  200',
].join('\n')

fs.writeFileSync(path.join(dist, '_redirects'), redirects + '\n')
console.log('_redirects genere')
