// Post-build prerender: serves dist/ locally, visits each route with a headless
// browser, and saves the fully-rendered HTML back to disk so Googlebot sees
// real per-page titles, canonicals, and body content (not an empty SPA shell).

import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'
import { mkdir, writeFile } from 'node:fs/promises'
import puppeteer from 'puppeteer'
import sirv from 'sirv'
import { servicesData } from '../src/data/servicesData.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(__dirname, '..', 'dist')
const PORT = 4173

const routes = [
  '/about',
  '/contact',
  ...servicesData.map((s) => `/services/${s.slug}`),
  '/', // home last, since it overwrites the source template dist/index.html
]

async function main() {
  console.log(`\nPre-rendering ${routes.length} routes from ${DIST_DIR}`)

  const serve = sirv(DIST_DIR, { single: true, dev: false, etag: false })
  const server = createServer(serve)
  await new Promise((r) => server.listen(PORT, r))

  const browser = await puppeteer.launch({ headless: true })

  try {
    for (const route of routes) {
      const url = `http://localhost:${PORT}${route}`
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 900 })
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 })

      // Give useDocumentMeta's useEffect time to update <title> / canonical
      await new Promise((r) => setTimeout(r, 400))

      // Trigger whileInView animations so below-the-fold content is visible
      await page.evaluate(async () => {
        const step = 500
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y)
          await new Promise((r) => setTimeout(r, 80))
        }
        window.scrollTo(0, 0)
      })

      await new Promise((r) => setTimeout(r, 700))

      // Neutralize framer-motion's inline opacity:0 / translate so the saved
      // HTML is visible even before JS runs on the client.
      await page.evaluate(() => {
        document.querySelectorAll('[style]').forEach((el) => {
          const s = el.getAttribute('style') || ''
          const cleaned = s
            .replace(/opacity:\s*0[^;]*;?/gi, '')
            .replace(/transform:[^;]*(?:translate|scale)[^;]*;?/gi, '')
          el.setAttribute('style', cleaned)
        })
      })

      const html = await page.content()

      const outPath =
        route === '/'
          ? join(DIST_DIR, 'index.html')
          : join(DIST_DIR, route, 'index.html')

      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf8')
      await page.close()

      console.log(`  ✓ ${route.padEnd(48)} → ${outPath.replace(DIST_DIR, 'dist')}`)
    }
  } finally {
    await browser.close()
    server.close()
  }

  console.log(`\nDone — ${routes.length} routes pre-rendered.\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
