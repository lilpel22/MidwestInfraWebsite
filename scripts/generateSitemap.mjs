// Emits dist/sitemap.xml at build time. Combines a small hand-maintained list
// of static pages with the dynamic set of article URLs. Runs after prerender.

import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { servicesData } from '../src/data/servicesData.js'
import { loadArticles } from './articles.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(__dirname, '..', 'dist')
const SITE_URL = 'https://www.midwestinfra.biz'

const today = new Date().toISOString().slice(0, 10)

const staticUrls = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/about/', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact/', changefreq: 'yearly', priority: '0.7' },
  ...servicesData.map((s) => ({
    path: `/services/${s.slug}/`,
    changefreq: 'monthly',
    priority: '0.9',
  })),
  { path: '/articles/', changefreq: 'weekly', priority: '0.8' },
]

function urlBlock({ path, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

async function main() {
  const articles = await loadArticles()

  const staticEntries = staticUrls.map((u) => urlBlock({ ...u, lastmod: today }))

  const articleEntries = articles.map((a) =>
    urlBlock({
      path: `/articles/${a.slug}/`,
      lastmod: a.date || today,
      changefreq: 'monthly',
      priority: '0.7',
    })
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...articleEntries].join('\n')}
</urlset>
`

  const outPath = join(DIST_DIR, 'sitemap.xml')
  await writeFile(outPath, xml, 'utf8')
  console.log(
    `\nSitemap written to dist/sitemap.xml (${staticUrls.length + articles.length} URLs)\n`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
