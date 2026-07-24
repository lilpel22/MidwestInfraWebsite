// Shared reader used by prerender + sitemap generation.
// Reads content/articles/*.md and returns { slug, date, title, category } records.

import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ARTICLES_DIR = resolve(__dirname, '..', 'content', 'articles')

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return {}
  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/)
    if (!m) continue
    let value = m[2].trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[m[1]] = value
  }
  return data
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export async function loadArticles() {
  let files
  try {
    files = await readdir(ARTICLES_DIR)
  } catch (err) {
    if (err.code === 'ENOENT') return []
    throw err
  }

  const md = files.filter((f) => f.endsWith('.md'))
  const articles = []
  for (const filename of md) {
    const raw = await readFile(join(ARTICLES_DIR, filename), 'utf8')
    const data = parseFrontmatter(raw)
    articles.push({
      slug: data.slug || slugFromFilename(filename),
      date: (data.date || '').slice(0, 10),
      title: data.title || 'Untitled',
      category: data.category || 'Uncategorized',
    })
  }

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1))
}
